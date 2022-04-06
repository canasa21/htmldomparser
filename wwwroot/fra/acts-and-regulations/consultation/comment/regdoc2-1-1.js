import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.1.1, Système de gestion", 
                dateModified: "2018-06-06",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-1-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Préface</h2>  <p>Le  présent document d&rsquo;application de la réglementation fait partie de la série de  documents d&rsquo;application de la réglementation de la CCSN intitulée Système de  gestion. La liste complète des séries figure à la fin du présent document et  elle peut être consultée sur le <a href="http://www.suretenucleaire.gc.ca/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le  document d&rsquo;application de la réglementation REGDOC-2.1.1, S<em>ystème de gestion</em>, fournit aux titulaires de permis et aux  demandeurs des renseignements sur le domaine de sûreté et de réglementation de  la CCSN Système de gestion, ainsi que des renseignements supplémentaires sur  des questions diverses et nouvelles en lien avec le système de gestion.     </p>  <p>Le cadre de réglementation de la CCSN comprend les  documents d&rsquo;application de la réglementation de la CCSN ainsi que des normes  nationales et internationales. Plus particulièrement, les normes de la série N  de l&rsquo;Association canadienne de normalisation (Groupe CSA) fournissent un  ensemble interrelié d&rsquo;exigences réglementaires pour la gestion des  installations et des activités nucléaires. La norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> présente un  cadre de gestion général et énonce des orientations pour l&rsquo;élaboration et la  mise en œuvre de pratiques et de contrôles de gestion rigoureux visant le  fondement d&rsquo;autorisation. Le présent document d&rsquo;application de la  réglementation n&rsquo;est pas une reproduction des exigences génériques de la norme  CSA N286-12. Toutefois, il offre une orientation plus spécifique concernant ces  exigences. </p>  <p>L&rsquo;orientation  contenue dans ce document vise à informer le demandeur, à expliquer plus en  détails des exigences ou à fournir de l&rsquo;orientation aux demandeurs et aux  titulaires de permis sur la façon de répondre aux exigences.</p>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table des matières</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Portée</a></li>
<li><a href="#sec1-3">1.3 Dispositions législatives pertinentes</a></li>
</ul></li>
<li><a href="#sec2">2. Promotion d&#39;une culture de sûreté</a></li>
<li><a href="#sec3">3. Évaluations de la culture de sûreté</a>
<ul>
<li><a href="#sec3-1">3.1 Leadership</a></li>
<li><a href="#sec3-2">3.2 Culture  de sûreté</a></li>
<li><a href="#sec3-3">3.3 Chaîne d&rsquo;approvisionnement</a>
<ul>
<li><a href="#sec3-3-1">3.3.1 Articles  contrefaits, frauduleux et suspects</a></li>
<li><a href="#sec3-3-2">3.3.2 Gestion des entrepreneurs</a></li>
</ul>
</li>
<li><a href="#sec3-4">3.4 Gestion de la configuration</a></li>
<li><a href="#sec3-5">3.5 Assurance de la qualité des logiciels</a></li>
</ul></li>
<li><a href="#sec4">4. Surveillance  de la radioprotection : Titulaires de permis de substances nucléaires,  d&rsquo;appareils à rayonnement et d&rsquo;installations nucléaires de catégorie II</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">Références</a></li>
<li><a href="#AddInfo">Renseignements supplémentaires</a></li>   </ul>
</div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>La Commission canadienne de sûreté nucléaire (CCSN) définit le système de gestion comme « le cadre des processus, des procédures et des pratiques permettant de sassurer quune organisation peut sacquitter de toutes les tâches nécessaires à latteinte de ses objectifs de façon sûre et constante »<sup id="fnb1a-foot"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>. Les exigences du système de gestion offrent une orientation générale à lorganisation du titulaire de permis afin délaborer et de mettre en œuvre des pratiques et des contrôles de gestion rigoureux visant lorganisation. Un système de gestion efficace et bien implanté aide à donner lassurance à la CCSN que le titulaire de permis réalisera ses activités autorisées de manière sûre. </p>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le présent document a pour but de fournir des  renseignements sur :</p>  <ul>
<li>les  systèmes de gestion applicables aux différents types de titulaires de permis de  la CCSN</li>
<li>la  norme CSA N286-12, <em>Exigences relatives au  système de gestion des installations nucléaires</em> du Groupe CSA<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></li>
<li>des  sujets particuliers qui ont fait l&rsquo;objet de récents développements dans les  normes relatives au système de gestion, ainsi que ceux revêtant un intérêt  réglementaire relativement au système de gestion</li>
<li>la  surveillance de la radioprotection relativement aux substances nucléaires, aux  appareils à rayonnement et aux installations nucléaires de catégorie II </li>  </ul>
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
<h3 id="sec1-2">1.2 Portée</h3>  <p>Les  renseignements contenus dans le présent document concernent les types d&rsquo;installations  suivants qui possèdent une condition de permis relative au système de gestion :</p>  <ul>
<li>réacteurs  nucléaires de puissance et réacteurs nucléaires non producteurs de puissance de  catégorie IA</li>
<li>installations  nucléaires de catégorie IB</li>
<li>mines  et usines de concentration d&rsquo;uranium </li>
<li>installations  de gestion des déchets radioactifs </li>  </ul>  <p>Les  catégories de titulaires de permis ainsi que les types d&rsquo;installations ou d&rsquo;activités  qui suivent n&rsquo;ont pas de condition portant sur le système de gestion dans leur  permis de la CCSN, mais peuvent tout de même consulter ce document pour obtenir  de l&rsquo;information sur ce qui suit :   </p>  <ul>
<li>substances  nucléaires et appareils à rayonnement </li>
<li>installations  nucléaires et équipement réglementé de catégorie II </li>
<li>services  de dosimétrie </li>
<li>emballage  et transport de substances nucléaires </li>  </ul>
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
<h3 id="sec1-3">1.3	Dispositions législatives pertinentes</h3>  <p>Les dispositions suivantes de la <em>Loi sur la sûreté et la réglementation  nucléaires </em>(LSRN) ainsi que des règlements pris en vertu de cette loi s&rsquo;appliquent  au présent document d&rsquo;application de la réglementation : </p>  <ul>
<li>l&rsquo;alinéa  3d) du <em>Règlement sur les installations  nucléaires de catégorie I</em> stipule qu&rsquo;une demande de permis visant l&rsquo;exploitation  d&rsquo;une installation nucléaire de catégorie I comprend « le système de gestion  proposé pour l&rsquo;activité visée […] »</li>
<li>le  sous-alinéa 3b)(v) du<em> Règlement sur les  mines et les usines de concentration d&rsquo;uranium</em> stipule qu&rsquo;une demande de  permis visant une mine ou une usine de concentration d&rsquo;uranium comprend « le  système de gestion proposé pour l&rsquo;activité, y compris les mesures qui seront  prises pour promouvoir une culture de sûreté et l&rsquo;appuyer; »</li>
<li>les  articles 3 (Dispositions générales) et 4 (Demande de permis d&rsquo;abandon) du <em>Règlement général sur la sûreté et la  réglementation nucléaires </em>précisent les exigences qui forment le fondement  d&rsquo;un système de gestion</li>
<li>le <em>Règlement sur les substances nucléaires  et les appareils à rayonnement </em>(articles 3 et 4) contient des conditions  similaires et des conditions plus spécifiques qui sont fondamentales à un  système de gestion</li>
<li>le <em>Règlement sur les installations  nucléaires et l&rsquo;équipement réglementé de catégorie II </em>exige ce qui  suit&nbsp;:
<ul>
<li>pour  la construction d&rsquo;une installation nucléaire de catégorie II, l&rsquo;alinéa 3j) exige  « le programme d&rsquo;assurance de la qualité proposé pour la conception et la  construction de l&rsquo;installation nucléaire », et l&rsquo;alinéa 4h) exige « le  programme d&rsquo;assurance de la qualité proposé» pour l&rsquo;exploitation d&rsquo;une  installation nucléaire de catégorie II</li>
<li>pour  l&rsquo;équipement réglementé de catégorie II, l&rsquo;article 7 « Permis d&rsquo;entretien »  donne des détails sur les exigences qui forment le système de gestion </li>
<li>pour  l&rsquo;homologation de l&rsquo;équipement, l&rsquo;alinéa 11n) exige « le programme d&rsquo;assurance  de la qualité qui a été suivi pendant la conception de l&rsquo;équipement et qui sera  suivi pendant sa production; »</li>
</ul>
</li>
<li>l&rsquo;alinéa  18b) du <em>Règlement sur la radioprotection</em> visant les services de dosimétrie exige « le programme d&rsquo;assurance de la  qualité proposé » pour un permis d&rsquo;exploitation d&rsquo;un service de dosimétrie</li>
<li>l&rsquo;alinéa  24a) du <em>Règlement sur l&rsquo;emballage et le  transport des substances nucléaires (2015) </em>comprend les exigences  concernant un système de gestion, qui est en conformité avec la réglementation  de l&rsquo;AIEA</li>  </ul>
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
<h2 id="sec2">2. Information sur le système de gestion </h2>  <p>La  CCSN s&rsquo;attend à ce que les titulaires de permis appliquent tous les principes  de la norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> comme fondement de leur système de gestion et des  processus de gestion de base correspondants. Un système de gestion mis en œuvre  conformément à ces principes et à ces exigences comprend des caractéristiques  qui assurent une exploitation sécuritaire. Les exigences d&rsquo;un système de  gestion s&rsquo;appliquent tout au long du cycle de vie de l&rsquo;activité autorisée et  couvrent tous les domaines de sûreté et de réglementation (DSR). </p>  <p>En  ce qui concerne les installations nucléaires qui n&rsquo;ont pas de condition de  permis relative à un système de gestion, les principes de la norme CSA N286-12  peuvent servir d&rsquo;orientation pour l&rsquo;établissement d&rsquo;un système de gestion  efficace. De l&rsquo;orientation supplémentaire sur ce sujet est également disponible  dans d&rsquo;autres normes de l&rsquo;industrie, comme la norme CAN/CSA-ISO 9001:16, <em>Systèmes de management de la qualité –  Exigences</em> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup> et la norme ISO 14001, <em>Systèmes  de management environnemental </em><sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup>. </p>  <p><strong>Structures et principes de la norme  CSA N286-12 </strong></p>  <p>La  norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>   intègre des exigences provenant d&rsquo;autres normes relatives  au système de gestion en ce qui concerne les aspects de qualité, de santé et  sécurité, d&rsquo;environnement, d&rsquo;économie et de sécurité. Par conséquent, elle  fournit les bases sur lesquelles un système de gestion unique peut être mis en  œuvre.          </p>  <p>La  norme CSA N286-12 comprend un ensemble de douze principes qui sont décrits  ci-dessous. Les deux premiers principes ont pour objectif d&rsquo;assurer une prise  en compte adéquate de la sûreté dans toutes les décisions et les mesures et de  veiller à ce que les titulaires de permis conçoivent, planifient et maîtrisent  leurs activités afin de respecter toutes les exigences :</p>  <ul>
<li>la  sûreté est la considération primordiale qui guide les décisions et les actions</li>
<li>les  activités de l&rsquo;entreprise sont définies, organisées et maîtrisées</li>  </ul>  <p>Conformément  aux trois principes suivants, pour respecter toutes les exigences, une  organisation doit s&rsquo;assurer qu&rsquo;elle s&rsquo;aligne sur l&rsquo;orientation de la haute  direction et qu&rsquo;elle est en mesure d&rsquo;établir, de communiquer et d&rsquo;atteindre les  objectifs et les priorités qu&rsquo;elle se fixe : </p>  <ul>
<li>l&rsquo;organisation  est définie et comprise</li>
<li>les  ressources sont gérées</li>
<li>la  communication est effective</li>  </ul>  <p>Les principes restants veillent à ce  que des processus soient établis pour gérer les activités de manière uniforme  et vérifier que les objectifs sont atteints. Le respect des principes suivants  peut veiller à ce que des mesures soient en place pour régler les lacunes et  apporter des améliorations continues :</p>  <ul>
<li>l&rsquo;information  est gérée</li>
<li>les  activités sont gérées</li>
<li>les  problèmes sont identifiés et résolus</li>
<li>les  changements sont maîtrisés </li>
<li>des  évaluations sont effectuées</li>
<li>l&rsquo;expérience  est recherchée, partagée et utilisée</li>
<li>le  système de gestion est amélioré en permanence</li>  </ul>
<p>La  norme CSA N286-12 est structurée de manière à en faciliter l&rsquo;utilisation pour  les types d&rsquo;installations applicables qui sont mentionnés dans la norme. La norme  présente les exigences génériques applicables aux types d&rsquo;installations  énumérées ci-dessous, tandis que chaque section qui suit s&rsquo;applique à une  installation ou à un groupe d&rsquo;installations mentionné dans le titre. Le tableau  ci-dessous présente les divers types d&rsquo;installations et les sections  correspondantes contenant les exigences de la CCSN relatives au système de  gestion.</p>   <table className="width-100">  	<caption><strong>Tableau 1 :</strong> Exigences relatives au système de gestion pour les divers types dinstallations</caption>  <tr>
<th className="text-center">Type dinstallation</th>
<th>Sections applicables de la norme CSA N286-12</th>  </tr>  <tr>
<td>Mines et usines de concentration duranium</td>
<td><p>4. Exigences génériques relatives au système de gestion<br/> 5. Exigences particulières pour les mines et usines de concentration duranium</p></td>  </tr>  <tr>
<td>Installations  de traitement de l&rsquo;uranium et de fabrication de combustible</td>  	<td><p>4. Exigences génériques relatives au système de gestion<br/>
6. Exigences  particulières pour les installations de traitement d&rsquo;uranium et de fabrication  de combustible nucléaires</p></td>  </tr>  <tr>
<td>Installations  dotées de réacteurs&nbsp;à haute puissance</td>  	<td><p>4. Exigences génériques relatives au système de gestion<br/>
7. Exigences  particulières pour les installations de réacteurs à haute puissance</p></td>  </tr>  <tr>
<td>Installations  de recherche et de traitement des isotopes</td>  	<td><p>4. Exigences génériques relatives au système de gestion<br/>
8. Exigences  particulières pour les installations de recherche et de traitement des isotopes</p></td>  </tr>  <tr>
<td>Installations  de gestion des déchets radioactifs</td>  	<td><p>4. Exigences génériques relatives au système de gestion<br/>
9. Exigences  particulières pour les installations de gestion des déchets radioactifs</p></td>  </tr>  </table>
<p>Le  document <em>Commentaires sur la N286-12,  Exigences relatives au système de gestion des installations nucléaires </em>(CSA  N286.0.1-14) <sup id="fnb4a-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup> fournit des renseignements contextuels concernant certaines  clauses et exigences de la norme CSA N286-12. Ces renseignements  peuvent aider l&rsquo;utilisateur à préciser le contexte des exigences de la norme  CSA N286-12. De plus, le document CSA N286.0.1-14 cite en référence  les documents de recherche qui ont été utilisés pendant la formulation de  certaines exigences de la norme CSA N286-12. Le titre et le numéro des clauses  utilisés dans le document CSA N286.0.1-14 correspondent à ceux de la norme CSA N286-12. </p>
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
<h2 id="sec3">3. Sujets particuliers en matière de réglementation </h2>
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
<h3 id="sec3-1">3.1	Leadership</h3>  <p>Le rôle et le  comportement des dirigeants d&rsquo;une organisation sont fondamentaux pour atteindre  l&rsquo;excellence en sûreté. Grâce à l&rsquo;élaboration et à la mise en œuvre d&rsquo;un  système de gestion efficace, l&rsquo;organisation peut mieux comprendre et promouvoir  une saine culture de sûreté.</p>  <p>La norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>  reconnaît le leadership dans sa portée ainsi que dans les exigences visant la  haute direction. La norme CSA N286-12 s&rsquo;applique à la haute direction, telle  que définie dans la norme, avec une responsabilité globale pour l&rsquo;installation  nucléaire. La haute direction définit, planifie et maîtrise les activités l&rsquo;entreprise  (activités autorisées) au moyen de processus qui définissent les attentes  visant l&rsquo;organisation et les moyens de surveiller le rendement. Les attentes de  la haute direction comprennent l&rsquo;utilisation des examens de l&rsquo;efficacité pour  continuellement évaluer et améliorer le système de gestion ainsi que l&rsquo;utilisation  de ce système pour comprendre et promouvoir une saine culture de sûreté.</p>  <p>Des normes  récemment publiées à l&rsquo;égard du système de gestion comme la norme CAN/CSA-ISO  9001:16, <em>Systèmes de management de la  qualité – Exigences</em> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup> et les Prescriptions générales de sûreté, GSR Partie  2 de l&rsquo;AIEA, <em>Leadership and Management  for Safety </em><sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>, ont élaboré plus en détail les exigences et les attentes en  matière de leadership en reconnaissance du rôle clé que les dirigeants jouent  dans une organisation. Ces normes contiennent des exigences obligeant la haute  direction à faire preuve de leadership et d&rsquo;engagement envers le système de  gestion de la manière suivante :</p>  <ul>
<li>assumer  la responsabilité de l&rsquo;efficacité du système de gestion</li>
<li>assurer  l&rsquo;intégration des exigences du système de gestion dans les processus de l&rsquo;organisation</li>
<li>communiquer  l&rsquo;importance d&rsquo;une gestion efficace et de se conformer aux exigences du système  de gestion</li>
<li>s&rsquo;assurer  que le système de gestion atteint les résultats escomptés</li>
<li>mobiliser,  diriger et appuyer les personnes qui contribuent à l&rsquo;efficacité du système de  gestion</li>
<li>soutenir  d&rsquo;autres rôles de gestion pertinents afin de démontrer leur leadership en lien  avec leurs domaines de responsabilité </li>
<li>établir,  promouvoir et respecter une approche organisationnelle de la sûreté qui stipule  que les questions relatives à la sûreté reçoivent l&rsquo;attention nécessaire en  fonction de leur importance</li>
<li>reconnaître  que la sûreté englobe les interactions entre les personnes, la technologie et l&rsquo;organisation </li>
<li>élaborer des  attentes en matière de comportement et favoriser une solide culture de sûreté</li>
<li>établir  l&rsquo;acceptation de la responsabilité personnelle en lien avec la sûreté de la  part de toutes les personnes de l&rsquo;organisation et s&rsquo;assurer que les décisions  prises à tous les niveaux tiennent compte des priorités et des responsabilités  en matière de sûreté</li>  </ul>
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
<h3 id="sec3-2">3.2	Culture de sûreté</h3>  <p>La CCSN appuie pleinement le concept selon  lequel une organisation qui encourage activement une saine culture de sûreté  peut avoir une forte influence sur les attitudes et les comportements des  employés et donc sur le rendement individuel de ces derniers, ainsi que sur le  rendement à l&rsquo;échelle de l&rsquo;organisation, en matière de sûreté.</p>  <p>L&rsquo;exigence relative à  la culture de sûreté dans la norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> stipule ce qui suit : « la  direction doit se servir du système de gestion pour comprendre et encourager  une culture de sûreté […] »<sup id="fnb2a-foot"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup>.  C&rsquo;est grâce au système de gestion que les organisations comprennent la culture  qui prévaut dans leur installation. La haute direction communique la vision et  les objectifs de l&rsquo;organisation, tout en faisant respecter le principe clé  selon lequel « la sûreté est la considération primordiale qui guide les  décisions et les actions ». La culture de sûreté est comprise et améliorée au  moyen de processus de gestion clés comme « les évaluations » et « l&rsquo;amélioration  continue ».</p>  <p>Pour obtenir plus d&rsquo;information  sur l&rsquo;approche de la CCSN en matière de culture de sûreté, veuillez consulter  le REGDOC-2.1.2, <em>Culture de sûreté </em><sup id="fnb6a-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>,  qui énonce les exigences et l&rsquo;orientation permettant d&rsquo;évaluer et de favoriser  une saine culture de sûreté. </p>
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
<h3 id="sec3-3">3.3	Chaîne  d&rsquo;approvisionnement</h3>  <p>Les exigences  particulières concernant la chaîne d&rsquo;approvisionnement décrites dans la norme  CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> s&rsquo;appliquent autant à la fourniture de services que d&rsquo;articles.  Les processus de  gestion de la chaîne d&rsquo;approvisionnement mis en œuvre par les titulaires de  permis en conformité avec la norme CSA N286-12 sont suffisamment robustes pour  fournir l&rsquo;assurance que les articles ou les services non conformes qui entrent  dans la chaîne d&rsquo;approvisionnement sont adéquatement identifiés et éliminés. </p>  <p>La norme CSA N299, <em>Exigences  des programmes d&rsquo;assurance de la qualité visant la fourniture de produits et de  services destinés aux centrales nucléaires</em> <sup id="fnb7b-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup>, a été élaborée  spécifiquement pour que les centrales nucléaires l&rsquo;utilisent à l&rsquo;égard de leurs  fournisseurs. Cette norme peut donc servir d&rsquo;orientation pour les autres  catégories de titulaires de permis en ce qui concerne la mise en œuvre des  processus et des exigences relatifs à la gestion de la chaîne d&rsquo;approvisionnement  pour leurs fournisseurs. </p>  <h4 id="sec3-3-1">3.3.1 Articles contrefaits, frauduleux et suspects</h4>  <p>Bien que la norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> nait aucune section portant spécifiquement sur cet aspect, une mise en œuvre efficace des processus de gestion de la chaîne dapprovisionnement et le respect des exigences du système de gestion peuvent servir à atténuer lintroduction darticles contrefaits, frauduleux et suspects (ACFS) dans la chaîne dapprovisionnement dune installation ou dune activité nucléaire. Les ACFS sont des articles qui :</p>  <ul>
<li>sont  intentionnellement présentés comme respectant un code ou une norme, alors que  ce n&rsquo;est pas le cas </li>
<li>sont  intentionnellement présentés comme ayant été homologués, alors que ce n&rsquo;est pas  le cas </li>
<li>sont  soupçonnés d&rsquo;être l&rsquo;un ou l&rsquo;autre des deux cas ci-dessus</li>  </ul>  <p>La chaîne d&rsquo;approvisionnement globale est souvent  longue et complexe, et la source des ACFS peut être inconnue. Il est possible  de réduire les risques que présentent les ACFS grâce à une mise en œuvre  efficace du système de gestion en conformité avec la norme CSA N286-12. Les  processus de gestion de la chaîne d&rsquo;approvisionnement comprennent ce qui suit :</p>  <ul>
<li>des  vérifications du système de gestion du fournisseur afin d&rsquo;évaluer les processus  visant à prévenir, détecter et retirer les matières étrangères, y compris les  ACFS</li>
<li>la  sélection de fournisseurs qualifiés, fiables et de bonne réputation basée sur  leur capacité à fournir un produit ou un service acceptable avec des mesures  adéquates pour prévenir, détecter et retirer les matières étrangères, y compris  les ACFS</li>
<li>la  détermination des exigences relatives à l&rsquo;acquisition, y compris les exigences  de rendement technique, les codes, les normes et les spécifications applicables  ainsi que les inspections, les tests et les exigences d&rsquo;acceptation qui  permettent l&rsquo;identification et la détection des ACFS pendant la vérification</li>
<li>la  vérification que l&rsquo;article reçu a été fabriqué, testé et inspecté avant son  expédition, en conformité avec les codes, spécifications, bons de commande (y  compris les exigences de rendement technique) ou dessins applicables</li>
<li>les  dispositions visant à étendre les exigences applicables aux sous-traitants afin  de prévenir, de détecter et de retirer les matières étrangères, y compris les  ACFS </li>
<li>l&rsquo;identification  et la collecte de l&rsquo;expérience acquise en matière d&rsquo;ACFS, l&rsquo;examen de sa  pertinence et de son importance, son intégration dans les processus de la  chaîne d&rsquo;approvisionnement et son utilisation afin d&rsquo;apporter des améliorations</li>  </ul>  <p>Il est important de noter que l&rsquo;impact qu&rsquo;ont les ACFS  ne vise pas seulement la chaîne d&rsquo;approvisionnement. Certaines fonctions  organisationnelles comme l&rsquo;ingénierie, l&rsquo;entretien et l&rsquo;exploitation doivent  être au courant des problèmes d&rsquo;ACFS et doivent savoir comment les gérer. </p>  <p>Des renseignements supplémentaires  sur les ACFS sont disponibles dans le document de l&rsquo;AIEA TECDOC-1169, <em>Managing suspect and counterfeit items in the nuclear  industry</em>. Le rapport du Electric Power Research Institute  (EPRI) no 1019163, <em>Plant  Support Engineering:</em> <em>Counterfeit and  Fraudulent Items – Mitigating the Increasing Risk </em><sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Footnote </span>9</a></sup>, fournit des renseignements  en vue de prévenir, de détecter et d&rsquo;atténuer la présence d&rsquo;ACFS. </p>  <h4 id="sec3-3-2">3.3.2 Gestion  des entrepreneurs</h4>  <p>L&rsquo;industrie  nucléaire a récemment augmenté son recours aux services d&rsquo;entrepreneurs pour  effectuer toute une gamme de travaux qui comprennent non seulement la  réalisation d&rsquo;activités relatives au cycle de vie ou de travaux uniques  particuliers, mais également l&rsquo;exécution de processus routiniers comme l&rsquo;entretien.  La gestion des entrepreneurs revêt aujourd&rsquo;hui une nouvelle dimension qui  nécessite une attention spéciale afin de s&rsquo;assurer que les entrepreneurs :</p>  <ul>
<li>travaillent  dans un environnement sécuritaire </li>
<li>possèdent  les qualifications nécessaires et obtiennent la formation requise </li>
<li>travaillent  en conformité avec les exigences du titulaire de permis </li>
<li>fournissent  les produits et les services qui respectent les exigences réglementaires </li>  </ul>  <p>Les  titulaires de permis sont responsables des travaux effectués par les  entrepreneurs.</p>
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
<h3 id="sec3-4">3.4	Gestion de la configuration</em></h3>  <p>La mise en œuvre d&rsquo;un système de gestion  qui respecte les exigences de la norme CSA N286-12 <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> assurera le maintien de la configuration de l&rsquo;installation.  Cependant, on reconnaît la nécessité d&rsquo;avoir des directives et des processus  normalisés afin d&rsquo;accroître la compréhension de la gestion de la configuration  aux installations dotées de réacteurs à haute puissance. Par conséquent, la  norme CSA N286.10-16, <em>Gestion de la  configuration des installations de réacteurs à haute puissance </em><sup id="fnb10a-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Footnote </span>10</a></sup>, a été publiée afin de fournir de l&rsquo;orientation sur le  maintien de la configuration pendant tout le cycle de vie d&rsquo;une installation. </p>  <p>La  norme CSA N286.10-16 fournit de l&rsquo;information que peuvent utiliser les autres  titulaires de permis d&rsquo;installation nucléaire pour le maintien et la gestion de  la configuration de leur installation.</p>
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
<h3 id="sec3-5">3.5 Assurance de la qualité des logiciels</h3>  <p>La  norme CSA N286.7-16, <em>Assurance de la  qualité des programmes informatiques scientifiques, d&rsquo;analyse et de conception </em><sup id="fnb11a-ref"><a className="fn-lnk" href="#fnb11"><span className="wb-inv">Footnote </span>11</a></sup>, s&rsquo;applique aux  installations de réacteurs à haute puissance définies dans la norme CSA N286-12.  La norme CSA N286.7-16 établit les exigences en matière d&rsquo;assurance de la  qualité pour les logiciels utilisés dans la conception, l&rsquo;analyse de la sûreté  et les activités à l&rsquo;appui. Cette norme fournit de l&rsquo;orientation pour les  autres catégories de titulaires de permis qui utilisent des programmes  informatiques aux fins susmentionnées ainsi que pour répondre à d&rsquo;autres  besoins opérationnels.</p>
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
<h2 id="sec4">4. Surveillance de la radioprotection: Titulaires de permis de substances nucléaires, dappareils à rayonnement et dinstallations nucléaires de catégorie II</h2>  <p>Tous  les titulaires de permis de substances nucléaires, d&rsquo;appareils à rayonnement et  d&rsquo;installations nucléaires de catégorie II ont comme responsabilité première  d&rsquo;assurer la sûreté des activités autorisées. Les titulaires de permis doivent  démontrer qu&rsquo;ils ont les compétences requises pour entreprendre les activités  proposées et qu&rsquo;ils ont pris les mesures voulues pour préserver la santé et la  sécurité des personnes et pour protéger l&rsquo;environnement. Ils doivent notamment  démontrer qu&rsquo;ils peuvent gérer et contrôler les activités autorisées. Les  titulaires de permis doivent offrir un soutien efficace en matière de gestion,  y compris des ressources humaines et financières, pour mettre en œuvre et  maintenir adéquatement leurs programmes de radioprotection. Ils doivent aussi  respecter l&rsquo;ensemble des obligations réglementaires des programmes. En outre,  ils doivent se conformer aux exigences de l&rsquo;article 4 du <em>Règlement sur la radioprotection</em>.</p>  <p>Lorsqu&rsquo;ils  mettent en œuvre des mesures de sûreté et de réglementation, les titulaires de  permis devraient tenir compte des principes du système de gestion énoncés à la  section 2 de ce document d&rsquo;application de la réglementation, qui reconnaît que  les mesures devraient convenir à leur structure et cadre de réglementation  uniques. La surveillance des programmes devrait être exhaustive et intégrer les  rôles et les responsabilités du mandataire du demandeur, de l&rsquo;agent de  radioprotection et des comités de radioprotection, le cas échéant. Les  activités de surveillance comprennent l&rsquo;évaluation de l&rsquo;efficacité des mesures  de sûreté et de réglementation, la détermination d&rsquo;occasions d&rsquo;amélioration et  la résolution des problèmes. </p>  <p>Il  est possible que les titulaires de permis disposent déjà d&rsquo;un système de  contrôles et de processus qui régissent l&rsquo;ensemble de leurs activités. Dans de  tels cas, les programmes de radioprotection devraient être intégrés à ce  système.</p>  <p>Les  attentes en matière de leadership énoncées à la section 3.1 de ce document  devraient être utilisées par la haute direction des titulaires de permis. De  plus, les principes fondamentaux d&rsquo;une saine culture de sûreté, telle que  décrite à la section 3.2, devraient être pris en compte lors de la mise en  œuvre de leurs mesures de sûreté et de réglementation.</p>
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
<h2 id="glossary">Glossaire</h2>  <p>Les définitions des termes utilisés dans le  présent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC&ndash;3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des  définitions tirés dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation  nucléaires</em></a>,  de ses règlements d&rsquo;application ainsi que des documents d&rsquo;application de la  réglementation et d&rsquo;autres publications de la CCSN. Le REGDOC&ndash;3.6 est fourni à  titre de référence et pour information.</p>
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
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Notes de bas de page</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1"><p>REGDOC-3.6, <em>Glossaire de la CCSN</em></p>
<p className="fn-rtn"><a href="#fnb1a-foot"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>Voir  la norme CSA N286-12, <em>Exigences relatives  au système de gestion des installations nucléaires</em> (section 4.2)</p>
<p className="fn-rtn"><a href="#fnb2a-foot"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>  </dl>
</section>  </div>  <div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Références</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1"><p>Groupe CSA. Norme CSA N286-12, Exigences relatives au système de gestion des installations nucléaires, Toronto, 2012.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CAN/CSA-ISO 9001:16, <em>Systèmes de management de la qualité – Exigences, </em>Toronto, 2015.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>Organisation internationale de normalisation, ISO 14001, Systèmes de management environnemental, Genève, 2015.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>Groupe CSA. CSA N286.0.1-14, Commentaires sur la norme N286-12, Exigences relatives au système de gestion des installations nucléaires, Toronto, 2012.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>Agence internationale de lénergie atomique (AIEA). Prescriptions générales de sûreté, GSR Partie 2, Leadership and Management for Safety, Vienne, 2016. </p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>Commission canadienne de sûreté nucléaire. REGDOC-2.1.2, Culture de sûreté, Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>Série de la norme CSA N299, Exigences des programmes dassurance de la qualité visant la fourniture de produits et de services destinés aux centrales nucléaires, Toronto, 2016.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id="fnb8">
<p>AIEA. TECDOC-1169, Managing suspect and counterfeit items in the nuclear industry, Vienne, 2000.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to footnote </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd id="fnb9"><p>Electric Power Research Institute, Inc. (EPRI). Rapport no 1019163, Plant Support Engineering: Counterfeit and Fraudulent Items - Mitigating the Increasing Risk, Palo Alto, 2014.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to footnote </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd id="fnb10">
<p>Groupe CSA. CSA N286.10-16, Gestion de la configuration des installations de réacteurs à haute puissance, Toronto, 2016.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Return to footnote </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 11</dt>
<dd id="fnb11"><p>Groupe CSA. CSA-N286.7-16, Assurance de la qualité des programmes informatiques scientifiques, danalyse et de conception des centrales nucléaires, Toronto, 2016.</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Return to footnote </span>11<span className="wb-inv"> referrer</span></a></p>
</dd>   </dl>
</section>  </div>
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
<h2 id="AddInfo">Renseignements supplémentaires</h2>  <p>Les documents qui suivent contiennent des  renseignements supplémentaires en lien avec les systèmes de gestion. </p>  <ol>
<li>Commission canadienne de sûreté nucléaire (CCSN).  REGDOC-3.1.1, <em>Rapports à soumettre par  les exploitants de centrales nucléaires, </em>version 2, Ottawa, 2016.</li>
<li>CCSN. S-106, <em>Exigences  techniques et d&rsquo;assurance de la qualité pour les services de dosimétrie, </em>révision  1, Ottawa, 2006. </li>
<li>Groupe CSA. CSA N290.12, <em>Facteurs humains dans la conception des centrales nucléaires</em>,  Toronto, 2014.</li>
<li>AIEA. TECDOC 1740,<em> Use of a Graded Approach in the Application  of the Management System Requirements for Facilities and Activities</em>,  Vienne, 2014.</li>  </ol>
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
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e pourrait comprendre de nombreux documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le site Web de la CCSN &agrave; <a href="/fra/acts-and-regulations/regulatory-documents/index">suretenucleaire.gc.ca/documents-de-reglementation</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }