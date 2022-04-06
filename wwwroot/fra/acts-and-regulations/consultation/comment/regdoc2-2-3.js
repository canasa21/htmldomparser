import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.2.3, Accréditation du personnel : Examens d'accréditation initiale", 
                dateModified: "2013-09-24",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-2-3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>
<p>Le présent document d&#39;application  de la réglementation fait partie de la série de documents d&#39;application de la  réglementation de la CCSN intitulée «&nbsp;Gestion de la performance  humaine&nbsp;», qui porte également sur la performance humaine, la formation du  personnel et l&#39;accréditation du personnel. La liste complète des séries figure  à la fin de ce document et peut être consultée à partir du <a href="http://www.suretenucleaire.gc.ca/fra/acts-and-regulations/regulatory-documents/index">site  Web de la CCSN</a>.</p>
<p>Le document d&#39;application de la  réglementation REGDOC-2.2.3, Accréditation  du personnel&nbsp;: Examens d&#39;accréditation initiale, énonce les exigences et l&#39;orientation  relatives aux examens d&#39;accréditation initiale à l&#39;intention des personnes qui  doivent obtenir une accréditation pour occuper un poste mentionné dans le  permis d&#39;une centrale nucléaire. </p>
<p>Les personnes qui souhaitent  obtenir une accréditation initiale pour ces postes doivent réussir les examens  d&#39;accréditation écrits (ou oraux) et sur simulateur spécifiés dans le présent  document. Collectivement, les examens écrits et oraux sont également appelés «&nbsp;examens  d&#39;accréditation portant sur les connaissances&nbsp;» et les examens sur  simulateur sont également désignés par l&#39;expression «&nbsp;examens d&#39;accréditation  portant sur les habiletés&nbsp;».</p>
<p>Le présent document remplace les  guides d&#39;examen de la CCSN EG1, Exigences  et directives concernant les examens d&#39;accréditation écrits et oraux du  personnel de quart des centrales nucléaires, et EG2, Exigences et directives concernant les examens d&#39;accréditation sur  simulateur du personnel de quart des centrales nucléaires. </p>
<p>Conformément à la philosophie de  réglementation de la CCSN et à une approche largement répandue dans le monde,  les titulaires de permis sont, d&#39;abord et avant tout, responsables de l&#39;exploitation  sûre de leurs centrales respectives. Par conséquent, ces titulaires de permis  ont l&#39;entière responsabilité de former leurs travailleurs, de leur donner des  examens et de s&#39;assurer qu&#39;ils sont pleinement qualifiés pour exercer les  fonctions de leur poste, conformément aux exigences réglementaires pertinentes  en vigueur.</p>
<p>La CCSN s&#39;assurera que chaque  personne qu&#39;elle accrédite possède les compétences nécessaires pour occuper un  poste donné au moyen d&#39;un régime de surveillance réglementaire des programmes  de formation et des examens d&#39;accréditation des titulaires de permis. La  surveillance réglementaire repose sur une combinaison d&#39;orientation  réglementaire et d&#39;activités de vérification de la conformité appropriées.</p>
<div className="alert alert-info col-md-12">
<h3><span className="">Remarque importante&nbsp;:</span></h3>
<p>Ce document fait  partie du fondement d&#39;autorisation d&#39;une installation ou d&#39;une activité  réglementée si on s&#39;y réfère directement ou indirectement dans le permis  (notamment dans des documents cités en référence du titulaire de permis). </p>
<p>Le fondement d&#39;autorisation  établit les conditions limites du rendement acceptable pour une installation ou  une activité réglementée et établit les bases du programme de conformité de la  CCSN à l&#39;égard de cette installation ou activité réglementée. </p>
<p>Dans le cas où le  document est un élément du fondement d&#39;autorisation, le terme « doit » est  employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de  permis doit se conformer; le terme « devrait » dénote une orientation ou une  mesure conseillée; le terme « pourrait » exprime une option ou une mesure  conseillée ou acceptable dans les limites de ce document d&#39;application de la  réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>
<p>Aucune information  contenue dans le présent document ne doit être interprétée comme libérant le  titulaire de permis de toute autre exigence pertinente. Le titulaire de permis  a la responsabilité de prendre connaissance de tous les règlements et de toutes  les conditions de permis applicables et d&#39;y adhérer.</p></div>  <div className="col-md-12 module-table-contents">
<h2>Table des matières</h2>
<ul>
<li><a href="#sec1">1. Objet</a></li>
<li><a href="#sec2">2. Portée</a></li>
<li><a href="#sec3">3. Législation pertinente</a></li>
<li><a href="#part-i">Partie I : Exigences générales visant les examens d&#39;accréditation initiale</a></li>
<li><a href="#sec4">4. Politiques et procédures</a></li>
<li><a href="#sec5">5. Responsabilités et qualifications</a>
<ul>
<li><a href="#sec5-1">5.1 Examinateur en chef</a>
<ul>
<li><a href="#sec5-1-1">5.1.1 Responsabilités</a></li>
<li><a href="#sec5-1-2">5.1.2 Qualifications</a></li>
</ul>
</li>
<li><a href="#sec5-2">5.2 Examinateurs</a>
<ul>
<li><a href="#sec5-2-1">5.2.1 Responsabilités</a></li>
<li><a href="#sec5-2-2">5.2.2 Exigences relatives aux qualifications</a></li>
</ul>
</li>
<li><a href="#sec5-3">5.3 Chef de la formation</a>
<ul>
<li><a href="#sec5-3-1">5.3.1 Responsabilités</a></li>
<li><a href="#sec5-3-2">5.3.2 Exigences relatives aux qualifications</a></li>
</ul>
</li>
<li><a href="#sec5-4">5.4 Membres de l&#39;équipe de soutien</a>
<ul>
<li><a href="#sec5-4-1">5.4.1 Responsabilités</a></li>
<li><a href="#sec5-4-2">5.4.2 Exigences relatives aux qualifications</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec6">6. Surveillants</a></li>
<li><a href="#sec7">7. Exigences de confidentialité</a>
<ul>
<li><a href="#sec7-1">7.1 Politique et processus de confidentialité</a></li>
<li><a href="#sec7-2">7.2 Engagements de confidentialité</a></li>
</ul>
</li>
<li><a href="#sec8">8. Conservation des dossiers d&#39;examen d&#39;accréditation initiale</a>
<ul>
<li><a href="#sec8-1">8.1 Dossiers d&#39;examens d&#39;accréditation portant sur les connaissances</a></li>
<li><a href="#sec8-2">8.2 Dossiers d&#39;examens d&#39;accréditation portant sur les habiletés</a></li>
</ul>
</li>
<li><a href="#part-ii">Partie II : Exigences relatives aux examens d&#39;accréditation portant sur les connaissances </a></li>
<li><a href="#sec9">9. Examens d&#39;accréditation écrits et oraux</a>
<ul>
<li><a href="#sec9-1">9.1 Nombre total de points et temps alloué par examen d&#39;accréditation</a></li>
<li><a href="#sec9-2">9.2 Enveloppe d&#39;examen limitative</a></li>
<li><a href="#sec9-3">9.3 Conception des examens</a>
<ul>
<li><a href="#sec9-3-1">9.3.1 Examens généraux destinés aux candidats OR, OT0, CQC et CQSC</a></li>
<li><a href="#sec9-3-2">9.3.2 Examens propres à la centrale pour les candidats au poste d&#39;OR</a></li>
<li><a href="#sec9-3-3">9.3.3 Examens propres à la centrale pour les candidats au poste d&#39;opérateur de la tranche</a></li>
<li><a href="#sec9-3-4">9.3.4 Examens supplémentaires propres à la centrale pour les candidats CQC et CQSC</a></li>
</ul>
</li>
<li><a href="#sec9-4">9.4 Élaboration de l&#39;examen et du guide de correction</a></li>
<li><a href="#sec9-5">9.5 Version finale de l&#39;examen et du guide de correction</a></li>
<li><a href="#sec9-6">9.6 Validation des examens</a></li>
</ul>
</li>
<li><a href="#sec10">10. Tenue des examens d&#39;accréditation portant sur les connaissances</a></li>
<li><a href="#sec11">11. Correction des examens</a>
<ul>
<li><a href="#sec11-1">11.1 Exigences d&#39;ordre général concernant les examens écrits et oraux</a></li>
<li><a href="#sec11-2">11.2 Première correction des examens écrits et oraux</a></li>
<li><a href="#sec11-3">11.3 Deuxième correction des examens écrits et oraux et conciliation des résultats</a></li>
<li><a href="#sec11-4">11.4 Communication des résultats d&#39;examen</a></li>
</ul>
</li>
<li><a href="#sec12">12. Communication des résultats d&#39;examen</a></li>
<li><a href="#part-iii">Partie III : Exigences relatives aux examens d&#39;accréditation portant sur les habiletés</a></li>
<li><a href="#sec13">13. Examens d&#39;accréditation sur simulateur</a>
<ul>
<li><a href="#sec13-1">13.1 Description des scénarios d&#39;examen</a></li>
<li><a href="#sec13-2">13.2 Durée des examens et des scénarios d&#39;examen</a></li>
<li><a href="#sec13-3">13.3 Enveloppe d&#39;examen limitative</a></li>
<li><a href="#sec13-4">13.4 Défaillances principales et secondaires</a>
<ul>
<li><a href="#sec13-4-1">13.4.1 Défaillances principales</a></li>
<li><a href="#sec13-4-2">13.4.2 Défaillances secondaires</a></li>
</ul>
</li>
<li><a href="#sec13-5">13.5 Domaines de compétence et attentes génériques relatives au comportement</a></li>
</ul>
</li>
<li><a href="#sec14">14. Conception et élaboration des examens</a>
<ul>
<li><a href="#sec14-1">14.1 Examen pour opérateur de réacteur</a></li>
<li><a href="#sec14-2">14.2 Examen pour opérateur de la tranche 0</a></li>
<li><a href="#sec14-3">14.3 Examen pour chef de quart de centrale</a></li>
<li><a href="#sec14-4">14.4 Examen pour chef de quart en salle de commande</a></li>
<li><a href="#sec14-5">14.5 Guides d&#39;examen</a>
<ul>
<li><a href="#sec14-5-1">14.5.1 Guide d&#39;examen pour les SEC, les SEA et les SED</a></li>
<li><a href="#sec14-5-2">14.5.2 Guide d&#39;examen pour les SVPC</a></li>
</ul>
</li>
<li><a href="#sec14-6">14.6 Validation des examens</a></li>
<li><a href="#sec14-7">14.7 Conception finale des guides d&#39;examen et des examens</a></li>
</ul>
</li>
<li><a href="#sec15">15. Tenue des examens d&#39;accréditation portant sur les habiletés</a>
<ul>
<li><a href="#sec15-1">15.1 Répétition des scénarios d&#39;examen avant la tenue de l&#39;examen</a></li>
<li><a href="#sec15-2">15.2 Tenue de la partie dynamique d&#39;un SEC, SEA ou SED</a></li>
<li><a href="#sec15-3">15.3 Tenue de la partie dynamique d&#39;un SVPC</a></li>
<li><a href="#sec15-4">15.4 Questions normalisées posées aux candidats CQC et CQSC</a></li>
<li><a href="#sec15-5">15.5 Fin de l&#39;examen</a></li>
</ul>
</li>
<li><a href="#sec16">16. Notation des examens</a>
<ul>
<li><a href="#sec16-1">16.1 Première évaluation</a></li>
<li><a href="#sec16-2">16.2 Deuxième évaluation</a></li>
<li><a href="#sec16-3">16.3 Attribuer un échec ou une réussite à l&#39;examen</a></li>
</ul>
</li>
<li><a href="#sec17">17. Communication des résultats d&#39;examen</a></li>
<li><a href="#app-a">Annexe A : Capacités des simulateurs pour les centrales nucléaires actuellement autorisées</a>
<ul>
<li><a href="#app-a-1">A.1 Capacités minimales acceptables de simulation</a></li>
<li><a href="#app-a-2">A.2 Appareils d&#39;enregistrement des données</a></li>
<li><a href="#app-a-3">A.3 Autres dispositifs</a></li>
</ul>
</li>
<li><a href="#app-b">Annexe B : Examens d&#39;accréditation portant sur les connaissances – Exigences supplémentaires</a>
<ul>
<li><a href="#app-b-1">B.1 Groupes de sujets à traiter dans les examens généraux des candidats OR, CQC et CQSC</a></li>
<li><a href="#app-b-2">B.2 Groupes de sujets pour les examens généraux destinés aux candidats OT0</a></li>
<li><a href="#app-b-3">B.3 Groupes de sujets à traiter dans les examens propres à la centrale des candidats OR</a></li>
<li><a href="#app-b-4">B.4 Groupes de connaissances à traiter dans les examens propres à la centrale des candidats OR</a></li>
<li><a href="#app-b-5">B.5 Groupes de sujets à traiter dans les examens propres à la centrale des candidats OT0</a></li>
<li><a href="#app-b-6">B.6 Groupes de connaissances à traiter dans les examens propres à la centrale des candidats OT0</a></li>
<li><a href="#app-b-7">B.7 Groupes de sujets à traiter dans les examens supplémentaires propres à la centrale pour les candidats CQC et CQSC</a></li>
<li><a href="#app-b-8">B.8 Exemple de matrice de conception d&#39;examen</a></li>
<li><a href="#app-b-9">B.9 Page couverture de l&#39;examen portant sur les connaissances</a></li>
<li><a href="#app-b-10">B.10 Exemples de questions d&#39;examen portant sur les connaissances</a></li>
<li><a href="#app-b-11">B.11 Points attribués et temps alloué pour répondre aux questions en fonction du nombre d&#39;éléments de réponse</a></li>
<li><a href="#app-b-12">B.12 Page couverture du guide de correction de l&#39;examen portant sur les connaissances</a></li>
<li><a href="#app-b-13">B.13 Réponse du guide de correction portant sur les connaissances</a></li>
<li><a href="#app-b-14">B.14 Fiche de contrôle de l&#39;examen portant sur les connaissances</a></li>
<li><a href="#app-b-15">B.15 Formulaire de résultats d&#39;examen portant sur les connaissances</a></li>
</ul>
</li>
<li><a href="#app-c">Annexe C : Examens d&#39;accréditation portant sur les habiletés – Exigences supplémentaires </a>
<ul>
<li><a href="#app-c-1">C.1 Domaines de compétence et attentes génériques relatives au comportement des candidats aux postes d&#39;OR et d&#39;OT0</a></li>
<li><a href="#app-c-2">C.2 Domaines de compétence et attentes génériques relatives au comportement des candidats au poste de CQC aux centrales à une seule tranche</a></li>
<li><a href="#app-c-3">C.3 Domaines de compétence et attentes génériques relatives au comportement des candidats au poste de CQC aux centrales à une seule tranche</a></li>
<li><a href="#app-c-4">C.4 Conception d&#39;un SEC pour l&#39;examen des OR</a></li>
<li><a href="#app-c-5">C.5 Conception d&#39;un SEC pour l&#39;examen des OT0</a></li>
<li><a href="#app-c-6">C.6 Conception d&#39;un SEC pour l&#39;examen des CQC</a></li>
<li><a href="#app-c-7">C.7 Conception d&#39;un SEA pour l&#39;examen des CQC</a></li>
<li><a href="#app-c-8">C.8 Conception d&#39;un SEC pour l&#39;examen des CQSC</a></li>
<li><a href="#app-c-9">C.9 Conception d&#39;un SED pour l&#39;examen des CQSC</a></li>
<li><a href="#app-c-10">C.10 Conception d&#39;un SVPC pour l&#39;examen des CQSC</a></li>
<li><a href="#app-c-11">C.11 Page couverture d&#39;un guide d&#39;examen portant sur les habiletés</a></li>
<li><a href="#app-c-12">C.12 Section 1 du guide d&#39;examen – Sommaire du scénario d&#39;examen</a></li>
<li><a href="#app-c-13">C.13 Section 3 du guide d&#39;examen – Grille d&#39;observation des interventions du candidat </a></li>
<li><a href="#app-c-14">C.14 Règles de conduite et directives à l&#39;intention des membres de l&#39;équipe de soutien chargée des SEC, des SEA, des SED et des SVPC</a></li>
<li><a href="#app-c-15">C.15 Questions normalisées destinées aux candidats CQC et aux CQSC</a></li>
<li><a href="#app-c-16">C.16 Fiche de contrôle des données à recueillir</a></li>
<li><a href="#app-c-17">C.17 Fiche de contrôle de validation des SEC, des SEA et des SED</a></li>
<li><a href="#app-c-18">C.18 Règles de conduite et informations communiquées aux candidats OR, OT0, CQC et CQSC avant la tenue de l&#39;examen</a></li>
<li><a href="#app-c-19">C.19 Conditions et directives concernant l&#39;interruption d&#39;un scénario d&#39;examen</a></li>
<li><a href="#app-c-20">C.20 Critères des erreurs critiques et des erreurs majeures</a></li>
<li><a href="#app-c-21">C.21 Grille d&#39;évaluation des erreurs critiques ou majeures</a></li>
<li><a href="#app-c-22">C.22 Calcul des notes obtenues à l&#39;examen portant sur les habiletés</a></li>
<li><a href="#app-c-23">C.23 Formulaire de résultats d&#39;examen portant sur les habiletés</a></li>
</ul>
</li>
<li><a href="#app-d">Annexe D : Exemples de directives, de fiches de contrôle et de formulaires</a>
<ul>
<li><a href="#app-d-1">D.1 Annexe D : Exemples de directives, de fiches de contrôle et de formulaires</a></li>
<li><a href="#app-d-2">D.2 Groupes de connaissances à traiter dans les examens propres à une centrale à une seule tranche destinés aux candidats OR</a></li>
<li><a href="#app-d-3">D.3 Objectifs de connaissance et sujets relatifs à la radioprotection à traiter dans les examens propres à la centrale pour les candidats OR</a></li>
<li><a href="#app-d-4">D.4 Groupes de connaissances pour les examens propres à une centrale à plusieurs tranches destinés aux candidats OT0</a></li>
<li><a href="#app-d-5">D.5 Objectifs de connaissance permettant d&#39;élaborer les sujets liés aux incidents et aux urgences radiologiques dans les examens propres à une centrale destinés aux candidats OT0</a></li>
<li><a href="#app-d-6">D.6 Exemple de formulaire du surveillant de l&#39;examen d&#39;accréditation</a></li>
<li><a href="#app-d-7">D.7 Exemple de formulaire du surveillant de l&#39;examen d&#39;accréditation</a></li>
<li><a href="#app-d-8">D.8 Exemple type de fiche de contrôle d&#39;examen sur simulateur pour candidats au poste d&#39;OR</a></li>
</ul>
</li>
<li><a href="#gloss">Glossaire</a></li>
<li><a href="#ref">Références</a></li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1" className="mrgn-tp-0">1. Objet</h2>
<p>Le présent document d&#39;application  de la réglementation énonce les exigences et l&#39;orientation relatives aux  examens d&#39;accréditation initiale que doivent réussir les personnes souhaitant  une accréditation initiale par la Commission canadienne de sûreté nucléaire,  conformément à l&#39;alinéa&nbsp;9(2)b) du Règlement sur les  installations nucléaires de catégorie I.</p>
<p>Le document REGDOC-2.2.3 précise  les programmes et processus que les titulaires de permis de centrales  nucléaires doivent mettre en œuvre lors de la conception, de l&#39;élaboration, de la  tenue, de la correction et de la notation des examens d&#39;accréditation portant  sur les connaissances et les habiletés. Ces examens visent à démontrer que les  personnes qui demandent l&#39;accréditation initiale par la CCSN possèdent les  connaissances et les aptitudes nécessaires pour accomplir leurs tâches avec  compétence, en toute sécurité et conformément aux exigences  réglementaires. De plus, ils veillent également à ce  que les titulaires de permis de centrales nucléaires administrent les examens  de manière équitable et uniforme.</p>
<p>Le présent document d&#39;application  de la réglementation fournit également des indications dans les sections  appropriées pour préciser davantage les exigences réglementaires.</p>
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
<h2 id="sec2">2. Portée</h2>
<p>Le présent document d&#39;application  de la réglementation établit les obligations du titulaire de permis en ce qui  concerne l&#39;administration des examens d&#39;accréditation initiale pour les  personnes souhaitant obtenir l&#39;accréditation initiale par la CCSN pour les  postes liés à l&#39;exploitation spécifiés dans le permis d&#39;exploitation de la  centrale. Les titres génériques des postes utilisés par la CCSN et les titres  des postes équivalents du titulaire de permis sont énumérés au tableau&nbsp;1.  Le poste de chef de quart de centrale cité dans le présent document d&#39;application  de la réglementation se rapporte exclusivement au poste de chef de quart des  centrales à une tranche. Au moment de l&#39;impression du présent document, les  chefs de quart en salle de commande ne devaient pas passer d&#39;examens d&#39;accréditation  supplémentaires pour occuper les fonctions de chef de quart dans une centrale à  plusieurs tranches.</p>
<p>L&#39;objet de ces examens d&#39;accréditation  est de garantir à la CCSN qu&#39;au moment de leur accréditation initiale, les  candidats possèdent le niveau de connaissances et d&#39;habiletés nécessaires pour  accomplir les tâches de leur poste avec compétence et en toute sécurité, et qu&#39;ils  sont capables de réagir aux situations d&#39;exploitation anormales survenant à la  centrale nucléaire pour laquelle l&#39;accréditation initiale est demandée.</p>
<table>
<caption className="text-left">
<strong>Tableau 1 : Titres des postes accrédités dans les centrales nucléaires existantes autorisées par la CCSN</strong>
</caption>
<thead>
<tr>
<th>Titre générique du poste utilisé par la CCSN</th>
<th colSpan="2">Titre du poste équivalent du titulaire de permis</th>
</tr>
<tr>
<th>&nbsp;</th>
<th>Centrale nucléaire à une tranche</th>
<th>Centrale nucléaire à plusieurs tranches</th>
</tr>
</thead>
<tfoot>
<tr>
<td colSpan="3">*<strong>Note:</strong> Le poste de CQC cité dans le présent document d&#39;application de la réglementation se rapporte exclusivement au poste de chef de quart des centrales à une tranche. Pour l&#39;instant, les examens d&#39;accréditation initiale des GQ des centrales à plusieurs tranches débordent de la portée du présent document. Au moment de l&#39;impression du présent document, les CQSC ne devaient pas passer d&#39;examens d&#39;accréditation supplémentaires pour occuper les fonctions de GQ dans une centrale à plusieurs tranches.</td>
</tr>
</tfoot>
<tbody>
<tr>
<td>Chef de quart de centrale (CQC)*</td>
<td>Chef de quart (CQ)</td>
<td>Gestionnaire de quart (GQ)</td>
</tr>
<tr>
<td>Gestionnaire de quart (GQ)</td>
<td>Sans objet</td>
<td>Chef de quart en salle de commande (CQSC)</td>
</tr>
<tr>
<td>Opérateur de réacteur (OR)</td>
<td>Opérateur de salle de commande (OSC)</td>
<td>Opérateur nucléaire accrédité (ONA)</td>
</tr>
<tr>
<td>Opérateur de la tranche 0 (OT0)</td>
<td>Sans objet</td>
<td>Opérateur de salle de commande de la tranche 0 (OSC T0)</td>
</tr>
</tbody>
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
<div id="3"></div>
<h2 id="sec3">3. Législation pertinente </h2>
<p>La CCSN est l&#39;organisme fédéral qui  réglemente l&#39;utilisation de l&#39;énergie et des matières nucléaires au Canada afin  que le niveau de risque inhérent à ces activités, tant pour la santé et la sécurité  des personnes que pour l&#39;environnement et la sécurité nationale, demeure  acceptable tout en assurant la mise en œuvre des engagements internationaux du  Canada à l&#39;égard de l&#39;utilisation pacifique de l&#39;énergie nucléaire. La Loi sur la sûreté et la réglementation  nucléaires (LSRN) exige des personnes et des organisations qu&#39;elles  obtiennent un permis de la CCSN pour exercer les activités mentionnées à l&#39;article&nbsp;26  de la LSRN, sauf en cas d&#39;exemption. Les règlements connexes précisent les  exigences préalables à la délivrance de permis de la CCSN ainsi que les  obligations des titulaires de permis.</p>
<p>Les dispositions suivantes de la  LSRN et de ses règlements s&#39;appliquent au présent document d&#39;application de la  réglementation&nbsp;:</p>
<ol>
<li>L&#39;alinéa 21(1)i) de la LSRN autorise la Commission à «&nbsp;accréditer les  personnes visées à l&#39;alinéa 44(1)k) pour accomplir leurs fonctions, ou [à] retirer leur  accréditation&nbsp;».</li>
<li>L&#39;alinéa 44(1)k) de la LSRN autorise la Commission, par règlement, à «&nbsp;régir  les conditions de compétence, de formation et d&#39;examens à satisfaire par [...]  les travailleurs du secteur nucléaire ou toute autre personne qui exerce des  fonctions dans une installation nucléaire[...]&nbsp;».</li>
<li>L&#39;alinéa 37(2)b) de la LSRN stipule que la Commission peut autoriser le fonctionnaire  désigné à «&nbsp;accréditer les personnes visées à l&#39;alinéa 44(1)k) pour accomplir leurs fonctions, ou [à] retirer leur  accréditation&nbsp;».</li>
<li>Le paragraphe 24(5) de la LSRN  autorise la Commission à assortir tout permis des conditions que la Commission  estime nécessaires à l&#39;application de la présente loi, y compris les conditions  de compétence, de formation et d&#39;examens à satisfaire par les travailleurs du  secteur nucléaire.</li>
<li>Le paragraphe 24(4) de la LSRN  stipule que la Commission ne peut délivrer, renouveler, modifier ou remplacer  une licence ou un permis «&nbsp;que si elle est d&#39;avis que l&#39;auteur de la  demande [...], à la fois&nbsp;:
<ol>
<li>est compétent pour exercer les  activités visées par la licence ou le permis;</li>
<li>prendra, dans le cadre de ces  activités, les mesures voulues pour préserver la santé et la sécurité des  personnes, protéger l&#39;environnement, maintenir la sécurité nationale et  respecter les obligations internationales que le Canada a assumées&nbsp;».</li>
</ol>
</li>
<li>L&#39;alinéa 12(1)a) du Règlement général sur la sûreté et la réglementation nucléaires oblige tout titulaire de permis à veiller «&nbsp;à ce qu&#39;il y ait  suffisamment de travailleurs qualifiés pour exercer l&#39;activité autorisée en  toute sécurité et conformément à la Loi, à ses règlements et au permis&nbsp;».</li>
<li>L&#39;alinéa 12(1)b) du Règlement général sur la sûreté et la réglementation nucléaires oblige tout titulaire de permis à former «&nbsp;les travailleurs  pour qu&#39;ils exercent l&#39;activité autorisée conformément à la Loi, à ses règlements et au  permis&nbsp;».</li>
<li>Selon le paragraphe 9(2) du Règlement sur les installations  nucléaires de catégorie I, «&nbsp;La Commission  ou un fonctionnaire désigné autorisé en vertu de l&#39;alinéa 37(2)b) de la Loi peut  accréditer une personne visée à l&#39;alinéa 44(1)k) de la Loi pour occuper  un poste mentionné dans le permis, sur réception d&#39;une demande du titulaire de  permis précisant que la personne&nbsp;:
<ol>
<li>satisfait aux exigences de  qualification prévues dans le permis;</li>
<li>a réussi le programme de  formation et l&#39;examen applicables prévus dans le permis;</li>
<li>est capable, de l&#39;avis du  titulaire de permis, d&#39;exercer les fonctions du poste&nbsp;».</li>
</ol>
</li>
<li>Selon le paragraphe 9(4) du Règlement sur les  installations nucléaires de catégorie I,<br />
«&nbsp;L&#39;attestation est valide durant les cinq ans suivant la date de sa  délivrance ou de son renouvellement&nbsp;».</li>
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
<div id="Part1"></div>
<h2 id="part-i" className="mrgn-tp-0">Partie I : Exigences générales visant les examens d&#39;accréditation initiale </h2>
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
<h2 id="sec4">4. Politiques et procédures</h2>  <p>Le titulaire de permis doit avoir en  place des politiques, des processus et des procédures pour assurer la mise en  œuvre et le respect de toutes les exigences énoncées dans le présent document. </p>  <p>Ces politiques, processus et  procédures doivent comprendre&nbsp;:</p>  <ol>
<li>l&#39;assurance que toutes les  personnes participant à l&#39;administration des examens d&#39;accréditation initiale  respectent les exigences formulées dans le présent document d&#39;application de la  réglementation</li>
<li>l&#39;assurance que toutes les  personnes participant à l&#39;administration des examens d&#39;accréditation initiale  possèdent la formation et les compétences nécessaires et maintiennent leur  niveau de compétences</li>
<li>l&#39;assurance que les principaux  postes inclus dans le processus d&#39;examen d&#39;accréditation initiale  comprennent&nbsp;:
<ol>
<li>un examinateur en chef</li>
<li>des examinateurs</li>
<li>un chef de la formation</li>
<li>des membres de l&#39;équipe de  soutien pour les examens portant sur les habiletés</li>
</ol>
</li>
<li>des membres du personnel  qualifiés, en nombre suffisant et disposant du temps et des ressources  nécessaires pour concevoir, élaborer, administrer, corriger et évaluer tous les  examens d&#39;accréditation, conformément au présent document d&#39;application de la  réglementation</li>
<li>l&#39;assurance de la séparation  entre le personnel préposé à la formation et celui préposé aux examens, chargés  de chaque examen d&#39;accréditation</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait assurer un niveau de séparation approprié entre les personnes responsables de la formation des candidats demandant une accréditation et les personnes chargées d&#39;administrer les examens d&#39;accréditation. Ces deux groupes devraient agir sur un pied d&#39;égalité et de manière autonome. Les examens d&#39;accréditation devraient être gérés indépendamment de la fonction de formation. De même, les programmes de formation du titulaire de permis ne devraient pas être taillés sur mesure pour répondre aux besoins des examens d&#39;accréditation. </p>  </div>  <ol start="6">
<li>l&#39;assurance que toute personne  ayant pris part à la formation de candidats qui doivent subir un examen d&#39;accréditation  ne peut participer à la sélection des sujets d&#39;examen ni à la préparation des  questions d&#39;examen dans les domaines qui faisaient partie de la formation qu&#39;elle  a donnée</li>
<li>l&#39;assurance que toute personne  qui participe à l&#39;élaboration d&#39;un examen ou toute personne au courant en tout  ou en partie de son contenu ne peut plus donner de formation aux candidats qui  se présenteront à cet examen ni leur faire aucun commentaire relié à leur  formation jusqu&#39;à ce qu&#39;ils aient tous subi l&#39;examen en question</li>
<li>l&#39;assurance que chaque examen d&#39;accréditation  a été validé avant la tenue de l&#39;examen, et que le processus de validation  exige que l&#39;examen soit validé par une personne tenant le rôle du candidat, qui  est ou a été accréditée à la centrale nucléaire pour laquelle l&#39;examen est  conçu et qui n&#39;a jamais participé à un aspect quelconque de la conception et de  l&#39;élaboration de l&#39;examen</li>
<li>les règles concernant le  contrôle de la documentation officielle de toutes les phases de chaque examen</li>
<li>les exigences relatives à la  surveillance des examens d&#39;accréditation portant sur les connaissances et un  formulaire du surveillant précisant le titre de l&#39;examen, la date, le temps  alloué, l&#39;heure de début, une liste des noms des candidats, l&#39;heure d&#39;achèvement  de l&#39;examen, un ensemble de règles ou de directives à suivre par les  surveillants et la déclaration des surveillants indiquant qu&#39;ils se sont  conformés à cet ensemble de règles ou de directives</li>
<li>un code de conduite et des  directives pour la séance d&#39;information à l&#39;intention de l&#39;équipe d&#39;examen</li>
<li>un code de conduite et des  directives pour la séance d&#39;information à l&#39;intention des candidats</li>
<li>la confirmation que le  simulateur pleine échelle de la centrale satisfait aux exigences de capacités  minimales acceptables pour les examens sur simulateur précisées à l&#39;annexe&nbsp;A</li>
<li>un programme en place qui  assure la fidélité et l&#39;efficacité du simulateur</li>  </ol>  <div className="module col-md-12">Les processus et procédures du titulaire de permis devraient permettre de consigner les problèmes relatifs à la fidélité et au fonctionnement du simulateur décelés tout au long du programme de formation et du processus d&#39;examen d&#39;accréditation, et de prendre des mesures correctives à cet égard. Ceux-ci devraient également garantir que les activités d&#39;entretien, les modifications ou les mises à jour réalisées sur la tranche de référence ont été faites sur le simulateur.</div>  <ol start="15">
<li>l&#39;assurance qu&#39;un système d&#39;enregistrement audiovisuel de haute qualité permet d&#39;enregistrer clairement le comportement des candidats lors d&#39;un examen d&#39;accréditation, les actions et les propos des examinateurs et des membres de l&#39;équipe de soutien, y compris les questions posées par les examinateurs et les réponses données par les candidats</li>  </ol>  <div className="module col-md-12">
<p>Les enregistrements audiovisuels devraient être de haute qualité afin de permettre de distinguer clairement les propos et les actions du candidat, des examinateurs et des acteurs. Il est essentiel que les examinateurs puissent effectuer une notation objective du comportement d&#39;un candidat après l&#39;examen. Ces enregistrements permettent de confirmer si les actions et les vérifications à effectuer et les réponses à apporter aux questions d&#39;examen étaient claires et correctes. De plus, ces enregistrements sont utilisés par la CCSN lorsqu&#39;elle mène ses activités de vérification de la conformité. Un examen ne sera pas reconnu par la CCSN à moins d&#39;avoir été correctement enregistré.</p>  </div>  <ol start="16">
<li>les documents qui classent les  erreurs critiques ou majeures en différentes catégories selon le niveau de  risque présenté</li>
<li>l&#39;assurance que toute lacune de  connaissances révélée par un candidat ou par le programme d&#39;examen est prise en  compte conformément aux principes de l&#39;approche systématique à la formation (ASF)</li>
<li>l&#39;assurance que toute lacune  importante constatée dans la documentation de la centrale lors de la  conception, de l&#39;élaboration, de l&#39;administration, de la correction ou de la  notation d&#39;un examen d&#39;accréditation est prise en compte en conséquence</li>
<li>l&#39;assurance qu&#39;un exemplaire de  l&#39;examen autorisé, accompagné du guide de correction autorisé ou du guide d&#39;examen  autorisé correspondants, de la fiche de contrôle de l&#39;examen, des fiches de  contrôle des scénarios d&#39;examen et de tous les formulaires applicables à chaque  examen sont expédiés à la CCSN et que la CCSN est officiellement informée des  résultats de chaque candidat</li>
<li>le traitement des appels  interjetés par les candidats quant à leurs résultats d&#39;examen</li>
<li>l&#39;assurance que le calendrier  provisoire de tous les examens d&#39;accréditation de l&#39;année civile à venir est communiqué  à la CCSN au moins trois mois avant le début de l&#39;année en question, et que la  CCSN est informée sans délai de tout changement apporté à ce calendrier</li>
<li>l&#39;assurance que les noms des  examinateurs qualifiés et de l&#39;examinateur en chef de chaque examen d&#39;accréditation  de l&#39;année civile à venir sont communiqués à la CCSN au moins trois mois avant  le début de l&#39;année en question, et que la CCSN est informée sans délai de tout  changement apporté à cette liste de noms</li>
<li>l&#39;assurance que les personnes  qui participent à l&#39;administration des examens d&#39;accréditation ne profiteront  pas de primes de rendement liées à la réussite ou à l&#39;échec des candidats aux  examens d&#39;accréditation</li>  </ol>  <div className="module col-md-12">
<p>Pour préserver l&#39;intégrité du processus d&#39;examen d&#39;accréditation, aucune personne participant directement à un aspect quelconque du présent processus d&#39;examen ne devrait avoir intérêt à ce qu&#39;un candidat réussisse un examen. Aucune personne ne devrait retirer un avantage sur le plan personnel, professionnel, financier ou autre, de la réussite d&#39;un candidat ou d&#39;un groupe de candidats, ni être pénalisée en cas d&#39;échec d&#39;un candidat. </p>  </div>
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
<h2 id="sec5">5. Responsabilités et qualifications </h2>
<p>Les titres de postes utilisés dans le présent document sont des titres génériques. Le titulaire de permis doit attribuer les responsabilités assorties à ces postes aux personnes qui occupent un poste équivalent dans la centrale nucléaire et disposent des qualifications requises.</p>
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
<h3 id="sec5-1">5.1 Examinateur en chef</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.1"></div>
<h4 id="sec5-1-1">5.1.1 Responsabilités</h4>  <p>L&#39;examinateur en chef est  responsable de la conception, de l&#39;élaboration, de la tenue, de la correction, de  la notation, de l&#39;enregistrement et de la consignation des résultats des  examens d&#39;accréditation portant sur les connaissances et les habiletés.</p>  <p>L&#39;examinateur en chef chargé d&#39;un  examen d&#39;accréditation donné doit continuer d&#39;exercer les fonctions d&#39;examinateur  en chef pendant toute la durée du processus d&#39;examen.</p>  <h5>Examens  d&#39;accréditation portant sur les connaissances</h5>  <p>L&#39;examinateur en chef chargé d&#39;un  examen d&#39;accréditation écrit ou oral donné doit&nbsp;:</p>  <ol>
<li>coordonner la conception, l&#39;élaboration,  la tenue et la correction de l&#39;examen et veiller au respect des exigences et  des critères contenus dans le présent document d&#39;application de la  réglementation à toutes les étapes du processus d&#39;examen</li>
<li>informer toutes les personnes  qui participent à la conception, à l&#39;élaboration, à la tenue et à la correction  de l&#39;examen des exigences relatives au contrôle de la confidentialité de ce  dernier et s&#39;assurer que chaque personne a signé l&#39;engagement de  confidentialité pertinent</li>
<li>faire en sorte que les membres  de l&#39;équipe d&#39;examen connaissent parfaitement leurs responsabilités et les  règles qu&#39;ils doivent respecter</li>
<li>veiller à ce qu&#39;aucun  changement ne soit apporté aux examens et aux guides de correction approuvés  sans son autorisation préalable</li>
<li>sélectionner les candidats qui  nécessitent une deuxième correction de leur examen</li>
<li>consigner et signaler les  résultats finaux du candidat</li>
<li>veiller à ce qu&#39;une trousse des  corrections finales soit compilée pour chaque candidat</li>
<li>consigner et signaler toute  lacune importante sur le plan des connaissances révélée par un candidat ou par  un examen</li>
<li>consigner par écrit et signaler  toute lacune importante constatée dans la documentation de la centrale lors de  la conception, de l&#39;élaboration, de la tenue et de la correction de l&#39;examen</li>  </ol>  <h5>Examens  d&#39;accréditation portant sur les habiletés</h5>  <p>L&#39;examinateur en chef chargé d&#39;un  examen d&#39;accréditation sur simulateur donné doit&nbsp;:</p>  <ol>
<li>coordonner la conception, l&#39;élaboration,  la tenue et la notation de l&#39;examen et veiller au respect des exigences et des  critères contenus dans le présent document d&#39;application de la réglementation à  toutes les étapes du processus d&#39;examen</li>
<li>informer toutes les personnes  qui participent à la conception, à l&#39;élaboration, à la tenue et à la notation  de l&#39;examen des exigences relatives au contrôle de la confidentialité de ce  dernier et s&#39;assurer que chaque personne a signé l&#39;engagement de  confidentialité pertinent</li>
<li>s&#39;assurer que les personnes  affectées à l&#39;équipe de soutien possèdent les connaissances et les compétences  requises pour tenir efficacement leur rôle</li>
<li>veiller à ce que les membres de  l&#39;équipe de soutien soient qualifiés et connaissent à fond leurs rôles et  responsabilités respectifs ainsi que les parties pertinentes du présent  document</li>
<li>veiller à ce qu&#39;aucun  changement ne soit apporté aux examens et aux guides d&#39;examen approuvés sans  autorisation préalable</li>
<li>apporter des modifications  mineures aux guides d&#39;examen approuvés au moment de l&#39;examen, s&#39;il y a lieu</li>
<li>assurer le respect des  exigences énoncées à la section 6 du  présent document en ce qui concerne les surveillants</li>
<li>veiller à ce que le simulateur  et les appareils d&#39;enregistrement des données soient correctement réglés pour  la tenue de l&#39;examen</li>
<li>s&#39;assurer que la fidélité des  interventions sur simulateur satisfait aux exigences de l&#39;examen </li>  </ol>  <div className="module col-md-12">
<p>Durant le processus de conception et d&#39;élaboration de l&#39;examen et durant l&#39;examen, l&#39;examinateur en chef devrait s&#39;assurer que le simulateur pleine échelle réagit aux défaillances prévues par le scénario d&#39;examen comme le ferait la tranche de référence de la centrale nucléaire en question.</p>  </div>  <ol start="10">
<li>décider durant l&#39;examen, quand  commencer, terminer ou interrompre un scénario</li>
<li>sélectionner les candidats qui  nécessitent une deuxième notation de leur examen</li>
<li>consigner et signaler les  résultats finaux du candidat</li>
<li>veiller à ce qu&#39;une trousse d&#39;évaluation  finale soit compilée pour chaque candidat</li>
<li>consigner et signaler toute  lacune importante sur le plan des habiletés révélée par un candidat ou par un  examen</li>
<li>consigner et signaler toute  lacune importante constatée dans la documentation de la centrale lors de la  conception, de l&#39;élaboration, de la tenue et de la notation de l&#39;examen</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.2"></div>
<h4 id="sec5-1-2">5.1.2 Qualifications</h4>  <h5>Examens d&#39;accréditation portant sur les connaissances</h5>  <p>L&#39;examinateur en chef d&#39;un examen d&#39;accréditation  écrit ou oral donné doit&nbsp;:</p>  <ol>
<li>connaître à fond les parties  pertinentes du présent document applicables à la centrale nucléaire en question</li>
<li>être pleinement qualifié pour  exercer les fonctions d&#39;examinateur</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait s&#39;assurer que les examinateurs qui prennent part au processus d&#39;examen, y compris l&#39;examinateur en chef, ont tous réussi un programme de formation démontrant et confirmant que la personne est qualifiée pour exercer les fonctions d&#39;examinateur. Pour plus d&#39;information, consulter la section 5.0 du document RD-204, Accréditation des personnes qui travaillent dans des centrales nucléaires.</p>  </div>  <ol start="3">
<li>être pleinement qualifié pour  exercer les fonctions d&#39;examinateur en chef de l&#39;examen qui lui a été confié</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait s&#39;assurer que l&#39;examinateur a réussi un programme de formation documenté démontrant et confirmant que l&#39;examinateur possède toujours les connaissances et les compétences nécessaires pour exercer les fonctions d&#39;examinateur en chef d&#39;un examen donné.</p>  </div>  <ol start="4">
<li>avoir précédemment participé à  titre d&#39;examinateur à l&#39;ensemble du processus d&#39;examen touchant au moins un  examen d&#39;accréditation écrit ou oral pour le poste visé par l&#39;examen à la centrale  en question</li>
<li>pour les examens généraux,  connaître les principes scientifiques et les principes de fonctionnement de l&#39;équipement  exigés des personnes actuellement accréditées occupant à la centrale le poste  visé par l&#39;examen</li>
<li>posséder, pour les examens d&#39;accréditation  sur simulateur spécifiques à la centrale, une des compétences (a) ou (b)  énumérées ci-dessous et applicables au poste visé par l&#39;examen
<ol>
<li>Pour les postes d&#39;opérateur de  réacteur, de chef de quart en salle de commande ou de chef de quart de  centrale, l&#39;examinateur en chef doit être ou avoir été accrédité par la  CCSN&nbsp;:
<ol>
<li>pour occuper le poste visé par  l&#39;examen à la centrale en question et, en cas d&#39;accréditation antérieure, être  pleinement au courant des connaissances exigées pour occuper ce poste</li>
<li>à un poste d&#39;exploitation autre  qu&#39;opérateur de la tranche&nbsp;0 dans une centrale quelconque, compter au  moins une année d&#39;expérience acquise en occupant le poste visé par l&#39;examen et  être pleinement au courant des connaissances exigées pour occuper ce poste à la  centrale en question</li>
</ol>
</li>
<li>Pour le poste d&#39;opérateur de la  tranche&nbsp;0, l&#39;examinateur en chef doit être ou avoir été accrédité par la  CCSN&nbsp;:
<ol>
<li>pour occuper le poste d&#39;opérateur  de la tranche&nbsp;0 à la centrale en question et, en cas d&#39;accréditation  antérieure, être pleinement au courant des connaissances exigées pour occuper  ce poste</li>
<li>à un poste d&#39;exploitation autre  qu&#39;opérateur de réacteur dans une centrale quelconque, compter au moins une  année d&#39;expérience acquise en occupant ce poste et être pleinement au courant  des connaissances exigées pour occuper ce poste à la centrale en question</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de formation démontrant et confirmant que l&#39;examinateur en chef possède et tient à jour les connaissances exigées des personnes actuellement accréditées occupant à la centrale en question le poste visé par l&#39;examen. Ce programme de formation devrait également comprendre la formation continue exigée des titulaires de ce poste, de la façon prescrite par le document RD-204.</p>
</div>
<h5>Examens d&#39;accréditation portant sur les habiletés</h5>
<p>L&#39;examinateur en chef d&#39;un examen d&#39;accréditation sur simulateur donné doit :</p>
<ol>
<li>connaître à fond les parties pertinentes du présent document applicables à la centrale nucléaire en question</li>
<li>être pleinement qualifié pour exercer les fonctions d&#39;examinateur</li>
</ol>
<div className="module col-md-12">
<p>Le titulaire de permis devrait s&#39;assurer que les examinateurs qui prennent part au processus d&#39;examen, y compris l&#39;examinateur en chef, ont tous réussi le programme de formation en place démontrant et confirmant que la personne est qualifiée pour exercer les fonctions d&#39;examinateur. Consulter également la section 5.0 du document RD-204.</p>
</div>
<ol start="3">
<li>être pleinement qualifié pour exercer les fonctions d&#39;examinateur en chef de l&#39;examen qui lui a été confié</li>
</ol>
<div className="module col-md-12">
<p>Avant qu&#39;un examinateur ne puisse diriger un examen, le titulaire de permis devrait s&#39;assurer que l&#39;examinateur a réussi un programme de formation en place démontrant et confirmant que l&#39;examinateur possède et tient à jour les connaissances et les compétences nécessaires pour exercer les fonctions d&#39;examinateur en chef d&#39;un examen donné.</p>
</div>
<ol start="4">
<li>avoir précédemment participé à titre d&#39;examinateur à l&#39;ensemble du processus d&#39;examen touchant au moins deux examens d&#39;accréditation initiale sur simulateur du même type pour le poste visé par l&#39;examen à la centrale en question, ou pour des candidats au poste de chef de quart en salle de commande ou des candidats au poste de chef de quart de centrale</li>
<li> bien connaître les techniques d&#39;évaluation employées lors des examens sur un simulateur pleine échelle</li>
<li> connaître à fond les attentes consignées en matière de rendement du personnel de quart accrédité à la centrale nucléaire en question</li>
<li>posséder une des compétences (a) ou (b) énumérées ci-dessous et applicables au poste visé par l&#39;examen :
<ol className="list-lower-alpha">
<li> Pour les postes d&#39;opérateur de réacteur, de chef de quart en salle de commande ou de chef de quart de centrale, l&#39;examinateur en chef doit :  <ol className="list-lower-roman">
<li> être ou avoir été accrédité par la CCSN pour occuper le poste visé par l&#39;examen à la centrale en question et, en cas d&#39;accréditation antérieure, être pleinement au courant des connaissances et des habiletés exigées pour occuper ce poste</li>
<li> être ou avoir été accrédité par la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de la tranche 0 dans une centrale quelconque, compter au moins une année d&#39;expérience acquise au poste visé par l&#39;examen et être pleinement au courant des connaissances et des habiletés exigées pour occuper ce poste à la centrale en question</li>
</ol>
</li>
<li> Pour le poste d&#39;opérateur de la tranche 0, l&#39;examinateur en chef doit :  <ol className="list-lower-roman">
<li> être ou avoir été accrédité par la CCSN pour occuper le poste d&#39;opérateur de la tranche 0 à la centrale en question et, en cas d&#39;accréditation antérieure, être pleinement au courant des connaissances et des habiletés exigées pour occuper ce poste</li>
<li> être ou avoir été accrédité par la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de réacteur dans une centrale quelconque, compter au moins une année d&#39;expérience acquise à ce poste et être pleinement au courant des connaissances et des habiletés exigées pour occuper ce poste à la centrale en question</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de formation démontrant et confirmant que l&#39;examinateur en chef possède et tient à jour les connaissances et les habiletés exigées des personnes actuellement accréditées occupant à la centrale en question le poste visé par l&#39;examen. Ce programme de formation devrait comprendre les rôles et les responsabilités propres aux titulaires du poste, les domaines opérationnels tels que la conception et l&#39;exploitation des systèmes de la centrale, le fonctionnement intégré des systèmes de la centrale, les panneaux de la salle de commande, les pratiques normales d&#39;exploitation en salle de commande et sur le terrain à la centrale nucléaire et les attentes de la direction de la centrale en ce qui concerne le rendement. Ce programme de formation devrait également comprendre la formation continue exigée des titulaires de ce poste, de la façon prescrite par le document RD-204.</p>
</div>
</li>  </ol>
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
<h3 id="sec5-2">5.2 Examinateurs</h3>
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
<h4 id="sec5-2-1">5.2.1 Responsabilités</h4>  <p>Les examinateurs participant à la  conception, à l&#39;élaboration, à la tenue, à la correction et à la notation des  examens d&#39;accréditation portant sur les connaissances et les habiletés doivent  être placés sous la direction de l&#39;examinateur en chef.</p>  <h5>Examens  d&#39;accréditation portant sur les connaissances</h5>  <p>Les examinateurs assignés à l&#39;équipe  chargée d&#39;un examen d&#39;accréditation écrit ou oral donné doivent&nbsp;:</p>  <ol>
<li>participer à la conception, à l&#39;élaboration  et à la correction de l&#39;examen</li>
<li>participer à la tenue de l&#39;examen  quand celui-ci se déroule oralement</li>
<li>obtenir les données nécessaires  du simulateur pleine échelle de la centrale afin de préparer les questions et  les réponses d&#39;examen</li>
<li>consigner et signaler toute  lacune importante constatée dans la documentation de la centrale lors de la  conception, de l&#39;élaboration, de la tenue et de la correction de l&#39;examen</li>
<li>consigner et signaler toute  lacune importante constatée dans les documents et le programme de formation de  la centrale pendant toute la durée du processus d&#39;examen</li>  </ol>  <h5>Examens  d&#39;accréditation portant sur les habiletés</h5>  <p>Les examinateurs assignés à l&#39;équipe  chargée d&#39;un examen d&#39;accréditation sur simulateur donné doivent&nbsp;:</p>  <ol>
<li>participer à la conception, à l&#39;élaboration,  à la tenue et à la notation de l&#39;examen conformément aux indications fournies  par l&#39;examinateur en chef</li>  </ol>  <div className="module col-md-12">
<p>Un examinateur, y compris un examinateur en cours de formation chargé d&#39;un examen d&#39;accréditation avec l&#39;examinateur en chef, devrait continuer d&#39;exercer les fonctions d&#39;examinateur pendant toute la durée du processus d&#39;examen.</p>  </div>  <ol start="2">
<li>attirer l&#39;attention de l&#39;examinateur  en chef sur tout défaut du simulateur susceptible d&#39;avoir une incidence sur la  simulation des scénarios d&#39;examen</li>
<li>noter la performance de chaque  candidat dans les guides d&#39;examen pendant la tenue d&#39;un examen</li>
<li>consigner et signaler toute  lacune importante constatée dans la documentation de la centrale lors de la  conception, de l&#39;élaboration, de la tenue et de la notation de l&#39;examen</li>
<li>consigner et signaler toute  lacune importante constatée dans les documents et le programme de formation de  la centrale pendant toute la durée du processus d&#39;examen</li>
<li>recommander à l&#39;examinateur en  chef d&#39;interrompre un scénario d&#39;examen, au besoin</li>  </ol>
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
<h4 id="sec5-2-2">5.2.2 Exigences relatives aux qualifications</h4>
<h5>Examens  d&#39;accréditation portant sur les connaissances</h5>
<p>Chaque examinateur assigné à l&#39;équipe  d&#39;examen chargée d&#39;un examen d&#39;accréditation écrit ou oral donné doit&nbsp;:</p>
<ol>
<li>connaître à fond les parties  pertinentes du présent document applicables à la centrale nucléaire en question</li>
<li>être pleinement qualifié pour  exercer les fonctions d&#39;examinateur </li>
</ol>
<div className="module col-md-12">
<p>Le titulaire de permis devrait s&#39;assurer que l&#39;examinateur qui prend part au processus d&#39;examen a réussi le programme de formation en place démontrant et confirmant que la personne est qualifiée pour exercer les fonctions d&#39;examinateur. Consulter également la section 5.0 du document RD-204.</p>
</div>
<ol start="3">
<li>posséder les qualifications,  les connaissances et les compétences requises pour concevoir, élaborer, donner  et corriger l&#39;examen d&#39;accréditation qui lui a été confié</li>
<li>pour les examens généraux,  connaître les principes scientifiques et les principes de fonctionnement de l&#39;équipement  exigés des personnes actuellement accréditées occupant à la centrale en  question le poste visé par l&#39;examen</li>
<li>posséder, pour les examens d&#39;accréditation  spécifiques à la centrale, une des compétences (a) ou (b) énumérées ci-dessous  et applicables au poste visé par l&#39;examen&nbsp;:
<ol>
<li>pour les postes d&#39;opérateur de  réacteur, de chef de quart en salle de commande ou de chef de quart de  centrale, posséder les compétences (i) et, le cas échéant, les compétences (ii),  que voici&nbsp;:
<ol>
<li>être ou avoir été accrédité par  la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de la tranche&nbsp;0 dans  une centrale quelconque et compter au moins une année d&#39;expérience à ce poste</li>
<li>à défaut d&#39;accréditation  actuelle ou antérieure de la CCSN à la centrale en question dans le poste visé  par l&#39;examen, être pleinement au courant des connaissances exigées pour occuper  ce poste à cette centrale</li>
</ol>
</li>
<li>pour le poste d&#39;opérateur de la  tranche&nbsp;0, posséder les compétences (i) et, le cas échéant, les  compétences (ii)&nbsp;:
<ol>
<li>être ou avoir été accrédité par  la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de réacteur dans une  centrale quelconque et compter au moins une année d&#39;expérience à ce poste</li>
<li>à défaut d&#39;accréditation  actuelle ou antérieure par la CCSN à la centrale en question à titre d&#39;opérateur  de la tranche&nbsp;0, être pleinement au courant des connaissances exigées pour  occuper ce poste à cette centrale</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de  formation démontrant et confirmant que l&#39;examinateur possède et tient à jour  les connaissances exigées des personnes actuellement accréditées occupant à la centrale  en question le poste visé par l&#39;examen. Ce programme de formation devrait  également comprendre la formation continue exigée des titulaires de ce poste,  de la façon prescrite par le document d&#39;application de la réglementation  RD-204. </p>
<p>Remarque : Les examinateurs qualifiés peuvent être aidés par des  spécialistes en la matière qui n&#39;ont pas toutes les qualifications pertinentes.</p>  </div>  </ol>  <ol start="6">
<li>en plus des exigences susmentionnées,  au moins un membre de l&#39;équipe d&#39;examen chargée d&#39;un examen d&#39;accréditation  spécifique à une centrale donnée doit&nbsp;:
<ol>
<li>connaître suffisamment le  fonctionnement des centrales CANDU pour veiller à ce que les questions et les  réponses d&#39;examen soient axées sur l&#39;exploitation</li>
<li>soit&nbsp;:
<ol>
<li>être actuellement accrédité, à  la centrale en question ou à une centrale semblable du même site, pour occuper  le poste visé par l&#39;examen ou à titre de chef de quart en salle de commande ou  de chef de quart de centrale OU</li>
<li>avoir été accrédité auparavant  à la centrale en question ou à une centrale semblable du même site, pour  occuper le poste visé par l&#39;examen ou à titre de chef de quart en salle de  commande ou de chef de quart de centrale, et posséder les connaissances exigées  des personnes actuellement accréditées occupant le poste visé par l&#39;examen à la  centrale en question </li>
</ol>
</li>
</ol>
</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de formation démontrant et confirmant que l&#39;examinateur possède et tient à jour les connaissances exigées des personnes actuellement accréditées occupant à cette centrale le poste visé par l&#39;examen. Ce programme de formation devrait comprendre la conception et l&#39;exploitation des systèmes de la centrale, le fonctionnement intégré des systèmes de la centrale, les panneaux de la salle de commande, les pratiques normales d&#39;exploitation en salle de commande et sur le terrain à la centrale nucléaire et les attentes de la direction de la centrale en ce qui concerne le rendement. Ce programme de formation devrait également comprendre la formation continue exigée des titulaires de ce poste, de la façon prescrite par le document d&#39;application de la réglementation RD-204. </p>  </div>  <h5>Examens d&#39;accréditation portant sur les habiletés</h5>  <p>Chaque examinateur assigné à l&#39;équipe  d&#39;examen chargée d&#39;un examen d&#39;accréditation sur simulateur donné doit&nbsp;:</p>  <ol>
<li>connaître à fond les parties  pertinentes du présent document applicables à la centrale nucléaire en question</li>
<li>être pleinement qualifié pour  exercer les fonctions d&#39;examinateur</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait s&#39;assurer que l&#39;examinateur qui prend part au processus d&#39;examen a réussi le programme de formation en place démontrant et confirmant que la personne est qualifiée pour exercer les fonctions d&#39;examinateur. Consulter également la section 5.0 du document d&#39;application de la réglementation RD-204.</p>  </div>  <ol start="3">
<li>bien connaître les techniques d&#39;évaluation  employées lors des examens sur un simulateur pleine échelle</li>
<li>posséder une des compétences  (a), (b) ou (c) énumérées ci-dessous, et pertinentes compte tenu du poste visé  par l&#39;examen&nbsp;:
<ol>
<li>pour les postes d&#39;opérateur de  réacteur, de chef de quart en salle de commande et de chef de quart de  centrale, posséder les compétences (i) et, le cas échéant, les compétences (ii),  que voici&nbsp;:
<ol>
<li>être ou avoir été accrédité par  la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de la tranche&nbsp;0 dans  une centrale quelconque et compter au moins une année d&#39;expérience à ce poste</li>
<li>à défaut d&#39;accréditation  actuelle ou antérieure de la CCSN à la centrale en question dans le poste visé  par l&#39;examen, être pleinement au courant des connaissances et des habiletés  exigées pour occuper ce poste à cette centrale</li>
</ol>
</li>
<li>pour le poste d&#39;opérateur de la tranche&nbsp;0, posséder les  compétences (i) et, le cas échéant, les compétences (ii), que voici&nbsp;:
<ol>
<li>être ou avoir été accrédité par  la CCSN à un poste d&#39;exploitation autre qu&#39;opérateur de réacteur dans une  centrale quelconque et compter au moins une année d&#39;expérience à ce poste;</li>
<li>à défaut d&#39;accréditation  actuelle ou antérieure par la CCSN à la centrale en question à titre d&#39;opérateur  de la tranche&nbsp;0, être pleinement au courant des connaissances et des  habiletés exigées pour occuper ce poste à cette centrale</li>
</ol>
</li>
<li>à défaut d&#39;une accréditation  actuelle ou antérieure par la CCSN à un poste d&#39;exploitation pertinent dans une  centrale quelconque, être pleinement au courant des connaissances et des  habiletés exigées des personnes occupant le poste visé par l&#39;examen à la  centrale en question. Le titulaire de permis doit avoir en place des processus  et des procédures pour s&#39;assurer que les examinateurs possèdent les  connaissances exigées des personnes actuellement accréditées occupant à cette  centrale le poste visé par l&#39;examen.</li>
</ol>
</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de formation démontrant et confirmant que l&#39;examinateur possède et tient à jour les connaissances et les habiletés exigées des personnes actuellement accréditées occupant à cette centrale le poste visé par l&#39;examen. Ce programme de formation devrait comprendre la conception et l&#39;exploitation des systèmes de la centrale, le fonctionnement intégré des systèmes de la centrale, les panneaux de la salle de commande, les pratiques normales d&#39;exploitation en salle de commande et sur le terrain à la centrale nucléaire et les attentes de la direction de la centrale en ce qui concerne le rendement. Ce programme de formation devrait également comprendre la formation continue exigée des titulaires de ce poste, de la façon prescrite par le document RD-204.</p>  </div>  <ol start="5">
<li>de plus, au moins un membre de  l&#39;équipe d&#39;examen chargée d&#39;un examen sur simulateur donné doit&nbsp;:
<ol>
<li>posséder des connaissances  détaillées et à jour sur les capacités du simulateur, ses limites de  modélisation et les défaillances d&#39;équipement et de systèmes qu&#39;il peut simuler</li>
<li>soit&nbsp;:
<ol>
<li>être actuellement accrédité, à  la centrale en question ou à une centrale semblable du même site, pour occuper  le poste visé par l&#39;examen ou à titre de chef de quart en salle de commande ou  de chef de quart de centrale OU</li>
<li>avoir été accrédité auparavant  à la centrale en question ou à une centrale semblable du même site, pour  occuper le poste visé par l&#39;examen ou à titre de chef de quart en salle de  commande ou de chef de quart de centrale, et posséder les connaissances exigées  des personnes actuellement accréditées occupant le poste visé par l&#39;examen à cette  centrale</li>
</ol>
</li>
</ol>
</li>  </ol>  <div className="module col-md-12">
<p>Le titulaire de permis devrait avoir en place un programme de formation démontrant et confirmant que l&#39;examinateur possède et tient à jour les connaissances et les habiletés exigées des personnes actuellement accréditées occupant à la centrale en question le poste visé par l&#39;examen. Ce programme de formation devrait comprendre la conception et l&#39;exploitation des systèmes de la centrale, le fonctionnement intégré des systèmes de la centrale, les panneaux de la salle de commande, les pratiques normales d&#39;exploitation en salle de commande et sur le terrain à la centrale nucléaire et les attentes de la direction de la centrale en ce qui concerne le rendement. Ce programme de formation devrait également comprendre la formation continue exigée des titulaires de ce poste, de la façon prescrite par le document RD-204. </p>  </div>
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
<h3 id="sec5-3">5.3 Chef de la formation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3.1"></div>
<h4 id="sec5-3-1">5.3.1 Responsabilités</h4>
<p>Le chef de la formation est  responsable de la mise en œuvre des exigences relatives aux examens d&#39;accréditation  portant sur les connaissances et les habiletés énoncées dans le présent  document.</p>
<h5>Examens  d&#39;accréditation portant sur les connaissances et les habiletés</h5>
<p>Le chef de la formation doit&nbsp;:</p>
<ol>
<li>veiller au respect des  exigences énoncées dans le présent document pendant tout le processus d&#39;examen  d&#39;accréditation</li>
<li>veiller au respect de l&#39;ensemble  des exigences relatives au contrôle de la confidentialité par tout le personnel,  tout au long du processus d&#39;examen d&#39;accréditation</li>
<li>pour chaque examen d&#39;accréditation,  affecter au moins deux examinateurs qualifiés à l&#39;équipe d&#39;examen et s&#39;assurer  que l&#39;un d&#39;eux est qualifié pour exercer les fonctions d&#39;examinateur en chef</li>
</ol>
<div className="module col-md-12">
<p>Le chef de la formation devrait veiller à ce que les examinateurs chargés d&#39;un examen d&#39;accréditation continuent d&#39;exercer les fonctions d&#39;examinateur pendant toute la durée du processus d&#39;examen. Ceci s&#39;applique aussi à l&#39;examinateur en cours de formation.</p>
</div>
<ol start="4">
<li>déterminer le besoin d&#39;affecter  des experts en la matière pour aider les examinateurs qualifiés assignés à l&#39;équipe  d&#39;examen</li>
<li>s&#39;assurer que les règles  concernant le contrôle de la documentation officielle sont respectées à tout  moment</li>
<li>déterminer et approuver,  conformément aux indications de la section 10, le  besoin d&#39;organiser oralement un examen supplémentaire donné, spécifique à la  centrale</li>
<li>examiner et approuver les  examens d&#39;accréditation portant sur les connaissances et les guides de  correction correspondants avant la tenue des examens</li>
<li>examiner et approuver le guide  de correction et les résultats d&#39;examen de chaque candidat subissant un examen  d&#39;accréditation donné portant sur les connaissances</li>
<li>examiner et approuver les  examens d&#39;accréditation portant sur les habiletés et les guides d&#39;examen  correspondants avant la tenue des examens</li>
<li>examiner et approuver les  guides d&#39;examen avant d&#39;attribuer des notes à un examen d&#39;accréditation donné portant  sur les habiletés</li>
<li>examiner et approuver les  résultats d&#39;examen de chaque candidat subissant un examen d&#39;accréditation donné  portant sur les habiletés</li>
<li>s&#39;assurer que la fidélité des  interventions sur simulateur satisfait aux exigences de conception de l&#39;examen  donné</li>
<li>s&#39;assurer que le simulateur  pleine échelle de la centrale satisfait aux exigences relatives aux capacités  de simulation énoncées à l&#39;annexe&nbsp;A.1 pour les examens d&#39;accréditation sur  simulateur</li>
<li>approuver la présence de  surveillants pendant la tenue des examens d&#39;accréditation portant sur les  habiletés</li>
<li>veiller à ce qu&#39;un exemplaire  de chaque examen autorisé, accompagné du guide de correction autorisé ou du  guide d&#39;examen autorisé correspondants, de la fiche de contrôle de l&#39;examen,  des fiches de contrôle des scénarios d&#39;examen et de tous les formulaires  applicables, soit communiqué à la CCSN à la demande de celle-ci après chaque  examen</li>
<li>veiller à ce que la CCSN soit  officiellement informée des notes de passage ou d&#39;échec de chaque candidat</li>
<li>aviser officiellement la CCSN  du calendrier provisoire de tous les examens d&#39;accréditation de l&#39;année civile  à venir au moins trois mois avant le début de l&#39;année en question, et informer  la CCSN sans délai de tout changement apporté à ce calendrier</li>
</ol>
<div className="module col-md-12">
<p>Tout changement apporté au calendrier d&#39;examen doit être notifié à la CCSN suffisamment d&#39;avance pour lui permettre de se préparer aux activités de vérification de la conformité requises par le processus d&#39;examen ou des parties de celui-ci, le cas échéant.</p>
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
<div id="5.3.2"></div>
<h4 id="sec5-3-2">5.3.2	Exigences relatives aux qualifications</h4>
<p>Le titulaire de permis doit s&#39;assurer qu&#39;il existe des processus et des procédures documentés précisant les qualifications (et le maintien des qualifications) exigées des chefs de la formation participant au processus d&#39;examen d&#39;accréditation à la centrale nucléaire en question.</p>
<h5>Examens d&#39;accréditation portant sur les connaissances et les habiletés</h5>
<p>Le chef de la  formation doit&nbsp;:</p>
<ol>
<li>être ou avoir été accrédité par  la CCSN à un poste d&#39;exploitation dans une centrale quelconque, ou disposer des  connaissances et de l&#39;expérience équivalentes</li>
<li>connaître à fond toutes les  parties du présent document liées aux examens d&#39;accréditation applicables à la  centrale nucléaire en question</li>
</ol>
<div className="module col-md-12">
<p>Si le chef de la formation n&#39;a jamais été accrédité par la CCSN mais qu&#39;il possède des connaissances et une expérience équivalentes du poste d&#39;exploitation, le titulaire de permis est censé disposer de documents démontrant de quelle façon le chef de la formation possède et tient à jour les capacités techniques et l&#39;expérience nécessaires aux examens d&#39;accréditation portant sur les connaissances et les habiletés.</p>
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
<div id="5.4"></div>
<h3 id="sec5-4">5.4 Membres de l&#39;équipe de soutien</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.1"></div>
<h4 id="sec5-4-1">5.4.1 Responsabilités</h4>  <p>Les membres de l&#39;équipe de soutien,  sous la direction de l&#39;examinateur en chef, sont chargés d&#39;appuyer les examens  d&#39;accréditation portant sur les habiletés durant la répétition et la validation  des scénarios d&#39;examen et lors de la tenue d&#39;un examen donné. </p>  <p>Le titulaire de permis doit veiller  à imposer des restrictions quant au nombre de membres de l&#39;équipe de soutien  présents dans la salle de commande et aux tâches qu&#39;ils doivent accomplir  durant la tenue d&#39;un examen donné. Ces restrictions doivent permettre aux  candidats de démontrer leur aptitude personnelle à surveiller l&#39;évolution des  conditions de la centrale, à constater des conditions anormales et à  diagnostiquer les défaillances.</p>  <h4>Examens  d&#39;accréditation portant sur les habiletés</h4>  <p>Durant le processus d&#39;examen d&#39;accréditation,  les membres de l&#39;équipe de soutien doivent&nbsp;:</p>  <ol>
<li>exécuter le rôle de l&#39;équipe d&#39;exploitation  en salle de commande de la centrale nucléaire, conformément aux consignes des  guides d&#39;examen</li>  </ol>  <div className="module col-md-12">
<p>Sauf instructions contraires de l&#39;examinateur en chef, les membres  de l&#39;équipe de soutien devraient uniquement&nbsp;:</p>
<ul>
<li>exécuter les activités  spécifiées dans le guide d&#39;examen</li>
<li>communiquer au candidat les  renseignements spécifiés dans le guide d&#39;examen</li>
<li>exécuter les actions  particulières demandées par le candidat</li>
</ul>
<p>Les membres de l&#39;équipe de soutien devraient agir conformément aux  guides d&#39;examen et aux qualifications pour lesquelles ils sont actuellement  accrédités, indépendamment des demandes formulées par le candidat.</p>  </div>  <ol start="2">
<li>diriger les activités ou jouer le rôle des opérateurs sur le terrain, conformément aux consignes des guides d&#39;examen</li>  </ol>  <div className="module col-md-12">
<p>Toute intervention sur le terrain demandée par le candidat qui ne  figure pas dans le guide d&#39;examen utilisé devra être exécutée conformément aux  indications fournies par l&#39;examinateur en chef, compte tenu du temps qui serait  nécessaire pour réaliser l&#39;intervention à la centrale.</p>
<p>Les membres de l&#39;équipe de soutien devraient demander des  éclaircissements si une demande du candidat est incomplète ou ambiguë, ou si  elle n&#39;a pas le degré de précision spécifié dans le guide d&#39;examen utilisé.</p>  </div>  <ol start="3">
<li>agir de façon à ne pas gêner ou exercer une influence négative sur la tenue de l&#39;examen, ou modifier l&#39;intention et la portée du scénario d&#39;examen</li>  </ol>  <div className="module col-md-12">
<p>Les membres de l&#39;équipe de soutien ne doivent faire aucune  suggestion aux candidats relativement au diagnostic des défaillances et aux  interventions que ceux-ci sont censés effectuer ni aux décisions qu&#39;ils sont  censés prendre. Les pratiques qui suivent sont jugées inacceptables&nbsp;:</p>
<ul>
<li>attirer l&#39;attention des  candidats sur des anomalies qu&#39;ils sont censés constater</li>
<li>diagnostiquer une défaillance  que les candidats sont censés diagnostiquer</li>
<li>de la part d&#39;une personne qui  joue le rôle d&#39;une autre personne accréditée pendant un scénario d&#39;examen,  recommander à un candidat une mesure corrective à prendre ou lui recommander la  marche à suivre dans n&#39;importe quelle situation dont les procédures d&#39;exploitation  approuvées ne traitent pas spécifiquement</li>
<li>corriger une erreur commise par  un candidat</li>
<li>adopter des attitudes  corporelles, un ton de la voix ou des expressions verbales inappropriés</li>
<li>modifier la configuration des  alarmes ou des messages sans avoir reçu l&#39;ordre de le faire par le candidat</li>
</ul>  </div>  <ol start="4">
<li>faire fonctionner ou demander à une personne qualifiée de faire fonctionner le simulateur pleine échelle de la centrale, conformément aux consignes des guides d&#39;examen</li>  </ol>  <div className="module col-md-12">
<p>Une personne ne peut être à la fois coordonnateur des opérateurs sur le terrain, opérateur du système d&#39;enregistrement audiovisuel et opérateur du simulateur.</p>  </div>  <ol start="5">
<li>durant les répétitions, la validation ou la tenue d&#39;un scénario d&#39;examen, attirer immédiatement l&#39;attention de l&#39;examinateur en chef sur toute lacune du simulateur, toute lacune constatée dans la documentation de la centrale ou autres circonstances susceptibles d&#39;avoir un impact sur la validité des scénarios d&#39;examen</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.2"></div>
<h4 id="sec5-4-2">5.4.2 Exigences relatives aux qualifications</h4>  <h5>Examens d&#39;accréditation portant sur les habiletés</h5>  <p>Chaque membre de l&#39;équipe de  soutien doit&nbsp;:</p>  <ol>
<li>connaître à fond les parties  pertinentes du présent document applicables à la centrale nucléaire en question</li>
<li>posséder les connaissances et  les compétences requises pour exécuter correctement et efficacement les rôles  qui lui sont attribués, conformément aux consignes des guides d&#39;examen</li>  </ol>  <p>Au moins un membre de l&#39;équipe de  soutien, chargé de faire faire fonctionner le simulateur durant l&#39;examen d&#39;accréditation,  doit posséder des connaissances détaillées et à jour sur les capacités du  simulateur, ses limites de modélisation et les défaillances d&#39;équipement et de  systèmes qu&#39;il peut simuler. </p>
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
<h2 id="sec6">6. Surveillants</h2>
<p>Le titulaire de permis doit avoir en place une politique, des processus et des procédures en ce qui concerne la participation des surveillants qui, en raison de leurs fonctions, doivent surveiller la tenue d&#39;un examen d&#39;accréditation sur simulateur.</p>
<div className="module col-md-12">
<p>Les membres du personnel de la CCSN ne sont pas considérés comme des surveillants et ne sont pas tenus de signer des engagements.</p>
</div>
<p>La politique, le processus et les  procédures du titulaire de permis doivent inclure les exigences relatives aux  engagements de confidentialité et au code de conduite des surveillants, et  doivent comprendre les conditions suivantes&nbsp;:</p>
<ol>
<li>Les surveillants ne peuvent  participer, de quelque façon que ce soit, à l&#39;administration d&#39;une partie  quelconque de l&#39;examen d&#39;accréditation, ni se mêler de la tenue de l&#39;examen.</li>
<li>Les surveillants ne feront  jamais de commentaires sur les habiletés d&#39;un candidat et ne participeront en  aucun cas à l&#39;évaluation des habiletés de celui-ci.</li>
<li>Les surveillants doivent  obtenir l&#39;approbation du chef de la formation avant la tenue de l&#39;examen d&#39;accréditation.</li>
<li>Les surveillants doivent signer  l&#39;engagement de confidentialité indiqué à la section 7 avant  d&#39;assister à la tenue de l&#39;examen d&#39;accréditation.</li>
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
<div id="7"></div>
<h2 id="sec7">7. Exigences de confidentialité</h2>
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
<h3 id="sec7-1">7.1 Politique et processus de confidentialité</h3>  <p>Le titulaire de permis doit avoir en place des politiques, des processus et des procédures concernant les exigences de confidentialité pour toutes les phases des examens d&#39;accréditation portant sur les connaissances et les habiletés, comprenant des engagements de confidentialité détaillés.</p>  <div className="module col-md-12">
<p>Les engagements de confidentialité devraient être semblables aux modèles présentés à l&#39;annexe D.1.</p>  </div>  <p>Les politiques, processus et  procédures documentés doivent comprendre des exigences pour&nbsp;:</p>  <ol>
<li>consigner par écrit les  exigences et les mesures matérielles, électroniques et administratives,  notamment celles élaborées spécifiquement pour le simulateur, qu&#39;il faut  appliquer pour réduire au minimum le risque de compromettre la confidentialité  des examens d&#39;accréditation</li>
<li>contrôler en tout temps tous  les examens d&#39;accréditation et l&#39;ensemble de la documentation connexe</li>
<li>s&#39;assurer qu&#39;aucun  renseignement sur le contenu d&#39;un examen d&#39;accréditation n&#39;est révélé, de  quelque façon que ce soit, aux candidats qui doivent subir l&#39;examen</li>
<li>veiller à ce que toute  discussion sur un examen d&#39;accréditation avec le personnel préposé aux examens  se déroule dans un lieu sûr afin d&#39;éviter de compromettre la confidentialité de  l&#39;examen</li>
<li>limiter l&#39;accès aux examens d&#39;accréditation  et aux documents d&#39;examen connexes aux personnes qui ont un besoin justifié d&#39;y  accéder</li>
<li>veiller à ce qu&#39;il y ait en  tout temps au moins une barrière qui  empêche l&#39;accès non autorisé aux examens et aux documents connexes</li>  </ol>  <div className="module col-md-12">
<p>Exemples de barrières acceptables&nbsp;:</p>
<ul>
<li>engagements de confidentialité  signés</li>
<li>pièce verrouillée, aux fenêtres  opaques, à laquelle n&#39;ont accès que les personnes ayant signé l&#39;engagement de  confidentialité pertinent</li>
<li>classeur, bureau ou coffre-fort  verrouillé, auxquels n&#39;ont accès que les personnes qui ont signé l&#39;engagement  de confidentialité pertinent</li>
<li>fichiers électroniques protégés  par mot de passe, auxquels n&#39;ont accès que les personnes ayant signé l&#39;engagement  de confidentialité pertinent</li>
<li>contrôle direct du matériel d&#39;examen  par une personne qui a signé l&#39;engagement de confidentialité pertinent</li>
<li>imprimante et photocopieur  sécurisés</li>
<li>poste de travail protégé par un  mot de passe</li>
</ul>  </div>  <ol start="7">
<li>s&#39;assurer que toutes les  ébauches, notes et tous les autres documents produits ou consultés pendant une  étape quelconque du processus d&#39;examen, sont traités de manière à éviter de  compromettre la confidentialité des examens</li>
<li>veiller à ce que toute personne  participant à une partie quelconque du processus d&#39;examen d&#39;accréditation dans  le cadre d&#39;un examen d&#39;accréditation oral, écrit ou sur simulateur, soit  informée&nbsp;:
<ol>
<li>des exigences et des mesures  matérielles, électroniques et administratives touchant son rôle dans l&#39;examen  ou une partie de celui-ci, et consignées par écrit par le titulaire de permis  pour garantir la confidentialité des examens</li>
<li>des exigences du processus d&#39;engagement  de confidentialité du titulaire de permis relatif aux examens d&#39;accréditation,  y compris les conséquences du non-respect de ces exigences</li>
<li>de l&#39;obligation de signer l&#39;engagement  de confidentialité du titulaire de permis</li>
</ol>
</li>
<li>veiller à ce que toute personne  participant à une étape quelconque du processus d&#39;examen et ayant une  présomption d&#39;accès non autorisé à de l&#39;information relative au contenu d&#39;un  examen donné, en informe immédiatement le chef de la formation ou l&#39;examinateur  en chef qui doit ouvrir une enquête sans délai. Dès que l&#39;enquête confirme qu&#39;il  y a eu bris de confidentialité, l&#39;examen en question ne doit pas être utilisé.</li>
<li>s&#39;assurer que tous les  candidats se présentant à un examen d&#39;accréditation sont informés des exigences  de l&#39;engagement de confidentialité du titulaire de permis relatif aux examens d&#39;accréditation,  y compris les conséquences du non-respect de ces exigences, et signent l&#39;engagement  de confidentialité du titulaire de permis</li>
<li>veiller à ce qu&#39;en cas de bris  de confidentialité, y compris le non-respect d&#39;un engagement signé, un  processus permette de déterminer s&#39;il convient de mettre fin immédiatement à l&#39;examen  et de ne plus l&#39;utiliser</li>  </ol>
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
<h3 id="sec7-2">7.2 Engagements de confidentialité</h3>  <p>Les engagements de confidentialité doivent stipuler les exigences énoncées à la section 7.1 concernant le rôle de la personne tenue de signer l&#39;engagement.</p>  <div className="module col-md-12">
<p>Les engagements de confidentialité devraient être semblables aux modèles présentés à l&#39;annexe D.1.</p>
<p>Les membres du personnel de la CCSN ne sont pas tenus de signer d&#39;engagements de confidentialité.</p>  </div>  <p>Avant de participer à une partie  quelconque du processus d&#39;examen d&#39;accréditation dans le cadre d&#39;un examen d&#39;accréditation  quel qu&#39;il soit, et avant la tenue de cet examen d&#39;accréditation, les personnes  suivantes doivent avoir signé un engagement de confidentialité certifiant qu&#39;elles  acceptent ces conditions&nbsp;:</p>  <ol>
<li>examinateurs et membres de l&#39;équipe  de soutien aux examens affectés ou nommés pour travailler de façon régulière à  la conception, à l&#39;élaboration et à la tenue d&#39;un examen d&#39;accréditation donné</li>
<li>personnes, autres que celles  définies au point&nbsp;1 ci-dessus, autorisées à participer à la conception, à  l&#39;élaboration et à la tenue d&#39;un examen d&#39;accréditation donné, comme les  experts en la matière et les surveillants</li>
<li>candidats qui doivent subir un  examen d&#39;accréditation</li>  </ol>
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
<h2 id="sec8" className="mrgn-tp-0">8.	Conservation des dossiers d&#39;examen d&#39;accréditation initiale</h2>
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
<h3 id="sec8-1" className="mrgn-tp-0">8.1	Dossiers d&#39;examens d&#39;accréditation portant sur les connaissances</h3>  <ol>
<li>Le titulaire de permis doit,  pour chaque examen écrit ou oral, conserver les dossiers qui suivent pendant au  moins cinq ans à partir de la date d&#39;approbation ou de signature&nbsp;:
<ol>
<li>l&#39;examen approuvé</li>
<li>le guide de correction autorisé</li>
<li>la fiche de contrôle de l&#39;examen</li>
<li>le formulaire du surveillant</li>
<li>les noms des personnes qui ont  préparé l&#39;examen</li>
<li>le nom et la signature de la  personne qui a approuvé l&#39;examen, avec la date de signature</li>
<li>le nom et la signature de la  personne qui a approuvé et qui a autorisé le guide de correction, avec la date  de signature</li>
<li>les cahiers de réponses des  candidats, dans le cas des examens écrits, et, s&#39;il y a lieu, les  enregistrements des candidats, dans le cas des examens oraux</li>
<li>les engagements de  confidentialité signés</li>
<li>tout rapport approuvé  consignant l&#39;analyse des résultats de l&#39;examen</li>
</ol>
</li>
<li>Pendant la période prescrite au  paragraphe 14(5) du Règlement sur les installations nucléaires de catégorie&nbsp;I, le titulaire de permis doit conserver, pour chaque candidat, un  dossier des examens écrits et, s&#39;il y a lieu, des examens oraux subis par  celui-ci contenant&nbsp;:
<ol>
<li>le titre du poste pour lequel  le candidat postule</li>
<li>le titre et la date de chaque  examen</li>
<li>le guide de correction autorisé  rempli pour chaque examen subi par le candidat</li>
<li>tous les documents relatifs à l&#39;issue  de tout appel concernant les résultats d&#39;examen du candidat</li>
</ol>
</li>  </ol>
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
<h3 id="sec8-2"  className="mrgn-tp-0">8.2 Dossiers d&#39;examens d&#39;accréditation portant sur les habiletés</h3>  <ol>
<li>Pour chaque examen d&#39;accréditation  sur simulateur, le titulaire de permis doit conserver les dossiers qui suivent  pendant au moins cinq ans à compter de la date finale de tenue de l&#39;examen&nbsp;:
<ol>
<li>un dossier d&#39;examen approuvé  comprenant&nbsp;:
<ol>
<li>les guides  d&#39;examen approuvés</li>
<li>les fiches de contrôle de l&#39;examen  et des scénarios d&#39;examen</li>
<li>les noms des personnes qui ont préparé  les guides d&#39;examen</li>
<li>le nom et la signature de la  personne qui a approuvé les guides d&#39;examen et le dossier d&#39;examen, ainsi que  la date de signature</li>
</ol>
</li>
<li>les guides  d&#39;examen autorisés ainsi que le nom et la  signature de la personne qui les a autorisés et la date de signature</li>
<li>les guides d&#39;examen évalués par  les examinateurs et toutes les données recueillies pendant l&#39;examen, y compris  les enregistrements audiovisuels</li>
<li>les engagements de  confidentialité signés</li>
<li>tout rapport approuvé  consignant l&#39;analyse des résultats de l&#39;examen</li>
</ol>
</li>
<li>Pendant la période prescrite au  paragraphe 14(5) du Règlement sur les installations nucléaires de catégorie&nbsp;I, le titulaire de permis doit conserver, pour chaque candidat, un  dossier des examens subis par celui-ci contenant&nbsp;:
<ol>
<li>le titre du poste pour lequel  le candidat postule</li>
<li>le type et la date de chaque  examen</li>
<li>la trousse d&#39;évaluation finale  du candidat pour chaque examen, composée des documents spécifiés à la  section&nbsp;18.5 du présent document</li>
<li>tous les documents relatifs à l&#39;issue  de tout appel concernant les résultats d&#39;examen du candidat</li>
</ol>
</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartII"></div>
<h2 id="part-ii" className="mrgn-tp-0">Partie II : Exigences relatives aux examens d&#39;accréditation portant sur les connaissances </h2>  <p>Cette partie établit les examens d&#39;accréditation  initiale écrits (ou les examens d&#39;accréditation oraux lorsqu&#39;une autorisation  préalable a été donnée) exigés et les exigences relatives à la conception, à l&#39;élaboration,  à la tenue et à la correction des examens que doivent réussir les candidats aux  postes d&#39;opérateur de réacteur (OR), d&#39;opérateur de la tranche&nbsp;0 (OT0), de  chef de quart de centrale (CQC) et de chef de quart en salle de commande  (CQSC). </p>  <p>Chaque candidat doit réussir les  examens portant sur les connaissances de manière séquentielle et obtenir une  note de passage avant de se présenter aux examens d&#39;accréditation portant sur  les habiletés.</p>  <div className="module col-md-12">
<p>Consulter également la partie III du document d&#39;application de la réglementation RD-204.</p>  </div>
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
<h2 id="sec9" className="mrgn-tp-0">9. Examens d&#39;accréditation écrits et oraux</h2>  <p>Les examens d&#39;accréditation requis  portant  sur les connaissances exigés doivent comporter les éléments suivants&nbsp;:</p>  <ol>
<li>Un examen général&nbsp;: Cet examen  doit vérifier les connaissances de base qu&#39;il faut avoir pour occuper le poste  à la centrale nucléaire où l&#39;accréditation s&#39;applique, et porter sur les  notions scientifiques applicables à l&#39;exploitation de cette centrale et les  principes de fonctionnement de l&#39;équipement de celle-ci.</li>
<li>Un examen spécifique à la  centrale&nbsp;: Cet examen doit vérifier les connaissances qu&#39;il faut avoir pour  occuper le poste pertinent à l&#39;exploitation de la centrale nucléaire où l&#39;accréditation  s&#39;applique, et porter sur les principes de la sûreté nucléaire et leur  application à la centrale, ainsi que sur l&#39;exploitation intégrée des systèmes  de la centrale, y compris, s&#39;il y a lieu, les interactions entre les systèmes d&#39;une  tranche et ceux des autres tranches et de la tranche 0, y compris les documents  d&#39;exploitation pertinents.</li>
<li>Un examen supplémentaire  spécifique à la centrale&nbsp;: Cet examen doit vérifier les connaissances  spécifiques que doivent posséder les titulaires du poste de CQC et de CQSC, en  plus de celles d&#39;un OR ou d&#39;un OT0 selon le cas. Ceci doit comprendre l&#39;analyse  des accidents et l&#39;exploitation en conditions d&#39;urgence. </li>  </ol>  <p>La conception et l&#39;élaboration de  chaque examen spécifique exigé pour occuper un poste donné sont décrites aux  sections 9.3 à  10.6.</p>
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
<h3 id="sec9-1" className="mrgn-tp-0">9.1	Nombre total de points et temps alloué par examen d&#39;accréditation </h3>  <p>En prévision de la conception et de l&#39;élaboration des examens (sections 9.3 à 10.6), le tableau 2 dresse la liste des examens d&#39;accréditation exigés ainsi que les candidats auxquels l&#39;examen s&#39;applique. Le tableau 2 présente également le nombre total de points exigés, la durée estimée de chaque examen (prévue lors de la conception) et le temps maximal alloué aux candidats pour l&#39;examen.</p>  <table>
<caption className="text-left">
Tableau 2 : Nombre de points et durée des divers examens d&#39;accréditation des centrales nucléaires actuellement autorisées
</caption>
<tr>
<th>Examen d&#39;accréditation et candidat concerné</th>
<th>Nombre total de points attribué par examen</th>
<th>Durée estimée de l&#39;examen d&#39;après la conception (heures)</th>
<th>Temps maximal alloué aux candidats par examen (heures)</th>
</tr>
<tr>
<td colSpan="4" className="background-accent">Examens généraux</td>
</tr>
<tr>
<td>pour les candidats OR, CQC et CQSC </td>
<td>100</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>uniquement pour les candidats de la T0</td>
<td>75</td>
<td>2,25</td>
<td>3</td>
</tr>
<tr>
<td colSpan="4" className="background-accent">Examens spécifiques à la centrale</td>
</tr>
<tr>
<td>pour les candidats OR, CQC et CQSC </td>
<td>100</td>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>uniquement pour les candidats de la T0 </td>
<td>75</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td colSpan="4" className="background-accent">Examens supplémentaires spécifiques à la centrale</td>
</tr>
<tr>
<td>pour les candidats CQC et CQSC (aux centrales sans tranche 0)</td>
<td>60</td>
<td>2</td>
<td>3,5</td>
</tr>
<tr>
<td>pour les candidats CQSC (aux centrales avec une tranche 0)</td>
<td>80</td>
<td>2,8</td>
<td>4,5</td>
</tr>
<tr>
<td><p className="mrgn-tp-0">pour les candidats CQSC (aux centrales avec une installation d&#39;extraction du tritium)</p>
<div className="module">
<p>Consulter les sections pertinentes de la partie III du document RD-204 relatives aux installations d&#39;extraction du tritium).</p>
</div></td>
<td>90</td>
<td>3,2</td>
<td>5</td>
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
<div id="9.2"></div>
<h3 id="sec9-2"  className="mrgn-tp-0">9.2 Enveloppe d&#39;examen limitative </h3>  <p>Les examens d&#39;accréditation écrits  et oraux doivent être conçus pour examiner les connaissances exigées pour  occuper un poste à la centrale nucléaire particulière pour laquelle l&#39;accréditation  initiale est demandée. Chaque examen doit s&#39;assurer que les objectifs de  connaissance de chaque poste, élaborés conformément à une ASF, sont évalués de  manière adéquate en fonction des sujets applicables au sein des différents  groupes de sujets exigés et décrits aux annexes B.1 à B.11. Les exigences  relatives à la conception sont précisées à la section 9.3, portant  sur la&nbsp;conception et l&#39;élaboration des examens&nbsp;».</p>  <p>Les titulaires de permis doivent s&#39;assurer  que :</p>  <ol>
<li> Les objectifs de connaissance spécifiques à leur centrale nucléaire sont élaborés, documentés et régulièrement actualisés, conformément aux principes d&#39;une ASF. Les titulaires de permis doivent informer la CCSN de tout changement important apporté à leur modèle d&#39;objectifs de connaissance approuvé par la CCSN et pouvant avoir une incidence sur la formation et les enveloppes d&#39;examen.
<div className="module">
<p>Les objectifs de connaissance ou objectifs de formation sont propres  à chaque centrale et sont élaborés conformément à une ASF. Le modèle d&#39;objectifs  utilisé par les centrales nucléaires à plusieurs tranches a été approuvé par la  CCSN en décembre 2003. Les centrales à une seule tranche utilisent le document  intitulé Objectifs génériques de  connaissance des systèmes d&#39;une centrale nucléaire pour opérateurs de salle de  commande (OGCS), pour l&#39;élaboration des objectifs de connaissance propres à  leur centrale. </p>
<p>Les détails et le processus à utiliser par les titulaires de permis  pour informer la CCSN des changements éventuellement apportés à ce modèle ont  en outre été confirmés dans une lettre datée du 14&nbsp;juin 2010. Ces  documents sont énumérés à la section «&nbsp;Références&nbsp;».</p>
</div>
</li>
<li>Les objectifs de connaissance sélectionnés pour un poste donné doivent répondre aux critères suivants :
<ol className="list-lower-alpha">
<li>chaque objectif sélectionné appuie une ou plusieurs tâches considérées comme difficiles et importantes dans l&#39;analyse des emplois et des tâches, axée sur l&#39;ASF actualisée et approuvée de la centrale nucléaire, et liée au poste
<div className="module">
<p>Dans le cadre de la phase d&#39;analyse des emplois et des tâches de l&#39;ASF pour chaque poste, il faudrait utiliser un système d&#39;évaluation DIF (D = niveau de difficulté, I = niveau d&#39;importance, F = fréquence d&#39;utilisation).</p>
</div>
</li>
<li> les objectifs sélectionnés couvrent toutes les connaissances exigées pour que la personne exerce les fonctions du poste de façon compétente et en toute sécurité</li>
<li> les objectifs sélectionnés se prêtent à la formulation de questions d&#39;examen d&#39;accréditation pour le poste</li>
</ol>
</li>
<li>Les groupes de sujets couvrent adéquatement les différents domaines de connaissances visés par le modèle d&#39;objectifs de connaissance de chaque poste devant être accrédité.</li>  </ol>  <p>La source des objectifs de connaissance applicables, se prêtant à la formulation de questions d&#39;examen pour un poste donné, est indiquée dans la deuxième colonne du tableau 3. Le tableau 3 indique également les examens d&#39;accréditation requis pour chaque poste.</p>  <table>
<caption className="text-left">
Tableau 3 : Objectifs de connaissance et examens exigés en fonction du poste et de la centrale nucléaire
</caption>
<tr>
<th>Poste</th>
<th>Source des objectifs de connaissance pour les examens d&#39;accréditation</th>
<th>Spécifiques à la centrale nucléaire</th>
<th>Examens d&#39;accréditation écrits exigés</th>
</tr>
<tr>
<td>OR</td>
<td>OR</td>
<td>À chaque centrale</td>
<td>OR général + OR spécifique à la centrale</td>
</tr>
<tr>
<td>OT0</td>
<td>OT0</td>
<td>À chaque centrale à plusieurs tranches avec une tranche 0</td>
<td>OT0 général + OT0 spécifique à la centrale</td>
</tr>
<tr>
<td>CQC</td>
<td>CQC + OR</td>
<td>À chaque centrale à une tranche</td>
<td>OR général + OR spécifique à la centrale + CQC supplémentaire spécifique à la centrale</td>
</tr>
<tr>
<td>CQSC</td>
<td>CQSC  + OR</td>
<td>À chaque centrale à plusieurs tranches sans tranche 0</td>
<td>OR général + OR spécifique à la centrale + CQSC supplémentaire spécifique à la centrale</td>
</tr>
<tr>
<td>CQSC</td>
<td>CQSC + OT0 + OR</td>
<td>À chaque centrale à plusieurs tranches avec une tranche 0</td>
<td>OR général + OR spécifique à la centrale + CQSC supplémentaire spécifique à la centrale avec un volet OT0</td>
</tr>  </table>  <div className="module">
<p>Les candidats au poste de CQC aux centrales à plusieurs tranches doivent suivre le programme de formation et passer les examens d&#39;accréditation des CQSC avant de satisfaire aux autres exigences visant l&#39;accréditation des CQC. Consulter la partie III, sous-partie E du document  d&#39;application de la réglementation RD-204. Pour l&#39;instant, les CQSC ne doivent pas passer d&#39;examens d&#39;accréditation supplémentaires pour occuper les fonctions de GQ dans une centrale à plusieurs tranches.</p>  </div>
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
<h3 id="sec9-3"  className="mrgn-tp-0">9.3 Conception des examens </h3>  <p>Les examens d&#39;accréditation portant  sur les connaissances doivent être conçus et élaborés pour être menés sous  forme d&#39;épreuves écrites. En ce qui concerne les centrales nucléaires ayant nécessité  l&#39;autorisation préalable de la CCSN, le même examen peut être mené oralement,  conformément aux indications de la section 10.</p>  <p>Les membres de l&#39;équipe d&#39;examen,  sous la direction de l&#39;examinateur en chef, doivent concevoir les questions d&#39;examen,  le guide de correction de l&#39;examen, la fiche de contrôle de l&#39;examen et l&#39;examen  final pour chaque poste, conformément aux exigences énoncées ci-dessous.</p>
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
<h4 id="sec9-3-1" className="mrgn-tp-0">9.3.1	Examens généraux destinés aux candidats OR, OT0, CQC et CQSC</h4>  <p>L&#39;équipe d&#39;examen doit concevoir  les questions d&#39;examen conformément aux instructions qui suivent.</p>  <ol>
<li>Pour chaque groupe de sujets  mentionné à l&#39;annexe&nbsp;B.1 (pour les candidats OR, CQC ou CQSC) ou à l&#39;annexe&nbsp;B.2  (pour les candidats OT0), choisir un ou plusieurs sujets d&#39;examen précis à  traiter</li>
<li>Pour chaque sujet spécifique  sélectionné, préparer des questions dont les réponses valent le nombre de  points attribués au sujet, selon les critères suivants&nbsp;:
<ol className="list-lower-alpha">
<li>Au moins 80&nbsp;% des  questions de l&#39;examen d&#39;accréditation doivent être conçues à partir de rien et  ne peuvent être fondées sur des questions précédemment utilisées lors d&#39;un  examen, d&#39;une épreuve, d&#39;une évaluation du candidat ou dans le cadre de la  formation.</li>
<li>Pas plus de 20&nbsp;% des  questions de l&#39;examen d&#39;accréditation peuvent être fondées sur des questions  précédemment utilisées. Toutes les questions réutilisées doivent être modifiées  en profondeur et aucune d&#39;entre elles ne peut avoir été vue par les candidats  auparavant.</li>
<li>Dans toute la mesure du  possible, préparer des questions mesurant la compréhension intégrée ou le  niveau supérieur de connaissances requis des OR et des&nbsp;OT0 pour qu&#39;ils  puissent s&#39;acquitter de leurs tâches avec compétence.</li>
<li>Choisir les parties pertinentes  des objectifs de connaissance relatifs aux notions scientifiques pertinentes et  aux principes de fonctionnement de l&#39;équipement, approuvés par la CCSN, qui  serviront à formuler les questions sur le sujet correspondant, conformément aux  directives suivantes&nbsp;:
<div className="module">
<p>Les objectifs de connaissance ou objectifs de formation sont propres à chaque centrale et sont élaborés conformément à une ASF. Le modèle d&#39;objectifs utilisé par les centrales nucléaires à plusieurs tranches a été approuvé par la CCSN en décembre 2003. Les centrales à une seule tranche devraient utiliser le document intitulé Objectifs génériques de connaissance des systèmes d&#39;une centrale nucléaire pour opérateurs de salle de commande (OGCS) pour l&#39;élaboration des objectifs de connaissance propres à leur centrale.</p>
</div>
<ol className="list-lower-roman">
<li>dans toute la mesure du possible, sélectionner des objectifs exigeant une compréhension intégrée ou des connaissances de niveau supérieur
<div className="module">
<p>Afin d&#39;examiner les connaissances de niveau supérieur, les questions d&#39;examen devraient vérifier le degré de compréhension, d&#39;application ou d&#39;analyse cognitive défini par la taxonomie de Bloom. Par exemple, les questions demandant aux candidats de « décrire » ou d&#39;« expliquer » seraient classées dans la catégorie des objectifs de connaissance de niveau supérieur, tandis que celles demandant d&#39;« énumérer » ou d&#39;« indiquer » seraient classées dans la catégorie des objectifs de niveau inférieur.</p>
</div>
</li>
<li>ii.	ne pas utiliser textuellement les objectifs pour formuler les questions
<div className="module">
<p>Vous pouvez trouver des idées de questions dans les documents  suivants&nbsp;:</p>
<ul>
<li>rapports d&#39;événements importants  survenus à la centrale et dans l&#39;ensemble du secteur</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>procédures administratives du  titulaire de permis et de la centrale et documents connexes touchant l&#39;exploitation  et l&#39;entretien de la centrale</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li>S&#39;assurer que chaque question est axée sur l&#39;exploitation</li>
<li>Élaborer l&#39;examen et le guide de correction correspondant de la façon indiquée à la section 9.4</li>  </ol>
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
<h4 id="sec9-3-2" className="mrgn-tp-0">9.3.2 Examens propres à la centrale pour les candidats au poste d&#39;OR</h4>  <p>L&#39;équipe d&#39;examen doit concevoir  les questions d&#39;examen conformément aux instructions qui suivent.</p>  <ol>
<li>Pour chaque groupe de sujets  mentionné à l&#39;annexe&nbsp;B.3,  choisir un ou plusieurs sujets d&#39;examen précis à traiter</li>
<li>Attribuer un nombre de points à  chaque sujet sélectionné afin que le nombre total de points pour le groupe se  situe dans la plage indiquée à côté du groupe à l&#39;annexe B.3</li>
<li>Pour chaque sujet sélectionné à  l&#39;étape 1, choisir à l&#39;annexe B.4 un ou plusieurs groupes de connaissances à  utiliser pour préparer les questions d&#39;examen correspondantes et, à l&#39;aide de  la matrice de conception d&#39;examen (MCE) précisant les groupes de sujets  verticalement et les groupes de connaissances horizontalement (de la façon  présentée à l&#39;annexe&nbsp;B.8), distribuer dans la matrice le nombre de points  pour le sujet entre les domaines de connaissances sélectionnées. S&#39;assurer que  la note totale attribuée aux divers groupes de connaissances se situe dans la  plage indiquée à côté du groupe à l&#39;annexe B.4</li>
<li>Pour chaque cellule de la MCE  où figurent des points, préparer des questions pour lesquelles les réponses  équivalent aux points indiqués dans la cellule, selon les critères  suivants&nbsp;:
<ol>
<li>Au moins 80&nbsp;% des  questions de l&#39;examen d&#39;accréditation doivent être conçues à partir de rien et  ne peuvent être fondées sur des questions précédemment utilisées lors d&#39;un  examen, d&#39;une épreuve, d&#39;une évaluation du candidat ou dans le cadre de la  formation.</li>
<li>Pas plus de 20&nbsp;% des  questions de l&#39;examen d&#39;accréditation peuvent être fondées sur des questions  précédemment utilisées. Toutes les questions réutilisées doivent être modifiées  en profondeur et aucune d&#39;entre elles ne peut avoir été vue par les candidats  auparavant.</li>
<li>Dans toute la mesure du  possible, préparer des questions mesurant la compréhension intégrée ou le  niveau supérieur de connaissances requis des OR pour s&#39;acquitter de leurs  tâches avec compétence.
<div className="module">
<p>Afin d&#39;examiner les connaissances de niveau supérieur, les questions d&#39;examen devraient vérifier le degré de compréhension, d&#39;application ou d&#39;analyse cognitive défini par la taxonomie de Bloom. Par exemple, les questions demandant aux candidats de « décrire » ou d&#39;« expliquer » seraient classées dans la catégorie des objectifs de connaissance de niveau supérieur, tandis que celles demandant d&#39;« énumérer » ou d&#39;« indiquer » seraient classées dans la catégorie des objectifs de niveau inférieur. La compréhension intégrée ou les connaissances de niveau supérieur sont évaluées au moyen de questions demandant au candidat d&#39;énoncer, d&#39;analyser et de décrire.</p>
</div>
</li>
<li>Si une cellule est associée avec les objectifs génériques de connaissance des systèmes (OGCS) d&#39;une centrale nucléaire ou les objectifs de connaissance en matière de radioprotection, sélectionner les éléments individuels des objectifs pertinents qui serviront à formuler les questions sur les sujets correspondants, conformément aux directives suivantes :
<ol className="list-lower-roman">
<li>dans toute la mesure du possible, sélectionner des OGCS selon l&#39;annexe D.</li>
<li> éviter l&#39;utilisation répétée d&#39;un objectif quelconque dans un groupe de connaissances pour formuler des questions sur des sujets différents</li>
<li> ne pas utiliser textuellement les objectifs pour formuler les questions
<div className="module">
<p>L&#39;annexe&nbsp;B.4 et l&#39;annexe&nbsp;D.2 présentent les exigences  relatives aux OGCS. Le document intitulé Objectifs  génériques de connaissance des systèmes d&#39;une centrale nucléaire sert de  manuel de référence et de guide d&#39;accompagnement à l&#39;intention des  utilisateurs.</p>
<p>Ces documents définissent les connaissances relatives aux systèmes  et aux procédures de la centrale que les OR des centrales doivent posséder pour  s&#39;acquitter de leurs tâches avec compétence. Ensemble, les OGCS traitent des  groupes de connaissances suivants&nbsp;: conception des systèmes, instrumentation  et contrôle, exploitation des systèmes, exploitation générale de la tranche et exploitation  en cas d&#39;urgence.</p>
<p>Les OGCS fournissent un modèle permettant aux centrales nucléaires d&#39;élaborer  des objectifs de formation propres à chaque centrale, à l&#39;intention des  candidats OR. Le guide de l&#39;utilisateur présente des directives détaillées pour  la préparation d&#39;objectifs de formation sur les systèmes propres à chaque  centrale et l&#39;élaboration du matériel de formation à l&#39;appui. </p>
</div>
<div className="module">
<p>Vous pouvez trouver des idées de  questions dans les documents suivants&nbsp;:</p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans l&#39;ensemble du secteur</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>procédures administratives du  titulaire de permis et de la centrale et documents connexes touchant l&#39;exploitation  et l&#39;entretien de la centrale</li>
<li>données réelles du simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li>S&#39;assurer que chaque question concernant les systèmes et procédures de la centrale se situe dans la portée des OGCS pertinents ou dans le cadre des objectifs de connaissance spécifiques à la centrale et qui en sont dérivés.
<div className="module">
<p>Pour toute question nécessitant des données spécifiques de la  centrale&nbsp;:</p>
<ul>
<li>obtenir les données de la  centrale ou de simulation nécessaires pour terminer la formulation de la  question</li>
<li>préciser les aspects des  données obtenues qu&#39;il pourrait être intéressant d&#39;explorer dans la question et  terminer la formulation de la question</li>
</ul>
</div>
</li>
<li>Élaborer l&#39;examen et le guide de correction correspondant de la façon indiquée à la section 9.4.</li>  </ol>
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
<h4 id="sec9-3-3" className="mrgn-tp-0">9.3.3 Examens propres à la centrale pour les candidats au poste d&#39;opérateur de la tranche 0 </h4>  <p>L&#39;équipe d&#39;examen doit concevoir  les questions d&#39;examen conformément aux instructions qui suivent.</p>  <ol>
<li>Pour chaque groupe de sujets  mentionné à l&#39;annexe&nbsp;B.5, choisir un ou plusieurs sujets d&#39;examen précis à  traiter.</li>
<li>Attribuer un nombre de points à  chaque sujet sélectionné afin que le nombre total de points pour le groupe se  situe dans la plage indiquée à côté du groupe à l&#39;annexe&nbsp;B.5.</li>
<li>Pour chaque sujet sélectionné à  l&#39;étape 1 ci-dessus, choisir à l&#39;annexe B.6 un ou plusieurs groupes de  connaissances à utiliser pour préparer les questions d&#39;examen correspondantes  et, à l&#39;aide de la matrice de conception d&#39;examen (MCE) précisant les groupes  de sujets verticalement et les groupes de connaissances horizontalement (de la  façon présentée à l&#39;annexe&nbsp;B.8), distribuer dans la matrice le nombre de  points pour le sujet entre les domaines de connaissances sélectionnées. S&#39;assurer  que la note totale attribuée aux divers groupes de connaissances se situe dans  la plage indiquée à côté du groupe à l&#39;annexe B.6.</li>
<li>Pour chaque cellule de la MCE  où figurent des points, préparer des questions pour lesquelles les réponses  équivalent aux points indiqués dans la cellule, selon les critères  suivants&nbsp;:
<ol>
<li>Au moins 80&nbsp;% des  questions de l&#39;examen d&#39;accréditation doivent être conçues à partir de rien et  ne peuvent être fondées sur des questions précédemment utilisées lors d&#39;un  examen, d&#39;une épreuve, d&#39;une évaluation du candidat ou dans le cadre de la  formation.</li>
<li>Pas plus de 20&nbsp;% des  questions de l&#39;examen d&#39;accréditation peuvent être fondées sur des questions  précédemment utilisées. Toutes les questions réutilisées doivent être modifiées  en profondeur et aucune d&#39;entre elles ne peut avoir été vue par les candidats  auparavant.</li>
<li>Dans toute la mesure du  possible, préparer des questions mesurant la compréhension intégrée ou le  niveau supérieur de connaissances requis des OT0 pour qu&#39;ils puissent s&#39;acquitter  de leurs tâches avec compétence.
<div className="module">
<p>Afin d&#39;examiner les connaissances de niveau supérieur, les questions  d&#39;examen devraient vérifier le degré de compréhension, d&#39;application ou d&#39;analyse  cognitive défini par la taxonomie de Bloom.  Par exemple, les questions demandant aux candidats de «&nbsp;décrire&nbsp;»  ou d&#39;«&nbsp;expliquer&nbsp;» seraient classées dans la catégorie des objectifs  de connaissance de niveau supérieur, tandis que celles demandant d&#39;«&nbsp;énumérer&nbsp;»  ou d&#39;«&nbsp;indiquer&nbsp;» seraient classées dans la catégorie des objectifs  de niveau inférieur. La compréhension intégrée ou les connaissances de niveau supérieur  sont évaluées au moyen de questions demandant au candidat d&#39;énoncer, d&#39;analyser  et de décrire.</p>
</div>
</li>
<li>Si une cellule est associée aux OGCS ou aux objectifs de connaissance en matière de radioprotection, sélectionner les éléments individuels des objectifs pertinents qui serviront à formuler les questions sur les sujets correspondants, conformément aux lignes directrices suivantes :
<ol>
<li>dans toute la mesure du  possible, sélectionner des&nbsp;OGCS selon l&#39;annexe D.4</li>
<li>éviter l&#39;utilisation répétée d&#39;un  objectif quelconque dans un groupe de connaissances pour formuler des questions  sur des sujets différents</li>
<li>ne pas utiliser textuellement  les objectifs pour formuler les questions</li>
</ol>
</li>
</ol>
</li>
<li> S&#39;assurer que chaque question concernant les systèmes et procédures de la centrale se situe dans la portée des OGCS pertinents ou dans le cadre des objectifs de connaissance spécifiques à la centrale et qui en sont dérivés.
<div className="module">
<p>Pour toute question nécessitant des données spécifiques de la centrale :</p>
<ul>
<li>Obtenir les données de la centrale ou de simulation nécessaires pour terminer la formulation de la question</li>
<li>Préciser les aspects des données obtenues qu&#39;il pourrait être intéressant d&#39;explorer dans la question et terminer la formulation de la question</li>
</ul>
</div>
</li>
<li>Élaborer l&#39;examen et le guide de correction correspondant de la façon indiquée à la section 9.4. </li>  </ol>
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
<h4 id="sec9-3-4" className="mrgn-tp-0">9.3.4 Examens supplémentaires propres à la centrale pour les candidats CQC et CQSC</h4>  <p>L&#39;équipe d&#39;examen doit concevoir les questions d&#39;examen conformément aux instructions qui suivent.</p>  <ol>
<li>Pour chaque groupe de sujets  mentionné à l&#39;annexe&nbsp;B.7, choisir un ou plusieurs sujets d&#39;examen précis à  traiter.</li>
<li>Attribuer un nombre de points à  chaque sujet sélectionné afin que le nombre total de points pour le groupe se  situe dans la plage indiquée à côté du groupe à l&#39;annexe&nbsp;B.7.</li>
<li>Pour chaque sujet spécifique  sélectionné, préparer des questions dont les réponses équivalent au nombre de  points attribués au sujet, selon les lignes directrices qui suivent&nbsp;:
<ol>
<li>Au moins 80&nbsp;% des  questions de l&#39;examen d&#39;accréditation doivent être conçues à partir de rien et  ne peuvent être fondées sur des questions précédemment utilisées lors d&#39;un  examen, d&#39;une épreuve, d&#39;une évaluation du candidat ou dans le cadre de la  formation.</li>
<li>Pas plus de 20&nbsp;% des  questions de l&#39;examen d&#39;accréditation peuvent être fondées sur des questions  précédemment utilisées. Toutes les questions réutilisées doivent être modifiées  en profondeur et aucune d&#39;entre elles ne peut avoir été vue par les candidats  auparavant.</li>
<li>Dans toute la mesure du  possible, préparer des questions mesurant la compréhension intégrée ou le  niveau supérieur de connaissances requis des CQC et des CQSC pour qu&#39;ils  puissent s&#39;acquitter de leurs tâches avec compétence.</li>
<li> Choisir les parties pertinentes des objectifs de connaissance pertinents pour les CQC ou les CQSC, approuvés par la CCSN, qui serviront à formuler les questions sur le sujet correspondant, conformément aux directives suivantes :
<ol className="list-lower-roman">
<li>Dans toute la mesure du possible, sélectionner des objectifs exigeant une compréhension intégrée ou des connaissances de niveau supérieur.
<div className="module">
<p>Afin d&#39;examiner les connaissances de niveau supérieur, les questions d&#39;examen devraient vérifier le degré de compréhension, d&#39;application ou d&#39;analyse cognitive défini par la taxonomie de Bloom. Par exemple, les questions demandant aux candidats de « décrire » ou d&#39;« expliquer » seraient classées dans la catégorie des objectifs de connaissance de niveau supérieur, tandis que celles demandant d&#39;« énumérer » ou d&#39;« indiquer » seraient classées dans la catégorie des objectifs de niveau inférieur. La compréhension intégrée ou les connaissances de niveau supérieur sont évaluées au moyen de questions demandant au candidat d&#39;énoncer, d&#39;analyser et de décrire.</p>
</div>
</li>
<li>Ne pas utiliser textuellement les objectifs pour formuler les questions.
<div className="module">
<p>Vous pouvez trouver des idées de  questions dans les documents suivants&nbsp;:</p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans l&#39;ensemble du secteur</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>procédures administratives du  titulaire de permis et de la centrale et documents connexes touchant l&#39;exploitation  et l&#39;entretien de la centrale</li>
<li>données réelles du simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li> S&#39;assurer que chaque question se situe dans la portée des objectifs de connaissance propres aux CQC ou aux CQSC approuvés par la CCSN.
<div className="module">
<p>Pour toute question nécessitant des données spécifiques de la  centrale&nbsp;:</p>
<ul>
<li>Obtenir les données de la  centrale ou de simulation nécessaires pour terminer la formulation de la  question</li>
<li>Préciser les aspects des  données obtenues qu&#39;il pourrait être intéressant d&#39;explorer dans la question et  terminer la formulation de la question</li>
</ul>
</div>
</li>
<li> Élaborer l&#39;examen et le guide de correction correspondant de la façon indiquée à la section 9.4.</li>  </ol>
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
<h3 id="sec9-4" className="mrgn-tp-0">9.4 Élaboration de l&#39;examen et du guide de correction</h3>  <p>Les membres de l&#39;équipe d&#39;examen, sous la direction de l&#39;examinateur en chef, doivent élaborer un examen donné et les réponses à cet examen dans un guide de correction, conformément aux exigences qui suivent :</p>  <ol>
<li> Veiller à ce que la présentation de la page couverture de l&#39;examen ainsi que les renseignements qu&#39;elle contient soient semblables à ceux du modèle de l&#39;annexe B.9.</li>
<li> S&#39;assurer que la mise en page des questions est semblable à l&#39;exemple qui figure à l&#39;annexe B.10.
<div className="module">
<p>Regrouper les questions qui ont un lien logique entre elles et les  intégrer en une seule question à plusieurs parties, conformément aux directives  suivantes&nbsp;: </p>
<ul>
<li>Les parties principales et les  parties secondaires de la question doivent être organisées dans un ordre  logique.</li>
<li>La réponse à une partie d&#39;une  question ne dépend pas totalement de la réponse donnée à une partie précédente  de la question.</li>
</ul>
</div>
</li>
<li>Préparer les réponses dans un guide de correction pour chaque examen donné.</li>
<li>S&#39;assurer que la réponse à chaque question :
<ol>
<li>est conforme au but de la  question</li>
<li>est complète et exacte sur le  plan technique</li>
<li>contient uniquement l&#39;information  spécifiquement demandée par la question</li>
<li>rend compte du niveau de  connaissances attendu du candidat sur le sujet examiné</li>
<li>n&#39;est pas incompatible avec l&#39;information  contenue dans la documentation officielle</li>
<li>est répartie en éléments qui  servent à établir le nombre de points à attribuer à la question</li>
</ol>
</li>
<li>Pour chaque question, préciser  les documents de référence nécessaires pour préparer la réponse et s&#39;assurer  que le numéro de révision et la date de publication de chaque document  correspondent à ce qui est indiqué dans la documentation officielle.</li>
<li>S&#39;assurer que le niveau de  difficulté de chaque question est approprié pour différencier les candidats qui  connaissent suffisamment le sujet traité par la question et ceux qui ne le  connaissent pas assez.</li>
<li>Établir le nombre de points à  attribuer à chaque question en utilisant le tableau pertinent de l&#39;annexe&nbsp;B.11.
<div className="module">
<p>Le nombre de points attribué à chaque question et la durée estimée de l&#39;examen sont déterminés à l&#39;aide du tableau des éléments applicable de l&#39;annexe B.11.</p>
</div>
</li>
<li> S&#39;assurer que l&#39;examen présente le nombre de points attribué à chaque question, la répartition des points et le nombre d&#39;éléments que compte la réponse exigée, de la façon présentée à l&#39;annexe B.11.
<div className="module">
<p>Pour aider le candidat, le temps jugé nécessaire pour répondre à chaque partie d&#39;une question peut également être indiqué en plus du nombre d&#39;éléments et du nombre de points qui figurent habituellement à gauche de la lettre désignant la partie de la question.</p>
</div>
</li>
<li>Veiller à ce que la  présentation de la page couverture du guide  de correction ainsi que les renseignements qu&#39;elle  contient soient semblables à ceux du modèle de l&#39;annexe B.12.</li>
<li>S&#39;assurer que la mise en page  des réponses dans le guide de correction est semblable à l&#39;exemple qui figure à  l&#39;annexe&nbsp;B.13.</li>
<li>Établir la version finale de l&#39;examen  et du guide de correction correspondant de la façon indiquée à la  section&nbsp;9.5.</li>  </ol>
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
<h3 id="sec9-5" className="mrgn-tp-0">9.5 Version finale de l&#39;examen et du guide de correction </h3>  <p>L&#39;équipe d&#39;examen doit établir la version finale d&#39;un examen donné et du guide de correction correspondant conformément aux exigences qui suivent :</p>  <ol>
<li> S&#39;assurer que chaque question et sa réponse soient claires et exactes sur le plan technique.
<div className="module">
<p>Il faut notamment s&#39;assurer que les codes d&#39;identification de l&#39;équipement et des documents mentionnés dans les questions sont exacts.</p>
</div>
</li>
<li> Vérifier l&#39;examen pour s&#39;assurer que le nombre de points repose sur le nombre total d&#39;éléments dans les réponses à toutes les parties de la question.
<div className="module">
<p>Il faut notamment s&#39;assurer que chaque réponse est divisée correctement en éléments.</p>
</div>
</li>
<li>S&#39;assurer que les questions citent  clairement les documents de référence remis aux candidats et donnent des  instructions appropriées pour leur utilisation.</li>
<li>Veiller à faire apparaître  textuellement toute instruction ou toute autre information contenue dans une  question tirée de la documentation du titulaire de permis ou de la centrale.</li>
<li>S&#39;assurer, pour chaque question,  d&#39;indiquer clairement les documents de référence fournis aux candidats.</li>
<li>S&#39;assurer qu&#39;aucun document de  référence n&#39;est remis au candidat lorsqu&#39;une question porte sur un domaine que  le candidat doit connaître par cœur.</li>
<li>Veiller à ce que le contenu des  procédures approuvées et des schémas fonctionnels remis comme documents de  référence ne soit pas modifié.</li>
<li>S&#39;assurer que tout acronyme  utilisé dans une question est défini la première fois qu&#39;il apparaît dans une  question.
<div className="module">
<p>Dans chaque question, les mots-clés qui indiquent le niveau de  développement exigé dans la réponse sont en caractères gras et soulignés afin d&#39;aider  les candidats à donner une réponse complète. </p>
<p>L&#39;examen ne devrait présenter qu&#39;une seule question par page et les  prémisses de la question devraient être placées immédiatement avant les parties  ou sous-parties de la question auxquelles elles s&#39;appliquent.</p>
</div>
</li>
<li>Réunir un dossier contenant les  questions et leurs réponses, un exemplaire des documents de référence utilisés  pour préparer chaque réponse et les objectifs de connaissance visés par chaque  question.</li>
<li>Remplir une fiche de contrôle  de l&#39;examen semblable au modèle de l&#39;annexe B.14 et confirmer que l&#39;examen  satisfait aux critères de la fiche.</li>
<li>S&#39;assurer que les versions  finales de la MCE, de l&#39;examen, du guide de correction et de la fiche de  contrôle de l&#39;examen ont été approuvées et signées par l&#39;examinateur en chef et  le chef de la formation.</li>
<li>S&#39;assurer qu&#39;aucun changement n&#39;est  apporté à l&#39;examen approuvé et au guide de correction correspondant sans l&#39;autorisation  préalable de l&#39;examinateur en chef et du chef de la formation.</li>  </ol>
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
<h3 id="sec9-6" className="mrgn-tp-0">9.6 Validation des examens </h3>  <p>Les membres de l&#39;équipe d&#39;examen, sous la direction de l&#39;examinateur en chef, doivent s&#39;assurer que chaque examen d&#39;accréditation pour un poste donné a été validé et respecte ou dépasse les exigences énoncées dans le présent document d&#39;application de la réglementation avant la tenue de l&#39;examen.</p>  <div className="module">
<p>Une validation est effectuée pour s&#39;assurer qu&#39;un candidat au poste pour lequel l&#39;examen est conçu a suffisamment de temps et d&#39;information pour répondre aux questions.</p>  </div>  <p>La validation doit être effectuée avant d&#39;obtenir les approbations requises du guide de correction exigées pour la tenue d&#39;un examen donné.</p>  <p>Au minimum, l&#39;examen doit être validé : </p>  <ol>
<li>en temps réel, par une personne  tenant le rôle du candidat, qui est ou a été accréditée à la centrale nucléaire  au poste pour lequel l&#39;examen est conçu et qui n&#39;a jamais participé à un aspect  quelconque de la conception de l&#39;examen; </li>
<li>pour confirmer que les  exigences applicables énoncées aux sections 9.4 et 9.5 ont été respectées. </li>  </ol>
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
<h2 id="sec10" className="mrgn-tp-0">10. Tenue des examens d&#39;accréditation portant sur les connaissances</h2>  <p>Le titulaire de permis doit avoir  en place des politiques, des processus et des procédures en ce qui concerne la  tenue des examens portant sur les connaissances.</p>  <p>Le titulaire de permis doit  assurer&nbsp;:</p>  <ol>
<li>que les examens d&#39;accréditation  portant sur les connaissances sont menés sous forme d&#39;épreuves écrites et sont  surveillés en tout temps</li>
<li>que dans des cas exceptionnels,  la CCSN a été préalablement avisée lorsqu&#39;un même examen écrit doit être mené  oralement avec un candidat. Le chef de la formation doit officiellement aviser  la CCSN du besoin d&#39;organiser un examen d&#39;accréditation particulier oralement.  La demande doit être présentée à la&nbsp;CCSN dans un délai raisonnable avant  la date prévue de l&#39;examen, accompagnée d&#39;une justification écrite
<div className="module">
<p>Un cas exceptionnel pourrait par exemple concerner un candidat incapable de subir un examen donné par écrit en raison d&#39;un incident imprévu (p. ex. une blessure corporelle).</p>
</div>
</li>
<li>que tout candidat qui décide de  se retirer d&#39;un examen ou pris à tricher durant l&#39;examen se verra immédiatement  attribuer une note d&#39;échec</li>
<li>que l&#39;examen se déroule dans un  lieu sûr, à accès restreint, de façon à empêcher les contacts entre les  candidats et les autres employés de la centrale</li>
<li>que les candidats qui subissent  un examen écrit sont assis de manière convenable, avec un espace suffisant  entre eux pour garantir la confidentialité de l&#39;examen et prévenir les  tricheries</li>
<li>la confidentialité et la  sécurité de l&#39;examen</li>
<li>que tous les engagements de  confidentialité pertinents ont été signés avant la tenue d&#39;un examen</li>
<li>le contrôle de tous les  documents d&#39;examen</li>
<li>le contrôle de tout le matériel  apporté dans la salle d&#39;examen ou sorti de celle-ci, y compris les appareils  électroniques de poche</li>
<li>que seuls les documents de  référence faisant partie de la trousse d&#39;examen sont autorisés
<div className="module">
<p>Les candidats ne doivent pas avoir accès aux documents de référence  autres que ceux remis avec l&#39;examen. Les candidats ne peuvent rien apporter  dans la salle d&#39;examen et ne peuvent rien sortir de celle-ci. Les candidats ne  peuvent avoir en leur possession que les articles suivants, fournis par le  surveillant ou l&#39;examinateur en chef&nbsp;: </p>
<ul>
<li>les questions d&#39;examen avec les  documents de référence qui y sont joints</li>
<li>les cahiers d&#39;examen permettant  aux candidats d&#39;inscrire leurs réponses</li>
<li>des feuilles de papier vierges</li>
<li>des articles tels que des stylos,  des crayons, des surligneurs, des gommes à effacer, une règle, une loupe et une  calculatrice non programmable</li>
</ul>
</div>
</li>
<li>des exigences consignées concernant  la surveillance des examens écrits, y compris un formulaire précisant les  règles à suivre par le surveillant et les exigences relatives aux attestations  à remplir par les différentes personnes</li>
<li>en ce qui concerne les pauses  permettant d&#39;aller aux toilettes durant la tenue d&#39;un examen, que les candidats  ne peuvent quitter la salle d&#39;examen qu&#39;un à la fois et doivent être escortés.  Toute communication avec une personne à l&#39;extérieur de la salle d&#39;examen est  interdite et peut donner lieu à un échec</li>
<li> la présence d&#39;un surveillant dans la salle d&#39;examen à tout moment durant un examen écrit
<div className="module">
<p>Le formulaire du surveillant et les directives à l&#39;intention du surveillant devraient être semblables aux modèles présentés à l&#39;annexe D.6.</p>
</div>
</li>
<li> des règles de conduite et des directives consignées à l&#39;intention des candidats ainsi que la signature d&#39;un engagement de confidentialité</li>
<li> des règles de conduite et des directives consignées à l&#39;intention des membres de l&#39;équipe d&#39;examen, y compris l&#39;opérateur du système d&#39;enregistrement audiovisuel en cas d&#39;examen oral
<div className="module">
<p>Les engagements de confidentialité et les directives individuelles devraient être semblables aux modèles présentés à l&#39;annexe D.1.</p>
</div>
</li>
<li>que les examinateurs ne  fournissent pas d&#39;information complémentaire aux candidats, ni ne répondent aux  demandes d&#39;éclaircissements concernant les questions d&#39;examen</li>
<li>que les examens se tiennent  conformément aux exigences relatives au temps maximal alloué aux candidats,  présentées au tableau&nbsp;2 du présent document, et qu&#39;aucune prolongation du  temps maximal alloué ne soit autorisée</li>
<li> que les examens oraux :
<ol className="list-lower-alpha">
<li> sont dirigés par l&#39;examinateur en chef et au moins un autre examinateur qui a participé à la conception et à l&#39;élaboration de l&#39;examen et que seul l&#39;opérateur du système d&#39;enregistrement est autorisé à rester dans la salle d&#39;examen avec les examinateurs</li>
<li> sont enregistrés. Le système audiovisuel doit permettre d&#39;enregistrer clairement les questions des examinateurs et les réponses du candidat durant l&#39;examen
<div className="module">
<p>Les enregistrements audiovisuels doivent être de haute qualité afin de permettre de distinguer clairement les questions posées par les examinateurs des réponses formulées par les candidats durant l&#39;examen oral. Un examen oral ne sera pas reconnu par la CCSN à moins d&#39;avoir été correctement enregistré. De plus, ces enregistrements sont utilisés par la CCSN lorsqu&#39;elle mène ses activités de vérification de la conformité.</p>
</div>
</li>
</ol>
</li>
<li>que durant un examen oral :
<ol>
<li>une copie des questions est remise  au candidat, une à la fois, et lui est lue à voix haute par un examinateur  membre de l&#39;équipe d&#39;examen;</li>
<li>toutes les réponses données par  le candidat sont consignées par chaque examinateur de l&#39;équipe d&#39;examen dans sa  copie du guide de correction; </li>
<li>si la réponse est incomplète ou  si le candidat semble avoir mal compris la question, les membres de l&#39;équipe d&#39;examen  reformulent celle-ci, en prenant soin de ne pas donner d&#39;indices sur la  réponse.</li>
</ol>
</li>  </ol>
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
<h2 id="sec11" className="mrgn-tp-0">11. Correction des examens</h2>
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
<h3 id="sec11-1" className="mrgn-tp-0">11.1	Exigences d&#39;ordre général concernant les examens écrits et oraux</h3>  <p>Le titulaire de permis doit avoir en place des politiques, des processus et des procédures en ce qui concerne la correction des examens portant sur les connaissances. Ceci doit comprendre :</p>  <ol>
<li> Les examens doivent être corrigés dès que possible.
<div className="module">
<p>La correction des examens fait partie intégrante de l&#39;administration  du processus d&#39;examen d&#39;accréditation. La correction devrait être effectuée  immédiatement après la tenue d&#39;un examen d&#39;accréditation. Le présent document  ne stipule aucun délai précis pour la correction des examens afin de permettre  aux titulaires de permis de faire face aux imprévus. Toutefois, dans le cadre  de l&#39;administration des examens d&#39;accréditation, les titulaires de permis  devraient disposer des ressources nécessaires au tout début de la planification  d&#39;un examen donné.</p>
</div>
</li>
<li>La correction des examens ne  peut débuter que lorsque tous les candidats ont subi l&#39;examen. </li>
<li>Seuls l&#39;examinateur en chef et  les examinateurs ayant participé à la conception de l&#39;examen sont autorisés à  effectuer la première et la deuxième corrections des examens.</li>
<li>La première et la deuxième  corrections des examens doivent être faites conformément aux prescriptions  énoncées aux sections&nbsp;11.2 à 11.4.</li>
<li>Dans le cas d&#39;un examen oral,  la première et la deuxième corrections ne peuvent être effectuées que par les  examinateurs qui ont donné l&#39;examen.</li>
<li>Il faut que la première  correction soit terminée pour tous les candidats avant de procéder à la  deuxième correction.</li>
<li>La deuxième correction de l&#39;examen  des candidats sélectionnés pour faire l&#39;objet d&#39;une deuxième correction doit  être confiée à un examinateur qui n&#39;a pas effectué la première correction de  ces candidats.</li>
<li>Pour s&#39;assurer que la deuxième  correction d&#39;un examen écrit est effectuée indépendamment de la première, l&#39;examinateur  qui fait la deuxième correction ne peut avoir accès aux résultats de la  première correction avant d&#39;avoir terminé la seconde correction.</li>
<li>Un formulaire de résultats d&#39;examen  dont les renseignements et la présentation sont analogues à ceux du modèle  illustré à l&#39;annexe B.15 doit être rempli pour chaque candidat.</li>  </ol>
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
<h3 id="sec11-2" className="mrgn-tp-0">11.2 First marking of written and oral examinations</h3>  <p>L&#39;examinateur en chef doit s&#39;assurer que la première correction est effectuée conformément aux indications qui suivent :</p>  <ol>
<li>Utiliser un nouvel exemplaire  du guide de correction approuvé pour chaque candidat</li>
<li>Corriger la réponse de tous les  candidats à une question donnée avant de passer à la question suivante</li>
<li>Corriger les réponses du  candidat par rapport au guide de correction approuvé en cochant les éléments de  réponse directement dans le guide de correction du candidat</li>
<li> Pour chaque question, consigner dans le guide de correction du candidat :
<ol className="list-lower-alpha">
<li> toute idée fausse, erreur et lacune, ainsi que leur importance</li>
<li> toute lacune dans la réponse du candidat dont le guide de correction ne tient pas compte du tout ou ne tient pas compte suffisamment</li>
<li> tout renseignement pertinent de la réponse qui ne figure pas dans le guide de correction</li>
</ol>
</li>
<li> Lorsque la correction d&#39;une question est terminée, inscrire dans un document de commentaires à propos de l&#39;examen :
<ol className="list-lower-alpha">
<li> toute difficulté éprouvée par un certain nombre de candidats en répondant à cette question, comme l&#39;indiquent des réponses constamment incomplètes ou différentes de la réponse du guide de correction approuvé</li>
<li> toute recommandation de modification de la réponse dans le guide de correction approuvé et que l&#39;examinateur en chef estime nécessaire avant que le guide de correction ne soit autorisé</li>
</ol>
</li>
<li>Lorsque la première correction de tous les candidats est terminée :
<ol className="list-lower-alpha">
<li> examiner les réponses de chaque candidat pour établir s&#39;il y a lieu de lui accorder crédit pour un élément de réponse non mentionné expressément dans sa réponse à une question lorsqu&#39;on constate, sur la foi d&#39;une réponse à une question connexe, que le candidat possédait ces connaissances
<div className="module">
<p>Lors de la correction d&#39;un examen écrit qui a été mené oralement, les examinateurs devraient au besoin consulter les enregistrements pour vérifier les réponses données par le candidat. </p>
</div>
</li>
<li> consigner les raisons pour lesquelles ces crédits sont accordés dans le guide de correction du candidat</li>
<li> déterminer l&#39;importance des idées fausses, des erreurs et des lacunes consignées dans le guide de correction de chaque candidat et inscrire les conclusions éventuelles dans le guide de correction</li>
</ol>
</li>
<li>Calculer les notes obtenues par  chaque candidat pour les différentes questions et pour tout l&#39;examen</li>
<li>Attribuer une note de succès ou  une note d&#39;échec conformément aux indications de la section&nbsp;11.4</li>
<li>Sur la page de couverture du  guide de correction de chaque candidat, inscrire les notes obtenues par  celui-ci et le résultat d&#39;examen recommandé</li>
<li>Remplir un formulaire de  résultats d&#39;examen pour chaque candidat</li>  </ol>
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
<h3 id="sec11-3" className="mrgn-tp-0">11.3	Deuxième correction des examens écrits et oraux et conciliation des résultats</h3>  <p>Lorsque la première correction de tous les candidats est terminée conformément aux indications des sections 11.2 et 11.4, la deuxième correction des candidats doit être effectuée conformément aux indications qui suivent.</p>  <ol>
<li>Le chef de la formation doit :
<ol className="list-lower-alpha">
<li>approuver les candidats sélectionnés par les examinateurs pour faire l&#39;objet d&#39;une deuxième correction</li>
<li>sélectionner au moins un des candidats notés par chaque examinateur ayant effectué la première correction
<div className="module">
<p>L&#39;exigence minimale visant la deuxième correction consiste à effectuer un contrôle d&#39;étalonnage de l&#39;exactitude du guide d&#39;examen et une évaluation du processus de correction.</p>
</div>
</li>
<li>sélectionner les candidats pour lesquels le premier évaluateur recommande une deuxième correction</li>
<li>s&#39;assurer que la deuxième correction d&#39;un candidat est confiée à un membre de l&#39;équipe d&#39;examen qui n&#39;a pas effectué la première correction</li>
<li>s&#39;assurer que la deuxième correction est effectuée pour un candidat à la fois à l&#39;aide du guide de correction approuvé, conformément aux instructions données aux paragraphes 1 à 10 de la section 11.2 pour la première correction</li>
</ol>
</li>
<li> L&#39;examinateur en chef doit retenir pour une deuxième correction :
<ol>
<li>les candidats ayant obtenu une  note comprise entre 57&nbsp;% et 63&nbsp;% à l&#39;examen</li>
<li>d&#39;autres candidats, à la  discrétion du chef de la formation ou de l&#39;examinateur en chef</li>
</ol>
</li>
<li>Les examinateurs doivent&nbsp;:
<ol>
<li>se réunir afin de résoudre tout  écart entre leurs deux corrections et consigner la façon dont ces divergences  ont été résolues</li>
<li>passer en revue l&#39;examen complet  d&#39;un candidat à la fois</li>
<li>consigner les résultats d&#39;examen  unifiés et les justifications dans l&#39;exemplaire original du formulaire de  résultats d&#39;examen portant sur les connaissances de chaque candidat</li>
<li>s&#39;assurer que toute  modification finale apportée aux réponses dans le guide de correction approuvé  et dans le formulaire de résultats d&#39;examen a été examinée et officiellement  entérinée par le chef de la formation </li>
</ol>
</li>  </ol>
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
<h3 id="sec11-4" className="mrgn-tp-0">11.4	Communication des résultats d&#39;examen</h3>  <p>L&#39;équipe  d&#39;examen doit attribuer une note de succès ou une note d&#39;échec à un examen  donné conformément aux critères qui suivent&nbsp;:</p>  <ol>
<li>Une note de succès est  attribuée à l&#39;examen lorsque le candidat a obtenu une note supérieure ou égale  à 70&nbsp;%.</li>
<li>Une note d&#39;échec est attribuée  à un examen donné si le candidat&nbsp;:
<ol>
<li>n&#39;a pas répondu au critère de  réussite qui précède, ou</li>
<li>a répondu au critère énoncé  ci-dessus, mais a manifesté des lacunes de connaissances considérées comme  graves par l&#39;examinateur en chef</li>
</ol>
</li>
<li>Les membres de l&#39;équipe d&#39;examen  doivent&nbsp;:
<ol>
<li>consigner les résultats d&#39;examen  finaux et les justifications dans l&#39;exemplaire original du formulaire de  résultats d&#39;examen portant sur les connaissances de chaque candidat</li>
<li>s&#39;assurer que le formulaire de  résultats a été examiné et signé par le chef de la formation</li>
</ol>
</li>  </ol>
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
<h2 id="sec12" className="mrgn-tp-0">12. Communication des résultats d&#39;examen</h2>  <ol>
<li> Les membres de l&#39;équipe d&#39;examen doivent consigner et signaler au chef de la formation toute lacune importante sur le plan des connaissances révélée par un candidat ou par un examen.
<div className="module">
<p>Les lacunes révélées par un examen devraient comprendre celles constatées dans la conception ou la correction de l&#39;examen, les procédures de la centrale ou le programme de formation.</p>
</div>
</li>
<li>Les examinateurs doivent  veiller à ce qu&#39;une trousse de correction finale soit compilée pour chaque  candidat. Cette trousse doit comprendre les éléments suivants&nbsp;:
<ol>
<li>formulaire de résultats d&#39;examen  complété, signé par les deux examinateurs et entériné par le chef de la formation</li>
<li>notes finales obtenues à l&#39;examen</li>
<li>guide de correction unifié  signé par les deux examinateurs</li>
</ol>
</li>
<li>Le chef de la formation  doit&nbsp;:
<ol>
<li>après avoir autorisé les  résultats d&#39;un examen d&#39;accréditation donné portant sur les connaissances,  veiller à ce qu&#39;un exemplaire de l&#39;examen approuvé, des guides de correction  autorisés, des fiches de contrôle de l&#39;examen, des MCE et des formulaires de  résultats d&#39;examen soit communiqué à la CCSN, si elle le demande, et que la  CCSN soit officiellement informée des résultats de chaque candidat</li>
<li>veiller à ce que chaque  candidat auquel une note de succès a été attribuée suive une formation de rattrapage  et fasse l&#39;objet d&#39;évaluations officielles dans chaque domaine identifié comme  insuffisant par le processus de correction pour confirmer, documents à l&#39;appui,  que le candidat est parvenu à obtenir le niveau de connaissances requis pour  exercer les fonctions du poste accrédité de façon compétente</li>
<li>s&#39;assurer que toute  lacune révélée au paragraphe&nbsp;1 ci-dessus a été prise en compte. </li>
</ol>
</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartIII"></div>
<h2 id="part-iii" className="mrgn-tp-0">Partie III : Exigences relatives aux examens d&#39;accréditation portant sur les habiletés</h2>  <p>La présente partie établit les  examens d&#39;accréditation initiale sur simulateur requis et les exigences  relatives à la conception, à l&#39;élaboration, à la tenue et à la notation des  examens que doivent réussir les candidats aux postes d&#39;opérateur de réacteur  (OR), d&#39;opérateur de la tranche&nbsp;0 (OT0), de chef de quart de centrale  (CQC) et de chef de quart en salle de commande (CQSC) ayant satisfait à toutes  les conditions préalables requises, y compris les examens d&#39;accréditation initiale  portant sur les connaissances exigés. </p>  <p>Tous les examens portant sur les  habiletés doivent être organisés sur un simulateur pleine échelle.</p>  <div className="module">
<p>Consulter le document RD-204 de la CCSN pour connaître les exigences relatives aux examens et les conditions préalables.</p>  </div>
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
<h2 id="sec13" className="mrgn-tp-0">13. Examens d&#39;accréditation sur simulateur </h2>  <p>Les examens d&#39;accréditation sur  simulateur requis doivent comporter un certain nombre de scénarios d&#39;examen qui  examinent les habiletés nécessaires pour occuper chaque poste rattaché à l&#39;exploitation  de la centrale nucléaire pour lequel l&#39;accréditation initiale s&#39;applique. L&#39;examen  spécifique au poste doit couvrir une série de défaillances de la centrale qui  crée une succession de conditions anormales, de pannes ou de perturbations  exigeant que les candidats démontrent leurs aptitudes dans tous les domaines de  compétence applicables. Les catégories de défaillances requises sont décrites à  la sous-section 13.4.</p>  <p>Les scénarios d&#39;examen doivent être  conçus pour permettre de mesurer le niveau de compétence du candidat dans cinq domaines  de compétence génériques à la centrale nucléaire en question&nbsp;:</p>  <ol>
<li>surveillance </li>
<li>interventions effectuées sans  consulter les procédures</li>
<li>diagnostic et prise de  décisions </li>
<li>respect des procédures </li>
<li>communication et interaction  avec l&#39;équipe</li>  </ol>  <p>L&#39;examen doit mettre les candidats  à l&#39;épreuve au moins 25 fois dans chacun des domaines de compétence, à l&#39;exception  du domaine de compétence&nbsp;2 (interventions effectuées sans consulter les  procédures) où les candidats doivent être mis à l&#39;épreuve au moins 15 fois. Les  domaines de compétence requis sont décrits à la sous-section 13.5. </p>  <p>Les examens d&#39;accréditation portant  sur les habiletés exigés sont les suivants&nbsp;:</p>  <ol>
<li>Examen pour opérateur de  réacteur&nbsp;: Cet examen doit comprendre trois scénarios d&#39;examen complets  (SEC). Ces scénarios d&#39;examen permettent de vérifier les habiletés nécessaires  pour occuper le poste d&#39;OR rattaché à l&#39;exploitation de la centrale à une seule  tranche ou de la centrale à plusieurs tranches où l&#39;accréditation initiale s&#39;applique.</li>
<li>Examen pour opérateur de la  tranche&nbsp;0&nbsp;: Cet examen doit comprendre deux SEC aux centrales  nucléaires dotées d&#39;une tranche&nbsp;0. Ces scénarios d&#39;examen vérifient les  habiletés nécessaires pour occuper le poste d&#39;OT0 rattaché à l&#39;exploitation de  la centrale à plusieurs tranches où l&#39;accréditation initiale s&#39;applique.</li>
<li>Examen pour chef de quart de  centrale&nbsp;: Cet examen doit comporter deux SEC et deux scénarios d&#39;examen  abrégés (SEA), y compris un certain nombre de questions normalisées  spécifiques. Ces scénarios d&#39;examen permettent de vérifier les habiletés  nécessaires pour occuper le poste de CQC rattaché à l&#39;exploitation de la  centrale à une seule tranche où l&#39;accréditation initiale s&#39;applique, en  traitant particulièrement des compétences requises lorsque l&#39;OR est  temporairement absent de la salle de commande.</li>
<li>Examen pour chef de quart en  salle de commande&nbsp;: Cet examen doit comporter deux SEC, trois scénarios d&#39;examen  de diagnostic (SED) et un scénario de vérification des panneaux de commande  (SVPC), y compris plusieurs questions normalisées spécifiques. Ces scénarios d&#39;examen  permettent de vérifier les habiletés nécessaires pour occuper le poste de CQSC rattaché  à l&#39;exploitation de la centrale à plusieurs tranches où l&#39;accréditation  initiale s&#39;applique.</li>  </ol>
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
<h3 id="sec13-1" className="mrgn-tp-0">13.1	Description des scénarios d&#39;examen</h3>  <p>Les scénarios d&#39;examen requis susmentionnés  qui doivent constituer les examens correspondant aux différents postes occupés  dans une centrale nucléaire sont les suivants&nbsp;:</p>  <ol>
<li>
<p className="mrgn-tp-0">SEC&nbsp;: Scénario d&#39;examen  dynamique comportant une séquence cohérente de défaillances principales et  secondaires qui simulent une succession de conditions anormales, de pannes ou  de perturbations qui exigent que les candidats prennent des mesures  conformément aux attentes consignées en matière de rendement du personnel  accrédité à cette centrale nucléaire.</p>
<p>Pour les postes de CQC et CQSC, ces examens doivent également comprendre un  certain nombre de questions normalisées spécifiques à la fin de la partie  dynamique de chaque scénario. Les questions sont conçues pour cerner les  préoccupations importantes qu&#39;ont les candidats à la fin de chaque scénario d&#39;examen,  y compris les niveaux d&#39;indisponibilité, pour déterminer la marche à suivre et  aborder ces préoccupations et pour établir la priorité des mesures à prendre. </p>
</li>
<li>
<p className="mrgn-tp-0">SEA&nbsp;: Scénario d&#39;examen  dynamique comportant un certain nombre de défaillances principales et  secondaires qui simulent une succession de conditions anormales, de pannes ou  de perturbations de la centrale qui exigent que les candidats CQC démontrent  leur aptitude à réagir à ces situations anormales quand l&#39;OR est temporairement  absent de la salle de commande.</p>
<p>Pour le poste de CQC, ces examens doivent également comprendre plusieurs  questions normalisées spécifiques à la fin de la partie dynamique de chaque  scénario. Les questions sont conçues pour déterminer l&#39;exactitude du diagnostic  posé par les candidats, cerner tout autre problème observé, cerner les  préoccupations importantes qu&#39;ont les candidats à la fin de chaque scénario d&#39;examen,  déterminer la marche à suivre et établir la priorité des mesures à prendre.</p>
</li>
<li>
<p className="mrgn-tp-0">SED&nbsp;: Scénario d&#39;examen  sur simulateur comportant une seule défaillance principale et un certain nombre  de défaillances secondaires qui exigent que les candidats CQSC démontrent leur  aptitude personnelle à&nbsp;: </p>
<ol>
<li>surveiller indépendamment l&#39;évolution  des conditions de la centrale à tranches multiples</li>
<li>reconnaître des conditions  anormales</li>
<li>déterminer l&#39;importance de  celles-ci</li>
<li>diagnostiquer les défaillances</li>
<li>déterminer les procédures à  exécuter</li>
<li>déterminer la marche à suivre  faute de procédures ou si celles-ci ne suffisent pas</li>
</ol>
<p>Pour le poste de CQSC, ces examens doivent également comprendre un certain  nombre de questions normalisées spécifiques à la fin de la partie dynamique de  chaque scénario. Les questions sont conçues pour déterminer l&#39;exactitude du  diagnostic posé par les candidats, cerner tout autre problème observé, cerner  les préoccupations importantes qu&#39;ont les candidats à la fin de chaque scénario  d&#39;examen, y compris les niveaux d&#39;indisponibilité, déterminer la marche à  suivre et établir la priorité des mesures à prendre. </p>
</li>
<li>
<p className="mrgn-tp-0">SVPC&nbsp;: Scénario d&#39;examen  non dynamique au cours duquel l&#39;état de la centrale est stable et qui exige que  les candidats démontrent leur aptitude à surveiller les panneaux de la salle de  commande qui relèvent du poste de CQSC en reconnaissant les anomalies et les  conditions anormales observables sur les panneaux de commande et en déterminant  leur importance.</p>
<p>Pour le poste de CQSC, cet examen doit également comprendre un certain nombre  de questions normalisées spécifiques à la fin du scénario d&#39;examen. Les examens  sont conçus pour démontrer l&#39;aptitude des candidats à déterminer l&#39;importance  des anomalies et des conditions anormales et la marche à suivre pour y faire  face.</p>
</li>  </ol>  Les critères à  prendre en compte pour les scénarios d&#39;examen et les questions normalisées  spécifiques sont traités à la section 14, au chapitre «&nbsp;Conception et élaboration  des examens&nbsp;».
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
<h3 id="sec13-2" className="mrgn-tp-0">13.2 Durée des examens et des scénarios d&#39;examen </h3>  <p>Le tableau 4 résume le nombre et le type de scénarios d&#39;examen que doivent comporter les examens prévus pour chaque poste devant être accrédité et la durée prévue de chaque scénario composant un examen donné. Le tableau présente également la durée estimée de chaque examen et de chaque scénario d&#39;examen.</p>  <table>
<caption className="text-left">
Tableau 4 : Nombre et type de scénarios d&#39;examen requis par examen d&#39;accréditation pour un poste donné, et durée prévue des scénarios et des examens
</caption>
<tr>
<th>Poste</th>
<th>Nombre et type de scénarios d&#39;examen exigés (plus le nombre de questions normalisées exigées)</th>
<th>Durée prévue des scénarios et de l&#39;examen(sans compter les questions normalisées)</th>
</tr>
<tr>
<td><p>OR </p></td>
<td><p>3  SEC</p></td>
<td><p>50&nbsp;minutes par SEC </p>
3&nbsp;heures pour  tout l&#39;examen d&#39;OR </td>
</tr>
<tr>
<td><p>OT0</p></td>
<td><p>2 SEC</p></td>
<td><p>60&nbsp;minutes par SEC</p>
2,5&nbsp;heures pour  tout l&#39;examen d&#39;OT0 </td>
</tr>
<tr>
<td><p>CQC</p></td>
<td><p>2 SEC (+ 2 questions normalisées)</p>
<p>+</p>
2 SEA (+ 2 questions  normalisées)</td>
<td><p>50&nbsp;minutes par SEC <br />
25&nbsp;minutes par SEA </p>
3&nbsp;heures pour  tout l&#39;examen de CQC </td>
</tr>
<tr>
<td><p>CQSC</p></td>
<td><p>2 SEC (+ 2 questions normalisées)</p>
<p>+</p>
<p>3 SED (+ 5 questions normalisées)</p>
<p>+</p>
1 SVPC (+ 3 questions  normalisées)</td>
<td><p>50&nbsp;minutes par SEC <br />
15&nbsp;minutes par SED <br />
15&nbsp;minutes pour le SVPC</p>
3&nbsp;heures pour  tout l&#39;examen de CQSC </td>
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
<div id="13.3"></div>
<h3 id="sec13-3" className="mrgn-tp-0">13.3	Enveloppe d&#39;examen limitative</h3>  <p>Les examens d&#39;accréditation sur  simulateur doivent être conçus et élaborés de sorte à examiner les habiletés  exigées pour occuper un poste à la centrale nucléaire pour laquelle l&#39;accréditation  initiale est demandée. Chaque examen d&#39;accréditation sur simulateur requis doit  comporter un nombre précis de scénarios d&#39;examen avec un nombre et des types  bien définis de défaillances de la centrale permettant de mettre à l&#39;épreuve  tous les domaines de compétence applicables au poste.</p>  <p>Aucun scénario d&#39;examen mené précédemment  ne peut être réutilisé dans son intégralité pour concevoir et mener un autre  scénario d&#39;examen ou un autre examen d&#39;accréditation.</p>  <div className="module">
<p>Dès qu&#39;un scénario d&#39;examen ou un examen d&#39;accréditation a été mené, il ne peut plus être réutilisé. Cependant, un scénario d&#39;examen peut être modifié pour servir à la conception et à l&#39;élaboration d&#39;un autre examen d&#39;accréditation.</p>  </div>  <p>Les sous-sections qui suivent décrivent les catégories de défaillances de la centrale et les domaines de compétence requis pour la conception et l&#39;élaboration de chaque examen d&#39;accréditation détaillé à la section 14.</p>
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
<h3 id="sec13-4" className="mrgn-tp-0">13.4	Défaillances principales et secondaires</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4.1"></div>
<h4 id="sec13-4-1" className="mrgn-tp-0">13.4.1	Défaillances principales</h4>  <p>Dans un scénario d&#39;examen sur  simulateur, il s&#39;agit d&#39;une panne d&#39;une pièce d&#39;équipement, d&#39;un dispositif de  commande ou d&#39;un composant d&#39;un système, ou d&#39;une combinaison de telles pannes,  qui provoque, au moment où elle survient, la principale condition anormale,  panne ou perturbation de la centrale à laquelle le candidat doit faire face.</p>  <p>Les défaillances principales  doivent être classées dans les quatre catégories suivantes&nbsp;:</p>  <h5>Catégorie 1 :	Défaillances nécessitant l&#39;exécution d&#39;une opération de routine</h5>  <p>Il s&#39;agit de toute détérioration ou  défectuosité d&#39;un ou de plusieurs éléments ou pièces d&#39;équipement touchant un  seul système, qui exige que le candidat effectue une permutation normale d&#39;équipement,  dans un laps de temps limité, afin d&#39;éviter que l&#39;équipement ne soit endommagé  ou qu&#39;un système ne soit perturbé par une action automatique visant à protéger  l&#39;équipement en question. Si une telle défaillance principale est corrigée,  elle ne devrait poser aucun transitoire important dans les systèmes ou les  réacteurs. </p>  <p>Remarque : Les défaillances  principales de catégorie 1 ne devraient pas faire l&#39;objet des examens destinés  aux candidats CQC ou CQSC.</p>  <div className="module">
<p>Exemples de défaillances de catégorie 1 </p>
<ul>
<li>Conditions de détérioration d&#39;une  pompe en service qui requiert la mise en marche d&#39;une pompe de relève et l&#39;arrêt  de la pompe défectueuse avant qu&#39;elle ne soit endommagée</li>
<li>Rapport de terrain faisant état  d&#39;un problème de fonctionnement d&#39;une pièce d&#39;équipement en marche qui  nécessite qu&#39;un système soit reconfiguré</li>
<li>Demande de la part d&#39;un OR ou  de l&#39;exploitant du réseau électrique qui nécessite une reconfiguration de  routine d&#39;un système exploité par les OT0</li>
</ul>  </div>  <h5>Catégorie 2 :	Défaillances nécessitant l&#39;exécution d&#39;une manœuvre inhabituelle mais ne causant pas de perturbation importante d&#39;un groupe réacteur dans l&#39;immédiat </h5>  <p>Il s&#39;agit de toute détérioration ou  défectuosité d&#39;un ou de plusieurs composants ou pièces d&#39;équipement, touchant  un ou plusieurs systèmes, qui oblige le candidat à exécuter ou à faire exécuter  des actions inhabituelles dans un laps de temps limité, pour l&#39;une des raisons  suivantes&nbsp;:</p>  <ol>
<li>éviter que l&#39;équipement ou le  système ne soit endommagé tout en réduisant au minimum la détérioration de l&#39;état  du système, de la tranche ou de la centrale découlant de ces actions</li>
<li>réduire au minimum la détérioration de l&#39;état du système, de la tranche ou de la centrale  occasionnée par une action automatique visant à protéger l&#39;équipement en  question</li>
<li>éviter  ou corriger une indisponibilité d&#39;un système de sûreté ou d&#39;un système de soutien  en matière de sûreté</li>  </ol>  <p>Si le candidat réagit correctement,  une défaillance principale de cette catégorie touchant un groupe réacteur ne  causera pas à elle seule une variation de plus de 10 % de la puissance du  réacteur ou de la charge du turboalternateur. Par contre, une variation de  puissance ou de charge supérieure à 10 % peut se produire par la suite en  raison des actions requises de la part de l&#39;opérateur. </p>  <div className="module">
<p>Exemples de défaillances de catégorie 2 :</p>
<ul>
<li>Quand le réacteur fonctionne à  pleine puissance, augmentation de la température d&#39;un palier d&#39;une pompe  principale du circuit caloporteur qui nécessite l&#39;arrêt de la pompe pour ne pas  l&#39;endommager (exemple valable seulement pour les centrales dépourvues de pompes  principales de relève)</li>
<li>Perte des deux pompes d&#39;appoint  du circuit caloporteur</li>
<li>Défectuosités d&#39;instruments de  mesure du programme de contrôle de la pression et de l&#39;inventaire du circuit  caloporteur qui nécessitent une réduction contrôlée de la puissance du réacteur  et le transfert du contrôle de la pression et de l&#39;inventaire à une boucle de  contrôle analogique</li>
<li>Perte de caloporteur à l&#39;extérieur  du circuit caloporteur qui est dans les limites de la capacité des pompes d&#39;appoint  disponibles</li>
<li>Panne, sans effet immédiat sur  la puissance du réacteur, d&#39;un panneau de distribution électrique qui alimente  les instruments de mesure et l&#39;équipement d&#39;une seule chaîne d&#39;un ou de  plusieurs systèmes spéciaux de sûreté</li>
<li>Panne d&#39;équipement du poste de manœuvre  de la centrale qui nécessite une reconfiguration inhabituelle du système  principal de sortie</li>
<li>Perte de contrôle de la  pression dans le système de confinement à vide aux centrales à plusieurs  tranches</li>
</ul>  </div>  <h5>Catégorie 3 :	Défaillances causant un transitoire majeur d&#39;un réacteur </h5>  <p>Il s&#39;agit de toute défectuosité d&#39;un  ou de plusieurs composants ou pièces d&#39;équipement qui provoque une variation de  plus de 10 % de la puissance du réacteur ou de la charge du turboalternateur.</p>  <p>Cette catégorie comprend également toute défectuosité, autre que  celles causant une des situations d&#39;urgence décrites à la catégorie 4  ci-dessous, qui provoque un ou plusieurs des phénomènes suivants&nbsp;:</p>  <ol>
<li>baisse contrôlée de la  puissance du réacteur</li>
<li>recul  rapide de la puissance du réacteur </li>
<li>déclenchement du réacteur            </li>
<li>déclenchement de la turbine,  réduction de puissance ou délestage</li>  </ol>  <div className="module">
<p>Exemples de défaillances de  catégorie 3 :</p>
<ul>
<li>Déclenchement,  à pleine puissance, d&#39;une pompe principale du circuit caloporteur</li>
<li>Délestage  de l&#39;alternateur principal </li>
<li>Toute  défectuosité, autre que celles causant une des situations d&#39;urgence décrites à  la catégorie 4 ci-dessous, qui provoque un ou plusieurs des phénomènes suivants&nbsp;:
<ul>
<li>baisse contrôlée de la puissance du réacteur</li>
<li>recul rapide de la puissance du réacteur</li>
<li>déclenchement du réacteur</li>
<li>déclenchement de la turbine</li>
</ul>
</li>
</ul>  </div>  <h5>Catégorie 4 :	Défaillances causant une situation d&#39;urgence </h5>  <p>Il  s&#39;agit de toute défectuosité d&#39;un ou de plusieurs composants ou pièces d&#39;équipement  qui provoque une des situations d&#39;urgence suivantes touchant un ou plusieurs  groupes réacteurs et nécessite une ou plusieurs des procédures d&#39;urgence  applicables :</p>  <ol>
<li>Perte d&#39;inventaire du circuit  caloporteur d&#39;un réacteur : définie comme étant une fuite soutenue de  caloporteur à l&#39;extérieur du circuit caloporteur qui ne peut être compensée par  les pompes d&#39;appoint disponibles ou qui nécessite le déclenchement manuel ou  automatique du système de refroidissement d&#39;urgence du cœur. Les fuites de  tubes de générateur de vapeur font partie des défaillances principales pouvant  causer cette situation d&#39;urgence</li>
<li>Perte de pression du circuit de  vapeur d&#39;un groupe réacteur&nbsp;: définie comme étant toute baisse soutenue  de la pression dans le circuit de vapeur qui provoque le déclenchement d&#39;un  système d&#39;arrêt d&#39;urgence du réacteur en raison d&#39;une basse pression dans le  circuit caloporteur ou toute rupture d&#39;une conduite de vapeur qui crée un  risque généralisé pour le personnel et l&#39;équipement de la centrale</li>
<li>Perte complète de l&#39;alimentation  électrique de catégorie IV, III ou II qui touche une ou plusieurs tranches,  selon le cas</li>
<li>Perte complète de l&#39;alimentation  électrique des catégories IV et III qui touche une ou plusieurs tranches, selon  le cas</li>
<li>Perte d&#39;air d&#39;instrumentation d&#39;un  groupe réacteur&nbsp;: définit comme étant une baisse irréversible de la  pression de l&#39;air d&#39;instrumentation du groupe.</li>
<li>Perte d&#39;eau d&#39;alimentation aux générateurs de vapeur d&#39;un groupe  réacteur&nbsp;: définie comme étant une perte prolongée d&#39;eau d&#39;alimentation  aux générateurs de vapeur qui nécessite l&#39;utilisation d&#39;une source froide de  relève</li>
<li>Perte totale d&#39;eau de service à haute ou à basse pression d&#39;un groupe réacteur&nbsp;: comprend  une perte d&#39;eau de service au niveau supérieur de la centrale de Darlington, si  la perte est due à un bris de tuyauterie, et une perte de l&#39;eau de service  recirculée d&#39;une centrale de 600&nbsp;MW</li>
<li>Perte totale des deux ordinateurs de contrôle d&#39;un groupe réacteur </li>  </ol>  <p>Remarque : Seules les défaillances  principales de catégorie 4 qui exigent une intervention complexe de la part des  OT0 doivent être créditées comme des défaillances principales de catégorie 4  dans les scénarios d&#39;examen des candidats OT0.</p>  <div className="module">
<p>En raison  des différences de conception entre les diverses centrales CANDU au Canada, des  situations d&#39;urgence peuvent être ajoutées à cette liste ou supprimées de celle-ci,  selon la centrale. </p>
<p>Les  situations d&#39;urgence qui répondent à l&#39;un ou l&#39;autre des critères suivants  peuvent être ajoutées à la liste d&#39;une centrale donnée :</p>
<ul>
<li>autres accidents analysés dans  le rapport de sûreté de la centrale</li>
<li>toute autre situation résultant  d&#39;une défaillance majeure et qui représente une menace pour l&#39;intégrité de la  gaine du combustible, du circuit caloporteur ou de l&#39;enceinte de confinement</li>
</ul>
<p>Le  titulaire de permis doit aviser la CCSN de tout changement apporté à la liste  des situations d&#39;urgence.</p>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4.2"></div>
<h4 id="sec13-4-2" className="mrgn-tp-0">13.4.2	Défaillances secondaires</h4>  <p>Ceci précise les critères auxquels  doivent répondre les défaillances secondaires, à savoir les défaillances  supplémentaires et les défaillances d&#39;indicateurs :</p>  <ol>
<li>Une défaillance supplémentaire  est une défectuosité d&#39;une pièce d&#39;équipement, d&#39;un dispositif de commande ou d&#39;un  composant d&#39;un système qui l&#39;empêche de fonctionner correctement lorsqu&#39;il est  actionné automatiquement ou par l&#39;opérateur, ou une panne d&#39;une pièce d&#39;équipement  en marche à la suite d&#39;une défaillance principale.
Chaque défaillance supplémentaire répond à tous les critères suivants :
<ol className="list-lower-alpha">
<li>La défaillance doit être  signalée par le personnel sur le terrain ou avoir un effet observable sur les  panneaux de la salle de commande simulée.</li>
<li>Il doit s&#39;agir d&#39;une  défectuosité d&#39;un composant ou d&#39;une pièce d&#39;équipement d&#39;un système qui peut  se produire durant l&#39;exploitation de la centrale, y compris une défectuosité d&#39;une  pièce d&#39;équipement en attente lorsqu&#39;elle est sollicitée.</li>
<li>En l&#39;absence d&#39;une intervention  adéquate du candidat, la défaillance fera dévier un ou plusieurs paramètres du  système vers une valeur inacceptable ou elle créera une autre condition indésirable  dans le système.</li>
<li>La défaillance nécessite un  nombre limité d&#39;actions correctives de la part des candidats.</li>
</ol>
<p>Des défaillances supplémentaires sont incluses dans les scénarios d&#39;examen  afin de faciliter l&#39;évaluation de l&#39;aptitude des candidats à surveiller les  changements qui touchent l&#39;état des systèmes d&#39;une ou de plusieurs tranches et  à réagir à ces changements.</p>
</li>
<li>Une défaillance d&#39;indicateur  est une panne d&#39;un indicateur quelconque d&#39;un panneau de la salle de commande. Chaque défaillance d&#39;indicateur répond à tous les critères suivants :
<ol>
<li>Il doit s&#39;agir d&#39;une  défectuosité de l&#39;indicateur qui peut se produire à la centrale en question  durant l&#39;exploitation.</li>
<li>L&#39;indicateur doit être utilisé  par les candidats durant le scénario d&#39;examen.</li>
<li>Il doit y avoir au moins deux  autres moyens d&#39;obtenir ou de déduire la même information à partir d&#39;indications  disponibles dans la salle de commande ou sur le terrain.</li>
<li>La défaillance de l&#39;indicateur  ne doit pas avoir d&#39;effet sur l&#39;état du système en question.</li>
</ol>
<p>Des défaillances d&#39;indicateurs sont  incluses dans les scénarios d&#39;essai afin de faciliter l&#39;évaluation de l&#39;aptitude  des candidats à surveiller l&#39;état des systèmes d&#39;une ou de plusieurs tranches.</p>
</li>  </ol>
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
<h3 id="sec13-5" className="mrgn-tp-0">13.5	Domaines de compétence et attentes génériques relatives au comportement</h3>  <p>Les cinq domaines de compétence  visés à la section 13  présentent chacun des attentes génériques de comportement (AGC) connexes qui  doivent être utilisées afin d&#39;évaluer les habiletés exigées des candidats pour  occuper le poste à la centrale nucléaire pour laquelle l&#39;accréditation initiale  est demandée. Chaque liste d&#39;AGC liée à un domaine de compétence tient  spécifiquement compte des habiletés nécessaires pour occuper un poste donné. </p>  <p>La norme de rendement acceptable  utilisée avec chaque attente générique de comportement est dictée par les  attentes des documents de la centrale nucléaire en matière de rendement,  applicables à chaque poste. Les annexes C.1 à C.3  précisent les domaines de compétence exigés pour chaque poste et les AGC  correspondantes.</p>  <p>L&#39;intégration des AGC est précisée  à la section 14, au  chapitre des exigences relatives à la conception et à l&#39;élaboration des  examens.</p>
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
<h2 id="sec14" className="mrgn-tp-0">14. Conception et élaboration des examens </h2>  <p>Les membres de l&#39;équipe d&#39;examen, sous la direction de l&#39;examinateur en chef, doivent élaborer les examens d&#39;accréditation visés à la section 13, exigés pour occuper chaque poste à la centrale nucléaire particulière pour laquelle l&#39;accréditation initiale est demandée, conformément aux exigences minimales énoncées aux sections 14.1 à 14.4.</p>  <p>De plus, les membres de l&#39;équipe d&#39;examen  doivent&nbsp;: </p>  <ol>
<li> Élaborer une fiche de contrôle de la conception pour chaque SEC, SEA, SED et SVPC, en utilisant au minimum toutes les exigences de conception énoncées aux sections 14.1 à 14.4 et aux annexes C.4 à C.10. La fiche de contrôle de la conception doit également mentionner la centrale nucléaire, le titre du scénario d&#39;examen, le poste pour lequel les candidats demandent l&#39;accréditation, la date de l&#39;examen, les critères et l&#39;endroit précis de la section 3 des guides d&#39;examen où chaque critère a été satisfait, ainsi que le nom en lettres moulées et la signature de l&#39;examinateur en chef et du chef de la formation.
<div className="module">
<p>La fiche de contrôle de la conception de chaque scénario d&#39;examen devrait être semblable au modèle présenté à l&#39;annexe D.7.</p>
</div>
</li>
<li>Élaborer une fiche de contrôle de la conception pour chaque examen, en utilisant au minimum toutes les exigences de conception énoncées aux sections 14.1 à 14.4 et inclure une case à cocher permettant d&#39;indiquer que l&#39;examen n&#39;a pas été utilisé pour la tenue d&#39;un examen précédent. La fiche de contrôle de la conception de l&#39;examen doit également mentionner le titre de l&#39;examen en indiquant le poste pour lequel les candidats demandent l&#39;accréditation, la date de l&#39;examen, le scénario d&#39;examen qui a satisfait à chacun des critères, ainsi que le nom en lettres moulées et la signature de l&#39;examinateur en chef et du chef de la formation.
<div className="module">
<p>La fiche de contrôle de la conception de chaque examen spécifique à un poste devrait être semblable au modèle présenté à l&#39;annexe D.8.</p>
</div>
</li>  </ol>
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
<h3 id="sec14-1" className="mrgn-tp-0">14.1	Examen pour opérateur de réacteur</h3>  <p>Les  examens sur simulateur destinés aux candidats OR doivent être conçus pour  satisfaire aux critères suivants&nbsp;:</p>  <ol>
<li>L&#39;ensemble de l&#39;examen doit  comprendre trois SEC.</li>
<li>Chaque SEC doit être conçu  conformément aux critères présentés à l&#39;annexe C.4, et  conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Les SEC doivent couvrir une  vaste gamme de défaillances d&#39;équipement, de perturbations de la centrale et de  manœuvres de systèmes à exécuter.</li>
<li>La répétition des interventions  requises de la part des opérateurs doit être réduite au minimum d&#39;un scénario à  un autre.</li>
<li>Les conditions initiales de la  centrale, y compris la puissance du ou des réacteurs, doivent varier d&#39;un SEC à  un autre.</li>
<li>Au moins un SEC doit&nbsp;:
<ol className="list-lower-alpha">
<li>commencer dans des conditions  initiales différentes des conditions normales de fonctionnement à pleine puissance  qui ont un effet important sur les actions que les candidats devront exécuter</li>
<li>compter une défaillance  principale de catégorie 4 définie au paragraphe 13.4.1</li>
<li>compter une panne d&#39;une action  automatique majeure pendant une perturbation que les candidats doivent détecter  et à laquelle ils doivent réagir immédiatement</li>
<li>compter une situation dans  laquelle un article des lignes de conduite pour l&#39;exploitation (LCE) n&#39;est pas  respecté et que les candidats doivent détecter et corriger</li>
<li>compter une indisponibilité d&#39;un  système spécial de sûreté ou d&#39;un système de sûreté en attente que les  candidats doivent détecter et corriger</li>
<li>Dans le cas d&#39;une centrale à  plusieurs tranches, au moins un SEC compte des conditions d&#39;un ou de plusieurs  des groupes réacteurs, autres que le groupe réacteur simulé, qui empêchent ou  retardent considérablement l&#39;arrivée à ce dernier d&#39;un ou des deux OR appelés  en renfort ou qui obligent un ou les deux OR appelés en renfort à quitter le  réacteur simulé durant le SEC.</li>
</ol>
</li>
<li>Au moins deux SEC  doivent&nbsp;:
<ol className="list-lower-alpha">
<li>comprendre une ou plusieurs  situations qui obligent les candidats à déterminer ou à recommander la suite  des actions à poser parce qu&#39;il n&#39;y a pas de procédure pertinente, ou parce que  les procédures sont incomplètes, comportent des instructions contradictoires ou  sont inefficaces</li>
<li>comprendre des défaillances  complexes ou des conditions anormales simultanées qui obligent les candidats à  déterminer les interventions qu&#39;eux-mêmes ou que les membres de l&#39;équipe de  soutien doivent effectuer en priorité</li>
</ol>
</li>
<li>L&#39;examen doit mettre les  candidats à l&#39;épreuve dans tous les domaines de compétence énumérés à l&#39;annexe C.1, de  la façon suivante&nbsp;:
<ol className="list-lower-alpha">
<li>au moins 25 fois dans les domaines  de compétence 1, 3, 4 et 5</li>
<li>au moins&nbsp;15 fois dans le domaine  de compétence 2</li>
</ol>
</li>
<li>Les scénarios d&#39;examen et l&#39;ensemble  de l&#39;examen doivent être conçus pour être menés dans les délais présentés au  tableau&nbsp;4.</li>
<li>Après avoir achevé la  conception d&#39;un scénario d&#39;examen, une fiche de contrôle de la conception doit  être remplie pour confirmer que le scénario d&#39;examen en question satisfait aux  critères de la fiche.</li>
<li>Chaque fiche de contrôle de la  conception d&#39;un scénario d&#39;examen doit être examinée, approuvée, signée et  datée par l&#39;examinateur en chef et le chef de la formation avant d&#39;élaborer le  guide d&#39;examen correspondant.</li>
<li>Après avoir achevé la  conception des trois SEC, une fiche de contrôle de la conception de l&#39;examen  doit être remplie pour confirmer que l&#39;examen satisfait aux critères de la  fiche.</li>
<li>La fiche de contrôle de la  conception de l&#39;examen doit être examinée, approuvée, signée et datée par l&#39;examinateur  en chef et le chef de la formation avant d&#39;élaborer le guide d&#39;examen  correspondant.</li>  </ol>
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
<h3 id="sec14-2" className="mrgn-tp-0">14.2	Examen pour opérateur de la tranche 0</h3>  <p>Les examens sur simulateur destinés  aux candidats OT0 doivent être conçus pour satisfaire aux critères  suivants&nbsp;:</p>  <ol>
<li>L&#39;ensemble de l&#39;examen doit  comprendre deux SEC. </li>
<li>Chaque SEC doit être conçu  conformément aux critères présentés à l&#39;annexe C.5, et  conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Les SEC doivent couvrir une  vaste gamme de défaillances d&#39;équipement, de perturbations de la centrale et de  manœuvres de systèmes à exécuter par les titulaires du poste d&#39;OT0.</li>
<li>La répétition des interventions  requises de la part des opérateurs doit être réduite au minimum d&#39;un scénario à  un autre.</li>
<li>Les conditions initiales de la  centrale, y compris les conditions des tranches, doivent varier d&#39;un SEC à un autre.</li>
<li>Au moins un SEC doit&nbsp;:
<ol className="list-lower-alpha">
<li>commencer dans des conditions  initiales des systèmes exploités par les OT0 différentes des conditions  normales de fonctionnement précisées dans les procédures d&#39;exploitation qui ont  un effet important sur les actions que les candidats devront exécuter</li>
<li>compter une défaillance  principale de catégorie&nbsp;4, telle que définie au paragraphe&nbsp;13.4.1,  touchant une ou plusieurs tranches et qui exige des candidats une intervention  complexe</li>
<li>compter une panne d&#39;une action  automatique majeure survenant lors d&#39;une exploitation complexe des systèmes de  la tranche&nbsp;0, que les candidats doivent détecter et à laquelle ils doivent  réagir immédiatement</li>
<li>compter une situation dans  laquelle un article des LCE n&#39;est pas respecté et que les candidats doivent  détecter et corriger</li>
<li>compter une indisponibilité d&#39;un  système spécial de sûreté ou d&#39;un système de sûreté en attente que les  candidats doivent détecter et corriger</li>
</ol>
</li>
<li>Un SEC doit mettre les  candidats à l&#39;épreuve dans le rôle d&#39;OT0 en chef et l&#39;autre doit mettre les  candidats à l&#39;épreuve dans le rôle d&#39;OT0 de renfort.</li>
<li>Il doit y avoir une ou  plusieurs situations qui obligent les candidats à déterminer ou à recommander  la suite des actions à poser parce qu&#39;il n&#39;y a pas de procédure pertinente, ou  parce que les procédures sont incomplètes, comportent des instructions  contradictoires ou sont inefficaces. </li>
<li>L&#39;examen doit comporter au  moins deux cas de défaillances complexes ou de conditions anormales simultanées  des systèmes exploités par les OT0 qui obligent les candidats à déterminer les  interventions qu&#39;eux-mêmes ou que les membres de l&#39;équipe de soutien doivent  effectuer en priorité.</li>
<li>Dans les deux SEC, l&#39;arrivée du  deuxième OT0 dans la salle de commande doit être retardée pendant environ  15&nbsp;minutes.</li>
<li>L&#39;examen doit mettre les  candidats à l&#39;épreuve dans tous les domaines de compétence énumérés à l&#39;annexe C.1, de  la façon suivante&nbsp;:
<ol className="list-lower-alpha">
<li>au moins 25 fois dans les domaines  de compétence 1, 3, 4 et 5</li>
<li>au moins&nbsp;15 fois dans le domaine  de compétence 2</li>
</ol>
</li>
<li>Les scénarios d&#39;examen et l&#39;ensemble  de l&#39;examen doivent être conçus pour être menés dans les délais présentés au  tableau&nbsp;4.</li>
<li>Après avoir achevé la  conception de chaque scénario d&#39;examen, une fiche de contrôle de la conception  doit être remplie pour confirmer que le scénario d&#39;examen en question satisfait  aux critères de la fiche. </li>
<li>Chaque fiche de contrôle de la  conception d&#39;un scénario d&#39;examen doit être examinée, approuvée, signée et  datée par l&#39;examinateur en chef et le chef de la formation avant d&#39;élaborer le  guide d&#39;examen correspondant.</li>
<li>Après avoir achevé la  conception des deux SEC, une fiche de contrôle de la conception de l&#39;examen  doit être remplie pour confirmer que l&#39;examen satisfait aux critères de la  fiche. </li>
<li>La fiche de contrôle de la  conception de l&#39;examen doit être examinée, approuvée, signée et datée par l&#39;examinateur  en chef et le chef de la formation avant d&#39;élaborer le guide d&#39;examen  correspondant. </li>  </ol>
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
<h3 id="sec14-3" className="mrgn-tp-0">14.3	Examen pour chef de quart de centrale</h3>  <p>Les examens sur simulateur destinés  aux candidats au poste de CQC aux centrales à une seule tranche doivent être  conçus pour satisfaire aux critères suivants&nbsp;:</p>  <ol>
<li>L&#39;ensemble de l&#39;examen doit  comprendre deux SEC et deux SEA.</li>
<li>Chaque SEC doit être conçu  conformément aux critères présentés à l&#39;annexe C.6, et  conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Chaque SEA doit être conçu  conformément aux critères présentés à l&#39;annexe C.7, et conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Les scénarios d&#39;examen doivent  couvrir une vaste gamme de défaillances d&#39;équipement, de perturbations de la  centrale et de manœuvres de systèmes à exécuter.</li>
<li>La répétition des interventions  requises doit être réduite au minimum d&#39;un scénario d&#39;examen à un autre.</li>
<li>Les conditions initiales de la  centrale, y compris la puissance du réacteur, doivent varier d&#39;un scénario d&#39;examen  à un autre.</li>
<li>Au moins un scénario d&#39;examen  doit&nbsp;:
<ol className="list-lower-alpha">
<li>commencer dans des conditions  initiales différentes des conditions normales de fonctionnement à pleine  puissance qui ont un effet important sur les actions que les candidats devront  exécuter</li>
<li>compter une défaillance principale  de catégorie 4 définie au paragraphe 13.4.1</li>
<li>compter une panne d&#39;une action  automatique majeure pendant une perturbation que les candidats doivent détecter  et à laquelle ils doivent réagir immédiatement</li>
<li>compter une indisponibilité d&#39;un  système spécial de sûreté ou d&#39;un système de sûreté en attente que les  candidats doivent détecter et corriger</li>
</ol>
</li>
<li>Au moins un SEC doit comprendre  des défaillances ou des conditions anormales simultanées de la centrale qui  obligent les candidats à donner aux membres de l&#39;équipe de soutien des  directives concernant deux procédures d&#39;exploitation ou marches à suivre  complexes qui doivent être mises en œuvre rapidement.</li>
<li>Au moins un SEA doit compter  des défaillances ou des conditions anormales simultanées qui obligent les  candidats à déterminer les interventions qu&#39;eux-mêmes ou que les membres de l&#39;équipe  de soutien doivent effectuer en priorité.</li>
<li>Au moins deux scénarios d&#39;examen  doivent&nbsp;:
<ol className="list-lower-alpha">
<li>comprendre une ou plusieurs  situations qui obligent les candidats à déterminer la suite des actions à poser  parce qu&#39;il n&#39;y a pas de procédure pertinente, ou parce que les procédures sont  incomplètes, comportent des instructions contradictoires ou sont inefficaces</li>
<li>compter une situation dans  laquelle un article des LCE n&#39;est pas respecté et que les candidats doivent  détecter et corriger</li>
</ol>
</li>
<li>L&#39;examen doit mettre les  candidats à l&#39;épreuve dans tous les domaines de compétence énumérés à l&#39;annexe C.2, de  la façon suivante&nbsp;:
<ol className="list-lower-alpha">
<li>au moins 25 fois dans les domaines  de compétence 1, 3, 4 et 5</li>
<li>au moins&nbsp;15 fois dans le domaine  de compétence 2</li>
</ol>
</li>
<li>Les scénarios d&#39;examen et l&#39;ensemble  de l&#39;examen doivent être conçus pour être menés dans les délais présentés au  tableau&nbsp;4.</li>
<li>Après avoir achevé la  conception de chaque scénario d&#39;examen, une fiche de contrôle de la conception  doit être remplie pour confirmer que le scénario d&#39;examen en question satisfait  aux critères de la fiche. </li>
<li>Chaque fiche de contrôle de la  conception d&#39;un scénario d&#39;examen doit être examinée, approuvée, signée et  datée par l&#39;examinateur en chef et le chef de la formation avant d&#39;élaborer le  guide d&#39;examen correspondant.</li>
<li>Après avoir achevé la  conception des deux SEC et des deux SEA, une fiche de contrôle de la conception  de l&#39;examen doit être remplie pour confirmer que l&#39;examen satisfait aux  critères de la fiche. </li>
<li>La fiche de contrôle de la  conception de l&#39;examen doit être examinée, approuvée, signée et datée par l&#39;examinateur  en chef et le chef de la formation avant d&#39;élaborer le guide d&#39;examen correspondant. </li>  </ol>
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
<h3 id="sec14-4" className="mrgn-tp-0">14.4	Examen pour chef de quart en salle de commande</h3>  <p>Les examens sur simulateur destinés  aux candidats CQSC aux centrales à tranches multiples doivent être conçus pour  satisfaire aux critères suivants&nbsp;:</p>  <ol>
<li>L&#39;ensemble de l&#39;examen doit  comprendre deux SEC, trois SED et un SVPC.</li>
<li>Chaque SEC doit être conçu  conformément aux critères présentés à l&#39;annexe C.8, et conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Chaque SED doit être conçu  conformément aux critères présentés à l&#39;annexe C.9, et conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Chaque SVPC doit être conçu  conformément aux critères présentés à l&#39;annexe C.10, et conformément à la section 14.5 en ce  qui a trait au guide d&#39;examen applicable.</li>
<li>Les scénarios d&#39;examen doivent  couvrir une vaste gamme de défaillances d&#39;équipement, de perturbations de la  centrale et de manœuvres de systèmes à exécuter.</li>
<li>La répétition des interventions  requises doit être réduite au minimum d&#39;un scénario d&#39;examen à un autre.</li>
<li>Les conditions initiales de la  centrale, y compris la puissance du ou des réacteurs, doivent varier d&#39;un  scénario d&#39;examen à un autre.</li>
<li>Au moins un SEC doit&nbsp;:
<ol className="list-lower-alpha">
<li>commencer dans des conditions  initiales différentes des conditions normales de fonctionnement à pleine  puissance qui ont un effet important sur les actions que les candidats devront  exécuter</li>
<li>comprendre des défaillances ou  des conditions anormales simultanées de la centrale qui obligent les candidats  à donner aux membres de l&#39;équipe de soutien des directives concernant deux  procédures d&#39;exploitation ou marches à suivre complexes qui doivent être mises  en œuvre rapidement</li>
<li>comprendre des défaillances  complexes et simultanées survenant au niveau du groupe réacteur et de la  tranche&nbsp;0, ou au niveau du groupe réacteur et des systèmes simulés  partagés par plusieurs groupes réacteurs, qui obligent les candidats à  déterminer les interventions qu&#39;eux-mêmes ou que les membres de l&#39;équipe de  soutien doivent effectuer en priorité</li>
</ol>
</li>
<li>Au cours d&#39;un SEC, les  candidats doivent être obligés de donner aux membres de l&#39;équipe de soutien des  directives précises concernant la marche à suivre dans une situation qui  nécessite l&#39;exécution rapide d&#39;une séquence complexe d&#39;interventions de l&#39;opérateur  parce que l&#39;OR ou l&#39;OT0 ont besoin de l&#39;aide du CQSC.</li>
<li>Au moins un SED doit comprendre  des conditions anormales complexes et simultanées de la centrale qui obligent  les candidats à déterminer les interventions à effectuer en priorité.</li>
<li>Au moins un SEC ou SED  doit&nbsp;:
<ol className="list-lower-alpha">
<li>compter une défaillance  principale de catégorie 4 définie au paragraphe 13.4.1</li>
<li>compter une panne d&#39;une action  automatique majeure pendant une perturbation que les candidats doivent détecter  et à laquelle ils doivent réagir immédiatement</li>
</ol>
</li>
<li>Au moins un scénario d&#39;examen  doit compter une indisponibilité d&#39;un système spécial de sûreté ou d&#39;un système  de sûreté en attente que les candidats doivent détecter et corriger.</li>
<li>Au moins deux scénarios d&#39;examen doivent&nbsp;:
<ol className="list-lower-alpha">
<li>comprendre une ou plusieurs  situations qui obligent les candidats à déterminer la suite des actions à poser  parce qu&#39;il n&#39;y a pas de procédure pertinente, ou parce que les procédures sont  incomplètes, comportent des instructions contradictoires ou sont inefficaces</li>
<li>compter une situation dans  laquelle un article des LCE n&#39;est pas respecté et que les candidats doivent  détecter et corriger</li>
</ol>
</li>
<li>L&#39;examen doit mettre les  candidats à l&#39;épreuve dans tous les domaines de compétence énumérés à l&#39;annexe&nbsp;C.3,  de la façon suivante&nbsp;:
<ol className="list-lower-alpha">
<li>au moins 25 fois dans les domaines  de compétence 1, 3, 4 et 5;</li>
<li>au moins&nbsp;15 fois dans le domaine  de compétence 2.</li>
</ol>
</li>
<li>Les scénarios d&#39;examen et l&#39;ensemble  de l&#39;examen doivent être conçus pour être menés dans les délais présentés au  tableau&nbsp;4.</li>
<li>Après avoir achevé la  conception de chaque scénario d&#39;examen, une fiche de contrôle de la conception  doit être remplie pour confirmer que le scénario d&#39;examen en question satisfait  aux critères de la fiche. </li>
<li>Chaque fiche de contrôle de la  conception d&#39;un scénario d&#39;examen doit être examinée, approuvée, signée et  datée par l&#39;examinateur en chef et le chef de la formation avant d&#39;élaborer le  guide d&#39;examen correspondant.</li>
<li>Après avoir achevé la  conception des deux SEC, des trois SED et du SVPC, une fiche de contrôle de la  conception de l&#39;examen doit être remplie pour confirmer que l&#39;examen satisfait  aux critères de la fiche.</li>
<li>La fiche de contrôle  de la conception de l&#39;examen doit être examinée, approuvée, signée et datée par  l&#39;examinateur en chef et le chef de la formation avant d&#39;élaborer le guide d&#39;examen  correspondant. </li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5"></div>
<h3 id="sec14-5" className="mrgn-tp-0">14.5	Guides d&#39;examen</h3>  <p>En plus des critères de conception  des scénarios d&#39;examen précisés aux annexes C.4 à C.10, les membres de l&#39;équipe  d&#39;examen doivent élaborer pour chaque scénario d&#39;examen un guide d&#39;examen  correspondant, conformément aux critères qui suivent&nbsp;: </p>  <ol>
<li>Chaque guide d&#39;examen doit avoir  une page couverture comprenant les renseignements indiqués à l&#39;annexe C.11.</li>
<li>Pour les SEC, les SEA et les SED,  le guide d&#39;examen doit comporter un certain nombre de sections et de parties au  sein des sections pertinentes, avec les renseignements indiqués à la  section&nbsp;14.5.1.</li>
<li>Pour les SVPC, le guide d&#39;examen  doit comporter un certain nombre de sections et de parties au sein des sections  pertinentes, avec les renseignements indiqués à la section&nbsp;14.5.2. </li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5.1"></div>
<h4 id="sec14-5-1" className="mrgn-tp-0">14.5.1	Guide d&#39;examen pour les SEC, les SEA et les SED</h4>  <h5>Section 1 – Sommaire du scénario d&#39;examen </h5>  <p>La section&nbsp;1 du guide d&#39;examen  doit comporter au moins trois parties, de la façon présentée à l&#39;annexe C.12.  Elle doit être réalisée lors de la conception de chaque scénario d&#39;examen et  être modifiée pour refléter tout changement important apporté au scénario d&#39;examen  durant son élaboration. </p>  <p>La partie A de cette section du guide  d&#39;examen doit contenir&nbsp;:</p>  <ol className="list-lower-alpha">
<li>une description détaillée du  scénario, notamment&nbsp;:
<ol className="list-lower-roman">
<li>les conditions initiales de la  tranche et les défaillances de départ qui débutent l&#39;épreuve</li>
<li>l&#39;évolution du groupe réacteur  (ou de la tranche&nbsp;0, le cas échéant) et des systèmes principaux en  réaction aux défaillances de départ et aux défaillances subséquentes ou aux  actions du candidat</li>
<li>une description des mesures que  le candidat est censé prendre en réponse aux conditions ou aux défaillances du  groupe réacteur (ou de la tranche&nbsp;0, le cas échéant) et des systèmes  principaux</li>
<li>les principales procédures  auxquelles le candidat est censé accéder</li>
<li>l&#39;ordre de priorité que les  candidats sont censés attribuer à leurs actions</li>
<li>toute notification que les  candidats sont tenus de faire</li>
<li>le moment où chaque acteur est  censé arriver, le rôle de celui-ci et le moment où il devrait quitter les lieux</li>
<li>tout autre détail sur la façon  dont le scénario doit se dérouler durant l&#39;examen</li>
<li>l&#39;instant final du scénario d&#39;examen,  clairement défini</li>
</ol>
</li>
<li>une liste de toutes les  défaillances utilisées, des procédures correspondantes à utiliser accompagnées  du numéro de révision et de l&#39;effet sur les actions que le candidat devra exécuter  ou sur l&#39;évolution des conditions de la centrale</li>
<li>une liste des alarmes et  messages importants</li>
<li>une liste de tout l&#39;équipement  hors service, avec l&#39;effet correspondant sur les actions que le candidat devra  exécuter ou sur l&#39;évolution des conditions de la centrale</li>  </ol>  <p>La partie B de cette section du  guide d&#39;examen doit contenvir les paramètres de systèmes à enregistrer pendant l&#39;examen. </p>  <p>La partie C de cette section du  guide d&#39;examen doit contenir les modifications mineures apportées durant l&#39;examen  et les raisons de celles-ci.</p>  <h5>Section 2 – Conditions initiales de la centrale</h5>  <p>Cette section du guide d&#39;examen  doit contenir des détails sur les conditions initiales de la centrale  nucléaire, définies lors de la conception du scénario d&#39;examen :</p>  <ol className="list-lower-alpha">
<li>puissance de chaque réacteur</li>
<li>charge de chaque  turboalternateur</li>
<li>mode de contrôle du groupe  réacteur simulé, s&#39;il y a lieu</li>
<li>niveau moyen des barres  liquides du réacteur simulé</li>
<li>état des principaux systèmes  des diverses tranches</li>
<li>équipement hors service</li>
<li>manœuvres de rechargement du  combustible en cours</li>
<li>essais de routine et activités  d&#39;entretien en cours</li>
<li>autres conditions de la  centrale nucléaire </li>  </ol>  <p>Cette section du guide d&#39;examen  doit également détailler l&#39;endroit où chaque membre de l&#39;équipe de soutien en  salle de commande doit se trouver au début du scénario d&#39;examen.</p>  <p>Ces renseignements doivent être  communiqués au candidat au moment du changement de quart effectué au début du  scénario d&#39;examen.</p>  <h5>Section 3 – Grille d&#39;observation des interventions du candidat</h5>  <div className="module">
<p>La grille d&#39;observation des interventions du candidat est conçue pour permettre aux examinateurs de noter précisément la réaction du candidat durant l&#39;épreuve, indépendamment des enregistrements vidéo et du système d&#39;enregistrement des actions posées. Elle contient tous les renseignements nécessaires au scénario d&#39;examen, disposés selon l&#39;ordre d&#39;apparition prévu, et reflète le plus exactement possible les attentes de la centrale à l&#39;égard du comportement d&#39;un titulaire normalement qualifié pour le poste demandé par le candidat.</p>  </div>  <p>Cette section du guide d&#39;examen doit :</p>  <ol className="list-lower-alpha">
<li>détailler la séquence des  actions et des vérifications que les candidats sont censés accomplir en réponse  aux défaillances et aux conditions du scénario d&#39;examen, dans une fiche de  contrôle dont la présentation est analogue à celle du modèle illustré à l&#39;annexe  C.13.  Chaque case à cocher de la grille d&#39;observation doit comprendre l&#39;AGC  correspondante identifiée à l&#39;annexe&nbsp;C.1, C.2 ou C.3, en  fonction du poste concerné</li>
<li>comprendre des directives  détaillées à l&#39;intention de chaque membre de l&#39;équipe de soutien en salle de  commande et de la personne qui dirige les interventions des opérateurs en  chantier ou qui joue leur rôle. Ces directives doivent être rédigées  conformément aux critères de l&#39;annexe C.14</li>
<li>comprendre, pour les candidats  CQC et CQSC, les questions normalisées à poser à la fin du scénario d&#39;examen,  précisées à l&#39;annexe C.15, avec  des réponses complètes et exactes et l&#39;AGC correspondante identifiée à l&#39;annexe  C.2 ou C.3, en  fonction du poste concerné</li>  </ol>  <p>La grille d&#39;observation doit être  conçue de manière à permettre aux examinateurs de noter précisément la réaction  des candidats aux conditions du scénario, indépendamment des enregistrements  vidéo et du système d&#39;enregistrement des actions posées. Elle doit refléter le  plus exactement possible le comportement d&#39;un titulaire normalement qualifié pour  le poste demandé par le candidat et comprendre les renseignements suivants,  disposés selon l&#39;ordre d&#39;apparition prévue et accompagnés de références aux AGC  appropriées pour chaque étape&nbsp;:</p>  <h6>Pour  les SEC et les SEA </h6>  <p>Pour un SEC et un SEA, les grilles  d&#39;observation des interventions du candidat doivent comprendre les éléments suivants&nbsp;:</p>  <ol className="list-lower-alpha">
<li>les défaillances principales et  le moment où chacune se produit</li>
<li>la séquence des alarmes et des  messages importants reçus sur les panneaux et les écrans à tube cathodique (ou  les écrans d&#39;ordinateur) de la salle de commande suite à l&#39;apparition de chaque  défaillance principale</li>
<li>les défaillances secondaires  qui suivent une défaillance principale et le moment où chacune devient  observable</li>
<li>toute alarme ou message  important reçu sur les panneaux et les écrans à tube cathodique (ou les écrans  d&#39;ordinateur) de la salle de commande suite à l&#39;apparition de chaque  défaillance secondaire</li>
<li>le moment où chaque membre de l&#39;équipe  de soutien en salle de commande doit se présenter à la tranche pertinente après  avoir été appelé</li>
<li>les alarmes, les messages, les  défaillances d&#39;équipement et tout autre renseignement que l&#39;équipe de soutien  en salle de commande doit communiquer aux candidats et quand chaque renseignement  doit être communiqué</li>
<li>les conditions sur le terrain  et tout autre renseignement que la personne qui dirige les activités ou qui  joue le rôle des opérateurs sue le terrain doit communiquer aux candidats et  quand chaque renseignement doit être communiqué</li>
<li>les vérifications d&#39;actions  automatiques que les candidats doivent effectuer et les indicateurs à utiliser à  cet effet (voir la note ci-dessous). Dans le cas de systèmes complexes où  plusieurs dispositifs identiques sont actionnés automatiquement (par exemple,  le système de refroidissement d&#39;urgence du cœur), il est possible d&#39;utiliser  des énoncés génériques (par exemple, «&nbsp;s&#39;assurer que les vannes d&#39;isolation  des collecteurs sont ouvertes&nbsp;»)</li>
<li>les vérifications de paramètres  et d&#39;indicateurs des systèmes que les candidats doivent effectuer, y compris  celles visant à déterminer la nature d&#39;une défaillance principale et les  procédures d&#39;exploitation pertinentes, et les indicateurs à utiliser à cet  effet</li>
<li>les actions et les  vérifications que les candidats doivent effectuer ou demander à un membre de l&#39;équipe  de soutien en salle de commande d&#39;effectuer, à partir de leur diagnostic, avant  de consulter les procédures d&#39;exploitation pertinentes, en précisant les  commandes ou dispositifs à actionner et les indicateurs à utiliser</li>
<li>pour les candidats OR et OT0 et  les candidats CQC lors d&#39;un SEA, les actions et les vérifications que les  candidats doivent effectuer ou demander à un membre de l&#39;équipe de soutien en  salle de commande d&#39;effectuer pour mettre en œuvre chaque étape applicable des  procédures pertinentes, en précisant les commandes ou dispositifs à actionner  et les indicateurs à utiliser. Ces actions et ces vérifications comprennent  toute pratique courante d&#39;exploitation qui n&#39;est pas expressément mentionnée  dans une étape de la procédure mais est liée à son exécution, en se fondant sur  la formation et les attentes de la direction de la centrale</li>
<li>pour les candidats CQC et CQSC  lors d&#39;un SEC, les directives précises que les candidats doivent donner aux  membres de l&#39;équipe de soutien en salle de commande pour que ceux-ci exécutent  les procédures d&#39;exploitation pertinentes</li>
<li>pour les candidats CQC et CQSC  lors d&#39;un SEC, les actions et les vérifications que les candidats doivent  demander aux membres de l&#39;équipe de soutien en salle de commande d&#39;accomplir  chaque fois que ceux-ci demandent l&#39;aide du chef de quart durant l&#39;exécution d&#39;une  procédure, en précisant les dispositifs à actionner et les indicateurs à  utiliser</li>
<li>pour les candidats CQC et CQSC,  les actions et les vérifications que les candidats doivent effectuer pour  mettre en œuvre toute étape d&#39;une procédure pertinente spécifiquement attribuée  au CQC ou au CQSC</li>
<li>si les procédures d&#39;exploitation  ne traitent pas spécifiquement d&#39;une défaillance ou d&#39;une situation donnée, les  actions et les vérifications que les candidats doivent effectuer ou demander  aux membres de l&#39;équipe de soutien en salle de commande d&#39;effectuer pour mettre  la tranche, les systèmes ou l&#39;équipement dans l&#39;état requis, en précisant les  commandes ou dispositifs à actionner et les indicateurs à utiliser</li>
<li>les vérifications que les  candidats doivent effectuer pour déterminer la nature de toute défaillance  secondaire et identifier la procédure d&#39;exploitation pertinente, s&#39;il y a lieu,  en précisant les indicateurs à utiliser</li>
<li>les actions et les  vérifications que les candidats doivent effectuer ou demander à un membre de l&#39;équipe  de soutien en salle de commande d&#39;effectuer après avoir constaté une  défaillance secondaire, en précisant les commandes ou dispositifs à actionner  et les indicateurs à utiliser</li>
<li>pour les candidats OR et OT0 et  les candidats CQC lors d&#39;un SEA, les instructions précises, au besoin avec  démonstration à l&#39;appui, que les candidats doivent donner à un membre de l&#39;équipe  de soutien en salle de commande avant de lui déléguer une tâche particulière et  l&#39;information précise à communiquer aux candidats une fois la tâche terminée</li>
<li>toutes les demandes d&#39;intervention  en salle d&#39;équipement que l&#39;on s&#39;attend que les candidats feront et, pour  chacune, le temps qu&#39;il faudrait pour réaliser l&#39;intervention à la centrale et  l&#39;information précise à communiquer aux candidats une fois l&#39;intervention  terminée</li>
<li>toutes les demandes d&#39;intervention  sur le terrain que l&#39;on s&#39;attend que les candidats feront et, pour chacune, le  nombre d&#39;opérateurs et le temps qu&#39;il faudrait pour réaliser l&#39;intervention à  la centrale et l&#39;information précise à communiquer aux candidats une fois l&#39;intervention  terminée</li>
<li>l&#39;information précise que le  candidat doit donner à l&#39;équipe de soutien</li>
<li>les avis que les candidats  doivent émettre et les demandes d&#39;autorisation qu&#39;ils doivent faire</li>
<li>pour les candidats CQC et CQSC,  les vérifications relatives à l&#39;état des systèmes, de la tranche et de la  centrale ainsi qu&#39;aux contraintes et aux limites d&#39;exploitation qu&#39;ils doivent  effectuer avant d&#39;approuver les demandes de l&#39;équipe de soutien</li>
<li>dans le cas où, à une centrale  à plusieurs tranches, on donnera à un ou à plusieurs membres accrédités de l&#39;équipe  de soutien la consigne de quitter le réacteur simulé ou la tranche 0 pendant le  déroulement du scénario, à quel moment chaque personne doit quitter la tranche  en question et, le cas échéant, à quel moment chaque personne recevra la  consigne d&#39;y retourner</li>
<li>pour les candidats CQC et CQSC,  les questions normalisées qui figurent à la partie&nbsp;A de l&#39;annexe C.15, avec  des réponses complètes et exactes </li>  </ol>  <p>La grille d&#39;observation doit  préciser l&#39;indicateur ou le groupe d&#39;indicateurs à utiliser pour vérifier ou  surveiller un paramètre ou une condition si ce renseignement figure dans la  procédure d&#39;exploitation pertinente ou si un seul indicateur ou groupe d&#39;indicateurs  est fiable dans les circonstances.</p>  <h4>Pour  un SED&nbsp;</h4>  <p>Pour un SED, les grilles d&#39;observation  des interventions du candidat doivent comprendre les éléments suivants&nbsp;:</p>  <ol className="list-lower-alpha">
<li>la défaillance principale</li>
<li>la séquence des alarmes et des  messages importants reçus sur les panneaux et les écrans à tube cathodique (ou  les écrans d&#39;ordinateur) de la salle de commande suite à l&#39;apparition de la  défaillance principale</li>
<li>toute défaillance secondaire  qui suit la défaillance principale et le moment où elle devient observable</li>
<li>toute alarme ou message  important reçu sur les panneaux et les écrans à tube cathodique (ou les écrans  d&#39;ordinateur) de la salle de commande suite à l&#39;apparition d&#39;une défaillance  secondaire</li>
<li>les conditions sur le terrain  et tout autre renseignement que la personne qui joue le rôle des opérateurs sur  le terrain doit communiquer aux candidats et quand chaque renseignement doit  être communiqué</li>
<li>les vérifications d&#39;actions  automatiques majeures et des principaux paramètres des systèmes que les candidats  doivent effectuer, en précisant les indicateurs à utiliser (voir la note  ci-dessus). Dans le cas de systèmes complexes où plusieurs dispositifs  identiques sont actionnés automatiquement (par exemple, le système de  refroidissement d&#39;urgence du cœur), il est possible d&#39;utiliser des énoncés  génériques (par exemple, «&nbsp;s&#39;assurer que les vannes d&#39;isolation des  collecteurs sont ouvertes&nbsp;»)</li>
<li>les vérifications ou  combinaisons de vérifications de paramètres et d&#39;indicateurs des systèmes que  les candidats doivent effectuer afin de déterminer sans ambiguïté la nature de  la défaillance principale et identifier les procédures d&#39;exploitation  pertinentes, en précisant les indicateurs à utiliser (voir la note ci-dessus).  Lorsqu&#39;il existe plusieurs façons de poser le bon diagnostic, chaque  combinaison de vérifications acceptable permettant de tirer une seule et unique  conclusion doit être consignée par écrit</li>
<li>les vérifications que les  candidats doivent effectuer pour déterminer la nature de toute défaillance  secondaire et identifier les procédures d&#39;exploitation pertinentes, s&#39;il y a  lieu, en précisant les indicateurs à utiliser (voir la note ci-dessus)</li>
<li>les actions que les candidats  doivent demander à l&#39;équipe de soutien en salle de commande d&#39;effectuer après  avoir constaté une panne d&#39;une action automatique majeure</li>
<li>toutes les demandes de  vérification en salle d&#39;équipement que l&#39;on s&#39;attend que les candidats feront  et, pour chaque vérification, le temps qu&#39;il faudrait pour la faire à la  centrale et l&#39;information précise à communiquer aux candidats après l&#39;avoir  faite</li>
<li>toutes les demandes de  vérification sur le terrain que l&#39;on s&#39;attend que les candidats feront et, pour  chaque vérification, le temps minimum qu&#39;il faudrait pour la faire à la  centrale et l&#39;information précise à communiquer aux candidats après l&#39;avoir  faite. Lorsque des renseignements demandés sur le terrain, essentiels pour  poser le bon diagnostic, peuvent être communiqués avant le temps minimum, les  vérifications en salle de commande que le candidat doit avoir effectuées avant  que l&#39;information recueillie sur le terrain ne lui soit communiquée</li>
<li>la durée maximale du SED  accordée pour poser le bon diagnostic</li>
<li>les questions normalisées qui  figurent à la partie B de l&#39;annexe C.15  doivent tenir compte des conditions réelles du scénario, avec des réponses  complètes et exactes</li>  </ol>  <h5>Section  4 – Directives à l&#39;intention de l&#39;opérateur du simulateur</h5>  <p>Cette section du guide d&#39;examen  doit détailler les activités de l&#39;opérateur du simulateur pendant le scénario d&#39;examen.  Elle doit comprendre les directives qui suivent, présentées dans l&#39;ordre d&#39;exécution  prévu. </p>  <h6>Pour les SEC et les SEA </h6>  <ol className="list-lower-alpha">
<li>les directives relatives au  réglage du simulateur</li>
<li>les vérifications à effectuer  avant le début du scénario pour s&#39;assurer que&nbsp;:
<ol className="list-lower-roman">
<li>le simulateur est dans la  configuration appropriée pour simuler correctement l&#39;état initial de la  centrale au début du scénario</li>
<li>tout l&#39;équipement hors service  est bien indiqué sur les panneaux de commande</li>
<li>les défaillances d&#39;équipement  en attente prévues sont programmées</li>
<li>tous les témoins lumineux et  les alarmes sonores fonctionnent</li>
<li>tous les appareils d&#39;enregistrement  des données fonctionnent et sont synchronisés</li>
<li>le réseau téléphonique, les  alarmes d&#39;alerte de rayonnement et d&#39;incendie ainsi que le système de diffusion  publique fonctionnent</li>
</ol>
</li>
<li>la séquence de défaillances  principales et secondaires qui doivent être inscrites durant le scénario d&#39;examen,  avec les conditions de leur activation. Les conditions possibles sont les  suivantes&nbsp;:
<ol className="list-lower-roman">
<li>une condition donnée d&#39;un  système ou d&#39;une tranche</li>
<li>la fin de l&#39;exécution d&#39;une  étape donnée d&#39;une procédure d&#39;exploitation</li>
<li>la fin de l&#39;exécution d&#39;une  manœuvre donnée en salle de commande par le candidat ou par un membre de l&#39;équipe  de soutien</li>
<li>un signal de l&#39;examinateur en  chef</li>
<li>temps déterminé après qu&#39;un  fait donné s&#39;est produit pendant le scénario
<div className="module">
<p>L&#39;examinateur en chef devrait se garder d&#39;utiliser un délai précis en tant que condition d&#39;activation d&#39;une défaillance à moins qu&#39;il ne puisse être déterminé avec précision en se fondant sur une condition existante.</p>
</div>
</li>
</ol>
</li>
<li> les interventions requises pour reproduire en salle de commande le résultat de chaque manœuvre effectuée sur le terrain ou dans la salle d&#39;équipement de commande et le temps après lequel le résultat sera observable en salle de commande, compte tenu du temps requis pour effectuer la manœuvre à la centrale</li>
<li> les données à recueillir une fois le scénario terminé, d&#39;après la liste de l&#39;annexe C.16</li>  </ol>  <h6>Pour un SED</h6>  <ol className="list-lower-alpha">
<li>les directives relatives au  réglage du simulateur</li>
<li>les vérifications à effectuer  avant le début du scénario pour s&#39;assurer que&nbsp;:
<ol className="list-lower-roman">
<li>le simulateur est dans la  configuration appropriée pour simuler correctement l&#39;état initial de la  centrale au début du scénario</li>
<li>tout l&#39;équipement hors service  est bien indiqué sur les panneaux de commande</li>
<li>toute défaillance secondaire  associée à de l&#39;équipement en attente est programmée</li>
<li>tous les témoins lumineux et  les alarmes sonores fonctionnent</li>
<li>tous les appareils d&#39;enregistrement  des données fonctionnent et sont synchronisés</li>
<li>le réseau téléphonique, les  alarmes d&#39;alerte de rayonnement et d&#39;incendie ainsi que le système de diffusion  publique fonctionnent</li>
</ol>
</li>
<li>la défaillance principale qui  doit être entrée au début du SED</li>
<li>toute défaillance supplémentaire  liée à une pièce d&#39;équipement en marche qui doit être entrée durant le SED,  avec les conditions de son activation</li>
<li>les données à recueillir une  fois le SED terminé, d&#39;après la liste de l&#39;annexe C.16</li>  </ol>  <h5>Section 5 – Directives à l&#39;intention de l&#39;équipe de soutien en salle de commande</h5>  <p>Cette section du guide d&#39;examen doit comprendre des directives distinctes à l&#39;intention de chaque membre de l&#39;équipe de soutien en salle de commande précisant ce qu&#39;il doit faire pendant le scénario. Cette section est préparée après la répétition du scénario d&#39;examen avec l&#39;équipe de soutien. La séquence de directives à l&#39;intention de chaque membre de l&#39;équipe de soutien est dressée d&#39;après la section du guide d&#39;examen consacrée aux grilles d&#39;observation des interventions du candidat.</p>  <h5>Section 6 – Directives à l&#39;intention des opérateurs sur le terrain</h5>  <p>Cette section du guide d&#39;examen doit comprendre des directives précises sur ce que doit faire la personne chargée de diriger les activités ou de jouer le rôle des opérateurs sur le terrain pendant le scénario. Cette section est préparée après la répétition du scénario d&#39;examen avec l&#39;équipe de soutien. La séquence de directives visant chaque activité attendue sur le terrain est dressée d&#39;après la section du guide d&#39;examen consacrée aux grilles d&#39;observation des interventions du candidat.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5.2"></div>
<h4 id="sec14-5-2" className="mrgn-tp-0">14.5.2	Guide d&#39;examen pour les SVPC</h4>  <p>Pour  les SVPC, le guide d&#39;examen doit comporter un certain nombre de sections et de  parties au sein des sections pertinentes, semblables à celles du modèle de l&#39;annexe  C.12, avec  les renseignements suivants&nbsp;:</p>  <h5>Section 1 – Sommaire du scénario d&#39;examen </h5>  <p>La section&nbsp;1  du guide d&#39;examen doit comporter au moins deux parties, de la façon présentée à  l&#39;annexe C.12. Elle doit être réalisée lors de la conception du SVPC et être  modifiée pour refléter tout changement important apporté au scénario durant son  élaboration.</p>  <p>La partie A de  cette section du guide d&#39;examen doit contenir&nbsp;:</p>  <ol className="list-lower-alpha">
<li>une description détaillée des  tâches de vérification à accomplir par les candidats</li>
<li>la liste des anomalies de  panneaux de commande à cerner et leur effet sur les actions que le candidat  devra exécuter ou sur l&#39;évolution des conditions de la centrale</li>  </ol>  <p>La partie B de cette section du  guide d&#39;examen doit contenir les modifications mineures apportées durant l&#39;examen  et les raisons de celles-ci.</p>  <h5>Section 2 – Conditions initiales de la centrale </h5>  <p>Cette section du  guide d&#39;examen doit contenir les mêmes renseignements que ceux indiqués ci-dessus  au chapitre des conditions initiales de la centrale des guides d&#39;examen  destinés aux SEC, aux SEA et aux SED. </p>  <h5>Section 3 – Grille d&#39;observation des interventions du candidat </h5>  <p>Cette section du  guide d&#39;examen doit détailler les réponses qu&#39;un CQSC compétent est censé  donner aux questions normalisées posées à la fin du SVPC. </p>  <p>Cette grille d&#39;observation  des interventions du candidat doit être élaborée pour permettre aux  examinateurs de noter précisément les réponses fournies par les candidats,  indépendamment des enregistrements vidéo. Elle doit comprendre les  renseignements suivants&nbsp;: </p>  <ol className="list-lower-alpha">
<li>les indications de la salle de  commande associées à chaque anomalie d&#39;un panneau de commande</li>
<li>toute demande d&#39;information  disponible sur le terrain nécessaire pour l&#39;évaluation de la condition anormale  d&#39;un système associée à une anomalie d&#39;un panneau que l&#39;on s&#39;attend que les  candidats feront et, pour chacune, l&#39;information précise que l&#39;examinateur doit  communiquer aux candidats</li>
<li>le temps maximal alloué pour l&#39;accomplissement  de la tâche de vérification</li>
<li>les questions normalisées qui  figurent à la partie C de l&#39;annexe C.15, avec  des réponses complètes et exactes </li>  </ol>  <h5>Section 4 – Directives à l&#39;intention de l&#39;opérateur du simulateur </h5>  <p>Cette section du  guide d&#39;examen doit contenir les détails des activités à accomplir par l&#39;opérateur  du simulateur avant le début du SVPC. Elle doit comprendre les directives suivantes&nbsp;:</p>  <ol className="list-lower-alpha">
<li>les directives relatives au  réglage du simulateur</li>
<li>les vérifications à effectuer  avant le début du scénario pour s&#39;assurer que&nbsp;:
<ol className="list-lower-roman">
<li>le simulateur est dans la  configuration appropriée pour simuler correctement l&#39;état initial de la  centrale au début du scénario</li>
<li>tout l&#39;équipement hors service  est bien indiqué sur les panneaux de commande</li>
<li>toutes les anomalies de panneaux  de commande sont correctement programmées</li>
<li>tous les témoins lumineux et  les alarmes sonores fonctionnent</li>
<li>le système audiovisuel  fonctionne </li>
</ol>
</li>  </ol>  <h5>Section 5 – Directives à l&#39;intention  des candidats </h5>  <p>Cette section du  guide d&#39;examen doit comprendre des directives précises concernant les tâches de  vérification à accomplir par les candidats durant le SVPC.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.6"></div>
<h3 id="sec14-6" className="mrgn-tp-0">14.6	Validation des examens </h3>  <p>Les membres de l&#39;équipe d&#39;examen, sous la direction de l&#39;examinateur en chef, doivent s&#39;assurer que chaque guide d&#39;examen pour les SEC, SEA, SED et SVPC est validé sur le simulateur de la centrale nucléaire pour laquelle l&#39;accréditation initiale est demandée. </p>  <div className="module">
<p>Une validation permet de s&#39;assurer que le scénario d&#39;examen se déroule comme prévu et qu&#39;un titulaire compétent du poste pour lequel l&#39;examen est conçu a suffisamment de temps et d&#39;information pour réagir conformément aux attentes consignées en matière de rendement du personnel accrédité à cette centrale nucléaire. Lorsque des interprétations des attentes en matière de rendement se justifient, il faudrait consulter le gestionnaire de l&#39;exploitation.</p>  </div>  <p>Il faut effectuer la validation  avant d&#39;obtenir les approbations du guide d&#39;examen exigées pour la tenue d&#39;un  examen donné.</p>  <p>Au minimum, cette validation de l&#39;examen  doit être effectuée conformément aux exigences suivantes&nbsp;:</p>  <ol>
<li>s&#39;assurer qu&#39;une personne qui est ou a été accréditée à la centrale nucléaire au poste pour lequel l&#39;examen est conçu et qui n&#39;a jamais participé à un aspect quelconque de la conception de l&#39;examen, tient le rôle du candidat</li>
<li>affectuer la validation en temps réel sur le simulateur de la centrale avec la personne tenant le rôle du candidat pour confirmer que :
<ol className="list-lower-alpha">
<li>a.	chaque scénario d&#39;examen se déroule comme prévu dans le guide d&#39;examen correspondant
<div className="module">
<p>Pendant l&#39;essai, il faut surveiller étroitement les réactions du simulateur aux défaillances et aux autres conditions prévues au scénario ainsi qu&#39;aux actions attendues de la part de l&#39;opérateur.</p>
</div>
</li>
<li>les alarmes reçues dans le simulateur et les paramètres énumérés dans la fiche de contrôle de l&#39;annexe C.17 sont vérifiés afin de s&#39;assurer que :
<ol className="list-lower-roman">
<li>les principales alarmes sont  reçues au moment prévu et dans le bon ordre</li>
<li>les valeurs de chaque paramètre  contrôlé sont correctes et que toute variation d&#39;un de ces paramètres est d&#39;amplitude  et de durée approximativement exactes selon les lois physiques pertinentes et  les caractéristiques de l&#39;équipement et des systèmes de la tranche de référence</li>
<li>les circuits logiques de  commande des systèmes pertinents fonctionnent bien</li>
<li>la réaction de la tranche et  des systèmes simulés aux défaillances et les mesures que le candidat est censé  prendre sont réalistes et il n&#39;y a aucune différence équivoque entre la  réaction simulée et celle de la tranche de référence de la centrale</li>
</ol>
</li>
<li>les actions et les  vérifications que le candidat doit effectuer et les documents d&#39;exploitation  pertinents utilisés en réponse à la séquence de défaillances sont conformes aux  attentes consignées en matière de rendement du personnel accrédité à cette  centrale nucléaire</li>
<li>la séquence des actions que le  candidat doit effectuer est claire et unique et un titulaire compétent du poste  visé par le candidat devrait être en mesure de réagir comme prévu après chaque  défaillance</li>
<li>pour les scénarios d&#39;examen  comportant des situations pour lesquelles les procédures d&#39;exploitation ne  donnent pas d&#39;instructions précises, la marche à suivre par le candidat est  claire et unique et conforme aux attentes consignées en matière de rendement du  personnel accrédité à cette centrale nucléaire</li>
<li>le délai prévu entre les  défaillances successives est tel qu&#39;un titulaire compétent du poste visé par  les candidats aurait le temps de réagir comme prévu après chaque défaillance</li>
<li>toute défaillance secondaire  touche uniquement les indicateurs, équipements, composants ou dispositifs de  commande que les candidats sont censés vérifier ou actionner pendant le  déroulement du scénario, et peut être clairement détectée par le candidat</li>
<li>pour le SED, le candidat  dispose de temps et d&#39;information suffisants pour réagir de la façon attendue  aux défaillances secondaires et pour poser le bon diagnostic, et l&#39;état de la  centrale ne s&#39;est pas détérioré à un point susceptible d&#39;empêcher ou de gêner  la pose du diagnostic requis</li>
<li>pour le SVPC, le temps alloué  au candidat est suffisant pour permettre à un CQSC compétent d&#39;accomplir la  tâche de vérification</li>
<li>pour le SED, toute action à  poser pour réagir à une panne d&#39;une action automatique majeure avant d&#39;effectuer  le diagnostic de la défaillance principale est claire et n&#39;a pas d&#39;effets sur l&#39;état  de la tranche susceptibles d&#39;empêcher la formulation du bon diagnostic ou de  fausser ce diagnostic</li>
<li>la durée prévue de chaque  scénario d&#39;examen ne dépasse guère la durée maximale préconisée dans le guide d&#39;examen  et le tableau&nbsp;4 ci-dessus</li>
</ol>
</li>
<li>confirmer que la liste des  paramètres de systèmes à enregistrer durant le scénario, qui figure à la  section&nbsp;1 (Sommaire du scénario d&#39;examen) des guides d&#39;examen, est  appropriée et complète</li>
<li>pour le SEC et le SEA,  confirmer que les étapes prévues à la section&nbsp;3 (Grille d&#39;observation des  interventions du candidat) du guide d&#39;examen ne comportent pas de situations  dans lesquelles les candidats risquent davantage de faire des erreurs ou de  créer des écarts susceptibles de forcer l&#39;interruption prématurée du scénario d&#39;examen  ou de modifier l&#39;évolution du scénario à un point tel que le guide d&#39;examen ne  puisse plus servir à noter le comportement du candidat de façon fiable</li>
<li>pour chaque SEC et chaque SED,  vérifier la grille d&#39;observation des interventions du candidat (section 3) pour  s&#39;assurer que les réponses aux questions posées à la fin du scénario ne  reprennent pas des éléments du comportement déjà mesurés pendant le déroulement  du scénario</li>
<li>vérifier que chaque élément de  la grille d&#39;observation des interventions du candidat (section&nbsp;3) de  chaque guide d&#39;examen s&#39;est vu attribuer les attentes génériques relatives au  comportement appropriées, visées aux annexes C.1 à C.3, le  cas échéant</li>
<li>pour le SVPC, confirmer que le  candidat pourra clairement détecter les anomalies des panneaux de commande sur  les panneaux de la salle de commande lors de l&#39;exécution de la tâche de  vérification</li>
<li>pour le SVPC, s&#39;assurer que les  indications de la salle de commande associées à chaque anomalie d&#39;un panneau de  commande sont identiques à celles qui seraient observées dans les mêmes  conditions à la centrale</li>
<li>après avoir terminé la partie  dynamique de chaque scénario d&#39;examen, confirmer que les réponses aux questions  normalisées sont complètes et exactes sur le plan technique en demandant à la  personne tenant le rôle du candidat de répondre aux questions d&#39;examen  normalisées tirées de la partie pertinente de l&#39;annexe&nbsp;C.15, qui  ont été incorporées dans le guide d&#39;examen</li>
<li>s&#39;assurer que les directives à  l&#39;intention de l&#39;équipe de soutien ont été compilées aux sections&nbsp;5  (Directives à l&#39;intention de l&#39;équipe de soutien en salle de commande) et 6  (Directives à l&#39;intention des opérateurs sur le terrain) des guides d&#39;examen</li>
<li>confirmer que toute demande d&#39;information,  de mesures correctives ou de notifications que le candidat est censé faire aux  membres de l&#39;équipe de soutien est identifiée à la section 5 (Directives à l&#39;intention  de l&#39;équipe de soutien en salle de commande) du guide d&#39;examen</li>
<li>confirmer que toute action  accomplie et toute communication faite par les membres de l&#39;équipe de soutien  est exacte sur le plan technique et conforme aux attentes consignées en matière  de rendement du personnel accrédité à cette centrale nucléaire</li>
<li>confirmer que l&#39;examen met les  candidats à l&#39;épreuve au moins 25 fois dans les domaines de compétence 1, 3, 4  et 5 et au moins 15 fois dans le domaine de compétence 2</li>
<li>préparer la version finale des  guides d&#39;examen à la lumière du résultat de la validation de chaque scénario  avec l&#39;équipe de soutien</li>
<li>modifier le scénario d&#39;examen  et le guide d&#39;examen correspondant pour qu&#39;ils reflètent les réponses qu&#39;un  titulaire compétent du poste visé par les candidats est censé donner si, au  minimum&nbsp;:
<ol className="list-lower-alpha">
<li>il est impossible de confirmer  ou d&#39;assurer une des étapes (2 à 12) exécutées</li>
<li>il est impossible de simuler  une défaillance quelconque et ses conséquences de façon réaliste</li>
<li>le scénario comporte des  conditions pour lesquelles on ne peut prévoir avec certitude une séquence  unique d&#39;interventions</li>
<li>il faut corriger toute erreur  technique dans le guide d&#39;examen et modifier celui-ci au besoin pour qu&#39;il  décrive bien la réaction à laquelle on s&#39;attend d&#39;une équipe d&#39;exploitation  compétente
<div className="module">
<p>Si la validation révèle qu&#39;une défaillance n&#39;est pas simulée correctement, l&#39;effet désiré pourra être reproduit par une intervention de l&#39;opérateur du simulateur, pourvu qu&#39;elle se fasse à l&#39;insu des candidats. Sinon, utiliser une autre défaillance. De même, si l&#39;ensemble du scénario d&#39;examen ne se déroule pas correctement, utiliser un autre scénario.</p>
</div>
</li>
</ol>
</li>
<li> en cas de modification apportée au scénario d&#39;examen ou au guide d&#39;examen correspondant, s&#39;assurer :
<ol className="list-lower-alpha">
<li>que les critères de conception  de l&#39;examen soient toujours satisfaits</li>
<li>qu&#39;une autre validation soit  effectuée en répétant les étapes 2 à 12 ci-dessus, de la façon déterminée par l&#39;examinateur  en chef</li>
</ol>
</li>
<li>remplir la fiche de contrôle de  validation du scénario d&#39;examen concerné en indiquant, au minimum, les  renseignements présentés à l&#39;annexe C.17 </li>
<li>s&#39;assurer que le simulateur est  rétabli dans une configuration d&#39;exploitation normale de manière à ne pas  révéler le contenu des scénarios d&#39;examen élaborés ou à mener, avant de le  libérer pour d&#39;autres usages</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.7"></div>
<h3 id="sec14-7" className="mrgn-tp-0">14.7	Conception finale des guides d&#39;examen et des examens </h3>  <p>Lorsque tous les examens exigés spécifiés aux sections 14.1 à 14.4 et les guides d&#39;examen correspondants spécifiés à la section 14.5 sont achevés et après avoir terminé toutes les étapes de la validation énumérées à la section 14.6, l&#39;examinateur en chef doit s&#39;assurer que les versions finales des guides d&#39;examen, des fiches de contrôle de la conception des scénarios d&#39;examen, des fiches de contrôle de la conception des examens et des fiches de contrôle de validation des scénarios d&#39;examen sont examinées, approuvées, signées et datées par l&#39;examinateur en chef et le chef de la formation avant la répétition de chaque scénario d&#39;examen. La répétition de chaque scénario d&#39;examen approuvé doit être effectuée immédiatement, avant la tenue du scénario d&#39;examen, conformément aux indications de la sous-section 15.1.</p>
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
<h2 id="sec15" className="mrgn-tp-0">15. Tenue des examens d&#39;accréditation portant sur les habiletés</h2>  <p>Le titulaire de permis doit avoir  en place des politiques, des processus et des procédures documentés en ce qui  concerne la tenue des examens portant sur les habiletés. </p>  <p>Le titulaire de permis doit s&#39;assurer&nbsp;:</p>  <ol>
<li>que les examens sont dirigés  par l&#39;examinateur en chef et au moins un autre examinateur qui était chargé de  la conception et de l&#39;élaboration de l&#39;examen</li>
<li>que l&#39;examinateur en chef  coordonne toutes les activités de l&#39;équipe d&#39;examen </li>
<li>que les membres de l&#39;équipe d&#39;examen  ne donnent pas d&#39;indices ou de suggestions aux candidats relativement aux  diagnostics de défaillances à poser, aux décisions à prendre ou aux actions à  exécuter
<div className="module">
<p>Le fait de donner au candidat un indice ou une indication lui permettant de trouver la bonne réponse ou la marche à suivre peut entraîner l&#39;annulation du scénario ou de l&#39;examen d&#39;accréditation.</p>
</div>
</li>
<li>que les membres de l&#39;équipe d&#39;examen  réduisent au minimum leurs communications verbales et non verbales durant la  tenue de l&#39;examen</li>
<li>que le code de conduite et les  directives destinés aux séances d&#39;information à l&#39;intention de l&#39;équipe d&#39;examen,  de l&#39;équipe de soutien et des candidats ont été expliqués</li>
<li>que les questions normalisées  prévues à la fin de la partie dynamique d&#39;un scénario d&#39;examen sont posées dans  un délai raisonnable et que les questions supplémentaires éventuellement posées  par l&#39;examinateur en chef n&#39;aident pas les candidats à trouver la bonne réponse</li>
<li>que les examens d&#39;accréditation  se tiennent conformément aux exigences relatives au temps maximal alloué aux  candidats, présentées au tableau&nbsp;4 du présent document</li>
<li>que les surveillants assistent  à une séance d&#39;information conformément aux indications de la section 6 du  présent document d&#39;application de la réglementation</li>
<li>que tous les scénarios d&#39;examen  sont enregistrés à l&#39;aide d&#39;un système audiovisuel
<div className="module">
<p>Un scénario d&#39;examen ne sera pas reconnu par la CCSN à moins d&#39;avoir été correctement enregistré.</p>
</div>
</li>
<li> qu&#39;après toute activité liée aux examens d&#39;accréditation, le simulateur est rétabli dans une configuration d&#39;exploitation normale pour éviter de révéler le contenu des scénarios d&#39;examen élaborés ou à exécuter, avant de le libérer pour d&#39;autres usages</li>  </ol>  <p>L&#39;examinateur en chef doit établir le programme des candidats devant subir un examen donné et s&#39;assurer de ce qui suit :</p>  <ol>
<li>Chaque candidat est informé,  avant la tenue des examens prévus, des rôles et des responsabilités des  différentes personnes qui participent à la tenue de l&#39;examen, du comportement  attendu du candidat pendant l&#39;examen, y compris le besoin d&#39;exprimer  verbalement ses actions pour les enregistrements et les règles qu&#39;il doit  respecter. Les exigences minimales à remplir par l&#39;examinateur en chef lors de  cette séance d&#39;information figurent à l&#39;annexe C.18.</li>
<li>Tous les candidats sont  examinés, un à la fois, sur un scénario d&#39;examen donné avant le scénario d&#39;examen  suivant.</li>
<li>L&#39;ordre dans lequel les  candidats sont examinés est changé d&#39;un scénario à l&#39;autre.</li>
<li>La durée totale des scénarios d&#39;examen  menés chaque jour n&#39;impose pas d&#39;exigences excessives aux candidats ou aux  membres de l&#39;équipe d&#39;examen.
<div className="module">
<p>Chaque examen d&#39;un candidat doit être exécuté de manière uniforme et ne peut subir l&#39;incidence négative du rendement d&#39;un membre de l&#39;équipe d&#39;examen en raison de la fatigue. L&#39;examinateur en chef doit tenir compte soigneusement de la charge de travail des membres de l&#39;équipe d&#39;examen lors de l&#39;établissement ou de la modification du calendrier des examens.</p>
</div>
</li>
<li> Tout candidat qui décide de se retirer volontairement d&#39;un examen ou pris à tricher durant l&#39;examen se verra immédiatement attribuer une note d&#39;échec, et ce fait est consigné dans le formulaire de résultats d&#39;examen du candidat (voir l&#39;annexe C.23).</li>
<li> Avant la tenue d&#39;un scénario d&#39;examen, une répétition du scénario est effectuée conformément aux indications de la section 15.1.</li>  </ol>
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
<h3 id="sec15-1" className="mrgn-tp-0">15.1	Répétition des scénarios d&#39;examen avant la tenue de l&#39;examen</h3>  <p>Les membres de l&#39;équipe d&#39;examen,  sous la direction de l&#39;examinateur en chef, doivent effectuer une répétition de  chaque scénario d&#39;examen approuvé (SEC, SEA, SED et SVPC) avec les membres de l&#39;équipe  de soutien sur le simulateur de la centrale pour laquelle l&#39;examen approuvé  doit être mené et où l&#39;accréditation initiale est demandée. </p>  <p>Il faut effectuer cette répétition&nbsp;: </p>  <ol>
<li>dans un délai raisonnable,  immédiatement avant de tenir chaque scénario d&#39;examen approuvé pour la première  fois.</li>
<li>pour s&#39;assurer que l&#39;opérateur  du simulateur et les membres de l&#39;équipe de soutien connaissent à fond leurs  rôles et responsabilités durant la tenue de l&#39;examen</li>
<li>pour s&#39;assurer que le système d&#39;enregistrement  des actions posées au simulateur, les imprimantes de messages d&#39;alarmes et les  enregistreurs des paramètres requis selon le guide d&#39;examen fonctionnent</li>
<li>en temps réel, avec une personne  tenant le rôle du candidat qui est titulaire compétente du poste visé par le  candidat, pour s&#39;assurer que&nbsp;:
<ol className="list-lower-alpha">
<li>les scénarios d&#39;examen  approuvés se déroulent comme prévu dans les guides d&#39;examen approuvés</li>
<li>les réactions du simulateur  satisfont aux exigences des guides d&#39;examen approuvés</li>
<li>les membres de l&#39;équipe de  soutien réagissent de la façon indiquée aux sections&nbsp;3 (Grille d&#39;observation  des interventions du candidat) et 4 (Directives à l&#39;intention de l&#39;opérateur du  simulateur) des guides d&#39;examen approuvés</li>
</ol>
</li>
<li>pour s&#39;assurer que les copies  de tous les documents et de toutes les données qui ont trait à l&#39;examen et qui  pourraient en compromettre la confidentialité sont contrôlées. Ceci comprend  les guides d&#39;examen, les copies papier des messages d&#39;alarmes, les tendances  des paramètres, les procédures d&#39;exploitation, les schémas fonctionnels et les  documents d&#39;exploitation et de formation annotés ainsi que les notes  personnelles. Il ne faut jamais laisser de documents d&#39;examen accessibles ou  sans surveillance, y compris sur des photocopieurs se trouvant dans les aires  publiques</li>
<li>pour s&#39;assurer qu&#39;à la fin de  chaque répétition, toute modification mineure apportée par l&#39;examinateur en  chef à un guide d&#39;examen approuvé soit consignée à la section&nbsp;1, partie C  (Sommaire du scénario d&#39;examen) du guide, y compris la raison de cette  modification
<div className="module">
<p>Les modifications mineures comprennent par exemple la modification d&#39;une réaction d&#39;un membre de l&#39;équipe de soutien en réponse à une demande que le candidat est censé faire, d&#39;erreurs d&#39;ordre rédactionnel à la section 3 (Grille d&#39;observation des interventions du candidat) du guide d&#39;examen ou d&#39;une procédure d&#39;exploitation incorrecte mentionnée à la section 3 du guide d&#39;examen, qui n&#39;ont pas été identifiées lors de la validation de l&#39;examen.</p>
</div>
</li>
<li> pour s&#39;assurer que les tendances des paramètres recueillies pendant la répétition sont conservées à titre de référence
<div className="module">
<p>Les tendances des paramètres recueillies peuvent servir de référence lors de l&#39;évaluation et de la notation des candidats et peuvent être demandées par la CCSN dans le cadre de critères d&#39;inspection.</p>
</div>
</li>
<li>en plaçant le simulateur dans une configuration sécuritaire pour ne pas compromettre la confidentialité de l&#39;examen</li>  </ol>
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
<h3 id="sec15-2" className="mrgn-tp-0">15.2	Tenue de la partie dynamique d&#39;un SEC, SEA ou SED </h3>  <p>L&#39;examinateur en chef doit  coordonner la tenue de chaque scénario d&#39;examen approuvé conformément aux  exigences et aux instructions qui suivent&nbsp;: </p>  <ol>
<li>Avant d&#39;autoriser un candidat à  pénétrer dans la salle de commande du simulateur pour la tenue d&#39;un scénario d&#39;examen,  s&#39;assurer que&nbsp;:
<ol className="list-lower-alpha">
<li>le simulateur est bien réglé en  vue du scénario</li>
<li>le système d&#39;enregistrement des  actions posées au simulateur, les imprimantes de messages d&#39;alarmes, les  enregistreurs des paramètres requis et les systèmes d&#39;enregistrement  audiovisuel fonctionnent et sont synchronisés</li>
<li>tout équipement hors service  est bien indiqué sur les panneaux de commande, conformément aux indications de  la section&nbsp;1, partie B du guide d&#39;examen approuvé</li>
<li>les documents à l&#39;appui ou les  renseignements que peuvent consulter les candidats se limitent à ceux dont l&#39;utilisation  est approuvée dans la salle de commande de la centrale en question</li>
<li>tous les membres de l&#39;équipe de  soutien participant au scénario d&#39;examen pertinent sont présents et se trouvent  à l&#39;endroit qui leur est assigné</li>
<li>l&#39;équipement audiovisuel  servant à enregistrer les communications entre le candidat et les membres de l&#39;équipe  de soutien fonctionne</li>
</ol>
</li>
<li>Lorsque le candidat est  autorisé à pénétrer dans la salle de commande du simulateur, et avant de  commencer la tenue du scénario d&#39;examen, s&#39;assurer&nbsp;:
<ol className="list-lower-alpha">
<li>que le système d&#39;enregistrement  audiovisuel est en train d&#39;enregistrer</li>
<li>que le candidat reçoit un  rapport écrit précisant l&#39;état dans lequel se trouve la centrale pour le  scénario d&#39;examen, de la façon détaillée à la section&nbsp;2 du guide d&#39;examen  approuvé, et que cet état est décrit au candidat</li>
<li>que l&#39;on dise au candidat que l&#39;état  dans lequel se trouve la centrale ne présente pas d&#39;autres d&#39;anomalies que  celles qui viennent d&#39;être décrites</li>
<li>que les postes et les noms des  membres de l&#39;équipe de soutien concernés sont communiqués au candidat</li>
<li>d&#39;accorder au candidat un délai  maximum de cinq minutes pour examiner l&#39;état dans lequel se trouve la centrale,  avant de commencer l&#39;examen</li>
</ol>
</li>
<li>Quand les cinq minutes se sont  écoulées (ou plus tôt, à la demande du candidat), aviser le candidat que le  scénario d&#39;examen est sur le point de commencer et démarrer l&#39;examen en lançant  le scénario. </li>
<li>Durant la tenue de l&#39;examen&nbsp;:
<ol className="list-lower-alpha">
<li>s&#39;assurer que le scénario d&#39;examen  se déroule de la façon indiquée dans le guide d&#39;examen approuvé, y compris, le  cas échéant, en ce qui concerne le scénario, l&#39;ordre des défaillances, la  réception des alarmes importantes, la réponse des paramètres des systèmes, le  fonctionnement des circuits logiques de commande et le comportement des membres  de l&#39;équipe de soutien</li>
<li>de concert avec l&#39;autre  examinateur, consigner le comportement du candidat à la section&nbsp;3 du guide  d&#39;examen approuvé en plaçant une coche à côté de chaque vérification ou action  (ou groupe de vérifications ou d&#39;actions) correctement effectuée par le  candidat. Consigner dans la grille d&#39;observation tout changement apporté à l&#39;évolution  prévue du scénario, tout écart important par rapport aux vérifications que le  candidat est censé faire dans le cadre du scénario et toute action inattendue  effectuée par le candidat ou toute demande inattendue faite par le candidat aux  membres de l&#39;équipe de soutien</li>
<li>en consultation avec l&#39;autre  examinateur, l&#39;examinateur en chef doit interrompre un scénario d&#39;examen si l&#39;une  des conditions d&#39;interruption énoncées à la partie&nbsp;A de l&#39;annexe C.19 se  présente à un moment ou un autre de la tenue d&#39;un scénario d&#39;examen. Si une  condition d&#39;interruption est remplie&nbsp;:
<ol className="list-lower-roman">
<li>demander immédiatement à l&#39;opérateur  du simulateur d&#39;arrêter le simulateur</li>
<li>suivre les instructions  relatives aux interruptions présentées à la partie B de l&#39;annexe C.19</li>
</ol>
</li>
</ol>
</li>
<li>Lorsque le point final du SEC  ou du SEA est atteint&nbsp;:
<ol className="list-lower-alpha">
<li>s&#39;assurer que l&#39;opérateur du  simulateur arrête le simulateur</li>
<li>s&#39;assurer de consigner la durée  réelle du scénario d&#39;examen dans le guide d&#39;examen approuvé</li>
<li>informer le candidat et l&#39;équipe  de soutien que le scénario est terminé et que la simulation a été arrêtée</li>
<li>demander au candidat de rester  au pupitre de l&#39;opérateur et l&#39;empêcher de consulter les panneaux de commande  et les alarmes pendant que l&#39;équipe d&#39;examen passe en revue les données  recueillies dans un lieu sûr pour déterminer s&#39;il faut demander des  éclaircissements à propos du comportement du candidat</li>
<li>demander aux membres de l&#39;équipe  de soutien de quitter la salle de commande, de rendre la documentation et les  notes éventuelles aux examinateurs et de rester disponibles</li>
<li>dans un lieu sûr où le candidat  ne pourra pas les entendre, les examinateurs doivent&nbsp;:
<ol className="list-lower-roman">
<li>comparer l&#39;information notée  par les deux examinateurs sur leur grille d&#39;observation des interventions du  candidat pour repérer les écarts éventuels dans les données recueillies </li>
<li>en se fondant sur les écarts décelés  et les notes consignées par chaque examinateur, déterminer s&#39;il y a lieu d&#39;interroger  le candidat pour obtenir des éclaircissements sur tout aspect de son  comportement qui pourrait influencer l&#39;évaluation et la notation à venir du  candidat</li>
<li>inscrire toutes les questions  supplémentaires dans le guide d&#39;examen approuvé de l&#39;examinateur en chef avant  de les poser au candidat
<div className="module">
<p>Les questions supplémentaires devraient être strictement liées au comportement observé du candidat et n&#39;excluent pas les questions normalisées qui doivent être immédiatement posées aux candidats CQSC et CQC à la fin de la partie dynamique des scénarios d&#39;examen. </p>
</div>
</li>
</ol>
</li>
<li>s&#39;il y a lieu de poser des  questions supplémentaires au candidat, s&#39;assurer que l&#39;équipement audiovisuel  servant à enregistrer les questions et les réponses fonctionne et que les  réponses du candidat sont notées de concert avec l&#39;autre examinateur dans les  guides d&#39;examen approuvés</li>
<li>pour les candidats CQC et CQSC,  on poursuit immédiatement la partie non dynamique du scénario d&#39;examen en posant  au candidat les questions normalisées spécifiées à la sous-section&nbsp;15.4.
<div className="module">
<p>Pour les candidats OR et OT0, ceci représente la fin du scénario d&#39;examen. Les enregistrements audiovisuels peuvent être arrêtés et le candidat peut avoir la permission de quitter le simulateur.</p>
</div>
</li>
</ol>
</li>
<li>Lorsque le point final du SED  est atteint&nbsp;:
<ol>
<li>l&#39;opérateur du simulateur  arrête le simulateur</li>
<li>veiller à consigner la durée  réelle du scénario d&#39;examen dans le guide d&#39;examen approuvé</li>
<li>informer le candidat et l&#39;équipe  de soutien que le scénario est terminé et que la simulation a été arrêtée</li>
<li>demander au candidat de rester  au pupitre de l&#39;opérateur et l&#39;empêcher de consulter les panneaux de commande  et les alarmes</li>
<li>demander aux membres de l&#39;équipe  de soutien de quitter le simulateur et de rendre la documentation et les notes  éventuelles aux examinateurs</li>
<li>poursuivre immédiatement la  partie non dynamique du scénario d&#39;examen, applicable aux candidats CQC et  CQSC, en posant au candidat les questions normalisées spécifiées à la  sous-section 15.4</li>
</ol>
</li>  </ol>
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
<h3 id="sec15-3" className="mrgn-tp-0">15.3	Tenue de la partie dynamique d&#39;un SVPC</h3>  <p>L&#39;examinateur en chef doit coordonner la tenue d&#39;un SVPC conformément aux exigences et aux instructions qui suivent :</p>  <ol>
<li>Avant d&#39;autoriser un candidat à  pénétrer dans la salle de commande du simulateur pour la tenue d&#39;un SVPC, s&#39;assurer&nbsp;:
<ol className="list-lower-alpha">
<li>qu&#39;une zone de déroulement de l&#39;examen  appropriée, comportant une barrière visuelle, est mise en place pour empêcher  le candidat de voir la configuration du simulateur</li>
<li>que le simulateur est bien  réglé en vue du scénario</li>
<li>que les systèmes audiovisuels  fonctionnent et sont synchronisés</li>
<li>que tout équipement hors  service est bien indiqué sur les panneaux de commande, conformément aux  indications de la section&nbsp;1, partie B, du guide d&#39;examen approuvé</li>
<li>que les documents à l&#39;appui ou  les renseignements que peuvent consulter les candidats se limitent à ceux dont  l&#39;utilisation est approuvée dans la salle de commande de la centrale en  question</li>
<li>que l&#39;équipement audiovisuel  servant à enregistrer les communications entre le candidat et les membres de l&#39;équipe  de soutien fonctionne</li>
</ol>
</li>
<li>Lorsque le candidat est  autorisé à pénétrer dans la zone de déroulement de l&#39;examen aménagée dans la  salle de commande du simulateur et avant de commencer la tenue du scénario d&#39;examen,  s&#39;assurer&nbsp;:
<ol className="list-lower-alpha">
<li>que le système d&#39;enregistrement  audiovisuel a commencé à enregistrer</li>
<li>que le candidat reçoit un  rapport écrit précisant l&#39;état dans lequel se trouve la centrale pour le  scénario d&#39;examen, de la façon détaillée à la section&nbsp;2 du guide d&#39;examen  approuvé, et que cet état est décrit au candidat</li>
<li>que le candidat reçoit une  copie de la section&nbsp;5 du guide d&#39;examen approuvé, comportant la  description des tâches de vérification qu&#39;il doit effectuer et toute  documentation d&#39;exploitation de la centrale permettant au candidat d&#39;accomplir  la tâche</li>
<li>que le candidat est informé qu&#39;il  dispose de 15&nbsp;minutes au maximum pour effectuer la tâche de vérification</li>
</ol>
</li>
<li>Demander au candidat d&#39;accomplir  la tâche de vérification en consultant les documents d&#39;exploitation au besoin</li>
<li>Durant la tâche de  vérification&nbsp;:
<ol className="list-lower-alpha">
<li>de concert avec l&#39;autre  examinateur, surveiller les vérifications des panneaux de commande effectuées  par le candidat, y compris celles requises par tout document d&#39;exploitation à l&#39;appui</li>
<li>répondre aux demandes de  vérification sur le terrain que le candidat est censé faire, immédiatement  après la demande du candidat</li>
<li>en consultation avec l&#39;autre  examinateur, répondre en temps opportun à toute demande inattendue de  vérification sur le terrain faite par le candidat en fournissant des  renseignements exacts sur l&#39;état dans lequel se trouve la centrale</li>
<li>noter à la section&nbsp;3 du  guide d&#39;examen approuvé tout écart important par rapport aux vérifications que  le candidat est censé faire et toute demande inattendue de vérifications sur le  terrain faite par le candidat</li>
</ol>
</li>
<li>Au point final du SVPC, lorsque  le candidat a effectué la tâche de vérification ou à l&#39;expiration du délai de  15&nbsp;minutes, demander au candidat de rester au pupitre de l&#39;opérateur, l&#39;empêcher  de consulter les panneaux de commande et les alarmes et lui poser immédiatement  les questions normalisées prévues à la sous-section 15.4</li>  </ol>
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
<h3 id="sec15-4" className="mrgn-tp-0">15.4	Questions normalisées posées aux candidats CQC et CQSC </h3>  <p>À la suite de la partie dynamique d&#39;un SEC, d&#39;un SEA, d&#39;un SED ou d&#39;un SVPC, l&#39;examinateur en chef doit : </p>  <ol>
<li> s&#39;assurer que l&#39;équipement audiovisuel servant à enregistrer les questions et les réponses fonctionne</li>
<li> pour le SEC, le SEA et le SED, poser aux candidats les questions normalisées figurant à la partie A ou à la partie B de l&#39;annexe C.15 correspondant au scénario d&#39;examen, telles que consignées dans le guide d&#39;examen approuvé, en veillant à ce qui suit :
<ol className="list-lower-alpha">
<li> rappeler aux candidats qu&#39;ils peuvent consulter les documents d&#39;exploitation pour répondre aux questions</li>
<li> poser une question à la fois et attendre que le candidat ait fini d&#39;y répondre avant de passer à la question suivante
<div className="module">
<p>Se garder d&#39;aider le candidat en indiquant que la réponse est complète, satisfaisante ou autre.</p>
</div>
</li>
<li> remettre au candidat une copie de la question et la lire à haute voix</li>
<li> de concert avec l&#39;autre examinateur, noter les réponses du candidat à la section 3 du guide d&#39;examen approuvé et noter toute différence importante par rapport à la réponse attendue</li>
<li> consigner dans le guide d&#39;examen approuvé tout document d&#39;exploitation consulté par le candidat</li>
<li> lorsque le candidat a répondu à toutes les questions normalisées :
<ol>
<li> dans un lieu sûr où le candidat ne pourra pas les entendre, les examinateurs doivent déterminer s&#39;il y a lieu de poser des questions supplémentaires au candidat </li>
<li> inscrire toutes les questions supplémentaires dans le guide d&#39;examen approuvé de l&#39;examinateur en chef avant de les poser au candidat
<div className="module">
<p>Les questions supplémentaires doivent être strictement liées au comportement observé du candidat ou aux réponses données par celui-ci et ne peuvent aider le candidat à trouver la bonne réponse. Les questions supplémentaires ont pour but d&#39;obtenir des éclaircissements sur le comportement observé ou les réponses données, qui pourraient influencer l&#39;évaluation et la notation à venir du candidat.</p>
</div>
</li>
</ol>
</li>
<li> s&#39;il y a lieu de poser des questions supplémentaires au candidat, s&#39;assurer que l&#39;équipement audiovisuel servant à enregistrer les questions et les réponses fonctionne et que les réponses du candidat sont notées de concert avec l&#39;autre examinateur dans les guides d&#39;examen approuvés</li>
</ol>
</li>
<li>pour le SVPC, poser immédiatement au candidat la première question normalisée figurant à la partie C de l&#39;annexe C.15, telle que consignée dans le guide d&#39;examen approuvé et s&#39;assurer de ce qui suit :
<ol className="list-lower-alpha">
<li> de concert avec l&#39;autre examinateur, que les réponses du candidat sont consignées à la section 3 du guide d&#39;examen approuvé et que toute différence importante par rapport à la réponse attendue est notée</li>
<li> lorsque le candidat a fini de répondre à la première question, qu&#39;on lui remette une copie des questions restantes de la partie C et qu&#39;on lui accorde 10 minutes pour se préparer à y répondre oralement, en lui permettant de consulter les documents d&#39;exploitation</li>
<li> à l&#39;expiration du délai de 10 minutes, qu&#39;on demande au candidat de répondre aux questions restantes</li>
<li> lorsque le candidat a répondu à toutes les questions normalisées :
<ol>
<li> dans un lieu sûr où le candidat ne pourra pas les entendre, les examinateurs doivent déterminer s&#39;il y a lieu de poser des questions supplémentaires au candidat pour obtenir des éclaircissements en cas d&#39;incertitudes quant au comportement observé ou aux réponses données, qui pourraient influencer l&#39;évaluation et la notation à venir du candidat</li>
<li> inscrire toutes les questions supplémentaires dans le guide d&#39;examen approuvé de l&#39;examinateur en chef avant de les poser au candidat;
<div className="module">
<p>Les questions supplémentaires doivent être strictement liées au comportement observé du candidat ou aux réponses données par celui-ci et ne peuvent pas aider le candidat à trouver la bonne réponse.</p>
</div>
</li>
</ol>
</li>
<li> s&#39;il y a lieu de poser des questions supplémentaires au candidat, s&#39;assurer que l&#39;équipement audiovisuel servant à enregistrer les questions et les réponses fonctionne et que les réponses du candidat sont notées de concert avec l&#39;autre examinateur dans les guides d&#39;examen approuvés.</li>
</ol>
</li>
<li>à la fin du scénario d&#39;examen,  arrêter les systèmes d&#39;enregistrement audiovisuel, autoriser le candidat à  quitter la salle de commande et demander à l&#39;opérateur du simulateur de  rassembler les données enregistrées durant le scénario d&#39;examen</li>
<li>de concert avec l&#39;autre  examinateur, consigner dans le guide d&#39;examen approuvé les points préoccupants  et toute idée fausse importante exprimée par le candidat</li>
<li>remplir une fiche de contrôle  des données à recueillir semblable au modèle de l&#39;annexe C.16 et la  joindre aux données recueillies</li>
<li>veiller à conserver en lieu sûr  les données recueillies et les guides d&#39;examen approuvés annotés</li>
<li>veiller à ne laisser trainer  aucune copie des guides d&#39;examen approuvés ou des autres documents d&#39;examen,  susceptible de compromettre la confidentialité de l&#39;examen</li>
<li>veiller à régler correctement  le simulateur et les panneaux de commande pour faire subir le scénario d&#39;examen  au candidat suivant</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.5"></div>
<h3 id="sec15-5" className="mrgn-tp-0">15.5	Fin de l&#39;examen</h3>  <p>À la fin d&#39;un examen donné, lorsque  tous les scénarios d&#39;examen ont été menés, l&#39;examinateur en chef doit s&#39;assurer  de ce qui suit&nbsp;:</p>  <ol>
<li>Toute lacune du simulateur ou  toute lacune importante constatée dans la documentation de la centrale durant  la tenue de l&#39;examen est consignée et prise en compte en conséquence.</li>
<li>Les modifications nécessaires  ont été apportées au guide d&#39;examen approuvé pour tenir compte de toute  modification mineure faite durant la tenue de l&#39;examen et veiller à ce que les  AGC applicables, énumérées à l&#39;annexe C.1, C.2  ou C.3, le  cas échéant, soient attribuées aux actions et aux vérifications  supplémentaires.
<div className="module">
<p>L&#39;impact des changements ou des ajustements éventuellement apportés  par l&#39;examinateur en chef aux guides d&#39;examen approuvés durant un examen sur  simulateur devrait être mineur. Durant l&#39;examen, il peut arriver que le  candidat exécute l&#39;action prévue conformément aux attentes d&#39;une procédure d&#39;exploitation  mentionnée de façon inadéquate ou inexacte dans le guide d&#39;examen et qui n&#39;a  pas été repérée durant la validation ou la répétition de l&#39;examen. Par  conséquent, l&#39;examinateur peut avoir besoin d&#39;ajuster l&#39;examen et les guides d&#39;examen  des candidats correspondants pour refléter ces circonstances imprévues. Ces  ajustements devraient être officiellement consignés dans les guides d&#39;examen et  être utilisés pour accorder des crédits ou noter un candidat particulier ou l&#39;ensemble  des candidats. </p>
<p>Un examen validé par un titulaire actuellement accrédité ne devrait  pas forcer le candidat à s&#39;écarter de la marche qu&#39;il est censé suivre de façon  à entraîner un écart important par rapport au guide d&#39;examen approuvé. De tels  écarts de la part du candidat devraient entraîner l&#39;interruption, l&#39;annulation  ou une nouvelle conception de l&#39;examen ou d&#39;une partie de celui-ci. </p>
</div>
</li>
<li>Toute modification mineure  apportée de la façon décrite au paragraphe&nbsp;2 ci-dessus est consignée à la  section&nbsp;1, partie C, de chaque guide d&#39;examen du candidat.</li>
<li>Les guides d&#39;examen approuvés  sont officiellement entérinés avant de procéder à l&#39;évaluation du comportement  du candidat et la notation de l&#39;examen.</li>
<li>Pour tout candidat dont un SEC  ou un SEA a été interrompu et n&#39;a pas été repris, s&#39;assurer que&nbsp;:
<ol className="list-lower-alpha">
<li>la portion d&#39;examen effectuée par  le candidat répond aux critères minimums exigés pour un SEC ou un SEA et répond  aux critères minimums exigés pour l&#39;examen, de la façon spécifiée à la section 14,  et&nbsp;:
<ol className="list-lower-roman">
<li>si la portion d&#39;examen effectuée  répond aux critères minimums pertinents, procéder à la première évaluation du  candidat en suivant les indications fournies à la section 16</li>
<li>si la portion d&#39;examen effectuée  ne répond pas aux critères minimums pertinents et que le candidat n&#39;échoue pas  l&#39;examen suite à la correction de la portion de l&#39;examen qu&#39;il a pu terminer,  il faudra concevoir, élaborer et tenir un ou plusieurs autres scénarios  supplémentaires pour achever l&#39;examen de ce candidat</li>
</ol>
</li>
</ol>
</li>
<li> Pour tout candidat dont un SED a été interrompu et n&#39;a pas été repris, s&#39;assurer que :
<ol className="list-lower-alpha">
<li> l&#39;évaluation du candidat est effectuée pour la portion de l&#39;examen qui a été effectuée</li>
<li> si le candidat n&#39;échoue pas l&#39;examen suite à la correction de la portion de l&#39;examen qui a été effectuée, il faudra concevoir, élaborer et tenir un ou plusieurs autres SED supplémentaires pour achever l&#39;examen de ce candidat</li>
</ol>
</li>
<li> Un dossier comprenant toutes les données recueillies durant l&#39;examen, de la façon précisée dans la fiche de contrôle des données à recueillir (annexe C.16) et les guides d&#39;examen autorisés, annotés par les deux membres de l&#39;équipe d&#39;examen, est préparé pour chaque candidat et utilisé lors de l&#39;évaluation et de la notation de la façon précisée à la section 16. </li>  </ol>
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
<h2 id="sec16" className="mrgn-tp-0">16. Notation des examens</h2>  <p>Le titulaire de permis doit avoir en place des politiques, des processus et des procédures en ce qui concerne la notation des examens portant sur les habiletés. Ceux-ci doivent contenir les éléments suivants :</p>  <ol>
<li>Les examens doivent être notés immédiatement ou le plus tôt possible après leur tenue.
<div className="module">
<p>La notation des examens fait partie intégrante de l&#39;administration du processus d&#39;examen d&#39;accréditation. La notation devrait être effectuée immédiatement après la tenue d&#39;un examen d&#39;accréditation. Le présent document d&#39;application de la réglementation ne stipule aucun délai précis pour la notation des examens afin de permettre aux titulaires de permis de faire face aux imprévus. Toutefois, dans le cadre de l&#39;administration des examens d&#39;accréditation, les titulaires de permis devraient disposer des ressources nécessaires au tout début de la planification d&#39;un examen donné.</p>
</div>
</li>
<li>Les résultats de chaque  candidat doivent être déterminés à l&#39;aide des données recueillies pendant l&#39;examen.</li>
<li>Les guides d&#39;examen approuvés  doivent être officiellement entérinés par le chef de la formation avant de  procéder à l&#39;évaluation du comportement du candidat et la notation de l&#39;examen.</li>
<li>Seuls les membres de l&#39;équipe d&#39;examen  ayant participé à la conception et à la tenue de l&#39;examen sont autorisés à  effectuer la première et la deuxième évaluations du comportement des candidats  et à procéder à la notation de tout l&#39;examen.</li>
<li>Les membres de l&#39;équipe d&#39;examen  doivent procéder à la notation conformément aux indications des sections 16.1 à 16.3. </li>
<li>La notation de tout l&#39;examen  doit être effectuée pour un candidat à la fois.</li>
<li>Il faut avoir terminé la première  évaluation et la première notation pour tous les candidats avant de procéder à  la deuxième évaluation.</li>
<li>La deuxième évaluation et la  deuxième notation de l&#39;examen des candidats sélectionnés pour faire l&#39;objet d&#39;une  deuxième évaluation doivent être confiées à un examinateur qui n&#39;a pas effectué  la première évaluation et la première notation de ces candidats.</li>
<li>Une grille d&#39;évaluation des  erreurs critiques ou majeures, reprenant les renseignements présentés à l&#39;annexe&nbsp;C.21,  doit être élaborée pour chaque candidat, le cas échéant.</li>
<li>Un formulaire de  résultats d&#39;examen reprenant les renseignements présentés l&#39;annexe C.23 doit être rempli pour chaque candidat. </li>  </ol>
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
<h3 id="sec16-1" className="mrgn-tp-0">16.1	Première évaluation</h3>  <p>L&#39;examinateur en chef doit veiller  à répartir les dossiers des candidats entre les membres de l&#39;équipe d&#39;examen  aux fins de la première évaluation et s&#39;assurer que la première évaluation de  chaque candidat s&#39;effectue conformément aux instructions qui suivent&nbsp;: </p>  <ol>
<li>pour chaque scénario d&#39;examen,  préparer un nouvel exemplaire du guide d&#39;examen autorisé pour chaque candidat</li>
<li>à l&#39;aide du dossier créé pour  chaque candidat de la façon décrite au paragraphe&nbsp;7 de la  section&nbsp;16.4, pour chaque scénario d&#39;examen, cocher dans la nouvelle  grille d&#39;observation des interventions du candidat les éléments que les deux  examinateurs ont cochés dans leur grille d&#39;observation respective pendant l&#39;examen</li>
<li>lorsqu&#39;un scénario d&#39;examen a  été interrompu, évaluer uniquement les actions et les vérifications que le  candidat a pu effectuer avant l&#39;interruption du scénario</li>
<li>corriger l&#39;examen complet d&#39;un  candidat donné à la fois</li>
<li>pour chaque élément de la  grille d&#39;observation des interventions du candidat qui n&#39;a pas été coché, qui n&#39;a  été coché que par un seul membre de l&#39;équipe d&#39;examen ou qui n&#39;est pas clair,  consulter les imprimés pertinents de messages d&#39;alarmes et du système d&#39;enregistrement  des actions posées au simulateur ainsi que l&#39;enregistrement audiovisuel pour  déterminer si cet élément devrait être accordé</li>
<div className="module">
<p>Les tendances des paramètres recueillies pendant la répétition du  scénario lors de l&#39;élaboration de l&#39;examen peuvent servir de référence à cette  analyse.</p>
</div>
<li>consigner dans la grille d&#39;observation  des interventions du candidat le résultat de la décision prise au  paragraphe&nbsp;5 ci-dessus ainsi que la justification de celle-ci</li>
<li>pour un candidat CQC ou CQSC,  pour chaque élément de réponse à une question normalisée qui n&#39;a pas été coché,  qui n&#39;a été coché que par un seul membre de l&#39;équipe d&#39;examen ou qui n&#39;est pas  clair, consulter les imprimés pertinents de messages d&#39;alarmes et du système d&#39;enregistrement  des actions posées au simulateur ainsi que l&#39;enregistrement audiovisuel pour  déterminer si cet élément devrait ou non être accordé</li>
<li>consigner dans la grille d&#39;observation  des interventions du candidat le résultat de la décision prise au  paragraphe&nbsp;7 ci-dessus ainsi que la justification de celle-ci</li>
<li>dans le cas d&#39;un candidat CQC  ou CQSC, inscrire à l&#39;endroit approprié sur la grille d&#39;observation toute  réponse inattendue du candidat à une question normalisée.</li>
<li>si une question supplémentaire  a été posée, consigner la question et la réponse du candidat dans la grille d&#39;observation  des interventions du candidat</li>
<li>passer en revue toutes les  données regroupées dans la nouvelle grille d&#39;observation des interventions du  candidat et, pour chaque
<ol>
<li>action ou vérification omise</li>
<li>action ou vérification  inattendue</li>
<li>ou réponse omise ou inattendue à  une question normalisée</li>
</ol>
<p>déterminer, compte tenu des réponses données aux questions  supplémentaires éventuelles, s&#39;il s&#39;agit d&#39;une erreur critique  ou d&#39;une erreur majeure  d&#39;après les critères de l&#39;annexe C.20.</p>
</li>
<li>pour chaque erreur critique ou  majeure, remplir une grille d&#39;évaluation des erreurs critiques ou majeures  semblable au modèle de l&#39;annexe C.21</li>
<li>regrouper et consigner à la fin  de la grille d&#39;observation unifiée tous les points préoccupants concernant le  comportement et les connaissances du candidat dont les examinateurs ont pris  note pendant l&#39;examen ou lors de la première évaluation de celui-ci, y compris  les réponses aux questions supplémentaires</li>
<li>consulter l&#39;enregistrement  vidéo correspondant pour assurer l&#39;exactitude de la description des points  préoccupants</li>
<li>effectuer la première notation  en suivant les indications fournies au paragraphe&nbsp;16.1.1</li>  </ol>  <h4>Première notation de l&#39;examen</h4>  <p>Dans le cadre de la première évaluation, les membres de l&#39;équipe d&#39;examen doivent :</p>  <ol>
<li>En tenant compte des  indications de l&#39;annexe C.22, calculer les notes obtenues par chaque candidat d&#39;après  les données regroupées sur les grilles d&#39;observation unifiées et consigner les  éléments suivants&nbsp;:
<ol>
<li>la note obtenue pour chaque  attente générique de comportement pour tout l&#39;examen</li>
<li>la note obtenue dans chaque domaine  de compétence pour chaque scénario</li>
<li>la note obtenue dans chaque domaine  de compétence pour tout l&#39;examen</li>
</ol>
</li>
<li>Attribuer une note de succès ou  une note d&#39;échec conformément aux indications de la sous-section&nbsp;16.3. </li>
<li>Remplir pour chaque candidat un  formulaire de résultats d&#39;examen contenant les renseignements présentés à l&#39;annexe  C.23. </li>
<li>Lorsque la première évaluation  est terminée, signer et dater la page couverture du guide d&#39;examen unifié de  chaque candidat.</li>  </ol>
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
<h3 id="sec16-2" className="mrgn-tp-0">16.2	Deuxième évaluation</h3>  <p>Lorsque la première évaluation et  la première notation de tous les candidats sont terminées conformément aux  indications de la sous-section 16.1 et du paragraphe 16.1.1, la deuxième  évaluation de chaque candidat doit être effectuée conformément aux indications  qui suivent&nbsp;: </p>  <ol>
<li>Le chef de la formation doit :
<ol className="list-lower-alpha">
<li>approuver les candidats  sélectionnés par les examinateurs pour faire l&#39;objet d&#39;une deuxième évaluation</li>
<li>sélectionner au moins un des  candidats évalués par chaque examinateur ayant effectué la première évaluation</li>
<li>s&#39;assurer que la deuxième  évaluation d&#39;un candidat est confiée à un membre de l&#39;équipe d&#39;examen qui n&#39;a  pas effectué la première évaluation</li>
<li>s&#39;assurer que la deuxième  évaluation est effectuée pour un candidat à la fois conformément aux  instructions fournies à la section 16.1 pour  la première évaluation
<div className="module">
<p>L&#39;exigence minimale visant la deuxième notation consiste à effectuer un contrôle d&#39;étalonnage de l&#39;exactitude du guide d&#39;examen et une évaluation du processus de notation.</p>
</div>
</li>
</ol>
</li>
<li>L&#39;examinateur en chef doit  retenir pour une deuxième évaluation&nbsp;:
<ol className="list-lower-alpha">
<li>les candidats qui ne satisfont  à aucun des critères de réussite énumérés à la section&nbsp;16.3</li>
<li>les candidats pour lesquels l&#39;examinateur  qui a fait la première évaluation a recommandé une deuxième évaluation</li>
<li>les candidats pour lesquels un  SEC ou un SEA s&#39;est écarté de façon substantielle du déroulement prévu</li>
<li>d&#39;autres candidats, à la  discrétion du chef de la formation ou de l&#39;examinateur en chef</li>
</ol>
</li>
<li>Les membres de l&#39;équipe d&#39;examen  doivent&nbsp;:
<ol className="list-lower-alpha">
<li>effectuer la deuxième évaluation  en utilisant les guides d&#39;examen unifiés signés du candidat, toute grille d&#39;évaluation  des erreurs critiques ou majeures complétée, les notes obtenues par le candidat  à l&#39;examen, le dossier de commentaires sur le candidat et tout dossier d&#39;examen  du candidat établi par l&#39;examinateur ayant effectué la première évaluation</li>
<li>s&#39;assurer que tout changement  apporté aux renseignements notés et consignés par le premier examinateur, à la  suite de cette deuxième évaluation, sont clairement indiqués dans le guide d&#39;examen  unifié</li>
<li>apporter les changements  nécessaires aux formulaires «&nbsp;Résultats de l&#39;examen sur simulateur&nbsp;»  des candidats et signer les formulaires</li>
</ol>
</li>  </ol>  <h4>Deuxième notation de l&#39;examen et conciliation des résultats</h4>  <p>Lorsque la deuxième évaluation de  tous les candidats choisis conformément aux indications de la section 16.2 est  terminée, l&#39;examinateur doit effectuer la deuxième notation de l&#39;examen en  suivant la procédure prévue pour la première notation.</p>  <p>Une fois que les notes obtenues par  chaque candidat ont été calculées, les examinateurs qui ont effectué la  première et la deuxième évaluations doivent&nbsp;: </p>  <ol>
<li>se réunir afin de résoudre tout  écart entre leurs deux évaluations et consigner la façon dont ces divergences  ont été résolues
<div className="module">
<p>Les examinateurs devraient consulter les enregistrements audiovisuels du comportement du candidat pour résoudre toute divergence concernant les mesures prises ou non par le candidat durant la tenue d&#39;un scénario d&#39;examen. </p>
</div>
</li>
<li>passer en revue l&#39;examen complet d&#39;un candidat donné à la fois</li>
<li>consigner les résultats d&#39;examen unifiés et les justifications dans l&#39;exemplaire original du formulaire de résultats d&#39;examen portant sur les habiletés et la grille d&#39;évaluation des erreurs critiques ou majeures de chaque candidat</li>
<li>s&#39;assurer que toute modification apportée au guide d&#39;examen unifié de chaque candidat a été dûment examinée et approuvée</li>  </ol>
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
<h3 id="sec16-3" className="mrgn-tp-0">16.3	Attribuer un échec ou une réussite à l&#39;examen</h3>  <p>L&#39;équipe d&#39;examen doit attribuer  une note de réussite ou une note d&#39;échec à un examen d&#39;accréditation donné  conformément aux critères qui suivent&nbsp;:</p>  <ol>
<li>Une note de réussite doit être  attribuée à un examen si le candidat&nbsp;:
<ol className="list-lower-alpha">
<li>a obtenu une note de 80 % ou  plus dans chaque domaine de compétence sans avoir commis d&#39;erreur critique ou  plus de deux erreurs majeures et sans avoir commis plus d&#39;une erreur majeure  dans un même domaine de compétence</li>
<li>a obtenu une note de 70&nbsp;%  ou plus dans un seul domaine de compétence et 80&nbsp;% ou plus en moyenne pour  l&#39;ensemble des domaines de compétence, sans avoir commis d&#39;erreur critique ou  plus de deux erreurs majeures et sans avoir commis plus d&#39;une erreur majeure  dans un même domaine de compétence</li>
</ol>
</li>
<li>Une note d&#39;échec doit être  attribuée à un examen donné si le candidat&nbsp;n&#39;a pas répondu aux critères  qui précèdent </li>
<li>Les membres de l&#39;équipe d&#39;examen  doivent&nbsp;:
<ol className="list-lower-alpha">
<li>consigner les résultats d&#39;examen  finaux et les justifications dans l&#39;exemplaire original du formulaire de  résultats d&#39;examen sur simulateur de chaque candidat</li>
<li>s&#39;assurer que le formulaire de  résultats a été examiné et signé par le chef de la formation </li>
</ol>
</li>  </ol>
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
<h2 id="sec17" className="mrgn-tp-0">17.	Communication des résultats d&#39;examen</h2>  <p>À la fin de l&#39;examen, les étapes  suivantes doivent être exécutées&nbsp;:</p>  <ol>
<li>Les membres de l&#39;équipe d&#39;examen  doivent consigner et signaler au chef de la formation toute lacune importante  sur le plan des habiletés révélée par un candidat ou par un examen.
<div className="module">
<p>Les lacunes révélées par un examen devraient comprendre celles constatées au niveau de la conception, de la tenue ou de la notation de l&#39;examen, la fidélité du simulateur, les procédures de la centrale ou le programme de formation.</p>
</div>
</li>
<li>Les examinateurs doivent  veiller à ce qu&#39;une trousse d&#39;évaluation finale soit compilée pour chaque  candidat. Cette trousse doit comprendre les éléments suivants&nbsp;:
<ol>
<li>le formulaire de résultats d&#39;examen  sur simulateur rempli, signé par les deux examinateurs et entériné par le chef  de la formation</li>
<li>les notes finales obtenues à l&#39;examen</li>
<li>la version finale du dossier  comprenant les commentaires du candidat, le cas échéant</li>
<li>les grilles d&#39;évaluation des  erreurs critiques ou majeures signées par les deux examinateurs, s&#39;il y a lieu</li>
<li>le guide d&#39;examen unifié signé  par les deux examinateurs</li>
<li>la fiche de contrôle de l&#39;examen  et les fiches de contrôle des scénarios d&#39;examen signées</li>
</ol>
</li>
<li>Le chef de la formation  doit&nbsp;:
<ol>
<li>après avoir autorisé les résultats  d&#39;un examen d&#39;accréditation sur simulateur donné, veiller à ce qu&#39;un exemplaire  de la trousse d&#39;évaluation décrite à la section&nbsp;17.2 ci-dessus soit  communiqué à la CCSN, si elle le demande, et que la CCSN soit officiellement  informée des résultats de chaque candidat</li>
<li>veiller à ce que chaque  candidat auquel une note de réussite a été attribuée suive la formation de rattrapage  et fasse l&#39;objet d&#39;évaluations officielles dans tous les domaines identifiés  comme insuffisants par le processus de notation pour confirmer, documents à l&#39;appui,  que le candidat est parvenu à obtenir le niveau de connaissances requis pour  exercer les fonctions du poste accrédité de façon compétente</li>
<li>s&#39;assurer que toute lacune  révélée au paragraphe&nbsp;17.1 ci-dessus a été prise en compte</li>
</ol>
</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A"></div>
<h2 id="app-a">Annexe A: Capacités des simulateurs pour les centrales nucléaires actuellement autorisées</h2>
<p>Les simulateurs qui servent aux examens d&#39;accréditation des candidats OR, OT0, CQC et CQSC doivent répondre aux critères qui suivent.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.1"></div>
<h3 id="app-a-1">A.1	Capacités minimales acceptables de simulation</h3>
<p>Le simulateur d&#39;une  centrale donnée doit permettre de simuler, de façon réaliste et en temps réel,  toutes les manœuvres importantes et tous les phénomènes transitoires importants  de la centrale, notamment&nbsp;:</p>
<ul>
<li>les conditions d&#39;exploitation  normale</li>
<li>les incidents de fonctionnement  prévus</li>
<li>les accidents de  dimensionnement</li>
</ul>
<p>En cas de conditions  et de défaillances, comme un bris de tuyauterie, une perte d&#39;inventaire ou de  débit, une chute de pression ou une détérioration du vide, pour lesquelles la  réaction des systèmes et les interventions des opérateurs dépendent du degré de  gravité de la condition ou de la défaillance, le simulateur doit pouvoir  simuler tous les degrés possibles de gravité de la condition ou de la  défaillance.</p>
<p>Plus particulièrement,  les simulateurs doivent être en mesure de simuler les conditions anormales, les  perturbations et les conditions d&#39;urgence ainsi que les défaillances énumérées  ci-dessous.</p>
<p><strong>Remarque&nbsp;: </strong>Dans la liste qui suit, la perte d&#39;un système comprend, sans  toutefois s&#39;y limiter, les pertes de circulation, les pertes de refroidissement  et les pertes d&#39;inventaire.</p>
<h4 id="app-a-1-1">A.1.1 Systèmes spéciaux de sûreté</h4>
<ol>
<li>Déclenchement des systèmes d&#39;arrêt  d&#39;urgence no 1 et no 2 pour tous les paramètres <br />
(aux centrales nucléaires concernées)</li>
<li>Déclenchement du système de  protection du réacteur (SPR) et du système d&#39;arrêt d&#39;urgence amélioré (SAUA)  pour tous les paramètres (à la centrale nucléaire concernée)</li>
<li>Réponse des détecteurs de  surpuissance neutronique à des formes de flux anormales</li>
<li>Déclenchement intempestif de n&#39;importe  quel système spécial de sûreté, y compris pour le système de refroidissement d&#39;urgence  du cœur, l&#39;isolement intempestif des boucles du système caloporteur, s&#39;il y a  lieu, et le déclenchement intempestif du refroidissement ultra rapide des générateurs  de vapeur </li>
<li>Défaillances sécuritaires et  non sécuritaires d&#39;une chaîne quelconque de n&#39;importe quel système spécial de  sûreté, y compris les défaillances des instruments de démarrage</li>
<li>Toute indisponibilité d&#39;un  système spécial de sûreté répertoriée dans les procédures d&#39;exploitation de la  centrale, dont l&#39;effet est observable à partir de la salle de commande  principale</li>
</ol>
<h4 id="app-a-1-2">A.1.2	Effets de réactivité et contrôle de la réactivité</h4>
<ol>
<li>Chute partielle ou totale de n&#39;importe  quelle barre d&#39;arrêt ou barre de commande dans le cœur du réacteur</li>
<li>Retrait hors séquence de n&#39;importe  quelle barre de compensation ou barre de commande</li>
<li>N&#39;importe quelle barre d&#39;arrêt,  barre de compensation ou barre de commande bloquée hors du cœur ou bloquée  partiellement ou entièrement dans le cœur </li>
<li>Déclenchement d&#39;un recul rapide  de puissance du réacteur pour tous les paramètres (aux centrales nucléaires  concernées)</li>
<li>Déclenchement d&#39;une baisse  contrôlée de puissance du réacteur pour tous les paramètres</li>
<li>Panne d&#39;un ou des deux  ordinateurs de contrôle</li>
<li>Dérives et défaillances des  signaux d&#39;entrée et de sortie du programme de contrôle du système de régulation  du réacteur (SRR), y compris les dérives et les défaillances des instruments de  mesure nucléaire </li>
<li>Panne du programme de contrôle  du SRR dans un ou dans les deux ordinateurs de contrôle, y compris les pannes  du programme de recul rapide de puissance, s&#39;il y a lieu</li>
<li>Perte de régulation du réacteur</li>
<li>Basculements du flux  neutronique</li>
<li>Dérives et défaillances des  signaux d&#39;entrée des programmes informatiques qui calculent la carte du flux  neutronique et la distribution de puissance dans le cœur du réacteur (FLU,  ZOTPR, FINCH ou CTM, selon le cas)</li>
<li>Panne dans un ou dans les deux  ordinateurs de contrôle des programmes informatiques FLU, ZOTPR, FINCH ou CTM,  s&#39;il y a lieu</li>
<li>Défaillances du système de  contrôle zonal des barres liquides, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>fuite d&#39;hélium</li>
<li>perte de contrôle de la  pression du collecteur d&#39;équilibrage </li>
<li>perte de contrôle de la  pression du collecteur des barboteurs</li>
<li>perte de contrôle de la  pression d&#39;eau</li>
<li>fuite d&#39;eau, y compris fuite d&#39;un  compartiment zonal vers le modérateur</li>
<li>perte de débit d&#39;eau vers n&#39;importe  quel compartiment zonal</li>
</ol>
</li>
</ol>
<h4 id="app-a-1-3">A.1.3	Circuit caloporteur</h4>
<ol>
<li>Fuites de tubes de force dans  le gaz annulaire</li>
<li>Blocages d&#39;un canal de  combustible</li>
<li>Pertes accidentelles de  caloporteur au niveau des tuyaux et des collecteurs d&#39;alimentation du réacteur</li>
<li>Pertes accidentelles de  caloporteur au niveau des tuyaux et des collecteurs de sortie du réacteur</li>
<li>Pertes accidentelles de  caloporteur dans le modérateur dues au bris d&#39;un tube de force et du tube de  calandre connexe</li>
<li>Bris de tubes de n&#39;importe quel  générateur de vapeur</li>
<li>Bris de tubes de n&#39;importe quel  préchauffeur (aux centrales nucléaires concernées)</li>
<li>Défaillance de tout sceau d&#39;étanchéité  ou de toute combinaison de sceaux d&#39;étanchéité d&#39;une pompe principale  quelconque du circuit caloporteur</li>
<li>Déclenchement d&#39;une ou de  plusieurs pompes principales du circuit caloporteur</li>
<li>Modes de circulation naturels  dans le circuit caloporteur dans des conditions anormales et des conditions d&#39;urgence,  y compris la circulation par thermosiphon en phase liquide et en phases  liquide/vapeur</li>
<li>Exploitation lorsque le circuit  caloporteur est drainé au niveau des collecteurs</li>
<li>Défaillances associées au  transfert de D2O entre les tranches, dans les centrales à plusieurs  tranches</li>
<li>Défaillances du contrôle de la  pression et de l&#39;inventaire du circuit caloporteur, y compris&nbsp;:
<ol>
<li>dérives et défaillances des  signaux d&#39;entrée et de sortie </li>
<li>panne des programmes de contrôle  connexes dans un ou dans les deux ordinateurs de contrôle, s&#39;il y a lieu</li>
<li>pertes de contrôle en mode  normal et en mode isolé (aux centrales nucléaires concernées)</li>
</ol>
</li>
<li>Défaillance en position ouverte  ou fermée d&#39;une ou des deux vannes d&#39;appoint ou d&#39;extraction liquide du circuit  caloporteur</li>
<li>Déclenchement d&#39;une ou des deux  pompes d&#39;appoint du circuit caloporteur</li>
<li>Défaillance en position ouverte  d&#39;une ou de plusieurs soupapes du circuit caloporteur</li>
<li>Défaillance en position ouverte  d&#39;une ou des deux vannes d&#39;extraction de vapeur ou soupapes du pressuriseur  (sauf à Pickering A et B)</li>
<li>Bris d&#39;une conduite d&#39;extraction  de vapeur du pressuriseur (aux centrales nucléaires concernées)</li>
<li>Défaillance en position ouverte  d&#39;une ou des deux soupapes du condenseur d&#39;extraction du circuit caloporteur  (sauf pour les centrales de 600 MW)</li>
<li>Défaillance en position ouverte  d&#39;une ou des deux soupapes du dégazeur-condenseur dans les centrales de 600 MW</li>
<li>Fuites de tubes du condenseur d&#39;extraction  du circuit caloporteur (sauf pour les centrales de 600 MW)</li>
<li>Fuites de tubes du  refroidisseur d&#39;extraction ou du refroidisseur du dégazeur-condenseur, selon le  cas</li>
<li>Perte du système de  refroidissement du caloporteur en temps d&#39;arrêt ou d&#39;entretien, y compris les  bris de tubes des échangeurs de chaleur</li>
<li>Radioactivité élevée dans le  circuit caloporteur</li>
</ol>
<h4 id="app-a-1-4">A.1.4	Sources froides</h4>
<ol>
<li>Perte de vide du condenseur  principal</li>
<li>Perte d&#39;eau de refroidissement  du condenseur</li>
<li>Perte de condensat, y compris  les ruptures de conduites</li>
<li>Défaillance du contrôle au  niveau du dégazeur, y compris&nbsp;:
<ol>
<li>dérives et défaillances des  signaux d&#39;entrée et de sortie</li>
<li>panne du programme de contrôle  dans un ou dans les deux ordinateurs de contrôle, s&#39;il y a lieu</li>
</ol>
</li>
<li>Perte d&#39;eau d&#39;alimentation  touchant un ou plusieurs générateurs de vapeur</li>
<li>Défaillances associées aux  raccords d&#39;eau d&#39;alimentation entre les tranches, s&#39;il y a lieu</li>
<li>Perte d&#39;eau d&#39;alimentation d&#39;urgence  des générateurs de vapeur</li>
<li>Défaillances du contrôle au  niveau des générateurs de vapeur, y compris&nbsp;:
<ol>
<li>dérives et défaillances des  signaux d&#39;entrée et de sortie </li>
<li>panne du programme de contrôle  du niveau des générateurs de vapeur dans un ou dans les deux ordinateurs de  contrôle (aux centrales nucléaires concernées)</li>
</ol>
</li>
<li>Bris symétriques et  asymétriques de conduites d&#39;alimentation des générateurs de vapeur, à l&#39;intérieur  et à l&#39;extérieur de l&#39;enceinte de confinement du bâtiment du réacteur </li>
<li>Défaillances du contrôle de la  pression des générateurs de vapeur, y compris&nbsp;:
<ol>
<li>dérives et défaillances des  signaux d&#39;entrée et de sortie du programme de contrôle de la pression des  générateurs de vapeur </li>
<li>panne du programme de contrôle  de la pression des générateurs de vapeur dans un ou dans les deux ordinateurs  de contrôle</li>
</ol>
</li>
<li>Défaillance en position ouverte  ou fermée d&#39;une ou de plusieurs vannes de rejet de vapeur à l&#39;atmosphère ou  vannes de dérivation de vapeur au condenseur (aux centrales nucléaires  concernées)</li>
<li>Défaillance en position ouverte  ou fermée d&#39;une ou de plusieurs vannes de décharge de vapeur (aux centrales  nucléaires concernées)</li>
<li>Ruptures symétriques et  asymétriques de conduites de vapeur principales à l&#39;extérieur de l&#39;enceinte de  confinement du bâtiment du réacteur</li>
<li>Ruptures de conduites de vapeur  à l&#39;intérieur de l&#39;enceinte de confinement du bâtiment du réacteur, s&#39;il y a  lieu</li>
<li>Perte du système modérateur, y  compris&nbsp;:
<ol>
<li>bris de conduites à l&#39;intérieur  et à l&#39;extérieur de l&#39;enceinte de confinement</li>
<li>fuites des tubes des échangeurs  de chaleur</li>
<li>fuites des tubes de calandre  vers le système de gaz annulaire</li>
</ol>
</li>
<li>Défaillances du contrôle de la  température du modérateur, y compris&nbsp;:
<ol>
<li>dérives et défaillances des  signaux d&#39;entrée et de sortie </li>
<li>panne du programme de contrôle  dans un ou dans les deux ordinateurs de contrôle, s&#39;il y a lieu</li>
<li>refroidissement ultra-rapide  intempestif du circuit du modérateur</li>
</ol>
</li>
<li>Perte du circuit de  refroidissement des boucliers d&#39;extrémité, y compris des bris de conduites</li>
<li>Perte des systèmes d&#39;eau de  service, comme par exemple l&#39;eau de service basse pression, l&#39;eau de service  haute pression, l&#39;eau de service recirculée, l&#39;eau de service commune à  plusieurs tranches, y compris des bris de conduites</li>
</ol>
<h4 id="app-a-1-5">A.1.5 Systèmes électriques</h4>
<ol>
<li>Perte d&#39;une ou de plusieurs  lignes de transport</li>
<li>Rejet partiel ou total de la  charge de l&#39;alternateur principal</li>
<li>Défaillance d&#39;un ou de  plusieurs disjoncteurs ou d&#39;une ou de plusieurs barres omnibus du poste de manœuvre</li>
<li>Variations importantes de la  charge de l&#39;alternateur principal dues à des perturbations de fréquence du  réseau </li>
<li>Perte de refroidissement des  barres blindées monophasées</li>
<li>Perte d&#39;alimentation électrique  de catégorie IV</li>
<li>Perte d&#39;alimentation électrique  de catégorie III</li>
<li>Perte d&#39;alimentation électrique  de catégories IV et III</li>
<li>Défaillance de n&#39;importe quelle  barre omnibus de catégorie IV </li>
<li>Défaillance de n&#39;importe quel  disjoncteur de catégorie IV</li>
<li>Défaillance de n&#39;importe quelle  barre omnibus de catégorie III </li>
<li>Défaillance de n&#39;importe quel  disjoncteur de catégorie III</li>
<li>Effets de la perte de n&#39;importe  quel bloc d&#39;alimentation, barre omnibus, panneau ou fusible des alimentations  de catégories II et I</li>
<li>Déclenchement ou panne au  démarrage d&#39;un ou de plusieurs générateurs de secours</li>
<li>Défaillances de transfert électrique</li>
<li>Défaillances des  transformateurs</li>
<li>Défaillances des redresseurs,  des onduleurs et des convertisseurs</li>
<li>Défaillances du système d&#39;alimentation  électrique d&#39;urgence, y compris le déclenchement ou la panne au démarrage d&#39;un  ou de plusieurs générateurs de secours</li>
</ol>
<h4 id="app-a-1-6">A.1.6	Systèmes de procédés</h4>
<ol>
<li>Perte totale d&#39;air d&#39;instrumentation  ou d&#39;air de service</li>
<li>Perte partielle d&#39;air d&#39;instrumentation  ou d&#39;air de service</li>
<li>Défaillances associées aux  raccords d&#39;air d&#39;instrumentation et d&#39;air de service entre les tranches, dans  les centrales à plusieurs tranches</li>
<li>Perte de refroidissement des composants  incluant, sans toutefois s&#39;y limiter, les pompes, les compresseurs et les  échangeurs de chaleur</li>
<li>Défaillances de l&#39;instrumentation,  des alarmes et des contrôles des systèmes de procédés</li>
</ol>
<h4 id="app-a-1-7">A.1.7	Exploitation intégrée de la tranche</h4>
<ol>
<li>Déclenchements de la turbine</li>
<li>Déclenchements de l&#39;alternateur  principal ou du système d&#39;excitation</li>
<li>Défaillance de n&#39;importe quelle  vanne de vapeur principale</li>
<li>Dérives et défaillances des  signaux d&#39;entrée et de sortie du circuit de commande et du système d&#39;arrêt d&#39;urgence  de la turbine</li>
<li>Dérives et défaillances des  signaux d&#39;entrée et de sortie du programme de régulation de la puissance de la  tranche et du programme de montée en vitesse de la turbine </li>
<li>Défaillance du programme de régulation  de la puissance de la tranche dans un ou dans les deux ordinateurs de contrôle</li>
<li>Défaillance du programme de  montée en vitesse de la turbine dans un ou dans les deux ordinateurs de  contrôle</li>
<li>Exploitation en mode manuel de prévention  de l&#39;empoisonnement et de pseudo prévention de l&#39;empoisonnement</li>
<li>Perte de surchauffe du circuit  de vapeur principal</li>
<li>Défaillance du circuit de  drainage des séparateurs-surchauffeurs</li>
<li>Défaillances des joints d&#39;étanchéité  de l&#39;alternateur principal </li>
<li>Perte de refroidissement à l&#39;hydrogène  de l&#39;alternateur principal, y compris les fuites de tubes des échangeurs de  chaleur</li>
<li>Perte de refroidissement du  stator de l&#39;alternateur principal, y compris les bris de conduites</li>
<li>Fuites de tubes du condenseur  principal</li>
<li>Perte de n&#39;importe quel réchauffeur  ou de n&#39;importe quelle file de réchauffeurs basse pression ou haute pression, y  compris les bris de tubes</li>
<li>Excursions de la concentration  de deutérium</li>
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
<div id="A.2"></div>
<h3 id="app-a-2">A.2 Appareils d&#39;enregistrement des données</h3>
<p>Le simulateur d&#39;une  centrale donnée doit être doté d&#39;appareils d&#39;enregistrement des données qui  satisfont aux exigences énoncées aux paragraphes 1 à 2.b. Ces  appareils doivent pouvoir être synchronisés à moins de deux secondes les uns  des autres.</p>
<ol>
<li>Le simulateur doit être équipé  d&#39;un système d&#39;enregistrement des actions posées au simulateur pouvant imprimer  en ordre chronologique, avec l&#39;heure de leur occurrence, toutes les  défaillances déclenchées par l&#39;opérateur du simulateur et toutes les  manipulations que les opérateurs effectuent aux panneaux de commande durant un  scénario d&#39;examen.</li>
<li>Le simulateur doit être équipé  de dispositifs pouvant&nbsp;:
<ol className="list-lower-alpha">
<li>tracer et imprimer avec une  précision suffisante les graphiques montrant l&#39;évolution en fonction du temps  de n&#39;importe quelle sélection de 48&nbsp;paramètres des systèmes de la centrale  pour une période pouvant aller jusqu&#39;à deux heures</li>
<li>conserver en mémoire et  imprimer les valeurs, en fonction du temps, de n&#39;importe quelle sélection de  48&nbsp;paramètres des systèmes de la centrale échantillonnés à une fréquence  appropriée pour une période pouvant aller jusqu&#39;à deux  heures</li>
</ol>
</li>
<li>Le simulateur doit être équipé d&#39;un système audiovisuel&nbsp;:
<ol>
<li>pouvant enregistrer toutes les  interventions effectuées par le candidat dans la salle de commande pendant un  scénario d&#39;examen</li>
<li>possédant une précision  suffisante pour permettre aux examinateurs de repérer, avec l&#39;aide de  photographies des panneaux de commande correspondants, les commandes et les  instruments utilisés par le candidat</li>
<li>pouvant afficher l&#39;heure sur  les enregistrements</li>
<li>pouvant enregistrer clairement  toutes les communications verbales directes et les conversations téléphoniques  entre un candidat et les autres membres de l&#39;équipe durant un scénario d&#39;examen</li>
<li>permettant de reconnaître facilement la voix des différents  participants</li>
</ol>
</li>
</ol>
<p>L&#39;installation de  commande du simulateur doit être séparée de la salle de commande de sorte que  le candidat ne puisse se rendre compte des données enregistrées ou des actions  posées par l&#39;opérateur du simulateur.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.3"></div>
<h3 id="app-a-3">A.3 Autres dispositifs</h3>
<p>Le simulateur doit  être équipé des dispositifs énumérés ci-dessous, qui doivent reproduire  fidèlement ceux que l&#39;on retrouve dans la salle de commande principale de la  centrale&nbsp;:</p>
<ol>
<li>réseau téléphonique</li>
<li>avertisseur sonore des alertes de  rayonnement</li>
<li>avertisseur sonore d&#39;incendie</li>
<li>système de diffusion publique</li>
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
<div id="B"></div>
<h2 id="app-b">Annexe B: Examens d&#39;accréditation portant sur les connaissances – Exigences supplémentaires </h2>
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
<h3 id="app-b-1" className="mrgn-tp-0">B.1	Groupes de sujets à traiter dans les examens généraux des candidats OR, CQC et CQSC</h3>
<p>Ces groupes de sujets  exigés se fondent sur le programme de formation en sciences fondamentales et  les principes liés à l&#39;équipement pour les candidats OR qui ont été élaborés  conformément aux principes d&#39;une approche systématique à la formation (ASF).</p>
<p>Les différents sujets  qui devraient être couverts par les examens généraux destinés aux candidats OR,  CQC et CQSC sont présentés ci-dessous dans un encadré d&#39;orientation pour  faciliter leur sélection, de manière à ce que chaque examen traite d&#39;un  éventail approprié de sujets pour couvrir les connaissances que doivent  posséder les OR, CQC et CQSC. Tous les sujets sélectionnés dans un groupe de  sujets doivent être liés à des objectifs de connaissance spécifiques  conformément aux indications de la sous-section&nbsp;9.3 et être mis à la  disposition de la CCSN, sur demande.</p>
<p>Les groupes de sujets  requis, la note totale et les notes à attribuer aux questions sont indiqués  ci-dessous en caractères gras et doivent être utilisés par les membres de l&#39;équipe  d&#39;examen pour concevoir et élaborer les examens d&#39;accréditation généraux.</p>
<p><strong>Total des  points&nbsp;: 100</strong></p>
<h4>A) Principes de fonctionnement et de contrôle d&#39;un réacteur</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><b>Groupe 1</b></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><b>Notions élémentaires de physique des réacteurs</b></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><b>Points : 7 ± 2 </b></p>
</div>
<div className="clear"></div>
<ol>
<li>Réaction en chaîne (fission), y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>neutrons instantanés et  retardés et effets connexes</li>
<li>cycle des neutrons et  application de la formule des six facteurs</li>
</ol>
</li>
<li>Propriétés du modérateur et  procédés de modération</li>
<li>Interactions des neutrons avec  les matériaux du cœur du réacteur</li>
<li>Production de chaleur dans le  réacteur</li>
<li>Répartition spatiale du flux  neutronique dans un réacteur</li>
<li>Fonctionnement d&#39;un réacteur  critique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>effets d&#39;insertions de  réactivité positive et de réactivité négative sur la puissance</li>
<li>période du réacteur</li>
<li>augmentation ou chute  instantanée de puissance</li>
</ol>
</li>
<li>Fonctionnement d&#39;un réacteur  sous-critique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>sources de neutrons</li>
<li>effets d&#39;insertions de  réactivité positive sur la puissance</li>
<li>règle du doublement de la  puissance</li>
</ol>
</li>
<li>Conditions de criticité  instantanée</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Variations de la réactivité</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 14 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Variations de la réactivité  découlant du fonctionnement d&#39;un réacteur à puissance élevée, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>combustion de l&#39;uranium 235</li>
<li>accumulation de produits de  fission</li>
<li>production et élimination du  xénon et du samarium</li>
<li>transitoires du xénon et du  samarium</li>
<li>accumulation et combustion des  isotopes du plutonium</li>
<li>transitoires du plutonium</li>
<li>changements de réactivité dus à  la combustion nucléaire</li>
</ol>
</li>
<li>Ajout et élimination de poisons  neutroniques chimiques dans le modérateur pour contrôler la réactivité, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>différents poisons utilisés  selon les conditions d&#39;exploitation</li>
<li>limites de concentration des  poisons</li>
<li>méthodes de vérification et de  contrôle des poisons</li>
</ol>
</li>
<li>Oscillations du xénon et  basculements du flux, y compris :
<ol className="list-lower-alpha">
<li>causes des oscillations du  xénon</li>
<li>moyens de contrôler les oscillations  du xénon</li>
</ol>
</li>
<li>Effets des variations de  température sur la réactivité, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>coefficients de température de  réactivité</li>
<li>coefficient de puissance d&#39;un  réacteur et ses effets sur la régulation et la protection du réacteur</li>
<li>limite de température du modérateur  et conséquences de l&#39;exploitation dépassant ces limites</li>
</ol>
</li>
<li>Effets sur la réactivité de la  formation de vide dans le caloporteur, y compris l&#39;effet de la formation de  vide dans le cœur sur les détecteurs du flux neutroniques durant une perte  accidentelle de caloporteur majeure</li>
<li>Limites de la teneur isotopique  du modérateur et du caloporteur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>raisons d&#39;être de ces limites</li>
<li>conséquences de l&#39;exploitation  en dehors de ces limites</li>
<li>rapport entre les limites de la  teneur isotopique du modérateur et du caloporteur</li>
</ol>
</li>
<li>Variations de la réactivité  après la mise à l&#39;arrêt d&#39;un réacteur</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Contrôle d&#39;un réacteur de puissance et instrumentation connexe</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 14 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de la régulation de  la puissance totale et de la puissance des zones d&#39;un réacteur, y compris les  mécanismes de contrôle de la réactivité utilisés ainsi que leurs principes de  fonctionnement</li>
<li>Principes de protection d&#39;un  réacteur</li>
<li>Mesures du flux neutronique  requises pour la régulation et la protection d&#39;un réacteur, y compris les différents  types de signaux nécessaires</li>
<li>Instruments de mesure du flux  neutronique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>principes de fonctionnement de  l&#39;instrumentation de démarrage dans le cœur et hors du cœur</li>
<li>principes de fonctionnement des  chambres d&#39;ionisation</li>
<li>principes de fonctionnement des  détecteurs de flux situés dans le cœur</li>
<li>facteurs qui influent sur la  précision des mesures de flux des détecteurs situés dans le cœur et des  chambres d&#39;ionisation</li>
</ol>
</li>
<li>Mesures de la puissance  thermique requises pour la régulation d&#39;un réacteur</li>
<li>Principes de fonctionnement des  instruments de mesure de la puissance thermique, y compris les facteurs qui  influent sur la précision des mesures de puissance thermique à différents  niveaux de puissance</li>
<li>Étalonnage global et par zone  des mesures du flux neutronique utilisées pour la régulation et la protection d&#39;un  réacteur</li>
<li>Étalonnage des mesures de la  puissance thermique utilisées pour la régulation d&#39;un réacteur</li>
<li>Formes du flux, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>formes du flux analysées et non  analysées</li>
<li>aplanissement du flux</li>
<li>effets du chargement de  combustible sur la forme du flux</li>
<li>effets des configurations  possibles des mécanismes de contrôle de la réactivité sur la forme du flux</li>
<li>facteur de surpuissance de  canal </li>
<li>protection contre les  surpuissances lorsqu&#39;un réacteur fonctionne à puissance élevée</li>
</ol>
</li>
<li>État préféré du réacteur pour  le rechargement de combustible</li>
<li>Diminution de la puissance d&#39;un  réacteur en fonction du temps après le déclenchement d&#39;un système d&#39;arrêt d&#39;urgence</li>
<li>Approche de l&#39;état critique, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>utilisation d&#39;instruments  spéciaux pour la régulation et la protection du réacteur</li>
<li>méthodes d&#39;approche de l&#39;état  critique</li>
<li>surveillance nécessaire durant  l&#39;approche de l&#39;état critique</li>
<li>confirmation de la criticité du  réacteur</li>
<li>précautions à prendre durant l&#39;approche  de la criticité</li>
</ol>
</li>
</ol>
<h4>B) Principes de transfert de la chaleur et  de thermodynamique</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Réacteur et circuit caloporteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 14 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de refroidissement du  combustible, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>modes de refroidissement du  combustible</li>
<li>mécanismes de transfert de la  chaleur du combustible au caloporteur</li>
<li>facteurs qui influent sur le  flux thermique critique</li>
<li>assèchement du combustible dans  un canal</li>
<li>ébullition du caloporteur</li>
</ol>
</li>
<li>Refroidissement du combustible  par circulation naturelle, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>principe de fonctionnement du  thermosiphon</li>
<li>thermosiphon monophasé et  biphasé</li>
<li>paramètres des systèmes à  surveiller durant le refroidissement par thermosiphon</li>
<li>paramètres des systèmes  contrôlés durant le refroidissement par thermosiphon et conséquences d&#39;un  mauvais contrôle</li>
<li>refroidissement par circulation  intermittente causée par poussée</li>
</ol>
</li>
<li>Évacuation de la chaleur lors  de pertes accidentelles de caloporteur majeures et mineures, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>importance d&#39;un arrêt d&#39;urgence  du réacteur</li>
<li>refroidissement ultra-rapide</li>
<li>purge du circuit caloporteur et  remplissage au moyen du système de refroidissement d&#39;urgence par injection dans  le cœur</li>
<li>effets de l&#39;arrosage dans l&#39;enceinte  de confinement</li>
</ol>
</li>
<li>Limites de fonctionnement des  grappes de combustible, de la puissance de canal et du réacteur</li>
<li>Profils de la température du  combustible dans différentes conditions</li>
<li>Profils de la température du  caloporteur et du flux thermique le long d&#39;un canal de combustible</li>
<li>Conditions anormales pouvant  mener à une surchauffe du combustible</li>
<li>Dommages causés au combustible,  y compris&nbsp;:
<ol className="list-lower-alpha">
<li>facteurs contributifs</li>
<li>comportement de la gaine du  combustible, compte tenu de la température et de l&#39;irradiation</li>
<li>mécanismes de défaillance de la  gaine</li>
<li>méthodes de détection et de  détermination de l&#39;emplacement du combustible défectueux</li>
</ol>
</li>
<li>Contrôle de la pression du circuit  caloporteur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>principes de fonctionnement du  pressuriseur</li>
<li>conséquences de l&#39;exploitation  à l&#39;extérieur des plages de température et du niveau normal du pressuriseur</li>
<li>principes de fonctionnement du  condenseur d&#39;extraction</li>
<li>accumulation de gaz non  condensable dans le condenseur d&#39;extraction</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes secondaires</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 11 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement des  générateurs de vapeur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanismes de transfert de la  chaleur du caloporteur vers l&#39;eau des générateurs de vapeur</li>
<li>relation entre la pression du  générateur de vapeur et le transfert de chaleur</li>
<li>principes du contrôle de la  pression du générateur de vapeur</li>
<li>changements de pression des  générateurs de vapeur durant le réchauffage et le refroidissement du circuit  caloporteur </li>
<li>gonflement et contraction de l&#39;eau  des générateurs de vapeur en régime stationnaire et lors de transitoires</li>
<li>principes du contrôle du niveau  du générateur de vapeur à différents niveaux de puissance</li>
<li>causes, préoccupations  relatives au fonctionnement et conséquences d&#39;un niveau anormal du générateur  de vapeur</li>
</ol>
</li>
<li>Principes de fonctionnement d&#39;une  turbine à plusieurs étages, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanisme de transformation de  la chaleur en travail dans la turbine</li>
<li>facteurs ayant une incidence  sur l&#39;efficacité et l&#39;intégrité de la turbine</li>
<li>contrôle de la charge de la  turbine</li>
<li>séparation de l&#39;humidité et  réchauffement de la vapeur</li>
<li>surchauffe de la sortie de  turbine</li>
</ol>
</li>
<li>Principes de fonctionnement du  condenseur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>processus de transfert  thermique dans le condenseur</li>
<li>facteurs ayant une incidence  sur la pression dans le condenseur</li>
<li>conditions non souhaitables  dans le condenseur</li>
</ol>
</li>
<li>Principes de fonctionnement des  réchauffeurs d&#39;alimentation, y compris les conditions non souhaitables dans les  réchauffeurs d&#39;alimentation</li>
<li>Principes de fonctionnement du  dégazeur, y compris les causes et les conséquences des excursions de pression  du dégazeur</li>
<li>Facteurs ayant une incidence  sur l&#39;efficacité du cycle secondaire</li>
<li>Précautions nécessaires lors du  remplissage ou du drainage d&#39;un échangeur de chaleur</li>
<li>Principes de fonctionnement des  turbines à combustion et conditions de fonctionnement à éviter</li>
</ol>
<h4>C) Principes de fonctionnement de l&#39;équipement  d&#39;une centrale CANDU</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Équipement mécanique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 12 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Vibrations dans les  turbo-alternateurs et dans d&#39;autres machines tournantes, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes principales de  vibrations et conditions de fonctionnement qui influent sur le niveau de  vibration</li>
<li>conditions de fonctionnement  susceptibles d&#39;avoir une incidence sur les vitesses critiques</li>
</ol>
</li>
<li>Dommages causés à l&#39;équipement  par des vibrations excessives</li>
<li>Causes et évitement de la  cavitation dans les centrales CANDU</li>
<li>Coups de bélier (vapeur ou eau)  dans les centrales CANDU, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes</li>
<li>dommages causés à l&#39;équipement</li>
<li>pratiques d&#39;exploitation visant  à réduire au minimum le risque que les coups de bélier se produisent</li>
</ol>
</li>
<li>Fonctionnement des pompes  centrifuges, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>changements opérationnels ayant  une incidence sur le fonctionnement des pompes</li>
<li>cavitation dans une pompe et  ses conséquences</li>
<li>changements opérationnels  pouvant causer la cavitation dans une pompe</li>
<li>conditions de fonctionnement  pouvant mener à la formation de poches de gaz et de poches de vapeur</li>
<li>conséquences des poches de gaz  ou de vapeur dans une pompe</li>
<li>principales causes et  conséquences du fonctionnement à sec d&#39;une pompe</li>
<li>conséquences d&#39;une rotation  inverse</li>
<li>diagnostic d&#39;un problème de  pompe</li>
<li>séquence de démarrage d&#39;une  pompe et précautions à prendre lors du démarrage</li>
<li>précautions à prendre durant l&#39;arrêt  et l&#39;isolement d&#39;une pompe</li>
</ol>
</li>
<li>Démarrage d&#39;une pompe à  déplacement positif</li>
<li>Principes de fonctionnement et  aspects opérationnels des compresseurs et des pompes à vide</li>
<li>Conséquences de la présence d&#39;humidité  excessive dans les conduites d&#39;air comprimé et les collecteurs</li>
<li>Conséquences et préoccupations  opérationnelles associées à une lubrification inadéquate des paliers, compte  tenu des différentes conditions pouvant en résulter</li>
<li>Conséquences des conditions de  fonctionnement anormales dans les joints mécaniques et les labyrinthes d&#39;étanchéité</li>
<li>Préoccupations opérationnelles  associées aux vannes, y compris les conséquences de la présence d&#39;impuretés  dans le fluide hydraulique et de la présence d&#39;humidité dans l&#39;air d&#39;instrumentation</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Équipement électrique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 12 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement et  contrôle de l&#39;alternateur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>synchronisation d&#39;un  alternateur</li>
<li>contrôle de la tension aux  bornes, de la fréquence et de la charge d&#39;un alternateur pour différentes  configurations d&#39;alternateurs et de charges</li>
<li>variations des paramètres d&#39;un  alternateur en fonction du débit de vapeur dans la turbine et du courant d&#39;excitation</li>
<li>facteurs qui influent sur la  stabilité d&#39;un alternateur</li>
<li>délestage d&#39;un alternateur</li>
<li>réactions automatiques aux  perturbations du réseau</li>
<li>chaleur produite dans un  alternateur et son évacuation</li>
<li>conditions de fonctionnement  néfastes et conséquences du dépassement des limites de fonctionnement d&#39;un  alternateur</li>
</ol>
</li>
<li>Principes de la protection de l&#39;équipement,  y compris&nbsp;:
<ol className="list-lower-alpha">
<li>protection des barres omnibus</li>
<li>protection des transformateurs</li>
<li>protection des moteurs</li>
<li>protection des génératrices</li>
</ol>
</li>
<li>Limites de fonctionnement des  transformateurs, y compris les conséquences du dépassement des limites de  fonctionnement</li>
<li>Fonctionnement des moteurs, y  compris les causes et les conséquences des conditions de fonctionnement anormales </li>
<li>Exploitation des batteries d&#39;accumulateurs  d&#39;une centrale, y compris les préoccupations de l&#39;opérateur qui s&#39;y rapportent</li>
<li>Actionnement, isolement et mise  hors tension des disjoncteurs</li>
<li>Mesures de sécurité à prendre  lors de l&#39;actionnement des disjoncteurs, des disjoncteurs des barres omnibus d&#39;un  centre de commande de moteurs et des sectionneurs</li>
<li>Mesures de sécurité à prendre  lors de l&#39;isolement des transformateurs de tension et des transformateurs de  courant</li>
<li>Mises à la terre défectueuses  des circuits de déclenchement c.c.</li>
<li>Conséquences des excès d&#39;humidité  et de température sur l&#39;isolation de l&#39;équipement électrique</li>
<li>Moyens d&#39;obtenir et de  maintenir la fiabilité des sources d&#39;alimentation électrique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>but, exigences relatives à la  disponibilité et implications en matière de sûreté des différentes catégories d&#39;alimentation</li>
<li>charges typiques pour chaque  catégorie d&#39;alimentation et raison d&#39;être de leur choix</li>
<li>sources de l&#39;alimentation  électrique normales et de rechange</li>
<li>poste de sectionnement à jeu de  barres en anneau </li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Instrumentation et contrôle</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement des  boucles de régulation de niveau, de débit, de température et de pression, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>principes de fonctionnement des  détecteurs</li>
<li>régulation proportionnelle</li>
<li>régulation proportionnelle avec  action intégrale</li>
<li>régulation proportionnelle avec  action dérivée</li>
<li>régulation proportionnelle avec  action intégrale et dérivée</li>
<li>régulation prédictive</li>
<li>régulation en cascade et  régulation à éléments multiples</li>
<li>actionneurs et positionneurs de  vannes</li>
<li>modes de défaillance des vannes  de régulation</li>
</ol>
</li>
<li>Incidence des conditions  ambiantes ou des conditions de fonctionnement sur&nbsp;:
<ol className="list-lower-alpha">
<li>les mesures de pression</li>
<li>les mesures de niveau</li>
<li>les mesures de débit</li>
</ol>
</li>
<li>Conséquences de défaillances et  de conditions anormales de composants sur&nbsp;:
<ol className="list-lower-alpha">
<li>les mesures de pression</li>
<li>les mesures de niveau</li>
<li>les mesures de débit</li>
<li>les mesures de température</li>
</ol>
</li>
<li>Principes de fonctionnement et  modes de défaillances des détecteurs et des capteurs suivants&nbsp;:
<ol className="list-lower-alpha">
<li>détecteurs de position</li>
<li>capteurs de vitesse</li>
<li>capteurs de vibrations</li>
<li>détecteurs de fumée et d&#39;incendie</li>
<li>détecteurs de fuites de liquide</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 9</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Matériaux et chimie</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Contraintes mécaniques et  thermiques dans les pièces d&#39;équipement mécanique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes des contraintes et  pratiques d&#39;exploitation utilisées pour les réduire au minimum</li>
<li>conséquences du dépassement des  contraintes limites</li>
</ol>
</li>
<li>Effets des rayonnements sur les  matériaux et les composants d&#39;une centrale, y compris les problèmes  attribuables aux dommages causés par les rayonnements</li>
<li>problèmes ayant une incidence  sur les tubes de force, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>facteurs qui influent sur le  fluage des tubes de force</li>
<li>facteurs qui favorisent la  fragilisation par l&#39;hydrogène, la fissuration différée due à l&#39;hydruration et  le boursouflement des tubes de force</li>
<li>pratiques d&#39;exploitation  utilisées pour réduire au minimum la fissuration différée due à l&#39;hydruration  des tubes de force</li>
</ol>
</li>
<li>Principes de fonctionnement des  colonnes échangeuses d&#39;ions, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>contrôle du pH et de la  conductivité par les colonnes échangeuses d&#39;ions dans les systèmes d&#39;une  centrale</li>
<li>contrôle du gadolinium et du  bore dans le modérateur</li>
<li>détection des colonnes  échangeuses d&#39;ions épuisées</li>
<li>causes et symptômes de  problèmes courants dans les colonnes échangeuses d&#39;ions et solutions à ces  problèmes</li>
</ol>
</li>
<li>Contrôle des paramètres  chimiques des systèmes d&#39;une centrale, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes de la corrosion des  composants des systèmes et façons de réduire au minimum les différents types de  corrosion</li>
<li>effet du pH sur la corrosion  des principaux matériaux utilisés dans une centrale</li>
<li>causes typiques de valeurs  anormales du pH dans les divers systèmes d&#39;une centrale, méthodes de contrôle  du pH utilisées et conséquences d&#39;un fonctionnement hors de la plage normale du  pH dans un système donné</li>
<li>causes typiques d&#39;une  concentration élevée d&#39;oxygène dissous dans les divers systèmes d&#39;une centrale,  méthodes de contrôle de l&#39;oxygène dissous utilisées et conséquences d&#39;un  fonctionnement avec trop d&#39;oxygène dissous dans un système donné</li>
<li>causes typiques de valeurs de  conductivité anormales dans les divers systèmes d&#39;une centrale, méthodes de  contrôle de la conductivité utilisées et conséquences d&#39;un fonctionnement hors  de la plage normale de conductivité dans un système donné</li>
<li>causes de la formation de  tartre et de boues dans les générateurs de vapeur, méthodes utilisées pour  réduire la formation de tartre et de boues au minimum et conséquences de l&#39;accumulation  de tartre et de boues dans les générateurs de vapeur</li>
<li>causes de la formation de dépôts  non identifiés liés à la corrosion dans les systèmes d&#39;une centrale, méthodes utilisées  pour contrôler ces dépôts et préoccupations opérationnelles associées à ces  dépôts dans les systèmes de la centrale</li>
</ol>
</li>
<li>Conditions qui favorisent la  réaction du zirconium avec la vapeur dans un réacteur CANDU et conséquences  connexes sur l&#39;exploitation</li>
<li>Excursions de deutérium ou d&#39;hydrogène  dans le gaz de couverture du modérateur, le système de contrôle des banes  liquides et le réservoir de stockage du circuit caloporteur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>raisons qui motivent le  contrôle de la production de deutérium ou d&#39;hydrogène gazeux</li>
<li>facteurs ayant une incidence  sur la production </li>
<li>préoccupations opérationnelles  connexes</li>
<li>méthodes de réduction et de  contrôle du deutérium ou de l&#39;hydrogène</li>
<li>fonctionnement des appareils de  recombinaison</li>
</ol>
</li>
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
<div id="B.2"></div>
<h3 id="app-b-2">B.2 Groupes de sujets pour les examens généraux destinés aux candidats OT0</h3>
<p>Ces groupes de sujets  exigés se fondent sur le programme de formation en sciences fondamentales et  les principes liés à l&#39;équipement pour les candidats OT0 qui ont été élaborés  conformément aux principes d&#39;une approche systématique à la formation (ASF).</p>
<p>Les différents sujets  qui devraient être couverts par les examens généraux destinés aux candidats OT0  sont présentés ci-dessous dans un encadré d&#39;orientation pour faciliter leur  sélection, de manière à ce que chaque examen traite d&#39;un éventail approprié de  sujets pour couvrir les connaissances que doivent posséder les OT0. Tous les  sujets sélectionnés dans un groupe de sujets doivent être liés à des objectifs  de connaissance spécifiques conformément aux indications de la  sous-section&nbsp;9.3 et être mis à la disposition de la CCSN, sur demande. </p>
<p>Les groupes de sujets  requis, la note totale et les notes à attribuer aux questions sont indiqués  ci-dessous en caractères gras et doivent être utilisés par les membres de l&#39;équipe  d&#39;examen pour concevoir et élaborer les examens d&#39;accréditation généraux.</p>
<p><strong>Total des  points&nbsp;: 75</strong></p>
<h4>A) Théorie nucléaire et principes de  fonctionnement du réacteur</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Théorie nucléaire et notions fondamentales du réacteur </strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Processus de désintégration  radioactive</li>
<li>Réactions nucléaires induites,  y compris :
<ol className="list-lower-alpha">
<li>réactions de diffusion</li>
<li>réactions d&#39;absorption</li>
<li>photoneutrons</li>
</ol>
</li>
<li>Processus nucléaires importants  pour l&#39;exploitation des réacteurs CANDU, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>thermalisation des neutrons</li>
<li>réactions de détection des  neutrons</li>
<li>absorption parasite et  activation</li>
</ol>
</li>
<li>Réaction en chaîne (fission), y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>neutrons instantanés et  retardés et effets connexes</li>
<li>cycle de vie des neutrons</li>
</ol>
</li>
<li>Propriétés du modérateur et  procédés de modération</li>
<li>Interactions des neutrons avec  les matériaux du cœur du réacteur</li>
<li>Fonctionnement du réacteur  sous-critique, critique et surcritique</li>
<li>Accumulation de produits de  fission</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Contrôle du réacteur et principales caractéristiques des réacteurs CANDU</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 7 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de la régulation de  la puissance totale et de la puissance des zones d&#39;un réacteur, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanismes de contrôle de la  réactivité utilisés et leurs principes de fonctionnement</li>
<li>mesures requises pour la puissance  neutronique et la puissance thermique</li>
</ol>
</li>
<li>Principes de fonctionnement des  systèmes d&#39;arrêt d&#39;urgence, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanismes d&#39;arrêt utilisés</li>
<li>capacités requises pour le  système d&#39;arrêt d&#39;urgence</li>
<li>exigences relatives à l&#39;établissement  et au maintien d&#39;un état d&#39;arrêt garanti</li>
</ol>
</li>
<li>Ajout et élimination de poisons  neutroniques chimiques dans le modérateur pour contrôler la réactivité</li>
<li>Principaux composants des  réacteurs CANDU, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>blindage du réacteur</li>
<li>circuit principal du modérateur  et ses auxiliaires</li>
<li>circuit caloporteur principal  et ses auxiliaires</li>
</ol>
</li>
<li>Production et évacuation de  chaleur dans un réacteur CANDU</li>
<li>Teneur isotopique du modérateur  et du circuit caloporteur</li>
</ol>
<h4>B) Principes de transfert de la chaleur et  de thermodynamique</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Principes de transfert de la chaleur et de thermodynamique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 10 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de refroidissement du  combustible, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>modes de refroidissement du  combustible</li>
<li>processus de transfert de  chaleur du combustible vers le caloporteur</li>
<li>importance du contrôle de la  pression du circuit caloporteur</li>
<li>assèchement dans un canal de  combustible</li>
<li>ébullition du caloporteur</li>
</ol>
</li>
<li>Refroidissement du combustible  par circulation naturelle, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>principe de fonctionnement du  thermosiphon</li>
<li>thermosiphon monophasé et  biphasé</li>
<li>refroidissement par circulation  intermittente causée par poussée </li>
</ol>
</li>
<li>Évacuation de la chaleur lors  de pertes accidentelles de caloporteur majeures et mineures, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>importance d&#39;un arrêt d&#39;urgence  du réacteur</li>
<li>refroidissement ultra-rapide</li>
<li>purge du circuit caloporteur et  remplissage au moyen du système de refroidissement d&#39;urgence par injection dans  le cœur</li>
<li>effets de l&#39;arrosage dans l&#39;enceinte  de confinement</li>
<li>changements de la pression du  confinement durant un accident dû à la perte de caloporteur</li>
</ol>
</li>
<li>Limites de fonctionnement des  grappes de combustible, de la puissance de canal et du réacteur</li>
<li>Conditions anormales pouvant  mener à une surchauffe du combustible</li>
<li>Dommages causés au combustible,  y compris&nbsp;:
<ol className="list-lower-alpha">
<li>facteurs contributifs</li>
<li>comportement de la gaine du  combustible, compte tenu de la température et de l&#39;irradiation</li>
<li>mécanismes de défaillance de la  gaine</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes secondaires</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement des  générateurs de vapeur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanismes de transfert de la  chaleur du caloporteur vers l&#39;eau des générateurs de vapeur</li>
<li>relation entre la pression du  générateur de vapeur et le transfert de chaleur</li>
<li>principes du contrôle de la  pression du générateur de vapeur</li>
<li>changements de pression des  générateurs de vapeur durant le réchauffage et le refroidissement du circuit  caloporteur </li>
</ol>
</li>
<li>Principes de fonctionnement du  condenseur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>processus de transfert  thermique dans le condenseur</li>
<li>facteurs ayant une incidence  sur la pression dans le condenseur</li>
</ol>
</li>
<li>Précautions nécessaires lors du  remplissage ou du drainage d&#39;un échangeur de chaleur</li>
<li>Facteurs ayant une incidence  sur l&#39;efficacité des échangeurs de chaleur</li>
<li>Principes de fonctionnement des  turbines à combustion, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>mécanismes de transformation de  la chaleur en travail dans la turbine</li>
<li>régulation de la charge de la  turbine</li>
<li>conditions de  fonctionnement à éviter</li>
</ol>
</li>
</ol>
<h4>C) Principes de fonctionnement de l&#39;équipement  d&#39;une centrale CANDU</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Équipement mécanique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 12 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Vibrations dans les  génératrices de secours et dans d&#39;autres machines tournantes, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>principales causes de  vibrations et conditions de fonctionnement qui influent sur le niveau de  vibration</li>
<li>conditions de fonctionnement  susceptibles d&#39;avoir une incidence sur les vitesses critiques</li>
</ol>
</li>
<li>Dommages causés à l&#39;équipement  par des vibrations excessives</li>
<li>Causes et évitement de la  cavitation dans les centrales CANDU</li>
<li>Coups de bélier (vapeur ou eau)  dans les centrales CANDU, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes</li>
<li>dommages causés à l&#39;équipement</li>
<li>pratiques d&#39;exploitation visant  à réduire au minimum le risque que les coups de bélier se produisent</li>
</ol>
</li>
<li>Fonctionnement des pompes  centrifuges, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>changements opérationnels ayant  une incidence sur le fonctionnement des pompes</li>
<li>cavitation dans une pompe et  ses conséquences</li>
<li>changements opérationnels  pouvant causer la cavitation dans une pompe</li>
<li>conditions de fonctionnement  pouvant mener à la formation de poches de gaz et de poches de vapeur</li>
<li>conséquences des poches de gaz  ou de vapeur dans une pompe</li>
<li>principales causes et  conséquences du fonctionnement à sec d&#39;une pompe</li>
<li>conséquences d&#39;une rotation  inverse</li>
<li>diagnostic d&#39;un problème de  pompe</li>
<li>séquence de démarrage d&#39;une  pompe et précautions à prendre lors du démarrage</li>
<li>précautions à prendre durant l&#39;arrêt  et l&#39;isolement d&#39;une pompe</li>
</ol>
<li>Démarrage d&#39;une pompe à  déplacement positif</li>
<li>Principes de fonctionnement et  aspects opérationnels des compresseurs et des pompes à vide</li>
<li>Conséquences de la présence d&#39;humidité  excessive dans les conduites d&#39;air comprimé et les collecteurs</li>
<li>Conséquences et préoccupations  opérationnelles associées à une lubrification inadéquate des paliers, compte  tenu des différentes conditions pouvant en résulter</li>
<li>Conséquences des conditions de  fonctionnement anormales dans les joints mécaniques et les labyrinthes d&#39;étanchéité</li>
<li>Préoccupations opérationnelles  associées aux vannes, y compris les conséquences de la présence d&#39;impuretés  dans le fluide hydraulique et de la présence d&#39;humidité dans l&#39;air d&#39;instrumentation</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Équipement électrique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 16 ± 3</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement et  contrôle d&#39;un alternateur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>synchronisation d&#39;un  alternateur</li>
<li>contrôle de la tension aux  bornes, de la fréquence et de la charge d&#39;un alternateur pour différentes  configurations d&#39;alternateurs et de charges</li>
<li>variations des paramètres d&#39;un  alternateur en fonction du débit de vapeur ou de gaz dans la turbine et du  courant d&#39;excitation</li>
<li>facteurs qui influent sur la  stabilité d&#39;un alternateur</li>
<li>délestage d&#39;un alternateur</li>
<li>réactions automatiques aux  perturbations du réseau</li>
<li>chaleur produite dans un  alternateur et son évacuation</li>
<li>conditions de fonctionnement néfastes  et conséquences du dépassement des limites de fonctionnement d&#39;un alternateur</li>
</ol>
</li>
<li>Principes de protection de l&#39;équipement,  y compris&nbsp;:
<ol className="list-lower-alpha">
<li>protection des barres omnibus</li>
<li>protection des transformateurs</li>
<li>protection des moteurs</li>
<li>protection des génératrices</li>
</ol>
</li>
<li>Limites de fonctionnement des  transformateurs, y compris les conséquences du dépassement des limites de  fonctionnement</li>
<li>Fonctionnement des moteurs, y  compris les causes et les conséquences des conditions de fonctionnement  anormales </li>
<li>Exploitation des batteries d&#39;accumulateurs  d&#39;une centrale, y compris les préoccupations de l&#39;opérateur qui s&#39;y rapportent</li>
<li>Actionnement, isolement et mise  hors tension des disjoncteurs</li>
<li>Mesures de sécurité à prendre  lors de l&#39;actionnement des disjoncteurs, des disjoncteurs des barres omnibus d&#39;un  centre de commande de moteurs et des sectionneurs</li>
<li>Mesures de sécurité à prendre  lors de l&#39;isolement des transformateurs de tension et des transformateurs de  courant</li>
<li>Mises à la terre défectueuses  des circuits de déclenchement c.c.</li>
<li>Conséquences des excès d&#39;humidité  et de température sur l&#39;isolation de l&#39;équipement électrique</li>
<li>Moyens d&#39;obtenir et de  maintenir la fiabilité des sources d&#39;alimentation électrique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>but, exigences relatives à la  disponibilité et implications en matière de sûreté des différentes catégories d&#39;alimentation</li>
<li>charges typiques pour chaque  catégorie d&#39;alimentation et raison d&#39;être de leur choix</li>
<li>sources de l&#39;alimentation  électrique normale et de rechange</li>
<li>bus en anneau du poste de manœuvre</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Instrumentation et contrôle</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de fonctionnement des  boucles de régulation de niveau, de débit, de température et de pression, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>principes de fonctionnement des  détecteurs</li>
<li>régulation proportionnelle</li>
<li>régulation proportionnelle avec  action intégrale</li>
<li>régulation proportionnelle avec  action dérivée</li>
<li>régulation proportionnelle avec  action intégrale et dérivée</li>
<li>régulation prédictive</li>
<li>actionneurs et positionneurs de  vannes</li>
<li>modes de défaillance des vannes  de régulation</li>
</ol>
</li>
<li>Incidence des conditions  ambiantes ou des conditions de fonctionnement sur&nbsp;:
<ol className="list-lower-alpha">
<li>les mesures de pression</li>
<li>les mesures de niveau</li>
<li>les mesures de débit</li>
</ol>
</li>
<li>Conséquences de défaillances et  de conditions anormales de composants sur&nbsp;:
<ol className="list-lower-alpha">
<li>les mesures de pression</li>
<li>les mesures de niveau</li>
<li>les mesures de débit</li>
<li>les mesures de température</li>
</ol>
</li>
<li>Principes de fonctionnement et  modes de défaillances des détecteurs et des capteurs suivants&nbsp;:
<ol className="list-lower-alpha">
<li>détecteurs de position</li>
<li>capteurs de vitesse</li>
<li>capteurs de vibrations</li>
<li>détecteurs de fumée et d&#39;incendie</li>
<li>détecteurs de fuites de liquides</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Matériaux et chimie</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Contraintes mécaniques et  thermiques dans les pièces d&#39;équipement mécanique, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes des contraintes et  pratiques d&#39;exploitation utilisées pour les réduire au minimum</li>
<li>conséquences des contraintes  excessives</li>
</ol>
</li>
<li>Effets des rayonnements sur les  matériaux et les composants d&#39;une centrale, y compris les problèmes  attribuables aux dommages causés par les rayonnements</li>
<li>Principes de fonctionnement des  colonnes échangeuses d&#39;ions, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>contrôle du pH et de la  conductivité par les colonnes échangeuses d&#39;ions dans les systèmes d&#39;une  centrale</li>
<li>détection des colonnes  échangeuses d&#39;ions épuisées</li>
<li>causes et symptômes de  problèmes courants dans les colonnes échangeuses d&#39;ions et solutions à ces  problèmes</li>
</ol>
</li>
<li>Contrôle des paramètres  chimiques des systèmes d&#39;une centrale, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>causes de la corrosion des  composants des systèmes et façons de réduire au minimum les différents types de  corrosion</li>
<li>effet du pH sur la corrosion  des matériaux utilisés couramment dans une centrale</li>
<li>causes typiques de valeurs  anormales du pH dans les divers systèmes d&#39;une centrale, méthodes de contrôle  du pH utilisées et conséquences d&#39;un fonctionnement hors de la plage normale du  pH dans un système donné</li>
<li>causes typiques d&#39;une  concentration élevée d&#39;oxygène dissous dans les divers systèmes d&#39;une centrale,  méthodes de contrôle de l&#39;oxygène dissous utilisées et conséquences d&#39;un  fonctionnement avec trop d&#39;oxygène dissous dans un système donné</li>
<li>causes typiques de valeurs de  conductivité anormales dans les divers systèmes d&#39;une centrale, méthodes de  contrôle de la conductivité utilisées et conséquences d&#39;un fonctionnement hors  de la plage normale de conductivité dans un système donné</li>
<li>causes de la formation de  tartre et de boues dans les générateurs de vapeur, méthodes utilisées pour  réduire la formation de tartre et de boues au minimum et conséquences de l&#39;accumulation  de tartre et de boues dans les générateurs de vapeur</li>
<li>causes de la formation de  dépôts non identifiés liés à la corrosion dans les systèmes d&#39;une centrale,  méthodes utilisées pour contrôler ces dépôts et préoccupations opérationnelles  associées à ces dépôts dans les systèmes de la centrale</li>
</ol>
</li>
<li>Conditions qui favorisent la  réaction du zirconium avec la vapeur dans un réacteur CANDU et conséquences  connexes sur l&#39;exploitation</li>
<li>Excursion de deutérium ou d&#39;hydrogène  dans le gaz de couverture du modérateur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>raisons qui motivent le  contrôle de la production de deutérium ou d&#39;hydrogène gazeux</li>
<li>facteurs ayant une incidence  sur la production</li>
<li>préoccupations opérationnelles  connexes</li>
</ol>
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
<div id="B.3"></div>
<h3 id="app-b-3">B.3 Groupes de sujets à traiter dans les examens propres à la centrale des candidats OR</h3>  <p>Ces groupes de sujets  exigés se fondent sur le programme de formation traitant du fonctionnement  intégré des systèmes propres à la centrale destiné aux candidats OR, qui a été  élaboré conformément aux principes d&#39;une approche systématique à la formation (ASF).</p>  <p>Les différents sujets  qui devraient être couverts par les examens propres à une centrale destinés aux  candidats OR sont présentés ci-dessous dans un encadré d&#39;orientation pour  faciliter leur sélection, de manière à ce que chaque examen traite d&#39;un  éventail approprié de sujets pour couvrir les connaissances que doivent  posséder les OR. Tous les sujets sélectionnés dans un groupe de sujets doivent  être liés à des objectifs de connaissance spécifiques conformément aux  indications de la sous-section&nbsp;9.3 et être mis à la disposition de la  CCSN, sur demande.</p>  <p>Les groupes de sujets  requis, la note totale et les notes à attribuer aux questions sont indiqués  ci-dessous en caractères gras et doivent être utilisés par les membres de l&#39;équipe  d&#39;examen pour concevoir et élaborer les examens d&#39;accréditation spécifiques à  la centrale.</p>  <div className="span-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Tous les groupes de sujets</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Total : 100 points</strong></p>
</div>
<div className="clear"></div>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes spéciaux de sûreté</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Systèmes d&#39;arrêt d&#39;urgence (SAU-1)  (ou SPR à la centrale concernée), y compris&nbsp;:
<ol className="list-lower-alpha">
<li>paramètres de déclenchement  absolus et conditionnels avec leurs raisons d&#39;être, types d&#39;incidents contre  lesquels ils protègent, paramètres de déclenchement primaires et alternatifs, et  seuils de déclenchement dépendant de la puissance</li>
<li>mécanismes de verrouillage  entre le SAU-1 et le système de régulation du réacteur</li>
<li>indisponibilités et leurs conséquences sur l&#39;efficacité des systèmes</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>SAU-2 (ou SAUA à la centrale  concernée), y compris&nbsp;:
<ol className="list-lower-alpha">
<li>paramètres de déclenchement  absolus et conditionnels avec leurs raisons d&#39;être, types d&#39;incidents contre  lesquels ils protègent, paramètres de déclenchement primaires et alternatifs,  seuils de déclenchement dépendant de la puissance</li>
<li>mécanismes de verrouillage  entre le SAU-2 et le système de régulation du réacteur</li>
<li>indisponibilités et leurs  conséquences sur l&#39;efficacité des systèmes</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>Système de refroidissement d&#39;urgence  du cœur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>systèmes et sous-systèmes  connexes</li>
<li>paramètres de déclenchement et  paramètres de conditionnement, avec leurs raisons d&#39;être</li>
<li>indisponibilités et leurs  conséquences sur l&#39;efficacité des systèmes</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>Système de confinement et  système de confinement à pression négative, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>sous-systèmes connexes</li>
<li>indisponibilités et leurs  conséquences sur l&#39;efficacité des systèmes</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>Système d&#39;aération d&#39;urgence du  bâtiment turbine, le cas échéant</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Sûreté nucléaire</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 7 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de sûreté nucléaire,  y compris&nbsp;:
<ol className="list-lower-alpha">
<li>considérations relatives à la  défense en profondeur</li>
<li>principes de contrôle, de  refroidissement et de confinement dans des conditions de fonctionnement  normales et anormales</li>
<li>exigences relatives à l&#39;établissement  et au maintien de l&#39;état d&#39;arrêt garanti</li>
<li>rôles des systèmes spéciaux de  sûreté, des systèmes en matière de sûreté en attente et des systèmes  fonctionnels liés à la sûreté</li>
<li>moyens d&#39;obtenir et de  maintenir la fiabilité des systèmes et de l&#39;équipement</li>
<li>protection contre les  défaillances de cause commune</li>
<li>exigences relatives à la  disponibilité et aux essais des systèmes liés à la sûreté</li>
<li>raison d&#39;être, exigences  relatives à la disponibilité et incidence sur la sûreté des différentes  catégories d&#39;alimentation électrique</li>
<li>fondement d&#39;autorisation de la  centrale, analyses de sûreté et paramètres d&#39;exploitation sûre</li>
<li>permis d&#39;exploitation de la  centrale et Lignes de conduite pour l&#39;exploitation</li>
<li>contrôle de la configuration et  de l&#39;état de la centrale</li>
</ol>
</li>
<li>Sources froides, y compris leur  utilisation dans des conditions d&#39;exploitation inhabituelles durant les arrêts  prolongés d&#39;un réacteur</li>
<li>Paramètres critiques de sûreté  et leurs paramètres de soutien</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Procédures d&#39;urgence</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Procédures d&#39;exploitation en  cas d&#39;urgence, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>raison d&#39;être de la procédure</li>
<li>conséquences de l&#39;événement sur  l&#39;exploitation</li>
<li>réponse des systèmes à l&#39;événement</li>
<li>toute interaction entre la  tranche du réacteur et la tranche 0, le cas échéant</li>
</ol>
</li>
<li>Fonctionnement de la zone de  contrôle secondaire, y compris les indisponibilités et leurs conséquences sur l&#39;efficacité  des systèmes
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Physique du réacteur, surveillance du cœur, manutention et rechargement du combustible</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 7 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Configurations normales et  anormales de la réactivité et formes du flux</li>
<li>Facteur de surpuissance de  canal </li>
<li>Principes associés au  rechargement en combustible, limites à respecter lors du rechargement,  manutention et stockage du combustible, et refroidissement du combustible  irradié</li>
<li>Surveillance de la température  des canaux</li>
<li>Canaux entièrement instrumentés</li>
<li>Cartographie de la puissance de  canal, s&#39;il y a lieu</li>
<li>Cartographie du flux et mesures  de la puissance thermique, le cas échéant</li>
<li>Chargement du combustible
<ol className="list-lower-alpha">
<li>cycle de rechargement du  réacteur en combustible</li>
<li>exigences préalables et limites  à respecter lors du rechargement</li>
<li>refroidissement d&#39;urgence du  combustible irradié</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Système de régulation du réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Routines du programme système  de régulation du réacteur (SRR)</li>
<li>Routine du recul de puissance  (aux centrales nucléaires concernées)</li>
<li>Barres de compensation</li>
<li>Barres de commande (aux  centrales nucléaires concernées)</li>
<li>Systèmes de poison liquide du  modérateur</li>
<li>Système de contrôle de zone  liquide</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes liés au réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 7 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Circuit caloporteur primaire, y  compris&nbsp;:
<ol className="list-lower-alpha">
<li>système de contrôle de la  pression et de l&#39;inventaire</li>
<li>système de refroidissement des  garnitures de pompes du circuit caloporteur</li>
<li>système d&#39;arrêt des pompes du  circuit caloporteur</li>
</ol>
</li>
<li>Système de refroidissement à l&#39;arrêt  (système de refroidissement pour l&#39;entretien aux centrales nucléaires  concernées)</li>
<li>Circuit principal du modérateur</li>
<li>Systèmes de contrôle du niveau  et de la température du modérateur</li>
<li>Système de refroidissement des  boucliers d&#39;extrémité</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes de contrôle du réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 7 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Contrôle de la pression des  générateurs de vapeur</li>
<li>Contrôle du niveau des  générateurs de vapeur</li>
<li>Contrôle du niveau du dégazeur</li>
<li>Régulateur de turbine</li>
<li>Programme de contrôle général  ou programme de contrôle des auxiliaires du circuit caloporteur, selon ce qui s&#39;applique</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes de la turbine, circuit de vapeur et d&#39;eau d&#39;alimentation</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Circuits du condensat, y  compris le circuit d&#39;appoint et de rejet du condensat</li>
<li>Circuit d&#39;eau d&#39;alimentation  des générateurs de vapeur</li>
<li>Système d&#39;eau d&#39;appoint des  générateurs de vapeur</li>
<li>Système de refroidissement à l&#39;arrêt  (aux centrales nucléaires concernées)</li>
<li>Circuit de vapeur des  générateurs de vapeur, y compris :
<ol className="list-lower-alpha">
<li>vannes de sûreté des  générateurs de vapeur</li>
<li>vannes de régulation du  condenseur et soupapes atmosphériques (aux centrales nucléaires concernées) </li>
</ol>
</li>
<li>Circuit de vapeur des turbines,  y compris :
<ol className="list-lower-alpha">
<li>soupapes d&#39;arrêt d&#39;urgence,  vannes régulatrices </li>
<li>vannes d&#39;arrêt des  séparateurs-surchauffeurs, s&#39;il y a lieu</li>
</ol>
</li>
<li>Système d&#39;arrêt des turbines</li>
<li>Programme de contrôle du  régulateur de puissance de la tranche, s&#39;il y a lieu</li>
<li>Accélération des turbines et  système de contrôle de la charge des turbines</li>
<li>Supervision du groupe  turbo-alternateur</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 9</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Alternateur principal et systèmes d&#39;alimentation électrique</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système de l&#39;alternateur principal</li>
<li>Excitation statique de l&#39;alternateur</li>
<li>Équipement et distribution  électrique de la centrale, y compris :
<ol className="list-lower-alpha">
<li>protection électrique</li>
<li>mécanismes de transfert d&#39;urgence</li>
<li>systèmes d&#39;alimentation  électrique d&#39;urgence</li>
</ol>
</li>
<li>Équipement électrique du poste  de manœuvre et système de distribution</li>
<li>Système d&#39;air comprimé du poste  de manœuvre</li>
<li>Circuits d&#39;air d&#39;instrumentation</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 10</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes auxiliaires du réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Circuit d&#39;épuration du  modérateur</li>
<li>Circuit du gaz de couverture du  modérateur</li>
<li>Systèmes de stockage, de  transfert et de récupération pour le transfert de la chaleur</li>
<li>Système de purification pour le  transfert de la chaleur</li>
<li>Système d&#39;addition d&#39;hydrogène pour  le transfert de la chaleur</li>
<li>Circuit du gaz annulaire</li>
<li>Système de détection du  combustible défectueux, s&#39;il y a lieu</li>
<li>Système de localisation du  combustible défectueux, s&#39;il y a lieu</li>
<li>Systèmes d&#39;alimentation d&#39;urgence  en eau (alimentation en eau de secours, système d&#39;eau d&#39;appoint des générateurs  de vapeur)</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 11</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes auxiliaires de la turbine, de l&#39;alternateur et des générateurs de vapeur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Purge du générateur de vapeur</li>
<li>Système vapeur des boîtes  étanches de la turbine</li>
<li>Système d&#39;échappement à basse  pression de la turbine</li>
<li>Système d&#39;extraction d&#39;air du  condenseur</li>
<li>Circuit d&#39;eau en circulation du  condenseur</li>
<li>Circuit de refroidissement de  l&#39;alternateur (hydrogène)</li>
<li>Circuit de refroidissement du  stator de l&#39;alternateur</li>
<li>Circuit de lubrification des  joints de l&#39;alternateur</li>
<li>Circuit d&#39;huile de  lubrification du groupe turbo-alternateur</li>
<li>Circuit d&#39;alimentation en  fluide du régulateur </li>
<li>Système de vapeur d&#39;extraction</li>
<li>Système de drainage du  séparateur et du réchauffeur d&#39;alimentation</li>
<li>Système de détection des fuites  du condenseur</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 12</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Exploitation d&#39;un groupe réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 8 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Procédures de démarrage d&#39;un  groupe réacteur, y compris&nbsp;:
<ol>
<li>remplissage du circuit  caloporteur </li>
<li>approche de l&#39;état critique</li>
<li>pressurisation du circuit  caloporteur</li>
<li>montée en température du  réacteur</li>
<li>démarrage du turboalternateur  et de ses systèmes auxiliaires</li>
<li>chargement en combustible du  réacteur</li>
</ol>
</li>
<li>Procédures de mise à l&#39;arrêt d&#39;un  groupe réacteur, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>réduction de puissance du  réacteur</li>
<li>refroidissement du réacteur</li>
<li>dépressurisation du circuit  caloporteur</li>
<li>drainage du circuit caloporteur  (aux centrales nucléaires concernées)</li>
<li>mise à l&#39;arrêt du groupe  turbo-alternateur et des auxiliaires</li>
<li>établissement des états d&#39;arrêt  garantis</li>
<li>mise à l&#39;arrêt de quatre  réacteurs dans les centrales à plusieurs réacteurs</li>
</ol>
</li>
<li>Procédures d&#39;exploitation en  conditions anormales, y compris :
<ol className="list-lower-alpha">
<li>réaction à un arrêt d&#39;urgence du  réacteur</li>
<li>réaction à une baisse contrôlée  de puissance du réacteur</li>
<li>réaction à un recul rapide de  puissance du réacteur (aux centrales nucléaires concernées)</li>
<li>récupération après une baisse  contrôlée de puissance ou un recul rapide de puissance du réacteur</li>
<li>déclenchement ou arrêt manuel  des pompes du circuit caloporteur</li>
<li>rejet de production suivi d&#39;une  récupération</li>
<li>déclenchement de la turbine  suivi d&#39;une récupération</li>
<li>réaction à une fuite importante  d&#39;hydrogène ou à un bris d&#39;un joint d&#39;étanchéité de l&#39;alternateur principal</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 13</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes de radioprotection et urgences radiologiques</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 10 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système de contrôle de l&#39;accès</li>
<li>Sas</li>
<li>Systèmes de surveillance du  rayonnement </li>
<li>Système de décharge d&#39;air  filtré d&#39;urgence</li>
<li>Système de surveillance du  rayonnement après un accident </li>
<li>Système de gestion des déchets  liquides radioactifs</li>
<li>Système de surveillance des  cheminées, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>sources d&#39;émissions en  suspension dans l&#39;air </li>
<li>trajectoires des émissions en  suspension dans l&#39;air</li>
</ol>
</li>
<li>Notions fondamentales liées au  contrôle des rejets de radioactivité dans l&#39;environnement, y compris&nbsp;:
<ol className="list-lower-alpha">
<li>limites opérationnelles  dérivées et limites de dose publique connexes</li>
<li>groupes critiques </li>
<li>surveillance des contrôles </li>
</ol>
</li>
<li>Risques potentiels d&#39;irradiation  liés aux systèmes exploités par l&#39;opérateur de réacteur </li>
<li>Risques potentiels d&#39;irradiation  en cas d&#39;accident de perte de réfrigérant primaire accompagné de combustible  défectueux</li>
<li>Responsabilités de l&#39;opérateur  du réacteur en conditions radiologiques inhabituelles</li>
</ol>
<p>Consulter l&#39;annexe&nbsp;D.3 pour la répartition des points dans le  groupe.</p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 14</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Responsabilités de l&#39;opérateur de réacteur</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Responsabilités et pouvoirs d&#39;un  opérateur de réacteur, y compris&nbsp;:</li>
<li>Protection des travaux  effectués sur les systèmes d&#39;un groupe réacteur</li>
<li>Sécurité du personnel </li>
<li>Communications avec les groupes  externes, par ex. les opérateurs du réseau électrique</li>
<li>Culture de sûreté du titulaire  de permis</li>
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
<div id="B.4"></div>
<h3 id="app-b-4">B.4 Groupes de connaissances à traiter dans les examens propres à la centrale des candidats OR</h3>
<p>Les membres de  l&#39;équipe d&#39;examen doivent utiliser les groupes de connaissances et les points  présentés dans le tableau qui suit afin de s&#39;assurer que l&#39;échantillonnage de  groupes de sujets choisis à l&#39;annexe&nbsp;B.3 couvre adéquatement les  différents domaines de connaissances visés par les objectifs de l&#39;ASF de la  centrale à l&#39;intention des candidats OR. </p>
<p>Les objectifs de  connaissance ou objectifs de formation sont propres à chaque centrale et sont  élaborés conformément à une ASF. Les centrales à une seule tranche utilisent le  document intitulé Objectifs génériques de  connaissance des systèmes d&#39;une centrale nucléaire pour opérateurs de salle de  commande (OGCS) pour l&#39;élaboration des objectifs de connaissance propres à  leur centrale (consulter l&#39;annexe&nbsp;D.2 pour les objectifs correspondants).  Les centrales nucléaires à plusieurs tranches utilisent le modèle d&#39;objectifs  qui a été approuvé par la CCSN en décembre 2003 (voir la section «&nbsp;Références&nbsp;»).</p>
<table>
<tr>
<th>Groupe</th>
<th>Domaine de connaissances </th>
<th>100 points</th>
</tr>
<tr>
<td>A</td>
<td>Conception des systèmes </td>
<td>9 ± 2</td>
</tr>
<tr>
<td>B</td>
<td>Instrumentation et contrôle</td>
<td>13 ± 3</td>
</tr>
<tr>
<td>C</td>
<td>Fonctionnement des boucles de
régulation et des circuits logiques de commande </td>
<td>14 ± 3</td>
</tr>
<tr>
<td>D</td>
<td>Surveillance des paramètres des systèmes,
procédures d&#39;exploitation et procédures d&#39;essai, à l&#39;exclusion des procédures
d&#39;exploitation d&#39;urgence </td>
<td>12 ± 3</td>
</tr>
<tr>
<td>E</td>
<td>Lignes de conduite pour l&#39;exploitation </td>
<td>8 ± 2</td>
</tr>
<tr>
<td>F</td>
<td>Indisponibilités des systèmes et
sources froides </td>
<td>8 ± 2</td>
</tr>
<tr>
<td>G</td>
<td>Exploitation d&#39;urgence </td>
<td>9 ± 3</td>
</tr>
<tr>
<td>I</td>
<td>Principes de la sûreté nucléaire et
leur application</td>
<td>6 ± 1</td>
</tr>
<tr>
<td>I</td>
<td>Physique du cœur du réacteur,
surveillance du cœur, chargement de combustible et manutention du combustible</td>
<td>7 ± 2</td>
</tr>
<tr>
<td>J</td>
<td>Aspects administratifs, tels que les
procédures administratives liées à l&#39;exploitation et à l&#39;entretien de la
centrale, la sécurité au travail, les rôles et les responsabilités du
personnel exploitant</td>
<td>4 ± 1</td>
</tr>
<tr>
<td>K</td>
<td>Objectifs de connaissance en matière
de radioprotection dans les centrales nucléaires approuvés par la CCSN (consulter
l&#39;annexe&nbsp;D.3)</td>
<td>10 ± 2</td>
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
<div id="B.5"></div>
<h3 id="app-b-5">B.5	Groupes de sujets à traiter dans les examens propres à la centrale des candidats OT0</h3>
<p>Ces groupes de sujets  exigés se fondent sur le programme de formation traitant du fonctionnement  intégré des systèmes propres à la centrale destiné aux candidats OT0, qui a été  élaboré conformément aux principes d&#39;une approche systématique à la formation (ASF).</p>
<p>Les différents sujets  qui devraient être couverts par les examens propres à une centrale destinés aux  candidats OT0 sont présentés ci-dessous dans un encadré d&#39;orientation pour  faciliter leur sélection, de manière à ce que chaque examen traite d&#39;un  éventail approprié de sujets pour vérifier les connaissances que doivent  posséder les OT0. Tous les sujets sélectionnés dans un groupe de sujets doivent  être liés à des objectifs de connaissance spécifiques, conformément aux  indications de la sous-section&nbsp;9.3 et être mis à la disposition de la  CCSN, sur demande.</p>
<p>Les groupes de sujets  requis, la note totale et les notes à attribuer aux questions sont indiqués  ci-dessous en caractères gras et doivent être utilisés par les membres de l&#39;équipe  d&#39;examen pour concevoir et élaborer les examens d&#39;accréditation spécifiques à  la centrale.</p>
<div className="span-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Tous les groupes de sujets</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Total : 75 points</strong></p>
</div>
<div className="clear"></div>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes spéciaux de sûreté</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 12 ± 3</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système de refroidissement d&#39;urgence  par injection, y compris :
<ol>
<li>systèmes connexes</li>
<li>indisponibilités</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>Système de confinement à  pression négative, y compris :
<ol>
<li>sous-systèmes connexes</li>
<li>indisponibilités</li>
<li>procédures d&#39;exploitation en  conditions normales et anormales</li>
</ol>
</li>
<li>Ordinateur de surveillance des  systèmes de sûreté de la tranche&nbsp;0</li>
<li>Système de ventilation d&#39;urgence  du bâtiment turbine</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Sûreté nucléaire</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 10 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Principes de sûreté nucléaire,  y compris&nbsp;:
<ol>
<li>considérations relatives à la  défense en profondeur</li>
<li>principes de contrôle, de  refroidissement et de confinement dans des conditions de fonctionnement  normales et anormales du réacteur</li>
<li>exigences relatives à l&#39;établissement  et au maintien de l&#39;état d&#39;arrêt garanti</li>
<li>rôles des systèmes spéciaux de  sûreté, des systèmes de soutien en matière de sûreté en attente et des systèmes  fonctionnels liés à la sûreté</li>
<li>moyens d&#39;obtenir et de  maintenir la fiabilité des systèmes et de l&#39;équipement</li>
<li>protection contre les  défaillances de cause commune</li>
<li>exigences relatives à la  disponibilité et aux essais des systèmes liés à la sûreté</li>
<li>raison d&#39;être, exigences  relatives à la disponibilité et incidence sur la sûreté des différentes  catégories d&#39;alimentation électrique</li>
<li>fondement d&#39;autorisation de la  centrale, analyses de sûreté et paramètres d&#39;exploitation sûre</li>
<li>permis d&#39;exploitation de la  centrale et Lignes de conduite pour l&#39;exploitation</li>
<li>contrôle de la configuration et  de l&#39;état de centrale</li>
</ol>
</li>
<li>Sources froides, y compris leur  utilisation dans des conditions d&#39;exploitation inhabituelles durant les arrêts  prolongés d&#39;un réacteur</li>
<li>Paramètres critiques de sûreté  et leurs paramètres de soutien</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Procédures d&#39;exploitation de la centrale et procédures d&#39;urgence intégrées</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 10 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Procédures manuelles en cas d&#39;incident  anormal</li>
<li>Interaction entre les systèmes  de la tranche 0 et ceux des réacteurs</li>
<li>Procédures d&#39;exploitation de  centrale intégrées, y compris :
<ol>
<li>exploitation en mode veilleuse</li>
<li>mise à l&#39;arrêt des quatre  réacteurs</li>
</ol>
</li>
<li>Procédures d&#39;exploitation en  conditions anormales, y compris :
<ol>
<li>rejet de production</li>
<li>réaction aux perturbations de  fréquence du réseau</li>
<li>réaction à la perte de réseau</li>
<li>restauration du poste de manœuvre  après rejet de production (le cas échéant)</li>
<li>perte totale de puissance de  250 V c.c. au poste de manœuvre (le cas échéant)</li>
<li>réaction à une fuite importante  d&#39;hydrogène ou à un bris d&#39;un joint d&#39;étanchéité de l&#39;alternateur principal</li>
<li>perte d&#39;air d&#39;instrumentation  courant</li>
</ol>
</li>
<li>Procédures d&#39;exploitation de la  tranche&nbsp;0 en cas d&#39;urgence, y compris&nbsp;:
<ol>
<li>raison d&#39;être de la procédure</li>
<li>conséquences de l&#39;événement sur  l&#39;exploitation</li>
<li>toute interaction entre la  tranche 0 et la tranche du réacteur, le cas échéant </li>
<li>fonctionnement de la zone de  contrôle secondaire, y compris les indisponibilités et leurs conséquences sur l&#39;efficacité  des systèmes</li>
<li>refroidissement d&#39;urgence du  combustible irradié</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Poste de manœuvre et distribution de l&#39;électricité</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 10 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Systèmes de sortie de puissance  principal, y compris :
<ol>
<li>conversion de la puissance  électrique</li>
<li>équipement électrique du poste  de manœuvre (aux centrales nucléaires concernées)</li>
<li>système d&#39;air comprimé du poste  de manœuvre (aux centrales nucléaires concernées)</li>
<li>protection des relais du  système de sortie (aux centrales nucléaires concernées)</li>
</ol>
</li>
<li>Distribution électrique de c.a.  (courant alternatif), y compris :
<ol>
<li>circuit de distribution de 13,8  kV</li>
<li>circuit de distribution de 4,16  kV</li>
<li>circuit de distribution de 600  V c.a. de catégories III et IV</li>
<li>circuit de catégorie II de 600  V c.a.</li>
<li>circuit de catégorie II de 120  V c.a.</li>
</ol>
</li>
<li>Distribution électrique de c.c.  (courant continu), y compris :
<ol>
<li>système de 250 V c.c.</li>
<li>système de 125 V c.c. (aux  centrales nucléaires concernées)</li>
<li>système de 48 V c.c.</li>
<li>système d&#39;alimentation des  instruments de 45 V c.c.</li>
</ol>
</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Alimentation électrique de secours</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 9 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système d&#39;alimentation  électrique de secours de catégorie III, y compris :
<ol>
<li>transferts de charges  automatiques et alimentation électrique de secours</li>
<li>génératrices de secours</li>
<li>indisponibilités et leurs  conséquences sur l&#39;efficacité des systèmes</li>
</ol>
</li>
<li>Système d&#39;alimentation  électrique de secours, y compris :
<ol>
<li>génératrices d&#39;urgence</li>
<li>indisponibilités et leurs  conséquences sur l&#39;efficacité des systèmes
</li>
</ol>
</li>
<li>Circuit d&#39;alimentation  électrique qualifié (aux centrales nucléaires concernées)</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes d&#39;eau, d&#39;air et de ventilation, et systèmes de protection contre les incendies</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 9 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système d&#39;appoint du condensat  (aux centrales nucléaires concernées)</li>
<li>Circuit de l&#39;eau de service commun  (aux centrales nucléaires concernées)</li>
<li>Circuit de l&#39;eau domestique, y  compris le circuit d&#39;eau domestique du site (aux centrales nucléaires  concernées)</li>
<li>Circuit d&#39;eau de secours (aux  centrales nucléaires concernées)</li>
<li>Gestion du D2O (aux  centrales nucléaires concernées), y compris&nbsp;:
<ol>
<li>systèmes de transfert et de  stockage du D2O</li>
<li>système de détection des fuites  d&#39;eau lourde</li>
</ol>
</li>
<li>Système de secours pour le  refroidissement des générateurs de vapeur (aux centrales nucléaires concernées)</li>
<li>Circuits d&#39;eau de service de  secours et auxiliaire (aux centrales nucléaires concernées)</li>
<li>Système de protection contre le  frasil</li>
<li>Point de contrôle de la décharge  d&#39;eau de circulation (aux centrales nucléaires concernées)</li>
<li>Système d&#39;élimination de la  moule zébrée par le chlore</li>
<li>Système d&#39;air de service</li>
<li>Système d&#39;air d&#39;instrumentation</li>
<li>Système d&#39;air respirable</li>
<li>Systèmes de chauffage et de  ventilation</li>
<li>Systèmes de climatisation</li>
<li>Système de ventilation d&#39;urgence  du bâtiment turbine</li>
<li>Systèmes de récupération de la vapeur</li>
<li>Système d&#39;alimentation en eau  pour la protection contre les incendies</li>
<li>Système d&#39;alimentation en eau  pour la protection contre les incendies du site (aux centrales nucléaires  concernées)</li>
<li>Système d&#39;extincteurs  automatiques et de gicleurs déluge du transformateur (aux centrales nucléaires  concernées)</li>
<li>Système de protection contre  les incendies à base de mousse</li>
<li>Système de détection de la  fumée</li>
<li>Système de protection contre  les incendies au CO2</li>
</ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Systèmes de radioprotection et urgences radiologiques</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 9 ± 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Système de contrôle de l&#39;accès</li>
<li>Sas et chambres de transfert du  combustible</li>
<li>Système de surveillance gamma à  zone fixe</li>
<li>Notions fondamentales liées au  contrôle des rejets de radioactivité dans l&#39;environnement, y compris&nbsp;:
<ol>
<li>limites opérationnelles  dérivées et limites de dose connexes pour la centrale</li>
<li>groupe critique</li>
<li>objectifs de la centrale en  matière d&#39;émissions</li>
<li>surveillance des contrôles</li>
<li>surveillance en vue d&#39;assurer  la conformité</li>
</ol>
</li>
<li>Système de surveillance des  cheminées, y compris&nbsp;:
<ol>
<li>sources et catégories d&#39;émissions  en suspension dans l&#39;air</li>
<li>trajectoires des émissions en  suspension dans l&#39;air</li>
</ol>
</li>
<li>Circuit des déchets liquides  radioactifs, y compris&nbsp;:
<ol>
<li>manutention des déchets  liquides radioactifs</li>
<li>traitement des déchets liquides  radioactifs</li>
<li>systèmes de surveillance des  effluents liquides</li>
</ol>
</li>
<li>Système de gestion des  effluents gazeux</li>
<li>Programme de surveillance  environnementale</li>
<li>Système de décharge d&#39;air  filtré d&#39;urgence</li>
<li>Système de surveillance du  rayonnement après un accident</li>
<li>Risques potentiels d&#39;irradiation  liés aux systèmes exploités par l&#39;opérateur de la tranche&nbsp;0</li>
<li>Risques potentiels d&#39;irradiation  en cas d&#39;accident de perte de réfrigérant primaire accompagné de combustible défectueux</li>
<li>Responsabilités de l&#39;opérateur  de la tranche&nbsp;0 en conditions radiologiques inhabituelles</li>
</ol>
<p>Se reporter à l&#39;annexe&nbsp;D.5  pour la répartition des points dans le groupe.</p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Groupe 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Responsabilités de l&#39;opérateur de la tranche 0</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Points : 6 ± 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Responsabilités et pouvoirs de  l&#39;opérateur de la tranche&nbsp;0, y compris&nbsp;:
<ol>
<li>protection des travaux  effectués sur les systèmes de la tranche&nbsp;0</li>
<li>sécurité du personnel</li>
<li>communications avec les groupes  externes, par ex. les opérateurs du réseau électrique</li>
<li>culture de sûreté du titulaire  de permis</li>
</ol>
</li>
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
<div id="B.6"></div>
<h3 id="app-b-6">B.6 Groupes de connaissances à traiter dans les examens propres à la centrale des candidats OT0</h3>
<p>Les membres de  l&#39;équipe d&#39;examen doivent utiliser les groupes de connaissances et les points  présentés dans le tableau qui suit afin de s&#39;assurer que l&#39;échantillonnage de  groupes de sujets choisis dans l&#39;annexe B.5  couvre adéquatement les différents domaines de connaissances visés par les  objectifs de l&#39;ASF de la centrale à l&#39;intention des candidats&nbsp;OT0. </p>
<p>Les objectifs de  connaissance ou objectifs de formation sont propres à chaque centrale et sont  élaborés conformément à une ASF. Les centrales à plusieurs tranches présentant  des OT0 utilisent le document intitulé Objectifs génériques de connaissance des  systèmes d&#39;une centrale nucléaire pour opérateurs de salle de commande (consulter  la section «&nbsp;Références&nbsp;») pour l&#39;élaboration des objectifs de  connaissance propres à leur centrale (consulter l&#39;annexe&nbsp;D.4 pour les  objectifs correspondants). Les centrales qui utilisent un ensemble différent d&#39;OGCS  pour les OT0 peuvent se reporter aux objectifs génériques correspondants dans  leur ensemble, une fois que les objectifs spécifiques de connaissance propres à  la centrale ont été élaborés à partir de ces objectifs génériques, conformément  à une approche systématique à la formation, et qu&#39;ils ont été acceptés par la  CCSN.</p>
<table>
<tr>
<th>Groupe</th>
<th>Domaine de connaissances</th>
<th>75 points</th>
</tr>
<tr>
<td>A</td>
<td>Conception des systèmes </td>
<td>10 ± 2</td>
</tr>
<tr>
<td>B</td>
<td>Instrumentation et contrôle </td>
<td>7 ± 2</td>
</tr>
<tr>
<td>C</td>
<td>Fonctionnement des boucles de
régulation et des circuits logiques de commande </td>
<td>10 ± 2</td>
</tr>
<tr>
<td>D</td>
<td>Surveillance des paramètres des
circuits, procédures d&#39;exploitation et procédures d&#39;essai, à l&#39;exclusion des
procédures d&#39;urgence </td>
<td>10 ± 2</td>
</tr>
<tr>
<td>E</td>
<td>Lignes de conduite pour l&#39;exploitation
et limites et contraintes des systèmes </td>
<td>8 ± 2</td>
</tr>
<tr>
<td>F</td>
<td>Indisponibilités des systèmes et
sources froides </td>
<td>7 ± 2</td>
</tr>
<tr>
<td>G</td>
<td>Exploitation en cas d&#39;urgence </td>
<td>7 ± 2</td>
</tr>
<tr>
<td>H</td>
<td>Principes de la sûreté nucléaire et
leur application; refroidissement d&#39;urgence du combustible irradié</td>
<td>6 ± 1</td>
</tr>
<tr>
<td>I</td>
<td>Aspects administratifs, tels que les
procédures administratives liées à l&#39;exploitation et à l&#39;entretien de la
centrale, la sécurité au travail, les rôles et les responsabilités du
personnel exploitant</td>
<td>6 ± 1</td>
</tr>
<tr>
<td>J</td>
<td>Les sujets relatifs à la
radioprotection liés aux incidents radiologiques et aux urgences mettant en
cause le rayonnement sont spécifiés à l&#39;annexe&nbsp;D.5.</td>
<td>4 ± 1</td>
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
<div id="B.7"></div>
<h3 id="app-b-7">B.7 Groupes de sujets à traiter dans les examens supplémentaires propres à la centrale pour les candidats CQC et CQSC</h3>
<p>Les groupes de sujets  exigés pour les candidats CQC et CQSC se fondent sur les programmes de  formation élaborés conformément aux principes d&#39;une ASF, et qui traitent des  connaissances supplémentaires propres à la centrale que les CQSC et CQC doivent  posséder, en plus de celles d&#39;un OR, au sujet du fonctionnement intégré des  systèmes de la centrale.</p>
<p>Les divers sujets qui  doivent faire l&#39;objet de questions lors des examens spécifiques supplémentaires  ont été groupés de la façon présentée ci-dessous afin que chaque examen traite  d&#39;un éventail approprié de sujets dans le but de traiter tous les sujets que  les CQC et CQSC d&#39;une centrale donnée doivent connaître en plus de ceux que  doit connaître un OR. Tous les sujets sélectionnés dans un groupe de sujets  doivent être liés à des objectifs de connaissance spécifiques conformément aux  indications de la sous-section&nbsp;9.3 et être mis à la disposition de la  CCSN, sur demande.</p>
<p>Les points à allouer  aux questions appartenant aux différents groupes de sujets sont indiqués à côté  de chaque groupe.</p>
<table className="mrgn-bttm-lg">
<tr>
<th>Groupe</th>
<th>Sujets applicables à toutes les
centrales</th>
<th>Points</th>
</tr>
<tr>
<td className="text-center">1</td>
<td>Analyse des accidents
<ol>
<li>Hypothèses des analyses d&#39;accidents</li>
<li>Réaction des systèmes de la
centrale lors d&#39;accidents</li>
<li>Refroidissement du
combustible et sources froides lors d&#39;accidents</li>
<li>Défaillances de combustible
lors d&#39;accidents</li>
<li>Conséquence d&#39;indisponibilités
des systèmes liés à la sûreté lors d&#39;accidents</li>
<li>Fondements techniques des
procédures d&#39;exploitation d&#39;urgence et des procédures manuelles en cas d&#39;incident
anormal</li>
</ol></td>
<td>10 ± 3</td>
</tr>
<tr>
<td className="text-center">2</td>
<td>Exploitation en cas d&#39;urgence
<ol className="list-lower-alpha">
<li>Situations d&#39;urgence de
nature radiologique, y compris&nbsp;:
<ol className="list-lower-roman">
<li>classification des événements
et des catégories d&#39;urgences</li>
<li>procédures d&#39;intervention en
cas d&#39;urgence radiologique</li>
<li>responsabilités des
personnes, des équipes et des groupes</li>
<li>évaluation de la situation</li>
<li>mesures de protection dans la
centrale et hors du site</li>
<li>responsabilités des
organisations de l&#39;extérieur</li>
<li>plan consolidé d&#39;intervention
en cas d&#39;urgence nucléaire</li>
<li>situations d&#39;urgence liées au
transport (aux centrales nucléaires concernées)</li>
</ol>
</li>
<li>Situations d&#39;urgence
classiques, y compris&nbsp;:
<ol className="list-lower-roman">
<li>procédures d&#39;intervention en
cas d&#39;urgences classiques</li>
<li>responsabilités des
personnes, des équipes et des groupes</li>
<li>évaluation de la situation</li>
<li>mesures de protection</li>
<li>responsabilités des
organisations de l&#39;extérieur</li>
</ol>
</li>
<li>Fonctionnement des zones de
commande secondaires, y compris&nbsp;:
<ol className="list-lower-roman">
<li>objectif premier des zones de
commande secondaires</li>
<li>situations susceptible d&#39;exiger
leur utilisation</li>
<li>capacités de commande et de
surveillance disponibles dans les zones de commande secondaires</li>
</ol>
</li>
</ol></td>
<td className="text-center">6 ± 2</td>
</tr>
<tr>
<td className="text-center">3</td>
<td><strong>Permis d&#39;exploitation, lois et
règlements</strong>
<ol className="list-lower-alpha">
<li>Exigences stipulées dans le
permis d&#39;exploitation de la centrale et dans les LCE, raisons d&#39;être de ces
exigences, moyens pris pour en assurer le respect et conséquences possibles d&#39;exploiter
la centrale en ne s&#39;y conformant pas</li>
<li>Situations durant l&#39;exploitation
et l&#39;entretien de la centrale qui pourraient donner lieu à des infractions
aux conditions de permis </li>
<li>Exigences touchant l&#39;exploitation
et l&#39;entretien de la centrale dans les lois et les règlements fédéraux et
provinciaux, y compris celles stipulées dans les normes et les codes
connexes, et raison d&#39;être de ces exigences</li>
</ol></td>
<td className="text-center">7 ± 3</td>
</tr>
<tr>
<td className="text-center">4</td>
<td><strong>Aspects techniques </strong>
<ol className="list-lower-alpha">
<li>Protection contre les
surpuissances neutroniques (SPN), y compris&nbsp;:
<ol className="list-lower-roman">
<li>configuration des mécanismes
de contrôle de la réactivité analysés et formes du flux</li>
<li>puissance de référence,
puissance réelle et puissance de canal critique</li>
<li>facteur de surpuissance de
canal </li>
<li>normalisation des détecteurs SPN</li>
<li>réduction des valeurs seuil de
la SPN pour des conditions d&#39;exploitation  anormales</li>
</ol>
</li>
<li>Régulation du réacteur
<ol className="list-lower-roman">
<li>normalisation des détecteurs
du système de régulation </li>
<li>normalisation des puissances
thermiques zonales</li>
</ol>
</li>
<li>Redémarrage du réacteur après
des arrêts de courte et de longue durée</li>
<li>Exploitation avec un excédent
de réactivité important ou faible</li>
<li>Calculs de bilan thermique de
la tranche</li>
<li>Raisons d&#39;être des exigences
de conception des systèmes</li>
<li>Contraintes et limites de
fonctionnement des systèmes, raisons d&#39;être de ces contraintes et limites et
moyens pris pour en assurer le respect</li>
<li>Détermination des contraintes
et des limites de fonctionnement des systèmes à partir des analyses de sûreté
de la centrale</li>
<li>Contrôle chimique dans les
systèmes durant le fonctionnement et l&#39;entretien, y compris&nbsp;:
<ol className="list-lower-roman">
<li>paramètres et produits
contrôlés</li>
<li>produits chimiques, méthodes
et équipement utilisés pour le contrôle</li>
<li>conséquences d&#39;un contrôle
inadéquat</li>
<li>comment et pourquoi chaque
paramètre ou produit varie en fonction des changements spécifiques dans le
système ou des conditions du réacteur</li>
<li>mesures spécifiques
permettant de réduire ou de contrôler chaque paramètre ou produit</li>
</ol>
</li>
<li>Classification des indisponibilités
des systèmes et stratégies d&#39;exploitation correspondantes; conséquences de
ces indisponibilités sur le système et sur le fonctionnement de la tranche</li>
<li>Configuration des systèmes et
isolations d&#39;équipement requises pour effectuer des travaux d&#39;entretien
donnés sur un système</li>
</ol></td>
<td className="text-center">8 ± 2</td>
</tr>
<tr>
<td className="text-center">5</td>
<td><strong>Systèmes de manutention et de
stockage du combustible </strong>
<ol className="list-lower-alpha">
<li>Responsabilités et pouvoirs
des CQC et des CQSC, y compris&nbsp;:
<ol className="list-lower-roman">
<li>état de la tranche requis
pour autoriser le chargement ordinaire de combustible dans le réacteur</li>
<li>autoriser les activités de
chargement du combustible qui dévient des procédures approuvées </li>
<li>procédures de manutention du
combustible en cas d&#39;urgence</li>
<li>systèmes de refroidissement
et de purification de la piscine de stockage du combustible irradié</li>
<li>garanties internationales</li>
<li>configuration de l&#39;équipement
et des systèmes et procédures à suivre pour d&#39;autres utilisations des
machines de chargement de combustible, comme l&#39;inspection des tubes de force,
travaux d&#39;entretien des faces du réacteur et vérifications d&#39;écoulement des
canaux de combustible</li>
</ol>
</li>
</ol></td>
<td className="text-center">7 ± 3</td>
</tr>
<tr>
<td className="text-center">6</td>
<td><strong>Sécurité radiologique et
industrielle</strong>
<ol className="list-lower-alpha">
<li>Sécurité radiologique
<ol className="list-lower-roman">
<li>travaux à risques élevés de
rayonnement</li>
<li>sécurité radiologique du
personnel de la centrale</li>
<li>conditions radiologiques
anormales de la centrale</li>
<li>rejets radioactifs liquides</li>
<li>politiques et principes de
radioprotection et exigences en matière de radioprotection – installations
nucléaires</li>
<li>expédition de produits
radioactifs</li>
<li>responsabilités et pouvoirs
du CQC ou du CQSC et des personnes qui relèvent du CQC ou du CQSC en ce qui a
trait à la sécurité radiologique du personnel de centrale</li>
</ol>
</li>
<li>Sécurité industrielle
<ol className="list-lower-roman">
<li>politiques et programmes en
matière de santé et sécurité
<li>programme de sécurité
industrielle</li>
<li>procédures en matière de
sécurité au travail</li>
<li>dangers industriels en
centrale</li>
<li>responsabilités et pouvoirs
du CQC ou du CQSC et des personnes qui relèvent du CQC ou du CQSC en ce qui a
trait à la sécurité industrielle du personnel de la centrale</li>
</ol>
</li>
</ol></td>
<td className="text-center">6 ± 2</td>
</tr>
<tr>
<td className="text-center">7</td>
<td><strong>Administration</strong>
<ol className="list-lower-alpha">
<li>Mise en œuvre de modifications
permanentes</li>
<li>Mise en œuvre de modifications
temporaires</li>
<li>Gestion de la configuration
des systèmes</li>
<li>Modification des procédures d&#39;exploitation</li>
<li>Changements aux valeurs de
consigne</li>
<li>Exigences relatives aux
essais d&#39;équipement</li>
<li>Exigences de déclaration</li>
<li>Procédures de contrôle des
travaux</li>
<li>Sécurité du site et garanties </li>
<li>Surveillance et protection de
l&#39;environnement</li>
<li>Responsabilités et autorité
du CQC ou du CQSC et d&#39;autres membres du personnel de centrale qui relèvent
du CQC ou du CQSC ou travaillent de concert avec le CQC ou le CQSC</li>
<li>Qualifications exigées du
personnel de la centrale qui relève du CQC ou du CQSC</li>
</ol></td>
<td className="text-center">6 ± 2</td>
</tr>
<tr>
<td className="text-center">Tous les groupes</td>
<td>&nbsp;</td>
<td className="text-center">50</td>
</tr>
</table>
<table className="mrgn-bttm-lg">
<tr>
<th>Groupe</th>
<th>Systèmes de la tranche 0 aux
centrales nucléaires concernées</th>
<th>Points</th>
</tr>
<tr>
<td className="text-center">8</td>
<td><strong>Systèmes spéciaux de sûreté, systèmes
de soutien en matière de sûreté et procédures d&#39;urgence </strong>
<ol className="list-lower-alpha">
<li>Système de refroidissement d&#39;urgence
du cœur par injection et sous-systèmes connexes </li>
<li>Système de confinement à
pression négative et sous-systèmes connexes</li>
<li>Système d&#39;alimentation d&#39;urgence
en eau</li>
<li>Système d&#39;alimentation
électrique d&#39;urgence</li>
<li>Système de ventilation d&#39;urgence
du bâtiment turbine</li>
<li>Ordinateur de surveillance
des systèmes de sûreté</li>
<li>Procédures manuelles et
procédures d&#39;exploitation d&#39;urgence en cas d&#39;incident anormal à la tranche 0 </li>
</ol></td>
<td className="text-center">8 ± 3</td>
</tr>
<tr>
<td className="text-center">9</td>
<td><strong>Systèmes électriques </strong>
<ol className="list-lower-alpha">
<li>Distribution et équipement
électrique en c.c. et en c.a. de la centrale, y compris :
<ol className="list-lower-roman">
<li>protection électrique</li>
<li>mécanismes de transfert d&#39;urgence</li>
<li>génératrices et auxiliaires
de secours</li>
</ol>
</li>
<li>Système principal d&#39;alimentation
électrique</li>
<li>Équipement électrique du
poste de manœuvre et système de distribution</li>
<li>Système d&#39;air comprimé du
poste de manœuvre</li>
</ol></td>
<td className="text-center">6 ± 2</td>
</tr>
<tr>
<td className="text-center">10</td>
<td><strong>Autres
systèmes </strong>
<ol className="list-lower-alpha">
<li>Eau de service commune</li>
<li>Surveillance environnementale
(eau de circulation du condenseur)</li>
<li>Usine de traitement d&#39;eau</li>
<li>Circuit d&#39;appoint du
condensat</li>
<li>Système de protection contre
les incendies</li>
<li>Circuits d&#39;air comprimé</li>
<li>Systèmes de ventilation</li>
<li>Gestion du D2O
<ol className="list-lower-roman">
<li>installations de
reconcentration d&#39;eau lourde (aux centrales nucléaires concernées)</li>
<li>nettoyage des résines
échangeuses d&#39;ions (aux centrales nucléaires concernées)</li>
</ol>
</li>
<li>Système de contrôle de l&#39;accès</li>
<li>Système de gestion des
effluents gazeux</li>
<li>Systèmes de gestion des
déchets liquides radioactifs</li>
<li>Systèmes de surveillance du
rayonnement</li>
<li>Systèmes de refroidissement
et de purification de la piscine de stockage du combustible irradié</li>
<li>Ordinateurs de commande de la
tranche&nbsp;0</li>
</ol></td>
<td className="text-center">6 ± 2</td>
</tr>
<tr>
<td className="text-center">Groupes de la tranche 0</td>
<td>&nbsp;</td>
<td className="text-center">20</td>
</tr>
</table>
<table className="mrgn-bttm-lg">
<tr>
<th>Groupe</th>
<th>Installation d&#39;extraction du tritium aux centrales à plusieurs
tranches concernées</th>
<th>Points</th>
</tr>
<tr>
<td className="text-center">11</td>
<td><ol className="list-lower-alpha">
<li>Responsabilités et pouvoirs
du CQC et du CQSC, y compris&nbsp;:
<ol className="list-lower-roman">
<li>risques radiologiques</li>
<li>dangers classiques, y
compris&nbsp;:
<ul>
<li>incendie ou explosion d&#39;isotopes
d&#39;hydrogène</li>
<li>risques thermiques</li>
<li>risques liés aux asphyxiants</li>
<li>risques d&#39;origine électrique</li>
</ul>
</li>
</ol>
</li>
<li>Exigences relatives au
déclenchement du système d&#39;arrêt d&#39;urgence</li>
<li>Mesures à prendre en cas de
rejet d&#39;hydrogène ou de substances nucléaires radioactives</li>
<li>Se reporter aux objectifs de
connaissance relatifs à l&#39;installation d&#39;extraction du tritium, destinés aux
CQSC</li>
</ol></td>
<td className="text-center">10</td>
</tr>
<tr>
<td className="text-center">Tous les groupes</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table>
<table className="mrgn-bttm-lg">
<tr>
<th>Groupe</th>
<th>Gestion
des accidents graves (GAG) et lignes directrices pour la gestion des
accidents graves (LDGAG) (toutes les centrales)</th>
<th>Points</th>
</tr>
<tr>
<td className="text-center">12</td>
<td><ol className="list-lower-alpha">
<li>Responsabilités et pouvoirs
du CQC et du CQSC, y compris&nbsp;:
<ol className="list-lower-roman">
<li>caractéristiques des
accidents graves</li>
<li>scénarios liés à la
progression d&#39;accidents susceptibles de déclencher le programme de GAG</li>
<li>critères utilisés pour
indiquer l&#39;apparition et l&#39;existence de dommages graves au cœur</li>
<li>LDGAG de la centrale, y
compris&nbsp;:
<ul>
<li>objectifs procéduraux</li>
<li>principaux instruments
utilisés pour évaluer l&#39;état du cœur du réacteur</li>
<li>usage innovant d&#39;équipements
de la centrale permettant d&#39;atténuer les conditions de GAG
</li>
</ul>
</li>
</ol>
</li>
<ol className="list-lower-roman" start="5">
<li>rôles et responsabilités des
autres personnes accréditées et du personnel de quart à l&#39;égard de la mise en
œuvre des LDGAG</li>
</ol>
</ol></td>
<td className="text-center">10 ± 2</td>
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
<div id="B.8"></div>
<h3 id="app-b-8">B.8	Exemple de matrice de conception d&#39;examen </h3>
<table>
<caption>
Matrice de conception d&#39;examen propre à la centrale pour
les opérateurs de la salle de commande de la tranche 0
</caption>
<tr>
<th colSpan="2" rowspan="4">Groupes de sujet</th>
<th colSpan="20">Domaines de connaissances</th>
<td></td>
<td></td>
</tr>
<tr>
<th colSpan="2">Groupe A</th>
<th colSpan="2">Groupe B</th>
<th colSpan="2">Groupe C</th>
<th colSpan="2">Groupe D</th>
<th colSpan="2">Groupe E</th>
<th colSpan="2">Groupe F</th>
<th colSpan="2">Groupe G</th>
<th colSpan="2">Groupe H</th>
<th colSpan="2">Groupe I</th>
<th colSpan="2">Groupe J</th>
<td></td>
<td></td>
</tr>
<tr>
<th colSpan="2">Conception des systèmes</th>
<th colSpan="2">Instrum. et contrôle</th>
<th colSpan="2">Fonc. des boucles de régulation et des circuits
logique de commande</th>
<th colSpan="2">Surveil. des param. des circuits, procéd.
d&#39;exploitation et procéd. d&#39;essai</th>
<th colSpan="2">LCE, limites et contraintes des systèmes</th>
<th colSpan="2">Indisponibilités des systèmes et sources froides</th>
<th colSpan="2">Exploitation en cas d&#39;urgence</th>
<th colSpan="2">Principes de sûreté nucl., refroidiss. d&#39;urgence
du combustible irradié</th>
<th colSpan="2">Aspects
administratifs</th>
<th colSpan="2">Radio-protection</th>
<td></td>
<td></td>
</tr>
<tr>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>No de question   </td>
<td>Points</td>
<td>Points totaux</td>
<td>Plage de points</td>
</tr>
<tr>
<td>1</td>
<td>Systèmes
spéciaux de sûreté</td>
<td>5.c,d, f</td>
<td>5</td>
<td>5.e</td>
<td>5</td>
<td>5.b</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>5.a</td>
<td>1</td>
<td></td>
<td>&nbsp;</td>
<td></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>12</td>
<td>12 ± 3</td>
</tr>
<tr>
<td>2</td>
<td>Sûreté
nucléaire</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>2.a</td>
<td>3</td>
<td>2.b</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>2.c</td>
<td>2</td>
<td>2.d</td>
<td>5</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>11</td>
<td>10 ± 2</td>
</tr>
<tr>
<td>3</td>
<td>Procéd.
d&#39;exploit. et d&#39;urgence intégrées de la centrale </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>4.c</td>
<td>2</td>
<td>4.b</td>
<td>4</td>
<td>4.d</td>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>4.a</td>
<td>2</td>
<td>9</td>
<td>10 ± 2</td>
</tr>
<tr>
<td>4</td>
<td>Poste
de manoeuvre et dist. électrique</td>
<td>8. a, b </td>
<td>6</td>
<td>9.c</td>
<td>2</td>
<td>9.b</td>
<td>1</td>
<td>9.a</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>10</td>
<td>9 ± 2</td>
</tr>
<tr>
<td>5</td>
<td>Alimentation
électrique d&#39;urgence</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6.a</td>
<td>8</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6.b</td>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>9</td>
<td>9 ± 2</td>
</tr>
<tr>
<td>6</td>
<td>Sys.
d&#39;eau, d&#39;air et de ventilation et sys. de protection contre l&#39;incendie</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.a</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.b, c</td>
<td>3</td>
<td>7.e</td>
<td>3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.d</td>
<td>2</td>
<td>8</td>
<td>9 ± 2</td>
</tr>
<tr>
<td>7</td>
<td>Radioprotection
et urgences radiologiques</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>3.b</td>
<td>4</td>
<td>3.a</td>
<td>3</td>
<td>3.c</td>
<td>3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>10</td>
<td>9 ± 2</td>
</tr>
<tr>
<td>8</td>
<td>Responsabilités
de l&#39;opérateur T0</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>1.a, b</td>
<td>6</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6</td>
<td>6 ± 1</td>
</tr>
<tr>
<th colSpan="3">Pointage total</th>
<td>11</td>
<td>&nbsp;</td>
<td>7</td>
<td>&nbsp;</td>
<td>11</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>7</td>
<td>&nbsp;</td>
<td>6</td>
<td>&nbsp;</td>
<td>4</td>
<td></td>
<td></td>
</tr>
<tr>
<th colSpan="3">Plage de points </th>
<td>10 ± 2</td>
<td>&nbsp;</td>
<td>7 ± 2</td>
<td>&nbsp;</td>
<td>10 ± 2</td>
<td>&nbsp;</td>
<td>10 ± 2</td>
<td>&nbsp;</td>
<td>8 ± 2</td>
<td>&nbsp;</td>
<td>7 ± 2</td>
<td>&nbsp;</td>
<td>7 ± 2</td>
<td>&nbsp;</td>
<td>6 ± 1</td>
<td>&nbsp;</td>
<td>6 ± 1</td>
<td>&nbsp;</td>
<td>4 ± 1</td>
<td></td>
<td></td>
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
<div id="B.9"></div>
<h3 id="app-b-9">B.9 Page couverture de l&#39;examen portant sur les connaissances </h3>
<h4>Examen d&#39;accréditation  initiale portant sur les connaissances</h4>
<p>[Titre de l&#39;examen]<br />
[Centrale]<br />
[Poste]<br />
[Date de tenue de l&#39;examen]</p>
<p>Total&nbsp;: [nombre  de] points<br />
Temps alloué&nbsp;:  [nombre d&#39;] heures<br />
Durée prévue&nbsp;:  [nombre d&#39;] heures</p>
<p><strong>Préparé par&nbsp;:  </strong></p>
<p>_____________________________                          <br />
[Nom en lettres moulées  et signature]                                                <br />
Examinateur en chef</p>
<p>________________<br />
Date</p>
<p><strong>Équipe d&#39;examen&nbsp;: </strong>    </p>
<p> ______________________________            ______________________________<br />
</p>
<p>______________________________            ______________________________<br />
[Noms en  lettres moulées]</p>
<p><strong>Approuvé par&nbsp;:</strong></p>
<p> _____________________________              <br />
[Nom en  lettres moulées et signature]                        <br />
Chef de la  formation</p>
<p>________________<br />
Date</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.10"></div>
<h3 id="app-b-10">B.10	Exemples de questions d&#39;examen portant sur les connaissances</h3>
<p>Les exemples de  questions d&#39;examen qui suivent présentent le type de renseignements exigés pour  chaque question.</p>
<p>Remarque : Le nombre  total de points attribué à une question correspond à la somme des éléments. Les  principales instructions liées à chaque question sont en caractères gras et  soulignées. </p>
<table>
<tr>
<td><strong>[X] pointage
total</strong></td>
<td>1.</td>
<td colSpan="3">Les pages 15 à 43 de
la procédure du manuel d&#39;exploitation sont indiquées à titre de référence :<br />
M.E. 1-09110-4.1        Pompe du modérateur et approche à l&#39;état
critique alors que l&#39;instrumentation de démarrage n&#39;est pas en service. </td>
</tr>
<tr>
<td><strong>&nbsp;</strong></td>
<td>&nbsp;</td>
<td>a.</td>
<td>&nbsp;</td>
<td>Voir l&#39;encadré 1.1
de la section 4.1.1, page 18. <br />
<strong>Expliquer</strong> pourquoi il est nécessaire de s&#39;assurer que chacune des conditions préalables
suivantes a été satisfaite&nbsp;:</td>
</tr>
<tr>
<td>[X] éléments </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>i)</td>
<td>s&#39;assurer que le
circuit d&#39;épuration du modérateur est vidé </td>
</tr>
<tr>
<td>[X] éléments </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>ii)</td>
<td>s&#39;assurer que le circuit
caloporteur et le circuit du modérateur respectent les spécifications
suivantes pour ce qui est de la teneur isotopique&nbsp;:
<ul>
<li>Teneur
isotopique du D20 du circuit caloporteur &gt; 97,5&nbsp;% en poids
du D20</li>
<li>Teneur
isotopique du modérateur (D20) &gt;&nbsp;99,8&nbsp;% en poids du D20</li>
<li>Teneur isotopique du
modérateur (D20) 0,5&nbsp;% au-dessus de la teneur isotopique dans
le circuit caloporteur </li>
</ul></td>
</tr>
<tr>
<td>[X] éléments</td>
<td>&nbsp;</td>
<td>b.</td>
<td>i)</td>
<td>Voir l&#39;encadré
2.3.1, étape 2 et la barre latérale adjacente à la page&nbsp;29.<br />
<strong>Expliquer</strong> pourquoi la
puissance indiquée diminue au départ puis augmente par la suite à mesure que
le niveau du modérateur augmente. </td>
</tr>
<tr>
<td>[X] éléments</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>ii)</td>
<td>Voir le troisième
encadré à côté de l&#39;étape 2.4.1 à la page&nbsp;35.<br />
<strong>Expliquer</strong> pourquoi «&nbsp;il
est plus important que le niveau de zone moyen (NZM) soit uniforme pour
chaque lecture plutôt que d&#39;être de 35&nbsp;% exactement&nbsp;».</td>
</tr>
<tr>
<td>[X] éléments </td>
<td>&nbsp;</td>
<td>c.</td>
<td>&nbsp;</td>
<td>Le tableur des
données recueillies pendant une approche à l&#39;état critique avec enlèvement du
bore est fourni afin que vous puissiez le consulter.<br />
En se reportant à la
colonne «&nbsp;% de puissance RX final », <u>indiquer</u> le niveau
de puissance auquel le réacteur est considéré comme étant critique. <br />
De plus, <strong>expliquer</strong> pourquoi
le réacteur est considéré comme étant critique à ce niveau.</td>
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
<div id="B.11"></div>
<h3 id="app-b-11">B.11	Points attribués et temps alloué pour répondre aux questions en fonction du nombre d&#39;éléments de réponse </h3>
<table className="width-100">
<tr>
<th colSpan="3">Examens généraux</th>
<th>&nbsp;</th>
<th colSpan="3">Examens propres à la centrale</th>
</tr>
<tr>
<th>Éléments</th>
<th>Points</th>
<th>Minutes</th>
<th>&nbsp;</th>
<th>Éléments</th>
<th>Points</th>
<th>Minutes</th>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
<td>&nbsp;</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>1</td>
<td>&nbsp;</td>
<td>2</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>2</td>
<td>&nbsp;</td>
<td>3</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>3</td>
<td>&nbsp;</td>
<td>4</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>4</td>
<td>&nbsp;</td>
<td>5</td>
<td>2</td>
<td>4</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>4</td>
<td>&nbsp;</td>
<td>6</td>
<td>2</td>
<td>5</td>
</tr>
<tr>
<td>7</td>
<td>3</td>
<td>5</td>
<td>&nbsp;</td>
<td>7</td>
<td>2</td>
<td>6</td>
</tr>
<tr>
<td>8</td>
<td>3</td>
<td>6</td>
<td>&nbsp;</td>
<td>8</td>
<td>3</td>
<td>6</td>
</tr>
<tr>
<td>9</td>
<td>4</td>
<td>6</td>
<td>&nbsp;</td>
<td>9</td>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>10</td>
<td>4</td>
<td>7</td>
<td>&nbsp;</td>
<td>10</td>
<td>3</td>
<td>8</td>
</tr>
<tr>
<td>11</td>
<td>4</td>
<td>8</td>
<td>&nbsp;</td>
<td>11</td>
<td>4</td>
<td>9</td>
</tr>
<tr>
<td>12</td>
<td>5</td>
<td>9</td>
<td>&nbsp;</td>
<td>12</td>
<td>4</td>
<td>10</td>
</tr>
<tr>
<td>13</td>
<td>5</td>
<td>9</td>
<td>&nbsp;</td>
<td>13</td>
<td>4</td>
<td>10</td>
</tr>
<tr>
<td>14</td>
<td>6</td>
<td>10</td>
<td>&nbsp;</td>
<td>14</td>
<td>5</td>
<td>11</td>
</tr>
<tr>
<td>15</td>
<td>6</td>
<td>11</td>
<td>&nbsp;</td>
<td>15</td>
<td>5</td>
<td>12</td>
</tr>
<tr>
<td>16</td>
<td>6</td>
<td>12</td>
<td>&nbsp;</td>
<td>16</td>
<td>5</td>
<td>13</td>
</tr>
<tr>
<td>17</td>
<td>7</td>
<td>12</td>
<td>&nbsp;</td>
<td>17</td>
<td>6</td>
<td>14</td>
</tr>
<tr>
<td>18</td>
<td>7</td>
<td>13</td>
<td>&nbsp;</td>
<td>18</td>
<td>6</td>
<td>14</td>
</tr>
<tr>
<td>19</td>
<td>8</td>
<td>14</td>
<td>&nbsp;</td>
<td>19</td>
<td>6</td>
<td>15</td>
</tr>
<tr>
<td>20</td>
<td>8</td>
<td>14</td>
<td>&nbsp;</td>
<td>20</td>
<td>7</td>
<td>16</td>
</tr>
<tr>
<td>21</td>
<td>8</td>
<td>15</td>
<td>&nbsp;</td>
<td>21</td>
<td>7</td>
<td>17</td>
</tr>
<tr>
<td>22</td>
<td>9</td>
<td>16</td>
<td>&nbsp;</td>
<td>22</td>
<td>7</td>
<td>18</td>
</tr>
<tr>
<td>23</td>
<td>9</td>
<td>17</td>
<td>&nbsp;</td>
<td>23</td>
<td>8</td>
<td>18</td>
</tr>
<tr>
<td>24</td>
<td>10</td>
<td>17</td>
<td>&nbsp;</td>
<td>24</td>
<td>8</td>
<td>19</td>
</tr>
<tr>
<td>25</td>
<td>10</td>
<td>18</td>
<td>&nbsp;</td>
<td>25</td>
<td>8</td>
<td>20</td>
</tr>
<tr>
<td>26</td>
<td>10</td>
<td>19</td>
<td>&nbsp;</td>
<td>26</td>
<td>9</td>
<td>21</td>
</tr>
<tr>
<td>27</td>
<td>11</td>
<td>19</td>
<td>&nbsp;</td>
<td>27</td>
<td>9</td>
<td>22</td>
</tr>
<tr>
<td>28</td>
<td>11</td>
<td>20</td>
<td>&nbsp;</td>
<td>28</td>
<td>9</td>
<td>22</td>
</tr>
<tr>
<td>29</td>
<td>12</td>
<td>21</td>
<td>&nbsp;</td>
<td>29</td>
<td>10</td>
<td>23</td>
</tr>
<tr>
<td>30</td>
<td>12</td>
<td>22</td>
<td>&nbsp;</td>
<td>30</td>
<td>10</td>
<td>24</td>
</tr>
<tr>
<td>31</td>
<td>12</td>
<td>22</td>
<td>&nbsp;</td>
<td>31</td>
<td>10</td>
<td>25</td>
</tr>
<tr>
<td>32</td>
<td>13</td>
<td>23</td>
<td>&nbsp;</td>
<td>32</td>
<td>11</td>
<td>26</td>
</tr>
<tr>
<td>33</td>
<td>13</td>
<td>24</td>
<td>&nbsp;</td>
<td>33</td>
<td>11</td>
<td>26</td>
</tr>
<tr>
<td>34</td>
<td>14</td>
<td>24</td>
<td>&nbsp;</td>
<td>34</td>
<td>11</td>
<td>27</td>
</tr>
<tr>
<td>35</td>
<td>14</td>
<td>25</td>
<td>&nbsp;</td>
<td>35</td>
<td>12</td>
<td>28</td>
</tr>
<tr>
<td>36</td>
<td>14</td>
<td>26</td>
<td>&nbsp;</td>
<td>36</td>
<td>12</td>
<td>29</td>
</tr>
<tr>
<td>37</td>
<td>15</td>
<td>27</td>
<td>&nbsp;</td>
<td>37</td>
<td>12</td>
<td>30</td>
</tr>
<tr>
<td>38</td>
<td>15</td>
<td>27</td>
<td>&nbsp;</td>
<td>38</td>
<td>13</td>
<td>30</td>
</tr>
<tr>
<td>39</td>
<td>16</td>
<td>28</td>
<td>&nbsp;</td>
<td>39</td>
<td>13</td>
<td>31</td>
</tr>
<tr>
<td>40</td>
<td>16</td>
<td>29</td>
<td>&nbsp;</td>
<td>40</td>
<td>13</td>
<td>32</td>
</tr>
<tr>
<td><strong>250</strong></td>
<td><strong>100</strong></td>
<td><strong>180</strong></td>
<td><strong>Totaux</strong></td>
<td><strong>300</strong></td>
<td><strong>100</strong></td>
<td><strong>240</strong></td>
</tr>
</table>
<p>Calcul des notes  obtenues&nbsp;:</p>
<p>Points par question =  arrondi (total des points / nombre total d&#39;éléments * nombre réel d&#39;éléments)</p>
<p>Minutes par question =  arrondi (total des minutes / nombre total d&#39;éléments * nombre réel d&#39;éléments)</p>
<p>Exemple no&nbsp;1  – Examen général&nbsp;: 100/300 x 20 éléments dans une question = 7 points pour  cette question</p>
<p>Exemple no&nbsp;2  – Examen propre à la centrale&nbsp;: 100/250 x 20 éléments dans une question =  8 points pour cette question</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.12"></div>
<h3 id="app-b-12">B.12 Page couverture du guide de correction de l&#39;examen portant sur les connaissances</h3>
<h4>Guide de correction</h4>
<p>Titre de l&#39;examen&nbsp;:<br />
Centrale&nbsp;:                                                                                           <br />
Nom complet du  candidat&nbsp;:<br />
Résultat de l&#39;examen&nbsp;:<br />
Date  de l&#39;examen&nbsp;:<br />
Points&nbsp;:</p>
<p><strong>Examinateur en  chef&nbsp;:</strong> ____________________________   <br />
[Nom en lettres moulées et signature]            </p>
<p>_________ <br />
Date</p>
<p><strong>Approuvé par&nbsp;:</strong> ____________________________    <br />
[Nom  en lettres moulées et signature] <br />
Chef  de la formation            </p>
<p>_________<br />
Date</p>
<p><strong>Corrigé par :</strong>  ____________________________    <br />
[Nom en lettres moulées  et signature]          <br />
Premier évaluateur                            </p>
<p>___________________________<br />
[Nom en lettres  moulées et signature] <br />
Deuxième évaluateur </p>
<p><strong>Autorisé par : </strong>____________________________    <br />
[Nom en lettres moulées  et signature]            <br />
Chef de la formation</p>
<p>_________<br />
Date </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.13"></div>
<h3 id="app-b-13">B.13	Réponse du guide de correction portant sur les connaissances</h3>  <p>Exemple de  présentation de réponse du Guide de correction. Les renseignements exigés pour  chaque élément de réponse sont indiqués en <strong>gras</strong>. </p>  <p><strong>Q1       [X] pointage total</strong><br />  <strong>a)         [X] éléments </strong></p>
<p><strong>i)          Le rôle du  réducteur de charge consiste à&nbsp;:</strong><br />
<strong>[ ]</strong>         Protéger  le turbo-alternateur (dans des conditions défavorables) en limitant la charge  maximale.</p>
<p><strong>Il suffit de :</strong><br />
<strong>[ ]</strong>         limiter  le signal de demande de la vanne régulatrice,<br />
<strong>[ ]</strong>         ce  qui limite, par conséquent, l&#39;écoulement de vapeur (limitant la charge de la  turbine).</p>
<p><strong>Réf.&nbsp;: TM  234-7XXX_XXX [titres, Révision X, p. 4 Objectifs de connaissance = X]</strong></p>
<p><strong>ii)         La réduction de charge  du groupe turbo-alternateur est amorcée par :</strong><br />
<strong>[ ]</strong>         un  faible vide du condenseur (pression élevée du condenseur)<br />
<strong>[ ]</strong>         une  faible pression du générateur de vapeur</p>
<p><strong>Réf.&nbsp;: TM  234-7, p. 4</strong></p>  <p><strong>b)         [X] éléments</strong></p>
<p><strong>La réduction de charge permet un désamorçage afin d&#39;éviter&nbsp;:</strong><br />
<strong>[ ]</strong>         une  variation de la charge des turbines qui pourrait se produire comme suit :<br />
<strong>[ ]</strong>         suite à une réduction  de charge, le paramètre de réduction de charge (faible vide du condenseur ou  faible pression du générateur de vapeur) pourrait revenir à une plage  acceptable<br />
<strong>[ ]</strong>         la  restriction de la charge imposée par le réducteur de charge pourrait être  éliminée.<br />
<strong>[ ]</strong>         Cela  permettrait d&#39;éliminer la limite placée sur le signal de demande de la vanne,<br />
<strong>[ ]</strong>         ce  qui permettrait aux vannes de revenir à la valeur seuil inchangée.<br />
<strong>[ ]</strong>         L&#39;écoulement  de vapeur dans la turbine augmentera,<br />
<strong>[ ]</strong>         ce qui fait en sorte  que le paramètre de réduction de charge atteindra encore une valeur  inacceptable<br />
<strong>[ ]</strong>         et  un autre cycle de réduction de charge et de variation de la charge débutera.</p>
<p><strong>Réf.&nbsp;: TM 234-7, p. 4 et 5</strong><strong>&nbsp;</strong></p>
<p><em>[Examens propres à la centrale&nbsp;: 100/300 x 13 éléments = 4  points pour la Q1]</em></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.14"></div>
<h3 id="app-b-14">B.14	Fiche de contrôle de l&#39;examen portant sur les connaissances</h3>
<p>Centrale&nbsp;:        ________________________            Dossier&nbsp;:          _________</p>
<p>Titre de l&#39;examen&nbsp;:     ________________________</p>
<p>Date de l&#39;examen&nbsp;:      ________________________</p>
<p>Cette fiche de  contrôle doit être remplie à la fin de l&#39;élaboration de chaque examen.</p>
<p>[  ]        L&#39;examen et les questions sont conformes  aux sujets discutés, à l&#39;attribution des points et au nombre total de points  figurant dans le tableau sommaire présenté ci-dessous. </p>
<p>[  ]        Pas plus de 20&nbsp;% des questions de l&#39;examen  d&#39;accréditation sont fondées sur des questions précédemment utilisées. Toutes  les questions réutilisées ont été modifiées en profondeur et aucune d&#39;entre  elles n&#39;a été vue par les candidats auparavant.</p>
<p>[  ]        Au moins 80&nbsp;% des questions de l&#39;examen  d&#39;accréditation sont entièrement nouvelles et ne reposent pas sur des questions  précédemment utilisées lors d&#39;un examen, d&#39;une épreuve, d&#39;une évaluation du  candidat ou dans le cadre de la formation. </p>
<p>[  ]        Le niveau de difficulté de chaque question  permet de séparer les candidats qui ont une compréhension suffisante du sujet  traité par la question de ceux qui ne l&#39;ont pas.</p>
<p>[  ]        Chaque question est claire, exacte sur  le plan technique et elle contient tous les renseignements nécessaires pour  donner la réponse exigée.</p>
<p>[  ]        Les parties et sous-parties se  rapportant à l&#39;énoncé principal de chaque question sont arrangées selon un  ordre logique, s&#39;il y a lieu.</p>
<p>[  ]        La réponse à une partie d&#39;une question  ne devrait pas dépendre totalement de la réponse donnée à une partie précédente  de la question.</p>
<p>[  ]        Les questions mesurent la compréhension  d&#39;ensemble ou un niveau de connaissance supérieur que les personnes qui  occupent le poste visé par l&#39;examen doivent avoir pour s&#39;acquitter de leurs  fonctions avec compétence.</p>
<p>[  ]        Les questions sont axées sur l&#39;exploitation  et couvrent une vaste gamme de systèmes de la centrale, ainsi que les  procédures et sujets liés à l&#39;exploitation coordonnée de ces systèmes.</p>
<p>[  ]        Il ne faut pas accorder trop d&#39;importance  à un système, une procédure, un sujet ou à un type d&#39;objectifs en particulier.</p>
<p>[  ]        Les questions ne peuvent contenir de  renseignements susceptibles d&#39;aider le candidat à répondre à d&#39;autres  questions.</p>
<p>[  ]        Les renseignements qui figurent sur la  page couverture de l&#39;examen sont semblables à ceux du modèle présenté à l&#39;annexe  B.9.</p>
<p>[  ]        Les codes d&#39;identification de l&#39;équipement  et des documents mentionnés dans les questions sont exacts.</p>
<p>[  ]        Tout  acronyme utilisé dans une question est défini la première fois qu&#39;il figure  dans la question.</p>
<p>[  ]        Les questions font clairement mention de  tout document de référence remis aux candidats et comportent des instructions  appropriées concernant l&#39;utilisation des documents de référence remis.</p>
<p>[  ]        Aucun document de référence ne sera  remis pour toute question qui porte sur un domaine que les candidats doivent  connaître par cœur.</p>
<p>[  ]        Toute citation dans une question d&#39;une  instruction ou d&#39;un autre extrait provenant de la documentation de la centrale  figure textuellement.</p>
<p>[  ]        Des  points sont attribués à chaque question.</p>
<p>[  ]        La  mise en page des questions est semblable à l&#39;exemple qui figure à l&#39;annexe&nbsp;B.10.</p>
<p>[  ]        Les renseignements qui figurent sur la  page couverture du guide de correction sont semblables à ceux du modèle présenté  à l&#39;annexe B.12.</p>
<p>[  ]        Chaque  réponse contient uniquement l&#39;information spécifiquement demandée par la  question.</p>
<p>[  ]        Chaque  réponse est complète et exacte sur le plan technique.</p>
<p>[  ]        Chaque réponse correspond au niveau de  connaissances que les candidats sont censés avoir du sujet traité par la  question.</p>
<p>[  ]        Aucune réponse n&#39;est incompatible avec l&#39;information  contenue dans la documentation officielle mise à jour.</p>
<p>[  ]        Chaque  réponse est divisée correctement en éléments.</p>
<p>[  ]        La mise en page des réponses dans le  guide de correction est semblable à l&#39;exemple qui figure à <br />
l&#39;annexe B.13.</p>
<p>[  ]        L&#39;examen  a été validé et respecte les exigences énoncées dans le présent document.</p>
<table>
<caption className="text-left">
<strong>Tableau sommaire  de l&#39;examen</strong>
</caption>
<tr>
<th>Numéro de la question (y compris les sous-questions)</th>
<th>Groupe de sujets (y compris le no de l&#39;annexe)</th>
<th>Sujet(s)</th>
<th>Nombre maximal de points alloués </th>
<th>Nombre réel de points et d&#39;éléments</th>
</tr>
<tr>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>3 a) i)</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table>
<p><strong>Examinateur en  chef&nbsp;: </strong></p>
<p>________________________             </p>
<p> [Nom en lettres moulées]      </p>
<p>________________________<br />
[Signature]</p>
<p><strong>Chef de la  formation&nbsp;: </strong></p>
<p>______________________               </p>
<p>[Nom en lettres moulées]  <strong>   </strong>             </p>
<p>________________________<br />
[Signature]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.15"></div>
<h3 id="app-b-15">B.15	Formulaire de résultats d&#39;examen portant sur les connaissances</h3>
<p>Nom complet du  candidat&nbsp;:<br />
Poste du  candidat&nbsp;:<br />
Titre de l&#39;examen&nbsp;: <br />
Date de l&#39;examen&nbsp;:<br />
Centrale&nbsp;: </p>
<table className="table-bordered table">
<tr>
<td>No de la question</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
<td>11</td>
<td>12</td>
<td>13</td>
<td>14</td>
<td>15</td>
<td>16</td>
<td>Total</td>
</tr>
<tr>
<td>Pointage max.</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
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
<td>Points obtenus</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
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
<td>Pointage total exprimé en
pourcentage</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table>
<p>Justification du  résultat&nbsp;:</p>
<p>Lacunes révélées par  le candidat&nbsp;:</p>
<p><strong>Examinateur en  chef&nbsp;:</strong></p>
<p>______________________                <br />
[Nom en lettres moulées et signature]                        </p>
<p>__________________<br />
[Date]</p>
<p><strong>Examinateurs : </strong>          </p>
<p>______________________                <br />
[Nom en lettres moulées et signature]                        </p>
<p>___________________<br />
[Nom  en lettres moulées et signature]</p>
<p><strong>Autorisé par :</strong></p>
<p> ___________________                                              <br />
[Nom en lettres moulées et signature]<br />
Chef de la formation</p>
<p>__________________<br />
[Date]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C"></div>
<h2 id="app-c">Annexe C : Examens d&#39;accréditation portant sur les habiletés – Exigences supplémentaires</h2>
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
<h3 id="app-c-1">C.1	Domaines de compétence et attentes génériques relatives au comportement des candidats aux postes d&#39;OR et d&#39;OT0 </h3>
<p>Les domaines de  compétence et les attentes génériques en matière de comportement (AGC) dont la  liste figure dans cette annexe doivent servir à évaluer le comportement des  candidats OR et OT0 lors de leur examen d&#39;accréditation sur simulateur. </p>
<p>La norme de  comportement acceptable à utiliser pour mesurer chaque attente générique est  dictée par les attentes spécifiques des documents de la centrale nucléaire en  matière de rendement, applicables aux postes des OR et des OT0. Le chiffre  entre parenthèses qui précède chaque attente générique est un facteur de  pondération qui sert au calcul des notes obtenues par les candidats dans un domaine  de compétence. Les facteurs de pondération reflètent l&#39;importance relative des  attentes génériques en matière de comportement.</p>
<h4>AGC    Domaine de compétence </h4>
<h5>1.0       Surveillance</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de se tenir constamment et indépendamment au fait de l&#39;état  de la tranche ou des systèmes de la centrale à l&#39;aide des instruments  appropriés de la salle de commande principale (SCP), de dispositifs de la salle  d&#39;équipement ou de rapports sur le terrain, soit en effectuant les  vérifications requises sans recourir aux procédures d&#39;exploitation, soit en  effectuant des vérifications pertinentes qui ne figurent pas explicitement dans  les procédures d&#39;exploitation en cours d&#39;exécution. </p>
<ol className="list-bullet-none">
<li>1.1 (5)  Surveille  les paramètres critiques de sûreté (PCS) et les principaux paramètres de  soutien (PPS), selon les besoins.</li>
<li>1.2 (4)  Surveille  en temps opportun que les principaux paramètres des systèmes majeurs de la  centrale se comportent et se stabilisent comme prévu. </li>
<li>1.3 (4)  Surveille  les alarmes et les indications des panneaux au besoin pour rester au fait des  changements qui touchent l&#39;état de l&#39;équipement, des systèmes et de la tranche.</li>
<li>1.4 (5)  Vérifie  en temps opportun que les actions automatiques majeures (AAM) se produisent et  qu&#39;elles ont les effets voulus avant de consulter les procédures.</li>
<li>1.5 (3)  Vérifie  en temps opportun que les autres actions automatiques se produisent et qu&#39;elles  ont les effets voulus.</li>
<li>1.6 (3)  Vérifie en temps opportun que les  interventions de l&#39;opérateur ont ou ont eu les effets voulus. </li>
</ol>
<h5>2.0       Interventions  effectuées sans consulter les procédures         </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité d&#39;effectuer les interventions requises lorsque l&#39;on ne s&#39;attend  pas à ce que les procédures d&#39;exploitation soient consultées, quand il n&#39;y a  pas de procédure pertinente ou avant de recourir aux procédures applicables  lorsque survient une perturbation ou une condition anormale.</p>
<ol className="list-bullet-none">
<li>2.1 (2)  S&#39;assure en temps opportun du rappel de l&#39;équipe  d&#39;intervention de la salle de commande.</li>
<li>2.2 (5)  Prend en  temps opportun les mesures correctives nécessaires lorsqu&#39;une AAM ne s&#39;est pas  produite.</li>
<li>2.3 (3)  Prend en  temps opportun les mesures correctives nécessaires lorsqu&#39;une autre action  automatique ne s&#39;est pas produite.</li>
<li>2.4 (5)  Effectue  en temps opportun les interventions requises, d&#39;après son diagnostic, avant de  recourir aux procédures pertinentes.</li>
<li>2.5 (3)  Effectue  au besoin des interventions requises sans recourir aux procédures d&#39;exploitation,  lorsque l&#39;on ne s&#39;attend pas à ce que celles-ci soient consultées.</li>
<li>2.6 (4)  Effectue  correctement, en temps opportun et avec l&#39;autorisation du CQC ou du CQSC, les  interventions requises lorsqu&#39;une perturbation, une condition anormale, une défaillance supplémentaire, une  indisponibilité d&#39;équipement ou toute autre condition n&#39;est pas traitée par les  procédures.</li>
<li>2.7 (4)  S&#39;assure  en temps opportun que les mesures correctives ou préventives appropriées sont  prises lorsque l&#39;état de la tranche menace la sécurité du personnel de la  centrale ou la sécurité publique.</li>
<li>2.8 (5)  Prend en  temps opportun des mesures correctives qui ne figurent pas dans les procédures  d&#39;exploitation lorsqu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la normale.</li>
</ol>
<h5>3.0       Pose de diagnostics  et prise de décisions</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de reconnaître rapidement et indépendamment les situations  anormales au niveau de la tranche ou des systèmes de la centrale, de  diagnostiquer indépendamment les défaillances, de choisir les procédures d&#39;exploitation  pertinentes et, à défaut de procédures, de déterminer ou de recommander une marche  à suivre pertinente.</p>
<ol className="list-bullet-none">
<li>3.1 (5)  Constate  qu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la normale.</li>
<li>3.2 (4)  Constate  qu&#39;un paramètre d&#39;un système, que la configuration d&#39;un système ou que l&#39;état d&#39;une  tranche de la centrale s&#39;écarte d&#39;une valeur, d&#39;une configuration ou d&#39;un état  acceptable défini dans les procédures d&#39;exploitation.</li>
<li>3.3 (5)  Constate  qu&#39;une exigence précisée dans les LCE est sur le point d&#39;être ou a peut-être  été enfreinte.</li>
<li>3.4 (5)  Repère  sans procédure les alarmes et les indications qui déterminent la nature d&#39;une  défaillance et, le cas échéant, constate les conditions d&#39;entrée de la  procédure pertinente.</li>
<li>3.5 (3)  Choisit  les procédures applicables ou la marche à suivre d&#39;après son diagnostic.</li>
<li>3.6 (2)  En se  reportant aux procédures, détermine la nature d&#39;une défaillance ou les  procédures particulières qu&#39;il convient d&#39;appliquer.</li>
<li>3.7 (2)  Confirme  son diagnostic ou confirme que la procédure choisie est la bonne, à l&#39;aide d&#39;autres  moyens à sa disposition tels que les documents de la centrale ou les rapports sur  le terrain.</li>
<li>3.8 (5)  Détermine  ou recommande une marche à suivre appropriée lorsqu&#39;il n&#39;y a pas de procédure  ou lorsque les procédures ne traitent pas complètement de la situation, donnent  des instructions contradictoires ou sont inefficaces.</li>
<li>3.9 (4)  Constate  en temps opportun que la centrale présente des conditions anormales simultanées  qu&#39;il faut corriger et établit l&#39;ordre d&#39;exécution des interventions  nécessaires pour remédier à ces conditions, compte tenu de leur importance  relative.</li>
<li>3.10 (3) Si  le temps le permet, détermine la cause précise d&#39;une défaillance à l&#39;aide de  toutes les données disponibles.</li>
</ol>
<h5>4.0       Respect des  procédures          </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité d&#39;effectuer correctement les actions et les vérifications prescrites  par toute procédure pertinente approuvée. </p>
<ol className="list-bullet-none">
<li>4.1 (3)  Exécute  toutes les étapes de la procédure pertinente correctement et dans le bon ordre.</li>
<li>4.2 (4)  Exécute  les actions considérées comme pratiques courantes d&#39;exploitation qui sont  nécessaires pour réaliser une étape d&#39;une procédure.</li>
<li>4.3 (5)  Exécute  en temps opportun la procédure pertinente lorsqu&#39;un PCS ou un PPS s&#39;écarte  dangereusement de la normale.                      </li>
</ol>
<h5>5.0       Communication et  interaction avec l&#39;équipe</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de communiquer avec les autres membres de l&#39;équipe d&#39;intervention  en SCP ou membres de l&#39;équipe de manière claire et précise ainsi que la  capacité d&#39;interagir efficacement avec eux. </p>
<ol className="list-bullet-none">
<li>5.1 (5)  Donne en  temps opportun des instructions aux membres de l&#39;équipe ou aux membres de l&#39;équipe  d&#39;intervention en SCP, le cas échéant.</li>
<li>5.2 (3)  Accuse  réception des requêtes ou des renseignements reçus.</li>
<li>5.3 (5)  Communique  le résultat des interventions à la personne qui les a demandées.</li>
<li>5.4 (3)  Tient les  membres de l&#39;équipe d&#39;intervention en SCP ou les membres de l&#39;équipe, le cas  échéant, au fait de l&#39;état de la tranche ou des événements importants dans le  cadre de séances d&#39;information, le cas échéant.</li>
<li>5.5 (2)  Émet en  temps opportun les avis ou les demandes nécessaires, le cas échéant.</li>
<li>5.6 (3)  Obtient  en temps opportun les autorisations requises de la part du CQC ou du CQSC.</li>
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
<div id="C.2"></div>
<h3 id="app-c-2">C.2 Domaines de compétence et attentes génériques relatives au comportement des candidats au poste de CQC aux centrales à une seule tranche</h3>
<p>Les domaines de  compétence et les AGC dont la liste figure dans cette annexe doivent servir à  évaluer le comportement des candidats CQC des centrales à une seule tranche  lors de leur examen d&#39;accréditation sur simulateur. </p>
<p>La norme de  comportement acceptable à utiliser pour mesurer chaque attente générique est  dictée par les attentes spécifiques des documents de la centrale nucléaire en  matière de rendement, applicables au poste de CQC. Le chiffre entre parenthèses  qui précède chaque attente générique est un facteur de pondération qui sert au  calcul des notes obtenues par les candidats dans un domaine de compétence. Les  facteurs de pondération reflètent l&#39;importance relative des attentes génériques  en matière de comportement.</p>
<h4>AGC    Domaine de compétence</h4>
<h5>1.0       Surveillance </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de se tenir indépendamment et constamment au fait de l&#39;état  de la centrale à l&#39;aide des instruments appropriés de la SCP, soit en  effectuant les vérifications requises sans recourir aux procédures d&#39;exploitation,  soit en effectuant des vérifications pertinentes qui ne figurent pas  explicitement dans les procédures d&#39;exploitation en cours d&#39;exécution.  </p>
<ol className="list-bullet-none">
<li>1.1  (5) Surveille les paramètres critiques de sûreté (PCS) et  les principaux paramètres de sûreté (PPS), selon les besoins.</li>
<li>1.2 (4)  Surveille  en temps opportun que les principaux paramètres des systèmes majeurs de la  centrale se comportent et se stabilisent comme prévu.</li>
<li>1.3 (4)  Surveille  les alarmes et les indications des panneaux au besoin pour rester au fait des  changements qui touchent l&#39;état de l&#39;équipement et des systèmes de la centrale.</li>
<li>1.4 (5)  Vérifie  en temps opportun que les AAM se produisent et qu&#39;elles ont les effets voulus  avant de consulter les procédures.</li>
<li>1.5 (3)  Vérifie  de façon appropriée à la situation que les autres actions automatiques se  produisent et qu&#39;elles ont les effets voulus.</li>
<li>1.6 (3)  Vérifie  en temps opportun que toute action accomplie a les effets voulus.</li>
<li>1.7 (5)  Vérifie  les conditions pertinentes des systèmes et de la centrale avant de donner son  autorisation ou d&#39;amorcer une intervention.</li>
<li>1.8 (1)  reconnaît  et réinitialise les alarmes ou relève périodiquement le résumé des alarmes de  façon appropriée, lorsque l&#39;OR est temporairement absent de la SCP.</li>  </ol>
<h5>2.0       Interventions effectuées sans consulter les procédures </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de diriger l&#39;exécution des interventions requises ou de les  effectuer lorsque l&#39;on ne s&#39;attend pas à ce que les procédures d&#39;exploitation  soient consultées, lorsqu&#39;il n&#39;y a pas de procédure pertinente ou avant de  recourir aux procédures applicables lorsque survient une perturbation ou une  condition anormale.</p>
<ol className="list-bullet-none">
<li>2.1 (2)  S&#39;assure  en temps opportun du rappel et du déploiement de l&#39;équipe d&#39;intervention de la  SCP.</li>
<li>2.2 (5)  Dirige en  temps opportun l&#39;exécution des mesures correctives nécessaires, ou prend  personnellement ces mesures, lorsqu&#39;une AAM ne s&#39;est pas produite.</li>
<li>2.3 (3)  Dirige en  temps opportun l&#39;exécution des mesures correctives nécessaires, ou prend  personnellement ces mesures, lorsqu&#39;une autre action automatique ne s&#39;est pas  produite.</li>
<li>2.4 (5)  Dirige en  temps opportun l&#39;exécution des interventions requises, d&#39;après son diagnostic,  ou effectue personnellement ces interventions, avant de consulter les  procédures pertinentes.</li>
<li>2.5 (3)  Dirige en  temps opportun l&#39;exécution d&#39;autres interventions requises, ou effectue  personnellement ces interventions lorsque l&#39;on ne s&#39;attend pas à ce que les  procédures soient consultées.</li>
<li>2.6 (4)  Dirige en  temps opportun l&#39;exécution des interventions requises, ou effectue  personnellement ces interventions, lorsqu&#39;une perturbation, une condition  anormale, une défaillance supplémentaire, une indisponibilité d&#39;équipement ou  toute autre condition de la centrale n&#39;est pas traitée par les procédures.</li>
<li>2.7 (4)  S&#39;assure  en temps opportun que les mesures correctives ou préventives appropriées sont  prises lorsque l&#39;état de la centrale menace la sécurité du personnel de la  centrale ou la sécurité publique.</li>
<li>2.8 (5)  Dirige en  temps opportun l&#39;exécution de mesures correctives qui ne figurent pas dans les  procédures d&#39;exploitation, ou prend personnellement ces mesures, lorsqu&#39;un PCS  ou un PPS s&#39;écarte dangereusement de la normale.</li>
</ol>
<h5>3.0       Pose de diagnostics  et prise de décisions</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de reconnaître indépendamment les situations anormales, de  diagnostiquer indépendamment les défaillances, de choisir les procédures d&#39;exploitation  applicables et, à défaut de procédures, de déterminer une marche à suivre  pertinente.</p>
<ol className="list-bullet-none">
<li>3.1 (5)  Constate  en temps opportun qu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la normale.</li>
<li>3.2 (4)  Constate  en temps opportun qu&#39;un paramètre d&#39;un système, que la configuration d&#39;un  système ou que l&#39;état de la centrale s&#39;écarte d&#39;une valeur, d&#39;une configuration  ou d&#39;un état acceptable défini dans les procédures d&#39;exploitation.</li>
<li>3.3 (5)  Constate  en temps opportun qu&#39;une exigence précisée dans les LCE est sur le point d&#39;être  ou a peut-être été enfreinte. </li>
<li>3.4 (5)  Repère  sans procédure et en temps opportun les alarmes et les indications qui  déterminent la nature d&#39;une défaillance et, le cas échéant, constate les  conditions d&#39;entrée de la procédure pertinente.</li>
<li>3.5 (3)  Choisit  en temps opportun les procédures applicables d&#39;après son diagnostic.</li>
<li>3.6 (2)  En se  reportant aux procédures, détermine en temps opportun la nature d&#39;une  défaillance ou les procédures particulières qu&#39;il convient d&#39;appliquer.</li>
<li>3.7 (2)  Confirme  son diagnostic ou confirme que la procédure choisie est la bonne, à l&#39;aide d&#39;autres  moyens à sa disposition tels que les documents de la centrale ou les rapports sur  le terrain.</li>
<li>3.8 (5)  Détermine  en temps opportun une marche à suivre appropriée lorsqu&#39;il n&#39;y a pas de  procédure pertinente ou lorsque les procédures ne traitent pas complètement de  la situation, donnent des instructions contradictoires ou sont inefficaces.</li>
<li>3.9 (4)  Constate  en temps opportun que la centrale présente des conditions anormales simultanées  qu&#39;il faut corriger et établit l&#39;ordre d&#39;exécution des interventions  nécessaires pour remédier à ces conditions, compte tenu de leur importance  relative.</li>
<li>3.10 (3) Si  le temps le permet, détermine la cause précise d&#39;une défaillance à l&#39;aide de  toutes les données disponibles.</li>
<li>3.11 (5) Détermine  en temps opportun les mesures correctives requises lorsqu&#39;un PCS ou un PPS s&#39;écarte  dangereusement de la normale.</li>
<li>3.12 (4) Suite  à l&#39;occurrence d&#39;une perturbation ou d&#39;une condition anormale, détermine l&#39;état  final dans lequel il faut placer la centrale, ainsi que tout état intermédiaire  d&#39;importance, et l&#39;échéancier pour atteindre l&#39;état final.</li>
<li>3.13 (5) Détermine  la pertinence d&#39;une demande d&#39;effectuer une manœuvre ou une intervention qui  exige l&#39;autorisation du CQC d&#39;après un examen judicieux des conditions, des  contraintes et des limites des systèmes et de la centrale, avant d&#39;autoriser la  manœuvre ou l&#39;intervention en question.</li>
</ol>
<h5>4.0       Respect des  procédures </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de diriger l&#39;exécution des actions et des vérifications  requises, à l&#39;aide de la procédure pertinente approuvée. Il sert aussi à  évaluer la capacité d&#39;effectuer correctement les actions et les vérifications  prescrites par toute procédure pertinente approuvée, lorsque l&#39;OR est  temporairement absent de la SCP, ainsi que la capacité d&#39;effectuer les actions  et les vérifications expressément confiées au CQC en consultant la procédure  pertinente approuvée.</p>
<ol className="list-bullet-none">
<li>4.1 (3)  Dirige l&#39;exécution  de la procédure pertinente, ou exécute celle-ci, correctement et dans le bon  ordre.</li>
<li>4.2 (4)  Exécute  les actions considérées comme pratiques courantes d&#39;exploitation qui sont  nécessaires pour réaliser une étape d&#39;une procédure.</li>
<li>4.3 (5)  Dirige en  temps opportun l&#39;exécution de la procédure pertinente, ou exécute celle-ci,  lorsqu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la normale.</li>
</ol>
<h5>5.0       Communication et interaction  avec l&#39;équipe</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de communiquer avec les autres membres de l&#39;équipe d&#39;intervention  en SCP ou membres de l&#39;équipe de manière claire et précise ainsi que la  capacité d&#39;interagir avec eux de manière efficace et efficiente.</p>
<ol className="list-bullet-none">
<li>5.1 (5)  Donne en  temps opportun des instructions et des autorisations aux membres de l&#39;équipe d&#39;intervention  en SCP ou aux membres de l&#39;équipe, le cas échéant.</li>
<li>5.2 (3)  Accuse  réception des requêtes et des renseignements reçus.</li>
<li>5.3 (5)  Communique  au moment opportun le résultat des interventions à la personne qui les a  demandées.</li>
<li>5.4 (3)  Communique  au moment opportun les renseignements nécessaires aux membres de l&#39;équipe d&#39;intervention  en SCP ou aux membres de l&#39;équipe, le cas échéant.</li>
<li>5.5 (2)  Émet en  temps opportun les avis nécessaires.</li>
<li>5.6 (3)  Obtient  en temps opportun les autorisations requises de la part de la direction de la  centrale.</li>
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
<div id="C.3"></div>
<h3 id="app-c-3">C.3	Domaines de compétence et attentes génériques relatives au comportement des candidats au poste de CQSC aux centrales à plusieurs tranches </h3>
<p>Les domaines de  compétence et les AGC dont la liste figure dans cette annexe doivent servir à  évaluer le comportement des candidats CQSC des centrales à plusieurs tranches  lors de leur examen d&#39;accréditation sur simulateur. </p>
<p>La norme de  comportement acceptable à utiliser pour mesurer chaque attente générique est  dictée par les attentes spécifiques des documents de la centrale nucléaire en  matière de rendement, applicables au poste de CQSC. </p>
<p>Remarque : L&#39;applicabilité  d&#39;une AGC à un SED, à un SVPC ou aux deux est indiquée entre parenthèses.</p>
<h4>AGC    Domaine de compétence</h4>
<h5>1.0       Surveillance </h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de se tenir constamment et indépendamment au fait de l&#39;état  de la tranche ou des systèmes de la centrale à l&#39;aide des instruments  appropriés de la SCP, de dispositifs de la salle d&#39;équipement ou de rapports  sur le terrain, soit en effectuant les vérifications requises sans recourir aux  procédures d&#39;exploitation, soit en effectuant des vérifications pertinentes qui  ne figurent pas explicitement dans les procédures d&#39;exploitation en cours d&#39;exécution. </p>
<ol className="list-bullet-none">
<li>1.1 (5)  Surveille  paramètres critiques de sûreté (PCS) et les principaux paramètres de sûreté  (PPS), selon les besoins (SED).</li>
<li>1.2 (4)  Surveille  en temps opportun que les principaux paramètres des systèmes majeurs de la  centrale se comportent et se stabilisent comme prévu (SED).</li>
<li>1.3 (4)  Surveille  les alarmes et les indications des panneaux au besoin pour rester au fait des  changements qui touchent l&#39;état de l&#39;équipement, des systèmes et de la tranche  (SED).</li>
<li>1.4 (5)  Vérifie  en temps opportun que les AAM se produisent et qu&#39;elles ont les effets voulus  avant de consulter les procédures (SED).</li>
<li>1.5 (3)  Vérifie  en temps opportun que les interventions de l&#39;opérateur ont ou ont eu les effets  voulus (SED).</li>
<li>1.6 (5)  Vérifie  les conditions pertinentes des systèmes, de la tranche et de la centrale avant  de donner son autorisation ou d&#39;amorcer une intervention.</li>
</ol>
<h5>2.0       Interventions  effectuées sans consulter les procédures</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de diriger l&#39;exécution des interventions requises lorsque l&#39;on  ne s&#39;attend pas à ce que les procédures d&#39;exploitation soient consultées, quand  il n&#39;y a pas de procédure pertinente ou avant de recourir aux procédures pertinentes  lorsque survient une perturbation ou une condition anormale.</p>
<ol className="list-bullet-none">
<li>2.1 (2)  S&#39;assure  en temps opportun du rappel et du déploiement de l&#39;équipe d&#39;intervention de la  salle de commande.</li>
<li>2.2 (5)  Dirige  en temps opportun l&#39;exécution des mesures correctives nécessaires lorsqu&#39;une  AAM ne s&#39;est pas produite (SED).</li>
<li>2.3 (5)  Dirige en  temps opportun l&#39;exécution des interventions requises, d&#39;après son diagnostic,  avant de consulter les procédures pertinentes.</li>
<li>2.4 (3)  Dirige en  temps opportun l&#39;exécution des interventions requises, sans recourir aux  procédures d&#39;exploitation, lorsque l&#39;on ne s&#39;attend pas à ce que celles-ci  soient consultées.</li>
<li>2.5 (4)  Exécute  en temps opportun les actions spécifiquement attribuées au CQSC, sans recourir  aux procédures d&#39;exploitation, lorsque l&#39;on ne s&#39;attend pas à ce que celles-ci  soient consultées.</li>
<li>2.6 (4)  Dirige en  temps opportun l&#39;exécution des interventions requises lorsqu&#39;une perturbation,  une condition anormale, une défaillance supplémentaire, une indisponibilité d&#39;équipement  ou toute autre condition n&#39;est pas traitée par les procédures.</li>
<li>2.7 (4)  Applique  en temps opportun les mesures correctives ou préventives appropriées lorsque l&#39;état  de la centrale menace la sécurité du personnel de la centrale ou la sécurité  publique.</li>
<li>2.8 (5)  Dirige en  temps opportun l&#39;exécution de mesures correctives qui ne figurent pas dans les  procédures d&#39;exploitation lorsqu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la  normale.</li>
</ol>
<h5>3.0       Pose de diagnostics  et prise de décisions</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de reconnaître indépendamment les situations anormales, de  diagnostiquer indépendamment les défaillances, de choisir les procédures d&#39;exploitation  applicables et, à défaut de procédures, de déterminer une marche à suivre  pertinente.</p>
<ol className="list-bullet-none">
<li>3.1 (5)  Constate  en temps opportun qu&#39;un PCS ou un PPS s&#39;écarte dangereusement de la normale  (SED).</li>
<li>3.2 (4)  Constate  en temps opportun qu&#39;un paramètre d&#39;un système, que la configuration d&#39;un  système ou que l&#39;état de la tranche s&#39;écarte d&#39;une valeur, d&#39;une configuration  ou d&#39;un état acceptable défini dans les procédures d&#39;exploitation (SED et  SVPC).</li>
<li>3.3 (5)  Constate  en temps opportun qu&#39;une exigence des LCE est sur le point d&#39;être ou a  peut-être été enfreinte (SED et SVPC).</li>
<li>3.4 (5)  Repère sans  procédure et en temps opportun les alarmes et les indications qui déterminent  la nature de la défaillance et, le cas échéant, constate les conditions d&#39;entrée  de la procédure pertinente (SED).</li>
<li>3.5 (3)  Choisit  en temps opportun les procédures applicables d&#39;après son diagnostic (SED et  SVPC).</li>
<li>3.6 (2)  En se  reportant aux procédures, détermine en temps opportun la nature de la  défaillance ou les procédures particulières qu&#39;il convient d&#39;appliquer (SED et  SVPC).</li>
<li>3.7 (2)  Confirme  son diagnostic ou confirme que la procédure choisie est la bonne, à l&#39;aide d&#39;autres  moyens à sa disposition tels que les documents de la centrale ou les rapport sur  le terrain (SED).</li>
<li>3.8 (5)  Détermine  en temps opportun une marche à suivre appropriée lorsqu&#39;il n&#39;y a pas de  procédure pertinente ou lorsque les procédures ne traitent pas complètement de  la situation, donnent des instructions contradictoires ou sont inefficaces (SED  et SVPC).</li>
<li>3.9 (4)  Constate  en temps opportun que la centrale présente des conditions anormales simultanées  qu&#39;il faut corriger et établit l&#39;ordre d&#39;exécution des interventions  nécessaires pour remédier à ces conditions, compte tenu de leur importance  relative (SED et SVPC).</li>
<li>3.10 (3) Détermine  la cause précise d&#39;une défaillance à l&#39;aide de toutes les données disponibles  (SED).</li>
<li>3.11 (5) Détermine  en temps opportun les mesures correctives requises lorsqu&#39;un PCS ou un PPS s&#39;écarte  dangereusement de la normale (SED).</li>
<li>3.12 (4) Suite  à l&#39;occurrence d&#39;une perturbation ou d&#39;une condition anormale, détermine l&#39;état  final dans lequel il faut placer la centrale, ainsi que tout état intermédiaire  d&#39;importance, et l&#39;échéancier pour atteindre l&#39;état final (SED et SVPC).</li>
<li>3.13 (5) Détermine  la pertinence d&#39;une demande d&#39;effectuer une manœuvre ou une intervention qui  exige l&#39;autorisation du GQ d&#39;après un examen judicieux des conditions, des  contraintes et des limites des systèmes, des tranches et de la centrale, avant  d&#39;autoriser la manœuvre ou l&#39;intervention en question.</li>
</ol>
<h5>4.0       Respect des  procédures          </h5>
<p>Ce domaine de compétence sert à évaluer  la capacité de diriger l&#39;exécution des actions et des vérifications requises, à  l&#39;aide de la procédure pertinente approuvée. Il sert aussi à évaluer la  capacité d&#39;effectuer les actions et les vérifications expressément confiées au  CQSC en consultant la procédure pertinente approuvée.</p>
<ol className="list-bullet-none">
<li>4.1 (3)  Dirige l&#39;exécution  de la procédure pertinente correctement et dans le bon ordre.</li>
<li>4.2 (5)  Dirige en  temps opportun l&#39;exécution d&#39;une procédure de restauration d&#39;un PCS, lorsque  cela est nécessaire.</li>
<li>4.3 (3)  Exécute toutes  les étapes d&#39;une procédure approuvée qui relève spécifiquement du CQSC  correctement et dans le bon ordre.</li>
</ol>
<h5>5.0       Communication et  interaction avec l&#39;équipe</h5>
<p>Ce domaine de compétence sert à  évaluer la capacité de communiquer avec les autres membres de l&#39;équipe d&#39;intervention  en SCP ou membres de l&#39;équipe de manière claire et précise ainsi que la  capacité d&#39;interagir efficacement avec eux. </p>
<ol className="list-bullet-none">
<li>5.1 (5)  Donne en  temps opportun des instructions et des autorisations aux membres de l&#39;équipe d&#39;intervention  en SCP ou aux membres de l&#39;équipe, le cas échéant.</li>
<li>5.2 (3)  Accuse  réception des requêtes et des renseignements reçus.</li>
<li>5.3 (5)  Communique  au moment opportun le résultat des interventions à la personne qui les a  demandées.</li>
<li>5.4 (3)  Communique  au moment opportun les renseignements nécessaires aux membres de l&#39;équipe d&#39;intervention  en SCP ou aux membres de l&#39;équipe, le cas échéant.</li>
<li>5.5 (2)  Émet en  temps opportun les avis nécessaires.</li>
<li>5.6 (3)  Obtient  en temps opportun les autorisations requises de la part de la direction de la  centrale.</li>
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
<div id="C.4"></div>
<h3 id="app-c-4">C.4	Conception d&#39;un SEC pour l&#39;examen des OR </h3>
<p>L&#39;équipe d&#39;examen doit  concevoir chaque SEC destiné aux candidats opérateurs de réacteur conformément  aux critères qui suivent&nbsp;: </p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères qui suivent&nbsp;:
<ol>
<li>préciser la puissance de chaque  réacteur, la charge de chaque turboalternateur, l&#39;état des principaux systèmes  des diverses tranches, l&#39;équipement hors service, l&#39;état des activités de  chargement du combustible et toute autre condition pertinente de la centrale,  comme les tests de routine et les activités d&#39;entretien en cours</li>
<li>seulement une partie de  l&#39;équipement hors service durant le SEC peut avoir un effet sur les actions que  les candidats devront effectuer</li>
<li>les conditions initiales de la  centrale ne contreviennent pas aux exigences formulées dans les documents d&#39;exploitation  de la centrale</li>
</ol>
</li>
<li>Repérer un certain nombre de  défaillances principales, classer chacune d&#39;entre elles dans l&#39;une des catégories  définies à la sous-section 13.4.1 et les disposer dans un ordre plausible. Sélectionner les  défaillances principales, avec l&#39;heure de leur occurrence, en fonction des  critères suivants&nbsp;:
<ol>
<li>La durée prévue du SEC ne  dépasse guère 50 minutes.</li>
<li>Le SEC compte une défaillance  principale de catégorie 2 ou 3 qui exige des candidats une intervention  complexe, ou le SEC compte une défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus de  trois défaillances principales de catégories 3 et 4.</li>
<li>Le SEC ne compte pas plus de  quatre défaillances principales.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à e) peuvent être dépassées si l&#39;une des défaillances  choisies créerait dans la centrale des conditions qui peuvent provoquer à leur  tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses de sûreté de la  centrale ou sur un incident survenu dans le secteur nucléaire qui pourrait  vraisemblablement se produire à la centrale.</li>
<li>Il faut choisir une défaillance  principale qui entraîne une détérioration de l&#39;état de la tranche qui aura un  effet important sur les actions que les candidats devront exécuter en réaction  à une défaillance principale subséquente.
<div className="module">
<p>De préférence, les défaillances principales devraient être ordonnées  de façon à ce qu&#39;il y ait une détérioration graduelle de l&#39;état de la centrale.</p>
</div>
</li>
<li>Le délai prévu entre deux défaillances principales successives est suffisant pour qu&#39;un OR compétent et l&#39;équipe de soutien aient le temps de réagir de la façon attendue à la première défaillance principale avant que la suivante se produise.</li>
</ol>
<div className="module">
<p>Les  défaillances principales peuvent être tirées de la documentation  suivante&nbsp;: </p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence  et manuels en cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale</li>
<li>manuels de formation</li>
<li>liste des défaillances que le  simulateur peut reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
<li>Repérer un certain nombre de  défaillances secondaires liées aux défaillances principales et déterminer l&#39;heure  de leur occurrence. Sélectionner ces défaillances en fonction des critères  suivants&nbsp;:
<ol>
<li>Chaque défaillance secondaire  répond aux critères énoncés à la sous-section 16.3.1.</li>
<li>Le SEC compte au moins quatre  défaillances principales ou supplémentaires.</li>
<li>Le SEC ne compte pas plus de 10  défaillances principales et secondaires au total.</li>
<li>Le SEC ne compte pas plus de  cinq défaillances supplémentaires associées à une défaillance principale donnée.</li>
<li>Le SEC ne compte pas plus de  trois défaillances d&#39;indicateurs.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance secondaire qui provoque une indisponibilité de niveau 1 ou 2 d&#39;un  système spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires qui provoquent une indisponibilité d&#39;un système  spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires de systèmes de soutien en matière de sûreté en  attente.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à h) peuvent être dépassées si l&#39;une des défaillances  principales choisies créerait dans la centrale des conditions qui peuvent  provoquer à leur tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses  de sûreté de la centrale ou sur un incident survenu dans le secteur nucléaire  qui pourrait vraisemblablement se produire à la centrale. </li>
</ol>
</li>
<li>Pour satisfaire au critère 7.a de  la sous-section 14.1, il y  a lieu de choisir certaines combinaisons de défaillances et de conditions de la  centrale qui créent des situations pour lesquelles les procédures d&#39;exploitation  ne donnent pas d&#39;instructions précises.</li>
<li>Pour satisfaire au critère 7.b de la  sous-section 14.1, il y  a lieu de choisir des défaillances complexes ou des conditions de la tranche simultanées  qui obligent les candidats à déterminer les interventions à effectuer en  priorité.</li>
<li>Déterminer, parmi la  documentation officielle, tous les documents d&#39;exploitation qu&#39;il faut utiliser  pour réagir aux défaillances principales et secondaires.</li>
<li>Fixer les conditions qui encadrent  la participation des membres de l&#39;équipe de soutien en salle de commande,  soit&nbsp;:
<ol>
<li>le nombre de personnes  disponibles et leurs rôles respectifs</li>
<li>l&#39;endroit où doit se trouver  chaque personne au début du SEC</li>
<li>le moment où chaque personne  appelée doit arriver au groupe réacteur simulé</li>
<li>à une centrale à plusieurs  tranches, si l&#39;on donnera à un ou à plusieurs des membres accrédités de l&#39;équipe  de soutien la consigne de quitter le groupe réacteur simulé pendant le SEC et,  dans cette éventualité
<ol>
<li>à quel moment chaque personne  doit partir</li>
<li>à quel moment elle doit  revenir, s&#39;il y a lieu</li>
</ol>
</li>
</ol>
</li>
<li>Déterminer le point final du  SEC en précisant l&#39;état final dans lequel doit se trouver la tranche, une étape  particulière d&#39;une procédure qu&#39;il faut exécuter, ou une décision ou une action  particulière qu&#39;on attend des candidats. Le point final doit être choisi de  sorte que les examinateurs puissent l&#39;observer aisément.</li>
<li>Déterminer la façon appropriée de  réagir à chacune des défaillances principales et secondaires. Veiller à ce que  cette réponse soit claire et unique. </li>
<li>Estimer la complexité globale  du SEC en tenant compte du nombre de défaillances principales et secondaires et  du délai prévu entre les défaillances successives, de l&#39;effet des conditions  initiales de la centrale sur les actions à exécuter, et des restrictions  imposées quant à la disponibilité des membres de l&#39;équipe de soutien en salle  de commande. S&#39;assurer qu&#39;un OR compétent aurait le temps de réagir comme prévu  après chaque défaillance.</li>
<li>S&#39;assurer que le SEC exige bien  que les candidats démontrent leurs compétences dans chacun des domaines de  compétence évalués par l&#39;examen.</li>
<li>Déterminer les paramètres de  systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour être utilisée  par la suite lors de la notation de l&#39;examen. Ces paramètres doivent être  sélectionnés en fonction de leur sensibilité aux défaillances choisies et des  actions que le candidat est censé accomplir (il faut au moins enregistrer l&#39;évolution  des paramètres énumérés à l&#39;annexe C.17).</li>
<li>Remplir une fiche de contrôle  de la conception du SEC, de la façon précisée à la section 14, pour  confirmer que le SEC satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.1.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.5"></div>
<h3 id="app-c-5">C.5	Conception d&#39;un SEC pour l&#39;examen des OT0</h3>
<p>L&#39;équipe d&#39;examen doit  concevoir chaque SEC destiné aux candidats opérateurs de la tranche&nbsp;0  conformément aux critères qui suivent&nbsp;:</p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères qui suivent&nbsp;:
<ol>
<li>Préciser la puissance de chaque  réacteur,  la charge de chaque turboalternateur , l&#39;état des principaux systèmes des diverses  tranches et de la tranche&nbsp;0, l&#39;équipement hors service, l&#39;état des  activités de chargement du combustible et toute autre condition pertinente de  la centrale, comme les tests de routine et les activités d&#39;entretien en cours.</li>
<li>Seulement une partie de l&#39;équipement  hors service durant le SEC peut avoir un effet sur les actions que les  candidats devront effectuer.</li>
<li>Les conditions initiales de la  centrale ne contreviennent pas aux exigences formulées dans les documents d&#39;exploitation  de la centrale.</li>
</ol>
</li>
<li>Repérer un certain nombre de  défaillances principales, classer chacune d&#39;entre elles dans l&#39;une des  catégories définies à la sous-section 13.4.1 et  les disposer dans un ordre plausible. Sélectionner les défaillances  principales, avec l&#39;heure de leur occurrence, en fonction des critères  suivants&nbsp;:
<ol>
<li>La durée prévue du SEC ne  dépasse guère 60 minutes.</li>
<li>Le SEC compte une défaillance  principale de catégorie&nbsp;2 des systèmes exploités par les opérateurs de la  tranche&nbsp;0, pouvant avoir un effet sur la sûreté du réacteur et qui exige  des candidats une intervention complexe,
ou le SEC compte une défaillance principale de catégorie 2, 3 ou 4  survenant au niveau du groupe réacteur et qui exige des candidats une  intervention complexe au niveau des systèmes exploités par les opérateurs de la  tranche&nbsp;0.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus de  trois défaillances principales qui exigent des candidats une intervention  complexe.</li>
<li>Le SEC ne compte pas plus de  quatre défaillances principales.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à e) peuvent être dépassées si l&#39;une des défaillances  choisies créerait dans la centrale des conditions qui peuvent provoquer à leur  tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses de sûreté de la  centrale ou sur un incident survenu dans le secteur nucléaire qui pourrait  vraisemblablement se produire à la centrale.</li>
<li>Choisir une défaillance  principale qui entraîne une détérioration de l&#39;état de la tranche 0 qui aura un  effet important sur les actions que les candidats devront exécuter en réaction  à une défaillance principale subséquente.
<div className="module">
<p>De préférence, les défaillances principales devraient être ordonnées de façon à ce qu&#39;il y ait une détérioration graduelle de l&#39;état de la centrale.</p>
</div>
</li>
<li>Le délai prévu entre deux défaillances principales successives est suffisant pour qu&#39;un opérateur de la tranche 0 compétent et l&#39;équipe de soutien aient le temps de réagir de la façon attendue à la première défaillance principale avant que la suivante se produise.</li>
</ol>
<div className="module">
<p>Les  défaillances principales peuvent être tirées de la documentation  suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements importants  survenus à la centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes  de service sur d&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence  et manuels en cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>manuels de formation</li>
<li>liste des défaillances que le  simulateur peut reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
<li>Repérer un certain nombre de défaillances secondaires liées aux défaillances principales et déterminer l&#39;heure de leur occurrence. Sélectionner ces défaillances en fonction des critères suivants :
<ol>
<li>Chaque défaillance secondaire  répond aux critères énoncés à la sous-section 13.4.2.</li>
<li>Le SEC compte au moins quatre  défaillances principales et supplémentaires.</li>
<li>Le SEC ne compte pas plus de 10  défaillances principales et secondaires au total.</li>
<li>Le SEC ne compte pas plus de  cinq défaillances supplémentaires associées à une défaillance principale donnée.</li>
<li>Le SEC ne compte pas plus de  trois défaillances d&#39;indicateurs.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance secondaire qui provoque une indisponibilité de niveau 1 ou 2 d&#39;un  système spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires qui provoquent une indisponibilité d&#39;un système  spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires de systèmes de soutien en matière de sûreté en  attente.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à h) peuvent être dépassées si l&#39;une des défaillances  principales choisies créerait dans la centrale des conditions qui peuvent  provoquer à leur tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses  de sûreté de la centrale ou sur un incident survenu dans le secteur nucléaire  qui pourrait vraisemblablement se produire à la centrale.</li>
</ol>
</li>
<li>Pour satisfaire au critère 6.d de la  sous-section 14.2, il y  a lieu de choisir certaines combinaisons de défaillances et de conditions de la  centrale qui créent des situations pour lesquelles les procédures d&#39;exploitation  ne donnent pas d&#39;instructions précises.</li>
<li>Pour satisfaire au critère 9 de la  sous-section 14.2, il y  a lieu de choisir des défaillances complexes ou des conditions anormales  simultanées qui obligent les candidats à déterminer les interventions à  effectuer en priorité.</li>
<li>Déterminer, parmi la  documentation officielle, tous les documents d&#39;exploitation qu&#39;il faut utiliser  pour réagir aux défaillances principales et secondaires.</li>
<li>Fixer les conditions qui  encadrent la participation des membres de l&#39;équipe de soutien en salle de  commande, soit&nbsp;:
<ol>
<li>le nombre de personnes  disponibles et leurs rôles respectifs</li>
<li>l&#39;endroit où doit se trouver  chaque personne au début du SEC</li>
<li>le moment où chaque personne  appelée doit arriver à la tranche 0</li>
<li>si l&#39;on donnera à un ou à  plusieurs des membres accrédités de l&#39;équipe de soutien la consigne de quitter  la tranche 0 pendant le SEC et, dans cette éventualité&nbsp;:
<ol>
<li>à quel moment chaque personne  doit partir</li>
<li>à quel moment elle doit revenir  à la tranche&nbsp;0, s&#39;il y a lieu</li>
</ol>
</li>
</ol>
</li>
<li>Déterminer le point final du  SEC en précisant l&#39;état final dans lequel doit se trouver la tranche 0 ou la  centrale, une étape particulière d&#39;une procédure qu&#39;il faut exécuter, ou une  décision ou une action particulière qu&#39;on attend des candidats. Le point final  doit être choisi de sorte que les examinateurs puissent l&#39;observer aisément.</li>
<li>Déterminer la façon appropriée de  réagir à chacune des défaillances principales et secondaires. Veiller à ce que  cette réponse soit claire et unique. </li>
<li>Estimer la complexité globale  du SEC en tenant compte du nombre de défaillances principales et secondaires et  du délai prévu entre les défaillances successives, de l&#39;effet des conditions  initiales de la centrale sur les actions à exécuter, et des restrictions  imposées quant à la disponibilité des membres de l&#39;équipe de soutien en salle  de commande. S&#39;assurer qu&#39;un opérateur de la tranche&nbsp;0 compétent aurait le  temps de réagir comme prévu après chaque défaillance.</li>
<li>S&#39;assurer que le SEC exige bien  que les candidats démontrent leurs compétences dans chacun des domaines de  compétence évalués par l&#39;examen.</li>
<li>Déterminer les paramètres de  systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour être utilisée  par la suite lors de la notation de l&#39;examen. Ces paramètres doivent être  sélectionnés en fonction de leur sensibilité aux défaillances choisies et des  actions que le candidat est censé accomplir.</li>
<li>Remplir une fiche de contrôle  de la conception du SEC, de la façon précisée à la section 14, pour  confirmer que le SEC satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.2.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.6"></div>
<h3 id="app-c-6">C.6	Conception d&#39;un SEC pour l&#39;examen des CQC</h3>
<p>L&#39;équipe d&#39;examen doit  concevoir chaque SEC destiné aux candidats chefs de quart de centrale aux  centrales à une tranche conformément aux critères qui suivent&nbsp;:</p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères qui suivent&nbsp;:
<ol>
<li>Préciser la puissance du  réacteur, la charge du turboalternateur, l&#39;état des principaux systèmes de la  centrale, l&#39;équipement hors service, l&#39;état des activités de chargement du  combustible et toute autre condition pertinente de la centrale, comme les tests  de routine et les activités d&#39;entretien en cours.</li>
<li>Seulement une partie de l&#39;équipement  hors service durant le SEC peut avoir un effet sur les actions que les  candidats devront effectuer.</li>
<li>Les conditions initiales de la  centrale ne contreviennent pas aux exigences formulées dans les documents d&#39;exploitation  de la centrale.</li>
</ol>
</li>
<li>Repérer un certain nombre de  défaillances principales, autres que des défaillances principales de  catégorie&nbsp;1, classer chacune d&#39;entre elles dans l&#39;une des catégories  définies à la sous-section 13.4.1 et  les disposer dans un ordre plausible. Sélectionner les défaillances  principales, avec l&#39;heure de leur occurrence, en fonction des critères  suivants&nbsp;:
<ol>
<li>La durée prévue du SEC ne  dépasse guère 50 minutes.</li>
<li>Le SEC compte une défaillance  principale de catégorie 2 ou 3 qui exige des candidats une intervention  complexe, ou le SEC compte une défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus de trois  défaillances principales de catégories 3 et 4.</li>
<li>Le SEC ne compte pas plus de  quatre défaillances principales.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à e) peuvent être dépassées si l&#39;une des défaillances  choisies créerait dans la centrale des conditions qui peuvent provoquer à leur  tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses de sûreté de la  centrale ou sur un incident survenu dans le secteur nucléaire qui pourrait  vraisemblablement se produire à la centrale.</li>
<li>Choisir une défaillance  principale qui entraîne une détérioration de l&#39;état de la centrale qui aura un  effet important sur les actions que les candidats devront exécuter en réaction  à une défaillance principale subséquente.
<div className="module">
<p>De préférence, les défaillances principales devraient être ordonnées  de façon à ce qu&#39;il y ait une détérioration graduelle de l&#39;état de la centrale.</p>
</div>
</li>
<li>Le délai prévu entre deux  défaillances principales successives est suffisant pour qu&#39;un CQC compétent et  l&#39;équipe de soutien aient le temps de réagir de la façon attendue à la première  défaillance principale avant que la suivante se produise.
<div className="module">
<p>Les défaillances principales peuvent être tirées de la documentation  suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence  et manuels en cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>manuels de formation</li>
<li>liste des défaillances que le  simulateur peut reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
<li>Repérer un certain nombre de  défaillances secondaires liées aux défaillances principales et déterminer l&#39;heure  de leur occurrence. Sélectionner ces défaillances en fonction des critères  suivants&nbsp;:
<ol>
<li>Chaque défaillance secondaire  répond aux critères énoncés à la sous-section 13.4.2.</li>
<li>Le SEC compte au moins quatre  défaillances principales et supplémentaires.</li>
<li>Le SEC ne compte pas plus de 10  défaillances principales et secondaires au total.</li>
<li>Le SEC ne compte pas plus de  cinq défaillances supplémentaires associées à une défaillance principale donnée.</li>
<li>Le SEC ne compte pas plus de  trois défaillances d&#39;indicateurs.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance secondaire qui provoque une indisponibilité de niveau 1 ou 2 d&#39;un  système spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires qui provoquent une indisponibilité d&#39;un système  spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires de systèmes de soutien en matière de sûreté en  attente.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à h) peuvent être dépassées si l&#39;une des défaillances  principales choisies créerait dans la centrale des conditions qui peuvent  provoquer à leur tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses  de sûreté de la centrale ou sur un incident survenu dans le secteur nucléaire  qui pourrait vraisemblablement se produire à la centrale.</li>
</ol>
</li>
<li>Sélectionner des défaillances  qui, dans les conditions initiales définies de la centrale, créent des  situations anormales dont la résolution serait confiée au CQC, telles que des  défaillances qui provoquent une indisponibilité de systèmes spéciaux de sûreté  ou de systèmes de soutien en matière de sûreté en attente, une exigence des LCE  qui n&#39;est pas respectée ou des problèmes liés au contrôle de la puissance du  réacteur, au refroidissement du combustible ou au confinement de la  radioactivité.</li>
<li>Choisir des défaillances  complexes ou des conditions de la centrale simultanées qui obligent les  candidats à déterminer les interventions à effectuer en priorité.</li>
<li>Pour satisfaire au critère 10  de la sous-section 14.3, il y  a lieu de choisir certaines combinaisons de défaillances et de conditions de la  centrale qui créent des situations pour lesquelles les procédures d&#39;exploitation  ne donnent pas d&#39;instructions précises.</li>
<li>Déterminer, parmi la  documentation officielle, tous les documents d&#39;exploitation qu&#39;il faut utiliser  pour réagir aux défaillances principales et secondaires.</li>
<li>Fixer les conditions qui  encadrent la participation des membres de l&#39;équipe de soutien en salle de  commande, soit&nbsp;:
<ol>
<li>le nombre de personnes  disponibles et leurs rôles respectifs</li>
<li>l&#39;endroit où doit se trouver  chaque personne au début du SEC</li>
<li>le moment où chaque personne  appelée doit arriver en salle de commande</li>
</ol>
</li>
<li>Déterminer le point final du  SEC en précisant l&#39;état final dans lequel doit se trouver la centrale, une  étape particulière d&#39;une procédure qu&#39;il faut exécuter, ou une décision ou une  instruction particulière qu&#39;on attend des candidats. Le point final doit être  choisi de sorte que les examinateurs puissent l&#39;observer aisément.</li>
<li>Déterminer la façon appropriée de  réagir à chacune des défaillances principales et secondaires. Veiller à ce que  cette réponse soit claire et unique. </li>
<li>Estimer la complexité globale  du SEC en tenant compte du nombre de défaillances principales et secondaires et  du délai prévu entre les défaillances successives, de l&#39;effet des conditions  initiales de la centrale sur les actions à exécuter, et des restrictions  imposées quant à la disponibilité des membres de l&#39;équipe de soutien en salle  de commande. S&#39;assurer qu&#39;un CQC compétent aurait le temps de réagir comme  prévu après chaque défaillance.</li>
<li>S&#39;assurer que le SEC exige bien  que les candidats démontrent leurs compétences dans chacun des domaines de  compétence évalués par l&#39;examen.</li>
<li>Déterminer les paramètres de  systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour être utilisée  par la suite lors de la notation de l&#39;examen. Ces paramètres doivent être  sélectionnés en fonction de leur sensibilité aux défaillances choisies et des  actions que le candidat est censé accomplir (il faut au moins enregistrer l&#39;évolution  des paramètres énumérés à l&#39;annexe C.17).</li>
<li>Remplir une fiche de contrôle  de la conception du SEC, de la façon précisée à la section 14, pour  confirmer que le SEC satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.3.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.7"></div>
<h3 id="app-c-7">C.7	Conception d&#39;un SEA pour l&#39;examen des CQC</h3>
<p>L&#39;équipe d&#39;examen doit  concevoir chaque SEA destiné aux candidats chefs de quart de centrale aux  centrales à une tranche conformément aux critères qui suivent&nbsp;: </p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément au critère&nbsp;1 de l&#39;annexe&nbsp;C.6.</li>
<li>Définir un certain nombre de  défaillances principales, autres que des défaillances principales de  catégorie&nbsp;1, classer chacune d&#39;entre elles dans l&#39;une des catégories  définies à la sous-section 13.4.1 et  les disposer dans un ordre plausible. Sélectionner les défaillances  principales, avec l&#39;heure de leur occurrence, en fonction des critères  suivants&nbsp;:
<ol>
<li>La durée prévue du SEA ne  dépasse guère 25 minutes;</li>
<li>Le SEA compte une défaillance  principale de catégorie 2 ou 3 qui exige des candidats une intervention  complexe, ou le SEA compte une défaillance principale de catégorie 4;</li>
<li>Le SEA ne compte pas plus d&#39;une  défaillance principale de catégorie 4;</li>
<li>Le SEA ne compte pas plus de  deux défaillances principales;</li>
<li>Les limites supérieures  énoncées aux alinéas c) et d) peuvent être dépassées si l&#39;une des défaillances  choisies créerait dans la centrale des conditions qui peuvent provoquer à leur  tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses de sûreté de la  centrale ou sur un incident survenu dans le secteur nucléaire qui pourrait  vraisemblablement se produire à la centrale;</li>
<li>Choisir une défaillance  principale qui entraîne une détérioration de l&#39;état de la centrale qui aura un  effet important sur les actions que les candidats devront exécuter en réaction  à une défaillance principale subséquente;</li>
<li>Le SEA compte une défaillance  principale de catégorie 3 ou 4 ou au moins trois défaillances secondaires (dont  au moins deux d&#39;entre elles sont des défaillances supplémentaires) lorsque le  SEA ne compte aucune défaillance principale de catégorie 3 ou 4;</li>
<li>Le cas échéant, le délai prévu  entre deux défaillances principales successives est suffisant pour qu&#39;un CQC  compétent et l&#39;équipe de soutien aient le temps de réagir de la façon attendue  à la première défaillance principale avant que la suivante se produise.
<div className="module">
<p>Une défaillance principale peut être tirée de la documentation suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes  de service sur d&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence  et manuels en cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale</li>
<li>manuels de formation</li>
<li>liste des défaillances que le  simulateur peut reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
<li>Repérer un certain nombre de  défaillances secondaires liées aux défaillances principales et déterminer l&#39;heure  de leur occurrence. Sélectionner ces défaillances en fonction des critères  suivants&nbsp;:
<ol>
<li>Chaque défaillance secondaire  répond aux critères énoncés à la sous-section 13.4.2.</li>
<li>Le SEA compte au moins deux  défaillances principales et supplémentaires.</li>
<li>Le SEA compte au moins trois  défaillances secondaires (dont au moins deux sont des défaillances  supplémentaires) lorsque le SEA ne compte aucune défaillance principale de  catégorie 3 ou 4.</li>
<li>Le SEA ne compte pas plus de  cinq défaillances principales et secondaires au total.</li>
<li>Le SEA ne compte pas plus de  trois défaillances supplémentaires.</li>
<li>Le SEA ne compte pas plus de  deux défaillances d&#39;indicateurs.</li>
<li>Le SEA ne compte pas plus d&#39;une  défaillance secondaire qui provoque une indisponibilité de niveau 1 ou 2 d&#39;un  système spécial de sûreté.</li>
<li>Le SEA ne compte pas plus de  trois défaillances secondaires qui provoquent une indisponibilité d&#39;un système  spécial de sûreté.</li>
<li>Le SEA ne compte pas plus de  deux défaillances secondaires de systèmes de soutien en matière de sûreté en  attente.</li>
<li>Les limites supérieures  énoncées aux alinéas d) à i) peuvent être dépassées si l&#39;une des défaillances  principales choisies créerait dans la centrale des conditions qui peuvent  provoquer à leur tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses  de sûreté de la centrale ou sur un incident survenu dans le secteur nucléaire  qui pourrait vraisemblablement se produire à la centrale.</li>
<li>Les défaillances secondaires touchent  uniquement les indicateurs, équipements, composants ou dispositifs de commande  que les candidats sont censés vérifier pendant le déroulement du SEA dynamique.</li>
<li>Le nombre et la nature des  défaillances secondaires sont tels qu&#39;un gestionnaire de quart compétent aurait  le temps de réagir de la façon attendue à ces défaillances pendant le  déroulement du SEA.</li>
</ol>
</li>
<li>Sélectionner des défaillances  qui, dans les conditions initiales définies de la centrale, créent des  situations anormales dont la résolution serait confiée au CQC, telles que des  défaillances qui provoquent une indisponibilité de systèmes spéciaux de sûreté  ou de systèmes de soutien en matière de sûreté en attente, une exigence des LCE  qui n&#39;est pas respectée ou des problèmes liés au contrôle de la puissance du  réacteur, au refroidissement du combustible ou au confinement de la  radioactivité.</li>
<li>Pour satisfaire au critère 10.a  de la sous-section 14.3, il y  a lieu de choisir certaines combinaisons de défaillances et de conditions de la  centrale qui créent des situations pour lesquelles les procédures d&#39;exploitation  ne donnent pas d&#39;instructions précises.</li>
<li>Pour satisfaire au critère 9 de  la sous-section 14.3, il y  a lieu de choisir des défaillances complexes ou des conditions de la centrale  simultanées qui obligent les candidats à déterminer les interventions à  effectuer en priorité.</li>
<li>Déterminer, parmi la  documentation officielle, tous les documents d&#39;exploitation qu&#39;il faut utiliser  pour réagir aux défaillances principales et secondaires.</li>
<li>Fixer les conditions qui  encadrent la participation des membres de l&#39;équipe de soutien en salle de  commande, soit&nbsp;:
<ol>
<li>le nombre de personnes  disponibles et leurs rôles respectifs</li>
<li>l&#39;endroit où doit se trouver  chaque personne au début du SEA</li>
<li>le moment où chaque personne  appelée doit arriver en salle de commande</li>
</ol>
</li>
<li>Déterminer le point final du  SEA en précisant l&#39;état final dans lequel doit se trouver la centrale, une  étape particulière d&#39;une procédure qu&#39;il faut exécuter, ou une décision ou une  instruction particulière qu&#39;on attend des candidats. Le point final doit être  choisi de sorte que les examinateurs puissent l&#39;observer aisément.</li>
<li>Déterminer la façon appropriée de  réagir à chacune des défaillances principales et secondaires. Veiller à ce que  cette réponse soit claire et unique. </li>
<li>Estimer la complexité globale  du SEA en tenant compte du nombre de défaillances principales et secondaires,  du délai prévu entre les défaillances successives ainsi que de l&#39;effet des  conditions initiales de la centrale sur les actions à exécuter. S&#39;assurer qu&#39;un  CQC compétent aurait le temps de réagir comme prévu après chaque défaillance.</li>
<li>Déterminer les paramètres de  systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour être utilisée  par la suite lors de la notation de l&#39;examen. Ces paramètres doivent être  sélectionnés en fonction de leur sensibilité aux défaillances choisies et des  actions que le candidat est censé accomplir (il faut au moins enregistrer l&#39;évolution  des paramètres énumérés à l&#39;annexe C.17).</li>
<li>Remplir une fiche de contrôle  de la conception du SEA, de la façon précisée à la section 14, pour  confirmer que le SEA satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.3.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.8"></div>
<h3 id="app-c-8">C.8	Conception d&#39;un SEC pour l&#39;examen des CQSC</h3>
<p>L&#39;équipe d&#39;examen doit  concevoir chaque SEC destiné aux candidats chefs de quart en salle de commande  aux centrales à plusieurs tranches conformément aux critères qui suivent&nbsp;:</p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères qui suivent&nbsp;:
<ol>
<li>Préciser la puissance de chaque  réacteur, la charge de chaque  turboalternateur, l&#39;état des principaux systèmes des diverses  tranches, l&#39;équipement hors service, l&#39;état des activités de chargement du  combustible et toute autre condition pertinente de la centrale, comme les tests  de routine et les activités d&#39;entretien en cours.</li>
<li>Seulement une partie de l&#39;équipement  hors service durant le SEC peut avoir un effet sur les actions que les candidats  devront effectuer.</li>
<li>Les conditions initiales de la  centrale ne contreviennent pas aux exigences formulées dans les documents d&#39;exploitation  de la centrale.</li>
</ol>
</li>
<li>Définir un certain nombre de  défaillances principales, autres que des défaillances principales de  catégorie&nbsp;1, classer chacune d&#39;entre elles dans l&#39;une des catégories  définies à la sous-section 13.4.1 et  les disposer dans un ordre plausible. Sélectionner les défaillances  principales, avec l&#39;heure de leur occurrence, en fonction des critères  suivants&nbsp;:
<ol>
<li>La durée prévue du SEC ne  dépasse guère 50 minutes.</li>
<li>Le SEC compte une défaillance  principale de catégorie 2 ou 3 qui exige des candidats une intervention  complexe, ou le SEC compte une défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance principale de catégorie 4.</li>
<li>Le SEC ne compte pas plus de  trois défaillances principales de catégories 3 et 4.</li>
<li>Le SEC ne compte pas plus de  quatre défaillances principales.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à e) peuvent être dépassées si l&#39;une des défaillances  choisies créerait dans la centrale des conditions qui peuvent provoquer à leur  tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses de sûreté de la  centrale ou sur un incident survenu dans le secteur nucléaire qui pourrait  vraisemblablement se produire à la centrale.</li>
<li>Choisir une défaillance  principale qui entraîne une détérioration de l&#39;état de la centrale qui aura un  effet important sur les actions que les candidats devront exécuter en réaction  à une défaillance principale subséquente.
<div className="module">
<p>De préférence, les défaillances principales devraient être ordonnées  de façon à ce qu&#39;il y ait une détérioration graduelle de l&#39;état de la centrale.</p>
</div>
</li>
<li>Le délai prévu entre deux défaillances principales successives est suffisant pour qu&#39;un CQSC compétent et l&#39;équipe de soutien aient le temps de réagir de la façon attendue à la première défaillance principale avant que la suivante se produise. </li>
</ol>
<div className="module">
<p>Les défaillances principales peuvent être  tirées de la documentation suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements importants survenus à la  centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes de service sur l&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence et manuels en  cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres documents techniques  de base</li>
<li>rapport d&#39;analyse de la sûreté de la centrale</li>
<li>manuels de formation</li>
</ul>
</div>
</li>
<li>Repérer un certain nombre de  défaillances secondaires liées aux défaillances principales et déterminer l&#39;heure  de leur occurrence. Sélectionner ces défaillances en fonction des critères  suivants&nbsp;:
<ol>
<li>Chaque défaillance secondaire  répond aux critères énoncés à la sous-section 13.4.2.</li>
<li>Le SEC compte au moins quatre  défaillances principales et supplémentaires.</li>
<li>Le SEC ne compte pas plus de 10  défaillances principales et secondaires au total.</li>
<li>Le SEC ne compte pas plus de  cinq défaillances supplémentaires associées à une défaillance principale donnée.</li>
<li>Le SEC ne compte pas plus de  trois défaillances d&#39;indicateurs.</li>
<li>Le SEC ne compte pas plus d&#39;une  défaillance secondaire qui provoque une indisponibilité de niveau 1 ou 2 d&#39;un  système spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires qui provoquent une indisponibilité d&#39;un système  spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de  trois défaillances secondaires de systèmes de soutien en matière de sûreté en  attente.</li>
<li>Les limites supérieures  énoncées aux alinéas c) à h) peuvent être dépassées si l&#39;une des défaillances  principales choisies créerait dans la centrale des conditions qui peuvent  provoquer à leur tour d&#39;autres défaillances, si l&#39;on s&#39;appuie sur les analyses  de sûreté de la centrale ou sur un incident survenu dans le secteur nucléaire  qui pourrait vraisemblablement se produire à la centrale.</li>
</ol>
</li>
<li>Sélectionner des  défaillances qui, dans les conditions initiales définies de la centrale, créent  des situations anormales dont la résolution serait confiée au CQSC, telles que  des défaillances qui provoquent une indisponibilité de systèmes spéciaux de  sûreté ou de systèmes de soutien en matière de sûreté en attente, une exigence des  LCE qui n&#39;est pas respectée ou des problèmes liés au contrôle de la puissance  du réacteur, au refroidissement du combustible ou au confinement de la  radioactivité.</li>
<li>Choisir des défaillances  complexes ou des conditions de la centrale simultanées qui obligent les  candidats à déterminer les interventions à effectuer en priorité.</li>
<li>Pour satisfaire  au critère 12 de la sous-section 14.4, il y a lieu de choisir  certaines combinaisons de défaillances et de conditions de la centrale qui  créent des situations pour lesquelles les procédures d&#39;exploitation ne donnent  pas d&#39;instructions précises.</li>
<li>Déterminer, parmi  la documentation officielle, tous les documents d&#39;exploitation qu&#39;il faut  utiliser pour réagir aux défaillances principales et secondaires.</li>
<li>Fixer les  conditions qui encadrent la participation des membres de l&#39;équipe de soutien en  salle de commande, soit&nbsp;:
<ol>
<li>le nombre de personnes disponibles et leurs rôles respectifs</li>
<li>l&#39;endroit où doit se trouver chaque personne au début du SEC</li>
<li>le moment où chaque personne appelée doit arriver au groupe réacteur  simulé ou à la tranche 0</li>
<li>si l&#39;on donnera à un ou à  plusieurs des membres accrédités de l&#39;équipe de soutien la consigne de quitter  le groupe réacteur simulé ou la tranche 0 pendant le SEC et, dans cette  éventualité
<ol>
<li>à quel moment chaque personne  doit partir</li>
<li>à quel moment elle doit revenir  à la tranche pertinente, s&#39;il y a lieu</li>
</ol>
</li>
</ol>
<li>En cas de SEC au  cours duquel les candidats doivent donner des directives précises concernant l&#39;exécution  d&#39;une séquence complexe d&#39;interventions de l&#39;opérateur pour satisfaire au  critère 9 de la sous-section 14.4, déterminer la suite  précise des actions que les candidats doivent demander d&#39;exécuter.</li>
<li>Déterminer le  point final du SEC en précisant l&#39;état final dans lequel doit se trouver la centrale,  une étape particulière d&#39;une procédure qu&#39;il faut exécuter, ou une décision ou  une instruction particulière qu&#39;on attend des candidats. Le point final doit  être choisi de sorte que les examinateurs puissent l&#39;observer aisément.</li>
<li>Déterminer la  façon appropriée de réagir à chacune des défaillances principales et  secondaires. Veiller à ce que cette réponse soit claire et unique. </li>
<li>Estimer la  complexité globale du SEC en tenant compte du nombre de défaillances  principales et secondaires et du délai prévu entre les défaillances  successives, de l&#39;effet des conditions initiales de la centrale sur les actions  à exécuter, et des restrictions imposées quant à la disponibilité des membres  de l&#39;équipe de soutien en salle de commande. S&#39;assurer qu&#39;un CQSC compétent  aurait le temps de réagir comme prévu après chaque défaillance.</li>
<li>S&#39;assurer que le  SEC exige bien des candidats qu&#39;ils démontrent leurs compétences dans chacun  des domaines de compétence évalués par l&#39;examen.</li>
<li>Déterminer les  paramètres de systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour  être utilisée par la suite lors de la notation de l&#39;examen. Ces paramètres  doivent être sélectionnés en fonction de leur sensibilité aux défaillances  choisies et des actions que le candidat est censé accomplir (il faut au moins enregistrer  l&#39;évolution des paramètres énumérés à l&#39;annexe C.17).</li>
<li>Remplir une fiche  de contrôle de la conception du SEC, de la façon précisée à la section 14, pour confirmer que le SEC  satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration  de l&#39;examen d&#39;accréditation conformément aux exigences énoncées à la  sous-section 14.4.</li>
<li>Élaborer chaque  guide d&#39;examen conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.9"></div>
<h3 id="app-c-9">C.9	Conception d&#39;un SED pour l&#39;examen des CQSC</h3>
<p>L&#39;équipe d&#39;examen doit concevoir chaque SED destiné aux candidats chefs de quart en salle de commande aux centrales à plusieurs tranches conformément aux critères qui suivent :</p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères qui suivent&nbsp;:
<ol>
<li>Préciser la puissance de chaque  réacteur, la charge de chaque  turboalternateur, l&#39;état des principaux systèmes des diverses  tranches, l&#39;équipement hors service, l&#39;état des activités de chargement du  combustible et toute autre condition pertinente de la centrale, comme les tests  de routine et les activités d&#39;entretien en cours.</li>
<li>Seulement une partie de l&#39;équipement  hors service durant le SEC peut avoir un effet sur le diagnostic attendu ou le  déroulement des mesures à prendre.</li>
<li>Les conditions initiales de la  centrale ne contreviennent pas aux exigences formulées dans les documents d&#39;exploitation  de la centrale.</li>
</ol>
</li>
<li>Sélectionner des défaillances  principales et secondaires qui, dans les conditions initiales définies de la  centrale, créent des situations anormales suscitant au moins une préoccupation  sérieuse en ce qui concerne un ou plusieurs éléments suivants&nbsp;:
<ol>
<li>le contrôle de la puissance du  réacteur</li>
<li>le refroidissement du  combustible</li>
<li>le confinement de la  radioactivité</li>
<li>la défaillance des systèmes  spéciaux de sûreté</li>
<li>la défaillance des systèmes de  soutien en matière de sûreté en attente</li>
<li>le respect des LCE</li>
<li>l&#39;exploitation sûre des  systèmes et de l&#39;équipement de la centrale nucléaire</li>
<li>la sécurité du personnel de la  centrale</li>
<li>la protection de l&#39;environnement</li>
</ol>
</li>
<li>Sélectionner une défaillance principale  en fonction des critères suivants&nbsp;:
<ol>
<li>La durée prévue du SED ne  dépasse guère 15 minutes.</li>
<li>La défaillance principale est  une défaillance principale de catégorie 2, 3 ou 4 qui, dans les conditions  initiales définies de la centrale, exige une analyse suffisamment complexe des  renseignements disponibles permettant de poser le bon diagnostic et de déterminer  la marche à suivre appropriée.</li>
<li>Les défaillances principales ne  créent pas de conditions anormales de la centrale susceptibles d&#39;exiger la mise  en œuvre de plus de deux procédures d&#39;exploitation ou marches à suivre  complexes.</li>
<li>Lorsque la défaillance  principale se produit à la centrale, le candidat doit disposer d&#39;information  suffisante pour poser le bon diagnostic pendant le déroulement du SED.
<div className="module">
<p>Les défaillances principales  peuvent être tirées de la documentation suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements importants survenus à la  centrale et dans le reste du secteur nucléaire </li>
<li>manuels d&#39;exploitation et notes de service sur l&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence et manuel en cas  d&#39;incidents anormaux</li>
<li>manuels de conception et autres documents techniques  de base</li>
<li>rapport d&#39;analyse de la sûreté de la centrale  nucléaire</li>
<li>manuels de formation</li>
<li>liste des défaillances que le simulateur peut  reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
<li>Définir le  diagnostic précis que les candidats sont censés poser et déterminer les  renseignements exigés en salle de commande et sur le terrain pour poser ce  diagnostic.</li>
<li>Repérer un  certain nombre de défaillances secondaires liées à la défaillance principale et  déterminer l&#39;heure de leur occurrence. Sélectionner ces défaillances en  fonction des critères suivants&nbsp;:
<ol>
<li>Chaque défaillance secondaire répond aux critères énoncés à la  sous-section 13.4.2.</li>
<li>Le SED compte au moins une défaillance secondaire.</li>
<li>Le SED ne compte pas plus de quatre défaillances secondaires.</li>
<li>Le SEC ne compte pas plus d&#39;une défaillance secondaire qui provoque  une indisponibilité de niveau 1 ou 2 d&#39;un système spécial de sûreté.</li>
<li>Le SEC ne compte pas plus de trois défaillances secondaires qui  provoquent une indisponibilité d&#39;un système spécial de sûreté.</li>
<li>Le SED ne compte pas plus de trois défaillances secondaires de  systèmes de soutien en matière de sûreté en attente.</li>
<li>Les défaillances secondaires touchent uniquement les indicateurs,  équipements, composants ou dispositifs de commande que les candidats sont  censés vérifier pendant le déroulement du SED.</li>
<li>Le nombre et la nature des défaillances secondaires sont tels qu&#39;un  CQSC compétent serait en mesure de réagir de la façon attendue à ces  défaillances et de poser le diagnostic requis pendant le déroulement du SED.</li>
</ol>
</li>
<li>Pour satisfaire au critère 12 de la  sous-section 14.4, il y  a lieu de choisir certaines combinaisons de défaillances et de conditions de la  centrale qui créent des situations pour lesquelles les procédures d&#39;exploitation  ne donnent pas d&#39;instructions précises.</li>
<li>Pour satisfaire au critère 10 de la  sous-section 14.4, il y  a lieu de choisir des conditions anormales complexes et simultanées qui  obligent les candidats à déterminer les interventions à effectuer en priorité.</li>
<li>Déterminer, parmi la documentation officielle, tous les documents d&#39;exploitation  qu&#39;il faut utiliser pour réagir aux défaillances principales et secondaires.</li>
<li>Estimer le temps qui sera accordé aux candidats pour poser le bon  diagnostic en fonction des attentes de la centrale nucléaire en matière de  rendement, applicables au poste de CQSC. Ce temps définit le point final de la  partie dynamique du SED, le moment où le simulateur est arrêté et le début de l&#39;interrogatoire  des candidats.</li>
<li>Déterminer la marche à suivre pertinente pour réagir aux défaillances  sélectionnées.
<ol>
<li>s&#39;assurer que cette marche à suivre est claire</li>
<li>s&#39;assurer que toute action à poser pour réagir à une panne d&#39;une  action automatique majeure avant d&#39;effectuer le diagnostic de la défaillance  principale est claire et n&#39;a pas d&#39;effets sur l&#39;état de la tranche susceptibles  d&#39;empêcher la formulation du bon diagnostic ou de fausser ce diagnostic de  manière excessive</li>
</ol>
</li>
<li>Cerner les préoccupations importantes liées à l&#39;état de la centrale  à la fin du SED et les disposer dans les catégories énumérées au paragraphe 2  ci-dessus.</li>
<li>Estimer la complexité globale  du SED en tenant compte du nombre de défaillances, du délai prévu entre les  défaillances successives ainsi que de l&#39;effet des conditions initiales de la  centrale sur les actions à exécuter. S&#39;assurer qu&#39;un CQSC compétent aurait  assez de temps et d&#39;information pour réagir de la façon attendue aux  défaillances secondaires et pour poser le bon diagnostic pendant le déroulement  du SED.</li>
<li>Déterminer les paramètres de  systèmes dont l&#39;évolution sera enregistrée pendant l&#39;examen pour être utilisée  par la suite lors de la notation de l&#39;examen. Ces paramètres doivent être  sélectionnés en fonction de leur sensibilité aux défaillances choisies et des  actions que le candidat est censé accomplir (il faut au moins enregistrer l&#39;évolution  des paramètres énumérés à l&#39;annexe C.17).</li>
<li>Remplir une fiche de contrôle  de la conception du SED, de la façon précisée à la section 14, pour  confirmer que le SED satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.4.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.10"></div>
<h3 id="app-c-10">C.10	Conception d&#39;un SVPC pour l&#39;examen des CQSC</h3>
<p>L&#39;équipe d&#39;examen doit  concevoir le SVPC destiné aux candidats chefs de quart en salle de commande aux  centrales à plusieurs tranches conformément aux critères qui suivent&nbsp;:</p>
<ol>
<li>Définir les conditions  initiales de la centrale nucléaire à la section&nbsp;2 du guide d&#39;examen  conformément aux critères suivants&nbsp;:
<ol>
<li>Les conditions initiales  comprennent la puissance de chaque réacteur, la charge de chaque turboalternateur  , l&#39;état des principaux systèmes des diverses tranches, l&#39;équipement hors  service, l&#39;état des activités de chargement du combustible et toute autre  condition pertinente de la centrale, comme les tests et les activités d&#39;entretien  en cours.</li>
<li>Seulement une partie de l&#39;équipement  hors service peut avoir un effet sur l&#39;importance des anomalies observables sur  les panneaux de commande ou sur le déroulement des mesures à prendre.</li>
<li>L&#39;équipement hors service  sélectionné ne crée pas de conditions initiales de la centrale qui  contreviennent aux exigences formulées dans les documents d&#39;exploitation de la  centrale.</li>
</ol>
</li>
<li>Identifier une tâche de  vérification à effectuer par les candidats et un certain nombre d&#39;anomalies de  panneaux de commande liées à cette tâche. Sélectionner la tâche de vérification  et les anomalies de panneaux de commande en fonction des critères  suivants&nbsp;:
<ol>
<li>La durée de la tâche  sélectionnée ne dépasse guère 15 minutes.</li>
<li>La tâche est liée aux  responsabilités du CQSC, telles que la vérification indépendante de la  configuration des systèmes et de l&#39;état de la tranche, la vérification de l&#39;état  des systèmes, des tranches et de la centrale avant d&#39;accorder une autorisation,  ou la vérification des sources froides disponibles.</li>
<li>Le SVPC compte au moins trois  anomalies de panneaux de commande indiquant des situations anormales dont la  résolution serait confiée au CQSC, telles que des configurations anormales des  systèmes, des indisponibilités des systèmes spéciaux de sûreté ou des systèmes de  soutien en matière de sûreté en attente, le non-respect d&#39;une exigence des LCE  ou des problèmes liés au contrôle de la puissance du réacteur, au  refroidissement du combustible ou au confinement de la radioactivité.</li>
<li>Le SVPC ne compte pas plus de  dix anomalies de panneaux de commande.</li>
<li>Les anomalies des panneaux de  commande peuvent être détectées sur les panneaux de la salle de commande lors  de l&#39;exécution de la tâche de vérification.</li>
<li>Pour satisfaire au critère 12 de la  sous-section 14.4, il y  a lieu de choisir quelques anomalies de panneaux de commande qui créent des  situations pour lesquelles les procédures d&#39;exploitation ne donnent pas d&#39;instructions  précises.</li>
<li>Un CQSC compétent serait en  mesure d&#39;accomplir la tâche sélectionnée dans le délai imparti.
<div className="module">
<p>La tâche de vérification et les anomalies de panneaux de commande  peuvent être tirées de la documentation suivante&nbsp;:</p>
<ul>
<li>rapports d&#39;événements  importants survenus à la centrale et dans le reste du secteur nucléaire</li>
<li>manuels d&#39;exploitation et notes  de service sur l&#39;exploitation</li>
<li>procédures d&#39;exploitation d&#39;urgence  et manuel en cas d&#39;incidents anormaux</li>
<li>manuels de conception et autres  documents techniques de base</li>
<li>rapport d&#39;analyse de la sûreté  de la centrale nucléaire</li>
<li>manuels de formation</li>
<li>liste des défaillances que le  simulateur peut reproduire et scénarios de formation sur simulateur</li>
</ul>
</div>
</li>
</ol>
</li>
<li>Déterminer les indications de  la salle de commande associées à chaque anomalie d&#39;un panneau de commande et  toute information disponible sur le terrain nécessaire pour évaluer la  condition anormale correspondante.</li>
<li>Identifier tout document d&#39;exploitation  qui doit servir à effectuer la tâche de vérification, à repérer les anomalies  de panneaux de commande existantes et à résoudre celles-ci en utilisant la  documentation officielle.</li>
<li>Déterminer la suite des actions  à poser pour résoudre chaque anomalie d&#39;un panneau de commande. S&#39;assurer que  cette marche à suivre est claire. </li>
<li>Déterminer le temps qui sera  accordé aux candidats pour examiner et effectuer la tâche de vérification.  Déterminer également le temps qui sera accordé aux candidats pour déterminer l&#39;importance  des anomalies de panneaux de commande et la marche à suivre pour les résoudre  en fonction des attentes de la centrale nucléaire en matière de rendement,  applicables au poste de CQSC.</li>
<li>Estimer la complexité globale  du SVPC en tenant compte du nombre d&#39;anomalies de panneaux de commande ainsi  que de la difficulté à déterminer leur importance et de la marche à suivre pour  les résoudre. S&#39;assurer qu&#39;un CQSC compétent aurait le temps d&#39;effectuer la tâche  de vérification et de décider de la façon de résoudre les anomalies de panneaux  de commande comme prévu.</li>
<li>Remplir une fiche de contrôle  de la conception du SVPC, de la façon précisée à la section 14, pour  confirmer que le SVPC satisfait aux critères de la fiche.</li>
<li>Achever l&#39;élaboration de l&#39;examen  d&#39;accréditation conformément aux exigences énoncées à la sous-section 14.4.</li>
<li>Élaborer chaque guide d&#39;examen  conformément aux exigences énoncées à la sous-section&nbsp;14.5.</li>
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
<div id="C.11"></div>
<h3 id="app-c-11">C.11	Page couverture d&#39;un guide d&#39;examen portant sur les habiletés</h3>
<p>Guide d&#39;examen</p>
<p>Centrale&nbsp;:</p>
<p>Date  de l&#39;examen&nbsp;:<br />
Titre du  scénario&nbsp;:<br />
Type de  scénario&nbsp;:<br />
Numéro du  scénario&nbsp;:</p>
<p>Durée estimée&nbsp;:                                                                       </p>
<p>Durée  réelle&nbsp;:</p>
<p>Nom complet du  candidat&nbsp;:<br />
Poste du  candidat&nbsp;:</p>
<p>Membres de l&#39;équipe  d&#39;examen&nbsp;:       [Noms en lettres  moulées]</p>
<p><strong>Tenue de l&#39;examen <br />
approuvée par&nbsp;</strong>:                      </p>
<p>________________________  <br />
[Nom  en lettres moulées et signature]            <br />
Chef  de la formation </p>
<p> _________<br />
Date</p>
<p><strong>Examinateur en  chef&nbsp;:</strong>                        </p>
<p>_______________________<br />
[Nom  en lettres moulées et signature] </p>
<p>________<br />
Date</p>
<p><strong>Examinateur(s)&nbsp;: </strong>                    </p>
<p>_______________________             <br />
[Nom  en lettres moulées et signature]            </p>
<p> ________<br />
Date </p>
<p><strong>Autorisé par :</strong></p>
<p>_______________________              <br />
[Nom  en lettres moulées et signature]<br />
Chef  de la formation </p>
<p>_________<br />
Date</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right">
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }