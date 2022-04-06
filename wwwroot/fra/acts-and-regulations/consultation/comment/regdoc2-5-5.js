import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.5.5 : Conception des installations de gammagraphie industrielle", 
                dateModified: "2017-01-30",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-5-5"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Préface</h2>
<p>Ce document dapplication de la réglementation fait partie de la série de documents dapplication de la réglementation de la CCSN intitulée Conception matérielle, qui porte également sur la conception des mines et usines de concentration duranium, des installations dotées de réacteurs, des laboratoires de substances nucléaires et des salles de médecine nucléaire. La liste complète des séries figure à la fin de ce document et elle peut être consultée à partir du <a href="/fra/acts-and-regulations/regulatory-documents/index#R13">site Web de la CCSN</a>.</p>
<p>La gammagraphie industrielle consiste en lutilisation de sources scellées renfermant des substances nucléaires présentant un risque important, le plus souvent du cobalt 60, de liridium 192 et du sélénium 75, pour évaluer la structure interne et lintégrité des métaux et dautres matériaux dans les pipelines, les soudures, les moulages et les structures des bâtiments.</p>
<p>Une installation de gammagraphie est une enceinte, une cellule ou une voûte blindée dans laquelle des travaux de gammagraphie sont réalisés. Ces enceintes blindées peuvent être très efficaces pour éviter ou réduire le plus possible les doses reçues par les opérateurs et les personnes se trouvant à proximité. Les installations de gammagraphie peuvent également offrir un niveau de sûreté supplémentaire en empêchant laccès non autorisé durant lexploitation.</p>
<p>Le document REGDOC-2.5.5, <em>Conception des installations de gammagraphie industrielle</em>, fournit de lorientation sur la conception des installations de gammagraphie. Ces renseignements aideront les personnes à concevoir et à construire des installations pouvant être utilisées en toute sécurité. Ils permettront aussi de sassurer que les doses reçues par les opérateurs dappareil dexposition accrédités, les travailleurs et toutes les personnes se trouvant à proximité des travaux en cours se situent à lintérieur des limites réglementaires et sont maintenues au niveau le plus bas quil soit raisonnablement possible datteindre.</p>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul></li>
<li><a href="#sec2">2. Principes g&eacute;n&eacute;raux en mati&egrave;re de conception</a></li>
<li><a href="#sec3">3. Mesures d&rsquo;ing&eacute;nierie</a>
<ul>
<li><a href="#sec3-1">3.1 Contr&ocirc;les de l&rsquo;exposition au rayonnement</a></li>
<li><a href="#sec3-2">3.2 Consid&eacute;rations structurales</a></li>
<li><a href="#sec3-3">3.3 Accessibilit&eacute;</a></li>
<li><a href="#sec3-4">3.4 Mesures de s&eacute;curit&eacute;</a></li>
</ul></li>
<li><a href="#sec4">4. Contr&ocirc;les administratifs</a>
<ul>
<li><a href="#sec4-1">4.1 Imposition de limites concernant le type et l&rsquo;activit&eacute; maximale des substances nucl&eacute;aires</a></li>
<li><a href="#sec4-2">4.2 Usage restreint des zones adjacentes &agrave; l&rsquo;installation de gammagraphie</a></li>
<li><a href="#sec4-3">4.3 Contr&ocirc;le de la pr&eacute;sence de personnes avant l&rsquo;exposition</a></li>
</ul></li>
<li><a href="#sec5">5. Construction</a></li>
<li><a href="#sec6">6. Mise en service</a></li>
<li><a href="#sec7">7. Exploitation</a>
<ul>
<li><a href="#sec7-1">7.1 Examens et entretien de routine</a></li>
<li><a href="#sec7-2">7.2 &Eacute;valuation permanente de la conception</a></li>
</ul></li>
<li><a href="#appA">Annxe&nbsp;A : Calcul des doses</a>
<ul>
<li><a href="#appA1">A.1 M&eacute;thode en cinq &eacute;tapes</a></li>
<li><a href="#appA2">A.2 Exemple de calcul des doses</a></li>
</ul></li>
<li><a href="#gloss">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
<li><a href="#addInfo">Renseignements compl&eacute;mentaires</a></li>
</ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>La gammagraphie industrielle est une méthode non destructive permettant de détecter la présence de défauts dans les matériaux par lexamen de la structure de soudures, de moulages et de composants de bâtiments. Le personnel accrédité utilise des appareils dexposition homologués renfermant des substances nucléaires scellées de haute activité.</p>  <p>Les activités de gammagraphie industrielle ont lieu à divers endroits et dans différentes conditions environnementales. Les travaux sont réalisés à lintérieur de bâtiments dans des conditions contrôlées ainsi que sur le terrain, dans des conditions météorologiques défavorables. Les titulaires de permis doivent assurer la mise en place de mesures efficaces pour limiter lexposition au rayonnement de toute personne en raison des activités de gammagraphie, quel que soit lendroit où elles sont menées.</p>  <p>Dans la mesure du possible, léquipement de gammagraphie industrielle devrait être utilisé à lintérieur dune installation de gammagraphie industrielle afin de protéger les travailleurs et de réduire le plus possible lexposition de toute autre personne au rayonnement.</p>  <p>Tous les principes de conception décrits dans les sections qui suivent sappliquent à toute installation de gammagraphie, quelle soit temporaire ou permanente. Ceci permet de sassurer que linstallation de gammagraphie fonctionne comme prévu et offre le niveau de sécurité nécessaire pour contrôler les expositions au rayonnement. Toutes les exigences réglementaires de la CCSN, y compris celles propres à la gammagraphie, sappliquent à toutes les utilisations de substances nucléaires et dappareils rayonnement dans une installation de gammagraphie.</p>  <p>Les installations de gammagraphie doivent respecter tous les codes de sécurité applicables à léchelle nationale, provinciale, territoriale et municipale, y compris ceux concernant les bâtiments et la prévention des incendies. Lorientation fournie par le présent document dapplication de la réglementation ne remplace pas les exigences de quelque autre autorité compétente que ce soit.</p>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le présent document dapplication de la réglementation fournit de lorientation sur la conception dune installation de gammagraphie industrielle.</p>
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
<h3 id="sec1-2">1.2 Portée</h3>  <p>Lorientation présentée sapplique à la conception dinstallations de gammagraphie industrielle pour lutilisation de substances nucléaires scellées, y compris les structures fixes (permanentes) et temporaires, et à la conception dinstallations ne se trouvant pas sous le contrôle direct dune ou de personne(s) accréditée(s) menant les activités de gammagraphie.</p>
<p>Le présent document ne sapplique pas à la conception dinstallations pour :</p>
<ul>
<li>lutilisation de substances nucléaires scellées réglementées en vertu du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-205/page-1.html"><em>Règlement sur les installations nucléaires et léquipement réglementé de catégorie II</em></a></li>
<li>la neutronographie</li>
</ul>  <p>Les provinces et territoires réglementent lutilisation des générateurs de rayons X pour la gammagraphie industrielle. La conception dinstallations pour leur utilisation ne fait pas lobjet du présent document.</p>  <p>Le REGDOC-2.5.5 aborde les caractéristiques de conception qui améliorent la sûreté et la sécurité nucléaires. Pour dautres considérations relatives à la santé, à la sûreté et à lenvironnement, il pourrait être nécessaire de respecter des principes directeurs additionnels.<p>
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
<h3 id="sec1-3">1.3 Législation pertinente</h3>  <p>Les dispositions suivantes des règlements pris en vertu de la Loi sur la sûreté et la réglementation nucléaires sappliquent au présent document :</p>
<ol>
<li>Lalinéa 12(1)c) du <em>Règlement général sur la sûreté et la réglementation nucléaires</em> stipule que : « Le titulaire de permis :
<ul className="list-bullet-none">
<li>c) prend toutes les précautions raisonnables pour protéger lenvironnement, préserver la santé et la sécurité des personnes et maintenir la sécurité des installations nucléaires et des substances nucléaires; ... » </li>
</ul></li>
<li>Lalinéa 3(1)d) du <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em> (RSNAR) énonce que : « La demande de permis visant une substance nucléaire ou un appareil à rayonnement, autre quun permis dentretien dun appareil à rayonnement, comprend ... d) lemplacement proposé pour lactivité que visera le permis, de même quune description du lieu; ». </li>
<li>Larticle 24 du RSNAR stipule ce qui suit : « Il est interdit à quiconque de faire fonctionner un appareil dexposition à moins dêtre un opérateur dappareil dexposition accrédité ou un stagiaire agissant sous la surveillance directe et continue dun tel opérateur. »</li>
<li>Le paragraphe 30(6) du RSNAR prévoit que : « Le titulaire de permis limite à 0,1 mSv par semaine et à 0,5 mSv par année la dose de rayonnement que reçoit une personne, autre quun travailleur du secteur nucléaire, en raison de la possession ou de lutilisation dun appareil dexposition. »</li>
<li>Les alinéas 31(1)i), j) et k) du RSNAR indiquent que : « Lopérateur dun appareil dexposition :
<ul className="list-bullet-none">
<li>i) limite à 0,1 mSv par semaine et à 0,5 mSv par année la dose de rayonnement que reçoit toute personne, autre quun travailleur du secteur nucléaire, en raison de la possession ou de lutilisation de lappareil dexposition;</li>
<li>j) place des personnes ou érige des barrières pour interdire laccès à toute zone où le débit de dose de rayonnement est supérieur à 0,1 mSv par heure en raison de la possession ou de lutilisation de lappareil dexposition;</li>
<li>k) pose un nombre suffisant de panneaux durables et lisibles sur lesquels figurent le symbole de mise en garde contre les rayonnements figurant à lannexe 3 du <em>Règlement sur la radioprotection</em> et la mention « RAYONNEMENT &ndash; DANGER &ndash; RADIATION » pour interdire laccès à toute zone où le débit de dose de rayonnement est supérieur à 0,1 mSv par heure en raison de la possession ou de lutilisation de lappareil dexposition; »</li>
</ul></li>
<li>Larticle 4 du <em>Règlement sur la radioprotection</em> stipule ce qui suit : « Le titulaire de permis met en œuvre un programme de radioprotection et, dans le cadre de ce programme :
<ul className="list-bullet-none">
<li>a) maintient le degré dexposition aux produits de filiation du radon ainsi que la dose efficace et la dose équivalente qui sont reçues par la personne, et engagées à son égard, au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs économiques et sociaux, par :
<ol className="list-bullet-none">
<li>(i)  la maîtrise des méthodes de travail par la direction,</li>
<li>(ii) les qualifications et la formation du personnel,</li>
<li>(iii) le contrôle de lexposition du personnel et du public au rayonnement,</li>
<li>(iv) la préparation aux situations inhabituelles;</li>
</ol></li>
<li>b) détermine la quantité et la concentration des substances nucléaires rejetées par suite de lexercice de lactivité autorisée :
<ol className="list-bullet-none">
<li>(i) par mesure directe résultant du contrôle,</li>
<li>(ii) par évaluation, lorsque le temps et les ressources exigés pour une mesure directe sont trop importants par rapport à son utilité. »</li>
</ol></li>
</ul></li>
<li>Larticle 21 du <em>Règlement sur la radioprotection</em> stipule ce qui suit : « Le titulaire de permis place et maintient aux limites et à chaque point daccès dune zone, dune pièce ou dune enceinte un panneau durable et lisible portant le symbole de mise en garde contre les rayonnements figurant à lannexe 3 et la mention « RAYONNEMENT &ndash; DANGER &ndash; RADIATION » dans les cas suivants :
<ul className="list-bullet-none">
<li>a)	il sy trouve des substances nucléaires radioactives en quantité supérieure à 100 fois la quantité dexemption;</li>
<li>b)	il y a un risque vraisemblable quune personne sy trouvant soit exposée à un débit de dose efficace supérieur à 25 &micro;Sv/h. »</li>
</ul></li>
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
<h2 id="sec2">2. Principes généraux en matière de conception</h2>  <p>Les principes de conception des installations de gammagraphie industrielle sont fondés sur lexigence voulant que tous les opérateurs et titulaires de permis dappareil dexposition doivent veiller à ce que toute exposition au rayonnement causée par des activités de gammagraphie demeure en deçà des limites fixées par les règlements pris en vertu de la <em>Loi sur la sûreté et la réglementation nucléaires</em>. De plus, tous les efforts possibles doivent être déployés pour réduire les expositions et les doses au niveau le plus bas quil soit raisonnablement possible datteindre (principe ALARA), conformément aux exigences de lalinéa 4a) du <em>Règlement sur la radioprotection</em>. Pour de plus amples renseignements sur le principe ALARA, veuillez consulter le guide dapplication de la réglementation de la CCSN G-129, révision 1, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnablement possible datteindre (ALARA) »</em> [1]. Les titulaires de permis et les opérateurs dappareils dexposition accrédités (OAEA) sont tenus de limiter à 0,1 mSv par semaine et à 0,5 mSv par année la dose de rayonnement que reçoit toute personne, autre quun travailleur du secteur nucléaire (TSN).</p>  <p>La conception dune installation de gammagraphie comprend la prise en considération de facteurs autres que ceux manifestement liés à la réduction de lexposition au rayonnement. Tous les facteurs pertinents, y compris la charge de travail, laccessibilité et les facteurs structuraux et économiques, devraient être pris en considération durant la phase de conception de linstallation de gammagraphie. Lévaluation de ces facteurs contribuera à garantir que le produit final est efficace et peut être utilisé aisément et en toute sécurité par les OAEA, tout en assurant la protection nécessaire de toute autre personne se trouvant à proximité des activités de gammagraphie. Ces facteurs devraient être évalués pour les besoins présents et à venir des personnes utilisant linstallation.</p>  <p>Il existe deux méthodes permettant de limiter le plus possible lexposition au rayonnement : lapplication de mesures dingénierie (blindage, emplacement, etc.) et lapplication de contrôles administratifs (p. ex. limiter lactivité des substances nucléaires de la source scellée, restreindre laccès à linstallation et le temps passé à proximité de celle-ci). La conception dune installation de gammagraphie devrait, dans la mesure du possible, privilégier lutilisation de mesures dingénierie qui sont toujours fonctionnelles. Des contrôles administratifs, qui doivent être constamment appliqués, peuvent servir de contrôles supplémentaires lorsque les mesures dingénierie sont insuffisantes ou ne sont pas applicables. Par exemple, il est préférable détablir une zone dexclusion permanente intégrée à la conception plutôt que détablir un système de barrières qui doit être surveillé par une ou plusieurs personnes.</p>  <p>Les mesures dingénierie comprennent :</p>
<ul>
<li>les contrôles de lexposition au rayonnement
<ul>
<li>la distance</li>
<li>le blindage</li>
<li>leffet de ciel</li>
</ul></li>
<li>les considérations structurales
<ul>
<li>les murs, la toiture, les portes ou accès</li>
<li>le plancher</li>
<li>les services (délectricité, deau, dégout, pneumatiques, hydrauliques, etc.)</li>
<li>les ouvertures et les pénétrations dans les murs</li>
</ul></li>
<li>laccessibilité
<ul>
<li>les dimensions et le poids des appareils dexposition</li>
<li>les dimensions et la forme des matériaux à examiner</li>
</ul></li>
<li>les mesures de sécurité</li>
</ul>  <p>Les contrôles administratifs comprennent :</p>
<ul>
<li>limposition de limites sur le type et lactivité des substances nucléaires</li>
<li>lusage restreint des zones adjacentes à linstallation de gammagraphie</li>
<li>lajustement de la charge de travail (y compris les considérations relatives à la période de la journée)</li>
<li>le contrôle de loccupation des zones avoisinantes</li>
<li>la limitation de la position et de la direction de la source dans linstallation</li>
<li>le contrôle de la présence de personnes avant lexposition</li>
</ul>  <p>Le propriétaire de linstallation de gammagraphie devrait sassurer que les panneaux de sécurité appropriés, les avis, les barrières et les documents connexes concernant tout contrôle administratif soient à la disposition de toutes les personnes qui auront besoin de connaître les limites de sécurité particulières imposées, y compris les opérateurs utilisant linstallation ou toute autre personne pouvant pénétrer dans la zone.</p>
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
<h2 id="sec3">3. Mesures dingénierie</h2>  <p>La conception de linstallation de gammagraphie devrait intégrer les mesures dingénierie qui suivent pour sassurer que les limites dexposition prescrites seront respectées et que toutes les expositions sont maintenues au niveau ALARA.</p>
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
<h3 id="sec3-1">3.1 Contrôles de lexposition au rayonnement</h3>  <h4>3.1.1 Distance</h4>  <p>Le fait de modifier la distance entre la source de rayonnement et la position du détecteur de rayonnement entraînera des changements importants au niveau de lexposition au rayonnement, car lexposition est inversement proportionnelle au carré de la distance par rapport à la source. Par exemple, en supposant que les autres variables demeurent constantes, le fait de doubler la distance par rapport à la source de rayonnement permettra de réduire par quatre la dose de rayonnement. Lors de la planification de la conception et de lemplacement, les installations de gammagraphie industrielle devraient être situées aussi loin que possible des lieux de travail et des endroits qui seraient vraisemblablement occupés quand des activités de gammagraphie ont cours.</p>   <p>La conception de linstallation devrait également faciliter la capacité dutiliser la longueur totale du câble de commande de chaque appareil dexposition utilisé et ne devrait pas gêner ou restreindre lutilisation des outils à longs manches permettant dintervenir en cas durgence, comme les activités de récupération des sources.</p>
<h4>3.1.2 Blindage</h4>  <p>Lutilisation de blindage autour de la source de rayonnement permettra de réduire les expositions au rayonnement et, par conséquent, toute dose de rayonnement qui en résulte. En général, pour tout matériau donné, plus le blindage placé entre la personne et la source est épais, plus lexposition de cette personne au rayonnement est faible. Le choix du blindage dépend de la quantité et de lénergie du rayonnement à absorber et comporte généralement des considérations dordre structural et économique. Les substances nucléaires utilisées en gammagraphie industrielle émettent des rayons gamma de haute énergie de sorte que ces substances nucléaires nécessitent des épaisseurs importantes de plomb ou de béton pour réduire les niveaux de rayonnement à des niveaux acceptables.</p>  <p>Le blindage dune installation de gammagraphie devrait être conçu en se fondant sur lactivité maximale prévue de chaque substance nucléaire qui sera utilisée dans linstallation.</p>   <p>Pour chaque substance nucléaire donnée, la dose de rayonnement est directement proportionnelle à lactivité de la source et ce rapport est représenté par une valeur appelée la constante du rayonnement gamma.</p>   <p>Le tableau 1 présente les valeurs de la constante du rayonnement gamma exprimées en microsieverts par heure (&micro;Sv/h) à 1 mètre par gigabecquerel (GBq) dactivité dun isotope. Ces valeurs sont tirées du document intitulé <span lang="en"><em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em></span> [2], publié par la Commission internationale de protection radiologique, et du document intitulé <span lang="en"><em>Joint Evaluated Fission and Fusion File</em></span> (JEFF) 3.1 publié par Nucleonica GmbH [3].</p>
<table className="">  <caption className="text-left"><strong>Tableau 1 : Valeurs de la constante du rayonnement gamma des substances nucléaires couramment utilisées en gammagraphie industrielle</strong></caption>  <tr>
<th>Substance nucléaire</th>
<th>Valeur de la constante du rayonnement gamma<br />
(&micro;Sv/h par GBq à 1 m)</th>  </tr>  <tr>
<td>Cobalt 60</td>
<td className="text-center">305</td>  </tr>  <tr>
<td>Iridium 192</td>
<td className="text-center">117</td>  </tr>  <tr>
<td>Césium 137</td>
<td className="text-center">78</td>  </tr>  <tr>
<td>Sélénium 75</td>
<td className="text-center">56</td>  </tr>  <tr>
<td>Ytterbium 169</td>
<td className="text-center">52</td>  </tr>  </table>
<p>La constante du rayonnement gamma et lactivité connue de la substance nucléaire peuvent être utilisées pour calculer lexposition potentielle au rayonnement des personnes se trouvant à proximité de la substance nucléaire. Par exemple, il est possible de déterminer quune source scellée de 10 GBq diridium 192 entraînera un débit de dose efficace correspondant à 1 170 µSv/h (ou 1,17 mSv/h) à 1 mètre de la source scellée. Des corrections doivent être appliquées lorsque la distance change et que du blindage est installé entre la source et le lieu de la mesure. Les expositions à dautres distances de la source scellées peuvent être calculées en utilisant la loi de linverse des carrés<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>.</p>  <p>Des sources de rayonnement gamma de plus haute énergie (comme le cobalt 60) exigeront plus de blindage que des sources de rayonnement gamma de plus faible énergie (comme le sélénium 75). De même, des quantités plus importantes dune substance nucléaire particulière nécessiteront de plus grandes quantités de blindage pour réduire la dose au même niveau quune quantité plus faible de cette même substance nucléaire.</p>  <p>Le plomb et le béton constituent des types de blindage efficaces pour réduire les débits de doses liés au rayonnement gamma émis par les sources scellées utilisées en gammagraphie industrielle. Quel que soit le type de blindage utilisé, il devrait être constitué dun matériau solide dépourvu de fissures, de trous ou de vides.</p>   <p>En cas dutilisation de blocs de blindage, ces derniers devraient être disposés de manière à éviter la présence despaces ou de vides entre les blocs. Tout écart, vide ou espace entre les blocs de blindage devrait être rempli dune quantité suffisante de blindage similaire ou de qualité supérieure pour assurer lefficacité du blindage. Si au moins deux murs de blindage constitués de blocs de plomb ou de béton sont utilisés, les joints devraient être décalés pour empêcher le plus possible que le rayonnement ne traverse les murs en passant par les joints. En cas dutilisation dun blindage de plomb dans les murs, la feuille de plomb devrait être soutenue correctement afin déviter quelle ne se déplace ou quitte sa position initiale étant donné que le plomb a tendance à saffaisser ou à glisser au fil du temps.</p>  <p>Comme le rayonnement se déplace dans toutes les directions, il faudrait envisager un blindage dans toutes les zones adjacentes, y compris au-dessus et en dessous de linstallation de gammagraphie, le cas échéant.</p>  <p>Si la conception ne fournit pas ou ne peut pas fournir un blindage suffisant pour respecter la limite de débit de dose de 0,1 mSv/semaine ou 0,5 mSv/année et ne démontre pas le respect du principe ALARA, des contrôles administratifs supplémentaires, tels quune zone dexclusion plus grande, devront être établis et appliqués pendant les activités de gammagraphie. Voir le guide G 129, rév. 1, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnement possible datteindre (ALARA)</em> » [1] pour de lorientation sur lapplication du principe ALARA.</p>  <p>Lannexe A présente une méthode de calcul des expositions au rayonnement fondée sur la conception de linstallation.</p>
<h4>3.1.3 Effet de ciel</h4>  <p>Leffet de ciel (ou « skyshine ») peut constituer une source importante dexposition au rayonnement quand de grandes sources scellées sont utilisées sans blindage au-dessus delles. Leffet de ciel est le rayonnement provenant de linstallation, émis vers le haut puis réfléchi vers le bas par lair (voir la figure 1). En général, les installations de gammagraphie devraient être conçues avec une toiture blindé afin de minimiser leffet de ciel et de réduire lexposition professionnelle des travailleurs et des autres personnes.</p>
<p><strong>Figure 1: Rayonnement émis par effet de ciel</strong></p>
<div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/fig1-skyshine-radiation.png" alt="Rayonnement émis par effet de ciel" />  </div>  <div className="clear"></div>
<p>Le débit de dose maximal de leffet de ciel ne se produit pas nécessairement à proximité immédiate du mur blindé, mais peut atteindre une distance du mur et pourrait également atteindre tout poste de travail élevé entourant linstallation.</p>  <p>Lorsquune installation présente une toiture minimale (par exemple, pour protéger des intempéries) ou est dépourvue de blindage sur la toiture, la conception devrait tenir compte de lexposition potentielle au rayonnement causée par leffet de ciel.</p>  <p>Lorsque leffet de ciel est une source importante dexposition au rayonnement, la conception de la toiture devra inclure une quantité suffisante de blindage efficace. Dans ce cas, la conception de linstallation devra comprendre une structure appropriée pour soutenir le poids supplémentaire du blindage utilisé dans la toiture.</p>  <p>Si lexposition à leffet de ciel est importante, mais quil nest pas pratique dinstaller ou de blinder la toiture, laccès aux zones adjacentes devrait être limité ou interdit en utilisant des mesures dingénierie (p. ex. des moniteurs de mise en garde contre le rayonnement), des contrôles administratifs (p. ex. accès limité à la zone) ou une combinaison des deux.</p>  <p>Lévaluation du potentiel deffet de ciel dune installation de gammagraphie est un calcul complexe et le propriétaire est encouragé à consulter un professionnel possédant lexpérience et les connaissances nécessaires pour exécuter ce travail de façon compétente.</p>
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
<h3 id="sec3-2">3.2 Considérations structurales</h3>  <h4>3.2.1 Murs, planchers, toiture et portes</h4>  <p>Comme pour nimporte quelle construction, les considérations structurales devraient être prises en compte au moment de la conception et réévaluées régulièrement durant la construction et lexploitation de linstallation. Étant donné que les installations de gammagraphie impliquent habituellement lutilisation dimportantes quantités de matériaux lourds tels que le blindage, elles devraient être conçues et exploitées en tenant compte des considérations structurales. Ceci comprend notamment :</p>
<ul>
<li>des murs autoportants, contigus et qui ne vont pas sécrouler</li>
<li>des murs et des supports présentant une base suffisante pour empêcher tout affaissement, effondrement ou autre détérioration causée par le tassement du sol</li>
<li>des supports ou des fondations adéquatement protégés contre les effets du soulèvement dû au gel ou au gel du sol</li>
<li>des planchers présentant une capacité suffisante pour résister aux charges statiques et dynamiques qui seront imposées par le poids du blindage exigé pour les murs et les structures portantes de la toiture</li>
<li>les portes qui contiennent du blindage peuvent être poussées ou tirées facilement et en toute sécurité par une seule personne</li>
<li>des entrées dune largeur et dune hauteur suffisantes pour accueillir les personnes et léquipement</li>
<li>une toiture permettant de soutenir de manière adéquate le blindage et les autres charges nécessaires</li>
<li>un recul suffisant par rapport aux limites de la propriété et des bâtiments pour permettre daccéder aux zones de desserte adjacentes</li>
</ul>   <p>Les ouvertures dans le blindage de linstallation de gammagraphie pour les portes daccès du personnel et de léquipement ne devraient pas compromettre le blindage assuré par les murs. Ceci peut exiger lutilisation dune porte suffisamment blindée. Cependant, si le rayonnement de lappareil dexposition est dirigé directement vers la porte, le blindage de la porte peut la rendre trop lourde ou trop difficile à actionner en toute sécurité. Dans la mesure du possible, lentrée dune installation de gammagraphie devrait être conçue en suivant un parcours indirect vers la zone où les activités de gammagraphie seront réalisées, également connu sous le nom d« entrée de labyrinthe » (voir la figure 2). Lutilisation dune entrée de labyrinthe minimise toute fuite de rayonnement par lentrée de linstallation de gammagraphie et peut également réduire le besoin dinstaller des couches de béton ou de plomb épaisses et lourdes dans la porte de linstallation de gammagraphie. En outre, lutilisation dune porte de labyrinthe réduit la quantité de rayonnement pouvant séchapper de linstallation de gammagraphie lorsque lopérateur dappareil dexposition a besoin daccéder à lappareil de gammagraphie.</p>  <p>La présence potentielle de rayonnement diffusé à lentrée du labyrinthe devrait être évaluée pour déterminer sil convient dajouter une protection supplémentaire, telle quune porte blindée.</p>
<p><strong>Figure 2: Conception dune installation de gammagraphie avec entrée de labyrinthe</strong></p>  <div className="col-md-3 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/fig2-maze-entrance.png" alt="Conception dune installation de gammagraphie avec entrée de labyrinthe" />  </div>  <div className="clear"></div>
<p>Linstallation de gammagraphie doit être conçue, construite et exploitée conformément à toutes les exigences fédérales, provinciales, territoriales ou municipales relatives à de telles structures. En particulier, toutes les exigences applicables des codes du bâtiment et de prévention des incendies doivent être respectées.</p>
<h4>3.2.2 Services</h4>  <p>La conception de linstallation de gammagraphie devrait tenir compte de la prestation des services actuels et futurs. Ceux-ci comprennent :</p>
<ul>
<li>le câblage électrique pour :
<ul>
<li>léclairage général et léclairage localisé</li>
<li>le fonctionnement des appareils dexposition</li>
<li>le fonctionnement dautre équipement</li>
<li>les données</li>
<li>les systèmes de contrôle</li>
<li>les systèmes dalarme</li>
<li>les systèmes de suivi</li>
</ul></li>
<li>leau :
<ul>
<li>froide</li>
<li>chaude</li>
<li>distillée ou désionisée</li>
<li>égouts ou eaux usées</li>
</ul></li>
<li>lair :
<ul>
<li>le chauffage, la ventilation et la climatisation (CVC)</li>
<li>lair compressé</li>
</ul></li>
<li>le combustible :
<ul>
<li>les éléments chauffants</li>
<li>lalimentation dautre équipement</li>
</ul></li>
</ul>
<h4>3.2.3 Ouvertures, pénétrations et excavations</h4>  <p>Lorsquun branchement ou une autre ouverture est nécessaire pour donner accès à lintérieur de linstallation de gammagraphie, il faudrait que la conception puisse démontrer que la pénétration dans le blindage ne compromet pas le niveau prévu de protection offert par la conception du blindage. Toute pénétration dans le blindage ne devrait pas suivre une ligne droite directement dans le blindage, mais devrait traverser celui-ci sous forme darc ou en oblique. Toute pénétration qui doit traverser le blindage en ligne droite (tels que les conduits de CVC) devrait se faire en haut du mur de blindage ou ailleurs afin déviter lexposition potentielle de toute personne se trouvant à lextérieur de linstallation. Les espaces autour des tuyaux ou des conduits devraient être remplis de plomb ou de béton pour minimiser si possible le diamètre des pénétrations.</p>  <p>Lorsquil faut effectuer une excavation pour installer une conduite de branchement, le plancher devrait être restauré afin que la zone réparée ne compromette pas lintégrité structurale de linstallation. Toute excavation sous le niveau du plancher devrait être remblayée avec des matériaux en quantité et de densité suffisantes pour fournir le même support structural ou un support structural meilleur que le plancher intact.</p>  <p>En général, les commandes destinées au réglage de léquipement de linstallation de gammagraphie devraient être situées à lextérieur de cette installation. Une telle disposition nécessitera une pénétration dans linstallation.</p>
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
<h3 id="sec3-3">3.3 Accessibilité</h3>  <h4>3.3.1 Dimensions et poids des appareils dexposition</h4>  <p>La conception de linstallation devrait tenir compte des caractéristiques physiques de lappareil dexposition qui sera utilisé. En raison de leur petite dimension, les appareils qui utilisent de liridium 192 et du sélénium 75 sont moins susceptibles dexiger une conception spéciale que les appareils dexposition au cobalt 60, plus grands et plus lourds. Si un appareil dexposition est difficile à manipuler ou à déplacer, la conception de linstallation devrait comprendre des mesures telles que des corridors plus larges pour permettre de déplacer et de tourner lappareil.</p>  <p>La conception de linstallation devrait également permettre le remplacement des sources de rayonnement, en tenant compte des conteneurs supplémentaires et des autres colis éventuellement nécessaires pour procéder au remplacement de la source. Lorsquil nest pas possible de retirer lappareil dexposition pour remplacer la source scellée, la conception de linstallation devrait permettre dapporter dans linstallation une nouvelle source dans un conteneur blindé ou un autre colis, douvrir ceux-ci en toute sécurité et de remplacer lancienne source tout en réduisant lexposition potentielle de toute personne se trouvant à proximité.</p>  <p>Sil nest pas possible de concevoir linstallation pour accueillir une variété dappareils dexposition susceptibles dêtre utilisés, le propriétaire de linstallation de gammagraphie devra peut-être limiter les substances nucléaires utilisées, la quantité dun isotope particulier ou les dimensions de lappareil dexposition.</p>
<h4>3.3.2 Dimensions et poids des matériaux à examiner</h4>  <p>Étant donné que la gammagraphie industrielle consiste en lexamen de lintégrité structurale ou la disposition dun autre objet, linstallation de gammagraphie devrait être conçue pour permettre lentrée et la sortie des objets quil est prévu dévaluer. Cela peut inclure :</p>
<ul>
<li>une entrée dont la conception permettra un accès aisé à laide de chariots, de chariots élévateurs ou dautres moyens de transport</li>
<li>des moyens daccès par le haut pour soulever des objets à lintérieur et à lextérieur de linstallation de gammagraphie, y compris une grue ou un moyen de levage approprié</li>
<li>une section spéciale amovible du mur ou du plafond pour permettre lentrée et la sortie peu fréquente de tels objets sans pour autant compromettre le blindage prévu de linstallation</li>
<li>un support suffisant pour les grues ou engins de levage permettant de déplacer des objets lourds ou encombrants aux fins dexamen</li>
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
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Mesures de sécurité</h3>  <p>Les appareils dexposition utilisés dans des installations de gammagraphie contiennent souvent des sources radioactives scellées à risque élevé de catégorie 1 ou 2. Bien que linstallation de gammagraphie en elle-même ne soit pas assujettie aux exigences du document REGDOC 2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em> [4], il est recommandé que les concepts de sécurité intégrés dans la conception renforcent les mesures de sécurité déjà intégrées dans lappareil dexposition. Dans certains cas, lorsquun titulaire de permis utilise un appareil dexposition exclusivement dans une installation de gammagraphie, les caractéristiques de linstallation peuvent être utilisées pour se conformer et démontrer sa conformité aux exigences du document REGDOC-2.12.3 (comme le fait de prévoir des systèmes dalarme ou des locaux de stockage sécurisés).</p>  <p>Le document REGDOC-2.12.3 décrit les exigences réglementaires liées à la sécurité applicables au programme de sécurité des substances nucléaires scellées du titulaire de permis et fournit des indications générales pour aider les titulaires de permis à respecter ces exigences.</p>   <p>Le tableau 2 identifie les pratiques exemplaires pour lintégration de dispositifs de sécurité dans linstallation afin de se conformer aux exigences. Ces pratiques exemplaires supposent que linstallation de gammagraphie ne sert pas à entreposer des appareils dexposition. Si des appareils dexposition sont entreposés dans linstallation, dautres exigences du document REGDOC-2.12.3 sappliquent. Dautres mesures de conception, déjà mentionnées dans dautres sections du présent document, peuvent être utilisées et sont semblables à celles proposées au tableau 2.</p>
<table className="width-100">  <caption className="text-left"><strong>Tableau 2 : Pratiques exemplaires en matière de sécurité intégrée à la conception des installations de gammagraphie</strong></caption>  <tr>
<th className="text-center text-center">Sous-section du programme de sécurité</th>
<th className="text-center text-center">Pratique exemplaire en matière de sécurité intégrée à la conception</th>  </tr>  <tr>
<td>Contrôle de laccès</td>
<td><ul>
<li>Laccès aux appareils dexposition se trouvant dans linstallation de gammagraphie doit être limité aux seuls utilisateurs autorisés.</li>
<li>Linstallation de gammagraphie pourrait comprendre des mesures de contrôle de laccès telles que des postes ou des points daccès verrouillés à clé ou munis dun dispositif électronique, ou permettre une surveillance visuelle constante des points daccès lorsque les appareils dexposition sont utilisés dans linstallation.</li>
</ul></td>  </tr>  <tr>
<td>Système de détection dintrusion</td>
<td><ul>
<li>Linstallation de gammagraphie pourrait comprendre un système de détection qui informe immédiatement lopérateur dun accès non autorisé à linstallation. Il est également possible dutiliser des mesures de conception équivalentes, permettant par exemple une surveillance visuelle continue.</li>
</ul></td>  </tr>  <tr>
<td>Périmètre ou barrière physique</td>
<td><ul>
<li>Linstallation de gammagraphie pourrait avoir des mesures de sécurité qui, lorsquelles sont utilisées avec un appareil dexposition, empêchent le retrait non autorisé de lappareil de lenceinte. Il pourrait sagir de cages de stockage ou de dispositifs dattache pour les chaînes fixées à lappareil dexposition.</li>
</ul></td>  </tr>  <tr>
<td>Sécurité de la zone de stockage</td>
<td><ul>
<li>Ne sapplique pas aux installations qui ne servent pas à stocker des appareils dexposition.</li>
<li>Si un appareil dexposition est généralement utilisé et stocké exclusivement dans linstallation de gammagraphie (c.-à-d. des appareils dexposition au Co 60), linstallation de gammagraphie devrait alors comprendre les mesures de sécurité nécessaires conformément aux exigences du document de la CCSN REGDOC 2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em> [4].</li>
</ul></td>  </tr>  <tr>
<td>Entretien et essais</td>
<td><ul>
<li>Tout composant intégré à linstallation de gammagraphie à des fins liées à la sécurité devrait être entretenu conformément aux spécifications du fabricant et devrait être entretenu au moins tous les six mois.</li>
</ul></td>  </tr>  <tr>
<td>Plan de sécurité de linstallation</td>
<td><ul>
<li>Si le titulaire de permis utilise des caractéristiques de linstallation de gammagraphie pour se conformer et démontrer sa conformité aux exigences du document REGDOC-2.12.3, celles-ci devraient être décrites dans le plan de sécurité du titulaire de permis.</li>
</ul></td>  </tr>  <tr>
<td>Sécurité de linformation</td>
<td><ul>
<li>Tout renseignement concernant les dispositifs de sécurité de linstallation de gammagraphie devrait être contrôlé et conservé de manière appropriée, comme dans des classeurs dont laccès est contrôlé ou des dispositifs de stockage informatique cryptés.</li>
</ul></td>  </tr>  <tr>
<td>Formation sur la sensibilisation à la sécurité</td>
<td><ul>
<li>Tous les travailleurs ou titulaires de permis qui exécutent des travaux dans une installation de gammagraphie où sont installés des dispositifs de sécurité devraient être adéquatement formés à lutilisation de ces dispositifs.</li>
</ul></td>  </tr>  </table>
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
<h2 id="sec4">4. Contrôles administratifs</h2>  <p>Étant donné que les contrôles administratifs dépendent des personnes qui les respectent et y adhèrent, ils devraient compléter, mais non remplacer les mesures dingénierie.</p>
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
<h3 id="sec4-1">4.1 Imposition de limites concernant le type et lactivité maximale des substances nucléaires</h3>  <p>Dès que linstallation de gammagraphie a été conçue pour des combinaisons précises de substances nucléaires et dactivité maximale, le propriétaire de linstallation devrait restreindre lutilisation de substances nucléaires afin que les limites soient respectées. Les restrictions concernant les substances nucléaires ou lactivité maximale de chaque substance nucléaire à utiliser devraient être clairement affichées à lextérieur de linstallation de gammagraphie.</p>
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
<h3 id="sec4-2">4.2 Usage restreint des zones adjacentes à linstallation de gammagraphie</h3>  <p>Toute pièce, zone ou enceinte adjacente à linstallation de gammagraphie représente un lieu où pourraient exister des champs de rayonnement inattendus susceptibles dexposer dautres personnes au rayonnement. La conception de linstallation de gammagraphie devrait tenir compte de toutes les zones adjacentes pour sassurer que toute exposition au rayonnement soit maintenue en deçà des limites prescrites et au niveau ALARA.</p>  <p>Les zones adjacentes à linstallation de gammagraphie quil faudrait prendre en considération comprennent :</p>
<ol>
<li>les zones situées sous linstallation (p. ex., le sous-sol)</li>
<li>les zones élevées qui entourent linstallation (p. ex., des bureaux surélevés)</li>
<li>les zones situées au-dessus de linstallation (toiture, zones de travail aux étages supérieurs, etc.)</li>
<li>les zones situées sur les côtés de linstallation, au même niveau</li>
<li>les propriétés avoisinantes</li>
</ol>  <p>Linstallation devrait être située dans des limites de propriété bien définies et à une distance suffisante des propriétés adjacentes pour permettre daccéder à toutes les parties de linstallation et dentretenir la structure et le blindage, le cas échéant.</p>  <p>Tous les emplacements adjacents à linstallation de gammagraphie devraient être clairement identifiés et marqués sur un plan de linstallation pour sassurer quune attention adéquate soit accordée à la réduction des expositions au rayonnement dans ces zones. Ces emplacements devraient comprendre les zones, pièces ou enceintes servant au stockage ou qui autrement ne sont pas normalement occupées au moment de lévaluation. Étant donné que lusage et par conséquent loccupation de ces emplacements peuvent changer, lévaluation devrait tenir compte de lexposition au rayonnement.</p>  <p>Compte tenu de lexposition potentielle dans les zones adjacentes à linstallation de gammagraphie, lOAEA devrait surveiller les expositions dans ces zones pour sassurer que les doses de rayonnement ne sont pas dépassées. Lorsque le débit de dose dans nimporte quelle zone adjacente à linstallation de gammagraphie dépasse la limite prescrite, la pose de panneaux de mise en garde sera également exigée.</p>
<h4>4.2.1 Ajuster la charge de travail</h4>  <p>La charge de travail devrait être déterminée en utilisant en tout temps les hypothèses les plus raisonnables pour tout travail de gammagraphie potentiel. La charge de travail maximale doit être déterminée de façon hebdomadaire et annuelle.</p>   <p>En général, la charge de travail est exprimée en fonction du nombre dexpositions gammagraphiques effectuées par semaine ou par an et de la durée maximale prévue de chaque exposition. Déterminer la charge de travail en fonction de la durée maximale prévue de chaque exposition est une hypothèse raisonnable appropriée. Une telle information peut savérer utile au stade de la planification ainsi que pour sassurer que lemplacement a une capacité suffisante pour mener toutes les activités de gammagraphie en toute sécurité.</p>   <p>Afin dassurer une capacité suffisante dans une installation de gammagraphie, la planification de la charge de travail devrait également tenir compte du temps nécessaire pour la préparation et le démontage de lexposition afin dassurer un temps et des capacités suffisants pour effectuer les travaux exigés.</p>   <p>Si une installation de gammagraphie est utilisée par plusieurs titulaires de permis, la conception devrait prendre en compte les activités cumulatives de tous les titulaires de permis.</p>  <p>La charge de travail dune installation de gammagraphie aura peut-être besoin dêtre restreinte ou autrement limitée afin de respecter les limites dexposition au rayonnement applicables.</p>
<h4>4.2.2 Contrôle de loccupation des zones avoisinantes</h4>  <p>La conception devrait tenir compte de loccupation des zones avoisinantes par des personnes à plein temps ou de façon temporaire. Loccupation des zones situées à proximité de linstallation de gammagraphie pourrait changer en fonction du jour ou du moment de la journée. En outre, loccupation des zones avoisinantes pourrait changer en fonction des saisons, lorsque certains lieux adjacents sont uniquement utilisés pendant certains mois de lannée.</p>  <p>Le facteur doccupation (T) de chaque emplacement est une fraction du temps total durant lequel un champ de rayonnement est présent à un endroit particulier et où lon peut raisonnablement sattendre à ce quune personne sy trouve. Ce facteur (≤ 1) est multiplié par la dose totale de rayonnement à cet endroit pour calculer la dose individuelle maximale que pourrait recevoir une seule personne. Des exemples de facteurs doccupation sont présentés au tableau 3, qui peuvent servir de guide en labsence de données adéquates concernant loccupation. Les renseignements fournis sont tirés de la norme ANSI N43.3-2008, <span lang="en"><em>Installations Using Non-Medical X-Ray and Sealed Gamma Ray Sources, Energies Up To 10 MeV</em></span> [5].</p>
<table className="width-100">  <caption className="text-left"><strong>Tableau 3 : Exemples de facteurs doccupation</strong></caption>  <tr>
<th>Type doccupation</th>
<th className="text-center">Exemples</th>
<th>Facteur doccupation (T)</th>  </tr>  <tr>
<td>Occupation complète</td>
<td>Salles de commande, chambres noires, locaux de travail, ateliers, bureaux, corridors suffisamment larges pour être utilisés comme zones de travail, salles de repos et salons couramment utilisés, logements, aires de jeu pour enfants, espace occupé dans des bâtiments adjacents</td>
<td className="text-center">1</td>  </tr>  <tr>
<td>Occupation partielle</td>
<td>Corridors souvent fréquentés, mais trop étroits pour être utilisés comme bureaux, pièces de service, salles de repos et salons non utilisés couramment, ascenseurs avec opérateur, terrains de stationnement sans préposé</td>
<td className="text-center">1/2 à 1/5</td>  </tr>  <tr>
<td>Occupation occasionnelle</td>
<td>Corridors peu fréquentés, cabinets trop petits pour être éventuellement occupés, toilettes, cage descalier, ascenseurs automatiques, espaces extérieurs uniquement empruntés par des piétons ou des véhicules à moteur</td>
<td className="text-center">1/8 à 1/40</td>  </tr>  </table>
<p>Il importe de connaître le régime de travail habituel des opérateurs de lappareil dexposition de linstallation et des personnes à proximité. Dans lidéal, le taux doccupation des zones entourant une installation devrait être zéro quand se déroule une activité de gammagraphie. Les activités de gammagraphie pourraient, par exemple, être prévues en dehors des heures de travail normales. Bien quun taux doccupation de zéro soit idéal, il est rarement réalisable. Lopérateur de lappareil de lappareil dexposition devrait vérifier loccupation de toutes les zones adjacentes avant chaque exposition et reconfirmer quaucune personne nest entrée dans les zones présentant un risque dexposition au rayonnement.</p>  <p>Lors de la conception du blindage des murs, il faudrait supposer un facteur doccupation égal à 1 pour toute propriété adjacente. Lorsque lévaluation identifie que des lieux adjacents à linstallation de gammagraphie sont susceptibles dêtre occupés, la conception de linstallation de gammagraphie devrait veiller à ce que les doses respectent les exigences réglementaires en utilisant un blindage supplémentaire et dautres méthodes de contrôle administratif ou technique.</p>  <p>Quand une installation de gammagraphie se trouve à un endroit où le titulaire de permis ou le propriétaire de linstallation de gammagraphie nexerce aucun contrôle sur loccupation des lieux adjacents par quelque personne que ce soit, les décisions de conception devraient supposer une occupation continue de ces lieux pour sassurer que les doses potentielles reçues à ces endroits sont en deçà des limites réglementaires et maintenues au niveau ALARA.</p>   <p>Comme mentionné précédemment, si le blindage ou les autres contrôles ne suffisent pas à réduire les expositions potentielles en deçà des limites prescrites, il faudrait alors imposer des restrictions sur loccupation des zones adjacentes à linstallation de gammagraphie pour sassurer quaucune personne ne dépasse les limites dexposition applicables.</p>  <p>Lannexe A présente une méthode de calcul des expositions au rayonnement fondée sur la conception dune installation. Lexemple est uniquement fourni à titre dinformation et démontre le type de renseignements qui pourraient être nécessaires pour cette évaluation.</p>
<h4>4.2.3 Limitation de la position et de la direction de la source dans linstallation de gammagraphie</h4>  <p>En général, il ny a pas de contrôles sur lendroit où peuvent se dérouler les expositions gammagraphiques dans une installation de gammagraphie. Par conséquent, les expositions au rayonnement en dehors dune installation de gammagraphie peuvent augmenter ou diminuer en fonction de la distance entre la source scellée et le(s) mur(s) de blindage. En outre, le changement de direction du faisceau de rayonnement peut également avoir une incidence importante sur les expositions potentielles au rayonnement en dehors dune installation de gammagraphie.</p>   <p>Lorsque la position ou la direction du faisceau peut varier, linstallation de gammagraphie devrait être conçue pour en tenir compte et devrait être construite pour la configuration représentant lexposition potentielle la plus élevée de toute personne se trouvant en dehors de linstallation. Sil nest pas possible de réduire lexposition au rayonnement en dehors dune installation de gammagraphie en raison des variations, des contrôles supplémentaires devraient être mis en place pour assurer une protection équivalente. Ces contrôles peuvent inclure la limitation des endroits dans linstallation où des activités de gammagraphie peuvent être réalisées.</p>
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
<h3 id="sec4-3">4.3 Contrôle de la présence de personnes avant lexposition</h3>  <p>En règle générale, lOAEA effectuant lexamen gammagraphique sera la dernière personne à quitter linstallation de gammagraphie avant de mettre la source scellée en position non blindée. Ceci suffit normalement à assurer que linstallation de gammagraphie nest pas occupée. Toutefois, lOAEA devrait être placé de façon à sassurer que personne ne puisse entrer dans linstallation de gammagraphie lorsque la substance nucléaire est en position non blindée.</p>
<p>Conformément aux exigences réglementaires, lOAEA doit ériger des barrières ou placer des personnes pour empêcher quiconque de pénétrer dans linstallation pendant lexécution dune exposition gammagraphique. Par conséquent, lOAEA devra évaluer les risques liés à toute exposition et sassurer que des mesures suffisantes sont en place pour empêcher laccès à linstallation pendant lexposition.</p>  <p>Une surveillance à distance de lintérieur de linstallation de gammagraphie devrait être considérée pour sassurer que personne ne se trouve à lintérieur lorsque lOAEA se prépare à mettre la source scellée en position non blindée. Il faudrait également envisager de prévoir une alarme ou des boutons darrêt à lintérieur de linstallation de gammagraphie pour permettre à une personne se trouvant à lintérieur davertir dautres personnes ou dannuler lexposition prévue.</p>  <p>Dans tous les cas, la conception de linstallation de gammagraphie devrait comprendre un avertisseur dincendie ou dautres dispositifs dalarme en cas durgence pour demander du secours ou avertir dautres personnes dun incendie potentiel ou de toute autre situation durgence. Les dispositions du code de prévention des incendies applicables établiront le besoin dinclure tout système dalarme nécessaire.</p>
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
<h2 id="sec5">5. Construction</h2>  <p>Tout changement apporté durant la construction en raison de problèmes imprévus devrait être consigné et inclus dans les dessins conformes à lexécution. Tous les changements devraient être évalués pour sassurer quils ne compromettent pas le niveau de radioprotection et de sûreté pour lequel linstallation de gammagraphie a été conçue.</p>  <p>Si linstallation de gammagraphie doit être construite à lintérieur dun bâtiment ou dun ouvrage existant, le bâtiment ou louvrage devraient avoir la capacité structurale nécessaire pour assurer la sécurité de la construction et supporter la charge structurale finale. De plus, la capacité structurale doit être suffisante pour toute charge dynamique ou autre charge ajoutée en raison de lexploitation de linstallation de gammagraphie (grues, machines de levage, etc.).</p>  <p>La construction de linstallation de gammagraphie ne doit pas avoir dincidence sur le niveau de radioprotection prévu. En particulier, la composition, la qualité et la quantité du blindage fourni doivent être égales ou supérieures à celles initialement spécifiées.</p>  <p>Voici des exemples de déficiences possibles :</p>
<ul>
<li>méthodes de construction agressives ou rapides qui compromettent la capacité de blindage de linstallation en raison de vides excessifs dans le béton coulé</li>
<li>murs en blocs creux qui ne sont pas entièrement remplis avec du mortier</li>
<li>blindage dont les joints ne sont pas remplis ou finis correctement</li>
<li>étendue du blindage en plomb ne correspondant pas aux spécifications des plans</li>
<li>feuilles de plomb non soutenues</li>
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
<div id="6"></div>
<h2 id="sec6">6. Mise en service</h2>  <p>Pour déterminer si linstallation répond aux spécifications de conception, des essais de mise en service et des mesures des débits de dose de rayonnement devraient être effectués avant son utilisation. Si les essais montrent que linstallation ne limite pas les doses de manière appropriée, il faudrait prendre des mesures additionnelles vis-à-vis le blindage, la sûreté et la sécurité.</p>  <p>Des mesures devraient être prises pour vérifier labsence de fissures, de trous ou de vides dans les murs, les planchers ou le plafond pouvant créer des zones localisées présentant des débits de dose plus élevés. Des mesures devraient également être prises pour confirmer que le blindage installé est adéquat et installé conformément à la conception initiale et que les doses attribuables à leffet de ciel sont maintenues en deçà des limites réglementaires et conformes au principe ALARA.</p>  <p>Tous les essais radiologiques devraient être réalisés avec des substances nucléaires de même type et en même quantité que celles qui devraient être habituellement utilisées dans linstallation. Les valeurs des doses de rayonnement des lieux qui entourent linstallation de gammagraphie devraient être calculées en fonction de la substance nucléaire et de lactivité utilisées pour lessai de mise en service. Une méthode permettant de calculer les doses de rayonnement en fonction de la conception de linstallation se trouve à lannexe A. Ces valeurs prévues devraient être comparées aux valeurs des doses de rayonnement réellement observées pour déterminer sil y a des lacunes dans la conception ou la construction du blindage de linstallation. Il faudrait en particulier confirmer que les valeurs prévues de leffet de ciel sont dans les limites prévues et ne dépassent pas les niveaux prescrits. Des contrôles radiologiques généraux devraient être effectués dans toutes les zones adjacentes à linstallation de gammagraphie pour confirmer labsence de champs de rayonnement qui nétaient pas prévus à létape de la conception. Un relevé de toutes les lectures devrait être conservé.</p>  <p>Les titulaires de permis sont tenus de sassurer que toutes les mesures de rayonnement sont réalisées en utilisant un gammamètre qui a été étalonné au cours des 12 derniers mois. Le fonctionnement du gammamètre, y compris une vérification de la pile, devrait être documenté avant deffectuer tout contrôle radiologique.</p>  <p>Des avis et des panneaux de mise en garde contenant tous les renseignements nécessaires doivent être affichés dans toutes les zones où une telle signalisation est requise conformément au <em>Règlement sur la radioprotection</em>. Les informations relatives aux personnes-ressources devraient être revues de façon régulière afin de sassurer quelles sont à jour et lisibles.</p>   <p>Une évaluation exhaustive de linstallation de gammagraphie devrait également être effectuée pour sassurer quelle a été construite conformément à la conception acceptée et fonctionne comme prévu.</p>  <p>La mise en service devrait comprendre la mise à lépreuve de tous les systèmes mécaniques, électriques et liés à la sûreté (tels que les commandes de mise à larrêt, les alarmes et les détecteurs de présence) pour vérifier quils fonctionnent comme prévu.</p>
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
<h2 id="sec7">7. Exploitation</h2>
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
<h3 id="sec7-1">7.1 Examens et entretien de routine</h3>  <p>Dès que linstallation de gammagraphie est opérationnelle, il faudrait procéder à des vérifications périodiques pour sassurer que :</p>
<ul>
<li>les structures du bâtiment et les éléments du blindage ne se sont pas déplacés</li>
<li>le blindage ne comporte pas de séparations, de vides ou dautres déficiences</li>
<li>le blindage na pas été compromis ou altéré de façon à réduire son efficacité</li>
<li>les systèmes de sûreté continuent de fonctionner comme conçu et prévu</li>
</ul>  <p>Ces vérifications devraient être effectuées de façon suffisamment fréquente pour détecter tout changement susceptible de réduire lefficacité de linstallation de gammagraphie, mais pas moins dune fois par année civile.</p>  <p>Toute lacune relevée à la suite de ces examens devrait être documentée et faire lobjet dun suivi afin de procéder à des réparations ou de remplacer des matériaux, le cas échéant. Les dossiers concernant toutes les inspections, les évaluations et les mesures prises pour corriger les lacunes identifiées devraient être conservés aux fins dinspection de suivi et dexamen.</p>  <p>La présence et la lisibilité de tout panneau ou avis de mise en garde requis devraient également faire lobjet dinspections régulières afin de sassurer que les renseignements fournis restent à jour et disponibles. Il faudrait en particulier examiner la lisibilité et vérifier si les informations exigées au sujet des personnes-ressources sont à jour.</p>
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
<h3 id="sec7-2">7.2 Évaluation permanente de la conception</h3>  <p>Linstallation de gammagraphie devrait également être évaluée de façon régulière afin de déterminer si certaines des considérations utilisées dans sa conception ont été modifiées. Il faudrait déterminer si les mesures de conception et de radioprotection restent adéquates en cas de modification aux éléments suivants :</p>
<ul>
<li>substance nucléaire ou activité maximale de la substance nucléaire à utiliser</li>
<li>appareils dexposition à utiliser</li>
<li>endroit où les activités de gammagraphie sont effectuées dans linstallation</li>
<li>niveaux doccupation des zones adjacentes</li>
<li>charge de travail et fréquence dutilisation</li>
<li>services, pénétrations ou points daccès (installation ou enlèvement)</li>
<li>éléments structuraux (y compris la détérioration et la dégradation)</li>
<li>exigences réglementaires relatives à la gammagraphie industrielle</li>
</ul>   <p>Il pourrait être nécessaire dappliquer des mesures correctives, telles que la réduction de la quantité ou de lactivité de la substance nucléaire utilisée, lutilisation dune autre substance nucléaire présentant des énergies gamma plus faibles, ou la réalisation dun plus grand nombre dactivités de gammagraphie à des moments où les travailleurs ne se trouvent pas à proximité de linstallation. Les zones occupées pourraient également être déplacées à une distance plus grande de linstallation.</p>  <p>Toutes les mesures correctives prises devraient être documentées et les dossiers relatifs à tout changement devraient être conservés aux fins dexamen et dinspection plus poussés.</p>
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
<h2 id="appA">Annexe A : Calcul des doses</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA1"></div>
<h3 id="appA1">A.1 Méthode en cinq étapes</h3>  <p>La méthode en cinq étapes qui suit peut servir à estimer les doses reçues par les personnes en raison de lexploitation dune installation de gammagraphie. Bien que les titulaires de permis puissent choisir ou utiliser une autre méthode, celle-ci montre le type de renseignements requis pour estimer les doses reçues par les personnes occupant les zones qui entourent une installation de gammagraphie.</p>
<h4>1. Obtenir les dessins architecturaux ou faire un dessin précis, à léchelle avec les dimensions de linstallation et de lendroit où elle est située</h4>  <p>Les dessins doivent montrer les endroits où les substances nucléaires seront placées et les lieux occupés où des personnes pourraient être exposées au rayonnement en raison dexpositions gammagraphiques. Les zones environnantes devraient également être prises en considération.</p>
<h4>2. Obtenir les renseignements suivants concernant lexploitation de linstallation de gammagraphie</h4>
<ul>
<li>le(s) lieu(x) où se dérouleront les activités de gammagraphie</li>
<li>le nombre dexpositions à réaliser par année et la durée moyenne de chaque exposition</li>
<li>les substances nucléaires à utiliser</li>
<li>lactivité maximale de la substance nucléaire à utiliser pour chaque exposition</li>
</ul>
<h4>3. Identifier les zones occupées et les facteurs doccupation appropriés des zones entourant linstallation ou les installations de gammagraphie</h4>  <p>Les zones occupées se trouvant à proximité immédiate de linstallation de gammagraphie ainsi que les zones situées à lextérieur de linstallation (p. ex. les bâtiments voisins) doivent être prises en considération. Le facteur doccupation (T) de chaque lieu occupé est une fraction du temps durant lequel une personne occupe un endroit lorsquun champ de rayonnement est présent.</p>   <p>Un collimateur est un outil de blindage qui couvre partiellement la source de rayonnement et est un outil utile pouvant servir à prévenir ou à réduire les débits de dose dans certains lieux occupés.</p>
<h4>4. Estimation des débits de dose de rayonnement dans chaque lieu potentiellement occupé</h4>  <p>Deux méthodes de base sont utilisées pour estimer les débits de dose de rayonnement auxquels une personne sera exposée en raison de procédures de gammagraphie.</p>  <p>La première méthode consiste à prendre des mesures directes des débits de dose dans les zones environnantes, en utilisant un radiamètre suffisamment sensible et correctement étalonné. Cette méthode est généralement utile lorsquil sagit dévaluer une installation existante ou deffectuer une analyse comparative pour concevoir une nouvelle installation très similaire à une installation existante sur le plan de laménagement et de la conception.</p>   <p>La deuxième est une méthode mathématique qui dépend des propriétés physiques connues des substances nucléaires utilisées, de la distance de chaque zone occupée ainsi que des propriétés du blindage et de lépaisseur des matériaux de blindage. Cette méthode peut être très utile lors de la conception dune installation de gammagraphie.</p>   <p>Un logiciel commercial est disponible pour modéliser les débits de dose du rayonnement primaire et du rayonnement diffusé (y compris leffet de ciel). De lorientation sur la façon de calculer les débits de dose du rayonnement primaire et du rayonnement diffusé figure dans le rapport n<sup>o</sup> 151 du National Council on Radiation Protection and Measurements, <span lang="en"><em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em></span> [6].</p>   <p>La constante du rayonnement gamma appropriée combinée avec la couche de demi-atténuation (CDA) ou la couche datténuation au dixième (CAD) appropriée devrait être utilisée pour estimer les débits de dose. Une CDA1 est lépaisseur du blindage requise pour réduire le débit de dose de moitié et une CAD1 est lépaisseur du blindage requise pour réduire le débit de dose dun dixième.</p>   <p>Si lépaisseur de blindage proposée est supérieure à la CDA1 (ou la CAD1) dans le tableau A1, une CDA2 (ou CAD2) devrait être utilisée pour calculer les épaisseurs subséquentes de blindage nécessaires, en plus des valeurs initiales. Ceci est dû à la non-linéarité de labsorption du rayonnement gamma dans les matériaux présentés.</p>  <p>Le tableau A1 donne les constantes du rayonnement gamma des substances nucléaires couramment utilisées et les CDA et CAD du blindage en béton ou en plomb.</p>
<table className="width-100">  <caption><strong>Tableau A1 : Constantes du rayonnement gamma (Г) et couche de demi-atténuation (CDA) pour le blindage en béton et en plomb destiné aux substances nucléaires couramment utilisées</strong></caption>  <tr>
<th className="text-center" rowspan="3">Substance nucléaire</th>
<th className="text-center" rowspan="3">Constante du rayonnement gamma</th>
<th colSpan="4">Couche de demi-atténuation (mm)</th>
<th colSpan="4">Couche datténuation au dixième (mm)</th>  </tr>  <tr>
<th colSpan="2">Béton</th>
<th colSpan="2">Plomb</th>
<th colSpan="2">Béton</th>
<th colSpan="2">Plomb</th>  </tr>  <tr>
<th>CDA1</th>
<th>CDA2</th>
<th>CDA1</th>
<th>CDA2</th>
<th>CAD1</th>
<th>CAD2</th>
<th>CAD1</th>
<th>CAD2</th>  </tr>  <tr>
<td className="text-center">Ir 192</td>
<td className="text-center">117</td>
<td className="text-center">119</td>
<td className="text-center">49</td>
<td className="text-center">3,8</td>
<td className="text-center">3,3</td>
<td className="text-center">225</td>
<td className="text-center">133</td>
<td className="text-center">12</td>
<td className="text-center">15</td>  </tr>  <tr>
<td className="text-center">Cs 137</td>
<td className="text-center">78</td>
<td className="text-center">121</td>
<td className="text-center">62</td>
<td className="text-center">9,4</td>
<td className="text-center">6,7</td>
<td className="text-center">255</td>
<td className="text-center">160</td>
<td className="text-center">24</td>
<td className="text-center">20</td>  </tr>  <tr>
<td className="text-center">Co 60</td>
<td className="text-center">305</td>
<td className="text-center">131</td>
<td className="text-center">81</td>
<td className="text-center">20</td>
<td className="text-center">14</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">50</td>
<td className="text-center">40</td>  </tr>  <tr>
<td className="text-center">Se 75</td>
<td className="text-center">56</td>
<td className="text-center">110</td>
<td className="text-center">40</td>
<td className="text-center">1,6</td>
<td className="text-center">1,5</td>
<td className="text-center">199</td>
<td className="text-center">115</td>
<td className="text-center">5.4</td>
<td className="text-center">7,2</td>  </tr>  <tr>
<td className="text-center">Yb 169</td>
<td className="text-center">52</td>
<td className="text-center">69</td>
<td className="text-center">40</td>
<td className="text-center">0,3</td>
<td className="text-center">0,7</td>
<td className="text-center">155.3</td>
<td className="text-center">105.7</td>
<td className="text-center">2,1</td>
<td className="text-center">4,5</td>  </tr>  </table>
<p>La méthode utilisée pour calculer les débits de dose dans des zones occupées situées en dehors dune installation de gammagraphie dépend de lépaisseur du blindage envisagée. Les trois scénarios décrits ci-dessous comportent des équations différentes permettant de calculer le débit de dose.</p>  <p><strong>Scénario 1 :</strong> Si lépaisseur du blindage est inférieure à la CDA1, le débit de dose peut être estimé en utilisant léquation 1 pour lendroit visé.</p>  <p>Équation 1: R = (&Gamma; x A x 2<sup>-t/CDA1</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Où :</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>est le débit de dose</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>est la constante du rayonnement gamma de la source à 1 m</td>
<td>(&micro;Sv/h par GBq)</td>  </tr>  <tr>
<td>A</td>
<td>est lactivité de la substance nucléaire</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>est la distance entre la substance nucléaire et lemplacement</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>est lépaisseur du blindage, dans la direction de déplacement*, de tout mur de blindage situé entre la substance nucléaire et lemplacement</td>
<td>(mm)</td>  </tr>  <tr>
<td>CDA1</td>
<td>est lépaisseur du blindage permettant de réduire le débit de dose sans blindage à la moitié de sa valeur initiale</td>
<td>(mm)</td>  </tr>  </table>
<p>*&nbsp;Il convient de noter que si le rayonnement traverse un mur de blindage en oblique, lépaisseur réelle du blindage sera supérieure à lépaisseur du mur.</p>  <br />  <p><strong>Scénario 2:</strong> Si lépaisseur du blindage est supérieure à la CDA1, mais inférieure à la CAD1, le débit de dose peut être estimé en utilisant léquation 2.</p>  <p>Équation 2: R = (&Gamma; x A x 0,5 x 2<sup>-(t-CDA1)/CDA2</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Où :</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>est le débit de dose</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>est la constante du rayonnement gamma de la source à 1 m</td>
<td>(&micro;Sv/h par GBq)</td>  </tr>  <tr>
<td>A</td>
<td>est lactivité de la substance nucléaire</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>est la distance entre la substance nucléaire et lemplacement</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>est lépaisseur du blindage, dans la direction de déplacement*, de tout mur de blindage situé entre la substance nucléaire et lemplacement</td>
<td>(mm)</td>  </tr>  <tr>
<td>CDA1</td>
<td>est lépaisseur du blindage permettant de réduire le débit de dose sans blindage à la moitié de sa valeur initiale</td>
<td>(mm)</td>  </tr>  <tr>
<td>CDA2</td>
<td>est lépaisseur du blindage, en plus de la première CDA, permettant de réduire de nouveau le débit de dose de moitié</td>
<td>(mm)</td>  </tr>  </table>
<br />
<p><strong>Scénario 3:</strong> Si lépaisseur du blindage est supérieure à la CAD1, le débit de dose peut être estimé en utilisant léquation 3.</p>  <p>Équation 3: R = (&Gamma; x A x 0,1 x 10<sup>-(t-CAD1)/CAD2</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Où :</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>est le débit de dose</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>est la constante du rayonnement gamma de la source à 1 m</td>
<td>(&micro;Sv/h par GBq)</td>  </tr>  <tr>
<td>A</td>
<td>est lactivité de la substance nucléaire</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>est la distance entre la substance nucléaire et lemplacement</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>est lépaisseur du blindage, dans la direction de déplacement*, de tout mur de blindage situé entre la substance nucléaire et lemplacement</td>
<td>(mm)</td>  </tr>  <tr>
<td>CAD1</td>
<td>est lépaisseur du blindage permettant de réduire le débit de dose sans blindage au dixième de sa valeur initiale</td>
<td>(mm)</td>  </tr>  <tr>
<td>CAD2</td>
<td>est lépaisseur du blindage, en plus de la première CAD, permettant de réduire de nouveau le débit de dose dun dixième</td>
<td>(mm)</td>  </tr>  </table>
<h4>5. Extrapoler les débits de dose calculés à chaque emplacement pour les doses annuelles reçues par les personnes pouvant occuper chaque zone.</h4>   <p>Les estimations des doses annuelles calculées devraient se fonder sur la charge de travail (immédiate et future potentielle) prévue de linstallation et les facteurs doccupation des zones occupées entourant linstallation de gammagraphie. La dose annuelle reçue par une personne exposée peut être calculée en utilisant léquation 4.</p>  <p>Équation 4: D = N x T x R x S</p>
<table className="table">  <tr>
<th>Où </th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>D</td>
<td>est la dose</td>
<td>(&micro;Sv)</td>  </tr>  <tr>
<td>N</td>
<td>est le nombre maximal dexpositions gammagraphiques effectuées chaque année</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>T</td>
<td>est le facteur doccupation pour la personne exposée et le lieu occupé</td>
<td>0&nbsp;&le;&nbsp;T&nbsp;&le;&nbsp;1</td>  </tr>  <tr>
<td>R</td>
<td>est le débit de dose à lendroit précis</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>S</td>
<td>est une estimation raisonnable de la durée moyenne des expositions gammagraphiques</td>
<td>(h)</td>  </tr>  </table>
<p>Les estimations des doses attribuables à leffet de ciel devraient se faire par calcul ou par mesure directe avant de procéder à des expositions gammagraphiques de routine. Sil est possible de démontrer que les doses annuelles (incluant leffet de ciel) reçues par les travailleurs et les membres du public sont inférieures aux limites de dose et conformes au principe ALARA, on peut conclure que la conception est adéquate pour protéger les personnes occupant les zones autour de linstallation de gammagraphie.</p>  <p>La CCSN peut considérer quune évaluation de lapplication du principe ALARA nest pas nécessaire lorsque les doses individuelles reçues par les travailleurs du secteur nucléaire (TSN) ne dépasseront vraisemblablement pas 1 mSv par an, lorsque les doses individuelles reçues par les membres du public ne dépasseront probablement pas 50 µSv par an et lorsque la dose annuelle collective (reçue par les travailleurs et par le public) ne dépassera probablement pas 1 personne-Sv (comme recommandé dans le document de la CCSN G-129, rév. 1, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnement possible datteindre [ALARA] »</em> [1]).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA2"></div>
<h3 id="appA2">A2. Exemple de calcul des doses</h3>  <p>Lexemple suivant démontre lutilisation de la méthode en cinq étapes permettant destimer la dose de rayonnement reçue par une personne pour un établissement avec une installation de gammagraphie. Cet exemple considère uniquement le rayonnement primaire et ne comprend pas leffet de ciel.</p>  <h4>1. Dessin de linstallation, de létablissement dans laquelle elle est située et des zones environnantes</h4>
<p><strong>Figure A1 : Plan du bâtiment montrant lemplacement prévu de linstallation de gammagraphie.</strong></p>  <div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/figA1-layout-fra.png" alt="Plan du bâtiment montrant lemplacement prévu de linstallation de gammagraphie" />  </div>  <div className="clear"></div>
<h4>2. Informations sur linstallation de gammagraphie</h4>  <p>Les informations suivantes sappliquent à cette linstallation de gammagraphie :</p>
<ul>
<li>les endroits où les substances nucléaires peuvent être présentes sont identifiés dans la figure A1</li>
<li>à cette installation, un maximum de 20 procédures de gammagraphie par semaine est prévu et les activités se dérouleront uniquement pendant les heures de bureau normales (c.-à-d. un maximum de 1 040 procédures par an)</li>
<li>la substance nucléaire utilisée à cette installation est le cobalt 60</li>
<li>lactivité de la source sélève à 4,07 TBq (110 Ci)</li>
</ul>
<h4>3. Identifier loccupation et le facteur doccupation approprié</h4>  <p>Les endroits occupés ont été identifiés et les facteurs doccupation ont été choisis de façon prudente. Linformation est résumée au tableau A2.</p>
<table className="width-100">  <caption className="text-left"><strong>Tableau A2 : Lieux occupés et facteurs doccupation</strong></caption>  <tr>
<th className="text-center">Lieu</th>
<th className="text-center">T</th>
<th className="text-center">Remarques</th>  </tr>  <tr>
<td>Position de lOAEA</td>
<td>1</td>
<td>Il y aura deux travailleurs à plein temps pouvant réaliser des activités de gammagraphie dans cette installation. La fraction exacte des expositions gammagraphiques réalisées par chaque opérateur dappareil dexposition est incertaine; par conséquent, lhypothèse prudente que toutes les expositions sont effectuées par un OAEA est émise.</td>  </tr>  <tr>
<td>Réception</td>
<td>1</td>
<td>Lhypothèse prudente que le réceptionniste occupera la réception durant toutes les expositions gammagraphiques est émise. Le réceptionniste nest pas un TSN.</td>  </tr>  <tr>
<td>Salle de repos</td>
<td>1/4</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>Toilettes</td>
<td>1/16</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>Espace de bureau</td>
<td>1</td>
<td>On suppose que lespace de bureau le plus proche de la source sera occupé par un travailler qui nest pas un TSN.</td>  </tr>  <tr>
<td>Aire de stationnement</td>
<td>1/8</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>Clôture nord</td>
<td>1</td>
<td>Par mesure de prudence, on suppose le taux doccupation le plus défavorable.</td>  </tr>  <tr>
<td>Zone de chargement</td>
<td>1/8</td>
<td>Il est supposé que les travailleurs de lentreprise adjacente gareront leurs voitures et fumeront dans laire de stationnement.</td>  </tr>  <tr>
<td>Toiture</td>
<td>S/O</td>
<td>Laccès est limité pendant les expositions gammagraphiques</td>  </tr>  <tr>
<td>Sous-sol</td>
<td>S/O</td>
<td>Il ny a pas de sous-sol dans le bâtiment.</td>  </tr>  </table>
<h4>4. Estimation des débits de dose de rayonnement dans chaque zone potentiellement occupée</h4>  <p>En supposant que les murs en béton de linstallation de gammagraphie ont tous une épaisseur de 1 m, lépaisseur du blindage est supérieure à la CAD1 de 305 mm. Par conséquent, léquation 3 devrait être utilisée pour calculer le débit de dose à chaque emplacement (sans compter leffet de ciel). Les débits de dose calculés en utilisant cette méthode sont présentés au tableau A3. Étant donné quil est possible deffectuer une activité de gammagraphie en plaçant la source à divers endroits dans linstallation de gammagraphie, les hypothèses les plus prudentes ont été adoptées pour déterminer la distance entre la source et lemplacement. Par exemple, en ce qui concerne la distance entre la source et lespace de bureau, on a supposé que les expositions gammagraphiques auraient lieu en plaçant la source à lendroit de linstallation de gammagraphie situé le plus près de lespace de bureau. </p>
<p><strong>Tableau A3 : Débits de dose calculés pour les endroits les plus occupés entourant linstallation de gammagraphie (sans compter leffet de ciel)</strong></p>  <p>Constante de rayonnement gamma à 1 m (&Gamma;) = 305 &micro;Sv/h par GBq</p>  <p>Débit de dose (R) = (&Gamma; x A x 0,1 x 10<sup>-(t-CAD1)/CAD2)</sup> / d<sup>2</sup></p>
<table className="width-100">  <tr>
<th className="text-center">Lieu</th>
<th className="text-center">&Gamma;<br />
(&micro;Sv/h par GBq)</th>
<th className="text-center">A<br />
(GBq)</th>
<th className="text-center">t<br />
(mm)</th>
<th className="text-center">CAD1<br />
(mm)</th>
<th className="text-center">CAD2<br />
(mm)</th>
<th className="text-center">d<br />
(m<sup>2</sup>)</th>
<th>&nbsp;</th>
<th className="text-center">R<br />
(&micro;Sv/h)</th>  </tr>  <tr>
<td>Position de lOAEA</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">2,2</td>
<td className="text-center">=</td>
<td className="text-center">13</td>  </tr>  <tr>
<td>Réception</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">11,5</td>
<td className="text-center">=</td>
<td className="text-center">0,48</td>  </tr>  <tr>
<td>Salle de repos</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">5,7</td>
<td className="text-center">=</td>
<td className="text-center">1,9</td>  </tr>  <tr>
<td>Toilettes</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">4,5</td>
<td className="text-center">=</td>
<td className="text-center">3,1</td>  </tr>  <tr>
<td>Espace de bureau</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">5,5</td>
<td className="text-center">=</td>
<td className="text-center">2,1</td>  </tr>  <tr>
<td>Aire de stationnement</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">12,5</td>
<td className="text-center">=</td>
<td className="text-center">0,40</td>  </tr>  <tr>
<td>Clôture nord</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">11</td>
<td className="text-center">=</td>
<td className="text-center">0,52</td>  </tr>  <tr>
<td>Zone de chargement</td>
<td className="text-center">305</td>
<td className="text-center">4 070</td>
<td className="text-center">1 000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">12,5</td>
<td className="text-center">=</td>
<td className="text-center">0,40</td>  </tr>  </table>
<h4>5. Extrapoler les débits de dose pour les doses annuelles reçues par les personnes pouvant occuper chaque zone</h4>  <p>La charge de travail prévue à cette installation de gammagraphie correspond au maximum à 1 040 expositions par an (c.-à-d. 20 expositions par semaine). Il est supposé quun collimateur nest pas utilisé et que les expositions dureront chacune trois minutes (c.-à-d. 0,05 h). En utilisant léquation 2, lestimation des doses annuelles reçues par les personnes occupant chaque endroit considéré est présentée au tableau A4. </p>
<table className="width-100">  <caption className="text-left"><strong>Tableau A4 : Dose annuelle calculée aux endroits occupés entourant linstallation de gammagraphie (sans compter leffet de ciel), où la dose (D) = N x T x R x S</strong></caption>  <tr>
<th className="text-center">Lieu</th>
<th className="text-center">N</th>
<th className="text-center">T</th>
<th className="text-center">R (&micro;Sv/h)</th>
<th className="text-center">S (h)</th>
<th>&nbsp;</th>
<th className="text-center">D (&micro;Sv)</th>  </tr>  <tr>
<td>Position de lOAEA</td>
<td className="text-center">1 040</td>
<td className="text-center">1</td>
<td className="text-center">13,0</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">680</td>  </tr>  <tr>
<td>Réception</td>
<td className="text-center">1 040</td>
<td className="text-center">1</td>
<td className="text-center">0,5</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">25</td>  </tr>  <tr>
<td>Salle de repos</td>
<td className="text-center">1 040</td>
<td className="text-center">1/4</td>
<td className="text-center">1,9</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">25</td>  </tr>  <tr>
<td>Toilettes</td>
<td className="text-center">1 040</td>
<td className="text-center">1/16</td>
<td className="text-center">3,1</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">10</td>  </tr>  <tr>
<td>Espace de bureau</td>
<td className="text-center">1 040</td>
<td className="text-center">1</td>
<td className="text-center">2,1</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">110</td>  </tr>  <tr>
<td>Aire de stationnement</td>
<td className="text-center">1 040</td>
<td className="text-center">1/8</td>
<td className="text-center">0,4</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">2,6</td>  </tr>  <tr>
<td>Clôture nord</td>
<td className="text-center">1 040</td>
<td className="text-center">1</td>
<td className="text-center">0,5</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">27</td>  </tr>  <tr>
<td>Zone de chargement</td>
<td className="text-center"> 1040</td>
<td className="text-center">1/8</td>
<td className="text-center">0,8</td>
<td className="text-center">0,05</td>
<td className="text-center">=</td>
<td className="text-center">2,6</td>  </tr>  </table>
<p>La dose annuelle estimée pour le TSN (c.-à-d. lOAEA) est bien inférieure à la limite de dose annuelle. Les estimations des doses annuelles reçues par des personnes nétant pas des TSN et occupant la réception, lespace de bureau et la clôture nord sont également inférieures à la limite de 1 mSv/an prescrite au paragraphe 13(1) du <em>Règlement sur la radioprotection</em> et à la limite de dose de 0,5 mSv/an prescrite au paragraphe 30(6) du <em>Règlement sur les substances nucléaires et les appareils à rayonnement</em>. Par conséquent, aucun blindage supplémentaire nest nécessaire pour maintenir les doses en deçà des limites réglementaires.</p>  <p>De plus, la salle de repos, les toilettes, laire de stationnement, la clôture nord et la zone de chargement peuvent être à la fois occupées par des TSN et des personnes autres que des TSN, et les estimations des doses annuelles reçues à ces endroits devraient être ajoutées aux doses calculées pour les TSN et les personnes autres que des TSN. La dose annuelle estimée reçue par un TSN, y compris la dose annuelle reçue de par loccupation de la salle de repos, des toilettes, de laire de stationnement, de la clôture nord et de la zone de chargement, est toujours bien en deçà des limites réglementaires. La dose annuelle estimée reçue par la personne autre quun TSN la plus exposée (c.-à-d. le travailleur de lespace de bureau), y compris la dose annuelle reçue de par loccupation de la salle de repos, des toilettes, de laire de stationnement, de la clôture nord et de la zone de chargement, est également inférieure aux limites réglementaires. Par conséquent, un blindage en béton dune épaisseur de 1 m est adéquat pour maintenir la dose estimée reçue par le travailleur de bureau en deçà des limites réglementaires. En plus de maintenir les doses en deçà des limites réglementaires, elles devront également être maintenues au niveau ALARA. Les estimations des doses attribuables à leffet de ciel devraient se faire par calcul ou par mesure directe avant de procéder à des expositions gammagraphiques. Sil est possible de démontrer que les doses annuelles (incluant leffet de ciel) reçues par les travailleurs et les membres du public sont inférieures aux limites de dose, maintenues en deçà des limites réglementaires et conformes au principe ALARA, il peut être conclu que la conception est adéquate pour protéger les personnes occupant les zones autour de linstallation de gammagraphie.</p>
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
<h2 id="gloss">Glossaire</h2>  <dl>
<dt><strong>appareil dexposition</strong> <em>(exposure device)</em></dt>
<dd>Appareil à rayonnement conçu pour être utilisé en gammagraphie, y compris ses accessoires, notamment lassemblage de source scellée, le mécanisme de commande, le tube de guidage dassemblage de source scellée et la tête dexposition. (Sources : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)</dd>
<dt><strong>becquerel (Bq)</strong> <em>(becquerel [Bq])</em></dt>
<dd>Unité de mesure de la radioactivité dune substance nucléaire dans le Système international dunités (SI). Un becquerel (Bq) correspond à lactivité de la quantité de matières radioactives (désintégration dun  noyau par seconde). Au Canada, on utilise le Bq plutôt que le curie (non-SI).1 Bq = 27 &micro;Ci (2,7 x 10<sup>-11</sup> Ci) et 1 Ci = 3,7 x 10<sup>10</sup> Bq.</dd>
<dt><strong>collimateur</strong> <em>(collimator)</em></dt>
<dd>Voir obturateur de faisceau.</dd>
<dt><strong>constante du rayonnement gamma</strong></dt>
<dd>Débit de dose à une certaine distance provenant dune quantité donnée dun radionucléide émetteur de photons. Elle est utilisée pour prédire lexposition au rayonnement en termes de dose équivalente par unité dactivité par unité de distance.</dd>
<dt><strong>couche datténuation au dixième (CAD)</strong> <em>(tenth-value layer [TVL])</em></dt>
<dd>Épaisseur du blindage ou dun absorbeur qui réduit lintensité de rayonnement au dixième du niveau original.</dd>
<dt><strong>couche de demi-atténuation (CDA)</strong> <em>(half-value layer [HVL])</em></dt>
<dd>Épaisseur du blindage ou dun absorbeur (comme luranium, le tungstène ou le plomb) qui réduit lintensité du rayonnement à la moitié du niveau original. Aussi appelé épaisseur de demi-atténuation.</dd>
<dt><strong>effet de ciel</strong> <em>(skyshine)</em></dt>
<dd>Rayonnement diffusé produit par des particules atmosphériques réfléchissant le rayonnement. Il se produit couramment au-dessus dune installation de gammagraphie dont la toiture nest pas blindée ou comporte un blindage inadéquat.</dd>
<dt><strong>entrée de labyrinthe</strong> <em>(maze entrance)</em></dt>
<dd>Voie indirecte entre lentrée dune installation de gammagraphie et la zone dexposition. Lutilisation dune entrée de labyrinthe assure la présence dau moins une paroi blindée entre lopérateur dexposition et la zone dexposition.</dd>
<dt><strong>exposition</strong> <em>(exposure)</em></dt>
<dd>Voir irradiation.</dd>
<dt><strong>facteur doccupation</strong> <em>(occupancy factor)</em></dt>
<dd>Fraction du temps total pendant lequel un champ de rayonnement est présent à un endroit particulier où une personne peut raisonnablement se trouver. Le facteur (&le; 1) est multiplié par la dose totale de  rayonnement à cet endroit, pour obtenir la dose individuelle maximale quune personne pourrait recevoir.</dd>
<dt><strong>faire fonctionner</strong> <em>(operate)</em></dt>
<dd>Dans le cas dun appareil dexposition, la présente définition vise notamment le raccordement ou débranchement du mécanisme de commande, le verrouillage ou déverrouillage de lappareil, et toute activité associée à lappareil lorsque lassemblage de la source scellée nest pas verrouillé en position complètement blindée à lintérieur de lappareil. (Source : <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>Règlement sur les substances nucléaires et les appareils à rayonnement</em></a>)</dd>
<dt><strong>gammagraphie industrielle</strong> <em>(industrial radiography)</em></dt>
<dd>Utilisation dappareils dexposition homologués pour réaliser des examens non destructifs de la structure de soudures, de moulages et de composants de bâtiments. Aussi appelé gammagraphie.</dd>
<dt><strong>gigabecquerel (GBq)</strong>
<dd>Un milliard (10<sup>9</sup>) de becquerels.</dd>
<dt><strong>irradiation</strong> <em>(irradiation)</em></dt>
<dd>Exposition au rayonnement. <strong>Remarque :</strong> Le terme « exposition » semploie pour décrire les doses aux personnes, alors que le terme « irradiation » sert plutôt pour les doses de rayonnement à des aliments ou des articles industriels.</dd>
<dt><strong>installation de gammagraphie</strong></dt>
<dd>Enceinte, cellule ou voûte blindée dans laquelle des travaux de gammagraphie sont réalisés.</dd>
<dt><strong>microsievert (&micrro;Sv)</strong> <em>(microsievert [&mictro;Sv])</em></dt>
<dd>Un millionième de sievert.</dd>
<dt><strong>niveau le plus bas quil soit raisonnablement possible datteindre (ALARA)</strong> <em>(as low as reasonably achievable [ALARA])</em></dt>
<dd>Principe de radioprotection en vertu duquel les expositions au rayonnement sont maintenues au niveau le plus bas quil soit raisonnablement possible datteindre, compte tenu des facteurs sociaux et économiques. Larticle 4 du <em>Règlement sur la radioprotection</em> énonce les obligations du titulaire de permis concernant le principe ALARA.</dd>
<dt><strong>obturateur de faisceau</strong> <em>(beam limiter)</em></dt>
<dd>Dispositif de blindage, situé à lendroit où la source est exposée, conçu pour réduire le débit de dose de rayonnement dans les directions autres que celle voulue. Lobturateur de faisceau peut être conçu pour être utilisé avec une tête dexposition, ou une tête dexposition peut y être ajoutée comme partie intégrante du dispositif. Aussi appelé collimateur.</dd>
<dt><strong>opérateur dappareil dexposition accrédité (OAEA)</strong> <em>(certified exposure device operator [CEDO])</em></dt>
<dd>Personne qui possède les compétences requises pour faire fonctionner un appareil de gammagraphie industrielle de manière sécuritaire partout au Canada et qui a été accréditée à ce titre par la CCSN.</dd>
<dt><strong>rayonnement diffusé</strong> <em>(scatter radiation ou scattered radiation)</em></dt>
<dd>Rayonnement dévié par la substance quil traverse. Il peut aussi avoir été modifié du fait dune perte dénergie. Aussi appelé rayonnement diffus.</dd>
<dt><strong>rayonnement gamma</strong> <em>(gamma radiation)</em></dt>
<dd>Rayonnement électromagnétique pénétrant émis par le noyau dun atome. Également appelé rayons gamma.</dd>
<dt><strong>sievert (Sv) <em>(sievert [Sv])</em></strong>
<dd>Unité de dose équivalente et de dose efficace du Système international dunités (SI), qui équivaut à 1 joule/kilogramme.</dd>
<dt><strong>travailleur du secteur nucléaire (TSN)</strong> <em>(nuclear energy worker [NEW])</em></dt>
<dd>Personne qui, du fait de sa profession ou de son occupation et des conditions dans lesquelles elle exerce ses activités, si celles-ci sont liées à une substance ou une installation nucléaire, risque vraisemblablement de recevoir une dose de rayonnement supérieure à la limite réglementaire fixée pour la population en général. (Source : <em>Loi sur la sûreté et la réglementation nucléaires</em>)</dd>
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
<li>Commission canadienne de sûreté nucléaire (CCSN). G-129, rév.1, <em>Maintenir les expositions et les doses au « niveau le plus bas quil soit raisonnablement possible datteindre (ALARA) »</em>, Ottawa, 2004.</li>
<li>Commission internationale de protection radiologique. Publication n<sup>o</sup> 116 de la CIPR, Ann. CIPR 40(2-5), <span lang="en"><em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em></span>, Thousand Oaks, Californie, 2010.</li>
<li>	Nucleonica GmbH. <span lang="en"><em>Joint Evaluated Fission and Fusion File</em></span> (JEFF) 3.1, portail sur la science nucléaire Nucleonica, www.nucleonica.com, version 3.0.49, Karlsruhe, Allemagne, 2014.</li>
<li>CCSN. REGDOC-2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em>, Ottawa, 2013.</li>
<li>American National Standards Institute. ANSI N43.3-2008, <span lang="en"><em>Installations Using Non-Medical X-Ray and Sealed Gamma Ray Sources, Energies Up To 10 MeV</em></span>, Washington, D.C., 2008.</li>
<li>National Council on Radiation Protection and Measurements. Rapport n<sup>o</sup> 151, <span lang="en"><em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em></span>, Bethesda, Maryland, 2005.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2 id="addInfo">Renseignements complémentaires</h2>  <p>Les documents suivants contiennent des renseignements supplémentaires qui pourraient intéresser les personnes qui participent à la conception des installations de gammagraphie au Canada.</p>
<ol>
<li>Commission canadienne de sûreté nucléaire. <em>Gammagraphie industrielle et sécurité au travail</em>, Ottawa, 2014.</li>
<li>Agence internationale de lénergie atomique. Collection Normes de sûreté de lAIEA, Guide de sûreté thématique n<sup>o</sup> SSG-11, <em>Sûreté radiologique en radiographie industrielle</em>, Vienne, 2013.</li>
<li>United States Nuclear Regulatory Commission. NUREG 1556, <span lang="en"><em>Consolidated Guidance about Materials Licensees &ndash; Volume 2, Program Specific Guidance about Industrial Radiography Licenses</em></span>, Washington, 1998.</li>
<li>ANSI. N43.10-2001, <span lang="en"><em>Safe Design and Use of Panoramic, Wet Source Storage Gamma Irradiators (Category IV) and Dry Source Storage Gamma Irradiators (Category II)</em></span>, 2001.</li>
<li>National Council on Radiation Protection and Measurements (NCRP). Rapport n<sup>o</sup> 49, <span lang="en"><em>Structural Shielding Design and Evaluation for Medical Use of X Rays and Gamma Rays of Energies Up To 10 MeV</em></span>, Bethesda, Maryland, 1976.</li>
<li>NCRP. Rapport n<sup>o</sup> 147, <span lang="en"><em>Structural Shielding Design for Medical X-Ray Facilities</em></span>, Bethesda, Maryland, 2004.</li>
<li>Johnson, Thomas E., et Brian K. Birky. Health <em>Physics and Radiological Health</em>, 4<sup>e</sup> édition, Baltimore, Maryland, 2012.</li>
<li>Oak Ridge National Laboratory. ORNL/RSIC-45, <span lang="en"><em>Specific Gamma-Ray Dose Constants for Nuclides Important to Dosimetry and Radiological Assessment</em></span>, Oak Ridge National Laboratory, Oak Ridge, Tennessee, 1982.</li>
<li>American Nuclear Society. <span lang="en"><em>Radiation Shielding</em></span>, Richard E. Faw et J. Shultis, La Grange Park, Illinois, 2000.</li>
</ol>
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Note en bas de page</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Pour un exemple de calculateur appliquant la loi de linverse des carrés, voir <a href="http://www.radprocalculator.com/InverseSquare.aspx">radprocalculator.com/InverseSquare.aspx</a></p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
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