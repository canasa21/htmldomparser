import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: " ", 
                dateModified: "2013-06-26",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-6-3-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>REGDOC-2.6.3 : Aptitude fonctionnelle : Gestion du vieillissement</h2>
<a name="preface"></a>
<h2>Préface</h2>
<p>Le document d&#39;application de la réglementation  REGDOC-2.6.3, <em>Gestion du vieillissement</em>,  fait partie de la série  de documents d&#39;application de la réglementation de la CCSN intitulée Aptitude  fonctionnelle, qui porte également sur les programmes de fiabilité et  d&#39;entretien pour les centrales nucléaires. La liste complète des séries figure  à la fin de ce document et peut être consultée à partir du site Web de la CCSN  à suretenucleaire.gc.ca/documents-de-reglementation.</p>
<p>Ce document  d&#39;application de la réglementation énonce les exigences de la CCSN relatives à  la gestion du vieillissement des structures, des systèmes et des composants  (SSC) d&#39;une centrale nucléaire. Il fournit également une orientation sur la  façon de satisfaire à ces exigences. Ce document remplace le document  d&#39;application de la réglementation RD-334, <em>Gestion  du vieillissement des centrales nucléaires,</em> publié en juin&nbsp;2011.</p>
<p>La gestion du vieillissement englobe les interventions  relatives à l&#39;ingénierie, aux opérations, à l&#39;inspection et à l&#39;entretien  visant à contrôler, à l&#39;intérieur de limites acceptables, les effets du  vieillissement physique et de l&#39;obsolescence des SSC qui se produisent au fil  du temps ou à l&#39;usage. Un programme de gestion du vieillissement consiste en un  ensemble de politiques, de processus, de procédures, de dispositions et d&#39;activités  visant à gérer le vieillissement des SSC d&#39;une centrale nucléaire. Pour une  gestion efficace du vieillissement, il faut s&#39;assurer de la fiabilité et de la  disponibilité des fonctions de sûreté essentielles tout au long de la durée de  vie de la centrale, en conformité avec le fondement d&#39;autorisation.</p>
<p>Le présent document se veut un  élément du fondement d&#39;autorisation d&#39;une installation ou d&#39;une activité  réglementée. Il sera intégré soit aux conditions et aux mesures de sûreté et de  réglementation d&#39;un permis, soit aux mesures de sûreté et de réglementation  décrites dans la demande de permis et les documents soumis à l&#39;appui de cette  demande.</p>
<div className="infohighlight">
<p><strong>Remarque importante :</strong> Ce document fait partie du  fondement d&#39;autorisation d&#39;une installation ou d&#39;une activité réglementée si on  s&#39;y réfère directement ou indirectement dans le permis (notamment dans des  documents cités en référence du titulaire de permis).</p>
<p>Le fondement d&#39;autorisation établit les conditions limites du rendement  acceptable pour une installation ou une activité réglementée et établit les  bases du programme de conformité de la CCSN à l&#39;égard de cette installation ou  activité réglementée.</p>
<p>Dans le cas où le document est un élément du fondement d&#39;autorisation,  le terme « doit » est employé pour exprimer une exigence à laquelle le  titulaire ou le demandeur de permis doit se conformer; le terme « devrait »  dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime  une option ou une mesure conseillée ou acceptable dans les limites de ce document  d&#39;application de la réglementation; et le terme « peut » exprime une  possibilité ou une capacité.</p>
<p>Aucune information contenue dans le présent document ne doit être  interprétée comme libérant le titulaire de permis de toute autre exigence  pertinente. Le titulaire de permis a la responsabilité de prendre connaissance  de tous les règlements et de toutes les conditions de permis applicables et d&#39;y  adhérer.</p>
</div>
<a name="toc"></a>
<h2 className="reportHeading2">Table des matières</h2>  <div className="IndentLeft10">
<p><a href="#P114_4141"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P115_4157">1.1 Objet</a></p>
<p><a href="#P117_4334">1.2 Portée</a></p>
<p><a href="#P121_5236">1.3 Législation pertinente</a></p>
<p><a href="#P130_7822">1.4 Normes internationales</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P135_8481"><strong>2.0 General Concepts</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P139_9010">2.1 Vieillissement et obsolescence des structures, systèmes et composants</a></p>
<p><a href="#P126_7978">2.2 Démarche systématique et intégrée de gestion du vieillissement</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P153_9844"><strong>3.0 Stratégie proactive de gestion du vieillissement</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P164_11373">3.1 Conception</a></p>
<p><a href="#P209_19671">3.2 Fabrication, construction et installation</a></p>
<p><a href="#P211_19831">3.3 Mise en service</a></p>
<p><a href="#P266_25241">3.4 Exploitation</a></p>
<p><a href="#P306_30164">3.5 Déclassement</a></p>
</div>  <div className="IndentLeft10">
<p><a href="#P171_12015"><strong>4.0 Programmes intégrés de gestion du vieillissement</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P173_12187">4.1 Dispositions organisationnelles pour la gestion efficace du vieillissement</a></p>
<p><a href="#P178_12865">4.2 Système de collecte de données et de tenue de dossiers pour appuyer la gestion du vieillissement</a></p>
<p><a href="#P179_12890">4.3 Examen préalable et sélection des structures, systèmes et composants</a></p>
<p><a href="#P190_14207">4.4 Évaluation de la gestion du vieillissement</a></p>
<p><a href="#P196_14844">4.5 Évaluations de l&#39;état</a></p>
<p><a href="#P203_15953">4.6 Programmes de gestion du vieillissement propres à des SSC particuliers</a></p>
<p><a href="#P204_15976">4.7 Gestion de l&#39;obsolescence technologique</a></p>
<p><a href="#P208_16307">4.8 Interfaces avec d&#39;autres programmes d&#39;appui</a></p>
<p><a href="#P212_16692">4.9 Mise en &oelig;uvre des PGV</a></p>
<p><a href="#P217_17136">4.10 Examen  et amélioration</a></p>  </div>
<div className="IndentLeft10">
<p><a href="#P302_26654"><strong>Appendix&nbsp;A: Caractéristiques d&#39;un programme efficace</strong></a></p>
<p><a href="#P295_25980"><strong>Appendix&nbsp;B: Exemple d&#39;une méthode d&#39;évaluation du  vieillissement</strong></a></p>
<p><a href="#P363_28109"><strong>Glossaire</strong></a></p>
<p><a href="#P283_24351"><strong>Références</strong></a></p>
<p><a href="#P126_7975"><strong>Renseignements supplémentaires</strong></a></p>  </div>
<a name="1.0"></a>
<h2><a name="P114_4141" id="P114_4141"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3><a name="P115_4157"></a>1.1 Objet</h3>
<p>Le  document REGDOC-2.6.3, <em>Gestion du  vieillissement</em>, énonce les exigences de la Commission canadienne de sûreté  nucléaire (CCSN) relatives à la gestion du vieillissement des structures,  systèmes et composants (SSC) d&#39;une centrale nucléaire. Il fournit également de  l&#39;orientation sur la façon de satisfaire à ces exigences.</p>
<p>La  gestion du vieillissement des centrales nucléaires exige la disponibilité des fonctions  de sûreté requises tout au long de la durée de vie de la centrale, et la prise  en considération des changements qui surviennent avec le temps et  l&#39;utilisation. Pour ce faire, il faut tenir compte du vieillissement physique  et de l&#39;obsolescence des SSC, dans la mesure où ils peuvent avoir des  incidences négatives directes ou indirectes sur l&#39;exploitation sûre de la  centrale nucléaire.</p>
<p>Le  présent document a pour but d&#39;aider les demandeurs et les titulaires de permis  à établir, à mettre en œuvre et à améliorer les programmes de gestion du  vieillissement (PGV) des centrales nucléaires.</p>
<a name="1.2"></a>
<h3><a name="P117_4334"></a>1.2 Portée</h3>
<p>Le document <em>Gestion du  vieillissement</em> énonce les exigences visant à fournir l&#39;assurance que la  gestion du vieillissement est prise en compte, d&#39;une manière adéquate et  proactive, dans les différentes phases du cycle de vie d&#39;une centrale  nucléaire. Ces phases peuvent s&#39;appliquer à des SSC précis ainsi qu&#39;à  l&#39;ensemble de la centrale. Des exigences particulières sont également fournies  pour l&#39;établissement, la mise en œuvre et l&#39;amélioration des PGV par  l&#39;application d&#39;une démarche systématique et intégrée.</p>
<p>Le présent document établit le cadre à l&#39;intérieur duquel les codes et  les normes peuvent être appliqués afin de fournir l&#39;assurance que le  vieillissement physique et l&#39;obsolescence des SSC sont gérés efficacement.</p>
<p>Le cas  échéant, le présent document peut s&#39;appliquer à des installations nucléaires  autres qu&#39;une centrale nucléaire, en tenant dûment compte des différences que  présentent le risque potentiel et la complexité des systèmes concernés par  rapport à ceux d&#39;une centrale nucléaire.</p>
<a name="1.3"></a>
<h3><a name="P121_5236"></a>1.3 Dispositions  législatives pertinentes</h3>
<p>Les dispositions de la <em>Loi sur la  sûreté et la réglementation nucléaires</em> (LSRN, la Loi) et de ses règlements  qui s&#39;appliquent au présent document sont les suivantes&nbsp;:</p>
<ul>
<li>Le paragraphe&nbsp;24(4) de la LSRN indique ce qui  suit&nbsp;: «&nbsp;La Commission ne délivre, ne renouvelle, ne modifie ou ne  remplace une licence ou un permis ou n&#39;en autorise le transfert que si elle est  d&#39;avis que l&#39;auteur de la demande ou, s&#39;il s&#39;agit d&#39;une demande d&#39;autorisation  de transfert, le cessionnaire, à la fois&nbsp;: <em>a)</em> est compétent pour exercer les activités visées par la licence  ou le permis; <em>b)</em> prendra, dans le  cadre de ces activités, les mesures voulues pour préserver la santé et la sûreté  des personnes, pour protéger l&#39;environnement, pour maintenir la sécurité  nationale et pour respecter les obligations internationales que le Canada a  assumées »</li>
<li>L&#39;alinéa 3(1)<em>k)</em> du <em>Règlement général sur la sûreté et la  réglementation nucléaires</em> indique ce qui suit&nbsp;: «&nbsp;La demande de  permis comprend les renseignements suivants&nbsp;: [...] <em>k</em>) la structure de gestion du demandeur dans la mesure où elle peut  influer sur l&#39;observation de la Loi et de ses règlements, y compris la  répartition interne des fonctions, des responsabilités et des pouvoirs&nbsp;»</li>
<li>Les alinéas 12(1)<em>c)</em> et <em>f)</em> du <em>Règlement général sur la sûreté et la réglementation nucléaires</em> indiquent ce qui suit&nbsp;: «&nbsp;Le titulaire de permis&nbsp;: [...] <em>c</em>) prend toutes les précautions  raisonnables pour protéger l&#39;environnement, préserver la santé et la sécurité  des personnes et maintenir la sûreté des installations nucléaires et des  substances nucléaires&nbsp;» et «&nbsp;<em>f</em>)  prend toutes les précautions raisonnables pour contrôler le rejet de substances  nucléaires radioactives ou de substances dangereuses que l&#39;activité autorisée  peut entraîner là où elle est exercée et dans l&#39;environnement »</li>
<li>Les alinéas&nbsp;6<em>d</em>), <em>m</em>) et <em>n</em>) du <em>Règlement sur les  installations nucléaires de catégorie I</em> indiquent ce qui suit&nbsp;:  «&nbsp;La demande de permis pour exploiter une installation nucléaire de  catégorie I comprend les renseignements suivants, outre ceux exigés à l&#39;article  3&nbsp;:<br/>
<em>d</em>)les mesures, politiques, méthodes et procédures proposées pour  l&#39;exploitation et l&#39;entretien de l&#39;installation nucléaire;<br/>
<em>m</em>) les responsabilités, le programme  de formation, les exigences de qualification et les mesures de requalification  des travailleurs;<br/>
<em>n</em>) les résultats obtenus grâce à  l&#39;application du programme de recrutement, de formation et de qualification des  travailleurs liés à l&#39;exploitation et à l&#39;entretien de l&#39;installation  nucléaire&nbsp;»</li>
<li>Les alinéas 14(2)<em>a)</em> et <em>c)</em> du <em>Règlement sur les installations nucléaires de catégorie I</em> indiquent  ce qui suit&nbsp;: «&nbsp;Le titulaire de permis qui exploite une installation  nucléaire de catégorie I tient un document sur <em>a</em>) les procédures d&#39;exploitation et d&#39;entretien&nbsp;» et «&nbsp;<em>c</em>) les résultats des programmes  d&#39;inspection et d&#39;entretien prévus dans les permis&nbsp;»</li>
<li>Le  paragraphe 14(4) du <em>Règlement sur les  installations nucléaires de catégorie I</em> indique ce qui suit&nbsp;:  «&nbsp;La personne qui est tenue de tenir un document visé aux alinéas (2)<em>a</em>) à <em>d</em>)  ou (3)<em>a</em>) à <em>d</em>) en application du présent article le conserve pendant les dix  ans suivant l&#39;expiration du permis d&#39;abandon délivré pour l&#39;installation  nucléaire de catégorie I&nbsp;»</li>
</ul>
<a name="1.4"></a>
<h3><a name="P130_7822"></a>1.4 Normes  internationales</h3>
<p>Le présent document est conforme à la philosophie et au contenu  technique des normes et des codes modernes. En outre, il se fonde en partie sur  les publications internationales suivantes&nbsp;:</p>
<ul>
<li><em>Ageing Management  for Nuclear Power Plants</em>, Guide de sûreté no  NS-G-2.12 de l&#39;Agence internationale de l&#39;énergie atomique (AIEA) [1] </li>
<li><em>Safe Long Term Operation of Nuclear Power  Plants</em>, Collection Rapports de sûreté no 57,  de l&#39;AIEA [2] </li>
<li><em>Glossaire du vieillissement des  centrales nucléaires</em> de l&#39;Agence pour l&#39;énergie  nucléaire de l&#39;Organisation de coopération et de développement économiques  (OCDE) [3]Titre de premier niveau </li>
</ul>
<a name="2.0"></a>
<h2><a name="P135_8481"></a>2.0 Concept  généraux</h2>
<a name="2.1"></a>
<h3><a name="P139_9010"></a>2.1 Vieillissement  et obsolescence des structures, systèmes et composants</h3>
<h4>Orientation</h4>
<p>Les  SSC d&#39;une centrale nucléaire subissent deux types de changements au fil du  temps :</p>
<ul>
<li>le  vieillissement physique, où les caractéristiques physiques et/ou de rendement des  SSC se dégradent avec le temps ou l&#39;usage</li>
<li>le  vieillissement ou l&#39;obsolescence de la technologie, où les SSC deviennent  désuets par rapport aux connaissances, normes et technologies en vigueur</li>
</ul>
<p>Le  vieillissement physique peut, au fil du temps, réduire la capacité d&#39;une structure,  d&#39;un système ou d&#39;un composant à exercer ses fonctions de sûreté à l&#39;intérieur des limites et selon  les spécifications prises en compte dans le dimensionnement et l&#39;analyse de la  sûreté. Plusieurs mécanismes de vieillissement peuvent s&#39;allier en synergie et  entraîner des effets de vieillissement inattendus ou accélérés, ou encore la  défaillance prématurée d&#39;un composant ou d&#39;un élément structural. L&#39;effet  conjugué de multiples composants ou éléments dégradés peut considérablement  nuire au rendement en matière de sûreté d&#39;un système ou d&#39;une structure. Par  exemple, même si des composants individuels dégradés respectent encore leurs  critères d&#39;aptitude au service, l&#39;effet combiné de tous les composants dégradés  pourrait entraîner le rendement inacceptable en matière de sûreté d&#39;un système  ou d&#39;une centrale.</p>
<p> La  sûreté d&#39;une centrale nucléaire peut également être touchée si l&#39;obsolescence  des SSC n&#39;est pas établie et corrigée avant que le déclin de ceux-ci en matière  de fiabilité et de disponibilité ne se manifeste. Cette conséquence est plus  susceptible de s&#39;appliquer aux les systèmes et composants (surtout  l&#39;instrumentation, les contrôles et les composants mécaniques) qu&#39;aux  principaux éléments structuraux d&#39;une installation (bien qu&#39;on ait déjà observé  des exemples dans ces derniers, comme avec les coquilles d&#39;expansion du béton).  Les SSC à risque d&#39;obsolescence doivent donc être identifiés pour qu&#39;une  réserve adéquate de pièces de rechange soit créée en attendant qu&#39;une solution appropriée  soit trouvée. La nature de cette solution dépendra du contexte propre à la  situation; par exemple, elle peut comprendre le choix d&#39;autres composants ou  pièces d&#39;équipement qui accomplissent la même fonction de sûreté ou la  restructuration de la centrale afin de supprimer le besoin des systèmes ou  composants désuets.</p>
<p> Le  vieillissement physique et l&#39;obsolescence des SSC peuvent augmenter la  probabilité de défaillances ou de défaillances d&#39;origine commune, ainsi que la  réduction de l&#39;efficacité de la défense en profondeur. Ils peuvent également  entraîner&nbsp;:</p>
<ul>
<li>le besoin de réduire la puissance du  réacteur afin de respecter les marges de sûreté</li>
<li>des arrêts forcés ou imprévus</li>
<li>des arrêts pour entretien  considérablement prolongés ou plus fréquents</li>
<li>des inspections additionnelles</li>
<li>des mesures d&#39;entretien correctif et  des réparations</li>
<li>une augmentation des doses pour les  travailleurs concernés</li>
<li>dans les cas les plus extrêmes, l&#39;arrêt prématuré  d&#39;une centrale </li>
</ul>
<p>Par  conséquent, le vieillissement physique et l&#39;obsolescence des SSC des centrales  nucléaires devraient être compris et gérés efficacement et de manière proactive  à chaque étape du cycle de vie d&#39;une centrale et des SSC, depuis la conception,  la fabrication et la construction, la mise en service jusqu&#39;à l&#39;exploitation (y  compris l&#39;exploitation prolongée ou à long terme et les arrêts prolongés) ainsi  que pendant le déclassement. Une attention particulière devrait être accordée  aux phénomènes de vieillissement qui pourraient nuire à la disponibilité des  SSC qui, directement ou indirectement, ont des effets négatifs sur  l&#39;exploitation sûre de la centrale nucléaire. Il faudrait également porter  attention aux effets du vieillissement sur les SSC qui n&#39;exercent aucune  fonction de sûreté, mais dont la défaillance pourrait empêcher des SSC liés à  la sûreté d&#39;exécuter leurs fonctions prévues en cas d&#39;accidents de  dimensionnement, ou sur lesquels on doit pouvoir se fier dans le cas d&#39;accident  additionnel de dimensionnement. Les exigences particulières associées aux  différentes phases du cycle de vie sont présentées à la section 3.0.</p>
<a name="2.2"></a>
<h3><a name="P126_7978"></a>2.2 Démarche  systématique et intégrée de gestion du vieillissement</h3>  <p><strong>Orientation</strong></p>  <p>La  gestion efficace du vieillissement utilise donc une approche systématique  comportant un cadre intégré permettant de coordonner tous les programmes et  toutes les activités de soutien associés à la compréhension, au contrôle, à la  surveillance et à l&#39;atténuation des effets du vieillissement de l&#39;installation.</p>  <p>Tel qu&#39;illustré à la figure 1, cette méthode est une adaptation du cycle  PLAN-EXÉCUTION-VÉRIFICATION-ACTION de Deming pour la gestion du vieillissement  d&#39;un SSC&nbsp;[2] : </p>  <ol>
<li>La clé de la gestion efficace du  vieillissement d&#39;une structure ou d&#39;un composant consiste à comprendre sa façon  de vieillir. Pour bien comprendre, il faut tenir compte du dimensionnement (y  compris les codes et normes applicables), de l&#39;analyse de la sûreté, des  fonctions de sûreté, de la conception et de la fabrication, des matériaux, de  l&#39;historique d&#39;exploitation et d&#39;entretien, de l&#39;expérience en exploitation  générique et propre à la centrale, des résultats de recherche pertinents et de  l&#39;identification de préoccupations potentielles relatives à l&#39;obsolescence.</li>
<li>L&#39;activité PLAN comprend la  coordination, l&#39;intégration et la modification des activités et programmes  existants qui se rapportent à la gestion du vieillissement d&#39;un système, d&#39;une  structure ou d&#39;un composant et à l&#39;élaboration de nouveaux programmes, si  nécessaire. Cette activité comprend la mise en place de dispositions pour des  pièces de rechange et l&#39;établissement d&#39;ententes de service à long terme avec  des fournisseurs.</li>
<li>L&#39;activité EXÉCUTION comprend la  réduction au minimum de la dégradation prévue d&#39;un système, d&#39;une structure ou  d&#39;un composant en l&#39;exploitant «&nbsp;avec soin&nbsp;» ou conformément aux  procédures d&#39;exploitation et aux spécifications techniques.</li>
<li>L&#39;activité VÉRIFICATION comprend la  détection et la caractérisation en temps opportun d&#39;une dégradation importante  en effectuant des inspections et en surveillant les structures ou composants et  en évaluant la dégradation observée, afin de déterminer le type de mesures  correctrices requises et le moment auquel il conviendrait de les appliquer.</li>
<li>L&#39;activité ACTION comprend  l&#39;atténuation et la correction en temps opportun de la dégradation d&#39;un  composant par l&#39;entretien approprié et par des modifications à la conception, y  compris la réparation d&#39;un composant ainsi que le remplacement d&#39;une structure  ou d&#39;un composant.</li>  </ol>  <p>Le  processus repose sur l&#39;amélioration continue du programme de gestion du  vieillissement, basée sur une meilleure connaissance du vieillissement des  composants et sur les résultats d&#39;auto-évaluations et d&#39;examens par les pairs.  L&#39;information obtenue au moyen de cette méthode apporte une contribution  importante aux programmes existants d&#39;une centrale, notamment en matière  d&#39;entretien et d&#39;exploitation.</p>  <p>Dans la pratique, la gestion efficace du  vieillissement exige la participation et l&#39;appui de nombreuses organisations  internes et externes ainsi que des programmes et des processus essentiels de la  centrale. Par exemple&nbsp;:</p>  <ul>
<li>Analyse de la sûreté
<ul>
<li>RD-310 et GD-310, <em>Analyses  de la sûreté pour les centrales nucléaires </em>[4, 5]</li>
<li>S-294&nbsp;: <em>Études  probabilistes de sûreté (EPS) pour les centrales nucléaires</em> [6]</li>
</ul>
</li>
<li>Procédure de contrôle des modifications techniques, de  la conception
<ul>
<li>RD-337&nbsp;: <em>Conception  des nouvelles centrales nucléaires</em> [7]</li>
<li>CSA, N285, <em>Exigences  générales relatives aux systèmes et aux composants sous pression des centrales  nucléaires CANDU </em>[8]</li>
<li>CSA, N286, <em>Exigences  relatives au système de gestion des installations nucléaires </em>[9]</li>
<li>CSA, N287.1, <em>General requirements  for concrete containment structures for nuclear power plants</em> [10]</li>
<li>CSA, N291, <em>Exigences  relatives aux enceintes reliées à la sûreté des centrales nucléaires CANDU</em> [11]</li>
</ul>
</li>
<li>Programmes d&#39;inspection périodique et en service
<ul>
<li>CSA, N285.4, <em>Inspection  périodique des composants des centrales nucléaires CANDU </em>[12]</li>
<li>CSA, N285.5 <em>Inspection  périodique des composants de confinement des centrales nucléaires CANDU </em>[13]</li>
<li>CSA, N287.7, <em>Exigences  relatives à la mise à l&#39;essai et à la vérification en cours d&#39;exploitation, des  enceintes de confinement en béton des centrales nucléaires CANDU </em>[14]</li>
</ul>
</li>
<li>Fiabilité de l&#39;équipement
<ul>
<li>RD/GD 98, <em>Programmes  de fiabilité pour les centrales nucléaires</em> [15]</li>
</ul>
</li>
<li>Programmes d&#39;entretien
<ul>
<li>RD/GD-210, <em>Programmes  d&#39;entretien des centrales nucléaires </em>[16]</li>
</ul>
</li>
<li>Programmes de qualification environnementale
<ul>
<li>CSA, N290.13, <em>Qualification  environnementale des équipements pour les centrales nucléaires CANDU</em> [17]</li>
</ul>
</li>
<li>Procédures d&#39;exploitation, programmes de chimie
<ul>
<li>CSA, N286, <em>Exigences  relatives au système de gestion des installations nucléaires</em> [9]</li>
</ul>
</li>
<li>Expérience en exploitation, analyse des événements  importants et programmes de recherche
<ul>
<li>S-99, <em>Rapports à  soumettre par les exploitants de centrales nucléaires</em> [18]</li>
</ul>
</li>  </ul>  <p>Même  si chacun de ces programmes et processus d&#39;une centrale contribuent à la  gestion du vieillissement, celle-ci n&#39;est en général pas leur principale  fonction, et aucun ne fournit un programme ou processus complet pour la gestion  du vieillissement des SSC.<br />
Les  programmes de fiabilité et d&#39;entretien [15, 16] prévoient habituellement une  méthode axée sur le rendement pour assurer la fiabilité des composants. Ils  comprennent des activités d&#39;entretien, de mise à l&#39;essai et de surveillance,  mais ils ont tendance à être d&#39;abord et avant tout pensés pour&nbsp;:</p>  <ul>
<li>des  SSC actifs (barres d&#39;arrêt d&#39;urgence/ barres de commande, ventilateurs de  refroidissement, turbogénératrices au diesel ou au gaz, moteurs)</li>
<li>des  SSC relativement plus faciles à remplacer pendant un arrêt pour entretien (batteries,  interrupteurs, transistors, valves, amortisseurs et dispositifs de soutien).</li>  </ul>  <p>Ces  programmes n&#39;incluent habituellement pas les SSC passifs et à longue durée de  vie (comme les composants d&#39;assemblage, canaux de combustible, conduites  d&#39;alimentation, générateurs de vapeur, appareils et conduites sous pression,  structures, câbles, etc.) qui sont difficiles ou impossibles à remplacer ou à  changer, sauf dans le cadre d&#39;un arrêt prolongé à des fins d&#39;entretien ou de  remise à niveau.<br />
Les  programmes d&#39;inspection et de surveillance fournissent des données dont on se  sert pour confirmer la condition ou l&#39;aptitude au service actuelle de ces SSC,  mais ils concernent uniquement l&#39;activité VÉRIFICATION à la Figure 1.</p>  <p> Les  plans de gestion du cycle de vie sont conçus pour les structures et composants,  mais normalement, ils ne tiennent pas compte des effets des autres composants  ni du rendement global du système en matière de sûreté. Il importe de  déterminer l&#39;impact du vieillissement sur la sûreté de la centrale, y compris les  marges de sûreté déterminées au moyen d&#39;une analyse de sûreté mise à jour, ce  qui exige une méthode systémique et intégrée de gestion du vieillissement.</p>  <p id="fig1">Figure 1&nbsp;:  Démarche systématique et intégrée pour gérer le vieillissement [1].</p>  <img src="/images/rd-334/rd-334-f.png" alt="" width="585" height="550" />  <p><a href="/fr/acts-and-regulations/consultation/comment/regdoc2-6-3/longdesc/longdesc">Figure 1&nbsp;: Équivalent textuel</a></p>  <p>Les processus du système de gestion du titulaire de permis  devraient donc comprendre des exigences garantissant la présence documentée  d&#39;un cadre global de PGV intégré pour la centrale. Ce cadre devrait inclure un  programme exhaustif d&#39;ensemble, ou il pourrait inclure une «&nbsp;feuille de  route&nbsp;» permettant de constater que les processus et programmes actuels répondent  aux exigences d&#39;une gestion efficace du vieillissement. La gestion du  vieillissement ne remplace pas nécessairement les programmes actuels, mais sur  la base de l&#39;évaluation, elle les modifie (réduction, mise à niveau,  élimination ou ajout) en vue de l&#39;obtention d&#39;un programme intégré systématique  de gestion efficace du vieillissement. </p>  <p>Des  PGV mécanistes ou propres à des SSC particuliers devraient être établis et mis  en place en fonction du cadre de PGV intégré du titulaire de permis, et tenir  compte des caractéristiques d&#39;un PGV efficace, comme le montre l&#39;Annexe A. La  portée du PGV propre à des SSC particuliers devrait correspondre à l&#39;importance  sur le plan de la sûreté, aux fonctions nominales et au rendement attendu des  SSC, ainsi qu&#39;à leurs effets sur l&#39;exploitation sûre de la centrale nucléaire.  Par exemple, les SSC de réacteurs CANDU actuellement en place qui limitent  considérablement la durée de vie des centrales nucléaires comme les canaux de  combustible, les conduites d&#39;alimentation du caloportage, les générateurs de  vapeur, l&#39;assemblage et les structures du réacteur, ainsi que les enceintes de  confinement, auront des plans de gestion détaillée du cycle de vie, tout comme les  PGV propres à ces SSC. Les autres PGV de type mécaniste incluent la  surveillance de la fatigue et de la corrosion provoquée par le débit.</p>  <p> Les  pratiques ou programmes existants d&#39;une centrale qui sont crédités comme PGV,  notamment la chimie de l&#39;eau, les inspections périodiques et en cours  d&#39;exploitation et la qualification environnementale devraient être évalués par  rapport aux caractéristiques indiquées en Annexe A. Les programmes qui ne  comprennent pas ces caractéristiques devraient être modifiés, selon le cas. Par  exemple, des programmes ou pratiques d&#39;entretien ou d&#39;inspection existants  pourraient convenir pour la gestion du vieillissement d&#39;une structure, d&#39;un système  ou d&#39;un composant, à  condition qu&#39;ils traitent les caractéristiques de l&#39;Annexe A.<br />
Des  exigences particulières relatives au cadre de PGV intégré du titulaire de  permis et aux PGV connexes se trouvent à la section 4.0.</p>
<a name="3.0"></a>
<h2><a name="P153_9844"></a>3.0 Stratégie  proactive de gestion du vieillissement</h2>
<p>Des  activités de gestion du vieillissement doivent être instituées de façon  proactive tout au long du cycle de vie d&#39;une centrale nucléaire ou des SSC  (durant la conception, la fabrication et construction, la mise en service,  l&#39;exploitation et le déclassement).</p>
<p><strong>Orientation</strong></p>
<p>Ce  document met l&#39;accent sur le besoin de tenir compte de façon proactive de la  gestion du vieillissement pendant chaque phase du cycle de vie d&#39;une centrale  nucléaire, c.-à-d., la conception, la construction, la mise en service,  l&#39;exploitation (y compris l&#39;exploitation à long terme et les arrêts prolongés)  et le déclassement. Ces phases peuvent s&#39;appliquer à des SSC précis ou à  l&#39;ensemble d&#39;une centrale.</p>
<a name="3.1"></a>
<h3><a name="P164_11373"></a>3.1 Conception</h3>
<p>Des  mesures appropriées doivent être prises et des caractéristiques doivent être  introduites à l&#39;étape de la conception pour faciliter la gestion efficace du  vieillissement tout au long de la vie d&#39;une centrale nucléaire.<br/>
La  gestion du vieillissement doit également être considérée dans la conception de  modifications aux centrales actuellement en exploitation ainsi que pour les  changements de conception liés à des modifications, à des réparations ou à des  remplacements de SSC particuliers.</p>
<p><strong>Orientation</strong></p>
<p>L&#39;approche  proactive de la gestion du vieillissement débute dès la phase de conception, au  cours de laquelle sont prises des décisions importantes qui influent  considérablement sur la prévention et la gestion des effets du vieillissement.</p>
<p> Le  document RD/GD 337, <em>Conception des  nouvelles centrales nucléaires</em> [7] établit les exigences en matière de  conception des nouvelles centrales nucléaires, qui incluent la prise en compte  des effets du vieillissement et de l&#39;usure des SSC. Ce document s&#39;applique aux  nouvelles centrales ainsi qu&#39;aux modifications, réparations et remplacements à  venir dans la conception, pour les centrales en exploitation et les SSC.</p>
<p> L&#39;exigence  selon laquelle des mesures appropriées doivent être prises et des  caractéristiques de conception doivent être introduites à l&#39;étape de la  conception pour permettre une gestion efficace du vieillissement est complémentaire  aux exigences du document RD/GD-337. Les aspects suivants liés à la gestion du  vieillissement devraient être pris en compte à l&#39;étape de la conception&nbsp;:</p>
<ol>
<li>appliquer une démarche systématique  à l&#39;étape de la conception pour s&#39;assurer de comprendre le vieillissement des  SSC, pour évaluer les démarches efficaces et les caractéristiques techniques  relatives à la prévention du vieillissement, à sa surveillance et à son  atténuation, et pour mettre sur pied des PGV pour les SSC (voir sections 4.3,  4.4 et 4.6)</li>
<li>tenir compte des effets et des  interactions entre les facteurs de stress mécaniques, thermiques, électriques,  physiques, biologiques et radioactifs sur les propriétés des matières, sur le  vieillissement des matières et sur les processus de dégradation. Dans la  documentation sur la conception, indiquer de quelle façon les précédents  problèmes de vieillissement génériques pertinents, l&#39;expérience de gestion du  vieillissement pertinente et les résultats de recherche sont traités</li>
<li>définir la durée de vie sûre ou  qualifiée des SSC dans la documentation sur la conception, à l&#39;aide d&#39;une  évaluation des marges de conception qui tient compte de toutes les dégradations  potentielles et de tous les mécanismes de vieillissement et d&#39;usure connus, y  compris les effets des processus d&#39;essai et d&#39;entretien. Préciser les SSC qui  ont une durée de vie plus courte que celle de la centrale nucléaire et fournir  des stratégies de gestion dans la documentation sur la conception</li>
<li>tenir compte des effets du  vieillissement selon les conditions du dimensionnement, notamment les régimes  transitoires et les conditions pouvant déclencher un incident, dans les  spécifications relatives aux programmes de qualification de l&#39;équipement (p.  ex. programmes de qualification environnementale et de qualification sismique)</li>
<li>inclure dans le plan d&#39;aménagement  de la centrale et la conception des SSC des mesures pour faciliter les  activités d&#39;inspection, d&#39;essais, de surveillance, d&#39;entretien, de réparation  et de remplacement, et pour maintenir le risque de radioexposition attribuables  à ces activités au niveau le plus faible qu&#39;il soit raisonnablement possible  d&#39;atteindre (principe ALARA, de l&#39;anglais <em>as  low as reasonably achievable</em>)</li>
<li>définir les données relatives aux  inspections et aux essais de référence (de base) ainsi que celles relatives aux  inspections et aux essais effectués avant, pendant ou après la mise en service,  qui doivent être recueillies et documentées aux fins de la gestion du  vieillissement pendant la fabrication, la construction, la mise en service,  l&#39;exploitation et le déclassement.</li>
<li>définir les problèmes d&#39;obsolescence  potentiels des SSC, évaluer les effets sur la sûreté et la fiabilité du  rendement, et fournir des stratégies de gestion</li>
<li>dans la documentation sur la  conception, indiquer tout processus particulier appliqué à la fabrication et à  la construction des SSC qui a pour but de prévenir, d&#39;atténuer ou d&#39;éliminer  les mécanismes de vieillissement connus, comme le traitement thermique, la  finition de surface, le temps de durcissement, etc.</li>
<li>indiquer les dispositions requises  relatives à la gestion du vieillissement dans les documents d&#39;approvisionnement  des nouvelles installations et des SSC, y compris les documents des  fournisseurs et d&#39;autres entrepreneurs (organismes de conception, vendeurs,  fabricants, agences d&#39;inspection, etc.)</li>
</ol>
<p>La  gestion du vieillissement doit également être prise en compte dans la  conception de modifications aux plans d&#39;exploitation existants et dans la  conception de modifications, de réparations et de remplacements pour des SSC  précis. Cela n&#39;empêche en rien l&#39;utilisation d&#39;éléments similaires pour des  réparations et des remplacements. Par contre, si une structure, un système ou  un composant fait  défaillance ou que son rendement se détériore en raison d&#39;un vieillissement  prématuré, il faudrait songer à apporter des améliorations qui préviendront ou  ralentiront les effets du vieillissement. Dans les projets de remise à niveau,  le changement de tous les tubes de force est considéré comme un « remplacement  », et le changement de toutes les conduites d&#39;alimentation est considéré comme  une « réparation ». Dans ces deux exemples, la gestion du vieillissement  devrait être un élément de premier plan dans la conception (choix de meilleurs  matériaux et cloisons plus épaisses), la fabrication (soulagement de la  pression exercée sur les coudes des conduites d&#39;alimentation) et la mise en  service (mesures de référence) de ces activités de réparation et de  remplacement.</p>
<h4>3.1.1 Contenu  relatif à la gestion du vieillissement dans les rapports d&#39;analyse de la sûreté</h4>
<p>L&#39;analyse  de la sûreté des centrales doit rendre compte des effets cumulatifs de la  dégradation due au vieillissement des SSC sur les systèmes dans leur ensemble  et sur le rendement de la centrale en matière de sûreté [4, 5, 6].</p>
<p> Les  examens périodiques des rapports d&#39;analyse de la sûreté doivent inclure  l&#39;expérience en matière d&#39;exploitation et les conclusions des recherches en ce  qui a trait au vieillissement ainsi qu&#39;à la mise en œuvre des résultats de  l&#39;analyse en question (voir également la section 3.4.1).</p>
<p><strong>Orientation</strong></p>
<p>L&#39;analyse  de la sûreté de la centrale nucléaire devrait reposer sur des données de  conception et d&#39;exploitation complètes et exactes, et tenir compte des effets  cumulatifs de la dégradation attribuable à l&#39;âge des SSC sur le rendement  global des systèmes et de la centrale en matière de sûreté [4, 5, 6]. Il  faudrait déterminer et prendre en compte les incertitudes importantes dans  l&#39;analyse ou dans les données concernant les hypothèses de vieillissement,  notamment celles associées au rendement d&#39;une centrale, aux mesures de  fonctionnement et aux paramètres de modélisation.</p>
<p> Le  rapport d&#39;analyse de la sûreté de la centrale devrait traiter des aspects  suivants de la gestion du vieillissement :</p>
<ol>
<li>un aperçu de la stratégie proactive  relative à la gestion du vieillissement et des étapes préalables à sa mise en  œuvre</li>
<li>les SSC de la centrale importants  pour la sûreté qui pourraient être touchés par le vieillissement</li>
<li>les hypothèses, les méthodes, les  données et les critères d&#39;acceptation utilisés pour tenir compte des effets du  vieillissement des SSC dans le cadre de l&#39;analyse de la sûreté, notamment les  hypothèses limitées dans le temps et les données sur les défaillances pour les  études probabilistes de sûreté</li>
<li>les conditions opérationnelles  critiques, les limites et les conditions d&#39;exploitation ainsi que les autres  paramètres à surveiller ou à contrôler qui influent sur les hypothèses du  vieillissement utilisées dans les analyses de la sûreté ou la qualification de  l&#39;équipement</li>
<li>les données et l&#39;information à  recueillir pour la gestion du vieillissement afin de confirmer que les hypothèses  de l&#39;analyse de la sûreté et les critères d&#39;acceptation continuent d&#39;être  respectés</li>
</ol>
<a name="3.2"></a>
<h3><a name="P209_19671"></a>3.2 Fabrication,  construction et installation</h3>
<p>La  gestion du vieillissement doit être prise en considération dans les processus  de fabrication, de construction et d&#39;installation des nouvelles centrales  nucléaires ainsi que dans les processus de modification, de réparation et de  remplacement des SSC des centrales actuellement en exploitation.<br/>
Des  procédures pertinentes doivent définir les méthodes qui visent à empêcher que  les processus de fabrication, de construction, et d&#39;installation nuisent au  fonctionnement des SSC en raison du vieillissement.</p>
<p><strong>Orientation</strong></p>
<p>Les  pratiques de fabrication et de construction peuvent avoir un effet important  sur la résistance des SSC au vieillissement, lequel ne devient souvent apparent  que beaucoup plus tard au cours de la durée de vie utile.</p>
<p>Il y aurait donc lieu  d&#39;établir et de mettre en œuvre des dispositions assurant la surveillance, la  gestion et le contrôle de la dégradation des SSC attribuable au vieillissement  afin de veiller à ce que les processus de fabrication, de construction et de  mise en service n&#39;aient pas d&#39;effets négatifs sur la résistance au  vieillissement des SSC. Ces dispositions devraient tenir compte des  connaissances et de l&#39;expérience actuelles concernant la gestion du  vieillissement, et d&#39;autres facteurs pertinents qui influent sur le  vieillissement et la gestion du vieillissement d&#39;une structure, d&#39;un système  ou d&#39;un composant.</p>
<p> Le titulaire de permis devrait s&#39;assurer de tenir  compte de ce qui suit :</p>
<ol>
<li>les connaissances actuelles  concernant les mécanismes pertinents du vieillissement, les effets ou la  dégradation et les mesures préventives ainsi que les mesures d&#39;atténuation  possibles sont pris en compte dans la fabrication, la construction et  l&#39;installation des SSC</li>
<li>l&#39;information pertinente sur les  facteurs ayant une incidence sur la gestion du vieillissement et sur les  paramètres agissant sur la dégradation due au vieillissement est clairement  spécifiée dans les documents d&#39;approvisionnement, et elle est transmise aux  fournisseurs et aux entrepreneurs des SSC</li>
<li>les fournisseurs et les  entrepreneurs tiennent suffisamment compte des facteurs qui influent sur la  gestion du vieillissement</li>
<li>les données de référence requises  pour gérer le vieillissement sont recueillies et documentées</li>
<li>des éprouvettes de surveillance pour  des programmes spécifiques de surveillance du vieillissement sont rendues  disponibles et installées conformément aux spécifications de la conception</li>
</ol>
<a name="3.3"></a>
<h3><a name="P211_19831"></a>3.3 Mise  en service</h3>
<p>La gestion  du vieillissement doit être prise en considération dans les activités de mise  en service des nouvelles centrales nucléaires ainsi que dans les projets  majeurs de réparation, de remplacement et de modification de SSC des centrales  existantes.</p>
<p> Des  mesures appropriées doivent être prises pour consigner les données de référence  nécessaires à la gestion du vieillissement des SSC durant la mise en service.</p>
<p> Les  conditions et les paramètres opérationnels critiques, comme ceux qui sont  considérés dans la qualification de l&#39;équipement et dans les hypothèses liées  au vieillissement contenues dans les analyses de la conception et de la sûreté,  doivent être vérifiés.</p>
<p><strong>Orientation</strong></p>
<p>Les  aspects suivants devraient être pris en compte dans les activités de mise en  service :</p>
<ol>
<li>l&#39;information pertinente sur les  facteurs ayant une incidence sur la gestion du vieillissement et les paramètres  ayant une influence sur la dégradation due au vieillissement devrait être  déterminée, prise en compte, surveillée et contrôlée lors de la mise en service</li>
<li>les données de l&#39;inspection de  référence ou initiale pour la gestion du vieillissement devraient être  consignées</li>
<li>les conditions et paramètres  opérationnels critiques, comme ceux qui sont pris en compte dans les hypothèses  relatives à la qualification et au vieillissement de l&#39;équipement utilisées  dans les analyses de la sûreté, devraient être vérifiés afin d&#39;être conformes à  la conception et aux analyses de la sûreté</li>
<li>une attention particulière devrait  être mise sur l&#39;identification et la consignation des zones thermiques et de  rayonnement concentrées, et sur la mesure des niveaux de vibration</li>
</ol>
<a name="3.4"></a>
<h3><a name="P266_25241"></a>3.4 Exploitation</h3>
<p>Les  titulaires de permis doivent établir et mettre en œuvre des processus,  programmes et procédures appropriés de gestion du vieillissement et de  l&#39;obsolescence des SSC afin que les fonctions de sûreté requises soient  maintenues durant la phase d&#39;exploitation de la centrale.</p>
<p> Les  opérations de l&#39;installation doivent être surveillées et consignées pour  démontrer la conformité avec les conditions opérationnelles critiques, les  limites et conditions d&#39;exploitation et les autres paramètres (voir section  3.1.1) dont on a constaté qu&#39;ils influent sur les hypothèses du vieillissement  utilisées dans les analyses de la sûreté ou la qualification de l&#39;équipement.</p>
<p> En  cas de changements opérationnels ou de modifications des SSC, un examen des  changements possibles dans les conditions environnementales ou opérationnelles  (p. ex. le diagramme de débit, la vélocité, les vibrations) susceptibles  d&#39;influer sur le vieillissement et la défaillance des SSC (voir aussi la  section 3.1) doit être réalisé.</p>
<p> Les  mesures correctrices déterminées par les activités du PGV doivent être gérées  dans le cadre du programme des mesures correctrices de la centrale.</p>
<p> Il  faut prendre des mesures afin que les pièces de rechange ou de remplacement et  les produits consomptibles soient stockés dans des environnements contrôlés  appropriés (température et humidité appropriées, protection contre les attaques  chimiques et accumulation de poussières). La durée de vie en stockage doit être  prise en considération.</p>
<p><strong>Orientation</strong></p>
<p>Pendant  la phase d&#39;exploitation de la centrale, les titulaires de permis doivent  établir et mettre en œuvre un cadre global de PGV pour la centrale qui assure  la coordination et la communication entre tous les programmes de la centrale et  programmes externes applicables pour gérer le vieillissement et l&#39;obsolescence  des SSC. Une démarche systématique (y compris des arrangements organisationnels  appropriés, la collecte de données et la tenue des dossiers, l&#39;examen préalable  des SSC et les évaluations du vieillissement) devrait être exécutée pour  veiller à ce que :</p>
<ol>
<li>tous les SSC sensibles aux effets du  vieillissement ou à l&#39;obsolescence qui peuvent, directement ou indirectement, avoir  un effet négatif sur l&#39;exploitation sûre de la centrale nucléaire sont dégagés</li>
<li>les effets du vieillissement sur les  SSC et les répercussions potentielles sur les fonctions de sûreté dus au  vieillissement et à l&#39;obsolescence sont systématiquement identifiés, évalués et  documentés</li>
<li>les mesures concrètes de prévention,  de surveillance et d&#39;atténuation du vieillissement sont évaluées et mises en  œuvre pour veiller à ce que les SSC et les fonctions de sûreté requis ne soient  pas compromis pendant l&#39;exploitation normale et en cas d&#39;accident de  dimensionnement, en plus de ceux sur lesquels on se fie pour les accidents  additionnels de dimensionnement</li>
</ol>
<p>Des  renseignements supplémentaires se trouvent à la section 4.0.</p>
<p> Les  conditions opérationnelles critiques, les limites et conditions d&#39;exploitation  et les autres paramètres qui ont une incidence sur les hypothèses de  vieillissement utilisés dans les analyses de la sûreté, la conception ou la  qualification de l&#39;équipement devraient être surveillés et consignés pour assurer  la conformité et pour détecter, signaler et évaluer en temps utile les  conditions opérationnelles imprévues afin que des mesures correctrices puissent  être prises avant que la sûreté de la centrale nucléaire ne soit touchée de  manière négative.</p>
<p> Des  procédures devraient être mises en place pour veiller à ce que tout changement  au fonctionnement des systèmes ou toute modification à la conception soit  examiné pour que l&#39;on connaisse les effets sur l&#39;environnement ou les  conditions fonctionnelles (température, diagramme du débit, vélocité,  vibrations, fluence du rayonnement, etc.) des SSC, y compris les SSC  avoisinants ou connectés, de sorte qu&#39;ils n&#39;entraînent pas un vieillissement  préjudiciable ou un nouveau mécanisme de défaillance. Dans ces situations, les  PGV devraient être mis à jour en conséquence.</p>
<p> Des  procédures devraient être mises en place pour qu&#39;un examen approprié de la  gestion du vieillissement soit exécuté si un nouveau mécanisme de  vieillissement est découvert (p. ex. par la rétroaction découlant des résultats  des inspections, de la surveillance, de l&#39;expérience de l&#39;exploitation ou des  recherches).</p>
<h4>3.4.1 Examen  et mise à jour de l&#39;analyse de la sûreté</h4>
<p>Dans  le cadre de l&#39;examen et de la mise à jour de l&#39;analyse de la sûreté, les  titulaires de permis doivent tenir compte des effets du vieillissement des SSC,  des résultats de recherche et des progrès en matière de connaissance et de  compréhension des mécanismes de vieillissement (p. ex. évaluation des effets  cumulatifs du vieillissement des SSC sur le système général, sur le rendement  de la centrale en matière de sûreté ainsi que sur le risque).</p>
<p><strong>Orientation </strong></p>
<p>L&#39;analyse  de sûreté devrait être revue et mise à jour régulièrement pour tenir compte des  changements dans la configuration et les conditions de la centrale nucléaire,  les paramètres et procédures opérationnels, les résultats de recherche et les  progrès en matière de connaissance et de compréhension des phénomènes  physiques.<br/>
Les  données et l&#39;information recueillies grâce aux PGV devraient être examinées  afin de confirmer que les hypothèses, les paramètres crédités et les prévisions  de l&#39;analyse de la sûreté demeurent valides, et que les critères limitatifs et  les marges nominales requises continuent d&#39;être respectés à mesure que la  centrale vieillit.</p>
<h4>3.4.2 Exploitation  à long terme</h4>
<p>Le  titulaire de permis doit effectuer un examen en profondeur des effets du  vieillissement sur la sûreté de la centrale et évaluer l&#39;efficacité des PGV pour  l&#39;exploitation à long terme, afin de déterminer les mesures correctrices et les  améliorations possibles. Des évaluations des conditions doivent être effectuées  dans le cadre de l&#39;examen du vieillissement pour l&#39;exploitation à long terme  (voir section 4.5).<br/>
L&#39;examen  doit montrer que :</p>
<ol>
<li>tous les SSC qui peuvent nuire,  directement ou indirectement, à l&#39;exploitation sûre de la centrale sont évalués  à l&#39;égard de la période d&#39;exploitation à long terme</li>
<li>les effets du vieillissement pour  ces SSC continueront à être identifiés et gérés au cours de la période prévue  d&#39;exploitation à long terme</li>
<li>toutes les analyses de la sûreté  comportant des hypothèses limitées dans le temps sont validées pour la période  proposée d&#39;exploitation à long terme afin de donner l&#39;assurance que les effets  du vieillissement sont gérés efficacement (c.-à-d. pour démontrer que la  fonction prévue d&#39;une structure, d&#39;un système ou d&#39;un composant demeurera à l&#39;intérieur des marges de sûreté  de la conception pendant toute la période prévue de l&#39;exploitation à long  terme).</li>
</ol>
<p>Les résultats de l&#39;examen de la gestion du vieillissement ayant trait à  l&#39;exploitation à long terme doivent être documentés, les constatations doivent  être traités.</p>
<p><strong>Orientation</strong></p>
<p>L&#39;exploitation à long terme d&#39;une centrale nucléaire dénote une  exploitation qui s&#39;étend au-delà de la durée de vie nominale prévue de la  centrale, qui a été justifiée par une évaluation de la sûreté, en tenant compte  des processus et caractéristiques des SCC qui limitent la durée de vie. Pour le  parc actuel de réacteurs du Canada, il s&#39;agit d&#39;une exploitation qui excède une  trentaine d&#39;années ou 210 000 heures équivalentes à pleine puissance. Un examen  de la condition réelle des SSC et de la gestion du vieillissement en vue de  l&#39;exploitation à long terme devrait être mené en conformité avec le document  d&#39;application de la réglementation de la CCSN RD-360, <em>Prolongement de la durée de vie des centrales nucléaires</em> [19], et  le guide de sûreté de l&#39;AIEA NS-G-2.10, <em>Periodic  Safety Review of Nuclear Power Plants</em> [20].</p>
<h4>3.4.3 Arrêts  prolongés</h4>
<p>Les titulaires de permis doivent examiner et, au besoin, réviser les PGV  propres à des SSC particuliers pour s&#39;assurer que les facteurs pertinents de  dégradation due au vieillissement sont pris en considération pour les SSC  temporairement à l&#39;état d&#39;arrêt ou placés en stockage sûr pendant les arrêts  prolongés.<br/>
Les dispositions requises pour la gestion du vieillissement doivent être  définies dans les spécifications relatives à l&#39;arrêt du système ou dans les  plans de conservation, y compris les exigences selon lesquelles des évaluations  de l&#39;état des SSC doivent être exécutées avant la remise en service d&#39;une  centrale à la suite d&#39;un arrêt prolongé (voir section 4.5).</p>
<p><strong>Orientation</strong></p>
<p>Les arrêts prolongés sont des arrêts de réacteur de plus d&#39;une année et  ne comprennent pas les arrêts réguliers pour entretien. Pendant les arrêts  prolongés, les SSC peuvent devoir être placés temporairement à l&#39;état d&#39;arrêt  ou en stockage sûr, ce qui exige des mesures et des contrôles additionnels pour  empêcher la dégradation associée au vieillissement.</p>
<p> La révision des processus de gestion du vieillissement propres aux SSC  peuvent tenir compte des différences relativement au potentiel de risque et aux  conditions d&#39;exploitation entre l&#39;arrêt temporaire ou le stockage sûr et les  conditions d&#39;exploitation normale.</p>
<p> Les  dispositions pour la gestion du vieillissement devraient comprendre la  définition de toute exigence concernant l&#39;évaluation d&#39;une condition ou la  réalisation d&#39;autres activités de gestion du vieillissement. Ce ne sont pas  toutes les évaluations de la condition dans la portée du programme qui doivent  être exécutées à la suite d&#39;un arrêt prolongé, mais juste celles requises en  fonction de la condition d&#39;arrêt temporaire. La portée de l&#39;évaluation de la  condition peut reposer sur la condition de l&#39;arrêt temporaire, qui n&#39;est pas  nécessairement limité dans le temps.</p>
<a name="3.5"></a>
<h3><a name="P306_30164"></a>3.5 Déclassement</h3>
<p>Les titulaires de permis doivent établir et mettre en œuvre les  activités de gestion du vieillissement dans les plans et les procédures de  déclassement pour les SSC qui doivent demeurer disponibles et fonctionnels  durant le déclassement.</p>
<h4>Orientation</h4>
<p>Pendant la période de transition, allant de l&#39;arrêt de la tranche à son  déclassement, et lorsqu&#39;il est nécessaire de le faire pour faciliter le  déclassement, des mesures appropriées de gestion du vieillissement doivent se  poursuivre pour veiller à ce que les SSC requis demeurent disponibles et  fonctionnels. Pour ce faire, il pourrait s&#39;avérer nécessaire de mettre en œuvre  des dispositions de gestion du vieillissement à relativement long terme pour  certains SSC, par exemple, les systèmes de confinement et les piscines de  stockage du combustible usé, les systèmes de protection contre les incendies,  l&#39;équipement de levage et l&#39;équipement de surveillance, et ces dispositions  doivent respecter les exigences en matière d&#39;autorisation.</p>
<a name="4.0"></a>
<h2><a name="P171_12015"></a>4.0 Programmes intégrés de gestion du vieillissement</h2>
<p>Les titulaires de permis doivent adopter une démarche systématique et  intégrée pour établir, mettre en œuvre et améliorer les programmes appropriés  afin de gérer le vieillissement et l&#39;obsolescence des SSC. Les processus de  gestion des centrales doivent prévoir des exigences visant à établir un  document présentant le cadre général de PGV intégré des centrales. Ce cadre  doit comprendre les éléments suivants&nbsp;:</p>
<ol>
<li>dispositions organisationnelles</li>
<li>collecte de données et tenue de  dossiers</li>
<li>processus de l&#39;examen préalable et  de la sélection des SSC visés par la gestion du vieillissement</li>
<li>évaluation de la gestion du  vieillissement</li>
<li>évaluations de l&#39;état </li>
<li>PGV propres à des SSC particuliers</li>
<li>gestion de l&#39;obsolescence</li>
<li>interfaces avec d&#39;autres programmes  d&#39;appui aux centrales</li>
<li>mise en œuvre des PGV</li>
<li>examen et amélioration des PGV</li>
</ol>
<p>Les  PVG propres à des SSC particuliers doivent être mis en œuvre conformément au  cadre général du PGV intégré.</p>
<p><strong>Orientation</strong></p>
<p>Le cadre de PGV intégré devrait prévoir un programme-cadre ou encore un  document de type feuille de route qui illustre comment les processus et  programmes existants répondent aux exigences de la gestion efficace du  vieillissement. Le cadre de PGV serait assujetti aux inspections et aux examens  du programme de conformité de la CCSN.<br/>
Des exigences détaillées sont fournies dans les sections suivantes.  D&#39;autres démarches peuvent être acceptables à la condition que ces éléments  soient traités d&#39;une manière équivalente dont on a démontré l&#39;efficacité dans  la gestion du vieillissement.</p>
<a name="4.1"></a>
<h3><a name="P173_12187"></a>4.1 Dispositions  organisationnelles pour la gestion efficace du vieillissement</h3>
<p>Les processus de gestion de la centrale doivent comprendre des exigences  visant à assurer l&#39;établissement de dispositions organisationnelles appropriées  pour faciliter la mise en œuvre efficace des PGV.</p>
<p><strong>Orientation</strong> </p>
<p>Il faudrait tenir compte des  aspects suivants :</p>
<ol>
<li>les politique et objectifs établis  du cadre général de PGV intégré, les ressources allouées (humaines,  financières, formation, outils et équipement) et les processus permettant de  surveiller le programme afin de s&#39;assurer qu&#39;il atteint ses objectifs</li>
<li>les responsabilités définies pour la  mise en œuvre des activités de gestion du vieillissement</li>
<li>les dispositions sur la formation du  personnel affecté aux opérations, à l&#39;entretien, à l&#39;ingénierie, etc., pour  veiller à ce qu&#39;il connaisse suffisamment les concepts de la gestion du  vieillissement et les exigences du programme</li>
<li>les organismes externes requis pour  des services particuliers liés à la gestion du vieillissement (p. ex.  inspections spécialisées, évaluations, recherche et élaboration des normes)</li>
</ol>
<a name="4.2"></a>
<h3><a name="P178_12865"></a>4.2 Système  de collecte de données et de tenue de dossiers pour appuyer la gestion du  vieillissement</h3>
<p>Le titulaire de permis doit avoir un système approprié de collecte de  données et de tenue de dossiers, afin d&#39;appuyer les activités de la gestion du  vieillissement et de servir de base pour les décisions relatives au type et à  l&#39;échéancier des mesures de gestion du vieillissement.</p>
<p> Les données entrées dans le système doivent être vérifiables, afin de  démontrer qu&#39;il y a une vérification adéquate des données entrées et une  description détaillée des fondements de toute conclusion et pour assurer le  suivi de toutes les sources d&#39;information applicables.</p>
<p><strong>Orientation</strong></p>
<p>Il faudrait établir un système de collecte de données et de tenue de  dossiers dès les débuts du cycle de vie d&#39;une centrale nucléaire afin d&#39;appuyer  les programmes de gestion du vieillissement. Les données et les dossiers sur la  gestion du vieillissement incluent :</p>
<ol>
<li>les données de référence (de base)  sur la conception, la fabrication et la construction de la centrale ou des SSC  ainsi que l&#39;état au début de la durée de vie utile, y compris les résultats des  essais de qualification de l&#39;équipement, des inspections, des essais de mise en  service et de la mise en correspondance des conditions environnementales au  cours de la mise en service</li>
<li>les données et l&#39;historique de  l&#39;exploitation de la centrale, les conditions opérationnelles des SSC (y compris  les données transitoires), les contrôles chimiques, les indicateurs d&#39;état des  SSC, les rapports d&#39;événements ainsi que les données sur l&#39;essai relatif à la  disponibilité et la défaillance des SSC</li>
<li>les résultats des inspections et de  la surveillance en service des matériaux, notamment les spécifications et les  résultats ainsi que les constatations qui excèdent les niveaux à signaler</li>
<li>les données de l&#39;historique de  l&#39;entretien, notamment les données sur la surveillance de l&#39;état et l&#39;entretien  des composants et des structures, les évaluations du vieillissement relatives  aux défaillances ou à la dégradation importante des SSC, y compris les  résultats des analyses des causes fondamentales</li>
<li>des dossiers des évaluations du  vieillissement et de l&#39;état des SSC, les indicateurs de rendement des PGV, les  indicateurs de l&#39;état des SSC, l&#39;expérience de l&#39;exploitation interne et externe  et les résultats de recherche</li>
</ol>
<a name="4.3"></a>
<h3><a name="P179_12890"></a>4.3 Examen  préalable et sélection des structures, systèmes et composants</h3>
<p>Il faut recourir à un processus documenté d&#39;examen préalable et de  sélection pour dresser la liste des SSC à inclure dans la portée du cadre  général de PGV intégré. Ce processus doit comprendre les SSC sensibles à la  dégradation par le vieillissement ou aux effets du vieillissement qui peuvent  nuire, directement ou indirectement, à la sûreté d&#39;exploitation de la centrale  nucléaire. Ce processus doit inclure les SSC sans fonction de sûreté, mais dont  la défaillance pourrait empêcher d&#39;autres SSC liés à la sûreté d&#39;exécuter leurs  fonctions prévues.</p>
<p><strong>Orientation</strong></p>
<p>Les exigences relatives au processus d&#39;examen préalable et de sélection  de la section 4.3 sont conformes au document RD/GD 210, <em>Programmes d&#39;entretien des centrales nucléaires</em> [16] qui traite de  tous les SSC à l&#39;intérieur des limites de la centrale nucléaire. Le processus  de sélection dans le cadre de la gestion du vieillissement comprend les SSC  passifs de longue date qui pourraient ne pas être visés par les programmes  d&#39;entretien. Les exigences du processus d&#39;examen préalable et de sélection pour  la gestion du vieillissement ont été intentionnellement assorties d&#39;une portée  plus large que celle du document RD/GD-98, <em>Programmes  de fiabilité pour les centrales nucléaires</em> [1] qui est axé sur la fiabilité  de composants principalement actifs des systèmes importants pour la sûreté.</p>
<p> Le processus d&#39;examen préalable et de sélection des SSC devrait suivre  une approche axée sur la sûreté. La liste suivante contient des exemples de  facteurs à considérer :</p>
<ol>
<li>à partir d&#39;une liste exhaustive de  tous les SSC, relever les SSC dont le dysfonctionnement ou la défaillance  pourrait mener, directement ou indirectement, à la perte ou à la défaillance  d&#39;une fonction de sûreté</li>
<li>s&#39;assurer que la liste comprend tous  les SSC dont la dégradation pourrait remettre en question les hypothèses  formulées dans l&#39;analyse de la sûreté ou avoir un impact sur ces hypothèses</li>
<li>veiller à ce que la liste comprenne  tous les SSC sur lesquels on compte pour les accidents additionnels de  dimensionnement (par exemple, système de ventilation filtré d&#39;urgence dans  l&#39;enceinte de confinement, dispositions concernant une source d&#39;eau d&#39;appoint  d&#39;urgence, équipement d&#39;atténuation de l&#39;hydrogène et des gaz combustibles et  instruments désignés pour des accidents hors dimensionnement)</li>
<li>pour chaque structure, système ou  composant, identifier  les éléments et composants structuraux dont la défaillance pourrait mener,  directement ou indirectement, à la perte ou à la défaillance d&#39;une fonction de  sûreté. Par exemple, on pourrait tenir compte des structures, conduites,  composants et supports à proximité ou avoisinants sans lien avec la sûreté,  mais dont la défaillance pourrait avoir un impact sur un élément lié à la  sûreté</li>
<li>à partir de la liste des éléments et  composants structuraux, identifier ceux pour lesquels la dégradation par le  vieillissement a le potentiel d&#39;entraîner une défaillance de composants;  fournir la justification pour les composants exclus</li>
<li>pour s&#39;assurer que l&#39;évaluation du  vieillissement est efficace sur le plan des ressources, dresser la liste finale  des éléments et des composants dans des catégories connexes</li>
</ol>
<p>Ce processus d&#39;examen préalable et de sélection devrait prendre en  compte l&#39;expérience pertinente en matière d&#39;exploitation et les résultats de  recherche.</p>
<p> Pour les SSC qui ne font pas partie du PGV, des dispositions appropriées  devraient être mises en place pour veiller à ce que leur importance pour la  sûreté ne change pas pendant la durée de vie de la centrale, en raison de la  dégradation due au vieillissement.</p>
<p> La documentation du processus d&#39;examen préalable et de sélection devrait  comprendre les sources d&#39;information et tout critère utilisé, et classer la  liste définitive des éléments et composants dans des catégories connexes.</p>
<p> Les documents produits devraient être identifiés comme des documents  permanents.</p>
<a name="4.4"></a>
<h3><a name="P190_14207"></a>4.4 Évaluation  de la gestion du vieillissement</h3>
<p>Les processus et les procédures de gestion de la centrale doivent  prévoir des exigences pour la tenue d&#39;évaluations de la gestion du  vieillissement, y compris l&#39;établissement de rapports et de dossiers. Les  évaluations portent sur les éléments suivants :</p>
<ol>
<li>comprendre le vieillissement</li>
<li>mesures préventives pour réduire au  minimum et contrôler la dégradation due au vieillissement </li>
<li>méthodes de détection, de  surveillance et de dégagement des tendances relativement aux effets du  vieillissement</li>
<li>méthodes d&#39;atténuation des effets du  vieillissement et mesures correctrices</li>
</ol>
<p>Il faut documenter la procédure de tenue d&#39;évaluations sur la gestion du  vieillissement ainsi que les résultats des évaluations.</p>
<p><strong>Orientation</strong></p>
<p>Une méthodologie recommandée est l&#39;évaluation des renseignements  pertinents et la documentation des constatations (voir le diagramme à l&#39;Annexe  B).</p>
<p> Les résultats de l&#39;expérience en exploitation et des projets de  recherche et développement, ainsi que des évaluations antérieures disponibles  sur le vieillissement (génériques et propres à la centrale) peuvent être  utilisés dans les évaluations. Les examens applicables et pertinents de la  gestion du vieillissement (p. ex. ceux préparés par le groupe des propriétaires,  les fournisseurs ou les organismes auxiliaires) devraient être utilisés pour  réduire au minimum le chevauchement des tâches, si cela est possible. Des  références appropriées devraient être faites et une explication sur  l&#39;utilisation de ces références devrait être fournie.</p>
<p> Les résultats des évaluations devraient résumer les enjeux pertinents du  vieillissement et l&#39;efficacité des pratiques courantes, et formuler des  recommandations sur les activités que prévoient le plan de gestion du  vieillissement des SSC, les programmes de soutien de la centrale relativement à  la conception, à l&#39;exploitation et à l&#39;entretien de même que les domaines  devant faire l&#39;objet d&#39;autres travaux de recherche et de développement.</p>
<h4>4.4.1 Comprendre  le vieillissement</h4>
<p>Les processus de gestion de la centrale doivent prévoir des exigences  visant à évaluer la compréhension actuelle du vieillissement des SSC  sélectionnés.</p>
<p><strong>Orientation</strong></p>
<p>La compréhension actuelle du vieillissement des SSC sélectionnés devrait  être documentée en fonction d&#39;une évaluation des mécanismes possibles et  actuels du vieillissement. L&#39;évaluation doit tenir compte des effets de la  dégradation par le vieillissement sur la fonction de sûreté des SSC, de l&#39;effet  sur la capacité d&#39;autres SSC à exécuter leurs fonctions de sûreté prévues et  d&#39;autres conséquences de la défaillance.<br/>
L&#39;évaluation devrait porter  sur ce qui suit&nbsp;: </p>
<ol>
<li>les exigences relatives à la  conception et au fondement d&#39;autorisation applicables au vieillissement et à la  gestion du vieillissement (notamment les codes et les normes applicables,  l&#39;analyse de la sûreté, les fonctions de sûreté et les conséquences d&#39;une  défaillance)</li>
<li>les matériaux constituant les SSC,  les conditions opérationnelles, les facteurs de stress, les sites de  dégradation ainsi que les mécanismes et les effets du vieillissement</li>
<li>les indicateurs de l&#39;état physique  ou fonctionnel des SSC (les indicateurs de l&#39;état)</li>
<li>les problèmes d&#39;obsolescence prévus</li>
<li>les modèles quantitatifs ou  qualitatifs visant à prédire les effets pertinents du vieillissement et les  lacunes relatives à leur compréhension</li>
<li>les conditions qui limitent la durée  de vie des SSC et les critères d&#39;acceptation servant à évaluer la nécessité  d&#39;une mesure correctrice</li>
<li>une liste des données nécessaires  pour évaluer le vieillissement des SSC (y compris les lacunes concernant la  disponibilité et la qualité des dossiers existants)</li>
</ol>
<h4>4.4.2 Mesures  préventives pour minimiser et contrôler la dégradation par le vieillissement </h4>
<p>Les méthodes visant à prévenir et à contrôler la dégradation par le  vieillissement doivent être évaluées afin de déterminer les mesures appropriées  à prendre.</p>
<p><strong>Orientation</strong></p>
<p>L&#39;évaluation devrait porter sur ce qui suit :</p>
<ol>
<li>les mesures préventives à prendre  concernant la conception, la sélection des matériaux et des revêtements, les  pratiques de fabrication et de construction, la mise en service, les conditions  opérationnelles ainsi que l&#39;exploitation préventive et les pratiques  d&#39;entretien</li>
<li>les paramètres à surveiller ou à  inspecter pour assurer l&#39;efficacité des mesures préventives</li>
<li>les conditions opérationnelles  (conditions environnementales et d&#39;exploitation) à maintenir et les pratiques  d&#39;exploitation visant à ralentir la dégradation potentielle de la structure ou  du composant</li>
</ol>
<h4>4.4.3 Méthodes  de détection, de surveillance et de dégagement des tendances relativement aux  effets du vieillissement</h4>
<p>Les méthodes de détection, de surveillance et de dégagement des  tendances relativement aux effets du vieillissement doivent être évaluées pour  établir les mesures appropriées à prendre.</p>
<p><strong>Orientation</strong></p>
<p>L&#39;évaluation devrait comprendre :</p>
<ol>
<li>les paramètres et les indicateurs de  l&#39;état en vue de détecter, de surveiller et de dégager les tendances relatives  à la dégradation par le vieillissement de la structure ou du composant</li>
<li>la technologie efficace (méthodes  d&#39;inspection, d&#39;essai, de surveillance et de suivi) pour détecter les effets du  vieillissement avant la défaillance de la structure, du système ou du composant et ce, avec suffisamment de  sensibilité, de fiabilité et d&#39;exactitude</li>
<li>les données à recueillir pour  faciliter l&#39;évaluation du vieillissement des SSC</li>
<li>les techniques d&#39;évaluation des  données pour reconnaître une dégradation importante et pour prévoir le  rendement futur des SSC (y compris l&#39;analyse des données et les tendances)</li>
</ol>
<p>L&#39;expérience nationale et internationale de l&#39;exploitation devrait être  prise en compte dans l&#39;évaluation. L&#39;évaluation des technologies et des  méthodes devrait tenir compte du besoin de détecter toute dégradation imprévue,  en fonction de l&#39;importante relative de la structure, du système ou du  composant pour la sûreté.</p>
<p>Par exemple, même si des inspections visant à gérer  des mécanismes de dégradation connus peuvent accessoirement mettre au jour une  dégradation inattendue, rien ne garantit que les dégradations inattendues  seront toujours détectées. Des programmes de surveillance comportant le retrait  d&#39;éléments (p. ex. les tubes de force et les coupons de matériaux, etc.)  peuvent aider à la découverte de mécanismes de dégradation auparavant inconnus.</p>
<p>De plus, il est bien connu que des mesures de la dégradation prises sur  des composants précis peuvent démontrer un large écart, même pour des éléments  semblables (p. ex. un amincissement des parois des conduites d&#39;alimentation ou  des défauts dans les tubes de force). Les évaluations devraient tenir compte du  besoin d&#39;établir un niveau approprié de confiance statistique indiquant que les  dégradations importantes ne passeront pas inaperçues.</p>
<p>L&#39;évaluation devrait également inclure une évaluation des risques en  matière de sûreté pour la centrale et les travailleurs, à partir des activités  de collecte de données.</p>
<h4>4.4.4 Méthodes  d&#39;atténuation des effets du vieillissement et mesures correctrices</h4>
<p>Il faut évaluer les méthodes d&#39;atténuation des effets du vieillissement  afin d&#39;établir les mesures correctrices appropriées pouvant être prises.</p>
<p><strong>Orientation</strong></p>
<p>L&#39;évaluation devrait identifier :</p>
<ol>
<li>les mesures liées à l&#39;exploitation,  à l&#39;entretien, à la réparation et au remplacement afin d&#39;atténuer rapidement  les effets du vieillissement sur la dégradation détectés</li>
<li>les critères d&#39;acceptation servant à  évaluer la nécessité de mesures correctrices</li>
<li>les mesures correctrices à prendre  lorsqu&#39;un composant ne satisfait pas aux critères d&#39;acceptation</li>
</ol>
<p>L&#39;efficacité des méthodes et pratiques existantes d&#39;atténuation de la  dégradation due au vieillissement devrait tenir compte de l&#39;expérience en  exploitation pertinente et des résultats de la recherche.</p>
<a name="4.5"></a>
<h3><a name="P196_14844"></a>4.5 Évaluations  de l&#39;état</h3>
<p>Les processus de gestion de la centrale doivent prévoir des exigences  sur l&#39;évaluation de l&#39;état réel d&#39;une structure, d&#39;un système ou d&#39;un composant  dès le début du PGV propre à l&#39;élément visé et à intervalles périodiques  pendant toute la durée de vie de la centrale ou de cet élément, selon ce qui  est requis pour valider l&#39;efficacité d&#39;un PGV.</p>
<p> Il faut documenter la  procédure d&#39;évaluation de l&#39;état de même que les résultats. Les évaluations de  l&#39;état servent à établir la condition réelle d&#39;une structure, d&#39;un système ou  d&#39;un composant, normalement au début du PGV qui s&#39;y rapporte, et à certains  moments pendant la durée opérationnelle de la centrale ou de cette structure, de  ce système ou de ce composant, selon ce qui est requis pour valider  l&#39;efficacité du PGV. Par exemple, des évaluations de l&#39;état sont également  réalisées dans le cadre de l&#39;examen du vieillissement si la centrale est  exploitée pendant une période prolongée ou à long terme (voir la section  3.4.2), et elles pourraient être requises avant le retour en service d&#39;une  centrale nucléaire (après un arrêt prolongé ou l&#39;arrêt temporaire d&#39;une  structure, d&#39;un système ou d&#39;un composant (voir la section 3.4.3)).</p>
<p> Les évaluations de l&#39;état devraient fournir de l&#39;information sur :</p>
<ol>
<li>le rendement et l&#39;état actuel de la  structure, du système ou du composant, y compris l&#39;évaluation de toute  défaillance liée au vieillissement ou de toute indication de dégradation  importante des matériaux et des mécanismes ou effets du vieillissement non  identifiés auparavant, ainsi que des comparaisons avec les prévisions relatives  aux mécanismes de vieillissement et les critères d&#39;acceptation</li>
<li>une estimation du rendement futur,  de la dégradation par le vieillissement et de la durée de vie restant pour la structure, le  système ou le composant,  lorsque cela est réalisable (c.-à-d. le temps pendant lequel la structure, le  système ou le composant  devrait probablement accomplir sa fonction et respecter les exigences de  rendement)</li>
<li>le suivi ou la prévention  recommandés, la surveillance et les mesures d&#39;atténuation à terminer ou à  intégrer dans le PGV, y compris les intervalles appropriés auxquels on doit  procéder aux évaluations de l&#39;état à des fins de suivi et les domaines dans  lesquels pousser la recherche et le développement</li>
</ol>
<p>Les évaluations de l&#39;état de la structure, du système ou du composant  peuvent être effectuées dans le cadre des évaluations relatives à la gestion du  vieillissement (voir la section 4.4).</p>
<a name="4.6"></a>
<h3><a name="P203_15953"></a>4.6 Programmes  de gestion du vieillissement propres à des SSC particuliers</h3>
<p>Les processus de gestion de la centrale doivent prévoir des exigences  relatives à l&#39;élaboration, à la documentation et au maintien d&#39;un programme  spécifique de gestion du vieillissement des SSC (ou de groupes de SSC)  sélectionnés par un processus d&#39;examen préalable, ou encore par un programme de  gestion d&#39;un mécanisme ou d&#39;un effet du vieillissement spécifique.</p>
<p> Les PGV propres à des SSC particuliers doivent être documentés et  doivent traiter des caractéristiques d&#39;un PGV efficace, tel qu&#39;indiqué à  l&#39;Annexe A.</p>
<p><strong>Orientation</strong> </p>
<p>Les PGV devraient préciser la nature des résultats dont on peut  raisonnablement assurer la gestion grâce à eux et tenir compte de la capacité  d&#39;ajuster les plans en fonction des résultats qui se situent en dehors des  prévisions.</p>
<p> Le PGV propre à des SSC particuliers devrait correspondre à l&#39;importance  de la sûreté, à la conception de référence et au rendement requis de la structure,  du système ou du composant, et à son incidence sur l&#39;exploitation sûre de la  centrale. Par exemple, les SSC qui limitent considérablement la durée de vie de  réacteurs CANDU actuels, comme les canaux de combustible, les conduites  d&#39;alimentation du caloportage, les générateurs de vapeur, l&#39;assemblage et les  structures du réacteur et les structures de confinement seront assortis de  plans détaillés de gestion du cycle de vie dans leur PGV particulier. Les PGV  peuvent ne pas être propres à des SSC particuliers, mais être plutôt axés sur  des mécanismes de dégradation ou des exigences opérationnelles pour contrôler  ou prévoir la dégradation, par exemple, la corrosion accélérée par le débit, la  chimie de l&#39;eau et la surveillance de la fatigue.</p>
<p> Chaque PGV propre à des SSC particuliers devrait tenir compte des neuf  caractéristiques d&#39;un programme efficace (voir l&#39;Annexe A). Les programmes en  place dans les centrales qui sont crédités à titre de PGV devraient être  évalués par rapport aux caractéristiques qui se trouvent à l&#39;Annexe A. Les  programmes qui ne comprennent pas ces caractéristiques devraient être modifiés,  le cas échéant. Par exemple, des programmes ou pratiques d&#39;entretien ou  d&#39;inspection existants pourraient convenir pour la gestion du vieillissement d&#39;une  structure, d&#39;un système ou d&#39;un composant, dans la mesure où ils tiennent  compte des caractéristiques mentionnées à l&#39;Annexe A.</p>
<p> Compte tenu du fait que les caractéristiques des PGV propres à des SSC  particuliers sont habituellement mises en œuvre dans le cadre de plusieurs  programmes à la centrale, la documentation d&#39;un PGV propre à des SSC  particuliers devrait fournir, pour chaque caractéristique, une description  sommaire de l&#39;application propre aux SSC du ou des programme(s) pertinent(s) de  la centrale ainsi que des renvois aux documents de la centrale nucléaire qui  contiennent les fondements et les preuves à l&#39;appui.<br/>
Il incombe au titulaire de permis d&#39;une centrale de définir ses  indicateurs de rendement d&#39;un PGV. Il pourrait s&#39;agir, par exemple, des  indicateurs de l&#39;intégrité du programme actuellement utilisés dans les rapports  sur l&#39;intégrité des systèmes. Voici des exemples d&#39;indicateurs :</p>
<ol>
<li>l&#39;état des matériaux, en ce qui a  trait aux critères d&#39;acceptation</li>
<li>les tendances dans les données en  lien avec les défaillances et la dégradation</li>
<li>une comparaison entre les efforts  d&#39;entretien préventif et les efforts d&#39;entretien correctif (p.&nbsp;ex. en  termes d&#39;années-personnes ou de coûts)</li>
<li>le nombre de défaillances  récurrentes et d&#39;occurrences de dégradation</li>
<li>l&#39;état de la conformité avec les  programmes d&#39;inspection</li>
</ol>
<p>Le document du PGV devrait également comprendre une page sommaire qui  fait ressortir les principaux renseignements servant à mieux comprendre et à  gérer le vieillissement, notamment les matériaux, les sites de dégradation, les  facteurs de stress du vieillissement et l&#39;environnement, les mécanismes de  vieillissement et leurs effets, les exigences et méthodes d&#39;inspection et de  surveillance, les méthodes d&#39;atténuation, les exigences réglementaires et les critères  d&#39;acceptation.</p>
<a name="4.7"></a>
<h3><a name="P204_15976"></a>4.7 Gestion  de l&#39;obsolescence technologique</h3>
<p>Le titulaire de permis doit établir un programme de gestion de  l&#39;obsolescence technologique. Les dispositions sur la gestion de l&#39;obsolescence  doivent être consignées.</p>
<p><strong>Orientation</strong></p>
<p>Le programme de gestion de l&#39;obsolescence technologique devrait porter  sur ce qui suit :</p>
<ol>
<li>l&#39;approvisionnement en pièces de  rechange pour la durée de vie prévue et le remplacement des pièces en temps  utile</li>
<li>des arrangements à long terme avec  les fabricants et les fournisseurs de pièces de rechange pour le soutien  technique</li>
<li>la disponibilité de la documentation  à l&#39;appui de l&#39;entretien et du remplacement des SSC</li>
<li>la disponibilité de documentation et  de technologies à l&#39;appui de la conception d&#39;une structure, d&#39;un système  ou d&#39;un composant  équivalent, le cas échéant</li>
<li>des dispositions visant la  modernisation et les mises à jour technologiques</li>
</ol>
<a name="4.8"></a>
<h3><a name="P208_16307"></a>4.8 Interfaces  avec d&#39;autres programmes d&#39;appui</h3>
<p>Tous les programmes et toutes les activités d&#39;appui qui font partie  intégrante de la gestion du vieillissement d&#39;une centrale nucléaire doivent  être identifiés, et leurs interfaces et leurs exigences en matière de données  et d&#39;information définies dans le document décrivant le cadre général de PGV  intégré, dont les programmes d&#39;analyse de la sûreté [4, 5, 6], d&#39;entretien [16]  et de fiabilité [15].</p>
<p><strong>Orientation</strong></p>
<p>Le cadre de PGV intégré devrait également comprendre les renseignements  sur la gestion du vieillissement devant être fournis pour d&#39;autres programmes  et activités de la centrale. Par exemple, la section 3.4.1 comprend le besoin  de recueillir des données et de l&#39;information à même le PGV, qui doivent être  examinées dans le cadre du programme, pour les besoins de l&#39;examen et de la  mise à jour réguliers de l&#39;analyse de la sûreté.</p>
<a name="4.9"></a>
<h3><a name="P212_16692"></a>4.9 Mise  en œuvre des PGV</h3>
<p>Le cadre général de PGV intégré et les PGV propres à des SSC  particuliers ainsi que les mesures importantes relatives à la gestion du  vieillissement doivent être mis en œuvre en application du système de gestion  de l&#39;installation du titulaire de permis.</p>
<p> Les données déterminées dans le PGV doivent être recueillies et  consignées pour constituer une base en vue des décisions sur le type et le  calendrier de mise en œuvre des mesures relatives à la gestion du  vieillissement.</p>
<p><strong>Orientation</strong></p>
<p>La mise en œuvre des PGV devrait inclure un processus systématique de  gestion du vieillissement qui repose sur la compréhension du vieillissement et  qui inclure les tâches de gestion du vieillissement suivantes (voir la Figure  1) :</p>
<ol>
<li>activités de planification,  notamment documentation sur les exigences réglementaires applicables, critères  de sûreté et de fiabilité applicables, et activités et programmes pertinents</li>
<li>opérations dans les lignes de  conduite pour l&#39;exploitation qui visent à minimiser le taux de dégradation</li>
<li>activités d&#39;inspection et de  surveillance qui visent la détection et l&#39;évaluation rapides de la dégradation  par au vieillissement</li>
<li>activités d&#39;entretien qui visent à  atténuer les effets du vieillissement et mesures correctrices concernant la  dégradation inacceptable</li>
</ol>
<a name="4.10"></a>
<h3><a name="P217_17136"></a>4.10 Examen  et amélioration</h3>
<p>L&#39;efficacité du cadre général de PGV intégré et des PGV propres à des  SSC particuliers doit faire l&#39;objet d&#39;un examen périodique à l&#39;aide des  observations obtenues des indicateurs de rendement et du programme.</p>
<p> Le titulaire de permis doit mettre à jour les PGV et les programmes  d&#39;interface ainsi que leur mise en œuvre afin d&#39;en améliorer l&#39;efficacité en  fonction des résultats de l&#39;examen, s&#39;il y a lieu.</p>
<p>Conformément au document S-99, <em>Rapports  à soumettre par les exploitants de centrales nucléaires</em> [18], les  titulaires doivent signaler toute découverte de renseignements qui peuvent  indiquer un effet du vieillissement ou un danger différent, considérablement  plus susceptible de se produire ou d&#39;envergure grandement supérieure à ce qui  était indiqué dans les documents de permis remis à la CCSN.</p>
<p><strong>Orientation</strong></p>
<p>Les examens devraient être réalisés tous les ans et consignés par écrit.  Les examens du programme devraient inclure la prise en compte du rendement en  exploitation, des historiques d&#39;inspection et d&#39;entretien, des résultats des  évaluations de l&#39;état, des rapports d&#39;événements, des renseignements tirés des  résultats de la recherche et du développement, des auto-évaluations, des  problèmes actuels et des mesures futures. Les recommandations et les mesures  correctrices visant les PGV et les programmes d&#39;appui devraient être mises en  œuvre en temps utile, comme il convient.</p>
<p> On devrait prendre les dispositions nécessaires pour que le PGV soit  examiné par les pairs afin d&#39;obtenir une évaluation indépendante permettant de  déterminer si le programme est conforme aux pratiques généralement reconnues et  d&#39;identifier les domaines à améliorer.</p>
<p> Lorsqu&#39;une lacune est identifiée dans un PGV, le titulaire de permis  devrait évaluer son importance et, s&#39;il y a lieu, tenter d&#39;en déterminer la  cause fondamentale et prendre les mesures correctrices nécessaires. Les PGV  devraient être ajustés au besoin en fonction des nouvelles données. Si un  composant ne répond pas aux critères d&#39;acceptation, la cause de la défaillance  du composant devrait être cernée et examinée afin que soient déterminées des  mesures correctrices qui devraient être mises en œuvre en temps utile pour  prévenir la récurrence. Le temps qu&#39;il faut pour planifier et mettre en œuvre  les options peut être un facteur considérable dans la planification de la  gestion du vieillissement. Par conséquent, il est recommandé que les PGV  précisent quand le travail devrait être entrepris afin de savoir à quel moment  des options critiques sont nécessaires pour gérer l&#39;éventail des incertitudes.  Un processus de confirmation devrait être établi afin de s&#39;assurer que les  mesures correctrices ont été mises en œuvre et qu&#39;elles sont efficaces.</p>
<p> Des programmes de recherche et de développement adéquatement financés  devraient être mis en place afin de répondre à toute nouvelle question liée au  vieillissement, d&#39;assurer l&#39;amélioration continue de la compréhension et la  prévisibilité des mécanismes de vieillissement et des causes du vieillissement  et de mettre en place des méthodes ou des pratiques de surveillance et  d&#39;atténuation connexes. Une approche stratégique devrait être suivie pour  promouvoir des programmes pertinents de R et D à long terme.</p>
<a name="a"></a>
<h2><a name="P302_26654"></a>Appendix&nbsp;A: Caractéristiques d&#39;un PGV efficace</h2>
<table border="1" className="widthFull">
<caption>
Adapté du Guide de sûreté NS-G-2.12, <em>Ageing Management for Nuclear Power Plants</em>, de l&#39;Agence internationale de l&#39;énergie atomique (AIEA) [1].
</caption>
<tr>
<th className="left" scope="col">Caractéristique</th>
<th className="left" scope="col">Description</th>
</tr>
<tr>
<td className="left">1. La portée du PGV est basée sur la compréhension du vieillissement</td>
<td className="left">Systèmes, structures et composants (SSC) assujettis à la gestion du
vieillissement (les éléments structuraux sont compris dans les structures)<br/>
Compréhension des phénomènes liés au vieillissement (mécanismes de
vieillissement importants, sites sensibles)
<ul>
<li>les exigences relatives à la conception et au fondement d&#39;autorisation
applicables au vieillissement</li>
<li>matériaux constituant les SSC, conditions opérationnelles, facteurs de
stress, sites de dégradation, mécanismes et effets du vieillissement</li>
<li>indicateurs de l&#39;état des SSC et critères d&#39;acceptation</li>
<li>modèles de prévision quantitative ou qualitative pour les phénomènes
liés au vieillissement</li>
</ul></td>
</tr>
<tr>
<td className="left">2. Mesures préventives pour réduire au minimum et contrôler la
dégradation due au vieillissement </td>
<td className="left">Identification des mesures préventives<br/>
Identification des paramètres à surveiller ou à inspecter<br/>
Conditions opérationnelles (c.-à-d. conditions environnementales et
conditions opérationnelles) à maintenir, et pratiques en matière
d&#39;exploitation visant à ralentir la dégradation potentielle de la structure
ou du composant</td>
</tr>
<tr>
<td className="left">3. Détection des effets du vieillissement</td>
<td className="left">Technologie efficace (inspection, essais et méthodes de surveillance)
pour détecter les effets du vieillissement avant défaillance des SSC.</td>
</tr>
<tr>
<td className="left">4. Surveillance et tendances dans les effets du vieillissement</td>
<td>Surveillance des indicateurs de l&#39;état et des paramètres<br/>
Données à recueillir pour faciliter l&#39;évaluation du vieillissement de
la structure ou du composant<br/>
Méthodes d&#39;évaluation (y compris l&#39;analyse et les tendances des
données).</td>
</tr>
<tr>
<td className="left">5. Atténuation des effets du vieillissement</td>
<td>Opérations, entretien, réparation et remplacement visant à atténuer
les effets du vieillissement et la dégradation détectés des SSC. </td>
</tr>
<tr>
<td className="left">6. Critères d&#39;acceptation</td>
<td>Critères d&#39;acceptation servant à évaluer la nécessité de prendre des
mesures correctrices.</td>
</tr>
<tr>
<td className="left">7. Mesures correctrices</td>
<td>Mesures correctrices à prendre lorsqu&#39;un composant ne satisfait pas
aux critères d&#39;acceptation.</td>
</tr>
<tr>
<td className="left">8. Expérience en matière d&#39;exploitation et résultats de la R et D</td>
<td>Mécanisme assurant une rétroaction en temps opportun sur l&#39;expérience
en matière d&#39;exploitation et les résultats de la R et D (s&#39;il y a lieu) et
prouvant objectivement que ces questions sont prises en compte dans le PGV.</td>
</tr>
<tr>
<td className="left">9. Gestion de la qualité</td>
<td>Les rôles et les responsabilités organisationnels<br/>
Les contrôles administratifs qui documentent la mise en œuvre du PGV
et les mesures prises<br/>
Les indicateurs visant à faciliter l&#39;évaluation et l&#39;amélioration du
PGV<br/>
Le processus de confirmation (vérification) visant à s&#39;assurer que des
mesures préventives adéquates et appropriées sont prises, et que toutes les
mesures correctrices ont été mises en œuvre et qu&#39;elles sont efficaces<br/>
Les pratiques de tenue de dossiers à suivre</td>
</tr>
</table>
<a name="b"></a>
<h2><a name="P295_25980"></a>Appendix&nbsp;B: Exemple d&#39;une méthode d&#39;évaluation  du vieillissement</h2>
<p>Adapté du Guide de sûreté NS-G-2.12, <em>Ageing Management for Nuclear Power Plants</em>,  de l&#39;Agence internationale de l&#39;énergie atomique (AIEA) [1].</p>
<p><strong>Compréhension du vieillissement</strong></p>  <ul>
<li>Conception et spécifications</li>
<li>Matériaux et propriétés des matériaux</li>
<li>Conditions opérationnelles</li>
<li>Exigences de rendement</li>
<li>Antécédents de fonctionnement et d&#39;entretien</li>
<li>Expérience générique en matière d&#39;exploitation</li>
<li>Résultats pertinents de la R et D</li>  </ul>
<p>Documentation de l&#39;information, y compris :</p>
<ul>
<li>Compréhension
actuelle du vieillissement des SSC (p. ex. mécanismes et effets du
vieillissement, sites de dégradation, tout modèle analytique/empirique de
prévision de la dégradation de SSC et toute lacune dans la compréhension du
vieillissement).</li>
<li>Critères
d&#39;acceptation, y compris les exigences réglementaires ou codes applicables,
les limites et conditions de l&#39;analyse de la sûreté et les objectifs de
fiabilité.</li>
<li>Liste des
exigences relatives aux données pour l&#39;évaluation du vieillissement des SSC
(y compris toute lacune dans la disponibilité et la qualité des documents
existants).</li>
</ul>
<p><strong>Prévention du vieillissement</strong></p>
<p>Évaluation de l&#39;efficacité des méthodes et des pratiques de prévention
de la dégradation due au vieillissement des SSC.</p>
<p>Documentation de l&#39;information, y compris :</p>
<ul>
<li>Conception,
matériaux, fabrication et construction, méthodes et pratiques d&#39;exploitation
et d&#39;entretien visant à prévenir la dégradation due au vieillissement des
SSC.</li>
<li>Conditions et pratiques d&#39;exploitation qui
permettent de prévenir ou de réduire au minimum le taux de dégradation du
vieillissement des SSC </li>
</ul>
<p><strong>Surveillance du vieillissement</strong></p>
<p>Évaluation des méthodes de surveillance, en tenant compte de
l&#39;expérience pertinente en matière d&#39;exploitation et des résultats de la
recherche.</p>
<p>Documentation de l&#39;information, y compris :</p>
<ul>
<li>Paramètres de
fonctionnement et indicateurs de l&#39;état pour la détection, la surveillance et
les tendances dans la dégradation des SSC due au vieillissement;</li>
<li>Une évaluation
de la capacité et de la possibilité des techniques de surveillance existantes
pour mesurer ces paramètres et indicateurs avec une sensibilité, une
fiabilité et une exactitude suffisantes;</li>
<li>Techniques d&#39;évaluation des données pour reconnaître
la dégradation importante et pour prévoir le rendement futur de la structure,
du système ou du composant. </li>
</ul>
<p><strong>Atténuation
du vieillissement </strong></p>
<p>Évaluation de l&#39;efficacité des méthodes et pratiques existantes visant
à ralentir la dégradation de la structure, du système ou du composant par le
vieillissement.</p>
<p>Documentation de l&#39;information, y compris :</p>
<ul>
<li>Méthodes et
pratiques d&#39;entretien, surveillance de l&#39;état (y compris la remise à neuf et
le remplacement périodique des pièces et des articles consomptibles) pour
contrôler la dégradation par le vieillissement de la structure, du système ou
du composant.</li>
<li>Conditions et
pratiques opérationnelles réduisant au minimum le taux de dégradation par le
vieillissement de la structure, du système ou du composant.</li>
<li>Modifications possibles à la conception et aux
matériaux constituant le composant pour contrôler la dégradation par le
vieillissement de la structure, du système ou du composant. </li>
</ul>
<p><strong>Rapport sur l&#39;examen de la gestion du
vieillissement</strong></p>
<p>Information propre à la structure, au
système ou au composant pour ce qui est de la compréhension, de la
surveillance et de l&#39;atténuation du vieillissement.</p>
<p>Recommandations concernant l&#39;application
des résultats de l&#39;examen de la gestion du vieillissement dans la conception,
l&#39;exploitation et l&#39;entretien des centrales et recommandations concernant des
travaux de R et D pour combler les lacunes dans les connaissances et la
technologie.</p>
<a name="glossary"></a>
<h2><a name="P363_28109"></a>Glossaire</h2>
<dl className="margins-removed">
<dt><strong>accident additionnel de dimensionnement</strong></dt>
<dd>Les conditions additionnelles de dimensionnement (CAD) forment un sous-ensemble des accidents hors dimensionnement (AHD) pris en compte dans le processus de conception de l&#39;installation en conformité avec la méthode de la meilleure estimation pour maintenir les rejets de matières radioactives à l&#39;intérieur des limites acceptables</dd>
<dt><strong>analyse des causes fondamentales</strong></dt>
<dd>Analyse objective, structurée, systématique et exhaustive visant à déterminer les raisons intrinsèques d&#39;une situation ou d&#39;un événement, et dont l&#39;ampleur tient compte de l&#39;importance de l&#39;événement en matière de sûreté.</dd>
<dt><strong>centrale nucléaire</strong></dt>
<dd>Toute installation de réacteur à fission ayant été construite pour produire de l&#39;électricité à l&#39;échelle commerciale. Une centrale nucléaire est une installation nucléaire de catégorie IA, telle que définie dans le <em>Règlement sur les installations nucléaires de catégorie I</em>.</dd>
<dt><strong>critères d&#39;acceptation</strong></dt>
<dd>Limites spécifiées sur la valeur d&#39;un indicateur du fonctionnement ou d&#39;un indicateur de l&#39;état utilisé pour évaluer la capacité d&#39;une structure, d&#39;un système ou d&#39;un composant à exécuter sa fonction prévue.</dd>
<dt><strong>défaillance</strong></dt>
<dd>Interruption ou incapacité d&#39;une structure, d&#39;un système ou d&#39;un composant à fonctionner dans le respect des critères d&#39;acceptation.</dd>
<dt><strong>défaillance d&#39;origine commune</strong></dt>
<dd>Défaillance simultanée de deux ou plusieurs structures, systèmes ou composants attribuables à un événement ou à une cause spécifique unique tel qu&#39;un phénomène naturel (séisme, tornade et inondation, etc.), une défaillance de conception, des défauts de fabrication, des erreurs d&#39;exploitation et d&#39;entretien, des événements destructeurs d&#39;origine humaine, les effets du vieillissement et autres.</dd>
<dt><strong>défense en profondeur</strong></dt>
<dd>Application de plusieurs mesures de protection relatives à un objectif de sûreté particulier, de manière à ce que l&#39;objectif soit atteint même en cas de défaillance d&#39;une des mesures de protection.</dd>
<dt><strong>dégradation par au vieillissement</strong></dt>
<dd>Effets du vieillissement qui pourraient compromettre la capacité d&#39;une structure, d&#39;un système ou d&#39;un composant à fonctionner dans le respect des critères d&#39;acceptation. On rencontre aussi le terme « dégradation due au vieillissement ».</dd>
<dt><strong>dimensionnement</strong></dt>
<dd>Gamme des conditions et des événements qui sont pris explicitement en compte dans la conception de l&#39;installation, suivant des critères déterminés, de manière à offrir à l&#39;installation la résistance voulue sans dépasser les limites autorisées par les opérations prévues des systèmes de sûreté.</dd>
<dt><strong>durée de vie</strong></dt>
<dd>Période allant du fonctionnement initial à la mise hors service finale d&#39;une structure, d&#39;un système ou d&#39;un composant.</dd>
<dt><strong>effets du vieillissement</strong></dt>
<dd>Changements nets dans les caractéristiques d&#39;une structure, d&#39;un système ou d&#39;un composant qui surviennent au fil du temps ou de l&#39;utilisation et qui sont dus aux mécanismes de vieillissement.</dd>
<dt><strong>entretien</strong></dt>
<dd>Activités organisées, d&#39;ordre administratif et technique, qui consistent à maintenir les structures, systèmes et composants en bon état de marche, y compris les aspects préventifs et correctifs (ou réparations).</dd>
<dt><strong>essai</strong></dt>
<dd>Observation ou mesure des indicateurs de l&#39;état ou indicateurs du fonctionnement dans des conditions contrôlées, visant à vérifier que le rendement actuel d&#39;une structure, d&#39;un système ou d&#39;un composant est conforme aux critères d&#39;acceptation.</dd>
<dt><strong>évaluation de l&#39;état</strong></dt>
<dd>Évaluation effectuée pour déterminer le rendement actuel et l&#39;état d&#39;une structure, d&#39;un système ou d&#39;un composant (y compris l&#39;une évaluation des défaillances associées à l&#39;âge ou des indices de dégradation importante des matériaux), et pour prévoir le rendement futur, l&#39;ampleur et le taux de dégradation par le vieillissement, ainsi que la durée de vie restante pour l&#39;élément visé (structure, système ou composant).</dd>
<dt><strong>exploitation à long terme</strong></dt>
<dd>Exploitation qui dépasse la durée de vie nominale d&#39;une centrale nucléaire; elle est justifiée par les résultats d&#39;un examen intégré de la sûreté qui compare les codes et les pratiques modernes avec les conditions des SSC, les processus qui limitent la durée de vie et un examen de la conception et des mesures d&#39;exploitation de la centrale.</dd>
<dt><strong>facteur de stress</strong></dt>
<dd>Agent ou stimulus associé aux conditions préalables à la mise en service et aux conditions opérationnelles qui peuvent produire une dégradation (par le vieillissement), immédiate ou graduelle, d&#39;une structure, d&#39;un système ou d&#39;un composant. Parmi les exemples, mentionnons notamment la chaleur, la vapeur, les produits chimiques, les rayonnements et les cycles électriques.</dd>
<dt><strong>fonctions de sûreté</strong></dt>
<dd>Fins déterminées que doivent atteindre une structure, un système ou un composant pour la sûreté, notamment celles nécessaires pour prévenir les conditions d&#39;accidents et pour en atténuer les conséquences.</dd>
<dt><strong>fondement d&#39;autorisation</strong></dt>
<dd>Ensemble d&#39;exigences et de documents visant une installation ou une activité réglementée, qui comprend&nbsp;:
<ul>
<li>les exigences réglementaires stipulées dans les lois et règlements applicables</li>
<li>les conditions et les mesures de sûreté et de réglementation décrites dans le permis relatif à l&#39;installation ou à l&#39;activité et les documents cités en référence directement dans ce permis</li>
<li>les mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à l&#39;appui de cette demande</li>
</ul>
</dd>
<dt><strong>gestion du vieillissement</strong></dt>
<dd>Mesures techniques, d&#39;exploitation, d&#39;inspection et d&#39;entretien visant à contrôler, à l&#39;intérieur des limites acceptables, les effets du vieillissement physique et de l&#39;obsolescence des SSC.</dd>
<dt><strong>hypothèses limitées dans le temps</strong></dt>
<dd>Hypothèses qui sont utilisées dans certaines analyses de la sûreté ou de la conception visant la centrale ou des structures, systèmes et composants particuliers, et qui se fondent sur une durée de vie déterminée; sont notamment inclus dans les analyses ce qui suit : calculs de la fatigue des métaux, analyse du choc thermique pressurisé, déformation et fragilisation induite par le rayonnement, vieillissement thermique, perte de matériaux et qualification du matériel électrique, de l&#39;équipement d&#39;instrumentation et de contrôle et des câbles électriques.</dd>
<dt><strong>indicateur de l&#39;état</strong></dt>
<dd>Caractéristique d&#39;une structure, d&#39;un système ou d&#39;un composant pouvant être observée, mesurée ou prévue pour inférer ou indiquer directement la capacité actuelle et future de l&#39;élément visé (structure, système ou composant) à fonctionner dans le respect des critères d&#39;acceptation.</dd>
<dt><strong>indicateur du fonctionnement</strong></dt>
<dd>Indicateur de l&#39;état qui est une indication directe de la capacité actuelle d&#39;une structure, d&#39;un système ou d&#39;un composant à fonctionner dans le respect des critères d&#39;acceptation.</dd>
<dt><strong>limites et conditions d&#39;exploitation</strong></dt>
<dd>Ensemble des limites et des conditions qui peuvent être surveillées par l&#39;opérateur ou en son nom, et qui peuvent être contrôlées par ce dernier.</dd>
<dt><strong>mécanisme de vieillissement</strong></dt>
<dd>Processus spécifique qui change graduellement les caractéristiques d&#39;une structure, d&#39;un système ou d&#39;un composant en fonction du temps ou de l&#39;utilisation, comme la fragilisation par la chaleur ou les rayonnements, la corrosion, la fatigue, le fluage, l&#39;érosion, etc.</dd>
<dt><strong>mise en service</strong></dt>
<dd>Processus consistant en une série d&#39;activités visant à démontrer que les SSC et l&#39;équipement installés fonctionnent conformément à leurs spécifications et aux attentes de la conception, avant d&#39;être mis en service.</dd>
<dt><strong>programme de gestion du vieillissement (PGV)</strong></dt>
<dd>Ensemble de politiques, de processus, de procédures et d&#39;arrangement et d&#39;activités qui déterminent l&#39;orientation pour assurer la gestion du vieillissement des SSC d&#39;une centrale nucléaire.</dd>
<dt><strong>structures, systèmes et composants (SSC)</strong></dt>
<dd>Terme général englobant tous les éléments d&#39;une installation ou d&#39;une activité qui contribuent à la protection et à la sûreté, à l&#39;exclusion des facteurs humains. Les structures sont des éléments passifs : bâtiments, cuves, boucliers ou blindages, etc. Un système comprend plusieurs composants assemblés de manière à exécuter une fonction (active) spécifique. Un composant est un élément discret d&#39;un système, par exemple des câbles, des transistors, des circuits intégrés, des moteurs, des relais, des solénoïdes, des conduites, des raccords, des pompes, des réservoirs et des vannes.</dd>
<dt><strong>système de gestion</strong></dt>
<dd>Ensemble d&#39;éléments interreliés ou comportant des interactions (système) servant à établir des politiques et des objectifs à atteindre de manière efficiente et efficace. Le système de gestion intègre tous les éléments d&#39;une organisation dans un système cohérent, afin de faciliter l&#39;atteinte de tous les objectifs organisationnels. Ces éléments comprennent la structure, les ressources et les processus. Le personnel, l&#39;équipement et la culture organisationnelle, ainsi que les politiques et processus documentés, font partie du système de gestion. Les processus organisationnels doivent répondre à la totalité des exigences pour l&#39;organisation telles qu&#39;elles ont été établies dans certains documents, comme les normes de sûreté de l&#39;AIEA et d&#39;autres normes et codes internationaux.</dd>
<dt><strong>systèmes de sûreté</strong></dt>
<dd>Systèmes qui assurent l&#39;arrêt sécuritaire du réacteur ou l&#39;évacuation de la chaleur résiduelle du c&#339;ur du réacteur, ou qui atténue les conséquences des incidents de fonctionnement prévus et des accidents de dimensionnement.</dd>
<dt><strong>vieillissement</strong></dt>
<dd>Processus général au cours duquel les caractéristiques d&#39;une structure, d&#39;un système ou d&#39;un composant changent graduellement au fil du temps ou de l&#39;utilisation. Ce processus peut être un mécanisme de vieillissement unique ou une combinaison de plusieurs mécanismes de vieillissement. Le vieillissement non physique est le processus par lequel un élément (structure, système ou composant) devient désuet (obsolescence) en raison de l&#39;évolution des connaissances et de la technologie et des changements connexes dans les codes et les normes. Le vieillissement physique est dû aux processus physiques, mécaniques, thermiques, électriques, chimiques, radioactifs ou biologiques (mécanismes de vieillissement).</dd>
</dl>
<a name="references"></a>
<h2><a name="P283_24351"></a>Références</h2>
<ol>
<li>Agence  internationale de l&#39;énergie atomique (AIEA). Collection normes de sûreté, Guide  de sûreté no&nbsp;NS-G-2.12, <em>Ageing  Management for Nuclear Power Plants</em>, Vienne, Autriche, 2009.</li>
<li>AIEA. Collection rapports de sûreté no 57, <em>Safe Long Term Operation of Nuclear Power  Plants</em>, Vienne, Autriche, 2008.</li>
<li>Organisation de  coopération et de développement économiques (OCDE), Agence pour l&#39;énergie  nucléaire. <em>Glossaire du vieillissement  des centrales nucléaires</em>, Paris, France, 1999.</li>
<li>Commission  canadienne de sûreté nucléaire (CCSN). Document d&#39;application de la  réglementation RD-310, <em>Analyses de la  sûreté pour les centrales nucléaires</em>, Ottawa, Canada, 2008.</li>
<li>CCSN. Document  d&#39;application de la réglementation GD-310, <em>Document  d&#39;orientation sur les analyses de la sûreté des centrales nucléaires</em>,  Ottawa, 2012.</li>
<li>CCSN. Norme  d&#39;application de la réglementation S-294, É<em>tudes  probabilistes de sûreté (ÉPS) pour les centrales nucléaires, </em>Ottawa,  Canada, 2005. </li>
<li>CCSN. Document  d&#39;application de la réglementation RD-337, <em>Conceptions  des nouvelles centrales nucléaires </em>(ébauche), Ottawa, Canada, 2008. </li>
<li>Groupe CSA. N285. <em>General requirements for pressure-retaining systems and components in  CANDU nuclear power plants</em>, Toronto,   Canada, 2012.</li>
<li>Groupe  CSA. N286, <em>Management system requirements  for nuclear facilities</em>,Toronto, Canada,  2012. </li>
<li>Groupe  CSA. N287.1 <em>General requirements for  concrete containment structures for nuclear power plants</em>, Toronto, Canada,  1993.</li>
<li>Groupe CSA. N291-F08, <em>Exigences relatives aux enceintes reliées à  la sûreté des centrales nucléaires CANDU</em>, Toronto, Canada, 2008.</li>
<li>Groupe  CSA. N285.4-F09, <em>Inspection périodique  des composants des centrales nucléaires CANDU</em>,Toronto, Canada, 2009.</li>
<li>Groupe  CSA. N285.5-F08, <em>Inspection périodique  des composants de confinement des centrales nucléaires CANDU, </em>Toronto,  Canada, 2008.</li>
<li>Groupe  CSA. N287.7-F08, <em>Exigences relatives à la  mise à l&#39;essai et à la vérification en cours d&#39;exploitation, des enceintes de  confinement en béton des centrales nucléaires CANDU, </em>Toronto, Canada, 2008.</li>
<li>CCSN. Document  d&#39;application de la réglementation RD/GD-98, <em>Programmes de fiabilité pour les centrales nucléaires</em>, Ottawa,  Canada, 2012. </li>
<li>CCSN. Document  d&#39;application de la réglementation RD/GD-210, <em>Programmes d&#39;entretien des centrales nucléaires</em>, Ottawa, Canada,  2012.</li>
<li>Groupe  CSA. N290.13-F05, <em>Qualification environnementale des  équipements pour les centrales nucléaires CANDU</em>,Toronto, Canada, 2005. </li>
<li>CCSN. Norme  d&#39;application de la réglementation de la CCSN S-99, <em>Rapports à soumettre par les exploitants de centrales nucléaires</em>,  Ottawa, Canada, 2003. </li>
<li>CCSN. Document  d&#39;application de la réglementation RD-360,<em> Prolongement de la durée de vie des centrales nucléaires</em>, Ottawa,  Canada,&nbsp;2008.</li>
<li>AIEA. Collection  normes de sûreté, Guide de sûreté no NS-G 2.10, <em>Periodic Safety Review of Nuclear Power Plants</em>, Vienne,  Autriche,&nbsp;2003. </li>
</ol>
<a name="additional"></a>
<h2><a name="P126_7975"></a>Renseignements supplémentaires</h2>
<p>Les documents suivants contiennent des renseignements  supplémentaires qui pourraient intéresser les personnes participant à la  conception et à la mise en œuvre de programmes de gestion du vieillissement.</p>
<ul>
<li>Agence  internationale de l&#39;énergie atomique (AIEA). Collection normes de sûreté no&nbsp;NS&ndash;R&ndash;1, <em>Sûreté des centrales nucléaires : conception</em>, Prescription, Vienne,  Autriche, 2000</li>
<li>AIEA. Collection  normes de sûreté, Guide de sûreté no NS&ndash;G&ndash;2.6, <em>Maintenance,  Surveillance and In&ndash;Service Inspection in Nuclear Power Plants</em>, Vienne,  Autriche, 2002</li>
<li>AIEA. Collection  normes de sûreté, Guide de sûreté no NS&ndash;G&ndash;2.4, <em>L&#39;organisme  exploitant des centrales nucléaires</em>, Vienne, Autriche, 2001</li>
<li>AIEA. Collection  normes de sûreté no NS&ndash;R&ndash;2, <em>Sûreté des centrales  nucléaires&nbsp;: exploitation</em>, Prescriptions, Vienne, Autriche, 2000</li>
<li>AIEA. Collection rapports de sûreté no&nbsp;3, <em>Equipment  Qualification in Operational Nuclear Power Plants: Upgrading, Preserving and  Reviewing</em>, Vienne, Autriche, 1998</li>
<li>AIEA. Collection  rapports de sûreté no&nbsp;62, <em>Proactive  Management of Ageing of Nuclear Power Plants</em>, Vienne, Autriche, 2009</li>
<li>AIEA. TECDOC 1197, <em>Assessment  and Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: CANDU Reactor Assemblies</em>, Vienne,  Autriche, 2001.</li>
<li>AIEA, TECDOC 1188, <em>Assessment  and Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: In-containment Instrumentation and Control cables, Volumes I &amp; II</em>,  Vienne, Autriche, 1997</li>
<li>AIEA. TECDOC 1025, <em>Assessment  and Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: Concrete Containment  Buildings</em>, Vienne,  Autriche, 1998.</li>
<li>AIEA. TECDOC 981, <em>Assessment  and Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: Steam Generators</em>, Vienne,  Autriche, 1997</li>
<li>AIEA. Collection  rapports de sûreté no&nbsp;15, <em>Implementation  and Review of a Nuclear Power Plant Ageing Management Programme</em>, Vienne,  Autriche, 1999.</li>
<li>United States Nuclear Regulatory Commission, NUREG-1801, <em>Generic Aging Lessons Learned (GALL) Report, </em>Volumes 1 et 2, Washington,   DC, États-Unis, 2011</li>
<li>Institute of Nuclear Power  Operations (INPO), AP-913 Révision 1, <em>Equipment  Reliability Process Description</em>, Atlanta, Georgie, USA,  2001.</li>
</ul>
<h2>Séries de documents d&#39;application de la réglementation de la CCSN<br/>
</h2>
<p>Les installations et activités du secteur nucléaire du Canada sont réglementées par la Commission canadienne de sûreté nucléaire (CCSN). En plus de la <em>Loi sur la sûreté et la réglementation nucléaires </em>et de ses règlements d&#39;application, il pourrait y avoir des exigences en matière de conformité à d&#39;autres outils de réglementation, comme les documents d&#39;application de la réglementation ou les normes.</p>
<p>Depuis  avril 2013, la collection des documents d&#39;application de la réglementation actuels et prévus comporte trois grandes catégories et vingt­cinq séries, selon la structure ci-dessous. Les documents d&#39;application de la réglementation préparés par la CCSN font partie de l&#39;une des séries suivantes&nbsp;: </p>
<p><strong>1.0 Installations et activités réglementées</strong></p>
<p>Séries 1.1 Installations dotées de réacteurs<br/>
<div className="indent2">1.2 Installations de catégorie IB <br/>
1.3 Mines et usines de concentration  d&#39;uranium<br/>
1.4 Installations de catégorie II<br/>
1.5 Homologation d&#39;équipement réglementé<br/>
1.6 Substances nucléaires et appareils à rayonnement</div></p>
<p><strong>2.0 Domaines de sûreté et de réglementation</strong></p>
<p>Séries 2.1 Système de gestion<br/>
<div className="indent2">2.2 Gestion du rendement humain<br/>
2.3 Conduite de l&#39;exploitation <br/>
2.4 Analyse de la sûreté<br/>
2.5 Conception matérielle<br/>
2.6 Aptitude fonctionnelle<br/>
2.7 Radioprotection<br/>
2.8 Santé et sécurité classiques<br/>
2.9 Protection de l&#39;environnement<br/>
2.10 Gestion des urgences et protection-incendie<br/>
2.11 Gestion des déchets<br/>
2.12 Sécurité<br/>
2.13 Garanties et non-prolifération<br/>
2.14 Emballage  et transport</div></p>
<p><strong>3.0 Autres domaines de réglementation</strong></p>
<p>Séries 3.1 Exigences relatives  à la production de rapports<br/>
<div className="indent2">3.2 Mobilisation du public et des Autochtones<br/>
3.3 Garanties financières<br/>
3.4 Délibérations de la Commission<br/>
3.5 Diffusion  de l&#39;information</div></p>
<p>Remarque&nbsp;: Les séries de documents d&#39;application de la  réglementation pourraient être modifiées périodiquement par la CCSN. Chaque  série susmentionnée peut comprendre plusieurs documents d&#39;application de la  réglementation. Pour obtenir la plus récente liste de documents d&#39;application  de la réglementation, veuillez consulter le site Web de la CCSN à <a href="http://www.suretenucleaire.gc.ca/documents-de-reglementation">suretenucleaire.gc.ca/documents-de-reglementation</a><u> </u></p>
<div style="background-color:#cecece;padding:5px;text-align:center;">
<p><a href="#toc">Table des mati&egrave;res</a></p>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }