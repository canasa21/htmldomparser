import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Publié pour consultation externe ", 
                dateModified: "2013-10-25",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-2-1-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>REGDOC-2.2.1: Performance humaine : Gérer la fatigue et les heures de travail des travailleurs</h2>
<a name="preface"></a>
<h2>Préface</h2>  <p> Ce  document d&#39;application de la réglementation fait partie de la série de  documents d&#39;application de la réglementation de la CCSN intitulée Gestion de la  performance humaine qui porte également sur la formation et l&#39;accréditation de  personnel. La liste complète des séries peut être consultée à <a href="http://www.suretenucleaire.gc.ca/documents-de-reglementation">suretenucleaire.gc.ca/documents-de-reglementation</a>.</p>  <p> Le  document d&#39;application de la réglementation REGDOC-2.2.1, <cite>Performance humaine : Gérer la fatigue et les heures de travail  des travailleurs</cite>, énonce les exigences et l&#39;orientation de la CCSN  relatives à la gestion de la fatigue et des heures de travail pour les  travailleurs travaillant dans les centrales nucléaires et au réacteur de  recherche nucléaire universel des Laboratoires de Chalk River.</p>  <p> Ce document se veut un élément du fondement d&#39;autorisation  d&#39;une installation ou d&#39;une activité réglementée. Il sera intégré soit aux  conditions et aux mesures de sûreté et de réglementation d&#39;un permis, soit aux  mesures de sûreté et de réglementation décrites dans la demande de permis et  les documents soumis à l&#39;appui de cette demande. </p>  <div className="border-highlight"><p><strong>Remarque importante :</strong> Ce document fait partie du  fondement d&#39;autorisation d&#39;une installation ou d&#39;une activité réglementée si on  s&#39;y réfère directement ou indirectement dans le permis (notamment dans des  documents cités en référence du titulaire de permis).</p>  <p> Le fondement d&#39;autorisation établit les conditions limites du rendement  acceptable pour une installation ou une activité réglementée et établit les  bases du programme de conformité de la CCSN à l&#39;égard de cette installation ou  activité réglementée.</p>  <p> Dans le cas où le document est un élément du fondement d&#39;autorisation,  le terme « doit » est employé pour exprimer une exigence à laquelle le  titulaire ou le demandeur de permis doit se conformer; le terme « devrait »  dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime  une option ou une mesure conseillée ou acceptable dans les limites de ce  document d&#39;application de la réglementation; et le terme « peut » exprime une  possibilité ou une capacité. </p>  <p> Aucune information contenue dans le présent document ne doit être  interprétée comme libérant le titulaire de permis de toute autre exigence  pertinente. Le titulaire de permis a la responsabilité de prendre connaissance  de tous les règlements et de toutes les conditions de permis applicables et d&#39;y  adhérer.  </p>  </div>
<a name="toc"></a>
<a id="toc"></a><h2 className="reportHeading2">Table des matières</h2>  <ul style="list-style-type: none; padding-left: 0px;">
<li style="list-style-type: none;"><a href="#sec-1"><strong>1.0 Introduction</strong></a>
<ul>
<li style="list-style-type: none;"><a href="#sec-1-1">1.1 Objet</a></li>
<li style="list-style-type: none;"><a href="#sec-1-2">1.2 Portée</a></li>
<li style="list-style-type: none;"><a href="#sec-1-3">1.3 Lois pertinentes</a></li>
<li style="list-style-type: none;"><a href="#sec-1-4">1.4 Normes et lignes directrices nationales et  internationales</a></li>
</ul>
</li>
<li style="list-style-type: none;"><a href="#sec-2"><strong>2.0 Contexte</strong></a></li>
<li style="list-style-type: none;"><a href="#sec-3"><strong>3.0 Exigences et orientation</strong></a>
<ul>
<li style="list-style-type: none;"><a href="#sec-3-1">3.1 Gérer la fatigue et les heures de travail des  travailleurs</a>
<ul>
<li style="list-style-type: none;"><a href="#sec-3-1-1">3.1.1 Rôles et responsabilités</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-2">3.1.2 Formation</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-3">3.1.3 Déterminer et gérer la fatigue des travailleurs</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-4">3.1.4 Situations durgence ou circonstances  exceptionnelles</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-5">3.1.5 Contrôle des changements aux horaires de quart</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-6">3.1.6 Détermination et résolution des problèmes</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-7">3.1.7 Évaluation et amélioration continue</a></li>
<li style="list-style-type: none;"><a href="#sec-3-1-8">3.1.8 Dossiers</a></li>
</ul>
</li>
<li style="list-style-type: none;"><a href="#sec-3-2">3.2 Limites pour les heures de travail et les  périodes de récupération</a>
<ul>
<li style="list-style-type: none;"><a href="#sec-3-2-1">3.2.1 Limites pour les heures de travail</a></li>
<li style="list-style-type: none;"><a href="#sec-3-2-2">3.2.2 Périodes de récupération</a></li>
</ul>
</li>
</ul>
</li>
<li style="list-style-type: none;"><a href="#glossary"><strong>Glossaire</strong></a></li>
<li style="list-style-type: none;"><a href="#references"><strong>Bibliographie</strong></a></li>
<li style="list-style-type: none;"><a href="#addtl-info"><strong>Renseignements  supplémentaires</strong></a>
</li>
</ul>
<a name="1.0"></a>
<h2><a id="sec-1"></a>1.0 Introduction</h2>  <p>La performance  humaine est un facteur clé qui contribue à la sûreté des installations  nucléaires. C&#39;est pourquoi la Commission canadienne de sûreté nucléaire (CCSN)  exige des titulaires de permis qu&#39;ils mettent en œuvre et tiennent à jour des  programmes relatifs à la performance humaine. Ces programmes abordent une vaste  gamme de facteurs ayant une incidence sur la performance humaine pour minimiser  le potentiel d&#39;erreurs. L&#39;un de ces facteurs est l&#39;aptitude au travail des  travailleurs.</p>  <p> Il  est largement reconnu que la fatigue a des effets sur l&#39;aptitude au travail parce  qu&#39;elle pourrait diminuer de nombreux aspects de la performance humaine. C&#39;est  pourquoi les titulaires de permis doivent tenir compte de la fatigue et des  heures de travail dans leur approche pour s&#39;assurer que les travailleurs sont  aptes au travail.</p>
<a name="1.1"></a>
<h3><a id="sec-1-1"></a>1.1 Objet</h3>  <p>Le  présent document d&#39;application de la réglementation a pour objet de préciser  les exigences et l&#39;orientation en matière de gestion de la fatigue et des  heures de travail des travailleurs.</p>
<a name="1.2"></a>
<h3><a id="sec-1-2"></a>1.2 Portée</h3>  <p>Ce  document d&#39;application de la réglementation est destiné au personnel  travaillant dans les centrales nucléaires canadiennes et au réacteur national  de recherche universel des Laboratoires de Chalk  River lorsqu&#39;un permis d&#39;exploitation est en vigueur. </p>  <p>Les exigences et l&#39;orientation de ce document s&#39;appliquent  à tous les travailleurs qui travaillent sur les systèmes liés à la sûreté ou qui  exécutent des tâches liées à la sûreté pouvant avoir un effet immédiat et  direct sur la sûreté de l&#39;installation autorisée. Conformément au <cite>Règlement général sur la sûreté et la  réglementation nucléaires</cite>, un travailleur est défini comme «&nbsp;une  personne qui effectue un travail mentionné dans un permis&nbsp;». Cette  définition s&#39;applique aux travailleurs embauchés par un titulaire de permis,  ainsi qu&#39;aux entrepreneurs ou sous-traitants lorsqu&#39;ils effectuent un travail  mentionné dans un permis.</p>
<a name="1.3"></a>
<h3><a id="sec-1-3"></a>1.3 Lois  pertinentes</h3>  <p>Les  dispositions de la <cite>Loi sur la sûreté et  la réglementation nucléaires</cite> (LSRN) et de ses règlements qui s&#39;appliquent  au présent document sont les suivantes&nbsp;:</p>  <ul>
<li>Le  sous-alinéa&nbsp;9<em>a</em>)(i) de la Loi  stipule que la Commission a notamment pour mission «&nbsp;de réglementer le  développement, la production et l&#39;utilisation de l&#39;énergie nucléaire ainsi que  la production, la possession et l&#39;utilisation des substances nucléaires, de l&#39;équipement  réglementé et des renseignements réglementés afin que le niveau de risque  inhérent à ces activités tant pour la santé et la sécurité des personnes que  pour l&#39;environnement, demeure acceptable&nbsp;»</li>
<li>L&#39;alinéa&nbsp;12(1)<em>a</em>) du <cite>Règlement général sur la sûreté et la réglementation nucléaires </cite>indique  que chaque titulaire de permis doit «&nbsp;veiller à ce qu&#39;il y ait  suffisamment de travailleurs qualifiés pour exercer l&#39;activité autorisée en  toute sécurité et conformément à la Loi, à ses règlements et au permis&nbsp;»</li>
<li>L&#39;alinéa&nbsp;12(1)<em>b</em>) du <cite>Règlement général sur la sûreté et la réglementation nucléaires </cite>indique  que chaque titulaire de permis doit «&nbsp;former les travailleurs pour qu&#39;ils  exercent l&#39;activité autorisée conformément à la Loi, à ses règlements et au  permis&nbsp;»</li>
<li>L&#39;alinéa&nbsp;17<em>b</em>) du <cite>Règlement général sur la sûreté et la réglementation nucléaires</cite> indique que chaque travailleur doit «&nbsp;se conformer aux mesures prévues par  le titulaire de permis pour protéger l&#39;environnement, préserver la santé et la  sécurité des personnes, maintenir la sécurité et contrôler les niveaux et les  doses de rayonnement, ainsi que le rejet de substances nucléaires radioactives  et de substances dangereuses dans l&#39;environnement&nbsp;»</li>
<li>Le  sous-alinéa&nbsp;17<em>c</em>)(i) du <cite>Règlement général sur la sûreté et la  réglementation nucléaires</cite> indique que chaque travailleur doit  «&nbsp;signaler sans délai à son supérieur ou au titulaire de permis toute  situation, où, à son avis, il pourrait y avoir une augmentation considérable du  niveau de risque pour l&#39;environnement ou pour la santé et la sécurité des  personnes&nbsp;»</li>
<li>L&#39;alinéa  17<em>e</em>) du <cite>Règlement général sur la sûreté et la réglementation nucléaires</cite> indique que le travailleur doit «&nbsp;prendre toutes les précautions  raisonnables pour veiller à sa propre sécurité et à celle des personnes se trouvant  sur les lieux de l&#39;activité autorisée, à la protection de l&#39;environnement et du  public ainsi qu&#39;au maintien de la sécurité des installations nucléaires et des  substances nucléaires&nbsp;»</li>
<li>L&#39;alinéa&nbsp;6<em>d</em>) du <cite>Règlement sur les installations nucléaires de catégorie I</cite> indique qu&#39;une demande de permis pour exploiter une installation nucléaire de  catégorie&nbsp;I doit comprendre les renseignements concernant «&nbsp;les  mesures, politiques, méthodes et procédures proposées pour l&#39;exploitation et l&#39;entretien  de l&#39;installation nucléaire&nbsp;»</li>
<li>L&#39;alinéa&nbsp;6<em>n</em>) du <cite>Règlement sur les installations nucléaires de catégorie I</cite> indique qu&#39;une demande de permis pour exploiter une installation nucléaire de  catégorie&nbsp;I doit comprendre les renseignements concernant «&nbsp;les résultats obtenus grâce à  l&#39;application du programme de recrutement, de formation et de qualification des  travailleurs liés à l&#39;exploitation et à l&#39;entretien de l&#39;installation  nucléaire&nbsp;»</li>
<li>L&#39;article&nbsp;38  du <cite>Règlement sur la sécurité nucléaire</cite> indique ce qui suit&nbsp;: «&nbsp;chaque titulaire de permis doit élaborer un  programme de sensibilisation des surveillants et le met en application de façon  continue pour faire en sorte que ceux-ci soient formés pour reconnaître, chez  les employés et les entrepreneurs, les changements de comportement qui  pourraient constituer une menace pour la sécurité de l&#39;installation où il  exerce des activités autorisées&nbsp;»</li>  </ul>
<a name="1.4"></a>
<h3><a id="sec-1-4"></a>1.4 Normes  et lignes directrices nationales et internationales</h3>  <p>L&#39;Agence  internationale de l&#39;énergie atomique (AIEA) a établi que les installations nucléaires  devaient disposer d&#39;un programme d&#39;aptitude au travail. [1, 2] Ce document d&#39;application  de la réglementation prend en compte les recommandations de l&#39;AIEA concernant  les restrictions relatives au nombre excessif d&#39;heures supplémentaires, les exigences  obligatoires en matière de périodes de repos entre les quarts de travail et les  lignes directrices sur l&#39;aptitude au travail liée aux heures de travail. [1, 2,  3, 4]</p>  <p> Il  existe un vaste consensus sur le plan international selon lequel les risques  liés à la fatigue peuvent être gérés par l&#39;intermédiaire d&#39;un système de  gestion de la sûreté de l&#39;organisation. [5] Les exigences et les directives de  programme en ce qui touche la gestion de la fatigue des travailleurs sont conformes  à la norme relative aux systèmes de gestion du Groupe CSA établie dans le  fondement d&#39;autorisation (p.&nbsp;ex. N286-05F, <cite>Exigences relatives au système de gestion des centrales nucléaires</cite>).  [6]</p>
<a name="2.0"></a>
<h2><a id="sec-2"></a>2.0 Contexte</h2>  <p>Aux  fins du présent document, la fatigue est définie comme un état qui se caractérise  par une diminution des capacités mentales ou physiques due à un manque de  sommeil, à une période d&#39;éveil prolongée, à une phase du rythme circadien ou à  la charge de travail.. Une augmentation de la fatigue se traduit par une baisse  de nombreux aspects de la performance humaine, en particulier la vigilance. La  vigilance est essentielle à de nombreuses tâches cognitives. La récupération,  particulièrement la récupération de la fonction cognitive, nécessite une  période de sommeil suffisante.</p>  <p> Les  horaires de travail contribuent de manière importante à la fatigue puisqu&#39;ils  établissent les limites en matière de moment du sommeil et d&#39;heures disponibles  pour dormir. Les aspects principaux d&#39;un horaire de travail qui ont une  incidence sur la fatigue sont le travail de nuit, les quarts de travail  prolongés, le nombre de quarts de travail consécutifs et les congés entre les  blocs de quarts.</p>  <p> Même  si les limites sur les heures de travail sont respectées, il peut arriver qu&#39;un  travailleur éprouve de la fatigue. C&#39;est pourquoi ce document précise des  exigences et des directives supplémentaires relatives à la gestion de la  fatigue qui doivent être intégrées dans le système de gestion du titulaire de  permis.</p>  <p> Des  rapports de recherche indépendants commandés par la CCSN sur plusieurs années  ont été pris en compte dans l&#39;élaboration de ce document d&#39;application de la  réglementation. [7, 8, 9]</p>
<a name="3.0"></a>
<h2><a id="sec-3"></a>3.0 Exigences  et orientation</h2>
<a name="3.1"></a>
<h3><a id="sec-3-1"></a>3.1 Gérer  la fatigue et les heures de travail des  travailleurs </h3>  <p>Les  titulaires de permis doivent gérer la fatigue et les heures de travail des  travailleurs conformément à leur système de gestion. Les exigences suivantes  doivent être notamment appliquées pour gérer la fatigue et les heures de  travail des travailleurs.</p>  <h4><a id="sec-3-1-1"></a>3.1.1 Rôles et responsabilités</h4>  <p>Les titulaires de permis doivent définir et documenter les rôles et les  responsabilités des personnes qui participent à la gestion de la fatigue et des  heures de travail du personnel travaillant sur les systèmes liés à la sûreté ou  exécutant des tâches liées à la sûreté pouvant avoir  un effet immédiat et direct sur la sûreté de l&#39;installation autorisée, y compris&nbsp;:</p>  <ol>
<li>les cadres supérieurs</li>
<li>les superviseurs de travailleurs qui  exécutent des tâches liées à la sûreté ou qui travaillent sur des systèmes liés  à la sûreté </li>
<li>les travailleurs qui exécutent des  tâches liées à la sûreté ou qui travaillent sur des systèmes liés à la sûreté</li>
<li>les titulaires de postes de soutien  clés participant à la gestion de la fatigue et des heures de travail des  travailleurs (p.&nbsp;ex. personnel médical, ressources humaines, responsables  de la planification et des horaires de travail)</li>
<li>les organisations d&#39;entrepreneurs</li>
<li>les personnes ayant le pouvoir d&#39;approuver  le travail au-delà des limites des heures de travail et les périodes de  récupération dans les situations d&#39;urgence ou les circonstances exceptionnelles  précisées à la section 3.1.4</li>  </ol>  <h4><a id="sec-3-1-2"></a>3.1.2 Formation</h4>  <p>Les  titulaires de permis doivent s&#39;assurer que les personnes qui ont des rôles et  des responsabilités en lien avec la gestion de la fatigue et des heures de  travail des travailleurs reçoivent une formation initiale et une formation  continue proportionnelle aux rôles et aux responsabilités précisés à la section  3.1.1.</p>  <p> <strong>Orientation</strong></p>  <p>La  formation sur la fatigue et sur les mesures permettant de gérer la fatigue devrait  tenir compte des éléments suivants&nbsp;:</p>  <ul>
<li> les  causes, les risques et les conséquences de la fatigue (p. ex. les effets de la  fatigue et des rythmes circadiens sur la vigilance et la performance,  l&#39;importance du sommeil et les stratégies pour optimiser les bienfaits des occasions  de récupération, les désordres du sommeil et leur traitement, les symptômes de  la fatigue et les mesures pour réduire les effets de la fatigue) </li>
<li>les  mesures que prend le titulaire de permis pour gérer la fatigue et les heures de  travail des travailleurs (p.&nbsp;ex. les rôles et les responsabilités en  matière de gestion de la fatigue et de contrôle des heures de travail, le  processus à suivre quand on soupçonne qu&#39;une baisse de performance est causée  par la fatigue) </li>
<li>les  exigences réglementaires en matière de fatigue et d&#39;heures de travail</li>  </ul>  <h4><a id="sec-3-1-3"></a>3.1.3 Déterminer et gérer la fatigue des travailleurs</h4>  <p>Dans  le cadre du programme d&#39;aptitude au travail, les titulaires de permis doivent  disposer d&#39;un processus pour identifier et gérer les travailleurs qui ont des  limitations temporaires ou continues, liées à la fatigue pouvant les rendre  incapables d&#39;accomplir les tâches qui leur sont assignées. Ce processus doit tenir  compte des éléments suivants&nbsp;:</p>  <ol>
<li>les attentes en ce qui concerne l&#39;auto-signalement  quand les travailleurs croient qu&#39;ils sont trop fatigués pour accomplir les  tâches qui leur sont assignées de manière sûre et avec compétence</li>
<li>les mesures à prendre par le  superviseur s&#39;il croit, par le biais d&#39;un auto-signalement ou par l&#39;observation,  qu&#39;un travailleur peut être incapable, en raison de la fatigue, d&#39;accomplir les  tâches qui lui sont assignées de manière sûre et avec compétence</li>
<li>l&#39;identification et la gestion des  travailleurs avec un problème de santé qui entraîne une augmentation du risque  d&#39;éprouver de la fatigue</li>
<li>la détermination et la documentation  du ou des lieux de sieste acceptables, si elle est autorisée, ainsi que du  temps devant s&#39;écouler avant de reprendre les tâches après une sieste et le  processus de transfert des tâches avant et après une sieste</li>  </ol>  <p><strong>Orientation</strong></p>  <p> Les  titulaires de permis devraient définir et mettre en œuvre un ensemble de  contrôles et de conditions permettant de réduire la fatigue ou le risque d&#39;erreurs  liées à la fatigue, comme&nbsp;:</p>  <ul>
<li>cultiver  un milieu favorisant l&#39;auto-signalement des travailleurs quand ils croient qu&#39;ils  sont trop fatigués pour accomplir leurs tâches de manière sûre ou avec  compétence</li>
<li>avoir  recours à une surveillance supplémentaire et à une vérification indépendante  quand le risque de fatigue est le plus élevé (p.&nbsp;ex. durant les quarts de  nuit, à la fin d&#39;un quart, si la durée de travail dépasse 12 heures)</li>
<li>planifier  les tâches liées à la sûreté en dehors des périodes de grande fatigue (c.-à-d.,  de minuit à 5&nbsp;h), si possible</li>
<li>effectuer  la rotation des travailleurs selon des tâches faisant appel à des charges de  travail cognitives et physiques variées, si possible</li>
<li>offrir  un milieu de travail conçu pour favoriser la vigilance (p.&nbsp;ex. éclairage,  température et niveau d&#39;humidité adéquats) </li>
<li>permettre  des périodes de repos ou de siestes selon des conditions adéquates définies  (p.&nbsp;ex. changement de tâches, lieu, durée)</li>  </ul>  <p>D&#39;autres renseignements sont disponibles dans les documents  suivants&nbsp;:</p>  <ul>
<li>CCSN, RD-204, <cite>Accréditation  des personnes qui travaillent dans des centrales nucléaires</cite>, Ottawa,  Canada, 2008.</li>
<li>CCSN, G-323, <cite>Assurer  la présence dun nombre suffisant de travailleurs qualifiés aux installations  nucléaires de catégorie I – Effectif minimal</cite>, Ottawa, Canada, 2007.</li>  </ul>  <h4><a id="sec-3-1-4"></a>3.1.4 Situations  d&#39;urgence ou circonstances exceptionnelles</h4>  <p>Les  titulaires de permis doivent tenir compte de la fatigue et des limites  relatives aux heures de travail lorsqu&#39;ils planifient la continuité des  activités.</p>  <p> Les  titulaires de permis doivent définir un processus pour le dépassement des  limites, précisées à la section&nbsp;3.2, dans les situations d&#39;urgence ou en  cas de circonstances exceptionnelles. Ce processus doit préciser les contrôles  et les conditions à mettre en place pour diminuer la probabilité que de la  fatigue et des erreurs liées à la fatigue se produisent.</p>  <p>Bien  que ce document prévoie des dispositions concernant l&#39;approbation interne de  dépassement des limites en cas d&#39;urgences ou de circonstances exceptionnelles,  les exigences réglementaires concernant les rapports à soumettre demeureront en  vigueur.</p>  <p><strong>Orientation</strong></p>  <p>Il  peut survenir des situations d&#39;urgence ou des circonstances exceptionnelles  (p.&nbsp;ex. des conditions météorologiques extrêmes) au cours desquelles les  titulaires de permis doivent garder des travailleurs essentiels sur le site. Dans  les plans établis pour gérer de telles situations, il faut définir les contrôles  et les conditions à mettre en œuvre allant au-delà de ceux énumérés à la  section 3.1.3, comme&nbsp;:</p>  <ul>
<li>fournir  des possibilités suffisantes et des lieux adéquatement aménagés pour permettre  un sommeil réparateur (p.&nbsp;ex. surface de sommeil horizontale, lieu sombre,  bruits perturbateurs minimaux)</li>
<li>reporter  les activités non essentielles</li>
<li>La  justification des contrôles et des conditions, y compris les périodes de repos,  devrait être documentée.</li>  </ul>  <p>D&#39;autres  renseignements sont disponibles dans le document suivant&nbsp;:
<ul>
<li>Groupe CSA,&nbsp;CSA Z1600-F08, <cite>Programmes de gestion des mesures durgence et de continuité des  activités</cite>, Toronto,  Canada, 2008.</li>  </ul>  <h4><a id="sec-3-1-5"></a>3.1.5 Contrôle  des changements aux horaires de quart</h4>  <p>Les  changements aux horaires de quart (p.&nbsp;ex. les modifications à l&#39;heure de  début du quart ou à sa longueur) doivent être contrôlés.</p>  <p> Une  fois que les horaires de quart modifiés sont mis en œuvre, leur efficacité doit  être évaluée.</p>  <h4><a id="sec-3-1-6"></a>3.1.6 Détermination et résolution des problèmes</h4>  <p>Lorsque  surviennent des problèmes liés à la fatigue ou aux heures de travail, ces  derniers doivent être déterminés, consignés, évalués, traités et résolus  adéquatement.</p>  <p> Des  analyses des tendances doivent être réalisées pour déterminer les causes et les  problèmes récurrents liés à la fatigue ou aux heures de travail.</p>  <p><strong>Orientation</strong></p>  <p>Lorsqu&#39;une erreur humaine pourrait  être la cause ou avoir contribué à un événement, l&#39;équipe chargée de l&#39;analyse de  l&#39;événement devrait consigner et tenir compte des facteurs liés à la fatigue  touchant les personnes directement concernées (p. ex. horaire de travail et  nombre d&#39;heures de sommeil précédant l&#39;événement; nombre d&#39;heures consécutives  de veille au moment de l&#39;événement) ainsi qu&#39;établir si la performance des  personnes concernées reflétait les signes de la fatigue. </p>  <h4><a id="sec-3-1-7"></a>3.1.7 Évaluation et amélioration continue </h4>  <p>Des  évaluations doivent être réalisées afin de déterminer l&#39;efficacité du système  de gestion dans la gestion de la fatigue et des heures de travail des  travailleurs.</p>  <p> Chaque  année, une évaluation doit être réalisée afin de s&#39;assurer que les heures de  travail peuvent être gérées au cours de l&#39;exploitation normale, y compris lors  des arrêts pour entretien, en tenant compte des niveaux de personnel existants  et prévus.</p>  <p>En  ce qui concerne l&#39;effectif minimal, une évaluation annuelle des heures de  travail doit être réalisée pour aider les titulaires de permis à évaluer le  caractère adéquat du nombre d&#39;employés affectés aux postes concernés.</p>  <p><strong>Orientation</strong></p>  <p>Les  titulaires de permis devraient utiliser plusieurs méthodes pour évaluer l&#39;efficacité  du système de gestion dans la gestion de la fatigue et des heures de travail  des travailleurs, y compris&nbsp;:</p>  <ul>
<li>des indicateurs de performance</li>
<li>des analyses des tendances</li>
<li>l&#39;expérience en exploitation interne et externe </li>
<li>l&#39;analyse  comparative</li>
<li>l&#39;autoévaluation</li>
<li>des évaluations indépendantes</li>
<li>des enquêtes auprès des travailleurs</li>  </ul>  <p> Le nombre d&#39;employés devrait être suffisant pour garantir que les  activités de formation, les congés de maladie ou la rotation de personnel n&#39;entraînent  pas d&#39;infractions en matière d&#39;heures de travail.</p>  <h4><a id="sec-3-1-8"></a>3.1.8 Dossiers</h4>  <p>En  ce qui a trait aux travailleurs qui sont employés directement par un titulaire  de permis (voir la section 3.2), les titulaires de permis doivent conserver des  dossiers relatifs aux quarts travaillés et aux approbations de travail  accordées au-delà des limites mentionnées aux sections 3.2.1 et 3.2.2 pendant  au moins cinq ans.</p>  <p> En  ce qui a trait aux travailleurs qui sont employés par un entrepreneur ou un  sous-traitant (voir la section 3.2), le titulaire de permis doit veiller à ce  que les dossiers relatifs aux quarts travaillés et aux approbations de travail  accordées au-delà des limites mentionnées aux sections 3.2.1 et 3.2.2 soient  conservés pendant au moins cinq ans.</p>
<a name="3.2"></a>
<h3><a id="sec-3-2"></a>3.2 Limites  pour les heures de travail et les périodes de récupération</h3>  <p>Les limites  pour les heures de travail (section 3.2.1) et les périodes de récupération  (section 3.2.2) doivent s&#39;appliquer à tous les travailleurs exécutant des  tâches sur des systèmes liés à la sûreté à l&#39;installation autorisée, y compris pour  les tâches suivantes&nbsp;:</p>  <ol>
<li>opérations ou supervision sur le  site des opérations sur des systèmes liés à la sûreté (p.&nbsp;ex. personnel  accrédité, opérateurs de la salle de commande, opérateurs sur le terrain,  opérateurs de manutention du combustible)</li>
<li>entretien ou supervision sur le site  des travaux d&#39;entretien pour des systèmes liés à la sûreté</li>  </ol>  <p>De plus,  les limites pour les heures de travail et les périodes de récupération doivent  s&#39;appliquer à tous les travailleurs qui accomplissent des tâches liées à la  sûreté pouvant avoir un effet immédiat et direct sur la sûreté de l&#39;installation  autorisée, y compris les personnes occupant les postes suivants ou réalisant  les tâches suivantes&nbsp;:</p>  <ol>
<li>personnel assurant l&#39;effectif minimal</li>
<li>corps de pompiers industriel</li>
<li>agents de sécurité nucléaire et  membres de l&#39;équipe d&#39;intervention nucléaire</li>  </ol>  <h4><a id="sec-3-2-1"></a>3.2.1 Limites pour les heures de travail</h4>  <p>Un  quart normal de travail ne doit pas dépasser 12 heures. Rarement (p.&nbsp;ex.  pour pourvoir un poste vacant non planifié de l&#39;effectif minimal ou pour  réaliser une tâche essentielle imprévue), le nombre d&#39;heures de travail au  cours d&#39;une période de 24&nbsp;heures peut se prolonger jusqu&#39;à 16&nbsp;heures,  mais ne doit pas dépasser ce nombre. Dans la mesure du possible, les quarts de  nuit ne devraient pas dépasser 12 heures.</p>  <p> Le  nombre d&#39;heures de travail au cours d&#39;une période de 48&nbsp;heures ne doit pas  dépasser 26&nbsp;heures.</p>  <p>Le  nombre d&#39;heures de travail au cours d&#39;une période de 7 jours ne doit pas  dépasser 60&nbsp;heures.</p>  <p>Le  nombre d&#39;heures de travail au cours d&#39;une période de six semaines ne doit pas  dépasser 312&nbsp;heures (soit l&#39;équivalent de 52&nbsp;heures par semaine en  moyenne).</p>  <p>Le  nombre d&#39;heures de travail au cours d&#39;une période de 12 mois ne doit pas  dépasser 2&nbsp;400&nbsp;heures.</p>  <p>À l&#39;exception  des changements de quarts, tout le temps de présence au travail doit être pris  en compte dans la détermination de la conformité aux limites définies dans  cette section. Le temps de changement de quarts devrait normalement être  inférieur à 30&nbsp;minutes par quart.</p>  <h4><a id="sec-3-2-2"></a>3.2.2 Périodes de récupération</h4>  <p>Pour  chaque période de 24 heures, un travailleur doit normalement avoir un repos de  11 heures consécutives. À de rares occasions (p. ex. lorsque l&#39;effectif minimal  n&#39;est pas atteint en raison d&#39;une absence imprévue ou qu&#39;une tâche essentielle  imprévue doit être réalisée), ce repos peut être réduit à 8 heures. Il ne doit  cependant pas être inférieur à 8 heures.</p>  <p> Pour  les personnes travaillant sur des quarts de plus de 10 heures et allant jusqu&#39;à  12 heures&nbsp;:</p>  <ol>
<li>Il ne faut pas dépasser le maximum  de cinq quarts de jour consécutifs ou de quatre quarts de nuit consécutifs.</li>
<li>Un bloc de 3 ou 4 quarts de jour  consécutifs doit être suivi d&#39;une période de récupération d&#39;au moins  36&nbsp;heures.</li>
<li>Un bloc de 5 quarts de jour  consécutifs ou plus ou de 2 quarts de nuit consécutifs doit être suivi d&#39;une  période de récupération d&#39;au moins 48&nbsp;heures.</li>
<li>Un bloc de 3 quarts de nuit  consécutifs ou plus doit être suivi d&#39;une période de récupération d&#39;au moins  72&nbsp;heures.</li>
<li>Une période de récupération d&#39;au  moins 36&nbsp;heures doit être accordée avant qu&#39;un travailleur reprenne des  quarts de 12 heures après avoir effectué un bloc de quarts de jour de 8 heures  surnuméraires.</li>  </ol>  <p>Pour  les personnes effectuant des quarts de huit à dix heures&nbsp;:</p>  <ol>
<li>Toute période de 7 jours consécutifs  doit comprendre une période de récupération d&#39;au moins 36&nbsp;heures  consécutives.</li>
<li>Le maximum de 5 quarts de nuit  consécutifs ne doit pas être dépassé. Un bloc de 4 quarts de nuit consécutifs  ou plus doit être suivi d&#39;une période de récupération d&#39;au moins  48&nbsp;heures.</li>
<li>Les changements de quarts doivent s&#39;effectuer  dans le sens horaire (p.&nbsp;ex. jours, soirs, nuits).</li>  </ol>  <p>Le  tableau&nbsp;1 indique les limites pour les heures de travail et les périodes  de récupération requises décrites dans les sections 3.2.1 et 3.2.2,  respectivement.</p>  <table border="1" className="widthFull">
<caption className="left">
<strong>Tableau 1 : Limites pour les heures  de travail et les périodes de récupération requises </strong>
</caption>
<thead>
<tr>
<th className="left">Périodes</th>
<th className="left">Limites pour les<br/>
heures de travail<br/>
(voir la section 3.2.1)</th>
</tr>
</thead>
<tbody>
<tr>
<td>24&nbsp;heures (quart normal)</td>
<td>12</td>
</tr>
<tr>
<td>24 heures (limite supérieure en de rares occasions)</td>
<td>16</td>
</tr>
<tr>
<td>48 heures</td>
<td>26</td>
</tr>
<tr>
<td>7 jours</td>
<td>60</td>
</tr>
<tr>
<td>6 semaines</td>
<td>312</td>
</tr>
<tr>
<td>12 mois</td>
<td>2 400</td>
</tr>
<tr>
<td colSpan="2">Périodes de récupération pour les quarts de plus<br/>
de 10 heures et jusqu&#39;à 12 heures</td>
</tr>
<tr>
<th>&nbsp;</th>
<th className="left">Heures consécutives de congé<br/>
(voir la section 3.2.2)</th>
</tr>
<tr>
<td>Suivant un bloc de trois ou quatre jours</td>
<td>36</td>
</tr>
<tr>
<td>Suivant un bloc de cinq jours ou plus ou de deux nuits</td>
<td>48</td>
</tr>
<tr>
<td>Suivant un bloc de trois nuits ou plus</td>
<td>72</td>
</tr>
<tr>
<td>24&nbsp;heures (quart normal)</td>
<td>11</td>
</tr>
<tr>
<td>24 heures (limite inférieure en de rares occasions)</td>
<td>8</td>
</tr>
<tr>
<th colSpan="2">Périodes de récupération pour les quarts de 8 à 10 heures</th>
</tr>
<tr>
<td>Chaque période de sept jours consécutifs</td>
<td>36</td>
</tr>
<tr>
<td>Suivant un bloc de quatre nuits ou plus</td>
<td>48</td>
</tr>
</tbody>
<tfoot>
</tfoot>  </table>
<a name="glossary"></a>
<h2><a id="glossary"></a>Glossaire</h2>  <dl className="margins-removed">
<dt><strong>bloc de quarts consécutifs</strong></dt>
<dd>Série de quarts consécutifs ayant la même heure de début et de fin et qui est suivie dune période minimale de récupération et dun ensemble subséquent de quarts consécutifs.</dd>
<dt><strong>changement de quarts de travail</strong></dt>
<dd>Transfert dinformation et de responsabilités entre deux personnes au sein dune unité de travail, lune prenant la relève de lautre. Les activités de changement de quarts peuvent comprendre, sans sy limiter, des discussions sur létat de léquipement de la centrale et létat des activités en cours, comme les tests prolongés sur les systèmes et les composants de sûreté.</dd>
<dt><strong>continuité des activités</strong></dt>
<dd>Processus continu soutenu par la direction et adéquatement financé visant à garantir que les mesures nécessaires sont prises pour déterminer limpact des pertes potentielles et pour maintenir des stratégies et des plans de récupération viables pour la continuité des opérations.</dd>
<dt><strong>effectif minimal</strong></dt>
<dd>Nombre minimal de travailleurs qualifiés qui doivent être présents en tout temps pour veiller à lexploitation sûre de linstallation nucléaire et fournir une capacité dintervention adéquate en cas durgence.</dd>
<dt><strong>entrepreneur</strong></dt>
<dd>Organisation ou personne qui fournit des services à une autre organisation conformément aux caractéristiques, aux modalités et aux conditions qui font lobjet dun accord commun.</dd>
<dt><strong>entretien</strong></dt>
<dd>Activités organisées, à la fois administratives et techniques, pour le maintien des structures, des systèmes et des composants en bonne condition de fonctionnement, y compris les aspects préventifs et correctifs (réparations).</dd>
<dt><strong>exploitation normale</strong></dt>
<dd>Exploitation dune installation dotée de réacteurs à lintérieur de limites et de conditions dexploitation définies, y compris le démarrage, lexploitation en puissance, la mise à larrêt, létat darrêt, lentretien, les essais et le rechargement de combustible.</dd>
<dt><strong>fatigue</strong></dt>
<dd>État qui se caractérise par une diminution des capacités mentales ou physiques due à un manque de sommeil, à une période déveil prolongée, à une phase du rythme circadien ou à la charge de travail.</dd>
<dt><strong>fondement dautorisation</strong></dt>
<dd>Ensemble dexigences et de documents visant une installation ou une activité réglementée, qui comprend : •	les exigences réglementaires stipulées dans les lois et règlements applicables •	les conditions et les mesures de sûreté et de réglementation décrites dans le permis relatif à linstallation ou à lactivité et les documents cités en référence directement dans ce permis •	les mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande performance humaine Résultats des comportements, des fonctions et des gestes humains dans un environnement précis qui reflètent la capacité des travailleurs et des gestionnaires à obtenir la performance déterminé du système dans les conditions dutilisation de celui-ci.</dd>
<dt><strong>quarts de jour surnuméraires</strong></dt>
<dd>Séquences périodiques de quarts de jour de huit heures qui sont intégrées dans lhoraire de quarts dun travailleur.</dd>
<dt><strong>quart de nuit</strong></dt>
<dd>Quart comportant une présence au travail entre minuit et 5 h.</dd>
<dt><strong>rythme circadien</strong></dt>
<dd>Variation des fonctions physiologiques se répétant selon un cycle denviron 24 heures. Ces fonctions sont contrôlées par lhorloge biologique du cerveau. Parmi les exemples, on compte le cycle sommeil-éveil, la vigilance, la performance cognitive et la température corporelle.</dd>
<dt><strong>systèmes liés à la sûreté</strong></dt>
<dd>Systèmes et leurs composants et supports associés qui, de par leur incapacité à exécuter leurs fonctions nominales, peuvent avoir un impact sur la sûreté radiologique du public ou du personnel de la centrale. Ces systèmes et leurs composants comprennent : •	la régulation (y compris lors du démarrage et de larrêt contrôlés) et le refroidissement du cœur du réacteur dans des conditions normales (y compris tous les états dexploitation normale et toutes les conditions darrêt) •	la régulation, larrêt et le refroidissement du cœur du réacteur dans des conditions transitoires prévues et des conditions daccident, et le maintien du cœur du réacteur dans un état darrêt sûr pendant une période prolongée à la suite de ces conditions •	les contrôles visant à limiter les rejets de matières radioactives et lexposition du personnel de la centrale et/ou du public en vue de respecter les critères établis par lorganisme de réglementation à légard de lexposition au rayonnement pendant et après des conditions normales, des conditions transitoires prévues et des conditions daccident.</dd>
<dt><strong>travailleur</strong></dt>
<dd>Personne qui effectue un travail mentionné dans un permis.<br/>
<br/>
Remarque : Cette définition sapplique tant aux travailleurs directement employés par un titulaire de permis, quà ceux employés par les entrepreneurs ou les sous-traitants. </dd>
<dt><strong>travailleur accrédité</strong></dt>
<dd>Personne dont le nom figure sur un certificat daccréditation délivré par la CCSN ou à propos de laquelle un fonctionnaire désigné par la CCSN atteste quelle possède les compétences requises pour accomplir les tâches du poste mentionné dans le permis de la centrale nucléaire.</dd>
<dt><strong>urgence</strong></dt>
<dd>Situation anormale qui peut accroître le risque de préjudice à la santé et à la sécurité des personnes, à lenvironnement ou à la sécurité nationale, et qui requiert des mesures immédiates de la part du titulaire de permis. Peut comprendre, entre autres, des événements médicaux, des incendies, des rejets de gaz toxiques ou des rejets de substances radioactives.</dd>
<dt><strong>vigilance</strong></dt>
<dd>Capacité de demeurer éveillé et de rester attentif.</dd>  </dl>
<a name="references"></a>
<h2><a id="references"></a>Bibliographie </h2>  <ol>
<li>Agence internationale d&#39;énergie atomique (AIEA), Prescriptions de sûreté  particulières no&nbsp;SSR-2/2, <cite>Sûreté  des centrales nucléaires : mise en service et exploitation</cite>, Vienne,  2011.</li>
<li>AIEA, GS-G-1.2, <cite>Examen-évaluation des installations nucléaires par lorganisme de  réglementation</cite>,  Vienne, 2002.</li>
<li>AIEA, SSG-12, <cite><span lang="en">Licensing Process for Nuclear Installations</span></cite>,  Vienne, 2010.</li>
<li>AIEA, NS-G-2.14, <cite><span lang="en">Conduct of Operations at Nuclear Power Plants</span></cite>, Vienne,  2008.</li>
<li>Lerman, S. <em>et  coll.</em> « <span lang="en">Fatigue Risk Management in the Workplace</span> », <cite>Journal of Occupational and Environmental Medicine</cite> 54, 2, p. 231-258,  2012.</li>
<li>Groupe CSA, N286-05F, <cite>Exigences relatives au système de gestion des centrales nucléaires</cite>,  Toronto, Canada, confirmée en 2010. </li>
<li>Smiley, A. et C. Rudin-Brown, <cite><span lang="en">Review of Criteria for Assessing Shift  Schedules in the Nuclear Industry</span></cite>, Ottawa,  2013. </li>
<li>Kulp, K. RSP-0096, <cite><span lang="en">Development of a Regulatory Monitoring Program for Shiftwork Systems at  Canadian Nuclear Power Plants</span></cite>, Ottawa,  1999.</li>
<li>Smiley, A. et N. Moray, INFO-0318, <cite><span lang="en">A Review of 12 Hour Shifts at Nuclear  Generating Stations, Atomic Energy Control Board</span></cite>, Ottawa, Canada, 1989.</li>  </ol>
<a name="additional"></a>
<h2><a id="addtl-info"></a> Renseignements supplémentaires</h2>  <p> Les documents suivants  contiennent des renseignements supplémentaires pouvant intéresser les personnes  qui participent à la gestion de la fatigue et au contrôle des heures de travail  des travailleurs. </p>  <ol>
<li>Groupe CSA,&nbsp;Z1600-08, <cite>Programmes de  gestion des mesures durgence et de continuité des activités</cite>, Toronto, Canada, 2008.</li>
<li>Groupe  CSA, N286-12, <cite>Exigences relatives au  système de gestion des installations nucléaires</cite>, Toronto, Canada, 2012. </li>
<li>Commission canadienne de  sûreté nucléaire (CCSN), RD-204, <cite>Accréditation  des personnes qui travaillent dans des centrales nucléaires</cite>, Ottawa,  Canada, 2008.</li>
<li>CCSN, G-323, <cite>Assurer la présence dun nombre suffisant de  travailleurs qualifiés aux installations nucléaires de catégorie I – Effectif  minimal</cite>, Ottawa, Canada, 2007.
</li>  </ol>
<div style="background-color:#cecece;padding:5px;text-align:center;">
<p><a href="#toc">Table des mati&egrave;res</a></p>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }