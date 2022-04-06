import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "DIS-14-01: Conditions additionnelles de dimensionnement pour les centrales nucléaires", 
                dateModified: "2013-08-29",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/d-14-01"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<style>  {/*body {  	counter-reset: h2counter;  }  h1 {  	counter-reset: h2counter;  }  .countheads ~ h2:before {  	content: counter(h2counter) ". ";  	counter-increment: h2counter;  }  h2.nocount:before {  	content: none;  	counter-increment: none;  }  h2 {  	counter-reset: h3counter;  }  .countheads ~ h3:before {  	content: counter(h2counter) "." counter(h3counter) "\0000a0\0000a0";  	counter-increment: h3counter;  }  h3.nocount:before {  	content: none;  	counter-increment: none;  }  h3 {  	counter-reset: h4counter;  }  .countheads ~ h4:before {  	content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "\0000a0\0000a0";  	counter-increment: h4counter;  }  h4.nocount:before {  	content: none;  	counter-increment: none;  }  h4 {  	counter-reset: h5counter;  }  .countheads ~ h5:before {  	content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "." counter(h5counter) "\0000a0\0000a0";  	counter-increment: h5counter;  }  h5.nocount:before {  	content: none;  	counter-increment: none;  }  h5 {  	counter-reset: h6counter;  }   */}  ol.toc {  	counter-reset: item;  }  ol.toc li {  	display: block;  	position: relative;  }  ol.toc, ol.toc li, ol.toc li li, ol.toc li li li {  	font-size: 14px;  }  ol.toc li:before {  	content: counters(item, ".")". ";  	counter-increment: item;  	position: absolute;  	margin-right: 100%;  	right: 8px; {/* space between number and text */}  	margin-left: 2px !important;  	font-weight: bold !important;  }  ol.toc li li:before {  	content: counters(item, ".");  	counter-increment: item;  	font-weight: bold !important;  }  ol.toc li li li:before {  	content: counters(item, ".");  	counter-increment: item;  	font-weight: bold !important;  }  ol.toc li.toc-none:before {  	list-style: none;  	list-style-type: none;  	content: none;  	counter-increment: none;  }  ol li.toc-none, ol[class*="column-"] li.toc-none {  	margin-left: 0px !important;  	padding-left: 0px !important;  }  dl.cnsc-glossary dt {  	margin: 0 5px 4px 0;  	float: left;  	font-weight: bold;  }  dl.cnsc-glossary dd {  	margin: 0 0 4px 90px;  }  dl.cnsc-glossary dd:after {  	content: &#39;&#39;;  	display: block;  	clear: both;  }  dl.cnsc-glossary-style-2 dd {  	margin: 0 0 4px 250px;  }
.border-none {  	border: 0px solid #fff !important;  }
</style>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="countheads nocount">Préface</h2>  <p>Les documents de travail jouent un rôle important dans la sélection et l&#39;élaboration  du cadre et du programme de réglementation de la Commission canadienne de  sûreté nucléaire (CCSN). Ils visent à obtenir une rétroaction du public tôt  dans le processus sur les politiques et méthodes d&#39;approche de la CCSN. </p>  <p> L&#39;utilisation des documents de travail dès les premières étapes du  processus de réglementation souligne l&#39;engagement de la CCSN à l&#39;égard d&#39;un  processus de consultation transparent. La CCSN analyse cette rétroaction  préliminaire et en tient compte pour déterminer le type et la nature des  exigences et des orientations à établir. </p>  <p> Les documents de travail sont rendus publics aux fins de commentaires  pour une période déterminée. À&nbsp;la&nbsp;fin de la première période de  commentaires, le personnel de la CCSN examine toutes les observations formulées  par le public, puis les affiche sur le site Web de la CCSN pour une deuxième  période de consultation. </p>  <p> La CCSN tient compte de toute la rétroaction obtenue dans le cadre de ce  processus de consultation lorsqu&#39;elle établit son approche de réglementation.</p>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<div className="module-table-contents mrgn-lft-md">
<h2 className=" nocount">Table des matières</h2>
<ol className="toc">
<li className="toc-none"><a href="#exec-sum"><strong>Sommaire</strong></a></li>
<li><a href="#sec-1"><strong>Introduction</strong></a>
<ol className="toc">
<li><a href="#sec-1-1">Dimensionnement</a></li>
<li><a href="#sec-1-2">Prise en compte des accidents hors dimensionnement</a></li>
</ol>
</li>
<li><a href="#sec-2"><strong>Définitions et principaux concepts proposés</strong></a>
<ol className="toc">
<li><a href="#sec-2-1">Enveloppe de conception de la centrale</a></li>
<li><a href="#sec-2-2">Conditions additionnelles de dimensionnement (CAD)</a></li>
<li><a href="#sec-2-3">Confiance</a></li>
<li><a href="#sec-2-4">Rejets radioactifs importants</a></li>
<li><a href="#sec-2-5">Éliminés, à toutes fins pratiques</a></li>
<li><a href="#sec-2-6">Détermination des CAD</a></li>
</ol>
</li>
<li><a href="#sec-3"><strong>Objectifs et exigences concernant les CAD</strong></a>
<ol className="toc">
<li><a href="#sec-3-1">Objectifs et exigences de la conception</a></li>
<li><a href="#sec-3-2">Exigences relatives à l&#39;analyse</a></li>
<li><a href="#sec-3-3">Exigences opérationnelles</a></li>
<li><a href="#sec-3-4">Procédures</a></li>
<li><a href="#sec-3-5">Exigences en matière de radioprotection</a></li>
</ol>
</li>
<li><a href="#sec-4"><strong>Applicabilité aux centrales nucléaires du Canada</strong></a>
<ol className="toc">
<li><a href="#sec-4-1">Nouvelles centrales nucléaires</a></li>
<li><a href="#sec-4-2">Centrales nucléaires existantes</a></li>
</ol>
</li>
<li><a href="#sec-5"><strong>Recherche et développement à l&#39;appui des CAD</strong></a></li>
<li><a href="#sec-6"><strong>Conclusion</strong></a></li>
<li className="toc-none"><a href="#sec-how-to"><strong>Comment participer</strong></a></li>
<li className="toc-none"><a href="#sec-app-a"><strong>Annexe A : Tableau des états de la centrale</strong></a></li>
<li className="toc-none"><a href="#sec-app-b"><strong>Annexe B : Définition des CAD hors du Canada</strong></a></li>
<ol className="toc">
<li className="toc-none"><a href="#sec-app-b-1">Agence internationale de l&#39;énergie atomique</a></li>
<li className="toc-none"><a href="#sec-app-b-2">Finlande</a></li>
<li className="toc-none"><a href="#sec-app-b-3">United States of America</a></li>
<li className="toc-none"><a href="#sec-app-b-4">États-Unis d&#39;Amérique</a></li>
<li className="toc-none"><a href="#sec-app-b-5">Japon</a></li>
<li className="toc-none"><a href="#sec-app-b-6">Références pour l&#39;annexe B</a></li>
</ol>
<li className="toc-none"><a href="#sec-app-c"><strong>Annexe C : Détermination des CAD</strong></a></li>
<li className="toc-none"><a href="#sec-abbr"><strong>Abréviations</strong></a></li>
<li className="toc-none"><a href="#sec-ref"><strong>Références</strong></a></li>
</ol>  </div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="exec-sum">Sommaire</h2>  <p>La Commission canadienne de sûreté nucléaire (CCSN) a pour mandat, en  vertu de la <em>Loi sur la sûreté et la  réglementation nucléaires </em>(LSRN), de réglementer l&#39;utilisation de l&#39;énergie  et des matières nucléaires afin de préserver la santé, la sûreté et la sécurité  des Canadiens, de protéger l&#39;environnement, de respecter les engagements  internationaux du Canada à l&#39;égard de l&#39;utilisation pacifique de l&#39;énergie  nucléaire, et d&#39;informer objectivement le public sur les plans scientifique ou  technique ou en ce qui concerne la réglementation du domaine de l&#39;énergie  nucléaire. </p>  <p> À la suite de la catastrophe nucléaire survenue en 2011 à Fukushima, au  Japon, les organismes de réglementation nucléaire du monde entier ont lancé un  examen détaillé de leurs grandes installations nucléaires. De son côté, la CCSN  a créé le <a href="http://www.nuclearsafety.gc.ca/fra/resources/news-room/news-releases/index?news_release_id=385">Groupe de travail de la CCSN sur  Fukushima</a> afin d&#39;examiner la capacité des centrales nucléaires, et d&#39;autres installations  nucléaires dans tout le pays, de résister à des conditions comparables à celles  qui ont entraîné l&#39;accident de Fukushima. Le groupe de travail a conclu que les  centrales nucléaires canadiennes sont sûres et que le risque qu&#39;elles posent  pour la santé et la sécurité des Canadiens ou l&#39;environnement est faible.</p>  <p> Le groupe de travail a également examiné le cadre et les processus de  réglementation de la CCSN. Il&nbsp;a&nbsp;confirmé que le cadre de  réglementation du Canada est solide et détaillé. Il a néanmoins mis en évidence  et présenté une série de recommandations destinées à accroître davantage la  sûreté des installations nucléaires au Canada. Ces recommandations sont  détaillées dans les mesures A.9.1 à A.9.3 du <em>Plan d&#39;action intégré de la CCSN sur les leçons tirées de l&#39;accident  nucléaire de Fukushima Daiichi</em> [1]. </p>  <p> Une partie de l&#39;examen de l&#39;accident de Fukushima actuellement mené à l&#39;échelon  international s&#39;est traduite par des efforts accrus visant à élaborer des  stratégies de prévention et d&#39;atténuation des situations et des scénarios d&#39;accident  dépassant le cadre de ceux pris en compte dans la conception initiale des  installations nucléaires. Ces scénarios d&#39;accident sont qualifiés de conditions  additionnelles de dimensionnement (CAD) et leur prise en compte prend de plus  en plus d&#39;importance au sein de la communauté nucléaire internationale. Les  CAD, ou des concepts similaires, sont en cours d&#39;examen et d&#39;adoption par les  organismes de réglementation nucléaire d&#39;un certain nombre de pays. L&#39;annexe B  donne plus de détails à cet égard. La CCSN collabore étroitement avec la  communauté nucléaire internationale pour identifier et adopter des pratiques  exemplaires au fur et à mesure de l&#39;évolution des considérations relatives aux  CAD. En même temps, la CCSN s&#39;est engagée à mener un véritable dialogue avec  toutes les parties intéressées en ce qui concerne les CAD. </p>  <p> La CCSN a utilisé publiquement le terme CAD pour la première fois dans  la version 2 du projet de document d&#39;application de la réglementation RD-337, <em>Conception  des nouvelles centrales nucléaires</em> [2] rendu disponible pour consultation  publique en juillet 2012. Ce document est désormais achevé. Il a été publié  sous le titre REGDOC-2.5.2, <em>Conception d&#39;installations dotées de réacteurs  : Centrales nucléaires</em> [3], et remplace le document RD-337. Ce document  établit les exigences et les attentes en matière de conception pour les  nouvelles centrales nucléaires. Il comporte également des exigences et des  attentes de haut niveau liées aux CAD. Comme le décrit le document  REGDOC-2.5.2, les objectifs de sûreté en CAD consistent à prévenir les dommages  au cœur, à atténuer les conséquences des accidents et à protéger l&#39;intégrité du  confinement. Au Canada et dans le monde, les opinions diffèrent quant à la  façon de définir, de caractériser et de choisir les CAD. En outre, il n&#39;existe  pas de consensus sur la nature des plans de prévention et d&#39;atténuation qu&#39;il  faudrait créer pour les prendre en considération. </p>  <p> Tout au long du présent document de travail, les CAD sont décrits par  rapport aux autres états de la centrale. Il importe de souligner que les CAD  sont considérées comme un sous-ensemble de conditions d&#39;accidents hors dimensionnement  (AHD). Cela est justifié par le fait que les conditions d&#39;AHD s&#39;étendent pour  inclure les accidents qui, en raison de leur probabilité d&#39;occurrence très  faible, sont&nbsp;considérés comme «&nbsp;pratiquement éliminés&nbsp;». Il  importe de noter que les CAD ne devraient pas inclure des conditions  considérées «&nbsp;éliminées, à toutes fins pratiques&nbsp;». </p>  <p> Une prémisse importante du présent document de travail est que les CAD  ne représentent pas une extension du dimensionnement prudent ou de la  «&nbsp;confiance élevée&nbsp;» associées aux autres états de la centrale. Au  contraire, le présent document de travail introduit le principe de la  «&nbsp;confiance raisonnablement élevée&nbsp;» à l&#39;égard du succès des  activités liées aux CAD. Par conséquent, il s&#39;ensuit que&nbsp;ce principe  devrait être appliqué uniformément aux CAD dans les divers aspects de la  conception, de&nbsp;l&#39;analyse et de l&#39;exploitation. </p>  <p> Bien que la CCSN est d&#39;avis qu&#39;un REGDOC spécifiquement consacré aux CAD  n&#39;est pas nécessaire, le&nbsp;concept peut être pris en compte dans un certain  nombre de projets et de versions existantes de REGDOC et de normes canadiennes.  Ces documents pourraient couvrir tout un éventail de sujets, notamment la  conception, l&#39;analyse, la construction, l&#39;exploitation, les procédures et la  radioprotection. La CCSN reconnaît que l&#39;élaboration d&#39;exigences et d&#39;orientations  s&#39;appliquant à l&#39;équipement, à&nbsp;l&#39;analyse et aux procédures en matière de  CAD n&#39;est pas encore tout à fait terminée.</p>  <p> Le présent document de travail résume la compréhension actuelle qu&#39;a la  CCSN au sujet des CAD. Son&nbsp;intention n&#39;est pas d&#39;adopter une position  définitive, mais plutôt de stimuler la discussion sur le thème des CAD. </p>  <p> Enfin, il faudrait remarquer que plusieurs facteurs contribuent à  améliorer la protection du public canadien contre des accidents peu probables  de survenir dans une centrale nucléaire. Les mises à niveau apportées aux  centrales nucléaires à la suite de l&#39;accident de Fukushima ont étendu les  capacités des centrales de résister à des événements très improbables. Les  évaluations de la sûreté des centrales nucléaires ont confirmé qu&#39;on est  parvenu à accroître la sûreté. Le cadre de réglementation de la CCSN a été mis  à jour pour inclure des exigences et des orientations appropriées en ce qui  concerne la conception, l&#39;analyse et l&#39;exploitation des centrales nucléaires.  Plusieurs de ces activités sont toujours en cours.</p>  <p> Le présent document décrit une approche uniforme visant à établir des  exigences et des orientations liées aux CAD et bien que le document de travail  présente une série de questions à prendre en considération par les lecteurs,  les commentaires et les rétroactions ne devraient pas s&#39;en tenir à celles-ci.  On encourage les lecteurs à formuler des commentaires sur toute question liée  au sujet des CAD. </p>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-1">1. Introduction</h2>  <p>À la suite de la catastrophe nucléaire survenue en 2011 à Fukushima, au  Japon, les organismes de&nbsp;réglementation nucléaire du monde entier ont  lancé un examen détaillé de leurs grandes installations nucléaires. De son  côté, la CCSN a créé le <a href="http://www.nuclearsafety.gc.ca/fra/resources/news-room/news-releases/index?news_release_id=385">Groupe de travail de la CCSN sur  Fukushima</a> afin d&#39;examiner la capacité des centrales nucléaires, et d&#39;autres installations  nucléaires dans tout le pays, de résister à des conditions comparables à celles  qui ont entraîné l&#39;accident de Fukushima. Le groupe de travail a conclu que les  centrales nucléaires canadiennes sont sûres et que le risque qu&#39;elles posent  pour la santé et la sécurité des Canadiens ou l&#39;environnement est faible.</p>  <p> Le Groupe de travail de la CCSN sur Fukushima a également examiné le  cadre et les processus de réglementation de la CCSN. Il a confirmé que le cadre  de réglementation du Canada est solide et détaillé. Il a néanmoins défini une  série de recommandations destinées à accroître davantage la sûreté des  installations nucléaires au Canada. Ces recommandations sont détaillées dans  les mesures A.9.1 à A.9.3 du <em>Plan d&#39;action  intégré de la CCSN sur les leçons tirées de l&#39;accident nucléaire de Fukushima  Daiichi</em>.</p>  <p> Plusieurs facteurs contribuent à améliorer la protection du public  canadien contre des accidents peu probables de survenir dans une centrale  nucléaire. Les mises à niveau apportées aux centrales nucléaires à la suite de  l&#39;accident de Fukushima ont étendu les capacités des centrales de résister à&nbsp;des  événements très improbables. Les évaluations de la sûreté des centrales  nucléaires ont confirmé qu&#39;on est parvenu à accroître la sûreté. Le cadre de  réglementation de la CCSN a été mis à jour pour inclure des exigences et des  orientations appropriées en ce qui concerne la conception, l&#39;analyse et l&#39;exploitation  des centrales nucléaires. Plusieurs de ces activités sont toujours en cours. Le  présent document décrit une approche uniforme visant à établir des exigences et  des orientations liées aux CAD.</p>  <p> Une partie de l&#39;examen de l&#39;accident de Fukushima actuellement mené à l&#39;échelon  international s&#39;est traduite par des efforts accrus visant à élaborer des  stratégies de prévention et d&#39;atténuation des situations et des scénarios d&#39;accident  dépassant le cadre de ceux pris en compte dans la conception initiale des  installations nucléaires.</p>  <h3 id="sec-1-1">1.1 Dimensionnement</h3>  <p>Selon la définition fournie par le  document d&#39;application de la réglementation REGDOC-2.5.2, <em>Conception d&#39;installations  dotées de réacteurs : Centrales nucléaires</em> [3], le terme  «&nbsp;dimensionnement&nbsp;» désigne&nbsp;:</p>  <ul className="list-bullet-none">
<li>[l&#39;]éventail des conditions et des événements pris explicitement en considération dans la conception de l&#39;installation, conformément aux critères établis, de sorte que l&#39;installation puisse y résister sans dépassement des limites autorisées quand les systèmes de sûreté fonctionnent comme prévu. </li>  </ul>  <p>Le dimensionnement est mis en application au moyen des exigences  réglementaires et des normes et codes nationaux et internationaux applicables.  Les exigences relatives au dimensionnement sont habituellement très prudentes  et très rigoureuses. Elles donnent un niveau très élevé de confiance quant à la  capacité d&#39;une centrale nucléaire de satisfaire aux exigences de sûreté à la  suite de tout scénario d&#39;accident pris en considération au moment de la  conception de la centrale et pour lequel des mesures d&#39;atténuation ont été  mises en place. Les accidents de dimensionnement (AD) sont des conditions d&#39;accident  par rapport auxquelles est conçue&nbsp;l&#39;installation dotée de réacteurs,  conformément aux critères d&#39;acceptation établis (le&nbsp;dimensionnement), et  pour lesquelles les dommages causés au combustible et les rejets de matières  radioactives sont maintenus à l&#39;intérieur des limites autorisées. </p>  <h3 id="sec-1-2">1.2 Prise en compte des accidents hors dimensionnement</h3>  <p>Le REGDOC-2.5.2 de la CCSN énonce  les exigences proposées en ce qui concerne les structures, systèmes et  composants (SSC) ayant un rôle à jouer dans la gestion des accidents dépassant  le cadre de ceux pris en compte dans le dimensionnement, en particulier les  accidents graves (AG). Le REGDOC-2.3.2, <em>Conduite  de l&#39;exploitation&nbsp;: Gestion des accidents&nbsp;: Programme de gestion des  accidents graves touchant les réacteurs nucléaires</em> [4], définit un AG comme  un&nbsp;:</p>  <ul className="list-bullet-none">
<li> [a]ccident plus grave qu&#39;un accident de dimensionnement et caractérisé par une détérioration importante du cœur du réacteur ou une dégradation importante du combustible dans la piscine de combustible usé (également appelée piscine de stockage du combustible irradié).</li>  </ul>  <p>L&#39;expression «&nbsp;conditions additionnelles de dimensionnement&nbsp;»  est utilisée pour décrire les accidents hors dimensionnement, pour lesquels des  mesures de prévention et d&#39;atténuation supplémentaires sont nécessaires. </p>  <p> Selon le document REGDOC-2.5.2, la  conception du réacteur doit fournir des moyens de&nbsp;:</p>  <ul>
<li>prendre  en compte les difficultés liées à des accidents graves propres à la centrale</li>
<li>fournir  des caractéristiques de conception permettant d&#39;assurer que les objectifs en  matière de sûreté sont atteints et que les objectifs et stratégies en matière  de gestion des accidents sont réalisés</li>
<li>empêcher  les rejets importants de matières radioactives dans l&#39;environnement</li>  </ul>  <p>Le REGDOC-2.5.2 établit l&#39;«&nbsp;enveloppe de conception de la  centrale&nbsp;» qui comprend l&#39;exploitation normale, les incidents de  fonctionnement prévu (IFP), les AD et les CAD. La&nbsp;figure&nbsp;1 est tirée  du document REGDOC-2.5.2. Elle illustre les rapports entre les CAD et les  autres états de la centrale.</p>  <p> Dans la version 1 du document RD-337, les CAD étaient qualifiés d&#39;«&nbsp;accidents  hors dimensionnement (AHD) crédibles&nbsp;». Les conditions et événements  éliminés, à toutes fins pratiques, sont ceux dont la probabilité d&#39;occurrence  est tellement faible qu&#39;ils ne sont pas considérés comme des CAD. </p>  <p> Les CAD peuvent tenir compte des accidents impliquant le cœur du  réacteur, les piscines de combustible usé et, s&#39;il y a lieu, des tranches  multiples sur un site. De tels accidents peuvent être causés par des  défaillances multiples de l&#39;équipement, des erreurs de l&#39;opérateur, des  événements internes ou externes, et, très probablement, par une combinaison de  plusieurs événements ou défaillances. Lorsque des accidents majeurs se  produisent, ils sont complexes et sont causés par de nombreux facteurs. La CCSN  n&#39;a pas l&#39;intention d&#39;établir une limite inférieure de fréquence pour les CAD  en raison des grandes incertitudes liées à l&#39;obtention de fréquences crédibles  pour les événements extrêmement rares. L&#39;approche permettant d&#39;identifier un  ensemble d&#39;AHD à traiter comme des CAD nécessite inévitablement une bonne dose  de discernement. </p>  <p> Il importe de noter que les CAD illustrés constituent un sous-ensemble  choisi de conditions d&#39;AHD et ne représentent pas une extension du  dimensionnement.</p>
<figure className="col-md-12">  <figcaption><strong>Figure 1:</strong> États de la centrale</figcaption>  <img src="/images/d-14-01/dis1401-fig1-fra.png"/>  </figure>
<p>L&#39;annexe&nbsp;A offre une description plus complète du tableau des états  de la centrale et présente les relations entre les états de la centrale et d&#39;autres  aspects de la conception, de l&#39;analyse et de l&#39;exploitation de la centrale  nucléaire.</p>  <div className="col-md-12 well ">
<p><strong>Question 1 :</strong> Les CAD ont-ils été caractérisés de façon claire et logique?</p>  </div>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-2">2. Définitions et principaux concepts proposés</h2>  <h3 id="sec-2-1">2.1 Enveloppe de conception de la centrale</h3>  <p>Conformément  au REGDOC-2.5.2, <em>Conception d&#39;installations dotées de réacteurs&nbsp;: Centrales  nucléaires,</em> l&#39;autorité responsable de la conception de la centrale<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Note de bas de page </span>1</a></sup> est tenue d&#39;envisager des mesures  de prévention et d&#39;atténuation pour une vaste gamme d&#39;accidents à l&#39;étape de la  conception, de respecter les critères d&#39;acceptation des doses et d&#39;atteindre  les objectifs de sûreté probabilistes. Il faudrait une confiance  raisonnablement élevée en ce qui concerne la capacité des dispositifs de  prévention et d&#39;atténuation à fonctionner comme prévu dans l&#39;éventualité peu  probable d&#39;un accident grave. L&#39;autorité responsable de la conception devrait également  démontrer sa compréhension de la progression des accidents et des phénomènes  connexes et est tenue d&#39;établir, à l&#39;étape de la conception, des lignes  directrices pour la gestion des accidents graves (LDGAG) initiales fondées sur  une compréhension de la progression des accidents et qui tiennent compte de la  conception de la centrale. </p>
<p>Pour cette raison, le document REGDOC-2.5.2 définit l&#39;enveloppe de conception de la centrale de la façon suivante :</p>  <ul className="list-bullet-none">
<li>[g]amme des conditions et des événements (y compris les CAD) explicitement pris en compte dans la conception d&#39;une centrale nucléaire, de manière à pouvoir raisonnablement s&#39;attendre à ce que les rejets radioactifs importants soient pratiquement éliminés par le fonctionnement prévu des systèmes fonctionnels et de contrôle, des systèmes de sûreté, des systèmes de support en matière de sûreté et des caractéristiques de conception complémentaires.</li>  </ul>  <h3 id="sec-2-2">2.2 Conditions additionnelles de dimensionnement (CAD)</h3>  <p>Le document REGDOC-2.5.2 définit les CAD comme suit :</p>  <ul className="list-bullet-none">
<li> Sous-ensemble d&#39;accidents hors dimensionnement pris en considération dans le processus de conception de l&#39;installation, conformément à la méthodologie de la meilleure estimation afin de maintenir les rejets de matières radioactives à l&#39;intérieur des limites acceptables. Les conditions additionnelles de dimensionnement pourraient inclure les conditions d&#39;accident grave.</li>  </ul>  <p>Le concept des CAD est complexe. Il englobe les états, les conditions et  les événements de la centrale, y compris les événements externes ainsi que ceux  mettant en cause le réacteur ou la manutention et le stockage du combustible  irradié. </p>  <h3 id="sec-2-3">2.3 Confiance</h3>  <p>Pour les AD, il y a une «&nbsp;confiance élevée&nbsp;» en ce qui  concerne la capacité des structures, systèmes et composants (SSC) de  fonctionner comme prévu. Toutefois, pour les CAD, il&nbsp;faudrait&nbsp;une  «&nbsp;confiance raisonnablement élevée&nbsp;» quant au fait que les SSC  fonctionneront conformément aux spécifications de conception. Il faudrait  cependant faire preuve d&#39;une certaine prudence pour résoudre les problèmes  lorsque les connaissances disponibles sont insuffisantes pour caractériser les  conditions basées sur la meilleure estimation. </p>  <p> Une «&nbsp;confiance raisonnablement élevée&nbsp;» peut être obtenue  grâce à la sélection adéquate des conditions prises en compte lors de la  conception et des règles régissant des questions telles que la conception, la  mise à l&#39;essai, l&#39;inspection périodique et l&#39;entretien des SSC destinés à être  utilisés pour la gestion des AG.</p>  <h3 id="sec-2-4">2.4 Rejets radioactifs importants</h3>  <p>La section 7.3.4 du document  REGDOC-2.5.2 exige que&nbsp;: </p>  <ul className="list-bullet-none">
<li>La conception doit être telle que les états de la centrale qui pourraient entraîner des rejets importants de matières radioactives sont, à toutes fins pratiques, éliminés. Si ce n&#39;est pas le cas, seules des mesures de protection à portée limitée en termes de zone et de temps d&#39;exécution seront nécessaires pour protéger le public, et un délai suffisant sera disponible pour appliquer ces mesures.</li>  </ul>  <p>En ce qui concerne les CAD, les mesures de protection doivent être  limitées dans l&#39;espace et dans le temps. Par exemple, un rejet radioactif  important ne pourrait être considéré comme limité dans l&#39;espace ou dans le  temps. S&#39;il devait entraîner une réinstallation à long terme de la population,  un&nbsp;tel rejet hypothétique serait classé dans la catégorie des  «&nbsp;rejets importants&nbsp;». Un rejet radioactif nécessitant uniquement une  mise à l&#39;abri ne sera probablement pas considéré comme «&nbsp;important&nbsp;».  Toutefois, un rejet conduisant à une évacuation à court terme serait être  considéré comme important si la zone devant être évacuée est vaste ou si la  durée de l&#39;évacuation est étendue. Un certain degré de discernement est  nécessaire pour faire la distinction. </p>  <h3 id="sec-2-5">2.5 Éliminés, à toutes fins pratiques</h3>  <p>Le  principal objectif de la conception des centrales nucléaires est de s&#39;assurer  que les rejets importants sont éliminés, à toutes fins pratiques. Cet objectif  reconnaît que la possibilité de certaines conditions ou de certains accidents  est soit matériellement impossible, soit jugée avec un niveau élevé de confiance  comme extrêmement improbable. La démonstration de l&#39;élimination à toutes fins pratiques  d&#39;une séquence d&#39;accidents peut faire intervenir des considérations  déterministes et probabilistes. Elle devrait également prendre en compte les  incertitudes liées aux connaissances concernant certains phénomènes physiques  importants et applicables. La section 7.3.4 du REGDOC-2.5.2 fournit des  orientations permettant de démontrer que des séquences d&#39;accidents ont été, à  toutes fins pratiques, éliminées.</p>  <p> La quantification des probabilités de défaillance pour les scénarios d&#39;AG  présente des incertitudes. L&#39;une d&#39;elles correspond au taux de défaillance des  composants qui fonctionnent au-delà de leurs niveaux de qualification. Certains  outils permettant de démontrer, avec un niveau de confiance approprié, que les  rejets ont été éliminés à toutes fins pratiques, comprennent la défense en  profondeur, l&#39;utilisation de dispositifs de sûreté passifs, l&#39;utilisation de  plusieurs contrôles indépendants et l&#39;application des principes de sûreté en  matière d&#39;indépendance, de diversité et de séparation. </p>  <h3 id="sec-2-6">2.6 Détermination des CAD</h3>  <p>L&#39;autorité responsable de la  conception est chargée d&#39;identifier, de sélectionner et de classer les  événements ou conditions qui forment les CAD. Actuellement, il n&#39;y a pas de  moyen officiellement reconnu et fixé de commun accord permettant d&#39;identifier  les CAD. Une&nbsp;compréhension de la progression d&#39;un accident, des processus  et des phénomènes associés s&#39;impose et il est suggéré d&#39;examiner les éléments  suivants&nbsp;:</p>  <ul>
<li>la  détermination et la sélection d&#39;événements et de séquences d&#39;accidents  représentatifs, en vue de déterminer les conditions réelles de conception</li>
<li>la  détermination des principales options de conception et des caractéristiques de  conception propres à la centrale, en vue de l&#39;atténuation des AG, et de leurs  rôles dans l&#39;atteinte des objectifs de gestion des accidents graves (GAG)</li>
<li>l&#39;identification  des conditions nécessaires pour la conception des caractéristiques de la  centrale devant servir à prévenir et à atténuer les conséquences des AG</li>
<li>des  stratégies de GAG visant à atténuer les défis posés par les AG tout en assurant  le fonctionnement fiable des fonctions de sûreté et en permettant de ramener la  centrale dans un état de stabilité contrôlé</li>
<li>les  analyses déterministes d&#39;accident afin de soutenir la conception</li>  </ul>  <p>Les considérations visant à  identifier et à sélectionner les CAD peuvent comprendre&nbsp;: </p>  <ul>
<li>des  scénarios d&#39;accident comprenant des combinaisons d&#39;événements déclencheurs, d&#39;erreur  humaine et de fonctionnement ou de défaillance des SSC</li>
<li>les  caractéristiques de conception envisagées pour prévenir ou atténuer un AHD ou  un AG et la définition de leurs rôles</li>
<li>les  paramètres des caractéristiques de conception envisagées pour prévenir ou  atténuer un AHD ou un AG </li>
<li>les  facteurs de progression de l&#39;accident utiles pour déterminer les valeurs  limitatives ainsi que la plage pour le facteur temps et l&#39;amplitude des  paramètres requis pour la conception</li>
<li>les  événements déclencheurs, les erreurs humaines et l&#39;exploitabilité des SSC (fonctionnement  ou défaillance) servant à déterminer les valeurs limitatives ainsi que la plage  des paramètres requis pour la conception </li>
<li>un  ensemble optimal de scénarios d&#39;accident en vue de le réduire à un nombre  gérable de séquences </li>  </ul>  <p>L&#39;attente qui sous-tend la détermination et la sélection des CAD est de  parvenir à éliminer, à&nbsp;toutes fins pratiques, les rejets importants dans l&#39;état  de la centrale concerné par la CAD. Pour&nbsp;une discussion plus approfondie  sur l&#39;identification des CAD, veuillez consulter l&#39;annexe C. </p>  <div className="col-md-12 well ">
<p> <strong>Question 2: </strong>Les éléments inclus en vue de l&#39;identification  des CAD sont-ils clairs, logiques, suffisants ou nécessaires?</p>  </div>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-3">3. Objectifs et exigences concernant les CAD</h2>  <p>Les objectifs de sûreté visant les  CAD consistent à prévenir les dommages au cœur, à atténuer les conséquences des  accidents et à protéger l&#39;intégrité du confinement le plus longtemps possible.  Pour atteindre ces objectifs, la CCSN croit que les éléments suivants sont  essentiels&nbsp;:</p>  <ul>
<li>l&#39;inclusion  des caractéristiques de conception de la centrale devant servir à la gestion  des accidents</li>
<li>la  spécification d&#39;exigences en matière de rendement du confinement au cours des  CAD (comme le maintien d&#39;une barrière étanche pendant une certaine période sans  rejets ultérieurs non contrôlés)</li>
<li>la  prise en considération des besoins et des exigences en matière de gestion des  accidents</li>  </ul>  <p>Le principe sous-jacent est d&#39;offrir avec une «&nbsp;confiance  raisonnablement élevée&nbsp;» la certitude que les SSC fonctionneront comme  prévu au cours d&#39;un CAD.</p>  <h3 id="sec-3-1">3.1 Objectifs et exigences de la conception</h3>  <p>Le  REGDOC-2.5.2 établit les objectifs généraux en matière de sûreté des centrales  nucléaires grâce à des critères d&#39;acceptation des doses et des objectifs de  sûreté. Il établit des exigences de conception particulières pour les  conditions et événements faisant partie de l&#39;enveloppe de conception de la  centrale. Il n&#39;établit pas les exigences de conception pour les AHD qui sont  considérés comme «&nbsp;éliminés, à toutes fins pratiques&nbsp;». </p>  <h4 id="sec-3-1-1">3.1.1 Portée</h4>  <p>Des objectifs de conception devraient  être établis pour l&#39;équipement susceptible d&#39;être utilisé en CAD. Cet équipement peut comprendre, entre autres&nbsp;:</p>  <ul>
<li>des  caractéristiques de conception complémentaires<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Note de bas de page </span>2</a></sup>, telles que des récupérateurs et  des systèmes de ventilation filtrée de l&#39;enceinte de confinement destinés à  limiter ou à atténuer les effets des accidents graves</li>
<li>un  équipement fixe ou mobile sur le site ou hors site, comme des pompes mobiles ou  des génératrices</li>
<li>des  SSC fonctionnels ou de sûreté dont l&#39;utilisation peut être prévue au-delà de  leur dimensionnement</li>  </ul>  <p>Les exigences relatives à la conception des systèmes de sûreté devraient  être très prudentes pour les AD afin d&#39;offrir une confiance très élevée. Il  faudrait une confiance raisonnablement élevée dans l&#39;éventualité peu probable  de CAD.</p>
<h4 id="sec-3-1-2">3.1.2 Classification de sûreté</h4>  <p>La classification en matière de  sûreté prend en compte&nbsp;:</p>  <ul>
<li>la  ou les fonction(s) de sûreté à exécuter</li>
<li>la  ou les conséquence(s) d&#39;une défaillance</li>
<li>la  probabilité que les SSC soient sollicités pour exécuter la fonction de sûreté</li>
<li>le  moment après un événement déclencheur hypothétique où les SSC seront sollicités  et la durée prévue de fonctionnement de ces derniers</li>  </ul>  <p>Ces considérations permettent à l&#39;autorité responsable de la conception  de prendre en compte des facteurs comme la redondance de l&#39;équipement et la  possibilité de mettre en application des stratégies de rechange. Bien que la  probabilité d&#39;une sollicitation des SSC en cas de CAD soit très&nbsp;faible, la  défaillance des fonctions de sûreté destinées à atténuer les CAD pourrait avoir  des conséquences très graves. Ces fonctions de sûreté devraient être affectées  à une classe de sûreté qui correspond à leur importance pour la sûreté. Les  exigences relatives à la mise à l&#39;épreuve et à l&#39;entretien de l&#39;équipement  devant être utilisé lors de CAD devraient être établies conformément à la  classification en matière de sûreté de cet équipement.</p>  <h4 id="sec-3-1-3">3.1.3 Pérennité de l&#39;équipement</h4>  <p>Le document REGDOC-2.5.2 exige que :</p>  <ul className="list-bullet-none">
<li>[i]l faut démontrer avec une assurance raisonnable que l&#39;équipement et l&#39;instrumentation crédités pour fonctionner durant les CAD auront la capacité d&#39;exécuter leur(s) fonction(s) de sûreté prévue(s) dans les conditions environnementales anticipées. Une extrapolation justifiée du rendement de l&#39;équipement, fondée généralement sur des spécifications nominales, des essais de qualification environnementale ou d&#39;autres considérations, peut être utilisée pour fournir l&#39;assurance de son opérabilité.</li>  </ul>  <p>La pérennité de l&#39;équipement et des  instruments en CAD devraient tenir compte des éléments suivants&nbsp;:</p>  <ul>
<li>les  fonctions qui doivent être exécutées pendant un accident pour atteindre un état  d&#39;arrêt sûr des CAD</li>
<li>le  délai d&#39;exécution de chaque fonction requise en cas d&#39;accident</li>
<li>l&#39;emplacement  et le type d&#39;équipement utilisé pour exécuter les fonctions nécessaires selon  chaque délai d&#39;exécution</li>
<li>les  conditions environnementales hostiles des CAD dans chaque délai d&#39;exécution</li>
<li>une  assurance que l&#39;équipement survivra pour exécuter ses fonctions à l&#39;intérieur  des délais d&#39;un accident établis pour l&#39;état de CAD de la centrale</li>  </ul>  <h3 id="sec-3-2">3.2 Exigences relatives à l&#39;analyse</h3>  <p>Le REGDOC-2.4.1, <em>Analyse  déterministe de la sûreté [5]</em> précise les exigences relatives aux analyses  déterministes de sûreté pour les IFP, les AD et les AHD. Bien que le document  fasse référence aux AHD, il ne spécifie pas d&#39;exigences pour les CAD. Ceci est  dû au fait que l&#39;analyse discutée dans le document REGDOC-2.4.1, contrairement  au processus de conception, pourrait prendre en considération des événements  présentant une fréquence inférieure à celle des CAD. La&nbsp;section 4.3.3 du  document REGDOC-2.4.1, <em>Analyse déterministe de sûreté,</em> indique  que&nbsp;:</p>  <p> Une évaluation de la sûreté des AHD doit être réalisée pour démontrer  que&nbsp;:</p>  <ol>
<li>La  centrale nucléaire, telle que conçue, respecte les exigences relatives aux  limites de rejet établies comme objectifs de sûreté. L&#39;analyse déterministe de  la sûreté fournit des données sur les conséquences pour les séquences d&#39;accident  qui peuvent être utilisées dans l&#39;EPS [étude probabiliste de sûreté].</li>
<li>Les  procédures et l&#39;équipement mis en place pour répondre aux besoins en matière de  gestion des accidents sont efficaces et tiennent compte de la disponibilité de  l&#39;eau de refroidissement, du matériel et des sources d&#39;alimentation électrique;  il est possible de prendre en considération les capacités complètes de  conception de la centrale, y&nbsp;compris l&#39;utilisation possible des systèmes  de sûreté, des systèmes sans lien avec la sûreté et des systèmes temporaires  au-delà de leurs fonctions initiales prévues.</li>  </ol>  <p>L&#39;analyse déterministe de sûreté pour les AHD permet d&#39;évaluer les  objectifs de sûreté en conjonction avec les EPS. Elle démontre également le caractère  adéquat des dispositions en matière de conception et des programmes de gestion  des accidents. Par conséquent, l&#39;analyse déterministe de sûreté est également  réalisée pour démontrer que les caractéristiques de conception complémentaires  fonctionneront conformément aux spécifications de conception en&nbsp;cas de CAD.</p>  <p> L&#39;analyse déterministe devrait être réalisée pour un événement  susceptible de poser les plus grandes difficultés à maintenir la fonction de  confinement. </p>  <p> Le principe généralement accepté  pour l&#39;analyse des AHD est la méthode de la meilleure estimation. Ceci est  conforme aux documents de l&#39;Agence internationale de l&#39;énergie atomique (AIEA)  tels que le guide de sûreté particulier SSG-2,  <em>Deterministic Safety Analysis for Nuclear  Power Plants</em> [6] et le rapport de sûreté no 56, <em>Approaches  and Tools for Severe Accident Analysis for Nuclear Power Plants</em>&nbsp;[7]. La  section 4.4.4 du document REGDOC-2.4.1 indique que&nbsp;:</p>  <ul className="list-bullet-none">
<li> [P]our l&#39;analyse des AHD, il convient d&#39;utiliser une méthode d&#39;analyse  plus réaliste, comportant des hypothèses qui reflètent la configuration  probable de la centrale, ainsi que la réponse attendue des systèmes et des  opérateurs à l&#39;égard de l&#39;événement analysé.</li>  </ul>  <p> L&#39;une des raisons justifiant l&#39;utilisation de méthodes de la meilleure  estimation et de codes informatiques dans l&#39;analyse des AHD est liée à la  gestion des accidents. À mesure que l&#39;accident progresse jusqu&#39;au stade des  conditions hors dimensionnement, les mesures de gestion des accidents  deviennent un élément important de la défense en profondeur. Les conséquences  des AHD sont estimées de manière à ce que l&#39;analyse reflète une réaction  réaliste de la centrale et présente des renseignements axés sur la meilleure  estimation pour la gestion des accidents.</p>  <p> L&#39;analyse des AHD peut faire appel aux données d&#39;entrée applicables<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Note de bas de page </span>3</a></sup> des EPS et peut créditer tous les  SSC disponibles pour autant qu&#39;on ait pu démontrer, avec une confiance  raisonnablement élevée, qu&#39;ils sont capables de remplir les fonctions pour  lesquelles ils ont été conçus. Il est intéressant de noter que le critère de  défaillance unique, qui s&#39;applique à tous les groupes de sûreté crédités dans l&#39;analyse  des AD, n&#39;est habituellement pas appliqué dans l&#39;analyse des AHD. </p>
<h3 id="sec-3-3">3.3 Exigences opérationnelles</h3>  <p>Le document  RD/GD-210, <em>Programmes d&#39;entretien des centrales nucléaires</em> [8] couvre  les exigences d&#39;entretien, de mise à l&#39;essai et d&#39;inspection. Le document  RD/GD-98, <em>Programmes de&nbsp;fiabilité pour les centrales nucléaires</em> [9] expose les exigences et fournit une orientation en matière de programmes de  fiabilité. L&#39;applicabilité de ces exigences réglementaires aux caractéristiques  des CAD devrait se fonder sur leur classification en matière de sûreté. </p>  <h3 id="sec-3-4">3.4 Procédures</h3>  <p>Bien que des dispositions en matière de conception soient nécessaires  pour maintenir et renforcer les multiples barrières physiques existantes pour  contrer le rejet de produits de fission, il importe aussi de disposer de  procédures permettant de gérer et d&#39;atténuer les CAD. </p>  <p> Les barrières procédurales qui correspondent aux CAD comprennent celles  s&#39;appliquant à la gestion des accidents et à l&#39;intervention en situation d&#39;urgence.  Les lignes directrices pour la gestion des accidents sont axées sur les  symptômes et ne dépendent pas directement d&#39;un événement prédéfini, quel qu&#39;il  soit. Les manuels d&#39;exploitation, les procédures d&#39;exploitation et d&#39;urgence  (PEU) et les LDGAG assurent une continuité de la couverture entre l&#39;exploitation  normale de la centrale et les conditions d&#39;accidents graves. La transition  entre les types de procédure dépend des conditions mesurées de la centrale, et  non d&#39;une définition abstraite de l&#39;état de cette dernière. </p>  <p> Des exigences additionnelles et des plans en matière de formation  peuvent être contenus dans les PEU et les LDGAG. La conception, la  vérification, la validation et l&#39;application des procédures et lignes  directrices applicables aux CAD devraient être conformes au principe de  «&nbsp;confiance raisonnablement élevée&nbsp;». Ces procédures et lignes  directrices devraient prendre en compte les facteurs humains et le rendement  organisationnel afin de s&#39;assurer que les mesures de gestion des accidents sont  exécutées correctement et en temps utile. </p>  <p> Les LDGAG devraient fournir des lignes directrices pour l&#39;utilisation  des caractéristiques de conception complémentaires, y compris de l&#39;équipement  et des instruments mobiles, sur le site et hors site, à utiliser en cas de CAD. </p>  <p> L&#39;ébauche du document REGDOC-2.3.2, <em>Gestion  des accidents </em>[10] répondra à la recommandation formulée par le Groupe de  travail de la CCSN sur Fukushima visant l&#39;élaboration d&#39;un document d&#39;application  de la réglementation dédié à la gestion des accidents. Selon la version  provisoire du document REGDOC-2.3.2, un programme de gestion des accidents  consiste en un ensemble intégré de plans, de procédures, de lignes directrices  et de dispositions servant dans la gestion des accidents. Les principales  exigences devraient aborder des aspects comme l&#39;identification des problèmes  posés à la centrale et à la sécurité de la population, la&nbsp;fourniture d&#39;équipement  et d&#39;instrumentation appropriés, la mise en application d&#39;une orientation pour  le personnel concerné par la gestion des accidents, et l&#39;assurance d&#39;un rendement  humain et organisationnel adéquat.</p>  <p> Les documents d&#39;application de la réglementation portant sur l&#39;intervention  d&#39;urgence hors site comprennent le guide d&#39;application de la réglementation  G-225, <em>Planification d&#39;urgence dans les installations nucléaires de  catégorie I, les mines d&#39;uranium et les usines de concentration d&#39;uranium</em> [11] et le document d&#39;application de la réglementation RD-353, <em>Mise à l&#39;épreuve  des mesures d&#39;urgence</em> [12]. Bien qu&#39;aucune corrélation n&#39;ait été établie  entre une situation d&#39;urgence et un quelconque état particulier de la centrale,  les CAD, par définition, seraient aussi assujetties aux exigences  réglementaires en matière de situations d&#39;urgence.</p>  <p> L&#39;ébauche du document REGDOC-2.10.1, <em>Gestion des urgences et  protection-incendie&nbsp;: Préparation et intervention relatives aux urgences  nucléaires</em> [13] est actuellement en cours d&#39;élaboration. Lorsqu&#39;il sera  publié et incorporé dans le processus de délivrance de permis, il&nbsp;remplacera  le guide d&#39;application de la réglementation G-225, <em>Planification d&#39;urgence dans les installations nucléaires de catégorie  I, les mines d&#39;uranium et les usines de concentration d&#39;uranium</em>, et le  document d&#39;application de la réglementation RD-353, <em>Mise à l&#39;épreuve des mesures d&#39;urgence</em>. Il répondra aux recommandations  formulées par le Groupe de travail de la CCSN sur Fukushima (et le Comité  consultatif externe) visant à renforcer les exigences réglementaires relatives  aux programmes de préparation aux situations d&#39;urgence des titulaires de  permis. L&#39;ébauche du document REGDOC-2.10.1 dresse la liste et discute des  exigences relatives à un programme de préparation aux situations d&#39;urgence et  propose des orientations pour l&#39;élaboration d&#39;un tel programme. </p>  <p> Les guides d&#39;application de la réglementation G-276, <em>Plan de  programme d&#39;ingénierie des facteurs humains</em> [14] et G-278, <em>Plan de  vérification et validation des facteurs humains</em> [15] fournissent de l&#39;orientation  sur les facteurs humains. </p>  <p> La CCSN révisera ces documents afin de s&#39;assurer que le principe de  «&nbsp;confiance raisonnablement élevée&nbsp;» est appliqué uniformément pour  les événements hors dimensionnement.</p>  <h3 id="sec-3-5">3.5 Exigences en matière de radioprotection</h3>  <p>Tous les  états de la centrale, y compris les CAD, sont assujettis au cadre de la CCSN en  matière de radioprotection, y compris l&#39;application du « niveau le plus bas qu&#39;il  soit raisonnablement possible d&#39;atteindre » (principe ALARA) en ce concerne le  contrôle des risques radiologiques et&nbsp;de l&#39;exposition au rayonnement. </p>  <p> La CCSN a publié un document de travail, DIS-13-01, <em>Modifications  proposées au Règlement sur&nbsp;la radioprotection </em>[16], détaillant les  modifications proposées pour tenir compte de la recommandation no&nbsp;8  présentée dans le document d&#39;information INFO-0824, <em>Rapport du Groupe de  travail de la CCSN sur Fukushima [17]. </em>Il conseillait de modifier le <em>Règlement  sur la radioprotection (RRP) [18] </em>afin de l&#39;aligner davantage sur les  documents d&#39;orientation internationaux. Pour atteindre cet objectif, le RRP  serait modifié pour qu&#39;il décrive plus en détail les exigences réglementaires  nécessaires pour prendre en compte les dangers radiologiques pendant les diverses  phases d&#39;une urgence. Si elles devaient obtenir l&#39;approbation du gouverneur en  conseil, ces modifications proposées au Règlement pourraient avoir une  incidence sur les exigences relatives à l&#39;identification, à la conception et à l&#39;analyse  des CAD. </p>  <div className="col-md-12 well ">
<p> <strong>Question 3: </strong>Les éléments qui devraient figurer dans les objectifs et exigences de conception concernant les CAD sont-ils définis et traités de façon précise dans les chapitres ci-dessus?</p>  </div>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-4">4. Applicabilité aux centrales nucléaires du Canada</h2>  <h3 id="sec-4-1">4.1 Nouvelles centrales nucléaires</h3>  <p>Le document REGDOC-2.5.2, <em>Conception  d&#39;installations dotées de réacteurs&nbsp;: Centrales nucléaires</em> s&#39;applique  à la conception de toutes les nouvelles centrales nucléaires. Donc, dans la  prise en considération des CAD, l&#39;autorité responsable de la conception de  nouvelles centrales doit utiliser une approche systématique permettant&nbsp;:</p>  <ul>
<li>de  prendre en compte tous les problèmes connus liés aux accidents à l&#39;intérieur  des CAD</li>
<li>d&#39;atteindre  un équilibre dans la conception entre la prévention des accidents graves et l&#39;atténuation  des accidents, en mettant l&#39;accent sur la prévention des défaillances du  confinement</li>
<li>de  s&#39;intégrer aux besoins du programme de gestion des accidents propre à la  centrale afin de s&#39;assurer que les caractéristiques de conception sont  disponibles pour la gestion des accidents</li>  </ul>  <h3 id="sec-4-2">4.2 Centrales nucléaires existantes</h3>  <p>Les centrales nucléaires existantes  ne sont pas abordées dans le document REGDOC-2.5.2. Toutefois, le document  REGDOC-2.5.2 peut être cité en référence dans un examen mené par rapport aux  normes les plus récentes avant de procéder à la réfection ou de prolonger la  durée de l&#39;exploitation (p. ex. au moyen de l&#39;application du document RD-360, <em>Prolongement  de la durée de vie des centrales nucléaires</em> [19]). En ce qui concerne les  centrales nucléaires existantes, l&#39;accent devrait être mis sur&nbsp;:</p>  <ul>
<li>la  détermination et l&#39;évaluation des caractéristiques de conception existantes  pouvant être utilisées pour régler les problèmes que posent les CAD</li>
<li>l&#39;assurance  que le système de confinement n&#39;a aucune vulnérabilité, de concert avec le  programme de gestion des accidents</li>
<li>l&#39;application  de mises à niveau à la conception, s&#39;il y a lieu, en vue d&#39;atteindre les  objectifs en matière de sûreté ou de répondre aux besoins en matière de gestion  des accidents, ou de résoudre des problèmes particuliers</li>  </ul>  <p>Il convient de noter que de nombreuses mises à niveau ont été faites,  sont prévues ou sont en cours d&#39;examen dans les centrales nucléaires  existantes. Ces mises à niveau sont le résultat d&#39;examens de la sûreté réalisés  au moment de la réfection ou à la suite de l&#39;accident de Fukushima. Bon nombre  de ces mises à niveau traitent de la capacité de gérer et d&#39;atténuer les CAD.  Les exigences relatives à la conception pour ces mises à niveau ont été  sélectionnées par les titulaires de permis en s&#39;appuyant sur les meilleurs  jugements techniques et examinées par l&#39;organisme de réglementation en tenant  compte du risque. Les problèmes spécifiques requérant une orientation en  matière de réglementation sont identifiés et réglés au moment de l&#39;application  de ces mises à niveau.</p>  <p> L&#39;élaboration d&#39;autres mises à jour du cadre de réglementation de la  CCSN, identifiées à la section&nbsp;3 et liées aux normes du Groupe CSA<sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Note de bas de page </span>4</a></sup>, prendra un certain nombre d&#39;années.  En attendant, on suggère que les parties intéressées de l&#39;industrie collaborent  étroitement avec la CCSN pour élaborer des processus internes et mieux  clarifier les principes et concepts décrits dans le présent document de  travail. De même, la CCSN, le Groupe CSA et l&#39;industrie devraient collaborer  pour s&#39;assurer que les modifications apportées aux exigences et aux documents d&#39;orientation  tiennent compte des principes et concepts clarifiés. Une collaboration élargie  devrait permettre aux pratiques de l&#39;industrie de s&#39;harmoniser avec les  exigences réglementaires. Cette harmonisation facilitera la délivrance de  permis et la vérification de la conformité une fois les nouvelles exigences et  orientations publiées.</p>
<div className="col-md-12 well ">
<p><strong>Question 4: </strong>Hormis les centrales nucléaires, existe-t-il d&#39;autres installations nucléaires canadiennes susceptibles de profiter de l&#39;application des CAD?</p>  </div>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-5">5. Recherche et développement à l&#39;appui des CAD</h2>  <p>De nombreux  phénomènes physiques liés aux AG sont extrêmement complexes. Pour certains AG,  l&#39;état actuel des connaissances et les capacités de modélisation sont limités.  Assez&nbsp;fréquemment, les études expérimentales requises pour accroître ces  connaissances ne peuvent être menées en conditions parfaitement  représentatives. Ce fait complique la tâche d&#39;élaboration et de validation des  modèles. </p>  <p> Le coût élevé des expériences et le nombre limité d&#39;installations  appropriées pour effectuer des études des phénomènes pertinents nécessitent une  vaste coopération internationale. Bien que motivée par des considérations d&#39;efficience,  cette approche est facilitée par le fait que de nombreux phénomènes liés à des  AG sont communs ou semblables pour divers types de réacteur. Les activités de  recherche nationales et internationales dans ce domaine visent à réduire les  incertitudes dans les connaissances disponibles, permettant ainsi une  modélisation plus précise de&nbsp;la progression d&#39;un accident et de ses  conséquences.</p>  <p> La recherche devrait répondre aux besoins des réacteurs actuellement en  exploitation ainsi qu&#39;à ceux des réacteurs futurs. Les modifications s&#39;appliquant  aux réacteurs en exploitation sont souvent peu nombreuses et la recherche dans  ce domaine vise surtout à minimiser l&#39;impact potentiel d&#39;AG. Un des principaux  aspects à prendre en compte dans le cadre de la recherche et du développement  est l&#39;étude des «&nbsp;effets de falaise&nbsp;» qui peuvent entraîner des  réactions non linéaires et inattendues de la part des SSC existants de la  centrale. On peut décrire un effet de falaise comme une augmentation importante  de la gravité d&#39;un événement découlant d&#39;un petit changement des conditions.  Les effets de falaise peuvent être causés par un changement dans l&#39;ampleur de l&#39;événement  ou un changement dans la réponse de la centrale ou de l&#39;opérateur.</p>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 id="sec-6">6. Conclusion</h2>  <p>La CCSN a publié des exigences et des orientations de haut niveau pour  la conception et l&#39;analyse dans les documents REGDOC-2.5.2, <em>Conception d&#39;installations  dotées de réacteurs&nbsp;: Centrales nucléaires</em> et REGDOC-2.4.1, <em>Analyse  déterministe de sûreté</em>. Toutefois, l&#39;élaboration d&#39;exigences et de lignes  directrices détaillées s&#39;appliquant à l&#39;équipement, à l&#39;analyse et aux  procédures en matière de CAD n&#39;est pas encore terminée. Néanmoins, la CCSN est  d&#39;avis que le principe de la «&nbsp;confiance raisonnablement élevée&nbsp;»  devrait s&#39;appliquer à toutes les activités associées aux CAD. Un dialogue  permanent entre les organismes de réglementation, les&nbsp;concepteurs, les  exploitants, les organismes de normalisation et d&#39;autres parties intéressées  est nécessaire pour définir la façon d&#39;atteindre une «&nbsp;confiance  raisonnablement élevée&nbsp;».</p>  <p> Bien que nous l&#39;ayons déjà indiqué, il est utile de répéter que la CCSN est  d&#39;avis qu&#39;un REGDOC spécifiquement consacré aux CAD ne soit pas nécessaire. Le  concept peut être pris en compte dans un certain nombre de projets et de  versions existantes de documents d&#39;application de la réglementation et de  normes canadiennes. Ces documents pourraient couvrir tout un éventail de  sujets, notamment la conception, l&#39;analyse, la construction, l&#39;exploitation,  les procédures et la radioprotection. Ils pourraient s&#39;appliquer aux centrales  nucléaires actuelles et futures ainsi qu&#39;aux petites installations dotées de  réacteurs.</p>  <p> La CCSN s&#39;est engagée à travailler avec toutes les parties intéressées  afin d&#39;élaborer des stratégies de prévention et d&#39;atténuation pour les  situations et les scénarios d&#39;accident dépassant le cadre de ceux pris en  compte dans la conception initiale d&#39;une installation nucléaire. Le présent  document de travail a exposé le point de vue de la CCSN en ce qui concerne les  CAD par rapport aux autres états de la centrale dans l&#39;espoir d&#39;encourager un  véritable dialogue avec les parties intéressées. Son intention n&#39;est pas d&#39;adopter  une position définitive, mais plutôt de stimuler la discussion sur le thème des  CAD.</p>  <div className="col-md-12 well ">
<p><strong>Question 5: </strong>La CCSN devrait-elle envisager la révision de ses documents d&#39;application de la réglementation pour tenir compte des CAD? Dans l&#39;affirmative, devraient-ils être élargis pour traiter spécifiquement de l&#39;équipement et des procédures susceptibles d&#39;être utilisés en cas de CAD?</p>  </div>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-how-to">Comment participer</h2>  <p>Veuillez transmettre vos commentaires ou vos réactions de l&#39;une des  manières suivantes&nbsp;: </p>  <ul>
<li><strong>Par écrit :</strong><br/>
Commission  canadienne de sûreté nucléaire<br/>
C.P. 1046, Succursale B<br/>
280, rue Slater<br/>
Ottawa (Ontario) K1P 5S9
</li>
<li><strong>En  ligne&nbsp;:</strong> en utilisant le formulaire de commentaires électronique</li>
<li><strong>Par  courriel&nbsp;: </strong><a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></li>
<li><strong>Par  télécopieur&nbsp;:</strong> 613-995-5086</li>  </ul>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-a">Annexe A : Tableau des états de la centrale</h2>  <p>Les états de la centrale ont des répercussions sur plusieurs aspects de  la conception, de l&#39;analyse et de l&#39;exploitation de la centrale nucléaire. La  figure 2 (voir la page suivante) donne un aperçu approximatif de la relation  entre les états de la centrale et les sujets associés. </p>  <p> Des notes explicatives sont fournies à la suite du tableau en vue d&#39;éclairer  la compréhension du contenu de la figure.</p>  <p> Veuillez noter que le diagramme présente un certain nombre de concepts  complexes. Les relations décrites ne sont pas toujours aussi précises que ce  que la représentation laisse supposer. Les définitions textuelles de ces  concepts obtenues dans des documents sources appropriés devraient toujours être  privilégiées.</p>  <p> Bon nombre des transitions entre les états sont en fait des frontières  larges. Souvent, il existe des chevauchements entre les états ou il n&#39;est pas  possible d&#39;établir une limite nette. Même en présence de critères numériques, l&#39;évaluation  du rendement de la conception par rapport aux critères peut faire l&#39;objet d&#39;incertitudes  importantes.</p>  <table>
<caption className="text-left">
<strong>Figure 2: </strong>Incidence de l&#39;enveloppe de conception de la centrale et des états de la centrale
</caption>
<tr className="text-center">
<td style="border-top: 0px !important; border-left: 0px !important;">&nbsp;</td>
<td colSpan="10"><strong>Enveloppe de conception de la centrale</strong></td>
<td style="border-top: 0px !important; border-right: 0px !important;">&nbsp;</td>
<td style="border-top: 0px !important; border-right: 0px !important; border-left: 0px !important;">&nbsp;</td>
</tr>
<tr className="text-center">
<td>&nbsp;</td>
<td colSpan="4"><strong>États de fonctionnement</strong></td>
<td colSpan="8"><strong>Conditions d&#39;accident</strong></td>
</tr>
<tr className="text-center">
<td rowspan="2"><strong>États de la centrale</strong></td>
<td rowspan="2">Exploitation normale</td>
<td colSpan="3" rowspan="2">Incident de fonctionnement prévu</td>
<td rowspan="2">Accident de dimensionnement</td>
<td colSpan="7">Accidents hors dimensionnement</td>
</tr>
<tr className="text-center">
<td colSpan="4">Conditions additionnelles de dimensionnement</td>
<td colSpan="3">Conditions éliminées, à toutes fins pratiques</td>
</tr>
<tr className="text-center">
<td><strong>Règles de conception</strong></td>
<td colSpan="5">Dimensionnement</td>
<td colSpan="4">Dimensionnement additionnel</td>
<td colSpan="3">Pas inclus dans le dimensionnement additionnel  </td>
</tr>
<tr className="text-center">
<td><strong>Condition du cœur</strong></td>
<td colSpan="5">Aucun dommage au cœur du réacteur</td>
<td colSpan="3">Aucune détérioration grave du combustible</td>
<td colSpan="4">Accidents graves </td>
</tr>
<tr className="text-center">
<td><strong>Classification selon la fréquence, 1/an</strong></td>
<td>~1</td>
<td colSpan="3">&gt; 10<sup>-2</sup></td>
<td>10<sup>-2</sup> à 10<sup>-5</sup></td>
<td colSpan="7">&lt; 10<sup>-5</sup> </td>
</tr>
<tr>
<td rowspan="2"><strong>Critères d&#39;acceptation radiologique</strong></td>
<td colSpan="12"><em>Règlement sur la radioprotection</em></td>
</tr>
<tr className="text-center">
<td>Principe ALARA</td>
<td colSpan="3">0.5 mSv</td>
<td>20 mSv</td>
<td colSpan="7"><em>Aucun critère</em></td>
</tr>
<tr className="text-center">
<td><strong>Critères d&#39;acceptation déterministes</strong></td>
<td>Conditions de fonctionnement normal</td>
<td colSpan="3">Aptitude fonctionnelle</td>
<td>Intégrité des barrières physiques</td>
<td colSpan="4">Limites de rendement de l&#39;enceinte de confinement</td>
<td colSpan="3"><em>Aucun critère</em></td>
</tr>
<tr className="text-center">
<td><strong>Critères d&#39;acceptation probabilistes</strong></td>
<td colSpan="4"><em>Aucun critère</em></td>
<td>Exigences de fiabilité pour les systèmes de sûreté</td>
<td colSpan="7"><p>Objectifs en matière de sûreté :</p>
<ul>
<li>fréquence des dommages causés au cœur du réacteur</li>
<li>fréquence des rejets radioactifs importants</li>
<li>fréquence des rejets radioactifs faibles</li>
</ul></td>
</tr>
<tr className="text-center">
<td rowspan="4"><strong>Systèmes, structures et composants qui jouent un rôle</strong></td>
<td colSpan="12">Systèmes fonctionnels (défense en profondeur (DeP) de niveau 1)</td>
</tr>
<tr className="text-center">
<td colSpan="12">Systèmes de contrôle (DeP de niveau 2)</td>
</tr>
<tr className="text-center">
<td colSpan="3">&nbsp;</td>
<td colSpan="9">Systèmes de sûreté (DeP de niveau 3)</td>
</tr>
<tr className="text-center">
<td colSpan="5">&nbsp;</td>
<td colSpan="7">Caractéristiques de conception complémentaires (DeP de niveaux 4 et 5)  </td>
</tr>
<tr className="text-center">
<td rowspan="3"><strong>Procédures d&#39;exploitation</strong></td>
<td colSpan="12">Manuels d&#39;exploitation</td>
</tr>
<tr className="text-center">
<td colSpan="2">&nbsp;</td>
<td colSpan="5">Gestion des accidents</td>
<td colSpan="5">&nbsp;</td>
</tr>
<tr className="text-center">
<td colSpan="6">&nbsp;</td>
<td colSpan="6">Gestion des accidents graves</td>
</tr>
<tr className="text-center">
<td><strong>Confiance relative à la prévention des rejets importants </strong></td>
<td colSpan="5">Règles de dimensionnement – confiance élevée</td>
<td colSpan="4">Confiance raisonnablement élevée</td>
<td colSpan="3">Des rejets importants sont susceptibles de se produire</td>
</tr>
<tr className="text-center">
<td><strong>Intervention hors site</strong></td>
<td colSpan="5">Non requise</td>
<td colSpan="7">Intervention progressive</td>
</tr>  </table>  <ul>
<li><strong>Règles de conception&nbsp;: </strong>Les règles de conception décrivent  le type de règles appliquées au cours du processus de conception. Dans le cadre  du dimensionnement, des codes et des normes bien établis sont utilisés depuis  de nombreuses années. Cela n&#39;a pas changé. En ce qui concerne le prolongement  de la conception, des règles moins prudentes sont appliquées. Les codes et les  normes établis n&#39;abordent généralement pas ce domaine. En dehors de l&#39;enveloppe  de conception de la centrale, le document REGDOC-2.5.2, <em>Conception d&#39;installations  dotées de réacteurs&nbsp;: Centrales nucléaires</em> ne prévoit aucune règle de  conception particulière. Cela ne signifie pas que l&#39;équipement ne fonctionnera  pas, mais plutôt que la confiance en son fonctionnement est plus faible.</li>
<li><strong>Condition du cœur&nbsp;: </strong>La conception devrait assurer que le  cœur du réacteur ne subisse aucun dommage en mode d&#39;exploitation normale et en  cas d&#39;IFP. En ce qui concerne les AD, des&nbsp;dommages limités au cœur (comme  des défaillances limitées de la gaine ou un dommage important du combustible  dans un canal unique) peuvent survenir. Un endommagement grave du&nbsp;cœur  peut survenir dans le cadre de certaines CAD. Veuillez noter que le combustible  dans les&nbsp;piscines de combustible usé n&#39;est pas indiqué dans la  figure&nbsp;2.</li>
<li><strong>Classification des événements selon la fréquence&nbsp;: </strong>Le document REGDOC-2.4.1, <em>Analyse&nbsp;déterministe  de la sûreté</em>, définit la gamme de fréquences attendues pour les IFP et les&nbsp;AD,  bien&nbsp;que la fréquence ne soit pas le seul facteur à considérer pour la  classification des événements. La&nbsp;CCSN n&#39;établit pas de limite inférieure  de fréquence pour les CAD comme il&nbsp;est&nbsp;précisé à la section 1.2 du  document principal.</li>
<li><strong>Critères d&#39;acceptation radiologique&nbsp;: </strong>Le <em>Règlement sur la  radioprotection</em> [17] établit le principe ALARA et fixe les limites de dose  pour la population ainsi que les limites de dose professionnelle et en  situation d&#39;urgence pour les travailleurs. Les situations d&#39;urgence ne s&#39;appliquent  pas uniquement aux états de la centrale et ne sont pas décrites ici. Le  document REGDOC-2.5.2 établit les critères d&#39;acceptation des doses pour les IFP  et les AD. Plus&nbsp;précisément, les critères d&#39;acceptation des doses sont des  critères de conception. Ils&nbsp;s&#39;appliquent uniquement aux doses réelles au  corps entier susceptibles d&#39;être reçues par les individus moyens membres des  groupes critiques qui sont les plus à risque pendant la période de  30&nbsp;jours suivant un accident, telles que calculées dans les analyses  déterministes de la sûreté.</li>
<li><strong>Critères d&#39;acceptation déterministes&nbsp;: </strong>Ces critères décrivent le rôle joué  par les barrières physiques contre le rejet de produits de fission. En ce qui  concerne l&#39;exploitation normale, toutes&nbsp;les barrières doivent demeurer  intactes. Pour les IFP, toutes les barrières (sauf celles dont&nbsp;la  défaillance constitue l&#39;événement déclencheur, p. ex. une fuite de conduite)  devraient demeurer intactes et aptes à retourner à l&#39;exploitation normale. Pour  les AD, les barrières devraient demeurer intactes dans la mesure du possible.  En ce qui concerne les CAD, il est acceptable que&nbsp;des dommages graves au  cœur puissent se produire. Toutefois, il y aura une confiance raisonnablement  élevée que l&#39;équipement servant à la gestion des CAD fonctionnera comme prévu  et que l&#39;intégrité du confinement sera maintenue pour éviter des rejets  radioactifs importants.<strong></strong></li>
<li><strong>Critères d&#39;acceptation probabilistes&nbsp;: </strong>Le document REGDOC-2.5.2 définit les  objectifs en matière de sûreté s&#39;appliquant globalement à la conception, et en  particulier aux événements hors dimensionnement. Les trois critères utilisés  pour établir les objectifs de sûreté sont&nbsp;: la fréquence des dommages au  cœur, la fréquence des rejets radioactifs faibles et la fréquence des rejets radioactifs  importants.</li>
<li><strong>Systèmes, structures et composants qui jouent un rôle&nbsp;: </strong>Les systèmes fonctionnels et de  contrôle sont principalement conçus pour la défense en profondeur de  niveau&nbsp;1 et de niveau&nbsp;2, et&nbsp;ne sont pas une base fiable pour les  CAD. Toutefois, s&#39;ils sont fonctionnels, ils peuvent jouer un rôle lors de CAD  et d&#39;accidents graves. Les systèmes de sûreté sont principalement conçus pour  offrir une confiance très élevée que les AD n&#39;entraîneront pas un dépassement  des critères d&#39;acceptation de dose. Ils peuvent aussi jouer un rôle en regard  des CAD. Les caractéristiques de&nbsp;conception complémentaires sont  spécifiques aux CAD.</li>
<li><strong>Procédures d&#39;exploitation&nbsp;: </strong>Les procédures d&#39;exploitation ne s&#39;appliquent  pas uniquement aux états de la centrale. Les manuels d&#39;exploitation, les  procédures d&#39;exploitation en cas d&#39;urgence et les LDGAG assurent une continuité  de la couverture entre l&#39;exploitation normale et les conditions d&#39;accident  grave. Le passage d&#39;un type de procédure à l&#39;autre dépend des conditions  mesurées de la centrale, et non d&#39;une définition abstraite de l&#39;état de cette  dernière. Veuillez noter que les manuels d&#39;exploitation peuvent être requis  même dans le cas où les procédures utilisées sont les PEU ou les LDGAG puisqu&#39;ils  fournissent des directives pour le fonctionnement des systèmes.</li>
<li><strong>Niveau de confiance en ce qui concerne la prévention des rejets  importants&nbsp;: Tel que</strong> décrit dans le corps du texte, un niveau élevé de confiance est requis  pour satisfaire aux exigences au sein du dimensionnement. Pour les CAD, la  confiance doit être raisonnablement élevée. Dans le cas de conditions et d&#39;événements  peu probables, on reconnaît que des rejets importants peuvent se produire.</li>
<li><strong>Intervention hors site&nbsp;: </strong>Bien qu&#39;aucun événement de dimensionnement ne  devrait nécessiter une intervention hors site, on reconnaît que des mesures de  précaution peuvent être prises si l&#39;on envisage la possibilité d&#39;un rejet dans  le cas où d&#39;autres défaillances surviendraient. Pour ce qui est des événements  de gravité accrue, il est possible d&#39;appliquer des mesures d&#39;urgence, comme la  mise à l&#39;abri, l&#39;administration de comprimés d&#39;iode, la réinstallation à court  terme ou une évacuation à long terme. </li>  </ul>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-b">Annexe B : Définition des CAD hors du Canada</h2>  <h3 className="nocount" id="sec-app-b-1">Agence internationale de l&#39;énergie atomique</h3>  <p>L&#39;approche adoptée par l&#39;Agence  internationale de l&#39;énergie atomique (AIEA) se trouve dans les Prescriptions de  sûreté particulières SSR-2/1 [1] de l&#39;AIEA. Ce document définit les CAD comme  suit<sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Note de bas de page </span>5</a></sup>&nbsp;:</p>  <ul className="list-bullet-none">
<li> Conditions accidentelles qui ne sont pas prises en compte pour les  accidents de dimensionnement, mais qui le sont dans le processus de conception  de l&#39;installation conformément à la méthode de la «&nbsp;meilleure  estimation&nbsp;», et pour lesquelles les rejets de&nbsp;matières radioactives  sont maintenus dans des limites acceptables. Les conditions additionnelles de  dimensionnement pourraient inclure les conditions d&#39;accident grave.</li>  </ul>
<h3 className="nocount" id="sec-app-b-2">Finlande</h3>  <p>L&#39;Autorité finlandaise de sûreté  nucléaire et de radioprotection (STUK) a publié une ébauche du document YVL B.1 <em>Safety Design of a Nuclear Power Plant</em> [2] contenant la définition  suivante&nbsp;: </p>  <ul className="list-bullet-none">
<li> Une condition additionnelle de dimensionnement se rapporte à une situation  entraînée par un&nbsp;événement externe rare, ou à une situation pour laquelle  l&#39;événement déclencheur d&#39;un incident de fonctionnement prévu ou l&#39;accident  hypothétique de catégorie 1 implique une défaillance d&#39;origine commune, ou une  combinaison de défaillances, à laquelle l&#39;installation doit résister sans subir  de dommage grave au combustible.</li>  </ul>  <p> La définition de la STUK semble  chevaucher celle d&#39;accident hypothétique qui établit&nbsp;:</p>  <ul className="list-bullet-none">
<li> [q]u&#39;un accident hypothétique se rapporte à un écart par rapport à l&#39;exploitation  normale que l&#39;on peut supposer se produire moins d&#39;une fois au cours de cent  ans d&#39;exploitation et auquel la centrale nucléaire doit résister sans subir de  dommage grave au combustible, même si des composants individuels des systèmes  importants pour la sûreté sont mis hors service pour des motifs d&#39;entretien ou  de défaillance.</li>  </ul>  <h3 className="nocount" id="sec-app-b-3">États-Unis d&#39;Amérique</h3>  <p>La proposition qui suit a été faite  par le Groupe de travail sur la gestion des risques de la Nuclear&nbsp;Regulatory  Commission des États-Unis [3] afin de traiter les catégories d&#39;amélioration à&nbsp;la  conception pour les AHD&nbsp;:</p>  <ul className="list-bullet-none">
<li> La NRC devrait établir une législation concernant une catégorie d&#39;amélioration  à la conception de nature réglementaire pour les accidents hors  dimensionnement. Cette catégorie devrait utiliser le risque comme mesure de  sûreté, être axée sur le rendement (y compris une disposition concernant des  mises à jour périodiques), englober des considérations de coûts, et&nbsp;être  appliquée sur une base propre au site.</li>  </ul>  <p> Cette proposition a été récemment rejetée par la Nuclear Regulatory  Commission [4], bien qu&#39;elle puisse être intégrée dans le cadre de  réglementation en matière de gestion des risques de la NRC américaine.</p>  <h3 className="nocount" id="sec-app-b-4">France et Allemagne</h3>  <p>Les organismes de réglementation français et allemand n&#39;utilisent pas le  terme CAD; ils utilisent cependant un concept similaire qualifié de  «&nbsp;catégories de réduction de risque&nbsp;» (CRR). Ces&nbsp;organismes de  réglementation ont préparé conjointement le document <em>Directives techniques  pour la conception et la construction de la prochaine génération de réacteurs  nucléaires à eau sous pression</em>&nbsp;[5]. Ces directives techniques se  fondent sur une collaboration entre l&#39;Institut de Protection et de Sûreté  Nucléaire<sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Note de bas de page </span>6</a></sup> (IPSN) français et la Gesellschaft  für Anlagen-und Reaktorsicherheit (GRS) allemande. Elles définissent les CRR,  les règles d&#39;analyse applicables et&nbsp;les critères d&#39;acceptation associés.</p>  <p> Les CRR se répartissent en deux  classes&nbsp;:</p>  <ul>
<li>CRR-A  – défaillances multiples devant être analysées à l&#39;aide de méthodes  déterministes en vue de concevoir des mesures additionnelles permettant d&#39;empêcher  la fusion du cœur</li>
<li>accidents  graves – quelquefois appelés CRR-B</li>  </ul>  <p>Les CRR des accidents sont analysées avec des hypothèses moins prudentes  que celle appliquées aux CAD. Par exemple, tous les systèmes (sauf ceux  impliqués dans la défaillance) peuvent être supposés comme fonctionnels, le  critère de défaillance simple n&#39;a pas besoin d&#39;être satisfait et l&#39;équipement n&#39;est  pas supposé être indisponible pour cause d&#39;entretien.</p>
<h3 className="nocount" id="sec-app-b-5">Japan</h3>  <p>L&#39;Autorité de réglementation nucléaire du Japon élabore actuellement de  nouvelles normes en matière de sûreté qui intègrent les leçons tirées de l&#39;accident  de Fukushima Daiichi. Ses nouvelles normes de sûreté n&#39;utilisent pas l&#39;expression  CAD. Au lieu de cela, lors de l&#39;établissement des exigences de conception, l&#39;expression  «&nbsp;AHD hypothétiques&nbsp;» est fréquemment utilisée, indiquant qu&#39;un  sous-ensemble d&#39;AHD est pris en considération dans la conception. Dans&nbsp;le&nbsp;cadre  des exigences pour l&#39;analyse et la gestion des accidents graves, le  qualificatif «&nbsp;hypothétique&nbsp;» n&#39;est généralement pas utilisé,  indiquant que tous les AHD doivent être pris en considération. </p>  <h3 className="nocount" id="sec-app-b-6">Références pour l&#39;annexe B</h3>  <ol>
<li>AIEA,  Collection normes de sûreté , SSR-2/1, <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1534f_web.pdf"><em>Sûreté des centrales nucléaires&nbsp;: conception</em></a>, 2012</li>
<li>STUK,  ébauche du document YVL B.1, <a href="https://ohjeisto.stuk.fi/YVL/B.1-L2.pdf"><em>Safety Design of a  Nuclear Power Plant</em></a>,  2011</li>
<li>Groupe  de travail sur la gestion des risques de la Nuclear Regulatory Commission des  États-Unis, <a href="http://pbadupws.nrc.gov/docs/ML1210/ML12109A277.pdf"><em>A Proposed Risk  Management Regulatory Framework</em></a>, 2012</li>
<li>Nuclear  Regulatory Commission des États-Unis, SECY-13-0132, <a href="http://adamswebsearch2.nrc.gov/webSearch2/main.jsp?AccessionNumber=ML14139A273"><em>U.S. Nuclear Regulatory Commission Staff Recommendation for the  Disposition of Recommendation 1 of the Near-Term Task Force Report</em></a>, ML14139A273, 2014-05-19</li>
<li>ASN, <a href="http://www.french-nuclear-safety.fr/content/download/85429/594504/version/1/file/technical_guidelines_design_construction.pdf"><em>Directives techniques pour la conception et la construction de la  prochaine génération de réacteurs nucléaires à eau sous pression</em></a>, adoptées  lors des séances plénières des experts allemands du GPR tenues les 19 et  26&nbsp;octobre 2000 (veuillez noter que cette page Web se télécharge  automatiquement) </li>  </ol>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-c">Annexe C : Détermination des CAD</h2>  <p>L&#39;autorité responsable  de la conception est chargée d&#39;identifier, de sélectionner et de classer les&nbsp;événements  ou conditions qui comprennent des CAD. Actuellement, il n&#39;y a pas de moyen  reconnu permettant d&#39;identifier les CAD. Une compréhension de la progression d&#39;un  accident, des processus et des phénomènes associés s&#39;impose et il est suggéré d&#39;examiner  les éléments suivants&nbsp;:</p>  <ul>
<li>les  principales options de conception et les caractéristiques de conception propres  de la centrale, en vue de l&#39;atténuation des AG, et leurs rôles dans l&#39;atteinte  des objectifs de gestion des accidents graves (GAG)</li>
<li>les  conditions nécessaires pour la conception des caractéristiques de la centrale  devant servir à prévenir et à atténuer les conséquences des AG</li>
<li>des  stratégies de GAG visant à atténuer les défis posés par les AG tout en assurant  le fonctionnement fiable des fonctions de sûreté et en permettant de ramener la  centrale dans un état de stabilité contrôlé</li>
<li>la  sélection d&#39;événements et de séquences d&#39;accidents représentatifs en vue de  déterminer les conditions réelles de conception</li>
<li>des  analyses déterministes d&#39;accident appropriées afin de soutenir la conception</li>  </ul>  <p>La sélection des CAD peut également  être facilitée par&nbsp;:</p>  <ul>
<li>les  éléments se trouvant dans le cadre de réglementation de la CCSN (comme le  REGDOC-2.5.2, <em>Conception d&#39;installations dotées de réacteurs : Centrales  nucléaires</em> et le REGDOC-2.4.1, <em>Analyse déterministe de sûreté</em>)</li>
<li>une  compréhension de la progression d&#39;un accident, des processus et des phénomènes  associés</li>
<li>l&#39;attente  que l&#39;objectif final est d&#39;éliminer à toutes fins pratiques les rejets  importants</li>  </ul>  <p>Les six étapes suivantes décrivent le processus proposé pour la  détermination et la sélection des CAD. Veuillez noter que la détermination des  CAD est vraisemblablement un processus itératif; le point de départ n&#39;est pas  particulièrement important.</p>  <ol>
<li>
<p><strong>Identifier les caractéristiques de conception envisagées pour prévenir ou atténuer un AHD ou un AG et la définition de leurs rôles.</strong>
<p></strong>Ces caractéristiques peuvent comprendre&nbsp;: </p>
<ul>
<li>des  barrières permettant de retarder ou d&#39;arrêter la progression de l&#39;accident et  la migration du corium<sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Note de bas de page </span>7</a></sup></li>
<li>le  confinement et les structures de confinement</li>
<li>les  dispositions relatives au blindage</li>
<li>d&#39;autres  équipements ou instruments utilisés pour la GAG</li>
</ul>
<p>Dans le cadre de la stratégie globale adoptée pour relever les défis et  tenir compte des conditions de la centrale ainsi que pour restaurer et  continuer d&#39;assurer les fonctions de sûreté, les rôles de chaque caractéristique  de conception devraient être clairement définis. L&#39;objectif est d&#39;illustrer qu&#39;on  peut raisonnablement s&#39;attendre à ce que ces systèmes fonctionnent comme prévu  pour éliminer, à toutes fins pratiques, les rejets radioactifs importants. Cet  objectif est essentiel pour déterminer les conditions pour lesquelles ces  caractéristiques doivent être conçues, et les motifs justifiant le choix de ces  conditions.</p>
</li>
<li>
<p><strong>Déterminer les paramètres de conception des caractéristiques de conception envisagées pour prévenir ou atténuer un AHD ou un AG défini ci-dessus.  </strong></p>
<p></strong>Parmi les paramètres de conception  habituels, on compte&nbsp;: </p>
<ul>
<li>des  conditions environnementales, telles que&nbsp;:
<ul>
<li>les  paramètres de procédés et les conditions locales – pression, température,  humidité, conditions chimiques et conditions de rayonnement </li>
<li>les  conditions environnementales locales pouvant découler d&#39;un incendie, d&#39;une&nbsp;inondation  ou d&#39;un séisme</li>
<li>d&#39;autres  conditions environnementales causées par des événements externes </li>
</ul>
</li>
<li>les  attentes fonctionnelles pour répondre aux besoins d&#39;exécuter leurs rôles prévus  en cas d&#39;accident; par exemple, pour la conception des recombineurs  autocatalytiques passifs (RAP) (c.-à-d. pour déterminer le nombre et l&#39;emplacement  des unités de RAP), il faudrait des renseignements sur le terme source d&#39;hydrogène,  le débit et le lieu du rejet et les schémas de répartition</li>
<li>l&#39;accès,  l&#39;activation, le délai d&#39;exécution, s&#39;il y a lieu </li>
<li>les  ressources d&#39;appui (comme l&#39;électricité ou l&#39;eau) s&#39;il y a lieu, telles  que&nbsp;:
<ul>
<li>l&#39;eau  d&#39;appoint, y compris les réserves et le point d&#39;injection</li>
<li>l&#39;électricité,  y compris les charges et la durée de disponibilité</li>
</ul>
</li>
</ul>
<p>Ces paramètres de conception sont fondés sur l&#39;analyse d&#39;un ensemble d&#39;accidents  représentatifs à prendre en compte dans la conception de la centrale, en  suivant la méthode de la meilleure estimation. Cet aspect est décrit de façon  plus détaillée au paragraphe&nbsp;6 ci-dessous. </p>
</li>
<li>
<p><strong>Déterminer les facteurs de progression de l&#39;accident (c.-à-d. les conditions mécanistes de la centrale, les processus et les phénomènes que le programme de GAG doit prendre en compte) qui servent à déterminer les valeurs limitatives ainsi que la plage pour le facteur temps et l&#39;amplitude des paramètres requis pour la conception. </strong></p>
<p>Par exemple, la détermination du  nombre d&#39;unités de RAP et de leur emplacement requiert des données sur le terme  source d&#39;hydrogène ainsi que sur le débit et l&#39;emplacement du rejet d&#39;hydrogène.  Ces paramètres sont influencés par le modèle de progression spécifique de l&#39;accident.  Le débit de génération d&#39;hydrogène est principalement touché par les conditions  suivantes&nbsp;: </p>
<ul>
<li>la  surface de contact entre la vapeur et le métal qui dépend de la température du  combustible et du moment de l&#39;effondrement du cœur</li>
<li>la  température du métal en contact avec la vapeur, qui dépend de la température du  combustible et du moment et du débit d&#39;injection d&#39;eau</li>
<li>l&#39;ampleur,  la durée et l&#39;emplacement de l&#39;interaction corium-béton, qui dépend du  mouvement du corium, et du refroidissement du corium avant, et après, le début  de l&#39;interaction corium-béton</li>
</ul>
<p>Il s&#39;agit là de certaines des conditions qui ne sont pas prises en  considération dans le dimensionnement, mais qui peuvent s&#39;appliquer au  processus de conception de la centrale pour les CAD.</p>
</li>
<li>
<p><strong>Déterminer les événements déclencheurs, les erreurs humaines et l&#39;exploitabilité (fonctionnement ou défaillance) des SSC qui servent à déterminer les valeurs limitatives ainsi que la plage des paramètres requis pour la conception.  </strong></p>
<p>Il faut déterminer les combinaisons d&#39;événements individuels (les événements  déclencheurs, y compris les événements externes, les erreurs humaines et le  fonctionnement ou la défaillance des SSC) dont l&#39;occurrence durant un accident  générera les conditions limitatives devant être prises en compte dans le  processus de conception de la centrale. </p>
<p> Les combinaisons d&#39;événements apparaissant dans la liste précédente  devraient être déterminées à partir d&#39;une compréhension de l&#39;influence de la  combinaison de divers événements individuels sur la progression des accidents.  D&#39;autres conditions pouvant s&#39;avérer pertinentes, comme les conditions  initiales de la centrale, devraient être aussi déterminées ici. Il faudrait  prendre en considération les incertitudes majeures concernant la progression d&#39;un  accident, y compris&nbsp;: </p>
<ul>
<ul>
<li>le  moment des défaillances et le moment du rétablissement des SSC</li>
<li>la  synchronisation des interventions de l&#39;opérateur</li>
<li>le  fonctionnement partiel, la défaillance partielle et le rétablissement partiel  des SSC</li>
</ul>
</ul>
</li>
<li>
<p><strong>Déterminer les scénarios d&#39;accident individuels comprenant des combinaisons d&#39;événements déclencheurs, d&#39;erreurs humaines et de fonctionnement ou de défaillance des SSC.  </strong></p>
<p>Ces scénarios d&#39;accident comportent toutes les conditions (étape 3) et  tous les événements (étape 4) qui sont requis pour la conception. La  détermination des séquences d&#39;accidents individuels peut utiliser les résultats  de l&#39;EPS des analyses d&#39;arbre d&#39;événements, s&#39;il y a lieu. Il faut admettre que  la méthode d&#39;EPS comporte des limites inhérentes comme l&#39;absence d&#39;une échelle  de temps pour les erreurs humaines, les défaillances et les rétablissements, l&#39;incapacité  de prendre en compte les fonctionnements partiels ou les défaillances  partielles, ou l&#39;absence de modèle de fiabilité humaine adéquat à l&#39;égard des  processus décisionnels spécifiques à la GAG. Des précautions s&#39;imposent pour s&#39;assurer  que ces limites soient prises en compte et compensées par des justifications,  des moyens et des études de sensibilité additionnels. </p>  </li>
<li>
<p><strong>Optimiser l&#39;ensemble de scénarios d&#39;accident en vue de le réduire à un nombre gérable de séquences.  </strong></p>
<p>L&#39;ensemble optimisé des scénarios d&#39;accident est l&#39;ensemble qui devrait  être pris en considération dans la conception. Les scénarios d&#39;accident de cet  ensemble contiennent les conditions et les événements nécessaires pour la  conception de stratégies d&#39;atténuation. Les&nbsp;analyses déterministes de ces  séquences fourniront les valeurs numériques pour l&#39;ensemble des paramètres de  conception déterminés. Ces analyses respecteront les exigences et les  orientations énoncées dans le document REGDOC-2.4.1, <em>Analyse déterministe  de sûreté. </em></p>  </li>  </ol>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-abbr">Abréviations</h2>  <dl className="cnsc-glossary">
<dt>AD</dt>
<dd>Accident de dimensionnement</dd>
<dt>AG</dt>
<dd>Accident grave</dd>
<dt>AHD</dt>
<dd>Accident hors dimensionnement</dd>
<dt>AIEA</dt>
<dd>Agence internationale de l&#39;énergie atomique</dd>
<dt>ALARA</dt>
<dd>Principe ALARA (de l&#39;anglais as low as reasonably achievable)</dd>
<dt>ARN</dt>
<dd>Autorité de réglementation nucléaire japonaise</dd>
<dt>CAD</dt>
<dd>Conditions additionnelles de dimensionnement</dd>
<dt>CCSN</dt>
<dd>Commission canadienne de sûreté nucléaire</dd>
<dt>CRR</dt>
<dd>Catégories de réduction des risques</dd>
<dt>EPS</dt>
<dd>Étude probabiliste de sûreté</dd>
<dt>GAG</dt>
<dd>Gestion des accidents graves</dd>
<dt>Groupe CSA</dt>
<dd>Association canadienne de normalisation</dd>
<dt>GRS</dt>
<dd>Gesellschaft für Anlagen-und Reaktorsicherheit </dd>
<dt>IFP</dt>
<dd>Incident de fonctionnement prévu</dd>
<dt>IPSN</dt>
<dd>Institut de Protection et de Sûreté Nucléaire</dd>
<dt>IRSN</dt>
<dd>Institut de Radioprotection et de Sûreté Nucléaire</dd>
<dt>LDGAG</dt>
<dd>Lignes directrices pour la gestion des accidents graves</dd>
<dt>NRC</dt>
<dd>Nuclear Regulatory Commission des États-Unis</dd>
<dt>RAP</dt>
<dd>Recombineurs autocatalytiques passifs</dd>
<dt>SSC</dt>
<dd>Structures, systèmes et composants</dd>
<dt>STUK</dt>
<dd>Autorité finlandaise de sûreté nucléaire et de radioprotection </dd>
</dl>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-12  mrgn-bttm-0">
<h2 className="nocount" id="sec-ref">Références</h2>  <ol>
<li><a href="http://www.nuclearsafety.gc.ca/fra/pdfs/reports/FTFR-CNSC-Integrated-Action-Plan.pdf"><em><u>Commission canadienne de sûreté nucléaire (CCSN), Plan d&#39;action intégré  de la CCSN sur les leçons tirées de l&#39;accident nucléaire de Fukushima Daiichi</u></em></a>, 2013</li>
<li>CCSN,  version 2 du projet RD-337, <em>Conception de nouvelles centrales nucléaires</em>,  2012</li>
<li>CCSN,  REGDOC-2.5.2<em>, </em><a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-2-5-2-Design-of-Reactor-Facilities-Nuclear-Power-Plants-fra.pdf"><em>Conception d&#39;installations dotées de réacteurs&nbsp;: Centrales  nucléaires</em></a>,  2014</li>
<li>CCSN,  REGDOC-2.3.2 <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-2-3-2-Severe-Accident-management-programs-for-nuclear-reactors.pdf"><em>Conduite de l&#39;exploitation&nbsp;: Gestion des accidents&nbsp;: Programme  de gestion des accidents graves touchant les réacteurs nucléaires</em></a><em>, </em>2013</li>
<li>CCSN,  REGDOC-2.4.1, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-2-4-1-Deterministic-Safety-Analysis-fra.pdf"><em>Analyse déterministe de la sûreté</em></a>, 2014</li>
<li>Agence  internationale de l&#39;énergie atomique (AIEA), Guides de sûreté particuliers (Specific  Safety Guides, SSG), SSG-2, <em>Deterministic  Safety Analysis for Nuclear Power Plants</em>, 2009</li>
<li>AIEA,  Collection Rapports de sûreté (<a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1327_web.pdf">Safety Report Series, SRS), SRS no 56, <em><u>Approaches and Tools for Severe  Accident Analysis for Nuclear Power Plants</u></em></a>, 2008</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/20121212-RDGD-210-maintenance-programs-nuclear-power-plants-fra.pdf">RD/GD-210, <em><u>Programmes d&#39;entretien des centrales nucléaires</u></em></a>, 2012</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/June-2012-RDGD-98-Reliability-Programs-for-Nuclear-Power-Plants_f.pdf">RD/GD-98,<em><u> Programmes de fiabilité pour les centrales nucléaires</u></em></a>, 2012</li>
<li>CCSN,  ébauche du document REGDOC-2.3.2, <a href="http://www.cnsc-ccsn.gc.ca/pubs_catalogue/uploads_fre/REGDOC-2-3-2-Severe-Accident-management-programs-for-nuclear-reactors.pdf"><em>Gestion des accidents</em></a>, 2014</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/G225_f.pdf">G-225, <em><u>Planification d&#39;urgence dans les installations nucléaires de catégorie I,  les mines d&#39;uranium et les usines de concentration d&#39;uranium</u></em></a>, 2001</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/rd-353-f.pdf">RD-353, <em><u>Mise à l&#39;épreuve des mesures d&#39;urgence</u></em></a>, 2008</li>
<li>CCSN,  ébauche du document REGDOC-2.10.1, <a href="http://www.nuclearsafety.gc.ca/fra/pdfs/REGDOCS/REGDOC-2-10-1-Emergency-Preparedness-Programs.pdf"><em><u>Préparation et intervention relatives aux urgences nucléaires</u></em></a>, qui devrait être publié à l&#39;automne  2015</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/44019-G276F.pdf">G-276, <em><u>Plan de programme d&#39;ingénierie des facteurs humains</u></em></a>, 2003</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/G278_f.pdf">G-278,<em><u> Plan de vérification et validation des facteurs humains</u></em></a>, 2003</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/DIS-13-01-Modifications-propos%C3%A9es-au-R%C3%A8glement-sur-la-radioprotection.pdf">DIS-13-01, <em><u>Modifications proposées au Règlement sur la radioprotection</u></em></a>, 2013</li>
<li>CCSN,  INFO-0824, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/October-2011-CNSC-Fukushima-Task-Force-Report_f.pdf"><em><u>Rapport du Groupe de travail de la CCSN sur Fukushima</u></em></a>, 2011</li>
<li>Gouvernement  du Canada, <a href="http://laws-lois.justice.gc.ca/PDF/SOR-2000-203.pdf">DORS/2000-203, <em><u>Règlement sur  la radioprotection</u></em></a>, 2000</li>
<li>CCSN, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/RD-360_f_PDF.pdf">RD-360,<em><u> Prolongement de la durée de vie des centrales nucléaires</u></em></a>, 2008</li>  </ol>  <div className="col-md-12  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>  <div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="wb-inv">Notes de bas de page</h2>
<dl>
<dt>Note de bas de page 1</dt>
<dd id="fnb1">
<p><strong>L&#39;autorité en matière de conception de la centrale</strong> revient habituellement à  l&#39;organisation qui assume formellement la responsabilité de la conception.  Avant la mise en marche de la centrale, cette&nbsp;autorité doit être  transférée à l&#39;organisme exploitant. L&#39;autorité responsable de la conception  peut déléguer la responsabilité de la conception de certains aspects de la centrale  à d&#39;autres organismes (appelés concepteurs responsables). Dans ce cas, les  tâches et les fonctions de l&#39;autorité responsable de&nbsp;la conception et de  tout concepteur responsable doivent être décrites dans une documentation  officielle; toutefois, l&#39;autorité responsable de la conception doit conserver  la responsabilité générale de&nbsp;la conception.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>1</a></p>
</dd>
<dt>Note de bas de page 2</dt>
<dd id="fnb2">
<p><strong>Caractéristique de conception  complémentaire&nbsp;:</strong> Élément ajouté à la conception sous forme de SSC  autonome ou ajouté à un SSC déjà en place pour prendre en considération les  CAD.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>2</a></p>
</dd>
<dt>Note de bas de page 3</dt>
<dd id="fnb3">
<p><strong>L&#39;applicabilité</strong> est indiquée en  démontrant que les hypothèses, les modèles, les règles, etc. utilisés pour  produire les données de l&#39;EPS sont compatibles avec l&#39;utilisation de ces  données.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>3</a></p>
</dd>
<dt>Note de bas de page 4</dt>
<dd id="fnb4">
<p><strong>Groupe CSA&nbsp;: </strong>Dénomination  actuellement utilisée pour désigner l&#39;Association canadienne de normalisation.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>4</a></p>
</dd>
<dt>Note de bas de page 5</dt>
<dd id="fnb5">
<p>Le  document SSR-2/1 est en cours de révision depuis l&#39;accident de Fukushima. Des  changements devraient être apportés aux exigences relatives aux CAD, aux  piscines de combustible usé, aux&nbsp;tranches multiples et aux dispositions  relatives aux événements externes. </p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>5</a></p>
</dd>
<dt>Note de bas de page 6</dt>
<dd id="fnb6">
<p>L&#39;IPSN  fait maintenant partie de l&#39;Institut de Radioprotection et de Sûreté Nucléaire  (IRSN)</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>6</a></p>
</dd>
<dt>Note de bas de page 7</dt>
<dd id="fnb7">
<p><strong>Corium&nbsp;</strong>: Mélange en fusion  ressemblant à de la lave, composé de parties du cœur du réacteur nucléaire.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Retour à la référence de la note de bas de page </span>7</a></p>
</dd>
</dl>
</section>  </div>
</div>
<div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }