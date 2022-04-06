import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-1.4.1 : Guide de présentation d'une demande de permis : Installations nucléaires et équipement réglementé de catégorie II", 
                dateModified: "2016-09-01",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc1-4-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Préface</h2>  <p>Ce document fait partie de la série de documents dapplication de la réglementation de la Commission canadienne de sûreté nucléaire (CCSN) portant sur les installations nucléaires de catégorie II. La liste complète de ces documents figure à la fin du document et également sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <p>Conformément à la <em>Loi sur la sûreté et la réglementation nucléaires</em> (LSRN) et à ses règlements dapplication, toute personne qui souhaite construire, exploiter ou déclasser une installation nucléaire de catégorie II ou avoir en sa possession, traiter, stocker, transporter, transférer, importer, exporter, utiliser ou abandonner des substances nucléaires ou faire lentretien dun équipement réglementé de catégorie II doit détenir un permis délivré par la CCSN.</p>  <p>Le document dapplication de la réglementation REGDOC-1.4.1, <em>Guide de présentation dune demande de permis : Installations nucléaires et équipement réglementé de catégorie II</em>, contient des instructions à lintention des demandeurs qui désirent présenter une demande de permis pour de léquipement réglementé et des installations de catégorie II, y compris des permis pour les générateurs de neutrons, les accélérateurs pour diagraphie géophysique, les accélérateurs industriels portatifs et mobiles, les irradiateurs de catégorie II et la curiethérapie manuelle.</p>  <p>Ce document réunit et remplace plusieurs guides de présentation de demande de permis, à savoir :</p>
<ul>
<li>RD/GD-289, <em>Guide de présentation dune demande de permis, Accélérateurs de catégorie II pour des applications autres que la radiothérapie</em></li>
<li>RD/GD-120, <em>Guide de présentation dune demande de permis, Radiothérapie</em></li>
<li>RD/GD-207, <em>Guide de présentation dune demande de permis, Entretien déquipement réglementé de catégorie II</em></li>
</ul>  <p>Les attentes énoncées dans ce guide reflètent les exigences énoncées dans la réglementation prise en vertu de la LSRN. En cas de différend entre les attentes contenues dans ce document et la réglementation, cette dernière prévaudra.</p>  <p>Les attentes énoncées dans ce document décrivent plus à fond les exigences réglementaires et indiquent aux demandeurs comment y satisfaire. On sattend à ce que les demandeurs examinent les attentes énoncées dans ce document et en tiennent compte; sils choisissent de ne pas les suivre, ils devraient expliquer pourquoi ils se proposent de satisfaire aux exigences réglementaires d&#39;une autre façon. Dans ce cas, le demandeur pourrait fournir des arguments démontrant que lesprit dune exigence réglementaire est quand même respecté.</p>  <p>Bien que lutilisation des formulaires de demande de permis connexes à ce guide ne soit pas une exigence spécifique pour lobtention dun permis, leur but est daider les demandeurs à présenter des renseignements complets et structurés à la Commission, de sorte que leur demande puisse être traitée aussi rapidement que possible. Les formulaires de demande sont disponibles sur la <a href="http://www.suretenucleaire.gc.ca/fra/resources/forms/index">page des formulaires de la CCSN</a>.</p>  <p>Le personnel de la CCSN peut fournir des renseignements supplémentaires sur demande. Veuillez communiquer avec la CCSN à <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a> pour les obtenir.</p>
<div className="alert alert-info">
<h3>Remarque importante :</h3>
<p>Ce document fait partie du fondement dautorisation dune installation ou dune activité réglementée si on sy réfère directement ou indirectement dans le permis (notamment dans des documents cités en référence du titulaire de permis).</p>
<p>Le fondement dautorisation établit les conditions limites du rendement acceptable pour une installation ou une activité réglementée et établit les bases du programme de conformité de la CCSN à légard de cette installation ou activité réglementée.</p>
<p>Dans le cas où le document est un élément du fondement dautorisation, le terme « doit » est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime une option ou une mesure conseillée ou acceptable dans les limites de ce document dapplication de la réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>
<p>Aucune information contenue dans le présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité de prendre connaissance de tous les règlements et de toutes les conditions de permis applicables et dy adhérer.</p>  </div>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table des matières</h2>
<ul>
<li><a href="#sec1"><strong>1. Introduction</strong></a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Portée</a></li>
<li><a href="#sec1-3">1.3 Dispositions législatives pertinentes</a></li>
<li><a href="#sec1-4">1.4 Organisation du guide</a></li>
<li><a href="#sec1-5">1.5 Terminologie</a></li>
<li><a href="#sec1-6">1.6 Symboles</a></li>
</ul></li>
<li><a href="#sec2"><strong>2. Processus</strong></a>
<ul>
<li><a href="#sec2-1">2.1 Demande de permis</a>
<ul>
<li><a href="#sec2-1-1">2.1.1 Formulaires de demande de permis</a></li>
<li><a href="#sec2-1-2">2.1.2 Présentation dune demande</a></li>
<li><a href="#sec2-1-3">2.1.3 Normes de traitement</a></li>
</ul></li>
<li><a href="#sec2-2">2.2 Modification dun permis</a></li>
<li><a href="#sec2-3">2.3 Renouvellement dun permis</a></li>
<li><a href="#sec2-4">2.4 Révocation dun permis</a></li>
<li><a href="#sec2-5">2.5 Période dautorisation</a></li>
<li><a href="#sec2-6">2.6 Transfert dun permis</a></li>
</ul></li>
<li><a href="#sec3"><strong>3. Comment remplir le formulaire de demande</strong></a>
<ul>
<li><a href="#PartA">PARTIE A : Informations générales</a>
<ul>
<li><a href="#PartA-1">A.1 Renseignements sur le demandeur</a></li>
<li><a href="#PartA-2">A.2 Activités et lieux autorisés</a></li>
<li><a href="#PartA-3">A.3 Substances nucléaires et équipement réglementé de catégorie II</a></li>
</ul></li>
<li><a href="#PartB">PARTIE B : Construction dune installation</a>
<ul>
<li><a href="#PartB-1">B.1 Conception de linstallation</a></li>
<li><a href="#PartB-2">B.2 Systèmes de sûreté &ndash; Installations nucléaires</a></li>
<li><a href="#PartB-3">B.3 Autres exigences</a></li>
</ul></li>
<li><a href="#PartC">PARTIE C : Mise en service</a>
<ul>
<li><a href="#PartC-1">C.1 Plan de mise en service</a></li>
</ul></li>
<li><a href="#PartD">PARTIE D : Système de gestion et programme de radioprotection</a>
<ul>
<li><a href="#PartD-1">D.1 Système de gestion</a></li>
<li><a href="#PartD-2">D.2 Radioprotection</a></li>
<li><a href="#PartD-3">D.3 Gestion de la performance humaine</a></li>
<li><a href="#PartD-4">D.4 Gestion des déchets</a></li>
<li><a href="#PartD-5">D.5 Sécurité</a></li>
<li><a href="#PartD-6">D.6 Emballage et transport</a></li>
<li><a href="#PartD-7">D.7 Aptitude fonctionnelle</a></li>
</ul></li>
<li><a href="#PartE">PARTIE E : Exploitation courante et confirmation de la conception de linstallation</a>
<ul>
<li><a href="#PartE-1">E.1 Exploitation courante</a></li>
<li><a href="#PartE-2">E.2 Confirmation de la mise en œuvre de la conception de linstallation</a></li>
</ul></li>
<li><a href="#PartF">PARTIE F : Déclassement</a></a>
<ul>
<li><a href="#PartF-1">F.1 Plan de déclassement</a></li>
</ul></li>
<li><a href="#PartG">PARTIE G : Renouvellement de permis</a>
<ul>
<li><a href="#PartG-1">G.1 Information pour le renouvellement dun permis</a></li>
</ul></li>
</ul></li>
<li><a href="#AppA"><strong>Annexe A : Attentes relatives à loctroi de permis et exigences réglementaires</strong></a></li>
<li><a href="#AppB"><strong>Annexe B : Définitions des domaines de sûreté et de réglementation</strong></a></li>
<li><a href="#AppC"><strong>Annexe C : Phases dautorisation</strong></a></li>
<li><a href="#AppD"><strong>Annexe D : Activités autorisées</strong></a></li>
<li><a href="#AppE"><strong>Annexe E : Classification des salles</strong></a></li>
<li><a href="#AppF"><strong>Annexe F : Étalonnage des radiamètres</strong></a></li>
<li><a href="#AppG"><strong>Annexe G : Surveillance de la contamination radioactive</strong></a></li>
<li><a href="#AppH"><strong>Annexe H : Catégories de substances nucléaires</strong></a></li>
<li><a href="#AppI"><strong>Annexe I : Classement des sources scellées</strong></a></li>
<li><a href="#AppJ"><strong>Annexe J : Élimination des composants radioactifs</strong></a></li>
<li><a href="#glossary"><strong>Glossaire</strong></a></li>
<li><a href="#abbrev"><strong>Abréviations</strong></a></li>
<li><a href="#AddInfo"><strong>Renseignements supplémentaires</strong></a></li>   </ul>
</div>
<div className="clear"></div>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Ce guide fournit des instructions au demandeur ou titulaire dun permis sur la façon de préparer et de présenter une demande de permis de la Commission canadienne de sûreté nucléaire (CCSN)  pour :</p>
<ul>
<li>construire, exploiter ou déclasser une installation nucléaire de catégorie II</li>
<li>exploiter un équipement réglementé de catégorie II ou en faire lentretien</li>
<li>avoir en sa possession, utiliser, stocker, transférer, transporter, importer ou exporter des substances nucléaires utilisées pour la curiethérapie manuelle</li>
<li>avoir en sa possession, utiliser, traiter, stocker, transférer, transporter, importer, exporter ou abandonner des substances nucléaires qui sont associées aux activités susmentionnées ou qui en découlent</li>
</ul>  <p>Il est à noter quun permis de catégorie I pourrait être nécessaire si lactivité totale pour tous les isotopes traités ou utilisés dépasse 10<sup>15</sup> becquerels (Bq) au cours dune même année civile.</p>
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
<h3 id="sec1-2">1.2 Portée</h3>  <p>La <em>Loi sur la sûreté et la réglementation nucléaires</em> (LSRN) autorise la CCSN à délivrer un permis aux demandeurs qui, selon elle, sont qualifiés et prennent les mesures nécessaires pour préserver la sûreté, la santé et la sécurité des personnes et protéger lenvironnement, et qui satisfont aux exigences et aux autres conditions de la LSRN.</p>   <p>Tous les renseignements requis dans une demande de permis sont basés sur la LSRN et ses règlements dapplication, qui sont administrés par la CCSN. L<a href="#AppA">annexe A : Attentes relatives à loctroi de permis et exigences réglementaire</a> contient les références à la réglementation pour ce qui est des renseignements requis dans le cadre du processus de demande décrit dans ce  guide.</p>  <p>Le demandeur doit démontrer, dans sa demande, quil est capable de maintenir un programme de radioprotection efficace et quil est déterminé à le faire. Ce guide devrait aider le demandeur à fournir linformation requise.</p>  <p>Les formulaires de demande de permis connexes sont structurés selon les différents types dactivités ou dinstallations réglementées et visent à aider les demandeurs à préparer et à présenter une demande complète.</p>  <p>On peut aussi utiliser ce guide et les formulaires connexes pour demander la levée des restrictions dans un permis dexploitation aux fins de mise en service (« modification du permis en vue de lexploitation courante »).</p>
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
<h3 id="sec1-3">1.3 Dispositions législatives pertinentes</h3>  <p>Les dispositions législatives concernant ce guide sont les suivantes :</p>
<ol>
<li>Le paragraphe 24(4) de la LSRN spécifie que : « La Commission ne délivre, ne renouvelle, ne modifie ou ne remplace une licence ou un permis ou nen autorise le transfert que si elle est davis que lauteur de la demande ou, sil sagit dune demande dautorisation de transfert, le cessionnaire, à la fois : a) est compétent pour exercer les activités visées par la licence ou le permis; b) prendra, dans le cadre de ces activités, les mesures voulues pour préserver la santé et la sécurité des personnes, pour protéger lenvironnement, pour maintenir la sécurité nationale et pour respecter les obligations internationales que le Canada a assumées. »</li>
<li>Les paragraphes a), b), c) et e) de larticle 26 de la LSRN spécifient que : « Sous réserve des règlements, il est interdit, sauf en conformité avec une licence ou un permis : a) davoir en sa possession, de transférer, dimporter, dexporter, dutiliser ou dabandonner des substances nucléaires, de léquipement réglementé ou des renseignements réglementés; b) de produire, de raffiner, de convertir, denrichir, de traiter, de retraiter, demballer, de transporter, de gérer, de stocker provisoirement ou en permanence ou dévacuer une substance nucléaire ou de procéder à lextraction minière de substances nucléaires; c) de produire ou dentretenir de léquipement réglementé; e) de préparer lemplacement dune installation nucléaire, de la construire, de lexploiter, de la modifier, de la déclasser ou de labandonner. »</li>
<li>Larticle 3 du <em>Règlement général sur la sûreté et la réglementation nucléaires</em> précise les renseignements que la demande de permis doit comprendre.</li>
<li>Les articles 3, 4, 5, 6 et 7 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em> précisent plus amplement les renseignements qui sont requis dans le cas dune demande de permis de construction, dexploitation, ou de déclassement dune installation nucléaire de catégorie II et dentretien de léquipement réglementé de catégorie II.</li>
<li>Larticle 3 du <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em> présente les informations additionnelles générales que doit contenir une demande de permis pour posséder, utiliser, stocker, transférer, importer ou exporter des substances nucléaires.</li>
<li>Le sous-alinéa 4a)(iii) du <em>Règlement sur la radioprotection</em> spécifie que : « Le titulaire de permis met en œuvre un programme de radioprotection et, dans le cadre de ce programme maintient le degré dexposition aux produits de filiation du radon ainsi que la dose efficace et la dose équivalente qui sont reçues par la personne, et engagées à son égard, au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs économiques et sociaux, par (i) la maîtrise des méthodes de travail par la direction, (ii) les qualifications et la formation du personnel, (iii) le contrôle de lexposition du personnel et du public au rayonnement, (iv) la préparation aux situations inhabituelles.</li>
<li>Le paragraphe 21(1) du <em>Règlement sur lemballage et le transport des substances nucléaires</em> spécifie que : « Il est interdit à quiconque, sauf à lexpéditeur et au destinataire du colis, douvrir un colis à moins que a) des mesures soient prises pour que les personnes ne reçoivent pas des doses de rayonnement supérieures aux limites prévues dans le <em>Règlement sur la radioprotection</em>; et b) le colis soit ouvert en présence dun expert en radioprotection ».</li>
<li>Larticle 2 du <em>Règlement sur les droits pour le recouvrement des coûts de la Commission canadienne de sûreté nucléaire</em> indique les installations qui sont exemptées de lapplication du Règlement.</li>
<li>La partie 3 du <em>Règlement sur les droits pour le recouvrement des coûts de la Commission canadienne de sûreté nucléaire</em> donne les détails du calcul des droits sappliquant aux installations énumérées dans lannexe 1 du Règlement.</li>
<li>La partie 5 du <em>Règlement sur les droits pour le recouvrement des coûts de la Commission canadienne de sûreté nucléaire</em> donne les détails du calcul des droits sappliquant aux installations qui ne sont pas énumérées dans lannexe 1.</li>
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
<div id="1.4"></div>
<h3 id="sec1-4">1.4 Organisation du guide</h3>  <p>Les attentes sont présentées dans ce guide en sept parties. La partie qui décrit en détail les attentes relatives au programme de radioprotection est elle-même divisée par domaines de sûreté et de réglementation (DSR). <a href="#AppB">Annexe B : Définitions des domaines de sûreté et de réglementation</a> contient les définitions utilisées dans les DSR.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.5"></div>
<h3 id="sec1-5">1.5 Terminologie</h3>  <p>Dans ce guide :</p>
<ul>
<li>« appareil de téléthérapie » désigne un appareil de téléthérapie à source radioactive utilisé en radiothérapie, par exemple les unités de téléthérapie au cobalt et les unités de téléthérapie stéréotaxiques</li>
<li>« installation » désigne une installation nucléaire de catégorie II et comprend léquipement réglementé installé</li>
<li>« équipement réglementé » peut également désigner léquipement réglementé de catégorie II qui nest pas placé dans une installation nucléaire (par exemple équipement mobile ou portatif)</li>
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
<div id="1.6"></div>
<h3 id="sec1-6">1.6 Symboles</h3>
<div className="mrgn-lft-0">  <img src="/images/1.4.1-ex.png" className="pull-left image-actual"  alt="" />  <p>Indique des renseignements importants dont le demandeur doit prendre note avant daller plus loin.</p>  </div>  <div className="clear"></div>  <div className="mrgn-lft-0">  <img src="/images/1.4.1-inf.png" className="pull-left image-actual mrgn-bttm-lg" alt="" />  <p>Indique, sur le formulaire de demande de permis, des renseignements qui pourraient être inclus dans lannexe du permis appelée « Documents du permis ». Le permis exige du titulaire quil se conforme aux documents figurant dans cette annexe.</p>
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
<div id="2"></div>
<h2 id="sec2">2. Processus</h2>
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
<h3 id="sec2-1">2.1 Demande de permis</h3>  <p>Le demandeur doit fournir les renseignements décrits dans ce guide lorsquil demande un nouveau permis ou procède au renouvellement dun permis de la Commission pour :</p>
<ul>
<li>la construction, lexploitation ou le déclassement dune installation nucléaire de catégorie II qui comprend un équipement réglementé installé</li>
<li>lexploitation dun équipement réglementé de catégorie II qui nest pas dans une installation</li>
<li>lentretien dun équipement réglementé de catégorie II</li>
<li>la possession, lutilisation, le stockage, le transfert, limportation ou lexportation de substances nucléaires utilisées en curiethérapie manuelle</li>
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
<div id="2.1.1"></div>
<h4 id="sec2-1-1">2.1.1	Formulaires de demande de permis</h4>  <p>Les demandeurs peuvent utiliser les formulaires de demande de permis pour des installations de catégorie II pour fournir à la CCSN les renseignements requis. Les demandeurs trouveront les formulaires sur le <a href="http://suretenucleaire.gc.ca/fra/resources/forms/index">site Web de la CCSN</a>.</p>   <p>Bien que lutilisation des formulaires de demande de permis ne soit pas une exigence explicite pour lobtention dun permis, ils ont été conçus pour aider les demandeurs à fournir des informations complètes et structurées à la Commission de façon à ce que la demande puisse être traitée le plus rapidement possible. Toute pièce jointe doit comporter un titre et faire référence aux sections de la demande auxquelles elle se rattache.</p>  <p>Pour de plus amples renseignements, les demandeurs devraient communiquer avec la CCSN :</p>
<ul>
<li>téléphone : 1-888-229-2672</li>
<li>télécopieur : 613-995-5086</li>
<li>courriel : <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a></li>
</ul>  <h5>2.1.1.1	Choix dun formulaire de demande</h5>  <p>La CCSN offre des formulaires de demande de permis pour chaque type dinstallation ou dactivité réglementée. Le tableau 1 indique les différents types dinstallations et dactivités.</p>
<table className="width-100">  <caption className="text-left"><strong>Tableau 1 : Formulaire de demande de permis, par type dinstallation</strong></caption>  <tr>
<th>Formulaire de demande</th>
<th>Installations nucléaires et équipement réglementé de catégorie II</th>  </tr>  <tr>
<td className="text-center">Installations nucléaires de catégorie II,  Généralités</td>
<td><p>
<ul>
<li>accélérateurs médicaux ou appareils de téléthérapie</li>
<li>appareils de curiethérapie à projecteur de source télécommandé</li>
<li>accélérateurs industriels</li>
<li>accélérateurs de recherche</li>
<li>générateurs de neutrons</li>
<li>irradiateurs, autres que le type piscine</li>
<li>accélérateurs ou appareils de téléthérapie à des fins vétérinaires</li>
<li>développement et essai dun équipement réglementé de catégorie II</li>
<li>entretien de lun ou lautre des équipements ci-dessus par lexploitant (entretien à linterne)</li>
<li>toute autre installation ou activité qui ne figure pas encore dans le tableau, mais qui le serait en vertu de la LSRN</li>
</ul></p></td>  </tr>  <tr>
<td className="text-center">Installations de catégorie II, accélérateur pour la production disotopes</td>
<td><p>
<ul>
<li>installations de production disotopes et installations connexes de traitement disotopes</li>
<li>entretien des équipements et/ou des installations ci-dessus par lexploitant (entretien à linterne)</li>
</ul></p></td>  </tr>  <tr>
<td className="text-center">Installations de catégorie II, irradiateur de type piscine</td>
<td><p>
<ul>
<li>installations dirradiateurs de type piscine et équipement connexe pour la manipulation des produits</li>
<li>entretien des équipements et/ou des installations ci-dessus par lexploitant (entretien à linterne)</li>
</ul></p></td>  </tr>  <tr>
<td className="text-center">Installations de catégorie II, exploitation déquipement réglementé</td>
<td><p>
<ul>
<li>accélérateurs mobiles</li>
<li>accélérateurs portatifs</li>
<li>générateurs de neutrons</li>
<li>accélérateurs pour diagraphie géophysique</li>
<li>entretien de l&#39;un ou l&#39;autre des équipements ci-dessus par l&#39;exploitant (entretien à l&#39;interne)</li>
</ul></p></td>  </tr>  <tr>
<td className="text-center">Installations de catégorie II, curiethérapie manuelle</td>
<td>Pour la possession, lutilisation, le stockage, le transfert, le transport, limportation ou lexportation de substances nucléaires utilisées dans les activités de curiethérapie manuelle</td>  </tr>  <tr>
<td className="text-center">Installations de catégorie II, entretien</td>
<td>Entretien par le fabricant ou un tiers seulement (les demandeurs qui présentent une demande de permis dexploitation devraient également demander un permis dentretien par lexploitant, dans la même demande)</td>  </tr>  </table>
<p>Les demandeurs dun permis dexploitation dun équipement réglementé non contenu dans une installation spécialisée, mais installé en permanence, p. ex., un générateur de neutrons utilisé pour les mesures de densité, devraient utiliser le formulaire de demande pour Installations de catégorie II, exploitation déquipement réglementé.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.2"></div>
<h4 id="sec2-1-2">2.1.2	Présentation dune demande</h4>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-lg">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Les renseignements réglementés, tels que définis à larticle 21 du RGSRN, comme les détails du programme de sécurité, peuvent être transmis seulement par des moyens sécurisés, par exemple sous forme de lettre ou de courriel chiffré. Lenvoi de courriels non chiffrés contenant ces renseignements est interdit. Les directives relatives à la protection et à la transmission de renseignements réglementés figurent dans le document REGDOC-2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em>. Ce document se trouve sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  </div>  </div>  <div className="clear"></div>  <p>Avant de soumettre une demande, le demandeur devrait sassurer que :</p>
<ul>
<li>tous les renseignements requis sont fournis dans la demande</li>
<li>tous les documents à lappui sont annexés au formulaire de demande, identifiés et renvoient à la section appropriée du formulaire</li>
<li>le paiement est joint si le demandeur est assujetti au <em>Règlement sur les droits pour le recouvrement des coûts de la Commission canadienne de sûreté nucléaire</em>
<ul>
<li>Pour payer par carte de crédit, communiquer avec le Groupe pour le recouvrement des coûts de la CCSN au 613-995-5894 ou sans frais au 1-888-229-2672</li>
</ul></li>
</ul>  <p>Transmettre la demande complète à la CCSN en utilisant le bouton « Soumettre » figurant sur le formulaire de demande.</p>  <p>Le demandeur peut également envoyer par courrier la demande complète à ladresse suivante :</p>  <p>Commission canadienne de sûreté nucléaire<br />
Direction de la réglementation des substances nucléaires<br />
C.P. 1046, succursale B<br />
280, rue Slater<br />
Ottawa (Ontario)  K1P 5S9</p>  <p>Le demandeur devrait conserver une copie de la demande dûment remplie dans ses dossiers. Tous les renseignements fournis sont assujettis aux dispositions de la <em>Loi sur laccès à linformation</em> et de la <em>Loi sur la protection des renseignements personnels</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.3"></div>
<h4 id="sec2-1-3">2.1.3	Normes de traitement</h4>  <p>La CCSN sefforce de respecter les normes publiées relatives au traitement des demandes de permis. Les normes affichées sur le site Web de la CCSN indiquent les durées de traitement pour les demandes de permis qui sont claires, pertinentes et complètes. Si les demandes sont incomplètes ou manquent de clarté, les durées de traitement pourraient dépasser les normes publiées.</p>
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
<h3 id="sec2-2">2.2	Modification dun permis</h3>  <p>Pour demander une modification de permis, autre quune modification pour permettre l&#39;exploitation courante de léquipement, le demandeur doit faire une demande à la CCSN et y inclure les renseignements suivants :</p>
<ul>
<li>une liste des changements aux renseignements contenus dans la plus récente demande de permis</li>
<li>une description des effets que les modifications proposées pourraient avoir sur le terrain, les zones, les bâtiments, les structures, les composants, léquipement, les systèmes ou les substances nucléaires</li>
<li>la date de début proposée et la date dachèvement prévue de toutes les modifications décrites dans la demande</li>
</ul>  <p>Il est acceptable de demander une modification de permis par courriel.</p>  <p>Si les renseignements déjà présentés à la CCSN dans le cadre dune demande de permis nont pas changé, le demandeur peut faire référence :</p>
<ul>
<li>aux renseignements figurant en annexe du permis en vigueur</li>
<li>aux renseignements fournis dans les demandes précédentes</li>
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
<div id="2.3"></div>
<h3 id="sec2-3">2.3	Renouvellement dun permis</h3>  <p>Le demandeur voulant obtenir le renouvellement dun permis doit fournir linformation demandée dans les parties pertinentes de ce guide. Si les renseignements sont les mêmes que ceux qui ont déjà été soumis à la Commission dans le cadre dune demande de permis précédente, le demandeur peut faire référence à lannexe du permis courant ou à la demande précédente plutôt que de fournir les mêmes renseignements.</p>
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
<h3 id="sec2-4">2.4	Révocation dun permis</h3>  <p>Le titulaire dun permis en vigueur peut demander sa révocation en faisant une demande écrite à la CCSN. Cette demande peut être envoyée par courriel. Le personnel de la CCSN pourrait communiquer avec le demandeur si des renseignements supplémentaires sont nécessaires pour donner suite à la demande.</p>
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
<h3 id="sec2-5">2.5	Période dautorisation</h3>  <p>Les permis dexploitation consolidés et les permis dexploitation sont habituellement valides pour 10 ans. Tous les autres permis sont habituellement valides pour cinq ans. Cependant, la Commission ou un fonctionnaire désigné pourrait, à leur discrétion, délivrer un permis pour une période plus courte ou plus longue. Des périodes dautorisation précises peuvent être demandées pour des projets à long terme et pourraient être accordées par la Commission ou un fonctionnaire désigné.</p>
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
<h3 id="sec2-6">2.6	Transfert dun permis</h3>  <p>Si la demande porte sur le transfert dun permis de la CCSN, le demandeur doit remplir le formulaire de transfert de permis. Ce formulaire se trouve sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>. Le formulaire rempli peut être envoyé à la CCSN par la poste ou par courriel à ladresse <a href="mailto:forms-formulaires@cnsc-ccsn.gc.ca">forms-formulaires@cnsc-ccsn.gc.ca</a>.</p>
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
<h2 id="sec3">3. Comment remplir le formulaire de demande</h2>  <p>Dans ce guide, les exigences relatives aux différents permis sont divisées en sept parties.</p>
<ul>
<li>Partie A : Informations générales</li>
<li>Partie B : Construction dune installation</li>
<li>Partie C : Mise en service</li>
<li>Partie D : Système de gestion et programme de radioprotection</li>
<li>Partie E : Exploitation courante et confirmation de la conception de linstallation</li>
<li>Partie F : Déclassement</li>
<li>Partie G : Renouvellement de permis</li>
</ul>  <p>Certaines parties ou sections du guide ne sappliquent pas à toutes les installations et activités réglementées. Fournir uniquement les renseignements qui se rapportent aux activités ou aux installations proposées.</p>  <p>Le tableau 2 indique les parties et les sections du guide qui sappliquent à chaque phase dautorisation. <a href="#AppC">Annexe C : Phases dautorisation</a> contient une description de chaque phase dautorisation. Le demandeur devrait fournir uniquement les renseignements qui sappliquent à lactivité envisagée. Les sections obligatoires sont en vert (avec la lettre &laquo;&nbsp;M&nbsp;&raquo;). Les sections qui nont pas à être remolies pour une phase dautorisation ou une activité particulière sont en gris (avec la lettre &laquo;&nbsp;N&nbsp;&raquo;). Les sections facultatives sont indiquées en jaune (avec la lettre &laquo;&nbsp;O&nbsp;&raquo;). Il y a lieu de noter que les sections qui sont facultatives à une phase sont habituellement obligatoires à la phase suivante dautorisation de linstallation. Le demandeur doit fournir de nouveau les renseignements exigés aux sections A.1 à A.3 à chaque phase dautorisation. Les demandeurs nont pas à remplir de nouveau les autres sections, sauf si les renseignements qui y figurent ont été modifiés. Les renvois aux documents précédemment fournis et qui étaient requis pour une autre demande de permis devraient, au minimum, inclure le numéro du permis, le titre et la date du document et les numéros des pages. Il est préférable de fournir le numéro de document de la CCSN sil est disponible.</p>  <p><a href="#AppC">Annexe C : Phases dautorisation</a> contient une description des phases dautorisation présentées au tableau 2.</p>
<table className="width-100 table">  <caption>Tableau 2 : Sections requises dans la demande, par type dinstallation et phase dautorisation</caption>  <tr>
<th className="text-center">Installation ou activité</th>
<th className="text-center">Phase d&#39;autorisation</th>
<th>A<br />1</th>
<th>A<br />2</th>
<th>A<br />3</th>
<th>B<br />1</th>
<th>B<br />2</th>
<th>B<br />3</th>
<th>C<br />1</th>
<th>D<br />1</th>
<th>D<br />2</th>
<th>D<br />3</th>
<th>D<br />4</th>
<th>D<br />5</th>
<th>D<br />6</th>
<th>D<br />7</th>
<th>E<br />1</th>
<th>E<br />2</th>
<th>F<br />1</th>   </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Généralités</td>
<td>Construction</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Généralités</td>
<td>Mise en service*</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>   </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Généralités</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>   </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Généralités</td>
<td>Déclassement**</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td>Installation fixe<br />
&ndash; API</td>
<td>Construction</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Installation fixe<br />
&ndash; API</td>
<td>Mise en service</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Installation fixe<br />
&ndash; API</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Installation fixe<br />
&ndash; API</td>
<td>Déclassement</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Type piscine</td>
<td>Construction</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Type piscine</td>
<td>Mise en service</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Type piscine</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Installation fixe<br />
&ndash; Type piscine</td>
<td>Déclassement</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td>Exploitation dun équipement réglementé</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Curiethérapie manuelle</td>
<td>Autre</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Entretien par un tiers</td>
<td>Entretien</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  </table>
<p><strong>Nota:</strong>  <p>*&nbsp;Les titulaires de permis qui désirent remplacer des accélérateurs considérés comme de léquipement réglementé de catégorie II sans modifier la conception de linstallation peuvent omettre la phase de construction et demander un permis dexploitation aux fins de mise en service, pourvu que le nouvel équipement réglementé ait le même isocentre, une grandeur du champ identique ou similaire et une énergie identique ou inférieure à ceux de léquipement quil remplace. Toutefois, le demandeur doit fournir les renseignements suivants en plus de ce qui est requis pour un permis de mise en service :</p>
<ul>
<li>les sections remplies B.1.2 à B.1.5; les demandeurs pourraient faire référence aux renseignements précédemment présentés sils nont pas été modifiés; on devrait accorder une attention particulière aux modifications de la charge de travail et du débit de dose</li>
<li>la section B.2 remplie, même sil ny a pas de changement</li>
</ul>  <p>**&nbsp;Les titulaires de permis qui désirent déclasser un appareil de curiethérapie à projecteur de source télécommandé nont pas besoin dun permis de déclassement. Cependant, ils doivent, avec la demande de révocation du permis dexploitation, démontrer que linstallation est sécuritaire en vue dune occupation non contrôlée et quelle peut être occupée à des fins publiques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA"></div>
<h3 id="PartA">PARTIE A : Informations générales</h3>  <p>Cette partie décrit linformation que le demandeur doit fournir, entre autres le type de permis demandé, le nom de la personne ou de lorganisation qui demande le permis, le statut juridique de lorganisation, les activités visées par le permis, léquipement réglementé et les substances nucléaires qui seront visés par le permis, ainsi que le lieu où le demandeur exercera ces activités. Selon le type de permis demandé, le demandeur pourrait devoir fournir des renseignements supplémentaires exigés dans dautres parties de ce guide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.1"></div>
<h4 id="PartA-1">A.1 Renseignements sur le demandeur</h4>  <h5>A.1.1 Type de demande</h5>  <p>Spécifier les activités qui seront visées par le permis, la phase dautorisation et, le cas échéant, le numéro du permis actuel.</p>
<h5>A.1.2 Langue du permis</h5>  <p>Spécifier dans quelle langue officielle le permis doit être délivré.</p>
<h5>A.1.3 Renseignements sur le demandeur</h5>  <p><strong>Demandeur</strong> &ndash; Spécifier le nom de la personne ou de la société qui soumet la demande de permis. Indiquer le nom tel quil figure sur la preuve de statut juridique, par exemple, la preuve de constitution en personne morale ou de propriété exclusive.</p>  <p>Une personne ne peut être nommée comme demandeur que si elle est le propriétaire exclusif ou que si elle sera uniquement et entièrement responsable de lactivité visée par le permis.</p>  <p><strong>Adresse du siège social</strong> &ndash; Spécifier ladresse municipale du siège social du demandeur, y compris le numéro et le nom de rue, le numéro de route rurale, la ville, la province ou le territoire et le code postal, sil y a lieu. Une boîte postale nest pas une adresse acceptable pour un siège social.</p>  <p><strong>Adresse postale</strong> &ndash; Spécifier ladresse postale si elle diffère de ladresse du siège social, y compris le nom de rue, le numéro municipal ou le numéro de route rurale, la ville, la province ou le territoire et le code postal, sil y a lieu. Une boîte postale est une adresse acceptable.</p>  <p>À défaut dune adresse postale, le permis délivré à la suite de la demande sera envoyé à ladresse du siège social.</p>
<h5>A.1.4 Preuve de statut juridique</h5>  <p>Fournir une preuve de statut juridique, par exemple, une preuve de constitution en personne morale, un numéro de société ou encore une charte.</p>  <p>Pour une institution publique, spécifier le titre de la loi habilitante en vertu de laquelle linstitution a été constituée.</p>  <p>Si le demandeur est une société, fournir la preuve de constitution en personne morale et un rapport officiel du profil de la société, y compris :</p>
<ul>
<li>la dénomination sociale</li>
<li>le numéro de la société</li>
<li>la date de constitution</li>
<li>ladresse du siège social</li>
</ul>  <p>Les sociétés constituées sous le régime fédéral en vertu de la <em>Loi canadienne sur les sociétés par actions</em>, L.R.C., ch. C-44, peuvent sadresser à Industrie Canada pour obtenir un rapport officiel du profil de la société. Dans le cas des sociétés constituées sous un régime provincial, des rapports de profil similaires sont disponibles auprès du ministère responsable de la constitution des sociétés dans la province en question.</p>  <p>Les demandeurs devraient fournir le numéro dentreprise qui leur a été assigné par lAgence du revenu du Canada.</p>
<h5>A.1.5 Accès du public à linformation</h5>  <p>Spécifier si une partie de la demande de permis fait lobjet dune demande dexemption de la politique sur laccès public à linformation, comme il est décrit ci-dessous.</p>  <p>À titre dinstitution fédérale, la Commission est assujettie à la <em>Loi sur laccès à linformation</em> (LAI) et à la <em>Loi sur la protection des renseignements personnels</em>. En vertu du paragraphe 4(1) de la LAI, tous les citoyens canadiens et résidents permanents au Canada ont accès aux documents relevant dune institution fédérale. Par conséquent, le public peut avoir accès, sur demande, à tous les renseignements accompagnant une demande de permis, sous réserve des exceptions énumérées à larticle 20 de la LAI. Les demandes dexemption doivent être faites par écrit à la CCSN et inclure les raisons de lexemption demandée. Il y a lieu de noter que les demandes dexemption peuvent être refusées si elles ne sont pas suffisamment justifiées.</p>
<ul>
<li>Si les renseignements doivent être rendus publics, le demandeur doit cocher la case NON (Aucune exemption demandée) sur le formulaire de demande.</li>
<li>Sil demande que les renseignements fournis ne soient pas divulgués, le demandeur doit cocher la case OUI (Exemption demandée) et citer en référence les exceptions justifiant cette demande.</li>
</ul>
<h5>A.1.6 Personne-ressource pour la facturation des droits</h5>  <p>Fournir le nom et les coordonnées de la personne responsable du point de vue administratif du paiement des droits de permis. Si le demandeur est exempté des droits en vertu du <em>Règlement sur les droits pour le recouvrement des coûts de la CCSN</em>, il na pas à remplir cette section. Ces règlements sont disponibles sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<h5>A.1.7 Garanties financières</h5>  <p>Le paragraphe 24(5) de la LSRN permet à la Commission, entre autres, de joindre au permis la condition que le titulaire de permis verse une garantie financière sous une forme que la Commission juge acceptable. Pour de plus amples renseignements sur les garanties financières et les autorisations, consulter le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <p>Si cela est requis, indiquer la valeur et la forme de la garantie financière pour le permis demandé.</p>
<h5>A.1.8 Représentant autorisé du demandeur ou du titulaire de permis</h5>  <p>Fournir le nom et le titre de la personne qui soumet la demande au nom du demandeur. Cette personne devra avoir lautorité dagir au nom du demandeur. Les demandeurs qui désirent aviser la CCSN de changements touchant les personnes autorisées à agir en leur nom devraient remplir le formulaire « Mandataires du demandeur et du titulaire de permis », disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.2"></div>
<h4 id="PartA-2">A.2 Activités et lieux autorisés</h4>  <p>Spécifier les activités liées à lexploitation par le demandeur qui sont visées par le <em>Règlement sur les droits pour le recouvrement des coûts de la Commission canadienne de sûreté nucléaire</em>.  <h5>A.2.1 Type de demande</h5>  <p>Spécifier toutes les activités que le demandeur a lintention dexercer en utilisant les substances nucléaires visées par le permis. Consulter l<a href="#AppD">annexe D : Activités autorisées</a> au sujet du choix des activités autorisées.</p>  <p>Dans les cas où lon voudrait faire des recherches avec un équipement réglementé de catégorie II qui est principalement utilisé autrement, cet équipement réglementé doit être autorisé par un permis qui tient compte de cette utilisation principale.</p>
<h5>A.2.2 Lieu principal dutilisation ou de stockage, ou les deux &ndash; Installations</h5>  <p>Fournir ladresse de lemplacement où linstallation sera construite, exploitée ou déclassée, et où léquipement réglementé ou les substances nucléaires seront utilisés, stockés ou les deux. Ladresse doit, à tout le moins, indiquer le numéro de la pièce ou du bâtiment, le numéro et nom de rue, la ville, la province et le code postal. Utiliser les définitions de l<a href="#AppE">annexe E : Classification des salles</a> pour préciser la classification des pièces où léquipement et les substances nucléaires seront utilisés ou stockés.</p>  <p>Dans le cas des demandes de permis de construction, fournir la preuve que le demandeur est le propriétaire du site ou, si les lieux sont loués, fournir une lettre du propriétaire du site confirmant que le demandeur est autorisé à construire et exploiter une installation nucléaire à cet endroit.  Pour toutes les demandes de nouveaux permis, si les locaux sont loués, fournir une lettre du propriétaire confirmant quil na aucune objection à ce que ceux-ci soient cités dans un permis pour utilisation déquipement réglementé ou utilisation ou stockage de substances nucléaires.</p>
<h5>A.2.3 Lieu principal dutilisation ou de stockage, ou les deux &ndash; Équipement réglementé</h5>  <p>Pour toutes les demandes de nouveaux permis, si les locaux sont loués, fournir une lettre du propriétaire confirmant quil na aucune objection à ce que les locaux soient cités dans un permis pour utilisation déquipement réglementé ou utilisation ou stockage de substances nucléaires.</p>  <p>Dans le cas de lexploitation dun équipement réglementé qui nest pas placé dans une installation, fournir les adresses ou les emplacements où léquipement sera exploité ou stocké.</p>
<h5>A.2.4 Lieu principal dutilisation ou de stockage, ou les deux &ndash; Curiethérapie manuelle</h5>  <p>Fournir ladresse de lemplacement où les sources scellées utilisées pour les traitements de curiethérapie manuelle seront utilisées ou stockées. Ladresse devrait, à tout le moins, indiquer le numéro de la pièce ou du bâtiment, le numéro et nom de rue, la ville, la province et le code postal. Spécifier la classification des pièces où ces sources seront utilisées ou stockées, en utilisant les définitions de l<a href="#AppE">annexe E : Classification des salles</a>.</p>
<h5>A.2.5 Lieu principal dutilisation ou de stockage, ou les deux &ndash; Substances nucléaires non scellées</h5>  <p>Fournir ladresse de lemplacement où les substances nucléaires non scellées seront traitées, utilisées ou stockées. Ladresse devrait, à tout le moins, indiquer le numéro de la pièce ou du bâtiment, le numéro et nom de rue, la ville, la province et le code postal. Spécifier la classification des pièces où les substances nucléaires non scellées seront traitées, utilisées ou stockées, en utilisant les définitions de l<a href="#AppE">annexe E : Classification des salles</a>.</p>  <p>Dans le cas des demandes de nouveaux permis, si les lieux sont loués, fournir une lettre du propriétaire confirmant quil na aucune objection à ce que ceux ci soient cités dans un permis pour le traitement, lutilisation ou le stockage de substances nucléaires.</p>
<h5>A.2.6 Autres lieux</h5>  <p>Si les substances nucléaires ou léquipement réglementé couverts par le permis seront utilisés ou stockées à des endroits autres que les lieux principaux indiqués aux sections A.2.2 à A.2.5, fournir ladresse de ces lieux. Ladresse devrait, à tout le moins, indiquer le numéro de la pièce ou du bâtiment, le numéro et nom de rue, la ville, la province et le code postal.</p>  <p>Pour chaque lieu, préciser si les substances nucléaires y seront utilisées ou stockées. Des lieux additionnels peuvent être indiqués dans un document joint en annexe.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.3"></div>
<h4 id="PartA-3">A.3 Substances nucléaires et équipement réglementé de catégorie II</h4>  <h5>A.3.1 Équipement réglementé de catégorie II</h5>  <p>À moins dêtre exempté en vertu du paragraphe 10b) du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>, léquipement réglementé de catégorie II doit être homologué par la Commission avant que son utilisation soit autorisée au Canada. Léquipement réglementé utilisé uniquement pour la recherche scientifique ou à des fins de développement requiert un permis, mais est exempté de lhomologation en vertu du paragraphe 10b) du Règlement, à condition que la recherche ne soit pas effectuée sur des êtres humains. Pour en savoir plus sur lhomologation de léquipement réglementé, le demandeur peut consulter le document dapplication de la réglementation RD/GD-254 de la CCSN, <em>Homologation des appareils à rayonnement ou de léquipement réglementé de catégorie II</em>, disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Personne nest autorisé à utiliser de léquipement réglementé de catégorie II nayant pas été homologué par la Commission, à moins que ledit équipement ne soit exempté de lhomologation en vertu du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>.</p>  </div>  </div>  <div className="clear"></div>
<p>Pour toute demande de permis relative à un équipement réglementé de catégorie II  fournir   les renseignements suivants :</p>
<ul>
<li>le numéro du certificat</li>
<li>le nom du fabricant</li>
<li>le nom du modèle</li>
<li>le cas échéant, lisotope et lactivité maximale de chaque source contenue dans léquipement réglementé ou dans le cas des accélérateurs médicaux et vétérinaires, lénergie maximale de laccélérateur</li>
<li>pour tous les autres accélérateurs, lénergie maximale et le courant maximal, le type de faisceau et son utilisation envisagée, par exemple, les essais non destructifs, la gammagraphie industrielle ou la stérilisation</li>
<li>une description des travaux dentretien ou de maintenance prévus pour léquipement réglementé de catégorie II, par exemple :
<ul>
<li>aucun</li>
<li>entretien préventif &ndash; à savoir les activités dentretien de base et les inspections périodiques</li>
<li>entretien correctif &ndash; à savoir les activités dentretien préventif de base, le dépannage et les réparations ou ajustements mineurs</li>
<li>entretien intensif &ndash; à savoir lentretien correctif, le remplacement des composants principaux, la remise à neuf de léquipement réglementé, linstallation ou le remplacement de léquipement réglementé ou de substances nucléaires contenues dans léquipement réglementé, ou encore le démantèlement de léquipement réglementé</li>
</ul></li>
</ul>   <p>Si léquipement réglementé est conçu et construit sur mesure par le demandeur, fournir des dessins techniques détaillés illustrant la conception de léquipement proposé, ainsi que ses spécifications.</p>
<h5>A.3.2 Substances nucléaires &ndash; Sources scellées et composants activés</h5>  <p>Certaines sources scellées, comme celles qui sont utilisées dans les traitements de curiethérapie manuelle, ne sont pas incluses dans léquipement réglementé de catégorie II. Avec le temps, le demandeur sera en possession de sources de remplacement ou épuisées. En outre, dautres sources étalons non exemptées pourraient également se trouver en sa possession. Si ces sources ne sont pas déjà couvertes par un permis de la CCSN, fournir pour chaque source:</p>
<ul>
<li>le nom du fabricant</li>
<li>le nom du modèle de la source</li>
<li>lisotope et lactivité maximale de la source</li>
</ul>  <p>Spécifier si les composants activés dun accélérateur seront stockés sur les lieux ou non.</p>
<h5>A.3.3 Cibles de laccélérateur &ndash; Production disotopes</h5>  <p>Spécifier les cibles utilisées pour la production disotopes. À tout le moins, il faut spécifier le numéro de la pièce ou du modèle du fabricant (si connu), la réaction nucléaire utilisée pour produire lisotope désiré à partir de cette cible, le matériau de la cible, le courant du faisceau et la durée de bombardement par cycle dirradiation, ainsi que le rendement maximal à la fin de chaque irradiation (« FDI »).</p>  <p>Le tableau 3 montre un format type pour fournir ces renseignements.</p>  <p>Le personnel de la CCSN peut demander des renseignements supplémentaires au sujet des cibles, y compris leurs spécifications et dessins techniques, dans le cadre dune demande de permis. Si la demande porte sur la conception et lessai de nouvelles cibles, fournir une description détaillée du programme dassurance de la qualité qui sera utilisé pour la conception et la mise à lessai des cibles, ainsi que les procédures de sûreté qui seront en place lors de ces essais, comme il est requis à la section D.1.6.</p>
<table className="width-100">  <caption className="text-left"><strong>Tableau 3 : Exemple de tableau de cibles pour un accélérateur de production disotopes</strong></caption>  <tr>
<th>Pièce de cible n<sup>o</sup></th>
<th>Réaction nucléaire</th>
<th>Produit</th>
<th>Matériau</th>
<th>Courant maximal du faisceau (&micro;A)</th>
<th>Durée du bombardement (min)</th>
<th>Activité maximale (FDI) (GBq)</th>  </tr>  <tr>
<td>Zr-ABC-1</td>
<td><sup>89</sup>Y(p,n)<sup>89</sup>Zr</td>
<td><sup>89</sup>Zr Métal</td>
<td>Rhodium/Corps<br />
Havar/Fen&ecirc;tre<br />
Aluminium/Corps<br /></td>
<td className="text-center">30</td>
<td className="text-center">120</td>
<td className="text-center">2</td>  </tr>  <tr>
<td>Zn-CDE-1</td>
<td><sup>63</sup>Cu(p,n)<br />
<sup>63</sup>Zn</td>
<td><sup>63</sup>Zn Métal</td>
<td>Rhodium/Corps<br />
Havar/Fen&ecirc;tre<br />
Aluminium/Corps<br /></td>
<td className="text-center">100</td>
<td className="text-center">450</td>
<td className="text-center">250</td>  </tr>  <tr>
<td>Tc-99-XYZ-1</td>
<td><sup>100</sup>Mo(p,2n)<br />
<sup>99m</sup>Tc</td>
<td><sup>99m</sup>Tc Métal</td>
<td>Rhodium/Corps<br />
Havar/Fen&ecirc;tre<br />
Aluminium/Corps<br /></td>
<td className="text-center">10</td>
<td className="text-center">60</td>
<td className="text-center">20</td>  </tr>  <tr>
<td>FGH-212-C11</td>
<td><sup>14</sup>N(p,&alpha;)<sup>11</sup>C</td>
<td><sup>11</sup>C Gaz</td>
<td>Havar/Fen&ecirc;tre<br />
Aluminum/Corps<br /></td>
<td className="text-center">40</td>
<td className="text-center">60</td>
<td className="text-center">150</td>  </tr>  <tr>
<td>TUV-213-F-20</td>
<td><sup>18</sup>O(p,n)<sup>18</sup>F</td>
<td><sup>18</sup>F Liquide</td>
<td>Havar/Fen&ecirc;tre<br />
Niobium/Corps<br /></td>
<td className="text-center">100</td>
<td className="text-center">45</td>
<td className="text-center">185</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB"></div>
<h3 id="PartB">PARTIE B : Construction dune installation</h3>  <p>Cette partie décrit les renseignements que le demandeur doit fournir pour permettre lévaluation technique dune demande de permis de construction visant, entre autres, la conception de linstallation, la charge de travail proposée, les doses prévues, les calculs des débits de dose et des doses annuelles, les systèmes de sûreté de linstallation, le cas échéant, la production disotopes et les installations de traitement des isotopes ainsi que les exigences particulières pour les irradiateurs de type piscine.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB.1"></div>
<h4 id="PartB-1">B.1 Conception de linstallation</h4>  <p>Le demandeur doit démontrer que la conception de linstallation assure la protection adéquate des travailleurs, des membres du public et de lenvironnement.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Une fois le permis de construction délivré, linstallation doit être construite conformément aux plans de conception proposés. Toute modification subséquente à la conception de linstallation nécessitera une modification de permis, sujette à lapprobation de la Commission ou du fonctionnaire désigné.</p>  </div>  </div>  <div className="clear"></div>
<h5>B.1.1 Plans et dessins de linstallation</h5>  <p>Fournir les plans, y compris les dessins en élévation de linstallation proposée. Ces plans et dessins doivent indiquer :</p>
<ul>
<li>le nord</li>
<li>léchelle (50:1, 1 cm par m, etc.)</li>
<li>lemplacement de linstallation par rapport aux zones adjacentes qui sont occupées ou sont susceptibles de lêtre</li>
<li>lemplacement et lutilisation des zones adjacentes, p. ex., les zones publiques, les bureaux, les laboratoires, les vestiaires, les toilettes et les débarras, y compris les zones au dessus et en dessous de linstallation; pour chaque pièce, spécifier le numéro de la pièce, son nom ou donner sa description (ces renseignements seront utilisés pour déterminer les facteurs doccupation de chaque zone ou pièce, selon les exigences de la section B.1.2)</li>
<li>la position et lorientation de léquipement réglementé et de dispositifs connexes, à lintérieur de linstallation</li>
<li>lorientation du faisceau primaire, le cas échéant</li>
<li>dans le cas dune unité isocentrique, le plan de rotation du faisceau</li>
<li>lemplacement, le type,  lépaisseur et la densité des matériaux de blindage employés de tous les côtés de linstallation, y compris le plancher et le plafond</li>
<li>si une porte dentrée blindée est prévue dans les plans, spécifier le type, lépaisseur et larrangement des matériaux de blindage dans la porte</li>
<li>lemplacement et les dimensions des voies daccès, des sorties, des conduits de service et des autres pénétrations et vides dans le blindage</li>
</ul>  <p>Les plans et dessins de linstallation devraient être suffisamment détaillés pour permettre au personnel de la CCSN de procéder à son évaluation. Dhabitude, le personnel de la CCSN demande des dessins montrant les sections transversales verticales et latérales de linstallation. Dans la mesure du possible, fournir ces plans et ces dessins en format électronique, avec une résolution suffisante pour permettre lagrandissement des zones dintérêt tout en préservant léchelle.</p>
<h5>B.1.2	Classification des zones adjacentes</h5>  <p>Fournir les types et les facteurs doccupation de toutes les zones adjacentes à linstallation.</p>  <p>Lutilisation des zones adjacentes à une installation nucléaire de catégorie II, leur type doccupation (par exemple pour le grand public, ou pour les travailleurs du secteur nucléaire [TSN]), et leurs facteurs doccupation servent à déterminer les exigences relatives au blindage de linstallation.</p>  <p>Spécifier lutilisation envisagée (par exemple, locaux à bureaux, couloirs, zones de contrôle) de toutes les zones adjacentes à linstallation, y compris les zones au-dessus et en dessous de cette dernière. Daprès lutilisation prévue de chacune de ces zones et lévaluation du blindage, classifier chaque zone comme :</p>  <p><strong>Zone non contrôlée :</strong> Dans une zone non contrôlée, laccès nest pas limité.</p>  <p><strong>Zone contrôlée :</strong> Seul le personnel ayant reçu une formation et dûment autorisé a accès à une zone contrôlée. Pour chaque zone contrôlée,  indiquer les mesures de contrôle daccès envisagées. Ces mesures devraient être proportionnelles aux doses de rayonnement pouvant être reçues dans cette zone.</p>  <p><strong>Zone dexclusion :</strong> Les zones dexclusion doivent être dotées dun système de verrouillage asservi à léquipement réglementé afin que personne ne puisse y pénétrer lorsque léquipement émet de la radiation. Les systèmes de verrouillage requis sont décrits à la partie B.2.1.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>La désignation dune « zone dexclusion » est acceptable seulement pour les espaces entièrement clos dont les entrées sont interverrouillées à léquipement de façon à faire cesser lirradiation si quelquun tente dentrer dans la zone.</p>
</div>  </div>  <div className="clear"></div>
<p>Le facteur doccupation (T) de chaque zone est la fraction des heures normales dutilisation de linstallation durant lesquelles on peut raisonnablement sattendre à ce quune personne occupe une zone donnée. Les facteurs doccupation sont habituellement choisis daprès des valeurs de référence standards, comme celles qui figurent dans le tableau B1 du document NCRP151. Ces valeurs sont généralement prudentes. Si le demandeur choisit dutiliser une valeur plus faible pour une zone particulière, par exemple, pour le toit au-dessus dune salle de traitement, il devrait justifier le choix de ce facteur doccupation. En règle générale, lutilisation de facteurs doccupation très faibles requiert une sorte de barrière physique qui restreint laccès à la zone.</p>   <p>Les types et les facteurs doccupation des zones adjacentes à linstallation peuvent être ajoutés directement dans un tableau des doses annuelles, pourvu quils soient clairement identifiés dans le tableau. Sassurer que ces zones peuvent être indiquées sur les plans et les dessins soumis.</p>
<h5>B.1.3 Charge de travail &ndash; Généralités</h5>  <p>Fournir une estimation ou un calcul de la charge de travail maximale annuelle prévue de linstallation.</p>  <p>La charge de travail représente lutilisation prévue de léquipement réglementé pendant une période définie, généralement un an, de façon que lon puisse la lier directement à la dose de rayonnement reçue,  au cours de cette période, par les personnes occupant les zones adjacentes. En général, cela nécessite à la fois lestimation du temps total de fonctionnement de léquipement réglementé, ou dexposition de la source, et une mesure ou estimation du débit de dose de rayonnement à des endroits de référence bien définis et dans les conditions normales de fonctionnement.</p>  <p>La charge de travail sert à vérifier si la conception du blindage de linstallation est adéquate. Par conséquent, le calcul de la charge de travail doit tenir compte de toutes les activités liées à lexploitation, notamment :</p>
<ul>
<li>lutilisation prévue de léquipement</li>
<li>la recherche</li>
<li>lassurance de la qualité</li>
<li>la maintenance et lentretien</li>
</ul>  <p>Avec les calculs, le demandeur devrait fournir une description des hypothèses utilisées et spécifier la valeur de chaque paramètre utilisé.</p>  <h6>B.1.3.1 Charge de travail &ndash; Accélérateurs médicaux ou vétérinaires et appareils de téléthérapie</h6>  <p>Outre les types dactivités mentionnées à la section B.1.3, la charge de travail des accélérateurs médicaux ou vétérinaires et des appareils de téléthérapie devrait faire une distinction nette entre :</p>
<ul>
<li>lutilisation à différentes énergies des photons</li>
<li>lutilisation à laide délectrons</li>
</ul>  <p>Si on prévoit faire des traitements à laide de la radiothérapie conformationnelle avec modulation dintensité (RCMI), des traitements stéréotaxiques ou des traitements à distance étendue, spécifier également :</p>
<ul>
<li>lénergie utilisée</li>
<li>la fraction de la charge de travail totale du faisceau primaire délivrée au moyen de ces techniques</li>
<li>le facteur RCMI prévu (rapport du nombre total dunités moniteurs (UM) produites sur la dose du faisceau primaire à lisocentre)</li>
</ul>  <h6>B.1.3.2 Charge de travail &ndash; Irradiateurs et appareils de curiethérapie à projecteur de source télécommandé</h6>  <p>On peut obtenir une estimation de la charge de travail daprès le temps total pendant lequel les sources seraient typiquement exposées et lactivité des sources (à savoir en GBq-heures ou léquivalent). Aux fins de la conception du blindage, cette valeur doit être convertie en une quantité dosimétrique équivalente, par exemple, le kerma dans lair à 1 m de la source, sur un an.</p>  <p>Outre les types dactivités énumérés à la section B.1.3, la charge de travail pour les irradiateurs et les appareils de curiethérapie à projecteur de source télécommandé doit également tenir compte de létalonnage périodique de léquipement.</p>  <h6>B.1.3.3 Charge de travail &ndash; Accélérateurs industriels</h6>  <p>Les accélérateurs délectrons tels que ceux qui sont utilisés pour la gammagraphie industrielle, le traitement des matériaux ou la stérilisation sont normalement conçus pour produire un faisceau de rayons X en accélérant les électrons sur une cible de métal lourd. Cette cible peut être intégrée à laccélérateur, ou encore placée vis-à-vis de louverture du guide dondes des électrons. Dans de tels cas, le débit de dose (en Gy/min ou équivalent) dans un endroit fixe du faisceau (par exemple, à 1 mètre de la cible), multiplié par le nombre total dheures de fonctionnement par an, pour chaque activité liée à lexploitation mentionnée à la section B.1.3, fournira généralement une indication appropriée de la charge de travail totale de laccélérateur.</p>  <h6>B.1.3.4 Charge de travail &ndash; Accélérateurs de recherche</h6>  <p>Dans les installations de recherche, les types de rayonnement, leurs énergies et les débits de dose produits par laccélérateur peuvent varier considérablement en fonction de la conception et de la configuration de laccélérateur, du type de particules accélérées, de la tension daccélération, du courant du faisceau, de la conception de la cible, des matériaux de la cible, et de son enceinte. Dans de tels cas, le demandeur devrait faire une analyse détaillée de lutilisation prévue de laccélérateur et des activités mentionnées à la section B.1.3, afin de caractériser la charge de travail dune manière qui permet destimer les doses.</p>  <h6>B.1.3.5 Charge de travail &ndash; Accélérateurs pour la production disotopes</h6>  <p>Pour chaque isotope devant être produit, indiquer la quantité maximale totale que le demandeur aura en sa possession en tout temps aux termes du permis, ainsi que lactivité maximale totale pour chaque isotope produit au cours dune année civile donnée.</p>  <p>Pour déterminer la quantité maximale qui peut être traitée ou utilisée, il faut tenir compte des facteurs suivants :</p>
<ul>
<li>la quantité maximale à la fin de lirradiation (FDI) qui peut être produite à laide dune cible donnée</li>
<li>le nombre de cibles utilisées ainsi que le nombre de cycles de production par jour</li>
<li>le délai entre la production et lexpédition du produit à lutilisateur final</li>
<li>les quantités conservées sur place à des fins de contrôle de la qualité ou comme déchets</li>
<li>la demi-vie de lisotope</li>
</ul>  <p>Dans le tableau de charge de travail, spécifier les réactions nucléaires qui donnent les produits voulus, ainsi que les combinaisons faisceau/cible utilisées. Indiquer lactivité FDI maximale produite par cycle, ainsi que les quantités annuelles produites et la durée annuelle totale des bombardements. Inclure dans la charge de travail le temps utilisé pour effectuer les activités applicables mentionnées à la section B.1.3.</p>  <h6>B.1.3.6 Charge de travail &ndash; Irradiateurs de type piscine</h6>  <p>On peut évaluer la charge de travail en calculant le produit de la durée dexposition totale des sources par lactivité des sources (à savoir en GBq-heures, ou léquivalent).</p>  <p>Le calcul de la charge de travail devrait tenir compte des activités applicables liées à lexploitation mentionnées à la section B.1.3.</p>
<h5>B.1.4 Objectifs de dose nominale</h5>  <p>Spécifier les doses prévues pour les travailleurs du secteur nucléaire (TSN), le personnel qui nest pas un TSN et les membres du public qui pourraient occuper les zones adjacentes à linstallation.</p>  <p>Le demandeur doit démontrer que ces doses prévues assureront que les doses aux travailleurs et aux membres du public qui pourraient occuper les zones adjacentes à linstallation demeureront au niveau le plus bas quil soit raisonnablement possible datteindre (niveau ALARA).</p>   <p>Les doses prévues, qui respectent les recommandations contenues dans le guide de la CCSN G-129, révision 1, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnablement possible datteindre » (ALARA)</em>, seront dans la plupart des cas acceptées, car elles respectent le principe ALARA, sans autres justifications. Ce guide est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <p>Le guide G-129 recommande que les doses soient égales ou inférieures à :</p>
<ul>
<li>1 mSv/année pour les TSN</li>
<li>0,05 mSv/année pour le personnel qui nest pas TSN et pour les membres du public</li>
</ul>  <p>Fournir une analyse coûts/avantages pour justifier toute dose annuelle supérieure aux valeurs recommandées dans le guide G-129.</p>  <p>La CCSN nacceptera en aucune circonstance des doses prévues pour les TSN et les membres du public qui sont supérieures aux limites de dose spécifiées à larticle 13 du <em>Règlement sur la radioprotection</em>.</p>
<h5>B.1.5	Calcul des doses annuelles et des débits de dose &ndash; Généralités</h5>  <p>Fournir les calculs détaillés des doses annuelles et des débits de dose maximaux qui sont prévus dans chacune des zones adjacentes mentionnées à la section B.1.2. Énoncer les équations, décrire les hypothèses et spécifier la valeur de chaque paramètre utilisé.</p>   <p>Le demandeur doit démontrer que, selon les conditions dexploitation prévues, la conception du blindage fait en sorte que les doses de rayonnement aux personnes occupant ces zones ne dépasseront pas les doses prévues.</p>  <p>Dans la demande :</p>
<ul>
<li>chaque point de calcul devrait être associé à un emplacement indiqué sur les plans et les dessins de linstallation</li>
<li>au moins un point de calcul doit être situé juste à lextérieur de la barrière daccès de linstallation, par exemple, une porte ou une barrière optique</li>
<li>chaque calcul devrait tenir compte des facteurs suivants :
<ul>
<li>la charge de travail (W) nominale de linstallation</li>
<li>la distribution de la charge de travail dans les différentes orientations du faisceau, le facteur dutilisation (U), le cas échéant</li>
<li>la distribution de la charge de travail dans les différents modes dexploitation, le cas échéant</li>
<li>le type (public ou TSN) et le degré doccupation (T) de chaque zone</li>
<li>la contribution des différents composants des champs de rayonnement produits par léquipement, y compris le faisceau primaire, le rayonnement de fuite, le rayonnement diffusé et les neutrons.<br />
Nota : Le calcul des doses annuelles et des débits de dose neutroniques nest pas requis pour les installations daccélérateur délectrons qui fonctionnent à des énergies de photons inférieures à 10 MV ou pour les installations daccélérateur délectrons à haute énergie (&ge;&nbsp;10 MV) qui sont rénovées afin dêtre utilisées à des énergies inférieures (&lt;&nbsp;10 MV)</li>
<li>la contribution de toutes les sources de rayonnement, par exemple, le débit de dose maximal en un point dans un couloir commun entre deux installations</li>
<li>les différents matériaux utilisés pour le blindage et leurs caractéristiques par rapport aux types de rayonnement et aux énergies produites par léquipement</li>
</ul></li>
<li>les paramètres de calcul devraient être basés sur des valeurs de référence standards pour les facteurs comme les couches datténuation au dixième du blindage, les taux de fuite de rayonnement de léquipement, les facteurs de rayonnement diffusé et les facteurs doccupation; si ces paramètres ne sont pas disponibles, par exemple, en raison de variations dans la composition et la densité du béton lourd ou si des paramètres non standards sont utilisés comme des facteurs doccupation inférieurs à 1/40, le demandeur devrait justifier les valeurs utilisées</li>
<li>le débit de dose instantané à chaque point de calcul devrait être calculé en utilisant les conditions dexploitation les plus conservatrices, par exemple lénergie maximale, le débit de dose maximal ou le courant maximal, latténuation minimale par le blindage et lactivité maximale de la source; ces calculs visent à :
<ul>
<li>fournir des valeurs de référence pour la comparaison aux débits de dose mesurés qui seront obtenus dans le cadre dun contrôle radiologique</li>
<li>déterminer les endroits où il pourrait être nécessaire dafficher les symboles de mise en garde contre les rayonnements, conformément aux exigences du paragraphe 21b) du <em>Règlement sur la radioprotection</em> de la CCSN</li>
</ul></li>
<li>si des simulations de Monte-Carlo ou dautres logiciels commerciaux de calcul du blindage sont utilisés, le demandeur devrait :
<ul>
<li>identifier le code, par exemple MCNPX, ou tout autre progiciel utilisé, comme Alice91, ainsi que les paramètres principaux dentrée employés dans la simulation ou les calculs</li>
<li>fournir une brève description de la simulation (par exemple, géométrie, matériaux, définition de la source, résultats de la simulation, doses, graphiques)</li>
<li>fournir les copies des fichiers en lecture et en écriture (« input/output files »)</li>
<li>décrire les techniques de blindage employées, par exemple, réduction de la variance, fenêtres de pondération</li>
<li>fournir les graphiques des résultats de la simulation (« Mesh Tally »)</li>
</ul></li>
</ul>  <h6>B.1.5.1 Calcul des doses annuelles et des débits de dose &ndash; Accélérateurs</h6>  <p>Fournir les calculs des doses annuelles et des débits de dose instantanés quune personne qui pourrait occuper les zones adjacentes à linstallation pourrait recevoir. Énoncer les équations, décrire les hypothèses et spécifier la valeur de chaque paramètre utilisé.</p>  <p>Les calculs devraient tenir compte des facteurs suivants :</p>
<ul>
<li>la charge de travail de laccélérateur</li>
<li>le terme source, à savoir le calcul ou une estimation du rayonnement gamma et neutronique instantané produit pendant le bombardement pour chaque combinaison faisceau/cible/réaction, le cas échéant</li>
<li>les spécifications de conception et la configuration des cibles proposées, le cas échéant</li>
<li>le type et lépaisseur des matériaux employés comme blindage</li>
<li>les propriétés du blindage et ses facteurs de transmission pour les types et les énergies du rayonnement produit par laccélérateur</li>
<li>la diffusion du rayonnement dans les labyrinthes dentrée, dans les conduits ainsi que dans les autres pénétrations dans le blindage</li>
</ul>  <p>Dans le cas des installations de production disotopes, les débits de dose calculés et lestimation des doses annuelles au personnel de linstallation devraient inclure explicitement une estimation des doses suivantes :</p>
<ul>
<li>Doses annuelles (efficaces) pour le corps entier en mSv/année provenant :
<ul>
<li>de lexploitation de léquipement réglementé, y compris la mise en service</li>
<li>du reconditionnement des cibles de laccélérateur ou de lentretien des composants activés</li>
<li>du transfert du produit de laccélérateur aux installations de traitement des isotopes, le cas échéant</li>
<li>de toute activité de traitement effectuée en vertu du permis</li>
<li>de lemballage des isotopes en vue de leur expédition</li>
<li>des rejets accidentels dans lenvironnement, actuels et potentiels (par exemple, les rejets par les cheminées), le cas échéant</li>
</ul></li>
<li>Doses annuelles (équivalentes) aux extrémités en mSv/année provenant :
<ul>
<li>du reconditionnement ou du remplacement des cibles de laccélérateur ou de lentretien de composants activés (par exemple, des feuilles de stripage)</li>
<li>des activités liées au traitement des isotopes, au contrôle de la qualité, à lemballage et à la décontamination</li>
</ul></li>  </ul>  <p>Les paramètres suivants devraient également être utilisés dans le calcul de la dose pour le transfert des isotopes produits par les accélérateurs jusquaux installations de traitement, pour les activités de traitement et pour lemballage des isotopes en vue de leur expédition :</p>
<ul>
<li>le type et lactivité des isotopes</li>
<li>la proximité par rapport à la source</li>
<li>le blindage dans les cellules de haute activité, les écrans de verre au plomb et les contenants de stockage ou demballage</li>
<li>la durée de chaque procédure</li>
<li>le nombre de procédures par année</li>
</ul>
<h5>B.1.6 Évaluation de lactivation de lair et de la production dozone &ndash; Accélérateurs industriels délectrons et irradiateurs de type piscine</h5>  <p>Fournir une évaluation du système de ventilation envisagé, qui démontre quil est adéquat compte tenu des facteurs suivants :</p>
<ul>
<li>la concentration dozone et des autres gaz toxiques</li>
<li>les doses de rayonnement que le personnel pourrait recevoir à cause de lazote 13 et de loxygène 15</li>
</ul>
<h5>B.1.7 Description des cibles de production disotopes</h5>  <p>Fournir les renseignements suivants :</p>  <ul>
<li>les dessins et les spécifications techniques des cibles de production disotopes</li>
<li>une évaluation du rejet potentiel de radioactivité dû à la défaillance dune cible</li>  </ul>  <p>Si lon prévoit le développement de cibles expérimentales, fournir aussi les renseignements suivants :</p>
<ul>
<li>les dessins et les spécifications techniques des cibles proposées</li>
<li>le programme dassurance de la qualité pour la conception et lessai des cibles afin de garantir quelles sont entièrement compatibles avec les conditions dirradiation prévues</li>
<li>toute autre procédure de sûreté pour permettre toutes les configurations expérimentales prévues</li>
</ul>
<h5>B.1.8 Description des installations de traitement disotopes</h5>  <p>Les sections du guide qui se rapportent au traitement des isotopes ne sont applicables que lorsque laccélérateur et les installations de traitement connexes sont intégrés dans un seul site de production de produits radiopharmaceutiques, et que la quantité totale de matières radioactives devant être traitée est inférieure à 10<sup>15</sup> Bq/année. Si les isotopes produits par laccélérateur doivent être expédiés à un site autre que celui de laccélérateur pour y être traités, leur traitement doit être autorisé par un permis distinct, conformément au <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>.</p>  <p>Fournir les dessins illustrant la configuration des installations de traitement, y compris :</p>
<ul>
<li>léchelle</li>
<li>lemplacement de tous les principaux composants du système de traitement, y compris les cellules de haute activité</li>
<li>lemplacement de linstallation de traitement par rapport à laccélérateur et aux zones adjacentes qui sont occupées ou sont susceptibles de lêtre</li>
<li>le cas échéant, lemplacement des conduites de transfert utilisées pour acheminer les isotopes depuis laccélérateur jusquà linstallation de traitement, y compris les détails relatifs au blindage, aux avertisseurs et aux panneaux indicateurs de rayonnement devant être installés le long de ces conduites</li>
</ul>  <p>Dans la mesure du possible, fournir ces plans et ces dessins en format électronique, avec une résolution suffisante pour permettre lagrandissement des zones dintérêt tout en préservant léchelle.</p>  <p>En outre, fournir la description :</p>
<ul>
<li>de la tuyauterie, des vannes et des raccords reliant la cible aux postes de traitement extérieures à laccélérateur, y compris les spécifications du fabricant montrant que la tuyauterie et les raccords sont compatibles avec les substances chimiques transportées, les pressions employées ainsi que les doses de rayonnement prévues; inclure dans la description les spécifications des régulateurs de gaz et des autres composants critiques du système de transfert</li>
<li>des procédés chimiques utilisés, y compris les méthodes et léquipement de manipulation des radio-isotopes à chaque étape de la production; le demandeur doit démontrer que les composants sont physiquement et chimiquement compatibles avec les substances manipulées</li>
<li>du système de ventilation des hottes daspiration, des émanations radiochimiques et des cellules de haute activité, y compris les détails sur leur matière filtrante</li>
</ul>  <p>Le demandeur doit également fournir le formulaire dûment rempli de lévaluation de la conception des laboratoires de substances nucléaires et des salles de médecine nucléaire, conformément au document GD-52 de la CCSN, <em>Guide de conception des laboratoires de substances nucléaires et des salles de médecine nucléaire</em>, disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<h5>B.1.9 Description des cellules radiochimiques de haute activité et des stations de traitement</h5>  <p>Fournir une description des cellules de haute activité ou des autres contenants blindés utilisés pour la radiochimie.</p>  <p>La description devrait inclure les calculs ou les résultats des mesures prises pour démontrer que le blindage des cellules de haute activité ou aux contenants est adéquat et garantit que les doses qui pourraient être reçues par le personnel et le public respectent le principe ALARA. Inclure une description de tout outil de manipulation à distance, du blindage portatif ou du contenant blindé utilisés pour réduire davantage les doses.</p>
<h5>B.1.10 Transfert et traitement des isotopes</h5>  <p>Fournir une description détaillée du transfert et du traitement des isotopes, y compris :</p>
<ul>
<li>la méthode employée pour le transfert du produit de la cible jusquà la cellule de traitement</li>
<li>la durée du processus de transfert</li>
<li>la description des procédures de traitement, y compris la séquence des étapes, les endroits où les isotopes seront manipulés, les agents chimiques utilisés, léquipement employé, ainsi que la durée estimée de chaque étape</li>
<li>la description des activités de contrôle de la qualité du produit, y compris la quantité de produit utilisée en Bq, la méthode employée pour vérifier lactivité du produit, la séquence des étapes, les endroits où chaque isotope sera manipulé, et la durée estimée de chaque étape des activités de contrôle de la qualité</li>
<li>la description du processus demballage préalable au transport</li>
</ul>
<h5>B.1.11 Dispositifs darrêt du faisceau</h5>  <p>Si certaines parties des murs, du plafond ou du plancher de linstallation ne sont pas conçues pour protéger adéquatement les zones adjacentes contre le faisceau direct, il faudra restreindre physiquement le pointage du faisceau primaire dans ces directions. Fournir une description des moyens électriques, mécaniques ou physiques qui sont utilisés pour empêcher le faisceau primaire dêtre dirigé vers ces barrières.</p>  <p>Si lorientation du faisceau primaire est limitée par des « arrêts de faisceau virtuels » contrôlés par logiciel ou micro logiciel, comme cest le cas dans les dispositifs de radiothérapie par bras robotique, indiquer sur les dessins architecturaux soumis les parties des murs, du plafond ou des planchers dans linstallation qui ne sont pas des barrières primaires. Dans le cas des accélérateurs qui utilisent des dispositifs darrêt de faisceau, comme les cages de Faraday, fournir leur description et démontrer quelles sont adéquates. Inclure dans la description une estimation des débits de dose de rayonnement dans les zones adjacentes à laccélérateur lorsque le dispositif darrêt de faisceau fonctionne.</p>
<h5>B.1.12 Mesures de sécurité</h5>  <p>Pour les sources scellées présentant un risque moyen ou élevé, le demandeur doit mettre en place des mesures de sécurité techniques qui empêcheront laccès non autorisé à ces sources et qui les protégeront contre un enlèvement illégal ou sabotage.</p>  <p>Consulter le document REGDOC-2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em>, pour de plus amples renseignements et directives au sujet de la transmission sécurisée des renseignements détaillés du programme de sécurité. Ce document est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Les renseignements réglementés, par exemple, les détails du programme de sécurité peuvent être transmis seulement par des moyens sécurisés, notamment par courrier. Lenvoi de courriels non cryptés contenant ces renseignements est interdit.</p>
</div>  </div>  <div className="clear"></div>
<p>Dans son programme de sécurité, le demandeur doit décrire en détail les mesures de sécurité techniques prévues, y compris la description du système de détection des intrusions et de toutes les barrières physiques en place. Confirmer dans la demande que cette information a été soumise de façon sécurisée à la CCSN.</p>
<h5>B.1.13 Autres exigences pour les irradiateurs de type piscine</h5>  <p>Pour les irradiateurs de type piscine, fournir les renseignements démontrant la conformité aux sections suivantes de la norme N43.10-2001 de la norme American National Standards Institute (ANSI) : <span lang="en"><em>Safe Design and Use of Panoramic, Wet Source Storage Gamma Irradiators and Dry Source Storage Gamma Irradiators</em></span> :</p>
<ul>
<li>Section 7 : <span lang="en">Operational Safety Features</span> (éléments opérationnels de la sûreté)</li>
<li>Section 9 : <span lang="en">Source Storage</span> (stockage des sources)</li>
<li>Section 10 : <span lang="en">Control Identification</span> (mesures de contrôle)</li>
<li>Section 11.4 : <span lang="en">Underwater Tools and Servicing</span> (outils submersibles et entretien sous leau)</li>
</ul>
<h5>B.1.14 Autres considérations techniques &ndash; Installations de production disotopes</h5>  <p>Pour les installations de production disotopes, fournir les renseignements supplémentaires suivants :</p>
<ul>
<li>lemplacement et les spécifications du système de ventilation, lemplacement et les dimensions des conduits de ventilation et les caractéristiques du système de filtration</li>
<li>lemplacement de toute cuve de rétention ou de tout autre système de confinement destiné à piéger les radioisotopes en cas de rejet accidentel dû à la rupture de la fenêtre de la cible ou dun rejet radioactif dans une cellule de haute activité, le cas échéant</li>
<li>lemplacement, les dimensions et lépaisseur du blindage de tout puits de stockage des déchets radioactifs qui fait partie intégrante de linstallation, le cas échéant</li>
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
<div id="PartB.2"></div>
<h4 id="PartB-2">B.2 Systèmes de sûreté &ndash; Installations nucléaires</h4>  <p>Fournir une description des systèmes de sûreté de linstallation.</p>  <p>Les systèmes mentionnés dans cette section du guide sont explicitement requis par le <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>, ou sont des normes de lindustrie. Le recours à tout système de rechange proposé devrait être justifié en démontrant quil fournit un niveau de sûreté équivalent.</p>  <p>En plus de ce qui est exigé pour chaque système de sûreté, tel que décrit dans les sections qui suivent, le demandeur doit fournir :</p>
<ul>
<li>un dessin architectural qui montre lemplacement de chaque système de sûreté par rapport à lemplacement physique de léquipement réglementé et, le cas échéant, des installations de traitement des isotopes</li>
<li>le schéma fonctionnel du câblage du circuit du bouton de délai, des dispositifs de verrouillage des portes et des entrées, et des dispositifs darrêt durgence qui ne sont pas sur léquipement réglementé</li>
</ul>  <h5>Exemptions relatives aux systèmes de sûreté</h5>  <p>Le <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em> peut exempter certaines installations, par exemple les accélérateurs autoblindés de certaines exigences relatives aux systèmes de sûreté. En particulier, le paragraphe 15(14) de ce Règlement exempte une installation daccélérateur de particules de lexigence dêtre dotée dun dispositif de verrouillage de la porte dentrée (section B.2.1), dun avertisseur de démarrage dirradiation (section B.2.3) et de boutons darrêt durgence ailleurs que sur le pupitre de commande (section B.2.4) si léquipement réglementé répond au moins à lun des critères suivants :</p>
<ul>
<li>son débit de dose de rayonnement à 30 cm ne dépasse pas 200 µSv/h lorsquil fonctionne de manière à produire le débit de dose maximal, tel que limité soit par ses caractéristiques, soit par ses dispositifs de verrouillage et quil se trouve dans une pièce munie dun dispositif de verrouillage, à laquelle seules les personnes autorisées par le titulaire de permis ont accès, et quelles seules peuvent le déverrouiller</li>
<li>son débit de dose de rayonnement à 30 cm ne dépasse pas 25 µSv/h lorsquil fonctionne de manière à produire le débit de dose maximal, tel que limité soit par ses caractéristiques, soit par ses dispositifs de verrouillage</li>
</ul>
<h5>B.2.1 Dispositifs de verrouillage des portes</h5>  <p>Fournir les renseignements suivants sur le système de verrouillage des portes dentrée :</p>
<ul>
<li>un schéma fonctionnel du câblage électrique des dispositifs de verrouillage des portes dentrée et du circuit de délai</li>
<li>un dessin architectural qui montre lemplacement des principaux composants du système de verrouillage des portes dentrée et du circuit de délai, y compris :
<ul>
<li>le commutateur du circuit de délai</li>
<li>les dispositifs de verrouillage des portes</li>
<li>tout autre commutateur, capteur ou autre dispositif de verrouillage des portes incorporé au circuit de délai et de verrouillage de la porte dentrée</li>
</ul></li>
<li>une description ou un schéma du fonctionnement du circuit de délai et de verrouillage des portes, y compris tous les capteurs du circuit, le type de capteur et la façon dont ils sont activés</li>
</ul>  <p>Le système doit assurer une protection adéquate contre lexposition accidentelle du personnel et des membres du public. Par conséquent :</p>
<ul>
<li>toutes les entrées dune zone dexclusion doivent être munies dun dispositif de verrouillage qui arrête lirradiation lorsque la porte est ouverte et léquipement réglementé est en fonction. Ce dispositif doit être tel que la dernière personne quittant la zone doit dabord activer le circuit au moyen dun commutateur (souvent appelé bouton de délai) se trouvant à lintérieur de la pièce, sortir dans un délai donné, puis fermer la porte pour remettre léquipement à létat « prêt »</li>
<li>le bouton de délai devrait être situé à un endroit qui permet à la personne de vérifier quaucune autre personne ne se trouve à lintérieur de la zone avant de démarrer lirradiation; sil ny a pas de tel endroit dans la zone qui donne une vue sans obstruction de toute la zone, le demandeur doit prendre des mesures supplémentaires afin de sassurer que toute la zone est libre avant le démarrage de lirradiation (de telles mesures peuvent comprendre lajout dautres boutons de délai en différents endroits, linstallation de miroirs convexes aux endroits requis, ou encore dautres mesures qui offrent un niveau équivalent de sûreté)</li>
<li>le dispositif de verrouillage dune porte devrait être conçu de telle sorte que la réouverture de la porte arrête ou empêche lirradiation jusquà ce que la séquence décrite ci dessus soit répétée; de plus, il devrait être conçu de telle sorte que tout défaut ou toute défaillance déquipement dans le système empêchera le fonctionnement de léquipement réglementé et le placera dans un état de « sécurité intégrée », c. à d. dans un état sécuritaire</li>
<li>les entrées sans porte doivent être équipées du même dispositif que ce qui est décrit ci dessus; cependant, dans le cas des entrées sans porte, le dispositif de verrouillage à la porte dentrée menant à la zone dexclusion peut être remplacé par dautres dispositifs, par exemple, des cellules photoélectriques, des capteurs infrarouges actifs ou des détecteurs de mouvement placés à lentrée ou dans le labyrinthe dentrée (ces systèmes seront évalués au cas par cas, et le demandeur devra démontrer quils offrent un niveau de sûreté équivalent)</li>
</ul>
<h5>B.2.2 Indicateurs de létat dirradiation</h5>  <p>Fournir une description des indicateurs détat dirradiation, par exemple les voyants lumineux, identifiés dans les plans de linstallation et montrer clairement leur emplacement sur ces plans.</p>  <p>Le demandeur doit démontrer que les indicateurs de létat dirradiation indiquent clairement létat de léquipement réglementé et sil est sécuritaire ou non dentrer dans la pièce où il se trouve.</p>  <p>Les indicateurs de létat dirradiation doivent :</p>
<ul>
<li>être installés à chaque entrée de linstallation</li>
<li>être clairement visibles depuis lentrée de linstallation, dans les conditions déclairage ambiant</li>
<li>être installés à lintérieur de toute zone fermée pouvant être occupée, à lintérieur de linstallation, par exemple les salles déquipement, et au-dessus ou à côté de la porte dentrée de linstallation; sil y a plusieurs entrées, linstallation dun seul indicateur en un endroit central peut être suffisante, pourvu quil soit clairement visible de tous les endroits à lintérieur de cette zone</li>
</ul>  <p>Les indicateurs de létat dirradiation devraient :</p>
<ul>
<li>clignoter ou sallumer dune manière clairement visible lorsque léquipement réglementé est en fonction ou que les sources sont exposées</li>
<li>être semblables en termes de conception, de couleur, de message affiché, demplacement et de fonctionnement pour toutes les installations se trouvant sur un même site
<ul>
<li>tous les messages ou tous les symboles utilisés pour indiquer létat dirradiation, comme « <span lang="en">BEAM ON</span> », « <span lang="en">BEAM OFF</span> » « source exposée », « source blindée », devraient être les mêmes pour toutes les installations de même type sur un même site</li>
<li>si la couleur dun voyant sert également dindicateur de létat dirradiation, par exemple, vert pour indiquer quil ny a pas production du faisceau, ou que la source est en position blindée et rouge pour indiquer quil y a production du faisceau ou que la source est exposée, ces couleurs devraient être identiques pour toutes les installations sur un même site</li>
</ul></li>
</ul>  <p>Le demandeur peut installer dautres indicateurs, pour signaler par exemple que les systèmes de radiofréquence (RF), dimagerie KV ou que laimant fonctionnent, ou que le verrouillage a été déconnecté, pourvu que ces indicateurs nentravent pas lefficacité du système de mise en garde contre lirradiation. Linstallation dautres indicateurs à lintérieur de linstallation elle-même est recommandée, mais elle nest pas requise par la réglementation.</p>
<h5>B.2.3 Avertisseurs pré-irradiation</h5>  <p>Fournir une description des avertisseurs sonores pré-irradiation et indiquer leur emplacement sur les plans de linstallation.</p>  <p>Lavertisseur pré-irradiation sert à avertir les personnes qui travaillent dans la zone dexclusion que lirradiation débutera sous peu, et quelles doivent quitter la zone dexclusion ou encore, sil leur est impossible de la quitter, actionner un dispositif darrêt durgence pour empêcher lirradiation. La durée du signal sonore doit donc être suffisante pour laisser le temps à une personne se trouvant dans la zone dactiver un dispositif darrêt durgence (voir la section B.2.4). Le signal sonore doit retentir avant le début de lirradiation, peu importe que quelquun soit entré ou non dans la zone dexclusion depuis lirradiation précédente.</p>  <p>Un demandeur doit installer un avertisseur de pré-irradiation dans chaque installation qui :</p>
<ul>
<li>nest pas utilisée sur les personnes</li>
<li>ne satisfait pas aux exigences dexemption du paragraphe 15(14) du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></li>
</ul>  <p>Les demandeurs peuvent proposer dautres systèmes dalarme sils peuvent démontrer quils offrent un niveau de sûreté équivalent. Ces propositions seront évaluées au cas par cas.</p>
<h5>B.2.4 Dispositifs ou boutons darrêt durgence</h5>  <p>Fournir une description de tous les boutons darrêt durgence ou dispositifs équivalents et indiquer clairement leur emplacement sur les plans de linstallation.</p>  <p>Chaque installation doit être munie de boutons poussoirs à verrouillage ou de dispositifs équivalents faciles à trouver qui, en cas durgence, permettent de faire revenir automatiquement léquipement réglementé à un état sécuritaire. Ces dispositifs doivent être conçus de manière à ce que, une fois actionnés, il soit impossible de redémarrer léquipement réglementé à partir du pupitre de commande sans réinitialiser le circuit du verrouillage de sûreté à lemplacement où le dispositif a été actionné. Une solution de rechange acceptable est lutilisation dun système de verrouillage qui ne nécessite pas la réinitialisation manuelle du bouton darrêt durgence, mais requiert que lon entre de nouveau dans la salle où se trouve léquipement réglementé pour réinitialiser le circuit de délai après quun dispositif darrêt durgence a été activé.</p>  <p>Tout léquipement réglementé de catégorie II doit être pourvu dun dispositif darrêt durgence sur le pupitre de commande.</p>  <p>Dans le cas dun équipement réglementé qui ne remplit pas les critères dexemption du paragraphe 15(14) du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>, des dispositifs darrêt durgence doivent être installés aux emplacements suivants :</p>
<ul>
<li>à chaque entrée de linstallation, à lintérieur de celle-ci</li>
<li>des deux côtés de léquipement réglementé de catégorie II, sur les murs ou sur léquipement lui-même, sauf dans le cas des appareils de curiethérapie à projecteur de source télécommandé</li>
</ul>  <p>Les dispositifs darrêt durgence doivent être placés dans un endroit sans obstruction et facile daccès. Dans le cas de léquipement isocentrique, ils ne doivent pas se trouver dans le faisceau primaire de léquipement.</p>  <p>Étant donné que tous les murs dune installation qui héberge un accélérateur de radiothérapie à bras robotique sont considérés comme des barrières de blindage primaire, il doit y avoir un dispositif darrêt durgence sur chaque mur.</p>  <p>Selon la grandeur et la configuration de linstallation, il pourrait être nécessaire dinstaller des dispositifs darrêt durgence supplémentaires pour assurer quils puissent être accessibles à partir de tous les endroits à lintérieur de linstallation, y compris toute enceinte qui est à lintérieur de linstallation, par exemple, une salle déquipement.</p>
<h5>B.2.5 Moniteurs de rayonnement &ndash; Généralités</h5>  <p>Fournir une description des moniteurs de rayonnement de létablissement, y compris :</p>
<ul>
<li>la marque, le modèle et la sensibilité du détecteur</li>
<li>le système dalimentation de secours</li>
<li>lemplacement du détecteur</li>
<li>lemplacement de lalarme sonore</li>
</ul>  <p>Linstallation doit être dotée dun moniteur de rayonnement indépendant de léquipement réglementé pour avertir le personnel de la présence dun niveau anormalement élevé de rayonnement dans le cas où léquipement ne retournerait pas à son état sécuritaire lorsque la porte de linstallation souvre.</p>  <h6>B.2.5.1	 Moniteurs de rayonnement &ndash; Appareils de curiethérapie à projecteur de source télécommandé, appareils de téléthérapie médicaux ou vétérinaires</h6>  <p>Fournir une description du moniteur de rayonnement de linstallation, y compris son système dalimentation de secours.</p>  <p>Le moniteur de rayonnement doit :</p>
<ul>
<li>pouvoir détecter que la source nest pas en position entièrement blindée</li>
<li>produire une alarme sonore à lentrée de la salle si la porte souvre lorsque la source nest pas en position blindée</li>
<li>fonctionner indépendamment de léquipement réglementé</li>
<li>être muni dune batterie de secours ou être connecté à lalimentation de secours du site pour assurer son fonctionnement continu en cas de panne de courant</li>
</ul>  <p>Si la source ne se rétracte pas en position entièrement blindée, le débit de dose à lendroit où le moniteur de rayonnement est installé devrait varier grandement, selon son emplacement par rapport à la source, lorientation de lunité de traitement et lendroit exact où la source est bloquée. Par conséquent, le moniteur de rayonnement doit être suffisamment sensible pour détecter les niveaux de rayonnement aussi faibles que le niveau ambiant normal lorsque la source est en position entièrement blindée, tout en demeurant fonctionnel dans les conditions dexposition maximale prévues. Le seuil dalarme devrait être réglé au niveau le plus faible qui ne produit pas une alarme lorsque la source est en position entièrement blindée.</p>  <h6>B.2.5.2 Moniteurs de rayonnement &ndash; Irradiateurs</h6>  <p>Fournir une description du moniteur de rayonnement de linstallation.</p>  <p>Le moniteur de rayonnement doit :</p>
<ul>
<li>être installé dans toutes les installations dirradiation, y compris les installations de recherche et détalonnage</li>
<li>pouvoir mesurer sans interruption les débits de dose de rayonnement</li>
<li>déclencher les alarmes sonores et visibles quand il détecte des taux anormalement élevés de dose de rayonnement</li>
<li>les seuils de déclenchement dalarme devraient être adaptés en fonction de la zone surveillée, cest-à-dire quils ne devraient pas être atteints dans les conditions normales dexploitation</li>
</ul>  <p>Spécifier les seuils proposés et montrer quils permettent de maintenir les doses de rayonnement au niveau ALARA.</p>  <h6>B.2.5.3	Moniteurs de rayonnement &ndash; Installations de production disotopes</h6>  <p>Fournir une description du moniteur de rayonnement de linstallation.</p>  <p>Le moniteur de rayonnement devrait :</p>
<ul>
<li>être installé dans la voûte de laccélérateur, les cellules de haute activité, le système de ventilation et les postes de traitement disotopes</li>
<li>pouvoir mesurer sans interruption les débits de dose de rayonnement</li>
<li>déclencher les alarmes sonores et visibles quand il détecte des taux anormalement élevés de dose de rayonnement</li>
<li>les seuils de déclenchement dalarme devraient être adaptés en fonction de la zone surveillée, cest-à-dire quils ne devraient pas être atteints dans les conditions normales dexploitation</li>
<li>dans le cas des accélérateurs autres que les accélérateurs autoblindés, il devrait être relié aux dispositifs de verrouillage des portes daccès et empêcher leur ouverture lorsque lintensité du rayonnement à lintérieur de la voûte ou de la cellule chaude, le cas échéant, dépasse un seuil préétabli</li>
</ul>  <p>Spécifier les seuils proposés et montrer quils permettent de maintenir les doses de rayonnement au niveau ALARA.</p>
<h5>B.2.6	Système de visualisation &ndash; Installations médicales et vétérinaires</h5>  <p>Fournir une description du système de visualisation envisagé, qui permettrait une observation continue de la salle de traitement.</p>  <p>Un système de visualisation peut consister en :</p>
<ul>
<li>un système de télévision en circuit fermé</li>
<li>une fenêtre de visualisation blindée</li>
</ul>  <p>Si un système de télévision en circuit fermé est utilisé, décrire les mesures à prendre en cas de panne du système. Si la salle est munie dune fenêtre de visualisation blindée, inclure le rayonnement transmis par la fenêtre dans le calcul des doses annuelles et des débits de dose.</p>
<h5>B.2.7 Outils et équipement en cas de blocage de la source &ndash; Appareils de curiethérapie à projecteur de source télécommandé et appareils de téléthérapie</h5>  <p>Fournir une liste des outils disponibles dans linstallation et utilisables en cas durgence, par example, dans le cas où les sources seraient bloquées.</p>  <p>La liste peut comprendre :</p>
<ul>
<li>les barres en T</li>
<li>les outils pour la manipulation de la source</li>
<li>les cisailles</li>
<li>les contenants en plomb</li>
</ul>  <p>Dans les installations de curiethérapie à projecteur de source télécommandé et de téléthérapie, les outils requis pour ces situations doivent être disponibles chaque fois que léquipement réglementé de catégorie II est utilisé.</p>
<h5>B.2.8 Surveillance et confinement des rejets de radio-isotopes &ndash; Installations de production disotopes</h5>  <p>Fournir une description du système utilisé pour surveiller le confinement et enregistrer les rejets de substances radioactives dans lenvironnement.</p>  <p>Le système de surveillance et denregistrement devrait être installé dans :</p>
<ul>
<li>les systèmes de ventilation aspirante des cellules de haute activité</li>
<li>les postes de traitement des radio-isotopes</li>
<li>les voûtes daccélérateur</li>
</ul>  <p>Le cas échéant, fournir une description des systèmes utilisés pour empêcher ou retarder le rejet de gaz provenant de cibles défectueuses, par exemple les réservoirs de retenue ou les canalisations de retardement.</p>
<h5>B.2.9 Système de surveillance de la ventilation – Installations de production disotopes</h5>  <p>Fournir une description du système de surveillance de la ventilation.</p>  <p>Un système de surveillance de la ventilation devrait être installé dans les endroits suivants :</p>
<ul>
<li>les cellules de haute activité</li>
<li>les aires de traitement des radio-isotopes</li>
<li>les voûtes de laccélérateur</li>
</ul>  <p>Le système de surveillance de la ventilation devrait vérifier que les différences de pression et les débits dair requis sont maintenus et alerter les travailleurs en cas de défaillance du système de ventilation dans ces zones.</p>
<h5>B.2.10 Système de surveillance de la contamination du personnel &ndash; Installations de production disotopes</h5>  <p>Fournir une description du système de surveillance de la contamination.</p>  <p>Un système de surveillance de la contamination du personnel, par exemple, un moniteur mains et pieds, devrait être installé aux endroits suivants :</p>
<ul>
<li>à chaque entrée dune zone où les isotopes sont traités ou manipulés</li>
<li>à lentrée commune de plusieurs laboratoires et pièces interreliées, pourvu que des mesures soient en place pour assurer que les employés entrent et sortent par cette entrée en situation normale</li>
</ul>  <p>Décrire la sensibilité du moniteur selon les spécifications du fabricant, ou fournir une analyse démontrant que la sensibilité est suffisante pour détecter la contamination due aux isotopes manipulés.</p>
<h5>B.2.11 Système dalarme à distance pour les appareils de curiethérapie à projecteur de source télécommandé et à débit de dose pulsé</h5>  <p>Fournir une description du système dalarme à distance, y compris :</p>
<ul>
<li>un dessin illustrant lemplacement du panneau de commande et du poste de soins infirmiers par rapport à la salle de traitement par curiethérapie</li>
<li>le type et lemplacement de lalarme sonore à distance</li>
<li>un diagramme du câblage et une description fonctionnelle du système dalarme sonore à distance</li>
<li>la confirmation que, lorsque le système est activé, il ne peut être réinitialisé quà partir de la salle de traitement</li>
</ul>  <p>Si le panneau de commande des appareils de curiethérapie à projecteur de source télécommandé et à débit de dose pulsé nest pas surveillé en permanence par le personnel pendant le traitement, un système dalarme à distance doit être installé afin davertir le personnel en cas dinterruption du traitement ou daccès non autorisé dans la salle de traitement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB.3"></div>
<h4 id="PartB-3">B.3 Autres exigences</h4>  <p>Le demandeur doit fournir linformation mentionnée dans les sections ci dessous lorsquil soumet une demande de permis de construction.</p>  <h5>B.3.1 Programme dinformation</h5>  <p>Fournir le plan visant à informer les personnes vivant près de linstallation :</p>
<ul>
<li>de la nature et des caractéristiques de linstallation</li>
<li>des effets que lexploitation de linstallation pourrait avoir sur lenvironnement, et sur la santé et la sécurité des personnes</li>
</ul>
<h5>B.3.2 Plan préliminaire de déclassement</h5>  <p>Fournir le plan préliminaire de déclassement de linstallation.</p>  <p>Ce plan devrait contenir les renseignements suivants :</p>
<ul>
<li>une vue densemble des bâtiments, des structures, des composants, des systèmes et de léquipement qui seront touchés par le déclassement</li>
<li>un aperçu des principaux risques radiologiques et chimiques qui pourraient subsister à la fin des activités</li>
<li>létat final prévu de linstallation, par exemple, linstallation et lexploitation dun nouvel équipement réglementé ou la libération du site pour des utilisations de nature non radioactive</li>
<li>un aperçu de la façon dont le déclassement sera effectué, en précisant qui exécutera les travaux et comment les matières radioactives, les substances nucléaires et les autres substances dangereuses seront identifiées, isolées et évacuées</li>
<li>une estimation du temps et des coûts nécessaires pour le déclassement à la fin de lexploitation de linstallation</li>
</ul>  <p>Le titulaire de permis devra demander un permis de déclassement de linstallation lorsque léquipement réglementé atteint sa durée de vie utile, comme il est décrit à la partie F de ce guide. Un plan de déclassement final détaillé sera alors exigé.</p>  <p>Cependant, il est essentiel de planifier et de prévoir assez tôt les activités de déclassement. Par conséquent, les demandeurs devraient fournir un plan préliminaire de déclassement lorsquils demandent un permis de construction ou dexploitation. Ce plan devrait être revu à chaque renouvellement du permis pendant la durée de vie utile de linstallation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartC"></div>
<h3 id="PartC">PARTIE C : Mise en service</h3>  <p>Cette partie décrit les renseignements que le demandeur doit fournir, y compris la confirmation que linstallation a été construite conformément aux spécifications fournies avec la demande de permis de construction et que les systèmes de sûreté ont été installés aux endroits spécifiés dans cette demande, la description du contrôle radiologique effectué afin de vérifier que le blindage est adéquat, ainsi que les essais réalisés pour vérifier que les systèmes de sûreté fonctionnent.  Les sections ci-dessous spécifient les renseignements que le demandeur doit fournir pour obtenir un permis dexploitation en vue de la mise en service. Sils sont disponibles, ces renseignements devraient être fournis avec la demande de permis de construction.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartC.1"></div>
<h4 id="PartC-1">C.1 Plan de mise en service</h4>  <h5>C.1.1 Plan de confirmation de la conception de linstallation &ndash; Généralités</h5>  <p>Fournir le plan qui confirme que linstallation a été construite selon ses spécifications de conception.</p>  <p>Ce plan devrait préciser que le demandeur devra :</p>
<ul>
<li>confirmer que la densité, la composition et lépaisseur du blindage sont conformes aux spécifications décrites dans la demande de permis de construction, et que tous les systèmes de sûreté requis ont été installés aux endroits spécifiés dans cette demande; cette confirmation doit être fournie par le demandeur et être attestée par celui-ci et par lentrepreneur, une fois la construction terminée</li>
<li>faire un contrôle radiologique afin de vérifier que le blindage est adéquat; le plan du contrôle radiologique devrait spécifier :
<ul>
<li>les mesures de contrôle physiques et administratives utilisées pour limiter laccès aux zones au cours du contrôle radiologique</li>
<li>les endroits où les doses seront mesurées, y compris toutes les zones accessibles adjacentes à linstallation où la dose et le débit de dose ont été estimés</li>
<li>la vérification des estimations de dose et de débit de dose dans ces zones</li>
<li>les radiamètres utilisés pour le contrôle radiologique et leurs caractéristiques</li>
<li>les conditions et les paramètres dexploitation de léquipement pendant le contrôle radiologique</li>
<li>le type de rayonnement qui sera mesuré : photonique, neutronique ou les deux; il y a lieu de noter quun contrôle de rayonnement neutronique doit être fait pour les accélérateurs délectrons dont lénergie du faisceau de photons est &ge;&nbsp;10 MV; les contrôles de rayonnement neutronique ne sont pas obligatoires, mais ils sont recommandés pour tous les autres accélérateurs délectrons, particulièrement ceux dont lénergie du faisceau délectrons est supérieur à 10 MeV ou des accélérateurs à faible énergie dans les installations dont la chicane ne comporte quun seul tronçon</li>
</ul></li>
<li>décrire les essais faits pour sassurer que les dispositifs de sûreté fonctionnent comme prévu; ces dispositifs doivent être testés et vérifiés avant toute autre activité de mise en service; ces essais devront être faits sur les dispositifs de sûreté suivants :
<ul>
<li>les dispositifs de verrouillage des portes et le circuit de délai</li>
<li>tous les indicateurs de létat dirradiation</li>
<li>lavertisseur pré-irradiation, le cas échéant</li>
<li>tous les boutons et dispositifs darrêt durgence</li>
<li>tous les moniteurs de rayonnement</li>
</ul></li>
</ul>   <h6>C.1.1.1 Plan de confirmation de la conception de linstallation – Installations médicales et vétérinaires</h6>  <p>Outre les exigences de la section C.1.1, le plan de mise en service devrait préciser que le demandeur devra :</p>
<ul>
<li>dans les installations daccélérateur :
<ul>
<li>prendre toutes les mesures des doses en utilisant le débit de dose maximal à lisocentre, ainsi que lénergie maximale des photons et la grandeur maximale du champ</li>
<li>prendre les mesures des doses au-delà de la barrière primaire sans fantôme dans le faisceau</li>
<li>prendre les mesures des doses au-delà des barrières secondaires, avec un fantôme équivalent au tissu, placé dans le faisceau à la distance normale de traitement</li>
<li>prendre les mesures des débits de dose à proximité de la tête de laccélérateur  dus à lactivation, dans des conditions identiques à celles durant une journée de traitement normale</li>
<li>vérifier si les dispositifs darrêt de faisceau virtuels fonctionnent pour les installations de radiothérapie avec bras robotique, le cas échéant</li>
</ul></li>
<li>dans les installations de curiethérapie à projecteur de source télécommandé :
<ul>
<li>prendre toutes les mesures des doses sans fantôme avec lactivité maximale de la source, alors que la source se trouve dans lorientation la plus défavorable par rapport à la barrière</li>
<li>prendre les mesures des débits de dose dus au rayonnement de fuite afin de vérifier quils sont conformes aux spécifications du fabricant lorsque la source est en position blindée</li>
</ul></li>
<li>dans les installations dappareils de téléthérapie :
<ul>
<li>prendre toutes les mesures des doses en utilisant la dimension maximale du champ</li>
<li>prendre les mesures des doses dans les appareils de téléthérapie pourvus de têtes à rotation indépendante en utilisant la distance minimale entre la source et la barrière primaire</li>
<li>prendre les mesures des débits de dose dus au rayonnement de fuite afin de vérifier quils sont conformes aux spécifications du fabricant lorsque la source est en position blindée</li>
<li>prendre les mesures des doses au-delà des barrières primaires sans fantôme dans le faisceau</li>
<li>prendre les mesures des doses au-delà des barrières secondaires, avec un fantôme équivalent au tissu, placé dans le faisceau à la distance normale de traitement</li>
</ul></li>
</ul>  <h6>C.1.1.2 Plan de confirmation de la conception de linstallation &ndash; Installations de production des isotopes</h6>  <p>Outre les exigences de la section C.1.1, le plan de mise en service devrait préciser que le demandeur devra :</p>
<ul>
<li>confirmer la hauteur et les dimensions de la cheminée</li>
<li>confirmer que tous les composants des systèmes de surveillance des rejets et de confinement fonctionnent bien</li>
<li>spécifier les matériaux des cibles irradiées pendant le contrôle radiologique</li>
</ul>  <p>Dans le cas des cyclotrons autoblindés, outre les exigences des sections C.1.1 et C.1.2, le plan de mise en service devrait préciser que le demandeur devra :</p>
<ul>
<li>fournir les résultats des mesures des débits de dose à la surface externe du cyclotron et à tous les endroits susceptibles dêtre occupés dans la voûte de laccélérateur</li>
<li>confirmer que les dispositifs de verrouillage ou les dispositifs conçus pour assurer la fermeture du blindage fonctionnent bien</li>
<li>confirmer lintégrité du blindage</li>
</ul>
<h5>C.1.2 Plan de confirmation de la conception de linstallation &ndash; Installations de traitement disotopes</h5>  <p>Outre les exigences de la section C.1.1, si le traitement de radio-isotopes est visé par le permis, le plan devrait préciser que le demandeur devra :</p>
<ul>
<li>confirmer que la conception du laboratoire est conforme aux spécifications décrites dans le formulaire dévaluation de la conception des laboratoires de substances nucléaires et des salles de médecine nucléaire</li>
<li>fournir les résultats des essais auxquels ont été soumis tous les dispositifs de verrouillage ou les autres systèmes de sûreté associés aux cellules de haute activité ou autre équipement de traitement</li>
<li>fournir un rapport sur léquilibrage de lair confirmant que les différences de pression et les débits de ventilation sont adéquats</li>
<li>fournir les résultats des mesures prises pour vérifier que le blindage intégré aux cellules de haute activité et le long des conduites de transfert est adéquat</li>
</ul>  <p>Le formulaire dévaluation de la conception pour les laboratoires de substances nucléaires et les salles de médecine nucléaire est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD"></div>
<h3 id="PartD">PARTIE D : Système de gestion et programme de radioprotection</h3>  <p>Cette section décrit les renseignements que le demandeur devrait fournir au sujet de son programme de radioprotection, y compris le système de gestion du demandeur, la description du poste de responsable de la radioprotection, la structure de gestion de lorganisation, le programme dassurance de la qualité du demandeur et son engagement à se conformer au principe ALARA, les exigences relatives à la surveillance des doses des travailleurs, la disponibilité de radiamètres, le contrôle de la contamination, les qualifications et la formation du personnel, la gestion des déchets, ainsi que les procédures à suivre pour contrôler laccès à linstallation et aux substances nucléaires. Les sujets du programme de radioprotection sont regroupés selon les domaines de sûreté et de réglementation décrits à l<a href="#AppB">annexe B : Définitions des domaines de sûreté et de réglementation</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.1"></div>
<h4 id="PartD-1">D.1 Système de gestion</h4>  <h5>D.1.1 Programme dinformation publique – Irradiateurs de type piscine et accélérateurs de production des isotopes</h5>  <p>Fournir une copie du programme dinformation publique de linstallation.</p>  <p>Outre les exigences relatives au programme dinformation publique spécifiées à la section B.3.1, les demandeurs de permis pour un irradiateur de type piscine ou pour une installation de production disotopes qui peuvent rejeter des radio-isotopes dans latmosphère, pendant la durée de vie de linstallation, doivent maintenir un programme de divulgation et dinformation publique.</p>  <p>Pour de plus amples renseignements sur les programmes de divulgation et dinformation publique, le demandeur devrait consulter le document RD/GD-99.3 de la CCSN, <em>Linformation et la divulgation publiques</em>. Ce document est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.
<h5>D.1.2 Description du poste de responsable de la radioprotection</h5>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Chaque titulaire de permis qui exploite ou entretient de léquipement réglementé de catégorie II doit nommer un responsable de la radioprotection accrédité par la CCSN. Voir le document REGDOC-2.2.3, <em>Accréditation du personnel : Responsables de la radioprotection, installations de catégorie II</em>, pour de plus amples renseignements sur la procédure daccréditation.</p>  </div>  </div>  <div className="clear"></div>
<p>Fournir la description du poste de responsable de la radioprotection (RRP), y compris :</p>
<ul>
<li>les qualifications requises pour le poste</li>
<li>les responsabilités du RRP, entre autres :
<ul>
<li>prendre toutes les précautions raisonnables pour préserver la santé et la sécurité du personnel et du public et protéger lenvironnement</li>
<li>superviser la mise en œuvre du programme de radioprotection de linstallation</li>
<li>être le point de liaison principal avec la CCSN pour ce qui est des questions dautorisation et de conformité</li>
<li>déterminer les problèmes ou les préoccupations touchant la radioprotection et mettre en œuvre des mesures correctives appropriées</li>
<li>assurer la conformité aux exigences réglementaires de la CCSN</li>
<li>signaler les cas de non-conformité réglementaire à la CCSN</li>
<li>avoir lautorité pour faire cesser toute activité associée à lexploitation dune installation nucléaire de catégorie II ou à lentretien dun équipement réglementé de catégorie II qui pourrait entraîner une non-conformité avec la LSRN, la réglementation ou le permis</li>
<li>agir comme signataire autorisé pour les permis de la CCSN</li>
<li>élaborer les procédures et les politiques en matière de radioprotection et de formation</li>
<li>préparer le budget pour la radioprotection et la formation connexe</li>
</ul></li>
<li>les ressources et le temps dont le RRP a besoin pour sacquitter de ses tâches</li>
</ul>
<h5>D.1.3 Structure de gestion</h5>  <p>Fournir une description détaillée de la structure de gestion de lorganisation en ce qui concerne la radioprotection, y compris :</p>
<ul>
<li>le titre du poste des personnes responsables :
<ul>
<li>de la gestion et lexploitation de léquipement réglementé et de la manipulation des substances nucléaires visées par le permis</li>
<li>de létablissement et du maintien dun programme dassurance de la qualité adéquat et efficace</li>
<li>du développement et du maintien des essais et procédures de contrôle de la qualité afin de vérifier que les essais sont efficaces et faits régulièrement et correctement</li>
</ul></li>
<li>les fonctions, les responsabilités et lautorité en matière de radioprotection de chaque poste indiqué ci dessus</li>
<li>un organigramme indiquant les rapports hiérarchiques et les lignes de communication entre tous les représentants du demandeur, y compris le RRP et la haute direction</li>
<li>lengagement de la direction envers la sûreté, notamment :
<ul>
<li>les obligations et la responsabilité de la direction en matière de sûreté</li>
<li>la mise en place dune culture de sûreté axée sur lapprentissage, notamment encourager une attitude ouverte au questionnement, promouvoir un environnement « sans blâme » et encourager la volonté de changer</li>
<li>la promotion de la valeur accordée à la culture de sûreté, notamment trouver léquilibre entre la pression de la production et la sûreté, et encourager le personnel à assumer ses responsabilités pour sa propre sûreté</li>
</ul></li>
</ul>
<h5>D.1.4 Comité de radioprotection</h5>  <p>Fournir les procédures et le programme visant à assurer la supervision appropriée et lexamen de lefficacité du programme de radioprotection. Normalement, la supervision du programme de radioprotection incombe à un comité de radioprotection (CRP) ou à un organisme équivalent. Le cas échéant, fournir le mandat du CRP ou de lorganisme équivalent. Cependant, la mise sur pied dun CRP est facultative, et en son absence le demandeur devrait expliquer qui a lautorité et la responsabilité équivalentes à celles du CRP.</p>  <p>Des évaluations du programme de radioprotection par des vérificateurs internes ou externes devraient être faites  périodiquement, au moins une fois par année, et les résultats communiqués à la direction de linstallation.</p>  <p>Le mandat du CRP devrait indiquer :</p>
<ul>
<li>la fréquence des réunions (il devrait y avoir au moins une réunion par année)</li>
<li>le titre des postes des membres du CRP et leurs rôles</li>
<li>à qui le CRP rend compte et à quelle fréquence</li>
<li>les rôles des différents secteurs et services et les activités sous la supervision du CRP</li>
<li>les responsabilités du CRP à légard de :
<ul>
<li>lexamen et lapprobation dun budget pour la radioprotection et la formation connexe</li>
<li>la révision et lapprobation des procédures et des politiques de radioprotection et de formation</li>
<li>lévaluation de lefficacité du programme de radioprotection, y compris :
<ul>
<li>les questions en suspens depuis la dernière réunion de la direction</li>
<li>les résultats des vérifications internes et externes</li>
<li>les observations du personnel au sujet des lacunes du programme</li>
<li>la conformité à la réglementation</li>
<li>les résultats des mesures correctives mises en œuvre ou des recommandations damélioration</li>
</ul></li>
<li>lexamen de tous les incidents de radioprotection</li>
<li>son rôle consultatif auprès du responsable de la radioprotection et de la direction</li>
</ul></li>
<li>lobligation de conserver les documents des réunions</li>
</ul>
<h5>D.1.5 Exigences relatives aux rapports</h5>  <p>Fournir les politiques et la procédure à suivre pour sassurer que la Commission est avisée de tout événement à signaler dans les délais prescrits.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>le titre du poste de la personne chargée de rédiger le rapport</li>
<li>les situations ou les événements qui devraient être signalés à la CCSN conformément au paragraphe 29(1) du <em>Règlement général sur la sûreté et la réglementation nucléaires</em></li>
<li>les exigences au sujet de la conservation du rapport, ainsi que son format</li>
</ul>  <p>La procédure devrait exiger la description de :</p>
<ul>
<li>lévénement et sa cause probable</li>
<li>la date, lheure et lendroit de lévénement</li>
<li>les effets réels ou présumés de lévénement sur lenvironnement, la santé et la sécurité des personnes et le maintien de la sécurité</li>
<li>la dose efficace et la dose équivalente de rayonnement reçue par toute personne après lévénement</li>
<li>les mesures prises ou proposées au sujet de lévénement</li>
</ul>
<h5>D.1.6 Programme dassurance de la qualité</h5>  <p>Fournir le programme dassurance de la qualité (AQ) tel quil sapplique à la sûreté radiologique dans linstallation.</p>  <p>Chaque demandeur de permis de construction, dexploitation ou de déclassement dune installation nucléaire de catégorie II ou dexploitation ou dentretien dun équipement réglementé de catégorie II doit se doter dun programme dAQ afin de sassurer que les activités autorisées sont exercées conformément à la LSRN, à ses règlements dapplication et au permis.</p>  <p>Le programme dAQ requis devrait au minimum traiter des aspects suivants des activités autorisées :</p>
<ul>
<li>la conformité aux exigences de la LSRN et de ses règlements</li>
<li>la conformité avec les politiques et les procédures dexploitation du demandeur citées dans le permis</li>
<li>léquipement, les articles et les activités visés par le programme</li>
<li>la vérification périodique du fonctionnement des principaux systèmes de sûreté et mécanismes de contrôle</li>
<li>les dispositions touchant la révision et la mise à jour des manuels, des politiques et des procédures en raison des modifications apportées à léquipement ou du retour dexpérience en exploitation</li>
</ul>
<h5>D.1.7 Contrôle des documents</h5>  <p>Présenter la politique et les procédures régissant la conservation des documents.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>lengagement du demandeur à conserver les documents, y compris ceux qui sont spécifiés à larticle 24 du <em>Règlement sur la radioprotection</em> de la CCSN et ceux qui sont spécifiés au paragraphe 21(1) du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></li>
<li>le titre de la personne responsable de la conservation des documents</li>
<li>la période de conservation des documents, tel que spécifié dans la réglementation, ou si elle ne lest pas, un an après lexpiration du permis</li>
<li>lobligation daviser la Commission au moins 90 jours avant la date délimination des documents</li>
<li>lobligation de rendre les documents disponibles aux fins dinspection</li>
<li>les exigences relatives au stockage des documents, y compris le type de support, à savoir électronique ou papier</li>
<li>les exigences relatives à la révision des documents, y compris :
<ul>
<li>lidentification des documents devant faire lobjet dune révision périodique</li>
<li>la fréquence des révisions</li>
<li>le titre du poste de la personne responsable de la révision et de la conservation des documents</li>
</ul></li>
<li>les dispositions visant à assurer la conformité à la réglementation de la conservation des documents, y compris :
<ul>
<li>signaler à la Commission toute inexactitude et toute lacune dans les documents, et ce, dans les 21 jours suivant leur découverte</li>
</ul></li>
<li>linterdiction déliminer sans autorisation des documents mentionnés dans la LSRN, les règlements ou le permis, sauf si leur conservation nest plus requise</li>
</ul>  <p>La procédure devrait indiquer les documents à conserver, notamment :</p>
<ul>
<li>les dossiers du personnel, y compris :
<ul>
<li>les noms des personnes qui utilisent léquipement réglementé ou en font lentretien ou qui manipulent des substances nucléaires</li>
<li>le nom et la catégorie demploi des personnes désignées comme travailleurs du secteur nucléaire</li>
<li>la formation reçue par chaque personne qui utilise léquipement réglementé ou en fait lentretien, ou qui manipule des substances nucléaires, y compris la date et le sujet de la formation</li>
</ul></li>
<li>les documents dexploitation et de rendement, y compris :
<ul>
<li>la charge de travail de léquipement réglementé</li>
<li>tout autre document requis par les procédures dexploitation et dentretien</li>
</ul></li>
<li>les documents relatifs à linstallation et léquipement réglementé, y compris :
<ul>
<li>les résultats des contrôles radiologiques requis par la réglementation ou le permis</li>
<li>les inspections, vérifications et essais de léquipement réglementé</li>
<li>le transfert dun équipement réglementé, y compris la date du transfert, le numéro de permis de lorganisation à laquelle léquipement a été transféré, ainsi que le modèle et le numéro de série de léquipement</li>
<li>les plans et les dessins de linstallation, et les spécifications de conception</li>
<li>les procédures dessai de la mise en service de linstallation et les résultats des essais</li>
<li>le programme dAQ relatif à la conception et la mise en service des cibles expérimentales, le cas échéant</li>
<li>la liste des laboratoires, pièces ou autres lieux désignés pour lutilisation et le stockage des substances nucléaires</li>
<li>les rapports du déclassement de linstallation</li>
<li>les modifications, les réparations, lentretien et la remise en service de léquipement réglementé et de tout autre équipement de linstallation</li>
</ul></li>
<li>les documents sur les substances nucléaires, y compris :
<ul>
<li>lacquisition, lévacuation ou les transferts de substances nucléaires et les documents de transport</li>
<li>linventaire des sources scellées et des sources non scellées</li>
<li>les caractéristiques physiques et radiologiques des déchets et des composants activés à stocker ou à évacuer ainsi que les méthodes de stockage ou dévacuation utilisées</li>
</ul></li>
<li>les documents sur la radioprotection, y compris :
<ul>
<li>linventaire et les résultats détalonnage des radiamètres</li>
<li>les résultats de la surveillance de la contamination, le cas échéant</li>
<li>les résultats des épreuves détanchéité, le cas échéant</li>
<li>les résultats de la dosimétrie</li>
<li>les résultats des essais biologiques internes, le cas échéant</li>
</ul></li>
<li>les documents relatifs aux situations durgence et aux incidents mettant en cause léquipement réglementé ou des substances nucléaires</li>
<li>tout autre document spécifié dans la LSRN, la réglementation ou le permis</li>
</ul>  <p>Dautres documents peuvent être requis par la CCSN, comme il est indiqué dans les conditions de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.2"></div>
<h4 id="PartD-2">Sections D.2 à D.10 &ndash;Programme de radioprotection</h4>  <p>Le demandeur doit décrire son programme de radioprotection. Ce programme devrait être documenté et inclure des politiques et des procédures détaillées, qui devraient être préparées sous la surveillance du RRP et être approuvées par le CRP ou la haute direction. Ces politiques et procédures devraient être ajoutées dans un manuel de radioprotection que tous les travailleurs peuvent facilement consulter.</p>  <p>Les éléments du programme de radioprotection décrits dans ce guide nempêchent pas les demandeurs de proposer dautres mesures, mais toutes ces mesures devraient tenir compte de la complexité et des dangers associés aux activités autorisées par le permis.</p>
<h4>D.2 Radioprotection</h4>
<h5>D.2.1 Politique ALARA</h5>  <p>Fournir la politique qui démontre lengagement du demandeur à maintenir les doses reçues par les travailleurs et le public au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs sociaux et économiques.</p>  <p>La politique devrait promouvoir :</p>
<ul>
<li>le contrôle des méthodes de travail par la direction, y compris :
<ul>
<li>déléguer les responsabilités en matière de radioprotection aux personnes qualifiées seulement</li>
<li>fournir des ressources financières et humaines adéquates</li>
<li>sassurer que lélaboration et le maintien des politiques et des procédures de radioprotection sont conformes aux meilleures pratiques de lindustrie</li>
<li>comparer les politiques et les procédures de radioprotection du demandeur avec les meilleures pratiques de lindustrie, et apporter des améliorations, le cas échéant</li>
<li>recourir aux vérifications internes périodiques, par exemple les auto-vérifications, afin de vérifier si les travailleurs suivent les procédures de radioprotection du titulaire de permis</li>
<li>faire évaluer le programme de radioprotection par la haute direction et faire le suivi afin de veiller à la mise en œuvre des mesures correctives, le cas échéant</li>
</ul></li>
<li>les qualifications et la formation du personnel pour :
<ul>
<li>assurer la formation adéquate des nouveaux membres du personnel</li>
<li>vérifier de façon continue que le personnel en place maintient ses compétences et fournir la formation requise pour combler les lacunes perçues dans les connaissances du personnel (voir la section D.3.2 pour plus de détails au sujet du programme de formation)</li>
</ul></li>
<li>le contrôle de lexposition des travailleurs et du public au rayonnement en surveillant les doses de rayonnement, en faisant enquête sur les doses inhabituelles et en établissant des indicateurs defficacité, lesquels peuvent comprendre :
<ul>
<li>les tendances des doses individuelles</li>
<li>le nombre dexpositions non personnelles des dosimètres</li>
<li>le nombre de dépassements des seuils dintervention</li>
<li>le nombre dincidents signalés</li>
<li>dans la mesure du possible, la comparaison des doses dexposition avec celles dinstallations semblables</li>
</ul></li>
<li>lélaboration et le maintien des procédures durgence en cas dincidents radiologiques associés aux activités autorisées</li>
</ul>  <p>Pour de plus amples renseignements sur les attentes de la politique ALARA, les demandeurs devraient consulter la section 4 du <em>Règlement sur la radioprotection</em> de la CCSN et le document G-129, rév. 1 de la CCSN, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnablement possible datteindre (ALARA)</em> », disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<h5>D.2.2 Désignation des travailleurs du secteur nucléaire</h5>  <p>Fournir la politique et la procédure utilisée pour désigner les travailleurs comme des travailleurs du secteur nucléaire (TSN).</p>  <p>Sil y a une probabilité raisonnable que la dose efficace reçue par un travailleur dépasse la limite de dose de 1 mSv/année fixée pour le public, le demandeur devrait désigner ce travailleur comme TSN et linformer de ce fait.</p>  <p>Le <em>Règlement sur la radioprotection</em> exige que les TSN soient informés de leur statut, des risques associés aux niveaux de rayonnement auxquels ils pourraient être exposés, des limites de dose efficaces applicables, des niveaux de dose de rayonnement reçus et de leurs obligations.</p>   <p>La politique devrait spécifier :</p>
<ul>
<li>les catégories de travailleurs qui seront désignés comme TSN</li>
<li>la justification de cette désignation</li>
<li>le titre du poste de la personne responsable de désigner les travailleurs comme TSN et de les aviser de ce statut</li>
<li>le titre du poste de la personne responsable de conserver un registre des travailleurs qui ont été avisés de leur statut de TSN et des attestations signées par ces travailleurs indiquant quils ont reçu linformation requise</li>
</ul>  <p>La procédure devrait décrire :</p>
<ul>
<li>linformation personnelle requise de chaque personne désignée comme TSN, y compris lhistorique de lexposition du travailleur</li>
<li>lavis donné par écrit aux travailleurs, notamment :
<ul>
<li>leur désignation comme TSN</li>
<li>les risques associés à leur exposition au rayonnement</li>
<li>leurs limites de dose réglementaire</li>
<li>leurs obligations</li>
<li>les droits et obligations dune travailleuse du secteur nucléaire enceinte</li>
</ul></li>
<li>lexigence dobtenir lattestation écrite de chaque TSN confirmant quil a bien reçu cette information</li>
<li>lexigence de conserver les avis remis aux travailleurs et leur attestation confirmant quils ont bien reçu cette information</li>
<li>tout accommodement requis pour les travailleuses du secteur nucléaire enceintes</li>
</ul>  <p>Si le demandeur choisit de ne pas désigner les travailleurs comme TSN, il devrait justifier cette décision. Dans ce cas, le demandeur est néanmoins obligé doffrir une formation à ses travailleurs et de surveiller leurs doses.</p>
<h5>D.2.3 Surveillance des doses individuelles &ndash; Généralités</h5>  <p>Fournir la politique et les procédures relatives à la surveillance des doses individuelles qui démontrent que des mesures adéquates sont en place pour surveiller les doses des travailleurs.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>lengagement du demandeur envers la surveillance des doses des travailleurs</li>
<li>les dispositions prises pour conserver les documents sur les doses individuelles</li>
<li>les catégories de travailleurs qui seront tenus de porter un dosimètre</li>
<li>lobligation des travailleurs de porter un dosimètre au travail</li>
<li>les mesures relatives à la surveillance des doses aux visiteurs de linstallation, le cas échéant</li>
<li>le titre du poste de la personne responsable de la distribution et de la collecte des dosimètres</li>
<li>le titre du poste de la personne responsable daviser les travailleurs de leurs doses</li>
<li>les périodes déchange des dosimètres</li>
<li>le service de dosimétrie autorisé par la CCSN qui est utilisé</li>
</ul>  <p>La procédure devrait décrire :</p>
<ul>
<li>le type de dosimètre normalement utilisé, par exemple les dosimètres dextrémités et pour le corps entier</li>
<li>les autres types de dosimètres personnels disponibles</li>
<li>les instructions données aux travailleurs au sujet de la façon correcte de manipuler, porter et stocker les dosimètres</li>
<li>les dispositions relatives au remplacement des dosimètres personnels perdus ou endommagés</li>
<li>les dispositions relatives à la notification du RRP au sujet de lexposition non personnelle dun dosimètre</li>
<li>lexigence relative au port des dosimètres dextrémités pendant la manipulation des substances nucléaires ou lentretien de composants activés de léquipement</li>
<li>les méthodes de notification des travailleurs au sujet de leurs doses</li>
</ul>  <p>Si les doses des travailleurs sont surveillées sans que lon utilise de dosimètres personnels, justifier lutilisation de ces autres méthodes de mesure et démontrer clairement quelles sont adéquates pour déterminer les doses. Ces méthodes sont sujettes à lapprobation de la CCSN.</p>  <p>Pour de plus amples renseignements, le demandeur devrait consulter le guide dapplication de la réglementation G-91, <em>Contrôle et enregistrement des doses de rayonnement aux personnes</em>, disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <h6>D.2.3.1  Surveillance des doses individuelles &ndash; Dosimètres électroniques personnels</h6>  <p>Fournir la politique et la procédure exigeant lutilisation de dosimètres électroniques personnels (DEP) avec affichage à lecture directe.</p>  <p>Outre les exigences de la section D.2.3, le demandeur dun permis dexploitation dune installation de production disotopes, dun accélérateur industriel ou de recherche, ou dun accélérateur mobile ou portatif doit se doter dune politique relative à lutilisation des DEP par les travailleurs.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>si, où et quand un DEP devrait être utilisé</li>
<li>les limites de dose quotidienne des travailleurs</li>
<li>lobligation des travailleurs de :
<ul>
<li>porter le DEP au travail</li>
<li>vérifier le fonctionnement de laffichage visuel et de lalarme sonore du DEP</li>
<li>vérifier quil a été étalonné au cours des 12 derniers mois</li>
</ul></li>
</ul>  <p>Les procédures devraient décrire :</p>
<ul>
<li>lendroit où les DEP sont rangés</li>
<li>les instructions données aux travailleurs au sujet de lutilisation de ces dosimètres</li>
<li>le niveau dalarme préétabli</li>
<li>quoi faire si lalarme se déclenche</li>
</ul>
<h5>D.2.4 Seuils dintervention</h5>   <p>Fournir la politique sur les seuils dintervention et la procédure décrivant quoi faire si les seuils dintervention sont dépassés.</p>  <p>Les seuils dintervention ont pour but dalerter la direction dune perte potentielle du contrôle dune partie du programme de radioprotection avant que les limites réglementaires ne soient atteintes et ils devraient être fixés à des valeurs près des doses prévues aux travailleurs. Pour cette raison, il peut savérer approprié de définir des seuils dintervention à des doses différentes selon les différents groupes de travailleurs.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>les seuils dintervention proposés pour les différents groupes de travailleurs et pour :
<ul>
<li>lexposition trimestrielle et/ou annuelle du corps entier</li>
<li>lexposition des extrémités</li>
<li>lexposition des travailleuses enceintes</li>
</ul></li>
<li>les seuils dintervention proposés liés aux rejets dans lenvironnement ou à la contamination radioactive</li>
<li>le titre du poste de la personne responsable de faire enquête pour établir la cause de latteinte dun seuil dintervention et de déterminer et dappliquer les mesures correctives appropriées</li>
</ul>  <p>La procédure devrait indiquer :</p>
<ul>
<li>les échéanciers pour la mise en œuvre des mesures correctives lorsquun seuil dintervention est dépassé</li>
<li>linformation à donner au travailleur qui a dépassé un seuil dintervention</li>
<li>le titre du poste de la personne responsable daviser la CCSN dans les délais spécifiés dans le permis</li>
</ul>  <p>Si les seuils dintervention ne font pas partie du programme de radioprotection du demandeur, celui-ci devrait démontrer que des mesures sont en place pour assurer un niveau de sûreté équivalent.</p>  <p>Le dépassement dun seuil dintervention ne signifie pas quil sagit dune non-conformité avec la réglementation. Cependant, lomission de signaler un dépassement est une infraction au <em>Règlement sur la radioprotection</em>.</p>
<h5>D.2.5 Radiamètres</h5>  <p>Fournir la politique et la procédure régissant lutilisation et létalonnage des radiamètres, des compteurs neutroniques et des DEP.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>quel instrument devrait être utilisé, où et quand</li>
<li>le titre du poste de la personne responsable :
<ul>
<li>de sassurer que les instruments ont été étalonnés au cours des 12 derniers mois</li>
<li>de mettre hors service les instruments dont le certificat détalonnage est expiré</li>
<li>de sassurer que tous les certificats détalonnage sont conservés dans les dossiers et disponibles aux fins dinspection</li>
<li>doffrir une formation sur lutilisation de ces instruments</li>
</ul></li>
<li>lobligation des travailleurs de vérifier, avant dutiliser linstrument :
<ul>
<li>quil a été étalonné au cours des 12 derniers mois</li>
<li>quil fonctionne correctement</li>
</ul></li>
</ul>  <p>La procédure devrait comprendre :</p>
<ul>
<li>la description des endroits où les instruments sont rangés</li>
<li>les instructions données aux travailleurs au sujet de lutilisation de ces instruments</li>
<li>le nom et les coordonnées des services détalonnage utilisés, le cas échéant</li>
</ul>  <p>Les sections ci dessous traitent de lutilisation du radiamètre approprié selon le type dapplication. <a href="#AppF">Annexe F : Étalonnage des radiamètres</a> contient des renseignements sur létalonnage des radiamètres.</p>   <h6>D.2.5.1 Radiamètres appropriés &ndash; Accélérateurs</h6>  <p>Les accélérateurs produisent de très brèves impulsions de rayons X de haute énergie. Par conséquent, les radiamètres à chambre dionisation sont les radiamètres recommandés pour la mesure des débits de dose, car ils donnent des mesures précises dans des champs de rayonnement pulsés. Les détecteurs du type Geiger-Müller (G-M) ne conviennent pas et ne seront pas acceptés pour les mesures de débit de dose dans les installations daccélérateur, car ils présentent habituellement une réponse non linéaire aux impulsions brèves de rayons X de haute énergie. Cependant, on peut les utiliser pour effectuer le balayage dune pièce pour identifier les « points chauds » pendant le contrôle radiologique dune pièce, pourvu que les débits de dose soient ensuite mesurés avec une chambre dionisation ou un autre instrument approprié. On peut également utiliser les détecteurs G-M pour mesurer le rayonnement gamma produit par des composants activés ou des accessoires, comme les sources étalons. Dautres types de radiamètres, comme les scintillateurs, seront évalués au cas par cas, mais ne seront pas acceptés à moins que le demandeur ne démontre clairement, avec les spécifications du fabricant ou des essais indépendants à lappui, que linstrument convient pour mesurer les débits de dose produits par un rayonnement X pulsé de haute énergie.</p>  <h6>D.2.5.2 Radiamètres appropriés &ndash; Cyclotrons</h6>   <p>Lutilisation dinstruments dotés daffichage analogique (par exemple, léquipement de mesure par déviation magnétique) ne convient pas dans les champs magnétiques puissants présents à proximité immédiate des cyclotrons.</p>  <h6>D.2.5.3 Radiamètres appropriés &ndash; Sources scellées</h6>  <p>Dans le cas des sources scellées, peu importe quelles soient contenues dans un équipement réglementé ou non, on peut utiliser tout type de gammamètre (par exemple, des détecteurs G-M, des chambres dionisation et des scintillateurs) si les spécifications de fonctionnement du fabricant confirment que linstrument choisi convient pour la plage de débits de dose et dénergies mesurés.</p>  <p>Si on utilise un détecteur G-M, il est préférable en général dutiliser les modèles compensés en énergie. Si on utilise un G-M non compensé, il doit être étalonné expressément pour lénergie en cause.</p>  <h6>D.2.5.4 Instruments appropriés pour mesurer la contamination</h6>  <p>Voir l<a href="#AppG">annexe G : Surveillance de la contamination radioactive</a> pour de plus amples renseignements sur la surveillance de la contamination, y compris le choix des instruments appropriés.</p>
<h5>D.2.6 Contrôle de la contamination radioactive</h5>  <p>Fournir la politique et la procédure pour surveiller la contamination radioactive des lieux de travail.</p>  <p>La contamination radioactive peut être surveillée avec des méthodes directes ou indirectes. La méthode indirecte nécessite la collecte et lanalyse systématiques déchantillons prélevés par frottis sur les surfaces de travail et la mesure de la contamination radioactive non fixée à laide dun compteur à scintillation liquide. Quant à elle, la méthode directe consiste à employer des instruments portatifs dans les zones à faible rayonnement ambiant afin dy mesurer la contamination non fixée et la contamination fixée. Si les mesures indiquent que la contamination dépasse les limites décrites ci-dessous, le titulaire de permis doit prendre des mesures correctives. L<a href="#AppG">annexe G : Surveillance de la contamination radioactive</a> donne plus de renseignements sur les procédures de surveillance de la contamination.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>le titre du poste de la personne responsable de la surveillance</li>
<li>les instruments disponibles pour la surveillance de la contamination</li>
<li>la fréquence de la surveillance de la contamination, par exemple :
<ul>
<li>chaque semaine</li>
<li>après chaque cycle de production</li>
<li>après un déversement ou un incident</li>
<li>avant que léquipement soit libéré pour une utilisation de nature non radioactive</li>
<li>avant et après le déclassement</li>
</ul></li>
<li>les mesures correctives qui doivent être prises si les limites de contamination sont dépassées</li>
<li>le titre du poste de la personne responsable de la conservation des documents de la surveillance de la contamination</li>
</ul>  <p>La procédure devrait comprendre :</p>
<ul>
<li>une description des types de contamination pouvant nécessiter lutilisation de la méthode directe ou indirecte</li>
<li>la preuve que linstrument qui sera utilisé peut détecter la contamination aux limites indiquées dans la section ci-dessous</li>
<li>la description des algorithmes utilisés pour convertir les mesures (par exemple, compte par unité de temps) en résultats équivalents en termes de contamination de surface en Bq/cm<sup>2</sup></li>
<li>la description des mesures de précaution à prendre avec la méthode directe ou indirecte, y compris léquipement de protection individuelle</li>
<li>un dessin de laménagement physique des zones où la surveillance de la contamination pourrait être requise</li>
</ul>  <p>La quantité de contamination non fixée dans une zone est déterminée par une condition du permis dexploitation de linstallation.</p>  <p>Dans le cas des radionucléides de catégories A, B et C, qui sont des émetteurs à longue demi-vie de rayonnement alpha, des émetteurs à longue demi-vie de rayonnement bêta ou gamma et des émetteurs à courte demi-vie de rayonnement bêta ou gamma, respectivement, la contamination non fixée ne doit pas dépasser les limites suivantes, lorsque la valeur moyenne est établie sur une superficie dau plus 100 cm<sup>2</sup> :</p>
<ul>
<li>dans les zones contrôlées :
<ul>
<li>3 Bq/cm<sup>2</sup> de radionucléides de catégorie A</li>
<li>30 Bq/cm<sup>2</sup> de radionucléides de catégorie B</li>
<li>300 Bq/cm<sup>2</sup> de radionucléides de catégorie C</li>
</ul></li>
<li>dans les zones publiques supervisées et pour le déclassement :
<ul>
<li>0,3 Bq/cm<sup>2</sup> de radionucléides de catégorie A</li>
<li>3 Bq/cm<sup>2</sup> de radionucléides de catégorie B</li>
<li>30 Bq/cm<sup>2</sup> de radionucléides de catégorie C</li>
</ul></li>
</ul>  <p>L<a href="#AppH">annexe H : Catégories de substances nucléaires</a> dresse une liste des radionucléides de catégorie A, B et C. Le demandeur peut demander lapprobation dautres limites de contamination, sil peut démontrer que la dose efficace maximale reçue par la personne est inférieure à 10 &micro;Sv/année.</p>
<h5>D.2.7	Salles et pièces &ndash; Affichage de mise en garde contre les rayonnements</h5>  <p>Fournir la politique exigeant laffichage de mises en garde contre les rayonnements dans les salles où léquipement réglementé et les substances nucléaires sont stockés ou utilisés.</p>  <p>La politique devrait exiger :</p>
<ul>
<li>laffichage dun panneau durable et lisible portant les mots « RAYONNEMENT &ndash; DANGER &ndash; <span lang="en">RADIATION</span> » et le symbole universel de mise en garde contre les rayonnements, tel que spécifié à lannexe 3 du Règlement sur la radioprotection, aux limites et à chaque point daccès dune zone, dune pièce ou dune enceinte sil sy trouve des substances nucléaires radioactives en quantité supérieure à 100 fois la quantité dexemption, ou sil y a un risque vraisemblable quune personne sy trouvant soit exposée à un débit de dose efficace supérieur à 25 &micro;Sv/h</li>
<li>laffichage à lentrée dune installation de catégorie II dun panneau durable et lisible qui indique le nom ou le titre du poste et le numéro de téléphone de la personne pouvant être contactée en tout temps en cas durgence, conformément à larticle 11 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></li>
<li>laffichage en un endroit bien en évidence sur les lieux de lactivité autorisée, conformément au paragraphe 14(1) du <em>Règlement général sur la sûreté et la réglementation nucléaires</em> :
<ol className="list-bullet-none">
<li>a) dune copie du permis, avec ou sans son numéro, et un avis indiquant lendroit où tout document mentionné dans le permis peut être consulté</li>
<li>b) dun avis sur lequel figurent :
<ol className="list-bullet-none">
<li>(i) le nom du titulaire de permis,</li>
<li>(ii) une description de lactivité autorisée,</li>
<li>(iii) une description de la substance nucléaire, de linstallation nucléaire ou de léquipement réglementé visés par le permis,</li>
<li>(iv) une mention de lendroit où peuvent être consultés le permis et les documents qui y sont mentionnés.</li>
</ol></li>
</ol></li>
</ul>  <h6>D.2.7.1	Installations de traitement ou de manipulation des sources non scellées</h6>  <p>Fournir des exemples daffiches indiquant les précautions que les travailleurs doivent prendre dans les laboratoires suivants :</p>
<ul>
<li>laboratoire de niveau élémentaire &ndash; Utilisation des substances nucléaires non scellées</li>
<li>laboratoire de niveau intermédiaire &ndash; Utilisation des substances nucléaires non scellées</li>
<li>laboratoire de niveau supérieur &ndash; Utilisation des substances nucléaires non scellées</li>
<li>laboratoire de niveau de confinement &ndash; Utilisation des substances nucléaires non scellées</li>
</ul>   <p>Les demandeurs peuvent télécharger les modèles daffiche disponibles sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<h5>D.2.8 Remplacement des sources scellées</h5>  <p>Fournir la politique et la procédure visant à assurer la radioprotection lorsque les sources de rayonnement sont remplacées.</p>  <p>Le demandeur devrait démontrer le caractère approprié de ses procédures en décrivant comment les sources utilisées dans léquipement réglementé de catégorie II sont reçues, remplacées, stockées et évacuées dune manière qui assure la sécurité des sources, et celle des travailleurs et du public.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>que seuls les travailleurs ayant reçu une formation relative aux exigences du Règlement sur lemballage et le transport des substances nucléaires peuvent manipuler les sources</li>
<li>le titre du poste de la personne qui devrait être avisée de larrivée des sources</li>
<li>le titre du poste de la personne responsable de linspection du contenant de la source à son arrivée</li>
<li>le titre du poste de la personne qui remplacera la source</li>
<li>lendroit où la source sera stockée en attendant son transfert</li>
<li>les exigences relatives à linclusion de la source dans linventaire des sources</li>
<li>les outils qui seront requis pendant le remplacement de la source</li>
<li>la procédure de retour de la source épuisée</li>
<li>pour les sources de catégorie I et II, lexigence daviser la CCSN de la réception de la source</li>
</ul>  <p>La procédure devrait décrire :</p>
<ul>
<li>linspection requise pour détecter les signes daltération ou de dommage au colis dexpédition</li>
<li>le protocole de transfert de la source, du quai de chargement à la salle de stockage</li>
<li>les responsabilités du représentant du fournisseur ou dune personne ayant reçu une formation et qualifiée par le fournisseur pour :
<ul>
<li>retirer la source épuisée et installer la nouvelle</li>
<li>emballer la source épuisée dans le contenant dexpédition approprié</li>
<li>remplir les documents pour lexpédition du contenant de la source au fournisseur</li>
<li>prendre les mesures des débits de dose du rayonnement afin de vérifier que le débit de dose de la source en position blindée, à 1 m, ne dépasse pas les instructions du fabricant</li>
<li>examiner avec le personnel de linstallation les procédures durgence et le fonctionnement du projecteur de source télécommandé, le cas échéant</li>
</ul></li>
<li>le cas échéant, le protocole pour prendre les mesures du débit de dose de rayonnement à tous les endroits accessibles adjacents à la salle dans laquelle se trouve lappareil de téléthérapie ou le projecteur de source télécommandé, lorsque la source est exposée</li>
</ul>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Seules les personnes autorisées peuvent procéder au remplacement de source de léquipement réglementé de catégorie II selon les conditions du permis dentretien de cet équipement.</p>
</div>  </div>  <div className="clear"></div>
<h5>D.2.9 Manipulation des sources scellées</h5>  <p>Fournir les politiques relatives à la réception, au stockage et au transfert des sources scellées.</p>  <p>La politique de réception des sources scellées devrait spécifier que :</p>
<ul>
<li>seuls les travailleurs autorisés ayant reçu une formation sur le transport des marchandises dangereuses (TMD) peuvent manipuler les colis contenant des sources scellées</li>
<li>les colis reçus pendant les heures de travail normales devraient être aussitôt placés dans un endroit désigné pour le stockage des substances nucléaires</li>
<li>les colis qui semblent être endommagés ou qui montrent des signes de fuite ne devraient pas être manipulés par le personnel de la réception, et on devrait contacter aussitôt le RRP</li>
<li>les colis devraient être stockés dans un endroit désigné et sécurisé en dehors des heures de travail normales</li>
</ul>  <p>La politique relative au stockage des sources scellées devrait spécifier que les sources doivent être stockées dans :
<ul>
<li>lendroit indiqué dans le permis de la CCSN, qui est conforme au <em>Règlement sur la sécurité nucléaire</em>, et accessible seulement par le personnel autorisé de linstallation</li>
<li>une enceinte ou un contenant adéquatement blindé</li>
</ul>  <p>La politique relative au transfert des sources scellées devrait spécifier que :</p>
<ul>
<li>les sources peuvent être transférées seulement à un autre titulaire de permis de la CCSN autorisé à être en possession de ces substances nucléaires</li>
<li>tout travailleur qui manipule un contenant servant au transfert de la source doit avoir reçu une formation sur le TMD</li>
<li>le transfert des sources doit être fait conformément au <em>Règlement sur lemballage et le transport des substances nucléaires</em></li>
</ul>  <p>Le document INFO-0744 de la CCSN, <em>Lignes directrices pour la manutention des colis renfermant des substances nucléaires</em>, contient de plus amples renseignements et il est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>
<h5>D.2.10 Contrôle des patients après le traitement &ndash; Curiethérapie à projecteur de source télécommandé</h5>  <p>Fournir la politique et la procédure visant à sassurer que les patients, après leur traitement, sont exempts de toute substance nucléaire.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>lobligation de procéder au contrôle radiologique de chaque patient après un traitement de curiethérapie à projecteur de source télécommandé, afin de sassurer quil ny a pas dactivité résiduelle dans le corps du patient</li>
<li>le titre du poste de la personne responsable de contrôler les patients</li>
</ul>  <p>La procédure devrait décrire :</p>
<ul>
<li>le type et le modèle du radiamètre</li>
<li>le titre du poste de la personne responsable de la conservation des documents du contrôle</li>
</ul>
<h5>D.2.11 Comptabilisation des sources après la pose dun implant</h5>  <p>Fournir la procédure utilisée pour comptabiliser les sources de curiethérapie manuelle après les implants permanents et, dans le cas des implants temporaires, pour la récupération des sources après le traitement.</p>  <p>La procédure devrait décrire la méthode utilisée pour :</p>
<ul>
<li>vérifier que le nombre de sources implantées et de sources de remplacement restant après limplantation correspond à linventaire pré-implantation des sources</li>
<li>récupérer toutes les sources utilisées dans les implants temporaires</li>
<li>vérifier que les sources qui nont pas été implantées sont recueillies, et sassurer ainsi quelles ne resteront pas dans la salle dopération</li>
</ul>
<h5>D.2.12 Instructions à lintention des patients après linsertion dun implant</h5>  <p>Fournir la feuille dinstructions remise aux patients qui ont reçu un implant de source de curiethérapie manuelle et à leur famille. Ces instructions devraient couvrir les points suivants :</p>
<ul>
<li>quoi faire si une source est expulsée du corps; c. à d. quelle devient une « source rejetée »</li>
<li>comment réduire lexposition au rayonnement des autres, y compris le personnel soignant</li>
<li>quoi faire lorsque les alarmes de rayonnement se déclenchent dans les aéroports et aux postes frontaliers</li>
<li>les restrictions ou linterdiction de lincinération, selon ce que prévoit la réglementation provinciale</li>
<li>le titre du poste de la personne que le patient ou sa famille doit contacter sils ont des questions</li>
</ul>
<h5>D.2.13 Contrôle radiologique des salles de traitement des patients</h5>  <p>Fournir la politique relative à la chambre où les patients ayant reçu des traitements de curiethérapie manuelle sont hospitalisés.</p>  <p>La politique devrait veiller à ce que :</p>
<ul>
<li>la chambre soit équipée dune salle de bain privée</li>
<li>laccès à la chambre soit restreint</li>
<li>des panneaux de mise en garde contre les rayonnements et le nom dune personne avec qui communiquer en cas durgence soient affichés</li>
<li>le débit de dose du rayonnement dans les zones occupées adjacentes à la chambre ne dépasse pas 2,5 &micro;Sv/h</li>
<li>la chambre ne soit pas libérée pour le nettoyage ou recevoir un autre patient tant quun contrôle radiologique de la chambre naura pas confirmé labsence de substances nucléaires</li>
</ul>  <p>Toute proposition qui sécarte des exigences ci dessus sera évaluée par la CCSN et pourrait être approuvée sil est démontré quelle offre un niveau de sûreté équivalent.</p>
<h5>D.2.14	Intervention en cas dincendie</h5>  <p>Fournir le plan visant à familiariser le service dincendie qui pourrait intervenir avec lexploitation de linstallation et ses risques potentiels.</p>  <p>Le plan devrait comprendre des renseignements détaillés sur la formation donnée au personnel du service dincendie et les visites de familiarisation faites avec ce personnel afin de sassurer quil est prêt à intervenir dans un scénario dincendie plausible à linstallation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.3"></div>
<h4 id="PartD-3">D.3 Gestion de la performance humaine</h4>  <h5>D.3.1 Qualifications et fonctions des travailleurs</h5>  <p>Fournir la politique sur les qualifications et les fonctions des travailleurs.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>les qualifications requises pour chaque catégorie demploi, en fonction de :
<ul>
<li>léducation</li>
<li>la formation</li>
<li>lexpérience</li>
</ul></li>
<li>les responsabilités et fonctions proposées des travailleurs pour chaque catégorie demploi</li>
</ul>  <p>Fournir la liste de toutes les catégories demploi qui seront liées à lexploitation ou à lentretien de léquipement réglementé ou à la manipulation des substances nucléaires visées par le permis.</p>  <p>Le demandeur doit démontrer que ses travailleurs ont les qualifications appropriées et ont lautorisation formelle dexploiter ou dentretenir un équipement réglementé de catégorie II et de manipuler des substances nucléaires.</p>
<h5>D.3.2 Programme de formation</h5>  <p>Fournir le programme de formation proposé pour les travailleurs.</p>  <p>Le demandeur doit démontrer que tous les travailleurs comprennent les risques associés aux activités autorisées et quils prendront toutes les mesures de précaution raisonnables afin dassurer leur propre sûreté, celle des autres personnes sur les lieux de lactivité autorisée, de protéger lenvironnement et le public et préserver la sûreté des installations nucléaires et des substances nucléaires. La formation devrait correspondre au rôle du travailleur.</p>  <p>Lautorisation des travailleurs devrait dépendre de la réussite dune formation initiale et de cours de recyclage périodiques par la suite. Le personnel dexploitation recevra une formation sur la radioprotection, ainsi quune formation relative aux procédures dexploitation propres à chaque type déquipement réglementé de catégorie II ou de substances nucléaires. Une formation dappoint devrait être donnée chaque fois que des modifications importantes sont apportées aux procédures dexploitation.</p>  <p>Le programme de formation devrait comprendre les éléments suivants :</p>  <h6>Responsabilités</h6>
<ul>
<li>Le titre du poste des personnes responsables de :
<ul>
<li>la préparation, la vérification et lactualisation du contenu du programme</li>
<li>lapprobation du contenu du programme</li>
<li>la présentation de la formation et de la vérification de la compréhension</li>
</ul></li>
</ul>  <h6>Méthodes de présentation de la formation</h6>
<ul>
<li>La formation peut être offerte selon diverses méthodes :
<ul>
<li>une formation formelle en classe</li>
<li>une formation pratique supervisée</li>
<li>une formation sur le Web</li>
<li>des études autonomes</li>
<li>lobservation au poste de travail (jumelage)</li>
</ul></li>
</ul>  <p>La formation peut être offerte par le demandeur ou par une tierce partie (par exemple un service spécialisé en formation).</p>  <h6>Vérification de la compréhension</h6>  <p>Lorsque la formation est terminée, une personne qualifiée devrait vérifier la compréhension et signer une attestation à cet effet.</p>  <p>Les méthodes de vérification peuvent prendre différentes formes :</p>
<ul>
<li>des examens écrits ou en ligne</li>
<li>la démonstration des compétences</li>
<li>des questionnaires</li>
<li>une évaluation orale</li>
</ul>  <h6>Fréquence des cours de recyclage</h6>
<ul>
<li>Des cours de recyclage devraient être offerts périodiquement ou :
<ul>
<li>après la constatation de lacunes dans les connaissances</li>
<li>après un changement important de technologie</li>
<li>après un changement dans les procédures dexploitation ou dentretien</li>
<li>lorsque les travailleurs sont assignés à des fonctions qui diffèrent de leurs fonctions habituelles</li>
<li>lorsquun travailleur revient à son poste après une absence prolongée</li>
</ul></li>
</ul>  <p>Nota : Des exercices durgence pratiques devraient être faits au moins une fois par année.</p>  <h6>Documents</h6>
<ul>
<li>Les documents suivants doivent être conservés pour chaque travailleur :
<ul>
<li>la formation suivie</li>
<li>la vérification de la compréhension</li>
</ul></li>
</ul>  <p>Des renseignements supplémentaires sur lélaboration dun programme de formation se trouvent dans le document REGDOC-2.2.2, <em>La formation du personnel</em>. Ce document est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <h6>D.3.2.1 Programme de formation – Contenu des procédures dexploitation</h6>  <p>Fournir une liste des sujets touchant la sûreté qui doivent être inclus dans la formation sur les procédures dexploitation.</p>
<ul>
<li>Les sujets touchant la sûreté peuvent inclure :
<ul>
<li>la vérification quotidienne que les systèmes de sûreté fonctionnent</li>
<li>la sécurité de léquipement réglementé, y compris le contrôle de laccès</li>
<li>les interventions en cas de défaillance déquipement, y compris lemplacement et lutilisation des dispositifs darrêt durgence et des autres équipements de sûreté</li>
<li>les procédures de contournement des dispositifs de verrouillage</li>
</ul></li>
</ul>  <h6>D.3.2.2 Programme de formation &ndash; Contenu de la formation en radioprotection</h6>  <p>Fournir un aperçu du contenu de la formation en radioprotection.</p>  <p>Le demandeur ne devrait pas présumer que la formation en radioprotection acquise ailleurs par ses travailleurs convient pour ses activités. Le demandeur devrait donner une formation en radioprotection propre au site et aux tâches à accomplir, et ladapter au niveau de scolarité et aux besoins pratiques des personnes qui la reçoivent. Le personnel auxiliaire, tel que les commis, les préposés au nettoyage et à lentretien et les agents de sécurité, devrait également recevoir une formation de base en radioprotection. De plus amples renseignements sur le développement dun programme de formation en radioprotection se trouvent dans le document REGDOC-2.2.2, <em>La formation du personnel</em>. Ce document est disponible sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <h6>D.3.2.3	Programme de formation &ndash; Contenu de la formation sur le transport des marchandises dangereuses (TMD)</h6>  <p>Fournir un aperçu de la formation sur le transport des marchandises dangereuses et la liste des catégories de travailleurs qui seront formés.</p>  <p>Le personnel qui participe à lemballage, lenvoi ou la réception de colis contenant des substances nucléaires doit recevoir une formation sur les dispositions pertinentes du <em>Règlement sur le transport des marchandises dangereuses</em> de Transports Canada et détenir un certificat de formation sur le TMD valide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.4"></div>
<h4 id="PartD-4">D.4 Gestion des déchets</h4>  <h5>D.4.1 Gestion des déchets radioactifs et autres déchets dangereux</h5>  <h6>Déchets radioactifs</h6>  <p>Fournir une liste de tout déchet radioactif ou composant activé à manipuler, transférer ou évacuer dans le cadre des activités autorisées et indiquer notamment :</p>
<ul>
<li>le nom de lisotope</li>
<li>lactivité (en Bq)</li>
<li>la description des composants activés</li>
<li>le poids ou le volume des déchets, ou les deux</li>
<li>la forme physique ou chimique des substances nucléaires dans les déchets</li>
</ul>   <p>Fournir les procédures de manipulation, de transfert et dévacuation des déchets radioactifs. Les méthodes dévacuation suivantes peuvent être autorisées :</p>
<ul>
<li>le stockage en vue de la désintégration radioactive</li>
<li>le renvoi au fournisseur</li>
<li>le transfert à une installation qui détient un permis approprié de la Commission</li>
<li>toute autre méthode dévacuation des déchets proposée doit être justifiée</li>
</ul>  <h6>Autres déchets dangereux</h6>  <p>Fournir la liste des matières dangereuses non radioactives qui seront manipulées, et pour chaque substance, inclure :</p>
<ul>
<li>le nom de la substance</li>
<li>la quantité</li>
<li>la forme physique ou chimique</li>
<li>la nature du risque associé à cette substance</li>
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
<div id="PartD.5"></div>
<h4 id="PartD-5">D.5 Sécurité</h4>  <h5>D.5.1 Contrôle de laccès et sécurité matérielle</h5>  <p>Fournir la politique qui restreint laccès aux substances nucléaires et à léquipement réglementé de catégorie II en dehors des heures normales de travail aux travailleurs autorisés seulement.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>les exigences relatives au stockage de léquipement réglementé de catégorie II et des substances nucléaires dans des zones, des pièces ou des enceintes verrouillées lorsquils ne sont pas utilisés ou quils ne sont pas sous la supervision directe du personnel autorisé</li>
<li>les mesures prises pour empêcher laccès non autorisé à ces pièces, zones ou enceintes</li>
<li>les mesures prises pour contrôler laccès aux matières et sources radioactives devant être évacuées</li>
<li>le titre du poste des personnes qui peuvent avoir un accès sans restriction en dehors des heures de travail normales aux pièces contenant des substances nucléaires ou de léquipement réglementé</li>
</ul>  <h6>D.5.1.1 Contrôle de laccès et sécurité – Sources à risque moyen et élevé</h6>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Les détails du programme de sécurité sont considérés comme des renseignements réglementés et ils doivent être transmis seulement par des moyens sécurisés, comme le courrier. Lenvoi de courriels non chiffrés contenant ces renseignements est interdit. Les directives relatives à la protection et à la transmission de renseignements réglementés se trouvent dans le document REGDOC-2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em>.</p>  </div>  </div>  <div className="clear"></div>
<p>Dautres mesures de sécurité sont requises pour les sources scellées à risque moyen et élevé (catégories 1 à 3 de lAIEA). À la différence des sources scellées gérées par le Système de suivi des sources scellées et dont lactivité est lactivité de chaque source, lactivité des sources des catégories 1 à 3 est déterminée par lactivité de lensemble des sources. L<a href="#AppI">annexe I : Classement des sources scellées</a> contient plus de renseignements sur la catégorisation des sources et leur activité.</p>  <p>Le programme de sécurité pour ces sources devrait comprendre des mesures visant à détecter, différer et contrer les menaces à la sécurité. Le programme de sécurité doit couvrir les éléments suivants :</p>
<ul>
<li>le plan de sécurité de linstallation</li>
<li>lentretien et lessai des systèmes de détection des intrusions</li>
<li>le contrôle de laccès</li>
<li>le protocole dintervention</li>
<li>la formation de sensibilisation à la sécurité</li>
<li>la fiabilité individuelle</li>
<li>la sécurité du transport, le cas échéant</li>
</ul>  <p>Dans la demande, spécifier que le programme de sécurité pour les sources scellées à risque moyen et élevé a été transmis par des moyens sécurisés à la CCSN.</p>
<h5>D.5.2	Contrôle de linventaire</h5>  <p>Fournir la politique et la procédure du contrôle de linventaire.</p>  <p>Le demandeur doit maintenir un inventaire courant des sources scellées ou des autres substances nucléaires en sa possession. Le but de cet inventaire est dalerter le demandeur dans le cas où des sources ou des substances nucléaires seraient manquantes, volées ou non comptabilisées.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>lexigence de maintenir un inventaire courant des sources scellées et des autres substances nucléaires que le demandeur a en sa possession</li>
<li>le titre du poste de la personne responsable du maintien de linventaire courant</li>
<li>lexigence que linventaire soit disponible aux fins dinspection</li>
<li>lexigence que la validité de linventaire soit vérifiée périodiquement au moyen dune confirmation visuelle</li>
</ul>  <p>Pour chaque source, la procédure devrait indiquer :</p>
<ul>
<li>le nom, la quantité, la forme de la substance nucléaire dans chaque source et son emplacement (numéro de la pièce)</li>
<li>le numéro de série de chaque source scellée</li>
<li>le pays dorigine de la source, le cas échéant</li>
<li>la date de réception de la source</li>
<li>le nom, ladresse et le numéro de permis du fournisseur</li>
<li>le titre du poste de la personne responsable du stockage sécuritaire, de la vérification de linventaire et de lutilisation sécuritaire de chaque source</li>
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
<div id="PartD.6"></div>
<h4 id="PartD-6">D.6 Emballage et transport</h4>  <h5>D.6.1 Emballage et transport des substances nucléaires</h5>  <p>Fournir la politique et la procédure pour lemballage et le transport des substances nucléaires.</p>  <p>Lemballage et le transport des substances nucléaires doit être conforme au <em>Règlement sur le transport des marchandises dangereuses</em> de Transports Canada ainsi quau <em>Règlement sur lemballage et le transport des substances nucléaires de la CCSN</em>.</p>  <p>La politique devrait spécifier :</p>
<ul>
<li>lobligation de se conformer aux exigences applicables des règlements susmentionnés de Transports Canada et de la CCSN</li>
<li>le titre du poste de la personne responsable de vérifier la conformité à ces règlements</li>
<li>que seules les personnes ayant un certificat valide en TMD sont autorisées à recevoir, expédier ou manipuler des colis contenant des substances nucléaires</li>
</ul>  <p>La procédure devrait décrire :</p>
<ul>
<li>les consignes de sécurité quil faut respecter lors de la manipulation des colis contenant des substances nucléaires</li>
<li>lexigence de :
<ul>
<li>vérifier si les colis sont endommagés ou montrent des signes de fuite</li>
<li>mesurer les débits de dose à la surface du colis et à 1 m du colis non ouvert</li>
<li>stocker le colis dans un endroit sécuritaire dès son arrivée ou dans lattente de son expédition</li>
<li>vérifier si les documents dexpédition correspondent au contenu du colis</li>
</ul></li>
<li>lexigence de remplir le formulaire de déclaration de lexpéditeur de marchandises dangereuses qui est requis pour le transport aérien, le cas échéant</li>
<li>le titre du poste de la personne responsable de la conservation des documents dexpédition</li>
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
<div id="PartD.7"></div>
<h4 id="PartD-7">D.7 Aptitude fonctionnelle</h4>  <h5>D.7.1 Programme daptitude fonctionnelle</h5>  <p>Fournir la politique qui vise à assurer que léquipement, les composants et les systèmes fonctionnent.</p>  <p>Tout équipement ou composant défectueux devrait être mis hors service jusquà ce quil soit réparé et que lon démontre quil est de nouveau opérationnel.</p>  <p>La politique devrait sappliquer à léquipement, aux composants ou aux systèmes qui :</p>
<ul>
<li>ont fait lobjet dun entretien intensif</li>
<li>ont été en cause dans des accidents ou ont été utilisés dans des conditions dexploitation plus graves que leurs conditions dexploitation nominales</li>
<li>nécessitent une surveillance ou un étalonnage périodique</li>
<li>font partie dun système de sûreté, y compris, le cas échéant :
<ul>
<li>le bouton de délai</li>
<li>les dispositifs de verrouillage des portes</li>
<li>tout autre interrupteur, capteur ou autre dispositif de verrouillage des portes qui est inclus dans les dispositifs de verrouillage des entrées et le circuit de délai</li>
<li>tout indicateur de létat dirradiation</li>
<li>tout avertisseur pré-irradiation</li>
<li>tout dispositif darrêt durgence</li>
<li>le système de visualisation</li>
<li>tout dispositif de verrouillage qui a été contourné</li>
</ul></li>
<li>font partie dun système de surveillance et de confinement de rejets de radio-isotopes</li>
<li>font partie dun système de surveillance de la ventilation</li>
<li>font partie dun système de surveillance de la contamination du personnel</li>
<li>font partie dun système dalarme à distance dun appareil de curiethérapie à projecteur de source télécommandé et à débit de dose pulsé</li>
<li>sont des sources scellées et des substances nucléaires utilisées pour le blindage</li>
<li>nécessitent la mise hors service après une défaillance</li>
</ul>  <h6>D.7.1.1	Vérification après lentretien</h6>  <p>Fournir la procédure qui sera suivie pour sassurer que léquipement réglementé peut être utilisé en toute sécurité après son entretien.</p>  <p>La procédure devrait décrire :</p>
<ul>
<li>les essais, les mesures, les vérifications et les analyses requis pour confirmer que lutilisation de léquipement est sécuritaire</li>
<li>lobligation de procéder à une vérification détaillée, indépendante, documentée et approuvée par écrit pour démontrer que léquipement a été réparé correctement avant dêtre remis en service</li>
<li>le titre du poste de la personne qualifiée pour approuver le retour en exploitation normale de léquipement</li>
<li>le titre du poste de la personne responsable de la conservation des documents dentretien et des approbations</li>
</ul>  <h6>D.7.1.2	Vérification à la suite dun accident</h6>  <p>Fournir la procédure relative à la remise en service de léquipement qui a été en cause dans un accident ou qui a été utilisé dans des conditions plus graves que ses conditions dexploitation nominales.</p>  <p>La procédure devrait décrire :</p>   <ul>
<li>les accidents ou les conditions anormales qui nécessiteraient la mise hors service de léquipement</li>
<li>les inspections et les essais requis pour vérifier que léquipement fonctionne</li>
<li>le titre du poste de la personne qualifiée pour approuver la remise en service de léquipement</li>
<li>le titre du poste de la personne responsable de la conservation des documents dentretien et des approbations</li>   </ul>  <h6>D.7.1.3 Étalonnage des mécanismes de surveillance de la cheminée</h6>  <p>Fournir la procédure détalonnage des mécanismes de surveillance de la cheminée pour traduire les taux de comptage en activité équivalente en Bq.</p>  <p>La procédure devrait décrire :</p>
<ul>
<li>les contrôles dentretien et des vérifications mécaniques du système déchappement requis</li>
<li>les exigences :
<ul>
<li>détalonner annuellement le système de surveillance de la cheminée et les détecteurs</li>
<li>de vérifier annuellement lalgorithme qui traduit les taux de comptage des détecteurs de la cheminée en valeurs réelles</li>
</ul></li>
<li>létalonnage du système de surveillance des débits dair</li>
<li>la vérification que les détecteurs de la cheminée ont été étalonnés au cours des 12 derniers mois</li>
<li>la vérification des valeurs seuil des alarmes pour les débits dair</li>
<li>la vérification du seuil dalarme de la dose lié aux rejets de matières radioactives</li>
<li>le type et la quantité de matières radioactives rejetées pendant létalonnage</li>
<li>le titre du poste de la personne responsable de la conservation des résultats de létalonnage annuel du système de surveillance de la cheminée</li>
</ul>  <h6>D.7.1.4	Épreuves détanchéité</h6>  <p>Fournir la procédure pour lépreuve détanchéité des sources scellées et des substances nucléaires utilisées comme blindage.</p>  <p>Le <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em> oblige les titulaires dun permis à effectuer des épreuves détanchéité sils possèdent ou utilisent des sources scellées contenant au moins 50 MBq dune substance nucléaire ou sils utilisent des substances nucléaires servant de blindage.</p>  <p>Outre les instructions techniques détaillées relatives à léchantillonnage et aux épreuves détanchéité, la procédure devrait décrire :</p>
<ul>
<li>les substances nucléaires servant au blindage et leur emplacement</li>
<li>la méthode utilisée pour déterminer si les composants du blindage sont sécuritaires et aptes à demeurer en service</li>
<li>la fréquence des épreuves détanchéité</li>
<li>les circonstances qui nécessiteraient une épreuve détanchéité</li>
<li>la technique déchantillonnage, y compris :
<ul>
<li>les outils utilisés</li>
<li>les endroits où des frottis seront prélevés</li>
<li>les consignes de sûreté afin de maintenir le degré dexposition au rayonnement du personnel au niveau ALARA pendant léchantillonnage</li>
</ul></li>
<li>les instruments de détection, y compris :
<ul>
<li>le nom du fabricant, le modèle, les types de rayonnement détectés, la gamme dénergie exploitable</li>
<li>les épreuves ou les calculs démontrant que linstrument peut détecter une activité de 200 Bq ou moins pour les isotopes concernés</li>
<li>lalgorithme ou le facteur de correction utilisé pour convertir les résultats des mesures par frottis en activité en Bq</li>
</ul></li>
<li>les mesures à prendre si lon constate des fuites de substances nucléaires</li>
<li>le titre du poste de la personne responsable de la conservation des documents contenant les résultats des épreuves détanchéité</li>
<li>le nom et les coordonnées de lentreprise commerciale à qui a été confiée la responsabilité deffectuer les épreuves détanchéité, le cas échéant</li>
</ul>  <h6>D.7.1.5 Systèmes de sûreté</h6>  <p>Fournir la procédure pour remettre en service léquipement dont les systèmes de sûreté ont été défaillants.</p>  <p>La procédure devrait décrire :</p>
<ul>
<li>les systèmes de sûreté dont la défaillance entraînerait la mise hors service de léquipement</li>
<li>les méthodes mises en place pour alerter le personnel du contournement prévu, ou dune défaillance dun système de sûreté</li>
<li>les inspections et les essais requis afin de vérifier que les systèmes de sûreté fonctionnent bien</li>
<li>les méthodes employées pour aviser le personnel que la défaillance a été réparée ou que la fonction de contournement a été réactivée</li>
<li>le titre du poste de la personne qualifiée pour approuver la remise en service de léquipement </li>
<li>le titre du poste de la personne responsable de la conservation des documents dentretien et des approbations</li>
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
<div id="PartE"></div>
<h3 id="PartE">PARTIE E : Exploitation courante et confirmation de la conception de linstallation</h3>  <p>Cette partie décrit linformation que le demandeur doit fournir, y compris les politiques indiquant qui peut exploiter ou entretenir léquipement réglementé, les procédures de démarrage et darrêt de léquipement, les méthodes et léquipement utilisés pour les contrôles radiologiques, le cas échéant, les procédures de production et de traitement des isotopes, les résultats des essais des systèmes de sûreté et des contrôles radiologiques, et les procédures durgence.</p>  <p>Sil ne la pas déjà fait, le demandeur doit fournir les renseignements indiqués dans les deux sections suivantes lorsquil demande une modification dexploitation courante pour un permis existant dexploitation en vue dune mise en service.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartE.1"></div>
<h4 id="PartE-1">E.1 Exploitation courante</h4>  <h5>E.1.1 Procédures dexploitation &ndash; Généralités</h5>  <p>Fournir les procédures dexploitation de linstallation.</p>  <p>Ces procédures devraient décrire :</p>
<ul>
<li>le titre du poste des personnes qui peuvent exploiter léquipement réglementé ou lentretenir. Seul le personnel formé et autorisé devrait avoir accès à léquipement réglementé ou lexploiter, et avoir accès aux zones sous rayonnement</li>
<li>les méthodes, léquipement et les instructions pour les contrôles radiologiques, y compris :
<ul>
<li>la fréquence de ces contrôles</li>
<li>lendroit où ils seront effectués</li>
</ul></li>
<li>les protocoles quotidiens de démarrage, de réchauffage, darrêt de léquipement et dactivation ou de désactivation du rayonnement</li>
<li>les consignes au personnel pour sassurer quaucune personne (autre que le patient traité) ne se trouve dans la salle pendant que léquipement fonctionne</li>
</ul>   <h6>E.1.1.1	Procédures dexploitation &ndash; Installations de production disotopes</h6>  <p>Outre les exigences applicables de la section E.1.1, fournir les procédures qui seront suivies en cas de défaillance du système de ventilation et pour la vérification périodique des rejets par la cheminée.</p>
<h5>E.1.2 Procédures de traitement &ndash; Installations de production disotopes</h5>  <p>Outre les exigences applicables de la section E.1.1, fournir la procédure de traitement des isotopes, y compris :</p>
<ul>
<li>la liste des radio-isotopes traités</li>
<li>la description :
<ul>
<li>des moyens visant à prévenir les déversements et à atténuer leurs effets</li>
<li>des méthodes et de léquipement employés pour le contrôle de la contamination</li>
<li>des méthodes et des instruments proposés pour effectuer les contrôles de la contamination, y compris la fréquence des contrôles</li>
<li>des moyens employés pour transférer le produit fini hors du lieu de confinement</li>
<li>des moyens employés pour enlever les déchets radioactifs et les autres déchets dangereux hors du lieu de confinement</li>
<li>des dispositions relatives à létiquetage des conteneurs</li>
</ul></li>
</ul>
<h5>E.1.3 Accélérateur de diagraphie géophysique &ndash; Instructions dexploitation</h5>  <p>Fournir les instructions données aux travailleurs au sujet de lexploitation sécuritaire de laccélérateur. Ces instructions devraient indiquer :</p>
<ul>
<li>la description :
<ul>
<li>des outils spécifiques qui peuvent être utilisés, p. ex., les outils télémanipulés</li>
<li>de la procédure utilisée dans des circonstances exceptionnelles, p. ex., la récupération dun outil au fond dun trou</li>
<li>du programme dinspection et de vérification de léquipement visé par le permis</li>
<li>de lexploitation sur le terrain</li>
<li>des consignes de sécurité et des procédures durgence</li>
</ul></li>
</ul>
<h5>E.1.4 Procédures durgence &ndash; Généralités</h5>  <p>Fournir la procédure utilisée en cas dune urgence radiologique qui pourrait entraîner lexposition au rayonnement du personnel ou du public, causer la contamination par des substances nucléaires, ou les deux.</p>  <p>Une intervention prompte et adéquate est essentielle pour limiter les dommages pouvant résulter dun accident radiologique.</p>  <p>La procédure durgence devrait décrire :</p>
<ul>
<li>le titre du poste de la personne responsable détablir les mesures correctives et den diriger lapplication</li>
<li>lemplacement de léquipement durgence et leurs consignes dutilisation</li>
<li>les dispositions prises pour :
<ul>
<li>évacuer la zone immédiate où sest produit lincident et contrôler laccès au site</li>
<li>limiter les doses de rayonnement au personnel de linstallation</li>
<li>limiter létendue de la contamination</li>
<li>surveiller les rejets potentiels du site</li>
<li>identifier, isoler et traiter les travailleurs et autres personnes susceptibles dêtre contaminés ou davoir reçu une dose élevée de rayonnement</li>
<li>détecter ou estimer la quantité de substances nucléaires en cause</li>
<li>décontaminer le site, léquipement, les travailleurs et les autres personnes</li>
<li>consigner les détails de lurgence, et aviser la Commission conformément aux exigences réglementaires</li>
</ul></li>
</ul>  <h6>E.1.4.1 Procédures durgence &ndash; Installations médicales</h6>  <p>Outre les procédures applicables énumérées à la section E.1.4, pour les appareils de téléthérapie et les appareils de curiethérapie à projecteur de source télécommandé à débit de dose élevé (HDD) et à débit de dose pulsé (DDP), fournir la procédure prévue si la source est bloquée.</p>
<h6>E.1.4.2 Procédures durgence &ndash; Installations de production disotopes</h6>  <p>Outre les procédures applicables énumérées à la section E.1.4, fournir les procédures prévues pour les situations suivantes :</p>
<ul>
<li>un bris de laccélérateur</li>
<li>la perte de confinement des isotopes lors de la production ou du traitement, après une rupture de la cible, une rupture des conduites de transfert ou un déversement dans le laboratoire</li>
<li>un incendie</li>
<li>le déversement de produits chimiques toxiques</li>
<li>la perte ou le vol de substances nucléairesm</li>
<li>lexposition accidentelle du personnel de linstallation ou du public au rayonnement</li>
</ul>  <h6>E.1.4.3	Procédures durgence &ndash; Accélérateur de diagraphie géophysique</h6>  <p>Outre les procédures applicables énumérées à la section E.1.4, fournir les procédures prévues pour :</p>
<ul>
<li>la récupération des outils de diagraphie et des sources dans les trous de forage, au moyen des outils de repêchage</li>
<li>labandon des outils de diagraphie et des sources scellées lorsquils ne peuvent être récupérés</li>
<li>le maintien dune liste de léquipement durgence disponible et des personnes-ressources en cas durgence</li>
</ul>
<h5>E.1.5 Vérification des systèmes de sûreté</h5>  <p>Fournir la procédure de vérification des systèmes de sûreté et des mécanismes de contrôle.</p>  <p>La procédure devrait décrire :</p>
<ul>
<li>les étapes requises pour la réalisation des essais</li>
<li>la fréquence des essais (cette fréquence devrait être égale ou supérieure aux normes de lindustrie)</li>
<li>le titre et le nom des personnes chargées deffectuer les essais</li>
<li>la liste de vérification ou tout autre système utilisé pour consigner les résultats des essais</li>
<li>les mesures à prendre lorsquune défaillance est détectée</li>
</ul>  <h6>E.1.5.1	Vérification des systèmes de sûreté – Radiothérapie à bras robotique</h6>  <p>Outre les procédures applicables indiquées à la section E.1.5, fournir :</p>
<ul>
<li>la procédure permettant de vérifier que cet équipement fonctionne après la désactivation du contournement</li>
<li>la procédure permettant de vérifier lintégrité des dispositifs darrêt de faisceau virtuels, le cas échéant</li>
</ul>
<h5>E.1.6 Instructions spéciales à lintention du personnel infirmier &ndash; Curiethérapie à débit de dose pulsé</h5>  <p>Fournir les instructions spéciales à lintention du personnel infirmier dans les installations de curiethérapie à débit de dose pulsé (DDP), y compris :</p>
<ul>
<li>les instructions générales et les précautions à suivre pour maintenir le degré dexposition au rayonnement du personnel infirmier au niveau ALARA</li>
<li>les consignes à suivre si une erreur se produit ou lors dune interruption du traitement</li>
<li>les procédures de radioprotection à suivre pour les interventions médicales urgentes (p. ex. arrêt cardiaque ou respiratoire) auprès dun patient durant un traitement à DDP</li>
</ul>
<h5>E.1.7 Procédures dentretien</h5>  <p>Pour chaque marque et modèle dun équipement réglementé de catégorie II couvert par le permis dentretien ou le permis consolidé, fournir les procédures dentretien, y compris celles visant à assurer la sécurité du personnel dentretien.</p>
<h5>E.1.8 Exigences pour les titulaires de permis qui ne disposent pas dun permis dentretien déquipement réglementé</h5>  <p>Des travaux dentretien denvergure de léquipement réglementé de catégorie II ne peuvent être faits quen vertu dun permis dentretien dun tel équipement ou dun permis consolidé délivré par la CCSN, qui spécifie le fabricant et le modèle de léquipement à entretenir.  Même si le demandeur nentend pas obtenir un permis dentretien, certains types de travaux dentretien de routine sont néanmoins assujettis à lapprobation de la CCSN. Dans un tel cas, fournir les renseignements suivants :</p>
<ul>
<li>une description des travaux dentretien de routine que le demandeur prévoit effectuer sur léquipement réglementé de catégorie II, indiquant clairement les opérations pouvant nécessiter le contournement des dispositifs de verrouillage de sécurité internes ou externes, y compris les dispositifs de verrouillage du logiciel</li>
<li>une description des conditions dans lesquelles ces travaux peuvent être effectués ainsi que le nom des personnes chargées de ces travaux</li>
<li>si les travaux dentretien envisagés exigent le contournement intentionnel dun dispositif de verrouillage, la politique de contournement proposée doit préciser :
<ul>
<li>le titre du poste des personnes chargées dautoriser le contournement</li>
<li>lobligation de conserver un dossier sur le contournement</li>
<li>lobligation dafficher un panneau davertissement au pupitre de commande en cas de contournement dun système de sûreté répertorié à la partie H</li>
<li>lobligation de désactiver le contournement et de vérifier le fonctionnement du dispositif de verrouillage avant de remettre léquipement en service</li>
</ul></li>
</ul>
<h5>E.1.9 Contrôle de laccès aux chantiers temporaires &ndash; Accélérateurs mobiles ou portatifs</h5>  <p>Fournir la procédure de restriction daccès à toute zone contrôlée dans laquelle le débit de dose pourrait dépasser 0,1 mSv/h durant le fonctionnement de laccélérateur mobile ou portatif.</p>
<p>La procédure doit décrire :</p>
<ul>
<li>lobligation dinstaller une barrière et dafficher un nombre suffisant de panneaux durables et lisibles portant le symbole de mise en garde contre les rayonnements indiqués dans lannexe 3 du <em>Règlement sur la radioprotection</em> et les mots « RAYONNEMENT &ndash; DANGER &ndash; <span lang="en">RADIATION</span> »</li>
<li>les mesures prises pour réduire au minimum lexposition du personnel au rayonnement si leurs déplacements ne peuvent être contrôlés par la barrière</li>
</ul>
<h5>E.1.10 Blindage portatif</h5>	  <p>Fournir la politique qui garantit que le blindage portatif est utilisé et placé correctement avant chaque traitement.</p>  <p>La politique doit préciser quun contrôle doit être effectué pour déterminer la position du blindage portatif qui permet datteindre des débits de dose dans une zone non contrôlée qui ne sont pas supérieurs à ceux auxquels est exposée la population générale.</p>  <p>En cas dutilisation de blindage portatif, en préciser les dimensions, lépaisseur et la composition.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartE.2"></div>
<h4 id="PartE-2">E.2 Confirmation de la mise en œuvre de la conception de linstallation</h4>  <h5>E.2.1 Confirmation du bon fonctionnement des systèmes de sûreté</h5>  <p>Fournir un rapport avec les résultats des essais de mise en service effectués pour vérifier que tous les systèmes de sûreté fonctionnent. Si un système de sûreté ne fonctionne pas, le rapport doit inclure une description des mesures correctives prises et des essais faits subséquemment pour confirmer que toute défaillance a été corrigée. Le rapport doit dresser la liste des essais effectués sur :</p>
<ul>
<li>les dispositifs de verrouillage des portes et le circuit du bouton de délai, sil y a lieu</li>
<li>les indicateurs détat dirradiation</li>
<li>les avertisseurs pré-irradiation, sil y a lieu</li>
<li>les dispositifs darrêt durgence</li>
<li>les dispositifs de surveillance de zone et les alarmes</li>
<li>toutes les composantes des systèmes de surveillance et de confinement des rejets, sil y a lieu</li>
<li>pour les accélérateurs médicaux à bras robotique, les dispositifs de verrouillage des portes après la désactivation du contournement</li>
<li>pour des cyclotrons autoblindés, tout dispositif ou système de verrouillage conçu pour vérifier la fermeture normale du blindage ou pour surveiller son intégrité</li>
<li>tout autre dispositif de verrouillage de sûreté intégré à linstallation</li>
</ul>
<h5>E.2.2 Contrôle radiologique</h5>  <p>Fournir les résultats du contrôle radiologique, y compris :</p>
<ul>
<li>les conditions dexploitation de léquipement réglementé</li>
<li>la marque, le modèle, le numéro de série et la date détalonnage de chacun des radiomètres employés</li>
<li>les mesures des rayonnements photoniques et, au besoin, neutroniques</li>
<li>les endroits sur les plans et dessins de linstallation où les mesures ont été prises</li>
<li>une réévaluation des doses annuelles projetées pour le personnel et la population générale (voir la section B.1.5) daprès les débits de dose mesurés; si le débit de dose dans une zone donnée dépasse la valeur prévue selon les estimations originales de conception du blindage, décrire les mesures correctives prises pour réduire les doses que pourraient recevoir les personnes occupant la zone (p. ex. blindage supplémentaire, restriction et contrôle de laccès, limitation ou réduction de la charge de travail proposée ou faire la preuve que le degré dexposition au rayonnement du personnel est maintenu  au niveau ALARA et quaucune mesure corrective nest requise)</li>
<li>pour les accélérateurs de production disotopes et de recherche, la cible irradiée pendant le contrôle radiologique</li>
</ul>
<h5>E.2.3 Résultats de la mise en service &ndash; Installation de traitement des isotopes</h5>	  <p>Fournir un rapport contenant :</p>
<ul>
<li>la confirmation que linstallation de traitement a été construite conformément aux spécifications contenues dans le Formulaire dévaluation de la conception des laboratoires de substances nucléaires et des salles de médecine nucléaire. Les changements proposés aux caractéristiques de conception à cause des lacunes décelées au cours de la mise en service doivent être présentés au personnel de la CCSN aux fins dévaluation et dapprobation</li>
<li>les résultats des essais auxquels ont été soumis tous les dispositifs de verrouillage, autres systèmes de sûreté associés aux cellules de haute activité ou autre équipement de traitement connexe</li>
<li>les résultats de létalonnage des contrôles de la cheminée</li>
<li>la confirmation que le système de ventilation fonctionne</li>
<li>les résultats du contrôle radiologique effectué pour vérifier le caractère adéquat du blindage intégré aux cellules de haute activité et le long des conduites de transfert</li>
<li>une évaluation des doses aux extrémités prévues</li>
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
<div id="PartF"></div>
<h3 id="PartF">PARTIE F : Déclassement</h3>  <p>Cette partie du guide décrit linformation que le demandeur doit soumettre, notamment le plan de déclassement proposé, la formation et les compétences du personnel qui participera au déclassement, une estimation du type et de lactivité des substances nucléaires restantes à la fin de lexploitation, les doses de rayonnement produites, les méthodes délimination de léquipement réglementé et des substances nucléaires et dangereuses et létat final de linstallation.</p>  <p>Le demandeur doit démontrer dans sa demande de permis pour le déclassement dune installation quil y a un plan de déclassement approprié et bien défini pour léquipement réglementé et toute installation connexe, comme les installations de traitement des isotopes. Ce plan doit prévoir des mesures visant à assurer que les membres du personnel participant au déclassement auront la supervision, la formation et léquipement nécessaires pour accomplir leurs tâches en toute sécurité.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartF.1"></div>
<h4 id="PartF-1">F.1 Plan de déclassement</h4>  <h5>F.1.1 Aperçu du plan de déclassement</h5>  <p>Fournir un aperçu des travaux de déclassement comprenant notamment :</p>
<ul>
<li>une liste des terrains, des bâtiments, des ouvrages, des composants, des systèmes, de léquipement, des substances nucléaires et dangereuses qui seront touchés par le déclassement</li>
<li>un calendrier de déclassement</li>
<li>une description des effets, le cas échéant, du déclassement sur lenvironnement ainsi que sur la santé et la sécurité des personnes, et des mesures qui seront prises pour éviter ou atténuer ces effets</li>
<li>une description de létat prévu du site après le déclassement. Spécifier si des matières radioactives, des contaminants ou autres substances dangereuses resteront sur le site par la suite</li>
</ul>
<h5>F.1.2 Qualifications et formation du personnel</h5>  <p>Fournir les renseignements suivants :</p>
<ul>
<li>le titre du poste de la personne responsable de la planification et de la supervision des activités de déclassement; sil ne sagit pas du RRP dont le nom figure dans la section B.1.1., la formation et lexpérience de cette personne ainsi que son poste et ses responsabilités au sein de lorganisation</li>
<li>les responsabilités des travailleurs participant aux activités de déclassement et les exigences auxquelles ils doivent satisfaire sur le plan des qualifications et de la formation; si le demandeur confie des travaux de déclassement à un sous-traitant, le nom et les coordonnées de lentreprise en question et comment il sassurera que lentreprise offre à ses travailleurs une formation en radioprotection appropriée aux travaux à faire</li>
<li>étant donné quil faut détenir un permis dentretien déquipement réglementé de catégorie II pour démanteler léquipement réglementé, le numéro du permis en vertu duquel les travaux de déclassement seront effectués, ainsi que le titre de la personne qui supervisera ces travaux, sil ne sagit pas du RRP</li>
</ul>
<h5>F.1.3 Estimation du type, du niveau dactivité et des doses de rayonnement dues aux substances nucléaires</h5>  <p>Fournir une description de la nature, du type et du niveau dactivité de toute substance nucléaire ou des contaminants présents dans linstallation. Fournir une liste des sources scellées et non scellées, des articles ou composants activés ou contaminés présents au moment du déclassement.</p>  <p>Compte tenu de ces renseignements, fournir une estimation des débits de dose maximaux auxquels les personnes pourraient être exposées et de la dose maximale de rayonnement que toute personne pourrait recevoir en raison du déclassement.</p>
<h5>F.1.4 Évacuation de léquipement réglementé de catégorie II, des substances nucléaires et des matières dangereuses</h5>  <p>Décrire la méthode dévacuation proposée de tous les composants principaux de léquipement réglementé. Si le demandeur prévoit transférer léquipement entier ou certain de ses principaux composants à un autre établissement où cet équipement pourrait être éventuellement réutilisé, il doit indiquer le nom et les coordonnées du destinataire.</p>  <p>Spécifier la méthode dévacuation de toutes les substances nucléaires et de tous les composants activés qui sera utilisée. Voir l<a href="#AppJ">annexe J : Élimination des composants radioactifs</a> pour les temps dattente requis pour lévacuation de composants activés de certains modèles daccélérateurs. Spécifier la méthode pour évacuer les matières potentiellement dangereuses (p. ex. le SF6) qui sera utilisée. Si ces substances sont rejetées dans lenvironnement, préciser les quantités et les concentrations maximales qui peuvent être rejetées. Confirmer que tous les rejets de substances nucléaires respecteront les limites établies dans le <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>. Si le demandeur a lintention de transférer des substances nucléaires ou des composants activés à un autre titulaire de permis, fournir le nom et ladresse du titulaire de permis et son numéro de permis.</p>
<h5>F.1.5 Évacuation de léquipement réglementé de catégorie II, des substances nucléaires et des matières dangereuses &ndash; Installations de production disotopes</h5>  <p>Décrire les méthodes dévacuation proposées de tous les principaux composants des installations de traitement, y compris des cellules chaudes. Indiquer les mesures proposées pour contrôler les rejets de substances nucléaires et de substances dangereuses dans lenvironnement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartG"></div>
<h3 id="PartG">PARTIE G : Renouvellement de permis</h3>  <p>Cette partie du guide décrit linformation que le demandeur devrait fournir, notamment un résumé des plus récents résultats de dosimétrie pour tous ses travailleurs, linventaire des sources scellées, les événements à déclaration obligatoire qui se sont produits au cours de la période dautorisation précédente, un résumé de la charge de travail de linstallation, les résultats du plus récent contrôle radiologique et un résumé du nombre et des types dactivités dentretien effectuées sur léquipement durant la période dautorisation précédente.</p>  <p>On décrit dans cette section les renseignements que le demandeur devrait fournir pour obtenir le renouvellement dun permis dinstallation nucléaire de catégorie II. La plupart des renseignements exigés constituent essentiellement une mise à jour des principaux éléments dinformation fournis dans une demande de permis précédente.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartG.1"></div>
<h4 id="PartG-1">G.1 Information pour le renouvellement dun permis</h4>  <h5>G.1.1 Sommaire de doses de rayonnement</h5>  <p>Fournir un rapport résumant les résultats de la dosimétrie annuelle de tous les travailleurs contrôlés pour les cinq années précédentes. Dans le cas de groupes de travailleurs contrôlés ayant reçu des doses dexposition nettement différentes, le résumé doit grouper les résultats par types de travail, dexposition et de substances nucléaires manipulées ou par lieu du travail. Spécifier le service de dosimétrie utilisé.</p>  <p>Pour le résumé, indiquer le nombre de personnes qui a reçu une dose efficace annuelle dans chacune des plages suivantes :</p>
<ul>
<li>&lt;&nbsp;0,5 mSv</li>
<li>&gt;&nbsp;0,5 mais &le;&nbsp;1,0 mSv</li>
<li>&ge;&nbsp;1,0 mSv mais &lt;&nbsp;5,0 mSv</li>
<li>&ge;&nbsp;5,0 mSv mais &lt;&nbsp;20,0 mSv</li>
<li>&ge;&nbsp;20,0 mSv</li>
</ul>  <p>Sil y a lieu, indiquer aussi le nombre de personnes qui a reçu une dose aux extrémités dans chacune des plages suivantes :</p>
<ul>
<li>&lt;&nbsp;50 mSv</li>
<li>&ge;&nbsp;50 mSv mais &lt;&nbsp;100 mSv</li>
<li>&gt;&nbsp;100 mSv mais &lt;&nbsp;200 mSv</li>
<li>&gt;&nbsp;200 mSv mais &lt;&nbsp;500 mSv</li>
<li>&ge;&nbsp;500 mSv</li>
</ul>
<h5>G.1.2 Sources scellées acquises, transférées ou évacuées</h5>  <p>Fournir la liste de toutes les sources scellées acquises, transférées ou évacuées au cours de la période dautorisation précédente.</p>  <p>Les règlements exigent que les documents ayant trait aux acquisitions, évacuations et transferts de sources scellées spécifient :</p>
<ul>
<li>le nom, lactivité et la forme de la source acquise, transférée ou évacuée</li>
<li>le modèle et le numéro de série de la source</li>
<li>la méthode dévacuation</li>
<li>la date de réception, de transfert ou dévacuation</li>
<li>le nom, ladresse et le numéro de permis du fournisseur ou du destinataire</li>
</ul>  <h6>G.1.2.1 Substances nucléaires ou déchets radioactifs transférés ou évacués</h6>  <p>Fournir un résumé des substances nucléaires et des déchets radioactifs transférés, évacués, rejetés ou abandonnés lors de la période dautorisation précédente.</p>  <p>Pour chaque substance ou déchet, spécifier les quantités de rejets des substances nucléaires, ainsi que la méthode utilisée (système municipal de collecte des ordures, égouts municipaux, rejet dans latmosphère, etc.).</p>  <p>Les registres dévacuation doivent indiquer :</p>
<ul>
<li>le nom, lactivité et la forme de la substance nucléaire</li>
<li>le type de déchet radioactif à évacuer</li>
<li>la date du transfert ou de lévacuation</li>
<li>la méthode dévacuation</li>
<li>le nom, ladresse et le numéro de permis pour les transferts à une organisation détenant un permis de déchets de substances nucléaires, sil y a lieu</li>
</ul>
<h5>G.1.3 Inventaire des sources scellées</h5>  <p>Fournir un inventaire des sources scellées que possède le titulaire du permis. Inclure les sources en réserve, stockées, utilisées ou destinées à lévacuation. Les registres dinventaire doivent fournir linformation suivante :</p>
<ul>
<li>le nom de la substance nucléaire dans la source, sa quantité et sa forme</li>
<li>lendroit où la source est stockée</li>
<li>le modèle et le numéro de série de la source</li>
<li>lutilisation initialement prévue de la source</li>
</ul>
<h5>G.1.4 Incidents à déclaration obligatoire</h5>  <p>Fournir un résumé de tous les incidents déclarés à la Commission conformément à la LSRN, les règlements ou le permis durant la période dautorisation précédente. Inclure la description des mesures correctives prises pour éviter que ces incidents ne se reproduisent.</p>
<h5>G.1.5 Analyse de loccupation des zones adjacentes</h5>  <p>Fournir une mise à jour des renseignements requis à la section B.1.5 du guide en ce qui concerne lutilisation et loccupation des zones adjacentes à linstallation nucléaire de catégorie II. Faire ressortir tout changement par rapport à la conception originale de linstallation.</p>
<h5>G.1.6 Analyse de la charge de travail</h5>  <p>Fournir un résumé de la charge de travail annuelle de léquipement réglementé dans le même format que celui utilisé dans la demande de permis de construction, sauf indication contraire.</p>  <h6>G.1.6.1	Charge de travail &ndash; Accélérateurs médicaux et à des fins vétérinaires et appareils de téléthérapie</h6>  <p>Spécifier la charge de travail annuelle totale prévue sous forme de dose de rayonnement primaire émise à lisocentre, en centigray (cGy), et indiquer la distance depuis laxe du foyer ou depuis laxe de la source. Pour les accélérateurs, si le nombre total dunités moniteurs (UM) produites diffère nettement de la dose émise à lisocentre en raison du fréquent recours à la radiothérapie par modulation dintensité (RTMI), ou à dautres techniques de modulation de faisceaux, préciser le nombre annuel total dUM produites.</p>
<p>Spécifier la charge de travail annuelle maximale que la conception de linstallation autorise. Si la charge de travail théorique nest pas connue, comme ce peut être le cas pour les appareils de téléthérapie autorisés avant lan 2000, indiquez la tendance historique de la charge de travail totale pour les cinq dernières années.</p>  <h6>G.1.6.2	Charge de travail &ndash; Appareils de curiethérapie à projecteur de source télécommandé</h6>  <p>Spécifier la charge de travail annuelle totale de lappareil de curiethérapie à projecteur de source télécommandé. Consulter la section B.1.3.2 pour une description des formats appropriés pour la charge de travail de cet équipement.</p>  <p>Spécifier la charge de travail annuelle maximale que la conception de linstallation autorise. Si la charge de travail théorique nest pas connue, indiquez la tendance historique de la charge de travail totale pour les cinq dernières années.</p>  <h6>G.1.6.3	Charge de travail &ndash; Installations industrielles et de recherche</h6>  <p>Spécifier la charge de travail pour chaque type de faisceau, le potentiel daccélération, lintensité du faisceau et le matériau des cibles. Pour les irradiateurs, inclure la charge de travail pour les isotopes utilisés. Indiquer aussi la charge de travail annuelle maximale prévue dans les plans de linstallation.</p>  <h6>G.1.6.4	Charge de travail &ndash; Installations de production disotopes</h6>  <p>Dresser une liste de chacun des paramètres indiqués dans le tableau sommaire accompagnant le formulaire de demande. Pour chaque réaction et chaque produit final, veuillez également fournir la charge de travail maximale autorisée selon la conception de linstallation.</p>
<h5>G.1.7 Contrôle radiologique</h5>  <p>Fournir les résultats des plus récents contrôles du rayonnement photonique et neutronique. Ces contrôles devraient avoir été faits en fonction de la pire situation. Les résultats doivent comprendre des plans de linstallation montrant clairement les endroits où ont été faits les relevés. Des mesures doivent être prises dans chaque zone adjacente de linstallation énumérée dans la section B.1.2.</p>
<h5>G.1.8 Opérations dentretien</h5>  <p>Fournir un rapport qui résume le nombre et les types dopérations dentretien effectuées sur léquipement réglementé durant la période dautorisation en cours.</p>
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
<h2 id="AppA">Annexe A : Attentes relatives à loctroi de permis et exigences réglementaires</h2>
<table className="width-100">  <tr>
<th>Numéro de la section</th>
<th className="text-center">Titre</th>
<th className="text-center">Référence réglementaire</th>  </tr>  <tr>
<td className="text-center">A.1.1</td>
<td>Type de demande</td>
<td>RGSRN, 3.1(b)</td>  </tr>  <tr>
<td className="text-center">A.1.2</td>
<td>Langue du permis</td>
<td>LLO, 26</td>  </tr>  <tr>
<td className="text-center">A.1.3</td>
<td>Renseignements sur le demandeur</td>
<td>RGSRN, 3.1(a)</td>  </tr>  <tr>
<td className="text-center">A.1.4</td>
<td>Preuve de statut juridique</td>
<td>RGSRN, 3.1(a)</td>  </tr>  <tr>
<td className="text-center">A.1.5</td>
<td>Accès du public à linformation</td>
<td>LAI, 20</td>  </tr>  <tr>
<td className="text-center">A.1.6</td>
<td>Personne-ressource pour la facturation des droits</td>
<td>S.O.</td>  </tr>  <tr>
<td className="text-center">A.1.7</td>
<td>Garanties financières</td>
<td>RGSRN, 3.1(l)</td>  </tr>  <tr>
<td className="text-center">A.1.8</td>
<td>Représentant autorisé du demandeur ou du titulaire de permis</td>
<td>RGSRN, 15</td>  </tr>  <tr>
<td className="text-center">A.2.1</td>
<td>TYpe de demande</td>
<td>RGSRN, 3.1(b)</td>  </tr>  <tr>
<td className="text-center">A.2.2</td>
<td>Lieu principal dutilisation ou de stockage, ou les deux &ndash; Installations</td>
<td>RGSRN, 3.1(d;, CII, 3(e)</td>  </tr>  <tr>
<td className="text-center">A.2.3</td>
<td>Lieu principal dutilisation ou de stockage, ou les deux &ndash; Équipement réglementé</td>
<td>RGSRN, 3.1(d); CII 3(e)</td>  </tr>  <tr>
<td className="text-center">A.2.4</td>
<td>Lieu principal dutilisation ou de stockage, ou les deux &ndash; Curiethérapie manuelle</td>
<td>RSNAR, 3.1(d)</td>   </tr>  <tr>
<td className="text-center">A.2.5</td>
<td>Lieu principal dutilisation ou de stockage, ou les deux –Substances nucléaires non scellées</td>
<td>RSNAR, 3.1(d)</td>  </tr>  <tr>
<td className="text-center">A.2.6</td>
<td>Autres lieux</td>
<td>RGSRN, 3.1(a), CII, 3(e)</td>  </tr>  <tr>
<td className="text-center">A.3.1</td>
<td>Équipement réglementé de catégorie II</td>
<td>CII, 3(c); CII, 3(k); CII, 4(e); CII, 4(i); RGSRN, 3.1(d); CII, 7(a); CII, 10</td>  </tr>  <tr>
<td className="text-center">A.3.2</td>
<td>Substances nucléaires &ndash; Sources scellées et composants activés</td>
<td>CII, 3(c); RGSRN, 3.1(c)</td>  </tr>  <tr>
<td className="text-center">A.3.3</td>
<td>Cibles de laccélérateur &ndash; Production disotopes</td>
<td>RGSRN, 3.1(c); CII, 3(c); CII, 3(k)</td>  </tr>  <tr>
<td className="text-center">B.1.1</td>
<td>Plans et dessins de linstallation</td>
<td>RGSRN, 3.1(d); CII, 3(e); CII; 3(h)</td>  </tr>  <tr>
<td className="text-center">B.1.2</td>
<td>Classification des zones adjacentes</td>
<td>RGSRN, 3.1(d); CII, 3(f)</td>  </tr>  <tr>
<td className="text-center">B.1.3</td>
<td>Charge de travail &ndash; Généralités</td>
<td>CII, 3(n); CII, 3(o); CII, 4(p); CII, 4(q)</td>  </tr>  <tr>
<td className="text-center">B.1.4</td>
<td>Objectifs de dose nominale</td>
<td>CII, 3(l); RP 4(a)</td>  </tr>  <tr>
<td className="text-center">B.1.5</td>
<td>Calcul des doses annuelles et des débits de dose &ndash; Généralités</td>
<td>CII,3(l); RGSRN, 3.1(i); CII.3(p)</td>  </tr>  <tr>
<td className="text-center">B.1.6</td>
<td>Évaluation de lactivation de lair et de la production dozone &ndash; Accélérateurs industriels délectrons et irradiateurs de type piscine</td>
<td>RGSRN, 3.1(i)</td>  </tr>  <tr>
<td className="text-center">B.1.7</td>
<td>Description des cibles de production disotopes</td>
<td>RGSRN, 3.1(c); CII,3(c); Cll.3(k)</td>  </tr>  <tr>
<td className="text-center">B.1.8</td>
<td>Description des installations de traitement disotopes</td>
<td>RSNAR, 3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.9</td>
<td>Description de cellules radiochimiques de haute activité et des stations de traitement</td>
<td>RSNAR, 3.1(a); RSNAR, 3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.10</td>
<td>Transfert et traitement des isotopes</td>
<td>RSNAR, 3.1(d), RSNAR, 3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.11</td>
<td>Dispositifs darrêt du faisceau</td>
<td>CII,3(m); CII,4(j)</td>  </tr>  <tr>
<td className="text-center">B.1.12</td>
<td>Mesures de sécurité</td>
<td>RGSRN, 3.1(g); RGSRN, 3.1(h)</td>  </tr>  <tr>
<td className="text-center">B.1.13</td>
<td>Autres exigences pour les irradiateurs de type piscine</td>
<td>Note 1</td>  </tr>  <tr>
<td className="text-center">B.1.14</td>
<td>Autres considérations techniques &ndash; Installations de production disotopes</td>
<td>CII,3(i)</td>  </tr>  <tr>
<td className="text-center">B.2.1</td>
<td>Dispositifs de verrouillage des portes</td>
<td>CII,15.2; CII,15.3</td>  </tr>  <tr>
<td className="text-center">B.2.2</td>
<td>Indicateurs de létat dirradiation</td>
<td>CII,15.5</td>  </tr>  <tr>
<td className="text-center">B.2.3</td>
<td>Avertisseurs pré-irradiation</td>
<td>CII,4(n); CII,15.6</td>  </tr>  <tr>
<td className="text-center">B.2.4</td>
<td>Dispositifs ou boutons darrêt durgence</td>
<td>CII,15.8; CII,15.9</td>  </tr>  <tr>
<td className="text-center">B.2.5</td>
<td>Moniteurs de rayonnement &ndash; Généralités</td>
<td>CII,15.6</td>  </tr>  <tr>
<td className="text-center">B.2.6</td>
<td>Système de visualisation &ndash; Installations médicales et vétérinaires</td>
<td>CII,15.4</td>  </tr>  <tr>
<td className="text-center">B.2.7</td>
<td>Outils et équipement en cas de blocage de la source &ndash; Appareils de curiethérapie à projecteur de source télécommandé et appareils de téléthérapie</td>
<td>CII,16.2(b); CII,16.2(c)</td>  </tr>  <tr>
<td className="text-center">B.2.8</td>
<td>Surveillance et confinement des rejets de radio-isotopes &ndash; Installations de production disotopes</td>
<td>RGSRN, 12.1(f); RSNAR, 3.1(b)(i)</td>  </tr>  <tr>
<td className="text-center">B.2.9</td>
<td>Système de surveillance de la ventilation &ndash; Installations de production disotopes</td>
<td>RGSRN, 12.1(c); CII,3(i)</td>  </tr>  <tr>
<td className="text-center">B.2.10</td>
<td>Système de surveillance de la contamination du personnel &ndash; Installations de production disotopes</td>
<td>RGSRN, 12.1(f); RSNAR, 3.1(b)(iii)</td>  </tr>  <tr>
<td className="text-center">B.2.11</td>
<td>Système dalarme à distance pour les appareils de curiethérapie à projecteur de source télécommandé et à débit de dose pulsé</td>
<td>CII,16.1.2(a)</td>  </tr>  <tr>
<td className="text-center">B.3.1</td>
<td>Programme dinformation</td>
<td>CII,3(r)</td>  </tr>  <tr>
<td className="text-center">B.3.2</td>
<td>Plan préliminaire de déclassement</td>
<td>CII,3(s); RGSRN, 3.1(j)</td>  </tr>  <tr>
<td className="text-center">C.1.1</td>
<td>Plan de confirmation de la conception de linstallation &ndash; Généralités</td>
<td>CII,3(g); CII,3(j); CII,4(b); CII,4(k)</td>  </tr>  <tr>
<td className="text-center">C.1.2</td>
<td>Plan de confirmation de la conception de linstallation &ndash; Installations de traitement disotopes</td>
<td>CII,4(b)</td>  </tr>  <tr>
<td className="text-center">D.1.1</td>
<td>Programme dinformation publique &ndash; Irradiateurs de type piscine et accélérateurs de production des isotopes</td>
<td>RD/GD-99.3</td>  </tr>  <tr>
<td className="text-center">D.1.2</td>
<td>Description du poste de responsable de la radioprotection</td>
<td>RGSRN, 3.1(k); RGSRN, 3.1.1</td>  </tr>  <tr>
<td className="text-center">D.1.3</td>
<td>Structure de gestion</td>
<td>RGSRN, 3.1(k)</td>  </tr>  <tr>
<td className="text-center">D.1.4</td>
<td>Comité de radioprotection</td>
<td>RGSRN, 3.1(k)</td>  </tr>  <tr>
<td className="text-center">D.1.5</td>
<td>Exigences relatives aux rapports</td>
<td>RGSRN, 29</td>  </tr>  <tr>
<td className="text-center">D.1.6</td>
<td>Programme dassurance de la qualité</td>
<td>CII,4(h); CII,3(j)</td>  </tr>  <tr>
<td className="text-center">D.1.7</td>
<td>Contrôle des documents</td>
<td>CII,21; RP,24; RGSRN, 27, RGSRN, 28</td>  </tr>  <tr>
<td className="text-center">D.2.1</td>
<td>Politique ALARA</td>
<td> RP,4(a)</td>  </tr>  <tr>
<td className="text-center">D.2.2</td>
<td>Désignation des travailleurs du secteur nucléaire</td>
<td>RP,7; RP,9; RP,10; RP,11</td>  </tr>  <tr>
<td className="text-center">D.2.3</td>
<td>Surveillance des doses individuelles &ndash; Généralités</td>
<td>RP,5</td>  </tr>  <tr>
<td className="text-center">D.2.4</td>
<td>Seuils dintervention</td>
<td>RP,6, RGSRN, 3.1(f)</td>  </tr>  <tr>
<td className="text-center">D.2.5</td>
<td>Radiamètres</td>
<td>CII,18; RSNAR, 20</td>  </tr>  <tr>
<td className="text-center">D.2.6</td>
<td>Contrôle de la contamination radioactive</td>
<td>RGSRN, 12.1(f); RSNAR, 3.1(b)(iii)</td>  </tr>  <tr>
<td className="text-center">D.2.7</td>
<td>Salles et pièces &ndash; Affichage de mise en garde contre les rayonnements</td>
<td>RP,21; RP,22; RSNAR, 23(a); CII,15(11)</td>  </tr>  <tr>
<td className="text-center">D.2.8</td>
<td>Remplacement des sources scellées</td>
<td>CII,7(c); CII,17</td>  </tr>  <tr>
<td className="text-center">D.2.9</td>
<td>Manipulation des sources scellées</td>
<td>RETSN, 15; RETSN, 21; GN12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.2.10</td>
<td>Contrôle des patients après le traitement &ndash; Curiethérapie à projecteur de source télécommandé</td>
<td>CII,16.1(1)</td>  </tr>  <tr>
<td className="text-center">D.2.11</td>
<td>Comptabilisation des sources après la pose dun implant</td>
<td>RGSRN, 3.1(h)</td>  </tr>  <tr>
<td className="text-center">D.2.12</td>
<td>Instructions à lintention des patients après linsertion dun implant</td>
<td>RP,3</td>  </tr>  <tr>
<td className="text-center">D.2.13</td>
<td>Contrôle radiologique des salles de traitement des patients</td>
<td>RGSRN, 12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.2.14</td>
<td>Intervention en cas dincendie</td>
<td>RGSRN, 12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.3.1</td>
<td>Qualifications et fonctions des travailleurs</td>
<td>CII,4(s); CII,7(d)</td>  </tr>  <tr>
<td className="text-center">D.3.2</td>
<td>Programme de formation</td>
<td>CII,4(s); RP,4(a)(ii); RGSRN, 12.1(j), CII,7(d)</td>  </tr>  <tr>
<td className="text-center">D.4.1</td>
<td>Gestion des déchets radioactifs et autres déchets dangereux</td>
<td>RGSRN, 3(1)(j)</td>  </tr>  <tr>
<td className="text-center">D.5.1</td>
<td>Contrôle de laccès et sécurité matérielle</td>
<td>RGSRN, 3.1(g); RGSRN, 12.1(g); RGSRN, 12.1(h); RGSRN, 12.1(j); CII,15.12; REGDOC-2.12.3</td>  </tr>  <tr>
<td className="text-center">D.5.2</td>
<td>Contrôle de linventaire</td>
<td>RGSRN, 12.1(g), RGSRN, 12.1(h), CII.21.5, RGSRN, 12.1(j), RGSRN, 3.1(h), RSNAR, 36.1, REGDOC-2.12.3</td>  </tr>  <tr>
<td className="text-center">D.6.1</td>
<td>Emballage et transport des substances nucléaires</td>
<td>RETSN, 15; RETSN, 21; RGSRN, 13</td>  </tr>  <tr>
<td className="text-center">D.7.1</td>
<td>Programme daptitude fonctionnelle</td>
<td>CII,18; RSNAR, 3.1(i); CII,16.2</td>  </tr>  <tr>
<td className="text-center">E.1.1</td>
<td>Procédures dexploitation &ndash; Généralités</td>
<td>CII,4(f)</td>  </tr>  <tr>
<td className="text-center">E.1.2</td>
<td>Procédures de traitement &ndash; Installations de production disotopes</td>
<td>RSNAR, 3.1(a)</td>  </tr>  <tr>
<td className="text-center">E.1.3</td>
<td>Accélérateur de diagraphie géophysique &ndash; Instructions dexploitation</td>
<td>RGSRN, 12.1(e)</td>  </tr>  <tr>
<td className="text-center">E.1.4</td>
<td>Procédures durgence &ndash; Généralités</td>
<td>RP,4(a)(iv)</td>  </tr>  <tr>
<td className="text-center">E.1.5</td>
<td>Vérification des systèmes de sûreté</td>
<td>RGSRN, 12.1(d)</td>  </tr>  <tr>
<td className="text-center">E.1.6</td>
<td>Instructions spéciales à lintention du personnel infirmier &ndash; Curiethérapie à débit de dose pulsé</td>
<td>RGSRN, 12.1(b)</td>  </tr>  <tr>
<td className="text-center">E.1.7</td>
<td>Procédures dentretien</td>
<td>CII,7(c)</td>  </tr>  <tr>
<td className="text-center">E.1.8</td>
<td>Exigences pour les titulaires de permis qui ne disposent pas dun permis dentretien déquipement réglementé</td>
<td>CII,11.1(p)</td>  </tr>  <tr>
<td className="text-center">E.1.9</td>
<td>Contrôle de laccès aux chantiers temporaires &ndash; Accélérateurs mobiles et portatifs</td>
<td>RGSRN, 3.1(g)</td>  </tr>  <tr>
<td className="text-center">E.1.10</td>
<td>Blindage portatif</td>
<td>RGSRN, 12.1(c)</td>  </tr>  <tr>
<td className="text-center">E.2.1</td>
<td>Confirmation du bon fonctionnement des systèmes de sûreté</td>
<td>CII,4(c)</td>  </tr>  <tr>
<td className="text-center">E.2.2</td>
<td>Contrôle radiologique</td>
<td>RGSRN, 3(i); CII,4(c)</td>  </tr>  <tr>
<td className="text-center">E.2.3</td>
<td>Résultats de la mise en service &ndash; Installation de traitement des isotopes</td>
<td>RGSRN, 3(i); CII,4(c)</td>  </tr>  <tr>
<td className="text-center">F.1.1</td>
<td>Aperçu du plan de déclassement</td>
<td>CII,5</td>  </tr>  <tr>
<td className="text-center">F.1.2</td>
<td>Qualifications et formation du personnel</td>
<td>CII,5(j)</td>  </tr>  <tr>
<td className="text-center">F.1.3</td>
<td>Estimation du type, du niveau dactivité et des doses de rayonnement dues aux substances nucléaires</td>
<td>CII,5(g)</td>  </tr>  <tr>
<td className="text-center">F.1.4</td>
<td>Évacuation de léquipement réglementé de catégorie II, des substances nucléaires et des matières dangereuses</td>
<td>CII,5(f); CII,5(h); CII,21.4; RGSRN, 3.1(j); RSNAR, 5.1(1); RSNAR, 19.2; RGSRN, 13</td>  </tr>  <tr>
<td className="text-center">F.1.5</td>
<td>Évacuation de léquipement réglementé de catégorie II, des substances nucléaires et des matières dangereuses &ndash; Installations de production disotopes</td>
<td>CII,5(f); CII,5(h); CII,21.4; RGSRN, 3.1(j); RSNAR, 5.1(1); RSNAR, 19.2; RGSRN, 13</td>  </tr>  <tr>
<td className="text-center">G.1.1</td>
<td>Sommaire de doses de rayonnement</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.2</td>
<td>Sources scellées acquises, transférées ou évacuées</td>
<td>LSRN, 24.4; RGSRN, 13</td>  </tr>  <tr>
<td className="text-center">G.1.3</td>
<td>Inventaire des sources scellées</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.4</td>
<td>Incidents à déclaration obligatoire</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.5</td>
<td>Analyse de loccupation des zones adjacentes</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.6</td>
<td>Analyse de la charge de travail</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.7</td>
<td>Contrôle radiologique</td>
<td>LSRN, 24.4</td>  </tr>  <tr>
<td className="text-center">G.1.8</td>
<td>Opérations dentretien</td>
<td>LSRN, 24.4</td>  </tr>  </table>
<p>LAI : <em>Loi sur laccès à linformation</em><br />
CII : <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em><br />
RGSRN : <em>Règlement général sur la sûreté et la réglementation nucléaires</em><br />
LSRN : <em>Loi sur la sûreté et la réglementation nucléaires</em><br />
RSNAR : <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em><br />
LLO : <em>Loi sur les langues officielles</em><br />
RETSN : <em>Règlement sur lemballage et le transport des substances nucléaires</em><br />
RP : <em>Règlement sur la radioprotection</em>  </p>
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
<h2 id="AppB">Annexe B : Définitions des domaines de sûreté et de réglementation</h2>
<dl>
<dt><strong>Système de gestion</strong></dt>
<dd>Ce domaine englobe le cadre qui établit les processus et les programmes nécessaires pour sassurer quune organisation atteint ses objectifs de sûreté, surveille continuellement son rendement par rapport à ces objectifs et favorise une culture axée sur la santé et la sûreté.</dd>
<dt><strong>Gestion de la performance humaine</strong></dt>
<dd>Ce domaine englobe les activités qui permettent datteindre une performance humaine efficace grâce à lélaboration et à la mise en œuvre de processus qui garantissent que les employés des titulaires de permis sont présents en nombre suffisant dans les secteurs de travail pertinents et quils possèdent les connaissances et les compétences, les procédures et les outils dont ils ont besoin pour exécuter leurs tâches en toute sécurité.</dd>
<dt><strong>Conduite de lexploitation</strong></dt>
<dd>Ce domaine comprend un examen global de la mise en œuvre des activités autorisées ainsi que des activités qui permettent un rendement efficace.</dd>
<dt><strong>Conception physique</strong></dt>
<dd>Ce domaine est lié aux activités qui ont une incidence sur laptitude des structures, systèmes et composants à respecter et à maintenir le fondement de leur conception, compte tenu des nouvelles informations qui apparaissent au fil du temps et des changements qui surviennent dans lenvironnement externe.</dd>
<dt><strong>Aptitude fonctionnelle</strong></dt>
<dd>Ce domaine englobe les activités qui ont une incidence sur létat physique des structures, systèmes et composants afin de veiller à ce quils demeurent efficaces au fil du temps. Ce domaine comprend les programmes qui assurent la disponibilité de léquipement pour exécuter la fonction visée par sa conception lorsque léquipement doit servir.</dd>
<dt><strong>Radioprotection</strong></dt>
<dd>Ce domaine englobe la mise en œuvre dun programme de radioprotection conformément au <em>Règlement sur la radioprotection</em>. Ce programme doit permettre de faire en sorte que les niveaux de contamination et les doses de rayonnement reçues par les personnes soient surveillées, contrôlées et maintenues au niveau ALARA.</dd>
<dt><strong>Gestion des déchets</strong></dt>
<dd>Ce domaine englobe les programmes internes relatifs aux déchets qui font partie des opérations de linstallation jusquà ce que les déchets soient retirés puis transportés vers une installation distincte de gestion des déchets. Il englobe également la planification du déclassement.</dd>
<dt><strong>Sécurité</strong></dt>
<dd>Ce domaine englobe les programmes nécessaires pour mettre en œuvre et soutenir les exigences en matière de sécurité stipulées dans les règlements, le permis, les ordres ou les exigences visant linstallation ou lactivité.</dd>
<dt><strong>Emballage et transport</strong></dt>
<dd>Ce domaine comprend les programmes reliés à lemballage et au transport sûrs des substances nucléaires à destination et en provenance de linstallation autorisée.</dd>
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
<h2 id="AppC">Annexe C : Phases dautorisation</h2>
<p><strong>Construction :</strong> permis de construction pour une installation nucléaire en vertu de larticle 3 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>.</p>  <p><strong>Mise en service :</strong> permis dexploitation aux fins de la mise en service conformément à larticle 4 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>.</p>  <p><strong>Exploitation :</strong> modification au permis dexploitation aux fins de la mise en service visant à retirer la restriction visant la mise en service.</p>
<p><strong>Déclassement :</strong> permis de déclassement dune installation nucléaire conformément à larticle 5 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em>.</p>  <p><strong>Autre :</strong> pour lexploitation dun équipement réglementé non fixé, cette phase fait référence à une demande de permis dexploitation conformément à larticle 4 du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em> ou, dans le cas de curiethérapie manuelle, de permis conformément à larticle 3 du <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>.</p>
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
<h2 id="AppD">Annexe D : Activités autorisées</h2>
<table className="width-100">  <tr>
<th className="text-center">Installation ou activité</th>
<th>Phase</th>
<th>Possess-<br />ion</th>
<th>Utili-<br />sation</th>
<th>Stockage</th>
<th>Impor-<br />tation</th>
<th>Expor-<br />tation</th>
<th>Transfert</th>
<th>Traite-<br />ment</th>
<th>Abandon</th>
<th>Entre-<br />tien</th>   </tr>  <tr>
<td className="">Installations fixes &ndash; Généralités</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#ffff00">5</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">9</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">11</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>  </tr>  <tr>
<td className="">Installations fixes &ndash; Généralités</td>
<td>Déclassement</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">9</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
</tr>  <tr>
<td>Installations fixes &ndash; API</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">12</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>  </tr>  <tr>
<td>Installations fixes &ndash; API</td>
<td>Déclassement</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>   </tr>  <tr>
<td className="">Installations fixes &ndash; de type piscine</td>
<td>Exploitation</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">10</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td className="">Installations fixes &ndash; de type piscine</td>
<td>Déclassement</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">10</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td>Curiethérapie manuelle</td>
<td>Autre</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td className="">Équipement réglementé</td>
<td>Expoitation</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#ffff00">6</td>
<td className="text-center" style="background-color:#ffff00">8</td>
<td className="text-center" style="background-color:#ffff00">8</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">13</td>
<td className="text-center" style="background-color:#ffff00">7</td>
</tr>  <tr>
<td>Entretien</td>
<td>Entretien</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#9fdfbf">O</td>
</tr>  </table>
<p>Directives :</p>  <p>Sélectionner la rangée appropriée selon votre type dinstallation et la phase dautorisation. Les activités autorisées applicables sont identifiées par lombrage vert et la lettre « O ». Les activités qui peuvent être applicables sont identifiées par lombrage jaune et un numéro de note. Les activités qui ne sont pas applicables sont identifiées par un ombrage gris et ne comportent pas de note.</p>  <p>Remarques :</p>
<ol>
<li>La phase de construction pour les installations fixes est omise puisquaucune substance nucléaire ne peut être détenue durant cette phase.</li>
<li>Lexploitation aux fins de la mise en service et lexploitation courante sont regroupées dans « exploitation ». À lexception du « traitement » pour les installations de production disotopes, il ny a pas de différence.</li>
<li>Seulement si la source de contrôle est indiquée sur le permis.</li>
<li>Pour les générateurs de neutrons, les accélérateurs mobiles et portatifs, seulement si la source étalon est indiquée sur le permis.</li>
<li>Applicable pour un appareil de curiethérapie à projecteur de source télécommandé. Pour les accélérateurs, applicable seulement pour le stockage des composants activés ou de substances nucléaires utilisées comme blindage (uranium appauvri).</li>
<li>Pour les accélérateurs, seulement pour le stockage des composants activés ou de substances nucléaires utilisées comme blindage (uranium appauvri).</li>
<li>Sur demande.</li>
<li>Sur demande. Non applicable pour les générateurs de neutrons, les accélérateurs pour diagraphie géophysique ou tout autre équipement réglementé contenant du tritium ou du deutérium. Limportation et lexportation de tritium ou de deutérium nécessitent un permis dimportation ou dexportation en vertu du <em>Règlement sur le contrôle de limportation et de lexportation aux fins de la non-prolifération nucléaire</em>.</li>
<li>Sur demande pour les composants activés, luranium appauvri et les sources de catégorie 3 à 5. Non applicable pour les sources de catégorie 1 ou 2. Lexportation de sources de catégorie 1 ou 2 nécessite un permis dexportation distinct en vertu du <em>Code de conduite sur la sûreté et la sécurité des sources radioactives</em> de lAIEA et de son document supplémentaire <em>Orientations pour limportation et lexportation de sources radioactives</em>. Pour la catégorisation des sources scellées, consulter l<a href="#AppI">annexe I : Classement des sources scellées</a>.</li>
<li>Non applicable pour les sources de catégorie 1 ou 2. Lexportation de sources de catégorie 1 ou 2 nécessite un permis dexportation distinct en vertu du <em>Code de conduite sur la sûreté et la sécurité des sources radioactives</em> de lAIEA et de son document supplémentaire <em>Orientations pour limportation et lexportation de sources radioactives</em>. Pour la catégorisation des sources scellées, consulter l<a href="#AppI">annexe I : Classement des sources scellées</a>.</li>
<li>Les accélérateurs utilisés pour la recherche sur la production disotopes pourraient nécessiter un traitement limité des isotopes.</li>
<li>Le traitement nest pas permis durant la phase de déclassement.</li>
<li>Diagraphies géophysiques seulement.</li>
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
<div id="AppE"></div>
<h2 id="AppE">Annexe E : Classification des salles</h2>
<dl>
<dt><strong>Autre pièce</strong></dt>
<dd>Salle dans laquelle on stocke des substances nucléaires scellées ou non scellées ou des composants radioactifs. Par exemple, il peut sagir dun dépôt de déchets ou de matières en désintégration.</dd>
<dt><strong>Enceinte</strong></dt>
<dd>Installation blindée contenant de l&#39;équipement prescrit de catégorie II, ou pièce blindée de production de cibles utilisée dans les installations où l&#39;on se sert d&#39;un accélérateur pour produire des isotopes.</dd>
<dt><strong>Laboratoire de base</strong></dt>
<dd>Salle dans laquelle la quantité totale de substances nucléaires non scellées utilisée en même temps ne dépasse pas cinq fois sa limite annuelle dincorporation (LAI) correspondante.</dd>
<dt><strong>Laboratoire de niveau de confinement</strong></dt>
<dd>Salle dans laquelle la quantité de substances nucléaires non scellées utilisée en même temps dépasse 500 fois sa LAI correspondante.</dd>
<dt><strong>Laboratoire intermédiaire</strong></dt>
<dd>Salle dans laquelle la quantité de substances nucléaires non scellées utilisée en même temps ne dépasse pas 50 fois sa LAI correspondante.</dd>
<dt><strong>Laboratoire supérieur</strong></dt>
<dd>Salle dans laquelle la quantité de substances nucléaires non scellées utilisée en même temps ne dépasse pas 500 fois sa LAI correspondante.</dd>
<dt><strong>Salle de traitement</strong></dt>
<dd>Salle dans laquelle les patients séjournent lorsquils reçoivent des traitements avec des substances nucléaires scellées ou non scellées. Remarque : La salle de traitement n&#39;est pas une enceinte.</dd>  </dl>
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
<h2 id="AppF">Annexe F : Étalonnage des radiamètres</h2>
<p>Les règlements de la CCSN exigent que les radiamètres soient étalonnés pour que les personnes qui les utilisent soient assurées que lappareil fonctionne correctement et que la lecture obtenue corresponde aux conditions réelles.</p>  <p>Ce document donne un aperçu des attentes de la CCSN à légard du respect des exigences réglementaires relatives à létalonnage des radiamètres par les demandeurs et les titulaires de permis.</p>  <p>Rien dans ce document ne peut être interprété de manière à signifier que la CCSN autorise, certifie ou octroie des permis autorisant des personnes à étalonner des radiamètres. Le titulaire de permis a la responsabilité de sassurer que toute personne qui étalonne un radiamètre pour son compte est en mesure deffectuer cette action conformément aux exigences réglementaires de la CCSN et aux attentes précisées dans ce document.</p>
<h3>Fondement réglementaire</h3>  <p>Les exigences réglementaires visant létalonnage des radiamètres sont précisées à larticle 20 du Règlement sur les substances nucléaires et les appareils à rayonnement et au paragraphe 18(2) du <em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em> :</p>  <p>« <em>Il est interdit dutiliser, pour lapplication de la Loi, de ses règlements ou dun ordre ou dun permis, un radiamètre qui na pas été étalonné au cours des douze mois précédant son utilisation</em>. »</p>
<h3>Attentes du programme relatives à létalonnage des radiamètres</h3>  <p>Pour satisfaire aux exigences des règlements à leffet que les radiamètres doivent être étalonnés, les demandeurs et titulaires de permis doivent vérifier que létalonnage est réalisé conformément aux attentes suivantes.</p>
<h3>Documentation de la procédure détalonnage</h3>  <p>Avant détalonner un radiamètre dune marque ou dun modèle donné, la personne qui effectue létalonnage doit avoir une procédure détalonnage documentée à sa disposition pendant les inspections, qui comprend :</p>
<ul>
<li>la description générale de la méthode détalonnage</li>
<li>lidentification des incertitudes liées au dispositif de montage, à la source, aux atténuateurs et à la correction de la désintégration radioactive associée à lincertitude totale de létalonnage et la preuve quelles ont été vérifiées</li>
<li>les étapes à suivre, de préférence les manuels du fabricant, qui contiennent suffisamment dinformation sur le radiamètre permettant deffectuer les vérifications détalonnage préalables et détalonner le modèle spécifique de radiamètre</li>
</ul>
<h3>Contrôle pré-étalonnage du radiamètre</h3>  <p>Avant létalonnage, chaque radiamètre doit faire lobjet des vérifications suivantes :</p>
<ul>
<li>la tension de la pile est satisfaisante et peut être maintenue tout au long de létalonnage</li>
<li>la tension de lappareil</li>
<li>lappareil fonctionne correctement dans toutes ses plages dénergie</li>
</ul>
<h3>Attentes en matière de caractéristiques physiques et environnementales des dispositifs de montage de létalonneur et des radiamètres</h3>  <p>Le dispositif de montage de létalonneur de faisceau doit être installé :</p>
<ul>
<li>de manière à minimiser la diffusion de rayonnement et au moins à 1 m du sol et de tout mur. La distance minimale entre la source et tout objet diffuseur doit être de 0,5 m</li>
<li>dans un endroit libre de de toute interférence provenant des sources de rayonnement ionisant autre que la source détalonnage</li>
<li>dans un endroit où les champs électrostatiques, électriques et magnétiques et les autres rayonnements non ionisants, comme les ondes à radiofréquence et les micro-ondes, nauront pas un impact sur la réponse de linstrument</li>
</ul>  <p>Le radiamètre à étalonner doit :</p>
<ul>
<li>être placé sur le dispositif de montage de manière à minimiser le biais dû au géotropisme à la dépendance directionnelle et au manque duniformité du faisceau de rayonnement détalonnage à travers le volume du détecteur</li>
<li>avoir la fenêtre ou le blindage bêta dans la position optimale (normalement fermée) en vue dobtenir la meilleure courbe de réponse en énergie (cest-à-dire la courbe la plus uniforme)</li>
</ul>  <p>Lincertitude de la distance détalonnage ne doit pas être supérieure à 2 % et elle doit correspondre à la somme arithmétique de lincertitude de léchelle de distance du dispositif de montage, de lincertitude de lemplacement matériel et du repositionnement du radiamètre, de lincertitude de lemplacement du centre de la source lorsquelle est fixée au dispositif de montage et de lincertitude du centre du volume sensible du détecteur du radiamètre.</p>   <p>Le radiamètre à étalonner doit être stabilisé aux mêmes valeurs de température, dhumidité et de pression que lendroit où on fait létalonnage. Ces paramètres environnementaux devraient être pris en note et être dans la plage de valeurs approuvée, tel que précisé par le fabricant du radiamètre. Il est recommandé détalonner ces instruments à environ 20 °C (68 °F) et 101,3 kPa (1 atmosphère) ou aux valeurs des conditions dexploitation prévues. Il est à noter quil est nécessaire dajuster la réponse de certains radiamètres en fonction de la température et de la pression. Ces corrections devraient être faites lorsque requis.</p>   <p>Létalonnage devrait avoir lieu à un endroit où le rayonnement naturel (ou ambiant) est connu et des corrections appropriées doivent être faites pour compenser la contribution de cette source derreur potentielle. Cela est particulièrement important lorsque lon prend des mesures dans la plus basse gamme de détection du radiamètre.</p>
<h3>Attentes relatives aux sources détalonnage</h3>  <p>Il est préférable que la source détalonnage contienne le même isotope de référence que celui du fabricant, en particulier si lon suppose que la réponse en énergie est celle précisée par le fabricant. Quel que soit lisotope utilisé, on devrait connaître la réponse en énergie du radiamètre au débit de dose et elle devrait être connue à 30 % près du vrai débit de dose dans toute la gamme dénergies visées.</p>   <p>Lincertitude de lactivité de la source détalonnage (ou son débit de dose) ne devrait pas dépasser &plusmn;&nbsp;10 %. Cette incertitude devrait inclure celle des atténuateurs (utilisés seuls ou en combinaison), sils font partie intégrante de lassemblage de source. Un certificat de létalonnage de source devrait être disponible pendant les inspections et, comme condition minimale, il doit être possible de retracer implicitement la source en fonction dune norme nationale ou internationale jusquà son fournisseur. Lactivité de la source détalonnage doit être corrigée en fonction de la désintégration radioactive à une fréquence qui assure que son activité présumée est à &plusmn;&nbsp;1 % de sa vraie valeur.</p>
<h3>Attentes relatives à létalonnage des radiamètres</h3>  <p>Chaque radiamètre devrait être étalonné jusquà sa plage de mesures la plus élevée ou le débit de dose le plus élevé pouvant être atteint avec la source détalonnage, soit la plus basse de ces valeurs. On devrait suivre la méthode détalonnage recommandée par le fabricant, sil y en a une, et létalonnage devrait être vérifié à environ 20 % à 25 % et à 75 % à 80 % de la mesure dans chaque plage ou dizaine.</p>  <p>Les mesures devraient être prises en note avant et après tout réglage de correction détalonnage nécessaire (ou préférée). Un radiamètre répond aux critères dun étalonnage adéquat lorsque chaque mesure observée est à &plusmn;&nbsp;20 % au débit de dose attendu.</p>  <p>Il nest pas nécessaire de faire létalonnage pour les valeurs supérieures à 10 mSv/h, mais il faudrait  vérifier la réponse dans chaque plage de valeurs et vérifier, dans la mesure du possible, que lappareil affiche des débits de dose croissants lorsquon diminue la distance détalonnage.</p>
<h3>Attentes relatives à la tenue de dossiers</h3>  <p>Immédiatement après létalonnage, la personne qui la effectué devrait remplir un certificat détalonnage ainsi quune étiquette détalonnage durable indiquant la date de létalonnage quil collera sur le radiamètre. La personne qui effectue létalonnage devrait remettre le certificat original avec le radiamètre à son utilisateur.</p>   <p>Si un radiamètre ne satisfait pas aux critères détalonnage, la personne qui effectue létalonnage doit immédiatement en avertir la personne qui a demandé à ce que ce soit fait.</p>   <p>La personne qui a effectué létalonnage peut, si elle a la formation ou laccréditation requise, réparer un radiamètre avant de le remettre à lutilisateur, si elle est autorisée par ce dernier. Après toute réparation qui excède les instructions du fabricant relatives à lentretien normal, le radiamètre doit être étalonné de nouveau.</p>
<h3>Documents détalonnage</h3>  <p>Afin de se conformer à larticle 20 du <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>, les titulaires de permis devraient fournir à la CCSN, sur demande, un document pour chacun des radiamètres avec les renseignements suivants :</p>
<ul>
<li>le nom du titulaire de permis et le numéro de permis de la CCSN</li>
<li>la marque et le modèle du radiamètre, et le numéro de série du détecteur et le type de sonde utilisée pour létalonnage, le cas échéant</li>
<li>la source détalonnage utilisée, incluant lisotope et lactivité</li>
<li>le pourcentage derreur total quant au débit de dose prévu</li>
<li>les résultats des vérifications effectuées avant létalonnage, dont :
<ul>
<li>létat des piles</li>
<li>la tension de lappareil</li>
<li>la température, la pression et lhumidité pendant létalonnage</li>
</ul></li>
<li>pour chacune des plages dénergie utilisée durant létalonnage :
<ul>
<li>le débit de dose prévu, mesuré à laide du dispositif détalonnage</li>
<li>le débit de dose observé sur le radiamètre et les appareils, mesuré avant et après létalonnage</li>
<li>la variance calculée en pourcentage du débit de dose observé en fonction du débit de dose attendu</li>
<li>toutes anomalies observées pour cette plage dénergie</li>
</ul></li>
<li>toutes anomalies et difficultés observées lors de létalonnage du radiamètre en général</li>
<li>la date de létalonnage du radiamètre</li>
<li>le nom et la signature de la personne qui a fait létalonnage</li>
<li>lattestation que létalonnage a été effectué conformément aux normes prescrites dans ce document</li>
</ul>
<h3>Tenue des registres</h3>  <p>Le titulaire de permis doit conserver les registres de tous les résultats détalonnage de radiamètre conformément à la LSRN et doit conserver ces documents pendant la durée précisée sur le permis ou dans les règlements, le cas échéant.</p>
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
<h2 id="AppG">Annexe G : Surveillance de la contamination radioactive</h2>
<p>Ce document fournit des directives générales pour, dune part, assurer la surveillance et le contrôle de la contamination radioactive et, dautre part, comparer les résultats du programme de surveillance aux critères prévus dans le permis de radio-isotopes délivré par la CCSN. Le contenu du document vise principalement les laboratoires, mais il peut aussi sappliquer à dautres endroits ou lieux de travail. Le document fournit également des lignes directrices pour le choix dun radiamètre.</p>  <p>Les permis de radio-isotopes autorisant lutilisation de sources radioactives non scellées comprennent une condition qui précise les critères réglementaires visant la contamination radioactive. Cette condition de permis se trouve dans la section « Critères de permis de radio-isotopes concernant la contamination radioactive » à la page 88.</p>  <p>Ces critères de contamination sappliquent à toutes les zones où sont utilisés des radio-isotopes. Malgré ces limites, les titulaires de permis devraient veiller à maintenir la contamination radioactive au niveau le plus bas quil soit raisonnablement possible datteindre (ALARA).</p>
<h3>Éléments dun programme de surveillance de la contamination</h3>  <h4>Méthode de mesure </h4>  <p>La contamination radioactive peut être mesurée directement ou indirectement. Par mesure directe, on entend lutilisation de radiamètres portatifs capable de détecter la contamination fixée et non fixée. On peut recourir à la mesure directe lorsque les niveaux de rayonnement de fond sont négligeables par rapport aux critères du permis. Par mesure indirecte, on entend un programme déchantillonnage qui ne peut que détecter la contamination non fixée.</p>
<h4>Choix des instruments</h4>  <p>La capacité de détecter les radio-isotopes visés varie selon les différents types et modèles dinstruments disponibles sur le marché. La section sur le choix des instruments plus bas peut aider dans le choix des instruments. Veuillez communiquer avec le fabricant pour obtenir des renseignements spécifiques sur une marque ou un modèle particulier.</p>
<h4>Confirmation de la surveillance de la contamination</h4>  <p>La confirmation de la surveillance de la contamination, comme les épreuves de contamination par frottis hebdomadaires, vise à confirmer les résultats de la surveillance directe et indirecte (« surveillance pendant lexploitation ») effectuée chaque fois quil y a un risque de contamination. La surveillance pendant lexploitation sert à éviter la propagation de la contamination et cette surveillance peut le confirmer.</p>  <p>Les zones et endroits de travail devant faire lobjet dune surveillance devraient être identifiés sur un plan des zones où sont utilisés les radio-isotopes au moyen dun numéro. Ces zones comprennent les surfaces de travail comme les établis, les comptoirs, les hottes dévacuation, etc., les zones de stockage et les autres surfaces comme les planchers, les instruments, les poignées de porte, les commutateurs déclairage, les robinets dévier et les téléphones. Pour ne pas oublier certains secteurs problématiques, il faudrait procéder également à des contrôles au hasard dautres endroits. Un examen des zones doit être effectué à une fréquence désignée pour sassurer que la liste est courante ou si de nouvelle zones doivent être ajoutées au besoin.</p>
<h4>Vérifications des instruments </h4>   <p>Les appareils non portatifs qui servent à mesurer les frottis (compteurs à scintillation liquide, compteurs à puits de type cristal, compteurs proportionnels à circulation de gaz, spectromètres gamma à semi-conducteur et caméras gamma) devraient faire lobjet dun entretien régulier selon les instructions du fabricant. Les titulaires de permis doivent conserver un registre daté des entretiens.</p>  <p>Avant de faire un contrôle de la contamination, il faudrait vérifier le bon fonctionnement des instruments selon les spécifications du fabricant, à savoir létat de la batterie, la vérification de la haute tension, la réponse, et mesurer le rayonnement de fond (ou naturel). Conservez un registre des résultats des contrôles et de la mesure du rayonnement de fond. De même, tous les instruments devraient faire des mesures avec une source standard telle quune source de contrôle pour chaque série de mesures de contamination. Les résultats de ces mesures permettront de déterminer lefficacité de linstrument.</p>   <p>Les instruments qui ne fonctionnent pas dans les paramètres limites des tests de fonctionnement, qui détectent un rayonnement de fond anormal ou qui donnent des résultats anormaux pour une mesure du rayonnement ambiant avec un frottis en blanc ou pour une mesure de sensibilité à laide dune source standard, ne doivent pas être utilisés tant que le bon état de fonctionnement na pas été vérifié. Il faut indiquer sur ces instruments quils sont hors dusage et quil faut éviter de les utiliser tant quils nauront  pas été vérifiés.</p>
<h4>Fréquence de la surveillance</h4>  <p>La fréquence de contrôle de la contamination devrait être conforme aux exigences indiquées sur laffiche des règles de laboratoire pertinente de la CCSN ou dans le permis de radio-isotopes. On trouvera des copies des affiches de laboratoire de la CCSN sur le <a href="http://suretenucleaire.gc.ca/fra/">site Web de la CCSN</a>.</p>  <p>Lorsque les matières radioactives ne sont pas utilisées pendant une longue période, la surveillance de la contamination nest pas exigée. Les dossiers ou registres devraient cependant en préciser la durée.</p>
<h4>Décontamination</h4>  <p>Si la contamination non fixée dans un secteur dépasse les critères réglementaires, nettoyer lendroit et prendre une nouvelle mesure. Si lendroit ne peut être nettoyé suffisamment pour que les critères soient respectés, la surface contaminée doit être scellée, retirée ou protégée par un blindage jusquà ce que les critères puissent être respectés. Dans la mesure du possible, toute source de contamination non fixée doit être retirée.</p>  <p>Remarque : Dans le cas des radionucléides à courte durée de vie, la pièce ou le secteur peuvent être marqués daffiches et sécurisés jusquà ce que le radio-isotope se désintègre.</p>
<h4>Registres de surveillance</h4>  <p>Les dossiers relatifs au programme de surveillance de la contamination doivent être conservés pendant trois ans et mis à la disposition des inspecteurs de la CCSN. Ces dossiers ou registres devraient comprendre les renseignements suivants :</p>
<ul>
<li>la date de mesure</li>
<li>la marque et le modèle de linstrument</li>
<li>les zones de surveillance</li>
<li>les résultats de mesure de la contamination en Bq/cm2 avant et après la décontamination, le cas échéant</li>
<li>les résultats des tests de fonctionnement et des mesures de rayonnement de fond</li>
<li>les résultats des mesures détalon</li>
<li>l&#39;efficacité mesurée ou prévue</li>
<li>les données relatives à lentretien des instruments devraient être notées et mises à jour, sil y a lieu</li>
</ul>
<h4>Mesure directe de la contamination à laide dun radiamètre portatif</h4>  <p>Les instruments de mesure directe comptent à la fois la contamination fixée et la contamination non fixée. Par conséquent, toute mesure satisfaisant les conditions du permis donne une estimation prudente de la contamination non fixée.</p>
<h4>Mesure indirecte de la contamination à laide de frottis</h4>  <p>Suivre les étapes ci-dessous pour les mesures indirectes :</p>
<ul>
<li>À laide dun papier filtre, dun frottis ou dun coton-tige légèrement imbibé dalcool ou deau, prélever un échantillon à chacun des endroits indiqués sur le plan du secteur de travail. Utiliser un frottis numéroté pour chaque endroit. Si de la contamination est détectée, la zone contaminée doit être délimitée et décontaminée.</li>
<li>Passer le frottis sur une surface de 100 cm<sup>2</sup>. Exercer une pression uniforme et sassurer que le frottis passe sur toute la superficie à contrôler. Dans les cas où la surface à contrôler ne fait pas au moins 100 cm<sup>2</sup>, par exemple pour certaines pièces d&#39;équipement ou les interrupteurs d&#39;éclairage, prendre en note la dimension de la zone de frottis et sassurer dutiliser le bon facteur de conversion.</li>
<li>S&#39;il y a lieu, sécher le frottis avec soin pour éviter toute perte d&#39;activité. Puisque la contamination peut être absorbée par le matériau du frottis, lutilisation dun agent mouillant avec certaines méthodes de mesure peut mener à une sous-estimation importante de la contamination alpha et de la contamination bêta de faible énergie.</li>
<li>Mesurer les frottis dans une zone à faible rayonnement de fond et noter tous les résultats.</li>
<li>Si les frottis sont comptés à laide dun contaminamètre, la taille du frottis doit être inférieure ou égale à celle de la zone sensible du détecteur. Il convient de noter que selon la forme du matériau de frottis (plane comme le papier filtre ou arrondie comme le coton-tige), les résultats peuvent être différents.</li>
<li>Nettoyer tout secteur contaminé et prendre une nouvelle mesure. Noter les résultats avant et après la décontamination.</li>
</ul>
<h4>Critères de permis de radio-isotopes concernant la contamination radioactive</h4>  <p>Le titulaire de permis doit sassurer que pour les substances nucléaires énumérées dans l<a href="#AppH">annexe H : Catégories de substances nucléaires</a> :</p>
<ul>
<li>La contamination non fixée dans toutes les zones, pièces ou enceintes où des substances nucléaires non scellées sont utilisées ou stockées ne doit pas dépasser :
<ul>
<li>3 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie A</li>
<li>30 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie B</li>
<li>300 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie C, selon une moyenne établie pour une surface ne dépassant pas 100 cm<sup>2</sup></li>
</ul></li>
<li>La contamination non fixée pour toutes les autres zones ne doit pas dépasser :
<ul>
<li>0,3 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie A</li>
<li>3 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie B</li>
<li>30 Bq/cm<sup>2</sup> pour tous les radionucléides de catégorie C, selon une moyenne établie pour une surface ne dépassant pas 100 cm<sup>2</sup></li>
</ul></li>
</ul>
<h4>Comparer les résultats des mesures avec les critères réglementaires</h4>  <p>Les lectures de contaminamètre peuvent être comparées aux critères réglementaires si lefficacité de l&#39;instrument est connue pour un radio-isotope en particulier.</p>  <p>On peut obtenir les facteurs d&#39;efficacité des instruments pour des radio-isotopes spécifiques auprès du fabricant ou les établir à l&#39;aide d&#39;un étalon approprié dont l&#39;activité est connue. Pour obtenir une description du facteur d&#39;efficacité des instruments, se reporter à la section sur l&#39;efficacité des détecteurs  ci-dessous.</p>  <p>Dans le cas dun mélange de radio-isotopes, les calculs doivent être faits à partir du radio-isotope pour lequel lappareil présente la plus faible efficacité de détection.</p>  <p>Léquation suivante permet de calculer les résultats des mesures en Bq/cm<sup>2</sup> :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Activité&#x00A0;non&#x00A0;fix&#233;e&#x00A0;=&#x00A0;</mtext><mfrac>
<mrow>
<mtext>N-RFN</mtext></mrow>
<mrow>
<mtext>E&#x00A0;x&#x00A0;60&#x00A0;x&#x00A0;A&#x00A0;x&#x00A0;F</mtext></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaabw
gacaqGTbGaae4BaiaabAhacaqGHbGaaeOyaiaabYgacaqGLbGaaeii
aiaabggacaqGJbGaaeiDaiaabMgacaqG2bGaaeyAaiaabshacaqG5b
Gaaeiiaiaab2dacaqGGaWaaSaaaeaacaqGobGaaeylaiaab6eacaqG
cbaabaGaaeyraiaabccacaqG4bGaaeiiaiaabAdacaqGWaGaaeiiai
aabIhacaqGGaGaaeyqaiaabccacaqG4bGaaeiiaiaabAeaaaaaaa@5607@
</annotation>   </semantics>  </math>
</p>
<p>où :</p>  <p>N = Le taux de comptage total en coups par minute (cpm) mesuré directement ou sur frottis.</p>  <p>RFN (NB dans léquation ci-dessus) =	Le taux de comptage normal du rayonnement de fond (en cpm) mesuré par un radiamètre ou une mesure de frottis en blanc.</p>  <p>E = Le facteur defficacité de lappareil (en valeur décimale, c&#39;est-à-dire que E=0,05 correspond à une efficacité de 5 %) pour le radio-isotope mesuré. Consulter le fabricant ou établir lefficacité à laide dune source radioactive dactivité connue selon une géométrie source-détecteur similaire à celui qui est utilisé pour contrôler la contamination. Pour en savoir plus au sujet de lefficacité dun instrument, voir la section ci-dessous.</p>  <p>60 =	sec/min</p>  <p>S (A dans léquation ci-dessus) = Surface du prélèvement par frottis (ne doit pas dépasser 100 cm<sup>2</sup>) ou surface du détecteur en cm<sup>2</sup> (pour les mesures directes)</p>  <p>F = Facteur de rétention du frottis (à utiliser seulement pour le calcul des résultats des mesures indirectes par frottis). Si F nest pas déterminé par expérience, il faut utiliser une valeur de F = 0,1, soit 10 %.</p>
<h4>Sensibilité des appareils</h4>  <p>Les instruments portatifs de surveillance de la contamination doivent donner des lectures reproductibles répondant aux critères précisés ci-dessus. La limite de détection minimale est denviron deux fois la mesure du rayonnement de fond. Les demandeurs de permis doivent pouvoir démontrer que pour chacun des isotopes visés, le seuil de contamination peut être détecté à laide des instruments proposés. Pour ce faire, il faut déterminer lactivité minimale décelable (AMD – MDA dans léquation) par le détecteur et pour lisotope visé, et établir lincertitude (2&sigma;). La sensibilité de linstrument convient à un isotope donné si :</p>  <p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
<mrow>
<mi>c</mi><msup>
<mi>m</mi>
<mn>2</mn>
</msup>
</mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mn>2</mn><mi>&#x03C3;</mi></mrow>
<mo>)</mo></mrow><mo>&#x2264;</mo><mtext>Limite&#x00A0;de&#x00A0;Contamination</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaeWaaeaaca
WGnbGaamiraiaadgeadaqadaqaamaalaaabaGaamOqaiaadghaaeaa
caWGJbGaamyBamaaCaaaleqabaGaaGOmaaaaaaaakiaawIcacaGLPa
aacqGHRaWkcaaIYaacciGae83WdmhacaGLOaGaayzkaaGae8hzImQa
ae4qaiaab+gacaqGUbGaaeiDaiaabggacaqGTbGaaeyAaiaab6gaca
qGHbGaaeiDaiaabMgacaqGVbGaaeOBaiaabccacaqGmbGaaeyAaiaa
b2gacaqGPbGaaeiDaaaa@5645@
</annotation>   </semantics>  </math></p>  <br />  <p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.66</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>T</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>+</mo><mn>2</mn><mfrac>
<mrow>
<msqrt>
<mrow>
<mn>2</mn><mo>&#x2217;</mo><mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>T</mi><mo>&#x2217;</mo><mi>E</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>Limite&#x00A0;de&#x00A0;Contamination</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIYaGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGinaiaac6cacaaI2aGa
aGOnamaakaaabaGaamOtaiaadkeacqGHxiIkdaWccaqaaiaadsfaae
aacaaI2aGaaGimaaaaaSqabaaakeaacaWGfbGaey4fIOIaamivaiab
gEHiQiaadgeacqGHxiIkcaWGgbaaaiabgUcaRiaaikdadaWcaaqaam
aakaaabaGaaGOmaiabgEHiQiaad6eacaWGcbGaey4fIOYaaSGaaeaa
caWGubaabaGaaGOnaiaaicdaaaaaleqaaaGcbaGaamivaiabgEHiQi
aadweacqGHxiIkcaWGbbGaey4fIOIaamOraaaacqGHKjYOcaqGdbGa
ae4Baiaab6gacaqG0bGaaeyyaiaab2gacaqGPbGaaeOBaiaabggaca
qG0bGaaeyAaiaab+gacaqGUbGaaeiiaiaabYeacaqGPbGaaeyBaiaa
bMgacaqG0baaaa@6924@
</annotation>   </semantics>  </math></p>
<p>ou :</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>5.37</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>T</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>Limite&#x00A0;de&#x00A0;Contamination</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIYaGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGynaiaac6cacaaIZaGa
aG4namaakaaabaGaamOtaiaadkeacqGHxiIkdaWccaqaaiaadsfaae
aacaaI2aGaaGimaaaaaSqabaaakeaacaWGfbGaey4fIOIaamivaiab
gEHiQiaadgeacqGHxiIkcaWGgbaaaiabgsMiJkaaboeacaqGVbGaae
OBaiaabshacaqGHbGaaeyBaiaabMgacaqGUbGaaeyyaiaabshacaqG
PbGaae4Baiaab6gacaqGGaGaaeitaiaabMgacaqGTbGaaeyAaiaabs
haaaa@5AB6@
</annotation>   </semantics>  </math>
<p>où <em>RFN</em>, <em>E</em>, <em>S</em> et <em>F</em> ont le même sens que dans la section ci-dessus.</p>  <p>D (T dans léquation) = la durée de comptage, en secondes, du contrôle par frottis indirect et le délai de réponse de linstrument pour les mesures directes. Le délai de réponse de linstrument varie dun instrument à lautre et certains appareils permettent de le régler, c&#39;est-à-dire que lutilisateur peut préciser le délai de réponse à l&#39;aide d&#39;un logiciel ou utiliser un bouton pour choisir le délai de réponse en le réglant à « long/court ». Le temps correspondant à ces valeurs prédéfinies est précisé dans le guide de l&#39;utilisateur. Dautres instruments peuvent sélectionner automatiquement le délai de réponse daprès le taux de comptage. Un délai de réponse long améliorera lAMD (MDA dans léquation), mais linstrument doit alors être placé au-dessus de chaque surface à contrôler pendant une période dont la durée est au moins aussi longue que celle du délai de réponse.</p>
<h4>Choix des contaminamètres</h4>  <p>LAMD dun isotope dépend beaucoup du type de rayonnement émis par l&#39;isotope et de la forme dénergie quil diffuse, ainsi que du type de détecteur utilisé. Règle générale, trois facteurs fondamentaux ont une incidence sur la sensibilité des instruments. Chacun de ces facteurs aura une incidence différente selon le type de rayonnement et la forme d&#39;énergie auxquels l&#39;instrument est exposé.</p>
<p><strong>Épaisseur et matériau de la fenêtre :</strong> On doit se poser la question suivante : est-ce que la densité de la fenêtre est suffisamment faible pour permettre aux rayonnements émis par la source de pénétrer dans le détecteur? Cette question est essentielle dans le cas du rayonnement bêta de faible énergie et du rayonnement alpha, lesquels peuvent être entièrement absorbés par des matériaux aussi minces quune feuille de papier. Veuillez noter que la plupart des instruments n&#39;arrivent pas à détecter certains isotopes, tel que le H-3 ou le Ni-63, parce que le rayonnement bêta quils émettent est entièrement absorbé par la fenêtre. Pour de tels isotopes, la surveillance indirecte par scintillation liquide constitue habituellement la meilleure solution.</p>  <p><strong>Densité du détecteur :</strong> Tous les radiamètres détectent les interactions entre le rayonnement et une matière à l&#39;intérieur de l&#39;appareil. Il existe deux grandes catégories de radiamètres : les détecteurs remplis de gaz et les scintillateurs solides ou liquides. Les détecteurs remplis de gaz, par exemple les détecteurs Geiger et les compteurs proportionnels, sont efficaces pour la détection de rayonnements alpha ou bêta, car ces types de rayonnement provoquent des interactions, même dans des matériaux de faible densité. À l&#39;inverse, les rayons gamma traversent facilement les gaz de faible densité sans qu&#39;il y ait interaction, en particulier lorsque l&#39;énergie est élevée. Les scintillateurs solides, par exemple les détecteurs à l&#39;iodure de sodium (NaI), détectent habituellement beaucoup mieux le rayonnement gamma. Les détecteurs à cristaux conviennent aux émetteurs de rayons gamma de faible énergie, tel que le Tc-99m, tandis que les détecteurs plus épais augmentent la sensibilité aux rayons gamma de haute énergie, tel que le   Cs-137 ou le Co-60.</p>  <p><strong>Signal du détecteur :</strong> Chaque fois que le détecteur est exposé à une source de rayonnement, il produit une infime quantité dénergie. Lénergie est convertie en signal électronique, lequel peut être mesuré. Certains détecteurs, notamment les compteurs Geiger, produisent des impulsions régulières qui peuvent être comptées. D&#39;autres systèmes, par exemple les scintillateurs ou les compteurs proportionnels, peuvent produire un signal en fonction de la quantité d&#39;énergie produite lors de l&#39;interaction initiale avec le rayonnement. Ce signal peut être utilisé pour distinguer les divers types de rayonnement et les formes dénergie (dans le cas de rayonnements de même type). De tels détecteurs sont utiles lorsquil peut être nécessaire de faire la distinction parmi de nombreux isotopes différents.</p>  <p>Il existe une vaste gamme d&#39;instruments pour la surveillance de la contamination directe et indirecte. Voici un résumé des types d&#39;instruments courants et de leur utilité.</p>
<table className="width-100">  <tr>
<th className="text-center text-center">Contaminamètres portatifs*</th>
<th className="text-center text-center">Usages recommandés**</th>  </tr>  <tr>
<td className="text-center">Gammamètre Geiger-Müller à fenêtre mince</td>
<td className="text-center">Émetteurs bêta, émetteurs alpha</td>  </tr>  <tr>
<td className="text-center">Détecteur proportionnel à circulation de gaz</td>
<td className="text-center">Variables (voir les spécifications du fabricant)</td>  </tr>  <tr>
<td className="text-center">Détecteur à scintillation, à cristal mince diodure de sodium</td>
<td className="text-center">Émetteurs gamma de faible énergie (&lt;&nbsp;200 keV)</td>  </tr>  <tr>
<td className="text-center">Détecteur à scintillation, à cristal épais diodure de sodium</td>
<td className="text-center">Émetteurs gamma de haute énergie (&lt;&nbsp;200 keV)</td>  </tr>  <tr>
<td className="text-center">Détecteur à scintillation organique/de polymère</td>
<td className="text-center">Généralement conçu spécialement pour la détection du rayonnement alpha et bêta en présence de faible rayonnement de fond. La détection gamma est variable. Voir les spécifications du fabricant.</td>  </tr>  <tr>
<td className="text-center">Détecteur à scintillation, à sulfure de zinc</td>
<td className="text-center">Émetteurs alpha</td>  </tr>  <tr>
<th className="text-center">Instruments de surveillance non portatifs (compteurs par frottis)</th>
<th className="text-center text-center">Usages recommandés**</th>  </tr>  <tr>
<td className="text-center">Compteur à scintillation liquide</td>
<td className="text-center">Prélèvements alpha et bêta par frottis, surtout pour les émetteurs bêta de très faible énergie, par exemple le H-3 et le Ni-63.</td>  </tr>  <tr>
<td className="text-center">Compteur à puits à iodure de sodium de type cristal</td>
<td className="text-center">Prélèvement gamma par frottis. Permet l&#39;analyse spectroscopique de divers isotopes si des isotopes multiples sont utilisés.</td>  </tr>  </table>
<p>*&nbsp;La chambre dionisation constitue un autre important type de détecteur portatif. Ces appareils mesurent le débit de dose de rayonnement plutôt que la contamination. Règle générale, ils se prêtent mal à la surveillance de la contamination et ne devraient pas servir à cette fin.</p>  <p>**&nbsp;Les radio-isotopes qui se désintègrent en émettant des particules alpha ou bêta émettent aussi souvent des rayons gamma. De nombreux isotopes, surtout les éléments à numéro atomique élevé, par exemple luranium et le radium, peuvent exister en équilibre avec les autres isotopes qui se trouvent dans leur « chaîne de désintégration » et qui, à leur tour, émettent de nombreux types et énergies de rayonnement différents. Au moment de choisir un moniteur de contamination, il est important de tenir compte des types de rayonnement qui seront mesurés. Par exemple, les isotopes de la tomographie par émission de positrons (TEP) se désintègrent en émettant un positron (bêta+) qui à son tour produit deux rayons gamma de haute énergie (511 keV). Les rayons gamma jouent un rôle prépondérant dans lusage de ces isotopes, et un scintillateur à cristal épais d&#39;iodure de sodium sera très efficace pour détecter ces rayons gamma. Cependant, un détecteur Geiger à fenêtre mince sera encore plus efficace pour détecter les émissions bêta+  et son taux de comptage du rayonnement de fond (RFN) sera beaucoup plus faible.</p>
<h4>Efficacité du détecteur</h4>  <p>Lefficacité du détecteur relève des éléments suivants :</p>
<ul>
<li>le type de détecteur (Geiger-Müller, scintillateur à iodure de sodium, scintillateur polymère, scintillateur proportionnel)</li>
<li>la taille et la forme du détecteur</li>
<li>sa distance par rapport à la substance radioactive</li>
<li>le radio-isotope et le type de rayonnement à mesurer (rayons alpha, bêta et gamma, ainsi que leur niveau dénergie)</li>
<li>la rétrodiffusion des rayonnements vers le détecteur</li>
<li>labsorption de rayonnements par lair et le boîtier du détecteur avant quils atteignent le détecteur</li>
</ul>  <p>Voici deux façons détablir lefficacité dun détecteur :</p>
<ol>
<li>1.	À laide de votre détecteur, compter (en cps, ou coups par seconde) une source standard dont lactivité est connue.
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Efficacité&#x00A0;</mtext><mo>=</mo><mi>&#x0020;</mi><mi>&#x0020;</mi><mfrac>
<mrow>
<mtext>(taux&#x00A0;de&#x00A0;comptage&#x00A0;du&#x00A0;détecteur&#x00A0;&#8211;&#x00A0;taux&#x00A0;de&#x00A0;comptage&#x00A0;du&#x00A0;rayonnement&#x00A0;de&#x00A0;fond)</mtext></mrow>
<mrow>
<mtext>activité&#x00A0;connue&#x00A0;de&#x00A0;la&#x00A0;source&#x00A0;standard</mtext></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeyzaiaabA
gacaqGMbGaaeyAaiaabogacaqGPbGaaeyzaiaab6gacaqGJbGaaeyE
aiaabccacqGH9aqpiiGacqWFGaaicqWFGaaidaWcaaqaaiaabIcaca
qGKbGaaeyzaiaabshacaqGLbGaae4yaiaabshacaqGVbGaaeOCaiaa
bccacaqGJbGaae4BaiaabwhacaqGUbGaaeiDaiaabccacaqGYbGaae
yyaiaabshacaqGLbGaaeiiaiaab2cacaqGGaGaaeOyaiaabggacaqG
JbGaae4AaiaabEgacaqGYbGaae4BaiaabwhacaqGUbGaaeizaiaabc
cacaqGJbGaae4BaiaabwhacaqGUbGaaeiDaiaabccacaqGYbGaaeyy
aiaabshacaqGLbGaaeykaaqaaiaabUgacaqGUbGaae4BaiaabEhaca
qGUbGaaeiiaiaabggacaqGJbGaaeiDaiaabMgacaqG2bGaaeyAaiaa
bshacaqG5bGaaeiiaiaab+gacaqGMbGaaeiiaiaabohacaqG0bGaae
yyaiaab6gacaqGKbGaaeyyaiaabkhacaqGKbGaaeiiaiaabohacaqG
VbGaaeyDaiaabkhacaqGJbGaaeyzaaaaaaa@8795@
</annotation>   </semantics>  </math>
</li>
<li>Consulter la documentation du fournisseur pour le ou les radio-isotopes visés. Si la documentation ne contient pas l&#39;information recherchée, communiquer avec le fournisseur.</li>
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
<div id="AppH"></div>
<h2 id="AppH">Annexe H : Catégories de substances nucléaires</h2>
<p>Le tableau suivant répartit certaines substances nucléaires courantes, y compris celles pour lesquelles il existe des limites pour la contamination de surface et lévacuation des déchets, en trois catégories : « catégorie A », « catégorie B » ou « catégorie C », selon leurs caractéristiques radiologiques courantes.</p>  <p>À des fins réglementaires, pour déterminer la classification dune substance nucléaire qui ne figure pas dans le tableau ci-dessous, veuillez communiquer avec la CCSN.</p>
<table className="width-100">  <tr>
<th>CATÉGORIE</th>
<th colSpan="5">RADIONUCLÉIDE</th>  </tr>  <tr>
<td rowspan="6" className="text-center"><strong>CATÉGORIE A</strong></td>
<td colSpan="5" className="text-center">Tous les émetteurs alpha non inclus dans cette liste et leurs produits de filiation</td>   </tr>  <tr>
<td className="text-center">Ag-110m</td>
<td className="text-center">Bi-210</td>
<td className="text-center">Co-56</td>
<td className="text-center">Co-60</td>
<td className="text-center">Cs-134</td>  </tr>  <tr>
<td className="text-center">Cs-137</td>
<td className="text-center">I-124</td>
<td className="text-center">Lu-177m</td>
<td className="text-center">Mn-52</td>
<td className="text-center">Na-22</td>  </tr>  <tr>
<td className="text-center">Po-210</td>
<td className="text-center">Pu-238</td>
<td className="text-center">Pu-239</td>
<td className="text-center">Pu-240</td>
<td className="text-center">Sb-124</td>  </tr>  <tr>
<td className="text-center">Ss-46</td>
<td className="text-center">Sr-82</td>
<td className="text-center">U-234</td>
<td className="text-center">U-235</td>
<td className="text-center">U-238</td>   </tr>  <tr>
<td className="text-center">V-48</td>
<td className="text-center">Zn-65</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td rowspan="6"className="text-center" ><strong>CATÉGORIE B</strong></td>
<td className="text-center">Au-198</td>
<td className="text-center">Ba-133</td>
<td className="text-center">Br-82</td>
<td className="text-center">Ce-143</td>
<td className="text-center">Co-58</td>  </tr>  <tr>
<td className="text-center">Cu-67</td>
<td className="text-center">Fe-59</td>
<td className="text-center">Hg-194</td>
<td className="text-center">Hg-203</td>
<td className="text-center">I-131</td>  </tr>  <tr>
<td className="text-center">Ir-192</td>
<td className="text-center">La-140</td>
<td className="text-center">Mo-99</td>
<td className="text-center">Nb-95</td>
<td className="text-center">Pa-233</td>  </tr>  <tr>
<td className="text-center">Ra-223</td>
<td className="text-center">Re-186</td>
<td className="text-center">Re-188</td>
<td className="text-center">Ru-103</td>
<td className="text-center">Sb-122</td>  </tr>  <tr>
<td className="text-center">Sm-153</td>
<td className="text-center">Sr-90</td>
<td className="text-center">Xe-127</td>
<td className="text-center">Y-86</td>
<td className="text-center">Y-90</td>  </tr>  <tr>
<td className="text-center">Yb-169</td>
<td className="text-center">Zr-89</td>
<td className="text-center">Zr-95</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td rowspan="11" className="text-center"><strong>CATÉGORIE C</strong></td>
<td className="text-center">C-11</td>
<td className="text-center">C-14</td>
<td className="text-center">Ca-45</td>
<td className="text-center">Cd-109</td>
<td className="text-center">Ce-141</td>  </tr>  <tr>
<td className="text-center">Cl-36</td>
<td className="text-center">Co-57</td>
<td className="text-center">Cr-51</td>
<td className="text-center">Cu-60</td>
<td className="text-center">Cu-61</td>  </tr>  <tr>
<td className="text-center">Cu-64</td>
<td className="text-center">F-18</td>
<td className="text-center">Fe-55</td>
<td className="text-center">Ga-67</td>
<td className="text-center">Ga-68</td>  </tr>  <tr>
<td className="text-center">Ge-68</td>
<td className="text-center">H-3</td>
<td className="text-center">I-123</td>
<td className="text-center">I-125</td>
<td className="text-center">In-111</td>  </tr>  <tr>
<td className="text-center">In-113m</td>
<td className="text-center">In-114</td>
<td className="text-center">K-42</td>
<td className="text-center">Kr-85</td>
<td className="text-center">Lu-177</td>  </tr>  <tr>
<td className="text-center">Mn-52m</td>
<td className="text-center">M-56</td>
<td className="text-center">N-13</td>
<td className="text-center">Na-24</td>
<td className="text-center">Nb-98</td>  </tr>  <tr>
<td className="text-center">Ni-63</td>
<td className="text-center">O-15</td>
<td className="text-center">P-32</td>
<td className="text-center">P-33</td>
<td className="text-center">Pd-103</td>  </tr>  <tr>
<td className="text-center">Pr-144</td>
<td className="text-center">Pu-241</td>
<td className="text-center">Rh-106</td>
<td className="text-center">S-35</td>
<td className="text-center">Sc-44</td>  </tr>  <tr>
<td className="text-center">Sn-113</td>
<td className="text-center">Sr-89</td>
<td className="text-center">Tc-94m</td>
<td className="text-center">Tc-99</td>
<td className="text-center">Tc-99m</td>  </tr>  <tr>
<td className="text-center">Te-127</td>
<td className="text-center">Tl-201</td>
<td className="text-center">V-49</td>
<td className="text-center">W-181</td>
<td className="text-center">W-188</td>  </tr>  <tr>
<td className="text-center">Xe-133</td>
<td className="text-center">Zn-63</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  </table>
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
<h2 id="AppI">Annexe I : Classement des sources scellées</h2>
<table className="width-100">  <tr>
<th className="text-center text-center">Radionucléide</th>
<th>Activité de source de classe 1 (TBq)</th>
<th>Activité de source de classe 1 (Ci)</th>
<th className="">Activité de source de classe 2 (TBq)</th>
<th className="">Activité de source de classe 2 (Ci)</th>
<th>Activité de source de classe 3 (TBq)</th>
<th>Activité de source de classe 3 (Ci)</th>  </tr>  <tr>
<td className="text-center">Américium-241<br /> (<sup>241</sup>Am)</td>
<td className="text-center">60</td>
<td className="text-center">1 600</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td className="text-center">Américium-241 / Béryllium (<sup>241</sup>Am/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1 600</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td className="text-center">Californium 252 (<sup>252</sup>Cf)</td>
<td className="text-center">20</td>
<td className="text-center">540</td>
<td className="text-center">0,2</td>
<td className="text-center">5</td>
<td className="text-center">0,02</td>
<td className="text-center">0,5</td>  </tr>  <tr>
<td className="text-center">Césium-137<br /> (<sup>137</sup>Cs)</td>
<td className="text-center">100</td>
<td className="text-center">2 700</td>
<td className="text-center">1</td>
<td className="text-center">27</td>
<td className="text-center">0,1</td>
<td className="text-center">2,7</td>  </tr>  <tr>
<td className="text-center">Cobalt-60<br /> (<sup>60</sup>Co)</td>
<td className="text-center">30</td>
<td className="text-center">810</td>  <td className="text-center">0,3</td>
<td className="text-center">8</td>
<td className="text-center">0,03</td>
<td className="text-center">0,8</td>  </tr>  <tr>
<td className="text-center">Curium-244<br /> (<sup>244</sup>Cm)</td>
<td className="text-center">50</td>
<td className="text-center">1 350</td>
<td className="text-center">0,5</td>
<td className="text-center">13</td>
<td className="text-center">0,05</td>
<td className="text-center">1,3</td>  </tr>  <tr>
<td className="text-center">Gadolinium-153 (<sup>153</sup>Gd)</td>
<td className="text-center">1 000</td>
<td className="text-center">27 000</td>
<td className="text-center">10</td>
<td className="text-center">270</td>
<td className="text-center">1</td>
<td className="text-center">27</td>  </tr>  <tr>
<td className="text-center">Iridium-192<br /> (<sup>192</sup>Ir)</td>
<td className="text-center">80</td>
<td className="text-center">2 160</td>
<td className="text-center">0,8</td>
<td className="text-center">21</td>
<td className="text-center">0,08</td>
<td className="text-center">2,1</td>  </tr>  <tr>
<td className="text-center">Plutonium-238 (<sup>238</sup>Pu)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td className="text-center">Plutonium-239 / Béryllium (<sup>239</sup>Pu/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td className="text-center">Prométhium-147 (<sup>147</sup>Pm)</td>
<td className="text-center">40 000</td>
<td className="text-center">1 080 000</td>
<td className="text-center">400</td>
<td className="text-center">10 080</td>
<td className="text-center">40</td>
<td className="text-center">1 100</td>  </tr>  <tr>
<td className="text-center">Radium-226<br /> (<sup>226</sup>Ra)</td>
<td className="text-center">40</td>
<td className="text-center">1 080</td>
<td className="text-center">0,4</td>
<td className="text-center">11</td>
<td className="text-center">0,04</td>
<td className="text-center">1,1</td>  </tr>  <tr>
<td className="text-center">Sélénium-75<br /> (<sup>75</sup>Se)</td>
<td className="text-center">200</td>
<td className="text-center">5 400</td>
<td className="text-center">2</td>
<td className="text-center">54</td>
<td className="text-center">0,2</td>
<td className="text-center">5,4</td>  </tr>  <tr>
<td className="text-center">Strontium-90 (<sup>90</sup>Sr), Yttrium-90 (<sup>90</sup>Y)</td>
<td className="text-center">1 000</td>
<td className="text-center">27 000</td>
<td className="text-center">10</td>
<td className="text-center">270</td>
<td className="text-center">1</td>
<td className="text-center">27</td>  </tr>  <tr>
<td className="text-center">Thulium-170</td>
<td className="text-center">20 000</td>
<td className="text-center">540 000</td>
<td className="text-center">200</td>
<td className="text-center">5 400</td>
<td className="text-center">20</td>
<td className="text-center">540</td>  </tr>  <tr>
<td className="text-center">Ytterbium-169</td>
<td className="text-center">300</td>
<td className="text-center">8 100</td>
<td className="text-center">3</td>
<td className="text-center">81</td>
<td className="text-center">0,3</td>
<td className="text-center">8,1</td>  </tr>  </table>
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
<h2 id="AppJ">Annexe J : Élimination des composants radioactifs</h2>
<p>Conformément au <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>, le titulaire dun permis peut éliminer des substances nucléaires uniquement lorsque leur radioactivité est inférieure à la quantité dexemption (paragraphe 5.1(2)). Dans un accélérateur, la tête de lappareil contient de nombreux isotopes à cause de lactivation. Le tableau suivant indique le temps quil faut attendre pour éliminer des matières daprès la durée de la désintégration de lisotope critique qui se trouve dans la machine et le temps écoulé depuis la dernière fois que le faisceau a été allumé.</p>   <p><strong>Les titulaires de permis qui souhaitent éliminer ces matières avant la fin de la période dattente peuvent transférer les substances nucléaires uniquement à une personne autorisée à les détenir, en vertu dun permis de la CCSN</strong>. Les accélérateurs ayant un faisceau maximal de rayons X de 10 MV ou moins ont une faible radioactivité ou les isotopes créés par la radioactivité ont une demi-vie brève. Par conséquent, il est possible déliminer ces accélérateurs en une journée.</p>
<p>Les titulaires de permis qui comptent éliminer laccélérateur en entier pourront utiliser ce tableau pour les aider à planifier le fonctionnement de lappareil pendant les semaines précédant son élimination, afin de réduire au minimum le délai dattente entre le déclassement et lélimination de lappareil. Remarque : Ces délais dattente supposent <strong>lélimination dun seul composant ou accélérateur à la fois</strong>. Toutes les autres hypothèses au sujet des données dans ces tableaux sont listées à la fin de cette annexe.</p>
<table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 15 MV dun accélérateur Elekta de 15 MV</strong></caption>  <tr>
<th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>  </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">5</td>
<td className="text-center">4</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">10</td>
<td className="text-center">6</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">26</td>
<td className="text-center">19</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">30 000</td>
<td className="text-center">43</td>
<td className="text-center">35</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">59</td>
<td className="text-center">49</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">74</td>
<td className="text-center">63</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  </table>  <br />  <table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 18 MV dun accélérateur Elekta</strong></caption>  <tr>
<th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>  </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">95</td>
<td className="text-center">82</td>
<td className="text-center">1</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">141</td>
<td className="text-center">123</td>
<td className="text-center">2</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">188</td>
<td className="text-center">163</td>
<td className="text-center">3</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">30 000</td>
<td className="text-center">236</td>
<td className="text-center">205</td>
<td className="text-center">3</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">283</td>
<td className="text-center">248</td>
<td className="text-center">4</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">328</td>
<td className="text-center">290</td>
<td className="text-center">5</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  </table>  <br />  <table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 15 MV dun accélérateur Siemens de 15 MV</strong></caption>  <tr>
<th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>  </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">3</td>
<td className="text-center">3</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">7</td>
<td className="text-center">4</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">48</td>
<td className="text-center">13</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">30 000</td>
<td className="text-center">100</td>
<td className="text-center">61</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">146</td>
<td className="text-center">108</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, Mn-54</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">188</td>
<td className="text-center">152</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, Mn-54</td>  </tr>  </table>  <br />  <table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 18 MV dun accélérateur Siemens</strong></caption>  <tr>
<th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>  </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">163</td>
<td className="text-center">146</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, W-181</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">266</td>
<td className="text-center">251</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, W-181</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">349</td>
<td className="text-center">335</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">419</td>
<td className="text-center">405</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">478</td>
<td className="text-center">464</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">530</td>
<td className="text-center">516</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  </table>  <br />  <table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 15 MV dun accélérateur de particules Varian de 15 MV</strong></caption>  <tr>
<th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>  </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">6</td>
<td className="text-center">5</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">38</td>
<td className="text-center">6</td>
<td className="text-center">2</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">87</td>
<td className="text-center">26</td>
<td className="text-center">2</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">30 000</td>
<td className="text-center">131</td>
<td className="text-center">65</td>
<td className="text-center">3</td>
<td className="text-center">Co-57, w-181, W-185</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">169</td>
<td className="text-center">101</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">205</td>
<td className="text-center">133</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  </table>  <br />  <table className="width-100">  <caption className="text-left"><strong>Nombre de jours dattente après la dernière utilisation à 18 MV dun accélérateur de particules Varian</strong></caption>  <tr>   <th>Charge de travail annuelle totale (MU/100)</th>
<th>Accélérateur linéaire entier</th>
<th>Assemblage de cible et filtre égalisateur</th>
<th>Accélérateur linéaire sans assemblage de cible ou filtre égalisateur</th>
<th>Isotopes critiques pour laccélérateur linéaire entier</th>   </tr>  <tr>
<td className="text-center">15 000</td>
<td className="text-center">161</td>
<td className="text-center">144</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">20 000</td>
<td className="text-center">247</td>
<td className="text-center">223</td>
<td className="text-center">9</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">25 000</td>
<td className="text-center">321</td>
<td className="text-center">289</td>
<td className="text-center">35</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">30 000</td>
<td className="text-center">386</td>
<td className="text-center">346</td>
<td className="text-center">66</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  <tr>
<td className="text-center">35 000</td>
<td className="text-center">444</td>
<td className="text-center">396</td>
<td className="text-center">94</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  <tr>
<td className="text-center">40 000</td>
<td className="text-center">497</td>
<td className="text-center">441</td>
<td className="text-center">118</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  </table>
<p>Hypothèses :</p>
<ul>
<li>La charge de travail à haute énergie représente 1/3 de la charge de travail annuelle totale indiquée dans la première colonne des tableaux.</li>
<li>Les résultats sont normalisés à sept années dexploitation continue.</li>
<li>Les activités se situent dans lassemblage de cible et le filtre égalisateur, sauf pour :
<ul>
<li><sup>122</sup>Sb et <sup>124</sup>Sb, dont on suppose quils sont répartis uniformément dans le blindage en plomb, lequel est modélisé comme un cylindre dont le diamètre intérieur fait 50 cm, le diamètre extérieur, 60 cm, à 50 cm de lisocentre</li>
<li><sup>60</sup>Co, dont on suppose quil est présent dans les aimants permanents des moteurs dentraînement du collimateur</li>
<li><sup>181</sup>W, <sup>185</sup>W et <sup>187</sup>W, dont on suppose quils sont répartis uniformément dans le collimateur en tungstène</li>
<li>le filtre égalisateur et la mâchoire inférieure et supérieure étant à une distance approximative de 80 cm, 58 cm, 48 cm et 37 cm de lisocentre, respectivement</li>
</ul></li>
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
<div id="glossary"></div>
<h2 id="glossary">Glossaire</h2>
<dl>
<dt><strong>à sécurité intégrée</strong> <span lang="en"><em>(fail-safe)</em></span></dt>
<dd>Voir à sûreté intégrée.</dd>
<dt><strong>à sûreté intégrée</strong> <span lang="en"><em>(fail-safe)</em></span></dt>
<dd>Capacité dun système ou dun composant de passer à un état sûr prédéterminé lorsquune défaillance survient.</dd>
<dt><strong>abandonner</strong> <span lang="en"><em>(abandon)</em></span></dt>
<dd>Mettre fin au contrôle réglementaire.</dd>
<dt><strong>accélérateur industriel ou de recherche</strong> <span lang="en"><em>(industrial or research accelerator)</em></span></dt>
<dd>Accélérateur de particules qui est uniquement destiné à des applications industrielles ou de recherche. <strong>Remarque :</strong> Dans les cas où on voudrait mener une recherche avec un accélérateur qui est principalement utilisé pour dautres applications, lexploitation de laccélérateur doit être autorisée par un permis qui reflète son utilisation principale.</dd>
<dt><strong>accélérateur pour la production disotopes</strong> <span lang="en"><em>(isotope production accelerator)</em></span></dt>
<dd>Accélérateur de particules conçu et utilisé pour la production de substances nucléaires par lirradiation dune matière cible.</dd>
<dt><strong>activité</strong> <span lang="en"><em>(activity)</em></span></dt>
<dd>Nombre de transformations nucléaires, mesurées en becquerel, se produisant par unité de temps.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/"><em>Règlement sur lemballage et le transport des substances nucléaires [2015]</em></a>)<br />
OU<br />
Voir activité autorisée.<br />
OU<br />
Qui est actif ou qui se déplace.<br />
OU<br />
Occupation particulière.</dd>
<dt><strong>activité autorisée</strong> <span lang="en"><em>(licensed activity or nuclear activity)</em></span></dt>
<dd>Activité visée aux alinéas 26a), c) ou e) de la Loi que le titulaire de permis est autorisé à exercer relativement à une installation nucléaire de catégorie II ou à de léquipement réglementé de catégorie II.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>)</dd>
<dt><strong>ALARA</strong> <em>(ALARA)</em></dt>
<dd>Voir niveau le plus bas quil soit raisonnablement possible datteindre.</dd>
<dt><strong>avoir en sa possession</strong> <span lang="en"><em>(possess)</em></span></dt>
<dd>À des fins dautorisation, avoir le soin et le contrôle de substance(s) nucléaire(s) ou dappareil(s) à rayonnement.<br />
<strong>Remarque :</strong> La possession est distincte de la propriété.</dd>
<dt><strong>charge de travail</strong> <span lang="en"><em>(workload)</em></span></dt>
<dd>Paramètre qui définit lutilisation de léquipement réglementé de catégorie II ou des appareils à rayonnement sur une période définie, et qui est peut être relié directement aux doses de rayonnement reçues par les personnes occupant les zones adjacentes au cours de cette période. Habituellement calculé en gray par an à une distance de référence de la source du rayonnement, à un emplacement précisé de la source.</dd>
<dt><strong>diagraphie</strong> <span lang="en"><em>(logging)</em></span></dt>
<dd>Utilisation de sources scellées en vue dobtenir de linformation géologique sur les zones souterraines.</dd>
<dt><strong>dose efficace (E)</strong> <span lang="en"><em>(effective dose [E])</em></span></dt>
<dd>Somme, exprimée en sieverts, des valeurs où chacune représente le produit de la dose équivalente reçue par un organe ou un tissu, et engagée à leur égard, figurant à la colonne 1 de lannexe 1 par le facteur de pondération figurant à la colonne 2.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>)<br />
<strong>Remarque 1 :</strong> La « dose efficace » est une mesure du préjudice total, ou risque, dû à lexposition aux rayonnements ionisants. Si lexposition à différents organes ou tissus nest pas uniforme (comme cest le cas lorsque les radionucléides sont déposés dans le corps), on utilise le concept de dose efficace. Lidée de base est dexprimer le risque attribuable à lexposition dun seul organe ou tissu en termes de risque équivalent à lexposition du corps entier. Lunité de mesure de la dose efficace est le sievert.<br />
<strong>Remarque 2 :</strong> La « dose équivalente  » et la « dose efficace » sont des grandeurs de protection utilisées pour montrer comment la radioexposition peut affecter le corps humain. Elles précisent les valeurs de dose qui découlent de la dose absorbée par le corps afin de maintenir les effets stochastiques sur la santé sous les niveaux acceptables et déviter toute réaction des tissus. La dose efficace permet de tenir compte de ces différences et de la façon dont lexposition peut affecter lensemble du corps.<br />
<strong>Remarque 3 :</strong> Facteur de pondération sentend du facteur de pondération tissulaire, lequel tient compte des différentes sensibilités aux rayonnements des organes et des tissus. Par exemple, la moelle osseuse est beaucoup plus radiosensible que les tissus musculaires ou nerveux. La dose efficace correspond à la somme des doses équivalentes pour chaque organe ou tissu multipliée par le facteur de pondération tissulaire approprié.<br />
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>E</mi><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>T</mi>
<mrow></mrow>
</munderover>
<mrow>
<msub>
<mi>w</mi>
<mi>T</mi>
</msub>
</mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>R</mi>
<mrow></mrow>
</munderover>
<mrow>
<msub>
<mi>w</mi>
<mi>R</mi>
</msub>
<msub>
<mi>D</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>R</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyraiabg2
da9maaqahabaGaam4DamaaBaaaleaacaWGubaabeaaaeaacaWGubaa
baaaniabggHiLdGcdaaeWbqaaiaadEhadaWgaaWcbaGaamOuaaqaba
GccaWGebWaaSbaaSqaaiaadsfacaGGSaGaamOuaaqabaaabaGaamOu
aaqaaaqdcqGHris5aaaa@454D@
</annotation>   </semantics>  </math>	 <br />
La valeur <em>w<sub>T</sub></em> constitue le facteur de pondération tissulaire où &sum;w<sub>T</sub> = 1. La somme est applicable à tous les organes et tissus visés par la définition de E.<br />
<strong>Remarque 4 :</strong> On ne peut utiliser uniquement la dose absorbée pour estimer le risque, car les effets du rayonnement dépendent aussi a) du type de rayonnement, b) de la répartition de labsorption dénergie dans le temps et lespace dans le corps humain et c) de la radiosensibilité des tissus ou organes exposés.<br />
OU<br />
Sentend au sens du paragraphe 1(1) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/"><em>Règlement sur lemballage et le transport des substances nucléaires [2015]</em></a>)</dd>
<dt><strong>dosimètre</strong> <span lang="en"><em>(dosimeter)</em></span></dt>
<dd>Appareil quune personne porte sur elle et qui permet de mesurer la dose de rayonnement quelle reçoit.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)<br />
OU<br />
Appareil qui est conçu pour mesurer la dose de rayonnement et que porte la personne. (Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>)<br />
<strong>Remarque :</strong> Les types courants incluent notamment les dosimètres thermoluminescents et les dosimètres à luminescence stimulée optiquement.</dd>
<dt><strong>entretien</strong> <span lang="en"><em>(servicing)</em></span></dt>
<dd>Entretien déquipement réglementé de catégorie II, y compris linstallation, les réparations et le démantèlement, autres que ceux constituant des opérations courantes qui sont :<br />
a) soit mentionnées dans le manuel de fonctionnement du fabricant à légard de léquipement;<br />
b) soit autorisées dans le permis délivré relativement à la possession ou à lexploitation de léquipement.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>)<br />
<strong>Remarque :</strong> On qualifie dentretien linstallation ou le remplacement dune source scellée, ainsi que toute réparation qui pourrait exposer la source, réduire le blindage qui lentoure ou influer sur les commandes dentraînement de la source pour utilisation en radiothérapie.</dd>
<dt><strong>épreuve détanchéité</strong> <span lang="en"><em>(leak test)</em></span></dt>
<dd>En ce qui a trait aux sources scellées (y compris celles contenues dans léquipement réglementé) ou aux substances nucléaires utilisées comme blindage, méthode de vérification de lintégrité de lencapsulation de la source scellée ou permettant de sassurer que la substance nucléaire utilisée comme blindage ne peut pas être enlevée facilement de la surface de ce blindage.</dd>
<dt><strong>équipement réglementé de catégorie II</strong> <span lang="en"><em>(Class II prescribed equipment)</em></span></dt>
<dd>Selon le cas :<br />
a) irradiateur qui utilise plus de 1015 Bq dune substance nucléaire;<br />
b) irradiateur dont le blindage ne fait pas partie de lirradiateur et qui est conçu pour produire une dose de rayonnement à un débit dépassant 1  cGy/min à une distance de 1 m;<br />
c) appareil de téléthérapie à source radioactive;<br />
d) accélérateur de particules qui a la capacité de produire de lénergie nucléaire et dont lénergie de faisceau est inférieure à 50 MeV pour des faisceaux de particules de masse égale ou inférieure à 4 unités de masse atomique;<br />
e) accélérateur de particules qui a la capacité de produire de lénergie nucléaire et dont lénergie de faisceau est égale ou inférieure à 15 MeV par unité de masse atomique pour des faisceaux de particules de masse supérieure à 4 unités de masse atomique;<br />
f) appareil de curiethérapie à projecteur de source télécommandé.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>)<br />
<strong>Remarque :</strong> cGy/min signifie centigray par minute et MeV correspond à mégaélectron volt.</dd>
<dt><strong>exporter</strong> <span lang="en"><em>(export)</em></span></dt>
<dd>Transfert dune substance nucléaire, déquipement réglementé ou de renseignements réglementés du Canada à un autre pays.</dd>
<dt><strong>facteur doccupation</strong> <span lang="en"><em>(occupancy factor)</em></span></dt>
<dd>Fraction du temps total pendant lequel un champ de rayonnement est présent à un endroit particulier où une personne peut raisonnablement se trouver. Le facteur (&le;&nbsp; 1) est multiplié par la dose totale de rayonnement à cet endroit, pour obtenir la dose individuelle maximale quune personne pourrait recevoir.</dd>
<dt><strong>facteur dutilisation (U)</strong> <span lang="en"><em>(use factor [U])</em></span></dt>
<dd>Fraction de la charge de travail totale pendant laquelle un champ de rayonnement est présent à un endroit particulier. Ce facteur (&le;&nbsp;1) peut être multiplié par la charge de travail et le facteur doccupation à cet endroit pour calculer la dose individuelle maximale quune personne pourrait recevoir.</dd>
<dt><strong>fondement dautorisation</strong> <span lang="en"><em>(licensing basis)</em></span></dt>
<dd><p>Ensemble dexigences et de documents visant une installation ou une activité réglementée, qui comprend :
<ul>
<li>les exigences réglementaires stipulées dans les lois et règlements applicables</li>
<li>les conditions et les mesures de sûreté et de réglementation décrites dans le permis relatif à linstallation ou à lactivité et les documents cités en référence directement dans ce permis</li>
<li>les mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande</li>
</ul></p></dd>
<dt><strong>importation</strong> <span lang="en"><em>(import)</em></span></dt>
<dd>Transfert au Canada dune substance nucléaire, déquipement réglementé ou de renseignements réglementés à partir dun autre pays.</dd>
<dt><strong>installation nucléaire de catégorie II</strong> <span lang="en"><em>(Class II nuclear facility)</em></span></dt>
<dd>Toute installation qui comprend de léquipement réglementé de catégorie II.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>)</dd>
<dt><strong>kerma de lair</strong> <span lang="en"><em>(air kerma)</em></span></dt>
<dd>La valeur du kerma (énergie cinétique transférée dans la matière) de lair, en gray, où le kerma (K) est défini comme suit :<br />
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>K</mi><mo>=</mo><mfrac>
<mrow>
<mi>d</mi><msub>
<mi>E</mi>
<mrow>
<mi>t</mi><mi>r</mi></mrow>
</msub>
</mrow>
<mrow>
<mi>d</mi><mi>m</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4saiabg2
da9maalaaabaGaamizaiaadweadaWgaaWcbaGaamiDaiaadkhaaeqa
aaGcbaGaamizaiaad2gaaaaaaa@3D90@
</annotation>   </semantics>  </math>
et où <em>dE</em><sub>tr</sub> est la somme des énergies cinétiques initiales de toutes les particules ionisantes chargées libérées par des particules ionisantes neutres, dans un volume dair de masse <em>dm</em>.</dd>
<dt><strong>limite annuelle dincorporation (LAI)</strong> <span lang="en"><em>(annual limit on intake (ALI))</em></span></dt>
<dd>Activité dun radionucléide, exprimée en becquerels, qui délivre une dose efficace de 20 mSv durant les 50 années suivant lincorporation du radionucléide dans le corps dune personne qui a 18 ans ou plus ou durant la période commençant à son incorporation et se terminant à lâge de 70 ans, dans le cas où il est incorporé dans le corps dune personne qui a moins de 18 ans.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>)</dd>
<dt><strong>niveau le plus bas quil soit raisonnablement possible datteindre (ALARA)</strong> <span lang="en"><em>(as low as reasonably achievable (ALARA))</em></span></dt>
<dd>Principe de radioprotection en vertu duquel les expositions aux rayonnements sont maintenues au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs socioéconomiques. Larticle 4 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a> énonce les obligations du titulaire de permis concernant le principe ALARA.</dd>
<dt><strong>population en général</strong> <span lang="en"><em>(general public)</em></span></dt>
<dd>Toute personne qui nest pas désignée comme travailleur du secteur nucléaire.</dd>
<dt><strong>radiamètre</strong> <span lang="en"><em>(radiation survey meter)</em></span></dt>
<dd>Appareil capable de mesurer des débits de dose de rayonnement.<br />
(Sources : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)
<dt><strong>renseignements réglementés</strong> <span lang="en"><em>(prescribed information)</em></span></dt>
<dd>Renseignements visés à larticle 21.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>Règlement général sur la sûreté et la réglementation nucléaires</em></a>)<br />
<strong>Remarque 1 :</strong> Pour lapplication de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a> (LSRN), sont désignés comme renseignements réglementés les renseignements qui portent sur ce qui suit, y compris les documents sur ces renseignements :<br />
a) les substances nucléaires, y compris leurs propriétés, qui sont nécessaires à la conception, la production, lutilisation, le fonctionnement ou lentretien des armes nucléaires ou des engins explosifs nucléaires;<br />
b) la conception, la production, lutilisation, le fonctionnement ou lentretien des armes nucléaires ou des engins explosifs nucléaires;<br />
c) les arrangements, léquipement, les systèmes et les procédures en matière de sécurité que le titulaire de permis a mis en place conformément à la Loi, à ses règlements ou au permis, y compris tout incident relatif à la sécurité;<br />
d) litinéraire ou le calendrier de transport des matières nucléaires de catégorie I, II, ou III au sens de larticle 1 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-209/"><em>Règlement sur la sécurité nucléaire</em></a>.<br />
<strong>Remarque 2 :</strong> Les renseignements nucléaires contrôlés sont aussi désignés renseignements réglementés pour lapplication de la LSRN, en ce qui concerne leur importation et leur exportation, à moins quils soient rendus publics conformément à la LSRN, à ses règlements ou à un permis. Voir aussi renseignement nucléaire contrôllé.</dd>
<dt><strong>services de dosimétrie</strong> <span lang="en"><em>(dosimetry service)</em></span></dt>
<dd>Service, désigné par règlement, assurant la mesure et le contrôle des doses de rayonnement. (Source : <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a>)</dd>
<dt><strong>seuil dintervention</strong> <span lang="en"><em>(action level)</em></span></dt>
<dd>Dose de rayonnement déterminée ou tout autre paramètre qui, lorsquil est atteint, peut dénoter une perte de contrôle dune partie du programme de radioprotection du titulaire de permis et rend nécessaire la prise de mesures particulières.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>)</dd>
<dt><strong>source de catégorie 1</strong> <span lang="en"><em>(Category 1 source)</em></span></dt>
<dd>Sources scellées qui pourraient, si elles ne sont pas gérées de manière sûre ou sécurisée, provoquer des blessures permanentes à la personne qui les a manipulées ou qui a été en contact avec elles dune quelconque manière pendant plus de quelques minutes. Rester à proximité dune quantité de ces substances radioactives non blindées pendant une période allant de quelques minutes à une heure pourrait être mortel. Au Canada, ces sources sont habituellement employées dans des irradiateurs autoblindés et en téléthérapie.<br />
<strong>Remarque :</strong> Utiliser les chiffres arabes pour ce terme. Noter aussi que les catégories de sources ne veulent pas dire la même chose que les catégories de matières nucléaires (voir matière nucléaire de catégorie I).</dd>
<dt><strong>source de catégorie 2</strong> (<span lang="en"><em>Category 2 source)</em></span></dt>
<dd>Sources scellées qui pourraient, si elles ne sont pas gérées de manière sûre ou sécurisée, provoquer des blessures permanentes à la personne qui les a manipulées ou qui a été en contact avec elles dune quelconque manière pendant une courte période (allant de quelques minutes à des heures). Rester à proximité dune quantité de ces substances radioactives non blindées pendant une période allant de quelques heures à des jours pourrait être mortel. Au Canada, ces sources sont habituellement employées dans des pratiques telles que la gammagraphie industrielle ou la diagraphie des puits de pétrole.<br />
<strong>Remarque :</strong> Utiliser les chiffres arabes pour ce terme. Noter aussi que les catégories de sources ne veulent pas dire la même chose que les catégories de matières nucléaires (voir matière nucléaire de catégorie II).</dd>
<dt><strong>source de catégorie 3</strong> <span lang="en"><em>(Category 3 source)</em></span></dt>
<dd>Sources scellées qui pourraient, si elles ne sont pas gérées de manière sûre ou sécurisée, provoquer des blessures permanentes à la personne qui les a manipulées ou qui a été en contact avec elles dune quelconque manière pendant quelques heures. Rester à proximité dune quantité de ces substances radioactives non blindées pendant une période allant de quelques jours à des semaines pourrait être mortel, bien que ce soit improbable. Au Canada, ces sources sont habituellement employées dans les jauges industrielles fixes et en curiethérapie à haut débit de dose.<br />
<strong>Remarque :</strong> Utiliser les chiffres arabes pour ce terme. Noter aussi que les catégories de sources ne veulent pas dire la même chose que les catégories de matières nucléaires (voir matière nucléaire de catégorie III).</dd>
<dt><strong>source de catégorie 4</strong> <span lang="en"><em>(Category 4 source)</em></span></dt>
<dd>Sources scellées qui sont peu susceptibles de provoquer des blessures permanentes. Cependant, si ces substances radioactives non blindées ne sont pas gérées de manière sûre ou sécurisée, elles pourraient éventuellement &ndash; bien que ce soit improbable &ndash; provoquer des blessures temporaires chez la personne qui les a manipulées ou qui a été en contact avec elles dune quelconque manière pendant plusieurs semaines. Au Canada, ces sources sont habituellement employées dans les jauges nucléaires portatives.<br />
<strong>Remarque :</strong> Utiliser les chiffres arabes. Noter aussi que les catégories de sources ne veulent pas dire la même chose que les catégories de matières nucléaires (voir matière nucléaire de catégorie I, II et III).</dd>
<dt><strong>source de catégorie 5</strong> <span lang="en"><em>(Category 5 source)</em></span></dt>
<dd>Sources scellées qui ne pourraient pas provoquer de blessure permanente chez qui que ce soit. Au Canada, ces sources sont habituellement employées dans le cadre de pratiques telles que la curiethérapie à débit de dose faible ou dans des instruments de chromatographie en phase gazeuse. <strong>Remarque :</strong> Utiliser les chiffres arabes. Noter aussi que les catégories de sources ne veulent pas dire la même chose que les catégories de matières nucléaires (voir matière nucléaire de catégorie I, II et III).</dd>
<dt><strong>source non scellée</strong> <span lang="en"><em>(unsealed source)</em></span></dt>
<dd>Source autre quune source scellée.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)<br />
<strong>Remarque :</strong> Ces substances nucléaires se présentent sous une forme physique permettant la dispersion des matières radioactives durant lutilisation ou la manipulation. Habituellement sous forme liquide, elles peuvent également exister sous forme solide, de poudre ou de gaz. Les sources non scellées sont couramment utilisé pour le diagnostic médical, les traitements thérapeutiques et les travaux de recherche en laboratoire. Aussi appelées sources ouvertes.</dd>
<dt><strong>source scellée</strong> <span lang="en"><em>(sealed source)</em></span></dt>
<dd>Substance nucléaire radioactive enfermée dans une enveloppe scellée ou munie dun revêtement auquel elle est liée, lenveloppe ou le revêtement présentant une résistance suffisante pour empêcher tout contact avec la substance et la dispersion de celle-ci dans les conditions demploi pour lesquelles lenveloppe ou le revêtement a été conçu.<br />
(Sources : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires de catégorie I</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)</dd>
<dt><strong>stockage</strong> <span lang="en"><em>(storage)</em></span></dt>
<dd>En ce qui a trait aux substances nucléaires et aux appareils à rayonnement, possession à des fins dentreposage seulement.</dd>
<dt><strong>substance nucléaire</strong> <span lang="en"><em>(nuclear substance)</em></span></dt>
<dd>Selon le cas :<br />
a) le deutérium, le thorium, luranium et les éléments de numéro atomique supérieur à 92;<br />
b) les dérivés et composés du deutérium, du thorium, de luranium ou des éléments de numéro atomique supérieur à 92;<br />
c) les radionucléides;<br />
d) les substances désignées par règlement comme étant soit capables de libérer de lénergie nucléaire, soit indispensables pour en produire ou en utiliser;<br />
e) un sous-produit radioactif qui résulte du développement, de la production ou de lutilisation de lénergie nucléaire;<br />
f) une substance ou un objet radioactif qui a servi dans le cadre du développement, de la production ou de lutilisation de lénergie nucléaire.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a>)</dd>
<dt><strong>transférer</strong> <span lang="en"><em>(transfer)</em></span></dt>
<dd>Déplacer les matières nucléaires, tant à lintérieur du pays (entre des zones de bilan matières canadiennes) quà létranger (importations et exportations).<br />
<strong>Remarque :</strong> Cette définition sapplique spécifiquement à la comptabilisation des matières nucléaires.<br />
OU<br />
Transmettre la possession dune substance nucléaire ou dun appareil à rayonnement à un autre titulaire de permis qui se trouve aussi au Canada.<br />
OU<br />
Déplacer une substance nucléaire ou un appareil à rayonnement dun endroit à un autre au Canada.<br />
OU<br />
Voir exporter ou importer.</dd>
<dt><strong>transport</strong> <span lang="en"><em>(transport)</em></span></dt>
<dd>Manipulation, acheminement, stockage en transit et réception des colis à la destination finale. Le transport comprend les conditions normales et les conditions daccident qui peuvent survenir pendant lacheminement et lentreposage en transit.</dd>
<dt><strong>travailleur</strong> <span lang="en"><em>(worker)</em></span></dt>
<dd>Personne qui effectue un travail mentionné dans un permis.<br />
(Sources : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>Règlement général sur la sûreté et la réglementation nucléaires</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-204/"><em>Règlement sur les installations nucléaires de catégorie I</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>; <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-206/"><em>Règlement sur les mines et les usines de concentration duranium</em></a>)<br />
<strong>Remarque :</strong> Cette définition sapplique aux entrepreneurs et aux sous-traitants ainsi quaux travailleurs directement employés par un titulaire de permis.</dd>
<dt><strong>travailleur du secteur nucléaire (TSN)</strong> <span lang="en"><em>(nuclear energy worker [NEW])</em></span></dt>
<dd>Personne qui, du fait de sa profession ou de son occupation et des conditions dans lesquelles elle exerce ses activités, si celles-ci sont liées à une substance ou une installation nucléaire, risque vraisemblablement de recevoir une dose de rayonnement supérieure à la limite réglementaire fixée pour la population en général.<br />
(Source : <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a>)</dd>
<dt><strong>utiliser</strong> <span lang="en"><em>(use)</em></span></dt>
<dd>Manipuler ou faire usage de substances nucléaires ou dappareils à rayonnement.<br />
<strong>Remarque :</strong> Cette définition sapplique aux substances nucléaires et aux appareils à rayonnement.</dd>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="abbrev"></div>
<h2 id="abbrev">Abréviations</h2>
<table className="">  <tr>
<td>ALARA</td>
<td>niveau le plus bas quil soit raisonnablement possible datteindre <span lang="en"><em>(as low as reasonably achievable)</em></span></td>  </tr>  <tr>
<td>ANSI</td>
<td>American National Standards Institute</td>  </tr>  <tr>
<td>AQ</td>
<td>assurance de la qualité</td>  </tr>  <tr>
<td>CCSN</td>
<td>Commission canadienne de sûreté nucléaire</td>  </tr>  <tr>
<td>CRP</td>
<td>comité de radioprotection</td>  </tr>  <tr>
<td>DDP</td>
<td>débit de dose pulsé</td>  </tr>  <tr>
<td>DS</td>
<td>dernier sorti</td>  </tr>  <tr>
<td>FDD</td>
<td>faible débit de dose</td>  </tr>  <tr>
<td>GM</td>
<td>Geiger-Müller</td>  </tr>  <tr>
<td>LAI</td>
<td><em>Loi sur laccès à linformation</em></td>  </tr>  <tr>
<td>LSRN</td>
<td><em>Loi sur la sûreté et la réglementation nucléaires</em></td>  </tr>  <tr>
<td>NCRP</td>
<td>National Council on Radiation Protection</td>  </tr>  <tr>
<td>RD/GD</td>
<td>document dapplication de la réglementation et dorientation</td>  </tr>  <tr>
<td>RRP</td>
<td>responsable de la radioprotection</td>  </tr>  <tr>
<td>RTIM</td>
<td>radiothérapie à intensité modulée</td>  </tr>  <tr>
<td>TMD</td>
<td>transport des marchandises dangereuses</td>  </tr>  <tr>
<td>TSN</td>
<td>travailleur du secteur nucléaire</td>  </tr>  <tr>
<td>UM</td>
<td>unité moniteur</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AddInfo"></div>
<h2 id="AddInfo">Renseignements supplémentaires</h2>
<h3>Calculs du blindage pour les établissements médicaux</h3>  <p>Il y a de nombreux documents de référence utiles pour les calculs du blindage (p. ex. McGinley2002, NCRP51, NCRP144, NCRP151, IAEA47). Ils contiennent pour lessentiel les mêmes principes de base et les mêmes équations et peuvent servir à effectuer les calculs de dose et de débit de dose requis pour établir une demande de permis.</p>
<ol>
<li>IAEA47, document n<sup>o</sup> 47 de la collection Rapports de sûreté, <span lang="en"><em>Radiation Protection in the Design of Radiotherapy Facilities</em></span>, 2006, Agence internationale de lénergie atomique.</li>
<li>McGinley2002, <span lang="en"><em>Shielding Techniques for Radiation Oncology Facilities</em></span>, deuxième édition 2002, Patton H. McGinley.</li>
<li>NCRP49, NCRP Report No. 49, <span lang="en"><em>Structural Shielding Design and Evaluation for Medical Use of X Rays and Gamma Rays of Energies up to 10 MeV</em></span>, 1976, National Council on Radiation Protection and Measurements.</li>
<li>NCRP51, NCRP Report No. 51, <span lang="en"><em>Radiation Protection Design Guidelines for 0.1 &ndash; 100 MeV Particle Accelerator Facilities</em></span>, 1977, National Council on Radiation Protection and Measurements.</li>
<li>NCRP144, NCRP Report No. 144, <span lang="en"><em>Radiation Protection for Particle Accelerator Facilities</em></span>, 2003, National Council on Radiation Protection and Measurements.</li>
<li>NCRP151, NCRP Report No. 151, <span lang="en"><em>Structural Shielding, Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em></span>, 2005, National Council on Radiation Protection and Measurements.</li> (Voir les remarques  1 et 2 qui suivent.)
</ol>  <p>Remarques :</p>
<ol>
<li><p>Il importe de noter que certaines des recommandations faites dans les documents de référence peuvent ne pas sappliquer au Canada. Par exemple, il est recommandé aux points 1.4.1 et 1.4.2 de NCRP151 de prévoir une limite de 5 mSv par an dans les « zones contrôlées » (limite équivalant à celle dune occupation par des travailleurs du secteur nucléaire) et de 1 mSv par an dans les « zones non contrôlées » (limite équivalant à celle dune occupation par la population en général). Ceci NEST PAS acceptable pour la conception et lautorisation dune installation au Canada. (voir la section B.1.4 : Objectifs de dose nominale).</p>
<p>À linverse, le point 1.4.3 de NCRP151 recommande dappliquer un certain nombre dhypothèses très prudentes pour les calculs, par exemple de retenir le taux de fuite de la tête de source maximale permissible fixé par la Commission électrotechnique internationale, demployer des facteurs doccupation prudents et dappliquer des facteurs de sûreté et la « règle des deux sources ». Comme il est indiqué dans NCRP151, cette prudence aide à garantir que « la dose équivalente réelle qui traverse la barrière [...] sera bien moindre que lobjectif de dose nominale applicable à la conception du blindage » [traduction]. Par conséquent, la prudence préconisée dans NCRP151 est souvent superflue dans le contexte réglementaire canadien, puisque les objectifs de dose nominale doivent être suffisamment faibles pour satisfaire au principe ALARA; il sagit donc simplement de respecter les objectifs de dose nominale, et non de veiller à demeurer bien en deçà.</p>
<p>Enfin, la réglementation de la CCSN ne prévoit pas de dose équivalente maximale dans une zone sur une période dune heure. Ce nest pas le cas aux États-Unis, où la Nuclear Regulatory Commission fixe une limite de 0,02 mSv (voir NCRP151, point 3.3.2). Par conséquent, la notion de « débit de dose équivalente moyenné sur une heure » présentée dans NCRP151 nest daucune pertinence dans le contexte réglementaire canadien.</p>
<li>Les références données dans la remarque 1 qui précède fournissent aussi de nombreux paramètres standards utiles à la conception du blindage et à lestimation des doses, y compris les valeurs datténuation au dixième pour les matériaux de blindage courants, les facteurs de diffusion, les facteurs doccupation types et les taux de production des neutrons. On peut appliquer directement ces paramètres au calcul des doses annuelles et des débits de dose. Cependant, comme il est indiqué plus haut dans la remarque 1, il est inutile dappliquer des paramètres très prudents dans les calculs, étant donné lapproche différente qui a été adoptée pour établir les objectifs de dose nominale. Les demandeurs peuvent donner des valeurs plus réalistes aux paramètres comme les facteurs doccupation, à la condition de fournir une justification acceptable de leur choix dune valeur plus faible. Pareillement, on peut donner aux paramètres comme le taux de fuite de la tête de source les valeurs tirées des spécifications du fabricant des appareils de téléthérapie à source radioactive, plutôt que de retenir les valeurs maximales admissibles recommandées par la Commission électrotechnique internationale.</li>
</ol>
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
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e pourrait comprendre de nombreux documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le <a href="http://www.suretenucleaire.gc.ca/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }