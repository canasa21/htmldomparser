import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.13.1 : Garanties et comptabilité des matières nucléaires", 
                dateModified: "2017-02-21",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-13-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Préface</h2>  <p>Ce document dapplication de la réglementation fait partie de la série de documents dapplication de la réglementation de la Commission canadienne de sûreté nucléaire (CCSN) relative aux garanties et à la non-prolifération. La liste complète des séries figure à la fin de ce document et elle peut être consultée à partir du <a href="/eng/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le document dapplication de la réglementation REGDOC-2.13.1, <em>Garanties et comptabilité des matières nucléaires</em>, énonce les exigences et lorientation relatives aux programmes de garanties des demandeurs et des titulaires de permis qui possèdent des matières nucléaires, effectuent des types déterminés de travaux de recherche et de développement liés au cycle du combustible nucléaire ou qui procèdent à des types déterminés dactivités de fabrication à caractère nucléaire. Les exigences et lorientation incluses dans ce document sont essentielles à la conformité du Canada aux accords relatifs aux garanties conclus avec lAgence internationale de lénergie atomique (AIEA). Elles sont aussi compatibles avec les pratiques nationales et internationales modernes.</p>  <p>Ce document remplace les documents RD-336, <em>Comptabilisation et déclaration des matières nucléaires</em>, et GD-336, <em>Document dorientation pour la comptabilisation et la déclaration des matières nucléaires</em>, qui ont été publiés en juin 2010.</p>  <p>Le REGDOC-2.13.1 se veut un élément du fondement dautorisation dune installation ou dune activité réglementée relevant du champ dapplication du document. Il sera intégré soit aux conditions et aux mesures de sûreté et de réglementation dun permis, soit aux mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande.</p>  <p>Pour les nouveaux demandeurs : ce document servira à évaluer les nouvelles demandes de permis.</p>  <p>Lorientation contenue dans ce document vise à informer le demandeur, à expliquer plus en détail des exigences ou à fournir de lorientation aux demandeurs et aux titulaires de permis sur la façon de répondre aux exigences. Le document précise aussi comment le personnel de la CCSN évalue des problèmes particuliers ou des données particulières pendant son examen des demandes de permis. Les titulaires de permis doivent examiner cette orientation et en tenir compte. Sils adoptent des approches différentes, ils devraient alors démontrer que celles-ci répondent aux exigences réglementaires.</p>  <p>Pour les installations existantes : les exigences contenues dans ce document ne sappliquent que si elles ont été incluses, en totalité ou en partie, dans le permis ou le fondement dautorisation.</p>  <p>Une approche graduelle et proportionnelle aux risques peut être définie et utilisée dans lapplication des exigences et de lorientation énoncée dans ce document dapplication de la réglementation. Lutilisation dune approche graduelle ne constitue pas un assouplissement des exigences qui sont appliquées de façon proportionnelle aux risques et aux caractéristiques particulières de linstallation ou de lactivité.</p>  <p>Le demandeur ou le titulaire de permis peut soumettre un dossier démontrant que lintention dune exigence est prise en compte par dautres moyens et démontrée à laide de preuves justificatives.</p>
<div className="alert alert-info">
<p><strong>Remarque importante :</strong> Ce document fait partie du fondement dautorisation dune installation ou dune activité réglementée si on sy réfère directement ou indirectement dans le permis (notamment dans des documents cités en référence du titulaire de permis).</p>
<p>Le fondement dautorisation établit les conditions limites du rendement acceptable pour une installation ou une activité réglementée et établit les bases du programme de conformité de la CCSN à légard de cette installation ou activité réglementée.</p>
<p>Dans le cas où le document est un élément du fondement dautorisation, le terme « doit » est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime une option ou une mesure conseillée ou acceptable dans les limites de ce document dapplication de la réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>
<p>Aucune information contenue dans le présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité de prendre connaissance de tous les règlements et de toutes les conditions de permis applicables et dy adhérer.</p>  </div>
<div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente et obligations</a>
<ul>
<li><a href="#sec1-3-1">1.3.1 L&eacute;gislation et r&egrave;glements</a></li>
<li><a href="#sec1-3-2">1.3.2 Accords avec l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique relatifs aux garanties</a></li>
</ul></li>
</ul></li>
<li><a href="#sec2">2. Classification des mati&egrave;res nucl&eacute;aires</a>
<ul>
<li><a href="#sec2-1">2.1 Mati&egrave;res du groupe 1</a>
<ul>
<li><a href="#sec2-1-1">2.1.1 Mati&egrave;res du groupe 1A &ndash; Garanties int&eacute;grales</a></li>
<li><a href="#sec2-1-2">2.1.2 Mati&egrave;res du groupe 1B &ndash; Exemption du r&eacute;gime des garanties</a></li>
</ul></li>
<li><a href="#sec2-2">2.2 Mati&egrave;res du groupe 2 &ndash; Concentr&eacute;s de minerai</a></li>
</ul></li>
<li><a href="#sec3">3. Cat&eacute;gorisation des titulaires de permis</a>
<ul>
<li><a href="#sec3-1">3.1 Installation</a></li>
<li><a href="#sec3-2">3.2 Emplacement hors installation</a></li>
<li><a href="#sec3-3">3.3 Autre titulaire de permis</a></li>
</ul></li>
<li><a href="#sec4">4. Programme de garanties</a></li>
<li><a href="#sec5">5. &Eacute;quipement et sceaux de garanties</a></li>
<li><a href="#sec6">6. Acc&egrave;s de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique</a>
<ul>
<li><a href="#sec6-1">6.1 Inspections</a></li>
<li><a href="#sec6-2">6.2 V&eacute;rification des renseignements descriptifs</a></li>
<li><a href="#sec6-3">6.3 Acc&egrave;s compl&eacute;mentaire</a></li>
<li><a href="#sec6-4">6.4 Acc&egrave;s &agrave; l&rsquo;&eacute;quipement de l&rsquo;AIEA</a></li>
</ul></li>
<li><a href="#sec7">7. Comptabilit&eacute; des mati&egrave;res nucl&eacute;aires</a>
<ul>
<li><a href="#sec7-1">7.1 Mesure des mati&egrave;res nucl&eacute;aires</a></li>
<li><a href="#sec7-2">7.2 Suivi des stocks</a></li>
<li><a href="#sec7-3">7.3 Inventaire du stock physique</a></li>
<li><a href="#sec7-4">7.4 Diff&eacute;rence d&rsquo;inventaire</a></li>
<li><a href="#sec7-5">7.5 Obligations &agrave; l&rsquo;&eacute;tranger</a></li>
</ul></li>
<li><a href="#sec8">8. Communication de renseignements</a>
<ul>
<li><a href="#sec8-1">8.1 Rapports de comptabilit&eacute; des mati&egrave;res nucl&eacute;aires</a>
<ul>
<li><a href="#sec8-1-1">8.1.1 S&eacute;curit&eacute; de l&rsquo;information et production de rapports par voie &eacute;lectronique</a></li>
<li><a href="#sec8-1-2">8.1.2 Document de variations de stock</a></li>
<li><a href="#sec8-1-3">8.1.3 Grand livre g&eacute;n&eacute;ral</a></li>
<li><a href="#sec8-1-4">8.1.4 Liste des articles en stock</a></li>
<li><a href="#sec8-1-5">8.1.5 Sommaire des stocks par point de mesure principal-physique</a></li>
<li><a href="#sec8-1-6">8.1.6 &Eacute;tat de rapprochement</a></li>
<li><a href="#sec8-1-7">8.1.7 Sommaire des stocks de mati&egrave;res r&eacute;glement&eacute;es</a></li>
</ul></li>
<li><a href="#sec8-2">8.2 Renseignements descriptifs</a></li>
<li><a href="#sec8-3">8.3 Renseignements op&eacute;rationnels</a></li>
<li><a href="#sec8-4">8.4 Renseignements requis par le <em>Protocole additionnel</em></a></li>
</ul></li>
<li><a href="#sec9">9. Conservation des documents</a></li>
<li><a href="#appA">Annexe A : Liste des activit&eacute;s de fabrication &agrave; caract&egrave;re nucl&eacute;aire &agrave; d&eacute;clarer</a></li>
<li><a href="#appB">Annexe B : Liste des activit&eacute;s de recherche et de d&eacute;veloppement  li&eacute;es au cycle du combustible nucl&eacute;aire</a></li>
<li><a href="#appC">Annexe C : Orientation concernant les mati&egrave;res non soumises aux garanties</a></li>
<li><a href="#appD">Annexe D : Tableaux de r&eacute;f&eacute;rence pour la  comptabilit&eacute; des mati&egrave;res nucl&eacute;aires</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
</ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>Le <em>Traité sur la non-prolifération des armes nucléaires</em> (TNP) [1] est la pierre angulaire du régime international de non-prolifération nucléaire. Les États qui ont signé le TNP ont des engagements et des obligations dans les domaines de la non-prolifération, du désarmement et de lutilisation pacifique des matières et des technologies nucléaires.</p>  <p>Pour respecter les engagements quil a pris en vertu du TNP, le Canada a conclu avec lAgence internationale de lénergie atomique (AIEA) des accords contraignants relatifs aux garanties, qui prévoient lapplication des garanties de lAIEA au Canada. En vertu de ces accords, le Canada a lobligation de présenter à lAIEA des rapports sur toutes les matières nucléaires et sur certains types dactivités de recherche et de fabrication dans le domaine nucléaire au Canada, et daccepter que lAIEA procède à des inspections de ces domaines.</p>  <p>En vertu de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/index.html"><em>Loi sur la sûreté et la réglementation nucléaires</em></a> (LSRN), la Commission canadienne de sûreté nucléaire (CCSN) a le mandat dassurer la conformité du Canada aux accords mentionnés plus haut. Pour ce faire, elle impose aux titulaires de permis des obligations relatives aux rapports requis par lAIEA et à laccès dont lAIEA a besoin pour les vérifier.</p>
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
<h3 id="sec1-1">1.1. Objet</h3>  <p>Le REGDOC-2.13.1, <em>Garanties et comptabilité des matières nucléaires</em>, énonce les exigences et lorientation de la CCSN relatives à la mise sur pied et à la tenue à jour dun programme de garanties.</p>
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
<h3 id="sec1-2">1.2. Portée</h3>  <p>Ce document précise linformation, laccès et le soutien que les titulaires de permis doivent fournir à la CCSN et à lAIEA pour faciliter le respect des accords relatifs aux garanties conclus par le Canada avec lAIEA et des obligations des titulaires de permis établies dans le <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>Règlement général sur la sûreté et la réglementation nucléaires</em></a> (RGSRN).</p>  <p>Le terme « garanties » fait référence à un système international de surveillance et de vérification des matières nucléaires, administré au Canada par la CCSN et vérifié par lAIEA, qui vise à empêcher le détournement de ces matières des activités pacifiques légitimes. Le TNP exige que les garanties de lAIEA sappliquent aux matières nucléaires, quelle que soit la quantité, quand elles sont présentes nimporte où au Canada.</p>  <p>Le REGDOC-2.13.1, <em>Garanties et comptabilité des matières nucléaires</em>, fournit les exigences et lorientation relatives aux garanties pour les titulaires de permis qui :</p>
<ol className="list-bullet-none">
<li>a) possèdent des matières nucléaires, soit du plutonium 239, de luranium 233, de luranium enrichi en isotopes 235 ou 233, de luranium renfermant un mélange naturel disotopes, de luranium appauvri en isotope 235 ou du thorium</li>
<li>b) exécute des activités de fabrication à caractère nucléaire précisées à l<a href="#appA">annexe A (Liste des activités de fabrication à caractère nucléaire à déclarer)</a></li>
<li>c) exécutent des activités de recherche et de développement liées au cycle du combustible nucléaire définies à l<a href="#appB">annexe B (Liste des activités de recherche et de développement liées au cycle du combustible nucléaire)</a></li>
</ol>   <p>Les matières énumérées ci-après ne sont pas considérées comme des matières nucléaires et ne sont donc pas soumises aux garanties au Canada.</p>
<ol className="list-bullet-none">
<li>a) luranium ou le thorium qui se trouve à létat naturel dans le roc ou le sol, y compris le minerai duranium ou de thorium</li>
<li>b) les matières nucléaires en transit au Canada</li>
<li>c) luranium, le plutonium 239 et le thorium qui sont dans une forme dutilisation finale non nucléaire et dont luranium, le plutonium 239 et le thorium sont, dans les faits, irrécupérables</li>
</ol>  <p>On peut trouver une orientation supplémentaire au sujet des matières qui ne sont pas soumises aux garanties à l<a href="#appC">annexe C (Orientation concernant les matières non soumises aux garanties)</a>.</p>
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
<h3 id="sec1-3">1.3	Législation pertinente et obligations</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3.1"></div>
<h4 id="sec1-3-1">1.3.1	Législation et règlements</h4>  <p>Les dispositions de la LSRN et de ses règlements dapplication mentionnées ci-après sappliquent à ce document.</p>
<ul>
<li>Le sous alinéa 9a)(iii) de la LSRN établit quun des éléments de la mission de la Commission consiste à faire en sorte que « ces activités soient exercées en conformité avec les mesures de contrôle et les obligations internationales que le Canada a assumées ».</li>
<li>Lalinéa 24(4)b) de la LSRN stipule que « la Commission ne délivre, ne renouvelle, ne modifie ou ne remplace une licence ou un permis ou nen autorise le transfert que si elle est davis que lauteur de la demande ou, sil sagit dune demande dautorisation de transfert, le cessionnaire ... prendra, dans le cadre de ces activités, les mesures voulues pour préserver la santé et la sécurité des personnes, pour protéger lenvironnement, pour maintenir la sécurité nationale et pour respecter les obligations internationales que le Canada a assumées ».</li>
<li>Le paragraphe 27b) de la LSRN stipule que « les titulaires de licence ou de permis et les personnes visées par règlement font les rapports réglementaires... et les déposent de la façon prévue par règlement ».</li>
<li>Lalinéa 12(1)i) du RGSRN stipule que « le titulaire de permis prend toutes les mesures nécessaires pour aider le Canada à respecter tout accord relatif aux garanties qui sapplique ».</li>
<li>Larticle 30 du RGSRN mentionne les situations pour lesquelles les titulaires de permis doivent soumettre un rapport sur les garanties à la Commission. La série 3.1 de documents dapplication de la réglementation, intitulée Exigences relatives à la production de rapports, énonce les exigences de la CCSN relatives aux rapports dévénements et de surveillance de la conformité que les titulaires de permis doivent soumettre et on peut la trouver sur le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</li>
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
<div id="1.3.2"></div>
<h4 id="sec1-3-2">1.3.2	Accords avec lAgence internationale de lénergie atomique relatifs aux garanties</h4>  <p>LAIEA met en œuvre des garanties au moyen daccords ayant force obligatoire et valeur de traité qu&#39;elle conclut avec des États ou des autorités régionales. LAccord de garanties généralisées entre le Canada et lAIEA (<em>Accord relatif aux garanties</em>) [2] est entré en vigueur le 21 février 1972 et le Protocole additionnel entre le Canada et lAIEA (<em>Protocole additionnel</em>) [3] est entré en vigueur le 8 septembre 2000.</p>  <p>L<em>Accord relatif aux garanties</em> expose le régime de garanties auquel le Canada doit adhérer, y compris les matières qui sont soumises aux garanties, et la nature de linformation qui doit être déclarée à lAIEA. Selon lAccord, lobjectif des garanties de lAIEA consiste à « déceler rapidement le détournement de quantités significatives de matières nucléaires des activités nucléaires pacifiques vers la fabrication darmes nucléaires ou dautres dispositifs nucléaires explosifs ou à des fins inconnues, et de dissuader tout détournement par le risque dune détection rapide ».</p>  <p>Le <em>Protocole additionnel</em> contient dautres exigences relatives à la communication de renseignements et à la fourniture dun accès, notamment lobligation de permettre laccès à certains emplacements à 24 heures davis et celle de fournir de linformation au sujet de certains fabricants et chercheurs du domaine nucléaire, et laccès à ces derniers, ni lun ni lautre ne mettant en jeu des matières nucléaires.</p>
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
<h2 id="sec2">2. Classification des matières nucléaires</h2>  <p>La CCSN a défini deux groupes et deux sous-groupes de matières nucléaires aux fins de lapplication graduelle des exigences relatives à la production de rapports et à laccès. Il est possible pour un titulaire de permis de posséder une combinaison de groupes de matières; les matières appartenant à différents groupes doivent toutefois être stockées séparément. Pour connaître les variations de stock permises dans le cas de chaque groupe, reportez vous au <a href="#appD-D3">tableau D3 de lannexe D</a>.</p>
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
<h3 id="sec2-1">2.1	Matières du groupe 1</h3>  <p>Les matières du groupe 1 comprennent luranium, le plutonium 239 et le thorium qui sont assez purs pour servir à la fabrication du combustible ou à lenrichissement isotopique. Cela inclut toutes les matières du cycle du combustible nucléaire au-delà du concentré de minerai, ou quoi que ce soit créé à partir de ces matières. Le concentré de minerai duranium qui respecte les spécifications de pureté contenues dans le tableau 1 de la norme ASTM-C753 04, <span lang="en"><em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em></span> [4] est considéré faire partie des matières du groupe 1. Une fois quun article donné ou un lot de matières nucléaires est considéré comme faisant partie des matières du groupe 1, il continue den faire partie à moins que les garanties soient levées par lAIEA.</p>
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
<h4 id="sec2-1-1">2.1.1	Matières du groupe 1A &ndash; Garanties intégrales</h4>  <p>Les matières du groupe 1A sont des matières du groupe 1 qui sont soumises aux garanties intégrales – cest-à-dire quelles restent ouvertes à des vérifications périodiques effectuées par lAIEA et quelles doivent faire lobjet dune comptabilité détaillée (consultez le <a href="#appD">tableau D1 de lannexe D</a> pour connaître la fréquence de production des rapports, et la section 6 pour trouver de plus amples renseignements sur les droits daccès de lAIEA applicables aux matières du groupe 1A).</p>  <p>Les matières du groupe 1A ne peuvent être stockées quà des sites désignés comme « installation » ou « emplacement hors installation » aux fins des garanties (voir la catégorisation des titulaires de permis à la <a href="#sec3">section 3</a>).</p>  <p>Un titulaire de permis peut demander que les garanties des matières du groupe 1A soient levées en présentant une demande à la CCSN à laide du formulaire disponible sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>. Les garanties sont levées seulement dans les cas où les matières ont été consommées ou ont été diluées de telle façon quelles ne sont plus utilisables pour quelque activité nucléaire que ce soit ou quelles sont devenues, dans les faits, irrécupérables. Les matières dont les garanties ont été levées cessent dêtre assujetties à une comptabilité détaillée et aux exigences relatives à laccès de lAIEA.</p>
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
<h4 id="sec2-1-2">2.1.2	Matières du groupe 1B &ndash; Exemption du régime des garanties</h4>  <p>Les matières du groupe 1B sont des matières du groupe 1 qui ont été exemptées de certaines obligations relatives aux déclarations et à la vérification, avec la permission à la fois de lAIEA et de la CCSN. Se reporter au <a href="#appD">tableau D1 de lannexe D</a> pour connaître la fréquence de production des rapports, et à la section 6.3 pour trouver de plus amples renseignements au sujet des droits daccès de lAIEA applicables aux matières du groupe 1B.</p>  <p>En vertu de larticle 36 de l<em>Accord relatif aux garanties</em> [2], des matières nucléaires peuvent être exemptées du régime des garanties dans les conditions suivantes :</p>
<ol className="list-bullet-none">
<li>a) les matières sont utilisées en quantités de lordre du gramme ou moins comme éléments capteurs dans des instruments</li>
<li>b) les matières sont utilisées dans le cadre dactivités non nucléaires</li>
<li>c) les matières consistent en du plutonium dont la teneur en plutonium 238 dépasse 80 %</li>
</ol>  <p>En vertu de larticle 37 de l<em>Accord relatif aux garanties</em> [2], les matières qui ne respectent pas les critères mentionnés plus haut peuvent quand même être exemptées du régime des garanties quand les limites de quantité spécifiées pour le Canada à larticle 37 ne sont pas dépassées. La CCSN suit la quantité totale des matières présentes au Canada qui sont exemptées en vertu de larticle 37 et sassure que ces limites ne sont pas dépassées.</p>  <p>Un titulaire de permis peut demander que des matières du groupe 1A soient exemptées du régime des garanties ou demander la levée dexemption pour des matières du groupe 1B en présentant une demande à la CCSN à laide des formulaires disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
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
<h3 id="sec2-2">2.2	Matières du groupe 2 &ndash; Concentrés de minerai</h3>  <p>Les matières du groupe 2 comprennent luranium et le thorium qui nont pas atteint le stade du cycle du combustible nucléaire auquel ils possèdent une composition et une pureté propres à la fabrication du combustible ou à lenrichissement isotopique. Les matières du groupe 2 incluent généralement uniquement les concentrés de minerai duranium ou de thorium qui ne respectent pas les spécifications de pureté mentionnées dans la norme ASTM-C753 04, <span lang="en"><em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em></span> [4].</p>  <p>Les matières de ce type ne sont pas soumises à une vérification systématique par lAIEA, mais elles sont quand même assujetties à certaines exigences relatives à laccès et à la comptabilité des matières nucléaires (voir la fréquence de production des rapports dans le <a href="#appD">tableau D1 de lannexe D</a>, et la <a href="#sec6-3">section 6.3</a> pour trouver de plus amples renseignements sur les droits daccès de lAIEA applicables aux matières du groupe 2).</p>
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
<h2 id="sec3">3. Catégorisation des titulaires de permis</h2>  <p>Aux fins du régime des garanties, un titulaire de permis est désigné comme « installation », « emplacement hors installation » ou « autre titulaire de permis » selon les critères mentionnés ci après.</p>
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
<h3 id="sec3-1">3.1 Installation</h3>  <p>Aux fins du régime des garanties, on appelle « installation » le titulaire de permis qui possède des matières du groupe 1A quand il respecte un des critères suivants :</p>
<ol className="list-bullet-none">
<li>a) le permis inclut un réacteur et/ou une installation critique, ou une usine de concentration de matières nucléaires, une usine de fabrication, une usine de traitement de combustible irradié ou une usine de séparation des isotopes, ou une installation séparée de stockage de matières nucléaires</li>
<li>b) le permis inclut un emplacement où des matières du groupe 1A en quantités supérieures à un kilogramme effectif sont habituellement utilisées</li>
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
<div id="3.2"></div>
<h3 id="sec3-2">3.2	Emplacement hors installation</h3>  <p>Aux fins du régime des garanties, on appelle « emplacement hors installation » le titulaire de permis qui possède des matières du groupe 1A, mais qui ne respecte pas les critères mentionnés plus haut.</p>
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
<h3 id="sec3-3">3.3	Autre titulaire de permis</h3>  <p>On appelle « autre titulaire de permis » le titulaire de permis qui ne possède pas de matières du groupe 1A et qui :</p>
<ol className="list-bullet-none">
<li>a) possède des matières du groupe 1B et/ou du groupe 2</li>
<li>b) exécute des activités de recherche et de développement liées au cycle du combustible nucléaire</li>
<li>c) exécute des activités de fabrication à caractère nucléaire spécifiées</li>
</ol>  <p>et il est assujetti à un ensemble réduit dexigences relatives aux garanties.</p>
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
<h2 id="sec4">4. Programme de garanties</h2>  <p>Tout titulaire de permis catégorisé comme une installation, un emplacement hors installation ou un autre titulaire de permis doit posséder un programme de garanties documenté qui prévoit lexécution des exigences relatives aux garanties applicables :</p>
<ul>
<li>Équipement et sceaux de garanties (<a href="#sec5">section 5</a>)</li>
<li>Accès de lAIEA (<a href="#sec6">section 6</a>)</li>
<li>Comptabilité des matières nucléaires (<a href="#sec7">section 7</a>)</li>
<li>Communication de renseignements (<a href="#sec8">section 8</a>)</li>
<li>Conservation des documents (<a href="#sec9">section 9</a>)</li>
</ul>  <h3>Orientation</h3>   <p>Le programme de garanties dun titulaire de permis devrait inclure les mesures que le titulaire de permis prendra pour sassurer que les exigences relatives aux garanties qui le concernent sont respectées de manière uniforme et satisfaisante. Tout titulaire de permis qui possède des matières nucléaires ou réalise des activités de recherche et de développement liées au cycle du combustible nucléaire, ou réalise des activités de fabrication à caractère nucléaire spécifiées devrait nommer une personne responsable de la tenue à jour et de lexécution du programme de garanties de ce titulaire de permis. Lidentité de cette personne devrait être divulguée à la CCSN.</p>
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
<h2 id="sec5">5. Équipement et sceaux de garanties</h2>  <p>Tout titulaire de permis doit, à la demande de la CCSN, mettre en place un équipement de garanties au site autorisé ou faciliter la mise en place de cet équipement par lAIEA. Tout titulaire de permis doit fournir les services requis pour le fonctionnement de cet équipement, conformément aux spécifications fournies.</p>  <p>Aucun titulaire de permis ne doit perturber ou interrompre le fonctionnement de léquipement de garanties à linstallation, ou modifier, dégrader ou briser un sceau de garanties, sauf à la demande de la CCSN. Chaque titulaire de permis doit mettre en œuvre des mesures destinées à prévenir lendommagement, le vol, la perte, la modification ou le sabotage dun équipement de garanties, de sceaux ou déchantillons. Les titulaires de permis doivent faire part de tout événement de ce genre à leur propre personnel de sécurité, le cas échéant.</p>  <p>Selon larticle 30 du RGSRN, les titulaires de permis doivent signaler à la Commission toute perturbation ou interruption du fonctionnement de léquipement de garanties, ou encore la modification, la dégradation ou le bris dun sceau de garanties, entre autres événements.</p>  <h3>Orientation</h3>  <p>Aux sites de titulaire de permis où il est probable quil y ait des sceaux et de léquipement de garanties, une partie du programme de garanties du titulaire de permis devrait inclure la familiarisation de toutes les personnes pertinentes avec les exigences entourant les sceaux et léquipement de lAIEA.</p>  <p>Les titulaires de permis devraient communiquer avec la CCSN lorsquil nest pas certain sil y a eu perturbation ou interruption du fonctionnement de léquipement de garanties. Par exemple, dans la plupart des cas, léquipement de garanties peut tolérer une brève panne dalimentation et/ou de connectivité des données. Il se peut par conséquent que ce genre dexemples ne constitue pas un événement à déclaration obligatoire en vertu de larticle 30 du RGSRN.</p>
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
<h2 id="sec6">6. Accès de lAgence internationale de lénergie atomique</h2>  <p>Chaque titulaire de permis doit fournir laccès requis aux inspecteurs de lAIEA. Cet accès vise à permettre de vérifier les déclarations faites par le Canada à lAIEA, conformément aux exigences des accords relatifs aux garanties entre le Canada et lAIEA. LAIEA peut demander laccès à un site donné à diverses fins décrites plus loin.</p>  <p>À la demande de la CCSN, les titulaires de permis doivent faire rapport à la CCSN des résultats de toutes les activités de lAIEA qui ont lieu sur leur site.</p>  <h3>Orientation</h3>  <p>Les titulaires de permis peuvent communiquer avec la CCSN pour vérifier lidentité des inspecteurs de lAIEA qui demandent davoir accès au site.</p>
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
<h3 id="sec6-1">6.1 Inspections</h3>  <p>LAIEA a le droit de procéder à des inspections chez les titulaires de permis catégorisés comme installations ou emplacements hors installations. Durant une inspection, lAIEA a le droit de vérifier toutes les matières du groupe 1A sur le site et de vérifier les documents et les rapports pertinents, y compris les documents relatifs aux garanties qui nont pas été soumis à la CCSN (les données de base, par exemple).</p>  <p>Au cours dune inspection, le titulaire de permis doit fournir la liste des articles en stock englobant les matières qui font lobjet de linspection, puis faciliter la vérification des stocks par lAIEA. De plus amples renseignements se trouvent sur la liste des articles en stock à la <a href="#sec8-1-4">section 8.1.4</a>.</p>  <p>Les activités dinspection de lAIEA peuvent inclure, entre autres :</p>
<ul>
<li>les relevés de mesure des matières nucléaires</li>
<li>la prise déchantillons de matières nucléaires</li>
<li>lexamen des données provenant de léquipement de confinement et de surveillance de lAIEA</li>
<li>la pose ou la vérification de sceaux de lAIEA</li>
<li>lexamen des documents et des rapports relatifs aux garanties</li>
</ul>  <p>Dans le cas dune inspection au cours de laquelle des échantillons de matières nucléaires sont prélevés à la demande de la CCSN, le titulaire de permis doit fournir toute laide raisonnable requise pour permettre lenvoi de ces échantillons.</p>  <h4>Orientation</h4>  <p>Selon la taille et la complexité des stocks à vérifier, la durée dune inspection effectuée par lAIEA peut varier de quelques heures à plusieurs semaines. LAIEA donne généralement un avis de 24 heures à une semaine à lavance pour dire quelle procédera à une inspection. LAIEA conserve le droit de procéder à une inspection inopinée chez tout titulaire de permis catégorisé comme installation ayant un contenu ou une capacité annuelle dépassant cinq kilogrammes effectifs de matières nucléaires. Afin de réduire les activités de vérification de lAIEA, la CCSN peut demander à tout autre titulaire de permis catégorisé comme installation ou comme emplacement hors installation daccepter une inspection inopinée effectuée par lAIEA. La CCSN cherche à participer à toutes les inspections effectuées par lAIEA au Canada, dans la mesure du possible.</p>
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
<h3 id="sec6-2">6.2	Vérification des renseignements descriptifs</h3>  <p>LAIEA a le droit deffectuer des visites chez un titulaire de permis catégorisé comme installation pour vérifier les renseignements descriptifs fournis par le titulaire de permis (consulter la <a href="#sec8-2">section 8.2</a> pour de plus amples renseignements sur les exigences relatives aux renseignements descriptifs). Durant une visite de vérification, le titulaire de permis doit fournir à lAIEA les plus récents renseignements descriptifs soumis à la CCSN, puis faciliter la vérification de ces renseignements par lAIEA. LAIEA avise une semaine à lavance quelle effectuera une visite de vérification de renseignements descriptifs. La CCSN cherche à participer à toutes les vérifications de renseignements descriptifs effectuées par lAIEA au Canada, dans la mesure du possible.</p>
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
<h3 id="sec6-3">6.3	Accès complémentaire</h3>  <p>En vertu du <em>Protocole additionnel</em> [3], lAIEA a le droit de demander un accès complémentaire à tout emplacement au Canada sur avis daussi peu que 24 heures ou sur avis de 2 heures quand son personnel est déjà sur place à une installation ou à un emplacement hors installation pour une inspection ou une vérification des renseignements descriptifs.</p>  <p>Sur réception dune demande daccès complémentaire, le titulaire de permis doit permettre à lAIEA et à la CCSN daccéder à :</p>
<ul>
<li>tout emplacement sur tout site déclaré comme installation ou emplacement hors installation</li>
<li>toute installation ou tout emplacement hors installation, qui est déclassée ou fermée</li>
<li>toute mine ou usine de concentration duranium ou de thorium</li>
<li>tout emplacement possédant, important ou exportant plus de 10 tonnes métriques de concentré de minerai duranium et/ou plus de 20 tonnes métriques de concentré de minerai de thorium au cours dune année civile donnée</li>
<li>tout emplacement où des matières exemptées de garanties en vertu de larticle 37 de l<em>Accord relatif aux garanties</em> [2] sont stockées ou des matières exemptées de garanties en vertu de larticle 36 de l<em>Accord relatif aux garanties</em> sont stockées, quand ces matières ne sont pas encore dans leur forme dutilisation finale non nucléaire</li>
<li>tout emplacement qui soccupe du traitement ultérieur de déchets contenant du plutonium, de luranium hautement enrichi ou de luranium 233 pour lequel les garanties ont été levées</li>
</ul>  <p>Dans le cas des emplacements sujets à des demandes daccès complémentaire qui ne sont pas mentionnées ci-dessus (les emplacements qui participent à des activités de recherche et de développement liées au cycle du combustible nucléaire ou à de la fabrication à caractère nucléaire spécifiée, par exemple), dès la réception dune telle demande, le titulaire de permis doit faire tous les efforts raisonnables pour permettre à lAIEA et à la CCSN daccéder au site.</p>
<p>Laccès sera fourni dans les délais spécifiés dans lavis daccès complémentaire.</p>  <h4>Orientation</h4>  <p>Laccès complémentaire na lieu que durant les heures de travail normales. Les activités que le personnel de lAIEA peut effectuer durant cet accès incluent ce qui suit :</p>
<ul>
<li>observation visuelle</li>
<li>collecte déchantillons environnementaux</li>
<li>utilisation dappareils de détection ou de mesure du rayonnement</li>
<li>décompte darticles de matières nucléaires</li>
<li>pose de sceaux et/ou dautres dispositifs inviolables</li>
<li>examen des documents en lien avec les objectifs de laccès complémentaire</li>
</ul>  <p>Il est possible de réglementer laccès du personnel de lAIEA durant un accès complémentaire afin de prévenir la dissémination dinformation sensible à la prolifération, de respecter les exigences relatives à la sûreté ou à la protection physique et de protéger des renseignements exclusifs ou commercialement sensibles. Tout besoin de réglementation de laccès devrait être communiqué à la CCSN au moyen de la mise à jour annuelle du titulaire de permis en vertu du <em>Protocole additionnel</em> [3] (voir de plus amples détails à la <a href="#sec8-4">section 8.4</a>). Cela nexclut pas la possibilité que le besoin de réglementer laccès se fasse sentir durant laccès complémentaire. La CCSN cherche à participer à tous les accès complémentaires de lAIEA au Canada, dans la mesure du possible.</p>
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
<h3 id="sec6-4">6.4	Accès à léquipement de lAIEA</h3>  <p>LAIEA a le droit daccéder à léquipement quelle a mis en place, notamment pour la maintenance et lentretien courant. Le titulaire de permis doit faciliter laccès à léquipement de lAIEA, ce qui inclut la fourniture déchelles, dun échafaudage, dappareils de levage ou de formation, selon les besoins. Remarquez quil se peut que laccès doive être accordé à court préavis.</p>   <h4>Orientation</h4>  <p>Les titulaires de permis devraient informer la CCSN de la formation nécessaire pour accéder à léquipement de lAIEA dans leurs documents portant sur les renseignements descriptifs (voir la <a href="#sec8-2">section 8.2</a>).</p>
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
<h2 id="sec7">7. Comptabilité des matières nucléaires</h2>  <p>La comptabilité des matières nucléaires concerne le programme de comptabilité et de déclaration des matières nucléaires mis en œuvre par les titulaires de permis et la CCSN pour satisfaire aux exigences de l<em>Accord relatif aux garanties</em> [2].</p>  <p>La comptabilité des matières nucléaires englobe les activités que le titulaire de permis exécute pour établir les quantités de matières nucléaires présentes dans des zones définies et les variations de ces quantités au cours dune période définie. Cela inclut les relevés de mesure des matières nucléaires, la tenue de dossiers, la préparation et la soumission de rapports comptables, et la vérification des renseignements de comptabilité fournis. Dans le cas dun titulaire de permis qui possède des matières du groupe 1A, cela inclut en plus létablissement de zones de bilan matières (ZBM) dans lesquelles il est possible de déterminer les « flux » et les stocks de matières nucléaires, et de points de mesure principaux (PMP) dans ces ZBM, où il est possible de mesurer les « flux » et les stocks de matières nucléaires.</p>
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
<h3 id="sec7-1">7.1	Mesure des matières nucléaires</h3>  <p>Tout programme de garanties dun titulaire de permis doit inclure lentretien et létalonnage des instruments utilisés pour mesurer les matières nucléaires aux fins des garanties. Les résultats documentés de toute activité détalonnage ou mesure de matières nucléaires sont classés comme données de base et doivent ainsi être disponibles sur demande, y compris durant les inspections menées par lAIEA.</p>   <h4>Orientation</h4>  <p>En général, les instruments utilisés pour mesurer les matières nucléaires devraient être étalonnés au moins une fois au cours de la période entre deux inventaires (consulter la <a href="#sec7-3">section 7.3</a> pour dautres détails). La précision des mesures prises par les titulaires de permis devrait respecter ou dépasser les normes fixées dans le document de lAIEA STR-368, <span lang="en"><em>International Target Values 2010 for Measurement Uncertainties in Safegarding Nuclear Materials</em></span> [5], sil y a lieu.</p>  <p>Les erreurs darrondissement devraient être réduites au minimum (par exemple, lorsquune somme de mesures est déclarée, seul le nombre final déclaré devrait être arrondi). De plus, le nombre de chiffres significatifs devrait refléter lincertitude de la mesure globale. Les mesures devraient comprendre le même nombre de chiffres significatifs dans tous les rapports se rapportant au même article ou lot.</p>
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
<h3 id="sec7-2">7.2	Suivi des stocks</h3>  <p>Tout titulaire de permis possédant des matières nucléaires doit être capable en tout temps de fournir une liste des articles en stock à jour comprenant la totalité des matières du groupe 1 en sa possession.</p>  <p>Tous les articles en stock doivent avoir un identificateur unique, par exemple un numéro de série étampé ou gravé, ou une étiquette adhésive ou volante, de sorte quun inspecteur de la CCSN ou de lAIEA puisse facilement faire le lien entre la liste des articles en stock du titulaire de permis et linventaire.</p>
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
<h3 id="sec7-3">7.3	Inventaire du stock physique</h3>  <p>Tous les titulaires de permis catégorisés comme installations ou emplacements hors installations doivent effectuer un inventaire du stock physique (ISP) chaque année civile et pas plus de 14 mois après lISP précédent. La date de lISP du titulaire de permis doit être déclarée à la CCSN dans le cadre du programme opérationnel annuel (voir la <a href="#sec8-3">section 8.3</a>).</p>  <p>LISP du titulaire de permis doit :</p>
<ul>
<li>confirmer la présence de toutes les matières du groupe 1 dans la liste des articles en stock</li>
<li>confirmer que lidentificateur dun article correspond à linformation contenue dans la liste des articles en stock</li>
<li>confirmer quil ny a pas de matières du groupe 1 qui ne sont pas incluses dans la liste des articles en stock</li>
</ul>  <p>La CCSN et/ou lAIEA peuvent choisir de vérifier les résultats de lISP dun titulaire de permis, notamment toutes les matières du groupe 1A incluses dans la liste des articles en stock produite à la suite de lISP. Dans le cas où lAIEA choisit de vérifier les résultats de linventaire physique effectué par le titulaire de permis, linspection quelle mène alors sappelle une vérification du stock physique (VSP). Dans le cas où la CCSN choisit de le faire, linspection sappelle alors une évaluation de linventaire du stock physique (E-ISP). La VSP et/ou lE-ISP peuvent avoir lieu peu de temps après lISP ou coïncider avec celui ci. La VSP entraîne la vérification dune partie ou de la totalité des matières du groupe 1A présentes sur le site au moment de lISP, tandis que lE-ISP entraîne la vérification dune partie ou de la totalité des matières du groupe 1 présentes sur le site au moment de linventaire physique. Le titulaire de permis doit être prêt à appuyer une VSP effectuée par lAIEA et/ou une E-ISP effectuée par la CCSN à la suite de chaque ISP.</p>  <h4>Orientation</h4>  <p>Dans le cas dun titulaire de permis dont linventaire est gros et complexe, lISP devrait être programmé de manière à avoir lieu lorsque les mouvements et les stocks de matières nucléaires sont au minimum, et lorsquil est possible de vider et de nettoyer léquipement utilisé pour traiter les matières nucléaires, dans toute la mesure raisonnablement possible. Il faudrait si possible échantillonner et analyser les matières nucléaires qui sont retenues dans léquipement au moment dun ISP pour déterminer les caractéristiques nécessaires à la détermination de la masse des matières nucléaires. Les matières nucléaires présentes dans les articles dont la masse na pas changé depuis linventaire précédent, ou depuis leur création ou leur réception, nont pas à être mesurées de nouveau dans le cadre dun ISP.</p>  <p>La CCSN peut choisir une date dISP pour le titulaire de permis en fonction de la disponibilité des ressources de la CCSN.</p>
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
<h3 id="sec7-4">7.4	Différence dinventaire</h3>  <p>Tout titulaire de permis qui procède à linventaire du stock physique doit calculer la différence dinventaire (ID) comme résultat de cet ISP et la déclarer à la CCSN. LID est calculée au cours dune période de bilan matières, cest à dire lintervalle entre deux inventaires.</p>  <p>La différence dinventaire doit être calculée à laide de léquation de bilan matières suivante :</p>  <p className="text-center"><strong>ID = BE – PE</strong></p>  <p className="text-center"><strong>et</strong></p>  <p className="text-center"><strong>BE = PB + X - Y</strong></p>  <p>où :</p>  <p>BE = le stock comptable final, cest-à-dire la somme du stock physique initial et de toutes les variations de stock au cours de la période de bilan matières</p>  <p>PE = le stock physique final selon linventaire actuel</p>  <p>PB = le stock physique initial selon linventaire précédent</p>  <p>X = la somme de toutes les augmentations de stock au cours de la période de bilan matières</p>  <p>Y = la somme de toutes les diminutions de stock au cours de la période de bilan matières</p>  <p>La différence dinventaire doit être déclarée à la CCSN dans les rapports suivants :</p>
<ul>
<li>Un document de variations de stocks quand la différence est autre que zéro (voir la <a href="#sec8-1-2">section 8.1.2</a>).</li>
<li>Le grand livre général final de la période de bilan matières (voir la <a href="#sec8-1-3">section 8.1.3</a>)</li>
<li>Létat de rapprochement (voir la <a href="#sec8-1-6">section 8.1.6</a>).</li>
</ul>  <p>La CCSN évalue tous les cas dID déclarés par les titulaires de permis. En fonction de cette évaluation, elle peut demander des mesures de suivi dans le cas dune ID autre que zéro relative à des matières nucléaires en vrac. Les titulaires de permis doivent faire enquête sur tout cas dID autre que zéro relative à des matières nucléaires sous forme darticles et communiquer les résultats de lenquête à la CCSN et à leur propre personnel de sécurité, le cas échéant. Les rapports des résultats de ces enquêtes doivent être soumis dans les 30 jours suivant linventaire du stock physique et inclure les conclusions des titulaires de permis relativement à la source de la différence dinventaire ainsi que les mesures correctives.</p>
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
<h3 id="sec7-5">7.5	Obligations à létranger</h3>  <p>Le Canada a négocié des accords de coopération nucléaire (ACN) avec des pays partenaires partout dans le monde. Lorsque des matières nucléaires sont importées au Canada en vertu des dispositions dun ACN, ces matières sont généralement visées par des obligations à létranger, notamment lexigence pour le Canada de suivre ces matières nucléaires tant quelles sont au Canada et den faire rapport.</p>  <p>Au moment de délivrer un permis dimportation, la CCSN indique à limportateur si une obligation à létranger sera attribuée aux matières nucléaires. Lorsque la CCSN na émis aucun avis de ce genre, les matières en question sont considérées comme nétant pas visées par une obligation tant quelles demeurent au Canada.</p>  <p>Les titulaires de permis doivent suivre les obligations à létranger associées à leur stock de matières nucléaires et aux variations de stock. Pour de plus amples renseignements, consulter les <a href="#sec8-1-2">sections 8.1.2</a> et <a href="#sec8-1-7">8.1.7</a>.</p>  <p>Une fois attribuées, les obligations à létranger associées à un article doivent demeurer liées à cet article, à moins que lintégrité de ce dernier soit détruite par un traitement. Il serait bon de noter que les matières nucléaires peuvent être visées simultanément par des obligations envers plusieurs pays.</p>  <p>Les obligations à létranger associées aux transferts intérieurs ou aux variations internes de stock doivent être attribuées par le titulaire de permis en fonction des obligations présentes dans son stock. Les obligations à létranger associées à des matières nucléaires qui seront exportées du Canada, le cas échéant, doivent être déclarées à la CCSN par le titulaire de permis dans le cadre du processus de demande dun permis dexportation à la CCSN. Si des matières nucléaires non visées par une obligation doivent être exportées du Canada pour utilisation nucléaire, la CCSN attribue une obligation canadienne à ces matières au moment de lexportation.</p>  <h4>Orientation</h4>  <p>Pour obtenir de plus amples renseignements sur le programme de contrôle des importations et des exportations de la CCSN, consulter le document dapplication de la réglementation <a href="http://nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-13-2/index">REGDOC-2.13.2, <em>Importation et exportation</em></a>.</p>
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
<h2 id="sec8">8. Communication de renseignements</h2>  <p>Tous les renseignements fournis à la CCSN doivent être transmis à laide des mesures de sécurité de linformation appropriées. Le système daffaires en ligne Déclaration de rapports de comptabilité des matières nucléaires (DRCMN) de la CCSN (voir la <a href="#sec8-1-1">section 8.1.1</a>) et le courriel chiffré au moyen de la boîte aux lettres des garanties de la CCSN (<a href="mailto:safeguards-garanties@cnsc-ccsn.gc.ca">safeguards-garanties@cnsc-ccsn.gc.ca</a>) peuvent être utilisés pour les communications jusquà « Protégé B » inclusivement selon les niveaux de sécurité publiés par le gouvernement du Canada en vertu du Programme de sécurité industrielle. Les titulaires de permis doivent prendre dautres ententes avec la CCSN lorsque les renseignements à soumettre sont « Protégé C » ou classifiés.</p>
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
<h3 id="sec8-1">8.1	Rapports de comptabilité des matières nucléaires</h3>  <p>Tous les titulaires de permis qui possèdent des matières nucléaires doivent faire rapport à la CCSN conformément à la fréquence de production des rapports mentionnée dans le <a href="#appD">tableau D1 de lannexe D</a>. La CCSN peut demander que certains rapports soient présentés plus souvent pour appuyer les activités de vérification de lAIEA.</p>  <p>Les descriptions des données à inclure dans chaque type de rapports sont fournies dans le <a href="#appD-D2">tableau D2 de lannexe D</a>. Les formulaires de rapport de comptabilité des matières nucléaires sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.1"></div>
<h4 id="sec8-1-1">8.1.1	Sécurité de linformation et production de rapports par voie électronique</h4>  <p>Les titulaires de permis doivent avoir des moyens en place pour empêcher que les systèmes utilisés pour générer, conserver et transmettre des renseignements pertinents sur les garanties soient compromis.</p>  <p>Tous les titulaires de permis qui sont tenus de soumettre des rapports de comptabilité des matières nucléaires (voir la <a href="#sec8-1">section 8.1</a>) doivent utiliser à cette fin le système daffaires en ligne DRCMN, qui se trouve sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>  <h5>Orientation</h5>  <p>Les titulaires de permis peuvent consulter la norme CSA N290.7, <em>Cybersécurité pour les centrales nucléaires et les installations dotées de petits réacteurs</em>, pour obtenir de lorientation sur la cybersécurité des régimes de garanties.</p>  <p>Le système daffaires en ligne DRCMN accepte les rapports de comptabilité des matières nucléaires en format de langage de balisage extensible (.xml) et en format Microsoft Excel 2003 (.xls). Les demandes dexemption, de levée dexemption et de levée des garanties sont également acceptées en format de document portable (.pdf). On peut obtenir de la CCSN un code daccès au système DRCMN. Il est possible de prendre dautres dispositions avec la CCSN dans le cas dun fichier qui ne peut être soumis au moyen du système DRCMN, par exemple à cause de sa taille.</p>  <p>De plus amples renseignements concernant lutilisation du système DRCMN sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.2"></div>
<h4 id="sec8-1-2">8.1.2	Document de variations de stock</h4>  <p>Une variation de stock est une augmentation ou une diminution du stock de matières nucléaires dun titulaire de permis. Toutes les variations de stock doivent être déclarées à la CCSN dans un document de variations de stock (DVS), à laide des codes de variation de stock définis dans le <a href="#appD-D3">tableau D3 de lannexe D</a>. Dans le cas de toute expédition de matières nucléaires, lexpéditeur doit fournir une copie du DVS au destinataire.</p>  <h5>Correction ou suppression dun document de variations de stock</h5>  <p>Pour corriger un document de variations de stock, il faut soumettre un document rectificatif comportant les modifications nécessaires. Ce document doit indiquer la date du jour et non la date à laquelle la transaction initiale a eu lieu. Le DVS rectificatif est identique à loriginal, sauf pour la date, les champs corrigés, lentrée de la lettre « C » (pour « correction ») à létiquette 309 et laugmentation de 1 de la valeur de létiquette 1021. Il faut ajouter une note dans la section Remarques dun DVS rectificatif pour expliquer la raison de la correction.</p>  <p>Un DVS peut être supprimé afin de le retirer complètement. Pour supprimer un document de variations de stock, il faut soumettre un document identique à loriginal à lexception de la date, qui est celle du jour, et de lentrée de la lettre « D » (pour « supprimer ») à létiquette 309 (la valeur de létiquette 1021 demeure 0). Il faut ajouter une note dans la section Remarques dun document de variations de stock à supprimer pour expliquer la raison de la suppression.</p>  <p>Il est impossible de corriger certains champs du document de variations de stock (Date, Nom du lot, ZBM, Genre de VS, Statut des garanties et Code de lélément, quand la modification du Code de lélément a une incidence sur le Statut des garanties) en présentant un DVS rectificatif. Dans ce cas, on doit supprimer le DVS initial et en présenter un nouveau. Le DVS à supprimer et le nouveau DVS doivent tous deux porter la date du jour.</p>  <p>Dans des situations déterminées et en consultation avec la CCSN, il est possible de présenter un DVS rectificatif ou un DVS à supprimer dont la date est autre que la date du jour. Il est aussi possible de retirer et de remplacer un DVS sans modifier létiquette 309 ou létiquette 1021.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.3"></div>
<h4 id="sec8-1-3">8.1.3	Grand livre général</h4>  <p>Un grand livre général est une liste mensuelle de toutes les variations de stock qui ont lieu durant le mois et il fournit le stock comptable, cest-à-dire un bilan cumulatif courant des matières nucléaires qui se trouvent dans la ZBM.</p>  <p>Les titulaires de permis catégorisés comme installations doivent tenir un grand livre général; la CCSN tient un grand livre général pour le compte des titulaires de permis catégorisés comme emplacements hors installations. Linformation relative à une variation de stock consignée dans le grand livre général doit correspondre à linformation contenue dans le DVS pour chaque variation de stock, à lexception des corrections de masse, selon la description donnée plus loin sous « Consigner la correction ou la suppression dun DVS dans un grand livre général ». Un grand livre général distinct doit être présenté pour chaque élément/isotope des matières nucléaires du groupe 1A.</p>  <p>Dans le cas des mois au cours desquels il ny a pas eu de transaction, les titulaires de permis ne sont pas tenus de présenter un grand livre général à la CCSN. Dans le cas dun titulaire de permis catégorisé comme installation, on considère que ce grand livre général constitue des données de base et il doit toujours être créé, conservé et fourni sur demande.</p>  <h5>Correction dun grand livre général</h5>  <p>Pour corriger un grand livre général, il faut soumettre un nouveau rapport dans lequel le numéro de révision est augmenté de 1 et la date de la révision est indiquée dans le champ approprié.</p>  <h5>Consigner la correction ou la suppression dun DVS dans un grand livre général</h5>  <p>Lorsquon présente un DVS rectificatif ou à supprimer, il faut consigner la correction ou la suppression dans le grand livre général pour le mois au cours duquel la correction ou la suppression a été déclarée. Dans le cas dun DVS rectificatif, si la correction concerne la masse, la masse consignée dans le grand livre général doit alors être la différence entre la dernière masse déclarée et la masse corrigée. Par exemple, si une masse a été déclarée à lorigine comme étant 10 kg, puis corrigée pour devenir 11 kg, lentrée dans le grand livre général correspondant au DVS rectificatif indiquera 1 kg (11 kg &ndash; 10 kg), même si le document de variations de stock rectificatif continue de mentionner 11 kg. Il sagit du seul cas où la masse déclarée dans un grand livre général nest pas exactement la même que celle dans le DVS correspondant.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.4"></div>
<h4 id="sec8-1-4">8.1.4	Liste des articles en stock</h4>  <p>La liste des articles en stock est constituée de listes de tous les articles contenant des matières du groupe 1 présents sur le site à tout moment donné. Une liste des articles en stock distincte doit être tenue pour chaque catégorie déléments ou disotopes présente sur le site. Les matières des groupes 1A et 1B doivent être consignées sur des ensembles séparés de listes des articles en stock. Un article est généralement défini comme la plus petite unité étiquetée individuellement en stock. Les titulaires de permis doivent être capables de créer une liste des articles en stock exacte sur demande.</p>  <p>Remarque : Les listes des articles en stock relatives au combustible usé des centrales CANDU sont un cas spécial en raison du nombre extrêmement élevé darticles présents. Dans le cas de ces listes, il est acceptable de déclarer sur une ligne simple chaque élément présent dans chaque PMP, en indiquant le nombre de grappes et la masse des matières nucléaires. Des listes par article englobant les sous ensembles du stock de combustible usé doivent être disponibles sur demande pour faciliter les activités de vérification. À la demande du titulaire de permis, la CCSN envisagera des accords similaires dans le cas des autres gros stocks homogènes.</p>  <h5>Correction dune liste des articles en stock</h5>  <p>Pour corriger une liste des articles en stock, il faut soumettre un nouveau rapport dans lequel le numéro de la révision a augmenté de 1 et la date de la révision est indiquée dans le champ approprié. La date du rapport relatif à la correction dune liste des articles en stock doit demeurer inchangée, cest-à-dire quelle doit être la date à laquelle la liste des articles en stock a été soumise.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.5"></div>
<h4 id="sec8-1-5">8.1.5	Sommaire des stocks par point de mesure principal physique</h4>  <p>Le sommaire des stocks par PMP-physique (SSPMP-P) consiste en un sommaire des matières du groupe 1A divisé par PMP-physiques. Le SSPMP-P doit résumer la liste des articles en stock en regroupant en lots les articles ayant le même code de description de matière. Dans le cas où le titulaire de permis possède de petits inventaires de matières nucléaires, la CCSN peut, à la demande du titulaire de permis, annuler lobligation de créer et de présenter un SSPMP-P.</p>  <h5>Correction ou suppression dun sommaire des stocks par point de mesure principal-physique</h5>  <p>Pour corriger un rapport de SSPMP-P, il faut soumettre un nouveau rapport dans lequel la lettre « C » (pour « correction ») a été inscrite à létiquette 309 et la valeur de létiquette 1021 a été augmentée de 1. La date du rapport de SSPMP-P doit demeurer inchangée, cest-à-dire quelle doit être la date de lISP qui fait lobjet du rapport. Au moment de la présentation dun SSPMP-P rectificatif, seuls les lots qui sont corrigés doivent être inclus. Par exemple, si un SSPMP-P initial comportait 10 lots et que 2 de ces lots devaient être corrigés, le SSPMP-P rectificatif montre uniquement les deux lots corrigés.</p>  <p>Un SSPMP-P doit être supprimé lorsquil est nécessaire de retirer complètement certains ou la totalité des lots déclarés. Pour ce faire, on présente un SSPMP-P qui comprend la lettre « D » (pour « supprimer ») à létiquette 309 (la valeur de létiquette 1021 demeure 0) et qui dresse uniquement la liste des lots qui doivent être retirés, exactement comme ils avaient été déclarés dans le SSPMP-P initial. Il faut ajouter une note expliquant la raison de la modification dans la section Remarques des lots de SSPMP-P rectificatifs ou à supprimer.</p>  <p>Il est impossible de corriger certains champs du SSPMP-P (Date, Nom du lot, ZBM, Statut des garanties et Code de lélément, quand celui-ci a une incidence sur le champ Statut des garanties) en soumettant un SSPMP-P rectificatif. Dans ce cas, les lots touchés dans le SSPMP-P doivent être supprimés et soumis de nouveau dans un autre SSPMP-P.</p>  <p>Dans des situations déterminées et en consultation avec la CCSN, il est possible de retirer et de remplacer un SSPMP-P sans modifier létiquette 309 ou létiquette 1021.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.6"></div>
<h4 id="sec8-1-6">8.1.6	État de rapprochement</h4>  <p>Un état de rapprochement est un rapport qui permet de calculer la différence dinventaire (voir la <a href="#sec7-4">section 7.4</a>), cest-à-dire la différence entre linventaire du stock comptable final, tiré du grand livre général le plus récent, et linventaire du stock physique final, tiré du SSPMP-P ou de la liste des articles en stock. Il faut préparer un état de rapprochement pour les matières du groupe 1A après chaque ISP.</p>  <p>Dans le cas où le titulaire de permis possède de petits inventaires de matières nucléaires, la CCSN peut, à la demande du titulaire, annuler lobligation de créer et de produire un état de rapprochement.</p>  <h5>Correction dun état de rapprochement</h5>  <p>Pour corriger un état de rapprochement, il faut soumettre un nouveau rapport dans lequel le numéro de révision a augmenté de 1 et la date de la révision est indiquée dans le champ approprié. La date de létat de rapprochement doit demeurer inchangée, cest-à-dire quelle doit être celle de lISP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.7"></div>
<h4 id="sec8-1-7">8.1.7	Sommaire des stocks de matières réglementées</h4>  <p>Le sommaire des stocks de matières réglementées (SSMR) est le bilan initial et le bilan final des masses, pour chaque pays dobligation à létranger, dans le cas des matières nucléaires visées par des obligations à létranger au site du titulaire de permis. Les matières du groupe 1 et celles du groupe 2 peuvent être assujetties à des obligations à létranger.</p>  <p>Le rapport de SSMR couvre une année civile; le bilan initial doit être en date du 1<sup>er</sup> janvier de lannée pour laquelle porte le rapport et le bilan final doit être en date du 31 décembre de la même année.</p>  <h5>Correction dun sommaire des stocks de matières réglementées</h5>  <p>Pour corriger un rapport de SSMR, il faut soumettre un nouveau rapport dans lequel le numéro de révision a augmenté de 1 et la date de la révision est indiquée dans le champ approprié. Les dates du SSMR doivent demeurer les mêmes, cest-à-dire le 1<sup>er</sup> janvier et le 31 décembre de lannée pour laquelle porte le rapport.</p>
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
<h3 id="sec8-2">8.2	Renseignements descriptifs</h3>  <p>Le titulaire de permis catégorisé comme installation ou emplacement hors installation doit sassurer que la CCSN possède des renseignements descriptifs à jour. La structure des ZBM et des PMP à une installation ou à un emplacement hors installation donné doit être décrite avec exactitude dans les renseignements descriptifs soumis à la CCSN par le titulaire de permis. Une fois quelle a examiné et accepté les renseignements descriptifs dun titulaire de permis, la CCSN les présente à lAIEA.</p>  <p>Dans le cas dun titulaire de permis catégorisé comme installation, les renseignements descriptifs doivent inclure la totalité de ce qui suit :</p>
<ol>
<li>Lidentification de linstallation, mentionnant son caractère général, but, capacité nominale et emplacement géographique, ainsi que le nom et ladresse à utiliser aux fins des activités daffaires courantes</li>
<li>La description du plan densemble de linstallation, y compris des cartes du site et des bâtiments au besoin, avec mention de la forme, de lemplacement et du mouvement des matières nucléaires, et de laménagement général des pièces déquipement importantes qui servent à manipuler, à produire ou à traiter des matières nucléaires</li>
<li>La description des caractéristiques de linstallation se rapportant à la comptabilité, au confinement et à la surveillance des matières nucléaires</li>
<li>La description des procédures en vigueur ou proposées à linstallation relativement à la comptabilité et au contrôle des matières nucléaires, avec mention spéciale des ZBM déterminées par lexploitant, de la responsabilité organisationnelle, des mesures des matières nucléaires, des incertitudes aléatoires et systématiques de ces mesures et des procédures relatives à lISP</li>
<li>Les procédures de santé et de sécurité que lAIEA doit respecter et auxquelles les inspecteurs doivent se conformer lorsquils se trouvent à linstallation</li>
</ol>  <p>Dans le cas dun titulaire de permis catégorisé comme emplacement hors installation, les renseignements descriptifs doivent inclure la totalité de ce qui suit :</p>
<ol>
<li>La description générale de lutilisation des matières nucléaires, leur emplacement géographique, le nom et ladresse de lutilisateur pour les besoins des activités courantes, ainsi que des cartes du site et des bâtiments au besoin</li>
<li>La description générale des procédures en vigueur ou proposées relatives à la comptabilité et au contrôle des matières nucléaires, y compris la responsabilité organisationnelle, les mesures des matières nucléaires, les incertitudes aléatoires et systématiques de ces mesures et les procédures relatives à lISP</li>
<li>Les procédures de santé et de sécurité que lAIEA doit respecter et auxquelles les inspecteurs doivent se conformer lorsquils se trouvent à linstallation</li>
</ol>  <p>Les renseignements descriptifs doivent être mis à jour et soumis à la CCSN dès que la décision est prise dapporter des modifications qui rendraient linformation déjà fournie incomplète ou inexacte.</p>  <p>Dans le cas de la construction dune nouvelle installation ou dun nouvel emplacement hors installation, les renseignements descriptifs préliminaires doivent être soumis à la CCSN dès que la décision de construire ou dautoriser la construction a été prise, selon la première éventualité. La mise à jour de ces renseignements descriptifs préliminaires doit être soumise à la CCSN au plus tard 270 jours avant le début de la construction. De même, les renseignements descriptifs définitifs doivent être soumis à la CCSN au plus tard 270 jours avant la première réception de matières nucléaires à linstallation.</p>  <h4>Orientation</h4>  <p>Le titulaire de permis devrait fournir les renseignements descriptifs sur le questionnaire relatif aux renseignements descriptifs de lAIEA, quon peut obtenir de la CCSN sur demande. Le titulaire de permis devrait examiner les renseignements descriptifs chaque année et vérifier sils sont à jour. La CCSN peut demander quune mise à jour des renseignements descriptifs soit fournie dans un délai spécifié et demander des renseignements descriptifs en plus de ceux mentionnés plus haut.</p>
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
<h3 id="sec8-3">8.3	Renseignements opérationnels</h3>  <p>Le titulaire de permis catégorisé comme installation doit soumettre à la CCSN un programme opérationnel annuel couvrant linformation relative aux garanties pour la prochaine année civile. Le programme doit être soumis à la CCSN au plus tard le 30 septembre chaque année et le titulaire de permis doit le mettre à jour au besoin pour quil demeure courant.</p>  <p>Chaque responsable dinstallation doit soumettre un programme opérationnel annuel qui inclut tous les renseignements suivants :</p>
<ol>
<li>la date dISP privilégiée par le titulaire de permis pour la prochaine année civile</li>
<li>les périodes darrêt prévues durant la prochaine année civile</li>
<li>linformation sur les transferts prévus de matières nucléaires au cours de lannée civile suivante</li>
<li>le point sur les projets en cours ou à venir en rapport avec les garanties, par exemple la construction ou le déclassement dun bâtiment, le début de projets impliquant des matières nucléaires, des modifications aux types de matières nucléaires possédés, etc.</li>
</ol>  <h4>Orientation</h4>  <p>En consultation avec le titulaire de permis concerné, la CCSN peut demander une mise à jour des renseignements opérationnels plus souvent, p. ex., tous les trimestres ou toutes les semaines, pour faciliter les activités de vérification menées par lAIEA. Les formulaires de présentation des données opérationnelles sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
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
<h3 id="sec8-4">8.4	Renseignements requis par le <em>Protocole additionnel</em></h3>  <p>Tous les titulaires de permis doivent soumettre les renseignements mentionnés ci-après (sil y a lieu) à la CCSN au plus tard le 15 mars de chaque année pour que la CCSN puisse présenter la mise à jour annuelle que le Canada doit fournir à lAIEA en vertu du <em>Protocole additionnel</em> [3] :</p>
<ol>
<li>La description générale de lemplacement des activités de recherche et de développement liées au cycle du combustible nucléaire, selon la définition donnée à l<a href="#appB">annexe B (Liste des activités de recherche et de développement liées au cycle du combustible nucléaire)</a>, et linformation précisant ces activités.</li>
<li>Dans le cas dun titulaire de permis catégorisé comme installation ou emplacement hors installation, les dessins à jour du site, la description générale de chaque bâtiment présent sur le site, y compris lutilisation et le contenu, quand celui-ci nest pas évident daprès la description. Remarquez que les dessins à jour du site ne doivent être soumis que si les dessins déjà soumis ne sont plus exacts.</li>
<li>La description de lampleur des opérations pour chaque emplacement menant des activités spécifiées à l<a href="#appA">annexe A (Liste des activités de fabrication à caractère nucléaire à déclarer)</a>.</li>
<li>Les renseignements indiquant lemplacement, la situation opérationnelle, la capacité de production annuelle et la production annuelle actuelle des mines et des usines de concentration duranium ainsi que des usines de concentration de thorium.</li>
<li>Les renseignements concernant chaque emplacement qui comprend une pile de stockage de concentré de minerai duranium ou de thorium de plus dune tonne métrique, y compris les quantités, la composition chimique et lutilisation actuelle ou prévue de ces matières. La communication de cette information ne requiert aucune comptabilité détaillée des matières nucléaires et ne doit pas inclure les matières considérées être en transit.</li>
<li>Les renseignements concernant les matières du groupe 1B, comme suit :
<ol className="list-lower-alpha">
<li>Dans le cas des matières exemptées des garanties en vertu de larticle 37 de l<em>Accord relatif aux garanties</em>, la quantité, lutilisation et lemplacement de ces matières</li>
<li>Dans le cas des matières exemptées des garanties en vertu de larticle 36 de l<em>Accord relatif aux garanties</em>, mais lorsque les matières ne se présentent pas encore sous la forme voulue pour leur utilisation finale non nucléaire, linformation concernant la quantité et lutilisation à chaque emplacement</li>
</ol></li>
<li>Les renseignements sur lemplacement ou le traitement ultérieur de déchets de moyenne ou de haute activité contenant du plutonium, de luranium hautement enrichi ou de luranium 233 pour lesquels les garanties ont été levées en application de larticle 11 de l<em>Accord relatif aux garanties</em>. Aux fins du présent paragraphe, le « traitement ultérieur » nenglobe pas le réemballage des déchets ou le conditionnement ultérieur, sans séparation déléments, en vue de leur stockage ou de leur évacuation.</li>
<li>Les plans généraux pour les dix années à venir qui se rapportent au développement du cycle du combustible nucléaire (y compris les activités de recherche et de développement liées au cycle du combustible nucléaire qui sont prévues), lorsquils ont été approuvés par les autorités compétentes du Canada.</li>
</ol>  <p>Linformation contenue dans les documents des titulaires de permis doit couvrir lannée civile précédente.</p>   <h4>Orientation</h4>  <p>Les titulaires de permis devraient utiliser le logiciel Protocol Reporter de lAIEA au moment de soumettre ces renseignements à la CCSN. Un exemplaire de ce logiciel peut être obtenu en en faisant la demande à la CCSN.</p>
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
<h2 id="sec9">9. Conservation des documents</h2>  <p>Les titulaires de permis doivent conserver des copies de tous les documents requis en vertu de ce document dapplication de la réglementation :</p>
<ol>
<li>pour la période spécifiée en vertu du règlement applicable de la CCSN</li>
<li>tant que le titulaire de permis demeure en possession des matières nucléaires en lien avec les documents</li>
<li>tant que le titulaire de permis continue dexercer des activités de fabrication à caractère nucléaire qui doivent être déclarées (selon la définition donnée à l<a href="#appA">annexe A (Liste des activités de fabrication à caractère nucléaire à déclarer))</a> et qui sont en lien avec les documents</li>
<li>tant que le titulaire de permis continue dexercer des activités de recherche et de développement liées au cycle du combustible nucléaire (selon la définition donnée à l<a href="#appB">annexe B (Liste des activités de recherche et de développement liées au cycle du combustible nucléaire))</a> en lien avec les documents</li>
<li>pendant au moins cinq ans, la plus longue de ces périodes étant prise en considération</li>
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
<div id="appA"></div>
<h2 id="appA">Annexe A : Liste des activités de fabrication à caractère nucléaire à déclarer</h2>  <p>Afin de faciliter la conformité du Canada avec les accords relatifs aux garanties quil a conclus, certaines activités de fabrication à caractère nucléaire doivent être déclarées à la Commission canadienne de sûreté nucléaire (voir la <a href="#sec8-4">section 8.4</a>). Ces activités sont définies à lannexe I du <em>Protocole additionnel</em> [3] et elles incluent :</p>
<table className="width-100">  <tr>
<td className="">i)</td>
<td>la fabrication de bols pour centrifugeuse ou lassemblage de centrifugeuses gazeuses pour utilisation dans les procédés de séparation isotopique</td>  </tr>  <tr>
<td className="">ii)</td>
<td>la fabrication de barrières de diffusion gazeuse pour utilisation dans les procédés de séparation isotopique</td>  </tr>  <tr>
<td className="">iii)</td>
<td>la fabrication ou lassemblage de systèmes à laser pour la séparation isotopique</td>  </tr>  <tr>
<td className="">iv)</td>
<td>la fabrication ou lassemblage de séparateurs isotopiques électromagnétiques</td>  </tr>  <tr>
<td className="">v)</td>
<td>la fabrication ou lassemblage de colonnes ou déquipement dextraction conçus ou préparés spécialement pour utilisation dans les systèmes de séparation isotopique utilisant léchange chimique ou léchange ionique</td>  </tr>  <tr>
<td className="">vi)</td>
<td>la fabrication de tuyères ou de tubes vortex relatifs au procédé de séparation aérodynamique pour utilisation dans les procédés de séparation isotopique</td>  </tr>  <tr>
<td className="">vii)</td>
<td>la fabrication ou lassemblage de systèmes générateurs de plasma duranium</td>  </tr>  <tr>
<td className="">viii)</td>
<td>la fabrication de tubes de zirconium</td>  </tr>  <tr>
<td className="">ix)</td>
<td>la fabrication deau lourde ou de deutérium ou lamélioration de leur qualité</td>  </tr>  <tr>
<td className="">x)</td>
<td>la fabrication de graphite de pureté nucléaire, dune pureté supérieure à 5 ppm déquivalent en bore et dune densité supérieure à 1,50 g/cm<sup>3</sup></td>  </tr>  <tr>
<td className="">xi)</td>
<td>la fabrication de châteaux destinés au transport et/ou au stockage du combustible irradié</td>  </tr>  <tr>
<td className="">xii)</td>
<td>la fabrication de barres de commande pour réacteur</td>  </tr>  <tr>
<td className="">xiii)</td>
<td>la fabrication de réservoirs et de récipients dont la sûreté-criticité est assurée (de petit diamètre, annulaires ou plats, par exemple)</td>  </tr>  <tr>
<td className="">xiv)</td>
<td>la fabrication de machines à dégainer les éléments combustibles irradiés</td>  </tr>  <tr>
<td className="">xv)</td>
<td>la construction de cellules chaudes, ce qui signifie une cellule ou des cellules interconnectées ayant un volume total dau moins 6 m<sup>3</sup> et un blindage égal ou supérieur à léquivalent de 0,5 m de béton dune densité de 3,2 g/cm<sup>3</sup> ou plus, et disposant de matériel de télémanipulation</td>  </tr>  </table>
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
<h2 id="appB">Annexe B : Liste des activités de recherche et de développement liées au cycle du combustible nucléaire</h2>  <p>Afin de faciliter la conformité du Canada avec les accords relatifs aux garanties quil a conclus, certaines activités de recherche et de développement liées au cycle du combustible nucléaire doivent être déclarées à la Commission canadienne de sûreté nucléaire (voir la <a href="#sec8-4">section 8.4</a>). Les activités de ce genre sont définies à larticle 18a) du <em>Protocole additionnel</em> [3] comme les activités qui se rapportent expressément à tout aspect de la mise au point de procédés ou de systèmes concernant lun des éléments suivants :</p>
<ul>
<li>transformation de matières nucléaires</li>
<li>enrichissement de matières nucléaires</li>
<li>fabrication de combustible nucléaire</li>
<li>réacteurs</li>
<li>installations critiques</li>
<li>retraitement de combustible nucléaire</li>
<li>traitement (à lexclusion du réemballage ou du conditionnement ne comportant pas la séparation déléments, aux fins de stockage ou dévacuation) de déchets de moyenne ou de haute activité contenant du plutonium, de luranium hautement enrichi ou de luranium 233</li>
</ul>  <p>Remarquez que cela ninclut pas les activités liées à :</p>
<ul>
<li>la recherche scientifique théorique ou fondamentale</li>
<li>les travaux de recherche et de développement sur les utilisations industrielles des radio-isotopes, les applications médicales, hydrologiques ou agricoles, les effets sur la santé et lenvironnement, et lamélioration de la maintenance</li>
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
<div id="appC"></div>
<h2 id="appC">Annexe C : Orientation concernant les matières non soumises aux garanties</h2>  <p>La Commission canadienne de sûreté nucléaire (CCSN) considère que les substances énumérées ci-après sont des matières sous forme dutilisation finale non nucléaire desquelles luranium, le plutonium 239 et le thorium sont, dans les faits, irrécupérables et quelles ne sont par conséquent pas assujetties aux garanties. Veuillez noter que la liste est représentative et quelle nest pas complète.</p>
<ul>
<li>Le thorium inclus dans les manchons de lanterne, les baguettes de soudage, les ampoules électriques, les lentilles ou les composants optiques et les composants électroniques</li>
<li>Luranium naturel, luranium appauvri ou le thorium en tant que constituant mineur dans un alliage qui nest pas utilisé pour ses propriétés nucléaires</li>
<li>Luranium naturel, luranium appauvri ou le thorium utilisé comme colorant, pigment, teinture ou agent de glaçage</li>
<li>Les matières nucléaires en tant que contamination à des concentrations dactivité égales ou inférieures aux quantités dexemption mentionnées dans la colonne 2 de lannexe 1 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a></li>
</ul>  <p>Dans le cas de matières sous forme dutilisation finale non nucléaire qui ne sont pas mentionnées ci dessus, veuillez communiquer avec la CCSN pour obtenir des conseils sur les rapports relatifs aux garanties.</p>
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
<h2 id="appD">Annexe D : Tableaux de référence pour la comptabilité des matières nucléaires</h2>  <p>Cette section contient les tableaux de référence suivants :</p>  <p>D1 :	Fréquence de soumission des rapports de comptabilité des matières nucléaires</p>  <p>D2 :	Étiquettes et éléments de données utilisés dans les rapports de comptabilité des matières nucléaires</p>  <p>D3 :	Codes de variation de stock</p>  <p>D4 :	Codes de description des matières</p>  <p>D5 :	Codes délément ou disotope</p>  <p>D6 :	Codes des types de mesures</p>  <br />
<table className="width-100">  <caption className="text-left"><strong>Tableau D1 : Fréquence de soumission des rapports de comptabilité des matières nucléaires</strong></caption>  <tr>
<th className="text-center text-center" rowspan="2">Type de rapport</th>
<th className="text-center" colSpan="2">Matières du groupe 1</th>
<th className="text-center text-center" rowspan="2">Matières du groupe 2</th>  </tr>  <tr>
<th className="text-center">1A</th>
<th className="text-center">1B</th>  </tr>  <tr>
<td>Document de variations de stock (DVS)</td>
<td colSpan="3">Jour ouvrable suivant la variation de stock<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></td>  </tr>  <tr>
<td className="text-center">Grand livre général</td>
<td>Pour les installations : au plus tard le septième jour ouvrable après la fin du mois visé, seulement dans le cas des mois au cours desquels il y a eu une variation de stock</td>
<td className="text-center text-center">Non requis</td>
<td className="text-center text-center">Non requis</td>  </tr>   <tr>
<td>Grand livre général divisé (dans le cas dun mois au cours duquel il y a un inventaire du stock physique (ISP), mais où la date de lISP nest pas la fin du mois)</td>
<td><p>Pour les installations &ndash; premier rapport : au plus tard le septième jour ouvrable après quun ISP ait eu lieu, seulement sil y a eu variation du stock au cours de la période entre le début du mois et la date de lISP</p>
<p>Pour les installations &ndash; second rapport : au plus tard le septième jour ouvrable après la fin du moins visé, seulement sil y a eu variation du stock au cours de la période entre la date de lISP et la fin du mois  </p></td>
<td className="text-center text-center">Non requis</td>
<td className="text-center text-center">Non requis</td>  </tr>  <tr>
<td className="text-center">Liste des articles en stock</td>
<td>Doit être soumise au plus tard le septième jour ouvrable après un ISP ou à la demande de la CCSN</td>
<td>À la demande de la CCSN</td>
<td className="text-center text-center">Non requis</td>  </tr>  <tr>
<td>Sommaire des stocks par point de mesure principal-physique</td>
<td>Doit être soumis au plus tard le septième jour ouvrable après un ISP</td>
<td className="text-center text-center">Non requis</td>
<td className="text-center text-center">Non requis</td>  </tr>  <tr>
<td className="text-center">Sommaire des stocks de matières réglementées</td>
<td colSpan="3">Annuellement, le 31 janvier de chaque année au cours de laquelle le titulaire de permis a possédé des matières faisant lobjet dune obligation à létranger, et à la demande de la CCSN</td>  </tr>  <tr>
<td className="text-center">État de rapprochement</td>
<td>Doit être soumis au plus tard le septième jour ouvrable après un ISP</td>
<td className="text-center text-center">Non requis</td>
<td className="text-center text-center">Non requis</td>  </tr>  </table>  <br />
<table id="appD-D2" className="width-100">  <caption className="text-left"><strong>Tableau D2 : Étiquettes et éléments de données utilisés dans les rapports de comptabilité des matières nucléaires</strong></caption>  <tr>
<th className="text-center text-center">Étiquette</th>
<th className="text-center text-center">Élément de données</th>
<th className="text-center text-center">Rapport applicable</th>
<th className="text-center text-center">Description<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup></th>   </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">Type de rapport</td>
<td className="text-center text-center">Document de variations de stock (DVS)</td>
<td>Entrer le type de rapport relatif à la variation de stock; il y a six options : interne, domestique, importation, exportation, retransfert et provenant dun compte de dépôt.</td>  </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">N<sup>o</sup> de référence de titulaire de permis</td>
<td className="text-center text-center">Document de variations de stock, Sommaire des stocks par point de mesure principal-physique (SSTMP P)</td>
<td className="text-center">Entrer (facultatif) un numéro de référence de titulaire de permis.</td>  </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">Identification de lemplacement (ID EMP)</td>
<td className="text-center text-center">Document de variations de stock</td>
<td>Sil y a lieu, entrer lID EMP fourni par la CCSN.</td>  </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">Identificateur de suivi</td>
<td className="text-center text-center">Document de variations de stock</td>
<td>Entrer lidentificateur de suivi fourni par la CCSN lorsquon déclare des matières exemptées ou pour lesquelles il y a eu levée dexemption.</td>  </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">Nom de linstallation</td>
<td className="text-center text-center">Grand livre général (GL), liste des articles en stock (LAS), sommaire des stocks de matières réglementées (SSMR), état de rapprochement (ER)</td>
<td className="text-center">Entrer le nom de linstallation.</td>  </tr>  <tr>
<td className=" text-center text-center">S.O.</td>
<td className="text-center text-center">Date de révision</td>
<td className="text-center text-center">GL, LAS, SSMR, ER</td>
<td>Entrer la date de la première parution ou de la révision du rapport.</td>  </tr>  <tr>
<td className="text-center text-center">015</td>
<td className="text-center text-center">Période de déclaration/date</td>
<td className="text-center text-center">GL, LAS, SSPMP-P, SSMR, ER</td>
<td><p><strong>GL:</strong><br />
1. DE : la date de la première journée du grand livre, habituellement le premier jour du mois<br />
2. À : la date de la dernière journée de la période, habituellement le dernier jour du mois</p>
<p>(quand linventaire du stock physique [ISP] a lieu tout autre jour que le dernier jour du mois, il doit y avoir des grands livres généraux divisés, dont un grand livre couvrant la période du premier du mois à la date de lISP et un grand livre couvrant la période qui va du jour après lISP au dernier jour du mois.)</p>
<p><strong>LAS, SSPMP-P et ER</strong><br />
Entrer la date de lISP.</p>
<p><strong>SSMR</strong><br />
1. DE : le premier jour de lannée civile<br />
2. À : le dernier jour de lannée civile</p></td>  </tr>  <tr>
<td className="text-center text-center">207</td>
<td className="text-center text-center">Code dinstallation</td>
<td className="text-center text-center">GL, LAS, SSMR, ER</td>
<td>Entrer le code approprié pour linstallation ou lemplacement hors installation déclarant; les codes sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</td>  </tr>  <tr>
<td className="text-center text-center">307</td>
<td className="text-center text-center">Code de zone de bilan matières (ZBM)</td>
<td className="text-center text-center">GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Entrer le code approprié pour linstallation ou lemplacement hors installation déclarant; les codes sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</td>  </tr>  <tr>
<td className="text-center text-center">309</td>
<td className="text-center text-center">État dentrée</td>
<td className="text-center text-center">DVS, SSPMP-P</td>
<td><p>Utiliser « N » dans le cas dun nouveau rapport, « C » pour corriger un rapport précédent et « D » pour supprimer un rapport précédent.</p>
<p><strong>DVS</strong><br />
Utiliser « U » pour déclarer les codes de variation de stock suivants : L+, L-, R+ et R-.</p></td>  </tr>  <tr>
<td className="text-center text-center">370</td>
<td className="text-center text-center">ZBM/code de pays/code dinstallation de lexpéditeur</td>
<td className="text-center text-center">DVS, GL</td>
<td><p>Entrer le code de la ZBM expéditrice dans le cas dun transfert intérieur et le code de pays dans le cas dune importation. Dans le cas dun expéditeur domestique qui na pas de code de ZBM, entrer « NA ».</p>
<p>Les codes sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
<p><strong>DVS</strong><br />
Le code dinstallation est facultatif (les codes dinstallation étrangère sont fournis par la CCSN).</p></td>  </tr>  <tr>
<td className="text-center text-center">372</td>
<td className="text-center text-center">ZBM/code de pays/code dinstallation du receveur</td>
<td className="text-center text-center">DVS, GL</td>
<td><p>Entrer le code de la ZBM destinataire dans le cas dun transfert intérieur et le code de pays dans le cas dune exportation; dans le cas dune variation interne dinventaire, entrer la ZBM qui déclare la variation; dans le cas dun destinataire intérieur qui na pas de code de ZBM, entrer « NA ».</p>
<p>Les codes sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</p>
<p><strong>DVS</strong><br />
Le code dinstallation est facultatif (les codes dinstallation étrangère sont fournis par la CCSN).</p></td>  </tr>  <tr>
<td className="text-center text-center">407</td>
<td className="text-center text-center">Code de point de mesure principal (PMP)</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P</td>
<td><p>Pour cette étiquette, il faut remplir deux champs : un pour lexpéditeur et un pour le destinataire. Les codes pour le point de mesure principal du flux et le point de mesure principal-physique sont spécifiés dans les renseignements descriptifs relatifs à une installation ou à un emplacement hors installation. Dans tous les autres cas, les codes sont fournis par la CCSN.</p>
<p><strong>DVS</strong><br />
Entrer le code approprié :
<ol>
<li>Dans le cas dun transfert entre ZBM, lexpéditeur entre son code de PMP de flux sous le nom de lexpéditeur et le destinataire entre son code de PMP de flux sous le nom du destinateur. Lexpéditeur ou le destinataire entre aussi le code de PMP-physique dans le cas dun transfert concernant lemplacement hors installation au Canada. La liste de ces entités se trouve sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</li>
<li>Dans le cas dune variation interne de stock, entrer le PMP de flux dans le champ interne/receveur.</li>
<li>Dans le cas dun mouvement de matières du groupe 1B ou du groupe 2, utiliser « 2 » pour lexpéditeur et « 1 » pour le destinataire.</li>
</ol></p>
<p><strong>LAS</strong><br />
Entrer le code de PMP-physique à lendroit où se trouve larticle à la date de lISP.</p>
<p><strong>SSPMP-P</strong><br />
Dresser la liste de chaque PMP-physique pour la ZBM visée par le rapport.</p></td>  </tr>  <tr>
<td className="text-center text-center">411</td>
<td className="text-center text-center">Code de variation de stock</td>
<td className="text-center text-center">DVS, GL</td>
<td><p>Dans le cas dune expédition ou dune réception, lexpéditeur et le destinataire entrent chacun le code de variation de stock applicable, dans le champ approprié.</p>
<p>Dans le cas dune variation interne de stock, la ZBM en cause entre le code applicable dans le champ du destinataire.</p>
<p>La liste des codes de variation de stock se trouve dans le tableau D3.</p></td>  </tr>  <tr>
<td className="text-center text-center">412</td>
<td className="text-center text-center">Date de lexpédition et date interne/réception</td>
<td className="text-center text-center">DVS, GL</td>
<td><p>Entrer la date à laquelle la variation de stock a eu lieu ou a été établie.</p>
<p><strong>DVS</strong><br />
Utiliser le champ interne/receveur lorsquon déclare une variation interne de stock.</p></td>  </tr>  <tr>
<td className="text-center text-center">430</td>
<td className="text-center text-center">Code de description de matière (CDM)</td>
<td className="text-center text-center">DVS, LAS, SSPMP-P</td>
<td>Cette étiquette est un code à quatre caractères qui indique la forme physique et chimique, le type de contenant et létat dirradiation de la matière. Entrer le code à laide du tableau D4; chaque lot ne peut avoir quun seul CDM.</td>  </tr>  <tr>
<td className="text-center text-center">436</td>
<td className="text-center text-center">Description chimique et physique</td>
<td className="text-center text-center">DVS</td>
<td>Entrer une description textuelle du lot de matières nucléaires (au plus 100 caractères).</td>  </tr>  <tr>
<td className="text-center text-center">446</td>
<td className="text-center text-center">Nom de lot (receveur/ variations internes de stock)</td>
<td className="text-center text-center">DVS, GL, SSPMP-P</td>
<td><p>Entrer le nom de lot en format alphanumérique (jusquà 16 caractères).</p>
<p><strong>DVS et GL</strong><br />
Cette étiquette sert à déclarer les noms de lots en lien avec les réceptions et les variations internes de stock. Lorquon déclare une réception, le nom du lot peut être soit celui attribué par le destinataire, soit celui que lexpéditeur a entré à létiquette 447. Si le code de variation de stock à létiquette 411 est « DI » (écart entre lexpéditeur et le destinataire), le nom du lot est celui entré à létiquette 446 pour la réception du DVS original.</p>
<p><strong>SSPMP-P</strong><br />
Pour chaque PMP-physique, entrer les noms de lots englobant toutes les matières présentes au moment dun ISP.</p></td>  </tr>  <tr>
<td className="text-center text-center">447</td>
<td className="text-center text-center">Nom de lot de lexpéditeur (variations de stock de lexpéditeur)</td>
<td className="text-center text-center">DVS, GL</td>
<td>Entrer le nom de lot en format alphanumérique (au plus 16 caractères). Cette étiquette sert à déclarer les noms de lots en lien avec une expédition. Dans le cas dune importation, entrer le nom de lot de lexpéditeur étranger ou le mot-clé « inconnu ».</td>  </tr>  <tr>
<td className="text-center text-center">469</td>
<td className="text-center text-center">Code de type de mesure</td>
<td className="text-center text-center">DVS, LAS, SSPMP-P</td>
<td>Entrer le code de type de mesure approprié pour décrire lendroit où la masse a été déterminée et si elle a ou non déjà été déclarée. Le tableau D6 contient la liste des codes de mesure.</td>  </tr>  <tr>
<td className="text-center text-center">470</td>
<td className="text-center text-center">Nombre darticles</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P</td>
<td><p><strong>DVS et GL</strong><br />
Entrer le nombre darticles visés par la variation de stock.</p>
<p><strong>LAS</strong><br />
Si la ligne dentrée comprend plusieurs articles, entrer le nombre total darticles. Losquil sagit de matières en vrac et que le nombre nest généralement pas significatif, il faut entrer le chiffre « 1 » dans la case de létiquette 470. Cette case ne peut rester vide.</p>
<p><strong>SSPMP-P</strong><br />
Entrer le nombre total darticles pour chaque lot.</p></td>  </tr>  <tr>
<td className="text-center text-center">610</td>
<td className="text-center text-center">Masse de lélément &ndash; uranium naturel</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td><p>Déclarer la masse de lélément de chaque catégorie de matières nucléaires contenues dans larticle ou le lot en utilisant au moins une et jusquà six décimales.</p>
<p><strong>DVS</strong><br />
Sil y a lieu, entrer la masse de lélément ou du lot pour larticle sous-divisé par pays dorigine (voir létiquette 2003).</p>
<p><strong>LAS</strong><br />
Entrer la masse de lélément de chaque article.</p>
<p><strong>SSPMP-P</strong><br />
Entrer la masse des éléments de chaque lot.</p>
<p><strong>ER</strong><br />
Entrer les masses délément pour le stock comptable final, tirées du solde de clôture du GL, qui se termine à la date de lISP, et les masses délément pour le stock physique final (PE), tiré des totaux de chaque élément déclaré dans le SSPMP-P ou la LAS.</p>
<p><strong>SSMR</strong><br />
Entrer le bilan initial et le bilan final de chaque élément par pays envers lesquels existent des obligations à létranger.</p></td>  </tr>  <tr>
<td className="text-center text-center">620</td>
<td className="text-center text-center">Masse de lélément &ndash; uranium appauvri</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Voir la description pour létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">630</td>
<td className="text-center text-center">Masse de lélément &ndash; uranium enrichi</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Voir la description pour létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">640, 660,<br />670</td>
<td className="text-center text-center">Masse de lisotope &ndash; uranium enrichi</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td><p>Déclarer la masse de lisotope de chaque catégorie de matière nucléaire contenue dans larticle ou le lot, en utilisant au moins une et jusquà six décimales.</p>
<p><strong>DVS</strong><br />
Entrer la masse de lisotope de larticle ou du lot, sous-divisée par pays dorigine sil y a lieu (voir létiquette 2003).</p>
<p><strong>LAS</strong><br />
Entrer la masse de lisotope de chaque article dans la liste des articles en stock.</p>
<p><strong>SSPMP-P</strong><br />
Entrer la masse de lisotope pour chaque lot.</p>
<p><strong>ER</strong><br />
Entrer les masses délément pour le stock comptable final, tiré du solde de clôture du GL, qui se termine à la date de lISP, et les masses délément pour le stock physique final (PE), tiré des totaux de chaque élément déclarés dans le SSPMP-P ou la LAS.</p>
<p><strong>SSMR</strong><br />
Entrer le bilan initial et le bilan final de chaque élément, pour chaque pays envers lequel il existe des obligations à létranger.</p></td>  </tr>  <tr>
<td className="text-center text-center">700</td>
<td className="text-center text-center">Masse de lélément &ndash; plutonium</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Voir la description pour létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">800</td>
<td className="text-center text-center">Masse de lélément &ndash; thorium</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Voir la description pour létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">1000</td>
<td className="text-center text-center">Numéro de ligne</td>
<td className="text-center text-center">GL</td>
<td>Numéroter chaque ligne consécutivement au moyen dun nombre entier. Le numéro de la première ligne est « 0 » (zéro) et le bilan initial est déclaré sur cette ligne. Le bilan final pour la période de déclaration est entré sur la dernière ligne.</td>  </tr>  <tr>
<td className="text-center text-center">1001</td>
<td className="text-center text-center">Identification de larticle (ID de larticle)</td>
<td className="text-center text-center">LAS</td>
<td>Entrer lID de chaque article, par exemple le numéro de série de la grappe, le numéro du fût ou le numéro de série de la source.</td>  </tr>  <tr>
<td className="text-center text-center">1002</td>
<td className="text-center text-center">Corrections &ndash; date antérieure</td>
<td className="text-center text-center">GL</td>
<td>Dans le cas dune correction, entrer la date à laquelle le DVS a été soumis à lorigine ou la date de la plus récente correction.</td>  </tr>  <tr>
<td className="text-center text-center">1003</td>
<td className="text-center text-center">Corrections &ndash; numéro de ligne</td>
<td className="text-center text-center">GL</td>
<td>Dans le cas dune correction, entrer le numéro de la ligne du grand livre général sur laquelle le DVS initial, ou la plus récente correction du document, a été déclaré.</td>  </tr>  <tr>
<td className="text-center text-center">1004</td>
<td className="text-center text-center">Commentaires/remarques</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR</td>
<td>Entrer toute autre information servant à expliquer ou à aider à déterminer le lot ou les articles déclarés, sil y a lieu. Utiliser au plus 2000 caractères.</td>  </tr>  <tr>
<td className="text-center text-center">1006</td>
<td className="text-center text-center">Code de lélément</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR</td>
<td>Entrer le code délément approprié pour les matières mentionnées dans le rapport, tiré du tableau D5.</td>  </tr>  <tr>
<td className="text-center text-center">1020</td>
<td className="text-center text-center">Statut des garanties</td>
<td className="text-center text-center">DVS, SSPMP-P</td>
<td>Indiquer le statut de la matière relativement aux garanties. Létiquette 1020 comprend quatre options : « 1A » pour les matières du groupe 1A, « 2 » pour les matières du groupe 2, « Exemptées U » pour les matières exemptées des garanties en vertu de larticle 36 de l<em>Accord relatif aux garanties</em> et « Exemptées Q » pour les matières exemptées des garanties en vertu de larticle 37 de l<em>Accord relatif aux garanties</em>.</td>  </tr>  <tr>
<td className="text-center text-center">1021</td>
<td className="text-center text-center">N<sup>o</sup> de correction/ révision de rapport</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR, ER</td>
<td>Entrer « 0 » pour le rapport initial et augmenter le nombre de 1 pour chaque rapport subséquent.</td>  </tr>  <tr>
<td className="text-center text-center">1023</td>
<td className="text-center text-center">Unité</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR</td>
<td>Entrer lunité de masse appropriée pour lélément ou lisotope déclaré. Les unités doivent être des grammes, dans le cas de luranium enrichi (masse de lélément et masse de lisotope) et le plutonium, et des kilogrammes, dans le cas de luranium naturel et du thorium ainsi que de luranium appauvri.</td>  </tr>  <tr>
<td className="text-center text-center">1024</td>
<td className="text-center text-center">Code de lisotope</td>
<td className="text-center text-center">DVS, GL, LAS, SSPMP-P, SSMR</td>
<td>Entrer le code de lisotope approprié pour la matière mentionnée dans le rapport, tiré du tableau D5. La déclaration des codes disotope na lieu que dans le cas de luranium enrichi.</td>  </tr>  <tr>
<td className="text-center text-center">1025</td>
<td className="text-center text-center">Identificateur unique (facultatif)</td>
<td className="text-center text-center">DVS, GL, LAS</td>
<td>On peut entrer de linformation permettant didentifier le lot ou larticle, par exemple le numéro de lot ou lemplacement de stockage. Ces données sont destinées à compléter celles fournies à létiquette 446, 447 ou 1001. Utiliser au plus 20 caractères.</td>  </tr>  <tr>
<td className="text-center text-center">1027</td>
<td className="text-center text-center">Compagnie expéditrice</td>
<td className="text-center text-center">DVS</td>
<td>Entrer le nom de lentreprise, celui de la personne-ressource et ladresse de lexpéditeur.</td>  </tr>  <tr>
<td className="text-center text-center">1028</td>
<td className="text-center text-center">Compagnie Variation interne/destinataire</td>
<td className="text-center text-center">DVS, SSPMP-P</td>
<td><p>Entrer le nom de lentreprise et celui de la personne-ressource.</p>
<p><strong>DVS</strong><br />
Entrer aussi ladresse du destinataire ou de lauteur dune variation interne de stock.</p></td>  </tr>  <tr>
<td className="text-center text-center">1030</td>
<td className="text-center text-center">BILANS &ndash; Masse de lélément</td>
<td className="text-center text-center">GL</td>
<td>Sur la ligne 0, entrer le bilan initial de la masse de lélément, qui correspond au bilan final du grand livre général pour la période précédente. Sur les lignes « 1 » et suivantes, entrer le bilan courant de la masse de lélément. La déclaration de ce bilan peut comprendre au plus six décimales. Sur la dernière ligne du grand livre, entrer le bilan final de la masse de lélément se trouvant dans la ZBM durant la période visée.</td>  </tr>  <tr>
<td className="text-center text-center">1031</td>
<td className="text-center text-center">BILANS &ndash; Masse de lisotope</td>
<td className="text-center text-center">GL</td>
<td>Sur la ligne 0, entrer le bilan initial de la masse de lisotope, qui correspond au bilan final du grand livre général pour la période précédente. Sur les lignes « 1 » et suivantes, entrer le bilan courant de la masse de lisotope. La déclaration de ce bilan peut comprendre au plus six décimales. Sur la dernière ligne du grand livre, entrer le bilan final de la masse de lisotope se trouvant dans la ZBM durant la période visée.</td>  </tr>  <tr>
<td className="text-center text-center">1032</td>
<td className="text-center text-center">Masse de lélément &ndash; concentré duranium naturel</td>
<td className="text-center text-center">DVS, SSMR</td>
<td>Voir la description à létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">1634</td>
<td className="text-center text-center">Masse de lélément &ndash; concentré de thorium</td>
<td className="text-center text-center">DVS, SSMR</td>
<td>Voir la description à létiquette 610.</td>  </tr>  <tr>
<td className="text-center text-center">2001</td>
<td className="text-center text-center">Numéro du permis dexportation</td>
<td className="text-center text-center">DVS</td>
<td>Entrer le numéro complet du permis dexportation de la CCSN (p. ex., EL-A1-1234.1/2015) autorisant lexportation des matières nucléaires, ou le numéro de la lettre de consentement de la CCSN lorsquon déclare un transfert de matières nucléaires à partir dun compte de dépôt. Dans ce cas, il faut également entrer « HA » (compte de dépôt) à létiquette 411 et inscrire à létiquette 2005 le code du compte de dépôt à partir duquel le transfert a été effectué.</td>  </tr>  <tr>
<td className="text-center text-center">2002</td>
<td className="text-center text-center">Numéro du permis dimportation</td>
<td className="text-center text-center">DVS</td>
<td>Entrer le numéro complet du permis dimportation de la CCSN (p. ex, IL-A1-1234.1/2015) autorisant limportation des matières nucléaires.</td>  </tr>  <tr>
<td className="text-center text-center">2003</td>
<td className="text-center text-center">Code du pays dorigine</td>
<td className="text-center text-center">DVS</td>
<td>Entrer dans le rapport le pays dans lequel les matières nucléaires ont été extraites ou créées. Lorsquil y a plusieurs pays dorigine, entrer chaque pays sur une ligne distincte du formulaire. Les codes de pays sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</td>  </tr>  <tr>
<td className="text-center text-center">2004</td>
<td className="text-center text-center">Matière visée par une obligation à létranger &ndash; Code de pays</td>
<td className="text-center text-center">DVS, SSMR</td>
<td>Entrer les codes des pays émetteurs dobligations en rapport avec les matières déclarées, sil y a lieu. Dans le cas dune importation ou dune exportation, ces codes sont fournis par la CCSN, tandis que dans le cas dun transfert intérieur, ils le sont par le titulaire de permis. Si les matières ne sont pas visées par des obligations à létranger, ce champ et les champs de masse visée par des obligations à létranger (étiquettes 2006 et 2007) sont laissés vides.</td>  </tr>  <tr>
<td className="text-center text-center">2005</td>
<td className="text-center text-center">Code de compte de dépôt</td>
<td className="text-center text-center">DVS</td>
<td>Entrer le code du compte de dépôt applicable vers lequel des matières nucléaires sont exportées ou à partir duquel des matières sont transférées. Les codes de compte de dépôt sont disponibles sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a></td>  </tr>  <tr>
<td className="text-center text-center">2006</td>
<td className="text-center text-center">Matière visée par une obligation à létranger &ndash; Masse de lélément</td>
<td className="text-center text-center">DVS</td>
<td>Entrer la masse de lélément pour chaque code dobligation à létranger inscrit à létiquette 2004. Dans le cas de matières non visées par une obligation à létranger ou de matières canadiennes, ce champ est laissé vide.</td>  </tr>  <tr>
<td className="text-center text-center">2007</td>
<td className="text-center text-center">Matière visée par une obligation à létranger &ndash; Masse de lisotope</td>
<td className="text-center text-center">DVS</td>
<td>Entrer la masse de lisotope pour chaque code dobligation à létranger inscrit à létiquette 2004. Dans le cas de matières non visées par une obligation à létranger ou de matières canadiennes, ce champ est laissé vide.</td>  </tr>  </table>  <br />
<table id="appD-D3" className="width-100">  <caption className="text-left"><strong>Tableau D3 : Codes de variation de stock</strong></caption>  <tr>
<th className="text-center text-center">Mot-clé</th>
<th className="text-center text-center">Code</th>
<th className="text-center text-center">Explication</th>
<th>Variation interne de stock?</th>
<th>Groupe de matières</th>  </tr>  <tr>
<td className="text-center text-center">Arrondissement</td>
<td className="text-center text-center">R+</td>
<td>Pour déclarer un arrondissement au nombre entier supérieur.  À létiquette 309, utiliser la lettre « U » lorsquon utilise ce code.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Arrondissement</td>
<td className="text-center text-center">R-</td>
<td>Pour déclarer un arrondissement au nombre entier inférieur.  Utiliser la valeur absolue, c.-à-d. entrer larrondissement vers le nombre entier inférieur comme une valeur positive dans le DVS. À létiquette 309, utiliser la lettre « U » lorsquon utilise ce code.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Changement de catégorie</td>
<td className="text-center text-center">DE<br />
DN<br />
ED<br />
EN<br />
ND<br />
NE</td>
<td>Changement de catégorie dune quantité duranium à la suite du mélange, de lenrichissement, de lappauvrissement ou de la consommation. La première lettre dénote la catégorie originale, la deuxième lettre, la catégorie résultante : (E = enrichi, N = naturel, D = uranium appauvri).</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Consommation</td>
<td className="text-center text-center">LN</td>
<td>Perte de matières nucléaires due à leur transformation en élément(s) ou en isotope(s) à la suite de réactions nucléaires</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Écart expéditeur/ destinataire</td>
<td className="text-center text-center">DI</td>
<td>Différence entre la quantité déclarée par lexpéditeur et la quantité mesurée par le destinataire. Cette différence ne doit être déclarée que dans le cas où lexpéditeur et le destinataire ne peuvent sentendre sur la révision de la masse des matières expédiées. Seul le destinataire peut déclarer une DI. DI = (masse déclarée par lexpéditeur) – (masse mesurée par le destinataire)</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Exemption, quantité</td>
<td className="text-center text-center">EQ</td>
<td>Exemption de matières du groupe 1A du régime des garanties en vertu de larticle 37 de l<em>Accord relatif aux garanties</em>. Ce code ne peut être utilisé quavec la permission de la Commission canadienne de sûreté nucléaire (CCSN) et de lAgence internationale de lénergie atomique (AIEA), obtenue au préalable après avoir présenté le formulaire sur le <a href="http://www.nuclearsafety.gc.ca/fra/index">site Web de la CCSN</a>.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Exemption, utilisation</td>
<td className="text-center text-center">EU</td>
<td>Exemption de matières du groupe 1A du régime des garanties en vertu de larticle 36 de l<em>Accord relatif aux garanties</em>. Ce code ne peut être utilisé quavec la permission de la CCSN et de lAIEA obtenue au préalable après avoir présenté le formulaire sur le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Expédition à létranger</td>
<td className="text-center text-center">SF</td>
<td>Exportation de matières nucléaires hors du Canada</td>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">Groupe 1A,<br />
groupe 2</td>  </tr>  <tr>
<td className="text-center text-center">Expédition intérieure</td>
<td className="text-center text-center">SD</td>
<td>Expédition de matières nucléaires à un destinataire intérieur</td>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">Groupe 1A,<br />
groupe 2</td>  </tr>  <tr>
<td className="text-center text-center">Gain accidentel</td>
<td className="text-center text-center">GA</td>
<td>Matières nucléaires découvertes de façon inattendue dans la zone de bilan matières (ZBM). Le code GA ne peut être utilisé pour ces matières détectées au cours dun inventaire du stock physique (ISP) – dans ce cas, les matières découvertes doivent être déclarées comme une différence dinventaire (ID).</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">ID négative</td>
<td className="text-center text-center">L+</td>
<td>Pour déclarer une différence dinventaire (ID) négative, utiliser la valeur absolue de lID, c.-à-d. entrer lID négative comme une valeur positive dans le document de variations de stock (DVS). À létiquette 309, utiliser la lettre « U » lorsquon utilise ce code.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>
</tr>  <tr>
<td className="text-center text-center">ID positive</td>
<td className="text-center text-center">L-</td>
<td>Pour déclarer une ID positive. À létiquette 309, utiliser la lettre « U » lorsquon utilise ce code.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>
</tr>  <tr>
<td className="text-center text-center">Levée dexemption, quantité</td>
<td className="text-center text-center">DQ</td>
<td>Nouvelle application des garanties relativement à des matières nucléaires du groupe 1B auparavant exemptées en vertu de larticle 37 de l<em>Accord relatif aux garanties</em>.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1B</td>  </tr>  <tr>
<td className="text-center text-center">Levée dexemption, utilisation</td>
<td className="text-center text-center">DU</td>
<td>Nouvelle application des garanties relativement à des matières nucléaires du groupe 1B auparavant exemptées en vertu de larticle 36 de l<em>Accord relatif aux garanties</em>.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1B</td>  </tr>  <tr>
<td className="text-center text-center">Levée des garanties</td>
<td className="text-center text-center">TU</td>
<td>Levée des garanties de matières nucléaires qui ont été consommées ou qui ont été diluées de telle façon quelles ne sont plus utilisables pour quelque activité nucléaire que ce soit, ou quelles sont devenues, dans les faits, irrécupérables. Ce code ne peut être utilisé quavec la permission obtenue au préalable de la CCSN et de lAIEA.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Perte accidentelle</td>
<td className="text-center text-center">LA</td>
<td>Perte irrécupérable et par inadvertance dune quantité connue de matières nucléaires. Le code LA ne peut être utilisé pour des matières dont la disparition est découverte de façon inattendue au cours dun ISP &ndash; dans ce cas, la disparition des matières doit être déclarée comme une différence dinventaire (ID).</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Production nucléaire</td>
<td className="text-center text-center">NP</td>
<td>Production de plutonium 239 ou duranium 233 dans un réacteur nucléaire</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Rebuts mesurés</td>
<td className="text-center text-center">LD</td>
<td>Perte dune quantité mesurée ou estimative dune matière nucléaire qui a été consommée ou affectée à des fins telles quelle ne puisse plus se prêter à une utilisation nucléaire.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>
</tr>  <tr>
<td className="text-center text-center">Réception au point de départ</td>
<td className="text-center text-center">RS</td>
<td>Réception de matières nucléaires au point de départ dune comptabilité détaillée des matières nucléaires</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>
</tr>  <tr>
<td className="text-center text-center">Réception de létranger</td>
<td className="text-center text-center">RF</td>
<td>Réception de matières nucléaires importées au Canada</td>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">Groupe 1A,<br />
groupe 2</td>  </tr>  <tr>
<td className="text-center text-center">Réception intérieure</td>
<td className="text-center text-center">RD</td>
<td>Réception de matières nucléaires provenant dun expéditeur intérieur</td>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">Groupe 1A,<br />
groupe 2</td>  </tr>  <tr>
<td className="text-center text-center">Remise en lot &ndash; Augmentation du contenu du lot</td>
<td className="text-center text-center">RP</td>
<td>Quantité de matières ajoutées au lot inscrit dans lentrée en provenance dun autre lot, par suite de la remise en lot</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Remise en lot &ndash; Diminution du contenu du lot</td>
<td className="text-center text-center">RM</td>
<td>Quantité soustraite du lot mentionné dans lentrée, par suite de la remise en lot</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Retransfert à partir des déchets conservés</td>
<td className="text-center text-center">FW</td>
<td>Transfert de matières qui avaient été stockées à titre de déchets conservés, dans le stock principal de matières du groupe 1A. Ces matières deviennent de nouveau assujetties à une vérification périodique par lAIEA et doivent donc être incluses dans la LAS et le SSPMP-P de la ZBM où elles sont stockées.</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  <tr>
<td className="text-center text-center">Transfert vers les déchets conservés</td>
<td className="text-center text-center">TW</td>
<td><p>Transfert de matières du groupe 1A vers les déchets conservés, après réception de lautorisation de la CCSN et de lAIEA</p>
<p>Les matières qui doivent être désignées comme déchets conservés doivent contenir des matières nucléaires qui sont irrécupérables et être stockées séparément des autres matières nucléaires. Les matières désignées comme déchets conservés demeurent des matières du groupe 1A, mais elles ne sont pas assujetties à une vérification périodique par lAIEA et ne doivent donc pas apparaître dans la liste des articles en stock (LAS) ou le sommaire des stocks par point de mesure principal physique (SSPMP-P) relatif à la ZBM où elles sont stockées. Une LAS distincte couvrant uniquement les déchets conservés doit être disponible sur demande de la CCSN. Les matières désignées comme déchets conservés ne peuvent être traitées ou transférées hors de la ZBM sans dabord être retransférées à partir des déchets conservés.</p></td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Groupe 1A</td>  </tr>  </table>  <br />
<table className="width-100">
<caption className="text-left"><strong>Tableau D4 : Codes de description des matières</strong></caption>   <tr>
<th className="text-center text-center" colSpan="3">Deux premiers caractères : formes physiques et chimiques</th>  </tr>  <tr>
<th className="text-center text-center">Premier mot-clé</th>
<th className="text-center text-center">Deuxième mot-clé</th>
<th className="text-center text-center">Deux premiers caractères</th>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Céramique</td>
<td className="text-center text-center">Pastilles</td>
<td className="text-center text-center">CP</td>  </tr>  <tr>
<td className="text-center text-center">Éléments sphériques</td>
<td className="text-center text-center">CS</td>  </tr>  <tr>
<td className="text-center text-center">Autres</td>
<td className="text-center text-center">CO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="5">Combustible</td>
<td className="text-center text-center">Barres, aiguilles</td>
<td className="text-center text-center">ER</td>  </tr>  <tr>
<td className="text-center text-center">Plaques</td>
<td className="text-center text-center">EP</td>  </tr>  <tr>
<td className="text-center text-center">Grappes</td>
<td className="text-center text-center">EB</td>  </tr>  <tr>
<td className="text-center text-center">Assemblages</td>
<td className="text-center text-center">EA</td>  </tr>  <tr>
<td className="text-center text-center">Autres</td>
<td className="text-center text-center">EO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Déchets liquides</td>
<td className="text-center text-center">De faible activité</td>
<td className="text-center text-center">WL</td>  </tr>  <tr>
<td className="text-center text-center">De moyenne activité</td>
<td className="text-center text-center">WM</td>  </tr>  <tr>
<td className="text-center text-center">De haute activité</td>
<td className="text-center text-center">WH</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Métal</td>
<td className="text-center text-center">Pur</td>
<td className="text-center text-center">MP</td>  </tr>  <tr>
<td className="text-center text-center">Alliages</td>
<td className="text-center text-center">MA</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Poudre</td>
<td className="text-center text-center">Homogène</td>
<td className="text-center text-center">PH</td>  </tr>  <tr>
<td className="text-center text-center">Hétérogène</td>
<td className="text-center text-center">PN</td>  </tr>  <tr>
<td className="text-center text-center">Sources scellées</td>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">QS</td>  </tr>  <tr>
<td className="text-center text-center">Petites quantités, échantillons</td>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">SS</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Déchets</td>
<td className="text-center text-center">Homogène</td>
<td className="text-center text-center">SH</td>  </tr>  <tr>
<td className="text-center text-center">Hétérogène<br />
(résidus, scories, boues, fines, autres)</td>
<td className="text-center text-center">SN</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="4">Déchets solides</td>
<td className="text-center text-center">Coque de dégainage</td>
<td className="text-center text-center">AH</td>  </tr>  <tr>
<td className="text-center text-center">Déchets mélangés (plastique, gants, papiers, etc.)</td>
<td className="text-center text-center">AM</td>  </tr>  <tr>
<td className="text-center text-center">Équipement contaminé</td>
<td className="text-center text-center">AC</td>  </tr>  <tr>
<td className="text-center text-center">Autres</td>
<td className="text-center text-center">AO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Solution</td>
<td className="text-center text-center">Nitrate</td>
<td className="text-center text-center">LN</td>  </tr>  <tr>
<td className="text-center text-center">Fluorures</td>
<td className="text-center text-center">LF</td>  </tr>  <tr>
<td className="text-center text-center">Autres</td>
<td className="text-center text-center">LO</td>  </tr>  </table>  <br />
<table className="width-100">  <tr>
<th className="text-center text-center" colSpan="2">Troisième caractère : types de contenant</th>  </tr>  <tr>
<th className="text-center text-center">Troisième mot-clé</th>
<th className="text-center text-center">Troisième caractère</th>  </tr>  <tr>
<td className="text-center text-center">Cylindre</td>
<td className="text-center text-center">C</td>  </tr>  <tr>
<td className="text-center text-center">Paquet</td>
<td className="text-center text-center">P</td>  </tr>  <tr>
<td className="text-center text-center">Fût</td>
<td className="text-center text-center">D</td>  </tr>  <tr>
<td className="text-center text-center">Unités de combustible séparées (pour le combustible seulement)</td>
<td className="text-center text-center">S</td>  </tr>  <tr>
<td className="text-center text-center">Cage de transport</td>
<td className="text-center text-center">B</td>  </tr>  <tr>
<td className="text-center text-center">Bouteille</td>
<td className="text-center text-center">F</td>  </tr>  <tr>
<td className="text-center text-center">Autres</td>
<td className="text-center text-center">O</td>  </tr>  </table>  <br />
<table className="width-100">  <tr>
<th className="text-center text-center" colSpan="2">Quatrième caractère : caractérisation des matières nucléaires</th>  </tr>  <tr>
<th className="text-center text-center">Quatrième mot-clé</th>
<th className="text-center text-center">Quatrième caractère</th>  </tr>  <tr>
<td className="text-center text-center">Matière nucléaire non irradiée</td>
<td className="text-center text-center">F</td>  </tr>  <tr>
<td className="text-center text-center">Matière nucléaire irradiée</td>
<td className="text-center text-center">I</td>  </tr>  <tr>
<td className="text-center text-center">Déchets conservés</td>
<td className="text-center text-center">W</td>  </tr>  <tr>
<td className="text-center text-center">Matière irrécupérable</td>
<td className="text-center text-center">N</td>  </tr>  <tr>
<td className="text-center text-center">Matière récupérable</td>
<td className="text-center text-center">R</td>  </tr>  </table>  <br />
<table className="width-100">  <tr>
<th className="text-center text-center" colSpan="2">Cas spécial</th>  </tr>  <tr>
<th className="text-center text-center">Type de matières nucléaires</th>
<th className="text-center text-center">Code</th>  </tr>  <tr>
<td className="text-center text-center">Concentré de minerai duranium</td>
<td className="text-center text-center">CONC</td>  </tr>  </table>  <br />
<table className="width-100">
<caption className="text-left"><strong>Tableau D5 : Codes déléments et disotopes</strong></caption>   <tr>
<th className="text-center text-center">Code délément (étiquette 1006)</th>
<th className="text-center text-center">Élément</th>
<th className="text-center text-center">Unité de masse (étiquette 1023)</th>  </tr>  <tr>
<td colsan="3"><em>Matières nucléaires du groupe 1</em></td>  </tr>  <tr>
<td className="text-center">N</td>
<td className="text-center">Uranium naturel</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td className="text-center">D</td>
<td className="text-center">Uranium appauvri</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td>E (uranium enrichi soit en uranium 235, soit en uranium 233, soit les deux)</td>
<td className="text-center">Uranium enrichi</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">P</td>
<td className="text-center">Plutonium</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">T</td>
<td className="text-center">Thorium</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td colSpan="3"><em>Matières nucléaires du groupe 2</em></td>  </tr>  <tr>
<td className="text-center">C</td>
<td className="text-center">Concentré duranium naturel</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td className="text-center">TC</td>
<td className="text-center">Concentré de thorium</td>
<td className="text-center">kg</td>  </tr>  <tr>
<th className="text-center text-center">Code disotope (étiquette 1024)</th>
<th className="text-center text-center">Élément</th>
<th className="text-center text-center">Unité de masse (étiquette 1023)</th>  </tr>  <tr>
<td className="text-center">K</td>
<td className="text-center">Enrichi &ndash; teneur duranium 233 enrichi</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">J</td>
<td className="text-center">Teneur en uranium 233 enrichi et teneur en uranium 235</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">G</td>
<td className="text-center">Teneur en uranium 235 enrichi</td>
<td className="text-center">g</td>  </tr>  </table>  <br />
<table className="">  <caption className="text-left"><strong>Tableau D6 : Codes des types de mesures</strong></caption>   <tr>
<th>&nbsp;</th>
<th>Valeur de la masse<br />
pour un lot non déjà<br />
déclaré par la zone de<br />
bilan matières (ZBM)<br />
qui présente le rapport</th>
<th>Valeur de la masse<br />
pour un lot non déjà déclaré<br />
par la ZBM qui<br />
présente le rapport</th>  </tr>  <tr>
<th>Valeur de la masse<br />
fondée sur une mesure<br />
faite par la ZBM qui<br />
présente le rapport</th>
<td className="text-center text-center">M</td>
<td className="text-center text-center">T</td>  </tr>  <tr>
<th>Valeur de la masse<br />
fondée sur une mesure<br />
effectuée ailleurs (p. ex.,<br />
à une autre ZBM)</th>
<td className="text-center text-center">N</td>
<td className="text-center text-center">L</td>  </tr>  </table>  <br />
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
<h2 id="glossary">Glossaire</h2>  <p>Les définitions des termes utilisés dans le présent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>.</p>  <p>Le REGDOC-3.6 fournit des termes et des définitions utilisés dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a> (LSRN), ses règlements dapplication et ainsi que les documents dapplication de la réglementation et dautres publications de la CCSN. Il est fourni à titre de référence et pour information.</p>  <p>Les termes qui suivent seront ajoutés au REGDOC-3.6 après les consultations publiques. Veuillez inclure vos commentaires ou votre rétroaction sur les termes et les définitions dans votre examen de ce projet de document.</p>
<dl>
<dt><strong>confinement</strong> <em>(containment)</em></dt>
<dd>Caractéristiques structurales dune installation, de conteneurs ou déquipements utilisés pour établir lintégrité physique dune zone ou darticles et pour préserver la continuité de la connaissance de la zone ou des articles en prévenant laccès non détecté à des matières nucléaires, le mouvement de matières nucléaires ou la perturbation des articles.</dd>
<dt><strong>différence dinventaire</strong> <em>(inventory difference, material unaccounted for [MUF])</em></dt>
<dd>Différence entre le stock comptable et le stock physique.</dd>
<dt><strong>données de base</strong> <em>(source data)</em></dt>
<dd>Données enregistrées durant une mesure ou un étalonnage, ou utilisées pour trouver des relations empiriques, qui servent à identifier des matières nucléaires et fournissent des données sur un lot. Les données de base peuvent inclure, par exemple, la masse des composés, les facteurs de conversion servant à déterminer la masse de lélément, la densité, la concentration dun élément, des rapports isotopiques, la relation entre le volume et les lectures de manomètre, et la relation entre le plutonium produit et lénergie générée.</dd>
<dt><strong>fondement dautorisation</strong> <em>(licensing basis)</em></dt>
<dd>Ensemble dexigences et de documents visant une installation ou une activité réglementée, qui comprend :
<ol>
<li>les exigences réglementaires stipulées dans les lois et règlements applicables</li>
<li>les conditions et les mesures de sûreté et de réglementation décrites dans le permis relatif à linstallation ou à lactivité et les documents cités en référence directement dans ce permis</li>
<li>les mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande</li>
</ol></dd>
<dt><strong>inspecteur de lAgence internationale de lénergie atomique</strong> <em>(International Atomic Energy Agency inspector)</em></dt>
<dd>Représentant de lAgence internationale de lénergie atomique (AIEA) nommé par le directeur général de lAIEA et autorisé pour le Conseil des gouverneurs de lAIEA à mener des inspections en vertu du régime des garanties, et agréé par le gouvernement du Canada pour mener des inspections en vertu du régime des garanties au Canada.</dd>
<dt><strong>installation</strong> <em>(facility)</em></dt>
<dd>Réacteur, installation critique, usine de transformation, usine de fabrication, usine de traitement de combustible irradié, usine de séparation isotopique ou installation de stockage distincte; ou tout emplacement où des matières nucléaires en quantités supérieures à 1 kilogramme effectif sont habituellement utilisées.</dd>
<dt><strong>matières nucléaires</strong> <em>(nuclear material)</em></dt>
<dd>Plutonium 239, uranium 233, uranium enrichi en isotopes de 235 ou 233, uranium contenant le mélange naturel disotopes, uranium appauvri en isotopes 235, et thorium. Le terme « matières nucléaires » ne doit pas être interprété comme sappliquant à luranium ou au thorium dans du minerai, des résidus de minerai ou dautres matières naturelles.</dd>
<dt><strong>point de mesure principal (PMP)</strong> <em>(key measurement point [KMP])</em></dt>
<dd>Endroit où les matières nucléaires apparaissent sous une forme telle quon peut les mesurer et déterminer le flux ou le stock de matières. Les points de mesure principaux incluent par conséquent notamment les intrants et les extrants (y compris les rebuts mesurés) ainsi que les stockages dans les zones de bilan matières.</dd>
<dt><strong>sceau de lAgence internationale de lénergie atomique</strong> <em>(International Atomic Energy Agency seal)</em></dt>
<dd>Dispositif inviolable utilisé pour joindre des segments mobiles dun confinement de manière telle quil est difficile daccéder au contenu de celui ci sans ouvrir le sceau ou briser le confinement.</dd>
<dt><strong>site</strong> <em>(site)</em></dt>
<dd>En ce qui a trait au régime des garanties, zone délimitée par le Canada dans les renseignements descriptifs pertinents dune installation, y compris une installation fermée, ou dans les renseignements pertinents dun emplacement hors installation où des matières nucléaires sont habituellement utilisées, y compris un emplacement hors installation fermé où des matières nucléaires étaient habituellement utilisées (cela se limite aux emplacements comprenant des cellules de haute activité ou aux emplacements où des activités liées à la conversion, à lenrichissement, à la fabrication ou au retraitement de combustible étaient effectuées). Cela doit aussi inclure toutes les installations situées à lintérieur des limites de linstallation ou de lemplacement qui servent à la fourniture ou à lutilisation de services essentiels, notamment : les cellules de haute activité pour le traitement de matériaux irradiés ne contenant pas de matières nucléaires; les installations servant au traitement, au stockage et à lévacuation des déchets; les bâtiments associés aux activités prescrites mentionnées par le Canada en vertu de larticle 2.A.(iv) du <em>Protocole additionnel à lAccord entre le Canada et lAgence internationale de lénergie atomique relatif à lapplication des garanties dans le cadre du Traité sur la non-prolifération des armes nucléaires</em>.</dd>
<dt><strong>surveillance par lAgence internationale de lénergie atomique</strong> <em>(International Atomic Energy Agency surveillance)</em></dt>
<dd>Collecte dinformation au moyen dobservations effectuées par des inspecteurs et/ou des instruments, visant à permettre de détecter les mouvements de matières nucléaires ou dautres articles et toute perturbation dun confinement ou altération déquipement, déchantillons ou de données de lAgence internationale de lénergie atomique.</dd>
<dt><strong>variation interne de stock</strong> <em>(internal inventory change)</em></dt>
<dd>Variation de stock qui affecte une seule zone de bilan matières, par exemple une perte accidentelle.</dd>
<dt><strong>vérification du stock par lAgence internationale de lénergie atomique</strong> <em>(International Atomic Energy Agency inventory verification)</em></dt>
<dd>Activité dinspection effectuée pour confirmer que la quantité des matières nucléaires réellement présentes à un moment donné dans une zone de bilan matières est conforme au stock comptable de matières nucléaires consigné par lexploitant.</dd>  </dl>
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
<h2 id="ref">Références</h2>  <ol>
<li><em>Traité sur la non prolifération des armes nucléaires</em> (TNP), Nations Unies, New York.<br />
<a href="http://www.iaea.org/sites/default/files/publications/documents/infcircs/1970/infcirc140_fr.pdf">iaea.org/sites/default/files/publications/documents/infcircs/1970/infcirc140_fr.pdf</a></li>
<li><em>Texte de laccord entre le Canada et lAgence relatif à lapplication de garanties dans le cadre du Traité sur la non prolifération des armes nucléaires</em> (Accord relatif aux garanties).<br />
<a href="https://www.iaea.org/sites/default/files/publications/documents/infcircs/1972/infcirc164_fr.pdf">iaea.org/publications/documents/infcircs/agreement-between-government-canada-and-international-atomic-energy-agency-application-safeguards-connection-treaty-non-proliferation-nuclear-weapons</a></li>
<li><em>Protocole additionnel à laccord entre le Canada et lAgence internationale de lénergie atomique relatif à lapplication de garanties dans le cadre du Traité sur la non prolifération des armes nucléaires</em> (Protocole additionnel).<br />
<a href="https://www.iaea.org/sites/default/files/infcirc164a1_fr.pdf">iaea.org/sites/default/files/infcirc164a1_fr.pdf</a></li>
<li>ASTM International, ASTM-C753 04, <span lang="en"><em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em></span>. <a href="http://www.astm.org/cgi-bin/resolver.cgi?C753-04">astm.org/cgi-bin/resolver.cgi?C753-04</a></li>
<li>Agence internationale de lénergie atomique, STR-368, <span lang="en"><em>International Target Values 2010 for Measurement Uncertainties in Safegarding Nuclear Materials</em></span>.</li>  </ol>
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Notes de bas de page</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Les mouvements des matières du groupe 1B doivent être déclarés à la CCSN dans un document de variations de stock. Cette déclaration nest toutefois pas requise lorsque les matières sont transférées temporairement et quil ny a pas de changement de propriétaire. Le titulaire de permis doit toutefois conserver les données de base qui indiquent lemplacement des matières nucléaires concernées par ce genre de transfert.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>Dans la déclaration de linformation contenue aux étiquettes 015 à 800 inclusivement, il ne faut pas utiliser les symboles suivants : les deux points, la barre oblique, le point-virgule et le symbole de numéro (#).</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>  <br />
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