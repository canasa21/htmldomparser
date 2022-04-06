import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "DIS-17-01, Cadre pour le rétablissement en cas d'urgence nucléaire ou radiologique", 
                dateModified: "2017-08-15",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/d-17-01"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Préface</h2>  <p>Les documents de travail jouent un rôle important dans la sélection et lélaboration du cadre et du programme de réglementation de la Commission canadienne de sûreté nucléaire (CCSN). Ils visent à obtenir, tôt dans le processus, la rétroaction du public sur les politiques et les approches de la CCSN.</p>  <p>Lutilisation des documents de travail au début du processus de réglementation souligne lengagement de la CCSN à légard dun processus de consultation transparent. La CCSN analyse la rétroaction préliminaire et en tient compte lorsquelle détermine le type et la nature des exigences et des orientations à établir.</p>   <p>Étant donné que le rétablissement en cas durgence nucléaire ou radiologique constitue un sujet vaste et complexe, il aura une incidence sur plusieurs ordres de gouvernement et de nombreux organismes dintervention durgence. Afin de gérer les éléments complexes associés au rétablissement et de recueillir des commentaires préliminaires, une version provisoire du présent document de travail a été diffusée à certaines parties intéressées. De plus, un partenariat a été établi entre deux organismes dintervention durgence : la CCSN et Santé Canada. Le présent document de travail découle de cette collaboration continue.</p>
<p>Les documents de travail sont rendus publics aux fins de commentaires pour une période déterminée. À la fin de la période de commentaires, le personnel de la CCSN examine toutes les observations formulées par le public. Les commentaires reçus sont ensuite affichés aux fins de rétroaction sur le site Web de la CCSN pour une deuxième période de consultation.</p>   <p>La CCSN tient compte de toute la rétroaction obtenue dans le cadre de ce processus de consultation lorsquelle établit son approche de réglementation.</p>
<div className="col-md-12 module-table-contents">
<h2>Table des matières</h2>
<ul>
<li><a href="#summary">Sommaire</a></li>
<li><a href="#sec1">1.0 Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Quest-ce que le rétablissement?</a></li>
</ul></li>
<li><a href="#sec2">2.0 Introduction à la gestion des urgences</a>
<ul>
<li><a href="#sec2-1">2.1 Intervention en cas durgence nucléaire au Canada</a></li>
</ul></li>
<li><a href="#sec3">3.0 Plans de rétablissement au Canada</a>
<ul>
<li><a href="#sec3-1">3.1 Plans de rétablissement fédéraux</a>
<ul>
<li><a href="#sec3-1-1">3.1.1 Activités de rétablissement particulières décrites dans le PFIU</a></li>
<li><a href="#sec3-1-2">3.1.2 Activités de rétablissement particulières décrites dans le PFUN</a></li>
</ul></li>
<li><a href="#sec3-2">3.2 Plans de rétablissement provinciaux</a>
<ul>
<li><a href="#sec3-2-1">3.2.1 Exemple de plan existant : Ontario</a></li>
<li><a href="#sec3-2-2">3.2.2 Exemple de plan existant : Colombie-Britannique</a></li>
</ul></li>
<li><a href="#sec3-3">3.3 Rôles et responsabilités des municipalités pour le rétablissement</a></li>
</ul></li>
<li><a href="#sec4">4.0 Cadre de rétablissement proposé</a>
<ul>
<li><a href="#sec4-1">4.1 Éléments clés du rétablissement</a>
<ul>
<li><a href="#sec4-1-1">4.1.1 Stabilité de la situation</a></li>
<li><a href="#sec4-1-2">4.1.2 Transition</a></li>
<li>Principe doptimisation</li>
<li><a href="#sec4-1-3">4.1.3 Protection du public</a></li>
<li><a href="#sec4-1-4">4.1.4 Retour à la nouvelle normalité</a></li>
</ul></li>
<li><a href="#sec4-2">4.2 Protection du public durant le rétablissement</a>
<ul>
<li><a href="#sec4-2-1">4.2.1 Mise en œuvre de stratégies de rétablissement</a>
<ul>
<li>4.2.1.1 Mesures de protection mises en œuvre par les organisations responsables de la gestion du rétablissement</li>
<li>4.2.1.2 Recommandations relatives aux mesures dautoassistance</li>
</ul></li>
<li><a href="#sec4-2-2">4.2.2 Surveillance de lenvironnement et de la chaîne alimentaire</a></li>
<li><a href="#sec4-2-3">4.2.3 Voies dexposition et évaluations de doses</a></li>
<li><a href="#sec4-2-4">4.2.4 Surveillance de la santé</a></li>
<li><a href="#sec4-2-5">4.2.5 Gestion de la contamination</a>
<ul>
<li>4.2.5.1 Décontamination</li>
<li>4.2.5.2 Gestion des déchets</li>
</ul></li>
<li><a href="#sec4-3">4.3 Protection des travailleurs responsables du rétablissement</a></li>
</ul></li>
<li><a href="#sec5">5.0 Facteurs relatifs aux communications avec le public durant le rétablissement</a></li>
<li><a href="#sec6">6.0 Commentaires des parties intéressées sur lapproche réglementaire proposée</a></li>
<li><a href="#sec7">7.0 Comment participer</a></li>
<li><a href="#acro">Sigles et acronymes</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">Références</a></li>
<li><a href="#biblio">Bibliographie</a></li>   </ul>
</div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="summary"></div>
<h2>Sommaire</h2>  <p>La préparation aux situations durgence est généralement axée sur la phase dintervention en cas durgence nucléaire ou radiologique, pour laquelle une planification rigoureuse est essentielle en vue datténuer les conséquences et de protéger adéquatement le public des possibles effets nocifs du rayonnement. Le processus décisionnel suivant la phase de rétablissement est également très complexe. Il est donc nécessaire délaborer un cadre rigoureux pour le rétablissement en cas durgence nucléaire ou radiologique.</p>  <p>Dans le présent document de travail, la Commission canadienne de sûreté nucléaire (CCSN) décrit les mesures que pourraient devoir prendre en compte les décideurs avant ou après une intervention durgence. Ces mesures visent à protéger le public des effets potentiels sur la santé de la radioexposition à long terme et tiennent compte des incidences économiques, politiques, environnementales, culturelles, éthiques, psychologiques et sociales des décisions prises pour atténuer toute conséquence radiologique potentielle sur la santé.</p>  <p>Le présent document de travail vise à proposer des considérations et des orientations réglementaires ainsi quà recueillir des commentaires préliminaires sur le projet de cadre canadien pour le rétablissement en cas durgence. La CCSN compte mettre à profit ces commentaires dans la version définitive de son document de travail en vue dune période de consultation publique et pour éclairer son approche réglementaire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1.0 Introduction</h2>  <p>La Commission canadienne de sûreté nucléaire (CCSN) réglemente lutilisation de lénergie et des matières nucléaires afin de préserver la santé, la sûreté et la sécurité, de protéger lenvironnement, de respecter les engagements internationaux du Canada à légard de lutilisation pacifique de lénergie nucléaire, et dinformer objectivement le public sur les plans scientifique ou technique ou en ce qui concerne la réglementation du domaine de lénergie nucléaire.</p>  <p>En vertu de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/TexteComplet.html"><em>Loi sur la sûreté et la réglementation nucléaires</em></a> (LSRN) [1], la mission de la CCSN comprend quatre éléments clés :</p>
<ul>
<li>réglementer le développement, la production et lutilisation de lénergie nucléaire au Canada pour préserver la sûreté, la santé et la sécurité et protéger lenvironnement</li>
<li>réglementer la production, la possession, lutilisation et le transport des substances nucléaires, ainsi que la production, la possession et lutilisation de léquipement et des renseignements réglementés</li>
<li>mettre en œuvre les mesures de contrôle international du développement, de la production, du transport et de lutilisation de lénergie et des substances nucléaires, y compris les mesures de non-prolifération des armes nucléaires et des explosifs nucléaires</li>
<li>informer le public, sur les plans scientifique, technique ou en ce qui concerne la réglementation du domaine de lénergie nucléaire, au sujet des activités de la CCSN et des conséquences, pour la santé et la sécurité des personnes et pour lenvironnement, du développement, de la production, de la possession, du transport et de lutilisation des substances nucléaires</li>
</ul>  <p>De plus, la CCSN administre, met en œuvre et maintient un programme de gestion des urgences nucléaires, par lintermédiaire duquel le Canada coordonne son intervention en cas dincidents nucléaires et radiologiques nationaux. Ce programme est établi conformément à la <a href="http://laws-lois.justice.gc.ca/fra/lois/E-4.56/"><em>Loi sur la gestion des urgences</em></a> [2], à la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/TexteComplet.html">LSRN</a> [1], ainsi quaux documents dapplication de la réglementation et aux plans dintervention en cas durgence nucléaire. Il est fondé sur une planification rigoureuse et une collaboration étroite avec dautres ministères et organismes fédéraux et avec des organisations provinciales et internationales.</p>  <p>La figure 1 établit le cadre pour une urgence radiologique ou nucléaire et présente des exemples de mesures clés prises durant la préparation aux situations durgence, lintervention en cas durgence et le rétablissement. Au Canada, les attentes en matière de préparation et dintervention en cas durgence sont bien établies et documentées, mais laspect du rétablissement doit encore être peaufiné.</p>
<p><strong>Figure 1 : Cadre pour une urgence nucléaire ou radiologique et exemples de mesures connexes clés à prendre durant la préparation aux situations durgence, lintervention en cas durgence et le rétablissement</strong></p>  <img src="/images/d-17-01/figure-1-fra.jpg" alt="" />  <p>Les situations durgence bien réelles du passé (par exemple, Tchernobyl, Fukushima et Goiânia) soulignent la nécessité de mettre davantage laccent sur la phase de rétablissement à la suite durgences radiologiques ou nucléaires, peu importe leur magnitude. Reconnaissant limportance accrue accordée à ce domaine à léchelle internationale, il faut envisager délaborer de lorientation pratique à lintention des décideurs et des parties intéressées en ce qui a trait aux urgences lors desquelles :</p>
<ul>
<li>la contamination est vaste et la vie a été considérablement perturbée durant une longue période </li>
<li>lincidence radiologique, psychologique et sociale est limitée dans lespace et dans le temps</li>
</ul>
<div className="span-3 mrgn-rght-0 margin-botton-none">  <p>Les commentaires recueillis sur le cadre proposé serviront à éclairer lapproche de la CCSN. Loutil sélectionné permettra doffrir une orientation quant aux éléments dont il faut tenir compte durant le rétablissement et la transition vers celui-ci en cas dincident ou durgence. Il complétera également tout document dapplication de la réglementation existant ayant trait à la préparation aux situations durgence, aux exigences dintervention et à lorientation relative à lélaboration de mesures durgence pour les installations nucléaires de catégorie I et pour les mines et usines de concentration duranium.</p>  </div>
<div className="col-md-3 module  pull-right mrgn-lft-0 mrgn-bttm-0 mrgn-bttm-xl" style="border:3px solid #006400;" >  <h3 className="text-center">Autres sources de renseignements</h3>
<ul>
<li>Pour obtenir dautres renseignements sur le rétablissement sur le site, veuillez consulter le <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1/index">REGDOC-2.10.1, <em>Préparation et intervention relatives aux urgences nucléaires</em></a> [3]</li>
<li>Pour obtenir dautres renseignements sur la protection des travailleurs durant une urgence, veuillez consulter le <a href="http://gazette.gc.ca/rp-pr/p1/2016/2016-10-08/html/reg1-fra.php#reg"><em>Règlement sur la radioprotection</em></a> [4]</li>
</ul>  </div>  <div className="clear"></div>
<h3>Portée</h3>  <p>Le présent document établit en détail les mesures qui doivent être prises en compte pour préserver la santé et la sécurité du public et atténuer les conséquences environnementales à la suite dune urgence. Bien quelles ne sinscrivent pas dans la portée du présent document, les conséquences socioéconomiques doivent également être prises en compte dans le cadre des efforts de rétablissement.</p>  <p>Dans le contexte du présent cadre, on présume quil y a eu un rejet de substances radioactives menant à des niveaux de contamination radioactive supérieure aux limites réglementaires dans le domaine public (cest-à-dire, dans une zone accessible au public qui ne relève pas directement du titulaire de permis). Dans certaines situations durgence, des mesures pourraient être prises à titre préventif (par exemple, une évacuation) avant un rejet prévu. En général, si un tel rejet ne survient pas et que les conditions se stabilisent, des mécanismes sont en place afin de mettre un terme aux mesures de protection ou de les lever afin dassurer un retour rapide aux activités normales. Le présent document de travail nest pas axé sur ces situations. Toutefois, les préoccupations du public et lintérêt politique peuvent justifier la prise de certaines mesures. Certains éléments du cadre de rétablissement peuvent alors être mis en œuvre, par exemple des activités de communication et de mobilisation du public.</p>  <p>En ce qui a trait à certaines activités et infrastructures essentielles (comme les hôpitaux), les mesures de rétablissement devront être prises très rapidement à la suite de lurgence, malgré le fait que de nombreux organismes pourraient demeurer en mode dintervention en cas durgence. Ces mesures de rétablissement préliminaire devraient être mises en œuvre par lintermédiaire de lorganisation responsable de la gestion des urgences, mais elles peuvent être orientées par les concepts du présent document.</p>
<div className="col-md-12 module ">  <p>Pour la section « Portée », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q1. Selon vous, la portée est-elle appropriée dans le contexte de lélaboration dun cadre de rétablissement? Dans la négative, de quelle manière devrait-elle être modifiée ou améliorée?</p>  <p>Q2. Pourrait-on clarifier nos hypothèses? Dans laffirmative, de quelle façon?</p>  </div>
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
<h3 id="sec1-1">1.1 Quest-ce que le rétablissement?</h3>  <p>Le rétablissement comprend les mesures prises à court, à moyen et à long terme à la suite dune urgence en vue de rétablir la qualité de vie, les systèmes sociaux, les activités économiques et linfrastructure communautaire ainsi que de remettre en état lenvironnement. Lampleur des mesures prises durant le rétablissement serait généralement déterminée par la compétence autorisée, en consultation avec les parties intéressées touchées par lurgence et par ses conséquences. La portée des efforts de rétablissement devrait être proportionnelle à lincidence de lurgence sur la population et lenvironnement à proximité.</p>   <p>Afin que le public puisse reprendre ses habitudes de vie normales, les efforts de rétablissement dépendront de chaque situation et pourraient comprendre ce qui suit :</p>
<ul>
<li>surveillance environnementale et remise en état</li>
<li>décontamination et gestion des déchets</li>
<li>soutien psychosocial, y compris la surveillance radiologique pour rassurer le public</li>
<li>reconstruction de linfrastructure touchée</li>
<li>reprise économique et dispositions en matière daide financière</li>
<li>suivi médical à long terme</li>
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
<h2 id="sec2">2.0 Introduction à la gestion des urgences</h2>  <p>La gestion des urgences compte quatre piliers, soit la prévention et latténuation, la préparation, lintervention et le rétablissement [5]. La prévention des urgences nucléaires au Canada relève principalement des titulaires de permis. En vertu de la LSRN, la CCSN réglemente lindustrie nucléaire canadienne afin de limiter les risques pour lenvironnement ainsi que pour la santé et la sécurité du public. La prévention sentend des mesures prises pour quune urgence nucléaire ne survienne pas ou pour réduire la probabilité quelle survienne.</p>  <p>La préparation aux situations durgence vise à sassurer que lorganisation responsable de lexploitation (par exemple, le titulaire de permis) dispose dune capacité adéquate en vue dintervenir en cas durgence à léchelle locale, régionale et nationale et, le cas échéant, à léchelle internationale [6]. Cette capacité est liée à un ensemble intégré déléments dinfrastructure qui comprend, sans sy limiter : les pouvoirs et les responsabilités des décideurs, la dotation organisationnelle, les plans et les procédures, la formation, les manœuvres et les exercices ainsi que le système de gestion organisationnelle.</p>   <p>En cas durgence, lintervention vise à [6] :</p>
<ul>
<li>reprendre le contrôle de la situation et atténuer les conséquences</li>
<li>sauver des vies</li>
<li>éviter ou atténuer les conséquences graves immédiates sur la santé</li>
<li>prodiguer les premiers soins, administrer le traitement médical essentiel et traiter les blessures causées par le rayonnement</li>
<li>réduire le risque deffets à long terme sur la santé, comme les cancers causés par le rayonnement</li>
<li>informer le public et maintenir sa confiance</li>
<li>atténuer, dans la mesure du possible, les conséquences non radiologiques</li>
<li>protéger, dans la mesure du possible, les biens et lenvironnement</li>
<li>préparer, dans la mesure du possible, la reprise des activités socioéconomiques normales</li>
</ul>  <p>Au Canada, le cadre de préparation et dintervention en cas durgence est bien établi et documenté dans la législation applicable et dans des documents dinformation et dorientation. Lun des objectifs de lintervention en cas durgence comprend la préparation en vue des activités de rétablissement durant lintervention. Il sagit dune mesure nécessaire pour assurer une reprise rapide et efficace des activités socioéconomiques une fois lurgence passée.</p>   <p>Le présent document de travail établit les éléments clés dont il faut tenir compte pour favoriser le rétablissement, de même que les rôles et responsabilités connexes. Dans la mesure du possible, ces éléments doivent être pris en considération à la phase de la préparation aux situations durgence.</p>
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
<h2 id="sec2-1">2.1 Intervention en cas durgence nucléaire au Canada</h2>  <p>Au Canada, lintervention en cas durgence nucléaire est une responsabilité partagée entre les divers ordres de gouvernement, les entités du secteur privé, les organisations non gouvernementales et le public. Toutefois, les gouvernements provinciaux et territoriaux du Canada sont les principaux responsables de préserver la santé, la sécurité et la sûreté du public et de protéger les biens matériels ainsi que lenvironnement relevant de leur compétence.</p>   <p>LAgence internationale de lénergie atomique (AIEA) a établi les exigences relatives aux niveaux adéquats de préparation et dintervention qui visent à atténuer les conséquences dune situation durgence. Le respect de ces exigences permettra de contribuer à lharmonisation internationale des arrangements liés à la préparation et à lintervention en cas durgence [6]. À titre dÉtat membre de lAIEA, le Canada cherche à respecter ces exigences.</p>  <p>Le <a href="https://www.securitepublique.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/index-fr.aspx">Plan fédéral dintervention durgence</a> (PFIU) établit les processus et les mécanismes visant à faciliter une intervention intégrée du gouvernement du Canada en cas de tout type durgence, notamment une urgence nucléaire [7]. Un des volets du PFIU est le <a href="https://www.canada.ca/fr/sante-canada/services/preoccupations-liees-sante/rapports-publications/urgences-desastres/plan-federal-cas-urgence-nucleaire-partie-1-plan-directeur-sante-canada-2002.html">Plan fédéral en cas durgence nucléaire</a> (PFUN) et ses annexes, qui décrivent le cadre national de planification et dintervention en cas durgence nucléaire touchant les Canadiens [8]. Le PFUN comprend également une annexe qui établit les responsabilités de divers ministères fédéraux ainsi que les annexes propres aux provinces énonçant les mesures requises pour appuyer les activités dintervention de chaque province en cas durgence nucléaire [6]. Santé Canada (SC) est responsable de la gestion du PFUN.</p>   <p>Bien que les décisions relatives aux mesures de protection incombent principalement aux gouvernements provinciaux, SC offre également de lorientation sur les mesures de protection dans les <a href="https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/rapports-publications/radiation/lignes-directrices-canadiennes-interventions-situation-urgence-nucleaire-novembre-2003.html"><em>Lignes directrices canadiennes sur les interventions en situation durgence nucléaire</em></a> [7] et les <a href="https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/rapports-publications/contaminants-environnementaux/lignes-directrices-canadiennes-restrictions-concernant-aliments-eau-contamines-radioactivite-suite-urgence-nucleaire-lignes-directrices-justification.html"><em>Lignes directrices canadiennes sur les restrictions concernant les aliments et leau contaminés par la radioactivité à la suite dune urgence nucléaire</em></a> [9], [10]. Lorientation fournie par SC peut être intégrée en partie ou en entier dans les plans détaillés dintervention en cas durgence nucléaire de chaque province et territoire.</p>
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
<h2 id="sec3">3.0 Plans de rétablissement au Canada</h2>  <p>Durant le rétablissement, le niveau de participation des décideurs des divers ordres de gouvernement dépendra de lampleur des conséquences de la situation durgence et du niveau de détail du processus de rétablissement. Toutefois, à linstar de la préparation et de lintervention en cas durgence, le rétablissement relève principalement de la province ou du territoire visé. En raison de la participation importante des personnes et des collectivités touchées au processus de rétablissement, les municipalités visées devront également jouer un rôle considérable dans le processus décisionnel. Les plans de rétablissement existants de tous les ordres de gouvernement sont résumés dans la présente section. Lordre dans lequel les entités sont présentées ne reflète pas leur niveau dautorité ou de participation.</p>
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
<h3 id="sec3-1">3.1 Plans de rétablissement fédéraux</h3>  <p>Les détails de la gestion et la coordination de la phase de rétablissement dune urgence nucléaire ne sinscrivent pas dans la portée du PFIU et du PFUN. Bien que ces plans indiquent que la responsabilité du rétablissement relève principalement de la compétence provinciale ou territoriale, ils donnent tous deux un aperçu de la structure attendue des activités de rétablissement fédérales.</p>   <p>Le PFIU et le PFUN établissent la nécessité de mettre en place, dans le cadre de la phase de rétablissement, une structure de gestion fédérale parallèle à la phase durgence. Toutefois, contrairement à la phase durgence, il est nécessaire détablir et de documenter plus précisément lidentité des personnes qui participeront aux efforts ainsi que les rôles attendus.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.1"></div>
<h4 id="sec3-1-1">3.1.1 Activités de rétablissement particulières décrites dans le PFIU</h4>  <p>Aux termes du PFIU, le centre de coordination fédéral constitue le représentant régional du gouvernement fédéral qui fait office de guichet de la coordination fédérale et de la coordination fédérale-provinciale-territoriale lors dune intervention. Le centre a pour objectif de planifier la stratégie globale dintervention et de rétablissement [5].</p>  <p>Les fonctions de soutien en cas durgence (FSU), qui représentent des domaines particuliers daide fédérale en cas durgence, sont énoncées à lannexe A du PFIU. Elles sont désignées en tant que ministères « principaux » ou « secondaires », selon le mandat de chaque institution fédérale par rapport aux FSU. Selon chaque FSU, le ministère principal est notamment responsable de la planification des activités dintervention en cas durgence et de rétablissement à court et à long terme.</p>   <p>Lorsque le ministère principal désigné le demande, les ministères secondaires sont responsables dassumer leurs responsabilités distinctes, par exemple : participer à la planification des activités dintervention en cas durgence et de rétablissement à court et à long terme et élaborer des plans opérationnels à lappui, des procédures normalisées de fonctionnement, des listes de vérification ou dautres outils daide compatibles avec les normes existantes des premiers intervenants [5].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.2"></div>
<h4 id="sec3-1-2">3.1.2 Activités de rétablissement particulières décrites dans le PFUN</h4>  <p>Le PFUN comprend quelques renseignements opérationnels sur la transition à la phase de rétablissement et la fin de lapplication progressive du PFUN. Il indique que le conseil des sous­ministres ou des sous-ministres adjoints, en consultation avec le Bureau du Conseil privé, approuvera la transition vers le rétablissement et la fin des mesures durgence et désignera un ministre fédéral responsable du rétablissement ainsi quun coordonnateur national du rétablissement [8].</p>  <p>Bien que le ministre de la Sécurité publique soit responsable de la phase durgence, conformément à la <a href="http://laws-lois.justice.gc.ca/fra/lois/E-4.56/"><em>Loi sur la gestion des urgences</em></a>, le rôle de ministre fédéral responsable du rétablissement peut être attribué à tout ministre de la Couronne qui serait alors responsable de la coordination des activités fédérales de rétablissement [2].</p>   <p>Le coordonnateur national du rétablissement (le coordonnateur) remplacerait lagent de coordination fédéral ainsi que les agents principaux du PFUN responsables de la situation durgence. Le coordonnateur verrait à établir les priorités fédérales en matière de rétablissement, ainsi quà mettre sur pied et à coordonner une organisation nationale de soutien au rétablissement et de mettre en œuvre les activités fédérales de rétablissement [8]. Lorganisation collaborerait également avec lorganisme provincial de gestion du rétablissement, dont le rôle est précisé à la section 3.2. En outre, les ministères principaux pourraient également faire appel aux ministères et organismes dotés de fonctions liées aux urgences nucléaires pouvant faciliter les efforts de rétablissement.</p>
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
<h3 id="sec3-2">3.2	Plans de rétablissement provinciaux</h3>  <p>Toutes les provinces et tous les territoires ont des rôles et des responsabilités en cas durgence, mais la plupart de ceux qui ne sont pas dotés de réacteurs nucléaires ou qui naccueillent pas de navires étrangers à propulsion nucléaire et de capacité nucléaire nont généralement pas établi de plans durgence radiologique ou nucléaire. Étant donné que les provinces de lOntario, du Québec et du Nouveau-Brunswick sont dotées de centrales nucléaires, elles ont déjà mis en place des plans visant à protéger le public en cas durgence. De même, plusieurs ports de la Colombie-Britannique et de la Nouvelle-Écosse peuvent accueillir des navires étrangers à propulsion nucléaire et de capacité nucléaire. Ces provinces sont donc également dotées de plans dintervention en cas durgence nucléaire.</p>   <p>Certains des plans provinciaux dintervention en cas durgence comportent de lorientation sur les mesures de rétablissement, en particulier en ce qui a trait au déclenchement de lintervention et à la transition de lintervention vers le rétablissement. Les plans du ministère de la Sécurité communautaire et des Services correctionnels de lOntario [11] et du ministère de la Santé de la Colombie-Britannique [12] sont disponibles en ligne aux fins de référence et comprennent des descriptions des mécanismes et des responsabilités relatifs à la transition vers le rétablissement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.1"></div>
<h4 id="sec3-2-1">3.2.1 Exemple de plan existant : Ontario</h4>  <p>Selon le Plan provincial dintervention en cas durgence nucléaire (PPIUN) de lOntario, le Centre provincial des opérations durgence (CPOU) est responsable, le cas échéant, de mettre fin à la phase dintervention et veillera à une transition sans heurt vers la phase de rétablissement [11]. Au moment pertinent, le CPOU consultera les principaux participants à lintervention en cas durgence à légard de leur transition vers la phase de rétablissement et du temps nécessaire à une transition sans heurt. À la suite de ces consultations, le CPOU établira le moment où sachèvera la phase dintervention et en informera toutes les parties intéressées au préalable.</p>  <p>En Ontario, les responsabilités sont établies par le Bureau du commissaire des incendies et de gestion des situations durgence par lintermédiaire du PPIUN. Lannexe I du PPIUN décrit en détail les rôles des ministères créés par décret. Lors de la transition vers le rétablissement, le ministère de la Santé et des Soins de longue durée planifiera et dirigera le rétablissement du secteur de la santé, tel quil est énoncé à la section 5.13 du <a href="http://www.health.gov.on.ca/fr/pro/programs/emb/rhrp/default.aspx">Plan dintervention sanitaire en cas dincident radiologique ou nucléaire</a> [13].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.2"></div>
<h4 id="sec3-2-2">3.2.2 Exemple de plan existant : Colombie-Britannique</h4>  <p>Le plan dintervention en cas durgence nucléaire de la Colombie-Britannique établit que la fin de lapplication progressive du plan et la transition vers le rétablissement seront coordonnées par le ministère de la Santé et comprendront ce qui suit : lélaboration dun plan de gestion du rétablissement comportant des niveaux de référence pour les doses résiduelles associées à la contamination à long terme, et des programmes de reprise des activités socioéconomiques normales; la surveillance des zones contaminées et lévaluation des doses potentielles reçues par le public et les travailleurs; lévaluation des dangers à moyen et à long terme pour la santé; la décontamination environnementale et les activités délimination des déchets radioactifs ainsi que la tenue de registres dosimétriques pour le personnel durgence [12]. Les décisions relatives au transfert de responsabilité des activités dintervention aux activités de rétablissement seraient prises par les ministres des provinces et les membres du Conseil des sous-ministres.</p>
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
<h3 id="sec3-3">3.3 Rôles et responsabilités des municipalités pour le rétablissement</h3>  <p>Les municipalités ont un rôle important à jouer dans le processus décisionnel en raison de leurs contacts directs avec les personnes et les collectivités touchées. Les plans municipaux de gestion des urgences doivent comprendre un volet sur la planification du rétablissement. Plusieurs plans municipaux traitent des aspects du rétablissement.</p>  <p>Les autorités municipales et provinciales devraient tenter dharmoniser leur plan respectif afin de veiller à ce que tous les aspects du rétablissement soient traités.</p>
<div className="col-md-12 module ">  <p>Pour la section « Plans de rétablissement au Canada », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q3.	Avons-nous réussi à tenir compte du cadre de rétablissement existant des points de vue fédéral, provincial et municipal? Dans la négative, veuillez nous transmettre les renseignements manquants ainsi que la source à lappui de ces renseignements.</p>  <p>Q4.	Existe-t-il des documents ou des sources de renseignements qui permettraient daccroître la clarté?</p>  </div>  <div className="clear"></div>
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
<h2 id="sec4">4.0 Cadre de rétablissement proposé</h2>  <p>LAIEA a élaboré le document <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/P1531interim_LanguageVersions/p1531interim_F.pdf"><em>Radioprotection et sûreté des sources de rayonnements : normes fondamentales internationales de sûreté</em></a>, qui vise à protéger le public de « lexposition due à la contamination de zones par des matières radioactives résiduelles résultant dune situation durgence nucléaire ou radiologique, après la déclaration de la fin de la situation dexposition durgence ».</p>  <p>Dautres documents internationaux décrivent des éléments clés de la phase de rétablissement dont il faut tenir compte. En outre, certains pays ont établi leur propre orientation nationale à cet égard. Les leçons apprises ont permis de formuler des recommandations nationales et internationales. La CCSN a établi des points de repère pour les progrès réalisés dans ce domaine et, dans la mesure du possible, sen est servi pour élaborer le présent document de travail.</p>   <p>Le reste du présent document de travail sera axé sur la diffusion dinformation et dorientation à légard du cadre de rétablissement proposé. Il est cependant important de noter que de nombreux éléments peuvent être pris en compte par les décideurs et intégrés dans les phases de préparation et dintervention en cas durgence.</p>  <p>Il faut également reconnaître quil sera nécessaire de prévoir un certain temps pour la transition de lintervention vers le rétablissement. Cette période permettra de bien mettre en œuvre les mesures afin dassurer la reprise rapide des activités socioéconomiques.</p>
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
<h3 id="sec4-1">4.1	Éléments clés du rétablissement</h3>  <p>La stratégie prévue pour la phase de rétablissement devrait tenir compte de plusieurs éléments.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.1"></div>
<h4 id="sec4-1-1">4.1.1 Stabilité de la situation</h4>  <p>Il faut examiner la situation afin de déterminer si lon comprend et contrôle bien la progression de lurgence et tout rejet potentiel futur. Il est impossible de procéder au rétablissement avant que la situation initiale ait été stabilisée et quil ne soit plus nécessaire dappliquer des mesures de protection préventives ou urgentes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.2"></div>
<h4 id="sec4-1-2">4.1.2 Transition</h4>  <p>Étant donné quune situation durgence évolue, passant de lintervention au rétablissement, le processus décisionnel peut devenir plus complexe. Il faudra modifier des rôles et des responsabilités et, vraisemblablement, mobiliser dautres organisations. Par conséquent, la phase de préparation devrait comprendre ce qui suit :</p>
<ul>
<li>la détermination des rôles et des responsabilités pour la phase de rétablissement, dans la mesure du possible</li>
<li>la mise en place dun mécanisme de transfert officiel des responsabilités au moment de la transition de la phase durgence vers la phase de rétablissement</li>
</ul>  <p>La transition de la phase durgence (cest-à-dire, une situation dexposition durgence) vers la phase de rétablissement (cest-à-dire, une situation dexposition existante) est caractérisée par une modification de deux éléments : la gestion et la stratégie. Durant la phase durgence, où les niveaux dexposition sont potentiellement élevés et les décisions sont généralement centralisées, il faut agir rapidement. Durant la phase de rétablissement, les stratégies sont décentralisées, sont moins caractérisées par la nécessité dagir rapidement et sont axées sur lamélioration des conditions de vie et la réduction de lexposition. Dans le contexte daccidents graves touchant une vaste région géographique, la transition de la phase durgence vers la phase de rétablissement peut survenir à différents moments au sein des zones contaminées [14].</p>  <p>Au fil de la transition de lintervention vers le rétablissement, les organismes dintervention qui étaient actifs au cours de lurgence devraient observer une diminution progressive ou partielle de leurs fonctions afin de pouvoir se préparer à des urgences futures. Cette approche permettra à dautres organisations de prendre la relève et de favoriser ainsi le rétablissement. Par conséquent, durant la phase de préparation, des arrangements devraient être conclus entre les organismes dintervention pertinents aux fins de ce transfert de responsabilités.</p>
<div className="col-md-12 module ">  <p>Pour la sous-section « Transition », la CCSN souhaite recueillir des commentaires sur la question suivante :</p>  <p>Q5. 	Lors de la phase de préparation, estimez-vous quil est possible détablir a) les responsabilités et lobligation de rendre compte durant le rétablissement et b) un mécanisme de transfert des responsabilités pendant la transition de la phase dintervention vers la phase de rétablissement? Dans laffirmative, de quelle façon? Dans la négative, pourquoi?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.3"></div>
<h4 id="sec4-1-3">4.1.3 Protection du public</h4>  <div className="span-3 mrgn-bttm-0 mrgn-lft-0">  <p>La présente section fait la synthèse des principales tâches à lappui de la stratégie de rétablissement. Les responsabilités relatives aux tâches et mécanismes dexécution devraient être établies et examinées lors de la phase de préparation. Les décisions à cet égard devraient être prises de concert avec les organismes dintervention pertinents et les personnes et collectivités potentiellement visées. Les plans détaillés devront être fondés sur les conditions propres aux urgences nucléaires et, par conséquent, ne devraient être établis quen prévision dune urgence nucléaire, avant ou durant le rétablissement.</p>  </div>  <div className="col-md-3 module pull-right  mrgn-bttm-0 mrgn-lft-0 mrgn-bttm-xl" style="border:3px solid #006400;">  <h4 className="text-center">Principe doptimisation</h4>  <p>Loptimisation pendant le rétablissement est un processus itératif axé sur lavenir visant à réduire la possibilité que surviennent des expositions. Elle tient compte des facteurs techniques et socioéconomiques. Cest un état desprit, dans le cadre duquel les personnes doivent constamment chercher à déterminer si tout a été mis en œuvre selon les circonstances [15]. Le processus de rétablissement est axé sur la collectivité. Chaque décision clé doit donc être axée sur la participation des parties intéressées.</p>  </div>  <div className="clear"></div>
<ul>
<li>Les mesures de protection qui ont été mises en place durant lintervention doivent être examinées afin de déterminer si elles demeurent nécessaires ou sil faut y mettre fin.</li>
<li>Les doses reçues par le public durant lintervention doivent être examinées, et les mesures de suivi doivent être établies, le cas échéant.</li>
<li>La situation dexposition actuelle doit être évaluée par lintermédiaire dune surveillance environnementale, de la modélisation des voies dexposition (au besoin) et du pronostic quant à son évolution. La réévaluation de la situation dexposition doit être réalisée tout au long de la phase de rétablissement.</li>
<li>Les mesures de protection appropriées doivent être cernées et mises en œuvre en fonction des résultats de lévaluation de la situation dexposition et dune comparaison avec les niveaux de référence choisis.</li>
<li>Une réévaluation de la pertinence et de lefficacité des mesures de protection devrait être réalisée parallèlement aux réévaluations de la situation dexposition. Les activités visant à réduire concrètement la radioactivité dans lenvironnement (par exemple, décontamination, caractérisation et quantification des déchets radioactifs, gestion des déchets) devraient être mises en œuvre.</li>
<li>Les doses reçues par les personnes responsables du rétablissement qui participent à la mise en œuvre des mesures de protection et aux activités de nettoyage devraient être gérées.</li>  </ul>  <br />
<div className="col-md-12 module  mrgn-bttm-lg" style="border:3px solid #006400;">  <h4 className="text-center">Niveaux de référence de la Commission internationale de protection radiologique (CIPR)</h4>  <p>La CIPR définit le <a href="/fra/resources/fact-sheets/reference-levels">terme niveau de référence</a> comme étant le niveau de dose ou de risque résiduel généralement jugé inapproprié pour permettre une exposition, en deçà duquel des mesures de protection devraient être planifiées et optimisées. Les niveaux de référence sont présentés sous forme de fourchette afin doffrir davantage de souplesse aux décideurs. Ils sont exprimés en millisieverts (mSv) et représentent les doses reçues après la mise en œuvre des mesures de protection tout au long du rétablissement.</p>  <table className="mrgn-bttm-0">
<tr>
<th className="text-center">Fourchette (dose aiguë ou annuelle)</th>
<th className="text-center text-center">Type de situation</th>
</tr>
<tr>
<td><strong>20 à 100 mSv</strong></td>
<td>Situations dexposition durgence au cours desquelles des événements dont les conséquences sont incertaines nécessitent la prise urgente de mesures de protection comme la mise à labri et lévacuation afin de minimiser lincidence dune radioexposition possible.</td>
</tr>
<tr>
<td><strong>1 à 20 mSv</strong></td>
<td>Situation dexposition existante dans le cadre de laquelle la radioactivité est déjà présente dans lenvironnement au moment où des mesures sont prises afin de réduire lexposition au rayonnement. Si les doses sont optimisées en deçà de ce niveau de référence, il est sans danger dhabiter dans la zone contaminée.</td>
</tr>  </table>  </div>
<p>Les sections 4.2 et 4.3 du présent document de travail portent sur les éléments clés du cadre de rétablissement qui sont axés sur la protection du public. La section 4.4 décrit en détail les mesures de protection à lintention du personnel des équipes responsables du rétablissement. La section 5 approfondit les activités de communication avec le public et de mobilisation de ce dernier.</p>
<div className="col-md-12 module ">  <p>Pour la section « Protection du public », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q6. Selon vous, lorganisation responsable de la gestion du rétablissement devrait-elle disposer du pouvoir de choisir la ou les valeurs appropriées des niveaux de référence dans la fourchette de 1 à 20 mSv?</p>   <p>Q7. Selon vous, la valeur devrait-elle être établie à la fin de la situation durgence? Devrait-elle être réévaluée de manière périodique tout au long du rétablissement? Dans la négative, veuillez expliquer votre réponse et préciser qui, selon vous, devrait choisir ces valeurs et à quel moment.</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.4"></div>
<h4 id="sec4-1-4">4.1.4	Retour à la nouvelle normalité</h4>  <div className="span-3 mrgn-lft-0">  <p>Aux fins du présent document, on présume que pendant le rétablissement, la population est exposée à des sites contaminés et à des niveaux élevés de rayonnement causés par une situation durgence. Une telle situation correspond à la définition de la CIPR dune situation dexposition existante. Compte tenu de ces critères, lune des décisions les plus difficiles à prendre à la suite dune urgence est de permettre ou non à des personnes dhabiter dans les zones contaminées. Tant que le niveau de risque radiologique est acceptable, il est préférable de mettre en œuvre les mesures de protection nécessaires pour permettre aux personnes de retourner à la nouvelle normalité et de continuer à vivre dans leurs foyers et dans leurs collectivités. Dans une telle situation, le niveau de référence devrait se trouver dans la fourchette de 1 à 20 mSv de la CIPR pour une situation dexposition existante. Le choix de la valeur dépendra des circonstances. En fin de compte, cette décision relève des organisations responsables de la gestion du rétablissement. Le niveau de référence devrait être établi à la fin de la situation dexposition durgence et devrait être réévalué de manière périodique tout au long du rétablissement. La décision de permettre à des personnes dhabiter dans les zones contaminées dépendra en partie de la possibilité datteindre le niveau de référence souhaité et de la capacité de mettre en œuvre une stratégie de protection qui permettra daméliorer la situation de façon à optimiser les avantages par rapport aux inconvénients.</p>  </div>
<div className="col-md-3 module  pull-right mrgn-lft-0 mrgn-bttm-xl" style="border:3px solid #006400;">  <h4 className="text-center">La nouvelle normalité</h4>
<ul>
<li>Établir de nouvelles routines favorisant la reprise des activités quotidiennes afin de minimiser les incidences. Ces routines peuvent comprendre des mesures dautoassistance.</li>
<li>Accepter un niveau de radioexposition légèrement supérieur au niveau antérieur aux conditions durgence, mais qui demeure sans danger pour la santé humaine.</li>
<li>Établir la communication avec les personnes et les collectivités touchées et les mobiliser.</li>
</ul>  </div>  <div className="clear"></div>
<p>Il est possible que lon doive prendre la décision dabandonner complètement des zones contaminées et de réinstaller les personnes et les collectivités touchées dans des régions nayant pas été directement touchées par lurgence sur le plan radiologique. Dans ce cas, la plupart des activités décrites dans le reste de la section 4 ne sappliquent pas. Quoi quil en soit, on reconnaît que, même en labsence dincidences radiologiques, il sera vraisemblablement nécessaire de gérer les incidences psychosociales associées à la réinstallation et à lurgence elle-même. Ces décisions devraient être prises à la suite de consultations rigoureuses auprès des parties intéressées.</p>
<div className="col-md-12 module ">  <p>Pour la section « Retour à la nouvelle normalité », la CCSN souhaite recueillir des commentaires sur la question suivante :</p>  <p>Q8. Le concept de nouvelle normalité est-il bien expliqué? Quels autres renseignements devrait-on fournir afin de clarifier ce concept?</p>  </div>  <div className="clear"></div>
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
<h3 id="sec4-2">4.2	Protection du public durant le rétablissement</h3>  <p>La présente section décrira les mesures et programmes clés de protection du public durant le rétablissement à la suite dune urgence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.1"></div>
<h4 id="sec4-2-1">4.2.1	Mise en œuvre de stratégies de rétablissement</h4>  <p>Au cours de lurgence, des mesures de protection pourraient avoir été mises en œuvre en vue de réduire lexposition au rayonnement potentiellement nocive. Ces mesures pourraient comprendre lingestion diodure de potassium (KI), la mise à labri, lévacuation et peut-être même la réinstallation. Au fil de lévolution de la situation, toutes les mesures prises devraient être examinées afin de déterminer si des modifications simposent. Cette étape devrait survenir durant la phase dintervention, mais aussi durant la phase de rétablissement, selon les échéances prévues. Dans certains cas, il faudra mettre fin à des mesures, comme les évacuations, au cours de la période de rétablissement. Dautres mesures encore, comme les restrictions appliquées aux aliments locaux, au lait et à leau potable, pourraient être modifiées ou précisées. Lampleur de ces précisions dépendra des mesures elles-mêmes (par exemple, des mesures dévacuation et de réinstallation temporaire ne sont pas durables), des doses reçues à ce jour et des prévisions quant au maintien, à lélimination ou à la modification de la mesure. Les plans dintervention en cas durgence nucléaire de divers ordres de gouvernement offrent de lorientation sur la levée des mesures de protection mise en œuvre à la phase durgence [9], [11], [17].</p>  <p>Durant la phase de rétablissement, de nouvelles mesures de protection pourraient être nécessaires pour maintenir les doses en dessous du niveau de référence souhaité. Même si les doses sont inférieures au niveau de référence, les mesures de protection ne devraient pas être levées si les doses peuvent être réduites encore davantage [18]. De nombreux facteurs peuvent avoir une incidence sur le programme de protection, notamment le moment, les ressources, les options relatives à la gestion des déchets ainsi que les aspects sociaux et éthiques. La complexité de la situation pourrait rendre nécessaire lutilisation doutils de prise de décisions afin de faciliter lélaboration de la stratégie.</p>   <p>En général, deux types des mesures de protection pourraient être mises en œuvre durant la phase de rétablissement : celles mises en œuvre et supervisées par les organisations responsables de la gestion du rétablissement et celles dautoassistance prises par les personnes touchées. Les mesures mises en œuvre par les organisations responsables de la gestion du rétablissement sont généralement celles qui ne peuvent être appliquées par les personnes ou qui sont prises par lensemble de la population en vue de réduire la radioexposition. Les mesures dautoassistance prises par les personnes touchées sont celles que ces personnes sont en mesure de prendre pour réduire leur propre niveau de radioexposition. Ces deux types des mesures de protection sont décrits en plus de détail dans les sous-sections 4.3.1.1 et 4.3.1.2.</p>
<h5>4.2.1.1	Mesures de protection mises en œuvre par les organisations responsables de la gestion du rétablissement</h5>  <p>Les organisations responsables de la gestion du rétablissement sont principalement chargées de caractériser lexposition des populations visées, y compris de cerner les principales voies dexposition, destimer les doses et de déterminer les mesures de protection qui pourraient permettre doptimiser les doses pour les populations visées.</p>   <p>Les mesures de protection typiques qui pourraient être mises en œuvre par les organisations responsables de la gestion du rétablissement incluent les suivantes [18] :</p>
<ul>
<li>décider si les personnes peuvent vivre ou non dans les zones contaminées</li>
<li>nettoyer les bâtiments</li>
<li>remettre en état le sol et la végétation</li>
<li>établir des contrôles alimentaires et fournir des denrées alimentaires non contaminées</li>
</ul>  <p>Les mesures de protection mises en œuvre par les organisations responsables de la gestion du rétablissement peuvent être de nature institutionnelle ou technique. Une mesure institutionnelle serait par exemple limposition de restrictions sur lingestion de denrées alimentaires locales afin déviter dingérer des radionucléides. Une mesure technique consisterait par exemple à ajouter une couche de revêtement ou de ciment par-dessus les routes et les trottoirs contaminés par des radionucléides émetteurs de rayons gamma qui ne peuvent être éliminés [19].</p>  <p>Les organisations responsables de la gestion du rétablissement devraient déterminer et, dans la mesure du possible, marquer le plus tôt possible le périmètre dune zone contaminée, puis réévaluer et modifier ce périmètre tout au long de la phase de rétablissement. Ce marquage du périmètre favorisera la mise en œuvre des mesures de protection, comme les restrictions sur les denrées alimentaires, et facilitera la communication avec la population locale [20]. Le marquage du périmètre de la zone contaminée devra être fait de manière à maintenir un bon équilibre entre limposition de contraintes trop nombreuses, ce qui pourrait entraîner une remise en état non nécessaire et un étiquetage inapproprié de la zone comme étant non sécuritaire, et le risque de ne pas mettre en œuvre suffisamment de mesures de protection ou de ne pas traiter les préoccupations des parties intéressées [21].</p>
<h5>4.2.1.2	Recommandations relatives aux mesures dautoassistance</h5>   <p>Lexpérience antérieure a permis de démontrer que la mobilisation directe des personnes, des collectivités et des professionnels locaux dans la gestion dune situation durgence facilite le processus de rétablissement en habilitant les personnes touchées. Le fait que les organisations responsables de la gestion du rétablissement facilitent le processus par lequel le public établit et exécute ses propres stratégies de protection permet non seulement de réduire lexposition, mais aussi daccroître le bien-être global [18], [20].</p>  <p>Voici des exemples typiques de mesures dautoassistance qui peuvent être appliquées afin de comprendre et de contrôler la situation radiologique [18] :</p>
<ul>
<li>établir des cartes locales et cerner les zones où le débit de dose est plus élevé</li>
<li>mesurer la présence de contaminants dans les denrées alimentaires qui pourraient être consommées et modifier les habitudes alimentaires</li>
<li>gérer les déchets radioactifs</li>
</ul>
<div className="span-3 mrgn-lft-0 mrgn-rght-0">  <p>Afin de favoriser la mise en œuvre de mesures dautoassistance, les responsables devraient régulièrement communiquer de linformation claire sur lensemble de la situation radiologique ainsi que sur les réussites et les difficultés liées aux mesures de protection. Elles doivent également faciliter la communication des leçons apprises entre les personnes touchées [18]. Ces dernières pourraient devoir recevoir une formation sur la manière de mettre en œuvre les mesures dautoassistance, et il pourrait être nécessaire de mettre en place linfrastructure requise pour les aider. La population devrait recevoir linformation appropriée qui leur permettra de prendre des décisions éclairées. Lun des défis associés aux mesures dautoassistance est latteinte dun équilibre entre le fardeau imposé aux personnes (cest-à-dire, la surveillance constante de la nourriture quelles consomment et des endroits où elles vont) et les avantages de les aider à améliorer leur propre situation dexposition [18].</p>  <p>Veuillez noter que les sous-sections 4.3.2 à 4.3.5 portent sur les renseignements, les méthodes et les processus à lappui de la prise de décisions visant à protéger le public et à favoriser un retour à une nouvelle normalité.</p>  </div>  <div className="span-3 module pull-right  mrgn-lft-0 mrgn-rght-0" style="border:3px solid #006400;">  <h5>Habilitation de la collectivité : initiative de dialogues de la CIPR</h5>  <p>Une importante leçon apprise des efforts de rétablissement au Bélarus à la suite de laccident de Tchernobyl a été mise en œuvre pendant les activités de rétablissement après laccident de Fukushima. La CIPR a reconnu la nécessité daider les collectivités et les personnes à prendre leurs propres décisions quant à lapplication des mesures de radioprotection et de surveillance au cours du rétablissement. Elle a donc entamé une série de dialogues avec les personnes dans les zones touchées, les gouvernements locaux et des experts internationaux afin que chacun dentre eux puisse communiquer ses perspectives. La structure de ces rencontres, les sujets abordés et les résultats ont été bien documentés par la CIPR et fournissent un modèle pour aider les collectivités à contribuer aux efforts de rétablissement futurs [22].</p>  </div>  <div className="clear"></div>
<div className="col-md-12 module ">  <p>Pour la sous-section « Mise en œuvre de programmes de rétablissement », la CCSN souhaite recueillir des commentaires sur la question suivante :</p>  <p>Q9.	Avons-nous bien cerné les mesures de protection? Dans la négative, quelles modifications ou quels ajouts proposez vous?</p>  <p>Q10. Selon vous, la distinction entre les deux types des mesures de protection est-elle correcte? A-t-on omis denvisager certains types de mesures de protection? Dans laffirmative, de quels types de mesures sagit-il?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.2"></div>
<h4 id="sec4-2-2">4.2.2	Surveillance de lenvironnement et de la chaîne alimentaire</h4>  <div className="span-3 mrgn-lft-0 mrgn-rght-0">  <p>La situation radiologique évoluera tout au long du rétablissement, notamment en raison de la désintégration radiologique, des processus physiques et chimiques qui touchent la distribution des radionucléides dans lenvironnement, des activités humaines qui concentrent ou diluent la contamination dans lenvironnement ainsi que de la modification des mesures de protection [18]. Cest pourquoi il est essentiel détablir un programme de surveillance environnementale adapté aux circonstances et suffisamment souple pour tenir compte de lévolution des conditions. Bien que les systèmes de surveillance environnementale établis pour la phase dintervention en cas durgence seraient vraisemblablement utilisés pour la phase de rétablissement, il est possible quil soit nécessaire de renforcer ou de modifier les exigences actuelles en matière de surveillance afin, par exemple, dy inclure la surveillance des infrastructures publiques comme les écoles.</p>   <p>Dans ce contexte, un programme de surveillance environnementale sentend de la mesure des débits de dose externes dans lenvironnement et des concentrations dactivité des radionucléides dans différents médias (par exemple, lair, leau, le sol, la végétation et les denrées alimentaires) [23]. Toutes les données tirées de ces activités de surveillance devraient être rendues publiques et expliquées de manière à être facilement comprises par le public [20].</p>  <p>La surveillance des sites contaminés par des radionucléides de longue période vise à :</p>
<ul>
<li>cerner les zones dans lesquelles une surveillance radiologique approfondie est nécessaire</li>
<li>cerner les zones dans lesquelles des mesures correctives sont justifiées sur le plan radiologique</li>
<li>fournir de linformation en vue destimer les doses, réelles ou prévues, reçues par le public</li>
<li>déceler les changements et évaluer les tendances à long terme des niveaux de rayonnement dans lenvironnement à la suite de lurgence, y compris des mesures correctives</li>
<li>diffuser linformation au public</li>
</ul>  </div>
<div className="span-3 module pull-right  mrgn-lft-0 mrgn-rght-0" style="border:3px solid #006400;">  <h4>Programmes canadiens de surveillance environnementale</h4>  <p>Divers programmes de surveillance environnementale sont déjà en place au Canada et à proximité des installations nucléaires. Voici des exemples :</p>
<ul>
<li>Le Canada dispose dun programme de surveillance de la radioactivité depuis 1959. Il compte trois réseaux radiologiques distincts composés de plus dune centaine de postes de détection et de surveillance situés dans tous les grands centres urbains ainsi quà proximité des centrales nucléaires et des ports accueillant des navires étrangers à propulsion nucléaire.</li>
<li>Le <a href="/fra/resources/maps-of-nuclear-facilities/iemp/index-iemp">Programme indépendant de surveillance environnementale de la CCSN</a> complète les activités existantes et continues de vérification de la conformité visant à vérifier que la santé publique et lenvironnement à proximité des installations nucléaires sont protégés. Pour ce faire, on recourt à un processus indépendant déchantillonnage et danalyse.</li>
<li>Il existe dautres systèmes de surveillance, comme le système aux ports accueillant des navires étrangers à propulsion nucléaire du ministère de la Défense nationale, le Programme ontarien de surveillance des réacteurs nucléaires et le programme de surveillance à léchelle provinciale.</li>
<li>Toutes les centrales nucléaires sont dotées de programmes de surveillance conformément aux conditions de leur permis dexploitation.</li>
</ul>  </div>  <div className="clear"></div>
<p>Le programme de surveillance environnementale devrait être fondé sur les radionucléides visés, la composition physique et chimique de la contamination radioactive, le milieu dans lequel se trouvent les radionucléides et les pratiques liées à lutilisation du sol et de leau. Les endroits où sont pris les mesures et les échantillons devraient être choisis en fonction du site de manière à évaluer les doses de rayonnement les plus élevées [23].</p>  <p>Si lurgence touche lapprovisionnement alimentaire, linclusion des denrées alimentaires dans le programme de surveillance est particulièrement importante. Le programme de surveillance devrait être suffisamment rigoureux pour assurer la conformité à toute restriction imposée, y compris les critères existants de restriction des aliments contaminés immédiatement après une urgence radiologique ou nucléaire. (Aux fins de référence, veuillez consulter les niveaux dintervention établis dans les <em>Lignes directrices canadiennes sur les restrictions concernant les aliments et leau contaminés par la radioactivité à la suite dune urgence nucléaire</em> [10] et dans les plans dintervention en cas durgence du Nouveau-Brunswick et de lOntario.) Des critères additionnels doivent être établis afin de gérer la contamination à long terme de lapprovisionnement alimentaire par des radionucléides de longue période [21]. Les critères établis par la Commission du Codex Alimentarius pourraient également devoir être pris en compte dans la surveillance des denrées et des produits alimentaires destinés au commerce international [24].</p>
<div className="col-md-12 module ">  <p>Pour la sous-section « Surveillance de lenvironnement et de la chaîne alimentaire », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q11. Notre hypothèse à légard de la surveillance de lenvironnement et de la chaîne alimentaire est-elle correcte? Dans la négative, quavons-nous oublié?</p>  <p>Q12. Avons-nous adéquatement décrit limportance de la surveillance de lenvironnement et de la chaîne alimentaire durant la phase de rétablissement? Devrait-on ajouter des renseignements à cet égard? Dans laffirmative, lesquels?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.3"></div>
<h4 id="sec4-2-3">4.2.3	Voies dexposition et évaluations de doses</h4>  <p>Les voies dexposition doivent être prises en compte dans les évaluations des doses qui influeront sur le processus de rétablissement. Les considérations relatives à la phase de rétablissement dune situation durgence seront vraisemblablement différentes de celles liées à la phase dintervention. Par exemple, des rejets considérables dans lair provenant dune centrale nucléaire ne devraient plus survenir à la phase de rétablissement; par conséquent, lexposition au rayonnement dun panache rejeté dans latmosphère (cest-à-dire le rayonnement de nuage) ne constitue plus une voie dexposition dominante. Les voies dexposition restantes qui pourraient devoir être prises en compte à la phase de rétablissement comprennent les suivantes, mais ne sy limitent pas :</p>
<ul>
<li>exposition externe résultant des matières radioactives déposées sur le sol (cest-à-dire, le rayonnement du sol)</li>
<li>exposition interne résultant de linhalation de radionucléides remis en suspension</li>
<li>exposition interne résultant de lingestion de denrées alimentaires contaminées</li>
<li>exposition interne résultant de lingestion deau potable contaminée</li>
</ul>  <p>Dans lexamen des voies dexposition, la tendance du dépôt des matières radioactives sera vraisemblablement complexe, et lexposition résultante des personnes pourrait varier considérablement. Les voies dexposition dépendront des circonstances, comme les types dutilisation des terres et les habitudes des personnes et des collectivités directement touchées. Par conséquent, des voies additionnelles devront être prises en compte, le cas échéant. Par exemple, lingestion de terre par les enfants pourrait devoir être prise en compte dans les restrictions dutilisation des terres en tant que parcs.</p>
<div className="col-md-12 module ">  <p>Pour la sous-section « Voies dexposition et évaluations de doses », la CCSN souhaite recueillir des commentaires sur la question suivante :</p>  <p>Q13. Nos hypothèses à légard des voies dexposition et des évaluations de doses sont-elles correctes? Dans la négative, quavons-nous oublié?</p>  </div>  <div className="clear"></div>
<p>Au fil de la transition vers le rétablissement, il faudrait réaliser des évaluations de doses préliminaires axées sur les doses qui pourraient être reçues à lavenir (cest-à-dire, dans la situation dexposition existante). Il y aura vraisemblablement un vaste éventail dexpositions. Par conséquent, au fil de la collecte dinformation, lévaluation des doses individuelles devrait devenir de plus en plus précise.</p>  <p>En raison de la variabilité des expositions dune personne à lautre à la phase de rétablissement, les doses devraient être déterminées au cas par cas ou en fonction de parties bien définies de la population. Pour ce qui est des radionucléides de longue période auxquels on associe une légère dépendance aux coefficients de doses en fonction de lâge (par exemple, tritium et césium), les adultes qui consomment des denrées alimentaires locales constitueront généralement le groupe de populations le plus exposé.</p>   <p>En ce qui a trait aux radionucléides pour lesquels les coefficients de doses dépendent fortement de lâge étant donné leurs propriétés métaboliques particulières (par exemple, strontium, radium et polonium), les nourrissons ou les enfants constituent généralement le groupe de populations le plus exposé [23]. Lévaluation des doses devrait tenir compte des habitudes concrètes, des tendances connues et de létendue du dépôt de radionucléides dans lenvironnement ainsi que des denrées alimentaires consommées par la population touchée. Par exemple, la population pourrait être divisée en plusieurs groupes selon le lieu géographique ou le mode de vie afin de faciliter la personnalisation des évaluations de doses. Dans certains cas, il pourrait être nécessaire ou souhaitable de mesurer directement les données dosimétriques individuelles afin dévaluer les doses.</p>   <p>Les lignes directrices suivantes sur les évaluations de doses internes et externes devraient être prises en compte.</p>  <p>La <strong>dose externe</strong> reçue par la population durant la phase de rétablissement peut être déterminée à partir des données de surveillance environnementale. Les personnes qui travaillent principalement à lextérieur et celles qui habitent dans des maisons dun seul étage fabriquées de matériaux légers, comme du bois, pourraient recevoir la plus grande dose externe. Des entrevues personnelles pourraient être réalisées afin destimer le temps passé dans les lieux dhabitation, de travail et de repos [23]. La mesure du débit de dose en divers endroits fréquentés, tant à lextérieur quà lintérieur, peut faciliter lévaluation des doses externes. De même, le niveau de dépôt de radionucléides particuliers dans le sol au sein de la zone évaluée peut faciliter lestimation de doses externes dues aux radionucléides.</p>   <p>Les données du programme de surveillance environnementale sur les concentrations de radionucléides dans les échantillons environnementaux, dans leau potable et dans les produits alimentaires devraient servir à lévaluation des doses internes résultant de linhalation ou de lingestion de radionucléides [23]. Les <strong>doses internes</strong> reçues durant la phase de rétablissement à la suite de lingestion deau potable et daliments contaminés devraient être déterminées en fonction des données de surveillance environnementale et des taux de consommation. Dans les zones où les habitants consomment normalement des volumes considérables de produits alimentaires naturels (par exemple, gibier, poissons deau douce, champignons forestiers et baies), il est important de tenir compte des taux de consommation accrus. Si les données du programme de surveillance environnementale visant les aliments ne sont pas disponibles ou sont insuffisantes, les concentrations de radionucléides dans les denrées alimentaires peuvent être estimées à partir des données sur le dépôt dans le sol ou sur les concentrations dans leau, et ce, au moyen des coefficients connus relatifs au transfert des radionucléides du sol ou de leau vers la végétation et les animaux [23]. Pour ce qui est des zones qui sont considérablement contaminées par des radionucléides ou celles où il y a des taux élevés de transfert de radionucléides du sol vers le biote, la surveillance de la radioactivité du corps entier pourrait permettre de déterminer le fardeau pour le corps humain et dévaluer les doses résultant de lexposition interne. Les résultats des mesures individuelles devraient servir principalement à la validation des modèles appliqués aux fins dévaluation des doses internes [23].</p>  <p>Afin de déterminer les doses annuelles, tous les éléments de lexposition interne et externe causée par le rayonnement environnemental, y compris le rayonnement de fond, doivent être pris en compte. En général, durant la phase de rétablissement, il ny a pas de danger de réactions tissulaires au sein de la population et, par conséquent, les méthodes dévaluation des doses fondées sur les meilleures estimations de paramètres devraient être utilisées, plutôt que les modèles prudents utilisés lors des urgences. Par conséquent, la dose est estimée en fonction de modèles dosimétriques réalistes.</p>   <p>Des programmes spéciaux de surveillance peuvent être mis en place afin de valider les modèles et de diffuser de linformation afin de rassurer le public [23]. La méthode la plus fiable pour valider un modèle dingestion consiste à en comparer les prévisions aux évaluations de doses internes réalisées en fonction des données tirées des mesures individuelles de radionucléides dans le corps humain. Ces mesures sont prises au moyen du comptage du corps entier ou de lanalyse des concentrations de radionucléides dans lexcréta [23].</p>  <p>Les résultats des évaluations de doses devraient dabord faciliter le choix de la valeur du niveau de référence dans la fourchette de 1 à 20 mSv. En outre, ils devraient servir à évaluer les différentes options de mise en œuvre des stratégies de rétablissement dont il a déjà été question et à évaluer la réussite de ces programmes. Les processus dévaluation des doses et dévaluation des stratégies de rétablissement devraient être itératifs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.4"></div>
<h4 id="sec4-2-4">4.2.4	Surveillance de la santé</h4>  <p>À la suite dune urgence, la population exposée devrait avoir reçu de linformation sur ses niveaux dexposition (associés à la situation dexposition durgence) et les risques potentiels connexes pour la santé. Toutefois, durant ou avant la phase de rétablissement, un programme de surveillance de la santé devrait être établi, et les ressources logistiques, scientifiques et administratives nécessaires à sa mise en œuvre devraient être déterminées [20].</p>  <p>Ce programme de surveillance de la santé devrait être axé sur :</p>
<ul>
<li>le suivi auprès des personnes qui pourraient avoir reçu des doses ayant entraîné ou pouvant entraîner des effets déterministes considérables (par exemple, brûlures cutanées, cataractes) afin de leur prodiguer les soins médicaux appropriés</li>
<li>le contrôle des populations touchées qui pourraient présenter un risque accru de cancers afin de procéder à une détection ou à un diagnostic</li>
<li>létablissement dun registre des personnes nécessitant une surveillance de la santé à long terme (devrait être établi avant le processus de rétablissement ou au début de celui-ci)</li>
<li>la prestation de soutien psychologique et psychosocial à lintention des personnes et des populations touchées</li>
</ul>  <p>On sattend à ce que les doses reçues durant le rétablissement (cest-à-dire, la situation dexposition existante) soient suffisamment faibles pour quil ne soit pas nécessaire deffectuer un suivi médical. Les doses susmentionnées correspondaient principalement à celles reçues durant la situation dexposition durgence.</p>
<div className="col-md-12 module ">   <p>Pour la sous-section « Surveillance de la santé », la CCSN souhaite recueillir des commentaires sur la question suivante :</p>  <p>Q14. Avons-nous déterminé tous les éléments nécessaires du programme de surveillance de la santé? Dans la négative, quavons-nous oublié?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.5"></div>
<h4 id="sec4-2-5">4.2.5	Gestion de la contamination</h4>  <p>La gestion de lenvironnement contaminé peut être réalisée de plusieurs façons et dépendra des conditions à la suite de lurgence. En général, la gestion efficace de la contamination sentend du nettoyage après lurgence ou, plus précisément, de la décontamination en vue de réduire ou déliminer les matières ou les substances potentiellement dangereuses. Toutefois, il faut également reconnaître que la décontamination ne représente quune partie de la stratégie globale de gestion de la contamination. Celle-ci pourrait également comprendre dautres types dactivités, comme lobligation dutiliser les terres ou les biens de consommation à des fins différentes et les restrictions quant à leur utilisation et à leur exportation dans dautres zones.</p>   <p>La gestion des zones contaminées, y compris la décontamination et la gestion des déchets, devrait débuter le plus rapidement possible au cours de la phase de rétablissement (ou durant la période menant à cette phase) et devrait servir à établir le périmètre des zones contaminées. Ces activités visent à permettre à une population évacuée ou relocalisée de rentrer chez elle dès que possible afin de pouvoir reprendre une vie normale, dans la mesure du possible [19], et de favoriser la reprise des activités socioéconomiques.</p>
<div className="col-md-12 module ">  <p>Pour la sous-section « Gestion de la contamination », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q15. Nos hypothèses à légard de la décontamination sont-elles correctes? Dans la négative, quavons nous oublié?</p>  <p>Q16. Avons-nous bien tenu compte des éléments de la décontamination? Dans la négative, quelles modifications ou quels ajouts proposez-vous?</p>  <p>Q17. Existe-t-il dautres types dactivités de nettoyage, outre la décontamination, dont il faudrait discuter de manière plus approfondie? Dans laffirmative, de quelles activités sagit-il? Quels renseignements sont nécessaires?</p>  </div>  <div className="clear"></div>
<h5>4.2.5.1 Décontamination</h5>  <p>La décontamination consiste en lélimination physique de la contamination présente dans lenvironnement. Lorsque la situation radiologique est bien comprise, il faut prioriser la décontamination des zones devrait qui permettraient de réduire le plus efficacement possible les expositions individuelles. Pour établir lordre de priorité, on tient compte des voies dexposition potentielles, des utilisations actuelles et futures des terres, et des habitudes alimentaires [19], [20].</p>  <p>Les objectifs et les critères relatifs à la décontamination devraient être établis en fonction de quantités mesurables devraient tenir compte des éléments suivants :</p>
<ul>
<li>le niveau de référence choisi</li>
<li>lefficacité prévue des mesures de décontamination potentielles</li>
<li>les zones visées (cest-à-dire, taille, caractéristiques, emplacement par rapport à la population)</li>
<li>les utilisations prévues de la zone</li>
<li>le rayonnement de fond propre à chaque site (sil est connu)</li>
<li>les incidences de la contamination et des mesures de décontamination potentielles sur la santé humaine et lenvironnement [19], [25]</li>
</ul>  <p>La méthode employée pour décontaminer lenvironnement devrait être choisie en tenant compte de bon nombre des mêmes facteurs, notamment les suivants :</p>
<ul>
<li>lefficacité des mesures prises pour protéger la santé humaine et lenvironnement au fil du temps</li>
<li>le rendement et les coûts des différentes technologies</li>
<li>lefficacité des mesures de décontamination au fil du nettoyage</li>
<li>le temps nécessaire à la mise en œuvre</li>
<li>les incidences sur léconomie locale et régionale</li>
<li>les conditions météorologiques et la période de lannée</li>
<li>les types de surfaces à nettoyer [19], [25]</li>
</ul>  <p>Létablissement dobjectifs de décontamination et lexécution des stratégies connexes devraient constituer un processus itératif. Les objectifs de décontamination devraient être modifiés en fonction de lexpérience acquise [19]. Par exemple, si des matières radioactives ne peuvent être éliminées physiquement de lenvironnement, il pourrait être approprié de choisir une autre option, par exemple les immobiliser ou les recouvrir. Cela permettra au moins dempêcher leur remise en suspension, déliminer la possibilité dexposition par inhalation et, peut-être, de limiter lexposition externe [25].</p>
<h5>4.2.5.2 Gestion des déchets</h5>   <p>Les activités réalisées au cours de la phase de rétablissement, en particulier la décontamination de lenvironnement, pourraient générer un volume élevé de déchets de différents types et de diverses sources. Certains de ces déchets pourraient être très radioactifs, particulièrement sils sont générés près du point dorigine de lurgence. La plupart des déchets ne devraient être que légèrement contaminés, mais ils pourraient être générés en très grande quantité [19].</p>  <p>Au début de la phase de rétablissement, le cas échéant, la gestion des déchets peut se limiter au stockage des déchets à distance de la zone contaminée. Des critères devront être établis afin que, une fois les ressources disponibles, les déchets puissent être triés en fonction de leur quantité de matières radioactives et de leurs types (par exemple, solide, liquide ou organique) selon une évaluation appropriée du danger [20], [25].</p>  <p>Il pourrait être possible de traiter les déchets de manière à réduire leur quantité ou à les convertir sous une forme plus propice à lélimination. Parmi les processus pouvant servir à la réduction des déchets, notons les suivants : incinération, filtrage, distillation ou solidification des liquides et traitements chimiques des liquides [26].</p>  <p>Dans le cadre des activités de gestion des déchets, il pourrait être nécessaire denvisager diverses stratégies délimination. En général, les méthodes délimination des déchets sont fondées sur les principes de lisolation et du confinement [27]. Lisolation consiste à placer les déchets dans un endroit éloigné des lieux dhabitation des personnes et des collectivités et est généralement appropriée pour les déchets contaminés par des radionucléides de longue période qui ne peuvent être éliminés. Le confinement se rapporte aux activités ou aux structures qui sont conçues pour empêcher le rejet des déchets radioactifs dans lenvironnement. Elle protège également lenvironnement physique des déchets. En général, la dilution nest pas considérée comme étant une méthode acceptable étant donné quelle augmente le volume des déchets radioactifs sans en réduire la quantité.</p>   <p>Si les volumes de déchets sont relativement petits, les installations existantes de gestion des déchets radioactifs pourraient être en mesure de les traiter. Toutefois, si les volumes sont considérables (ce qui est probable dans le cas dun rejet plus important), la capacité de ces installations pourrait être insuffisante, cest pourquoi dautres installations de gestion des déchets dangereux et sites denfouissement conventionnels pourraient être envisagés. De nouvelles installations pourraient être construites sur le site du rejet de radionucléides, ailleurs à lintérieur de la zone contaminée ou même dans un endroit différent [19]. Si les déchets doivent être transportés, il faudra tenir compte des règles relatives au transport de matières radioactives. Tous les sites de gestion des déchets doivent avoir des contrôles appropriés en place afin de protéger la santé du public et lenvironnement de tout niveau de contamination radioactive. Les déchets radioactifs de haute activité devront faire lobjet de contrôles plus rigoureux que les matières légèrement contaminées [19]. Si des déchets contiennent des matières fissiles, il sera nécessaire de prendre en compte le potentiel de criticité.</p>
<div className="col-md-12 module ">  <p>Pour la sous-section « Gestion des déchets », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q18. Nos hypothèses à légard de la gestion des déchets sont-elles correctes? Dans la négative, quavons nous oublié?</p>  <p>Q19. Avons-nous bien reflété les éléments de la gestion des déchets? Dans la négative, quelles modifications ou quels ajouts proposez-vous?</p>  </div>
<div className="col-md-12 module ">  <p>Pour la section « Protection du public durant le rétablissement », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q20. Nos hypothèses à légard des éléments clés du rétablissement sont-elles correctes? Dans la négative, quavons-nous oublié?</p>  <p>Q21. Avons-nous bien tenu compte des éléments clés du rétablissement? Dans la négative, quelles modifications ou quels ajouts proposez-vous?</p>  <p>Q22. Le niveau de renseignements fournis est-il adéquat? Dans la négative, quels sujets devraient être approfondis? Le cas échéant, quels éléments avons-nous oubliés?</p>  </div>  <div className="clear"></div>
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
<h3 id="sec4-3">4.3	Protection des travailleurs responsables du rétablissement</h3>  <p>Les doses reçues par des personnes participant au contrôle dune situation durgence sont gérées de manière distincte des doses reçues en raison de lexposition professionnelle prévue, ce qui comprend les efforts de rétablissement. De même, il faut faire une distinction entre les doses reçues par les travailleurs dans le cadre des efforts de rétablissement en raison de leur travail et celle reçue en raison dune exposition due à des conditions environnementales résultant de lurgence.</p>   <p>Durant la phase de rétablissement, les activités devraient être soigneusement planifiées, et lexposition reçue par les travailleurs devrait être contrôlée conformément aux limites de dose applicables aux situations non urgentes. Les limites de dose prévues aux articles 13 et 14 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/page-1.html"><em>Règlement sur la radioprotection</em></a> [4] sappliqueraient durant le rétablissement, à linstar du principe du « niveau le plus bas quil soit raisonnablement possible datteindre » (ALARA). Les doses reçues par les travailleurs en raison du lieu où ils habitent ou travaillent et des denrées alimentaires quils consomment à lintérieur dune zone touchée à la suite de lurgence ne seraient pas prises en compte dans le contexte des limites de dose professionnelle prescrites par le Règlement.</p>   <p>Il est important de noter quà la suite dune urgence, il pourrait exister deux types distincts dexposition des travailleurs sur le plan professionnel : lexposition, durant la phase de rétablissement, des travailleurs dune installation autorisée située dans la zone touchée et lexposition des travailleurs chargés de la mise en œuvre des mesures de rétablissement sous la direction de lorganisation responsable de la gestion du rétablissement. La protection des travailleurs de linstallation autorisée serait régie par les programmes de protection du titulaire de permis visant notamment la sûreté conventionnelle et radiologique.</p>  <p>La protection des travailleurs qui participent à lexécution des stratégies de rétablissement sous la direction de lorganisation responsable de la gestion du rétablissement serait gérée en mettant en œuvre des programmes de protection semblables assortis dune approche tous risques proportionnelle aux risques. Il est attendu que lexposition professionnelle de ce groupe de travailleurs sera prévue, surveillée et gérée de manière à veiller à ce quelle demeure inférieure aux limites prescrites et conforme au principe ALARA. Dans le cadre des programmes de sûreté, lorganisation responsable de la gestion du rétablissement fournirait des renseignements, de la formation, de léquipement de protection et des dosimètres aux travailleurs.</p>
<div className="col-md-12 module ">  <p>Pour la section « Protection des travailleurs responsables du rétablissement », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q23. Quels autres renseignements à ce sujet devraient être inclus dans le cadre?</p>  </div>  <div className="clear"></div>
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
<h2 id="sec5">5.0 Facteurs relatifs aux communications avec le public durant le rétablissement</h2>  <p>Tout au long de la phase de rétablissement, il faut maintenir des niveaux de communication accrus afin de gérer les incertitudes et le concept de nouvelle normalité. Une stratégie de communication centralisée devrait être préparée puis suivie par toutes les parties intéressées afin détablir une orientation claire et des messages cohérents. Il est important déviter les contradictions ou la confusion du public.</p>  <p>Le public et dautres parties intéressées doivent être informés régulièrement. Ils devront savoir quel est lorganisme ou le groupe dorganismes responsables afin de connaître les instructions à suivre. La plupart des gens seront préoccupés par les effets possibles sur la santé et les répercussions de lurgence sur lenvironnement.</p>   <p>Comme toute communication liée aux risques, il est essentiel de communiquer avec le public au moyen dune terminologie comprise par tous. Des messages cohérents doivent provenir de sources fiables, être clairs et simples, être appuyés par des faits et être mis dans le bon contexte pour bien expliquer les renseignements à lintention du public cible.</p>
<div className="span-3 mrgn-lft-0 mrgn-bttm-0">   <p>Divers outils et médias devraient être utilisés pour communiquer fréquemment avec le public et dautres parties intéressées. Les voies de communication traditionnelles, comme la télévision, les médias imprimés et la radio, devraient être complétées par dautres méthodes, comme les médias sociaux, les sites Web, les forums et les vidéos éducatives. Dans le cadre des communications pour expliquer la situation, il est important de connaître linformation erronée et les rumeurs afin de les réfuter.</p>  </div>
<div className="span-3 module pull-right mrgn-rght-0 mrgn-lft-0 mrgn-bttm-0 mrgn-tp-lg backgound-white" style="border:3px solid #006400;">  <h3 className="text-center">Diffusion dinformation</h3>  <p>Saviez-vous que la CCSN a pour <a href="/fra/the-commission/index#R1">mandat</a> dinformer objectivement le public sur les plans scientifique ou technique ou en ce qui concerne la réglementation?</p>  </div>  <div className="clear"></div>
<p>Les centres publics daccueil et dinformation constituent une méthode de communication efficace avec les populations touchées et permettent de recueillir des données, doffrir du soutien et de diffuser des renseignements. Ces types de centres donnent au public loccasion de faire part de leur expérience personnelle et dobtenir des réponses directes à leurs questions [20]. Il est également important, au moyen des communications, de sensibiliser régulièrement le public aux mesures de radioprotection prises au sein de la communauté grâce à la mobilisation de leaders dignes de foi, comme des enseignants, des chercheurs, des membres dassociations et des professionnels de la santé [20].</p>
<div className="col-md-12 module ">  <p>Pour la section « Facteurs relatifs aux communications avec le public durant le rétablissement », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q24. Avons-nous bien tenu compte des facteurs relatifs aux communications durant le rétablissement? Dans la négative, quelles modifications ou quels ajouts proposez-vous?</p>  <p>Q25. Le niveau dinformation fournie est-il adéquat? Dans la négative, quels sujets devraient être approfondis? Le cas échéant, quels éléments avons-nous oubliés?</p>  </div>  <div className="clear"></div>
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
<h2 id="sec6">6.0 Commentaires des parties intéressées sur lapproche réglementaire proposée</h2>  <p>La CCSN encourage activement lindustrie nucléaire, les gouvernements fédéral et provinciaux, les administrations municipales, dautres parties intéressées et le public à exprimer leur opinion sur lapproche réglementaire proposée en ce qui a trait au Cadre pour le rétablissement en cas durgence nucléaire ou radiologique.</p>  <p>La CCSN sollicite notamment de la rétroaction sur la pertinence des hypothèses soulevées à légard du rétablissement de même que sur les rôles et responsabilités durant le rétablissement dans ce document ainsi que dans lannexe A.</p>
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
<h2 id="sec7">7.0 Comment participer</h2>  <p>Veuillez faire parvenir vos commentaires à :</p>  <p>Commission canadienne de sûreté nucléaire<br />
280, rue Slater<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario)  K1P 5S9<br />
Télécopieur : 613-995-5086<br />
Courriel : <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></p>  <p><strong>Veuillez indiquer clairement sur quel document de travail portent vos commentaires. Si vous répondez à une question précise de ce document, inscrivez également le numéro de la question.</strong></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="acro"></div>
<h2 id="acro">Sigles et acronymes</h2>  <style type="text/css">  dl.cnsc-dl dt  {  margin: 0 5px 4px 0;  float: left;  clear: left;  font-weight: bold;}  dl.cnsc-dl dd {  margin: 0 0 4px 90px;}  dl.cnsc-dl dd:after {  content: &#39;&#39;;  display: block;  clear: both;}  </style>
<dl className="cnsc-dl">
<dt>AIEA</dt>
<dd>Agence internationale de lénergie atomique</dd>
<dt>ALARA</dt>
<dd>niveau le plus bas quil soit raisonnablement possible datteindre</dd>
<dt>CCSN</dt>
<dd>Commission canadienne de sûreté nucléaire</dd>
<dt>CIPR</dt>
<dd>Commission internationale de protection radiologique</dd>
<dt>CPOU</dt>
<dd>Centre provincial des opérations durgence</dd>
<dt>FSU</dt>
<dd>fonctions de soutien en cas durgence</dd>
<dt>GUN</dt>
<dd>gestion des urgences nucléaires</dd>
<dt>KI</dt>
<dd>iodure de potassium</dd>
<dt>mSv</dt>
<dd>millisievert</dd>
<dt>PFIU</dt>
<dd>Plan fédéral dintervention durgence</dd>
<dt>PFUN</dt>
<dd>Plan fédéral en cas durgence nucléaire</dd>
<dt>PISE</dt>
<dd>Programme indépendant de surveillance environnementale</dd>
<dt>SC</dt>
<dd>Santé Canada</dd>  </dl>
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
<h2 id="glossary">Glossaire</h2>  <dl>
<dt><strong>contre-mesures</strong> <em>(countermeasure)</em></dt>
<dd>Une mesure dintervention ou de protection, par exemple, lévacuation et la mise à labri, prise pour contrer un danger ou une menace.</dd>
<dt><strong>dose</strong> <em>(dose)</em></dt>
<dd>Terme général utilisé pour désigner la quantité dénergie provenant de rayonnement ionisant absorbé par les tissus. Voir aussi dose absorbée, dose équivalente et dose efficace.</dd>
<dt><strong>dose absorbée</strong> <em>(absorbed dose)</em></dt>
<dd>Quotient, exprimé en grays, de lénergie communiquée par le rayonnement à un corps ou un organe par la masse de ce corps ou de cet organe.</dd>
<dt><strong>dose efficace</strong> <em>(effective dose)</em></dt>
<dd>Somme, exprimée en sieverts, des valeurs où chacune représente le produit de la dose équivalente reçue par un organe ou un tissu, et engagée à leur égard, figurant à la colonne 1 de lannexe 1 par le facteur de pondération figurant à la colonne 2.</dd>
<dt><strong>dose équivalente</strong> <em>(equivalent dose)</em></dt>
<dd>Produit, exprimé en sieverts, de la dose absorbée dun type de rayonnement figurant à la colonne 1 de lannexe 2 par le facteur de pondération figurant à la colonne 2. </dd>
<dt><strong>dose prévue</strong> <em>(projected dose)</em></dt>
<dd>Prévision de la dose que pourrait recevoir une personne ou une population.</dd>
<dt><strong>intervention</strong> <em>(response)</em></dt>
<dd>Toute prise de dispositions dépassant les procédures normales en vue de gérer une urgence et den atténuer les effets, y compris toutes les structures dorganisation durgence, les mesures dintervention, les communications ainsi que la formulation dinformation et de directives à lintention du public.</dd>
<dt><strong>limite de dose</strong> <em>(dose limit)</em></dt>
<dd>Limite de dose de rayonnement (dose efficace ou dose équivalente), précisée dans le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>Règlement sur la radioprotection</em></a>, et qui réduit le risque des effets nocifs sur la santé dus à la radioexposition.</dd>
<dt><strong>mesure corrective</strong> <em>(remediation)</em></dt>
<dd>Toute mesure qui peut être prise pour réduire la radioexposition liée à la contamination de terres au moyen dinterventions visant directement la contamination (cest-à-dire, la source) ou les voies dexposition humaines. Cela ne signifie pas que la contamination sera entièrement éliminée.</dd>
<dt><strong>mesure de protection</strong> <em>(protective action)</em></dt>
<dd>Mesures, contre-mesures et interventions qui permettent de réduire la radioexposition des travailleurs ou du public.</dd>
<dt><strong>niveaux de référence</strong> <em>(levels of reference)</em></dt>
<dd>Niveau de la dose du risque au-dessus duquel il est considéré inapproprié de prévoir une exposition et en dessous duquel loptimisation de la protection doit être mise en œuvre.</dd>
<dt><strong>optimisation</strong> <em>(optimization)</em></dt>
<dd>Processus visant à déterminer le niveau de protection et de sûreté qui ramène les expositions, ainsi que la probabilité et lampleur des expositions potentielles, au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs socioéconomiques.</dd>
<dt><strong>rétablissement</strong> <em>(recovery)</em></dt>
<dd>Période durant laquelle les activités sont axées sur la restauration de la qualité de vie et sur la remise en état des systèmes sociaux, des économies, des infrastructures collectives et de lenvironnement. Le rétablissement peut débuter durant la phase dintervention et se poursuivre pendant plusieurs années après lurgence.</dd>
<dt><strong>sievert</strong> <em>(sievert)</em></dt>
<dd>Unité de dose équivalente et de dose efficace du Système international dunités (SI) qui équivaut à 1 joule/kilogramme.</dd>
<dt><strong>situation dexposition durgence</strong> <em>(emergency exposure situation)</em></dt>
<dd>Situation qui peut survenir durant le déroulement dune situation prévue, qui résulte dun acte malicieux ou de toute autre situation imprévue et qui nécessite la prise de mesures durgence pour éviter ou atténuer des conséquences indésirables.</dd>
<dt><strong>situation dexposition existante</strong> <em>(existing exposure situation)</em></dt>
<dd>Situation qui existe déjà lorsquune décision en matière de contrôle doit être prise, notamment en ce qui a trait à une situation dexposition prolongée à la suite dune urgence.</dd>
<dt><strong>urgence nucléaire</strong> <em>(nuclear emergency)</em></dt>
<dd>Situation anormale qui accroît ou pouvant accroître le risque de danger pour la santé et la sécurité des personnes, lenvironnement ou la sécurité nationale et qui nécessite lattention immédiate de la CCSN. Exemples : urgence à une installation nucléaire, urgence impliquant un navire à propulsion nucléaire dans un port canadien, urgence comportant la perte, le vol ou la découverte de matières nucléaires ou attaque terroriste perpétrée à laide de matières radioactives.</dd>
<dt><strong>urgence radiologique</strong> <em>(radiological emergency)</em></dt>
<dd>Situation durgence durant laquelle il existe un danger, réel ou perçu, en raison de la radioexposition ou de lénergie résultant dune réaction nucléaire en chaîne ou de la désintégration des produits dune réaction en chaîne.</dd>  </dl>
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
<li>Commission canadienne de sûreté nucléaire, <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/TexteComplet.html"><em>Loi sur la sûreté et la réglementation nucléaires</em> (L.C. 1997, ch. 9)</a>, janvier 2017.</li>
<li>Sécurité publique Canada, <a href="http://laws-lois.justice.gc.ca/fra/lois/E-4.56/"><em>Loi sur la gestion des urgences</em> (L.C. 2007, ch. 15)</a>.</li>
<li>Commission canadienne de la sûreté nucléaire, <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1/index">REGDOC-2.10.1, <em>Préparation et intervention relatives aux urgences nucléaires</em></a>, version 2, février 2016.</li>
<li>Commission canadienne de sûreté nucléaire, <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/page-1.html"><em>Règlement sur la radioprotection</em></a>, DORS/2000-203, juin 2016.</li>
<li>Sécurité publique Canada, <a href="https://www.securitepublique.gc.ca/cnt/rsrcs/pblctns/mrgnc-mngmnt-frmwrk/index-fr.aspx"><em>Un cadre de sécurité civile pour le Canada</em></a>, Sécurité publique Canada, janvier 2011.</li>
<li>Agence internationale de lénergie atomique, Collection Normes de sûreté de lAIEA, Prescriptions générales de sûreté, Partie 7: <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/P_1708_web.pdf"><span lang="en"><em>Preparedness and Response for a Nuclear or Radiological Emergency</em></span></a>, 2015.</li>
<li>Sécurité publique Canada, <a href="https://www.securitepublique.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/index-fr.aspx"><em>Plan fédéral dintervention durgence</em></a>, janvier 2011.</li>
<li>Santé Canada, <a href="https://www.canada.ca/fr/sante-canada/services/preoccupations-liees-sante/rapports-publications/urgences-desastres/plan-federal-cas-urgence-nucleaire-partie-1-plan-directeur-sante-canada-2002.html"><em>Plan fédéral en cas durgence nucléaire</em></a>, 5<sup>e</sup> édition, janvier 2014.</li>
<li>Santé Canada, <a href="https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/rapports-publications/radiation/lignes-directrices-canadiennes-interventions-situation-urgence-nucleaire-novembre-2003.html"><em>Lignes directrices canadiennes sur les interventions en situation durgence nucléaire</em></a>, novembre 2003.</li>
<li>Santé Canada, <a href="https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/rapports-publications/contaminants-environnementaux/lignes-directrices-canadiennes-restrictions-concernant-aliments-eau-contamines-radioactivite-suite-urgence-nucleaire-lignes-directrices-justification.html"><em>Lignes directrices canadiennes sur les restrictions concernant les aliments et leau contaminés par la radioactivité à la suite dune urgence nucléaire</em></a>, 2000.</li>
<li>Ministère de la Sécurité communautaire et des Services correctionnels de lOntario, <a href="https://www.emergencymanagementontario.ca/french/emcommunity/response_resources/plans/provincial_nuclear_emergency_response_plan_fr.html"><em>Plan provincial dintervention en cas durgence nucléaire &ndash; Plan directeur</em></a>, 2009.</li>
<li>Ministère de la Santé de la Colombie-Britannique, <span lang="en"><em>British Columbia Nuclear Emergency Plan</em></span>, 2015.</li>
<li>Ministère de la Santé et des Soins de longue durée, <a href="http://www.health.gov.on.ca/fr/pro/programs/emb/rhrp/default.aspx"><em>Plan dintervention sanitaire en cas dincident radiologique ou nucléaire</em></a>, 2014.</li>
<li>Agence internationale de lénergie atomique, Collection Normes de sûreté de lAIEA, Prescriptions générales de sûreté, Partie 3 : <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1578f_web.pdf"><em>Radioprotection et sûreté des sources de rayonnements : Normes fondamentales internationales de sûreté</em></a>, 2016.</li>
<li>Commission internationale de protection radiologique, Annales de la CIPR, Publication 101b de la CIPR, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20101b"><span lang="en"><em>The Optimisation of Radiological Protection &ndash; Broadening the Process</em></span></a>, Volume 36(3), 2006.</li>
<li>Commission internationale de protection radiologique, Annales de la CIPR, Publication 103 de la CIPR, <a href="http://www.icrp.org/docs/P103_French.pdf"><em>Recommandations 2007 de la Commission internationale de protection radiologique</em></a>, Paris, Lavoisier, 2009.</li>
<li>Ministère de la Sécurité publique du Nouveau-Brunswick, Plan durgence nucléaire hors site pour Point Lepreau, volume 1 (Politiques) et volume 2 (Procédures), 2013.</li>
<li>Commission internationale de protection radiologique, Annales de la CIPR, Publication 111 de la CIPR, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20111"><span lang="en"><em>Application of the Commissions Recommandations relatives to the Protective of People Living in Long-term Contaminated Areas after a Nuclear Accident or a Radiation Emergency</em></span></a>, Volume 39(3), 2009.</li>
<li>United States Environmental Protection Agency, <a href="https://www.epa.gov/sites/production/files/2015-06/documents/pag-manual-interim-public-comment-4-2-2013.pdf"><span lang="en"><em>PAG Manual &ndash; Protective Action Guides And Planning Guidance For Radiological Incidents, Draft for Interim Use and Public Comment</em></span></a>, mars 2013.</li>
<li>Autorité de sûreté nucléaire (ASN), <a href="https://post-accidentel.asn.fr/content/download/53111/365550/version/1/file/GT3_021207_b.pdf">Comité directeur pour la gestion de la phase post accidentelle dun accident nucléaire ou dune situation durgence radiologiques</a> (CODIRPA), octobre 2012.</li>
<li>National Council on Radiation Protection and Measurements (NCRP), rapport n<sup>o</sup> 175, <span lang="en"><em>Decision making for late-phase recovery from major nuclear or radiological incident</em></span>, décembre 2014.</li>
<li>Commission internationale de protection radiologique, <a href="http://www.icrp.org/page.asp?id=189"><span lang="en"><em>ICRP Dialogue Initiative (2011-2015)</em></span></a>. (En anglais seulement)</li>
<li>Agence internationale de lénergie atomique, <span lang="en"><em>Environmental and Source Monitoring for Purposes of Radiation Protection</em></span>, 2005.</li>
<li>Commission du Codex Alimentarius, <em>Norme générale pour les contaminants et les toxines présents dans les produits de consommation humaine</em>, Tableau 1 &ndash; Radionucléides, 2010.</li>
<li>Nordic Guidelines and Recommendations, <a href="http://www.stralsakerhetsmyndigheten.se/Global/Pressmeddelanden/2014/Nordic Flagbook February 2014.pdf"><span lang="en"><em>Protective Measures in the Early and Intermediate Phases of a Nuclear or Radiological Emergency</em></span></a>, 2014.</li>
<li>Groupe de lAssociation canadienne de normalisation, CSA N292.3-14, <em>Gestion des déchets radioactifs de faible et de moyenne activité</em>, 2014.</li>
<li>Agence internationale de lénergie atomique, Prescriptions de sûreté particulières n<sup>o</sup> SSR-5, <em>Stockage définitif des déchets radioactifs</em>, 2011.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="biblio"></div>
<h2 id="biblio">Bibliographie</h2>  <ol>
<li>Australian Radiation Protection and Nuclear Safety Agency, <a href="https://www.arpansa.gov.au/regulation-and-licensing/regulatory-publications/radiation-protection-series/guides-and-recommendations/rps7"><span lang="en"><em>Recommendations: Intervention in Emergency Situations Involving Radiation Exposure</em></span></a>, Radiation Protection Series No. 7, November 2004.</li>
<li>Association canadienne de normalisation, CSA N1600, <em>Exigences générales relatives aux programmes de gestion des urgences nucléaires</em>, Toronto, 2014.</li>
<li>Santé Canada, <em>Ébauche des Lignes directrices canadiennes sur les mesures de protection en cas durgence nucléaire</em>, 2016. </li>
<li>Commission canadienne de sûreté nucléaire, <a href="/fra/resources/fact-sheets/reference-levels"><em>Niveaux de référence pour les interventions en cas durgence nucléaire et le rétablissement après un accident</em></a>, octobre 2015.</li>
<li>Plan axé sur le risque de la région de Durham, Plan dintervention en cas durgence nucléaire Durham, mai 2016.</li>
<li>Gouvernement du Canada, <a href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/mrgnc-rspns-pln-fra.pdf"><em>Plan fédéral dintervention durgence</em></a>, janvier 2011.</li>
<li>Gouvernement du Canada, <a href="http://laws-lois.justice.gc.ca/fra/lois/E-4.56/"><em>Loi sur la gestion des urgences</em></a>, 2007.</li>
<li>Santé Canada, <a href="http://www.hc-sc.gc.ca/hc-ps/ed-ud/event-incident/radiolog/info/glossary-glossaire-fra.php#o">Radiologiques et nucléaires &ndash; Renseignements de base &ndash; Archivée &ndash; Glossaire</a>, 2013.</li>
<li>Commission internationale de protection radiologique, Annales de la CIPR, Publication 109 de la CIPR, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20109"><span lang="en"><em>Application of the Commissions Recommandations for the Protection of People in Emergency Exposure Situations</em></span></a>, volume 39(1), 2009a.</li>
<li>Agence internationale de lénergie atomique, Collection normes de sûreté de lAIEA n<sup>o</sup> GSG-x, <a href="http://regelwerk.grs.de/sites/default/files/cc/dokumente/ds474_ms_0.pdf"><span lang="en">Draft DS474: Arrangements for the Termination of a Nuclear or Radiological Emergency</span></a>, version 3, 2016.</li>
<li><a href="http://www.kincardine.net/public_docs/documents/MOK Emergency Response Plan revised 2016 jan 262.pdf"><span lang="en">Kincardine Emergency Response Plan, Schedule A to BY_LAW No. 2006-009</span></a>, 27 janvier 2016.</li>
<li>Raskob, W., Gering, F., Lochard, J., Nisbet, A., Starostova, V., Tomic, B. EURANOS (<a href="http://cordis.europa.eu/pub/fp6-euratom/docs/euranos-publishable-summary-final_en.pdf"><span lang="en">European Approach to Nuclear and Radiological Emergency Management and Rehabilitation Strategies</span></a>).</li>
<li>United States Environmental Protection Agency (USEPA), <a href="https://www.epa.gov/radiation/protective-action-guides-pags"><span lang="en"><em>Manual of Protective Action Guides and Protective Actions for Nuclear Incidents</em></span></a>, May 1992.</li>
<li>United Stated Nuclear Regulatory Commission, <a href="http://www.nrc.gov/reading-rm/basic-ref/glossary.html"><span lang="en"><em>Basic References: Glossary</em></span></a>, 2016.</li>   </ol>
<div className="col-md-12 module ">  <p>Pour les sections « Références » et « Bibliographie », la CCSN souhaite recueillir des commentaires sur les questions suivantes :</p>  <p>Q26. Avons-nous oublié une source dinformation importante? Dans laffirmative, veuillez fournir les renseignements bibliographiques complets.</p>  <p>Q27. Avons-nous pris en compte tous les documents appropriés? Dans la négative, veuillez fournir la ou les sources de renseignements dont il faudrait tenir compte.</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }