import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.4.3 : Sûreté-criticité nucléaire", 
                dateModified: "2014-07-04",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-4-3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Ce document d&rsquo;application de la r&eacute;glementation fait partie de la s&eacute;rie de documents d&rsquo;application de la r&eacute;glementation de la CCSN intitul&eacute;e Analyse de la s&ucirc;ret&eacute;, qui porte &eacute;galement sur l&rsquo;analyse probabiliste et d&eacute;terministe de la s&ucirc;ret&eacute;. La liste compl&egrave;te des s&eacute;ries figure &agrave; la fin de ce document et elle peut &ecirc;tre consult&eacute;e &agrave; partir du <a href="http://www.suretenucleaire.gc.ca/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>   <p>Le REGDOC 2.4.3, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire &eacute;tablit</em> les exigences de s&ucirc;ret&eacute; criticit&eacute; nucl&eacute;aire et explique comment respecter les exigences. Il d&eacute;crit de l&rsquo;information permettant d&rsquo;&eacute;viter que surviennent des accidents de criticit&eacute; lors de la manutention, du stockage, du traitement et du transport des mati&egrave;res fissiles et de la gestion &agrave; long terme des d&eacute;chets nucl&eacute;aires.</p>  <p>Ce document clarifie les contraintes physiques minimales et les limites relatives aux mati&egrave;res fissiles afin d&rsquo;assurer la s&ucirc;ret&eacute; criticit&eacute;  nucl&eacute;aire durant la construction, l&rsquo;exploitation, le d&eacute;classement, ou l&rsquo;abandon d&rsquo;une installation autoris&eacute;e. Il s&rsquo;applique aux installations disposant de mati&egrave;re fissile &agrave; l&rsquo;ext&eacute;rieur de r&eacute;acteurs nucl&eacute;aires, sauf pour l&rsquo;assemblage de telle mati&egrave;re dans des conditions contr&ocirc;l&eacute;es (comme dans les exp&eacute;riences sur la criticit&eacute;).</p>  <p>Les principes et &eacute;l&eacute;ments cl&eacute;s utilis&eacute;s dans l&rsquo;&eacute;laboration du pr&eacute;sent document sont conformes aux normes nationales et internationales. Certaines sections du pr&eacute;sent document sont tir&eacute;es de normes pr&eacute;cises de l&rsquo;American National Standards Institute (ANSI), avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society (ANS). Au besoin, le texte a &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations auxquelles souscrit le Canada &agrave; l&rsquo;&eacute;gard de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA) et des exigences r&eacute;glementaires de la CCSN.</p>  <p>Le REGDOC 2.4.3, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em> remplace les documents RD-327, <em>S&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em> et GD-327, <em>Directives de s&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em>, publi&eacute;s pr&eacute;c&eacute;demment par la CCSN.</p>  <p>Le pr&eacute;sent document servira &agrave; &eacute;valuer les demandes de permis pour les nouvelles activit&eacute;s et installations propos&eacute;es de m&ecirc;me que les demandes de renouvellement de permis pour les activit&eacute;s et les installations existantes. Apr&egrave;s la d&eacute;livrance d&rsquo;un permis par la Commission, les mesures de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire &eacute;tablies dans la demande de permis et dans les documents &agrave; l&rsquo;appui de ces mesures feront partie int&eacute;grante du fondement d&rsquo;autorisation.</p>  <p>L&rsquo;orientation contenue dans ce document vise &agrave; informer le demandeur, &agrave; expliquer plus en d&eacute;tail des exigences ou &agrave; fournir de l&rsquo;orientation aux demandeurs et aux titulaires de permis sur la fa&ccedil;on de r&eacute;pondre aux exigences. Il pr&eacute;cise aussi comment le personnel de la CCSN &eacute;value l&rsquo;information pendant l&rsquo;examen des demandes de permis.</p>  <p>Il est attendu que les titulaires de permis examinent cette orientation et en tiennent compte. S&rsquo;ils choisissent de ne pas y adh&eacute;rer, ils devraient expliquer comment la m&eacute;thode qu&rsquo;ils ont s&eacute;lectionn&eacute;e r&eacute;pond aux exigences r&eacute;glementaires. Le demandeur ou le titulaire de permis peut soumettre un dossier d&eacute;montrant que l&rsquo;intention d&rsquo;une exigence est prise en compte par d&rsquo;autres moyens et d&eacute;montr&eacute;e &agrave; l&rsquo;aide de preuves justificatives.</p>  <p>Il est possible de d&eacute;finir et d&rsquo;utiliser une m&eacute;thode graduelle, proportionnelle au risque, lorsque les exigences et l&rsquo;orientation &eacute;nonc&eacute;e dans ce document d&rsquo;application de la r&eacute;glementation sont appliqu&eacute;es. L&rsquo;utilisation d&rsquo;une m&eacute;thode graduelle ne constitue pas un assouplissement des exigences. Avec cette m&eacute;thode, l&rsquo;application des exigences correspond aux risques et aux caract&eacute;ristiques particuli&egrave;res de l&rsquo;installation ou de l&rsquo;activit&eacute;.</p>
<div className="alert alert-info">
<p><strong>Remarque importante :</strong> Ce document fait partie du fondement d&rsquo;autorisation d&rsquo;une installation ou d&rsquo;une activit&eacute; r&eacute;glement&eacute;e si on s&rsquo;y r&eacute;f&egrave;re directement ou indirectement dans le permis (notamment dans des documents cit&eacute;s en r&eacute;f&eacute;rence du titulaire de permis).</p>
<p>Le fondement d&rsquo;autorisation &eacute;tablit les conditions limites du rendement acceptable pour une installation ou une activit&eacute; r&eacute;glement&eacute;e et &eacute;tablit les bases du programme de conformit&eacute; de la CCSN &agrave; l&rsquo;&eacute;gard de cette installation ou activit&eacute; r&eacute;glement&eacute;e.</p>
<p>Dans le cas o&ugrave; le document est un &eacute;l&eacute;ment du fondement d&rsquo;autorisation, le terme &laquo; doit &raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle le titulaire ou le demandeur de permis doit se conformer; le terme &laquo; devrait &raquo; d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo; pourrait &raquo; exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo; peut &raquo; exprime une possibilit&eacute; ou une capacit&eacute;.</p>
<p>Aucune information contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes les conditions de permis applicables et d&rsquo;y adh&eacute;rer.</p>  </div>
<div className="clear"></div>  </div><div className="col-md-12 module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
<li><a href="#sec1-4">1.4 Normes nationales et internationales</a></li>
</ul></li>
<li><a href="#sec2">2. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</a>
<ul>
<li><a href="#sec2-1">2.1 Introduction</a></li>
<li><a href="#sec2-2">2.2 Port&eacute;e</a></li>
<li><a href="#sec2-3">2.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec2-3-1">2.3.1 Categorization of operations with fissionable materials</a>
<ul>
<li><a href="#sec2-3-1-1">2.3.1.1 Quantit&eacute;s d&rsquo;exemption de mati&egrave;res fissiles</a></li>
<li><a href="#sec2-3-1-2">2.3.1.2 Petite quantit&eacute; de mati&egrave;res fissiles</a></li>
<li><a href="#sec2-3-1-3">2.3.1.3 Quantit&eacute; importante de mati&egrave;res fissiles</a></li>
<li><a href="#sec2-3-1-4">2.3.1.4 Lien entre le programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et la cat&eacute;gorisation</a></li>
</ul></li>
<li><a href="#sec2-3-2">2.3.2 Pratiques en mati&egrave;re de gestion de programme</a>
<ul>
<li><a href="#sec2-3-2-1">2.3.2.1 Responsibilit&eacute;s</a></li>
<li><a href="#sec2-3-2-2">2.3.2.2 Analyse de proc&eacute;d&eacute;</a></li>
<li><a href="#sec2-3-2-3">2.3.2.3 Proc&eacute;dures &eacute;crites</a></li>
<li><a href="#sec2-3-2-4">2.3.2.4 Contr&ocirc;le des mati&egrave;res</a></li>
<li><a href="#sec2-3-2-5">2.3.2.5 Contr&ocirc;le de l&rsquo;&eacute;quipement</a></li>
<li><a href="#sec2-3-2-6">2.3.2.6 Programme de gestion de la qualit&eacute;</a></li>
<li><a href="#sec2-3-2-7">2.3.2.7 Contr&ocirc;le op&eacute;rationnel</a></li>
<li><a href="#sec2-3-2-8">2.3.2.8 Examens op&eacute;rationnels</a></li>
<li><a href="#sec2-3-2-9">2.3.2.9 <em>Proc&eacute;dures d&rsquo;urgence</em></a></li>
</ul></li>
<li><a href="#sec2-3-3">2.3.3 Pratiques techniques</a>
<ul>
<li><a href="#sec2-3-3-1">2.3.3.1 Param&egrave;tres contr&ocirc;l&eacute;s</a></li>
<li><a href="#sec2-3-3-2">2.3.3.2 Disponibilit&eacute; et fiabilit&eacute;</a></li>
<li><a href="#sec2-3-3-2-a">Principe de la contingence double</a></li>
<li><a href="#sec2-3-3-2-b">Redondance</a></li>
<li><a href="#sec2-3-3-2-c">Ind&eacute;pendance</a></li>
<li><a href="#sec2-3-3-2-d">Diversit&eacute;</a></li>
<li><a href="#sec2-3-3-2-e">Conception &agrave; s&ucirc;ret&eacute; int&eacute;gr&eacute;e</a></li>
<li><a href="#sec2-3-3-2-f">Testabilit&eacute;</a></li>
<li><a href="#sec2-3-3-3">2.3.3.3 Contr&ocirc;le de la g&eacute;om&eacute;trie</a></li>
<li><a href="#sec2-3-3-4">2.3.3.4 Absorbeurs de neutrons</a></li>
<li><a href="#sec2-3-3-5">2.3.3.5 Limite de sous-criticit&eacute;</a></li>
<li><a href="#sec2-3-3-6">2.3.3.6 R&eacute;flecteurs de neutrons</a></li>
<li><a href="#sec2-3-3-7">2.3.3.7 Interaction des neutrons</a></li>
</ul></li>
<li><a href="#sec2-3-4">2.3.4 Validation d&rsquo;une m&eacute;thode de calcul</a>
<ul>
<li><a href="#sec2-3-4-1">2.3.4.1 &Eacute;tablissement du biais</a></li>
<li><a href="#sec2-3-4-2">2.3.4.2 Tendances du biais</a></li>
<li><a href="#sec2-3-4-3">2.3.4.3 Incertitudes li&eacute;es au biais</a></li>
<li><a href="#sec2-3-4-4">2.3.4.4 D&eacute;pendance face aux programmes informatiques</a></li>
<li><a href="#sec2-3-4-5">2.3.4.5 Conformit&eacute; avec les mesures</a></li>
<li><a href="#sec2-3-4-6">2.3.4.6 Rapport de validation</a></li>
</ul></li>
</ul></li>
<li><a href="#sec2-4">2.4 Limites &agrave; un seul param&egrave;tre ou &agrave; param&egrave;tres multiples pour les nucl&eacute;ides fissiles</a>
<ul>
<li><a href="#sec2-4-1">2.4.1 Solutions aqueuses homog&egrave;nes</a></li>
<li><a href="#sec2-4-2">2.4.2 M&eacute;langes aqueux</a>
<ul>
<li><a href="#sec2-4-2-1">2.4.2.1 Limites d&rsquo;enrichissement</a></li>
</ul></li>
<li><a href="#sec2-4-3">2.4.3 Unit&eacute;s m&eacute;talliques</a></li>
<li><a href="#sec2-4-4">2.4.4 Oxydes</a></li>
</ul></li>
<li><a href="#sec2-5">2.5 Contr&ocirc;le des param&egrave;tres multiples</a>
<ul>
<li><a href="#sec2-5-1">2.5.1 M&eacute;langes d&rsquo;uranium m&eacute;tal ou d&rsquo;oxyde d&rsquo;uranium et d&rsquo;eau pour un faible enrichissement en <sup>235</sup>U</a></li>
<li><a href="#sec2-5-2">2.5.2 Solutions aqueuses d&rsquo;uranium pour un faible enrichissement en <sup>235</sup>U</a></li>
<li><a href="#sec2-5-3">2.5.3 Solutions aqueuses homog&egrave;nes de Pu(NO<sub>3</sub>)<sub>4</sub> contenant du <sup>240</sup>Pu</a></li>
<li><a href="#sec2-5-4">2.5.4 M&eacute;langes aqueux de plutonium contenant du <sup>240</sup>Pu</a></li>
</ul></li>
</ul></li>
<li><a href="#sec3">3. Syst&egrave;me d&#39;alarme d&#39;accident de criticit&eacute;</a>
<ul>
<li><a href="#sec3-1">3.1 Introduction</a></li>
<li><a href="#sec3-2">3.2 Port&eacute;e</a></li>
<li><a href="#sec3-3">3.3 Principes g&eacute;n&eacute;raux</a>
<ul>
<li><a href="#sec3-3-1">3.3.1 G&eacute;n&eacute;ralit&eacute;s</a></li>
<li><a href="#sec3-3-2">3.3.2 Consid&eacute;rations</a>
<ul>
<li><a href="#sec3-3-2-1">3.3.2.1 &Eacute;valuation des syst&egrave;mes d&rsquo;alarme de criticit&eacute;</a></li>
<li><a href="#sec3-3-2-2">3.3.2.2 Installation de syst&egrave;mes d&rsquo;alarme de criticit&eacute;</a></li>
<li><a href="#sec3-3-2-3">3.3.2.3 D&eacute;tection des accidents de criticit&eacute;</a></li>
</ul></li>
<li><a href="#sec3-3-3">3.3.3 Alarme de criticit&eacute;</a></li>
<li><a href="#sec3-3-4">3.3.4 Fiabilit&eacute;</a></li>
</ul></li>
<li><a href="#sec3-4">3.4 Crit&egrave;res de conception des syst&egrave;mes</a>
<ul>
<li><a href="#sec3-4-1">3.4.1 Fiabilit&eacute;</a></li>
<li><a href="#sec3-4-2">3.4.2 Vuln&eacute;rabilit&eacute; du syst&egrave;me</a></li>
<li><a href="#sec3-4-3">3.4.3 Tol&eacute;rance sismique</a></li>
<li><a href="#sec3-4-4">3.4.4 Alarme de type &laquo; panne &raquo;</a></li>
<li><a href="#sec3-4-5">3.4.5 Temps de r&eacute;ponse</a></li>
<li><a href="#sec3-4-6">3.4.6 Crit&egrave;re de d&eacute;tection</a></li>
<li><a href="#sec3-4-7">3.4.7 Sensibilit&eacute;</a></li>
<li><a href="#sec3-4-8">3.4.8 Emplacement des d&eacute;tecteurs</a></li>
<li><a href="#sec3-4-9">3.4.9 Verrouillage du syst&egrave;me de ventilation</a> </li>
</ul></li>
<li><a href="#sec3-5">3.5 Essais</a>
<ul>
<li><a href="#sec3-5-1">3.5.1 Essais initiaux</a></li>
<li><a href="#sec3-5-2">3.5.2 Essais sp&eacute;ciaux</a></li>
<li><a href="#sec3-5-3">3.5.3 R&eacute;ponse au rayonnement</a></li>
<li><a href="#sec3-5-4">3.5.4 Essais p&eacute;riodiques</a></li>
<li><a href="#sec3-5-5">3.5.5 Mesures correctives</a></li>
<li><a href="#sec3-5-6">3.5.6 Proc&eacute;dures d&rsquo;essai</a></li>
<li><a href="#sec3-5-7">3.5.7 Registres</a></li>
<li><a href="#sec3-5-8">3.5.8 Hors d&rsquo;usage</a></li>
</ul></li>
<li><a href="#sec3-6">3.6 Familiarisation des employ&eacute;s</a>
<ul>
<li><a href="#sec3-6-1">3.6.1 Instructions affich&eacute;es</a></li>
<li><a href="#sec3-6-2">3.6.2 Formation et exercices d&rsquo;alerte de criticit&eacute;</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4">4. Utilisation d&rsquo;anneaux de Raschig en verre borosilicate comme d&rsquo;absorbeurs de neutrons dans des solutions de mati&egrave;re fissile</a>
<ul>
<li><a href="#sec4-1">4.1 Introduction</a></li>
<li><a href="#sec4-2">4.2 Port&eacute;ee</a></li>
<li><a href="#sec4-3">4.3 Exigences g&eacute;n&eacute;rales</a>
<ul>
<li><a href="#sec4-3-1">4.3.1 Environnement physique</a>
<ul>
<li><a href="#sec4-3-1-1">4.3.1.1 Environnement m&eacute;canique</a></li>
<li><a href="#sec4-3-1-2">4.3.1.2 Environnement radioactif</a></li>
</ul></li>
<li><a href="#sec4-3-2">4.3.2 Environnement chimique</a>
<ul>
<li><a href="#sec4-3-2-1">4.3.2.1 Milieu presque neutre</a></li>
<li><a href="#sec4-3-2-2">4.3.2.2 Milieu acide</a></li>
<li><a href="#sec4-3-2-3">4.3.2.3 Milieu basique</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4-4">4.4 Sp&eacute;cifications des anneaux</a>
<ul>
<li><a href="#sec4-4-1">4.4.1 Composition</a>
<ul>
<li><a href="#sec4-4-1-1">4.4.1.1 Type de verre</a></li>
<li><a href="#sec4-4-1-2">4.4.1.2 Masse volumique du verre</a></li>
<li><a href="#sec4-4-1-3">4.4.1.3 Teneur en <sup>10</sup>B du verre</a></li>
</ul></li>
<li><a href="#sec4-4-2">4.4.2 Diam&egrave;tre de l&rsquo;anneau</a></li>
<li><a href="#sec4-4-3">4.4.3 Fini de surface</a></li>
<li><a href="#sec4-4-4">4.4.4 Essais chimiques</a></li>
<li><a href="#sec4-4-5">4.4.5 Essais m&eacute;caniques</a></li>
</ul></li>
<li><a href="#sec4-5">4.5 Sp&eacute;cifications des colonnes garnies</a>
<ul>
<li><a href="#sec4-5-1">4.5.1 Installation des anneaux</a></li>
<li><a href="#sec4-5-2">4.5.2 Parties de la colonne exempt&eacute;e d&rsquo;anneaux</a></li>
<li><a href="#sec4-5-3">4.5.3 D&eacute;termination du niveau des anneaux</a></li>
<li><a href="#sec4-5-4">4.5.4 D&eacute;termination de la fraction du volume de verre</a></li>
<li><a href="#sec4-5-5">4.5.5 Volume admissible de solution dans une colonne garnie d&rsquo;anneaux</a></li>
</ul></li>
<li><a href="#sec4-6">4.6 Concentrations maximales sp&eacute;cifi&eacute;es pour les solutions fissiles</a></li>
<li><a href="#sec4-7">4.7 Inspection pour entretien</a>
<ul>
<li><a href="#sec4-7-1">4.7.1 Tassement</a></li>
<li><a href="#sec4-7-2">4.7.2 Mati&egrave;res solides fissiles</a></li>
<li><a href="#sec4-7-3">4.7.3 Propri&eacute;t&eacute;s physiques</a></li>
<li><a href="#sec4-7-4">4.7.4 Intervalles entre les inspections</a></li>
</ul></li>
</ul></li>
<li><a href="#sec5">5. S&ucirc;ret&eacute; dans la mesure <em>in situ</em> de la multiplication des neutrons sous-critiques</a>
<ul>
<li><a href="#sec5-1">5.1 Introduction</a></li>
<li><a href="#sec5-2">5.2 Port&eacute;e</a></li>
<li><a href="#sec5-3">5.3 Pratiques administratives</a></li>
<li><a href="#sec5-4">5.4 Crit&egrave;res relatifs &agrave; l&rsquo;&eacute;quipement</a></li>
<li><a href="#sec5-5">5.5 Pratiques op&eacute;rationnelles</a></li>
</ul></li>
<li><a href="#sec6">6. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans le stockage des mati&egrave;res fissiles</a>
<ul>
<li><a href="#sec6-1">6.1 Introduction</a></li>
<li><a href="#sec6-2">6.2 Port&eacute;e</a></li>
<li><a href="#sec6-3">6.3 Pratiques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec6-3-1">6.3.1 Pratiques administratives</a></li>
<li><a href="#sec6-3-2">6.3.2 Pratiques techniques</a></li>
</ul></li>
<li><a href="#sec6-4">6.4 Param&egrave;tres, limites et conditions</a>
<ul>
<li><a href="#sec6-4-1">6.4.1 Limites de masse unitaire</a></li>
<li><a href="#sec6-4-2">6.4.2 Mod&eacute;ration</a></li>
<li><a href="#sec6-4-3">6.4.3 Position de l&rsquo;unit&eacute; dans la cellule</a></li>
<li><a href="#sec6-4-4">6.4.4 Autres r&eacute;flecteurs</a></li>
<li><a href="#sec6-4-5">6.4.5 Cellules &agrave; capacit&eacute; doubl&eacute;e</a></li>
<li><a href="#sec6-4-6">6.4.6 Enceintes de stockage contigu&euml;s</a></li>
<li><a href="#sec6-4-7">6.4.7 Facteurs de r&eacute;duction</a></li>
<li><a href="#sec6-4-8">6.4.8 All&eacute;es</a></li>
<li><a href="#sec6-4-9">6.4.9 Confinement des mati&egrave;res fissiles et des mat&eacute;riaux de rangement</a></li>
<li><a href="#sec6-4-10">6.4.10 Sous-criticit&eacute; des unit&eacute;s</a></li>
<li><a href="#sec6-4-11">6.4.11 Espacement entre les unit&eacute;s</a></li>
<li><a href="#sec6-4-12">6.4.12 Forme de l&rsquo;unit&eacute;</a></li>
</ul></li>
<li><a href="#sec6-5">6.5 Autres applications</a>
<ul>
<li><a href="#sec6-5-1">6.5.1 Amalgame de cellules diff&eacute;rentes</a></li>
<li><a href="#sec6-5-2">6.5.2 Interpolation</a></li>
<li><a href="#sec6-5-3">6.5.3 Cellules non cubiques</a></li>
<li><a href="#sec6-5-4">6.5.4 Position de l&rsquo;unit&eacute; dans la cellule</a></li>
<li><a href="#sec6-5-5">6.5.5 Forme du r&eacute;seau</a></li>
<li><a href="#sec6-5-6">6.5.6 Plutonium 238</a></li>
</ul></li>
</ul></li>
<li><a href="#sec7">7. Crit&egrave;res relatifs aux contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans les activit&eacute;s avec blindage et confinement</a>
<ul>
<li><a href="#sec7-1">7.1 Introduction</a></li>
<li><a href="#sec7-2">7.2 Port&eacute;e</a></li>
<li><a href="#sec7-3">7.3 Crit&egrave;res relatifs au blindage et au confinement ad&eacute;quats</a>
<ul>
<li><a href="#sec7-3-1">7.3.1 Conditions</a></li>
<li><a href="#sec7-3-2">7.3.2 Pertinence du blindage et du confinement</a>
<ul>
<li><a href="#sec7-3-2-1">7.3.2.1 Dose de rayonnement</a></li>
<li><a href="#sec7-3-2-2">7.3.2.2 Crit&egrave;re relatif au blindage et au confinement</a></li>
<li><a href="#sec7-3-2-3">7.3.2.3 Int&eacute;grit&eacute; structurale</a></li>
<li><a href="#sec7-3-2-4">7.3.2.4 Espace faisant office de blindage</a></li>
</ul></li>
</ul></li>
<li><a href="#sec7-4">7.4 Pratiques de s&ucirc;ret&eacute;-criticit&eacute;</a>
<ul>
<li><a href="#sec7-4-1">7.4.1 Op&eacute;ration &agrave; contingence unique</a></li>
<li><a href="#sec7-4-2">7.4.2 M&eacute;thodes pour les installations non blind&eacute;es</a></li>
</ul></li>
</ul></li>
<li><a href="#sec8">8. Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire et s&ucirc;ret&eacute; des m&eacute;langes de combustible de plutonium et d&rsquo;uranium &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs</a>
<ul>
<li><a href="#sec8-1">8.1 Introduction</a></li>
<li><a href="#sec8-2">8.2 Port&eacute;e</a></li>
<li><a href="#sec8-3">8.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec8-3-1">8.3.1 Pratiques administratives et techniques</a></li>
<li><a href="#sec8-3-2">8.3.2 Contr&ocirc;le de l&rsquo;homog&eacute;n&eacute;it&eacute;</a></li>
</ul></li>
<li><a href="#sec8-4">8.4 Limites de sous-criticit&eacute; pour les m&eacute;langes uniformes et homog&egrave;nes d&rsquo;uranium et de plutonium dans l&rsquo;eau</a>
<ul>
<li><a href="#sec8-4-1">8.4.1 M&eacute;langes aqueux homog&egrave;nes</a></li>
<li><a href="#sec8-4-2">8.4.2 &Eacute;carts dans les limites de sous criticit&eacute; pour les m&eacute;langes contenant du PuO<sub>2</sub></a></li>
<li><a href="#sec8-4-3">8.4.3 Poudres d&rsquo;oxydes mixtes s&egrave;ches et humides</a></li>
<li><a href="#sec8-4-4">8.4.4 Limites des concentrations de plutonium dans des quantit&eacute;s illimit&eacute;es de m&eacute;langes d&rsquo;oxydes et de nitrates de plutonium et d&rsquo;uranium naturel</a></li>
</ul></li>
<li><a href="#sec8-5">8.5 Limites de sous criticit&eacute; pour les m&eacute;langes h&eacute;t&eacute;rog&egrave;nes d&rsquo;oxydes mixtes</a></li>
</ul></li>
<li><a href="#sec9">9. Utilisation d&rsquo;absorbeurs de neutrons solubles dans des installations nucl&eacute;aires &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs</a>
<ul>
<li><a href="#sec9-1">9.1 Introduction</a></li>
<li><a href="#sec9-2">9.2 Port&eacute;e</a></li>
<li><a href="#sec9-3">9.3 Exigences administratives et directives</a>
<ul>
<li><a href="#sec9-3-1">9.3.1 Choix d&rsquo;un absorbeur de neutrons soluble</a></li>
<li><a href="#sec9-3-2">9.3.2 Conception et modifications des syst&egrave;mes</a></li>
<li><a href="#sec9-3-3">9.3.3 &Eacute;valuations de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#sec9-3-4">9.3.4 Programme de gestion de la qualit&eacute;</a></li>
<li><a href="#sec9-3-5">9.3.5 Exploitation d&rsquo;une installation utilisant des absorbeurs solubles</a></li>
</ul></li>
</ul></li>
<li><a href="#sec10">10. Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire des nucl&eacute;ides d&rsquo;actinides sp&eacute;ciaux</a>
<ul>
<li><a href="#sec10-1">10.1 Introduction</a></li>
<li><a href="#sec10-2">10.2 Port&eacute;e</a></li>
<li><a href="#sec10-3">10.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#sec10-4">10.4 Limites &agrave; param&egrave;tre unique pour les actinides sp&eacute;ciaux</a>
<ul>
<li><a href="#sec10-4-1">10.4.1 Syst&egrave;mes m&eacute;talliques sph&eacute;riques</a></li>
<li><a href="#sec10-4-2">10.4.2 M&eacute;langes m&eacute;tal-eau</a></li>
<li><a href="#sec10-4-3">10.4.3 Solutions dilu&eacute;es</a></li>
<li><a href="#sec10-4-4">10.4.4 Op&eacute;rations avec des oxydes</a></li>
</ul></li>
</ul></li>
<li><a href="#sec11">11. Crit&egrave;res de s&ucirc;ret&eacute;-criticit&eacute; pour la manutention, le transport, le stockage et la gestion des d&eacute;chets &agrave; long terme hors r&eacute;acteur du combustible des r&eacute;acteurs</a>
<ul>
<li><a href="#sec11-1">11.1 Introduction</a></li>
<li><a href="#sec11-2">11.2 Port&eacute;e</a></li>
<li><a href="#sec11-3">11.3 Crit&egrave;res de s&ucirc;ret&eacute; g&eacute;n&eacute;raux</a>
<ul>
<li><a href="#sec11-3-1">11.3.1 Analyse de proc&eacute;d&eacute;</a></li>
<li><a href="#sec11-3-2">11.3.2 Activit&eacute;s pr&eacute;alables au d&eacute;but des op&eacute;rations</a></li>
<li><a href="#sec11-3-3">11.3.3 Absorbeurs de neutrons</a></li>
<li><a href="#sec11-3-4">11.3.4 Composition et caract&eacute;ristiques nucl&eacute;aires du combustible</a></li>
<li><a href="#sec11-3-5">11.3.5 Transport</a></li>
</ul></li>
<li><a href="#sec11-4">11.4 Crit&egrave;res relatifs &agrave; l&rsquo;&eacute;tablissement de la sous-criticit&eacute;</a></li>
</ul></li>
<li><a href="#sec12">12. Pratiques administratives en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec12-1">12.1 Introduction</a></li>
<li><a href="#sec12-2">12.2 Port&eacute;e</a></li>
<li><a href="#sec12-3">12.3 Responsabilit&eacute;s</a>
<ul>
<li><a href="#sec12-3-1">12.3.1 Responsabilit&eacute;s des gestionnaires</a></li>
<li><a href="#sec12-3-2">12.3.2 Responsabilit&eacute;s des superviseurs</a></li>
<li><a href="#sec12-3-3">12.3.3 Responsabilit&eacute;s du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
</ul></li>
<li><a href="#sec12-4">12.4 Proc&eacute;dures d&rsquo;exploitation</a></li>
<li><a href="#sec12-5">12.5 &Eacute;valuation de proc&eacute;d&eacute; pour la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (&eacute;valuation de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire)</a></li>
<li><a href="#sec12-6">12.6 Contr&ocirc;le des mati&egrave;res</a></li>
<li><a href="#sec12-7">12.7 Intervention pr&eacute;vue en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#sec12-8">12.8 Programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec12-8-1">12.8.1 Liste des documents &agrave; fournir &agrave; l&rsquo;appui d&rsquo;une demande de permis relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#sec12-8-2">12.8.2 Contenu du programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
</ul></li>
</ul></li>
<li><a href="#sec13">13. Formation relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec13-1">13.1 Introduction</a></li>
<li><a href="#sec13-2">13.2 Port&eacute;e</a></li>
<li><a href="#sec13-3">13.3 Objectifs</a></li>
<li><a href="#sec13-4">13.4 Responsabilit&eacute;s li&eacute;es au programme</a></li>
<li><a href="#sec13-5">13.5 Structure du programme</a></li>
<li><a href="#sec13-6">13.6 Contenu du programme</a>
<ul>
<li><a href="#sec13-6-1">13.6.1 R&eacute;action de fission en cha&icirc;ne et cons&eacute;quences des accidents</a></li>
<li><a href="#sec13-6-2">13.6.2 Comportement des neutrons dans les syst&egrave;mes de fission</a></li>
<li><a href="#sec13-6-3">13.6.3 Historique des accidents de criticit&eacute;</a></li>
<li><a href="#sec13-6-4">13.6.4 R&eacute;ponse aux signaux d&rsquo;alarme de criticit&eacute;</a></li>
<li><a href="#sec13-6-5">13.6.5 Param&egrave;tres de contr&ocirc;le</a></li>
<li><a href="#sec13-6-6">13.6.6 Politique et proc&eacute;dures</a></li>
</ul></li>
<li><a href="#sec13-7">13.7 &Eacute;valuation</a>
<ul>
<li><a href="#sec13-7-1">13.7.1 Programme de formation</a></li>
<li><a href="#sec13-7-2">13.7.2 Personnel</a></li>
<li><a href="#sec13-7-3">13.7.3 Documentation</a></li>
</ul></li>
</ul></li>
<li><a href="#sec14">14. Utilisation d&rsquo;absorbeurs de neutrons fixes dans des installations nucl&eacute;aires hors r&eacute;acteurs</a>
<ul>
<li><a href="#sec14-1">14.1 Introduction</a></li>
<li><a href="#sec14-2">14.2 Port&eacute;e</a></li>
<li><a href="#sec14-3">14.3 Consid&eacute;rations g&eacute;n&eacute;rales li&eacute;es &agrave; la s&ucirc;ret&eacute;</a></li>
<li><a href="#sec14-4">14.4 Exigences et orientation</a>
<ul>
<li><a href="#sec14-4-1">14.4.1 Conception</a></li>
<li><a href="#sec14-4-2">14.4.2 &Eacute;valuation de la s&ucirc;ret&eacute;</a></li>
<li><a href="#sec14-4-3">14.4.3 V&eacute;rification et inspection</a></li>
</ul></li>
</ul></li>
<li><a href="#sec15">15. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire en limitant et en contr&ocirc;lant des mod&eacute;rateurs</a>
<ul>
<li><a href="#sec15-1">15.1 Introduction</a></li>
<li><a href="#sec15-2">15.2 Port&eacute;e</a></li>
<li><a href="#sec15-3">15.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec15-3-1">15.3.1 Pratiques administratives relatives aux limites et aux contr&ocirc;les appliqu&eacute;s aux mod&eacute;rateurs</a></li>
<li><a href="#sec15-3-2">15.3.2 &Eacute;valuation des proc&eacute;d&eacute;s pour limiter et au contr&ocirc;ler les mod&eacute;rateurs</a></li>
</ul></li>
<li><a href="#sec15-4">15.4 Pratiques d&rsquo;ing&eacute;nierie pour les zones de contr&ocirc;le du mod&eacute;rateur</a>
<ul>
<li><a href="#sec15-4-1">15.4.1 Barri&egrave;res de la zone de contr&ocirc;le du mod&eacute;rateur</a></li>
<li><a href="#sec15-4-2">15.4.2 &Eacute;quipement et contenants</a></li>
<li><a href="#sec15-4-3">15.4.3 Ouvertures</a></li>
<li><a href="#sec15-4-4">15.4.4 Pr&eacute;vention et extinction des incendies</a></li>
<li><a href="#sec15-6-5">15.4.5 Instruments et contr&ocirc;les</a></li>
</ul></li>
</ul></li>
<li><a href="#sec16">16. Planification et intervention d&rsquo;urgence en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</a>
<ul>
<li><a href="#sec16-1">16.1 Introduction</a></li>
<li><a href="#sec16-2">16.2 Port&eacute;e</a></li>
<li><a href="#sec16-3">16.3 Responsabilit&eacute;s</a>
<ul>
<li><a href="#sec16-3-1">16.3.1 Responsabilit&eacute;s de la Direction</a></li>
<li><a href="#sec16-3-2">16.3.2 Responsabilit&eacute;s du personnel technique</a>
<ul>
<li><a href="#sec16-3-2-1">16.3.2.1 Planification</a></li>
<li><a href="#sec16-3-2-2">16.3.2.2 Intervention d&rsquo;urgence</a></li>
</ul></li>
</ul></li>
<li><a href="#sec16-4">16.4 Planification des mesures d&rsquo;urgence</a>
<ul>
<li><a href="#sec16-4-1">16.4.1 &Eacute;valuation</a></li>
<li><a href="#sec16-4-2">16.4.2 Plan des mesures d&rsquo;urgence</a></li>
<li><a href="#sec16-4-3">16.4.3 &Eacute;quipement</a></li>
</ul></li>
<li><a href="#sec16-5">16.5 &Eacute;vacuation</a>
<ul>
<li><a href="#sec16-5-1">16.5.1 Personnel dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate</a></li>
<li><a href="#sec16-5-2">16.5.2 Surveillance dans les zones adjacentes</a></li>
<li><a href="#sec16-5-3">16.5.3 Surveillance aux postes de rassemblement</a></li>
<li><a href="#sec16-5-4">16.5.4 &Eacute;vacuation compl&eacute;mentaire du personnel autre que le personnel d&rsquo;intervention</a></li>
<li><a href="#sec16-5-5">16.5.5 Sorties</a></li>
<li><a href="#sec16-5-6">16.5.6 Identification des postes de rassemblement</a></li>
<li><a href="#sec16-5-7">16.5.7 Planification des itin&eacute;raires d&rsquo;&eacute;vacuation</a></li>
</ul></li>
<li><a href="#sec16-6">16.6 R&eacute;int&eacute;gration, sauvetage et stabilisation</a>
<ul>
<li><a href="#sec16-6-1">16.6.1 R&eacute;int&eacute;gration</a></li>
<li><a href="#sec16-6-2">16.6.2 Op&eacute;ration de sauvetage</a></li>
<li><a href="#sec16-6-3">16.6.3 Stabilisation</a></li>
</ul></li>
<li><a href="#sec16-7">16.7 Formation en classe, exercices et exercices d&rsquo;&eacute;vacuation</a>
<ul>
<li><a href="#sec16-7-1">16.7.1 Formation en classe</a></li>
<li><a href="#sec16-7-2">16.7.2 Exercices</a></li>
<li><a href="#sec16-7-3">16.7.3 Exercices d&rsquo;&eacute;vacuation</a></li>
</ul></li>
<li><a href="#appA">Annexe A : Conditions normales et anormales cr&eacute;dibles</a></li>
<li><a href="#appB">Annexe B : M&eacute;thodes de calcul de k<sub>eff</sub></a>
<ul>
<li><a href="#appB-1">B.1 But</a></li>
<li><a href="#appB-2">B.2 Contexte</a></li>
<li><a href="#appB-3">B.3 &Eacute;tablissement de la limite sup&eacute;rieure de sous-criticit&eacute;</a></li>
<li><a href="#appB-4">B.4 Aspects pratiques de la conformit&eacute;; limite sup&eacute;rieure de sous criticit&eacute;</a></li>
<li><a href="#appB-5">B.5 &Eacute;largissement de la zone (ou des zones) d&rsquo;applicabilit&eacute;</a></li>
<li><a href="#appB-6">B.6 Rapport de validation</a></li>
</ul></li>
<li><a href="#appC">Annexe C : Exemple : Validation d&rsquo;une m&eacute;thode de calcul</a>
<ul>
<li><a href="#appC-1">C.1 Probl&egrave;me</a></li>
<li><a href="#appC-2">C.2 M&eacute;thode</a></li>
<li><a href="#appC-3">C.3 Validation</a></li>
</ul></li>
<li><a href="#appD">Annexe D : Emplacement des d&eacute;tecteurs</a>
<ul>
<li><a href="#appD-1">D.1 Introduction</a></li>
<li><a href="#appD-2">D.2 Consid&eacute;rations g&eacute;n&eacute;rales</a>
<ul>
<li><a href="#appD-2-1">D.2.1 Caract&eacute;ristiques de fonctionnement du syst&egrave;me de d&eacute;tection</a></li>
<li><a href="#appD-2-2">D.2.2 Caract&eacute;risation du champ de rayonnement lors d&rsquo;un accident de criticit&eacute;</a></li>
</ul></li>
<li><a href="#appD-3">D.3 M&eacute;thodes</a>
<ul>
<li><a href="#appD-3-1">D.3.1 Essai de source <em>in situ</em></a></li>
<li><a href="#appD-3-2">D.3.2 Calculs &laquo; &agrave; la main &raquo;</a></li>
<li><a href="#appD-3-3">D.3.3 Calculs de transport d&eacute;terministes et calculs de transport Monte Carlo &agrave; une dimension</a></li>
<li><a href="#appD-3-4">D.3.4 Calculs d&eacute;terministes ou calculs de transport Monte Carlo &agrave; deux et trois dimensions</a></li>
</ul></li>
</ul></li>
<li><a href="#appE">Annexe E : Manutention, stockage et transport des unit&eacute;s de combustible &ndash; Consid&eacute;rations de s&ucirc;ret&eacute;-criticit&eacute;</a>
<ul>
<li><a href="#appE-1">E.1 Param&egrave;tres des barres de combustible</a></li>
<li><a href="#appE-2">E.2 Configuration des unit&eacute;s de combustible</a></li>
<li><a href="#appE-3">E.3 Param&egrave;tres du r&eacute;seau</a></li>
<li><a href="#appE-4">E.4 Conditions de mod&eacute;ration</a></li>
<li><a href="#appE-5">E.5 Conditions du r&eacute;flecteur et des interactions</a></li>
</ul></li>
<li><a href="#appF">Annexe F : Mod&eacute;rateurs et mat&eacute;riaux agissant comme mod&eacute;rateurs</a>
<ul>
<li><a href="#appF-1">F.1 Mod&eacute;rateurs de type courant</a></li>
<li><a href="#appF-2">F.2 Sources possibles de mod&eacute;ration</a></li>
<li><a href="#appF-3">F.3 Mesure du contenu du mod&eacute;rateur</a></li>
<li><a href="#appF-4">F.4 Exemples de barri&egrave;res artificielles servant &agrave; contr&ocirc;ler le mod&eacute;rateur</a></li>
</ul></li>
<li><a href="#appG">Annexe G : Exemple de description partielle d&#39;un programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour une installation de stockage de combustible</a>
<ul>
<li><a href="#appG-1">G.1 Mod&egrave;le de contenu de programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#appG-2">G.2 D&eacute;termination des exigences</a>
<ul>
<li><a href="#appG-2-a"Exemple :</a></li>
</ul></li>
<li><a href="#appG-3">G.3 Exemple de proc&eacute;dure d&rsquo;&eacute;valuation de s&eacute;quences d&rsquo;accident de criticit&eacute;</a>
<ul>
<li><a href="#appG-3-1">G.3.1 &Eacute;valuation de l&rsquo;efficacit&eacute; d&rsquo;un CSC</a></li>
<li><a href="#appG-3-2">G.3.2 R&eacute;sum&eacute; de l&rsquo;&eacute;valuation de la cote de risque</a></li>
<li><a href="#appG-3-3">G.3.3 R&eacute;sum&eacute; des accidents et attribution de l&rsquo;indice de probabilit&eacute; pour le tableau G-1</a></li>
<li><a href="#appG-3-3-a">Identificateur d&rsquo;accident</a></li>
<li><a href="#appG-3-3-b">&Eacute;v&eacute;nement d&eacute;clencheur (a1) et &eacute;v&eacute;nement catalyseur (a2) (le cas &eacute;ch&eacute;ant)</a></li>
<li><a href="#appG-3-3-c">D&eacute;faillance/succ&egrave;s du param&egrave;tre de s&ucirc;ret&eacute; pr&eacute;ventive 1 ou du CSC 1 (b)</a></li>
<li><a href="#appG-3-3-d">D&eacute;faillance/succ&egrave;s du param&egrave;tre de s&ucirc;ret&eacute; pr&eacute;ventive 2 ou du CSC 2 (c)</a></li>
<li><a href="#appG-3-3-e">D&eacute;faillance/succ&egrave;s des param&egrave;tres de s&ucirc;ret&eacute; pr&eacute;ventive ou des CSC (d1, d2...)</a></li>
<li><a href="#appG-3-3-f">Indice de probabilit&eacute; / cote de risque* T non contr&ocirc;l&eacute; / contr&ocirc;l&eacute; (e)</a></li>
<li><a href="#appG-3-3-g">R&eacute;f&eacute;rences relatives &agrave; l&rsquo;&eacute;valuation des cons&eacute;quences</a></li>
<li><a href="#appG-3-3-h">Commentaires et recommandations</a></li>
<li><a href="#appG-3-4">G.3.4 D&eacute;termination des indices de fr&eacute;quence de d&eacute;faillance dans le tableau G-2</a></li>
<li><a href="#appG-3-5">G.3.5 D&eacute;termination des indices de probabilit&eacute; de d&eacute;faillance dans le tableau G-3</a></li>
<li><a href="#appG-3-6">G.3.6 D&eacute;termination des mesures de gestion pour les CSC</a></li>
<li><a href="#appG-3-7">G.3.7 Examen des CSC en tenant compte du risque</a></li>
</ul></li>
</ul></li>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation &eacute;tablit les exigences de s&ucirc;ret&eacute; criticit&eacute; nucl&eacute;aire et explique comment respecter ces exigences. Il d&eacute;crit de l&rsquo;information permettant d&rsquo;&eacute;viter que surviennent des accidents de criticit&eacute; lors de la manutention, du stockage, du traitement et du transport des mati&egrave;res fissiles et la gestion &agrave; long terme des d&eacute;chets nucl&eacute;aires.</p>
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
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Ce document clarifie les contraintes physiques minimales et les limites relatives aux mati&egrave;res fissiles afin d&rsquo;assurer la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire durant la construction, l&rsquo;exploitation, le d&eacute;classement ou l&rsquo;abandon de l&rsquo;installation autoris&eacute;e et pour ce qui est de la manutention, du stockage, du traitement et du transport de certaines mati&egrave;res fissiles.</p>  <p>Aussi, le pr&eacute;sent document explique comment respecter les exigences de s&ucirc;ret&eacute; criticit&eacute; nucl&eacute;aire.</p>  <p>L&rsquo;information pr&eacute;sent&eacute;e dans ce document s&rsquo;applique aux installations disposant de mati&egrave;re fissile &agrave; l&rsquo;ext&eacute;rieur de r&eacute;acteurs nucl&eacute;aires, sauf pour l&rsquo;assemblage de telle mati&egrave;re dans des conditions contr&ocirc;l&eacute;es (comme dans les exp&eacute;riences sur la criticit&eacute;).</p>
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
<h3 id="sec1-3">1.3 L&eacute;gislation pertinente</h3>  <p>Les dispositions l&eacute;gislatives de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (LSRN) et des r&egrave;glements pris en vertu de celle-ci qui sont applicables au pr&eacute;sent document sont les suivants :</p>
<ul>
<li>le paragraphe 24(4) de la LSRN stipule que &laquo; La Commission ne d&eacute;livre, ne renouvelle, ne modifie ou ne remplace une licence ou un permis que si elle est d&rsquo;avis que l&rsquo;auteur de la demande, &agrave; la fois : a) est comp&eacute;tent pour exercer les activit&eacute;s vis&eacute;es par la licence ou le permis; b) prendra, dans le cadre de ces acticit&eacute;s, les mesures voulues pour pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes, pour prot&eacute;ger l&rsquo;environnement, pour maintenir la s&eacute;curit&eacute; nationale et pour respecter les obligations internationales que le Canada a assum&eacute;es &raquo;</li>
<li>le paragraphe 24(5) de la LSRN stipule que &laquo; Les licences et les permis peuvent &ecirc;tre assortis des conditions que la Commission estime n&eacute;cessaires &agrave; l&rsquo;application de la pr&eacute;sente loi &raquo;</li>
<li>l&rsquo;alin&eacute;a 3(1) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> stipule que &laquo; La demande de permis comprend les renseignements suivants :<br />
i) une description et les r&eacute;sultats des &eacute;preuves, analyses ou calculs effectu&eacute;s pour corroborer les renseignements compris dans la demande<br />
j) le nom, la quantit&eacute;, la forme, l&rsquo;origine et le volume des d&eacute;chets radioactifs ou des d&eacute;chets dangereux que l&rsquo;activit&eacute; vis&eacute;e par la demande peut produire, y compris les d&eacute;chets qui peuvent &ecirc;tre stock&eacute;s provisoirement ou en permanence, g&eacute;r&eacute;s, trait&eacute;s, &eacute;vacu&eacute;s ou &eacute;limin&eacute;s sur les lieux de l&rsquo;activit&eacute;, et la m&eacute;thode propos&eacute;e pour les g&eacute;rer et les stocker en permanence, les &eacute;vacuer ou les &eacute;liminer &raquo;</li>
<li>l&rsquo;alin&eacute;a 12(1)f) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> stipule que &laquo; Le titulaire de permis : f) prend toutes les pr&eacute;cautions raisonnables pour contr&ocirc;ler le rejet de substances nucl&eacute;aires radioactives ou de substances dangereuses que l&rsquo;activit&eacute; autoris&eacute;e peut entra&icirc;ner l&agrave; o&ugrave; elle est exerc&eacute;e et dans l&rsquo;environnement &raquo;</li>
<li>le paragraphe 13(1) du <em>R&egrave;glement sur la radioprotection</em> stipule que &laquo; Le titulaire de permis veille &agrave; ce que la dose efficace qui est re&ccedil;ue par une personne vis&eacute;e &agrave; la colonne 1 du tableau du pr&eacute;sent paragraphe, et engag&eacute;e &agrave; son &eacute;gard au cours de la p&eacute;riode pr&eacute;vue &agrave; la colonne 2 ne d&eacute;passe pas la dose efficace figurant &agrave; la colonne 3 &raquo;</li>
<li>l&rsquo;alin&eacute;a 5)i) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em> stipule que &laquo; La demande de permis pour construire une installation nucl&eacute;aire de cat&eacute;gorie I comprend les renseignements suivants... : i) les effets sur l&rsquo;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes que peuvent avoir la construction, l&rsquo;exploitation et le d&eacute;classement de l&rsquo;installation nucl&eacute;aire... &raquo;</li>
<li>l&rsquo;alin&eacute;a 6)h) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em> stipule que &laquo; La demande de permis pour exploiter une installation nucl&eacute;aire de cat&eacute;gorie I comprend les renseignements suivants... : h) les effets sur l&rsquo;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes que peuvent avoir l&rsquo;exploitation et le d&eacute;classement de l&rsquo;installation nucl&eacute;aire... &raquo;</li>
<li>l&rsquo;alin&eacute;a 7)f) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em> stipule que &laquo; La demande de permis pour d&eacute;classer une installation nucl&eacute;aire de cat&eacute;gorie I comprend les renseignements suivants... : f) les effets que les travaux de d&eacute;classement peuvent avoir sur l&rsquo;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes &raquo;</li>
<li>les alin&eacute;as 14(3)c) et d) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em> stipulent que &laquo; Le titulaire de permis qui d&eacute;classe une installation nucl&eacute;aire de cat&eacute;gorie I tient un document sur :<br />
c) la fa&ccedil;on dont les d&eacute;chets nucl&eacute;aires ou dangereux sont g&eacute;r&eacute;s, stock&eacute;s de fa&ccedil;on provisoire ou permanente, &eacute;vacu&eacute;s, &eacute;limin&eacute;s ou transf&eacute;r&eacute;s ;<br />
d) le nom et la quantit&eacute; des substances nucl&eacute;aires radioactives, des substances dangereuses et des rayonnements qui subsistent &agrave; l&rsquo;installation nucl&eacute;aire apr&egrave;s les travaux de d&eacute;classement &raquo;</li>
<li>le paragraphe 2(1) du <em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em> stipule que &laquo; Le pr&eacute;sent r&egrave;glement s&rsquo;applique &agrave; l&rsquo;emballage et au transport :<br />
a) de l&rsquo;&eacute;quipement r&eacute;glement&eacute;;<br />
b) des substances nucl&eacute;aires, notamment :
<ol className="list-bullet-none">
<li>(i) &agrave; la conception, &agrave; la production, &agrave; l&rsquo;utilisation, &agrave; l&rsquo;inspection, &agrave; l&rsquo;entretien et &agrave; la r&eacute;paration de leurs emballages et de leurs colis,</li>
<li>(ii) &agrave; la pr&eacute;paration, &agrave; l&rsquo;envoi, &agrave; la manutention, au chargement, &agrave; l&rsquo;acheminement et au stockage en cours de transport des colis ainsi qu&rsquo;&agrave; leur r&eacute;ception au point de destination finale, &agrave; leur d&eacute;chargement et &agrave; leur d&eacute;paquetage. &raquo;</li>
</ol></li>
</ul>  <p>La <em>Loi sur les d&eacute;chets de combustible nucl&eacute;aire</em> et la <em>Loi sur la responsabilit&eacute; et l&rsquo;indemnisation en mati&egrave;re nucl&eacute;aire</em> peuvent aussi s&rsquo;appliquer aux activit&eacute;s comprenant sur des mati&egrave;res fissiles.</p>
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
<h3 id="sec1-4">1.4 Normes nationales et internationales</h3>  <p>Les principes et les &eacute;l&eacute;ments cl&eacute;s utilis&eacute;s dans l&rsquo;&eacute;laboration du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation sont conformes aux normes nationales et internationales.</p>  <p>Certaines sections du pr&eacute;sent document sont tir&eacute;es des normes &eacute;num&eacute;r&eacute;es ci-dessous de l&rsquo;American National Standards Institute (ANSI), avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society (ANS). Au besoin, le texte a &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations auxquelles souscrit le Canada envers l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA) et en conformit&eacute; aux exigences r&eacute;glementaires de la CCSN. Ces sections sont ind&eacute;pendantes (ce ne sont pas toutes les sections qui s&rsquo;appliquent &agrave; une installation) et sont pr&eacute;sent&eacute;es dans l&rsquo;ordre suivant l&rsquo;identification num&eacute;rique de l&rsquo;ANSI/ANS :</p>
<ol>
<li>ANSI/ANS-8.1-2014, <span lang="en"><em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em></span></li>
<li>ANSI/ANS-8.3-1997 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Criticality Accident Alarm System</em></span></li>
<li>ANSI/ANS-8.5-1996 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</em></span></li>
<li>ANSI/ANS-8.6-1983 (r&eacute;&eacute;dit&eacute;e en 2010), <span lang="en"><em>Safety in Conducting Subcritical Neutron-Multiplication Measurements In Situ</em></span></li>
<li>ANSI/ANS-8.7-1998 (r&eacute;&eacute;dit&eacute;e en 2007), <span lang="en"><em>Nuclear Criticality Safety in the Storage of Fissile Materials</em></span></li>
<li>ANSI/ANS-8.10-2015, <span lang="en"><em>Criteria for Nuclear Criticality Safety Controls in Operations With Shielding and Confinement</em></span></li>
<li>ANSI/ANS-8.12-1987 (r&eacute;&eacute;dit&eacute;e en 2016), <span lang="en"><em>Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</em></span></li>
<li>ANSI/ANS-8.14-2004 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</em></span></li>
<li>ANSI/ANS-8.15-2014, <em>Nuclear Criticality Safety Control of Selected Actinide Nuclides</em></li>
<li>ANSI/ANS-8.17-2004 (r&eacute;&eacute;dit&eacute;e en 2014), <span lang="en"><em>Criticality Safety Criteria for the Handling, Storage, and Transportation of LWR Fuel Outside Reactors</em></span></li>
<li>ANSI/ANS-8.19-2014, <span lang="en"><em>Administrative Practices for Nuclear Criticality Safety</em></span></li>
<li>ANSI/ANS-8.20-1991 (r&eacute;&eacute;dit&eacute;e en 2015), <span lang="en"><em>Nuclear Criticality Safety Training</em></span></li>
<li>ANSI/ANS-8.21-1995 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</em></span></li>
<li>ANSI/ANS-8.22-1997 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Nuclear Criticality Safety Based on Limiting and Controlling Moderators</em></span></li>
<li>ANSI/ANS-8.23-2007 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Nuclear Criticality Accident Emergency Planning and Response</em></span></li>
<li>ANSI/ANS-8.24-2007 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Validation of Neutron Transport Methods for Nuclear Criticality Safety Calculations</em></span></li>
</ol>  <p>Le pr&eacute;sent document est conforme aux normes suivantes :</p>
<ol>
<li>Norme de s&ucirc;ret&eacute; de l&rsquo;AIEA, <span lang="en"><em>Safety of Conversion Facilities and Uranium Enrichment Facilities</em></span>, IAEA SSG-5, 2010</li>
<li>Norme de s&ucirc;ret&eacute; de l&rsquo;AIEA, <span lang="en"><em>Safety of Nuclear Fuel Cycle Facilities Safety Requirements</em></span>, IAEA NS-5 (R&eacute;v. 1), 2014 [1]</li>
<li>Norme de s&ucirc;ret&eacute; de l&rsquo;AIEA, <span lang="en"><em>Safety of Uranium Fuel Fabrication Facilities</em></span>, IAEA SSG-6, 2010 [2]</li>
<li>Norme de s&ucirc;ret&eacute; de l&rsquo;AIEA N<sup>o</sup>. GS-R-2, <em>Pr&eacute;paration et intervention en cas de situation d&rsquo;urgence nucl&eacute;aire ou radiologique, Exigences relatives &agrave; la s&ucirc;ret&eacute;</em>, 2002 [3]</li>
<li>Sant&eacute; Canada, <em>Lignes directrices canadiennes sur les interventions en situation d&rsquo;urgence nucl&eacute;aire</em>, H46-2/03-326E, 2003 [4]</li>
<li>Groupe CSA, Norme N292.2-13, <em>Entreposage &agrave; sec provisoire du combustible irradi&eacute;</em> [5]</li>
<li>Groupe CSA, Collection N292.1-F16, <em>Stockage en piscine du combustible irradi&eacute; et autres mati&egrave;res radioactives</em> [6]</li>
<li>Norme ISO 1709, <span lang="en"><em>Nuclear energy &ndash; Fissile materials &ndash; Principles of criticality safety in storing, handling, and processing</em></span>, 1995 (r&eacute;&eacute;dit&eacute;e en 2011) [7]</li>
<li>Norme ISO 7753, <span lang="en"><em>Nuclear energy &ndash; Performance and testing requirements for criticality detection and alarm systems</em></span>, 1987 (r&eacute;&eacute;dit&eacute;e en 2011) [8]</li>
<li>Norme ISO 11320, <span lang="en"><em>Nuclear criticality safety &ndash; Emergency preparedness and response</em></span>, 2011</li>
<li>Norme ISO 14943, <span lang="en"><em>Nuclear fuel technology &ndash; Administrative criteria related to nuclear criticality safety</em></span>, 2004 (r&eacute;&eacute;dit&eacute;e en 2013) [9]</li>
<li><span lang="en">CEI Norme 60860, <em>Instrumentation pour la radioprotection &ndash; &Eacute;quipement de signalisation des accidents de criticit&eacute;</em></span>, 2014 [10]</li>
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
<h2 id="sec2">2. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.1-2014, <span lang="en"><em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada &agrave; l&rsquo;&eacute;gard de l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec2-1">2.1 Introduction</h3>  <p>Les activit&eacute;s qui mettent en jeu certaines mati&egrave;res fissiles pr&eacute;sentent un risque d&rsquo;accident de criticit&eacute; donnant lieu &agrave; un rejet de radioactivit&eacute; pouvant &ecirc;tre mortel pour les personnes se trouvant &agrave; proximit&eacute;. Cependant, l&rsquo;exp&eacute;rience montre que des activit&eacute;s prolong&eacute;es peuvent &ecirc;tre r&eacute;alis&eacute;es de mani&egrave;re s&ucirc;re et rentable lorsque les pr&eacute;cautions ad&eacute;quates sont prises. Les rares accidents de criticit&eacute; qui se sont produits montrent que la fr&eacute;quence et la gravit&eacute; de tels &eacute;v&eacute;nements sont de beaucoup inf&eacute;rieures &agrave; celles des accidents non nucl&eacute;aires.</p>  <p>Cette bonne performance peut &ecirc;tre maintenue simplement par l&rsquo;application de bonnes pratiques d&rsquo;exploitation, comme celles pr&eacute;sent&eacute;es dans le pr&eacute;sent guide; cependant, le pr&eacute;sent guide, en soi, ne peut pas &eacute;tablir de proc&eacute;d&eacute;s s&ucirc;rs de mani&egrave;re absolue.</p>  <p>Les bonnes pratiques en mati&egrave;re de s&ucirc;ret&eacute; devraient tenir compte des aspects &eacute;conomiques, mais la protection du personnel d&rsquo;exploitation et du public doit &ecirc;tre la consid&eacute;ration la plus importante.</p>
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
<h3 id="sec2-2">2.2 Port&eacute;e</h3>  <p>Les crit&egrave;res fondamentaux y sont pr&eacute;sent&eacute;s et les limites sont sp&eacute;cifi&eacute;es pour certaines unit&eacute;s fissiles uniques de forme simple contenant du <sup>233</sup>U, <sup>235</sup>U, ou du <sup>239</sup>Pu, mais pas pour les agencements ou r&eacute;seaux &agrave; plusieurs unit&eacute;s.</p>  <p>Les crit&egrave;res y sont formul&eacute;s pour l&rsquo;&eacute;tablissement de la validit&eacute; et des domaines d&rsquo;applicabilit&eacute; de n&rsquo;importe quelle m&eacute;thode de calcul utilis&eacute;e pour &eacute;valuer la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire.</p>  <p>La pr&eacute;sente section ne comprend pas les d&eacute;tails des contr&ocirc;les administratifs, la conception des proc&eacute;d&eacute;s ou de l&rsquo;&eacute;quipement, la description des instruments pour le contr&ocirc;le de proc&eacute;d&eacute;, ni les crit&egrave;res d&eacute;taill&eacute;s &agrave; respecter dans le transport des mati&egrave;res fissiles.</p>
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
<h3 id="sec2-3">2.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h3>  <p>Les activit&eacute;s comportant des mati&egrave;res fissiles doivent respecter les exigences et les recommandations du pr&eacute;sent document.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.1"></div>
<h4 id="sec2-3-1">2.3.1	Cat&eacute;gorisation des activit&eacute;s comportant des mati&egrave;res fissiles</h4>  <h5 id="sec2-3-1-1">2.3.1.1	Quantit&eacute;s d&rsquo;exemption de mati&egrave;res fissiles</h5>  <p>Une quantit&eacute; d&rsquo;exemption de mati&egrave;res fissiles dans une installation autoris&eacute;e est d&eacute;finie comme un inventaire de mati&egrave;res fissiles, comme suit :</p>
<ol>
<li>moins de 100 g de <sup>233</sup>U ou de <sup>235</sup>U ou de <sup>239</sup>Pu, ou n&rsquo;importe quelle combinaison de ces trois isotopes sous forme de mati&egrave;res fissiles, combin&eacute;s dans n&rsquo;importe quelle proportion</li>
<li>une quantit&eacute; illimit&eacute;e d&rsquo;uranium naturel ou appauvri ou de thorium naturel, si aucune autre mati&egrave;re fissile ou quantit&eacute; importante de graphite, d&rsquo;eau lourde, de b&eacute;ryllium ou d&rsquo;un autre mod&eacute;rateur plus efficace que l&rsquo;eau l&eacute;g&egrave;re n&rsquo;est permise dans l&rsquo;installation autoris&eacute;e</li>
<li>moins de 200 kg au total d&rsquo;uranium naturel ou appauvri ou de thorium naturel, si certaines autres mati&egrave;res fissiles sont pr&eacute;sentes dans l&rsquo;installation autoris&eacute;e, mais la quantit&eacute; totale de nucl&eacute;ides fissiles contenue dans ces mati&egrave;res fissiles est inf&eacute;rieure &agrave; 100 g</li>
</ol>  <p>Les installations autoris&eacute;es qui utilisent des quantit&eacute;s d&rsquo;exemption de mati&egrave;res fissiles sont exempt&eacute;es des exigences et des recommandations du pr&eacute;sent document.</p>
<h5 id="sec2-3-1-2">2.3.1.2	Petite quantit&eacute; de mati&egrave;res fissiles</h5>  <p>Une petite quantit&eacute; de mati&egrave;res fissiles dans une installation autoris&eacute;e est d&eacute;finie comme un inventaire de mati&egrave;res fissiles, qui :</p>
<ol>
<li>d&eacute;passe les limites d&rsquo;exemption pr&eacute;cis&eacute;es &agrave; la section 2.3.1.1; mais</li>
<li>ne d&eacute;passe pas les limites suivantes :
<ul>
<li>500 g de <sup>233</sup>U, ou 700 g de <sup>235</sup>U, ou 450 g de <sup>239</sup>Pu, ou 450 g de n&rsquo;importe quelle combinaison de ces trois isotopes. Ces limites s&rsquo;appliquent aux installations d&eacute;tenant du plutonium, de l&rsquo;<sup>233</sup>U, ou de l&rsquo;uranium enrichi en <sup>233</sup>U ou de l&rsquo;<sup>235</sup>U. Ces limites ne s&rsquo;appliquent pas si des quantit&eacute;s importantes de graphite, d&rsquo;eau lourde, de b&eacute;ryllium ou d&rsquo;un autre mod&eacute;rateur plus efficace que l&rsquo;eau l&eacute;g&egrave;re n&rsquo;est pr&eacute;sent ou</li>
<li>80 % de la masse critique appropri&eacute;e la plus faible</li>
</ul></li>   </ol>  <p>Le pr&eacute;sent document est partiellement applicable, tel que pr&eacute;cis&eacute; &agrave; la section 2.3.1.4, aux installations qui utilisent de petites quantit&eacute;s de mati&egrave;res fissiles.</p>
<h5 id="sec2-3-1-3">2.3.1.3	Quantit&eacute; importante de mati&egrave;res fissiles</h5>  <p>Une quantit&eacute; importante de mati&egrave;res fissiles dans une installation autoris&eacute;e est d&eacute;finie comme un inventaire de mati&egrave;res fissiles qui d&eacute;passe les limites pr&eacute;cis&eacute;es &agrave; la section 2.3.1.2.</p>  <p>Le pr&eacute;sent document d&rsquo;orientation s&rsquo;applique aux installations autoris&eacute;es utilisant des quantit&eacute;s importantes de mati&egrave;res fissiles.</p>  <p>Il est &agrave; noter qu&rsquo;une installation autoris&eacute;e d&eacute;tenant une grande quantit&eacute; de mati&egrave;res fissiles peut &ecirc;tre assujettie &agrave; la <em>Loi sur la responsabilit&eacute; et l&rsquo;indemnisation en mati&egrave;re nucl&eacute;aire</em>.</p>
<h5 id="sec2-3-1-4">2.3.1.4	Lien entre le programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et la cat&eacute;gorisation</h5>  <p>Un programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doit &ecirc;tre &eacute;labor&eacute; et tenu &agrave; jour dans l&rsquo;installation autoris&eacute;e afin de satisfaire aux exigences de la CCSN en mati&egrave;re de criticit&eacute; nucl&eacute;aire et d&rsquo;appuyer son exploitation s&eacute;curitaire. L&rsquo;&eacute;tendue du programme d&eacute;pend de la cat&eacute;gorie des activit&eacute;s comportant des mati&egrave;res fissiles :</p>
<ol>
<li>Les installations autoris&eacute;es effectuant des activit&eacute;s comportant de petites quantit&eacute;s de mati&egrave;res fissiles, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.3.1.2, doivent &eacute;laborer et tenir &agrave; jour un programme &agrave; port&eacute;e r&eacute;duite bas&eacute; sur les sections applicables du pr&eacute;sent guide, en tenant compte du fait que les exigences des sections 2.3.2.2, 2.3.2.9, 3.0, 11.0, 12.5, et 12.7 ne sont pas applicables. Le programme doit permettre de s&rsquo;assurer que le processus entier demeure sous-critique, de telle mani&egrave;re qu&rsquo;un &eacute;v&eacute;nement de criticit&eacute; accidentel ne puisse survenir.</li>
<li>Les installations autoris&eacute;es effectuant des activit&eacute;s comportant de grandes quantit&eacute;s de mati&egrave;res fissiles, telles que d&eacute;finies &agrave; la section 2.3.1.3, doivent &eacute;laborer et tenir &agrave; jour un programme int&eacute;gral bas&eacute; sur les sections applicables du pr&eacute;sent document et sur les exigences de la CCSN. Les caract&eacute;ristiques du programme int&eacute;gral sont d&eacute;crites &agrave; la section 12.8.</li>
</ol>  <p>L&rsquo;applicabilit&eacute; du programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire &agrave; diverses zones du site r&eacute;glement&eacute; devrait &ecirc;tre fond&eacute;e sur la cat&eacute;gorisation pr&eacute;vue &agrave; la section 2.3.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.2"></div>
<h4 id="sec2-3-2">2.3.2	Pratiques en mati&egrave;re de gestion de programme</h4>  <h5 id="sec2-3-2-1">2.3.2.1	Responsabilit&eacute;s</h5>  <p>La direction doit &eacute;tablir clairement les responsabilit&eacute;s en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire. Les superviseurs devraient &ecirc;tre autant responsables de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire qu&rsquo;ils le sont de la production, du d&eacute;veloppement, de la recherche ou d&rsquo;autres fonctions. Chaque employ&eacute;, peu importe son poste, doit &ecirc;tre conscient du fait que la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans son domaine de travail est ultimement sa responsabilit&eacute;. Cela peut se traduire par de la formation et du perfectionnement p&eacute;riodique de tout le personnel d&rsquo;exploitation et de soutient. La s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire ne diff&egrave;re pas en soi de la s&eacute;curit&eacute; au travail, et les bonnes pratiques de gestion s&rsquo;appliquent dans les deux cas.</p>  <p>La direction doit embaucher du personnel ayant des habilet&eacute;s dans l&rsquo;interpr&eacute;tation des donn&eacute;es pertinentes pour la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et qui est familier avec les op&eacute;rations, afin de conseiller les superviseurs. Ces sp&eacute;cialistes devraient &ecirc;tre, dans la mesure du possible, ind&eacute;pendants des superviseurs de proc&eacute;d&eacute; sur le plan administratif.</p>  <p>La direction doit &eacute;tablir les crit&egrave;res qui doivent &ecirc;tre respect&eacute;s en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire. On doit faire une distinction entre les installations blind&eacute;es et non blind&eacute;es et les crit&egrave;res peuvent &ecirc;tre moins rigoureux s&rsquo;il y a en place des dispositifs de blindage ou de confinement assurant la protection du personnel.</p>
<h5 id="sec2-3-2-2">2.3.2.2	Analyse de proc&eacute;d&eacute;</h5>  <p>Avant de d&eacute;buter une nouvelle activit&eacute; comportant des mati&egrave;res fissiles, ou avant de modifier une activit&eacute; existante, on doit d&eacute;terminer que le processus entier sera sous-critique &agrave; la fois dans des conditions normales et des conditions anormales cr&eacute;dibles dont la fr&eacute;quence est &eacute;gale ou sup&eacute;rieure &agrave; 10<sup>-6</sup> par an [5, 6]. Des exemples de ces conditions sont donn&eacute;s &agrave; l&rsquo;annexe A.</p>
<ol>
<li>Une limite sup&eacute;rieure de sous-criticit&eacute; (LSSC) ad&eacute;quate doit &ecirc;tre &eacute;tablie et justifi&eacute;e de fa&ccedil;on &agrave; ce que :
<ul>
<li>&bull;	si les m&eacute;thodes de calcul sont appliqu&eacute;es &agrave; la pr&eacute;vision des facteurs de multiplication des neutrons pour l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; :
<ol className="list-lower-roman">
<li>la LSSC est calcul&eacute;e &agrave; l&rsquo;aide des formules pr&eacute;sent&eacute;es &agrave; l&rsquo;annexe B; ou</li>
<li>une marge administrative de sous-criticit&eacute;, telle que pr&eacute;sent&eacute;e dans les formules de calcul de la LSSC, correspond &agrave; 5 % du facteur de multiplication des neutrons [5, 6]</li>
</ol></li>
<li>si les m&eacute;thodes de calcul ne sont pas appliqu&eacute;es pour pr&eacute;voir les facteurs de multiplication des neutrons pour l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; :
<ol className="list-lower-roman">
<li>la LSSC est 500 g de <sup>233</sup>U ou 700 g de <sup>235</sup>U ou 450 g de <sup>239</sup>Pu ou 450 g de n&rsquo;importe quelle combinaison de ces trois isotopes; ces limites doivent &ecirc;tre appliqu&eacute;es seulement lorsqu&rsquo;on peut d&eacute;montrer que les mati&egrave;res environnantes, y compris les autres mati&egrave;res fissiles, ne font pas augmenter le facteur de multiplication effectif (k<sub>eff</sub>) plus que si l&rsquo;unit&eacute; &eacute;tait contenue par une couche ininterrompue d&rsquo;eau d&rsquo;une &eacute;paisseur illimit&eacute;; ou</li>
<li>autrement, la marge administrative de sous criticit&eacute; qui est &eacute;quivalente &agrave; 20 % de la masse critique [5, 6].</li>
</ol></li>
</ul></li>
<li>La LSSC ad&eacute;quate &eacute;tablie doit &ecirc;tre maintenue dans toutes les conditions normales et anormales cr&eacute;dibles, et :
<ul>
<li>toutes les conditions anormales cr&eacute;dibles dont la fr&eacute;quence est &eacute;gale ou sup&eacute;rieure &agrave; 10<sup>-6</sup>/an soient identifi&eacute;es et &eacute;valu&eacute;es</li>
<li>la fr&eacute;quence des conditions anormales cr&eacute;dibles identifi&eacute;es soit clairement d&eacute;montr&eacute;e &agrave; l&rsquo;aide de m&eacute;thodes quantitatives ou semi-quantitatives (voir annexe G)</li>
</ul></li>
<li>On doit d&eacute;montrer que des mesures d&rsquo;att&eacute;nuation ad&eacute;quates sont en place, de sorte que les cons&eacute;quences d&rsquo;un accident de criticit&eacute; nucl&eacute;aire repr&eacute;sentatif hors site, telles que calcul&eacute;es au d&eacute;but de l&rsquo;accident, ne contreviennent pas aux crit&egrave;res &eacute;tablis comme facteurs de d&eacute;clenchement n&eacute;cessitant une &eacute;vacuation temporaire du public conform&eacute;ment aux normes internationales et nationales suivantes [5, 6] :
<ul>
<li>Norme de s&ucirc;ret&eacute; n<sup>o</sup> GS-R-2 de l&rsquo;AIEA, intitul&eacute;e : <em>Pr&eacute;paration et intervention en cas d&rsquo;urgence nucl&eacute;aire ou radiologique</em>, annexe III, sous section III 2 [3]</li>
<li>Sant&eacute; Canada, <span lang="en"><em>Canadian Guidelines for Intervention during a Nuclear Emergency</em>, H46-2/03-326E [4]</li>
</ul></li>
<li>Au point 3 (Liste des exigences visant &agrave; d&eacute;montrer l&rsquo;att&eacute;nuation des cons&eacute;quences hors du site suite &agrave; un accident de criticit&eacute; nucl&eacute;aire repr&eacute;sentatif), le titulaire de permis peut exclure n&rsquo;importe lequel des ensembles de conditions anormales ind&eacute;pendants suivants :
<ul>
<li>un &eacute;v&eacute;nement externe qui m&egrave;ne &agrave; un accident de criticit&eacute; dont la fr&eacute;quence est inf&eacute;rieure &agrave; 10<sup>-7</sup>/an; ou</li>
<li>Des &eacute;carts de proc&eacute;d&eacute; pour lesquels il y a un argument concluant, dans le respect des lois physiques, &agrave; l&rsquo;effet qu&rsquo;ils ne peuvent pas se produire, ou qu&rsquo;ils sont extr&ecirc;mement improbables; la validit&eacute; de l&rsquo;argument ne doit pas d&eacute;pendre des caract&eacute;ristiques de conception ni des mati&egrave;res contr&ocirc;l&eacute;es par le syst&egrave;me de contr&ocirc;les des risques de criticit&eacute; de l&rsquo;installation ni des mesures de gestion.</li>
</ul></li>
</ol>  <p>Compte tenu de l&rsquo;impact des &eacute;v&eacute;nements externes sur l&rsquo;installation, la fr&eacute;quence de l&rsquo;impact doit &ecirc;tre calcul&eacute;e en &eacute;valuant les zones vuln&eacute;rables aux impacts; c.-&agrave;-d. les zones o&ugrave; des mati&egrave;res fissiles sont trait&eacute;es ou entrepos&eacute;es. Pour &eacute;valuer les cons&eacute;quences de l&rsquo;impact ou la capacit&eacute; de la conception &agrave; r&eacute;sister &agrave; l&rsquo;impact, seuls des sc&eacute;narios d&rsquo;impact r&eacute;alistes doivent &ecirc;tre envisag&eacute;s, ce qui pourrait n&eacute;cessiter des connaissances sur divers facteurs, comme l&rsquo;angle d&rsquo;impact en cas d&rsquo;&eacute;crasement d&rsquo;avion, etc. [2]. S&rsquo;il n&rsquo;y a pas de registre historique ou d&rsquo;autres fondements scientifiques permettant d&rsquo;estimer l&rsquo;impact d&rsquo;un ph&eacute;nom&egrave;ne naturel pour la fr&eacute;quence la moins &eacute;lev&eacute;e (10<sup>-7</sup>/an), l&rsquo;impact de l&rsquo;&eacute;v&eacute;nement qui est le plus grave (parfois appel&eacute; ph&eacute;nom&egrave;ne naturel maximal probable) peut &ecirc;tre trait&eacute; comme &eacute;tant l&rsquo;&eacute;v&eacute;nement limitatif.</p>
<h5 id="sec2-3-2-3">2.3.2.3	Proc&eacute;dures &eacute;crites</h5>  <p>Les activit&eacute;s pour lesquelles la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire est pertinente doivent &ecirc;tre r&eacute;gies par des proc&eacute;dures &eacute;crites.</p>  <p>Toutes les personnes qui participent &agrave; ces activit&eacute;s doivent comprendre et &ecirc;tre famili&egrave;res avec les proc&eacute;dures.</p>  <p>Les proc&eacute;dures doivent sp&eacute;cifier tous les param&egrave;tres qu&rsquo;elles ont pour but de contr&ocirc;ler. Elles doivent &ecirc;tre telles qu&rsquo;aucune d&eacute;rogation unique faite par inadvertance par rapport &agrave; une proc&eacute;dure ne puisse causer d&rsquo;accident de criticit&eacute;.</p>
<h5 id="sec2-3-2-4">2.3.2.4	Contr&ocirc;le des mati&egrave;res</h5>  <p>Le d&eacute;placement des mati&egrave;res fissiles doit &ecirc;tre contr&ocirc;l&eacute;. On aura recours &agrave; un &eacute;tiquetage appropri&eacute; des mati&egrave;res, &agrave; des panneaux et &agrave; la pose d&rsquo;affiches dans la zone pour pr&eacute;ciser de quelle mati&egrave;re il s&rsquo;agit et toutes les limites des param&egrave;tres assujettis au contr&ocirc;le.</p>
<h5 id="sec2-3-2-5">2.3.2.5	Contr&ocirc;le de l&rsquo;&eacute;quipement</h5>  <p>Avant d&rsquo;utiliser un processus ou une cha&icirc;ne de traitement nouveau ou modifi&eacute;, on doit s&rsquo;assurer que tout l&rsquo;&eacute;quipement est conforme en ce qui a trait aux dimensions et aux mat&eacute;riaux, et aux hypoth&egrave;ses pos&eacute;es pour assurer la sous-criticit&eacute; [7].</p>
<h5 id="sec2-3-2-6">2.3.2.6	Programme de gestion de la qualit&eacute;</h5>  <p>Un programme de gestion de la qualit&eacute; (GQ) qui respecte les exigences applicables des normes ANSI/ASME NQA-1-2015, <span lang="en"><em>Quality Assurance Requirements for Nuclear Facility Applications</em></span> [11], et N286-12 de la CSA, <em>Exigences relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em> [12], ou l&rsquo;&eacute;quivalent, doit &ecirc;tre &eacute;labor&eacute; pour mettre en &oelig;uvre les activit&eacute;s sp&eacute;cifi&eacute;es dans le pr&eacute;sent document.</p>  <p>Des registres doivent &ecirc;tre tenus dans le cadre du programme de GQ pour d&eacute;montrer que l&rsquo;installation autoris&eacute;e et l&rsquo;&eacute;quipement qu&rsquo;elle contient ont &eacute;t&eacute; construits conform&eacute;ment aux normes de conception. Le titulaire de permis doit d&eacute;finir une proc&eacute;dure officielle de modifications de la conception dans le cadre de son programme de GQ, de mani&egrave;re &agrave; ce que toutes les modifications apport&eacute;es &agrave; l&rsquo;installation autoris&eacute;e ou &agrave; ses proc&eacute;d&eacute;s ou proc&eacute;dures durant toutes les &eacute;tapes du cycle de vie de cette derni&egrave;re soient enregistr&eacute;es avec exactitude et que leur impact soit &eacute;valu&eacute; sur le plan de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire [1]. Ces mesures de GQ devraient constituer une partie int&eacute;grante de l&rsquo;ensemble du programme de GQ.</p>  <p>Dans le pr&eacute;sent document, &laquo; l&rsquo;assurance de la qualit&eacute; &raquo; est consid&eacute;r&eacute;e comme un &eacute;l&eacute;ment du syst&egrave;me de gestion de la qualit&eacute;.</p>
<h5 id="sec2-3-2-7">2.3.2.7	Contr&ocirc;le op&eacute;rationnel</h5>  <p>Les &eacute;carts par rapport aux proc&eacute;dures et les changements impr&eacute;vus dans les conditions qui ont une incidence sur la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doivent &ecirc;tre signal&eacute;s &agrave; la direction et faire rapidement l&rsquo;objet d&rsquo;une enqu&ecirc;te. Lorsqu&rsquo;elle est disponible, l&rsquo;information sur les incidents et les &eacute;v&eacute;nements dans d&rsquo;autres installations du m&ecirc;me type doit &eacute;galement &ecirc;tre examin&eacute;s et les le&ccedil;ons tir&eacute;es de ces &eacute;v&eacute;nements doivent &ecirc;tre consid&eacute;r&eacute;es. On doit examiner les am&eacute;liorations possibles &agrave; apporter aux pratiques de s&ucirc;ret&eacute;-criticit&eacute; ou &agrave; l&rsquo;&eacute;quipement et des mesures doivent &ecirc;tre prises afin d&rsquo;&eacute;viter que la situation se produise &agrave; nouveau [1, 7].</p>
<h5 id="sec2-3-2-8">2.3.2.8	Examens op&eacute;rationnels</h5>  <p>Les activit&eacute;s doivent &ecirc;tre examin&eacute;es fr&eacute;quemment (au moins une fois par ann&eacute;e) afin de s&rsquo;assurer que les proc&eacute;dures sont suivies et que les conditions de proc&eacute;d&eacute; n&rsquo;ont pas &eacute;t&eacute; modifi&eacute;es d&rsquo;une fa&ccedil;on qui pourrait avoir une incidence sur l&rsquo;&eacute;valuation applicable de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (ESCN). Ces examens doivent &ecirc;tre r&eacute;alis&eacute;s en consultation avec le personnel d&rsquo;exploitation, par des personnes qui connaissent bien la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et qui, dans la mesure du possible, ne sont pas directement responsables de l&rsquo;op&eacute;ration.</p>
<h5 id="sec2-3-2-9">2.3.2.9	Proc&eacute;dures d&rsquo;urgence</h5>  <p>Des proc&eacute;dures d&rsquo;urgence doivent &ecirc;tre pr&eacute;par&eacute;es et approuv&eacute;es par la direction. Les organisations sur le site et hors site qui pourraient avoir &agrave; intervenir en cas d&rsquo;urgence doivent &ecirc;tre mises au courant des conditions auxquelles elles pourraient faire face et on doit leur fournir de l&rsquo;aide dans la pr&eacute;paration de proc&eacute;dures ad&eacute;quates relatives &agrave; leur intervention.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.3"></div>
<h4 id="sec2-3-3">2.3.3	Pratiques techniques</h4>  <p>Le facteur de multiplication effectif (k<sub>eff</sub>) d&rsquo;un syst&egrave;me d&eacute;pend de la masse, de la distribution et des propri&eacute;t&eacute;s nucl&eacute;aires des mati&egrave;res fissiles et d&rsquo;autres mati&egrave;res auxquelles elles sont associ&eacute;es.</p>  <p>La s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire est assur&eacute;e par le contr&ocirc;le d&rsquo;un ou de plusieurs param&egrave;tres du syst&egrave;me, dans le respect des limites de sous-criticit&eacute;, ainsi que par des tol&eacute;rances relatives aux &eacute;ventualit&eacute;s associ&eacute;es aux proc&eacute;d&eacute;s. Le contr&ocirc;le peut s&rsquo;exercer de diff&eacute;rentes mani&egrave;res :</p>
<ol>
<li>contraintes physiques, comme le confinement d&rsquo;une solution dans une cuve cylindrique dont le diam&egrave;tre n&rsquo;est pas sup&eacute;rieur &agrave; une valeur sp&eacute;cifi&eacute;e, ou le contr&ocirc;le de l&rsquo;espacement entre la mati&egrave;re et l&rsquo;&eacute;quipement [7]</li>
<li><p>utilisation d&rsquo;instruments</p>
<p>Durant les op&eacute;rations normales, un certain nombre de param&egrave;tres doivent &ecirc;tre mesur&eacute;s et contr&ocirc;l&eacute;s afin d&rsquo;&eacute;viter la criticit&eacute;, par exemple maintenir la concentration en mati&egrave;re fissile en de&ccedil;&agrave; d&rsquo;une valeur sp&eacute;cifi&eacute;e, gr&acirc;ce &agrave; des dispositifs qui mesurent la concentration, et qui permette d&rsquo;&eacute;viter qu&rsquo;elle ne s&rsquo;accumule dans un syst&egrave;me chimique. Les dispositifs de mesure doivent &ecirc;tre fiables et &eacute;talonn&eacute;s par rapport &agrave; des normes connues [1].</p></li>
<li>moyens chimiques, comme l&rsquo;&eacute;vitement de conditions qui favorisent la pr&eacute;cipitation</li>
<li>fiabilit&eacute; reposant sur le cours des &eacute;v&eacute;nements naturels ou cr&eacute;dibles, comme un proc&eacute;d&eacute; dont la nature consiste &agrave; maintenir la masse volumique de l&rsquo;oxyde d&rsquo;uranium en dessous d&rsquo;une fraction sp&eacute;cifi&eacute;e de la masse volumique th&eacute;orique maximale</li>
<li>proc&eacute;dures administratives, exigeant que la masse ne d&eacute;passe pas une limite fix&eacute;e</li>
<li>autres possibilit&eacute;s</li>
</ol>
<h5 id="sec2-3-3-1">2.3.3.1	Param&egrave;tres contr&ocirc;l&eacute;s</h5>  <p>Tous les param&egrave;tres contr&ocirc;l&eacute;s ainsi que leurs limites doivent &ecirc;tre sp&eacute;cifi&eacute;s. L&rsquo;influence des variations sur le keff du syst&egrave;me doit &ecirc;tre comprise dans ces param&egrave;tres.</p>
<h5 id="sec2-3-3-2">2.3.3.2	Disponibilit&eacute; et fiabilit&eacute;</h5>  <p>Le titulaire de permis doit s&rsquo;assurer que les niveaux n&eacute;cessaires de disponibilit&eacute; et de fiabilit&eacute; sont maintenus pour les contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire, tels qu&rsquo;ils sont &eacute;tablis par l&rsquo;analyse de proc&eacute;d&eacute; pour les conditions normales et anormales cr&eacute;dibles.</p>  <p>Les principes suivants doivent &ecirc;tre int&eacute;gr&eacute;s correctement afin d&rsquo;assurer la disponibilit&eacute; et la fiabilit&eacute; requises des contr&ocirc;les techniques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire [1].</p>  <h6 id="sec2-3-3-2-a">Principe de la contingence double</h6>  <p>La conception de proc&eacute;d&eacute; doit int&eacute;grer suffisamment de facteurs de s&ucirc;ret&eacute; pour n&eacute;cessiter au moins deux modifications improbables, ind&eacute;pendantes et simultan&eacute;es dans les conditions de proc&eacute;d&eacute; avant qu&rsquo;un accident de criticit&eacute; puisse se produire.</p>  <h6 id="sec2-3-3-2-b">Redondance</h6>  <p>Le principe de redondance devrait &ecirc;tre appliqu&eacute; &agrave; titre de principe de conception important pour am&eacute;liorer la fiabilit&eacute; des syst&egrave;mes importants pour la s&ucirc;ret&eacute;. La conception doit permettre de s&rsquo;assurer qu&rsquo;aucune d&eacute;faillance unique ne puisse r&eacute;sulter en perte de capacit&eacute; des contr&ocirc;les techniques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et les emp&ecirc;cher d&rsquo;accomplir leur fonction de s&ucirc;ret&eacute; pr&eacute;vue. Les ensembles d&rsquo;&eacute;quipements multiples qui ne peuvent pas &ecirc;tre test&eacute;s individuellement ne doivent pas &ecirc;tre consid&eacute;r&eacute;s comme redondants. Le degr&eacute; de redondance adopt&eacute; doit &eacute;galement refl&eacute;ter les possibilit&eacute;s de d&eacute;faillances non d&eacute;tect&eacute;es qui pourraient amoindrir la fiabilit&eacute; [1].</p>  <h6 id="sec2-3-3-2-c">Ind&eacute;pendance</h6>  <p>Le principe d&rsquo;ind&eacute;pendance (isolation fonctionnelle, ou s&eacute;paration physique par une distance, des barri&egrave;res, ou un am&eacute;nagement particulier de l&rsquo;&eacute;quipement de proc&eacute;d&eacute; ou des composants) doit &ecirc;tre appliqu&eacute;, au besoin, pour am&eacute;liorer la fiabilit&eacute; des syst&egrave;mes, particuli&egrave;rement en ce qui a trait aux d&eacute;faillances de cause commune. Les ensembles d&rsquo;&eacute;quipements multiples qui ne peuvent pas &ecirc;tre test&eacute;s individuellement ne doivent pas &ecirc;tre consid&eacute;r&eacute;s comme redondants. Le degr&eacute; de redondance adopt&eacute; doit &eacute;galement refl&eacute;ter la possibilit&eacute; que des d&eacute;faillances non d&eacute;tect&eacute;es r&eacute;duisent la fiabilit&eacute; [1].</p>  <h6 id="sec2-3-3-2-d">Diversit&eacute;</h6>  <p>Le principe de la diversit&eacute; peut am&eacute;liorer la fiabilit&eacute; et r&eacute;duire le risque de d&eacute;faillances de cause commune. Il devrait &ecirc;tre adopt&eacute; dans le cas des syst&egrave;mes importants pour la s&ucirc;ret&eacute;, lorsque cela est appropri&eacute; et r&eacute;alisable [1].</p>  <h6 id="sec2-3-3-2-e">Conception &agrave; s&ucirc;ret&eacute; int&eacute;gr&eacute;e</h6>  <p>Lorsque cela est possible, le principe de s&ucirc;ret&eacute; int&eacute;gr&eacute;e doit &ecirc;tre appliqu&eacute; aux composants importants pour la s&ucirc;ret&eacute;; c.-&agrave;-d., si un syst&egrave;me ou un composant subit une d&eacute;faillance, l&rsquo;installation devrait passer en mode d&rsquo;&eacute;tat s&eacute;curitaire sans qu&rsquo;il soit n&eacute;cessaire d&rsquo;initier des mesures de protection ou d&rsquo;att&eacute;nuation [1].</p>  <h6 id="sec2-3-3-2-f">Testabilit&eacute;</h6>  <p>Tous les contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doivent &ecirc;tre con&ccedil;us et arrang&eacute;s de sorte que :</p>
<ol>
<li>leur fonction de s&ucirc;ret&eacute; puisse &ecirc;tre inspect&eacute;e ad&eacute;quatement et mise &agrave; l&rsquo;essai</li>
<li>les contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire peuvent &ecirc;tre facilement entretenus, au besoin, avant leur mise en service et &agrave; intervalles r&eacute;guliers ou convenables par la suite, selon leur importance sur le plan de la s&ucirc;ret&eacute;  </li>
</ol>  <p>S&rsquo;il s&rsquo;av&egrave;re peu pratique d&rsquo;assurer la testabilit&eacute; ad&eacute;quate d&rsquo;un composant, l&rsquo;analyse de s&ucirc;ret&eacute; devrait tenir compte de la possibilit&eacute; qu&rsquo;il y ait des d&eacute;faillances non d&eacute;tect&eacute;es de ce genre d&rsquo;&eacute;quipement [1].</p>
<h5 id="sec2-3-3-3">2.3.3.3	Contr&ocirc;le de la g&eacute;om&eacute;trie</h5>  <p>Lorsque cela est possible, la fiabilit&eacute; devrait reposer sur la conception d&rsquo;&eacute;quipements dont les dimensions sont limit&eacute;es, plut&ocirc;t que sur des contr&ocirc;les administratifs. On peut tirer parti de n&rsquo;importe quelle caract&eacute;ristique nucl&eacute;aire du mat&eacute;riel et de l&rsquo;&eacute;quipement de proc&eacute;d&eacute;. Toutes les dimensions et propri&eacute;t&eacute;s nucl&eacute;aires sur lesquelles repose la fiabilit&eacute; doivent &ecirc;tre v&eacute;rifi&eacute;es avant de d&eacute;buter les op&eacute;rations, et un contr&ocirc;le doit &ecirc;tre exerc&eacute; pour les maintenir.</p>  <p>Les zones de proc&eacute;d&eacute; o&ugrave; des cuves de contr&ocirc;le de la criticit&eacute; contiennent des quantit&eacute;s importantes de mati&egrave;res nucl&eacute;aires sous forme liquide doivent &ecirc;tre &eacute;quip&eacute;es d&rsquo;alarmes permettant d&rsquo;&eacute;viter le remplissage excessif et de plateaux de collecte de capacit&eacute; appropri&eacute;e, et dont la configuration est s&eacute;curitaire sur le plan de la criticit&eacute; [1].</p>
<h5 id="sec2-3-3-4">2.3.3.4	Absorbeurs de neutrons</h5>  <p>La fiabilit&eacute; peut reposer sur des absorbeurs de neutrons, comme le cadmium ou le bore, qui sont int&eacute;gr&eacute;s au mat&eacute;riel ou &agrave; l&rsquo;&eacute;quipement de proc&eacute;d&eacute;, ou aux deux. Un contr&ocirc;le doit &ecirc;tre exerc&eacute; afin de maintenir leur pr&eacute;sence continue et de respecter les distributions et concentrations pr&eacute;vues. Lorsque cela est possible, l&rsquo;int&eacute;gration d&rsquo;absorbeurs de neutrons solides, &agrave; titre de parties int&eacute;grales permanentes de l&rsquo;&eacute;quipement est pr&eacute;f&eacute;rable &agrave; l&rsquo;utilisation des absorbeurs de neutrons en solution, en raison des contr&ocirc;les de traitement requis pour d&eacute;montrer la pr&eacute;sence continue d&rsquo;absorbeurs dissous.</p>  <p>Les absorbeurs de neutrons sont plus efficaces pour les neutrons d&rsquo;&eacute;nergie thermique et l&rsquo;on doit prendre soin de s&rsquo;assurer que leur efficacit&eacute; n&rsquo;est pas gravement r&eacute;duite dans des conditions op&eacute;rationnelles ou des conditions d&rsquo;accident, qui pourraient changer l&rsquo;assemblage fissile en une caract&eacute;ris&eacute;s par des neutrons d&rsquo;&eacute;nergie interm&eacute;diaire ou de haute &eacute;nergie [7].</p>
<h5 id="sec2-3-3-5">2.3.3.5	Limite de sous-criticit&eacute;</h5>  <p>Lorsque les donn&eacute;es applicables sont disponibles, des limites de sous-criticit&eacute; doivent &ecirc;tre &eacute;tablies en se fondant sur des exp&eacute;riences, et en appliquant une tol&eacute;rance ad&eacute;quate pour tenir compte des incertitudes dans les donn&eacute;es. En l&rsquo;absence de mesures exp&eacute;rimentales directement applicables, les limites peuvent &ecirc;tre d&eacute;riv&eacute;es de calculs r&eacute;alis&eacute;s gr&acirc;ce &agrave; une m&eacute;thode d&eacute;montr&eacute;e valide en la comparant &agrave; des donn&eacute;es exp&eacute;rimentales, conform&eacute;ment &agrave; la section 2.3.4.</p>
<h5 id="sec2-3-3-6">2.3.3.6	R&eacute;flecteurs de neutrons</h5>  <p>Si les conditions le permettent, la r&eacute;flexion des neutrons doit &ecirc;tre envisag&eacute;e comme param&egrave;tre de contr&ocirc;le de la criticit&eacute;. Le r&eacute;flecteur de neutrons le plus efficace et fr&eacute;quent que l&rsquo;on rencontre fr&eacute;quemment dans la manutention et le traitement des mati&egrave;res fissionnables est une &eacute;paisseur d&rsquo;eau suffisante pour assurer la r&eacute;activit&eacute; nucl&eacute;aire maximale. Cependant, il faut examiner avec soin les syst&egrave;mes comportant des &eacute;paisseurs importantes d&rsquo;autres mat&eacute;riaux structuraux courants (p. ex. le bois, le b&eacute;ton ou l&rsquo;acier), qui pourraient &ecirc;tre des r&eacute;flecteurs de neutrons plus efficaces que l&rsquo;eau. Dans certains cas, la quantit&eacute; de neutrons r&eacute;fl&eacute;chis par le personnel peut &ecirc;tre importante [7] (les constituants du corps humain peuvent avoir une grande capacit&eacute; de mod&eacute;ration [annexe F]).</p>
<h5 id="sec2-3-3-7">2.3.3.7	Interaction des neutrons</h5>  <p>On doit tenir compte de l&rsquo;interaction des neutrons entre les unit&eacute;s lorsqu&rsquo;au moins deux unit&eacute;s contenant des mati&egrave;res fissionnables sont pr&eacute;sentes. Il est possible de r&eacute;duire l&rsquo;interaction des neutrons &agrave; des proportions acceptables, soit en les espa&ccedil;ant, en ins&eacute;rant des mod&eacute;rateurs ou des absorbeurs de neutrons entre les unit&eacute;s, ou en combinant ces m&eacute;thodes [7].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.4"></div>
<h4 id="sec2-3-4">2.3.4	Validation d&rsquo;une m&eacute;thode de calcul</h4>  <p>Des m&eacute;thodes de calcul convenables pour d&eacute;terminer l&rsquo;&eacute;tat de sous-criticit&eacute; d&rsquo;un syst&egrave;me doivent &ecirc;tre s&eacute;lectionn&eacute;es et justifi&eacute;es conform&eacute;ment &agrave; une norme d&rsquo;assurance de la qualit&eacute; pertinente. Les m&eacute;thodes varient consid&eacute;rablement quant &agrave; leur fondement et leur forme, et chacune trouve une application dans la vaste gamme des situations qui se pr&eacute;sentent en ce qui a trait &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. Cependant, la proc&eacute;dure g&eacute;n&eacute;rale &agrave; suivre dans l&rsquo;&eacute;tablissement de la validit&eacute; est commune &agrave; toutes. Se reporter &agrave; l&rsquo;annexe C pour un exemple de validation d&rsquo;une m&eacute;thode de calcul.</p>  <h5 id="sec2-3-4-1">2.3.4.1	&Eacute;tablissement du biais</h5>  <p>Le biais doit &ecirc;tre &eacute;tabli en corr&eacute;lant les r&eacute;sultats d&rsquo;exp&eacute;riences critiques et d&rsquo;exp&eacute;riences exponentielles avec les r&eacute;sultats obtenus pour ces m&ecirc;mes syst&egrave;mes gr&acirc;ce &agrave; la m&eacute;thode de calcul valid&eacute;e.</p>  <p>Dans les cas o&ugrave; aucune donn&eacute;e exp&eacute;rimentale n&rsquo;est disponible, l&rsquo;&eacute;tablissement du biais pour une m&eacute;thode de calcul est impossible et ces exigences ne peuvent &ecirc;tre respect&eacute;es. La validation d&rsquo;une m&eacute;thode de calcul en comparant les r&eacute;sultats avec ceux d&rsquo;une autre m&eacute;thode de calcul, par exemple, est inacceptable.</p>  <p>Souvent, la corr&eacute;lation est exprim&eacute;e en valeurs de keff calcul&eacute;es pour les syst&egrave;mes exp&eacute;rimentaux &agrave; l&rsquo;&eacute;tat critique, et dans ce cas, le biais est l&rsquo;&eacute;cart entre les valeurs calcul&eacute;es de k<sub>eff</sub> et l&rsquo;unit&eacute;. Toutefois, d&rsquo;autres &eacute;tats physiques et param&egrave;tres peuvent &ecirc;tre utilis&eacute;s; en l&rsquo;absence de donn&eacute;es d&rsquo;exp&eacute;riences de criticit&eacute;, les r&eacute;sultats obtenus &agrave; l&rsquo;aide de techniques permettant de d&eacute;terminer dans quelle mesure un syst&egrave;me est sous-critique peuvent &ecirc;tre utilis&eacute;s. Le biais a pour but de normaliser une m&eacute;thode pour l&rsquo;ensemble des domaines d&rsquo;applicabilit&eacute;, de mani&egrave;re &agrave; ce qu&rsquo;elle pr&eacute;voie les conditions critiques &agrave; l&rsquo;int&eacute;rieur des limites d&rsquo;incertitude dans le biais. De fa&ccedil;on g&eacute;n&eacute;rale, ni le biais ni son incertitude ne sont constants; les deux devraient &ecirc;tre fonction de la composition et d&rsquo;autres variables.</p>
<h5 id="sec2-3-4-2">2.3.4.2	Tendances du biais</h5>  <p>Le domaine (ou les domaines) d&rsquo;applicabilit&eacute; d&rsquo;une m&eacute;thode de calcul peuvent &ecirc;tre &eacute;tendus au-del&agrave; de la gamme de conditions exp&eacute;rimentales pour lesquelles le biais est &eacute;tabli, en ayant recours aux tendances du biais. Lorsque cette extension est grande, la m&eacute;thode doit &ecirc;tre compl&eacute;t&eacute;e par d&rsquo;autres m&eacute;thodes de calcul, afin de fournir une meilleure estimation du biais, et plus particuli&egrave;rement de son incertitude dans la zone (ou les zones) &eacute;largies, et de d&eacute;montrer l&rsquo;uniformit&eacute; des r&eacute;sultats calcul&eacute;s.</p>
<h5 id="sec2-3-4-3">2.3.4.3	Incertitudes li&eacute;es au biais</h5>  <p>Les incertitudes li&eacute;es au biais doivent contenir des tol&eacute;rances li&eacute;es aux incertitudes dans les conditions exp&eacute;rimentales, des tol&eacute;rances pour le manque d&rsquo;exactitude et de pr&eacute;cision dans la m&eacute;thode de calcul et des tol&eacute;rances pour l&rsquo;&eacute;largissement du domaine (ou des domaines) d&rsquo;applicabilit&eacute;. Apr&egrave;s avoir &eacute;tabli les tol&eacute;rances pour l&rsquo;exactitude et la pr&eacute;cision de la m&eacute;thode et pour le biais et les incertitudes, une marge relativement au k<sub>eff</sub> ou &agrave; un autre param&egrave;tre de corr&eacute;lation doit &ecirc;tre appliqu&eacute;e. Celle-ci doit &ecirc;tre suffisamment grande pour s&rsquo;assurer que les conditions (calcul&eacute;es par la m&eacute;thode et consid&eacute;r&eacute;es sous-critiques par la valeur de cette marge) seront r&eacute;ellement sous-critiques. Comme le biais et ses incertitudes, cette marge peut varier en fonction de la composition et d&rsquo;autres variables.</p>
<h5 id="sec2-3-4-4">2.3.4.4	D&eacute;pendance face aux programmes informatiques</h5>  <p>Si la m&eacute;thode de calcul utilise un programme informatique, des v&eacute;rifications doivent &ecirc;tre faites pour confirmer que les op&eacute;rations math&eacute;matiques sont ex&eacute;cut&eacute;es tel que pr&eacute;vu. Tout changement dans le programme informatique doit &ecirc;tre suivi d&rsquo;une nouvelle confirmation pr&eacute;cisant que les op&eacute;rations math&eacute;matiques sont r&eacute;alis&eacute;es comme pr&eacute;vu.</p>
<h5 id="sec2-3-4-5">2.3.4.5	Conformit&eacute; avec les mesures</h5>  <p>Les propri&eacute;t&eacute;s nucl&eacute;aires, comme les sections efficaces, qui sont utilis&eacute;es dans la m&eacute;thode de calcul doivent &ecirc;tre conformes avec les mesures exp&eacute;rimentales de ces propri&eacute;t&eacute;s.</p>
<h5 id="sec2-3-4-6">2.3.4.6	Rapport de validation</h5>  <p>Un rapport de validation &eacute;crit doit &ecirc;tre pr&eacute;par&eacute;. Ce rapport doit :</p>
<ol>
<li>d&eacute;crire la m&eacute;thode avec suffisamment de d&eacute;tails, de clart&eacute; et sans ambigu&iuml;t&eacute;, pour permettre une reproduction ind&eacute;pendante des r&eacute;sultats</li>
<li>identifier les donn&eacute;es exp&eacute;rimentales et &eacute;num&eacute;rer les param&egrave;tres d&eacute;riv&eacute;s des donn&eacute;es afin de les utiliser dans la validation de la m&eacute;thode</li>
<li>pr&eacute;ciser le domaine (ou les domaines) d&rsquo;applicabilit&eacute;</li>
<li>&eacute;noncer le biais et les incertitudes pour le domaine (ou les domaines) d&rsquo;applicabilit&eacute;</li>
<li>pr&eacute;ciser la marge de sous-criticit&eacute; pour le domaine (ou les domaines) d&rsquo;applicabilit&eacute;, y compris la justification de la pertinence de la marge de sous-criticit&eacute;</li>
<li>pr&eacute;ciser la limite sup&eacute;rieure de sous-criticit&eacute; (voir annexe B pour les renseignements d&eacute;taill&eacute;s)</li>
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
<div id="2.4"></div>
<h3 id="sec2-4">2.4	Limites &agrave; un seul param&egrave;tre ou &agrave; param&egrave;tres multiples pour les nucl&eacute;ides fissiles</h3>  <p>Si les limites &agrave; un param&egrave;tre ou &agrave; plusieurs param&egrave;tres s&rsquo;appliquant aux quantit&eacute;s de <sup>233</sup>U, de <sup>235</sup>U et de plutonium indiqu&eacute;es aux sections 2.4.1, 2.4.2, 2.4.3, et 2.4.4 sont utilis&eacute;es, une marge administrative ad&eacute;quate s&rsquo;appliquera &agrave; la sous-criticit&eacute; pour assurer la conformit&eacute; avec la section 2.3.2.2.</p>  <p>Ces limites ont &eacute;t&eacute; calcul&eacute;es &agrave; l&rsquo;aide de m&eacute;thodes respectant les exigences de la section 2.3.4. Une limite doit &ecirc;tre appliqu&eacute;e seulement si les mati&egrave;res avoisinantes, y compris d&rsquo;autres mati&egrave;res fissiles se trouvant &agrave; proximit&eacute;, n&rsquo;augmentent pas le facteur de multiplication effectif (k<sub>eff</sub>) plus qu&rsquo;il ne serait augment&eacute; si l&rsquo;unit&eacute; &eacute;tait comprise dans une couche d&rsquo;eau adjacente d&rsquo;&eacute;paisseur illimit&eacute;e. Une limite peut &ecirc;tre appliqu&eacute;e &agrave; un m&eacute;lange de nucl&eacute;ides fissiles si l&rsquo;on tient compte de tous les composants du m&eacute;lange et en retenant celui ayant la limite la plus restrictive.</p>  <p>Les sp&eacute;cifications du proc&eacute;d&eacute; doivent pr&eacute;voir des marges visant &agrave; le prot&eacute;ger contre les incertitudes dans les variables de proc&eacute;d&eacute; et contre le d&eacute;passement accidentel d&rsquo;une limite.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.1"></div>
<h4 id="sec2-4-1">2.4.1	Solutions aqueuses homog&egrave;nes</h4>  <p>N&rsquo;importe laquelle des limites indiqu&eacute;es au tableau 2.1 est applicable, en autant qu&rsquo;une solution aqueuse homog&egrave;ne soit maintenue. Il est convenu que les concentrations de solutions satur&eacute;es ne sont pas d&eacute;pass&eacute;es.</p>  <p>Les limites de <sup>239</sup>Pu s&rsquo;appliquent aux m&eacute;langes d&rsquo;isotopes de plutonium, en autant que la concentration de <sup>240</sup>Pu d&eacute;passe celle de <sup>241</sup>Pu, et en autant que le <sup>241</sup>Pu est consid&eacute;r&eacute; comme &eacute;tant du <sup>239</sup>Pu lors des calculs de la masse ou de la concentration. Des limites moins restrictives sont indiqu&eacute;es &agrave; la section 2.5.3 pour ce qui est des compositions isotopiques de plutonium contenant des quantit&eacute;s appr&eacute;ciables de <sup>240</sup>Pu.</p>  <p>La limite du rapport atomique est &eacute;quivalente &agrave; la limite de la concentration en solution, mais la limite du rapport peut &eacute;galement &ecirc;tre appliqu&eacute;e aux solutions non aqueuses, peu importe la forme chimique du nucl&eacute;ide fissile</p>.
<table className="width-100">  <caption className="text-left">Tableau 2-1 : Limites &agrave; un seul param&egrave;tre pour les solutions aqueuses homog&egrave;nes de nucl&eacute;ides fissiles [ANSI/ANS-8.1]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Param&egrave;tre</th>
<th colSpan="5" className="text-center">Limite de sous-criticit&eacute; pour les solut&eacute;s fissiles</th>   </tr>   <tr>
<th><sup>233</sup>UO<sub>2</sub>F<sub>2</sub><br />
[13]</td>
<th><sup>233</sup>UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub><br />
[13]</td>
<th><sup>235</sup>UO<sub>2</sub>F<sub>2</sub><br />
[14]</td>
<th><sup>235</sup>UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub><br />
[14]</td>
<th><sup>239</sup>Pu(NO<sub>3</sub>)<sub>4</sub><br />
[14]</td>   </tr>   <tr>
<td className="text-left">Masse de nucl&eacute;ide fissile, en kg</td>
<td className="text-center">0,54</td>
<td className="text-center">0,55</td>
<td className="text-center">0,76</td>
<td className="text-center">0,78</td>
<td className="text-center">0,48</td>   </tr>   <tr>
<td className="text-left">Diam&egrave;tre du cylindre de solution, en cm</td>
<td className="text-center">10,5</td>
<td className="text-center">11,7</td>
<td className="text-center">13,7</td>
<td className="text-center">14,4</td>
<td className="text-center">15,4</td>   </tr>   <tr>
<td className="text-left">&Eacute;paisseur de la plaque de solution, en cm</td>
<td className="text-center">2,5</td>
<td className="text-center">3,1</td>
<td className="text-center">4,4</td>
<td className="text-center">4,9</td>
<td className="text-center">5,5</td>   </tr>   <tr>
<td className="text-left">Volume de solution, en L</td>
<td className="text-center">2,8</td>
<td className="text-center">3,6</td>
<td className="text-center">5,5</td>
<td className="text-center">6,2</td>
<td className="text-center">7,3</td>   </tr>   <tr>
<td className="text-left">Concentration de nucl&eacute;ide fissile, en g/L</td>
<td className="text-center">10,8</td>
<td className="text-center">10,8</td>
<td className="text-center">11,6</td>
<td className="text-center">11,6</td>
<td className="text-center">7,3</td>   </tr>   <tr>
<td className="text-left">Rapport atomique de l&rsquo;hydrog&egrave;ne au nucl&eacute;ide fissile<sup>(a)</sup></td>
<td className="text-center">2 390</td>
<td className="text-center">2 390</td>
<td className="text-center">2 250</td>
<td className="text-center">2 250</td>
<td className="text-center">3 630</td>   </tr>   <tr>
<td className="text-left">Densit&eacute; surfacique de nucl&eacute;ide fissile, en g/cm<sup>2</sup></td>
<td className="text-center">0,35</td>
<td className="text-center">0,35</td>
<td className="text-center">0,40</td>
<td className="text-center">0,40</td>
<td className="text-center">0,25</td>   </tr>  </table>  <p><sup>(a)</sup> Limite inf&eacute;rieure</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.2"></div>
<h4 id="sec2-4-2">2.4.2	M&eacute;langes aqueux</h4>  <p>Les densit&eacute;s surfaciques indiqu&eacute;es au tableau 2-1 sont ind&eacute;pendantes du compos&eacute; chimique et sont valides pour les m&eacute;langes poss&eacute;dant des gradients de densit&eacute;, en autant que les densit&eacute;s surfaciques sont uniformes.</p>  <p>Les limites de masse sous-critique pour le <sup>233</sup>U, le <sup>235</sup>U et le <sup>239</sup>Pu dans des m&eacute;langes qui pourraient ne pas &ecirc;tre uniformes sont de 0,50, 0,70 et 0,45 kg respectivement, et sont &eacute;galement ind&eacute;pendantes du compos&eacute; [13, 14, 15].</p>
<h5 id="sec2-4-2-1">2.4.2.1	Limites d&rsquo;enrichissement</h5>  <p>Le tableau 2-2 pr&eacute;sente les limites d&rsquo;enrichissement en <sup>235</sup>U pour les compos&eacute;s d&rsquo;uranium m&eacute;lang&eacute;s avec de l&rsquo;eau de mani&egrave;re homog&egrave;ne, sans limite de masse ou de concentration.</p>
<table className="">  <caption className="text-left">Tableau 2-2 : Limites d&rsquo;enrichissement en <sup>235</sup>U pour les m&eacute;langes homog&egrave;nes d&rsquo;uranium et d&rsquo;eau [ANSI/ANS-8.1]</caption>   <tr>
<th className="text-center">Compos&eacute;</th>
<th className="text-center">Limite de sous-criticit&eacute; : % en poids de <sup>235</sup>U [14]</th>   </tr>   <tr>
<td className="text-left">Uranium m&eacute;tal</td>
<td className="text-center">0,93</td>   </tr>   <tr>
<td className="text-left">UO<sub>2</sub>, U<sub>3</sub>O<sub>8</sub>, or UO<sub>3</sub></td>
<td className="text-center">0,96</td>   </tr>   <tr>
<td className="text-left">UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub></td>
<td className="text-center">1,96</td>   </tr>   </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.3"></div>
<h4 id="sec2-4-3">2.4.3	Unit&eacute;s m&eacute;talliques</h4>  <p>La limite d&rsquo;enrichissement pour l&rsquo;uranium et les limites de masse pr&eacute;sent&eacute;es au tableau 2-3 s&rsquo;appliquent &agrave; une pi&egrave;ce unique ne poss&eacute;dant aucune surface concave. Elles peuvent &eacute;galement s&rsquo;appliquer &agrave; un assemblage de pi&egrave;ces, en autant que la mod&eacute;ration des neutrons ne soit pas diss&eacute;min&eacute;e.</p>  <p>Les limites pour le <sup>233</sup>U et le <sup>235</sup>U s&rsquo;appliquent aux m&eacute;langes d&rsquo;isotopes contenant du <sup>234</sup>U, <sup>236</sup>U ou <sup>238</sup>U, en autant que le <sup>234</sup>U soit consid&eacute;r&eacute; comme &eacute;tant du <sup>233</sup>U ou du <sup>235</sup>U respectivement, en calculant la masse [14]. Les limites pour le <sup>239</sup>Pu s&rsquo;appliquent aux m&eacute;langes isotopiques de plutonium, en autant que la concentration de <sup>240</sup>Pu d&eacute;passe celle du <sup>241</sup>Pu et tous les isotopes sont consid&eacute;r&eacute;s comme &eacute;tant du <sup>239</sup>Pu lors des calculs de la masse [15]. Les limites de masse volumique peuvent &ecirc;tre ajust&eacute;es afin de tenir compte de la composition isotopique.</p>
<table className="width-100">  <caption className="text-left">Tableau 2-3 : Limites &agrave; un seul param&egrave;tre pour les unit&eacute;s m&eacute;talliques [ANSI/ANS-8.1]</caption>   <tr>
<th width="600" rowspan="2" className="text-center text-center">Param&egrave;tre</th>
<th colSpan="3" className="text-center">Limite de sous-criticit&eacute;</th>   </tr>   <tr>
<th width="59"><sup>233</sup>U&nbsp;[13]</th>
<th width="59"><sup>235</sup>U&nbsp;[14]</th>
<th width="59"><sup>239</sup>Pu&nbsp;[15</th>   </tr>   <tr>
<td className="text-left">Masse de nucl&eacute;ide fissile, en kg</td>
<td className="text-center">6,0</td>
<td className="text-center">20,1</td>
<td className="text-center">5,0</td>   </tr>   <tr>
<td className="text-left">Diam&egrave;tre du cylindre, en cm</td>
<td className="text-center">4,5</td>
<td className="text-center">7,3</td>
<td className="text-center">4,4</td>   </tr>   <tr>
<td className="text-left">&Eacute;paisseur de la plaque, en cm</td>
<td className="text-center">0,38</td>
<td className="text-center">1,3</td>
<td className="text-center">0,65</td>   </tr>   <tr>
<td className="text-left">Enrichissement en uranium, % en poids de <sup>235</sup>U</td>
<td className="text-center">&ndash;</td>
<td className="text-center">5,0</td>
<td className="text-center">&ndash;</td>   </tr>   <tr>
<td className="text-left">Masse volumique maximale pour laquelle les limites de masse et de dimension sont valides, en g/cm<sup>3</sup></td>
<td className="text-center">18,65</td>
<td className="text-center">18,81</td>
<td className="text-center">19,82</td>   </tr>   </table>   <br />
<table className="table table-header small">  <caption className="text-left">Tableau 2-4 : Limites &agrave; un seul param&egrave;tre pour les oxydes ne contenant pas plus de 1,5 % d&rsquo;eau en poids pour la masse volumique totale [ANSI/ANS-8.1]</caption>
<tr>
<th>Param&egrave;tre</th>
<th><sup>233</sup>UO<sub>2</sub>&nbsp;[13]</th>
<th><sup>233</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[13]</th>
<th><sup>233</sup>UO<sub>3</sub>&nbsp;[13]</th>
<th><sup>235</sup>UO<sub>2</sub>&nbsp;[14]</th>
<th><sup>235</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[14]</th>
<th><sup>235</sup>UO<sub>3</sub>&nbsp;[14]</th>
<th><sup>239</sup>PuO<sub>2</sub>&nbsp;[15]</th>
</tr>
<tr>
<td className="text-left">Masse de nucl&eacute;ide fissile, en kg</td>
<td className="text-center">10,1</td>
<td className="text-center">13,4</td>
<td className="text-center">15,2</td>
<td className="text-center">32,3</td>
<td className="text-center">44,0</td>
<td className="text-center">51,2</td>
<td className="text-center">10,2</td>
</tr>
<tr>
<td className="text-left">Mass d&#39;oxyde, <sup>(a)</sup> en kg</td>
<td className="text-center">11,7</td>
<td className="text-center">16,0</td>
<td className="text-center">18,7</td>
<td className="text-center">37,2</td>
<td className="text-center">52,8</td>
<td className="text-center">62,6</td>
<td className="text-center">11,5</td>
</tr>
<tr>
<td className="text-left">Diam&egrave;tre du cylindre, en cm</td>
<td className="text-center">7,2</td>
<td className="text-center">9,0</td>
<td className="text-center">9,9</td>
<td className="text-center">11,6</td>
<td className="text-center">14,6</td>
<td className="text-center">16,2</td>
<td className="text-center">7,2</td>
</tr>
<tr>
<td className="text-left">&Eacute;paisseur de la plaque, en cm</td>
<td className="text-center">0,8</td>
<td className="text-center">1,1</td>
<td className="text-center">1,3</td>
<td className="text-center">2,9</td>
<td className="text-center">4,0</td>
<td className="text-center">4,6</td>
<td className="text-center">1,4</td>
</tr>
<tr>
<td className="text-center">Densit&eacute; apparente maximale <sup>(b)</sup>, pour laquelle les limites sont valides, en g/cm<sup>3</sup></td>
<td headers="SParameter_2"><img src="/images/gd-327/gd_327-e-2.gif" width="104" height="34" alt="" /></td>
<td headers="SParameter_3"><img src="/images/gd-327/gd_327-e-3.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_4"><img src="/images/gd-327/gd_327-e-4.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_5"><img src="/images/gd-327/gd_327-e-5.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_6"><img src="/images/gd-327/gd_327-e-6.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_7"><img src="/images/gd-327/gd_327-e-7.gif" width="110" height="34" alt="" /></td>
<td headers="SParameter_8"><img src="/images/gd-327/gd_327-e-8.gif" width="108" height="34" alt="" /></td>
</tr>  </table>  <p><sup>(a)</sup> Cette valeur comprend la masse de n&rsquo;importe quelle taux d&rsquo;humidit&eacute; connexe, allant jusqu&rsquo;&agrave; la valeur limitative de 1,5 % en poids.<br />
<sup>(b)</sup> w repr&eacute;sente la quantit&eacute; d&rsquo;eau, en pourcentage massique, dans l&rsquo;oxyde.</p>  <br />
<table className="table table-header small">  <caption className="text-left">Tableau 2-5 : Limites &agrave; un seul param&egrave;tre pour les oxydes ne contenant pas plus de 1,5 % en poids d&rsquo;eau, &agrave; pas plus de la moiti&eacute; de la masse volumique<sup>(a)</sup> [ANSI/ANS-8.1]</caption>
<tr>
<th>Param&egrave;tre</th>
<th><sup>233</sup>UO<sub>2</sub>&nbsp;[13]</th>
<th><sup>233</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[13]</th>
<th><sup>233</sup>UO<sub>3</sub>&nbsp;[13]</th>
<th><sup>235</sup>UO<sub>2</sub>&nbsp;[14]</th>
<th><sup>235</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[14]</th>
<th><sup>235</sup>UO<sub>3</sub>&nbsp;[14]</th>
<th><sup>239</sup>PuO<sub>2</sub>&nbsp;[15]</th>
</tr>
<tr>
<td className="text-left">Masse de nucl&eacute;ide fissile, en kg</td>
<td className="text-center">23,4</td>
<td className="text-center">30,5</td>
<td className="text-center">34,7</td>
<td className="text-center">88</td>
<td className="text-center">122</td>
<td className="text-center">142</td>
<td className="text-center">27</td>
</tr>
<tr>
<td className="text-left">Mass d&#39;oxyde, <sup>(b)</sup> en kg</td>
<td className="text-center">27,0</td>
<td className="text-center">36,6</td>
<td className="text-center">42,4</td>
<td className="text-center">102</td>
<td className="text-center">146</td>
<td className="text-center">174</td>
<td className="text-center">30</td>
</tr>
<tr>
<td className="text-left">Diam&egrave;tre du cylindre, en cm</td>
<td className="text-center">11,9</td>
<td className="text-center">14,8</td>
<td className="text-center">16,3</td>
<td className="text-center">20,4</td>
<td className="text-center">26,0</td>
<td className="text-center">28,8</td>
<td className="text-center">12,6</td>
</tr>
<tr>
<td className="text-left">&Eacute;paisseur de la dalle, en cm</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">2,6</td>
<td className="text-center">5,8</td>
<td className="text-center">8,0</td>
<td className="text-center">9,3</td>
<td className="text-center">2,8</td>
</tr>  </table>  <p><sup>(a)</sup> Cette valeur est la moiti&eacute; de la densit&eacute; apparente maximale du tableau 2-4.<br />
<sup>(b)</sup> Cette valeur comprend la masse de n&rsquo;importe quelle quantit&eacute; d&rsquo;humidit&eacute; pr&eacute;sente, allant jusqu&rsquo;&agrave; la valeur limitative de 1,5 % massique.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.4"></div>
<h4 id="sec2-4-4">2.4.4 Oxydes</h4>  <p>Les limites pr&eacute;sent&eacute;es aux tableaux  2-4 et 2-5 s&rsquo;appliquent seulement lorsque l&rsquo;oxyde ne contient pas plus de 1,5 % d&rsquo;eau en unit&eacute; de poids. Les limites de masse s&rsquo;appliquent &agrave; une pi&egrave;ce unique ne poss&eacute;dant pas de surface concave. Elles peuvent s&rsquo;appliquer &eacute;galement &agrave; un assemblage de pi&egrave;ces, en autant qu&rsquo;il n&rsquo;y ait pas de mod&eacute;ration additionnelle qui soit diss&eacute;min&eacute;e.</p>  <p>La limite de masse est donn&eacute;e comme &eacute;tant &eacute;quivalente &agrave; la masse du nucl&eacute;ide et &agrave; la masse de l&rsquo;oxyde (incluant la teneur en eau). Il convient de noter que les limites pr&eacute;sent&eacute;es aux tableaux  2-4 et 2-5 ne sont valides que si l&rsquo;on respecte certaines restrictions relatives &agrave; la densit&eacute; globale sp&eacute;cifi&eacute;e. &Agrave; noter que, particuli&egrave;rement pour le UO<sub>3</sub>, la masse volumique d&rsquo;une mati&egrave;re peut d&eacute;passer la masse volumique totale indiqu&eacute;e au tableau 2-4, et, par cons&eacute;quent, les limites du tableau 2-4 peuvent ne pas &ecirc;tre valides pour les oxydes tr&egrave;s compacts. &Eacute;tant donn&eacute; que la teneur en eau se limite &agrave; 1,5 %, la limite d&rsquo;enrichissement du tableau 2-2 pour les oxydes d&rsquo;uranium est port&eacute;e &agrave; 3,2 % de <sup>235</sup>U.</p>
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
<h3 id="sec2-5">2.5	Contr&ocirc;le des param&egrave;tres multiples</h3>  <p>Bien que les limites &agrave; un seul param&egrave;tre soient ad&eacute;quates pour de nombreuses fins, elles sont peu pratiques et peu avantageuses &eacute;conomiquement pour d&rsquo;autres. La limitation simultan&eacute;e de deux ou de plusieurs param&egrave;tres donne une limite moins restrictive.</p>  <p>Si les limites &agrave; param&egrave;tres multiples pour le <sup>233</sup>U, le <sup>235</sup>U et le plutonium fournies aux sections 2.5.1, 2.5.2, 2.5.3 et 2.5.4 sont utilis&eacute;es, une marge administrative ad&eacute;quate de sous-criticit&eacute; doit &ecirc;tre appliqu&eacute;e pour assurer la conformit&eacute; avec la section 2.3.2.2.</p>  <p>Quelques exemples utiles sont donn&eacute;s aux sections 2.5.1 &agrave; 2.5.4. Tous ces exemples ont &eacute;t&eacute; calcul&eacute;s &agrave; l&rsquo;aide de m&eacute;thodes respectant les crit&egrave;res de la section 2.3.4. Ces limites doivent &ecirc;tre appliqu&eacute;es que lorsque les mati&egrave;res avoisinantes n&rsquo;augmentent pas davantage le facteur de multiplication effectif (k<sub>eff</sub>) qu&rsquo;il ne serait augment&eacute; si l&rsquo;unit&eacute; &eacute;tait recouverte d&rsquo;une couche d&rsquo;eau contigu&euml; d&rsquo;&eacute;paisseur illimit&eacute;e. Une orientation g&eacute;n&eacute;rale relative au contr&ocirc;le des param&egrave;tres multiples est disponible dans les documents techniques [16, 17, 18, 19].</p>  <p>&Agrave; noter que les sp&eacute;cifications du proc&eacute;d&eacute; doivent int&eacute;grer des marges visant &agrave; le prot&eacute;ger contre les incertitudes dans les variables de proc&eacute;d&eacute; et contre le d&eacute;passement accidentel d&rsquo;une limite.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.1"></div>
<h4 id="sec2-5-1">2.5.1	M&eacute;langes d&rsquo;uranium m&eacute;tal ou d&rsquo;oxyde d&rsquo;uranium et d&rsquo;eau pour un faible enrichissement en <sup>235</sup>U</h4>  <p>Une des applications du contr&ocirc;le des param&egrave;tres multiples est le contr&ocirc;le de l&rsquo;enrichissement en <sup>235</sup>U et de l&rsquo;un des param&egrave;tres de la section 2.4. Les limites relatives au param&egrave;tre [20] applicables aux syst&egrave;mes aqueux contenant de l&rsquo;uranium m&eacute;tal ou de l&rsquo;oxyde d&rsquo;uranium (UO<sub>2</sub>), peu importe la taille et la forme des pi&egrave;ces de m&eacute;tal ou d&rsquo;oxyde, sont sp&eacute;cifi&eacute;es comme &eacute;tant des fonctions de l&rsquo;enrichissement, aux tableaux VI-VIII de [20] qui donnent, respectivement, la masse de <sup>235</sup>U, le diam&egrave;tre du cylindre, l&rsquo;&eacute;paisseur de la plaque, le volume et la densit&eacute; surfacique.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.2"></div>
<h4 id="sec2-5-2">2.5.2	Solutions aqueuses d&rsquo;uranium pour un faible enrichissement en <sup>235</sup>U</h4>  <p>Une application semblable du contr&ocirc;le &agrave; param&egrave;tres multiples est le contr&ocirc;le de l&rsquo;enrichissement en <sup>235</sup>U et de l&rsquo;un des param&egrave;tres du tableau 2-1, conjugu&eacute; au maintien d&rsquo;une solution aqueuse homog&egrave;ne. Le tableau 2- 6 &eacute;num&egrave;re les limites des param&egrave;tres pour les solutions aqueuses homog&egrave;nes d&rsquo;uranium, lorsque l&rsquo;enrichissement est contr&ocirc;l&eacute; et maintenu &agrave; l&rsquo;int&eacute;rieur des limites &eacute;nonc&eacute;es. Les concentrations de solutions satur&eacute;es, &agrave; une concentration molaire de 5 pour les solutions de UO<sub>2</sub>F<sub>2</sub> et de 2,5 pour les solutions de UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub>, ne doivent pas &ecirc;tre d&eacute;pass&eacute;es.</p>
<table className="width-100">  <caption className="text-left">Tableau 2-6 : Limites pour les solutions aqueuses homog&egrave;nes d&rsquo;uranium faiblement enrichi [14]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Param&eacute;tre</th>
<th rowspan="2" className="text-center text-center">Enrichissement, wt% en poids de <sup>235</sup>U</th>
<th colSpan="2" className="text-center">Limite de sous-criticit&eacute;</th>   </tr>   <tr>
<th className="text-center">UO<sub>2</sub>F<sub>2</sub></th>
<th className="text-center">UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub></th>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Masse, en kg de <sup>235</sup>U</td>
<td className="text-center">10,0</td>
<td className="text-center">1,07</td>
<td className="text-center">1,47</td>   </tr>   <tr>
<td className="text-center">5,0</td>
<td className="text-center">1,64</td>
<td className="text-center">3,30</td>   </tr>   <tr>
<td className="text-center">4,0</td>
<td className="text-center">1,98</td>
<td className="text-center">6,50</td>   </tr>   <tr>
<td className="text-center">3,0</td>
<td className="text-center">2,75</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2,0</td>
<td className="text-center">8,00</td>
<td className="text-center">(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Diam&egrave;tre du cylindre, en cm</td>
<td className="text-center">10,0</td>
<td className="text-center">20,1</td>
<td className="text-center">25,2</td>   </tr>   <tr>
<td className="text-center">5,0</td>
<td className="text-center">26,6</td>
<td className="text-center">42,7</td>   </tr>   <tr>
<td className="text-center">4,0</td>
<td className="text-center">30,2</td>
<td className="text-center">58,6</td>   </tr>   <tr>
<td className="text-center">3,0</td>
<td className="text-center">37,4</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2,0</td>
<td className="text-center">63,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">&Eacute;paisseur de la plaque, en cm</td>
<td className="text-center">10,0</td>
<td className="text-center">8,3</td>
<td className="text-center">11,9</td>   </tr>   <tr>
<td className="text-center">5,0</td>
<td className="text-center">12,6</td>
<td className="text-center">23,4</td>   </tr>   <tr>
<td className="text-center">4,0</td>
<td className="text-center">15,1</td>
<td className="text-center">33,7</td>   </tr>   <tr>
<td className="text-center">3,0</td>
<td className="text-center">20,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2,0</td>
<td className="text-center">36,5</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Volume, en L</td>
<td className="text-center">10,0</td>
<td className="text-center">14,8</td>
<td className="text-center">26,7</td>   </tr>   <tr>
<td className="text-center">5,0</td>
<td className="text-center">30,6</td>
<td className="text-center">111,0</td>   </tr>   <tr>
<td className="text-center">4,0</td>
<td className="text-center">42,7</td>
<td className="text-center">273,0</td>   </tr>   <tr>
<td className="text-center">3,0</td>
<td className="text-center">77,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2,0</td>
<td className="text-center">340,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="7" className="text-left text-center">Concentration, en g U/L</td>
<td className="text-center">10,0</td>
<td className="text-center">123,0</td>
<td className="text-center">128,0</td>   </tr>   <tr>
<td className="text-center">5,0</td>
<td className="text-center">261,0</td>
<td className="text-center">283,0</td>   </tr>   <tr>
<td className="text-center">4,0</td>
<td className="text-center">335,0</td>
<td className="text-center">375,0</td>   </tr>   <tr>
<td className="text-center">3,0</td>
<td className="text-center">470,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2,88</td>
<td className="text-center"><sup>(b)</sup></td>
<td className="text-center">594,9 <sup>(a)</sup></td>   </tr>   <tr>
<td className="text-center">2,0</td>
<td className="text-center">770,0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">1,45</td>
<td className="text-center">1190,0 <sup>(a)</sup></td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   </table>   <p><sup>(a)</sup>&nbsp;Solution satur&eacute;e<br />   <sup>(b)</sup>&nbsp;Donn&eacute;es non disponibles</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.3"></div>
<h4 id="sec2-5-3">2.5.3	Solutions aqueuses homog&egrave;nes de Pu(NO<sub>3</sub>)<sub>4</sub> contenant du <sup>240</sup>Pu</h4>  <p>La place faite &agrave; la concentration isotopique de <sup>240</sup>Pu dans le plutonium et &agrave; son contr&ocirc;le permet d&rsquo;&eacute;tablir des limites plus &eacute;lev&eacute;es pour les solutions de Pu(NO<sub>3</sub>)<sub>4</sub> que celles &eacute;num&eacute;r&eacute;es au tableau 2-1. En outre, lorsque le plutonium est m&eacute;lang&eacute; avec de l&rsquo;uranium naturel, les limites sont encore plus grandes. Les limites, dans le cas qui nous occupe, sont pr&eacute;cis&eacute;es &agrave; la section 8, intitul&eacute;e Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire et s&ucirc;ret&eacute; des m&eacute;langes de combustible de plutonium et d&rsquo;uranium hors r&eacute;acteurs. Cependant, la valeur de l&rsquo;augmentation d&eacute;pend de la concentration en <sup>241</sup>Pu.</p>  <p>Le tableau 2-7 pr&eacute;sente les limites pour les solutions aqueuses homog&egrave;nes de Pu(NO<sub>3</sub>)<sub>4</sub> en fonction de la composition isotopique. Tout le <sup>238</sup>Pu ou le <sup>242</sup>Pu pr&eacute;sent doit &ecirc;tre omis dans le calcul de la composition isotopique.</p>
<table className="width-100">  <caption className="text-left">Tableau 2-7 : Limites pour les solutions aqueuses homog&egrave;nes de Pu(NO<sub>3</sub>)<sub>4</sub> contenant du <sup>240</sup>Pu [15]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Param&egrave;tre</th>
<th colSpan="3" className="text-center">Limite de sous-criticit&eacute;</th>   </tr>   <tr>
<th>&ge;5 wt% en poids de<sup>240</sup>Pu<br />
&le;1 wt%  en poids de <sup>241</sup>Pu</th>
<th>&ge;15 wt% en poids de <sup>240</sup>Pu<br />
&le;6 wt% en poids de <sup>241</sup>Pu</th>
<th>&ge;26 wt% en poids de <sup>240</sup>Pu<br />
&le;15 wt% en poids de <sup>241</sup>Pu</th>   </tr>   <tr>
<td className="text-left">Masse, en kg Pu</td>
<td className="text-center">0,57</td>
<td className="text-center">0,78</td>
<td className="text-center">1,02</td>   </tr>   <tr>
<td className="text-left">Diam&egrave;tre du cylindre, en cm</td>
<td className="text-center">17,4</td>
<td className="text-center">19,5</td>
<td className="text-center">21,3</td>   </tr>   <tr>
<td className="text-left">&Eacute;paisseur de la plaque, en cm</td>
<td className="text-center">6,7</td>
<td className="text-center">8,0</td>
<td className="text-center">9,2</td>   </tr>   <tr>
<td className="text-left">Volume, en L</td>
<td className="text-center">10,0</td>
<td className="text-center">13,6</td>
<td className="text-center">17,2</td>   </tr>   <tr>
<td className="text-left">Concentration, en g de Pu/L</td>
<td className="text-center">7,8</td>
<td className="text-center">8,9</td>
<td className="text-center">10,2</td>   </tr>   <tr>
<td className="text-left">H/Pu, <sup>(a)</sup></td>
<td className="text-center">3 400</td>
<td className="text-center">2 980</td>
<td className="text-center">2 600</td>   </tr>   <tr>
<td className="text-left">Densit&eacute; surfacique, en g de Pu/cm<sup>2</sup></td>
<td className="text-center">0,28</td>
<td className="text-center">0,34</td>
<td className="text-center">0,4</td>   </tr>   </table>   <p><sup>(a)</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne au plutonium</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.4"></div>
<h4 id="sec2-5-4">2.5.4	M&eacute;langes aqueux de plutonium contenant du <sup>240</sup>Pu</h4>  <p>Les limites de la masse sous-critique pour le plutonium sous forme de PuO<sub>2</sub> dans des m&eacute;langes aqueux, qui pourraient &ecirc;tre non homog&egrave;nes, o&ugrave; le <sup>240</sup>Pu et le <sup>241</sup>Pu sont assujettis aux trois ensembles de restrictions relatives &agrave; la composition isotopique du tableau 2-7, sont, selon un ordre croissant de la concentration en <sup>240</sup>Pu, de 0,53, 0,74 et 0,99 kg, respectivement [15].</p>
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
<h2 id="sec3">3. Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.3-1997 (r&eacute;&eacute;dit&eacute;e en 2012), intitul&eacute;e <span lang="en"><em>Criticality Accident Alarm System</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec3-1">3.1 Introduction</h3>  <p>La section 2 du pr&eacute;sent guide donne une orientation pour pr&eacute;venir les accidents de criticit&eacute; lors de la manutention, du stockage, du traitement et du transport de mati&egrave;res fissiles. Dans la plupart des activit&eacute;s comportant des mati&egrave;res fissiles, le risque de criticit&eacute; atteinte par inadvertance est tr&egrave;s faible; cependant, ce risque ne peut &ecirc;tre &eacute;limin&eacute;. Lorsqu&rsquo;un accident de criticit&eacute; donne lieu &agrave; une dose de rayonnement excessive, il est important de disposer d&rsquo;un moyen d&rsquo;alerter le personnel et d&rsquo;une proc&eacute;dure d&rsquo;&eacute;vacuation rapide, ou d&rsquo;autres mesures de protection, afin de limiter l&rsquo;exposition au rayonnement.</p>
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
<h3 id="sec3-2">3.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section s&rsquo;applique &agrave; toutes les activit&eacute;s comportant des mati&egrave;res fissiles au cours desquelles la criticit&eacute; peut se produire par inadvertance et faire en sorte qu&rsquo;une dose de rayonnement excessive est re&ccedil;ue par le personnel.</p>  <p>Cette section ne s&rsquo;applique pas &agrave; la d&eacute;tection des &eacute;v&eacute;nements de criticit&eacute; au cours desquels aucune exposition excessive du personnel au rayonnement n&rsquo;est cr&eacute;dible, ni &agrave; des r&eacute;acteurs nucl&eacute;aires ou &agrave; des exp&eacute;riences de criticit&eacute;. Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation ne comprend pas de d&eacute;tail sur les mesures administratives ou sur l&rsquo;intervention en cas d&rsquo;urgence suivant l&rsquo;activation d&rsquo;alarme.</p>
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
<h3 id="sec3-3">3.3	Principes g&eacute;n&eacute;raux</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.1"></div>
<h4 id="sec3-3-1">3.3.1	G&eacute;n&eacute;ralit&eacute;s</h4>  <p>Le but d&rsquo;un syst&egrave;me d&rsquo;alarme est de r&eacute;duire le risque pour le personnel. L&rsquo;&eacute;valuation du risque global doit tenir compte du fait que les dangers peuvent r&eacute;sulter de fausses alarmes et de l&rsquo;interruption soudaine subs&eacute;quente des op&eacute;rations, et du d&eacute;placement du personnel.</p>  <p>Sous r&eacute;serve de l&rsquo;&eacute;valuation du risque global ci-dessus, un syst&egrave;me d&rsquo;alarme de criticit&eacute; respectant les exigences du pr&eacute;sent document  doit &ecirc;tre install&eacute; dans les lieux o&ugrave; :</p>
<ol>
<li>il peut y avoir une situation de criticit&eacute; par inadvertance</li>
<li>une exposition excessive du personnel au rayonnement est cr&eacute;dible, en cas de criticit&eacute; par inadvertance</li>
</ol>  <p>Lorsque des syst&egrave;mes d&rsquo;alarme sont install&eacute;s, des proc&eacute;dures d&rsquo;urgence doivent &ecirc;tre mises en place et maintenues &agrave; jour. Des directives relatives &agrave; la pr&eacute;paration des plans d&rsquo;urgence sont fournies &agrave; la section 16, <em>Planification et intervention d&rsquo;urgence en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</em>.</p>  <p>L&rsquo;&eacute;quipement de proc&eacute;d&eacute; utilis&eacute; dans les zones &agrave; &eacute;vacuer imm&eacute;diatement doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; ce que le fait de laisser l&rsquo;&eacute;quipement sur place ne constitue pas un risque important.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.2"></div>
<h4 id="sec3-3-2">3.3.2	Consid&eacute;rations</h4>  <h5 id="sec3-3-2-1">3.3.2.1	&Eacute;valuation des syst&egrave;mes d&rsquo;alarme de criticit&eacute;</h5>  <p>Compte tenu des exigences du point 1 de la liste de la section 3.3.1, on doit &eacute;valuer la n&eacute;cessit&eacute; de disposer de syst&egrave;mes d&rsquo;alarme de criticit&eacute; :</p>
<ol>
<li>pour toutes les activit&eacute;s mettant en cause du <sup>233</sup>U, <sup>235</sup>U et <sup>239</sup>Pu, au cours desquelles l&rsquo;inventaire de mati&egrave;res fissiles (contenant n&rsquo;importe lequel de ces trois isotopes) d&eacute;passe 500 g de <sup>233</sup>U, 700 g de <sup>235</sup>U, 450 g de <sup>239</sup>Pu, ou 450 g de n&rsquo;importe quelle combinaison de ces trois isotopes</li>
<li>pour toutes les activit&eacute;s avec des mati&egrave;res fissiles au cours desquelles des mod&eacute;rateurs ou des r&eacute;flecteurs de neutrons plus efficaces que l&rsquo;eau l&eacute;g&egrave;re sont pr&eacute;sents, ou qui comportent des configurations de mati&egrave;re unique, de telle sorte que les exigences relatives &agrave; la masse critique peuvent &ecirc;tre inf&eacute;rieures aux limites de masse sous-critique mentionn&eacute;es pr&eacute;c&eacute;demment</li>
<li>pour toutes les activit&eacute;s au cours desquelles l&rsquo;inventaire des mati&egrave;res fissiles d&eacute;passe 80 % de la masse critique appropri&eacute;e, si les limites de la masse sous critique mentionn&eacute;es pr&eacute;c&eacute;demment ne sont pas applicables, ou pas appropri&eacute;es</li>
</ol>  <p>Cette &eacute;valuation doit &ecirc;tre r&eacute;alis&eacute;e pour toutes les activit&eacute;s au cours desquelles l&rsquo;inventaire de mati&egrave;res fissiles dans des zones individuelles non li&eacute;es d&eacute;passe les limites de masse sous-critique mentionn&eacute;es pr&eacute;c&eacute;demment.</p>  <p>Pour cette &eacute;valuation, les zones individuelles peuvent &ecirc;tre consid&eacute;r&eacute;es non li&eacute;es lorsque les fronti&egrave;res entre les zones sont telles qu&rsquo;il ne peut pas y avoir de transfert de mati&egrave;res entre elles [9], que la s&eacute;paration minimale entre les mati&egrave;res dans des zones adjacentes est de 10 cm et que la densit&eacute; surfacique de la mati&egrave;re fissile pour chaque zone individuelle est en moyenne inf&eacute;rieure &agrave; 50 g/m<sup>2</sup>. Cette prescription s&rsquo;applique seulement aux isotopes <sup>233</sup>U, <sup>235</sup>U et <sup>239</sup>Pu.</p>
<h5 id="sec3-3-2-2">3.3.2.2	Installation de syst&egrave;mes d&rsquo;alarme de criticit&eacute;</h5>  <p>Un syst&egrave;me d&rsquo;alarme de criticit&eacute; respectant les exigences de cette section doit &ecirc;tre install&eacute; dans les zones o&ugrave; le personnel risque de recevoir une dose de rayonnement excessive. &Agrave; cette fin, le rendement de fission maximal int&eacute;gr&eacute; sur toute la dur&eacute;e de l&rsquo;accident peut &ecirc;tre pr&eacute;sum&eacute; ne pas d&eacute;passer 2,0 x 10<sup>19</sup> fissions. Le fondement pour un rendement de fission maximal diff&eacute;rent doit &ecirc;tre document&eacute;.</p>  <p>Si un accident de criticit&eacute; de magnitude moindre que l&rsquo;accident pr&eacute;occupant le moins grave indiqu&eacute; &agrave; la section 3.4.6 est en cause, alors d&rsquo;autres m&eacute;thodes de d&eacute;tection (p. ex. un dosim&egrave;tre sonore individuel) devraient &ecirc;tre consid&eacute;r&eacute;es. On ne consid&egrave;re pas ces autres m&eacute;thodes de d&eacute;tection comme des syst&egrave;mes d&rsquo;alarme de criticit&eacute; et elles ne sont donc pas vis&eacute;es par la section 3 de ce guide.</p>
<h5 id="sec3-3-2-3">3.3.2.3	D&eacute;tection des accidents de criticit&eacute;</h5>  <p>Dans les zones o&ugrave; un syst&egrave;me d&rsquo;alarme de criticit&eacute; est requis, un dispositif pour d&eacute;tecter les accidents de criticit&eacute; et les signaler doit &ecirc;tre en place de mani&egrave;re &agrave; ce que des mesures de protection soient rapidement appliqu&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.3"></div>
<h4 id="sec3-3-3">3.3.3	Alarme de criticit&eacute;</h4>  <p>Les signaux d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre utilis&eacute;s pour assurer une &eacute;vacuation rapide ou d&rsquo;autres mesures de protection. Les signaux d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre uniformes dans l&rsquo;ensemble du syst&egrave;me. Ces signaux doivent &ecirc;tre diff&eacute;rents des autres signaux ou alarmes qui n&eacute;cessitent une r&eacute;ponse diff&eacute;rente de la r&eacute;ponse n&eacute;cessaire en cas d&rsquo;accident de criticit&eacute;.</p>  <p>Le g&eacute;n&eacute;rateur de signaux doit &ecirc;tre d&eacute;clench&eacute; automatiquement et rapidement lors de la d&eacute;tection d&rsquo;un accident de criticit&eacute;.</p>  <p>Apr&egrave;s le d&eacute;clenchement, les g&eacute;n&eacute;rateurs de signaux doivent continuer &agrave; fonctionner au besoin, tel qu&rsquo;indiqu&eacute; par les proc&eacute;dures d&rsquo;urgence, m&ecirc;me si le rayonnement diminue en de&ccedil;&agrave; du point d&rsquo;alarme, et suffisamment longtemps pour que les personnes puissent atteindre les points de rassemblement apr&egrave;s &eacute;vacuation et appliquer les proc&eacute;dures de comptabilisation du personnel. Des syst&egrave;mes de r&eacute;initialisation manuels, &agrave; acc&egrave;s limit&eacute;, doivent &ecirc;tre en place &agrave; l&rsquo;ext&eacute;rieur des zones n&eacute;cessitant une &eacute;vacuation [8].</p>  <p>On peut pr&eacute;voir un moyen de d&eacute;clenchement manuel de l&rsquo;alarme de criticit&eacute;.</p>  <p>Dans toutes les zones occup&eacute;es o&ugrave; une mesure de protection du personnel est requise en cas de d&eacute;tection d&rsquo;accident de criticit&eacute;, le nombre et l&rsquo;emplacement des g&eacute;n&eacute;rateurs de signaux d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre tels que les signaux permettent d&rsquo;aviser rapidement le personnel de ces zones.</p>  <p>Les g&eacute;n&eacute;rateurs sonores devraient produire un niveau de pression acoustique global d&rsquo;au moins 75 dB, mais celui-ci ne doit pas se situer &agrave; moins de 10 dB au-dessus du niveau du bruit ambiant propre &agrave; chaque zone prot&eacute;g&eacute;e par le syst&egrave;me d&rsquo;avertissement sonore.</p>  <p>En raison du fait que les niveaux sonores excessifs peuvent &ecirc;tre nuisibles pour le personnel, les g&eacute;n&eacute;rateurs sonores ne doivent pas produire de niveaux sonores d&eacute;passant 115 dB, en pond&eacute;ration fr&eacute;quentielle A.</p>  <p>Dans les zones o&ugrave; les niveaux sonores ambiants sont tr&egrave;s &eacute;lev&eacute;s ou lorsque la protection de l&rsquo;ou&iuml;e est obligatoire, des signaux visuels ou d&rsquo;autres alarmes devraient &ecirc;tre envisag&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.4"></div>
<h4 id="sec3-3-4">3.3.4	Fiabilit&eacute;</h4>  <p>Les fausses alarmes doivent &ecirc;tre &eacute;vit&eacute;es autant que possible. On peut &eacute;viter cette situation en utilisant des d&eacute;tecteurs &agrave; canal unique fiables ou en se servant du signal de deux d&eacute;tecteurs ou plus pour initier l&rsquo;alarme.</p>  <p>Dans les syst&egrave;mes redondants, la d&eacute;faillance d&rsquo;un canal unique ne doit pas emp&ecirc;cher la conformit&eacute; aux crit&egrave;res de d&eacute;tection sp&eacute;cifi&eacute;s &agrave; la section 3.4.6.</p>  <p>On doit pr&eacute;voir un moyen de tester la r&eacute;ponse et le rendement du syst&egrave;me d&rsquo;alarme sans provoquer d&rsquo;&eacute;vacuation [8].</p>  <p>Des instruments portatifs peuvent &ecirc;tre utilis&eacute;s dans des cas sp&eacute;ciaux pour accro&icirc;tre la capacit&eacute; de d&eacute;tection du syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;. Par exemple, on peut utiliser ces instruments lors de l&rsquo;entretien ou des essais du syst&egrave;me d&rsquo;alarme, lors des exercices d&rsquo;&eacute;vacuation, lorsque des activit&eacute;s sont r&eacute;alis&eacute;es dans des zones qui ne sont pas habituellement occup&eacute;es par du personnel, ou lors d&rsquo;op&eacute;rations sp&eacute;ciales.</p>  <p>Lorsqu&rsquo;on utilise des instruments portatifs pour se conformer &agrave; la section 3 du pr&eacute;sent document d&rsquo;orientation, l&rsquo;utilisation doit &ecirc;tre &eacute;valu&eacute;e pour d&eacute;terminer si les crit&egrave;res appropri&eacute;s sont respect&eacute;s. Les crit&egrave;res relatifs &agrave; l&rsquo;utilisation des instruments portatifs doivent &ecirc;tre sp&eacute;cifi&eacute;s dans les proc&eacute;dures.</p>  <p>Les zones de proc&eacute;d&eacute; dans lesquelles des activit&eacute;s se poursuivront pendant les pannes d&rsquo;&eacute;lectricit&eacute; doivent &ecirc;tre dot&eacute;es d&rsquo;alimentation de secours pour ce qui est des syst&egrave;mes d&rsquo;alarme, ou encore ces activit&eacute;s doivent &ecirc;tre surveill&eacute;es de mani&egrave;re continue &agrave; l&rsquo;aide d&rsquo;instruments portatifs.</p>  <p>La sensibilit&eacute; ad&eacute;quate du syst&egrave;me d&rsquo;alarme en cas d&rsquo;accidents consid&eacute;r&eacute;s comme &eacute;tant les moins graves est examin&eacute;e &agrave; la section 3.4.7.</p>  <p>Les d&eacute;tecteurs soumis &agrave; un rayonnement intense d&eacute;passant 1000 Gy/h doivent pouvoir d&eacute;clencher une alarme. On peut d&eacute;montrer la conformit&eacute; &agrave; cette disposition par un essai de d&eacute;tecteur &eacute;chantillonn&eacute; ou en suivant les essais pr&eacute;cis&eacute;s par le fabricant pour des &eacute;chantillons de production [8].</p>
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
<h3 id="sec3-4">3.4	Crit&egrave;res de conception des syst&egrave;mes</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.1"></div>
<h4 id="sec3-4-1">3.4.1	Fiabilit&eacute;</h4>  <p>Le syst&egrave;me doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; faire preuve d&rsquo;une fiabilit&eacute; &eacute;lev&eacute;e et doit utiliser des composants qui ne n&eacute;cessitent pas d&rsquo;entretien fr&eacute;quent (comme de la lubrification ou un nettoyage).</p>  <p>Le syst&egrave;me devrait &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; r&eacute;duire au minimum les effets de la non utilisation, de la d&eacute;t&eacute;rioration, des pointes de puissance et d&rsquo;autres conditions nuisibles. La conception du syst&egrave;me devrait &ecirc;tre la plus simple possible tout en respectant les objectifs visant &agrave; s&rsquo;assurer que le d&eacute;clenchement du signal d&rsquo;alarme de criticit&eacute; est fiable et que les fausses alarmes sont &eacute;vit&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.2"></div>
<h4 id="sec3-4-2">3.4.2	Vuln&eacute;rabilit&eacute; du syst&egrave;me</h4>  <p>Tous les composants du syst&egrave;me devraient &ecirc;tre situ&eacute;s ou prot&eacute;g&eacute;s de mani&egrave;re &agrave; r&eacute;duire au minimum les dommages en cas d&rsquo;incendie, d&rsquo;explosion, d&rsquo;atmosph&egrave;re corrosive ou de conditions extr&ecirc;mes. Le syst&egrave;me devrait &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; r&eacute;duire au minimum le risque de d&eacute;faillance (y compris les fausses alarmes) d&ucirc; &agrave; l&rsquo;erreur humaine. Les principaux composants du syst&egrave;me devraient &ecirc;tre &eacute;tiquet&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.3"></div>
<h4 id="sec3-4-3">3.4.3	Tol&eacute;rance sismique</h4>  <p>Le syst&egrave;me devrait demeurer op&eacute;rationnel en cas de s&eacute;isme &eacute;quivalent au s&eacute;isme de r&eacute;f&eacute;rence propre au site, ou &agrave; la valeur &eacute;quivalente sp&eacute;cifi&eacute;e par le <em>Code national du b&acirc;timent &ndash; Canada</em> qui s&rsquo;applique &agrave; la structure.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.4"></div>
<h4 id="sec3-4-4">3.4.4	Alarme de type &laquo; panne &raquo;</h4>  <p>Le syst&egrave;me devrait comporter un signal d&rsquo;avertissement visuel ou sonore qui pourra &ecirc;tre observ&eacute; aux emplacements habituellement occup&eacute;s en cas de d&eacute;faillance du syst&egrave;me ou de perte d&rsquo;alimentation primaire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.5"></div>
<h4 id="sec3-4-5">3.4.5	Temps de r&eacute;ponse</h4>  <p>Le syst&egrave;me doit &ecirc;tre con&ccedil;u pour produire un signal d&rsquo;alarme de criticit&eacute; dans la demi-seconde (0,5 s) suivant la d&eacute;tection d&rsquo;un accident de criticit&eacute; par le d&eacute;tecteur.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.6"></div>
<h4 id="sec3-4-6">3.4.6	Crit&egrave;re de d&eacute;tection</h4>  <p>L&rsquo;une des consid&eacute;rations importantes dans la conception du syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute; est la d&eacute;finition de l&rsquo;&eacute;v&eacute;nement le moins grave pouvant &ecirc;tre d&eacute;tect&eacute;, appel&eacute; &laquo; accident pr&eacute;occupant le moins grave &raquo;.</p>  <p>Les syst&egrave;mes d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre con&ccedil;us de mani&egrave;re &agrave; r&eacute;pondre imm&eacute;diatement &agrave; l&rsquo;&laquo; accident pr&eacute;occupant le moins grave &raquo;. Dans les cas o&ugrave; on ne dispose que du blindage nominal, on devrait utiliser la d&eacute;finition de l&rsquo;&laquo; accident pr&eacute;occupant le moins grave &raquo; trouv&eacute;e dans le glossaire en fin de document. Toute r&eacute;f&eacute;rence &agrave; une autre d&eacute;finition devra &ecirc;tre document&eacute;e.</p>  <p>Le document LA-13638 [21] d&eacute;crit des accidents de criticit&eacute; nucl&eacute;aire qui se sont produits durant le traitement ou la manutention des mati&egrave;res fissionnables. L&rsquo;examen de ces &eacute;v&eacute;nements a permis de formuler la d&eacute;finition pour l&rsquo;&laquo; accident pr&eacute;occupant le moins grave &raquo; fournie dans le lexique.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.7"></div>
<h4 id="sec3-4-7">3.4.7	Sensibilit&eacute;</h4>  <p>Les syst&egrave;mes d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre con&ccedil;us de mani&egrave;re &agrave; ce que le d&eacute;clenchement de l&rsquo;alarme se produise lors de l&rsquo;&eacute;tat transitoire le plus court. On peut supposer que la dur&eacute;e minimale de l&rsquo;&eacute;mission de rayonnement lors d&rsquo;un &eacute;tat transitoire est d&rsquo;une milliseconde (1 ms).</p>  <p>Le seuil de d&eacute;clenchement de l&rsquo;alarme doit &ecirc;tre r&eacute;gl&eacute; &agrave; un niveau suffisamment bas pour d&eacute;tecter l&rsquo;accident pr&eacute;occupant le moins grave. Le seuil de d&eacute;clenchement de l&rsquo;alarme devrait &ecirc;tre &eacute;galement suffisamment &eacute;lev&eacute; pour r&eacute;duire au minimum le risque de d&eacute;clenchement de l&rsquo;alarme par des causes autres que la criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.8"></div>
<h4 id="sec3-4-8">3.4.8	Emplacement des d&eacute;tecteurs</h4>  <p>L&rsquo;espacement entre les d&eacute;tecteurs doit &ecirc;tre conforme au seuil de d&eacute;clenchement d&rsquo;alarme choisi et aux crit&egrave;res de d&eacute;tection.</p>  <p>L&rsquo;emplacement des d&eacute;tecteurs et l&rsquo;espacement entre eux devraient &ecirc;tre choisis de mani&egrave;re &agrave; r&eacute;duire au minimum l&rsquo;effet du blindage caus&eacute; par l&rsquo;&eacute;quipement ou les mat&eacute;riaux massifs. Le blindage assur&eacute; par les mat&eacute;riaux de construction &agrave; faible masse volumique, comme les armatures en bois, les murs int&eacute;rieurs minces, les briques creuses, etc., peut &ecirc;tre ignor&eacute;.</p>  <p>L&rsquo;annexe D donne quelques exemples d&rsquo;emplacements des d&eacute;tecteurs gamma et des d&eacute;tecteurs de neutrons.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.9"></div>
<h4 id="sec3-4-9">3.4.9	Verrouillage du syst&egrave;me de ventilation</h4>  <p>Le verrouillage du syst&egrave;me de ventilation devrait &ecirc;tre possible pour &eacute;viter les rejets de gaz de fission &agrave; l&rsquo;ext&eacute;rieur de la zone causant probl&egrave;me. On devrait s&rsquo;assurer que le fait de fermer la ventilation n&rsquo;entra&icirc;ne pas d&rsquo;autres risques sur le plan de la s&ucirc;ret&eacute;.</p>
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
<h3 id="sec3-5">3.5 Essais</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.1"></div>
<h4 id="sec3-5-1">3.5.1	Essais initiaux</h4>  <p>Des essais initiaux, des inspections et des v&eacute;rifications du syst&egrave;me doivent permettre de s&rsquo;assurer que la fabrication et l&rsquo;installation ont &eacute;t&eacute; r&eacute;alis&eacute;es conform&eacute;ment au plan et aux sp&eacute;cifications de conception.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.2"></div>
<h4 id="sec3-5-2">3.5.2	Essais sp&eacute;ciaux</h4>  <p>&Agrave; la suite de modifications ou de r&eacute;parations, ou encore d&rsquo;&eacute;v&eacute;nements remettant en question le rendement du syst&egrave;me, il doit y avoir des essais et des inspections pertinents pour d&eacute;montrer que le syst&egrave;me fonctionne correctement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.3"></div>
<h4 id="sec3-5-3">3.5.3	R&eacute;ponse au rayonnement</h4>  <p>La r&eacute;ponse du syst&egrave;me au rayonnement doit &ecirc;tre mesur&eacute;e p&eacute;riodiquement pour confirmer le rendement continu de l&rsquo;instrument. L&rsquo;intervalle entre les essais doit &ecirc;tre d&eacute;termin&eacute; d&rsquo;apr&egrave;s l&rsquo;exp&eacute;rience. En l&rsquo;absence d&rsquo;exp&eacute;rience, les essais devraient &ecirc;tre effectu&eacute;s au moins une fois par mois.</p>  <p>Des registres des essais doivent &ecirc;tre conserv&eacute;s. La conception du syst&egrave;me peut int&eacute;grer des caract&eacute;ristiques d&rsquo;autov&eacute;rification afin d&rsquo;automatiser des parties de ces essais.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.4"></div>
<h4 id="sec3-5-4">3.5.4	Essais p&eacute;riodiques</h4>  <p>Le syst&egrave;me d&rsquo;alarme complet doit &ecirc;tre test&eacute; p&eacute;riodiquement. Chaque g&eacute;n&eacute;rateur de signaux doit &ecirc;tre test&eacute; au moins une fois par ann&eacute;e. Des observations sur le terrain doivent &eacute;tablir si les signaux d&rsquo;alarme de criticit&eacute; fonctionnent bien dans toutes les zones o&ugrave; le personnel pourrait recevoir une dose de rayonnement excessive. Tout le personnel des zones concern&eacute;es doit &ecirc;tre avis&eacute; avant les essais des signaux d&rsquo;alarme de criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.5"></div>
<h4 id="sec3-5-5">3.5.5	Mesures correctives</h4>  <p>Lorsque des essais r&eacute;v&egrave;lent un rendement inad&eacute;quat, des mesures correctives doivent &ecirc;tre prises le plus rapidement possible. Si l&rsquo;on utilise des instruments portatifs, il faut respecter les crit&egrave;res de la section 3.3.4.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.6"></div>
<h4 id="sec3-5-6">3.5.6	Proc&eacute;dures d&rsquo;essai</h4>  <p>Les proc&eacute;dures d&rsquo;essai du syst&egrave;me doivent permettre de r&eacute;duire au minimum le taux de fausses alarmes et de d&eacute;clenchement intempestif des mesures d&rsquo;urgence. Les proc&eacute;dures doivent exiger que les syst&egrave;mes soient ramen&eacute;s &agrave; un fonctionnement normal imm&eacute;diatement apr&egrave;s les essais.</p>  <p>La norme CEI 60860, <em>Instrumentation pour la radioprotection &ndash; &Eacute;quipement de signalisation des accidents de criticit&eacute;</em> [10], contient des renseignements utiles concernant les caract&eacute;ristiques &eacute;lectriques et les proc&eacute;dures d&rsquo;essai de l&rsquo;&eacute;quipement d&rsquo;alarme. Cette norme peut &ecirc;tre utilis&eacute;e comme guide dans ce domaine.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.7"></div>
<h4 id="sec3-5-7">3.5.7	Registres</h4>  <p>Des registres des essais et des mesures correctives pour chaque syst&egrave;me doivent &ecirc;tre conserv&eacute;s. Ces registres fournissent de l&rsquo;information sur le fonctionnement du syst&egrave;me et permettent d&rsquo;identifier les sources de d&eacute;faillance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.8"></div>
<h4 id="sec3-5-8">3.5.8	Hors d&rsquo;usage</h4>  <p>Le titulaire de permis doit &eacute;laborer et mettre en &oelig;uvre des crit&egrave;res relatifs &agrave; la mise hors d&rsquo;usage du syst&egrave;me d&rsquo;alarme de criticit&eacute; nucl&eacute;aire.</p>  <p>Si le syst&egrave;me est retir&eacute; du service en raison d&rsquo;un probl&egrave;me impr&eacute;vu, le titulaire de permis doit en informer imm&eacute;diatement la CCSN en pr&eacute;cisant la cause du retrait et sa dur&eacute;e pr&eacute;vue.</p>  <p>Si un syst&egrave;me d&rsquo;alarme de secours ad&eacute;quat, tel que d&eacute;crit &agrave; la section 3.3.4, est utilis&eacute; durant les situations impr&eacute;vues et si le syst&egrave;me est remis en service &agrave; l&rsquo;int&eacute;rieur de l&rsquo;&eacute;ch&eacute;ancier sp&eacute;cifi&eacute; dans les crit&egrave;res sur la mise hors d&rsquo;usage, il est acceptable de continuer les op&eacute;rations &agrave; l&rsquo;int&eacute;rieur de l&rsquo;installation.</p>
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
<h3 id="sec3-6">3.6	Familiarisation des employ&eacute;s</h3>
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
<h4 id="sec3-6-1">3.6.1	Instructions affich&eacute;es</h4>  <p>Des instructions &agrave; l&rsquo;intention des employ&eacute;s concernant la r&eacute;ponse aux signaux d&rsquo;alarme de criticit&eacute; doivent &ecirc;tre affich&eacute;es &agrave; des endroits strat&eacute;giques dans les zones vis&eacute;es par l&rsquo;alarme.</p>
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
<h4 id="sec3-6-2">3.6.2	Formation et exercices d&rsquo;alerte de criticit&eacute;</h4>  <p>Des directives relatives &agrave; la formation des employ&eacute;s et des visiteurs, ainsi que des conseils sur la r&eacute;alisation des exercices d&rsquo;alerte de criticit&eacute; sont fournies &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
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
<h2 id="sec4">4. Utilisation d&rsquo;anneaux de Raschig en verre borosilicate comme d&rsquo;absorbeurs de neutrons dans des solutions de mati&egrave;re fissile</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.5-1996 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec4-1">4.1 Introduction</h3>  <p>Les anneaux de Raschig sont utilis&eacute;s dans des colonnes et des r&eacute;servoirs contenant des solutions de mati&egrave;re fissile et agissent comme absorbeurs de neutron, ce qui permet d&rsquo;&eacute;viter des accidents de criticit&eacute;.</p>
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
<h3 id="sec4-2">4.2 Port&eacute;e</h3>  <p>La section 4 fournit des directives concernant l&rsquo;utilisation des anneaux de Raschig en verre borosilicate &agrave; titre d&rsquo;absorbeurs de neutrons pour le contr&ocirc;le de la criticit&eacute; dans des colonnes garnies contenant des solutions de <sup>235</sup>U, <sup>239</sup>Pu ou <sup>233</sup>U. Le milieu chimique et physique, les propri&eacute;t&eacute;s des anneaux et des colonnes garnies, les proc&eacute;dures d&rsquo;entretien et d&rsquo;inspection et les lignes directrices pour le fonctionnement sont sp&eacute;cifi&eacute;s.</p>
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
<h3 id="sec4-3">4.3	Exigences g&eacute;n&eacute;rales</h3>  <p>Le r&ocirc;le des anneaux de Raschig dans les applications de s&ucirc;ret&eacute;-criticit&eacute; est d&rsquo;assurer la sous criticit&eacute; dans des conditions normales et anormales cr&eacute;dibles pendant la dur&eacute;e de vie d&rsquo;une colonne. Les exigences g&eacute;n&eacute;rales pour l&rsquo;utilisation des anneaux de Raschig &agrave; des fins de contr&ocirc;le de la criticit&eacute; sont :</p>
<ol>
<li>les crit&egrave;res de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire de la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, doivent &ecirc;tre appliqu&eacute;s</li>
<li>les propri&eacute;t&eacute;s physiques et chimiques des anneaux de Raschig sp&eacute;cifi&eacute;s dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation doivent &ecirc;tre v&eacute;rifi&eacute;es avant leur utilisation initiale dans le contr&ocirc;le de la criticit&eacute;</li>
<li>&agrave; la suite de leur utilisation initiale, une v&eacute;rification p&eacute;riodique doit permettre de s&rsquo;assurer que toutes les propri&eacute;t&eacute;s physiques et chimiques des anneaux de Raschig sont maintenues</li>
<li>l&rsquo;importance et la fr&eacute;quence de la v&eacute;rification des propri&eacute;t&eacute;s physiques et chimiques peuvent &ecirc;tre d&eacute;termin&eacute;es &agrave; partir d&rsquo;un historique document&eacute; des tendances des propri&eacute;t&eacute;s propres aux anneaux de Raschig, dans le milieu particulier o&ugrave; ils sont utilis&eacute;s; autrement, les fr&eacute;quences sp&eacute;cifi&eacute;es &agrave; la section 4.7.4 doivent s&rsquo;appliquer en tout temps</li>
<li>les m&eacute;thodes de mesure des propri&eacute;t&eacute;s des anneaux de Raschig doivent &ecirc;tre document&eacute;es et examin&eacute;es par du personnel qualifi&eacute; afin de d&eacute;terminer leur applicabilit&eacute; et leur validit&eacute; technique</li>
<li>les anneaux de Raschig doivent &ecirc;tre compatibles avec le milieu chimique et les conditions physiques des solutions dans lesquelles ils seront immerg&eacute;s</li>
<li>l&rsquo;utilisation d&rsquo;anneaux de Raschig dans des applications de s&ucirc;ret&eacute;-criticit&eacute; autres que celles vis&eacute;es par le pr&eacute;sent document d&rsquo;orientation devrait &ecirc;tre &eacute;valu&eacute;e au cas par cas</li>
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
<div id="4.3.1"></div>
<h4 id="sec4-3-1">4.3.1	Environnement physique</h4>  <h5 id="sec4-3-1-1">4.3.1.1	Environnement m&eacute;canique</h5>  <p>Les anneaux de Raschig ne doivent pas &ecirc;tre utilis&eacute;s dans des applications o&ugrave; il risque d&rsquo;y avoir agitation ou mouvement des anneaux pouvant les endommager suffisamment pour compromettre leur efficacit&eacute; dans le contr&ocirc;le de la criticit&eacute;. Les applications qui pr&eacute;sentent ce genre de risque comprennent, sans toutefois s&rsquo;y limiter, les &eacute;vaporateurs, les appareils portatives, les colonnes puls&eacute;es et les appareils &eacute;quip&eacute;es pour le barbotage [22].</p>
<h5 id="sec4-3-1-2">4.3.1.2	Environnement radioactif</h5>  <p>Les anneaux de Raschig ne doivent pas &ecirc;tre utilis&eacute;s dans les champs de rayonnement ionisants intenses. Les d&eacute;bits de doses maximum pond&eacute;r&eacute;s en fonction du temps et re&ccedil;us par les anneaux doivent &ecirc;tre limit&eacute;s aux valeurs suivantes [22] :</p>
<ol>
<li>Rayonnement gamma : 10<sup>6</sup> Gy/an</li>
<li>rayonnement b&ecirc;ta (&eacute;nergie &le;0,05 MeV): 10<sup>7</sup> Gy/an</li>
<li>rayonnement b&ecirc;ta (&eacute;nergie &gt; 0,05 MeV): 10<sup>6</sup> Gy/an
<li>rayonnement neutronique : 500 Gy/an
<li>rayonnement alpha : d&eacute;bit de dose absorb&eacute; dans le verre &eacute;quivalent &agrave; celui re&ccedil;u par une source de solution homog&egrave;ne g&eacute;n&eacute;rant 2 watts par litre de puissance totale due aux particules alpha</li>
</li>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.2"></div>
<h4 id="sec4-3-2">4.3.2	Environnement chimique</h4>  <h5 id="sec4-3-2-1">4.3.2.1	Milieu presque neutre</h5>  <p>L&rsquo;eau ordinaire et d&rsquo;autres solutions presque neutres qui ne d&eacute;passent pas les concentrations d&rsquo;ions fluorure libres et d&rsquo;ions phosphate sp&eacute;cifi&eacute;es &agrave; la section 4.3.2.2, points 3 et 4, sont des milieux chimiques acceptables pour les anneaux de Raschig, m&ecirc;me si leur pH est l&eacute;g&egrave;rement sup&eacute;rieur &agrave; 7,0.</p>
<h5 id="sec4-3-2-2">4.3.2.2	Milieu acide</h5>  <p>La solution en contact avec les anneaux de verre doit respecter les conditions suivantes :</p>
<ol>
<li>le pH est inf&eacute;rieur ou &eacute;gal &agrave; 7,0, sauf dans les cas pr&eacute;cis&eacute;s &agrave; la section 4.3.2.1</li>
<li>la temp&eacute;rature ne d&eacute;passe pas 120&deg;C</li>
<li>la concentration en ions fluorure libres ne d&eacute;passe pas la concentration molaire de 0,0001, &agrave; moins qu&rsquo;il y ait compatibilit&eacute; avec cette concentration, conform&eacute;ment aux sections 4.4.4 et 4.7.4 du pr&eacute;sent guide</li>
<li>la concentration en ions phosphate ne d&eacute;passe pas une concentration molaire de 1</li>
</ol>  <p>En tenant compte de ces restrictions, les milieux chimiques acceptables comprennent les solutions de sels d&rsquo;acide organique ou inorganique, les hydrocarbures, et les solutions comportant des agents ch&eacute;lateurs ou des agents complexants contenus dans des hydrocarbures. Les r&eacute;sultats des essais de corrosion sur les anneaux de Raschig en verre borosilicate qui appuient ces exigences figurent dans la documentation [22, 23].</p>
<h5 id="sec4-3-2-3">4.3.2.3	Milieu basique</h5>  <p>Les anneaux de Raschig ne doivent pas &ecirc;tre utilis&eacute;s pour le contr&ocirc;le de la criticit&eacute; dans des solutions basiques, &agrave; moins que les limites chimiques et physiques pour cette application aient &eacute;t&eacute; d&eacute;termin&eacute;es et document&eacute;es. Si des anneaux sont utilis&eacute;s &agrave; cette fin, la fr&eacute;quence des inspections doit &ecirc;tre d&eacute;termin&eacute;e &agrave; partir d&rsquo;une analyse des tendances, afin de s&rsquo;assurer que les exigences du pr&eacute;sent document sont respect&eacute;es. Les &eacute;tudes portant sur la corrosion du verre au borosilicate dans des milieux basiques figurent dans la documentation [23].</p>
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
<h3 id="sec4-4">4.4	Sp&eacute;cifications des anneaux</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.1"></div>
<h4 id="sec4-4-1">4.4.1 Composition</h4>  <h5 id="sec4-4-1-1">4.4.1.1	Type de verre</h5>  <p>La composition normale du verre utilis&eacute; pour les anneaux de Raschig doit &ecirc;tre du verre de type I, de classe A, tel que sp&eacute;cifi&eacute; dans la norme <span lang="en"><em>Standard Specification for Glasses in Laboratory Apparatus</em></span>, ASTM E 438-1992 [24].</p>
<h5 id="sec4-4-1-2">4.4.1.2	Masse volumique du verre</h5>  <p>La masse volumique du verre employ&eacute;e pour les anneaux de Raschig ne doit pas &ecirc;tre inf&eacute;rieure &agrave; 2,22 mg/mm<sup>3</sup> &agrave; 25&deg;C.</p>
<h5 id="sec4-4-1-3">4.4.1.3	Teneur en <sup>10</sup>B du verre</h5>  <p>La teneur en <sup>10</sup>B du verre employ&eacute; pour les anneaux de Raschig ne doit pas &ecirc;tre inf&eacute;rieure &agrave; 0,655 % du poids total du verre. Cette teneur isotopique peut &ecirc;tre d&eacute;termin&eacute;e directement, ou obtenue &agrave; partir des mesures suivantes :</p>
<ol>
<li>mesure du bore &eacute;l&eacute;mentaire et du rapport <sup>10</sup>B/<sup>11</sup>B</li>
<li>mesure de la teneur en oxyde de bore, du rapport <sup>10</sup>B/<sup>11</sup>B et d&eacute;termination du rapport bore/oxyg&egrave;ne de l&rsquo;oxyde</li>
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
<div id="4.4.2"></div>
<h4 id="sec4-4-2">4.4.2	Diam&egrave;tre de l&rsquo;anneau</h4>  <p>Chaque anneau de Raschig doit avoir un diam&egrave;tre ext&eacute;rieur moyen ne d&eacute;passant pas 38 mm (1,5 po), sauf aux extr&eacute;mit&eacute;s, o&ugrave; un diam&egrave;tre l&eacute;g&egrave;rement plus grand, comme ce qui peut &ecirc;tre obtenu par polissage &agrave; la flamme, est acceptable [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.3"></div>
<h4 id="sec4-4-3">4.4.3	Fini de surface</h4>  <p>Tous les finis de surfaces des anneaux de Raschig doivent &ecirc;tre lisses et exemptes de bords tranchants.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.4"></div>
<h4 id="sec4-4-4">4.4.4	Essais chimiques</h4>  <p>Les essais chimiques appliqu&eacute;s aux anneaux de Raschig et les crit&egrave;res d&rsquo;acceptation de ces essais doivent &ecirc;tre &eacute;tablis, document&eacute;s et examin&eacute;s par du personnel qualifi&eacute;. Ces essais doivent &ecirc;tre effectu&eacute;s sur les anneaux, afin de d&eacute;montrer leur compatibilit&eacute; dans des conditions normales et anormales cr&eacute;dibles de service (p. ex. exposition &agrave; l&rsquo;acide nitrique, &agrave; l&rsquo;hydroxyde de sodium et au fluorure d&rsquo;hydrog&egrave;ne).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.5"></div>
<h4 id="sec4-4-5">4.4.5	Essais m&eacute;caniques</h4>  <p>Les anneaux de Raschig doivent &ecirc;tre soumis &agrave; des essais m&eacute;caniques con&ccedil;us pour &eacute;valuer l&rsquo;int&eacute;grit&eacute; du verre. Ces essais doivent permettre de d&eacute;montrer que les anneaux demeureront intacts en service, dans les conditions normales et anormales cr&eacute;dibles pr&eacute;vues. Si leur utilisation est statique de fa&ccedil;on g&eacute;n&eacute;rale, et si le liquide s&rsquo;&eacute;coule ais&eacute;ment &agrave; l&rsquo;int&eacute;rieur et vers l&rsquo;ext&eacute;rieur de l&rsquo;appareil sans mouvement dynamique entre les anneaux, les essais m&eacute;caniques permettront de confirmer &agrave; tout le moins que le verre peut supporter la charge statique. Si l&rsquo;utilisation pr&eacute;voit une agitation vigoureuse qui pourrait briser le verre suite au mouvement, les essais m&eacute;caniques doivent permettre de confirmer que les anneaux peuvent supporter les forces dynamiques sans se briser.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5"></div>
<h3 id="sec4-5">4.5	Sp&eacute;cifications des colonnes garnies</h3>  <p>Les colonnes destin&eacute;es &agrave; contenir des anneaux de Raschig doivent &ecirc;tre con&ccedil;ues et fabriqu&eacute;es de mani&egrave;re &agrave; faciliter les activit&eacute;s suivantes :</p>
<ol>
<li>l&rsquo;addition et l&rsquo;enl&egrave;vement de solution</li>
<li>l&rsquo;ajout et le retrait d&rsquo;anneaux de Raschig</li>
<li>l&rsquo;enl&egrave;vement et le remplacement d&rsquo;&eacute;chantillons repr&eacute;sentatifs de la solution et des anneaux &agrave; des fins d&rsquo;essai</li>
<li>la mesure du volume de solution</li>
<li>la v&eacute;rification du niveau des anneaux garnissant la colonne</li>
<li>le nettoyage de la colonne et des anneaux</li>
</ol>  <p>Les conduites pr&eacute;vues pour l&rsquo;enl&egrave;vement de la solution doivent &ecirc;tre con&ccedil;ues et install&eacute;es de mani&egrave;re &agrave; &eacute;viter l&rsquo;enl&egrave;vement des pi&egrave;ces de verre avec la solution (p. ex. &eacute;cran par-dessus la conduite d&rsquo;&eacute;vacuation).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.1"></div>
<h4 id="sec4-5-1">4.5.1	Installation des anneaux</h4>  <p>Toutes les parties de la colonne doivent &ecirc;tre remplies d&rsquo;anneaux bien &laquo; tass&eacute;s &raquo; (c.-&agrave;-d. que les anneaux ont &eacute;t&eacute; manipul&eacute;s avec soin pendant le chargement, de mani&egrave;re &agrave; ce qu&rsquo;ils ne bougent pas davantage pendant l&rsquo;utilisation).</p>  <p>Des anneaux plac&eacute;s &agrave; la main avec soin pr&eacute;senteront une fraction de volume de verre plus grande que s&rsquo;ils avaient &eacute;t&eacute; plac&eacute;s de mani&egrave;re al&eacute;atoire; cependant, les deux possibilit&eacute;s sont permises. On devrait avoir recours &agrave; une proc&eacute;dure d&rsquo;installation et de compactage qui minimise les bris, favorise le tassement et r&eacute;duit au minimum les vides.</p>  <p>La mise en place initiale d&rsquo;anneaux dans un appareil peut utiliser des anneaux non marqu&eacute;s qui satisfont aux exigences du pr&eacute;sent document. Cependant, si des anneaux sont ajout&eacute;s &agrave; la charge initiale (pour compenser le tassement ou pour remplacer des anneaux enlev&eacute;s &agrave; des fins d&rsquo;analyse), les anneaux ajout&eacute;s doivent &ecirc;tre identifi&eacute;s de mani&egrave;re permanente afin d&rsquo;&eacute;viter qu&rsquo;ils soient utilis&eacute;s comme faisant partie de la charge initiale.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.2"></div>
<h4 id="sec4-5-2">4.5.2	Parties de la colonne exempt&eacute;e d&rsquo;anneaux</h4>  <p>Les colonnes garnies d&rsquo;anneaux peuvent comporter des espaces libres d&rsquo;anneaux de Raschig (en contradiction apparente avec la section 4.5.1), en autant que chaque zone exempte d&rsquo;anneau poss&egrave;de un diam&egrave;tre ext&eacute;rieur inf&eacute;rieur &agrave; 64 mm (2,5 po). Ces espaces peuvent contenir des conduites imbriqu&eacute;es dans une partie qui serait autrement garnie d&rsquo;anneaux bien tass&eacute;s. L&rsquo;espacement bout &agrave; bout entre chaque r&eacute;gion exempte d&rsquo;anneau doit &ecirc;tre d&rsquo;au moins 305 mm (12 po). La r&eacute;gion exempte d&rsquo;anneau peut &ecirc;tre occup&eacute;e par une conduite unique ou par un ensemble de conduites, en autant que cet ensemble poss&egrave;de lui aussi un diam&egrave;tre ext&eacute;rieur inf&eacute;rieur &agrave; 64 mm (2,5 po). Ces r&eacute;gions peuvent avoir diff&eacute;rentes utilit&eacute;s (p. ex. une conduite perfor&eacute;e servant &agrave; contenir un ensemble d&rsquo;anneaux de Raschig de contr&ocirc;le) [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.3"></div>
<h4 id="sec4-5-3">4.5.3	D&eacute;termination du niveau des anneaux</h4>  <p>La partie sup&eacute;rieure des anneaux de Raschig &agrave; l&rsquo;int&eacute;rieur d&rsquo;une colonne doit &ecirc;tre inspect&eacute;e p&eacute;riodiquement dans le but de d&eacute;tecter le tassement au fil du temps et de l&rsquo;utilisation. Cette inspection peut &ecirc;tre visuelle ou non (p. ex. radiographie). Si une m&eacute;thode visuelle est utilis&eacute;e pour inspecter le niveau des anneaux, un nombre suffisant d&rsquo;ouvertures ou de verres de contr&ocirc;le doit &ecirc;tre disponible pour permettre l&rsquo;inspection de toute la surface sup&eacute;rieure. Voir la 4.7.1 pour la restauration du volume d&rsquo;anneau s&rsquo;il y a tassement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.4"></div>
<h4 id="sec4-5-4">4.5.4	D&eacute;termination de la fraction du volume de verre</h4>  <p>La fraction du volume de verre doit &ecirc;tre d&eacute;termin&eacute;e chaque fois que de nouveaux anneaux sont install&eacute;s dans la colonne. Cela s&rsquo;applique soit au remplacement total des anneaux ou &agrave; l&rsquo;ajout de quelques anneaux pour compenser le tassement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.5"></div>
<h4 id="sec4-5-5">4.5.5	Volume admissible de solution dans une colonne garnie d&rsquo;anneaux</h4>  <p>Le niveau de solution ne doit pas d&eacute;passer le niveau des anneaux garnissant uniform&eacute;ment la colonne. Une m&eacute;thode visant &agrave; d&eacute;terminer cette condition doit &ecirc;tre en place m&ecirc;me si les anneaux se tassent au fil du temps ou de l&rsquo;utilisation, afin d&rsquo;&eacute;viter qu&rsquo;il y ait accumulation de solution dans une r&eacute;gion exempte d&rsquo;anneau. Cette protection peut &ecirc;tre assur&eacute;e par l&rsquo;un des moyens suivants :</p>
<ol>
<li>des inspections r&eacute;alis&eacute;es &agrave; une fr&eacute;quence ad&eacute;quate pour identifier le tassement inacceptable d&rsquo;une inspection &agrave; l&rsquo;autre (voir section 4.7.1)</li>
<li>un tube de trop-plein qui limite le niveau du liquide dans la colonne ou</li>
<li>des proc&eacute;dures de fonctionnement qui limitent le niveau de liquide dans la colonne, en autant que cette derni&egrave;re soit &eacute;quip&eacute;e d&rsquo;un indicateur de niveau de liquide accompagn&eacute; d&rsquo;un syst&egrave;me d&rsquo;alarme appropri&eacute;</li>
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
<div id="4.6"></div>
<h3 id="sec4-6">4.6	Concentrations maximales sp&eacute;cifi&eacute;es pour les solutions fissiles</h3>  <p>Les anneaux de Raschig s&rsquo;entassent de diff&eacute;rentes mani&egrave;res dans les colonnes, ce qui donne lieu &agrave; de l&eacute;gers &eacute;carts dans la fraction de volume de verre r&eacute;sultante &agrave; l&rsquo;int&eacute;rieur de la colonne. Le tableau 4-1 donne la concentration maximale admissible en isotope fissile pour des solutions contenant de l&rsquo;uranium et du plutonium contenues dans des colonnes de taille illimit&eacute;e remplies d&rsquo;anneaux de Raschig en verre borosilicate qui respectent les exigences du pr&eacute;sent document [22, 25].</p>  <p><strong>Remarque :</strong> Le tableau 4-1 ne doit pas &ecirc;tre utilis&eacute; pour les m&eacute;langes d&rsquo;uranium et de plutonium en solution. La contamination d&rsquo;un &eacute;l&eacute;ment par l&rsquo;autre &agrave; un faible niveau est admissible. La d&eacute;finition du faible niveau de contamination doit &ecirc;tre justifi&eacute;e et document&eacute;e. Les solutions indiqu&eacute;es dans le tableau doivent avoir une masse volumique en hydrog&egrave;ne qui n&rsquo;est pas inf&eacute;rieure &agrave; 75 g de H par litre et qui ne d&eacute;passe pas 115 g de H par litre.</p>
<table className="width-100">  <caption className="text-left">Tableau 4-1 : Concentrations<sup>1</sup> maximales admissibles de solutions<sup>2</sup> de mati&egrave;res fissiles dans des colonnes garnies d&rsquo;un nombre illimit&eacute; d&rsquo;anneaux de Raschig en verre borosilicate [ANSI/ANS-8.5]</caption>   <tr>
<th rowspan="4" className="text-center">Fraction du volume de verre dans la colonne</th>
<th colSpan="5" className="text-center">Composition isotopique en pourcentage en poids</th>   </tr>   <tr>
<th colSpan="3" className="text-center">Uranium<sup>3</sup></th>
<th colSpan="2" className="text-center">Plutonium</th>   </tr>   <tr>
<th rowspan="2"><sup>235</sup>U est inf&eacute;rieur ou &eacute;gal &agrave; 5<br />
<strong>et</strong><br />
<sup>233</sup>U est inf&eacute;rieur ou &eacute;gal &agrave; 0,01</th>
<th rowspan="2"><sup>235</sup>U est inf&eacute;rieur ou &eacute;gal &agrave; 100<br />
<strong>et</strong><br />
<sup>233</sup>U est inf&eacute;rieur ou &eacute;gal &agrave; 1</th>
<th rowspan="2"><sup>235</sup>U est inf&eacute;rieur ou &eacute;gal &agrave; 99<br />
<strong>et</strong><br />
<sup>233</sup>U est sup&eacute;rieur &agrave; 1</th>
<th colSpan="2"><sup>239</sup>Pu est pr&eacute;sent en n&rsquo;importe quelle quantit&eacute;<br />
<strong>et</strong><br />
<sup>241</sup>Pu est pr&eacute;sent en quantit&eacute; moindre que le <sup>240</sup>Pu,<br />
<strong>et</strong><br />
<sup>241</sup>Pu est inf&eacute;rieur ou &eacute;gal &agrave; 15</th>   </tr>   <tr>
<th><sup>240</sup>Pu est inf&eacute;rieur ou &eacute;gal &agrave; 5</th>
<th><sup>240</sup>Pu est sup&eacute;rieur &agrave; 5</th>   </tr>   <tr>
<td className="text-center">24%</td>
<td className="text-center">non limit&eacute;</td>
<td className="text-center">270 g/L</td>
<td className="text-center">150 g/L</td>
<td className="text-center">115 g/L</td>
<td className="text-center">140 g/L</td>   </tr>   <tr>
<td className="text-center">28%</td>
<td className="text-center">non limit&eacute;</td>
<td className="text-center">330 g/L</td>
<td className="text-center">180 g/L</td>
<td className="text-center">140 g/L</td>
<td className="text-center">170 g/L</td>   </tr>   <tr>
<td className="text-center">32%</td>
<td className="text-center">non limit&eacute;</td>
<td className="text-center">400 g/L</td>
<td className="text-center">200 g/L</td>
<td className="text-center">180 g/L</td>
<td className="text-center">220 g/L</td>   </tr>   </table>  <p><sup>1</sup>&nbsp;L&rsquo;interpolation entre ces points de donn&eacute;es est permise.<br />
<sup>2</sup>&nbsp;Toute mati&egrave;re fissile d&eacute;pos&eacute;e sous forme de solides ou de pr&eacute;cipit&eacute;s ou de mati&egrave;res en suspension dans le liquide doit &ecirc;tre incluse dans le calcul de la concentration de &laquo; solution &raquo;.<br />
<sup>3</sup>&nbsp;Voir la section 4.6 pour une description g&eacute;n&eacute;rale de l&rsquo;applicabilit&eacute; de ces trois colonnes.</p>
<p>Les trois colonnes sous la mention &laquo; Uranium &raquo; se rapportent &agrave; des solutions g&eacute;n&eacute;ralement caract&eacute;ris&eacute;es par un enrichissement en uranium, comme suit :</p>
<ol>
<li>la colonne de gauche se rapporte aux solutions faiblement enrichies dans les deux isotopes</li>
<li>la colonne du centre se rapporte aux solutions de <sup>235</sup>U nominales, avec une faible contamination par le <sup>233</sup>U</li>
<li>la colonne de droite se rapporte aux solutions de <sup>233</sup>U nominales</li>
</ol>  <p>Lorsque les combinaisons d&rsquo;isotopes se rattachent &agrave; plus d&rsquo;une cat&eacute;gorie, la limite de concentration de n&rsquo;importe quelle colonne peut &ecirc;tre appliqu&eacute;e. Dans tous les cas, une faible contamination par le plutonium est admise. La d&eacute;finition du faible niveau de contamination doit &ecirc;tre justifi&eacute;e et document&eacute;e. La plage d&rsquo;isotopes indiqu&eacute;e en haut de chaque colonne d&eacute;finit les compositions en actinides admises pour les concentrations indiqu&eacute;es. L&rsquo;interpolation graphique entre les fractions de volume de verre figurant dans le tableau est admise.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7"></div>
<h3 id="sec4-7">4.7	Inspection pour entretien</h3>  <p>Les anneaux de Raschig doivent &ecirc;tre inspect&eacute;s p&eacute;riodiquement pour d&eacute;terminer s&rsquo;ils se sont compact&eacute;s, si leurs propri&eacute;t&eacute;s physiques ou chimiques ont &eacute;t&eacute; modifi&eacute;es, et si des solides se sont accumul&eacute;s. Un registre des r&eacute;sultats des inspections portant sur les anneaux install&eacute;s doit &ecirc;tre tenu pour chaque colonne remplie d&rsquo;anneaux. Ces donn&eacute;es seront utilis&eacute;es pour d&eacute;terminer la fr&eacute;quence des inspections suite &agrave; une analyse document&eacute;e. Tout changement dans la fr&eacute;quence des inspections, accompagn&eacute; d&rsquo;une justification, doit &ecirc;tre document&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.1"></div>
<h4 id="sec4-7-1">4.7.1	Tassement</h4>  <p>S&rsquo;il y a tassement, il faut ajouter des anneaux respectant les sp&eacute;cifications contenues dans le pr&eacute;sent guide, afin de restaurer le garnissage complet. Ces anneaux doivent &ecirc;tre identifi&eacute;s par des marques permanentes afin d&rsquo;&eacute;viter qu&rsquo;ils soient utilis&eacute;s comme &eacute;chantillons pour l&rsquo;entretien, &eacute;tant donn&eacute; qu&rsquo;ils ne sont pas repr&eacute;sentatifs de la charge initiale. Le nombre d&rsquo;anneaux ajout&eacute;s et les commentaires appropri&eacute;s &agrave; ce sujet doivent &ecirc;tre enregistr&eacute;s et conserv&eacute;s pendant la dur&eacute;e de vie de l&rsquo;ensemble d&rsquo;anneaux garnissant la colonne. Les tendances relatives au tassement peuvent &ecirc;tre d&eacute;termin&eacute;es par comparaison avec les r&eacute;sultats ant&eacute;rieurs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.2"></div>
<h4 id="sec4-7-2">4.7.2	Mati&egrave;res solides fissiles</h4>  <p>Un registre doit être tenu afin de faciliter l&rsquo;évaluation de l&rsquo;accumulation des matières solides fissiles sur les anneaux de Raschig et sur la partie interne de la colonne, afin de mettre en place les contr&ocirc;les appropriés. Les anneaux contenus dans la colonne doivent être nettoy&eacute;s ou remplac&eacute;s, et les parois de la colonne doivent &ecirc;tre nettoy&eacute;es si des mati&egrave;res solides contenant plus de 50 g de <sup>233</sup>U, de <sup>235</sup>U, de Pu ou d&rsquo;une combinaison de ces isotopes par litre de verre s&rsquo;y sont d&eacute;pos&eacute;es [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.3"></div>
<h4 id="sec4-7-3">4.7.3	Propri&eacute;t&eacute;s physiques</h4>  <p>Les anneaux de Raschig doivent &ecirc;tre inspect&eacute;s p&eacute;riodiquement en cours de service, afin de d&eacute;terminer leurs propri&eacute;t&eacute;s physiques actuelles, gr&acirc;ce &agrave; des essais portant sur des &eacute;chantillons d&rsquo;anneaux, pr&eacute;lev&eacute;s dans des r&eacute;gions repr&eacute;sentatives de chaque colonne. Le but de cette proc&eacute;dure est de s&rsquo;assurer que les exigences de la pr&eacute;sente section sont respect&eacute;es.</p>  <p>Des proc&eacute;dures doivent &ecirc;tre mises en &oelig;uvre dans le but d&rsquo;&eacute;viter l&rsquo;inclusion, dans les &eacute;chantillons d&rsquo;anneaux de Raschig, de fragments qui ne font pas partie de la charge initiale d&eacute;pos&eacute;e dans la colonne (voir section 4.7.1).</p>  <p>Des anneaux de Raschig de contr&ocirc;le peuvent &ecirc;tre utilis&eacute;s pour ces essais, en autant qu&rsquo;ils demeurent &agrave; l&rsquo;int&eacute;rieur de la colonne sauf pendant des p&eacute;riodes d&rsquo;essai ne d&eacute;passant pas deux semaines par essai et quatre semaines par ann&eacute;e au total. La colonne peut &ecirc;tre utilis&eacute;e de mani&egrave;re continue, lorsque les anneaux de Raschig de contr&ocirc;le en sont retir&eacute;s, en autant que les sp&eacute;cifications des sections 4.5.2 et 4.5.3 continuent d&rsquo;&ecirc;tre respect&eacute;es.</p>  <p>Si l&rsquo;un ou l&rsquo;autre des anneaux de Raschig utilis&eacute;s en service et mis &agrave; l&rsquo;essai ne respecte pas les sp&eacute;cifications relatives aux anneaux pr&eacute;cis&eacute;es &agrave; la section 4.4 durant l&rsquo;inspection pour entretien, une &eacute;valuation doit &ecirc;tre r&eacute;alis&eacute;e afin de d&eacute;terminer la mesure appropri&eacute;e &agrave; prendre. Une mesure appropri&eacute;e peut &ecirc;tre (sans toutefois s&rsquo;y limiter) l&rsquo;une ou plusieurs des mesures suivantes :</p>
<ol>
<li>proc&eacute;der &agrave; une nouvelle analyse du ou des param&egrave;tres posant probl&egrave;me pour le m&ecirc;me ensemble d&rsquo;anneaux</li>
<li>obtenir un nouvel &eacute;chantillon d&rsquo;anneaux et analyser de nouveau le ou les param&egrave;tres posant probl&egrave;me pour ce nouvel ensemble d&rsquo;&eacute;chantillons, ou</li>
<li>remplacer l&rsquo;ensemble des anneaux garnissant la colonne</li>
</ol>  <p>L&rsquo;analyse des tendances pour les essais p&eacute;riodiques physiques et chimiques peut &ecirc;tre utilis&eacute;e pour pr&eacute;voir la dur&eacute;e de vie utile des anneaux de Raschig.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.4"></div>
<h4 id="sec4-7-4">4.7.4	Intervalles entre les inspections</h4>  <p>Les anneaux de Raschig doivent &ecirc;tre inspect&eacute;s p&eacute;riodiquement pour d&eacute;montrer qu&rsquo;ils maintiennent leur propri&eacute;t&eacute; de contr&ocirc;le de la criticit&eacute;. Ces essais doivent inclure le tassement des anneaux (voir section 4.7.1), l&rsquo;accumulation de mati&egrave;res solides (voir section 4.7.2) et les propri&eacute;t&eacute;s physiques du verre (voir section 4.7.3). L&rsquo;intervalle initial d&rsquo;inspection des anneaux ne doit pas d&eacute;passer :</p>
<ol>
<li>13 mois dans le cas des anneaux qui ne sont pas soumis &agrave; une agitation, ou</li>
<li>7 mois pour les anneaux soumis &agrave; une agitation</li>
</ol>  <p>Cet intervalle initial entre les inspections peut &ecirc;tre plus grand, en autant que cela soit justifi&eacute; par une analyse document&eacute;e et approuv&eacute;e.</p>  <p>Les intervalles subs&eacute;quents entre les inspections peuvent &ecirc;tre bas&eacute;s sur l&rsquo;analyse des tendances dans les donn&eacute;es. Si des registres et des inspections confirment qu&rsquo;il n&rsquo;y a pas eu de solution dans la colonne depuis la derni&egrave;re inspection et que la colonne n&rsquo;a pas &eacute;t&eacute; contamin&eacute;e par des vapeurs corrosives, alors seulement l&rsquo;essai portant sur le tassement (voir section 4.7.1) sera requis.</p>  <p>Si les anneaux de Raschig sont expos&eacute;s &agrave; des solutions dans lesquelles la concentration en ions fluorure d&eacute;passe la concentration molaire de 0,0001, une fr&eacute;quence d&rsquo;inspection appropri&eacute;e doit &ecirc;tre &eacute;tablie afin de s&rsquo;assurer que les anneaux conservent les propri&eacute;t&eacute;s chimiques et m&eacute;caniques sp&eacute;cifi&eacute;es &agrave; la section 4.4.</p>
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
<h2 id="sec5">5. S&ucirc;ret&eacute; dans la mesure in situ de la multiplication des neutrons sous-critiques</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.6-1983 (r&eacute;&eacute;dit&eacute;e en 2010), <span lang="en"><em>Safety in Conducting Subcritical Neutron Multiplication Measurements In Situ</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec5-1">5.1 Introduction</h3>  <p>Pour utiliser de mani&egrave;re s&ucirc;re et &eacute;conomique les mati&egrave;res fissiles, il faut conna&icirc;tre la sous criticit&eacute; des configurations que l&rsquo;on rencontre dans le traitement, le stockage et le transport des mati&egrave;res. Les donn&eacute;es relatives aux exp&eacute;riences de criticit&eacute; ont &eacute;t&eacute; la source principale d&rsquo;information ayant permis d&rsquo;&eacute;tablir des pratiques s&ucirc;res. Cependant, un besoin se fait sentir en ce qui a trait &agrave; des mesures effectu&eacute;es pour des applications restraintes qui peuvent fournir plus efficacement et rapidement des directives relative &agrave; l&rsquo;exploitation s&eacute;curitaire avec des mati&egrave;res fissiles dans les configurations sp&eacute;cifiques rencontr&eacute;es dans les milieux industriels. Ces mesures sont effectu&eacute;es dans certains secteurs d&rsquo;exploitation de l&rsquo;usine et sont appel&eacute;es mesures nucl&eacute;aires <em>in situ</em>.</p>  <p>La protection du personnel durant les exp&eacute;riences in situ d&eacute;pend de la nature de l&rsquo;accident de criticit&eacute; &agrave; &eacute;viter. La pr&eacute;sente section pr&eacute;cise les crit&egrave;res et les pratiques en mati&egrave;re de s&ucirc;ret&eacute; pour r&eacute;aliser de telles exp&eacute;riences. La section porte essentiellement sur des mesures de la multiplication des neutrons et refl&egrave;te ainsi l&rsquo;importance de cette exp&eacute;rience, mais les principes pr&eacute;sent&eacute;s dans cette section peuvent &ecirc;tre appliqu&eacute;s &agrave; des mesures bas&eacute;es sur d&rsquo;autres indices de r&eacute;activit&eacute;, comme la constante de d&eacute;sint&eacute;gration des neutrons rapides.</p>
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
<h3 id="sec5-2">5.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section donne une orientation en mati&egrave;re de s&ucirc;ret&eacute; pour la r&eacute;alisation de mesure de la multiplication des neutrons dans des conditions sous-critiques lorsque le personnel n&rsquo;a pas de protection physique contre les cons&eacute;quences d&rsquo;un accident de criticit&eacute;. L&rsquo;objectif des mesures <em>in situ</em> sont soit de confirmer une marge de s&ucirc;ret&eacute; ad&eacute;quate ou d&rsquo;am&eacute;liorer une estimation de cette marge. Le premier objectif peut &ecirc;tre un essai de la s&ucirc;ret&eacute;-criticit&eacute; d&rsquo;une conception qui est bas&eacute;e sur des calculs. Le deuxi&egrave;me peut am&eacute;liorer les conditions d&rsquo;exploitation en r&eacute;duisant les incertitudes associ&eacute;es aux marges de s&ucirc;ret&eacute; et en fournissant une orientation pour les nouvelles conceptions.</p>
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
<h3 id="sec5-3">5.3	Pratiques administratives</h3>  <p>Une proc&eacute;dure &eacute;crite pour chaque nouvelle exp&eacute;rience <em>in situ</em> doit &ecirc;tre pr&eacute;par&eacute;e et examin&eacute;e d&rsquo;une mani&egrave;re approuv&eacute;e par la direction. La responsabilit&eacute; premi&egrave;re de la s&ucirc;ret&eacute; doit &ecirc;tre assign&eacute;e &agrave; une seule personne poss&eacute;dant de l&rsquo;exp&eacute;rience dans la r&eacute;alisation d&rsquo;exp&eacute;riences de sous criticit&eacute; ou de criticit&eacute;. Un autre employ&eacute; exp&eacute;riment&eacute; doit examiner la proc&eacute;dure.</p>  <p>La proc&eacute;dure &eacute;crite doit &ecirc;tre examin&eacute;e par toutes les personnes qui ont l&rsquo;intention de participer &agrave; l&rsquo;exp&eacute;rience.</p>  <p>Au moins deux personnes doivent &ecirc;tre pr&eacute;sentes durant l&rsquo;exp&eacute;rience.</p>  <p>Un registre de l&rsquo;&eacute;tat de la situation et des progr&egrave;s de l&rsquo;exp&eacute;rience doit &ecirc;tre tenu, en mettant particuli&egrave;rement l&rsquo;accent sur la s&ucirc;ret&eacute;.</p>  <p>Les proc&eacute;dures &agrave; suivre en cas d&rsquo;urgence et les instruments de d&eacute;tection du rayonnement appropri&eacute;s &agrave; l&rsquo;exp&eacute;rience doivent &ecirc;tre fournis.</p>
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
<h3 id="sec5-4">5.4	Crit&egrave;res relatifs &agrave; l&rsquo;&eacute;quipement</h3>  <p>L&rsquo;int&eacute;grit&eacute; m&eacute;canique de l&rsquo;&eacute;quipement &agrave; utiliser avec l&rsquo;assemblage de mati&egrave;res fissiles doit &ecirc;tre v&eacute;rifi&eacute;e avant l&rsquo;exp&eacute;rience.</p>  <p>Le fonctionnement ad&eacute;quat de tous les circuits de comptage, des d&eacute;tecteurs de neutrons et de rayons gamma, des alarmes et des autres instruments n&eacute;cessaires doit &ecirc;tre v&eacute;rifi&eacute; avant l&rsquo;exp&eacute;rience.</p>  <p>Une source de neutrons doit &ecirc;tre pr&eacute;sente pour produire une quantit&eacute; de neutrons suffisante pour d&eacute;montrer la multiplication des neutrons. Cette source peut &ecirc;tre contenue dans l&rsquo;assemblage fissile, c&rsquo;est-&agrave;-dire des neutrons issus de la fission spontan&eacute;e ou de r&eacute;actions &eacute;mettant d&rsquo;autres particules (&alpha;, n).</p>  <p>Au moins deux instruments ind&eacute;pendants de comptage sensibles aux neutrons doivent surveiller la population de neutrons dans l&rsquo;assemblage fissile &agrave; l&rsquo;&eacute;tude.</p>  <p>Un signal sonore indiquant de mani&egrave;re continue la quantit&eacute; de neutrons doit &ecirc;tre utilis&eacute; et peut &ecirc;tre jumel&eacute; &agrave; un autre type de signal, par exemple une lumi&egrave;re clignotante.</p>
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
<h3 id="sec5-5">5.5	Pratiques op&eacute;rationnelles</h3>  <p>Si l&rsquo;une des personnes participant &agrave; l&rsquo;exp&eacute;rience a des doutes sur la s&ucirc;ret&eacute; d&rsquo;une action ou d&rsquo;une &eacute;tape particuli&egrave;re, l&rsquo;exp&eacute;rience doit &ecirc;tre suspendue jusqu&rsquo;&agrave; ce que les doutes soient &eacute;limin&eacute;s.</p>  <p>La cause de tout comportement impr&eacute;vu de l&rsquo;assemblage et de l&rsquo;&eacute;quipement connexe ou de toute particularit&eacute; dans les donn&eacute;es r&eacute;sultantes doit &ecirc;tre r&eacute;solue avant l&rsquo;ajout de r&eacute;activit&eacute;.</p>  <p>La limite de r&eacute;activit&eacute; de l&rsquo;assemblage fissile doit &ecirc;tre d&eacute;finie dans la proc&eacute;dure &eacute;crite. Cette limite peut &ecirc;tre &eacute;nonc&eacute;e en termes de valeur maximale de la multiplication des neutrons ou en termes d&rsquo;une fraction de la masse critique estim&eacute;e, du volume ou des dimensions. La marge inf&eacute;rieure &agrave; la criticit&eacute; doit &ecirc;tre une fonction des incertitudes associ&eacute;es &agrave; l&rsquo;exp&eacute;rience; il faut pr&eacute;voir une tol&eacute;rance pour les effets de la r&eacute;flexion des neutrons sur le personnel ou d&rsquo;autres objets mobiles.</p>  <p>Des graphiques de la multiplication des neutrons en fonction du param&egrave;tre d&eacute;notant le changement de r&eacute;activit&eacute; doivent &ecirc;tre maintenus ind&eacute;pendamment par au moins deux personnes qui utilisent les donn&eacute;es provenant de deux canaux ou plus de d&eacute;tection des neutrons. Ces repr&eacute;sentations graphiques doivent comporter un nombre suffisant de points pour permettre une extrapolation significative.</p>  <p>L&rsquo;importance de l&rsquo;addition de r&eacute;activit&eacute; doit &ecirc;tre guid&eacute;e par l&rsquo;extrapolation des graphiques de la multiplication des neutrons r&eacute;ciproques et doit &ecirc;tre telle que la limite de r&eacute;activit&eacute; d&eacute;finie &agrave; la section 5.5 n&rsquo;est pas d&eacute;pass&eacute;e. Il faut faire preuve de prudence dans l&rsquo;interpr&eacute;tation des courbes de multiplication des neutrons (r&eacute;seau r&eacute;ciproque); les courbes exp&eacute;rimentales courantes sont examin&eacute;es dans le document intitul&eacute; <span lang="en"><em>The Technology of Nuclear Reactor Safety</em></span>, Vol. 1, chapitre 5 [26].</p>  <p>Toute addition de r&eacute;activit&eacute; doit &ecirc;tre autoris&eacute;e par la personne responsable de la s&ucirc;ret&eacute;, conform&eacute;ment &agrave; la section 5.3.</p>  <p>Aucune addition de r&eacute;activit&eacute; ne doit &ecirc;tre faite avant que les effets des additions pr&eacute;c&eacute;dentes aient &eacute;t&eacute; &eacute;valu&eacute;s et avant que la r&eacute;ponse de l&rsquo;addition subs&eacute;quente ait &eacute;t&eacute; estim&eacute;e.</p>  <p>Les additions de r&eacute;activit&eacute; ne doivent pas &ecirc;tre faites simultan&eacute;ment en ayant recours &agrave; plus d&rsquo;une m&eacute;thode.</p>  <p>La modification de la m&eacute;thode d&rsquo;addition de r&eacute;activit&eacute; ne doit pas invalider l&rsquo;extrapolation du graphique de la multiplication r&eacute;ciproque.</p>  <p>Il faut tenir compte de la possibilit&eacute; que des additions de r&eacute;activit&eacute; soient faites par inadvertance, comme celles qui pourraient se produire en raison de l&rsquo;instabilit&eacute; des boues radioactives, de l&rsquo;effondrement ou de la formation de vides, ou du transfert de mati&egrave;res par inadvertance, ou encore &agrave; cause d&rsquo;autres conditions.</p>  <p>L&rsquo;emplacement de la source et des d&eacute;tecteurs doit &ecirc;tre tel que les neutrons observ&eacute;s sont principalement ceux produits par l&rsquo;assemblage fissile.</p>  <p>Si une source de neutron ou un d&eacute;tecteur est d&eacute;plac&eacute; de son emplacement vers un autre, ou si un mat&eacute;riau d&rsquo;att&eacute;nuation est ins&eacute;r&eacute; entre la source et les d&eacute;tecteurs, l&rsquo;effet de ce changement sur le taux de comptage des neutrons doit &ecirc;tre mesur&eacute; avant toute addition de r&eacute;activit&eacute;.</p>  <p>La modification de l&rsquo;espacement entre les &eacute;l&eacute;ments d&rsquo;un r&eacute;seau ne devrait pas &ecirc;tre employ&eacute;e comme moyen pour changer la r&eacute;activit&eacute;. Des donn&eacute;es issues des graphiques de multiplication r&eacute;ciproque obtenues pour diff&eacute;rentes exp&eacute;riences avec des espacements diff&eacute;rents peuvent &ecirc;tre utilis&eacute;es pour &eacute;valuer l&rsquo;effet de l&rsquo;espacement entre les &eacute;l&eacute;ments sur la multiplication des neutrons.</p>
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
<h2 id="sec6">6. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans le stockage des mati&egrave;res fissiles</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.7-1998 (r&eacute;&eacute;dit&eacute;e en 2007), <span lang="en"><em>Nuclear Criticality Safety in the Storage of Fissile Materials</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec6-1">6.1 Introduction</h3>  <p>La section 6 pr&eacute;sente les crit&egrave;res de stockage g&eacute;n&eacute;raux bas&eacute;s sur des calculs valid&eacute;s, ainsi que certaines pratiques techniques et administratives appropri&eacute;es au stockage des mati&egrave;res fissiles [27, 28].</p>  <p>Les limites de masse figurant sous forme de tableau et pr&eacute;sent&eacute;es dans cette section sont pr&eacute;vues pour des configurations de stockage id&eacute;ales. Bien que ces configurations ne soient pas courantes en pratique, elles fournissent les fondements de l&rsquo;&eacute;tablissement des r&eacute;seaux de stockage s&eacute;curitaire. Comme la pr&eacute;sente section ne peut pas englober toutes les conditions possibles, l&rsquo;utilisation de renseignements additionnels est encourag&eacute;e [16, 29, 30]. Par exemple, lorsque la sous criticit&eacute; des r&eacute;seaux n&rsquo;est pas sp&eacute;cifi&eacute;e dans la pr&eacute;sente section, on peut la confirmer en r&eacute;alisant des mesures de la multiplication des neutrons, tel qu&rsquo;indiqu&eacute; &agrave; la section 5, <em>S&ucirc;ret&eacute; dans les mesures in situ de la multiplication des neutrons sous-critiques</em>.</p>
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
<h3 id="sec6-2">6.2 Port&eacute;e</h3>  <p>Cette section s&rsquo;applique au stockage des mati&egrave;res fissiles. Les limites relatives &agrave; la masse et &agrave; l&rsquo;espacement sont pr&eacute;sent&eacute;es sous forme de tableau pour l&rsquo;uranium contenant plus que 30 % en poids de <sup>235</sup>U, pour le <sup>233</sup>U et pour le plutonium, en tant que m&eacute;taux et oxydes. Les crit&egrave;res relatifs &agrave; l&rsquo;application de ces limites sont indiqu&eacute;s.</p>
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
<h3 id="sec6-3">6.3	Pratiques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h3>
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
<h4 id="sec6-3-1">6.3.1 Pratiques administratives</h4>  <p>Toutes les activit&eacute;s touchant des mati&egrave;res fissiles, y compris le stockage, doivent &ecirc;tre r&eacute;alis&eacute;es conform&eacute;ment &agrave; la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>. Cette section a pour but de compl&eacute;ter la section 2 en pr&eacute;cisant les crit&egrave;res de stockage applicables &agrave; de nombreuses mati&egrave;res fissiles. Si les limites pr&eacute;cis&eacute;es dans cette section sont utilis&eacute;es, on doit appliquer une marge administrative de sous-criticit&eacute; pour assurer la conformit&eacute; avec la section 2.1.2.2.</p>  <p>Les m&eacute;thodes de contr&ocirc;le du stockage et les pratiques op&eacute;rationnelles approuv&eacute;es par la direction doivent &ecirc;tre d&eacute;crites dans des proc&eacute;dures &eacute;crites. Les personnes qui participent au transfert et au stockage des mati&egrave;res doivent &ecirc;tre famili&egrave;res avec ces proc&eacute;dures. Les limites pour le stockage doivent &ecirc;tre affich&eacute;es.</p>  <p>La direction doit pr&eacute;voir des inspections afin de v&eacute;rifier la conformit&eacute; avec les proc&eacute;dures &eacute;tablies.</p>  <p>L&rsquo;acc&egrave;s aux zones de stockage doit &ecirc;tre contr&ocirc;l&eacute;.</p>  <p>Des directives additionnelles relatives aux pratiques administratives figure &agrave; la section 12, <em>Pratiques administratives en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
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
<h4 id="sec6-3-2">6.3.2	Pratiques techniques</h4>  <p>Les limites relatives au stockage des mati&egrave;res fissiles doivent &ecirc;tre bas&eacute;es sur des donn&eacute;es exp&eacute;rimentales ou sur les r&eacute;sultats des calculs effectu&eacute;s gr&acirc;ce &agrave; des techniques de calcul valid&eacute;es.</p>  <p>Les installations et structures de stockage doivent &ecirc;tre con&ccedil;ues, fabriqu&eacute;es et entretenues conform&eacute;ment aux bonnes pratiques d&rsquo;ing&eacute;nierie.</p>  <p>La conception des structures de stockage devrait permettre d&rsquo;emp&ecirc;cher les configurations ou arrangements inacceptables, ce qui permettra de r&eacute;duire la d&eacute;pendance aux contr&ocirc;les administratifs.</p>  <p>Les mati&egrave;res fissiles doivent &ecirc;tre stock&eacute;es de mani&egrave;re &agrave; ce qu&rsquo;un accident de s&ucirc;ret&eacute;-criticit&eacute; r&eacute;sultant d&rsquo;un incendie ou d&rsquo;une inondation, d&rsquo;un tremblement de terre ou d&rsquo;une autre catastrophe naturelle ne soit pas une pr&eacute;occupation.</p>  <p>Les zones de stockage ne devraient pas contenir de mati&egrave;re combustible. Lorsqu&rsquo;il est impossible d&rsquo;&eacute;viter la pr&eacute;sence de quantit&eacute;s importantes de mati&egrave;res combustibles, comme dans le cas du stockage de d&eacute;chets de combustion, un syst&egrave;me de protection contre les incendies doit &ecirc;tre install&eacute;.</p>  <p>Les rayons servant au rangement doivent &ecirc;tre robuste et non combustible. L&rsquo;espacement entre les unit&eacute;s de stockage peut &ecirc;tre maintenu gr&acirc;ce &agrave; des grilles, des bo&icirc;tes de m&eacute;tal recouvertes ou des barri&egrave;res physiques sur des &eacute;tag&egrave;res.</p>  <p>Les contenants de mati&egrave;res fissiles se trouvant dans des zones dot&eacute;es de gicleurs d&rsquo;incendie doivent &ecirc;tre con&ccedil;us de mani&egrave;re &agrave; &eacute;viter l&rsquo;accumulation d&rsquo;eau.</p>  <p>Dans les zones de stockage des mati&egrave;res fissiles &eacute;quip&eacute;es de gicleurs, on doit tenir compte de la possibilit&eacute; que la criticit&eacute; survienne dans une accumulation d&rsquo;eau de ruissellement provenant du syst&egrave;me de gicleurs.</p>  <p>Une alarme d&rsquo;accident de criticit&eacute; doit &ecirc;tre en place, conform&eacute;ment &agrave; la section 3, <em>Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</em>.</p>  <p>De bonnes pratiques d&rsquo;entretien des aires de stockage doivent &ecirc;tre int&eacute;gr&eacute;es aux pratiques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire.</p>
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
<h3 id="sec6-4">6.4	Param&egrave;tres, limites et conditions</h3>  <p>Les tableaux 6-1 &agrave; 6-11 pr&eacute;sentent les limites de masse pour le stockage en r&eacute;seau d&rsquo;unit&eacute;s individuelles de mati&egrave;res fissiles sp&eacute;cifi&eacute;es. L&rsquo;information figurant dans les tableaux peut &ecirc;tre appliqu&eacute;e directement &agrave; la r&eacute;solution des probl&egrave;mes pratiques de stockage. Si les limites sont trop restrictives pour une application donn&eacute;e, elles peuvent, &agrave; tout le moins, servir de limites inf&eacute;rieures &agrave; des fins de comparaison avec les limites d&eacute;riv&eacute;es par l&rsquo;utilisation d&rsquo;autres techniques.</p>  <p>Les limites ont &eacute;t&eacute; d&eacute;riv&eacute;es et v&eacute;rifi&eacute;es subs&eacute;quemment par l&rsquo;utilisation de techniques de calcul valid&eacute;es (voir section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs</em>) afin de faire des interpolations &agrave; l&rsquo;int&eacute;rieur des ensembles des donn&eacute;es exp&eacute;rimentales et de les extrapoler. Les techniques de calcul valid&eacute;es employ&eacute;es donnent des approximations num&eacute;riques aux solutions des &eacute;quations de transport des neutrons pour des formulations donn&eacute;es de sections efficaces. Les fondements des limites sont un ensemble de r&eacute;sultats de calcul pour des unit&eacute;s de mati&egrave;res fissiles individuelles contenues dans des r&eacute;seaux cubiques [31]. Ces r&eacute;seaux sont r&eacute;fl&eacute;chis sur toutes les faces par 200 mm d&rsquo;eau ordinaire.</p>  <p>Les limites de masse des tableaux 6-1 &agrave; 6-11 donnent des facteurs de multiplication effectifs, k<sub>eff</sub> inf&eacute;rieurs &agrave; 0,95 pour les r&eacute;seaux cubiques connexes. Il est &agrave; noter que les calculs pour ces r&eacute;seaux effectu&eacute;s avec d&rsquo;autres techniques de calcul, particuli&egrave;rement celles employant d&rsquo;autres formulations de sections efficaces de neutrons, peuvent donner des facteurs de multiplication effectifs diff&eacute;rents.</p>  <p>Les unit&eacute;s sont des sph&egrave;res de mati&egrave;res fissiles sp&eacute;cifi&eacute;es, caract&eacute;ris&eacute;es par leurs principaux constituants isotopiques, centr&eacute;es dans des cellules cubiques :</p>
<ol>
<li>dans l&rsquo;application des limites pour l&rsquo;uranium enrichi en <sup>235</sup>U, les isotopes autres que le <sup>238</sup>U doivent &ecirc;tre consid&eacute;r&eacute;s comme &eacute;tant du <sup>235</sup>U et la mati&egrave;re ne doit pas contenir plus de 1 % en poids de <sup>233</sup>U</li>
<li>dans l&rsquo;application des limites pour le <sup>233</sup>U, les autres isotopes de l&rsquo;uranium doivent &ecirc;tre consid&eacute;r&eacute;s comme du <sup>233</sup>U</li>
<li>les limites pour le <sup>239</sup>Pu indiqu&eacute;es au tableau 6-8 s&rsquo;appliquent aux m&eacute;langes d&rsquo;isotopes de plutonium [32] si la concentration de <sup>240</sup>Pu d&eacute;passe celle de <sup>241</sup>Pu et si le <sup>241</sup>Pu est consid&eacute;r&eacute; comme &eacute;tant du <sup>239</sup>Pu dans le calcul des rapports atomiques H/Pu et de la masse ou de la concentration (voir section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>)</li>
<li>des limites moins restrictives pour le <sup>239</sup>Pu sont indiqu&eacute;es aux tableaux 6-9 et 6-10 pour les compositions isotopiques contenant des concentrations appr&eacute;ciables de <sup>240</sup>Pu</li>
</ol>  <p>Les limites de stockage des mati&egrave;res fissiles pr&eacute;sent&eacute;es pour les oxydes sont bas&eacute;es sur des m&eacute;langes de dioxyde et d&rsquo;eau exempts d&rsquo;espaces vides, &agrave; des masses volumiques th&eacute;oriques correspondant au rapport sp&eacute;cifi&eacute; de l&rsquo;hydrog&egrave;ne aux atomes d&rsquo;&eacute;l&eacute;ments fissiles. Ces limites peuvent &ecirc;tre appliqu&eacute;es &agrave; d&rsquo;autres oxydes, fluorures, chlorures et nitrates et &agrave; d&rsquo;autres sels qui ne d&eacute;passent pas le rapport sp&eacute;cifi&eacute; de l&rsquo;hydrog&egrave;ne aux atomes d&rsquo;&eacute;l&eacute;ments fissiles et qui ne d&eacute;passent pas la masse volumique de l&rsquo;&eacute;l&eacute;ment fissile connexe du m&eacute;lange figurant au tableau.</p>  <p>Un certain nombre de valeurs d&eacute;passent la masse critique d&rsquo;une sph&egrave;re r&eacute;fl&eacute;chie par l&rsquo;eau. Les limites de masse pr&eacute;sent&eacute;es au tableau qui d&eacute;passent 90 % de la masse critique r&eacute;fl&eacute;chie par l&rsquo;eau sont indiqu&eacute;es aux tableaux 6-1 &agrave; 6-11. La sous-criticit&eacute; de ces unit&eacute;s doit &ecirc;tre assur&eacute;e par des contr&ocirc;les appropri&eacute;s, par exemple la g&eacute;om&eacute;trie.</p>  <p>Il convient de faire preuve de circonspection dans l&rsquo;interpr&eacute;tation des valeurs pr&eacute;sent&eacute;es dans les tableaux. Ces valeurs visent &agrave; sp&eacute;cifier la capacit&eacute; des cellules et elles doivent &ecirc;tre compl&eacute;t&eacute;es par de bonnes pratiques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. D&rsquo;autres consid&eacute;rations op&eacute;rationnelles peuvent n&eacute;cessiter des limites plus faibles.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.1"></div>
<h4 id="sec6-4-1">6.4.1	Limites de masse unitaire</h4>  <p>La masse des unit&eacute;s ne doit pas d&eacute;passer les valeurs sp&eacute;cifi&eacute;es aux tableaux 6-1 &agrave; 6-11.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.2"></div>
<h4 id="sec6-4-2">6.4.2 Mod&eacute;ration</h4>  <p>Les rapports de l&rsquo;hydrog&egrave;ne aux atomes de mati&egrave;res fissiles sont d&eacute;termin&eacute;s &agrave; l&rsquo;int&eacute;rieur de la r&eacute;gion fissile et ne comprennent pas les mati&egrave;res contigu&euml;s contenant de l&rsquo;hydrog&egrave;ne. Les marges se rapportant aux limites de masse sp&eacute;cifi&eacute;es doivent &ecirc;tre suffisantes pour compenser la mod&eacute;ration accessoire telle que celle r&eacute;sultant de la mise en sac de plastique mince de chaque unit&eacute;. Les effets d&rsquo;une mod&eacute;ration plus importante devraient &ecirc;tre &eacute;valu&eacute;s par l&rsquo;utilisation d&rsquo;une technique de calcul valid&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.3"></div>
<h4 id="sec6-4-3">6.4.3	Position de l&rsquo;unit&eacute; dans la cellule</h4>  <p>Les unit&eacute;s doivent &ecirc;tre centr&eacute;es dans les cellules &agrave; 10 % pr&egrave;s des dimensions de la cellule. Cette restriction peut &ecirc;tre moins rigoureuse afin de permettre le mouvement horizontal lorsque la limite de masse unitaire est r&eacute;duite &agrave; 60 % de la valeur &eacute;nonc&eacute;e. Si cette valeur r&eacute;duite d&eacute;passe 20 % de la masse critique sph&eacute;rique non r&eacute;fl&eacute;chie de la mati&egrave;re, la s&eacute;paration bout &agrave; bout minimale entre les unit&eacute;s doit &ecirc;tre de 152 mm (6 po) [33].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.4"></div>
<h4 id="sec6-4-4">6.4.4	Autres r&eacute;flecteurs</h4>  <p>Les limites de masse indiqu&eacute;es dans les tableaux s&rsquo;appliquent &eacute;galement aux r&eacute;flecteurs en b&eacute;ton ayant une &eacute;paisseur pouvant atteindre 127 mm (5 po) (la densit&eacute; surfacique du b&eacute;ton est &eacute;gale &agrave; 290 kg/m<sup>2</sup> ou 60 lb/pi<sup>2</sup>). Les limites de masse doivent &ecirc;tre r&eacute;duites &agrave; 75 % des valeurs pr&eacute;sent&eacute;es au tableau pour un r&eacute;flecteur en b&eacute;ton dont l&rsquo;&eacute;paisseur est de 203 mm (8 po) et &agrave; 60 % lorsque l&rsquo;&eacute;paisseur du b&eacute;ton est plus grande. Les &eacute;paisseurs &eacute;quivalentes pour d&rsquo;autres mat&eacute;riaux de construction peuvent &ecirc;tre &eacute;tablies d&rsquo;apr&egrave;s leur densit&eacute; surfacique [31].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.5"></div>
<h4 id="sec6-4-5">6.4.5	Cellules &agrave; capacit&eacute; doubl&eacute;e</h4>  <p>Le fait de doubler la capacit&eacute; des cellules &agrave; masse unitaire pr&eacute;sent&eacute;es au tableau, donnerait lieu, dans certaines g&eacute;om&eacute;tries, &agrave; la criticit&eacute; [34]. La plupart des unit&eacute;s de stockage massives qui pr&eacute;sentent de l&rsquo;int&eacute;r&ecirc;t, cependant, auraient une g&eacute;om&eacute;trie beaucoup moins r&eacute;active. Dans le cas d&rsquo;une cellule &agrave; capacit&eacute; doubl&eacute;e, r&eacute;fl&eacute;chie par l&rsquo;eau sur toutes ses faces, on peut voir qu&rsquo;elle poss&egrave;de une valeur de k<sub>eff</sub> ne d&eacute;passant pas 0,93, comme une cellule &agrave; capacit&eacute; doubl&eacute;e dans un r&eacute;seau respectant les exigences du tableau ne donnera pas lieu &agrave; la criticit&eacute; du r&eacute;seau. De m&ecirc;me, si une cellule &agrave; capacit&eacute; doubl&eacute;e est d&eacute;montr&eacute; &ecirc;tre sous-critique lorsque l&rsquo;eau agit comme r&eacute;flecteur sur toutes ses faces, le fait de doubler la capacit&eacute; de quelques cellules (8 ou moins) dans un r&eacute;seau qui respecte les exigences du tableau n&rsquo;entra&icirc;nera pas la criticit&eacute; du r&eacute;seau.</p>  <p>On doit tenir compte des cellules &agrave; capacit&eacute; doubl&eacute;e dans les analyses de s&ucirc;ret&eacute; relatives au stockage et dans l&rsquo;&eacute;tablissement des proc&eacute;dures d&rsquo;exploitation. Si la capacit&eacute; doubl&eacute;e est cr&eacute;dible, on doit d&eacute;montrer que la capacit&eacute; doubl&eacute;e, se trouvant dans une cellule de stockage unique, n&rsquo;entra&icirc;nera pas la criticit&eacute; du r&eacute;seau. Des contr&ocirc;les administratifs, des contenants &agrave; capacit&eacute; limit&eacute;e et une conception des cellules de stockage ad&eacute;quate pourront permettre d&rsquo;&eacute;viter l&rsquo;utilisation de cellules &agrave; capacit&eacute; doubl&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.6"></div>
<h4 id="sec6-4-6">6.4.6	Enceintes de stockage contigu&euml;s</h4>  <p>Les limites de masse doivent &ecirc;tre r&eacute;duites &agrave; 55 % de la valeur figurant au tableau lorsqu&rsquo;il y a deux enceintes de stockage contigu&euml;s o&ugrave; les parois en b&eacute;ton qui s&eacute;parent et entourent les zones de stockage poss&egrave;dent la m&ecirc;me &eacute;paisseur [31]. Cette r&eacute;duction est suffisante pour tenir compte de l&rsquo;effet du b&eacute;ton comme r&eacute;flecteur.</p>  <p>Les conditions sp&eacute;cifi&eacute;es aux tableaux s&rsquo;appliquent &agrave; des zones de stockage individuelles, comme suit :</p>
<ol>
<li>deux enceintes de stockage qui sont s&eacute;par&eacute;es par une distance qui n&rsquo;est pas inf&eacute;rieure &agrave; la plus petite dimension des surfaces de r&eacute;seaux se faisant face dans les enceintes peuvent &ecirc;tre consid&eacute;r&eacute;es comme des r&eacute;seaux individuels</li>
<li>deux sous-r&eacute;seaux s&eacute;par&eacute;s par une distance qui n&rsquo;est pas inf&eacute;rieure &agrave; la plus petite dimension des surfaces de sous-r&eacute;seaux se faisant face peuvent &ecirc;tre &eacute;valu&eacute;s comme des r&eacute;seaux &agrave; r&eacute;flecteurs individuels</li>
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
<div id="6.4.7"></div>
<h4 id="sec6-4-7">6.4.7	Facteurs de r&eacute;duction</h4>  <p>Les facteurs de r&eacute;duction de la masse mentionn&eacute;s aux sections 6.4.3 &agrave; 6.4.6, sont multiplicatifs. Si l&rsquo;application de ces limites produit un r&eacute;sultat conservateur non souhaitable, alors les calculs propres au syst&egrave;me qui nous int&eacute;resse devraient &ecirc;tre r&eacute;alis&eacute;s &agrave; l&rsquo;aide d&rsquo;une technique de calcul valid&eacute;e. On devrait tenir compte de la pr&eacute;cision et du biais de la technique de calcul employ&eacute;e pour d&eacute;terminer que la valeur de 0,95 pour k<sub>eff</sub> n&rsquo;est pas d&eacute;pass&eacute;e, tel qu&rsquo;indiqu&eacute; &agrave; l&rsquo;annexe B du pr&eacute;sent guide.</p>  <p>Il est plus souhaitable d&rsquo;augmenter la taille des cellules pour agir sur le facteur de r&eacute;duction que de diminuer les limites de masse.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.8"></div>
<h4 id="sec6-4-8">6.4.8	All&eacute;es</h4>  <p>Des all&eacute;es peuvent &ecirc;tre am&eacute;nag&eacute;es dans les r&eacute;seaux sp&eacute;cifi&eacute;s aux tableaux 6-1 &agrave; 6-11 en enlevant des unit&eacute;s contenues dans le r&eacute;seau ou en augmentant le volume total du r&eacute;seau pour faire de l&rsquo;espace. La marge de s&ucirc;ret&eacute; est ad&eacute;quate pour permettre au personnel d&rsquo;avoir acc&egrave;s &agrave; la zone de stockage ainsi cr&eacute;&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.9"></div>
<h4 id="sec6-4-9">6.4.9	Confinement des mati&egrave;res fissiles et des mat&eacute;riaux de rangement</h4>  <p>Les limites sp&eacute;cifi&eacute;es permettent l&rsquo;utilisation d&rsquo;acier dont l&rsquo;&eacute;paisseur est inf&eacute;rieure &agrave; 12,7 mm (0,5 po) pour les &eacute;tag&egrave;res de rangement, ou les contenants compacts en contact avec la mati&egrave;re fissile, ou espac&eacute;s par moins de 26 mm (environ 1,0 po) de la mati&egrave;re fissile [27]. Les effets d&rsquo;une &eacute;paisseur plus grande d&rsquo;acier ou d&rsquo;autres mat&eacute;riaux doivent &ecirc;tre &eacute;tudi&eacute;s exp&eacute;rimentalement ou en appliquant des techniques de calcul valid&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.10"></div>
<h4 id="sec6-4-10">6.4.10 Sous-criticit&eacute; des unit&eacute;s</h4>  <p>Le contenu de chaque cellule de stockage doit &ecirc;tre sous-critique s&rsquo;il est enti&egrave;rement r&eacute;fl&eacute;chi par l&rsquo;eau.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.11"></div>
<h4 id="sec6-4-11">6.4.11 Espacement entre les unit&eacute;s</h4>  <p>Lorsqu&rsquo;il y a un risque de submersion, la s&eacute;paration entre les surfaces unitaires doit &ecirc;tre d&rsquo;au moins 152 mm (6 po).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.12"></div>
<h4 id="sec6-4-12">6.4.12 Forme de l&rsquo;unit&eacute;</h4>  <p>Les limites de masse peuvent &ecirc;tre appliqu&eacute;es &agrave; des unit&eacute;s de n&rsquo;importe quelle forme.</p>
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
<h3 id="sec6-5">6.5	Autres applications</h3>  <p>Les limites pr&eacute;sent&eacute;es dans les tableaux ne sont pas directement applicables &agrave; tous les syst&egrave;mes. Lorsque les crit&egrave;res de la section 6.4 sont respect&eacute;es, l&rsquo;application de limites de masse pr&eacute;sent&eacute;es dans les tableaux peut &ecirc;tre &eacute;largie, tel qu&rsquo;indiqu&eacute; dans les sous sections suivantes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.1"></div>
<h4 id="sec6-5-1">6.5.1	Amalgame de cellules diff&eacute;rentes</h4>  <p>Chaque cellule d&rsquo;un r&eacute;seau d&eacute;crit aux tableaux 6-1 &agrave; 6-11 poss&egrave;de un indice &eacute;gal au quotient de 100 et du nombre de cellules dans le r&eacute;seau [33]. L&rsquo;amalgame, dans un r&eacute;seau, de n&rsquo;importe quelle cellule est permis si la somme des indices de toutes les cellules dans le r&eacute;seau r&eacute;sultant ne d&eacute;passe pas 100.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.2"></div>
<h4 id="sec6-5-2">6.5.2 Interpolation</h4>  <p>On peut avoir recours &agrave; l&rsquo;interpolation pour des limites de masse, pour le nombre de cellules et la teneur en hydrog&egrave;ne. L&rsquo;interpolation de l&rsquo;enrichissement en <sup>235</sup>U est permise. L&rsquo;interpolation lin&eacute;aire n&rsquo;est pas n&eacute;cessairement appropri&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.3"></div>
<h4 id="sec6-5-3">6.5.3	Cellules non cubiques</h4>  <p>Toute limite de masse pr&eacute;sent&eacute;e au tableau peut &ecirc;tre appliqu&eacute;e &agrave; une cellule non cubique de volume &eacute;gal &agrave; celui pr&eacute;sent&eacute; au tableau et contenant une unit&eacute; presque &eacute;quilat&eacute;rale si la plus grande dimension de la cellule ne d&eacute;passe pas sa plus petite dimension d&rsquo;un facteur de plus de 2,5 [33].</p>  <p>Les valeurs figurant au tableau peuvent &ecirc;tre appliqu&eacute;es &agrave; des unit&eacute;s autres que ceux qui sont presque &eacute;quilat&eacute;rales dans des cellules non cubiques si le volume de l&rsquo;unit&eacute; et des cellules est maintenu et si le rapport des dimensions caract&eacute;risant la forme de l&rsquo;unit&eacute; est &agrave; peu pr&egrave;s &eacute;gal au rapport des dimensions correspondantes de la cellule.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.4"></div>
<h4 id="sec6-5-4">6.5.4	Position de l&rsquo;unit&eacute; dans la cellule</h4>  <p>Les unit&eacute;s plac&eacute;es dans des cellules non cubiques doivent &ecirc;tre centr&eacute;es dans les cellules &agrave; 10 % pr&egrave;s des dimensions les plus petites de la cellule. Cette restriction peut &ecirc;tre moins rigoureuse afin de permettre un mouvement horizontal lorsque la limite de masse est r&eacute;duite &agrave; 60 % de la valeur figurant au tableau [33]. Si cette valeur r&eacute;duite d&eacute;passe 20 % de la masse critique sph&eacute;rique non r&eacute;fl&eacute;chie de la mati&egrave;re, la s&eacute;paration bout &agrave; bout minimale entre les unit&eacute;s doit &ecirc;tre de 152 mm (6 po).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.5"></div>
<h4 id="sec6-5-5">6.5.5	Forme du r&eacute;seau</h4>  <p>Les limites figurant dans le tableau peuvent &ecirc;tre appliqu&eacute;es &agrave; des r&eacute;seaux de n&rsquo;importe quelle forme.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.6"></div>
<h4 id="sec6-5-6">6.5.6 Plutonium 238</h4>  <p>Les limites de masse indiqu&eacute;es au tableau pour le plutonium contenant 5,2 % en poids de <sup>240</sup>Pu (voir tableau 6-9) peuvent &ecirc;tre appliqu&eacute;es au stockage des unit&eacute;s de n&rsquo;importe quelle teneur en <sup>238</sup>Pu non fissile [35]. La note de bas de page des tableaux 6-7 &agrave; 6-10 relativement &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau est appropri&eacute;e pour le <sup>238</sup>Pu (voir section 10, <em>Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire des actinides sp&eacute;ciaux</em>).</p>
<table className="width-100">  <caption className="text-left">Tableau 6-1 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; M&eacute;tal [ANSI/ANS-8.7]</caption>  <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">H/U<sup>a</sup> &le; 0,01; 100 % en poids de <sup>235</sup>U; masse voulumique de l&#39;U &le; 18,7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">8,8</td>
<td className="text-center">11,5</td>
<td className="text-center">15,2</td>
<td className="text-center">18,5</td>
<td className="text-center">20,4<sup>b</sup></td>
<td className="text-center">23,5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">7,3</td>
<td className="text-center">9,6</td>
<td className="text-center">13,1</td>
<td className="text-center">16,3</td>
<td className="text-center">18,2</td>
<td className="text-center">21,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6,2</td>
<td className="text-center">8,3</td>
<td className="text-center">11,5</td>
<td className="text-center">14,5</td>
<td className="text-center">16,4</td>
<td className="text-center">19,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5,4</td>
<td className="text-center">7,3</td>
<td className="text-center">10,3</td>
<td className="text-center">13,1</td>
<td className="text-center">15,0</td>
<td className="text-center">18,2</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">4,8</td>
<td className="text-center">6,5</td>
<td className="text-center">9,3</td>
<td className="text-center">12,0</td>
<td className="text-center">13,7</td>
<td className="text-center">17,0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4,3</td>
<td className="text-center">5,9</td>
<td className="text-center">8,5</td>
<td className="text-center">11,0</td>
<td className="text-center">12,7</td>
<td className="text-center">15,9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">3,9</td>
<td className="text-center">5,4</td>
<td className="text-center">7,8</td>
<td className="text-center">10,2</td>
<td className="text-center">11,8</td>
<td className="text-center">14,9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,01; 93,2 % en poids de <sup>235</sup>U; 6,8 % en poids de <sup>238</sup>U; masse volumique de l&#39;U &le; 18,7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">9,6</td>
<td className="text-center">12,6</td>
<td className="text-center">16,9</td>
<td className="text-center">20,8</td>
<td className="text-center">23,0<sup>b</sup></td>
<td className="text-center">26,8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">7,9</td>
<td className="text-center">10,5</td>
<td className="text-center">14,5</td>
<td className="text-center">18,1</td>
<td className="text-center">20,4</td>
<td className="text-center">24,3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6,7</td>
<td className="text-center">9,1</td>
<td className="text-center">12,7</td>
<td className="text-center">16,1</td>
<td className="text-center">18,3</td>
<td className="text-center">22,2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5,9</td>
<td className="text-center">8,0</td>
<td className="text-center">11,3</td>
<td className="text-center">14,5</td>
<td className="text-center">16,6</td>
<td className="text-center">20,4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5,2</td>
<td className="text-center">7,1</td>
<td className="text-center">10,1</td>
<td className="text-center">13,2</td>
<td className="text-center">15,2</td>
<td className="text-center">18,9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4,7</td>
<td className="text-center">6,4</td>
<td className="text-center">9,2</td>
<td className="text-center">12,1</td>
<td className="text-center">14,0</td>
<td className="text-center">17,7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4,2</td>
<td className="text-center">5,8</td>
<td className="text-center">8,5</td>
<td className="text-center">11,2</td>
<td className="text-center">13,0</td>
<td className="text-center">16,5</td>   </tr>   </table>  <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-2 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 93,2 % en poids de <sup>235</sup>U, 6,8 en poids de <sup>23</sup>8U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">9,9</td>
<td className="text-center">13,4</td>
<td className="text-center">18,8</td>
<td className="text-center">24,1</td>
<td className="text-center">27,4</td>
<td className="text-center">33,5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8,0</td>
<td className="text-center">10,9</td>
<td className="text-center">15,6</td>
<td className="text-center">20,4</td>
<td className="text-center">23,5</td>
<td className="text-center">29,4</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6,7</td>
<td className="text-center">9,3</td>
<td className="text-center">13,4</td>
<td className="text-center">17,8</td>
<td className="text-center">20,6</td>
<td className="text-center">26,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5,8</td>
<td className="text-center">8,0</td>
<td className="text-center">11,8</td>
<td className="text-center">15,7</td>
<td className="text-center">18,4</td>
<td className="text-center">23,6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5,1</td>
<td className="text-center">7,1</td>
<td className="text-center">10,5</td>
<td className="text-center">14,1</td>
<td className="text-center">16,6</td>
<td className="text-center">21,5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4,5</td>
<td className="text-center">6,4</td>
<td className="text-center">9,4</td>
<td className="text-center">12,8</td>
<td className="text-center">15,1</td>
<td className="text-center">19,8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4,1</td>
<td className="text-center">5,8</td>
<td className="text-center">8,6</td>
<td className="text-center">11,7</td>
<td className="text-center">13,9</td>
<td className="text-center">18,3</td>   </tr>   <tr>
<td colSpan="7"className="text-center" >(H/U<sup>a</sup> &le; 3,0; masse volumique de l&#39;U &le; 4,56 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">6,1</td>
<td className="text-center">8,4</td>
<td className="text-center">12,0</td>
<td className="text-center">15,6</td>
<td className="text-center">18,0</td>
<td className="text-center">22,3</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4,9</td>
<td className="text-center">6,8</td>
<td className="text-center">9,9</td>
<td className="text-center">13,1</td>
<td className="text-center">15,2</td>
<td className="text-center">19,3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4,1</td>
<td className="text-center">5,7</td>
<td className="text-center">8,4</td>
<td className="text-center">11,3</td>
<td className="text-center">13,2</td>
<td className="text-center">17,1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3,6</td>
<td className="text-center">5,0</td>
<td className="text-center">7,3</td>
<td className="text-center">9,9</td>
<td className="text-center">11,7</td>
<td className="text-center">15,3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3,1</td>
<td className="text-center">4,4</td>
<td className="text-center">6,5</td>
<td className="text-center">8,9</td>
<td className="text-center">10,5</td>
<td className="text-center">13,8</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,8</td>
<td className="text-center">3,9</td>
<td className="text-center">5,8</td>
<td className="text-center">8,0</td>
<td className="text-center">9,5</td>
<td className="text-center">12,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; masse volumique de l&#39;U &le; 2,05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,1</td>
<td className="text-center">4,2</td>
<td className="text-center">5,9</td>
<td className="text-center">7,7</td>
<td className="text-center">8,9</td>
<td className="text-center">11,1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2,5</td>
<td className="text-center">3,4</td>
<td className="text-center">4,9</td>
<td className="text-center">6,5</td>
<td className="text-center">7,6</td>
<td className="text-center">9,6</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">4,2</td>
<td className="text-center">5,6</td>
<td className="text-center">6,6</td>
<td className="text-center">8,5</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,8</td>
<td className="text-center">2,5</td>
<td className="text-center">3,6</td>
<td className="text-center">4,9</td>
<td className="text-center">5,8</td>
<td className="text-center">7,6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,5</td>
<td className="text-center">2,2</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">5,2</td>
<td className="text-center">6,9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,4</td>
<td className="text-center">1,9</td>
<td className="text-center">2,9</td>
<td className="text-center">4,0</td>
<td className="text-center">4,7</td>
<td className="text-center">6,3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,2</td>
<td className="text-center">1,8</td>
<td className="text-center">2,6</td>
<td className="text-center">3,6</td>
<td className="text-center">4,3</td>
<td className="text-center">5,8</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; masse volumique de l&#39;U &le; 1,15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1,8</td>
<td className="text-center">2,4</td>
<td className="text-center">3,5</td>
<td className="text-center">4,5</td>
<td className="text-center">5,2</td>
<td className="text-center">6,5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,4</td>
<td className="text-center">2,0</td>
<td className="text-center">2,9</td>
<td className="text-center">3,8</td>
<td className="text-center">4,4</td>
<td className="text-center">5,6</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,2</td>
<td className="text-center">1,7</td>
<td className="text-center">2,4</td>
<td className="text-center">3,3</td>
<td className="text-center">3,8</td>
<td className="text-center">4,9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,0</td>
<td className="text-center">1,4</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">3,4</td>
<td className="text-center">4,4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0,9</td>
<td className="text-center">1,3</td>
<td className="text-center">1,9</td>
<td className="text-center">2,6</td>
<td className="text-center">3,0</td>
<td className="text-center">4,0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0,8</td>
<td className="text-center">1,1</td>
<td className="text-center">1,7</td>
<td className="text-center">2,3</td>
<td className="text-center">2,8</td>
<td className="text-center">3,7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0,7</td>
<td className="text-center">1,0</td>
<td className="text-center">1,5</td>
<td className="text-center">2,1</td>
<td className="text-center">2,5</td>
<td className="text-center">3,4</td>   </tr>   </table>  <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption className="text-center">Tableau 6-3 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 80 % en poids de <sup>235</sup>U, 20 % en poids de<sup> 238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,36 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">11,1</td>
<td className="text-center">15,1</td>
<td className="text-center">21,4</td>
<td className="text-center">27,7</td>
<td className="text-center">31,7</td>
<td className="text-center">39,1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8,9</td>
<td className="text-center">12,3</td>
<td className="text-center">17,7</td>
<td className="text-center">23,3</td>
<td className="text-center">27,0</td>
<td className="text-center">34,1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">7,5</td>
<td className="text-center">10,4</td>
<td className="text-center">15,1</td>
<td className="text-center">20,2</td>
<td className="text-center">23,6</td>
<td className="text-center">30,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">6,4</td>
<td className="text-center">9,0</td>
<td className="text-center">13,2</td>
<td className="text-center">17,8</td>
<td className="text-center">20,9</td>
<td className="text-center">27,1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5,7</td>
<td className="text-center">7,9</td>
<td className="text-center">11,7</td>
<td className="text-center">15,9</td>
<td className="text-center">18,8</td>
<td className="text-center">24,6</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">5,0</td>
<td className="text-center">7,1</td>
<td className="text-center">10,6</td>
<td className="text-center">14,4</td>
<td className="text-center">17,1</td>
<td className="text-center">22,6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4,6</td>
<td className="text-center">6,4</td>
<td className="text-center">9,6</td>
<td className="text-center">13,1</td>
<td className="text-center">15,7</td>
<td className="text-center">20,8</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3,0; masse volumique de l&#39;U &le; 4,57 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">7,0</td>
<td className="text-center">9,5</td>
<td className="text-center">13,5</td>
<td className="text-center">17,6</td>
<td className="text-center">20,2</td>
<td className="text-center">25,0</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">5,6</td>
<td className="text-center">7,7</td>
<td className="text-center">11,2</td>
<td className="text-center">14,8</td>
<td className="text-center">17,2</td>
<td className="text-center">21,7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4,7</td>
<td className="text-center">6,5</td>
<td className="text-center">9,5</td>
<td className="text-center">12,8</td>
<td className="text-center">14,9</td>
<td className="text-center">19,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">4,0</td>
<td className="text-center">5,6</td>
<td className="text-center">8,3</td>
<td className="text-center">11,2</td>
<td className="text-center">13,2</td>
<td className="text-center">17,2</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3,5</td>
<td className="text-center">5,0</td>
<td className="text-center">7,4</td>
<td className="text-center">10,0</td>
<td className="text-center">11,9</td>
<td className="text-center">15,6</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">6,6</td>
<td className="text-center">9,1</td>
<td className="text-center">10,8</td>
<td className="text-center">14,3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,8</td>
<td className="text-center">4,0</td>
<td className="text-center">6,0</td>
<td className="text-center">8,3</td>
<td className="text-center">9,9</td>
<td className="text-center">13,2</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; masse volumique de l&#39;U &le; 2,05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,3</td>
<td className="text-center">4,6</td>
<td className="text-center">6,5</td>
<td className="text-center">8,5</td>
<td className="text-center">9,7</td>
<td className="text-center">12,1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2,7</td>
<td className="text-center">3,7</td>
<td className="text-center">5,4</td>
<td className="text-center">7,1</td>
<td className="text-center">8,3</td>
<td className="text-center">10,5</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,2</td>
<td className="text-center">3,1</td>
<td className="text-center">4,6</td>
<td className="text-center">6,1</td>
<td className="text-center">7,2</td>
<td className="text-center">9,3</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,9</td>
<td className="text-center">2,7</td>
<td className="text-center">4,0</td>
<td className="text-center">5,4</td>
<td className="text-center">6,4</td>
<td className="text-center">8,3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,7</td>
<td className="text-center">2,4</td>
<td className="text-center">3,5</td>
<td className="text-center">4,8</td>
<td className="text-center">5,7</td>
<td className="text-center">7,5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,5</td>
<td className="text-center">2,1</td>
<td className="text-center">3,2</td>
<td className="text-center">4,3</td>
<td className="text-center">5,2</td>
<td className="text-center">6,9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,4</td>
<td className="text-center">1,9</td>
<td className="text-center">2,9</td>
<td className="text-center">4,0</td>
<td className="text-center">4,7</td>
<td className="text-center">6,3</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; masse volumique de l&#39;U &le; 1,15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1,8</td>
<td className="text-center">2,5</td>
<td className="text-center">3,6</td>
<td className="text-center">4,7</td>
<td className="text-center">5,4</td>
<td className="text-center">6,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,5</td>
<td className="text-center">2,0</td>
<td className="text-center">3,0</td>
<td className="text-center">3,9</td>
<td className="text-center">4,6</td>
<td className="text-center">5,8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,2</td>
<td className="text-center">1,7</td>
<td className="text-center">2,5</td>
<td className="text-center">3,4</td>
<td className="text-center">4,0</td>
<td className="text-center">5,1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,1</td>
<td className="text-center">1,5</td>
<td className="text-center">2,2</td>
<td className="text-center">3,0</td>
<td className="text-center">3,5</td>
<td className="text-center">4,6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0,9</td>
<td className="text-center">1,3</td>
<td className="text-center">2,0</td>
<td className="text-center">2,7</td>
<td className="text-center">3,1</td>
<td className="text-center">4,1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0,8</td>
<td className="text-center">1,2</td>
<td className="text-center">1,8</td>
<td className="text-center">2,4</td>
<td className="text-center">2,9</td>
<td className="text-center">3,8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0,7</td>
<td className="text-center">1,1</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">2,6</td>
<td className="text-center">3,5</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-4 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 70 % en poids de <sup>235</sup>U, 30 % en poids de <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">12,3</td>
<td className="text-center">16,8</td>
<td className="text-center">24,0</td>
<td className="text-center">31,2</td>
<td className="text-center">35,9</td>
<td className="text-center">44,6</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">9,9</td>
<td className="text-center">13,7</td>
<td className="text-center">19,8</td>
<td className="text-center">26,2</td>
<td className="text-center">30,5</td>
<td className="text-center">38,7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">8,3</td>
<td className="text-center">11,5</td>
<td className="text-center">16,9</td>
<td className="text-center">22,6</td>
<td className="text-center">26,5</td>
<td className="text-center">34,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">7,1</td>
<td className="text-center">10,0</td>
<td className="text-center">14,7</td>
<td className="text-center">19,9</td>
<td className="text-center">23,5</td>
<td className="text-center">30,6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">6,3</td>
<td className="text-center">8,8</td>
<td className="text-center">13,1</td>
<td className="text-center">17,8</td>
<td className="text-center">21,1</td>
<td className="text-center">27,7</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">5,6</td>
<td className="text-center">7,8</td>
<td className="text-center">11,7</td>
<td className="text-center">16,1</td>
<td className="text-center">19,1</td>
<td className="text-center">25,4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">5,0</td>
<td className="text-center">7,1</td>
<td className="text-center">10,7</td>
<td className="text-center">14,6</td>
<td className="text-center">17,5</td>
<td className="text-center">23,4</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3,0; masse volumique de l&#39;U &le; 4,57 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">7,5</td>
<td className="text-center">10,3</td>
<td className="text-center">14,7</td>
<td className="text-center">19,2</td>
<td className="text-center">22,2</td>
<td className="text-center">27,7</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">6,0</td>
<td className="text-center">8,3</td>
<td className="text-center">12,1</td>
<td className="text-center">16,1</td>
<td className="text-center">18,8</td>
<td className="text-center">23,9</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">5,0</td>
<td className="text-center">7,0</td>
<td className="text-center">10,3</td>
<td className="text-center">13,9</td>
<td className="text-center">16,3</td>
<td className="text-center">21,1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">4,3</td>
<td className="text-center">6,0</td>
<td className="text-center">9,0</td>
<td className="text-center">12,2</td>
<td className="text-center">14,4</td>
<td className="text-center">18,8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3,8</td>
<td className="text-center">5,3</td>
<td className="text-center">7,9</td>
<td className="text-center">10,8</td>
<td className="text-center">12,9</td>
<td className="text-center">17,0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3,4</td>
<td className="text-center">4,8</td>
<td className="text-center">7,1</td>
<td className="text-center">9,8</td>
<td className="text-center">11,7</td>
<td className="text-center">15,6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">3,0</td>
<td className="text-center">4,3</td>
<td className="text-center">6,5</td>
<td className="text-center">8,9</td>
<td className="text-center">10,7</td>
<td className="text-center">14,3</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; masse volumique de l&#39;U &le; 2,05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,5</td>
<td className="text-center">4,8</td>
<td className="text-center">6,8</td>
<td className="text-center">9,0</td>
<td className="text-center">10,4</td>
<td className="text-center">13,0</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2,8</td>
<td className="text-center">3,8</td>
<td className="text-center">5,6</td>
<td className="text-center">7,5</td>
<td className="text-center">8,7</td>
<td className="text-center">11,2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,8</td>
<td className="text-center">6,4</td>
<td className="text-center">7,6</td>
<td className="text-center">9,8</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,0</td>
<td className="text-center">2,8</td>
<td className="text-center">4,1</td>
<td className="text-center">5,6</td>
<td className="text-center">6,7</td>
<td className="text-center">8,8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,7</td>
<td className="text-center">2,5</td>
<td className="text-center">3,7</td>
<td className="text-center">5,0</td>
<td className="text-center">6,0</td>
<td className="text-center">7,9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,3</td>
<td className="text-center">4,5</td>
<td className="text-center">5,4</td>
<td className="text-center">7,2</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,4</td>
<td className="text-center">2,0</td>
<td className="text-center">3,0</td>
<td className="text-center">4,1</td>
<td className="text-center">4,9</td>
<td className="text-center">6,6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; masse volumique de l&#39;U &le; 1,15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2,0</td>
<td className="text-center">2,7</td>
<td className="text-center">3,8</td>
<td className="text-center">5,0</td>
<td className="text-center">5,8</td>
<td className="text-center">7,2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,2</td>
<td className="text-center">4,2</td>
<td className="text-center">4,9</td>
<td className="text-center">6,3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,3</td>
<td className="text-center">1,8</td>
<td className="text-center">2,7</td>
<td className="text-center">3,6</td>
<td className="text-center">4,3</td>
<td className="text-center">5,5</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,1</td>
<td className="text-center">1,6</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">3,8</td>
<td className="text-center">4,9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,0</td>
<td className="text-center">1,4</td>
<td className="text-center">2,1</td>
<td className="text-center">2,8</td>
<td className="text-center">3,4</td>
<td className="text-center">4,5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0,9</td>
<td className="text-center">1,2</td>
<td className="text-center">1,9</td>
<td className="text-center">2,6</td>
<td className="text-center">3,1</td>
<td className="text-center">4,1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0,8</td>
<td className="text-center">1,1</td>
<td className="text-center">1,7</td>
<td className="text-center">2,3</td>
<td className="text-center">2,8</td>
<td className="text-center">3,7</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-5 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 50 % en poids de <sup>235</sup>U, 50 % en poids de <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">12,7</td>
<td className="text-center">17,7</td>
<td className="text-center">26,0</td>
<td className="text-center">34,9</td>
<td className="text-center">40,9</td>
<td className="text-center">52,9</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">10,6</td>
<td className="text-center">14,8</td>
<td className="text-center">22,0</td>
<td className="text-center">29,9</td>
<td className="text-center">35,3</td>
<td className="text-center">46,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">9,1</td>
<td className="text-center">12,8</td>
<td className="text-center">19,1</td>
<td className="text-center">26,1</td>
<td className="text-center">31,0</td>
<td className="text-center">41,1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">8,0</td>
<td className="text-center">11,2</td>
<td className="text-center">16,9</td>
<td className="text-center">23,2</td>
<td className="text-center">27,7</td>
<td className="text-center">37,0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">7,1</td>
<td className="text-center">10,0</td>
<td className="text-center">15,1</td>
<td className="text-center">20,9</td>
<td className="text-center">25,0</td>
<td className="text-center">33,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3,0; masse volumique de l&#39;U &le; 4,58 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">8,7</td>
<td className="text-center">12,0</td>
<td className="text-center">17,5</td>
<td className="text-center">23,2</td>
<td className="text-center">27,0</td>
<td className="text-center">34,5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">6,9</td>
<td className="text-center">9,7</td>
<td className="text-center">14,3</td>
<td className="text-center">19,2</td>
<td className="text-center">22,6</td>
<td className="text-center">29,4</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">5,8</td>
<td className="text-center">8,1</td>
<td className="text-center">12,1</td>
<td className="text-center">16,4</td>
<td className="text-center">19,4</td>
<td className="text-center">25,6</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5,0</td>
<td className="text-center">7,0</td>
<td className="text-center">10,5</td>
<td className="text-center">14,3</td>
<td className="text-center">17,1</td>
<td className="text-center">22,7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">4,3</td>
<td className="text-center">6,1</td>
<td className="text-center">9,2</td>
<td className="text-center">12,7</td>
<td className="text-center">15,2</td>
<td className="text-center">20,4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3,9</td>
<td className="text-center">5,5</td>
<td className="text-center">8,3</td>
<td className="text-center">11,4</td>
<td className="text-center">13,7</td>
<td className="text-center">18,5</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; masse volumique de l&#39;U &le; 2,06 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">6,4</td>
<td className="text-center">8,6</td>
<td className="text-center">10,1</td>
<td className="text-center">13,0</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,6</td>
<td className="text-center">3,7</td>
<td className="text-center">5,4</td>
<td className="text-center">7,4</td>
<td className="text-center">8,7</td>
<td className="text-center">11,4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,7</td>
<td className="text-center">6,4</td>
<td className="text-center">7,7</td>
<td className="text-center">10,1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,0</td>
<td className="text-center">2,8</td>
<td className="text-center">4,2</td>
<td className="text-center">5,7</td>
<td className="text-center">6,8</td>
<td className="text-center">9,1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,8</td>
<td className="text-center">2,5</td>
<td className="text-center">3,7</td>
<td className="text-center">5,2</td>
<td className="text-center">6,2</td>
<td className="text-center">8,3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,4</td>
<td className="text-center">4,7</td>
<td className="text-center">5,6</td>
<td className="text-center">7,6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; masse volumique de l&#39;U &le; 1,15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">4,2</td>
<td className="text-center">5,4</td>
<td className="text-center">6,3</td>
<td className="text-center">7,8</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,7</td>
<td className="text-center">2,4</td>
<td className="text-center">3,4</td>
<td className="text-center">4,5</td>
<td className="text-center">5,3</td>
<td className="text-center">6,8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,4</td>
<td className="text-center">2,0</td>
<td className="text-center">2,9</td>
<td className="text-center">3,9</td>
<td className="text-center">4,6</td>
<td className="text-center">6,0</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,1</td>
<td className="text-center">1,5</td>
<td className="text-center">2,2</td>
<td className="text-center">3,1</td>
<td className="text-center">3,6</td>
<td className="text-center">4,8</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,0</td>
<td className="text-center">1,3</td>
<td className="text-center">2,0</td>
<td className="text-center">2,8</td>
<td className="text-center">3,3</td>
<td className="text-center">4,4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0,9</td>
<td className="text-center">1,2</td>
<td className="text-center">1,8</td>
<td className="text-center">2,5</td>
<td className="text-center">3,0</td>
<td className="text-center">4,0</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-6 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 30 % en poids de <sup>235</sup>U, 70 % en poids de <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,38 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">24,6</td>
<td className="text-center">34,2</td>,
<td className="text-center">50,5</td>
<td className="text-center">68,0</td>
<td className="text-center">80,0</td>
<td className="text-center">103,9</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">19,5</td>
<td className="text-center">27,4</td>
<td className="text-center">40,8</td>
<td className="text-center">55,7</td>
<td className="text-center">66,1</td>
<td className="text-center">87,3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">16,2</td>
<td className="text-center">22,9</td>
<td className="text-center">34,3</td>
<td className="text-center">47,3</td>
<td className="text-center">56,4</td>
<td className="text-center">75,4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">13,9</td>
<td className="text-center">19,6</td>
<td className="text-center">29,7</td>
<td className="text-center">41,0</td>
<td className="text-center">49,2</td>
<td className="text-center">66,4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">12,1</td>
<td className="text-center">17,2</td>
<td className="text-center">26,1</td>
<td className="text-center">36,3</td>
<td className="text-center">43,7</td>
<td className="text-center">59,3</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">10,8</td>
<td className="text-center">15,3</td>
<td className="text-center">23,3</td>
<td className="text-center">32,5</td>
<td className="text-center">39,2</td>
<td className="text-center">53,6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">9,7</td>
<td className="text-center">13,8</td>
<td className="text-center">21,1</td>
<td className="text-center">29,5</td>
<td className="text-center">35,6</td>
<td className="text-center">48,9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3,0; masse volumique de l&#39;U &le; 4,58 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">11,1</td>
<td className="text-center">15,3</td>
<td className="text-center">22,4</td>
<td className="text-center">29,8</td>
<td className="text-center">34,8</td>
<td className="text-center">44,5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8,8</td>
<td className="text-center">12,3</td>
<td className="text-center">18,2</td>
<td className="text-center">24,6</td>
<td className="text-center">29,0</td>
<td className="text-center">37,8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">7,4</td>
<td className="text-center">10,3</td>
<td className="text-center">15,4</td>
<td className="text-center">21,0</td>
<td className="text-center">24,9</td>
<td className="text-center">32,9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">6,3</td>
<td className="text-center">8,9</td>
<td className="text-center">13,3</td>
<td className="text-center">18,3</td>
<td className="text-center">21,8</td>
<td className="text-center">29,1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5,5</td>
<td className="text-center">7,8</td>
<td className="text-center">11,8</td>
<td className="text-center">16,2</td>
<td className="text-center">19,4</td>
<td className="text-center">26,2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4,9</td>
<td className="text-center">7,0</td>
<td className="text-center">10,5</td>
<td className="text-center">14,6</td>
<td className="text-center">17,5</td>
<td className="text-center">23,7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4,4</td>
<td className="text-center">6,3</td>
<td className="text-center">9,5</td>
<td className="text-center">13,3</td>
<td className="text-center">16,0</td>
<td className="text-center">21,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; masse volumique de l&#39;U &le; 1,15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,9</td>
<td className="text-center">2,6</td>
<td className="text-center">3,9</td>
<td className="text-center">5,1</td>
<td className="text-center">6,0</td>
<td className="text-center">7,7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,3</td>
<td className="text-center">4,4</td>
<td className="text-center">5,2</td>
<td className="text-center">6,7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,4</td>
<td className="text-center">1,9</td>
<td className="text-center">2,9</td>
<td className="text-center">3,9</td>
<td className="text-center">4,6</td>
<td className="text-center">6,0</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,2</td>
<td className="text-center">1,7</td>
<td className="text-center">2,5</td>
<td className="text-center">3,5</td>
<td className="text-center">4,1</td>
<td className="text-center">5,4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,1</td>
<td className="text-center">1,5</td>
<td className="text-center">2,3</td>
<td className="text-center">3,1</td>
<td className="text-center">3,7</td>
<td className="text-center">5,0</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,0</td>
<td className="text-center">1,4</td>
<td className="text-center">2,1</td>
<td className="text-center">2,8</td>
<td className="text-center">3,4</td>
<td className="text-center">4,6</td>   </tr>   </table>
<p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-7 : Limite de masse unitaire en kilogrammes de plutonium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; M&eacute;tal, 100 % en poids de <sup>239</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 0,01 ; masse volumique du Pu &le; 19,7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,4</td>
<td className="text-center">4,1</td>
<td className="text-center">4,9</td>
<td className="text-center">5,5<sup>b</sup></td>
<td className="text-center">5,8<sup>b</sup></td>
<td className="text-center">6,3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2,9</td>
<td className="text-center">3,6</td>
<td className="text-center">4,4</td>
<td className="text-center">5,1<sup>b</sup></td>
<td className="text-center">5,4<sup>b</sup></td>
<td className="text-center">6,0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,6</td>
<td className="text-center">3,2</td>
<td className="text-center">4,1</td>
<td className="text-center">4,7</td>
<td className="text-center">5,1<sup>b</sup></td>
<td className="text-center">5,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,3</td>
<td className="text-center">2,9</td>
<td className="text-center">3,8</td>
<td className="text-center">4,4</td>
<td className="text-center">4,8<sup>b</sup></td>
<td className="text-center">5,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,1</td>
<td className="text-center">2,7</td>
<td className="text-center">3,5</td>
<td className="text-center">4,2</td>
<td className="text-center">4,6</td>
<td className="text-center">5,2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,9</td>
<td className="text-center">2,5</td>
<td className="text-center">3,3</td>
<td className="text-center">3,9</td>
<td className="text-center">4,3</td>
<td className="text-center">5,0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,7</td>
<td className="text-center">2,3</td>
<td className="text-center">3,1</td>
<td className="text-center">3,7</td>
<td className="text-center">4,1</td>
<td className="text-center">4,8</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne au plutonium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 6-8 : Limite de masse unitaire en kilogrammes de plutonium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; Oxydes, 100 % en poids de <sup>239</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 0,4 ; masse volumique du Pu &le; 8,73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4,7</td>
<td className="text-center">6,1</td>
<td className="text-center">8,2</td>
<td className="text-center">10,0</td>
<td className="text-center">11,1<sup>b</sup></td>
<td className="text-center">12,9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,9</td>
<td className="text-center">5,1</td>
<td className="text-center">7,0</td>
<td className="text-center">8,8</td>
<td className="text-center">9,9</td>
<td className="text-center">11,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,3</td>
<td className="text-center">4,4</td>
<td className="text-center">6,2</td>
<td className="text-center">7,8</td>
<td className="text-center">8,9</td>
<td className="text-center">10,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,9</td>
<td className="text-center">3,9</td>
<td className="text-center">5,5</td>
<td className="text-center">7,1</td>
<td className="text-center">8,1</td>
<td className="text-center">9,9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,5</td>
<td className="text-center">3,5</td>
<td className="text-center">4,9</td>
<td className="text-center">6,4</td>
<td className="text-center">7,4</td>
<td className="text-center">9,2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,3</td>
<td className="text-center">3,1</td>
<td className="text-center">4,5</td>
<td className="text-center">5,9</td>
<td className="text-center">6,8</td>
<td className="text-center">8,6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">4,1</td>
<td className="text-center">5,5</td>
<td className="text-center">6,3</td>
<td className="text-center">8,0</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 3,0 ; masse volumique du Pu &le; 4,70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,9</td>
<td className="text-center">5,2</td>
<td className="text-center">7,2</td>
<td className="text-center">9,0</td>
<td className="text-center">10,1</td>
<td className="text-center">12,0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,2</td>
<td className="text-center">4,3</td>
<td className="text-center">6,1</td>
<td className="text-center">7,8</td>
<td className="text-center">8,8</td>
<td className="text-center">10,7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,7</td>
<td className="text-center">3,7</td>
<td className="text-center">5,2</td>
<td className="text-center">6,8</td>
<td className="text-center">7,8</td>
<td className="text-center">9,7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,6</td>
<td className="text-center">6,1</td>
<td className="text-center">7,0</td>
<td className="text-center">8,9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">4,1</td>
<td className="text-center">5,5</td>
<td className="text-center">6,4</td>
<td className="text-center">8,1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,8</td>
<td className="text-center">2,6</td>
<td className="text-center">3,8</td>
<td className="text-center">5,0</td>
<td className="text-center">5,9</td>
<td className="text-center">7,5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,7</td>
<td className="text-center">2,3</td>
<td className="text-center">3,4</td>
<td className="text-center">4,6</td>
<td className="text-center">5,4</td>
<td className="text-center">7,0</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 10 ; masse volumique du Pu &le; 2,10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2,4</td>
<td className="text-center">3,3</td>
<td className="text-center">4,6</td>
<td className="text-center">5,8</td>
<td className="text-center">6,6</td>
<td className="text-center">8,1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,9</td>
<td className="text-center">2,7</td>
<td className="text-center">3,8</td>
<td className="text-center">5,0</td>
<td className="text-center">5,7</td>
<td className="text-center">7,1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,6</td>
<td className="text-center">2,3</td>
<td className="text-center">3,3</td>
<td className="text-center">4,3</td>
<td className="text-center">5,0</td>
<td className="text-center">6,3</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,4</td>
<td className="text-center">2,0</td>
<td className="text-center">2,9</td>
<td className="text-center">3,8</td>
<td className="text-center">4,5</td>
<td className="text-center">5,7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,2</td>
<td className="text-center">1,7</td>
<td className="text-center">2,5</td>
<td className="text-center">3,4</td>
<td className="text-center">4,0</td>
<td className="text-center">5,2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,1</td>
<td className="text-center">1,6</td>
<td className="text-center">2,3</td>
<td className="text-center">3,1</td>
<td className="text-center">3,7</td>
<td className="text-center">4,8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,0</td>
<td className="text-center">1,4</td>
<td className="text-center">2,1</td>
<td className="text-center">2,8</td>
<td className="text-center">3,4</td>
<td className="text-center">4,4</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 20 ; masse volumique du Pu &le; 1,17 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1,6</td>
<td className="text-center">2,1</td>
<td className="text-center">3,0</td>
<td className="text-center">3,8</td>
<td className="text-center">4,4</td>
<td className="text-center">5,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1,3</td>
<td className="text-center">1,7</td>
<td className="text-center">2,5</td>
<td className="text-center">3,2</td>
<td className="text-center">3,7</td>
<td className="text-center">4,7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1,1</td>
<td className="text-center">1,5</td>
<td className="text-center">2,1</td>
<td className="text-center">2,8</td>
<td className="text-center">3,3</td>
<td className="text-center">4,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">0,9</td>
<td className="text-center">1,3</td>
<td className="text-center">1,9</td>
<td className="text-center">2,5</td>
<td className="text-center">2,9</td>
<td className="text-center">3,8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0,8</td>
<td className="text-center">1,1</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">2,6</td>
<td className="text-center">3,4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0,7</td>
<td className="text-center">1,0</td>
<td className="text-center">1,5</td>
<td className="text-center">2,0</td>
<td className="text-center">2,4</td>
<td className="text-center">3,1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0,6</td>
<td className="text-center">0,9</td>
<td className="text-center">1,3</td>
<td className="text-center">1,8</td>
<td className="text-center">2,2</td>
<td className="text-center">2,9</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne au plutonium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
<table className="width-100">  <caption>Tableau 6-9 : Limite de masse unitaire en kilogrammes de plutonium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; M&eacute;tal et oxydes, 94,8 % en poids de <sup>239</sup>Pu, 5,2 % en poids de <sup>240</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(M&eacute;tal; H/Pu<sup>a</sup> &le; 0,01; masse volumique du Pu &le; 19,7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,5</td>
<td className="text-center">4,3</td>
<td className="text-center">5,2</td>
<td className="text-center">5,8<sup>b</sup></td>
<td className="text-center">6,2<sup>b</sup></td>
<td className="text-center">6,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,0</td>
<td className="text-center">3,8</td>
<td className="text-center">4,7</td>
<td className="text-center">5,4<sup>b</sup></td>
<td className="text-center">5,8<sup>b</sup></td>
<td className="text-center">6,3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,7</td>
<td className="text-center">3,4</td>
<td className="text-center">4,3</td>
<td className="text-center">5,0</td>
<td className="text-center">5,4<sup>b</sup></td>
<td className="text-center">6,0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,4</td>
<td className="text-center">3,0</td>
<td className="text-center">3,9</td>
<td className="text-center">4,7</td>
<td className="text-center">5,1</td>
<td className="text-center">5,8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,2</td>
<td className="text-center">2,8</td>
<td className="text-center">3,7</td>
<td className="text-center">4,4</td>
<td className="text-center">4,8</td>
<td className="text-center">5,5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,0</td>
<td className="text-center">2,6</td>
<td className="text-center">3,4</td>
<td className="text-center">4,2</td>
<td className="text-center">4,6</td>
<td className="text-center">5,3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,8</td>
<td className="text-center">2,4</td>
<td className="text-center">3,2</td>
<td className="text-center">3,9</td>
<td className="text-center">4,4</td>
<td className="text-center">5,1</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium; H/Pu<sup>a</sup> &le; 0,4; masse volumique du Pu &le; 8,73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5,0</td>
<td className="text-center">6,6</td>
<td className="text-center">8,8</td>
<td className="text-center">10,9</td>
<td className="text-center">12,0<sup>b</sup></td>
<td className="text-center">14,0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4,1</td>
<td className="text-center">5,5</td>
<td className="text-center">7,6</td>
<td className="text-center">9,5</td>
<td className="text-center">10,7</td>
<td className="text-center">12,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,5</td>
<td className="text-center">4,7</td>
<td className="text-center">6,6</td>
<td className="text-center">8,4</td>
<td className="text-center">9,6</td>
<td className="text-center">11,6<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3,1</td>
<td className="text-center">4,2</td>
<td className="text-center">5,9</td>
<td className="text-center">7,6</td>
<td className="text-center">8,7</td>
<td className="text-center">10,7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,7</td>
<td className="text-center">3,7</td>
<td className="text-center">5,3</td>
<td className="text-center">6,9</td>
<td className="text-center">8,0</td>
<td className="text-center">9,9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,4</td>
<td className="text-center">3,3</td>
<td className="text-center">4,8</td>
<td className="text-center">6,3</td>
<td className="text-center">7,3</td>
<td className="text-center">9,2</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,2</td>
<td className="text-center">3,0</td>
<td className="text-center">4,4</td>
<td className="text-center">5,9</td>
<td className="text-center">6,8</td>
<td className="text-center">8,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium; H/Pu<sup>a</sup> &le; 3,0; masse volumique du Pu &le; 4,70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4,4</td>
<td className="text-center">5,9</td>
<td className="text-center">8,1</td>
<td className="text-center">10,3</td>
<td className="text-center">11,6</td>
<td className="text-center">13,9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,5</td>
<td className="text-center">4,8</td>
<td className="text-center">6,8</td>
<td className="text-center">8,8</td>
<td className="text-center">10,0</td>
<td className="text-center">12,3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,0</td>
<td className="text-center">4,1</td>
<td className="text-center">5,9</td>
<td className="text-center">7,7</td>
<td className="text-center">8,9</td>
<td className="text-center">11,1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,6</td>
<td className="text-center">3,6</td>
<td className="text-center">5,2</td>
<td className="text-center">6,8</td>
<td className="text-center">7,9</td>
<td className="text-center">10,1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,6</td>
<td className="text-center">6,2</td>
<td className="text-center">7,2</td>
<td className="text-center">9,2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,0</td>
<td className="text-center">2,8</td>
<td className="text-center">4,2</td>
<td className="text-center">5,6</td>
<td className="text-center">6,6</td>
<td className="text-center">8,5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,8</td>
<td className="text-center">2,6</td>
<td className="text-center">3,8</td>
<td className="text-center">5,1</td>
<td className="text-center">6,1</td>
<td className="text-center">7,9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium;<sup>c</sup> H/Pu<sup>a</sup> &le; 10; masse volumique du Pu &le; 2,10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,0</td>
<td className="text-center">4,1</td>
<td className="text-center">5,8</td>
<td className="text-center">7,5</td>
<td className="text-center">8,5</td>
<td className="text-center">10,5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2,5</td>
<td className="text-center">3,4</td>
<td className="text-center">4,8</td>
<td className="text-center">6,3</td>
<td className="text-center">7,3</td>
<td className="text-center">9,2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,1</td>
<td className="text-center">2,8</td>
<td className="text-center">4,1</td>
<td className="text-center">5,5</td>
<td className="text-center">6,4</td>
<td className="text-center">8,2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1,8</td>
<td className="text-center">2,5</td>
<td className="text-center">3,6</td>
<td className="text-center">4,9</td>
<td className="text-center">5,7</td>
<td className="text-center">7,3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">5,1</td>
<td className="text-center">6,7</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,4</td>
<td className="text-center">2,0</td>
<td className="text-center">2,9</td>
<td className="text-center">3,9</td>
<td className="text-center">4,7</td>
<td className="text-center">6,1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,3</td>
<td className="text-center">1,8</td>
<td className="text-center">2,6</td>
<td className="text-center">3,6</td>
<td className="text-center">4,3</td>
<td className="text-center">5,7</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne au plutonium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.<br />
<sup>c</sup>&nbsp;Limites applicables aux mati&egrave;res contenant moins de 1 % en poids de <sup>241</sup>Pu [32].</p>  <br />
<table className="width-100">  <caption>Tableau 6-10 : Limite de masse unitaire en kilogrammes de plutonium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; M&eacute;tal et oxydes, 80 % en poids de <sup>239</sup>Pu, 20 % en poids de <sup>240</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(M&eacute;tal; H/Pu<sup>a</sup> &le; 0,01; masse volumique du Pu &le; 19,7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,9</td>
<td className="text-center">4,7</td>
<td className="text-center">5,7</td>
<td className="text-center">6,5<sup>b</sup></td>
<td className="text-center">6,9<sup>b</sup></td>
<td className="text-center">7,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,4</td>
<td className="text-center">4,2</td>
<td className="text-center">5,2</td>
<td className="text-center">6,0</td>
<td className="text-center">6,4<sup>b</sup></td>
<td className="text-center">7,1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,9</td>
<td className="text-center">3,7</td>
<td className="text-center">4,7</td>
<td className="text-center">5,6</td>
<td className="text-center">6,0</td>
<td className="text-center">6,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,6</td>
<td className="text-center">3,4</td>
<td className="text-center">4,4</td>
<td className="text-center">5,2</td>
<td className="text-center">5,7</td>
<td className="text-center">6,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,4</td>
<td className="text-center">3,1</td>
<td className="text-center">4,0</td>
<td className="text-center">4,9</td>
<td className="text-center">5,4</td>
<td className="text-center">6,1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,2</td>
<td className="text-center">2,8</td>
<td className="text-center">3,8</td>
<td className="text-center">4,6</td>
<td className="text-center">5,1</td>
<td className="text-center">5,9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,0</td>
<td className="text-center">2,6</td>
<td className="text-center">3,5</td>
<td className="text-center">4,3</td>
<td className="text-center">4,8</td>
<td className="text-center">5,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium; H/Pu<sup>a</sup> &le; 0,4; masse volumique du Pu &le; 8,73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5,7</td>
<td className="text-center">7,5</td>
<td className="text-center">9,9</td>
<td className="text-center">12,1</td>
<td className="text-center">13,4</td>
<td className="text-center">15,5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4,7</td>
<td className="text-center">6,3</td>
<td className="text-center">8,5</td>
<td className="text-center">10,6</td>
<td className="text-center">11,9</td>
<td className="text-center">14,1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4,0</td>
<td className="text-center">5,4</td>
<td className="text-center">7,5</td>
<td className="text-center">9,5</td>
<td className="text-center">10,7</td>
<td className="text-center">12,9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3,5</td>
<td className="text-center">4,7</td>
<td className="text-center">6,7</td>
<td className="text-center">8,6</td>
<td className="text-center">9,8</td>
<td className="text-center">11,9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3,1</td>
<td className="text-center">4,2</td>
<td className="text-center">6,0</td>
<td className="text-center">7,8</td>
<td className="text-center">9,0</td>
<td className="text-center">11,1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,8</td>
<td className="text-center">3,8</td>
<td className="text-center">5,5</td>
<td className="text-center">7,2</td>
<td className="text-center">8,3</td>
<td className="text-center">10,4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,5</td>
<td className="text-center">3,5</td>
<td className="text-center">5,0</td>
<td className="text-center">6,6</td>
<td className="text-center">7,7</td>
<td className="text-center">9,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium; H/Pu<sup>a</sup> &le; 3,0; masse volumique du Pu &le; 4,70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5,4</td>
<td className="text-center">7,2</td>
<td className="text-center">10,0</td>
<td className="text-center">12,6</td>
<td className="text-center">14,3</td>
<td className="text-center">17,1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4,4</td>
<td className="text-center">5,9</td>
<td className="text-center">8,4</td>
<td className="text-center">10,8</td>
<td className="text-center">12,4</td>
<td className="text-center">15,2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,7</td>
<td className="text-center">5,0</td>
<td className="text-center">7,2</td>
<td className="text-center">9,5</td>
<td className="text-center">10,9</td>
<td className="text-center">13,7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">6,4</td>
<td className="text-center">8,4</td>
<td className="text-center">9,8</td>
<td className="text-center">12,4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,8</td>
<td className="text-center">3,9</td>
<td className="text-center">5,7</td>
<td className="text-center">7,6</td>
<td className="text-center">8,9</td>
<td className="text-center">11,4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,5</td>
<td className="text-center">3,5</td>
<td className="text-center">5,1</td>
<td className="text-center">6,9</td>
<td className="text-center">8,1</td>
<td className="text-center">10,5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,7</td>
<td className="text-center">6,3</td>
<td className="text-center">7,5</td>
<td className="text-center">9,7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes de plutonium;<sup>c</sup> H/Pu<sup>a</sup> &le; 10; masse volumique du Pu &le; 2,10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3,7</td>
<td className="text-center">5,1</td>
<td className="text-center">7,3</td>
<td className="text-center">9,5</td>
<td className="text-center">11,0</td>
<td className="text-center">13,6</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,0</td>
<td className="text-center">4,1</td>
<td className="text-center">6,0</td>
<td className="text-center">7,9</td>
<td className="text-center">9,3</td>
<td className="text-center">11,8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2,6</td>
<td className="text-center">3,5</td>
<td className="text-center">5,1</td>
<td className="text-center">6,8</td>
<td className="text-center">8,0</td>
<td className="text-center">10,4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,2</td>
<td className="text-center">3,0</td>
<td className="text-center">4,5</td>
<td className="text-center">6,0</td>
<td className="text-center">7,1</td>
<td className="text-center">9,3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,0</td>
<td className="text-center">2,6</td>
<td className="text-center">3,9</td>
<td className="text-center">5,4</td>
<td className="text-center">6,4</td>
<td className="text-center">8,4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1,7</td>
<td className="text-center">2,4</td>
<td className="text-center">3,6</td>
<td className="text-center">4,8</td>
<td className="text-center">5,8</td>
<td className="text-center">7,7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1,6</td>
<td className="text-center">2,2</td>
<td className="text-center">3,2</td>
<td className="text-center">4,5</td>
<td className="text-center">5,3</td>
<td className="text-center">7,1</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne au plutonium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.<br />
<sup>c</sup>&nbsp;Limites applicables aux mati&egrave;res contenant moins de 1 % en poids de <sup>241</sup>Pu [32].</p>  <br />
<table className="width-100"><caption>Tableau 6-11 : Limite de masse unitaire en kilogrammes d&rsquo;uranium par cellule dans des r&eacute;seaux de stockage r&eacute;fl&eacute;chis par l&rsquo;eau &ndash; 100 % en poids de <sup>233</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nombre d&rsquo;unit&eacute;s dans les r&eacute;seaux de stockage cubiques</th>
<th colSpan="6" className="text-center">Dimensions minimales des cellules de stockage cubiques (en mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(M&eacute;tal; H/U<sup>a</sup> &le; 0,01; masse volumique de l&#39;U &le; 18,4 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4,2</td>
<td className="text-center">5,3</td>
<td className="text-center">6,7</td>
<td className="text-center">7,8<sup>b</sup></td>
<td className="text-center">8,5<sup>b</sup></td>
<td className="text-center">9,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3,5</td>
<td className="text-center">4,5</td>
<td className="text-center">5,9</td>
<td className="text-center">7,1<sup>b</sup></td>
<td className="text-center">7,7<sup>b</sup></td>
<td className="text-center">8,8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,1</td>
<td className="text-center">4,0</td>
<td className="text-center">5,3</td>
<td className="text-center">6,4</td>
<td className="text-center">7,1<sup>b</sup></td>
<td className="text-center">8,2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,7</td>
<td className="text-center">3,5</td>
<td className="text-center">4,8</td>
<td className="text-center">5,9</td>
<td className="text-center">6,6</td>
<td className="text-center">7,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,4</td>
<td className="text-center">3,2</td>
<td className="text-center">4,4</td>
<td className="text-center">5,5</td>
<td className="text-center">6,1</td>
<td className="text-center">7,3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,2</td>
<td className="text-center">2,9</td>
<td className="text-center">4,0</td>
<td className="text-center">5,1</td>
<td className="text-center">5,8</td>
<td className="text-center">6,9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,0</td>
<td className="text-center">2,7</td>
<td className="text-center">3,7</td>
<td className="text-center">4,8</td>
<td className="text-center">5,4</td>
<td className="text-center">6,6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxydes d&#39;uranium; H/U<sup>a</sup> &le; 0,4; masse volumique de l&#39;U &le; 8,21 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4,9</td>
<td className="text-center">6,6</td>
<td className="text-center">9,1</td>
<td className="text-center">11,5</td>
<td className="text-center">12,9<sup>b</sup></td>
<td className="text-center">15,4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4,0</td>
<td className="text-center">5,4</td>
<td className="text-center">7,7</td>
<td className="text-center">9,9</td>
<td className="text-center">11,2</td>
<td className="text-center">13,7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3,4</td>
<td className="text-center">4,6</td>
<td className="text-center">6,6</td>
<td className="text-center">8,6</td>
<td className="text-center">9,9</td>
<td className="text-center">12,4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2,9</td>
<td className="text-center">4,0</td>
<td className="text-center">5,8</td>
<td className="text-center">7,7</td>
<td className="text-center">8,9</td>
<td className="text-center">11,3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2,6</td>
<td className="text-center">3,6</td>
<td className="text-center">5,2</td>
<td className="text-center">6,9</td>
<td className="text-center">8,1</td>
<td className="text-center">10,3</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2,3</td>
<td className="text-center">3,2</td>
<td className="text-center">4,7</td>
<td className="text-center">6,3</td>
<td className="text-center">7,4</td>
<td className="text-center">9,6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2,1</td>
<td className="text-center">2,9</td>
<td className="text-center">4,3</td>
<td className="text-center">5,8</td>
<td className="text-center">6,8</td>
<td className="text-center">8,9</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Rapport atomique de l&rsquo;hydrog&egrave;ne &agrave; l&rsquo;uranium.<br />
<sup>b</sup>&nbsp;Les valeurs sont sup&eacute;rieures &agrave; 90 % de la masse sph&eacute;rique critique r&eacute;fl&eacute;chie par l&rsquo;eau.</p>  <br />
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
<h2 id="sec7">7. Crit&egrave;res relatifs aux contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans les activit&eacute;s avec blindage et confinement</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.10-2015, <span lang="en"><em>Criteria for Nuclear Criticality Safety Controls in Operations with Shielding and Confinement</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec7-1">7.1	Introduction</h3>  <p>La section 2, intitul&eacute;e <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, donne des directives relatives &agrave; la pr&eacute;vention des accidents de criticit&eacute; lors de la manutention, du stockage, du traitement et du transport des mati&egrave;res fissiles. La sous section 2.3.2.1 pr&eacute;cise que, en partie, &laquo; une distinction peut &ecirc;tre faite entre les installations blind&eacute;es et non blind&eacute;es et les crit&egrave;res peuvent &ecirc;tre moins rigoureux s&rsquo;il y a en place des dispositifs de blindage ou de confinement assurant la protection du personnel. &raquo;</p>  <p>La section 7 reconna&icirc;t que, dans le cas o&ugrave; il existe un blindage contre le rayonnement et un confinement des mati&egrave;res radioactives ad&eacute;quats, les dangers normalement associ&eacute;s &agrave; la criticit&eacute; dans une installation autoris&eacute;e o&ugrave; il n&rsquo;existe pas de blindage ni de confinement sont r&eacute;duits au minimum.</p>  <p>La pr&eacute;sente section fournit des crit&egrave;res relatifs &agrave; :</p>
<ol>
<li>la pr&eacute;vention des accidents de criticit&eacute; nucl&eacute;aire dans les installations dot&eacute;es de blindage et de confinement</li>
<li>la pertinence du blindage et du confinement requis</li>
</ol>  <p>La pr&eacute;sente section ne s&rsquo;applique pas aux activit&eacute;s exigeant l&rsquo;acc&egrave;s du personnel &agrave; l&rsquo;int&eacute;rieur des zones de proc&eacute;d&eacute; blind&eacute;es o&ugrave; des mati&egrave;res fissiles et fissiles se trouvent. Cette section n&rsquo;inclut pas non plus de sp&eacute;cifications techniques pour la conception du blindage ou pour &eacute;tablir s&rsquo;il est ad&eacute;quat. La pr&eacute;sente section ne doit pas &ecirc;tre interpr&eacute;t&eacute;e comme d&eacute;courageant l&rsquo;utilisation de caract&eacute;ristiques de s&ucirc;ret&eacute; additionnelles qu&rsquo;il peut &ecirc;tre pratique d&rsquo;int&eacute;grer.</p>
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
<h3 id="sec7-2">7.2	Port&eacute;e</h3>  <p>La pr&eacute;sente section s&rsquo;applique aux activit&eacute;s comportant du <sup>235</sup>U, <sup>233</sup>U, <sup>239</sup>Pu et d&rsquo;autres mati&egrave;res fissiles et fissionnables &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs nucl&eacute;aires, et o&ugrave; le blindage et le confinement sont pr&eacute;sents pour assurer la protection du personnel et du public, &agrave; l&rsquo;exception des assemblages de ces mati&egrave;res dans des conditions contr&ocirc;l&eacute;es, comme les exp&eacute;riences de criticit&eacute;. Des crit&egrave;res sont fournis et peuvent &ecirc;tre utilis&eacute;s pour le contr&ocirc;le de la criticit&eacute; dans ces conditions. La pr&eacute;sente section n&rsquo;inclut pas de proc&eacute;dures administratives d&eacute;taill&eacute;es pour le contr&ocirc;le (qui est consid&eacute;r&eacute; comme &eacute;tant une pr&eacute;rogative de la direction) ou de renseignements d&eacute;taill&eacute;s concernant la conception des proc&eacute;d&eacute;s et de l&rsquo;&eacute;quipement ou des descriptions d&rsquo;instruments destin&eacute;s au contr&ocirc;le de proc&eacute;d&eacute;.</p>
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
<h3 id="sec7-3">7.3	Crit&egrave;res relatifs au blindage et au confinement ad&eacute;quats</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3.1"></div>
<h4 id="sec7-3-1">7.3.1 Conditions</h4>  <p>Les dispositions de la pr&eacute;sente section peuvent &ecirc;tre appliqu&eacute;es seulement aux installations blind&eacute;es qui respectent les crit&egrave;res suivants :</p>
<ol>
<li>toutes les op&eacute;rations et manipulations de mati&egrave;res fissiles et fissionnables sont effectu&eacute;es &agrave; distance par des personnes se trouvant &agrave; l&rsquo;ext&eacute;rieur de la zone blind&eacute;e</li>
<li>le blindage et le confinement sont ad&eacute;quats pour respecter les limites de dose de rayonnement pr&eacute;cis&eacute;es &agrave; la section 7.3.2</li>
</ol>  <p>Ainsi, une enceinte de stockage ne peut &ecirc;tre qualifi&eacute;e, &agrave; moins que les ajouts ou les retraits de mati&egrave;res fissiles soient effectu&eacute;s par des dispositifs t&eacute;l&eacute;command&eacute;s. Les crit&egrave;res qui sont pr&eacute;sent&eacute;s ici ne tiennent compte que de la pertinence du blindage et du confinement pour les accidents de criticit&eacute;. Un blindage additionnel pourrait &ecirc;tre requis par les conditions de proc&eacute;d&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3.2"></div>
<h4 id="sec7-3-2">7.3.2	Pertinence du blindage et du confinement</h4>  <p>Le blindage et le confinement sont consid&eacute;r&eacute;s ad&eacute;quats lorsque les conditions suivantes sont respect&eacute;es pendant et apr&egrave;s un accident. Cependant, il est souhaitable de disposer d&rsquo;un blindage et d&rsquo;un confinement sup&eacute;rieurs si cela est possible.</p>  <h5 id="sec7-3-2-1">7.3.2.1	Dose de rayonnement</h5>  <p>&Agrave; des fins d&rsquo;&eacute;valuation de la conception, l&rsquo;intensit&eacute; de la source de rayonnement et les rejets peuvent &ecirc;tre estim&eacute;s par une analyse d&eacute;taill&eacute;e des accidents de criticit&eacute;.</p>  <p>Le blindage et le confinement doivent &ecirc;tre tels que, suite &agrave; un accident de criticit&eacute;, la dose de rayonnement au corps entier [36] re&ccedil;ue par un individu se trouvant n&rsquo;importe o&ugrave; &agrave; l&rsquo;ext&eacute;rieur de la zone blind&eacute;e et confin&eacute;e ne d&eacute;passera pas la dose efficace &eacute;tablie dans la colonne 3 du point 1<em>a</em>), au paragraphe 13(1) du <em>R&egrave;glement sur la radioprotection</em>.</p>  <p>En outre, le blindage et le confinement doivent &ecirc;tre tels que les cons&eacute;quences hors du site d&rsquo;un accident de criticit&eacute;, telles que calcul&eacute;es &agrave; partir du d&eacute;but de l&rsquo;accident, respectent les crit&egrave;res &eacute;tablis comme facteur de d&eacute;clenchement pour un abri temporaire du public dans le document intitul&eacute; <span lang="en"><em>Canadian Guidelines for Intervention during a Nuclear Emergency</em></span> [4].</p>
<h5 id="sec7-3-2-2">7.3.2.2	Crit&egrave;re relatif au blindage et au confinement</h5>  <p>Le syst&egrave;me de blindage et de confinement d&rsquo;une installation doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; limiter la dose r&eacute;sultant de l&rsquo;exposition au rayonnement direct et aux radionucl&eacute;ides rejet&eacute;s par l&rsquo;installation suite &agrave; un accident de criticit&eacute;, afin qu&rsquo;elle ne d&eacute;passe pas celle sp&eacute;cifi&eacute;e &agrave; la section  7.3.2.1.</p>
<h5 id="sec7-3-2-3">7.3.2.3	Int&eacute;grit&eacute; structurale</h5>  <p>Le syst&egrave;me de blindage et de confinement doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; r&eacute;sister &agrave; des dommages physiques qui pourraient entra&icirc;ner une br&egrave;che dans le confinement ou causer des blessures au personnel lors d&rsquo;un accident de criticit&eacute;.</p>
<h5 id="sec7-3-2-4">7.3.2.4	Espace faisant office de blindage</h5>  <p>Si du personnel se trouve loin des mati&egrave;res fissiles et fissionnables, la distance qui les s&eacute;pare  peut remplacer une partie ou la totalit&eacute; du blindage, en autant que l&rsquo;acc&egrave;s du personnel &agrave; cet espace est restreint et que les autres conditions figurant &agrave; la section 7.3.2 sont respect&eacute;es.</p>
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
<h3 id="sec7-4">7.4	Pratiques de s&ucirc;ret&eacute;-criticit&eacute;</h3>  <p>Lorsque le blindage et le confinement respectent les crit&egrave;res de la section 7.3, les cons&eacute;quences des accidents de criticit&eacute; sont principalement des dommages caus&eacute;s &agrave; l&rsquo;&eacute;quipement, l&rsquo;interruption des proc&eacute;d&eacute;s, le d&eacute;versement de produits, la contamination des installations ou d&rsquo;autres cons&eacute;quences semblables.</p>  <p>Par cons&eacute;quent, on peut tol&eacute;rer un moins grand conservatisme dans l&rsquo;analyse de proc&eacute;d&eacute;. Cependant, la conception de l&rsquo;installation et les op&eacute;rations doivent &ecirc;tre bas&eacute;es sur de bonnes pratiques d&rsquo;ing&eacute;nierie, qui exigent que la criticit&eacute; ne se produise pas dans des conditions normales et des conditions anormales &agrave; une fr&eacute;quence &eacute;gale ou sup&eacute;rieure &agrave; 10<sup>-5</sup> par ann&eacute;e.</p>  <p>Des directives additionnelles pour les pratiques administratives figurent &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4.1"></div>
<h4 id="sec7-4-1">7.4.1	Op&eacute;ration &agrave; contingence unique</h4>  <p>Le principe de la contingence double (d&eacute;crit &agrave; la section 2.3.3.2) recommande qu&rsquo;au moins deux modifications improbables, ind&eacute;pendantes et simultan&eacute;es dans les conditions de proc&eacute;d&eacute; se produisent avant qu&rsquo;il y ait criticit&eacute; nucl&eacute;aire. Le nombre d&rsquo;&eacute;ventualit&eacute;s peut &ecirc;tre r&eacute;duit &agrave; un lorsque les principes de cette section sont respect&eacute;s et que la probabilit&eacute; de d&eacute;faillance de n&rsquo;importe quel contr&ocirc;le primaire est faible.</p>  <p>L&rsquo;utilisation de la contingence unique devrait &ecirc;tre maintenue au minimum; des exemples de m&eacute;thodes de contr&ocirc;le primaires qui peuvent constituer une op&eacute;ration de contingence unique sont notamment :</p>
<ul>
<li><strong>absorbeur de neutrons soluble :</strong> Maintien de la concentration prescrite en absorbeurs, comme le bore, le gadolinium ou le cadmium, dont la perte par pr&eacute;cipitation ou par un autre moyen m&egrave;nerait probablement &agrave; un accident de criticit&eacute;</li>
<li><strong>contr&ocirc;le de la concentration :</strong> Maintien de la concentration prescrite de nucl&eacute;ide fissile dans une solution &agrave; un niveau sous-critique</li>
<li><strong>forme chimique :</strong> Maintien de la concentration prescrite de nitrate (NO<sub>3</sub>) ou de sulfate (SO<sub>4</sub>) ou d&rsquo;autres ions dans une solution de nucl&eacute;ides fissiles</li>
<li><strong>r&eacute;flecteurs :</strong> Maintien des conditions prescrites pour le r&eacute;flecteur; par exemple, exclusion de la submersion par l&rsquo;eau</li>
<li><strong>produits de fission :</strong> Maintien de la concentration prescrite de produits de fission associ&eacute;s aux nucl&eacute;ides fissiles</li>
<li><strong>contr&ocirc;le de la g&eacute;om&eacute;trie :</strong> Maintien de la g&eacute;om&eacute;trie prescrite pour le mat&eacute;riel de proc&eacute;d&eacute;</li>
<li><strong>composition isotopique des mati&egrave;res fissiles :</strong> Maintien des concentrations prescrites de mati&egrave;re fissile et non fissile</li>
<li><strong>espacement :</strong> Maintien de l&rsquo;espacement prescrit entre des unit&eacute;s distinctes de mati&egrave;re fissile</li>
</ul>  <p>Si la pr&eacute;vention de la criticit&eacute; d&eacute;pend principalement d&rsquo;une mesure administrative de contr&ocirc;le, par exemple lorsque le rendement inad&eacute;quat d&rsquo;une op&eacute;ration de routine de la part d&rsquo;une personne pourrait mener &agrave; la criticit&eacute; (comme omettre d&rsquo;ajouter un absorbeur de neutrons soluble ou d&eacute;passer une limite s&eacute;curitaire pour un lot), alors des proc&eacute;dures doivent &ecirc;tre &eacute;tablies pour s&rsquo;assurer qu&rsquo;aucune erreur administrative unique de la part d&rsquo;une personne ne puisse mener &agrave; la criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4.2"></div>
<h4 id="sec7-4-2">7.4.2	M&eacute;thodes pour les installations non blind&eacute;es</h4>  <p>Cette section ne compromet aucunement l&rsquo;application de la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, pour les installations blind&eacute;es.</p>
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
<h2 id="sec8">8. Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire et s&ucirc;ret&eacute; des m&eacute;langes de combustible de plutonium et d&rsquo;uranium &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.12-1987 (r&eacute;&eacute;dit&eacute;e en 2016), <span lang="en"><em>Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec8-1">8.1	Introduction</h3>  <p>La section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, pr&eacute;sente des limites &agrave; un seul param&egrave;tre pour les unit&eacute;s fissiles de forme simple contenant du <sup>233</sup>U, <sup>235</sup>U et <sup>239</sup>Pu. &Agrave; titre d&rsquo;exemple de contr&ocirc;le &agrave; param&egrave;tres multiples, on y trouve une augmentation dans les limites de <sup>235</sup>U r&eacute;sultant du contr&ocirc;le de la quantit&eacute; de <sup>238</sup>U associ&eacute; au <sup>235</sup>U dans l&rsquo;uranium m&eacute;tal et l&rsquo;oxyde enrichi &agrave; 5 % en poids de <sup>235</sup>U au maximum.  Des limites plus importantes pour le plutonium r&eacute;sultent &eacute;galement de l&rsquo;importance accord&eacute;e au contr&ocirc;le de la concentration isotopique de <sup>240</sup>Pu et &agrave; la quantit&eacute; d&rsquo;uranium associ&eacute;e au plutonium. Ces augmentations peuvent s&rsquo;av&eacute;rer utiles pour les activit&eacute;s comportant des oxydes mixtes de plutonium et d&rsquo;uranium que l&rsquo;on rencontre dans les op&eacute;rations li&eacute;es au cycle du combustible des r&eacute;acteurs refroidis &agrave; l&rsquo;eau l&eacute;g&egrave;re, des r&eacute;acteurs surg&eacute;n&eacute;rateurs refroidis par m&eacute;tal liquide, des r&eacute;acteurs &agrave; neutrons rapides refroidis au gaz, etc.</p>  <p>Les limites indiqu&eacute;es ici ont &eacute;t&eacute; calcul&eacute;es [37, 38] par des m&eacute;thodes respectant les exigences en terme de validation d&rsquo;une m&eacute;thode de calcul, tel qu&rsquo;indiqu&eacute; &agrave; la section 2, sous section 2.3.4.</p>  <p>Les pratiques administratives et techniques en mati&egrave;re de s&ucirc;ret&eacute; et de contr&ocirc;le de la criticit&eacute; indiqu&eacute;es &agrave; la section 2 et &agrave; la section 12, <em>Pratiques administratives en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>, sont applicables ici.</p>
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
<h3 id="sec8-2">8.2	Port&eacute;e</h3>  <p>La pr&eacute;sente section s&rsquo;applique aux activit&eacute;s comportant des oxydes mixtes d&rsquo;uranium et de plutonium hors r&eacute;acteurs, &agrave; l&rsquo;exception de l&rsquo;assemblage de ces mati&egrave;res dans des conditions contr&ocirc;l&eacute;es, comme dans le cas d&rsquo;exp&eacute;riences de criticit&eacute;. Les crit&egrave;res de base sont pr&eacute;sent&eacute;s pour des m&eacute;langes de combustibles de plutonium et d&rsquo;uranium dans des unit&eacute;s uniques de forme simple ne contenant pas plus de 30 % en poids de plutonium combin&eacute; &agrave; de l&rsquo;uranium ne contenant pas plus de 0,71 % en poids de <sup>235</sup>U. Les limites pour les m&eacute;langes aqueux homog&egrave;nes (solution) sont applicables aux m&eacute;langes homog&egrave;nes et aux boues dans lesquelles les particules constituant le m&eacute;lange sont uniform&eacute;ment r&eacute;parties et ont un diam&egrave;tre ne d&eacute;passant pas 127 &micro;m (0,005 po), c.-&agrave;-d. qu&rsquo;elles peuvent traverser une grille maill&eacute;e 120.</p>  <p>La pr&eacute;sente section ne comprend pas de renseignements d&eacute;taill&eacute;s sur les contr&ocirc;les administratifs, la conception des proc&eacute;d&eacute;s ou de l&rsquo;&eacute;quipement, la description des instruments pour le contr&ocirc;le de proc&eacute;d&eacute;, ni les crit&egrave;res d&eacute;taill&eacute;s &agrave; respecter dans le transport des mati&egrave;res fissiles.</p>
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
<h3 id="sec8-3">8.3	Pratiques en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3.1"></div>
<h4 id="sec8-3-1">8.3.1	Pratiques administratives et techniques</h4>  <p>Les activit&eacute;s vis&eacute;es par la pr&eacute;sente section doivent &ecirc;tre r&eacute;alis&eacute;es conform&eacute;ment &agrave; la section 2. Si les limites pour les m&eacute;langes d&rsquo;uranium et de plutonium pr&eacute;cis&eacute;es ici sont utilis&eacute;es, on doit appliquer une marge administrative de sous-criticit&eacute; pour assurer la conformit&eacute; avec la section 2.3.2.2. Une attention sp&eacute;ciale doit &ecirc;tre accord&eacute;e aux conditions anormales cr&eacute;dibles, comme celles figurant &agrave; l&rsquo;annexe A.</p>  <p>Des directives additionnelles pour les pratiques administratives figurent &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3.2"></div>
<h4 id="sec8-3-2">8.3.2	Contr&ocirc;le de l&rsquo;homog&eacute;n&eacute;it&eacute;</h4>  <p>On doit tenir compte de la possibilit&eacute; de s&eacute;paration pr&eacute;f&eacute;rentielle du plutonium par rapport &agrave; l&rsquo;uranium. Ni les limites des syst&egrave;mes homog&egrave;nes ni celles des syst&egrave;mes h&eacute;t&eacute;rog&egrave;nes ne s&rsquo;appliquent, &agrave; moins que les oxydes d&rsquo;uranium et de plutonium demeurent &eacute;troitement li&eacute;s de mani&egrave;re homog&egrave;ne.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4"></div>
<h3 id="sec8-4">8.4	Limites de sous-criticit&eacute; pour les m&eacute;langes uniformes et homog&egrave;nes d&rsquo;uranium et de plutonium dans l&rsquo;eau</h3>  <p>Les activit&eacute;s comportant des m&eacute;langes de combustible sp&eacute;cifi&eacute;s peuvent &ecirc;tre r&eacute;alis&eacute;es de mani&egrave;re s&eacute;curitaire en se conformant aux limites de sous criticit&eacute; figurant aux tableaux 8-1, 8-2, ou 8-3, en autant que les conditions dans lesquelles les limites s&rsquo;appliquent sont maintenues.</p>  <p>Une limite doit &ecirc;tre appliqu&eacute;e seulement lorsque l&rsquo;effet des r&eacute;flecteurs de neutrons et d&rsquo;autres mati&egrave;res fissiles se trouvant &agrave; proximit&eacute; n&rsquo;est pas plus important que celui d&rsquo;un r&eacute;flecteur d&rsquo;eau contigu&euml; dont l&rsquo;&eacute;paisseur est infinie.</p>  <p>Les sp&eacute;cifications de proc&eacute;d&eacute; doivent comporter des marges de protection pour tenir compte des incertitudes dans les variables de proc&eacute;d&eacute; et le d&eacute;passement accidentel des limites.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.1"></div>
<h4 id="sec8-4-1">8.4.1	M&eacute;langes aqueux homog&egrave;nes</h4>  <p>Les limites pr&eacute;sent&eacute;es au tableau 8-1 sont applicables aux m&eacute;langes homog&egrave;nes d&rsquo;oxydes d&rsquo;uranium naturel et de plutonium, en autant que la teneur en oxyde de plutonium du m&eacute;lange d&rsquo;oxydes se situe entre 3 % en poids et 30 % en poids. Les limites sont fournies pour trois compositions isotopiques de plutonium. Lors de l&rsquo;application de ces limites, tout le <sup>238</sup>Pu et le <sup>242</sup>Pu pr&eacute;sents doivent &ecirc;tre omis des calculs de la composition isotopique. Toutes les limites indiqu&eacute;es au tableau 8-1 sont valides pour l&rsquo;uranium ne contenant pas plus de 0,71 % en poids de (<sup>235</sup>U plus <sup>239</sup>Pu).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.2"></div>
<h4 id="sec8-4-2">8.4.2	&Eacute;carts dans les limites de sous criticit&eacute; pour les m&eacute;langes contenant du PuO<sub>2</sub></h4>  <p>Les limites figurant au tableau 8 1 sont appropri&eacute;es pour &eacute;viter la criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.3"></div>
<h4 id="sec8-4-3">8.4.3	Poudres d&rsquo;oxydes mixtes s&egrave;ches et humides</h4>  <p>Les limites figurant au tableau 8-2 s&rsquo;appliquent aux m&eacute;langes secs et humides d&rsquo;oxydes de plutonium et d&rsquo;uranium naturel, en autant que la concentration de <sup>240</sup>Pu d&eacute;passe celle de <sup>241</sup>Pu. &Eacute;tant donn&eacute; qu&rsquo;un oxyde compl&egrave;tement sec peut &ecirc;tre difficile &agrave; obtenir, les limites sont indiqu&eacute;es pour des oxydes humides dans lesquels 0 &lt; H : (Pu + U) &le; 0,45. (1,48 % en poids d&rsquo;eau correspond &agrave; H : (Pu + U) &asymp; 0,45). Les limites sont &eacute;galement indiqu&eacute;es pour des poudres d&rsquo;oxydes poss&eacute;dant 50 % de vides.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.4"></div>
<h4 id="sec8-4-4">8.4.4	Limites des concentrations de plutonium dans des quantit&eacute;s illimit&eacute;es de m&eacute;langes d&rsquo;oxydes et de nitrates de plutonium et d&rsquo;uranium naturel</h4>  <p>Les concentrations maximales s&eacute;curitaire de plutonium dans (PuO<sub>2</sub> + UO<sub>2</sub>) ou dans (Pu(NO<sub>3</sub>)<sub>4</sub> + UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub>) en quantit&eacute; illimit&eacute;e dans les conditions &eacute;nonc&eacute;es sont pr&eacute;sent&eacute;es au tableau 8-3. Dans chacun des cas, la valeur du facteur de multiplication infini, k<sup>&infin;</sup>, est inf&eacute;rieure &agrave; l&rsquo;unit&eacute; pour ces conditions et est ind&eacute;pendante de la densit&eacute; du m&eacute;lange. Par exemple, la criticit&eacute; ne peut pas &ecirc;tre atteinte dans un m&eacute;lange homog&egrave;ne de (PuO<sub>2</sub> + UO<sub>2</sub>) dans l&rsquo;eau si la teneur en plutonium est &le; 0,13 % en poids de la masse combin&eacute;e de (Pu + U) dans les oxydes. Ces limites ne sont pas applicables aux m&eacute;langes de plutonium et d&rsquo;uranium &eacute;l&eacute;mentaires dans l&rsquo;eau.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.5"></div>
<h3 id="sec8-5">8.5	Limites de sous criticit&eacute; pour les m&eacute;langes h&eacute;t&eacute;rog&egrave;nes d&rsquo;oxydes mixtes</h3>  <p>Le regroupement du combustible d&rsquo;oxydes mixtes produit un effet sur la criticit&eacute; semblable &agrave; celui qui survient dans l&rsquo;uranium naturel ou mod&eacute;r&eacute;ment enrichi. L&rsquo;absorption totale dans les spectres du <sup>238</sup>U et du <sup>240</sup>Pu dans l&rsquo;oxyde mixte est r&eacute;duite au minimum lorsque l&rsquo;oxyde mixte est s&eacute;par&eacute; du mod&eacute;rateur, par exemple dans un assemblage en r&eacute;seau des barres de combustible dans l&rsquo;eau, comparativement &agrave; un m&eacute;lange homog&egrave;ne aqueux des oxydes. En raison de l&rsquo;absorption moins importante du <sup>240</sup>Pu r&eacute;sultant du regroupement, l&rsquo;effet du <sup>240</sup>Pu sur la limite de sous criticit&eacute; peut &eacute;galement &ecirc;tre moins important que dans le cas des m&eacute;langes homog&egrave;nes aqueux.</p>  <p>Des limites de sous criticit&eacute; sont sp&eacute;cifi&eacute;es dans la norme ANSI/ANS 8-12 en fonction de la teneur en PuO<sub>2</sub> dans les oxydes mixtes et de la teneur en <sup>240</sup>Pu du plutonium. En appliquant ces limites, tout le <sup>238</sup>Pu et le <sup>242</sup>Pu pr&eacute;sents doivent &ecirc;tre exclus du calcul de la composition isotopique. Ces limites sont applicables aux m&eacute;langes h&eacute;t&eacute;rog&egrave;nes, peu importe la taille ou la forme des pi&egrave;ces d&rsquo;oxydes mixtes ou le degr&eacute; de mod&eacute;ration par l&rsquo;eau.</p>  <p>Les sp&eacute;cifications de proc&eacute;d&eacute; doivent comporter des marges de protection pour tenir compte des incertitudes dans les variables de proc&eacute;d&eacute; et le d&eacute;passement accidentel des limites.</p>
<table className="table table-header small">  <caption className="text-left">Tableau 8-1 : Limites de sous criticit&eacute; pour les m&eacute;langes aqueux homog&egrave;nes d&rsquo;oxydes de plutonium et d&rsquo;uranium naturel [ANSI/ANS 8-12]<br />
<span className="small">((Remarque : Toutes les valeurs sont des limites sup&eacute;rieures, sauf les rapports atomiques qui sont des limites inf&eacute;rieures)</span></caption>
<tr>
<th className="text-center">% en poids de PuO<sub>2</sub> dans (PuO<sub>2</sub> + UO<sub>2</sub>)</th>
<th colSpan="3" className="text-center">3</th>
<th colSpan="3" className="text-center">8</th>
<th colSpan="3" className="text-center">15</th>
<th colSpan="3" className="text-center">30<sup>b</sup></th>
</tr>
<tr>
<th className="text-center">Composition isotopique du plutonium <sup>a</sup></strong></th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
</tr>
<tr>
<td className="text-left">Masse de plutonium dans le m&eacute;lange d&rsquo;oxydes, en kg</td>
<td className="text-center">0,73</td>
<td className="text-center">1,35</td>
<td className="text-center">2,00</td>
<td className="text-center">0,61</td>
<td className="text-center">1,06</td>
<td className="text-center">1,53</td>
<td className="text-center">0,54</td>
<td className="text-center">0,94</td>
<td className="text-center">1,28</td>
<td className="text-center">0,50</td>
<td className="text-center">0,87</td>
<td className="text-center">1,16</td>
</tr>
<tr>
<td className="text-left">Masse de (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), en kg</td>
<td className="text-center">27,5</td>
<td className="text-center">51,.3</td>
<td className="text-center">75,9</td>
<td className="text-center">8,6</td>
<td className="text-center">15,1</td>
<td className="text-center">21,7</td>
<td className="text-center">4,1</td>
<td className="text-center">7,1</td>
<td className="text-center">9,7</td>
<td className="text-center">1,9</td>
<td className="text-center">3,3</td>
<td className="text-center">4,4</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Diam&egrave;tre du cylindre infini, en cm</td>
<td className="text-center">24,3</td>
<td className="text-center">30,8</td>
<td className="text-center">34,8</td>
<td className="text-center">19,8</td>
<td className="text-center">24,9</td>
<td className="text-center">27,5</td>
<td className="text-center">17,8</td>
<td className="text-center">22,5</td>
<td className="text-center">24,8</td>
<td className="text-center">16,2</td>
<td className="text-center">21,0</td>
<td className="text-center">23,4</td>
</tr>
<tr>
<td className="text-left">&Eacute;paisseur de la plaque infinie, en cm</td>
<td className="text-center">11,0</td>
<td className="text-center">14,9</td>
<td className="text-center">17,4</td>
<td className="text-center">8,2</td>
<td className="text-center">11,2</td>
<td className="text-center">12,9</td>
<td className="text-center">6,9</td>
<td className="text-center">9,6</td>
<td className="text-center">11,0</td>
<td className="text-center">5,9</td>
<td className="text-center">8,7</td>
<td className="text-center">9,9</td>
</tr>
<tr>
<td className="text-left">Volume de m&eacute;lange d&rsquo;oxydes, en L</td>
<td className="text-center">23,5</td>
<td className="text-center">44,8</td>
<td className="text-center">63,4</td>
<td className="text-center">14,0</td>
<td className="text-center">25,9</td>
<td className="text-center">34,4</td>
<td className="text-center">11,0</td>
<td className="text-center">20,4</td>
<td className="text-center">26,6</td>
<td className="text-center">8,5</td>
<td className="text-center">16,8</td>
<td className="text-center">21,6</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Concentration de plutonium, en g Pu/litre</td>
<td className="text-center">6,8<sup>c</sup></td>
<td className="text-center">8,1</td>
<td className="text-center">9,3</td>
<td className="text-center">6,9</td>
<td className="text-center">8,2</td>
<td className="text-center">9,4</td>
<td className="text-center">7,0</td>
<td className="text-center">8,2</td>
<td className="text-center">9,4</td>
<td className="text-center">7,0</td>
<td className="text-center">8,1</td>
<td className="text-center">9,3</td>
</tr>
<tr>
<td className="text-left">Concentration d&#39;oxydes, en g (PuO<sub>2</sub> + UO<sub>2</sub>)/litre</td>
<td className="text-center">257<sup>c</sup></td>
<td className="text-center">305</td>
<td className="text-center">351</td>
<td className="text-center">97,3</td>
<td className="text-center">116</td>
<td className="text-center">134</td>
<td className="text-center">52,9</td>
<td className="text-center">61,7</td>
<td className="text-center">71,0</td>
<td className="text-center">26,5</td>
<td className="text-center">30,7</td>
<td className="text-center">35,2</td>
</tr>
<tr>
<td className="text-left">Rapport atomique H:Pu</td>
<td className="text-center">3780</td>
<td className="text-center">3203</td>
<td className="text-center">2780</td>
<td className="text-center">3780</td>
<td className="text-center">3210</td>
<td className="text-center">2790</td>
<td className="text-center">3780</td>
<td className="text-center">3237</td>
<td className="text-center">2818</td>
<td className="text-center">3780</td>
<td className="text-center">3253</td>
<td className="text-center">2848</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Densit&eacute; surfacique du plutonium, en g Pu/cm<sup>2</sup></td>
<td className="text-center">0,27</td>
<td className="text-center">0,38</td>
<td className="text-center">0,47</td>
<td className="text-center">0,25</td>
<td className="text-center">0,34</td>
<td className="text-center">0,42</td>
<td className="text-center">0,25</td>
<td className="text-center">0,33</td>
<td className="text-center">0,41</td>
<td className="text-center">0,24</td>
<td className="text-center">0,32</td>
<td className="text-center">0,37</td>
</tr>
<tr>
<td className="text-left">Densit&eacute; surfacique des oxydes, en g (PuO<sub>2</sub> + UO<sub>2</sub>)/cm<sup>2</sup></td>
<td className="text-center">10,2</td>
<td className="text-center">14,4</td>
<td className="text-center">17,7</td>
<td className="text-center">3,5</td>
<td className="text-center">4,8</td>
<td className="text-center">5,9</td>
<td className="text-center">1,9</td>
<td className="text-center">2,5</td>
<td className="text-center">3,1</td>
<td className="text-center">0,9</td>
<td className="text-center">1,2</td>
<td className="text-center">1,4</td>
</tr>  </table>  <p><sup>a</sup>&nbsp;Composition isotopique du plutonium :<br/>
<strong>I&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&gt;&nbsp;<sup>241</sup>Pu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>II&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&#8805;&nbsp;15&nbsp;% en poids et <sup>241</sup>Pu&nbsp;&#8804;&nbsp;6&nbsp;% en poids&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>III&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&#8805;&nbsp;25&nbsp;% en poids et <sup>241</sup>Pu&nbsp;&#8804;&nbsp;15&nbsp;% en poids.<br />
<sup>b</sup>&nbsp;Les limites de dimension et de volume ne s&rsquo;appliquent pas aux compositions isotopiques II et III, sauf si pour II, la concentration des oxydes est inf&eacute;rieure &agrave; 5 700 g/L et, pour III, la concentration est inf&eacute;rieure &agrave; 4 500 g/L.<br />
<sup>c</sup>&nbsp;Cette limite de concentration n&rsquo;est pas applicable aux m&eacute;langes d&rsquo;oxydes dans lesquels le rapport PuO<sub>2</sub>/(PuO<sub>2</sub> + UO<sub>2</sub>) est inf&eacute;rieur &agrave; 3 % en poids, en raison de l&rsquo;importance relative plus grande du <sup>235</sup>U dans les substances &agrave; forte teneur en uranium. Une orientation relative aux mati&egrave;res contenant moins de 3 % en poids de PuO<sub>2</sub> est indiqu&eacute;e au tableau 8-3.</p>  <br />
<table className="table table-header small">  <caption className="text-left">Tableau 8-2 : Limites de sous criticit&eacute; pour des unit&eacute;s uniques de m&eacute;langes d&rsquo;oxydes homog&egrave;nes de plutonium et d&rsquo;uranium naturel faiblement mod&eacute;r&eacute; [ANSI/ANS 8-12]<br />
[ANSI/ANS 8-12]<br />
<span className="small text-left">(Remarque : Les limites s&rsquo;appliquent &agrave; des combinaisons d&rsquo;isotopes de plutonium, en autant que <sup>240</sup>Pu&nbsp;&gt;&nbsp;<sup>241</sup>Pu.)</span></caption>
<tr>
<th rowspan="2" className="text-center">% en poids de PuO<sub>2</sub> dans (PuO<sub>2</sub> + UO<sub>2</sub>)</th>
<th colSpan="2" className="text-center">3</th>
<th colSpan="2" className="text-center">8</th>
<th colSpan="2" className="text-center">15</th>
<th colSpan="2" className="text-center">30</th>
</tr>
<tr>
<th className="text-center">Masse de plutonium, en kg</th>
<th className="text-center">Masse de (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), en kg</th>
<th className="text-center">Masse de plutonium, kg</th>
<th className="text-center">Masse de (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), en kg</th>
<th className="text-center">Masse de plutonium, en kg</th>
<th className="text-center">Masse de (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), en kg</th>
<th className="text-center">Masse de plutonium, en kg</th>
<th className="text-center">Masse de (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), en kg</th>
</tr>
<tr>
<td><p>M&eacute;langes d&rsquo;oxydes mixtes secs &agrave; une masse volumique th&eacute;orique</p>
<p>Masse volumique de<br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 11 g/cm<sup>3</sup><br/>
H&nbsp;:&nbsp;(Pu + U) = 0</p></td>
<td colSpan="2" className="text-center text-center">Sous-criticit&eacute; dans n&rsquo;importe quelle quantit&eacute;</td>
<td className="text-center text-center">122</td>
<td className="text-center text-center">1 729</td>
<td className="text-center text-center">47,0</td>
<td className="text-center text-center">355</td>
<td className="text-center text-center">26,1</td>
<td className="text-center text-center">98,6</td>
</tr>
<tr>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td><p>M&eacute;langes d&rsquo;oxydes humides &agrave; une masse volumique th&eacute;orique</p>
<p>Masse volumique de<br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 9,4 g/cm<sup>3</sup><br/>
0&nbsp;&lt;&nbsp;H&nbsp;:&nbsp;(Pu + U) &#8804; 0,45</p></td>
<td className="text-center text-center">236</td>
<td className="text-center text-center">8 919</td>
<td className="text-center text-center">49,4</td>
<td className="text-center text-center">700</td>
<td className="text-center text-center">32,9</td>
<td className="text-center text-center">249</td>
<td className="text-center text-center">23,3</td>
<td className="text-center text-center">88,1</td>
</tr>
<tr>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td><p>M&eacute;langes d&rsquo;oxydes humides comportant 50 % de vides</p>
<p>Masse volumique de <br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 4,7 g/cm<sup>3</sup><br/>
0&nbsp;&lt;&nbsp;H&nbsp;:&nbsp;(Pu + U) &#8804; 0,45</p></td>
<td className="text-center text-center">885</td>
<td className="text-center text-center">33 447</td>
<td className="text-center text-center">161</td>
<td className="text-center text-center">2 282</td>
<td className="text-center text-center">102</td>
<td className="text-center text-center">771</td>
<td className="text-center text-center">67,9</td>
<td className="text-center text-center">256,6</td>
</tr>  </table>  <br />
<table className="">  <caption className="text-left">Tableau 8-3 : Limites de concentration sous-critique pour le plutonium dans des m&eacute;langes homog&egrave;nes de plutonium et d&rsquo;uranium naturel de masse illimit&eacute;ea [ANSI/ANS 8-12]<br />  <span className="small text-left">(Remarque : Ces limites s&rsquo;appliquent aux combinaisons d&rsquo;isotopes de plutonium, en autant que <sup>240</sup>Pu &gt; <sup>241</sup>Pu.)</span></caption>   <tr>
<th className="text-center">PuO<sub>2</sub> dans (PuO<sub>2</sub> + UO<sub>2</sub>)</th>
<th className="text-center">Teneur en plutonium % en poids de Pu/(Pu + U)</th>   </tr>   <tr>
<td className="text-left">Oxydes mixtes secs, H: (Pu + U) = 0</td>
<td className="text-center">4,4</td>   </tr>   <tr>
<td className="text-left">Oxydes mixtes humides, 0 &lt; H : (Pu + U) &le; 0,45</td>
<td className="text-center">1,8</td>   </tr>   <tr>
<td className="text-left">Oxydes dans l&rsquo;eau</td>
<td className="text-center">0,13</td>   </tr>   <tr>
<td className="text-left">Pu(NO<sub>3</sub>)<sub>4</sub> dans [Pu(NO<sub>3</sub>)<sub>4</sub> + UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub>]</td>
<td className="text-center">0,65</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Ces limites ne sont pas applicables aux m&eacute;langes (en pourcentage atomique) de plutonium et d&rsquo;uranium &eacute;l&eacute;mentaires.</p>
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
<h2 id="sec9">9. Utilisation d&rsquo;absorbeurs de neutrons solubles dans des installations nucl&eacute;aires &agrave; l&rsquo;ext&eacute;rieur des r&eacute;acteurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.14-2004 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec9-1">9.1	Introduction</h3>  <p>Une orientation relative au contr&ocirc;le de la criticit&eacute; dans les op&eacute;rations de proc&eacute;d&eacute; et de manutention avec des mati&egrave;res fissiles a &eacute;t&eacute; pr&eacute;sent&eacute;e &agrave; la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>. Cependant, pour les solutions, les limites de sous criticit&eacute; &agrave; un seul param&egrave;tre pour la masse unitaire, le volume, la concentration et les dimensions g&eacute;om&eacute;triques peuvent &ecirc;tre hautement restrictives. Des limites beaucoup plus importantes sont possibles lorsque des absorbeurs de neutrons solubles sont pr&eacute;sents dans ces solutions.</p>  <p>L&rsquo;exp&eacute;rience d&eacute;montre que les op&eacute;rations utilisant de tels absorbeurs peuvent &ecirc;tre effectu&eacute;es de mani&egrave;re s&eacute;curitaire et &eacute;conomique.</p>
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
<h3 id="sec9-2">9.2	Port&eacute;e</h3>  <p>La pr&eacute;sente section fournit des directives sp&eacute;cifiques quant &agrave; l&rsquo;utilisation d&rsquo;absorbeurs de neutrons solubles &agrave; des fins de contr&ocirc;le de la criticit&eacute; et porte &eacute;galement sur le choix d&rsquo;un absorbeur de neutrons, la conception et la modification des syst&egrave;mes, les &eacute;valuations de la s&ucirc;ret&eacute; et les programmes d&rsquo;assurance de la qualit&eacute;. Il est &agrave; noter que la section 2 donne &eacute;galement des directives g&eacute;n&eacute;rales quant &agrave; l&rsquo;utilisation d&rsquo;absorbeurs de neutrons solubles dans le but d&rsquo;&eacute;viter les accidents de criticit&eacute;.</p>  <p>Lorsque des absorbeurs de neutrons solubles sont pr&eacute;sents, mais qu&rsquo;ils ne sont pas requis &agrave; des fins de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire, leur utilisation n&rsquo;est pas vis&eacute;e par la pr&eacute;sente section. On peut consulter &agrave; cet effet la section 4, <em>Utilisation d&rsquo;anneaux de Raschig en verre borosilicate &agrave; titre d&rsquo;absorbeurs de neutrons dans les solutions de mati&egrave;re fissile</em>, qui donne des applications sp&eacute;cifiques d&rsquo;absorbeurs de neutrons, et la section 14, <em>Utilisation d&rsquo;absorbeurs de neutrons fixes dans des installations nucl&eacute;aires hors r&eacute;acteurs</em>.</p>
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
<h3 id="sec9-3">9.3	Exigences administratives et directives</h3>  <p>Les exigences et directives relatives &agrave; l&rsquo;utilisation d&rsquo;absorbeurs de neutrons solubles &agrave; titre de mesure de contr&ocirc;le de la s&ucirc;ret&eacute;-criticit&eacute; sont regroup&eacute;es dans les cinq sujets suivants :</p>
<ul>
<li>choix d&rsquo;un absorbeur de neutrons soluble</li>
<li>conception et modification des syst&egrave;mes</li>
<li>&eacute;valuations de la s&ucirc;ret&eacute;-criticit&eacute;</li>
<li>programme d&rsquo;assurance de la qualit&eacute;</li>
<li>exploitation d&rsquo;une installation utilisant des absorbeurs solubles</li>
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
<div id="9.3.1"></div>
<h4 id="sec9-3-1">9.3.1	Choix d&rsquo;un absorbeur de neutrons soluble</h4>  <p>Au moment de choisir un absorbeur de neutrons soluble, les consid&eacute;rations suivantes doivent &ecirc;tre prises en compte :</p>
<ol>
<li>le choix d&rsquo;un absorbeur de neutrons soluble doit comprendre l&rsquo;&eacute;valuation du milieu d&rsquo;exploitation et la compatibilit&eacute; chimique de l&rsquo;absorbeur de neutrons avec le proc&eacute;d&eacute; qui l&rsquo;utilise ; on doit tenir compte de la solubilit&eacute; de l&rsquo;absorbeur de neutrons, ainsi que des mati&egrave;res et des conditions (p. ex. temp&eacute;rature et pression) qui pourraient causer la pr&eacute;cipitation ou le d&eacute;p&ocirc;t de l&rsquo;absorbeur de neutrons</li>
<li>l&rsquo;absorbeur de neutrons soluble doit conserver sa capacit&eacute; minimale d&rsquo;absorption des neutrons durant sa dur&eacute;e de vie pr&eacute;vue</li>
<li>le choix de l&rsquo;absorbeur de neutrons soluble doit comprendre une &eacute;valuation de l&rsquo;efficacit&eacute; de l&rsquo;absorbeur dans des conditions cr&eacute;dibles de mod&eacute;ration et de r&eacute;flexion des neutrons</li>
<li>le choix de l&rsquo;absorbeur de neutrons doit comprendre une &eacute;valuation des effets du rayonnement (p. ex. appauvrissement par absorption de neutrons, radiolyse) pendant sa dur&eacute;e de vie utile</li>
<li>le choix de l&rsquo;absorbeur de neutrons soluble doit comprendre l&rsquo;&eacute;valuation des exigences d&rsquo;exploitation et de la responsabilisation quant aux mati&egrave;res fissiles</li>
</ol>  <p>Le choix de l&rsquo;absorbeur de neutrons soluble devrait comprendre l&rsquo;&eacute;valuation des exigences relatives &agrave; d&rsquo;autres disciplines li&eacute;es &agrave; la s&ucirc;ret&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.2"></div>
<h4 id="sec9-3-2">9.3.2	Conception et modifications des syst&egrave;mes</h4>  <p>Les exigences suivantes doivent s&rsquo;appliquer &agrave; la fois &agrave; la conception des syst&egrave;mes et &agrave; leurs modifications :</p>
<ol>
<li>pour la plage de sous criticit&eacute;, la conception du syst&egrave;me doit permettre d&rsquo;&eacute;viter d&rsquo;atteindre une concentration de la solution fissile par inadvertance et d&rsquo;amocer l&rsquo;enl&egrave;vement ou la dilution de l&rsquo;absorbeur de neutrons</li>
<li>pour la plage de sous criticit&eacute;, la conception du syst&egrave;me doit tenir compte de la d&eacute;t&eacute;rioration potentielle de l&rsquo;absorbeur de neutrons et des produits chimiques utilis&eacute;s pour le dissoudre et le stabiliser</li>
<li>la conception du syst&egrave;me doit tenir compte de la n&eacute;cessit&eacute; des inspections, de l&rsquo;&eacute;chantillonnage et de la v&eacute;rification que la capacit&eacute; d&rsquo;absorption des neutrons est ad&eacute;quate avant l&rsquo;utilisation et pendant la dur&eacute;e de vie de l&rsquo;absorbeur de neutrons</li>
<li>on doit pr&eacute;voir une m&eacute;thode de v&eacute;rification visant &agrave; d&eacute;terminer que la conception du syst&egrave;me, la s&ucirc;ret&eacute; et les exigences op&eacute;rationnelles sont respect&eacute;es pour toutes les op&eacute;rations qui utilisent des absorbeurs de neutrons solubles</li>
</ol>  <p>La conception de l&rsquo;&eacute;quipement utilisant les absorbeurs de neutrons solubles devrait tenir compte des pratiques d&rsquo;ing&eacute;nierie relatives aux facteurs humains en ce qui a trait &agrave; la pr&eacute;paration, &agrave; l&rsquo;utilisation et au contr&ocirc;le de l&rsquo;absorbeur de neutrons.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.3"></div>
<h4 id="sec9-3-3">9.3.3	&Eacute;valuations de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h4>  <p>Les &eacute;valuations de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (ESCN) doivent :</p>
<ol>
<li>pr&eacute;voir des tol&eacute;rances pour tenir compte des incertitudes associ&eacute;s &agrave; la concentration de l&rsquo;absorbeur de neutrons, sa distribution et ses propri&eacute;t&eacute;s neutroniques (c.-&agrave;-d. pr&eacute;cision des valeurs des sections efficaces des neutrons)</li>
<li>inclure des tol&eacute;rances relatives &agrave; la conception de l&rsquo;&eacute;quipement et aux r&eacute;actions chimiques, des mat&eacute;riaux de substitution, des changements de g&eacute;om&eacute;trie, des hypoth&egrave;ses de mod&eacute;lisation, des variables de proc&eacute;d&eacute;, la distribution de l&rsquo;absorbeur de neutrons isotopique, ainsi que des incertitudes pertinentes</li>
<li>tenir compte du potentiel de d&eacute;t&eacute;rioration de l&rsquo;absorbeur de neutrons dans un milieu d&rsquo;exploitation normal, en raison de ph&eacute;nom&egrave;nes chimiques ou physiques et des changements de la composition de la solution</li>
<li>tenir compte de l&rsquo;effet de la distribution non uniforme de l&rsquo;absorbeur de neutrons sur la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>tenir compte de l&rsquo;impact des changements aux conditions du proc&eacute;d&eacute; qui m&egrave;nent &agrave; des conditions environnementales et d&rsquo;exploitations n&eacute;fastes (p. ex. radiolyse, r&eacute;actions chimiques, &eacute;carts de temp&eacute;rature, changements de pression, appauvrissement et dilution) sur l&rsquo;absorbeur de neutrons, et de ses effets subs&eacute;quents sur la r&eacute;activit&eacute;</li>
<li>tenir compte des pires concentrations possibles d&rsquo;absorbeurs solubles et de mati&egrave;res fissiles associ&eacute;es &agrave; l&rsquo;exploitation avec dissolution de la mati&egrave;re fissile</li>
<li>se fonder sur des donn&eacute;es tir&eacute;es d&rsquo;exp&eacute;riences applicables ou sur des calculs valid&eacute;s conform&eacute;ment &agrave; la section 2</li>
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
<div id="9.3.4"></div>
<h4 id="sec9-3-4">9.3.4	Programme de gestion de la qualit&eacute;</h4>  <p>Un programme de gestion de la qualit&eacute; (GQ) qui respecte les exigences applicables des normes ANSI/ASME NQA-1-2015, <span lang="en"><em>Quality Assurance Requirements for Nuclear Facility Applications</em></span> [11], et N286-12 de la CSA, <em>Exigences relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em> [12], ou l&rsquo;&eacute;quivalent, doit &ecirc;tre &eacute;labor&eacute; pour mettre en &oelig;uvre les activit&eacute;s sp&eacute;cifi&eacute;es dans la pr&eacute;sente section.</p>  <p>Un programme de GQ document&eacute; doit &ecirc;tre mis en &oelig;uvre pour l&rsquo;acquisition d&rsquo;absorbeurs de neutrons solubles, leur stockage, leur pr&eacute;paration et leur utilisation. Le programme devrait se conformer au programme de GQ du titulaire de permis. Les registres des op&eacute;rations connexes doivent &ecirc;tre conserv&eacute;s pendant la dur&eacute;e de vie utile de l&rsquo;installation.</p>  <p>Le programme de GQ pour les absorbeurs de neutrons solubles devrait comprendre une combinaison d&rsquo;inspections, d&rsquo;essais, d&rsquo;analyses d&rsquo;&eacute;chantillons et de v&eacute;rifications. Les mesures prises dans le cadre du programme ne doivent pas compromettre la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire du syst&egrave;me d&rsquo;exploitation.</p>  <p>La fr&eacute;quence des inspections, des essais, de l&rsquo;&eacute;chantillonnage et de la v&eacute;rification avant l&rsquo;utilisation et pendant la dur&eacute;e de vie utile de l&rsquo;absorbeur de neutrons doit &ecirc;tre &eacute;tablie de mani&egrave;re &agrave; pouvoir d&eacute;terminer la capacit&eacute; de l&rsquo;absorbeur de neutrons. La fr&eacute;quence doit pr&eacute;voir suffisamment de temps pour appliquer des mesures correctrices dans le cas o&ugrave; la capacit&eacute; d&rsquo;absorption se d&eacute;t&eacute;riorerait par rapport aux valeurs &eacute;tablies. Les facteurs dont il faut tenir compte comprennent le milieu dans lequel les absorbeurs de neutrons sont plac&eacute;s et les propri&eacute;t&eacute;s chimiques, physiques et autres de l&rsquo;absorbeur sur lesquelles l&rsquo;ESCN est fond&eacute;e.</p>  <p>Les m&eacute;thodes d&rsquo;essai et d&rsquo;analyse d&rsquo;&eacute;chantillons permettant de v&eacute;rifier les concentrations des absorbeurs de neutrons et leurs propri&eacute;t&eacute;s cr&eacute;dit&eacute;es dans l&rsquo;ESCN, avant et pendant l&rsquo;utilisation, doivent &ecirc;tre &eacute;talonn&eacute;es par rapport &agrave; des &eacute;talons tra&ccedil;ables.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.5"></div>
<h4 id="sec9-3-5">9.3.5	Exploitation d&rsquo;une installation utilisant des absorbeurs solubles</h4>  <p>Avant l&rsquo;exploitation, les param&egrave;tres de la conception des syst&egrave;mes importants sur le plan de la s&ucirc;ret&eacute;-criticit&eacute; doivent &ecirc;tre v&eacute;rifi&eacute;s, afin de d&eacute;terminer s&rsquo;ils sont conformes aux sp&eacute;cifications.</p>  <p>Le m&eacute;lange et la concentration ad&eacute;quats des absorbeurs de neutrons solubles (sous forme &eacute;l&eacute;mentaire ou isotopique, selon le cas) doivent &ecirc;tre v&eacute;rifi&eacute;s avant l&rsquo;utilisation.</p>
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
<h2 id="sec10">10. Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire des nucl&eacute;ides d&rsquo;actinides sp&eacute;ciaux</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.15-2014, <span lang="en"><em>Nuclear Criticality Safety Control of Selected Actinide Nuclides</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; afin de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec10-1">10.1 Introduction</h3>  <p>La section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, pr&eacute;cise des limites &agrave; param&egrave;tre unique pour les activit&eacute;s comportant du <sup>233</sup>U, <sup>235</sup>U et du <sup>239</sup>Pu. Les &eacute;l&eacute;ments qui pr&eacute;sentent le plus d&rsquo;int&eacute;r&ecirc;t pour la s&ucirc;ret&eacute;-criticit&eacute; sont ces isotopes de l&rsquo;uranium et du plutonium, parce qu&rsquo;ils sont les plus courants. Cependant, d&rsquo;autres isotopes de ces nucl&eacute;ides et d&rsquo;autres &eacute;l&eacute;ments du groupe des actinides peuvent supporter une r&eacute;action en cha&icirc;ne, et ces isotopes et &eacute;l&eacute;ments peuvent &ecirc;tre rencontr&eacute;s en quantit&eacute; suffisante pour devenir pr&eacute;occupants.</p>  <p>En ce qui a trait &agrave; la s&ucirc;ret&eacute;-criticit&eacute;, l&rsquo;un des facteurs cl&eacute;s est le nombre pair ou impair de neutrons contenus dans le nucl&eacute;ide. Les nucl&eacute;ides qui ont un nombre impair de neutrons, notamment <sup>241</sup><sub>94</sub>Pu, <sup>242m</sup><sub>95</sub>Am, <sup>243</sup><sub>96</sub>Cm, <sup>245</sup><sub>96</sub>Cm, <sup>247</sup><sub>96</sub>Cm, <sup>249</sup><sub>98</sub>Cf et <sup>251</sup><sub>98</sub>Cf, peuvent avoir une masse critique en solutions aqueuses qui est inf&eacute;rieure &agrave; 1 kg, et, dans certains cas, elle peut &ecirc;tre beaucoup plus faible.</p>  <p>Les nucl&eacute;ides poss&eacute;dant un nombre pair de neutrons, par exemple <sup>237</sup><sub>93</sub>Np, <sup>238</sup><sub>94</sub>Pu, <sup>240</sup><sub>94</sub>Pu, <sup>242</sup><sub>94</sub>Pu, <sup>241</sup><sub>95</sub>Am, <sup>243</sup><sub>95</sub>Am et <sup>244</sup><sub>96</sub>Cm, peuvent dans certains cas atteindre la criticit&eacute;, mais la masse requise peut &ecirc;tre de l&rsquo;ordre des kilogrammes. L&rsquo;effet de la mod&eacute;ration sur ces nucl&eacute;ides, comme lorsqu&rsquo;ils sont contenus dans des solutions aqueuses, est d&rsquo;&eacute;viter (plut&ocirc;t que d&rsquo;am&eacute;liorer) la criticit&eacute;. Ces nucl&eacute;ides sont caract&eacute;ris&eacute;s par des seuils &eacute;lev&eacute;s de leur section efficace de fission, avec une probabilit&eacute; de fission faible ou inexistante en dessous de ces seuils. Par cons&eacute;quent, la valeur de k<sup>&infin;</sup> est r&eacute;duite, m&ecirc;me lorsqu&rsquo;une petite quantit&eacute; d&rsquo;hydrog&egrave;ne est m&eacute;lang&eacute;e uniform&eacute;ment avec l&rsquo;&eacute;l&eacute;ment.</p>
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
<h3 id="sec10-2">10.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section s&rsquo;applique aux activit&eacute;s comportant les &eacute;l&eacute;ments suivants : <sup>232</sup><sub>92</sub>U, <sup>234</sup><sub>92</sub>U, <sup>237</sup><sub>93</sub>Np, <sup>236</sup><sub>94</sub>Pu, <sup>238</sup><sub>94</sub>Pu, <sup>240</sup><sub>94</sub>Pu, <sup>241</sup><sub>94</sub>Pu, <sup>242</sup><sub>94</sub>Pu, <sup>241</sup><sub>95</sub>Am, <sup>242m</sup><sub>95</sub>Am, <sup>243</sup><sub>95</sub>Am, <sup>242</sup><sub>96</sub>Cm, <sup>243</sup><sub>96</sub>Cm, <sup>244</sup><sub>96</sub>Cm, <sup>245</sup><sub>96</sub>Cm, <sup>246</sup><sub>96</sub>Cm, <sup>247</sup><sub>96</sub>Cm, <sup>249</sup><sub>98</sub>Cf et <sup>251</sup><sub>98</sub>Cf.</p>  <p>Les limites de masse sous-critique sont pr&eacute;sent&eacute;es pour des unit&eacute;s fissiles isol&eacute;es. Les limites ne sont pas applicables aux unit&eacute;s comportant des interactions.</p>
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
<h3 id="sec10-3">10.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire</h3>  <p>Les activit&eacute;s d&eacute;crites dans la pr&eacute;sente section doivent &ecirc;tre r&eacute;alis&eacute;es conform&eacute;ment &agrave; la section 2. Si les limites pr&eacute;cis&eacute;es ici sont utilis&eacute;es, on doit appliquer une marge administrative de sous-criticit&eacute; pour assurer la conformit&eacute; avec la section 2.3.2.2. On doit accorder une attention particuli&egrave;re aux conditions anormales cr&eacute;dibles (des exemples de ces conditions sont donn&eacute;es &agrave; l&rsquo;annexe A).</p>  <p>D&rsquo;autres directives relatives aux pratiques administratives sont donn&eacute;es &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
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
<h3 id="sec10-4">10.4 Limites &agrave; param&egrave;tre unique pour les actinides sp&eacute;ciaux</h3>  <p>Des activit&eacute;s peuvent &ecirc;tre r&eacute;alis&eacute;es de mani&egrave;re s&eacute;curitaire en se conformant aux limites de masse sous-critique appropri&eacute;es pr&eacute;cis&eacute;es aux sections 10.4.1, 10.4.2 et 10.4.4 ou aux limites de concentration appropri&eacute;es indiqu&eacute;es &agrave; la section 10.4.3.</p>  <p><strong>Remarque :</strong> Les sp&eacute;cifications de proc&eacute;d&eacute; doivent comporter des marges pour tenir compte des incertitudes associ&eacute;es aux variables de proc&eacute;d&eacute; et du d&eacute;passement accidentel des limites.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.1"></div>
<h4 id="sec10-4-1">10.4.1 Syst&egrave;mes m&eacute;talliques sph&eacute;riques</h4>  <p>Les limites de masse appropri&eacute;es figurant au tableau 10-1 sont applicables seulement lorsque l&rsquo;on peut d&eacute;montrer que les mat&eacute;riaux environnants ne sont pas plus efficaces pour augmenter la multiplication de neutrons que si l&rsquo;on enfermait l&rsquo;unit&eacute; dans une couche contigu&euml; du r&eacute;flecteur &agrave; laquelle correspond la limite. Par exemple, pour appliquer la limite de masse r&eacute;fl&eacute;chie par l&rsquo;eau &agrave; un r&eacute;flecteur autre que l&rsquo;eau, il faut d&eacute;montrer que le syst&egrave;me est moins r&eacute;actif avec le mat&eacute;riau environnant qu&rsquo;avec un r&eacute;flecteur d&rsquo;eau.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.2"></div>
<h4 id="sec10-4-2">10.4.2 M&eacute;langes m&eacute;tal-eau</h4>  <p>Les limites de masse appropri&eacute;es du tableau 10-2 sont applicables aux solutions aqueuses et aux boues, qui peuvent &ecirc;tre non homog&egrave;nes, en autant que la mati&egrave;re environnante puisse augmenter k<sub>eff</sub> d&rsquo;une valeur ne d&eacute;passant pas celle r&eacute;sultant de l&rsquo;application d&rsquo;une couche contigu&euml; d&rsquo;eau &agrave; laquelle la limite correspond.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.3"></div>
<h4 id="sec10-4-3">10.4.3 Solutions dilu&eacute;es</h4>  <p>Pour les op&eacute;rations avec des solutions dilu&eacute;es, on peut utiliser les limites de concentration sous critique et les rapports atome d&rsquo;hydrog&egrave;ne/atome fissile minimaux connexes donn&eacute;s dans le tableau 10-3. Le tableau 10-3 donne les rapports pour 19 nucl&eacute;ides choisis dans des m&eacute;langes m&eacute;tal-eau homog&egrave;nes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.4"></div>
<h4 id="sec10-4-4">10.4.4 Op&eacute;rations avec des oxydes</h4>  <p>Pour les op&eacute;rations avec des oxydes, les limites de masse sous-critique pour sept oxydes s&eacute;lectionn&eacute;s sont donn&eacute;es dans le tableau 10-4, pourvu que l&rsquo;on puisse d&eacute;montrer que les mat&eacute;riaux environnants ne sont pas plus efficaces pour augmenter la multiplication de neutrons que si l&rsquo;on enfermait l&rsquo;unit&eacute; dans une couche contigu&euml; du r&eacute;flecteur &agrave; laquelle correspond la limite.</p>
<table className="width-100">  <caption className="text-left">Tableau 10-1 : Limites de masse sous-critique pour les nucl&eacute;ides d&rsquo;actinides non fissiles [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nucl&eacute;ide</th>
<th rowspan="2" className="text-center text-center">Forme chimique</th>
<th colSpan="2" className="text-center">Limite de nucl&eacute;ide <sup>a</sup> avec un r&eacute;flecteur constitu&eacute; :</th>   </tr>   <tr>
<th className="text-center">d&#39;eau <sup>b</sup> (kg)</th>
<th className="text-center">d&#39;acier <sup>c</sup> (kg)</th>   </tr>   <tr>
<td className="text-center"><sup>232</sup>U</td>
<td className="text-center">U</td>
<td className="text-center">1,0</td>
<td className="text-center">0,9</td>   </tr>   <tr>
<td className="text-center"><sup>234</sup>U</td>
<td className="text-center">U</td>
<td className="text-center">59</td>
<td className="text-center">34</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>237</sup>Np</th>
<td className="text-center">Np</td>
<td className="text-center">35</td>
<td className="text-center">21</td>   </tr>   <tr>
<td className="text-center">NpO<sub>2</sub></td>
<td className="text-center">140</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>236</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">1,7</td>
<td className="text-center">1,6</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>238</sup>Pu</th>
<td className="text-center">Pu</td>
<td className="text-center">5,1</td>
<td className="text-center">3,3</td>   </tr>   <tr>
<td className="text-center">NpO<sub>2</sub></td>
<td className="text-center">12</td>
<td className="text-center">7,6</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>240</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">20</td>
<td className="text-center">15</td>   </tr>   <tr>
<td className="text-center">PuO<sub>2</sub></td>
<td className="text-center">70</td>
<td className="text-center">45</td>   </tr>   <tr>
<td className="text-center"><sup>241</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">3,7</td>
<td className="text-center">3,7</td>   </tr>   <tr>
<td className="text-center"><sup>242</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">55</td>
<td className="text-center">40</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>241</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">24</td>
<td className="text-center">16</td>   </tr>   <tr>
<td className="text-center">AmO<sub>2</sub></td>
<td className="text-center">40</td>
<td className="text-center">32</td>   </tr>   <tr>
<td className="text-center"><sup>242m</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">1,6</td>
<td className="text-center">1,7</td>   </tr>   <tr>
<td rowspan="3" className="text-center text-center"><sup>243</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">65</td>
<td className="text-center">45</td>   </tr>   <tr>
<td className="text-center">Am<sub>2</sub>O<sub>3</sub></td>
<td className="text-center">50</td>
<td className="text-center">37</td>   </tr>   <tr>
<td className="text-center">AmO<sub>2</sub></td>
<td className="text-center">120</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>242</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">6</td>
<td className="text-center">4</td>   </tr>   <tr>
<td className="text-center"><sup>243</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1,4</td>
<td className="text-center">1,4</td>   </tr>   <tr>
<td rowspan="3" className="text-center text-center"><sup>244</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">11</td>
<td className="text-center">7</td>   </tr>   <tr>
<td className="text-center">Cm<sub>2</sub>O<sub>3</sub></td>
<td className="text-center">14</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center">CmO<sub>2</sub></td>
<td className="text-center">14</td>
<td className="text-center">10</td>   </tr>  <tr>
<td className="text-center"><sup>245</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1,3</td>
<td className="text-center">1,3</td>   </tr>
<tr>
<td className="text-center"><sup>246</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">16</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center"><sup>247</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1.5</td>
<td className="text-center">1.4</td>   </tr>   <tr>
<td className="text-center"><sup>249</sup>Cf</td>
<td className="text-center">Cf</td>
<td className="text-center">1,2</td>
<td className="text-center">1,4</td>   </tr>   <tr>
<td className="text-center"><sup>251</sup>Cf</td>
<td className="text-center">Cm</td>
<td className="text-center">0,6</td>
<td className="text-center">0,6</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Les r&eacute;f&eacute;rences [39] et [40] servent de fondement pour les limites de masse sous critique.<br />
<sup>b</sup>&nbsp;Les limites de masse pour les r&eacute;flecteurs d&rsquo;eau peuvent &eacute;galement s&rsquo;appliquer aux combinaisons d&rsquo;acier et d&rsquo;eau (acier entour&eacute; d&rsquo;eau) pour une &eacute;paisseur d&rsquo;acier &le; 1 cm.<br />
<sup>c</sup>&nbsp;L&rsquo;&eacute;paisseur du r&eacute;flecteur en acier est de 20 cm; c.-&agrave;-d. d&rsquo;une &eacute;paisseur infinie, aux fins des calculs.</p>  <br />
<table className="">  <caption className="text-left">Tableau 10-2 : Limites de masse sous-critique pour les nucl&eacute;ides d&rsquo;actinides fissiles r&eacute;fl&eacute;chis par l&rsquo;eau [ANSI/ANS 8-15]</caption>   <tr>
<th className="text-center">Nucl&eacute;ide</th>
<th className="text-center">Limite de masse <sup>a</sup> (g)</th>   </tr>   <tr>
<td className="text-center"><sup>239</sup>Pu</td>
<td className="text-center">450</td>   </tr>   <tr>
<td className="text-center"><sup>241</sup>Pu</td>
<td className="text-center">185</td>   </tr>   <tr>
<td className="text-center"><sup>242m</sup>Am</td>
<td className="text-center">11</td>   </tr>   <tr>
<td className="text-center"><sup>243</sup>Cm</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>245</sup>Cm</td>
<td className="text-center">23</td>   </tr>   <tr>
<td className="text-center"><sup>247</sup>Cm</td>
<td className="text-center">500</td>   </tr>   <tr>
<td className="text-center"><sup>249</sup>Cf</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center"><sup>251</sup>Cf</td>
<td className="text-center">5</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;La section 2 et la r&eacute;f&eacute;rence [39] servent de fondement pour les limites de masse sous critique. La section 2 donne la valeur pour le <sup>239</sup>Pu; les autres valeurs sont tir&eacute;es de la r&eacute;f&eacute;rence [39].</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 10-3 : Limites de masse sous-critique pour le <sup>242m</sup>Am dans (<sup>241</sup>Am + <sup>242m</sup>Am) pour des m&eacute;langes homog&egrave;nes de AmO<sub>2</sub> &ndash; H<sub>2</sub>O r&eacute;fl&eacute;chis par l&rsquo;eau [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center"><sup>242m</sup>Am (% en poids)</th>
<th colSpan="2" className="text-center">Limite de masse <sup>a</sup></th>   </tr>   <tr>
<th className="text-center"><sup>242m</sup>Am (g)</th>
<th className="text-center">Quantit&eacute; totale d&#39;Am (g)</th>   </tr>   <tr>
<td className="text-center">100</td>
<td className="text-center">13</td>
<td className="text-center">13</td>   </tr>   <tr>
<td className="text-center">20</td>
<td className="text-center">28</td>
<td className="text-center">140</td>   </tr>   <tr>
<td className="text-center">10</td>
<td className="text-center">105</td>
<td className="text-center">1 050</td>   </tr>   <tr>
<td className="text-center">8</td>
<td className="text-center">240</td>
<td className="text-center">3 000</td>   </tr>   <tr>
<td className="text-center">6,25</td>
<td className="text-center">1 830</td>
<td className="text-center">29 280</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;La r&eacute;f&eacute;rence [39] fournit ces donn&eacute;es.</p>  <br />
<table className="width-100">  <caption className="text-left">Tableau 10-4 : Limites de masse sous-critique pour le <sup>245</sup>Cm dans (<sup>244</sup>Cm + <sup>245</sup>Cm) pour des m&eacute;langes homog&egrave;nes de CmO<sub>2</sub> &ndash; H<sub>2</sub>O r&eacute;fl&eacute;chis par l&rsquo;eau [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center"><sup>245</sup>Cm (% en poids)</th>
<th colSpan="2" id="Uniform_2" >Limite de masse<sup>a</sup></th>   </tr>   <tr>
<th className="text-center"><sup>245</sup>Cm (g)</th>
<th className="text-center">Quantit&eacute; totale de Cm (g)</th>   </tr>   <tr>
<td className="text-center">100</td>
<td className="text-center">30,0</td>
<td className="text-center">30</td>   </tr>   <tr>
<td className="text-center">10</td>
<td className="text-center">32,7</td>
<td className="text-center">327</td>   </tr>   <tr>
<td className="text-center">5</td>
<td className="text-center">35,7</td>
<td className="text-center">714</td>   </tr>   <tr>
<td className="text-center">2,5</td>
<td className="text-center">41,7</td>
<td className="text-center">1 670</td>   </tr>   <tr>
<td className="text-center">1,25</td>
<td className="text-center">53,7</td>
<td className="text-center">4 300</td>   </tr>   </table>
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
<h2 id="sec11">11. Crit&egrave;res de s&ucirc;ret&eacute;-criticit&eacute; pour la manutention, le transport, le stockage et la gestion des d&eacute;chets &agrave; long terme hors r&eacute;acteur du combustible des r&eacute;acteurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.17-2004 (r&eacute;&eacute;dit&eacute;e en 2014), <span lang="en"><em>Criticality Safety Criteria for the Handling, Storage, and Transportation of LWR Fuel Outside Reactors</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>  <p>Pour plus de renseignements sur le transport des mati&egrave;res fissiles, il faut se reporter aux documents suivants :</p>
<ul>
<li><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></li>
<li>Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, <em>R&egrave;glement de transport des mati&egrave;res radioactives</em> (SSR 6) [41] et guide de s&ucirc;ret&eacute; connexe, intitul&eacute; <span lang="en"><em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material (&eacute;dition de 2012)</em></span> (SSG 26) [42]</li>
<li>RD-364, <em>Guide d&rsquo;approbation des colis de transport du Type B(U) et des colis transportant des mati&egrave;res fissiles Canada &Eacute;tats&ndash;Unis</em> [43]
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
<div id="11.1"></div>
<h3 id="sec11-1">11.1 Introduction</h3>  <p>La possibilit&eacute; d&rsquo;un accident de criticit&eacute; pendant la manutention, le transport, le stockage et la gestion des d&eacute;chets &agrave; long terme du combustible des r&eacute;acteurs nucl&eacute;aires pr&eacute;sentent un risque pour la sant&eacute; et la s&eacute;curit&eacute; du personnel participant &agrave; ces activit&eacute;s, ainsi que pour le public en g&eacute;n&eacute;ral. La conception appropri&eacute;e de l&rsquo;&eacute;quipement et des installations, les proc&eacute;dures de manutention et la formation du personnel peuvent r&eacute;duire ces risques au minimum.</p>
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
<h3 id="sec11-2">11.2 Port&eacute;e</h3>  <p>La section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, pr&eacute;sente des crit&egrave;res g&eacute;n&eacute;raux en mati&egrave;re d&rsquo;assurance de la s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute;. La section 11 fournit des directives additionnelles applicables &agrave; la manutention, au transport, au stockage et &agrave; la gestion des d&eacute;chets &agrave; long terme du combustible des r&eacute;acteurs &agrave; n&rsquo;importe quelle &eacute;tape du cycle du combustible, &agrave; l&rsquo;ext&eacute;rieur du c&oelig;ur du r&eacute;acteur.</p>
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
<h3 id="sec11-3">11.3 Crit&egrave;res de s&ucirc;ret&eacute; g&eacute;n&eacute;raux</h3>  <p>Les pratiques administratives et techniques g&eacute;n&eacute;rales sont d&eacute;crites &agrave; la section 2.</p>   <p>Dans un site de stockage autoris&eacute; &agrave; court ou &agrave; moyen terme (sec ou humide), une quantit&eacute; exempt&eacute;e de mati&egrave;res fissiles (d&eacute;finie &agrave; la section 2.3.1.1, point 2 de la liste) peut inclure une quantit&eacute; illimit&eacute;e d&rsquo;uranium naturel ou d&rsquo;uranium appauvri irradi&eacute; dans un r&eacute;acteur thermique [6].</p>  <p>Les m&eacute;thodes employ&eacute;es pour calculer la sous-criticit&eacute; doivent &ecirc;tre valid&eacute;es conform&eacute;ment &agrave; la section 2.</p>  <p>Les directives relatives &agrave; la d&eacute;termination des besoins et &agrave; l&rsquo;utilisation des alarmes de criticit&eacute; pour la protection du personnel sont d&eacute;crites &agrave; la section 3, <em>Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.1"></div>
<h4 id="sec11-3-1">11.3.1 Analyse de proc&eacute;d&eacute;</h4>  <p>Avant la premi&egrave;re utilisation, ou avant d&rsquo;apporter des changements &agrave; une op&eacute;ration ou &agrave; un syst&egrave;me de manutention, de transport, de stockage ou de gestion des d&eacute;chets &agrave; long terme d&rsquo;unit&eacute;s ou de barres de combustible, une &eacute;valuation de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (ESCN) doit &ecirc;tre effectu&eacute;e pour toutes les conditions normales et anormales cr&eacute;dibles, afin de d&eacute;terminer si l&rsquo;op&eacute;ration ou le syst&egrave;me dans sa totalit&eacute; sera sous-critique, bas&eacute; sur les crit&egrave;res pr&eacute;sent&eacute;s &agrave; la section 11.4, et &agrave; la section 2.3.2.2. L&rsquo;ESCN doit identifier de mani&egrave;re explicite les param&egrave;tres contr&ocirc;l&eacute;s, ainsi que leur conception et les limites d&rsquo;exploitation sur lesquelles repose la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire.</p>  <p>L&rsquo;ESCN doit &ecirc;tre document&eacute;e de mani&egrave;re suffisamment d&eacute;taill&eacute;e, avec clart&eacute; et absence d&rsquo;ambigu&iuml;t&eacute;, afin de permettre une &eacute;valuation ind&eacute;pendante des r&eacute;sultats.</p>  <p>Les conditions et les param&egrave;tres repr&eacute;sentatifs de la manutention, du transport sur place, du stockage sur place, et de la gestion des d&eacute;chets &agrave; long terme sur le site des unit&eacute;s de combustible sont &eacute;num&eacute;r&eacute;s &agrave; l&rsquo;annexe E.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.2"></div>
<h4 id="sec11-3-2">11.3.2 Activit&eacute;s pr&eacute;alables au d&eacute;but des op&eacute;rations</h4>  <p>Avant de d&eacute;buter les op&eacute;rations, une &eacute;valuation ind&eacute;pendante doit &ecirc;tre r&eacute;alis&eacute;e dans le but de confirmer que l&rsquo;&eacute;valuation requise par la section 11.3.1 est ad&eacute;quate.</p>  <p>Avant de d&eacute;buter une op&eacute;ration, le titulaire de permis doit v&eacute;rifier que les conditions nominales sont conformes aux limites de conception sp&eacute;cifi&eacute;es &agrave; la section 11.3.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.3"></div>
<h4 id="sec11-3-3">11.3.3 Absorbeurs de neutrons</h4>  <p>On peut se fier sur les absorbeurs de neutrons, comme le gadolinium et le bore qui sont int&eacute;gr&eacute;s au combustible lui-m&ecirc;me, ou qui sont contenus dans des structures ou de l&rsquo;&eacute;quipement, ou les deux. Cependant, lorsqu&rsquo;on se fie sur les absorbeurs de neutrons, un contr&ocirc;le doit &ecirc;tre exerc&eacute; dans le but de maintenir leur pr&eacute;sence continue dans le respect des distributions et des concentrations pr&eacute;vues. Une attention particuli&egrave;re devrait &ecirc;tre accord&eacute;e aux absorbeurs sous forme de solution, parce qu&rsquo;il est difficile d&rsquo;exercer un contr&ocirc;le dans ce cas, ainsi qu&rsquo;aux unit&eacute;s de combustible contenant du poison consommable, afin d&rsquo;identifier la condition de r&eacute;activit&eacute; maximale &agrave; consid&eacute;rer.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.4"></div>
<h4 id="sec11-3-4">11.3.4 Composition et caract&eacute;ristiques nucl&eacute;aires du combustible</h4>  <p>Lors de l&rsquo;ESCN, la composition et les caract&eacute;ristiques nucl&eacute;aires du combustible doivent &ecirc;tre celles r&eacute;sultant du facteur maximal de multiplication des neutrons du syst&egrave;me. On peut prendre cr&eacute;dit pour le taux de combustion de la mani&egrave;re suivante :</p>
<ol>
<li>&eacute;tablir la r&eacute;activit&eacute; maximale d&rsquo;une unit&eacute; de combustible</li>
<li>s&rsquo;assurer que chaque unit&eacute; de combustible a une r&eacute;activit&eacute; ne d&eacute;passant pas la r&eacute;activit&eacute; maximale &eacute;tablie gr&acirc;ce &agrave; :
<ul>
<li>une mesure de la r&eacute;activit&eacute;</li>
<li>une analyse et une v&eacute;rification de l&rsquo;historique de l&rsquo;exposition de chaque unit&eacute; de combustible</li>
</ul></li>
</ol>  <p>Il faut tenir compte de la distribution axiale du taux de combustion dans l&rsquo;unit&eacute; de combustible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.5"></div>
<h4 id="sec11-3-5">11.3.5 Transport</h4>  <p>Les unit&eacute;s et les barres de combustible devraient &ecirc;tre manipul&eacute;es, transport&eacute;es, stock&eacute;es et plac&eacute;e en gestion des d&eacute;chets &agrave; long terme de fa&ccedil;on &agrave; procurer un facteur de s&ucirc;ret&eacute; suffisant pour n&eacute;cessiter au moins deux changements improbables, ind&eacute;pendants et simultan&eacute;s dans les conditions, avant qu&rsquo;un accident de criticit&eacute; ne se produise.</p>
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
<h3 id="sec11-4">11.4 Crit&egrave;res relatifs &agrave; l&rsquo;&eacute;tablissement de la sous criticit&eacute;</h3>  <p>Lorsque des m&eacute;thodes d&rsquo;analyse sont utilis&eacute;es pour pr&eacute;voir les facteurs de multiplication des neutrons, le facteur de multiplication calcul&eacute;, k, doit &ecirc;tre &eacute;gal ou inf&eacute;rieur &agrave; une limite sup&eacute;rieure de sous-criticit&eacute; (LSSC) &eacute;tabli, tel qu&rsquo;indiqu&eacute; &agrave; l&rsquo;annexe B.</p>
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
<h2 id="sec12">12. Pratiques administratives en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.19-2014, <span lang="en"><em>Administrative Practices for Nuclear Criticality Safety</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec12-1">12.1 Introduction</h3>  <p>Un programme efficace de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire comprend une collaboration entre les gestionnaires, les superviseurs et le personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. Pour chaque employ&eacute;, le programme repose sur la conformit&eacute; avec les proc&eacute;dures d&rsquo;exploitation.</p>  <p>Bien que l&rsquo;ampleur et la complexit&eacute; des activit&eacute;s li&eacute;es &agrave; la s&ucirc;ret&eacute; peuvent varier consid&eacute;rablement selon l&rsquo;importance et le type d&rsquo;activit&eacute; avec des mati&egrave;res fissionnables, certains &eacute;l&eacute;ments de s&ucirc;ret&eacute; sont communs. La section 12 repr&eacute;sente une codification de ces &eacute;l&eacute;ments de s&ucirc;ret&eacute;-criticit&eacute;.</p>
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
<h3 id="sec12-2">12.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section contient des crit&egrave;res relatifs &agrave; l&rsquo;administration d&rsquo;un programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour les activit&eacute;s hors r&eacute;acteurs au cours desquelles il existe un risque d&rsquo;accident de criticit&eacute;.</p>  <p>Les responsabilit&eacute;s des gestionnaires, des superviseurs et du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire y sont trait&eacute;es. Les objectifs et les caract&eacute;ristiques des proc&eacute;dures d&rsquo;exploitation et des proc&eacute;dures d&rsquo;urgence sont inclus.</p>  <p>Une orientation g&eacute;n&eacute;rale en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire est donn&eacute;e &agrave; la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>. Une orientation est donn&eacute;e pour les isotopes sp&eacute;ciaux fissiles &agrave; la section 10, <em>Contr&ocirc;le de la criticit&eacute; nucl&eacute;aire des nucl&eacute;ides d&rsquo;actinides sp&eacute;ciaux</em>.</p>
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
<h3 id="sec12-3">12.3 Responsabilit&eacute;s</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.1"></div>
<h4 id="sec12-3-1">12.3.1 Responsabilit&eacute;s des gestionnaires</h4>  <p>La Direction doit :</p>
<ol>
<li>prendre l&rsquo;enti&egrave;re responsabilit&eacute; de la s&ucirc;ret&eacute; des activit&eacute;s et assurer une supervision r&eacute;guli&egrave;re et syst&eacute;matique</li>
<li>&eacute;laborer une politique de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et la faire conna&icirc;tre &agrave; tous les employ&eacute;s participant aux activit&eacute;s comportant des mati&egrave;res fissionnables. On peut faire une distinction entre les installations blind&eacute;es et les installations non blind&eacute;es, et pr&eacute;ciser les contr&ocirc;les de criticit&eacute; appropri&eacute;s dans chaque cas</li>
<li>attribuer des responsabilit&eacute;s et d&eacute;l&eacute;guer l&rsquo;autorit&eacute; ad&eacute;quate afin de mettre en &oelig;uvre la politique &eacute;tablie. La responsabilit&eacute; en mati&egrave;re de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire devrait &ecirc;tre assign&eacute;e de mani&egrave;re compatible avec les autres disciplines de s&ucirc;ret&eacute;. Chaque personne, peu importe son poste, doit &ecirc;tre au courant du fait que la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire associ&eacute;e &agrave; son domaine de travail demeure sa responsabilit&eacute;</li>
<li>doter leurs installations de personnel familier avec la physique de la criticit&eacute; nucl&eacute;aire et avec les pratiques de s&ucirc;ret&eacute; connexes, afin que le personnel puisse fournir au besoin des conseils techniques relatifs &agrave; la port&eacute;e des activit&eacute;s. Cette fonction devrait &ecirc;tre ind&eacute;pendante des activit&eacute;s sur le plan administratif, dans la mesure du possible</li>
<li>&eacute;tablir une m&eacute;thode de surveillance du programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>participer p&eacute;riodiquement &agrave; la v&eacute;rification de l&rsquo;efficacit&eacute; globale du programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>&eacute;tablir un processus et des proc&eacute;dures d&eacute;finis pour le contr&ocirc;le des modifications &agrave; l&rsquo;&eacute;quipement [9]</li>
<li>&eacute;tablir des proc&eacute;dures d&rsquo;exploitation ainsi qu&rsquo;un processus relatif &agrave; la modification de ces proc&eacute;dures [9]</li>
</ol>  <p>La Direction peut avoir recours &agrave; des conseillers ou sp&eacute;cialistes et &agrave; des comit&eacute;s de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour atteindre les objectifs du programme.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.2"></div>
<h4 id="sec12-3-2">12.3.2 Responsabilit&eacute;s des superviseurs</h4>  <p>Chaque superviseur doit :</p>
<ol>
<li>endosser la responsabilit&eacute; de la s&ucirc;ret&eacute; des activit&eacute;s qu&rsquo;il a &agrave; contr&ocirc;ler</li>
<li>bien conna&icirc;tre les aspects de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire se rapportant aux activit&eacute;s &agrave; contr&ocirc;ler. La formation et l&rsquo;aide devraient &ecirc;tre obtenues aupr&egrave;s du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>donner de la formation et exiger que le personnel sous sa supervision comprenne bien les proc&eacute;dures et les consid&eacute;rations de s&ucirc;ret&eacute;, de mani&egrave;re &agrave; ce qu&rsquo;il puisse accomplir ses fonctions sans risque inacceptable ; les programmes de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire sont examin&eacute;s &agrave; la section 13, <em>Formation relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>. Des registres des activit&eacute;s de formation et de la v&eacute;rification des connaissances du personnel doivent &ecirc;tre conserv&eacute;s</li>
<li>&eacute;laborer ou participer &agrave; l&rsquo;&eacute;laboration de proc&eacute;dures &eacute;crites applicables aux activit&eacute;s qu&rsquo;ils ont &agrave; contr&ocirc;ler. La mise &agrave; jour de ces proc&eacute;dures dans le but de refl&eacute;ter les changements dans les activit&eacute;s rel&egrave;ve du superviseur</li>
<li>veiller &agrave; la conformit&eacute; en appliquant les bonnes pratiques de s&ucirc;ret&eacute;, y compris l&rsquo;identification claire des mati&egrave;res fissionnables et une gestion ad&eacute;quate</li>
<li>&ecirc;tre responsable de l&rsquo;inspection, de l&rsquo;essai et de l&rsquo;entretien des contr&ocirc;les techniques</li>
</ol>  <p>Chaque superviseur v&eacute;rifie &eacute;galement la conformit&eacute; avec les sp&eacute;cifications relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour l&rsquo;&eacute;quipement neuf ou modifi&eacute; avant son utilisation. La v&eacute;rification peut &ecirc;tre bas&eacute;e sur des rapports d&rsquo;inspection ou sur d&rsquo;autres caract&eacute;ristiques du programme d&rsquo;assurance de la qualit&eacute;.</p>  <p>Les superviseurs peuvent obtenir de l&rsquo;aide pour assumer les responsabilit&eacute;s d&eacute;crites aux points 3 &agrave; 6 ci-dessus en s&rsquo;adressant aux autres services, notamment l&rsquo;exploitation de l&rsquo;installation et l&rsquo;entretien.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.3"></div>
<h4 id="sec12-3-3">12.3.3 Responsabilit&eacute;s du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h4>  <p>Le personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (personnel de SCN) doit :</p>
<ol>
<li>assumer, et accepter la responsabilit&eacute; relative &agrave;, l&rsquo;orientation technique dans la conception de l&rsquo;&eacute;quipement et des proc&eacute;d&eacute;s, ainsi que pour le d&eacute;veloppement des proc&eacute;dures d&rsquo;exploitation [9]</li>
<li>demeurer familier avec les d&eacute;veloppements r&eacute;cents relatifs aux normes, aux guides et aux codes de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire ; la connaissance d&rsquo;une information &agrave; jour sur la criticit&eacute; nucl&eacute;aire devrait &ecirc;tre maintenue ; le personnel de SCN devrait consulter des personnes poss&eacute;dant des connaissances dans ce domaine dans le but d&rsquo;obtenir l&rsquo;aide technique n&eacute;cessaire</li>
<li>demeurer familier avec toutes les activit&eacute;s au sein de l&rsquo;organisation n&eacute;cessitant des contr&ocirc;les de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>aider le superviseur dans la formation du personnel, lorsqu&rsquo;il le demande</li>
<li>r&eacute;aliser ou participer &agrave; des v&eacute;rifications des pratiques de s&ucirc;ret&eacute;-criticit&eacute; et assurer la conformit&eacute; avec les proc&eacute;dures, tel que demand&eacute; par la Direction</li>
<li>examiner les rapports sur les infractions aux proc&eacute;dures et sur d&rsquo;autres lacunes, en vue d&rsquo;am&eacute;liorer les pratiques de s&ucirc;ret&eacute; et les exigences proc&eacute;durales, et doit documenter les r&eacute;sultats dans le cadre de rapports pr&eacute;sent&eacute;s &agrave; la Direction</li>
<li>sur demande, participer &agrave; la v&eacute;rification de la conformit&eacute; en tenant compte des sp&eacute;cifications de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire, pour l&rsquo;&eacute;quipement ou les proc&eacute;d&eacute;s neufs ou modifi&eacute;s [9]</li>
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
<div id="12.4"></div>
<h3 id="sec12-4">12.4 Proc&eacute;dures d&rsquo;exploitation</h3>  <p>Le but des proc&eacute;dures d&rsquo;exploitation &eacute;crites est de faciliter et de documenter la conduite s&eacute;curitaire et efficace des activit&eacute;s. Les proc&eacute;dures devraient &ecirc;tre organis&eacute;es de mani&egrave;re pratique pour les op&eacute;rateurs et doivent &ecirc;tre facilement accessibles. Elles ne devraient pas contenir de mat&eacute;riel inappropri&eacute;. Les proc&eacute;dures &eacute;crites applicables devraient &ecirc;tre affich&eacute;es ou disponibles dans les zones d&rsquo;exploitation [7].</p>  <p>Les proc&eacute;dures doivent comprendre des contr&ocirc;les et des limites importantes sur le plan de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. Les proc&eacute;dures devraient faire en sorte qu&rsquo;une seule d&eacute;rogation survenue par inadvertance ne puisse causer un accident de criticit&eacute;.</p>  <p>Il convient de faciliter l&rsquo;am&eacute;lioration et la r&eacute;vision des proc&eacute;dures, lorsque des am&eacute;liorations s&rsquo;av&egrave;rent souhaitables.</p>  <p>Les proc&eacute;dures d&rsquo;exploitation doivent &ecirc;tre examin&eacute;es p&eacute;riodiquement par les superviseurs.</p>  <p>Les proc&eacute;dures nouvelles ou r&eacute;vis&eacute;es qui ont une incidence sur la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doivent &ecirc;tre examin&eacute;es par le personnel de SCN et par les superviseurs, et elles doivent &ecirc;tre approuv&eacute;es par la Direction [9].</p>  <p>Toute d&eacute;rogation aux proc&eacute;dures d&rsquo;exploitation et les changements non pr&eacute;vus aux conditions de proc&eacute;d&eacute; ayant une incidence sur la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doivent &ecirc;tre signal&eacute;s &agrave; la Direction, faire l&rsquo;objet d&rsquo;une enqu&ecirc;te dans les plus brefs d&eacute;lais et &ecirc;tre corrig&eacute;s selon les besoins, et document&eacute;s. Des mesures doivent &ecirc;tre prises afin d&rsquo;&eacute;viter que la situation ne se produise &agrave; nouveau.</p>  <p>Les activit&eacute;s doivent &ecirc;tre r&eacute;vis&eacute;es fr&eacute;quemment (au moins une fois par ann&eacute;e) afin de d&eacute;terminer si les proc&eacute;dures sont suivies et si les conditions de proc&eacute;d&eacute; n&rsquo;ont pas &eacute;t&eacute; modifi&eacute;es de mani&egrave;re &agrave; avoir une incidence sur l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (ESCN). Ces examens doivent &ecirc;tre effectu&eacute;s en consultation avec le personnel d&rsquo;exploitation, par des personnes qui s&rsquo;y connaissent en s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; et qui, dans la mesure du possible, ne sont pas directement responsables de l&rsquo;activit&eacute;.</p>  <p>Le personnel devrait &ecirc;tre encourag&eacute; &agrave; fournir des commentaires sur le programme de s&ucirc;ret&eacute; criticit&eacute; nucl&eacute;aire, notamment :</p>
<ul>
<li>les pr&eacute;occupations ou les circonstances qui pourraient nuire &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>les pratiques favorisant la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>les am&eacute;liorations possibles</li>
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
<div id="12.5"></div>
<h3 id="sec12-5">12.5 &Eacute;valuation de proc&eacute;d&eacute; pour la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire (&eacute;valuation de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire)</h3>  <p>Avant de d&eacute;buter une nouvelle activit&eacute; comportant des mati&egrave;res fissionnables, ou avant de modifier une activit&eacute; existante, il convient de d&eacute;terminer et de documenter le processus dans son ensemble afin de d&eacute;terminer s&rsquo;il est sous-critique &agrave; la fois dans des conditions normales et anormales cr&eacute;dibles.</p>  <p>L&rsquo;ESCN doit permettre de d&eacute;terminer et d&rsquo;identifier explicitement les param&egrave;tres contr&ocirc;l&eacute;s et leurs limites connexes sur lesquelles repose la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. L&rsquo;effet des changements dans ces param&egrave;tres, ou dans les conditions auxquelles ils s&rsquo;appliquent, doit &ecirc;tre compris.</p>  <p>L&rsquo;ESCN doit &ecirc;tre document&eacute;e de fa&ccedil;on suffisamment d&eacute;taill&eacute;e, claire et sans ambigu&iuml;t&eacute;, afin de permettre un jugement ind&eacute;pendant des r&eacute;sultats.</p>  <p>Avant de d&eacute;buter l&rsquo;activit&eacute;, on doit proc&eacute;der &agrave; une &eacute;valuation ind&eacute;pendante confirmant que l&rsquo;ESCN est ad&eacute;quate.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.6"></div>
<h3 id="sec12-6">12.6 Contr&ocirc;le des mati&egrave;res</h3>  <p>Le d&eacute;placement des mati&egrave;res fissionnables doit &ecirc;tre contr&ocirc;l&eacute; tel qu&rsquo;indiqu&eacute; dans les proc&eacute;dures. Le transport des mati&egrave;res fissionnables dans le domaine public doit se conformer &agrave; la r&eacute;glementation nationale et internationale [9, 41, 42, 43].</p>  <p>L&rsquo;&eacute;tiquetage appropri&eacute; des mati&egrave;res et la pose d&rsquo;affiches doivent &ecirc;tre maintenus, et doivent sp&eacute;cifier la nature des mati&egrave;res et toutes les limites relatives aux param&egrave;tres qui sont assujettis au contr&ocirc;le proc&eacute;dural de la criticit&eacute;.</p>  <p>Lorsqu&rsquo;on se fie aux absorbeurs de neutrons qui sont int&eacute;gr&eacute;s dans les mat&eacute;riaux ou l&rsquo;&eacute;quipement de proc&eacute;d&eacute; pour le contr&ocirc;le de la criticit&eacute;, il faut appliquer un contr&ocirc;le proc&eacute;dural afin de maintenir leur pr&eacute;sence continue dans les distributions et les concentrations pr&eacute;vues.</p>  <p>L&rsquo;acc&egrave;s aux zones o&ugrave; des mati&egrave;res fissionnables sont manipul&eacute;es, trait&eacute;es ou entrepos&eacute;es doit &ecirc;tre contr&ocirc;l&eacute;.</p>  <p>Le contr&ocirc;le de l&rsquo;espacement, de la masse, de la masse volumique et de la g&eacute;om&eacute;trie des mati&egrave;res fissionnables doit &ecirc;tre effectu&eacute; afin d&rsquo;assurer la sous-criticit&eacute; dans des conditions normales et anormales cr&eacute;dibles &ndash; cette exigence ne s&rsquo;applique pas aux activit&eacute;s comportant une petite quantit&eacute; de mati&egrave;re fissionnable.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.7"></div>
<h3 id="sec12-7">12.7 Intervention pr&eacute;vue en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</h3>  <p>Des directives relatives &agrave; l&rsquo;utilisation des syst&egrave;mes d&rsquo;alarme d&rsquo;accident de criticit&eacute; nucl&eacute;aire sont pr&eacute;sent&eacute;es &agrave; la section 3, <em>Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</em>. La planification et l&rsquo;intervention en cas d&rsquo;urgence sont trait&eacute;es &agrave; la section 16, <em>Planification et intervention d&rsquo;urgence en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</em>.</p>  <p>Des proc&eacute;dures d&rsquo;urgence doivent &ecirc;tre pr&eacute;par&eacute;es et doivent &ecirc;tre approuv&eacute;es par la Direction. Les organisations sur le site et &agrave; l&rsquo;ext&eacute;rieur du site, dont on s&rsquo;attend qu&rsquo;elles devraient fournir de l&rsquo;aide en cas d&rsquo;urgence, doivent &ecirc;tre inform&eacute;es des conditions potentielles. On devrait les aider &agrave; pr&eacute;parer des proc&eacute;dures d&rsquo;intervention en cas d&rsquo;urgence ad&eacute;quates.</p>  <p>Les proc&eacute;dures d&rsquo;urgence doivent clairement identifier des itin&eacute;raires d&rsquo;&eacute;vacuation. L&rsquo;&eacute;vacuation devrait utiliser les itin&eacute;raires les plus rapides et les plus directs possibles. Ces itin&eacute;raires doivent &ecirc;tre clairement identifi&eacute;s et devraient &eacute;viter les zones reconnues comme &eacute;tant plus &agrave; risque.</p>  <p>Des stations de rassemblement, &agrave; l&rsquo;ext&eacute;rieur des zones &agrave; &eacute;vacuer, doivent &ecirc;tre d&eacute;sign&eacute;es. Des moyens de comptabiliser le personnel doivent &ecirc;tre &eacute;tablis.</p>  <p>Le personnel qui se trouve dans la zone &agrave; &eacute;vacuer doit avoir re&ccedil;u une formation sur les m&eacute;thodes d&rsquo;&eacute;vacuation et &ecirc;tre inform&eacute; des itin&eacute;raires d&rsquo;&eacute;vacuation et de l&rsquo;emplacement des stations de rassemblement. On doit pr&eacute;voir l&rsquo;&eacute;vacuation du personnel passager. Des exercices doivent &ecirc;tre effectu&eacute;s au moins une fois par ann&eacute;e afin que le personnel demeure familier avec les proc&eacute;dures d&rsquo;urgence. Les exercices doivent &ecirc;tre annonc&eacute;s &agrave; l&rsquo;avance.</p>  <p>On doit prendre des dispositions &agrave; l&rsquo;avance pour les soins et le traitement des bless&eacute;s et des personnes expos&eacute;es. Le risque de contamination du personnel par des mati&egrave;res radioactives doit &ecirc;tre envisag&eacute;.</p>  <p>La planification doit comprendre un programme relatif &agrave; l&rsquo;identification imm&eacute;diate des personnes expos&eacute;es ainsi que la dosim&eacute;trie du personnel.</p>   <p>Des instruments et des proc&eacute;dures doivent &ecirc;tre fournis pour d&eacute;terminer l&rsquo;intensit&eacute; du rayonnement dans la zone de rassemblement et dans la zone &eacute;vacu&eacute;e suite &agrave; l&rsquo;accident de criticit&eacute;. Les informations devraient &ecirc;tre corr&eacute;l&eacute;es dans un point de contr&ocirc;le central.</p>  <p>Les proc&eacute;dures d&rsquo;urgence doivent comporter des proc&eacute;dures de r&eacute;int&eacute;gration et identifier la composition des &eacute;quipes d&rsquo;intervention.</p>  <p>Les proc&eacute;dures d&rsquo;urgence doivent pr&eacute;voir la mise &agrave; l&rsquo;arr&ecirc;t de la ventilation, afin d&rsquo;&eacute;viter le rejet de produits de fission &agrave; l&rsquo;ext&eacute;rieur de la zone vis&eacute;e. On devrait tenir compte du fait que la ventilation ne fonctionne pas, afin de ne pas ajouter d&rsquo;autres risques pour la s&eacute;curit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.8"></div>
<h3 id="sec12-8">12.8 Programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.8.1"></div>
<h4 id="sec12-8-1">12.8.1 Liste des documents &agrave; fournir &agrave; l&rsquo;appui d&rsquo;une demande de permis relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h4>  <p>Pour faire une demande d&rsquo;autorisation en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire, les documents suivants sont requis :</p>
<ul className="list-bullet-none">
<li>(a)	lettre du demandeur, qui s&rsquo;engage &agrave; respecter les sections applicables du pr&eacute;sent document</li>
<li>(b)	programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
<li>(c)	rapport de qualification/validation pour le code informatique utilis&eacute; dans les ESCN</li>
<li>(d)	Rapports d&rsquo;ESCN, sous forme de r&eacute;sum&eacute;, au besoin, dans une forme non exclusive contenue dans le rapport d&rsquo;analyse de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</li>
</ul>  <p>Dans le texte suivant, ces documents sont mentionn&eacute;s comme faisant partie des r&eacute;f&eacute;rences a) &agrave; d).</p>  <p>Une autov&eacute;rification initiale du caract&egrave;re exhaustif des documents peut &ecirc;tre faite en d&eacute;terminant s&rsquo;il comporte suffisamment d&rsquo;information pour appuyer le texte suivant :</p>
<ul className="list-bullet-none">
<li><em>Tel qu&rsquo;indiqu&eacute; aux r&eacute;f&eacute;rences b) et d), l&rsquo;installation doit &ecirc;tre {con&ccedil;ue/exploit&eacute;e &ndash; exemple} de mani&egrave;re &agrave; ce que k<sub>eff</sub> ne d&eacute;passe pas la limite sup&eacute;rieure de sous-criticit&eacute; de {0,9249 &ndash; exemple} pour des conditions normales et anormales cr&eacute;dibles dont la fr&eacute;quence est &eacute;gale ou sup&eacute;rieure &agrave; 10<sup>-6</sup> par ann&eacute;e, tel qu&rsquo;indiqu&eacute; &agrave; la r&eacute;f&eacute;rence d) et vis&eacute; par le domaine d&rsquo;applicabilit&eacute; dans la r&eacute;f&eacute;rence c).</em></li>
<li><em>Tel qu&rsquo;indiqu&eacute; aux r&eacute;f&eacute;rences b) et d), l&rsquo;installation doit &ecirc;tre {con&ccedil;ue/exploit&eacute;e &ndash; exemple} de mani&egrave;re &agrave; ce qu&rsquo;une fonction de s&ucirc;ret&eacute; relative au blindage et au confinement maintienne la dose r&eacute;sultant de l&rsquo;exposition au rayonnement direct et aux radionucl&eacute;ides rejet&eacute;s par l&rsquo;installation, en-dessous des limites figurant au tableau [xx] de la r&eacute;f&eacute;rence d) pendant et apr&egrave;s un accident de criticit&eacute; nucl&eacute;aire.</em></li>
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
<div id="12.8.2"></div>
<h4 id="sec12-8-2">12.8.2 Contenu du programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h4>  <p>Le programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doit :</p>
<ol>
<li>identifier les normes et les lignes directrices en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute;, ainsi que les exigences de la CCSN (y compris les sections pertinentes du pr&eacute;sent document)</li>
<li>&eacute;num&eacute;rer les exigences qui doivent &ecirc;tre respect&eacute;es pour se conformer aux normes, lignes directrices et exigences de la CCSN applicables</li>
<li>d&eacute;finir un mod&egrave;le pour la mise en &oelig;uvre de ces exigences</li>
<li>identifier les responsabilit&eacute;s d&eacute;coulant de ces exigences</li>
<li>d&eacute;crire la mani&egrave;re dont le programme respecte les exigences de s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire dans chaque cat&eacute;gorie fonctionnelle (comme l&rsquo;administration, l&rsquo;ESCN, le syst&egrave;me d&rsquo;alarme de criticit&eacute;, la conception technique, les proc&eacute;dures, le contr&ocirc;le des mati&egrave;res, la formation, les mesures d&rsquo;urgence, la surveillance continue)</li>
<li>identifier la marge administrative de sous criticit&eacute; (selon qu&rsquo;elle est bas&eacute;e sur le k<sub>eff</sub> ou sur les limites de masse, ou les deux, ou d&rsquo;autres param&egrave;tres), identifier la m&eacute;thode employ&eacute;e pour d&eacute;terminer la marge de sous criticit&eacute; pour la s&ucirc;ret&eacute; et les limites sup&eacute;rieures de sous criticit&eacute;</li>
<li>identifier la m&eacute;thode d&rsquo;&eacute;valuation des risques qui sera utilis&eacute;e pour d&eacute;montrer que la limite sup&eacute;rieure de sous-criticit&eacute; ne sera pas d&eacute;pass&eacute;e dans tous les proc&eacute;d&eacute;s nucl&eacute;aires (hors r&eacute;acteurs) dans des conditions normales et anormales cr&eacute;dibles; c&rsquo;est-&agrave;-dire lors des accidents ou des s&eacute;quences d&rsquo;accident dont la fr&eacute;quence est &eacute;gale ou sup&eacute;rieure &agrave; 10<sup>-6</sup> par ann&eacute;e</li>
</ol>  <p>L&rsquo;annexe G donne un exemple de programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire.</p>
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
<h2 id="sec13">13. Formation relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.20-1991 (r&eacute;&eacute;dit&eacute;e en 2015), <span lang="en"><em>Nuclear Criticality Safety Training</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
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
<h3 id="sec13-1">13.1 Introduction</h3>  <p>La section 13 fournit un cadre pour la formation des employ&eacute;s qui effectuent des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs et comportant un risque d&rsquo;accident de criticit&eacute; nucl&eacute;aire. Un programme de formation efficace en li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire exige la collaboration de la Direction, des superviseurs et du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute;.</p>
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
<h3 id="sec13-2">13.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section fournit les crit&egrave;res relatifs &agrave; la formation en s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour le personnel associ&eacute; aux op&eacute;rations hors r&eacute;acteurs o&ugrave; il existe un risque d&rsquo;accident de criticit&eacute;. Cette section ne s&rsquo;applique pas &agrave; la formation du personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire.</p>  <p>Une orientation g&eacute;n&eacute;rale en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire est pr&eacute;sent&eacute;e &agrave; la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>. Les crit&egrave;res relatifs &agrave; l&rsquo;administration d&rsquo;un programme de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire pour les op&eacute;rations hors r&eacute;acteurs pour lesquelles il existe un risque d&rsquo;accident de criticit&eacute; sont pr&eacute;sent&eacute;s &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3"></div>
<h3 id="sec13-3">13.3 Objectifs</h3>  <p>La pr&eacute;sente section pr&eacute;sente les caract&eacute;ristiques fondamentales d&rsquo;un programme de formation efficace en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. Le programme vise les gestionnaires, ou les personnes qui travaillent dans des installations ou &agrave; proximit&eacute; d&rsquo;installations o&ugrave; il existe un risque d&rsquo;accident de criticit&eacute;. Ce personnel comprend, sans toutefois s&rsquo;y limiter, les personnes suivantes :</p>
<ul>
<li>personnel qui travaille avec des mati&egrave;res fissiles et leurs superviseurs</li>
<li>personnel de support &agrave; l&rsquo;exploitation</li>
<li>personnel de conception</li>
<li>personnel d&rsquo;entretien</li>
<li>personnel d&rsquo;intervention d&rsquo;urgence</li>
<li>gestionnaires et autre personnel administratif</li>
<li>personnel qui entre dans les zones o&ugrave; des mati&egrave;res fissiles sont trait&eacute;es, stock&eacute;es ou manipul&eacute;es</li>
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
<div id="13.4"></div>
<h3 id="sec13-4">13.4 Responsabilit&eacute;s li&eacute;es au programme</h3>  <p>La Direction doit &eacute;tablir un programme de formation en s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; nucl&eacute;aire qui permet d&rsquo;assurer la comp&eacute;tence continue du personnel.</p>  <p>Les superviseurs doivent s&rsquo;assurer que leurs employ&eacute;s ont re&ccedil;u une formation ad&eacute;quate.</p>  <p>Le personnel associ&eacute; &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire doit participer &agrave; l&rsquo;&eacute;laboration du programme de formation ainsi qu&rsquo;&agrave; sa mise en &oelig;uvre et &agrave; l&rsquo;&eacute;valuation de son efficacit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.5"></div>
<h3 id="sec13-5">13.5 Structure du programme</h3>  <p>Les exigences relatives &agrave; la formation doivent &ecirc;tre d&eacute;termin&eacute;es et document&eacute;es. Le contenu du programme de formation doit &ecirc;tre adapt&eacute; aux responsabilit&eacute;s du poste et doit servir de support &agrave; l&rsquo;accomplissement des t&acirc;ches.</p>  <p>Les exigences relatives &agrave; la formation de recyclage doivent &ecirc;tre d&eacute;termin&eacute;es et document&eacute;es. Cette formation doit &ecirc;tre offerte au moins tous les deux ans.</p>  <p>Les objectifs d&rsquo;apprentissage de chaque le&ccedil;on devraient &ecirc;tre mis &agrave; la disposition des personnes qui re&ccedil;oivent la formation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6"></div>
<h3 id="sec13-6">13.6 Contenu du programme</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.1"></div>
<h4 id="sec13-6-1">13.6.1 R&eacute;action de fission en cha&icirc;ne et cons&eacute;quences des accidents</h4>  <p>La notion de r&eacute;action de fission en cha&icirc;ne devrait &ecirc;tre examin&eacute;e. On devrait &eacute;tablir une distinction entre les familles de d&eacute;sint&eacute;gration dans lesquelles le taux de fission diminue en fonction du temps, celles qui sont entretenues gr&acirc;ce &agrave; un taux de fission constant et celles dont le taux de fission conna&icirc;t une augmentation exponentielle.</p>  <p>L&rsquo;historique temporel des excursions supercritiques devrait &ecirc;tre d&eacute;crit pour les syst&egrave;mes m&eacute;talliques (neutrons rapides) et pour les syst&egrave;mes mod&eacute;r&eacute;s (neutrons lents).</p>  <p>L&rsquo;&eacute;nergie cin&eacute;tique lib&eacute;r&eacute;e durant une salve de fission devrait &ecirc;tre compar&eacute;e &agrave; l&rsquo;&eacute;nergie &eacute;quivalente mesur&eacute;e pour des &eacute;v&eacute;nements familiers, par exemple des explosions chimiques.</p>  <p>On devrait faire une distinction entre l&rsquo;intensit&eacute; du rayonnement qui peut sembler essentiellement instantan&eacute;e, et celle associ&eacute;e au rendement de pointe qui pourrait d&eacute;couler d&rsquo;une r&eacute;action de fission entretenue. Cette information devrait &ecirc;tre utilis&eacute;e pour estimer la port&eacute;e des expositions pouvant &ecirc;tre associ&eacute;e aux accidents de proc&eacute;d&eacute;.</p>  <p>Les effets sur la sant&eacute; des accidents de criticit&eacute; doivent &ecirc;tre examin&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.2"></div>
<h4 id="sec13-6-2">13.6.2 Comportement des neutrons dans les syst&egrave;mes de fission</h4>  <p>Des descriptions de la fission induite par les neutrons, de la capture neutronique, de la diffusion des neutrons et de la fuite de neutrons devraient &ecirc;tre incluses.</p>  <p>L&rsquo;influence de l&rsquo;&eacute;nergie des neutrons sur la probabilit&eacute; de fission devrait &ecirc;tre examin&eacute;e.</p>  <p>La mod&eacute;ration des neutrons devrait &ecirc;tre expliqu&eacute;e comme &eacute;tant le m&eacute;canisme r&eacute;duisant l&rsquo;&eacute;nergie des neutrons. Plusieurs bons mod&eacute;rateurs de neutrons devraient &ecirc;tre identifi&eacute;s.</p>  <p>L&rsquo;enl&egrave;vement des neutrons des syst&egrave;mes de fission par des absorbeurs de neutrons devrait &ecirc;tre examin&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.3"></div>
<h4 id="sec13-6-3">13.6.3 Historique des accidents de criticit&eacute;</h4>  <p>Des accidents de criticit&eacute; choisis devraient &ecirc;tre d&eacute;crits.</p>  <p>Les causes de ces accidents et les moyens employ&eacute;s pour y mettre un terme devraient &ecirc;tre examin&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.4"></div>
<h4 id="sec13-6-4">13.6.4 R&eacute;ponse aux signaux d&rsquo;alarme de criticit&eacute;</h4>  <p>On doit donner une formation relative &agrave; la reconnaissance et &agrave; la r&eacute;ponse aux alarmes de criticit&eacute; conform&eacute;ment &agrave; la section 3, <em>Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</em>.</p>  <p>Un exemple de la r&eacute;duction de la dose re&ccedil;ue en fonction de la distance, du temps et du blindage doit &ecirc;tre donn&eacute; afin de mettre l&rsquo;accent sur une &eacute;vacuation rapide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.5"></div>
<h4 id="sec13-6-5">13.6.5 Param&egrave;tres de contr&ocirc;le</h4>  <p>Les effets et les applications des facteurs suivants qui sont pertinents pour les op&eacute;rations de s&ucirc;ret&eacute;-criticit&eacute; dans l&rsquo;installation doivent &ecirc;tre expliqu&eacute;s et illustr&eacute;s :</p>
<ul>
<li>la masse</li>
<li>la forme</li>
<li>l&rsquo;interaction et la s&eacute;paration</li>
<li>la mod&eacute;ration</li>
<li>la r&eacute;flexion</li>
<li>la concentration</li>
<li>le volume</li>
<li>la masse volumique</li>
<li>les absorbeurs de neutrons</li>
<li>l&rsquo;h&eacute;t&eacute;rog&eacute;n&eacute;it&eacute;</li>
<li>l&rsquo;enrichissement</li>
</ul>  <p>Les limites &agrave; un seul param&egrave;tre appropri&eacute;es &agrave; l&rsquo;installation doivent &ecirc;tre examin&eacute;es.</p>  <p>La notion de criticit&eacute; nucl&eacute;aire doit &ecirc;tre illustr&eacute;e par des exemples appropri&eacute;s &agrave; l&rsquo;installation. Voici des exemples courants :</p>
<ol>
<li>le changement dans la masse critique de petites pi&egrave;ces de mati&egrave;res fissiles, comme des morceaux issus de fa&ccedil;onneuses sur tour ou de pastilles faiblement enrichies, immerg&eacute;es dans l&rsquo;eau ou dans l&rsquo;huile</li>
<li>l&rsquo;influence des mat&eacute;riaux non fissiles et de la g&eacute;om&eacute;trie sur la criticit&eacute; nucl&eacute;aire</li>
<li>les facteurs ayant une incidence sur les interactions entre les unit&eacute;s</li>
</ol>  <p>On doit examiner le principe de contingences pour la v&eacute;rification de la validit&eacute; des limites de s&ucirc;ret&eacute;-criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.6"></div>
<h4 id="sec13-6-6">13.6.6 Politique et proc&eacute;dures</h4>  <p>La politique en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire de l&rsquo;installation doit &ecirc;tre d&eacute;crite.</p>  <p>La politique de l&rsquo;installation relative aux listes de contr&ocirc;le, aux feuilles de signatures et &agrave; la documentation dans l&rsquo;ex&eacute;cution des proc&eacute;dures qui sont pertinentes &agrave; la s&ucirc;ret&eacute;-criticit&eacute; doit &ecirc;tre expliqu&eacute;e.</p>  <p>Les proc&eacute;dures pertinentes se rapportant &agrave; la s&ucirc;ret&eacute;-criticit&eacute; doivent &ecirc;tre examin&eacute;es. On doit mettre l&rsquo;accent sur les limites de s&ucirc;ret&eacute;-criticit&eacute;, les contr&ocirc;les et les proc&eacute;dures d&rsquo;urgence.</p>  <p>La politique se rapportant aux situations qui ne sont pas vis&eacute;es par les proc&eacute;dures et aux situations au cours desquelles la s&ucirc;ret&eacute; du fonctionnement est remise en cause doit &ecirc;tre d&eacute;crite.</p>  <p>Les employ&eacute;s doivent &ecirc;tre inform&eacute;s de leur droit de remettre en question toute op&eacute;ration qu&rsquo;ils jugent non s&eacute;curitaire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7"></div>
<h3 id="sec13-7">13.7 &Eacute;valuation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.1"></div>
<h4 id="sec13-7-1">13.7.1 Programme de formation</h4>  <p>Le programme de formation en s&ucirc;ret&eacute; li&eacute;e &agrave; la criticit&eacute; d&rsquo;une organisation doit &ecirc;tre &eacute;valu&eacute; p&eacute;riodiquement. Le processus d&rsquo;&eacute;valuation devrait permettre de confirmer que le programme de formation est ad&eacute;quat. Le processus d&rsquo;&eacute;valuation et les r&eacute;sultats doivent &ecirc;tre document&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.2"></div>
<h4 id="sec13-7-2">13.7.2 Personnel</h4>  <p>La r&eacute;ussite de la formation doit &ecirc;tre bas&eacute;e sur des crit&egrave;res de rendement pr&eacute;d&eacute;termin&eacute;s. Les m&eacute;thodes d&rsquo;&eacute;valuation devraient comprendre des examens &eacute;crits, oraux et op&eacute;rationnels. Les points faibles identifi&eacute;s doivent &ecirc;tre r&eacute;gl&eacute;s par de la formation additionnelle. Il incombe au superviseur imm&eacute;diat et &agrave; toute autre unit&eacute; organisationnelle d&eacute;sign&eacute;e par la Direction d&rsquo;&eacute;tablir si l&rsquo;ensemble du dossier de formation de l&rsquo;employ&eacute; est acceptable.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.3"></div>
<h4 id="sec13-7-3">13.7.3 Documentation</h4>  <p>Le dossier de formation des employ&eacute;s doit &ecirc;tre document&eacute; et conserv&eacute; pendant au moins quatre ans. La Direction peut sp&eacute;cifier une p&eacute;riode de conservation plus longue.</p>
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
<h2 id="sec14">14. Utilisation d&rsquo;absorbeurs de neutrons fixes dans des installations nucl&eacute;aires hors r&eacute;acteurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.21-1995 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.1"></div>
<h3 id="sec14-1">14.1 Introduction</h3>  <p>Les absorbeurs de neutrons fixes (poisons) sont fr&eacute;quemment utilis&eacute;s dans le cadre des mesures globales de contr&ocirc;le de la s&ucirc;ret&eacute;-criticit&eacute;.</p>  <p>La section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>, pr&eacute;sente des consid&eacute;rations g&eacute;n&eacute;rales relatives aux absorbeurs de neutrons dans la pr&eacute;vention de la criticit&eacute;. La section 14 fournit des directives additionnelles pour compl&eacute;ter celle de la section 2 et de la section 11, <em>Crit&egrave;res de s&ucirc;ret&eacute;-criticit&eacute; pour la manutention, le transport, le stockage et la gestion des d&eacute;chets &agrave; long terme hors r&eacute;acteurs du combustible des r&eacute;acteurs</em>. La section 4 du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation pr&eacute;sente des applications particuli&egrave;res des absorbeurs de neutrons et fournit une orientation quant &agrave; leur utilisation. La section 14 donne des directives additionnelles d&eacute;taill&eacute;es sur l&rsquo;utilisation des absorbeurs de neutrons fixes dans la conception, la construction et l&rsquo;exploitation des installations nucl&eacute;aires hors r&eacute;acteurs.</p>  <p>Aux fins du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation, les absorbeurs de neutrons fixes sont des mat&eacute;riaux :</p>
<ol>
<li>qui font partie int&eacute;grante d&rsquo;une installation, de l&rsquo;&eacute;quipement ou des composants du combustible</li>
<li>qui poss&egrave;dent des propri&eacute;t&eacute;s d&rsquo;absorption des neutrons</li>
<li>qui sont int&eacute;gr&eacute;s &agrave; la conception, afin d&rsquo;assurer les marges de sous criticit&eacute; requises pour les op&eacute;rations normales et anormales</li>
</ol>  <p>Ces directives s&rsquo;appliquent &agrave; la conception, &agrave; la construction et &agrave; l&rsquo;exploitation des installations servant &agrave; la manutention, au traitement et au stockage des mati&egrave;res fissiles. Ces directives s&rsquo;appliquent &eacute;galement &agrave; l&rsquo;&eacute;quipement associ&eacute; au transport des mati&egrave;res fissiles.</p>  <p>L&rsquo;utilisation d&rsquo;absorbeurs de neutrons fixes peut r&eacute;duire la n&eacute;cessit&eacute; d&rsquo;avoir recours &agrave; des contr&ocirc;les administratifs de s&ucirc;ret&eacute;-criticit&eacute;. Ainsi, on peut utiliser de mani&egrave;re plus rentable l&rsquo;installation ou l&rsquo;&eacute;quipement tout en maintenant des marges de s&ucirc;ret&eacute; ad&eacute;quates. Lorsqu&rsquo;il y a pr&eacute;sence d&rsquo;absorbeurs de neutrons fixes, mais qu&rsquo;ils ne sont pas n&eacute;cessaire pour maintenir la sous-criticit&eacute; dans des conditions normales ou des conditions anormales cr&eacute;dibles, la pr&eacute;sente section ne s&rsquo;applique pas.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.2"></div>
<h3 id="sec14-2">14.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section fournit une orientation relative &agrave; l&rsquo;utilisation d&rsquo;absorbeurs de neutrons fixes faisant partie int&eacute;grale des installations nucl&eacute;aires et de l&rsquo;&eacute;quipement de proc&eacute;d&eacute; des mati&egrave;res fissiles hors r&eacute;acteurs, lorsque ces absorbeurs assurent un contr&ocirc;le de la s&ucirc;ret&eacute;-criticit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.3"></div>
<h3 id="sec14-3">14.3 Consid&eacute;rations g&eacute;n&eacute;rales li&eacute;es &agrave; la s&ucirc;ret&eacute;</h3>  <p>Le but des absorbeurs de neutrons fixes dans les applications de contr&ocirc;le de la criticit&eacute; est d&rsquo;assurer la sous-criticit&eacute; pour des conditions normales et anormales cr&eacute;dibles pendant la dur&eacute;e de vie de l&rsquo;installation ou de l&rsquo;&eacute;quipement. Les pratiques de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire de la section 2 sont applicables. La v&eacute;rification des absorbeurs et de leur efficacit&eacute; pour capturer des neutrons doit &ecirc;tre effectu&eacute;e avant l&rsquo;utilisation des mat&eacute;riaux. Apr&egrave;s l&rsquo;installation, il doit y avoir une v&eacute;rification, afin de s&rsquo;assurer que le syst&egrave;me d&rsquo;absorbeurs de neutrons est en place tel que pr&eacute;vu. L&rsquo;&eacute;tendue et la fr&eacute;quence de la v&eacute;rification d&eacute;pendent des effets du milieu dans lequel les absorbeurs sont plac&eacute;s, des propri&eacute;t&eacute;s de l&rsquo;absorbeur, et de la configuration.</p>  <p>Pour &eacute;tablir l&rsquo;efficacit&eacute; des absorbeurs de neutrons, il faut soit utiliser des donn&eacute;es d&rsquo;exp&eacute;rience applicables ou des m&eacute;thodes d&rsquo;analyse qui ont &eacute;t&eacute; valid&eacute;es &agrave; l&rsquo;aide d&rsquo;exp&eacute;riences de r&eacute;f&eacute;rence ad&eacute;quates. Le choix des mat&eacute;riaux et la protection dans des applications sp&eacute;cifiques doivent &ecirc;tre conformes aux exigences relatives &agrave; l&rsquo;absorption des neutrons pour l&rsquo;exploitation de l&rsquo;installation pr&eacute;vue dans des conditions normales et des conditions anormales cr&eacute;dibles.</p>  <p>S&rsquo;il est n&eacute;cessaire d&rsquo;utiliser un mod&eacute;rateur ou des mat&eacute;riaux structuraux pour assurer la s&ucirc;ret&eacute;-criticit&eacute; dans un syst&egrave;me d&rsquo;absorbeurs de neutrons, ces mat&eacute;riaux doivent &eacute;galement &ecirc;tre soumis &agrave; des contr&ocirc;les, des analyses et des v&eacute;rifications, tel que sp&eacute;cifi&eacute; dans les sous sections suivantes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4"></div>
<h3 id="sec14-4">14.4 Exigences et orientation</h3>  <p>Les exigences relatives &agrave; l&rsquo;utilisation d&rsquo;absorbeurs de neutrons fixes pour le contr&ocirc;le de la s&ucirc;ret&eacute;-criticit&eacute; sont regroup&eacute;es dans les trois cat&eacute;gories suivantes : conception, &eacute;valuations de la s&ucirc;ret&eacute; et v&eacute;rification et inspection. Ces sujets doivent &ecirc;tre examin&eacute;s dans le cadre de la mise en &oelig;uvre et de l&rsquo;application pendant la conception, la construction, les essais et l&rsquo;exploitation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.1"></div>
<h4 id="sec14-4-1">14.4.1 Conception</h4>  <p>Les absorbeurs de neutrons fixes doivent &ecirc;tre con&ccedil;us pour conserver la relation g&eacute;om&eacute;trique requise avec les mati&egrave;res fissiles pendant la dur&eacute;e de vie utile pr&eacute;vue.</p>  <p>Une m&eacute;thode de v&eacute;rification doit &ecirc;tre fournie pour d&eacute;terminer si la conception, la s&ucirc;ret&eacute; et les exigences d&rsquo;exploitation sont respect&eacute;es pour tous les composants du syst&egrave;me d&rsquo;absorbeurs de neutrons. Les exigences relatives &agrave; la v&eacute;rification en marche doivent &ecirc;tre consid&eacute;r&eacute;es pendant la conception du syst&egrave;me d&rsquo;absorbeurs de neutrons.</p>  <p>La conception doit comprendre l&rsquo;&eacute;valuation du milieu de fonctionnement. La d&eacute;t&eacute;rioration de l&rsquo;absorbeur de neutrons ou des mat&eacute;riaux utilis&eacute;s pour prot&eacute;ger l&rsquo;absorbeur de neutrons contre les effets chimiques, physiques, radiologiques et m&eacute;caniques doit &ecirc;tre &eacute;vit&eacute;e ou pr&eacute;vue dans la conception.</p>  <p>L&rsquo;absorbeur de neutrons fixe doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; pouvoir conserver sa capacit&eacute; d&rsquo;absorption des neutrons pendant sa dur&eacute;e de vie utile, y compris pendant toutes les conditions cr&eacute;dibles de mod&eacute;ration et de r&eacute;flexion des neutrons.</p>  <p>Les effets du rayonnement sur le syst&egrave;me d&rsquo;absorbeurs de neutrons pendant sa dur&eacute;e de vie (p. ex. appauvrissement suite &agrave; l&rsquo;absorption des neutrons, &agrave; la fragilisation et &agrave; la radiolyse) doivent &ecirc;tre &eacute;valu&eacute;s.</p>  <p>La conception doit pr&eacute;voir des tol&eacute;rances pour les variations dans les mat&eacute;riaux de proc&eacute;d&eacute;, des tol&eacute;rances de fabrication, des tol&eacute;rances relatives aux incertitudes dans la masse volumique et la r&eacute;partition de l&rsquo;absorbeur, et des tol&eacute;rances pour les incertitudes dans les propri&eacute;t&eacute;s nucl&eacute;aires (comme l&rsquo;exactitude de la section efficace de capture des neutrons) de l&rsquo;absorbeur de neutrons.</p>  <p>Le syst&egrave;me d&rsquo;absorbeurs de neutrons doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; ce que la fonction de s&ucirc;ret&eacute;-criticit&eacute; ne soit pas compromise dans aucune des conditions normales et des conditions anormales cr&eacute;dibles de l&rsquo;installation ou de l&rsquo;&eacute;quipement.</p>  <p>Le syst&egrave;me d&rsquo;absorbeurs de neutrons doit &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; &eacute;viter l&rsquo;enl&egrave;vement par inadvertance, le d&eacute;placement ou la modification des composants.</p>  <p>La conception de l&rsquo;&eacute;quipement et des installations comportant des absorbeurs de neutrons fixes doit tenir compte des pratiques d&rsquo;ing&eacute;nierie relatives aux facteurs humains pour l&rsquo;installation, l&rsquo;exploitation et l&rsquo;entretien des absorbeurs de neutrons fixes.</p>  <p>Les exigences relatives &agrave; l&rsquo;exploitation, &agrave; la comptabilisation des mati&egrave;res fissiles et &agrave; d&rsquo;autres domaines de s&ucirc;ret&eacute; doivent &ecirc;tre consid&eacute;r&eacute;es dans la conception du syst&egrave;me d&rsquo;absorbeurs de neutrons.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.2"></div>
<h4 id="sec14-4-2">14.4.2 &Eacute;valuation de la s&ucirc;ret&eacute;</h4>  <p>Les pratiques en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; de la section 2 doivent &ecirc;tre appliqu&eacute;es.</p>  <p>Le risque de d&eacute;t&eacute;rioration des absorbeurs de neutrons pendant le fonctionnement normal suite des actions physiques ou chimiques et &agrave; tous changements dans la composition des mat&eacute;riaux, ou encore aux changements dans les mat&eacute;riaux constituant le syst&egrave;me d&rsquo;absorbeurs de neutrons (p. ex. la gaine), doit &ecirc;tre &eacute;valu&eacute;.</p>  <p>Les incidences des conditions normales et des conditions anormales cr&eacute;dibles sur le syst&egrave;me d&rsquo;absorbeurs de neutrons, comme les dommages caus&eacute;s par le rayonnement, les r&eacute;actions chimiques, les incendies, les &eacute;carts de temp&eacute;rature, les conditions de pression, les vibrations, les chocs m&eacute;caniques, l&rsquo;usure par frottement, la corrosion, l&rsquo;enl&egrave;vement par inadvertance, l&rsquo;appauvrissement et les inondations doivent &ecirc;tre &eacute;valu&eacute;es.</p>  <p>Tout &eacute;v&eacute;nement qui soumet le syst&egrave;me d&rsquo;absorbeurs de neutrons &agrave; des conditions physiques ou chimiques &agrave; l&rsquo;ext&eacute;rieur des param&egrave;tres de conception doit n&eacute;cessiter une r&eacute;&eacute;valuation du syst&egrave;me avant la reprise des op&eacute;rations.</p>  <p>Les analyses de s&ucirc;ret&eacute; doivent &ecirc;tre bas&eacute;es sur les r&eacute;sultats obtenus &agrave; partir de m&eacute;thodes de calcul valid&eacute;es ou de r&eacute;sultats obtenus d&rsquo;exp&eacute;riences applicables. Les m&eacute;thodes de calcul doivent &ecirc;tre valid&eacute;es conform&eacute;ment &agrave; la section 2.</p>  <p>Les m&eacute;thodes de calcul utilis&eacute;es doivent reproduire l&rsquo;effet de r&eacute;duction locale du flux de neutrons associ&eacute; avec des absorbeurs de neutrons localis&eacute;s.</p>  <p>L&rsquo;effet de la non homog&eacute;n&eacute;it&eacute; sur la criticit&eacute; (par exemple, flux de neutrons &agrave; travers l&rsquo;absorbeur de neutrons) des absorbeurs de neutrons fixes doit &ecirc;tre &eacute;valu&eacute;.</p>  <p>Les &eacute;valuations doivent tenir compte des tol&eacute;rances li&eacute;es &agrave; la fabrication, de la substitution des mat&eacute;riaux, des changements de g&eacute;om&eacute;trie, des tol&eacute;rances de corrosion, des hypoth&egrave;ses de mod&eacute;lisation, des variables de proc&eacute;d&eacute; et d&rsquo;autres incertitudes pertinentes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.3"></div>
<h4 id="sec14-4-3">14.4.3 V&eacute;rification et inspection</h4>  <p>Le plan d&rsquo;inspection et de v&eacute;rification pour les syst&egrave;mes d&rsquo;absorbeurs de neutrons fixes doit &ecirc;tre conforme aux exigences d&rsquo;assurance de la qualit&eacute; du titulaire de permis. Les actions d&eacute;coulant du plan ne doivent pas compromettre la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire du syst&egrave;me d&rsquo;exploitation. L&rsquo;inspection et la v&eacute;rification doivent &ecirc;tre document&eacute;es, et des registres doivent &ecirc;tre conserv&eacute;s pendant la dur&eacute;e de vie utile de l&rsquo;installation et du syst&egrave;me d&rsquo;absorbeurs de neutrons.</p>  <p>La fr&eacute;quence requise pour les inspections et l&rsquo;&eacute;tendu de la v&eacute;rification en marche doivent &ecirc;tre d&eacute;termin&eacute;es. Les facteurs &agrave; consid&eacute;rer comprennent les analyses de s&ucirc;ret&eacute;, le milieu dans lequel les absorbeurs sont plac&eacute;s et les propri&eacute;t&eacute;s de l&rsquo;absorbeur.</p>  <p>Si requis, les m&eacute;thodes de v&eacute;rification en marche pour mesurer les propri&eacute;t&eacute;s de l&rsquo;absorbeur peuvent comprendre des techniques neutroniques, autres que des techniques non destructives, ou des m&eacute;thodes d&rsquo;essai chimique.</p>  <p>Les m&eacute;thodes d&rsquo;essai utilis&eacute;es pour v&eacute;rifier les propri&eacute;t&eacute;s de l&rsquo;absorbeur de neutrons doivent &ecirc;tre &eacute;talonn&eacute;es par rapport aux normes publi&eacute;es par des organismes de normalisation nationaux ou internationaux, comme la <span lang="en"><em>U.S. National Institute of Standards and Technology</em></span>.</p>  <p>Le plan d&rsquo;inspection et de v&eacute;rification doit &ecirc;tre mis en &oelig;uvre pour l&rsquo;acquisition des mat&eacute;riaux, la fabrication des composants du syst&egrave;me d&rsquo;absorbeurs de neutrons, ainsi que pour l&rsquo;installation, l&rsquo;exploitation et l&rsquo;entretien du syst&egrave;me d&rsquo;absorbeurs de neutrons.</p>  <p>La v&eacute;rification de la mati&egrave;re absorbant les neutrons fixes (&eacute;l&eacute;mentaire ou isotopique, selon le cas) doit &ecirc;tre faite avant l&rsquo;utilisation.</p>  <p>Les composants du syst&egrave;me d&rsquo;absorbeurs de neutrons doivent &ecirc;tre v&eacute;rifi&eacute;s afin de s&rsquo;assurer qu&rsquo;ils sont conformes aux dessins techniques et aux sp&eacute;cifications avant l&rsquo;installation.</p>  <p>L&rsquo;installation ad&eacute;quate du syst&egrave;me d&rsquo;absorbeurs de neutrons doit &ecirc;tre v&eacute;rifi&eacute;e avant l&rsquo;utilisation.</p>  <p>L&rsquo;exploitation du syst&egrave;me d&rsquo;absorbeurs de neutrons et son entretien doivent &ecirc;tre v&eacute;rifi&eacute;s afin de s&rsquo;assurer qu&rsquo;ils sont conformes aux exigences d&rsquo;&eacute;valuation de la s&ucirc;ret&eacute;.</p>  <p>Les r&eacute;sultats des v&eacute;rifications en marche doivent &ecirc;tre &eacute;valu&eacute;s et, au besoin, des mesures correctives doivent &ecirc;tre prises.</p>
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
<h2 id="sec15">15. S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire en limitant et en contr&ocirc;lant des mod&eacute;rateurs</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.22-1997 (r&eacute;&eacute;dit&eacute;e en 2011), <span lang="en"><em>Nuclear Criticality Safety Based on Limiting and Controlling Moderators</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.1"></div>
<h3 id="sec15-1">15.1 Introduction</h3>  <p>Pour de nombreuses activit&eacute;s, la s&ucirc;ret&eacute;-criticit&eacute; est atteinte en limitant certains param&egrave;tres comme la g&eacute;om&eacute;trie, la masse, l&rsquo;enrichissement et l&rsquo;espacement entre les mati&egrave;res fissionnables. La quantit&eacute; de mati&egrave;res fissionnables pouvant &ecirc;tre manipul&eacute;es, stock&eacute;es ou trait&eacute;es de mani&egrave;re s&eacute;curitaire &agrave; un moment donn&eacute; peut &eacute;galement d&eacute;pendre de la gamme possible de mod&eacute;ration des neutrons. La mod&eacute;ration optimale, par d&eacute;finition, donne lieu &agrave; la masse critique de mati&egrave;res fissionnables la plus faible, les autres conditions demeurant inchang&eacute;es.</p>  <p>Une masse admissible, beaucoup plus grande que la masse admissible pour la mod&eacute;ration optimale, peut &ecirc;tre justifi&eacute;e en limitant et en contr&ocirc;lant des mod&eacute;rateurs, c.-&agrave;-d. le contr&ocirc;le des mod&eacute;rateurs &agrave; l&rsquo;int&eacute;rieur de certaines limites sp&eacute;cifi&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2"></div>
<h3 id="sec15-2">15.2 Port&eacute;e</h3>  <p>La pr&eacute;sente section fournit une orientation relative &agrave; l&rsquo;atteinte de la s&ucirc;ret&eacute;-criticit&eacute; en limitant et en contr&ocirc;lant des mod&eacute;rateurs, allant de la mod&eacute;ration nulle &agrave; la mod&eacute;ration optimale pour les mati&egrave;res fissionnables. La pr&eacute;sente section ne s&rsquo;applique pas au contr&ocirc;le de la concentration de mati&egrave;res fissionnables.</p>  <p>Les directives relatives &agrave; l&rsquo;&eacute;vitement des accidents de criticit&eacute; lors de la manutention, du stockage, du traitement et du transport des mati&egrave;res fissiles sont pr&eacute;sent&eacute;es &agrave; la section 2, <em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire des activit&eacute;s comportant des mati&egrave;res fissiles hors r&eacute;acteurs</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3"></div>
<h3 id="sec15-3">15.3 Pratiques en mati&egrave;re de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3.1"></div>
<h4 id="sec15-3-1">15.3.1 Pratiques administratives relatives aux limites et aux contr&ocirc;les appliqu&eacute;s aux mod&eacute;rateurs</h4>  <p>Les proc&eacute;dures &eacute;crites doivent comprendre des limites de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et des contr&ocirc;les d&rsquo;exploitation. Ces proc&eacute;dures doivent discuter de toutes les &eacute;tapes &agrave; suivre en cas de d&eacute;faillance d&rsquo;un contr&ocirc;le du mod&eacute;rateur.</p>  <p>Des proc&eacute;dures &eacute;crites doivent &ecirc;tre fournies pour la surveillance, les essais et l&rsquo;entretien, afin de s&rsquo;assurer que les limites et les contr&ocirc;les sp&eacute;cifi&eacute;s dans les &eacute;valuations de proc&eacute;d&eacute; sont maintenus.</p>  <p>Des proc&eacute;dures &eacute;crites doivent &ecirc;tre fournies pour l&rsquo;&eacute;chantillonnage du mod&eacute;rateur et les analyses, tel que requis par l&rsquo;&eacute;valuation de proc&eacute;d&eacute;.</p>  <p>Les zones de contr&ocirc;le du mod&eacute;rateur doivent &ecirc;tre identifi&eacute;es pour le personnel, conform&eacute;ment aux pratiques propres &agrave; l&rsquo;installation.</p>  <p>Des limites appropri&eacute;es et d&rsquo;autres moyens de contr&ocirc;le du mod&eacute;rateur doivent &ecirc;tre affich&eacute;s.</p>  <p>Les exigences relatives au contr&ocirc;le du mod&eacute;rateur doivent &ecirc;tre incluses dans les plans de lutte contre l&rsquo;incendie.</p>  <p>La pr&eacute;sence de mat&eacute;riaux combustibles dans les zones de contr&ocirc;le du mod&eacute;rateur doit &ecirc;tre r&eacute;duite au minimum.</p>  <p>Une formation permettant de mieux comprendre et de se conformer aux limites et aux contr&ocirc;les du mod&eacute;rateur doit &ecirc;tre offerte au personnel appropri&eacute; dans le cadre de la formation en s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire. Des directives additionnelles figurent &agrave; la section 13, <em>Formation relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>  <p>Des directives additionnelles relatives aux pratiques administratives figurent &agrave; la section 12, <em>Pratiques administratives relatives &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3.2"></div>
<h4 id="sec15-3-2">15.3.2 &Eacute;valuation des proc&eacute;d&eacute;s pour limiter et au contr&ocirc;ler les mod&eacute;rateurs</h4>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit d&eacute;finir la zone de contr&ocirc;le du mod&eacute;rateur.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit d&eacute;montrer que l&rsquo;op&eacute;ration sera sous-critique &agrave; la fois dans des conditions normales et dans des conditions anormales cr&eacute;dibles, tel que pr&eacute;cis&eacute; &agrave; la section 2.3.2.2.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit identifier clairement les limites, les contr&ocirc;les et les barri&egrave;res artificielles des zones de contr&ocirc;le du mod&eacute;rateur. Les limites doivent &ecirc;tre bas&eacute;es sur des donn&eacute;es exp&eacute;rimentales ou obtenues gr&acirc;ce &agrave; des m&eacute;thodes de calcul qui sont valid&eacute;es, tel que requis par la section 2.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit tenir compte des propri&eacute;t&eacute;s de tous les mat&eacute;riaux pr&eacute;sents qui pourraient modifier la teneur en mod&eacute;rateur. Par exemple, mentionnons les propri&eacute;t&eacute;s hygroscopiques, hydriques, d&rsquo;absorption et les natures d&rsquo;adsorption et radiolytiques des mat&eacute;riaux.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit tenir compte de tous les mod&eacute;rateurs pr&eacute;sents, introduits ou accumul&eacute;s dans la zone de contr&ocirc;le du mod&eacute;rateur, soit intentionellement ou par accident. L&rsquo;annexe F donne des exemples de mod&eacute;rateurs &agrave; la sous section F.1, <em>Mod&eacute;rateurs de type courant</em>, et des exemples de source de mod&eacute;rateurs &agrave; la sous section F.2, <em>Sources possibles de mod&eacute;ration</em>.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit discuter de la r&eacute;partition des mod&eacute;rateurs &agrave; l&rsquo;int&eacute;rieur de la mati&egrave;re fissionnable et entre les unit&eacute;s distinctes de mati&egrave;res fissionnables. La distribution non uniforme des mod&eacute;rateurs qui pourrait se produire pendant des proc&eacute;d&eacute;s m&eacute;caniques (m&eacute;lange), des proc&eacute;d&eacute;s thermiques, ou des proc&eacute;d&eacute;s chimiques doit &eacute;galement &ecirc;tre &eacute;tudi&eacute;e.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit tenir compte des tol&eacute;rances et des changements dans les propri&eacute;t&eacute;s physiques et chimiques du mod&eacute;rateur.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit examiner la pertinence et l&rsquo;int&eacute;grit&eacute; des contenants utilis&eacute;s pour transf&eacute;rer et pour stocker les mod&eacute;rateurs ou les mat&eacute;riaux contr&ocirc;l&eacute;s par le mod&eacute;rateur dans la zone de contr&ocirc;le du mod&eacute;rateur.</p>  <p>L&rsquo;&eacute;valuation des proc&eacute;d&eacute;s doit examiner les mod&eacute;rateurs qui pourraient &ecirc;tre rencontr&eacute;s durant l&rsquo;entretien, la d&eacute;contamination, la construction et les activit&eacute;s non op&eacute;rationnelles.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit tenir compte de la n&eacute;cessit&eacute; d&rsquo;avoir des contr&ocirc;les sp&eacute;ciaux relatifs &agrave; la pr&eacute;vention et &agrave; l&rsquo;extinction des incendies. L&rsquo;incidence de la lutte contre l&rsquo;incendie dans les zones adjacentes doit &eacute;galement &ecirc;tre consid&eacute;r&eacute;e.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit &eacute;tablir les exigences relatives &agrave; la mesure du mod&eacute;rateur n&eacute;cessaire pour s&rsquo;assurer que les limites et les contr&ocirc;les sp&eacute;cifi&eacute;s sont maintenus. L&rsquo;annexe F, sous section F.3, <em>Mesure du contenu du mod&eacute;rateur</em> donne un exemple de certains aspects et des consid&eacute;rations n&eacute;cessaires pour assurer l&rsquo;int&eacute;grit&eacute; de la mesure de la concentration du mod&eacute;rateur.</p>  <p>L&rsquo;&eacute;valuation de proc&eacute;d&eacute; doit tenir compte du principe de la contingence double, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4"></div>
<h3 id="sec15-4">15.4 Pratiques d&rsquo;ing&eacute;nierie pour les zones de contr&ocirc;le du mod&eacute;rateur</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.1"></div>
<h4 id="sec15-4-1">15.4.1 Barri&egrave;res de la zone de contr&ocirc;le du mod&eacute;rateur</h4>  <p>Les zones de contr&ocirc;le du mod&eacute;rateur doivent &ecirc;tre dot&eacute;es de barri&egrave;res artificielles, tel que requis par l&rsquo;&eacute;valuation de proc&eacute;d&eacute;. On doit tenir compte des dangers possibles &agrave; l&rsquo;ext&eacute;rieur des zones de contr&ocirc;le du mod&eacute;rateur qui pourraient compromettre l&rsquo;int&eacute;grit&eacute; des barri&egrave;res artificielles.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.2"></div>
<h4 id="sec15-4-2">15.4.2 &Eacute;quipement et contenants</h4>  <p>L&rsquo;&eacute;quipement et les contenants de mati&egrave;res fissionnables utilis&eacute;s dans les zones de contr&ocirc;le du mod&eacute;rateur doivent &ecirc;tre con&ccedil;us, construits et fabriqu&eacute;s de mani&egrave;re &agrave; limiter et &agrave; contr&ocirc;ler les mod&eacute;rateurs, conform&eacute;ment &agrave; l&rsquo;&eacute;valuation de proc&eacute;d&eacute;. Des exemples de ces barri&egrave;res figurent &agrave; l&rsquo;annexe F, sous section F.4, <em>Exemples de barri&egrave;res artificielles servant &agrave; contr&ocirc;ler le mod&eacute;rateur</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.3"></div>
<h4 id="sec15-4-3">15.4.3 Ouvertures</h4>  <p>Les ouvertures donnant acc&egrave;s &agrave; la zone de contr&ocirc;le du mod&eacute;rateur devraient &ecirc;tre r&eacute;duites au minimum.</p>  <p>Les syst&egrave;mes qui p&eacute;n&egrave;trent dans la zone de contr&ocirc;le du mod&eacute;rateur et qui contiennent habituellement du mod&eacute;rateur doivent avoir des limites et des contr&ocirc;les, tel que requis par l&rsquo;&eacute;valuation de proc&eacute;d&eacute;.</p>  <p>Les syst&egrave;mes (comme les conduits de ventilation, la tuyauterie de gaz comprim&eacute;, les conduites &eacute;lectriques et les drains) qui p&eacute;n&egrave;trent la zone de contr&ocirc;le du mod&eacute;rateur, mais qui ne contiennent pas habituellement de mod&eacute;rateur, doivent avoir des contr&ocirc;les tel que requis par l&rsquo;&eacute;valuation de proc&eacute;d&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.4"></div>
<h4 id="sec15-4-4">15.4.4 Pr&eacute;vention et extinction des incendies</h4>  <p>La ma&icirc;trise d&rsquo;un incendie dans une zone de contr&ocirc;le du mod&eacute;rateur doit int&eacute;grer les caract&eacute;ristiques de conception identifi&eacute;es dans l&rsquo;&eacute;valuation de proc&eacute;d&eacute;. L&rsquo;utilisation d&rsquo;agents extincteurs non mod&eacute;rateurs devrait &ecirc;tre envisag&eacute;e.</p>  <p>La pr&eacute;f&eacute;rence devrait &ecirc;tre donn&eacute;e &agrave; l&rsquo;utilisation d&rsquo;&eacute;l&eacute;ments fonctionnels de construction, d&rsquo;&eacute;quipement et de mat&eacute;riaux non combustibles et r&eacute;sistants au feu, dans le but de r&eacute;duire le risque d&rsquo;introduire du mod&eacute;rateur dans les activit&eacute;s de lutte contre l&rsquo;incendie.</p>  <p>Les mat&eacute;riaux combustibles devraient &ecirc;tre r&eacute;duits au minimum dans les zones de contr&ocirc;le du mod&eacute;rateur, afin de r&eacute;duire le risque d&rsquo;introduire du mod&eacute;rateur dans les activit&eacute;s de lutte contre l&rsquo;incendie. Les mat&eacute;riaux n&eacute;cessaires qui sont combustibles ou non r&eacute;sistants au feu devraient &ecirc;tre conserv&eacute;s de mani&egrave;re &agrave; r&eacute;duire au minimum le risque d&rsquo;incendie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.5"></div>
<h4 id="sec15-4-5">15.4.5 Instruments et contr&ocirc;les</h4>  <p>Les instruments et les contr&ocirc;les peuvent &ecirc;tre utilis&eacute;s pour d&eacute;tecter ou pour &eacute;viter la pr&eacute;sence des mod&eacute;rateurs. Les instruments et les contr&ocirc;les identifi&eacute;s dans l&rsquo;&eacute;valuation de proc&eacute;d&eacute; doivent &ecirc;tre con&ccedil;us, install&eacute;s, exploit&eacute;s et maintenus conform&eacute;ment &agrave; la section 2.</p>
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
<h2 id="sec16">16. Planification et intervention d&rsquo;urgence en cas d&rsquo;accident de criticit&eacute; nucl&eacute;aire</h2>  <p>Certaines parties de la pr&eacute;sente section sont tir&eacute;es de la norme ANSI/ANS-8.23-2007 (r&eacute;&eacute;dit&eacute;e en 2012), <span lang="en"><em>Nuclear Criticality Accident Emergency Planning and Response</em></span>, avec la permission de l&rsquo;&eacute;diteur, l&rsquo;American Nuclear Society. Le texte peut avoir &eacute;t&eacute; adapt&eacute; dans le but de le rendre applicable aux obligations internationales auxquelles souscrit le Canada envers l&rsquo;AIEA, et aux exigences r&eacute;glementaires de la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.1"></div>
<h3 id="sec16-1">16.1 Introduction</h3>  <p>Les programmes de s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire dans les installations qui utilisent des mati&egrave;res fissionnables ont pour objectif ultime l&rsquo;&eacute;vitement des accidents de criticit&eacute; nucl&eacute;aires. Cependant, la possibilit&eacute; que de tels &eacute;v&eacute;nements surviennent  existe et leurs cons&eacute;quences peuvent mettre la vie en danger. Cette possibilit&eacute; n&eacute;cessite la mise en place de pratiques de planification des mesures d&rsquo;urgence pr&eacute;vues et la v&eacute;rification de l&rsquo;&eacute;tat de pr&eacute;paration.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.2"></div>
<h3 id="sec16-2">16.2 Port&eacute;e</h3>  <p>La section 16 donne des directives visant &agrave; r&eacute;duire au minimum les risques pour le personnel durant l&rsquo;intervention en cas d&rsquo;urgence lors d&rsquo;un accident de criticit&eacute; nucl&eacute;aire hors r&eacute;acteurs. Des proc&eacute;dures de planification des mesures d&rsquo;urgence et des proc&eacute;dures d&rsquo;intervention doivent &ecirc;tre tenues &agrave; jour pour toute installation o&ugrave; un syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute; est utilis&eacute;, tel que sp&eacute;cifi&eacute; &agrave; la section 3, <em>Syst&egrave;me d&rsquo;alarme d&rsquo;accident de criticit&eacute;</em>.</p>  <p>Les dispositions de la pr&eacute;sente section peuvent &ecirc;tre consid&eacute;r&eacute;es dans la planification des mesures d&rsquo;urgence en vigueur sur les sites des centrales nucl&eacute;aires et aux installations dot&eacute;es de r&eacute;acteurs de recherche.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3"></div>
<h3 id="sec16-3">16.3 Responsabilit&eacute;s</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3.1"></div>
<h4 id="sec16-3-1">16.3.1 Responsabilit&eacute;s de la Direction</h4>  <p>La Direction doit s&rsquo;assurer que :</p>
<ul>
<li>le personnel poss&eacute;dant l&rsquo;expertise pertinente est en place</li>
<li>un plan des mesures d&rsquo;urgence est &eacute;tabli, maintenu et appliqu&eacute;</li>
<li>les zones d&rsquo;&eacute;vacuation imm&eacute;diate et les itin&eacute;raires d&rsquo;&eacute;vacuation sont &eacute;tablis</li>
<li>un ou des postes de rassemblement du personnel sont d&eacute;termin&eacute;s, et une m&eacute;thode visant &agrave; recenser en temps opportun tout le personnel qui se trouvait dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate au moment de l&rsquo;&eacute;vacuation est en place</li>
<li>les instruments et l&rsquo;&eacute;quipement n&eacute;cessaires pour intervenir en cas d&rsquo;accident de criticit&eacute; sont fournis</li>
<li>le niveau de pr&eacute;paration (y compris la formation) requis pour l&rsquo;intervention en cas d&rsquo;accident de criticit&eacute; est ad&eacute;quat</li>
<li>la capacit&eacute; de r&eacute;aliser des &eacute;valuations de la dose de rayonnement lors de l&rsquo;intervention en cas d&rsquo;accident de criticit&eacute; est assur&eacute;e</li>
<li>un syst&egrave;me de communication pour la coordination centrale de toutes les activit&eacute;s d&rsquo;urgence sur le site est fourni</li>
<li>les dosim&egrave;tres utilisables en cas d&rsquo;accident nucl&eacute;aire, &agrave; la fois les dosim&egrave;tres individuels et fixes, sont fournis</li>
<li>l&rsquo;&eacute;quipement, comme les syst&egrave;mes d&rsquo;alarme d&rsquo;accident de criticit&eacute; (d&eacute;finis &agrave; la section 3) et les proc&eacute;dures sont en place pour d&eacute;clencher l&rsquo;intervention en cas d&rsquo;urgence au besoin</li>
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
<div id="16.3.2"></div>
<h4 id="sec16-3-2">16.3.2 Responsabilit&eacute;s du personnel technique</h4>  <h5 id="sec16-3-2-1">16.3.2.1 Planification</h5>  <p>Le personnel technique doit :</p>
<ul>
<li>identifier les emplacements possibles d&rsquo;accident de criticit&eacute;</li>
<li>&eacute;valuer et caract&eacute;riser les accidents de criticit&eacute; potentiels, y compris pr&eacute;voir les doses de rayonnement</li>
<li>d&eacute;terminer les exigences en mati&egrave;re d&rsquo;instrument et d&rsquo;&eacute;quipement pour les activit&eacute;s d&rsquo;intervention d&rsquo;urgence</li>
<li>d&eacute;finir une zone d&rsquo;&eacute;vacuation imm&eacute;diate pour chaque emplacement potentiel d&rsquo;accident de criticit&eacute;</li>
<li>participer &agrave; la planification, &agrave; la r&eacute;alisation et &agrave; l&rsquo;&eacute;valuation des exercices</li>
</ul>  <h5 id="sec16-3-2-2">16.3.2.2 Intervention d&rsquo;urgence</h5>  <p>Lors d&rsquo;une intervention d&rsquo;urgence, le personnel technique doit :</p>
<ul>
<li>&ecirc;tre disponible pour conseiller et aider le coordonnateur des mesures d&rsquo;urgence lors de l&rsquo;intervention en cas d&rsquo;accident de criticit&eacute;</li>
<li>r&eacute;aliser une &eacute;valuation de la dose de rayonnement appropri&eacute;e &agrave; un accident de criticit&eacute;</li>
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
<div id="16.4"></div>
<h3 id="sec16-4">16.4 Planification des mesures d&rsquo;urgence</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.1"></div>
<h4 id="sec16-4-1">16.4.1 &Eacute;valuation</h4>  <p>Si la pr&eacute;sente section s&rsquo;applique, tel que d&eacute;fini &agrave; la sous section 16.2, il faut r&eacute;aliser une &eacute;valuation et la documenter dans le but d&rsquo;identifier les emplacements possibles des accidents de criticit&eacute;.</p>  <p>L&rsquo;&eacute;valuation doit d&eacute;crire l&rsquo;accident de criticit&eacute; nucl&eacute;aire repr&eacute;sentatif. Cette description peut &ecirc;tre bas&eacute;e sur un jugement d&rsquo;expert ou sur une analyse plus d&eacute;taill&eacute;e. La description devrait comprendre une estimation du rendement de fission et la probabilit&eacute; de r&eacute;currence de la criticit&eacute;.</p>  <p>Une zone d&rsquo;&eacute;vacuation imm&eacute;diate doit &ecirc;tre &eacute;tablie en se basant sur l&rsquo;&eacute;valuation document&eacute;e. La planification des mesures d&rsquo;urgence doit &eacute;tablir une valeur acceptable maximale pour la dose absorb&eacute;e &agrave; la fronti&egrave;re de la zone d&rsquo;&eacute;vacuation imm&eacute;diate. Les fondements pour la valeur maximale acceptable doivent &ecirc;tre document&eacute;s. Le blindage peut &ecirc;tre envisag&eacute; dans l&rsquo;&eacute;tablissement de la zone d&rsquo;&eacute;vacuation imm&eacute;diate. Les effets localis&eacute;s d&rsquo;un accident de criticit&eacute; et le fait qu&rsquo;une &eacute;valuation rapide n&rsquo;est pas sans risque peuvent donner lieu &agrave; une zone d&rsquo;&eacute;vacuation imm&eacute;diate qui est beaucoup plus petite que l&rsquo;ensemble du site.</p>  <p><strong>Remarque :</strong> Le ou les accidents repr&eacute;sentatifs de criticit&eacute; nucl&eacute;aire peuvent &ecirc;tre :</p>
<ul>
<li>un accident de criticit&eacute; nucl&eacute;aire limitatif, tel qu&rsquo;il est d&eacute;crit ci-dessous</li>
<li>un accident de criticit&eacute; nucl&eacute;aire reposant sur des hypoth&egrave;ses moins prudentes si des analyses d&eacute;taill&eacute;es des accidents de criticit&eacute; nucl&eacute;aire sont effectu&eacute;es et si l&rsquo;on d&eacute;montre qu&rsquo;elles sont applicables aux conditions &eacute;valu&eacute;es</li>
</ul>  <p>L&rsquo;accident de criticit&eacute; nucl&eacute;aire limitatif (bas&eacute; sur une description d&rsquo;accident dans le guide de r&eacute;glementation des &Eacute;tats-Unis 3.71, <span lang="en"><em>Nuclear Criticality Safety Standards for Fuels and Material Facilities</em></span> [44]) est utilis&eacute; par le personnel de la CCSN pour &eacute;valuer diverses applications dans diverses installations. Le demandeur doit &eacute;valuer la description, puis s&eacute;lectionner et utiliser les d&eacute;tails pertinents pour l&rsquo;application pr&eacute;vue. L&rsquo;hypoth&egrave;se est que l&rsquo;intensit&eacute; des sources de rayonnement et les rejets dus &agrave; un accident de criticit&eacute; nucl&eacute;aire proviennent d&rsquo;une excursion de puissance se d&eacute;roulant dans une g&eacute;om&eacute;trie d&eacute;favorable contenant une solution de 400 g/L d&rsquo;uranium enrichi en <sup>235</sup>U. L&rsquo;excursion produit une rafale initiale de 1 x 10<sup>18</sup> fissions en 0,5 seconde, suivie successivement &agrave; 10 minutes d&rsquo;intervalle de 47 salves de 1,9 x 10<sup>17</sup> fissions, pour un total de 1 x 10<sup>19</sup> fissions en 8 heures. L&rsquo;excursion de puissance est pr&eacute;sum&eacute;e se terminer par l&rsquo;&eacute;vaporation de 100 litres de la solution.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.2"></div>
<h4 id="sec16-4-2">16.4.2 Plan des mesures d&rsquo;urgence</h4>  <p>&Agrave; la lumi&egrave;re de l&rsquo;&eacute;valuation pr&eacute;cit&eacute;e, un plan des mesures d&rsquo;urgence doit &ecirc;tre &eacute;tabli et maintenu. Le plan des mesures d&rsquo;urgence peut constituer une partie int&eacute;grante d&rsquo;un autre plan ou &ecirc;tre distinct des autres plans.</p>  <p>Le plan des mesures d&rsquo;urgence doit inclure des directives pour la Direction, le personnel technique et le personnel d&rsquo;intervention en cas d&rsquo;accident de criticit&eacute;. Le plan doit traiter des mesures protectrices recommand&eacute;es, des fonctions du personnel d&rsquo;intervention et de l&rsquo;&eacute;quipement requis pour intervenir en cas d&rsquo;accident.</p>  <p>Le plan des mesures d&rsquo;urgence doit identifier les emplacements potentiels d&rsquo;accident de criticit&eacute; et comprend des descriptions appropri&eacute;es des installations.</p>  <p>Le plan des mesures d&rsquo;urgence doit inclure des dispositions relatives aux actions suivantes :</p>
<ul>
<li>fournir les services d&rsquo;un coordonnateur des mesures d&rsquo;urgence</li>
<li>activer les mesures d&rsquo;urgence</li>
<li>intervenir en cas d&rsquo;urgences simultan&eacute;es (par exemple, incendie, personnel bless&eacute;, incidents de s&eacute;curit&eacute;)</li>
<li>identifier le personnel expos&eacute; et d&eacute;terminer la dose de rayonnement qu&rsquo;il a re&ccedil;ue</li>
<li>fournir des soins m&eacute;dicaux appropri&eacute;s au personnel ayant &eacute;t&eacute; expos&eacute; au rayonnement</li>
<li>&eacute;valuer les cons&eacute;quences de l&rsquo;accident de criticit&eacute;, y compris celles associ&eacute;es aux mati&egrave;res radioactives ou aux mati&egrave;res dangereuses non radioactives qui pourraient avoir &eacute;t&eacute; rejet&eacute;es par suite de l&rsquo;accident</li>
<li>d&eacute;terminer &agrave; quel moment l&rsquo;&eacute;tat d&rsquo;urgence prend fin</li>
<li>coordonner les activit&eacute;s avec les organismes de secours qui fourniront de l&rsquo;aide en cas d&rsquo;urgence (ces organismes peuvent &ecirc;tre sur place ou &agrave; l&rsquo;ext&eacute;rieur du site)</li>
<li>rassembler et recenser les membres du personnel</li>
</ul>  <p>Le plan des mesures d&rsquo;urgence peut &ecirc;tre activ&eacute; simplement si un doute existe qu&rsquo;un accident de criticit&eacute; est sur le point de se produire, est en train de se produire ou s&rsquo;est produit.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.3"></div>
<h4 id="sec16-4-3">16.4.3 &Eacute;quipement</h4>  <p>Les v&ecirc;tements de protection et l&rsquo;&eacute;quipement appropri&eacute;s doivent &ecirc;tre fournis au personnel d&rsquo;intervention. Les v&ecirc;tements et l&rsquo;&eacute;quipement peuvent comprendre l&rsquo;&eacute;quipement de protection des voies respiratoires, les combinaisons anticontamination, l&rsquo;&eacute;quipement de d&eacute;tection du rayonnement gamma &agrave; gamme &eacute;lev&eacute;e et gamme r&eacute;duite, l&rsquo;&eacute;quipement de d&eacute;tection des neutrons, l&rsquo;&eacute;quipement de communication et les dosim&egrave;tres individuels (comme les dosim&egrave;tres &agrave; lecture directe de poche).</p>  <p>L&rsquo;&eacute;quipement de surveillance appropri&eacute; permettant de d&eacute;terminer si une &eacute;vacuation compl&eacute;mentaire est requise et d&rsquo;identifier les personnes ayant &eacute;t&eacute; expos&eacute;es au rayonnement doit &ecirc;tre fourni aux postes de rassemblement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5"></div>
<h3 id="sec16-5">16.5 &Eacute;vacuation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.1"></div>
<h4 id="sec16-5-1">16.5.1 Personnel dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate</h4>  <p>Lorsqu&rsquo;une &eacute;vacuation est initi&eacute;e, tout le personnel se trouvant dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate doit &eacute;vacuer les lieux sans h&eacute;sitation en suivant les itin&eacute;raires d&rsquo;&eacute;vacuation pr&eacute;vus vers un ou des postes de rassemblement pr&eacute;-&eacute;tablis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.2"></div>
<h4 id="sec16-5-2">16.5.2 Surveillance dans les zones adjacentes</h4>  <p>Les niveaux de rayonnement doivent &ecirc;tre surveill&eacute;s dans les zones occup&eacute;es &agrave; proximit&eacute; de la zone d&rsquo;&eacute;vacuation imm&eacute;diate apr&egrave;s l&rsquo;initiation de l&rsquo;intervention en cas d&rsquo;urgence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.3"></div>
<h4 id="sec16-5-3">16.5.3 Surveillance aux postes de rassemblement</h4>  <p>Les niveaux de rayonnement doivent &ecirc;tre surveill&eacute;s p&eacute;riodiquement aux postes de rassemblement apr&egrave;s l&rsquo;initiation de l&rsquo;intervention d&rsquo;urgence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.4"></div>
<h4 id="sec16-5-4">16.5.4 &Eacute;vacuation compl&eacute;mentaire du personnel autre que le personnel d&rsquo;intervention</h4>  <p>Si la surveillance requise par les sections 16.5.2 et 16.5.3 indique que le d&eacute;bit de dose d&eacute;passe 1 mSv/h (100 mrem/h) dans les zones qui demeurent occup&eacute;es, le personnel autre que le personnel d&rsquo;intervention d&rsquo;urgence doit &eacute;vacuer les lieux.</p>  <p>Le d&eacute;bit de dose de 1 mSv/h a &eacute;t&eacute; adapt&eacute; &agrave; partir du rapport n<sup>o</sup> 116 du NCRP [36].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.5"></div>
<h4 id="sec16-5-5">16.5.5 Sorties</h4>  <p>Il existe suffisamment de sorties dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate pour faciliter l&rsquo;&eacute;vacuation rapide et sans obstacle du personnel. L&rsquo;&eacute;vacuation imm&eacute;diate visant &agrave; assurer la protection du personnel doit primer sur le contr&ocirc;le de la contamination ou sur d&rsquo;autres consid&eacute;rations relatives &agrave; la s&eacute;curit&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.6"></div>
<h4 id="sec16-5-6">16.5.6 Identification des postes de rassemblement</h4>  <p>Les postes de rassemblement doivent &ecirc;tre clairement identifi&eacute;s ou affich&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.7"></div>
<h4 id="sec16-5-7">16.5.7 Planification des itin&eacute;raires d&rsquo;&eacute;vacuation</h4>  <p>Des itin&eacute;raires d&rsquo;&eacute;vacuation doivent &ecirc;tre pr&eacute;vus afin de r&eacute;duire au minimum le risque total, en tenant compte de tous les dangers potentiels, par exemple les dangers chimiques, industriels et radiologiques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6"></div>
<h3 id="sec16-6">16.6 R&eacute;int&eacute;gration, sauvetage et stabilisation</h3>  <p>Toutes les activit&eacute;s associ&eacute;es &agrave; la r&eacute;int&eacute;gration, au sauvetage et &agrave; la stabilisation doivent &ecirc;tre coordonn&eacute;es et autoris&eacute;es par le coordonnateur des mesures d&rsquo;urgence. Le coordonnateur des mesures d&rsquo;urgence peut d&eacute;l&eacute;guer l&rsquo;autorit&eacute; &agrave; d&rsquo;autres personnes comp&eacute;tentes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.1"></div>
<h4 id="sec16-6-1">16.6.1 R&eacute;int&eacute;gration</h4>  <p>La r&eacute;int&eacute;gration doit &ecirc;tre pr&eacute;vue de mani&egrave;re &agrave; r&eacute;duire au minimum les risques pour le personnel.</p>  <p>La r&eacute;int&eacute;gration pendant la situation d&rsquo;urgence doit se faire seulement par des volontaires ayant re&ccedil;u une formation en intervention d&rsquo;urgence et en r&eacute;int&eacute;gration.</p>  <p>La r&eacute;int&eacute;gration ne doit &ecirc;tre faite que dans les cas o&ugrave; un contr&ocirc;le radiologique pr&eacute;liminaire indique que les niveaux de rayonnement sont acceptables pour la r&eacute;int&eacute;gration. Les instruments dont on dispose ou des d&eacute;tecteurs temporaires de lecture &agrave; distance peuvent &ecirc;tre utilis&eacute;s.</p>  <p>Dans tous les cas, la r&eacute;int&eacute;gration doit &ecirc;tre accompagn&eacute;e d&rsquo;une surveillance continue du rayonnement.</p>  <p>Si le syst&egrave;me demeure critique et s&rsquo;il y a possibilit&eacute; que des dommages excessifs ou des rejets importants de mati&egrave;res radioactives se produisent, une tentative pr&eacute;coce de r&eacute;int&eacute;gration visant &agrave; d&eacute;sactiver le syst&egrave;me est permise. La m&eacute;thode de d&eacute;sactivation du syst&egrave;me doit &ecirc;tre planifi&eacute;e avec soin et mise en &oelig;uvre de mani&egrave;re &agrave; r&eacute;duire au minimum les dangers pour l&rsquo;&eacute;quipe de r&eacute;int&eacute;gration.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.2"></div>
<h4 id="sec16-6-2">16.6.2 Op&eacute;ration de sauvetage</h4>  <p>S&rsquo;il faut porter secours &agrave; du personnel, le sauvetage doit &ecirc;tre pr&eacute;vu de mani&egrave;re &agrave; ce que les sauveteurs ne soient pas expos&eacute;s &agrave; des risques qui mettent la vie en danger. On devrait tenir compte de la possibilit&eacute; d&rsquo;une criticit&eacute; continue ou r&eacute;currente.</p>  <p>Les mesures de sauvetage qui n&eacute;cessitent une r&eacute;int&eacute;gration h&acirc;tive dans la zone d&rsquo;&eacute;vacuation imm&eacute;diate doivent &ecirc;tre effectu&eacute;es par plus d&rsquo;un volontaire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.3"></div>
<h4 id="sec16-6-3">16.6.3 Stabilisation</h4>  <p>Le personnel technique doit d&eacute;terminer si le syst&egrave;me est sous-critique et doit informer la Direction des m&eacute;thodes visant &agrave; s&rsquo;assurer que la stabilisation de l&rsquo;&eacute;quipement concern&eacute; et des conditions s&eacute;curitaire pour le personnel. Cela peut comprendre le fait de placer la mati&egrave;re fissile dans une g&eacute;om&eacute;trie favorable, diluer la solution fissile en-de&ccedil;&agrave; de la concentration critique, ou utiliser des absorbeurs de neutrons pour maintenir la sous-criticit&eacute;.</p>  <p>Si l&rsquo;on utilise des absorbeurs de neutrons pour arr&ecirc;ter ou stabiliser un syst&egrave;me, on doit s&rsquo;assurer qu&rsquo;une quantit&eacute; suffisante d&rsquo;absorbeurs est disponible. Avant de choisir un absorbeur, on doit &eacute;valuer les effets de l&rsquo;absorbeur de neutrons dans des conditions d&rsquo;accident. On doit tenir compte de la comptabilit&eacute; des mat&eacute;riaux et des cas dans lesquels l&rsquo;ajout d&rsquo;un absorbeur de neutrons peut accro&icirc;tre la multiplication des neutrons.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7"></div>
<h3 id="sec16-7">16.7 Formation en classe, exercices et exercices d&rsquo;&eacute;vacuation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7.1"></div>
<h4 id="sec16-7-1">16.7.1 Formation en classe</h4>  <p>Un programme de formation portant sur l&rsquo;intervention en cas d&rsquo;accident de criticit&eacute; doit &ecirc;tre &eacute;labor&eacute; et mis en &oelig;uvre, conform&eacute;ment &agrave; la section 13, <em>Formation relative &agrave; la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em>. Cette formation doit &ecirc;tre r&eacute;vis&eacute;e chaque ann&eacute;e et, au besoin, pour s&rsquo;assurer que tous changements ou modifications sont int&eacute;gr&eacute;s au programme de formation. D&rsquo;autres formats didactiques, comme la formation assist&eacute;e par ordinateur, peuvent &ecirc;tre utilis&eacute;s pour respecter ces exigences.</p>  <p>Le personnel de l&rsquo;installation qui doit intervenir en cas d&rsquo;alarme d&rsquo;accident de criticit&eacute; doit recevoir une formation lui permettant de reconna&icirc;tre les alarmes, et de conna&icirc;tre le plan d&rsquo;ensemble de l&rsquo;installation, les itin&eacute;raires d&rsquo;&eacute;vacuation, l&rsquo;emplacement des postes de rassemblement, le recensement du personnel et les m&eacute;thodes de surveillance.</p>  <p>Le personnel d&rsquo;intervention d&rsquo;urgence doit recevoir une formation relativement &agrave; ses fonctions et responsabilit&eacute;s lors de l&rsquo;intervention en cas d&rsquo;accident de criticit&eacute;. Cette formation doit comprendre les proc&eacute;dures, la connaissance du plan d&rsquo;ensemble de l&rsquo;installation et les caract&eacute;ristiques des accidents de criticit&eacute;.</p>  <p>Les visiteurs doivent &ecirc;tre inform&eacute;s de leurs responsabilit&eacute;s en r&eacute;ponse &agrave; une alarme d&rsquo;accident de criticit&eacute;, ou &agrave; un accident de criticit&eacute;.</p>  <p>La formation sur les proc&eacute;dures de r&eacute;int&eacute;gration et les dangers pr&eacute;sents dans l&rsquo;installation doit &ecirc;tre fournie annuellement pour le personnel de l&rsquo;&eacute;quipe de r&eacute;int&eacute;gration.</p>  <p>Le personnel technique doit recevoir une formation sur ses fonctions et ses responsabilit&eacute;s en cas d&rsquo;accident de criticit&eacute;.</p>   <p>La formation devra mettre l&rsquo;accent sur le fait que les mesures d&rsquo;urgence, y compris l&rsquo;&eacute;vacuation, devraient &ecirc;tre mises en &oelig;uvre de mani&egrave;re &agrave; r&eacute;duire le risque de blessure.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7.2"></div>
<h4 id="sec16-7-2">16.7.2 Exercices</h4>  <p>Un exercice d&rsquo;intervention en cas d&rsquo;accident de criticit&eacute; doit &ecirc;tre effectu&eacute; chaque ann&eacute;e pour mettre &agrave; l&rsquo;&eacute;preuve la capacit&eacute; des organismes de secours et des syst&egrave;mes de communication et pour renforcer la formation relative aux situations d&rsquo;urgence. Les exercices peuve
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }