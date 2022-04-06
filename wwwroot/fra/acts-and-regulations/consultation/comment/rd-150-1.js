import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Page Web archivée - Projet de Documentd'application de la réglementation RD-150Conception et mise en &oelig;uvre d'un programme d'essais biologiques", 
                dateModified: "2012-09-19",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/rd-150-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Faites d&eacute;filer la page et l&rsquo;avis &ldquo;archiv&eacute;&rdquo; appara&icirc;t au haut de la fen&ecirc;tre.</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Avertissement" title="Avertissement" className="image-actual mrgn-bttm-0" /> Cette page Web a &eacute;t&eacute; archiv&eacute;e dans le Web.</p>
<div id="archived" className="wet-boew-archived col-md-12">
<h2>Contenu archiv&eacute;</h2>
<p>Information archiv&eacute;e dans le Web &agrave; des fins de consultation, de recherche ou de tenue de documents. Cette derni&egrave;re n&rsquo;a aucunement &eacute;t&eacute; modifi&eacute;e ni mise &agrave; jour depuis sa date de mise en archive. Les pages archiv&eacute;es dans le Web ne sont pas assujetties aux normes qui s&rsquo;appliquent aux sites Web du gouvernement du Canada. Conform&eacute;ment &agrave; la <a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12316">Politique de communication du gouvernement du Canada</a>, vous pouvez obtenir cette information dans un autre format en <a href="/fra/contact-us/index">communiquant avec nous</a>.</p>
</div>
<a name="#RDsection[1]#"></a>
<h2><strong>PR&Eacute;FACE</strong></h2>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation aide &agrave; concevoir et &agrave; mettre en &oelig;uvre un programme de surveillance relatif aux essais biologiques, conform&eacute;ment &agrave; la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>(LSRN) et &agrave; ses r&egrave;glements. </p>  <p>Le pr&eacute;sent document pr&eacute;sente les concepts fondamentaux permettant d&rsquo;&eacute;tablir la n&eacute;cessit&eacute; d&rsquo;un programme d&rsquo;essais biologiques, de choisir les participants et de fixer la fr&eacute;quence d&rsquo;&eacute;chantillonnage optimale. Il propose &eacute;galement des m&eacute;thodes visant &agrave; interpr&eacute;ter les r&eacute;sultats.</p>  <p>Les principes et &eacute;l&eacute;ments cl&eacute;s de l&rsquo;&eacute;laboration du pr&eacute;sent guide sont conformes aux normes nationales et internationales, notamment le document 83-EHD-87, <em>Bioassay Guideline&nbsp;2&mdash;Guidelines for Tritium Bioassay, Report of the Working Group on Bioassay and in vivo Monitoring Criteria</em>, de Sant&eacute; et Bien-&ecirc;tre Canada; le <em>Human Respiratory Tract Model for Radiological Protection</em>, de la Commission international de protection radiologique;et le <em>Safety Guide RS-G-1.2, Assessment of Occupational Exposures Due to Intakes of Radionuclides</em>, de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA).</p>  <p>Aucun &eacute;l&eacute;ment contenu dans ce document ne doit &ecirc;tre interpr&eacute;t&eacute; par le titulaire de permis comme une autorisation de d&eacute;roger aux exigences des r&egrave;glements pertinents. Le titulaire de permis a la responsabilit&eacute; d&#39;identifier la l&eacute;gislation, les conditions de permis, les lignes directrices ou les normes applicables et d&#39;y adh&eacute;rer.</p>
<a name="#RDsection[2]#"></a>
<h2><strong>TABLE DES MATI&Egrave;RES</strong> </h2>  <ul className="pbarrow">
<li><a href="#1.0">1.0 Objet</a></li>
<li><a href="#2.0">2.0 Port&eacute;e</a></li>
<li><a href="#3.0">3.0 Dispositions l&eacute;gislatives applicables</a></li>
<li><a href="#4.0">4.0 Participation aux essais</a>
<ul className="pbarrow">
<li><a href="#4.1">4.1 Essais biologiques de r&eacute;f&eacute;rence</a></li>
<li><a href="#4.2">4.2 Essais biologiques courants</a></li>
<li><a href="#4.3">4.3 Essais biologiques sp&eacute;ciaux</a></li>
<li><a href="#4.4">4.4 Programme de d&eacute;pistage</a></li>
</ul>
</li>
<li><a href="#5.0">5.0 M&eacute;thode et fr&eacute;quence des essais biologiques </a>
<ul className="pbarrow">
<li><a href="#5.1">5.1 M&eacute;thodes d&rsquo;essais biologiques</a></li>
<li><a href="#5.2">5.2 D&eacute;termination de la fr&eacute;quence</a></li>
<li><a href="#5.3">5.3 Autres consid&eacute;rations dosim&eacute;triques</a></li>
</ul>
</li>
<li><a href="#6.0">6.0 Interpr&eacute;tation des r&eacute;sultats</a>
<ul className="pbarrow">
<li><a href="#6.1">6.1 Niveaux de r&eacute;f&eacute;rence</a></li>
<li><a href="#6.2">6.2 Mise en perspective des r&eacute;sultats des essais biologiques</a></li>
<li><a href="#6.3">6.3 Pr&eacute;cision des r&eacute;sultats d&rsquo;essais biologiques</a></li>
</ul>
</li>
<li><a href="#7.0">7.0 Enregistrement des r&eacute;sultats d&rsquo;essais biologiques</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#references">R&eacute;f&eacute;rences</a></li>
<li><a href="#additional">Renseignements additionnels</a></li>
<li><a href="#A">Annexe A Choix des participants &agrave; un programme d&rsquo;essais biologiques courants bas&eacute; sur l&rsquo;activit&eacute; manipul&eacute;e</a>
<ul className="pbarrow">
<li><a href="#A.1">A.1 Fraction d&rsquo;incorporation potentielle (FIP)</a></li>
<li><a href="#A.2">A.2 Facteur de rejet (R)</a></li>
<li><a href="#A.3">A.3 Facteur de confinement (C)</a></li>
<li><a href="#A.4">A.4 Facteur de dispersabilit&eacute; (D)</a></li>
<li><a href="#A.5">A.5 Facteur d&rsquo;occupation des locaux (O)</a></li>
<li><a href="#A.6">A.6 Facteur relatif aux mati&egrave;res sous forme sp&eacute;ciale (S)</a></li>
<li><a href="#A.7">A.7 Valeurs du tableau&nbsp;1</a></li>
</ul>
</li>
<li><a href="#B">Annexe B Exemples
</a>
<ul className="pbarrow">
<li><a href="#B.1">B.1 Exemple&nbsp;1 : D&eacute;termination de la participation &agrave; un programme d&rsquo;essais biologiques</a></li>
<li><a href="#b.2">B.2 Exemple&nbsp;2 : D&eacute;termination de l&rsquo;erreur de comptage (incertitude)</a></li>
<li><a href="#B.3">B.3 Exemple&nbsp;3 : D&eacute;termination de la fr&eacute;quence de surveillance des incorporations de <sup>137</sup>Cs</a></li>
<li><a href="#B.4">B.4 Exemple&nbsp;4 : D&eacute;termination de la fr&eacute;quence de surveillance pour les incorporations de <sup>131</sup>I</a></li>
<li><a href="#B.5">B.5 Exemple&nbsp;5 : Niveaux d&rsquo;enqu&ecirc;te d&eacute;riv&eacute;s pour l&rsquo;inhalation de <sup>137</sup>Cs</a></li>
</ul>
</li>  </ul>   <a name="1.0"></a>
<h2><strong>1.0 OBJET</strong> </h2>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation aide &agrave; concevoir et &agrave; mettre en oeuvre un programme de surveillance relatif aux essais biologiques, conform&eacute;ment &agrave; la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (LSRN, la Loi) et &agrave; ses r&egrave;glements.</p>   <a name="2.0"></a>
<h2><strong>2.0 PORT&Eacute;E</strong> </h2>  <p>Le document d&rsquo;application de la r&eacute;glementation pr&eacute;sente les concepts fondamentaux permettant d&rsquo;&eacute;tablir la n&eacute;cessit&eacute; d&rsquo;un programme d&rsquo;essais biologiques, de choisir les participants et de fixer la fr&eacute;quence d&rsquo;&eacute;chantillonnage optimale. Il propose &eacute;galement les m&eacute;thodes d&rsquo;interpr&eacute;tation et d&rsquo;enregistrement des r&eacute;sultats.</p>   <a name="3.0"></a>
<h2><strong>3.0 DISPOSITIONS L&Eacute;GISLATIVES APPLICABLES</strong> </h2>  <p>Les dispositions l&eacute;gislatives et r&egrave;glements de la LSRN applicables au pr&eacute;sent guide sont les suivants&nbsp;:</p>  <ol>
<li> L&rsquo;article&nbsp;27 de la LSRN, qui stipule que &laquo;&nbsp;Les titulaires de licence ou de permis et les personnes vis&eacute;es par r&egrave;glement&nbsp;: <em>a</em>)&nbsp;tiennent les documents r&eacute;glementaires, notamment un document sur la quantit&eacute; de rayonnement re&ccedil;ue par chaque personne&mdash;ou la dose engag&eacute;e &agrave; l&rsquo;&eacute;gard de chaque personne&mdash;dont les fonctions professionnelles sont li&eacute;es aux activit&eacute;s autoris&eacute;es par la pr&eacute;sente loi ou qui se trouve dans un lieu o&ugrave; celles-ci sont exerc&eacute;es, les conserve durant la p&eacute;riode r&eacute;glementaire&hellip;&nbsp;&raquo;</li>
<li> L&rsquo;alin&eacute;a 3(1)<em>e</em>) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires,</em> qui stipule que &laquo;&nbsp;La demande de permis comprend les renseignements suivants&nbsp;:&nbsp;&hellip;<em>e</em>)&nbsp;les mesures propos&eacute;es pour assurer l&rsquo;observation du <em>R&egrave;glement sur la radioprotection</em>&hellip;&nbsp;&raquo;</li>
<li> L&rsquo;article&nbsp;28 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, qui stipule que&nbsp;:<br />
&laquo;&nbsp;(1)&nbsp;La personne qui est tenue de conserver un document aux termes de la Loi, de ses r&egrave;glements ou d&rsquo;un permis, le fait pour la p&eacute;riode indiqu&eacute;e dans le r&egrave;glement applicable ou, &agrave; d&eacute;faut, pendant une ann&eacute;e suivant l&rsquo;expiration du permis qui autorise l&rsquo;activit&eacute; pour laquelle les documents sont conserv&eacute;s.<br />
&laquo;&nbsp;(2)&nbsp;Il est interdit &agrave; quiconque d&rsquo;ali&eacute;ner un document mention&eacute;e dans la Loi, ses r&egrave;glements ou un permis &agrave; moins&nbsp;: <em>a</em>)&nbsp;de ne plus &ecirc;tre tenu de le conserver aux termes de la Loi, de ses r&egrave;glements ou du permis; <em>b</em>)&nbsp;de donner &agrave; la Commission un pr&eacute;avis d&rsquo;au moins 90&nbsp;jours indiquant la date d&rsquo;ali&eacute;nation et la nature du document.<br />
&laquo;&nbsp;(3)&nbsp;La personne qui avise la Commission conform&eacute;ment au paragraphe&nbsp;(2) d&eacute;pose l&rsquo;original ou une copie du document aupr&egrave;s d&rsquo;elle sur demande&nbsp;&raquo;</li>
<li> L&rsquo;alin&eacute;a 4<em>a</em>) du <em>R&egrave;glement sur la radioprotection, </em>qui stipule que &laquo;&nbsp;Le titulaire de permis met en &oelig;uvre un programme de radioprotection et, dans le cadre de ce programme&nbsp;: <em>a</em>)&nbsp;maintient le degr&eacute; d&rsquo;exposition aux produits de filiation du radon ainsi que la dose efficace et la dose &eacute;quivalente qui sont re&ccedil;ues par la personne, et engag&eacute;es &agrave; son &eacute;gard, au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre, compte tenu des facteurs &eacute;conomiques et sociaux, par&nbsp;:&nbsp;&hellip; iii)&nbsp;le contr&ocirc;le de l&rsquo;exposition du personnel et du public au rayonnement,&nbsp;&raquo;&hellip;</li>
<li> Le paragraphe&nbsp;5(1) du <em>R&egrave;glement sur la radioprotection,</em> qui stipule que &laquo;&nbsp;Pour tenir le document sur les doses de rayonnement pr&eacute;vu &agrave; l&rsquo;article&nbsp;27 de la Loi, le titulaire de permis contr&ocirc;le et enregistre l&rsquo;ampleur de l&rsquo;exposition aux produits de filiations du radon de chaque personne mentionn&eacute;e &agrave; cet article, ainsi que la dose efficace et la dose &eacute;quivalente qui sont re&ccedil;ues par la personne et engag&eacute;es &agrave; son &eacute;gard&nbsp;&raquo;,</li>
<li> Le paragraphe 5(2) du <em>R&egrave;glement sur la radioprotection,</em> qui stipule que &laquo;&nbsp;Le titulaire de permis contr&ocirc;le l&rsquo;ampleur de l&rsquo;exposition aux produits de filiation du radon, la dose efficace et la dose &eacute;quivalente&nbsp;: <em>a</em>)&nbsp;par mesure directe r&eacute;sultant du contr&ocirc;le; <em>b</em>)&nbsp;par &eacute;valuation, lorsque le temps et les ressources exig&eacute;s pour une mesure directe sont trop importants par rapport &agrave; son utilit&eacute;&nbsp;&raquo;, et</li>
<li> L&rsquo;article&nbsp;24 du <em>R&egrave;glement sur la radioprotection,</em> qui stipule que &laquo;&nbsp;Le titulaire de permis tient un document contenant les nom et cat&eacute;gorie d&rsquo;emploi de chaque travailleur du secteur nucl&eacute;aire.&nbsp;&raquo;</li>  </ol>   <a name="4.0"></a>
<h2><strong>4.0 PARTICIPATION AUX ESSAIS</strong> </h2>  <p>L&rsquo;objectif d&rsquo;un programme de surveillance est de d&eacute;terminer quels sont les crit&egrave;res de participation au programme, la fr&eacute;quence de la surveillance et les mesures &agrave; prendre en fonction des r&eacute;sultats des mesures.</p>  <p>Quatre types de programmes de surveillance sont d&eacute;crits dans cette section. Ce sont la surveillance relative aux essais biologiques de r&eacute;f&eacute;rence, la surveillance relative aux essais biologiques courants, la surveillance relatives aux essais biologiques sp&eacute;ciaux, et les programmes de d&eacute;pistage. Les sections&nbsp;5.0 et 6.0 d&eacute;crivent la fr&eacute;quence de la surveillance et l&rsquo;interpr&eacute;tation des r&eacute;sultats.</p>   <a name="4.1"></a>
<h3><strong>4.1 Essais biologiques de r&eacute;f&eacute;rence</strong> </h3>  <p>La surveillance de r&eacute;f&eacute;rence consiste &agrave; &eacute;valuer, d&egrave;s l&rsquo;embauche, ou au moment de commencer des nouvelles t&acirc;ches faisant l&rsquo;objet d&rsquo;une surveillance relative &agrave; des essais biologiques, la charge de radionucl&eacute;ides dans l&rsquo;organisme d&rsquo;un travailleur. Cette &eacute;valuation sert de r&eacute;f&eacute;rence pour le nouvel employ&eacute;.</p>  <p>On doit effectuer un essai biologique de r&eacute;f&eacute;rence pour tous les travailleurs qui participent &agrave; un programme de surveillance relatif &agrave; des essais biologiques courants. Le type de mesure de r&eacute;f&eacute;rence devrait &ecirc;tre pertinent et en rapport avec les radionucl&eacute;ides faisant l&rsquo;objet d&rsquo;une surveillance courante chez le travailleur. La surveillance de r&eacute;f&eacute;rence n&rsquo;est pas requise pour l&rsquo;air&nbsp;[1,&nbsp;2].</p>   <a name="4.2"></a>
<h3><strong>4.2 Essais biologiques courants</strong> </h3>  <p>Les doses associ&eacute;es &agrave; l&rsquo;incorporation de radionucl&eacute;ides pour tous les travailleurs qui risquent de recevoir une dose efficace engag&eacute;e (DEE) sup&eacute;rieure &agrave; 1&nbsp;mSv par ann&eacute;e. Lorsqu&rsquo;il est peu probable que les travailleurs re&ccedil;oivent des doses annuelles d&eacute;passant 1&nbsp;mSv, le co&ucirc;t de la r&eacute;alisation d&rsquo;essais biologiques courants pourrait ne pas toujours &ecirc;tre justifi&eacute; pour les doses en question. Il est cependant possible d&rsquo;envisager le recours &agrave; d&rsquo;autres moyens, comme le d&eacute;pistage, pour &eacute;valuer l&rsquo;exposition.</p>  <p>La probabilit&eacute; que la limite de 1&nbsp;mSv par ann&eacute;e soit d&eacute;pass&eacute;e peut &ecirc;tre &eacute;valu&eacute;e en fonction de l&rsquo;activit&eacute; manipul&eacute;e par le travailleur, le type de radionucl&eacute;ides en cause, la forme physique et chimique des radionucl&eacute;ides, le type de confinement utilis&eacute; et la nature des op&eacute;rations effectu&eacute;es. Lorsqu&rsquo;un type de radionucl&eacute;ide est manipul&eacute; pratiquement chaque jour (c&rsquo;est-&agrave;-dire environ 250&nbsp;jours par ann&eacute;e), les travailleurs qui manipulent des radionucl&eacute;ides dont l&rsquo;activit&eacute; figure au tableau&nbsp;1 doivent participer &agrave; un programme d&rsquo;essai biologique. Il convient de noter que, pour d&eacute;cider de la participation du travailleur au programme, les donn&eacute;es de surveillance (si elles sont disponibles) doivent remplacer les donn&eacute;es du tableau&nbsp;1.</p>  <p>Les fondements sur lesquels reposent les valeurs pr&eacute;sent&eacute;es au tableau 1 sont expliqu&eacute;s dans l&rsquo;annexe&nbsp;A, <em>Choix des participants &agrave; un programme d&rsquo;essais biologiques courants bas&eacute; sur l&rsquo;activit&eacute; manipul&eacute;e</em>, et l&rsquo;on peut s&rsquo;en servir pour d&eacute;river des valeurs propres au site. L&rsquo;annexe&nbsp;A d&eacute;finit les param&egrave;tres requis pour d&eacute;finir la fraction d&rsquo;incorporation potentielle (FIP). Pour un sc&eacute;nario d&rsquo;incorporation particulier, la valeur LAI&nbsp;/&nbsp;FIP repr&eacute;sente l&rsquo;activit&eacute; manipul&eacute;e par jour de travail qui pourrait donner lieu &agrave; une incorporation annuelle &eacute;gale &agrave; la limite annuelle d&rsquo;incorporation (LAI), et, par cons&eacute;quent, &agrave; une dose efficace engag&eacute;e de 20&nbsp;mSv par ann&eacute;e. Le crit&egrave;re fix&eacute; pour la participation &agrave; un essai biologique est de 1&nbsp;mSv. Par cons&eacute;quent, les donn&eacute;es figurant au tableau&nbsp;1 repr&eacute;sentent la quantit&eacute; LAI&nbsp;&nbsp;/&nbsp;(20&nbsp;*&nbsp;FIP).</p>  <p><strong><em>Tableau 1 : Activit&eacute; manipul&eacute;e quotidiennement sur une p&eacute;riode d&rsquo;un an,<br />
au-del&agrave; de laquelle un essai biologique est recommand&eacute;</em></strong></p>  <table border="1" >
<tr>
<td valign="top" width="228">&#160; </td>
<td colSpan="2" valign="top" width="348"><p><strong>Volatilit&eacute;</strong></p></td>
</tr>
<tr>
<td valign="top" width="228"><p><strong>Confinement</strong></p></td>
<td valign="top" width="174"><p><strong>Gaz, liquides volatils et poudres</strong></p></td>
<td valign="top" width="174"><p><strong>Liquides non volatils et mati&egrave;res solides</strong></p></td>
</tr>
<tr>
<td valign="top" width="228"><p>Aucun</p></td>
<td valign="top" width="174"><p>&ge; 2 * LAI</p></td>
<td valign="top" width="174"><p>&ge; 200 * LAI</p></td>
</tr>
<tr>
<td valign="top" width="228"><p>Hotte</p></td>
<td valign="top" width="174"><p>&ge; 200 * LAI</p></td>
<td valign="top" width="174"><p>&ge; 20 000 * LAI</p></td>
</tr>
<tr>
<td valign="top" width="228"><p>Bo&icirc;te &agrave; gants</p></td>
<td valign="top" width="174"><p>&ge; 20 000 * LAI</p></td>
<td valign="top" width="174"><p>&ge; 2 000 000 * LAI</p></td>
</tr>
<tr>
<td valign="top" width="228"><p>Pseudo-scell&eacute;</p></td>
<td valign="top" width="174"><p>&ge; 50 * LAI</p></td>
<td valign="top" width="174"><p>&ge; 10 000 * LAI</p></td>
</tr>  </table>  <p>Il est recommand&eacute; que les travailleurs qui doivent porter un &eacute;quipement de protection respiratoire sp&eacute;cifiquement pour limiter l&rsquo;incorporation de radionucl&eacute;ides fassent l&rsquo;objet d&rsquo;un essai biologique.</p>  <p>Les &laquo;&nbsp;pseudo&nbsp;&raquo; sources scell&eacute;es[3] s&rsquo;appliquent aux radionucl&eacute;ides &agrave; courte p&eacute;riode (inf&eacute;rieure &agrave; sept (7)&nbsp;jours) qui sont manipul&eacute;s exclusivement dans des flacons scell&eacute;s et des seringues, et qui respectent les conditions suivantes&nbsp;:</p>  <ol>
<li> la p&eacute;riode radiologique est inf&eacute;rieure &agrave; 7 jours;</li>
<li> la manutention de la radioactivit&eacute; est plus ou moins uniforme durant l&rsquo;ann&eacute;e;</li>
<li> la mati&egrave;re radioactive n&rsquo;est pas mise &agrave; l&rsquo;&eacute;tat d&rsquo;a&eacute;rosol, ni port&eacute;e &agrave; &eacute;bullition dans un contenant ouvert ou comportant des ouvertures;</li>
<li> la mati&egrave;re radioactive se pr&eacute;sente sous la forme d&rsquo;une solution dilu&eacute;e;</li>
<li> la mati&egrave;re radioactive est contenue dans un flacon multi-doses qui n&rsquo;est jamais ouvert, et dont les quantit&eacute;s pr&eacute;dos&eacute;es sont retir&eacute;es uniquement au moyen de seringues en vue de l&rsquo;injection imm&eacute;diate dans un autre flacon multi-doses, ou dans un autre type de contenant ferm&eacute;, ou administr&eacute;e aux patients.</li>  </ol>  <p>Les donn&eacute;es du tableau&nbsp;1 sont g&eacute;n&eacute;rales et n&rsquo;englobent pas tous les sc&eacute;narios. On suppose &eacute;galement qu&rsquo;il y a d&rsquo;autres barri&egrave;res m&eacute;caniques ou d&rsquo;autres barri&egrave;res physiques en place pour prot&eacute;ger le travailleur (comme des bo&icirc;tes &agrave; gants et des hottes), les barri&egrave;res &eacute;tant propres &agrave; chaque radioisotope manipul&eacute;, utilis&eacute;es convenablement et entretenues de mani&egrave;re appropri&eacute;e.</p>  <p>Lorsque plus d&rsquo;un type de radionucl&eacute;ides sont manipul&eacute;s, les &eacute;tapes suivantes doivent &ecirc;tre respect&eacute;es afin de d&eacute;terminer si le travailleur doit participer &agrave; un programme d&rsquo;essais biologiques&nbsp;:</p>  <ol>
<li> Calculer le rapport, r<em><sub>j</sub></em>, de la quantit&eacute; d&rsquo;un radionucl&eacute;ide, j, manipul&eacute; quotidiennement, &agrave; la quantit&eacute; maximale de ce radionucl&eacute;ide pouvant &ecirc;tre manipul&eacute;e quotidiennement et au-del&agrave; de laquelle un essai biologique est recommand&eacute;, selon le tableau&nbsp;1.</li>
<li> Calculer ce rapport pour tous les autres radionucl&eacute;ides manipul&eacute;s.</li>
<li> Additionner tous les rapports calcul&eacute;s aux &eacute;tapes&nbsp;1 et&nbsp;2&nbsp;:<br />
R = &Sigma; r<em><sub>j</sub></em></li>  </ol>  <p>Un essai biologique doit &ecirc;tre r&eacute;alis&eacute; pour tous les radionucl&eacute;ides dont le r<em><sub>j</sub></em>&nbsp;&ge;&nbsp;1; si R&nbsp;&ge;&nbsp;1, un essai biologique doit &ecirc;tre r&eacute;alis&eacute; pour tous les radionucl&eacute;ides pour lesquels le r<em><sub>j&nbsp;</sub></em>&ge;&nbsp;0,3&nbsp;[4]. Un exemple de ce calcul figure &agrave; l&rsquo;annexe&nbsp;B, <em>Exemples</em>, Exemple&nbsp;1.</p>   <a name="4.3"></a>
<h3><strong>4.3 Essais biologiques sp&eacute;ciaux</strong> </h3>  <p>Les essais biologiques sp&eacute;ciaux sont r&eacute;alis&eacute;s pour v&eacute;rifier des signes d&rsquo;une incorporation importante non pr&eacute;vue, ou pour &eacute;valuer la dose re&ccedil;ue par un travailleur r&eacute;sultant d&rsquo;une telle incorporation. La surveillance relative aux essais biologiques sp&eacute;ciaux peut &ecirc;tre d&eacute;clench&eacute;e soit par un r&eacute;sultat de surveillance courante ou par un incident anormal laissant pr&eacute;sumer qu&rsquo;un seuil d&rsquo;intervention (tel que d&eacute;fini dans le <em>R&egrave;glement sur la radioprotection</em>) ou que la limite de dose pourraient avoir &eacute;t&eacute; d&eacute;pass&eacute;s. Une orientation sur la surveillance relative aux essais biologiques sp&eacute;ciaux est fournie dans le document d&rsquo;application de la r&eacute;glementation G-147, <em>Protocoles d&rsquo;intervention pour les essais biologiques en cas d&rsquo;incorporation anormale de radionucl&eacute;ides</em>&nbsp;[5].</p>   <a name="4.4"></a>
<h3><strong>4.4 Programme de d&eacute;pistage</strong> </h3>  <p>Lorsque les travailleurs manipulent des radionucl&eacute;ides non scell&eacute;s, mais qu&rsquo;ils ne respectent pas les crit&egrave;res de participation &agrave; un programme d&rsquo;essais biologiques courants, il est recommand&eacute; que les incorporations soient surveill&eacute;es dans le cadre d&rsquo;un programme de d&eacute;pistage. La fr&eacute;quence du d&eacute;pistage peut &ecirc;tre la m&ecirc;me que celle de la surveillance courante, ou elle peut &ecirc;tre diff&eacute;rente si la manutention de radionucl&eacute;ides non scell&eacute;s est occasionnelle (par exemple on peut effectuer le d&eacute;pistage quelques jours apr&egrave;s la manutention), compte tenu de la p&eacute;riode biologique des radionucl&eacute;ides en cause.</p>  <p>Dans le programme de d&eacute;pistage, les travailleurs doivent soit se soumettre &agrave; un comptage <em>in vivo</em>, ou fournir un &eacute;chantillon d&rsquo;essai biologique<em> in vitro</em> (voir section&nbsp;5.1). Les r&eacute;sultats sont compar&eacute;s &agrave; une valeur seuil, comme l&rsquo;activit&eacute; d&eacute;riv&eacute;e (AD, d&eacute;crite &agrave; la section&nbsp;6.2), sans qu&rsquo;il soit n&eacute;cessaire d&rsquo;effectuer une &eacute;valuation de la dose ou une estimation de l&rsquo;incorporation. Le d&eacute;passement de la valeur seuil pr&eacute;d&eacute;termin&eacute; n&eacute;cessite une confirmation de l&rsquo;incorporation et une enqu&ecirc;te.</p>  <p>Lorsqu&rsquo;un travailleur d&eacute;passe fr&eacute;quemment la valeur seuil, il convient de r&eacute;&eacute;valuer la participation de celui-ci &agrave; un programme d&rsquo;essais biologiques courants. Tous les r&eacute;sultats du d&eacute;pistage doivent &ecirc;tre enregistr&eacute;s.</p>   <a name="5.0"></a>
<h2><strong>5.0 M&Eacute;THODE ET FR&Eacute;QUENCE DES ESSAIS BIOLOGIQUES</strong> </h2>  <p>Il existe diff&eacute;rentes m&eacute;thodes d&rsquo;&eacute;chantillonnage pouvant &ecirc;tre utilis&eacute;es dans le cadre des essais biologiques (par exemple, l&rsquo;analyse d&rsquo;urine, le comptage du corps entier, le comptage thyro&iuml;dien), selon le type de mati&egrave;re radioactive manipul&eacute;e et la fr&eacute;quence de surveillance des travailleurs.</p>   <a name="5.1"></a>
<h3><strong>5.1 M&eacute;thodes d&rsquo;essais biologiques</strong> </h3>  <p>Les mesures effectu&eacute;es dans le cadre des essais biologiques sont regroup&eacute;es en deux cat&eacute;gories distinctes&nbsp;:</p>  <ol>
<li> les mesures d&rsquo;essais biologiques <em>in vivo</em> : ce sont les mesures directes de la quantit&eacute; de mati&egrave;res radioactives d&eacute;pos&eacute;e dans les organes, les tissus ou le corps entier. Les m&eacute;thodes courantes comprennent le comptage thyro&iuml;dien, le comptage pulmonaire et le comptage du corps entier.</li>
<li> les mesures d&rsquo;essais biologiques <em>in vitro</em> : ce sont les mesures de la quantit&eacute; de mati&egrave;res radioactives contenues dans un &eacute;chantillon provenant du corps humain. La m&eacute;thode la plus courante est l&rsquo;analyse d&rsquo;urine. Il existe &eacute;galement d&rsquo;autres m&eacute;thodes, comme l&rsquo;analyse des f&egrave;ces, de l&rsquo;haleine et du sang.</li>  </ol>  <p>Plusieurs facteurs sont &agrave; consid&eacute;rer au moment de choisir la m&eacute;thode de surveillance relative aux essais biologiques. Le premier facteur est l&rsquo;objectif de la surveillance&mdash;il doit y avoir un &eacute;quilibre entre les besoins li&eacute;s &agrave; la surveillance de l&rsquo;incorporation et l&rsquo;&eacute;valuation de la dose&nbsp;[2]. La surveillance de l&rsquo;incorporation exige des renseignements opportuns concernant les &eacute;v&eacute;nements d&rsquo;incorporation, et doit &ecirc;tre bas&eacute;e sur les indicateurs d&rsquo;incorporation suivants, par ordre de pr&eacute;f&eacute;rence&nbsp;:</p>  <ol>
<li> l&rsquo;utilisation d&rsquo;un &eacute;chantillonneur d&rsquo;air personnel (EAP), o&ugrave; un &eacute;chantillon d&rsquo;air est pr&eacute;lev&eacute; dans l&rsquo;espace d&rsquo;air respirable du travailleur;</li>
<li> les essais biologiques <em>in vitro</em>;</li>
<li> les essais biologiques <em>in vivo</em>.</li>  </ol>  <p>Les m&eacute;thodes d&rsquo;essais biologiques qui doivent &ecirc;tre utilis&eacute;es aux fins de l&rsquo;&eacute;valuation de la dose sont, par ordre de pr&eacute;f&eacute;rence&nbsp;:</p>  <ol>
<li> les essais biologiques <em>in vivo</em>;</li>
<li> les essais biologiques <em>in vitro</em>;</li>
<li> l&rsquo;utilisation d&rsquo;un &eacute;chantillonneur d&rsquo;air personnel.</li>  </ol>  <p>En plus de ces facteurs, les caract&eacute;ristiques physiques des radionucl&eacute;ides qui nous int&eacute;ressent devraient &ecirc;tre prises en compte. Certains radionucl&eacute;ides &eacute;mettent un rayonnement ne pouvant &ecirc;tre d&eacute;tect&eacute; depuis l&rsquo;ext&eacute;rieur du corps. Dans ce cas, on peut mesurer un produit de d&eacute;sint&eacute;gration, comme le <sup>234</sup>Th, au moment d&rsquo;&eacute;valuer la charge pulmonaire de <sup>238</sup>U. Ou encore, des essais biologiques <em>in vitro</em> peuvent &ecirc;tre effectu&eacute;s. La m&eacute;thode de mesure <em>in vitro</em> &agrave; privil&eacute;gier d&eacute;pend &eacute;galement de la r&eacute;tention et de l&rsquo;excr&eacute;tion du radionucl&eacute;ide en question, y compris les voies pr&eacute;dominantes d&rsquo;excr&eacute;tion, par exemple la voie urinaire, les f&egrave;ces et l&rsquo;haleine.</p>  <p>Le tableau&nbsp;2 montre diff&eacute;rentes m&eacute;thodes d&rsquo;essais biologiques pouvant &ecirc;tre effectu&eacute;es pour divers radionucl&eacute;ides, compte tenu des caract&eacute;ristiques physiques et m&eacute;taboliques.</p>  <p>Remarque : Dans les cas o&ugrave; les essais biologiques ne permettent pas de d&eacute;terminer la dose, on peut utiliser des donn&eacute;es de surveillance de l&rsquo;air pour estimer la dose. Voir section&nbsp;5.2.</p>  <p><strong><em>Tableau&nbsp;2 : M&eacute;thodes d&rsquo;essais biologiques pour divers radionucl&eacute;ides</em></strong></p>  <table border="0" >
<tr>
<td colSpan="2" valign="top"><p><strong>M&eacute;thodes d&rsquo;essais biologiques</strong></p></td>
<td colSpan="3" valign="top"><p><strong>Radionucl&eacute;ide</strong></p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p><em>1) In vivo</em></p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage du corps entier</p></td>
<td valign="top"><p><sup>11</sup>C<sup><br />
51</sup>Cr<sup><br />
54</sup>Mn<sup><br />
59</sup>Fe<sup><br />
57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co<sup><br />
85</sup>Sr</p></td>
<td valign="top"><p><sup>95</sup>Zr/<sup>95</sup>Nb<sup><br />
106</sup>Ru<sup><br />
110m</sup>Ag<sup><br />
124</sup>Sb, <sup>125</sup>Sb<sup><br />
134</sup>Cs, <sup>137</sup>Cs</p></td>
<td valign="top"><p><sup>144</sup>Ce<sup><br />
203</sup>Hg<sup><br />
226</sup>Ra, <sup>228</sup>Ra<sup><br />
235</sup>U, <sup>238</sup>U<sup><br />
252</sup>Cf</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage pulmonaire</p></td>
<td valign="top"><p><sup>14</sup>C*<sup><br />
60</sup>Co<sup><br />
235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>239</sup>Pu, <sup>240</sup>Pu<sup><br />
241</sup>Am</p></td>
<td valign="top"><p><sup>242</sup>Cm, <sup>244</sup>Cm<sup><br />
252</sup>Cf</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage thyro&iuml;dien</p></td>
<td valign="top"><p><sup>125</sup>I, <sup>131</sup>I</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p><em>2) In vitro</em></p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage &agrave; scintillateur liquide (comptage&nbsp;&beta;) des &eacute;chantillons d&rsquo;urine</p></td>
<td valign="top"><p><sup>3</sup>H<sup><br />
14</sup>C<sup><br />
32</sup>P, <sup>33</sup>P</p></td>
<td valign="top"><p><sup>35</sup>S <sup><br />
36</sup>Cl</p></td>
<td valign="top"><p><sup>45</sup>Ca<sup><br />
129</sup>I</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage &agrave; scintillateur liquide des &eacute;chantillons d&rsquo;urine apr&egrave;s s&eacute;paration chimique</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top"><p><sup>89</sup>Sr ,<sup>90</sup>Sr</p></td>
<td valign="top"><p><sup>228</sup>Ra</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage &beta; du CO<sub>2</sub> de l&rsquo;haleine</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage &beta; des &eacute;chantillons f&eacute;caux apr&egrave;s s&eacute;paration chimique</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Comptage &beta; de l&rsquo;eau triti&eacute;e dans l&rsquo;haleine</p></td>
<td valign="top"><p><sup>3</sup>H</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Spectroscopie gamma des &eacute;chantillons d&rsquo;urine</p></td>
<td valign="top"><p><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</p></td>
<td valign="top"><p><sup>85</sup>Sr<sup><br />
106</sup>Ru</p></td>
<td valign="top"><p><sup>125</sup>I,<sup> 131</sup>I<sup><br />
134</sup>Cs, <sup>137</sup>Cs</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Spectroscopie gamma des &eacute;chantillons f&eacute;caux apr&egrave;s s&eacute;paration chimique</p></td>
<td valign="top"><p><sup>60</sup>Co</p></td>
<td valign="top"><p><sup>144</sup>Ce</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Spectroscopie alpha des &eacute;chantillons d&rsquo;urine/de f&egrave;ces apr&egrave;s s&eacute;paration radiochimique</p></td>
<td valign="top"><p><sup>226</sup>Ra<sup><br />
228</sup>Th, <sup>232</sup>Th<sup><br />
234</sup>U, <sup>235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu, <br />
&nbsp;&nbsp;&nbsp;<sup>240</sup>Pu</p></td>
<td valign="top"><p><sup>241</sup>Am<sup><br />
242</sup>Cm, <sup>244</sup>Cm</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Fluorim&eacute;trie, phosphorim&eacute;trie</p></td>
<td valign="top"><p>Uranium</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>ICP-MS</p></td>
<td colSpan="2" valign="top"><p><sup>234</sup>U, <sup>235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>SMIT</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>  </table>  <p>* &Agrave; l&rsquo;aide d&rsquo;un compteur de particules de type &laquo;&nbsp;phoswich&nbsp;&raquo;.</p>   <a name="5.2"></a>
<h3><strong>5.2 D&eacute;termination de la fr&eacute;quence</strong> </h3>  <p>Au moment de choisir la fr&eacute;quence d&rsquo;une surveillance de routine, les principaux facteurs &agrave; prendre en compte sont les suivants&nbsp;:</p>  <ol>
<li> les caract&eacute;ristiques du lieu de travail;</li>
<li> l&rsquo;incertitude li&eacute;e au moment de l&rsquo;incorporation;</li>
<li> la sensibilit&eacute; des instruments;</li>
<li> la n&eacute;cessit&eacute; d&rsquo;obtenir de l&rsquo;information opportune sur les &eacute;v&eacute;nements d&rsquo;incorporation;</li>
<li> le co&ucirc;t de la mise en &oelig;uvre du programme de surveillance.</li>  </ol>  <p>La forme physique et chimique de chaque radionucl&eacute;ide utilis&eacute; sur les lieux de travail doit &ecirc;tre connue &agrave; la fois pour les conditions courantes et les conditions d&rsquo;accident. Ces formes d&eacute;terminent le comportement biocin&eacute;tique de chaque radionucl&eacute;ide et, par cons&eacute;quent, les voies et les taux d&rsquo;excr&eacute;tion. En retour, ce comportement aide &agrave; d&eacute;terminer la m&eacute;thode d&rsquo;essai biologique &agrave; employer.</p>  <p>La r&eacute;tention et l&rsquo;excr&eacute;tion d&eacute;pendent principalement de la forme chimique du radionucl&eacute;ide. Les compos&eacute;s inhal&eacute;s sont class&eacute;s dans trois cat&eacute;gories, selon le taux d&rsquo;absorption entre les poumons et le sang&nbsp;: F (de l&rsquo;anglais <em>Fast</em>), M (de l&rsquo;anglais <em>Moderate</em>) et S (de l&rsquo;anglais <em>Slow</em>). Par exemple, un compos&eacute; de type F, comme le UF<sub>6</sub> est absorb&eacute; relativement rapidement dans le sang en provenance des poumons. Les compos&eacute;s de type&nbsp;S, comme le UO<sub>2</sub>, subsistent dans les poumons pendant une p&eacute;riode de temps plus longue. Les valeurs des taux d&rsquo;absorption par d&eacute;faut sont pr&eacute;cis&eacute;es dans la publication&nbsp;66 de la CIPR (Commission internationale de protection radiologique), intitul&eacute;e&nbsp;:&nbsp;<em>Human Respiratory Tract Model for Radiological Protection</em>, vol.&nbsp;24, n<sup>os</sup>&nbsp;1 &agrave; 3&nbsp;[6] pour les trois types de clairance pulmonaire et pour les crit&egrave;res servant &agrave; la classification selon le type d&rsquo;absorption, lorsque l&rsquo;on utilise des donn&eacute;es sp&eacute;cifiques pour caract&eacute;riser l&rsquo;air des lieux de travail.</p>  <p>Un autre facteur dont il faut tenir compte dans le choix de la fr&eacute;quence de surveillance est l&rsquo;incertitude li&eacute;e &agrave; l&rsquo;estimation de l&rsquo;incorporation, en raison du fait que le moment de l&rsquo;incorporation n&rsquo;est pas connu (voir annexe&nbsp;B, <em>Exemples</em>, figures&nbsp;B3 et B4). En ce qui a trait &agrave; la surveillance hebdomadaire, il y a une incertitude importante associ&eacute;e au moment de l&rsquo;incorporation dans le cas de l&rsquo;excr&eacute;tion urinaire (voir annexe&nbsp;B, figure&nbsp;B4), &agrave; cause des grands &eacute;carts dans le taux d&rsquo;excr&eacute;tion au cours des premiers jours suivant l&rsquo;incorporation. Les r&eacute;sultats des mesures courantes doivent &ecirc;tre &eacute;valu&eacute;s de mani&egrave;re &agrave; ce que l&rsquo;incorporation soit consid&eacute;r&eacute;e comme s&rsquo;&eacute;tant produite &agrave; mi-temps de la p&eacute;riode de surveillance.</p>  <p>La sensibilit&eacute; de l&rsquo;instrument a une incidence importante sur la fr&eacute;quence de la surveillance. Celle-ci doit &ecirc;tre choisie de mani&egrave;re &agrave; s&rsquo;assurer que les doses importantes ne sont pas manqu&eacute;es. Une dose peut &ecirc;tre oubli&eacute;e dans les cas o&ugrave;, suite &agrave; une incorporation, la concentration dans le corps repr&eacute;sent&eacute;e par le taux d&rsquo;excr&eacute;tion a &eacute;t&eacute; r&eacute;duit &agrave; un niveau inf&eacute;rieur &agrave; la quantit&eacute; minimale d&eacute;tectable (QMD) de l&rsquo;instrument durant le temps qui s&rsquo;&eacute;coule entre l&rsquo;incorporation et la mesure. Lorsque cela est possible, la p&eacute;riode de surveillance devrait &ecirc;tre telle que les incorporations annuelles correspondant &agrave; une dose engag&eacute;e totale de 1&nbsp;mSv soient d&eacute;tect&eacute;es. Si cela n&rsquo;est pas r&eacute;alisable, on doit avoir recours &agrave; la surveillance sur les lieux de travail et &agrave; l&rsquo;&eacute;chantillonnage de l&rsquo;air personnel pour compl&eacute;ter la surveillance de l&rsquo;incorporation. En appliquant le mod&egrave;le m&eacute;tabolique appropri&eacute; et en supposant un mod&egrave;le d&rsquo;incorporation, la p&eacute;riode de surveillance ad&eacute;quate peut &ecirc;tre d&eacute;termin&eacute;e.</p>  <p>L&rsquo;activit&eacute; d&eacute;riv&eacute;e (AD) peut &ecirc;tre d&eacute;finie comme suit&nbsp;:</p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-2.gif" border="0" width="168" height="41" /></p>  <p>o&ugrave;&nbsp;:</p>  <table>
<tr>
<td valign="top" width="62"><p>T</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="449"><p>la p&eacute;riode de surveillance</p></td>
</tr>
<tr>
<td valign="top" width="62"><p><em>m</em>(<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-3.gif" border="0" width="25" height="32" />)</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="449"><p>la fraction de l&rsquo;incorporation qui est retenue dans un tissu, un organe ou le corps entier, ou qui est excr&eacute;t&eacute;e par le corps, &agrave; mi-temps de la p&eacute;riode de surveillance (voir annexe&nbsp;B, <em>Exemples</em>, figures&nbsp;B1 &agrave;&nbsp;B4)</p></td>
</tr>  </table>  <p>Les valeurs de <em>m</em>(<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-3.gif" border="0" width="25" height="32" />) peuvent &ecirc;tre consult&eacute;es dans la publication&nbsp;78 de la CIPR (Commission internationale de protection radiologique), intitul&eacute;e : <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54</em>&nbsp;[7], portant sur la surveillance des incorporations de radionucl&eacute;ides.</p>  <p>La p&eacute;riode maximale recommand&eacute;e est celle o&ugrave; l&rsquo;AD est &eacute;gale &agrave; la QMD. La limite de d&eacute;tection (c&rsquo;est-&agrave;-dire la QMD, ou quantit&eacute; minimale d&eacute;tectable)&nbsp;[8] peut &ecirc;tre d&eacute;finie comme suit&nbsp;:</p>  <p>QMD = (<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-4.gif" border="0" width="23" height="41" />)(2,71 + 4,65&sigma;<sub>b</sub>)</p>  <p>o&ugrave;&nbsp;:</p>  <table>
<tr>
<td valign="top" width="60"><p>K</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>un facteur d&rsquo;&eacute;talonnage (K d&eacute;pend du radionucl&eacute;ide et de l&rsquo;efficacit&eacute; de la d&eacute;tection)</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>t</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>le temps de comptage de la proc&eacute;dure</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>&sigma;<sub>b</sub></p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>l&rsquo;&eacute;cart-type du nombre de coups obtenu pour le personnel non contamin&eacute;</p></td>
</tr>  </table>  <p>Dans le cas des essais biologiques <em>in vitro&nbsp;</em>:</p>  <p>K = E&nbsp;V&nbsp;Y&nbsp;e<sup>-&lambda;&Delta;t</sup></p>  <p>o&ugrave;&nbsp;:</p>  <table>
<tr>
<td valign="top" width="60"><p>E</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>l&rsquo;efficacit&eacute; du comptage</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>V</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>la taille de l&rsquo;&eacute;chantillon en unit&eacute;s de masse ou de volume</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>Y</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>la fraction chimique, s&rsquo;il y a lieu<br />
(Remarque : si non applicable, Y=1)</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>&lambda;</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>la constance de d&eacute;sint&eacute;gration radioactive du radionucl&eacute;ide</p></td>
</tr>
<tr>
<td valign="top" width="60"><p>&Delta;t</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="450"><p>le temps &eacute;coul&eacute; entre le pr&eacute;l&egrave;vement de l&rsquo;&eacute;chantillon et le comptage</p></td>
</tr>  </table>  <p>Dans le cas des essais biologiques <em>in vivo</em>, K est l&rsquo;efficacit&eacute; du comptage, y compris une correction pour l&rsquo;auto-absorption, s&rsquo;il y a lieu.</p>  <p>De fa&ccedil;on g&eacute;n&eacute;rale, K doit &ecirc;tre d&eacute;termin&eacute; par le personnel qui effectue les mesures de l&rsquo;essai biologique. On peut obtenir de plus amples renseignements sur les QMD dans l&rsquo;<em>American National Standard&ndash;Performance Criteria for Radiobioassay</em>, Health Physics Society&nbsp;[8].</p>  <p>&Agrave; l&rsquo;aide de cette m&eacute;thode servant &agrave; d&eacute;terminer la p&eacute;riode de surveillance, une p&eacute;riode de surveillance recommand&eacute;e d&rsquo;un an serait peut-&ecirc;tre possible pour certains radionucl&eacute;ides. Cependant, les taux de r&eacute;tention et d&rsquo;excr&eacute;tion chez la plupart des personnes varient par rapport au mod&egrave;le sur lequel les AD sont bas&eacute;es. En outre, de l&rsquo;information opportune concernant les &eacute;v&eacute;nements d&rsquo;incorporation est requise. Il doit y avoir un &eacute;quilibre entre l&rsquo;utilisation des essais biologiques &agrave; titre d&rsquo;indicateurs de l&rsquo;incorporation et aux fins de l&rsquo;&eacute;valuation de la dose. Pour tenir compte de cette situation, on pourrait choisir d&rsquo;utiliser une p&eacute;riode de surveillance plus courte qu&rsquo;un an, selon les autres types de surveillance en place (comme la surveillance de l&rsquo;air sur les lieux de travail), et selon le c&ocirc;t&eacute; pratique de la r&eacute;alisation des mesures d&rsquo;essais biologiques. Des p&eacute;riodes de surveillance ont &eacute;t&eacute; recommand&eacute;es dans les rapports portant sur des radionucl&eacute;ides sp&eacute;cifiques (comme l&rsquo;&eacute;valuation de la dose imputable &agrave; l&rsquo;uranium&nbsp;[9]).</p>   <a name="5.3"></a>
<h3><strong>5.3 Autres consid&eacute;rations dosim&eacute;triques</strong> </h3>  <p>En plus de la recommandation &agrave; l&rsquo;effet que des incorporations de <sup>1</sup>/<sub>20</sub>&nbsp;LAI soient d&eacute;tectables pendant la dur&eacute;e de la p&eacute;riode de surveillance, d&rsquo;autres consid&eacute;rations dosim&eacute;triques peuvent &ecirc;tre utilis&eacute;es pour aider &agrave; d&eacute;terminer la fr&eacute;quence des essais biologiques.</p>  <p>La CIPR recommande que la pr&eacute;cision des mesures soit sup&eacute;rieure &agrave; un facteur de 2&nbsp;[7] pour l&rsquo;intervalle de confiance de 95&nbsp;%, dans le cas des doses re&ccedil;ues en provenance de sources d&rsquo;exposition externes, mais en ce qui a trait aux expositions internes, ce niveau de pr&eacute;cision n&rsquo;est pas toujours possible. Les incertitudes dues au fait que le moment de l&rsquo;incorporation n&rsquo;est pas connu n&rsquo;est qu&rsquo;une des composantes de l&rsquo;incertitude globale associ&eacute;e au calcul de la dose. Les p&eacute;riodes de surveillance recommand&eacute;es dans la publication 78 de la CIPR, intitul&eacute;e : <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54,</em> Commission internationale de protection radiologique, Publication&nbsp;78&nbsp;[7], accepte un facteur de 3 pour ce qui est de l&rsquo;incertitude due au fait que le moment de l&rsquo;exposition n&rsquo;est pas connu pendant la p&eacute;riode de surveillance. S&rsquo;il y a plusieurs p&eacute;riodes de surveillance durant l&rsquo;ann&eacute;e, l&rsquo;incertitude globale associ&eacute;e &agrave; l&rsquo;incorporation annuelle, ainsi que la dose engag&eacute;e seront probablement inf&eacute;rieures &agrave; ce facteur de 3&nbsp;[10]. L&rsquo;exposition &agrave; certaines sources internes, comme les faibles concentrations d&rsquo;eau triti&eacute;e dans certains milieux de r&eacute;acteurs CANDU, peut se produire de fa&ccedil;on contenue pendant la p&eacute;riode de surveillance.</p>  <p>Dans certains cas, les meilleures m&eacute;thodes de surveillance disponibles ne permettent pas de d&eacute;tecter de mani&egrave;re fiable des activit&eacute;s correspondant &agrave; <sup>1</sup>/<sub>20</sub>&nbsp;LAI (1&nbsp;mSv par ann&eacute;e). Dans ces circonstances, il est pratique de d&eacute;terminer la dose maximale qui pourrait &ecirc;tre manqu&eacute;e si l&rsquo;incorporation se produit au d&eacute;but de chaque p&eacute;riode de surveillance. Une telle m&eacute;thode fournit une perspective utile pour certains dangers internes complexes&nbsp;[11], mais parfois &ecirc;tre trop prudente, particuli&egrave;rement lorsqu&rsquo;on d&eacute;nombre plusieurs p&eacute;riodes de surveillance par ann&eacute;e.</p>   <a name="6.0"></a>
<h2><strong>6.0 INTERPR&Eacute;TATION DES R&Eacute;SULTATS</strong></h2>   <a name="6.1"></a>
<h3><strong>6.1 Niveaux de r&eacute;f&eacute;rence</strong></h3>  <p>Des niveaux de reference sont les valeurs de quantit&eacute;s mesur&eacute;es telles que s&rsquo;ils sont d&eacute;pass&eacute;es, des actions sp&eacute;cifi&eacute;es ou des d&eacute;cisions devraient &ecirc;tre prises.</p>  <p>Des niveaux de r&eacute;f&eacute;rence peuvent &ecirc;tre utilis&eacute;s pour interpr&eacute;ter les donn&eacute;es de surveillance sur les lieux de travail ou les donn&eacute;es de surveillance associ&eacute;es aux essais biologiques et pour signaler les incorporations potentielles. Ces niveaux, qui sont applicables aux programmes courants ou sp&eacute;ciaux de surveillance relatifs aux essais biologiques, permettent une r&eacute;ponse progressive aux incorporations potentielles et, par cons&eacute;quent, ne constituent pas une limite r&eacute;glementaire en soi. Les niveaux de r&eacute;f&eacute;rence sont habituellement exprim&eacute;s sous la forme de fractions de la LAI. La somme des ratios (incorporation par rapport &agrave; la LAI) devrait &ecirc;tre utilis&eacute;e lorsque plus d&rsquo;un radionucl&eacute;ides sont en cause.</p>  <p>&Eacute;tant donn&eacute; que les programmes de surveillance relatifs aux essais biologiques permettent rarement de mesurer l&rsquo;incorporation, les niveaux de r&eacute;f&eacute;rence d&eacute;riv&eacute;s&ndash;exprim&eacute;s en termes de quantit&eacute; mesur&eacute;e&ndash;sont g&eacute;n&eacute;ralement une quantit&eacute; plus utile. Le niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute; est l&rsquo;activit&eacute; d&eacute;termin&eacute;e par l&rsquo;essai biologique, attribuable aux sources en milieu de travail. Le niveaux de r&eacute;f&eacute;rence d&eacute;riv&eacute; pour une mesure d&rsquo;essai biologique en particulier, est exprim&eacute;e dans les m&ecirc;mes unit&eacute;s que les r&eacute;sultats de mesure de l&rsquo;essai biologique. Dans le cas des programmes d&rsquo;essais biologiques courants, les niveaux de r&eacute;f&eacute;rence doivent &ecirc;tre bas&eacute;s sur l&rsquo;hypoth&egrave;se d&rsquo;une incorporation &agrave; mi-temps de la p&eacute;riode de surveillance.</p>  <p>Pour certains radionucl&eacute;ides et certains types d&rsquo;essais biologiques, les sources &laquo;&nbsp;non professionnelles&nbsp;&raquo; (comme l&rsquo;uranium et le c&eacute;sium) peuvent faire en sorte que les r&eacute;sultats courants d&eacute;passent le niveau de la d&eacute;cision analytique et un niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute;. Si les r&eacute;sultats de l&rsquo;essai biologique d&eacute;passent r&eacute;guli&egrave;rement ou souvent un niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute; due &agrave; des sources non professionnelles, le niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute; peut &ecirc;tre augment&eacute; si les r&eacute;sultats pr&eacute;vus de l&rsquo;essai biologique, dus &agrave; de telles sources, sont connus (une &eacute;tude utilisant un groupe t&eacute;moin ayant re&ccedil;u une exposition non professionnelle semblable, mais sans risque d&rsquo;exposition professsionnelle, peut &ecirc;tre utilis&eacute;e &agrave; cette fin). Le niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute; et ajust&eacute; est fix&eacute; &agrave; une valeur ne d&eacute;passant pas le 99<sup>e</sup> percentile du groupe t&eacute;moin&nbsp;[2]. Si les niveaux non professionnels d&eacute;passent le niveau d&rsquo;enqu&ecirc;te d&eacute;riv&eacute; (NED), d&rsquo;autres m&eacute;thodes de surveillance de l&rsquo;incorporation doivent &ecirc;tre utilis&eacute;es si possible.</p>  <p>Les niveaux de r&eacute;f&eacute;rence utilis&eacute;s dans ce rapport sont l&rsquo;AD, le niveau d&rsquo;enqu&ecirc;te (NE), et le niveau d&rsquo;enqu&ecirc;te d&eacute;riv&eacute; (NED). L&rsquo;AD est d&eacute;finie &agrave; la section&nbsp;5.2. Le NE et le NED sont d&eacute;finis ci-apr&egrave;s.</p>  <p>NE = (0,3 LAI) <img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-5.gif" border="0" width="31" height="41" /></p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-6.gif" border="0" width="220" height="41" /></p>  <p>o&ugrave;&nbsp;:</p>  <table>
<tr>
<td valign="top" width="62"><p>T</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="449"><p>la p&eacute;riode de surveillance, en jours</p></td>
</tr>
<tr>
<td valign="top" width="62"><p><em>m</em>(<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-3.gif" border="0" width="25" height="32" />)</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="449"><p>la fraction de l&rsquo;incorporation qui est retenue dans un tissu, un organe, ou le corps entier, ou qui est excr&eacute;t&eacute;e du corps, &agrave; mi-temps de la p&eacute;riode de surveillance</p></td>
</tr>  </table>  <p>Un tableau illustrant des exemples de NED pour l&rsquo;inhalation de compos&eacute;s de <sup>137</sup>Cs de type&nbsp;F figure &agrave; l&rsquo;annexe&nbsp;B, <em>Exemples</em>, tableau&nbsp;B2.</p>  <p>Afin de tenir compte de la limite de dose r&eacute;duite re&ccedil;ue par les travailleuses enceintes, on doit fixer un NED pour celles-ci. &Eacute;tant donn&eacute; que la limite de dose pour la travailleuse enceinte est de 4&nbsp;mSv pour le reste de la grossesse, il faut s&rsquo;assurer que la dose re&ccedil;ue par la travailleuse enceinte est &lt;&nbsp;0,5&nbsp;mSv par mois, pour veiller &agrave; ce que la limite de 4&nbsp;mSv ne soit pas d&eacute;pass&eacute;e. Par cons&eacute;quent, un NED pour les travailleuses enceintes, le NED<sub>TE</sub>, peut &ecirc;tre d&eacute;fini comme suit&nbsp;:</p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-7.gif" border="0" width="203" height="41" /></p>   <a name="6.2"></a>
<h3><strong>6.2 Mise en perspective des r&eacute;sultats des essais biologiques</strong> </h3>  <p>Les r&eacute;sultats des essais biologiques peuvent &ecirc;tre interpr&eacute;t&eacute;s en les comparant avec les niveaux de r&eacute;f&eacute;rence d&eacute;riv&eacute;s. Le tableau&nbsp;3 fournit les niveaux de r&eacute;f&eacute;rence propos&eacute;s qui peuvent servir de fondement &agrave; l&rsquo;interpr&eacute;tation des r&eacute;sultats d&rsquo;essais biologiques et dicter les mesures appropri&eacute;es &agrave; prendre.</p>  <p><strong><em>Tableau&nbsp;3&nbsp;: Niveaux de r&eacute;f&eacute;rence d&eacute;riv&eacute;s et mesures correspondantes recommand&eacute;es</em></strong></p>  <table border="0" >
<tr>
<td valign="top"><p><strong>R&eacute;sultat d&rsquo;essai biologique</strong></p></td>
<td valign="top"><p><strong>Mesure recommand&eacute;e</strong></p></td>
</tr>
<tr>
<td valign="top"><p>&lt;&nbsp;AD</p></td>
<td valign="top"><p>Enregistrer le r&eacute;sultat de la mesure de l&rsquo;essai biologique.</p></td>
</tr>
<tr>
<td valign="top"><p>AD&nbsp;&le; r&eacute;sultat &lt;&nbsp;NE</p></td>
<td valign="top"><p>Confirmer et enregistrer le r&eacute;sultat de la mesure de l&rsquo;essai biologique.</p>
<p>Si le r&eacute;sultat est confirm&eacute;, &eacute;valuer la DEE.</p></td>
</tr>
<tr>
<td valign="top"><p>&ge;&nbsp;NE</p></td>
<td valign="top"><p>Confirmer et enregistrer le r&eacute;sultat de la mesure de l&rsquo;essai biologique.</p>
<p>Si le r&eacute;sultat est confirm&eacute;, &eacute;valuer la DEE.</p>
<p>Enqu&ecirc;ter pour trouver et corriger la cause de l&rsquo;incorporation.</p></td>
</tr>  </table>  <p>Pour &eacute;valuer la DEE, les r&eacute;sultats de l&rsquo;essai biologique doivent d&rsquo;abord &ecirc;tre combin&eacute;s avec <em>m</em>(T/2) pour estimer l&rsquo;incorporation&nbsp;:</p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-8.gif" border="0" width="297" height="52" /></p>  <p>La DEE peut &ecirc;tre estim&eacute;e &agrave; l&rsquo;aide de la formule suivante&nbsp;:</p>  <p>DEE&nbsp;=&nbsp;Incorporation&nbsp;&times;&nbsp;e(50)</p>  <p>o&ugrave; e(50) est la dose par incorporation unitaire de radionucl&eacute;ide, taille de particules et forme chimique&nbsp;[12].</p>   <a name="6.3"></a>
<h3><strong>6.3 Pr&eacute;cision des r&eacute;sultats d&rsquo;essais biologiques</strong> </h3>  <p>De nombreux composants contribuent &agrave; la pr&eacute;cision globale de l&rsquo;estimation de la dose. Ceux-ci comprennent la pr&eacute;cision&nbsp;:</p>  <ol>
<li> du syst&egrave;me de d&eacute;tection;</li>
<li> de la m&eacute;thode de mesure;</li>
<li> du mod&egrave;le biologique utilis&eacute; pour &eacute;tablir un lien entre la radioactivit&eacute; interne observable et la dose de rayonnement re&ccedil;ue;</li>
<li> l&rsquo;incertitude du temps r&eacute;el d&rsquo;internalisation de la radioactivit&eacute; par rapport au moment de la mesure de l&rsquo;essai biologique.</li>  </ol>  <p>La pr&eacute;sente section ne porte que sur la pr&eacute;cision des composants&nbsp;1 et&nbsp;2. Tous les aspects de l&rsquo;incertitude du mod&egrave;le biologique, qui peuvent parfois &ecirc;tre la source pr&eacute;dominante des inexactitudes et des incertitudes dans l&rsquo;estimation de la dose finale, sont d&eacute;taill&eacute;s dans le document <em>Reliability of the ICRP&rsquo;s Systemic Biokinetic Models</em>, Radiation Protection Dosimetry, Vol.&nbsp;79, R.W.&nbsp;Leggett&nbsp;[13]. Les incertitudes associ&eacute;es au moment de l&rsquo;incorporation pour ce qui est du moment auquel la surveillance est effectu&eacute;e sont examin&eacute;es bri&egrave;vement &agrave; la section&nbsp;5.2.</p>  <p>Lors de la conception et de l&rsquo;&eacute;tablissement d&rsquo;un programme de surveillance relatif aux essais biologiques, il est important de tenir compte de la pr&eacute;cision des instruments en rapport avec la mesure &agrave; prendre. Le syst&egrave;me complet de mesure devrait &ecirc;tre tel que toute erreur dans la mesure finale n&rsquo;aura qu&rsquo;une incidence mineure sur la pr&eacute;cision globale de la dose de rayonnement estim&eacute;e re&ccedil;ue par le travailleur. Comme d&rsquo;autres incertitudes sont importantes (par exemple les points 3 et 4), on estime qu&rsquo;une plage de &ndash;25&nbsp;% &agrave; +50&nbsp;%&nbsp;[14] soit retenue pour la composante &laquo;&nbsp;instrument de d&eacute;tection &raquo; des incertitudes.</p>  <p>Les consid&eacute;rations suivantes doivent &ecirc;tre incluses dans l&rsquo;&eacute;valuation de la pr&eacute;cision des instruments et de la m&eacute;thode de mesure&nbsp;:</p>  <ol>
<li> L&rsquo;erreur de comptage statistique nette.<br />
<br />
Cela comprend l&rsquo;erreur statistique dans le comptage de l&rsquo;essai biologique et l&rsquo;erreur statistique dans la mesure du taux de comptage du rayonnement de fond. Le taux de comptage du rayonnement de fond doit &ecirc;tre appropri&eacute; &agrave; la norme, &agrave; l&rsquo;&eacute;chantillon ou au sujet.<br />
<br />
</li>
<li> L&rsquo;erreur caus&eacute;e par des variations dans la g&eacute;om&eacute;trie de comptage.<br />
<br />
Cela doit comprendre les tol&eacute;rances relatives aux &eacute;carts physiques chez les sujets ou dans les &eacute;chantillons ayant fait l&rsquo;objet d&rsquo;un comptage, particuli&egrave;rement en ce qui a trait &agrave; l&rsquo;&eacute;quipement de comptage sp&eacute;cifique utilis&eacute;.<br />
<br />
</li>
<li> L&rsquo;erreur introduite par l&rsquo;att&eacute;nuation du rayonnement &eacute;mis par les tissus sus-jacents durant le comptage <em>in vivo</em>.<br />
<br />
L&rsquo;effet des tissus sus-jacents doit &ecirc;tre consid&eacute;r&eacute; lorsque l&rsquo;&eacute;mission gamma du nucl&eacute;ide en question est inf&eacute;rieure &agrave; 200&nbsp;keV&nbsp;[15], ou lorsque le rayonnement de freinage (<em>Bremsstrahlung)</em> associ&eacute; aux &eacute;missions b&ecirc;ta sont compt&eacute;s. Il faut donc estimer la profondeur et la densit&eacute; moyennes des tissus sus-jacents, qui peuvent varier consid&eacute;rablement d&rsquo;une personne &agrave; une autre.<br />
<br />
</li>
<li> L&rsquo;&eacute;talonnage de l&rsquo;instrument en fonction de l&rsquo;isotope mesur&eacute; dans une g&eacute;om&eacute;trie pertinente pour la mesure r&eacute;elle.<br />
<br />
L&rsquo;instrument employ&eacute; pour l&rsquo;essai biologique devrait &ecirc;tre &eacute;talonn&eacute; en fonction de l&rsquo;isotope qui pr&eacute;sente de l&rsquo;int&eacute;r&ecirc;t et un programme de contr&ocirc;le de la qualit&eacute; r&eacute;gulier devrait &ecirc;tre en place, afin de s&rsquo;assurer que l&rsquo;&eacute;talonnage est r&eacute;guli&egrave;rement effectu&eacute;. Des v&eacute;rifications internes fr&eacute;quentes &agrave; l&rsquo;aide d&rsquo;une source radioactive &agrave; longue p&eacute;riode doivent &eacute;galement &ecirc;tre effectu&eacute;es sur une base r&eacute;guli&egrave;re, pour confirmer que la r&eacute;ponse du d&eacute;tecteur est constante au fil du temps et qu&rsquo;il fonctionne correctement.</li>  </ol>  <p>L&rsquo;exemple&nbsp;2 de l&rsquo;annexe&nbsp;B, <em>Exemples</em>, contient un exemple de calcul de l&rsquo;erreur de comptage pour un r&eacute;sultat d&rsquo;essai biologique.</p>   <a name="7.0"></a>
<h2><strong>7.0 ENREGISTREMENT DES R&Eacute;SULTATS D&rsquo;ESSAIS BIOLOGIQUES</strong> </h2>  <p>Un registre d&rsquo;essais biologiques permet de retracer les donn&eacute;es de dose en vue de reconstituer &eacute;ventuellement la dose.</p>  <p>Afin de se conformer &agrave; la Section&nbsp;27 de la LSRN, la Section&nbsp;28 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> et la sous-section&nbsp;5(1) ainsi que la Section&nbsp;24 du <em>R&egrave;glement sur la radioprotection</em>, un registre d&rsquo;essais biologiques doit &ecirc;tre tenu pour chaque personne qui participe au programme d&rsquo;essais biologiques. De plus, ce registre doit clairement identifier l&rsquo;employ&eacute; par le nom d&rsquo;employ&eacute; ainsi que son groupe de travaille. Plus de renseignements pourraient &ecirc;tre exig&eacute;s afin de se conformer avec une condition de permis. Pour chaque p&eacute;riode de dosim&eacute;trie, les donn&eacute;es relatives aux essais biologiques doivent &ecirc;tre conserv&eacute;es, ainsi que la date &agrave; laquelle la mesure a &eacute;t&eacute; prise. Les registres doivent &eacute;galement comprendre un contr&ocirc;le de la qualit&eacute; des instruments, les r&eacute;sultats de l&rsquo;&eacute;talonnage et les registres de tra&ccedil;abilit&eacute; avec des laboratoires primaires et secondaires.</p>  <p>Les exigences relatives &agrave; la r&eacute;tention de registres se trouvent sur le permis ou &agrave; l&rsquo;article&nbsp;28 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>.</p>
<a name="#RDsection[20]#"></a>
<h2><strong>GLOSSAIRE</strong></h2>  <p><strong>Activit&eacute; d&eacute;riv&eacute;e (AD)</strong></p>  <p>La r&eacute;tention ou le taux d&rsquo;excr&eacute;tion, exprim&eacute; soit en Bq ou en Bq/jour, r&eacute;sultant d&rsquo;une mesure unique d&rsquo;un radionucl&eacute;ide, obtenue &agrave; la fin d&rsquo;une p&eacute;riode de surveillance qui est tel que la dose efficace engag&eacute;e annuelle correspondante extrapol&eacute;e est &eacute;gale &agrave; 1&nbsp;mSv. L&rsquo;AD est calcul&eacute;e en supposant que l&rsquo;incorporation ait eu lieue au point milieu de la p&eacute;riode de surveillance.</p>  <p><strong>Bremsstrahlung</strong></p>  <p>Rayonnement &eacute;lectromagn&eacute;tique produit par la d&eacute;c&eacute;l&eacute;ration d&rsquo;une particule charg&eacute;e, comme un &eacute;lectron, lorsque celle-ci est d&eacute;vi&eacute;e (changement de moment) par une autre particule charg&eacute;e, comme le noyau d&rsquo;un atome.</p>  <p><strong>Dose absorb&eacute;e (D)</strong></p>  <p>L&rsquo;&eacute;nergie absorb&eacute;e lors d&rsquo;une exposition au rayonnement par masse unitaire. L&rsquo;unit&eacute; SI de la dose absorb&eacute;e est le gray&nbsp;(Gy).</p>  <p><strong>Dose efficace (E)</strong></p>  <p>Somme, exprim&eacute;e en sieverts, des valeurs dont chacune repr&eacute;sente le produit de la dose &eacute;quivalente re&ccedil;ue par un organe ou un tissu, et engag&eacute;e &agrave; leur &eacute;gard, figurant &agrave; la colonne&nbsp;1 de l&rsquo;annexe&nbsp;1 (<em>R&egrave;glement sur la radioprotection</em>) par le facteur de pond&eacute;ration du tissu figurant &agrave; la colonne&nbsp;2 (<em>R&egrave;glement sur la radioprotection</em>).</p>  <p><strong>Dose efficace engag&eacute;e (DEE) (E(50))</strong></p>  <p>La dose efficace r&eacute;sultant de l&rsquo;incorporation d&rsquo;une substance radioactive. Cette dose est accumul&eacute;e sur une p&eacute;riode de 50&nbsp;ans suivant l&rsquo;incorporation initiale. L&rsquo;unit&eacute; SI de la DEE est le sievert&nbsp;(Sv).</p>  <p><strong>Dose &eacute;quivalente (H<sub>T</sub>) </strong></p>  <p>Produit, exprim&eacute; en sieverts, de la dose absorb&eacute;e d&rsquo;un type de rayonnement figurant &agrave; la colonne&nbsp;1 de l&rsquo;annexe&nbsp;2 (<em>R&egrave;glement sur la radioprotection</em>) par le facteur de pond&eacute;ration du rayonnement figurant &agrave; la colonne&nbsp;2 (<em>R&egrave;glement sur la radioprotection</em>).</p>  <p><strong>&Eacute;chantillonneur d&rsquo;air personnel (EAP)</strong></p>  <p>L&rsquo;&eacute;chantillonneur d&rsquo;air personnel comprend un porte-filtre et une pompe &agrave; vide &agrave; piles, et est port&eacute; par le travailleur dans le but d&rsquo;estimer les concentrations de radionucl&eacute;ides dans l&rsquo;air respirable qui l&rsquo;entoure. Les &eacute;chantillonneurs d&rsquo;air personnel portent &eacute;galement le nom de micro-&eacute;chantillonneurs.</p>  <p><strong>Essai biologique</strong></p>  <p>Mesure de la quantit&eacute; ou de la concentration d&rsquo;un radionucl&eacute;ide dans le corps ou dans une mati&egrave;re biologique excr&eacute;t&eacute;e ou retir&eacute;e du corps et analys&eacute;e aux fins de l&rsquo;estimation de la quantit&eacute; de radionucl&eacute;ide dans le corps.</p>  <p><strong>Essai biologique <em>in vitro</em></strong></p>  <p>Mesures visant &agrave; d&eacute;tecter la pr&eacute;sence de mati&egrave;res radioactives, ou &agrave; en estimer la quantit&eacute; dans les f&egrave;ces ou dans d&rsquo;autres mati&egrave;res biologiques excr&eacute;t&eacute;es ou retir&eacute;es du corps.</p>  <p><strong>Essai biologique <em>in vivo</em></strong></p>  <p>Mesures d&rsquo;une mati&egrave;re radioactive pr&eacute;sente dans le corps &agrave; l&rsquo;aide d&rsquo;instruments qui d&eacute;tectent le rayonnement &eacute;mis par cette mati&egrave;re, &agrave; l&rsquo;int&eacute;rieur du corps.</p>  <p><strong>Facteur de pond&eacute;ration des tissus</strong></p>  <p>Facteur pour lequel la dose &eacute;quivalente est pond&eacute;r&eacute;e aux fins de la d&eacute;termination de la dose efficace. Le facteur de pond&eacute;ration des tissus pour un organe ou un tissu repr&eacute;sente la contribution relative de cet organe ou de ce tissu au pr&eacute;judice total caus&eacute; par les effets de l&rsquo;irradiation uniforme du corps entier&nbsp;[16].</p>  <p><strong>Facteur de pond&eacute;ration du rayonnement</strong></p>  <p>Facteur pour lequel la dose absorb&eacute;e est pond&eacute;r&eacute;e dans le but de d&eacute;terminer la dose &eacute;quivalente. Le facteur de pond&eacute;ration du rayonnement pour un type sp&eacute;cifique et une &eacute;nergie de rayonnement a &eacute;t&eacute; choisi de mani&egrave;re &agrave; &ecirc;tre repr&eacute;sentatif des valeurs de l&rsquo;efficacit&eacute; biologique relative (EBR) de ce rayonnement en induisant des effets stochastiques &agrave; de faibles doses. L&rsquo;EBR d&rsquo;un rayonnement, comparativement &agrave; un autre, est le rapport inverse des doses absorb&eacute;es produisant le m&ecirc;me degr&eacute; d&rsquo;un point final biologique d&eacute;fini&nbsp;[16].</p>  <p><strong>Fonction d&rsquo;excr&eacute;tion (m)</strong></p>  <p>Expression math&eacute;matique de la fraction d&rsquo;excr&eacute;tion d&rsquo;un radionucl&eacute;ide hors du corps &agrave; n&rsquo;importe quel moment suite &agrave; l&rsquo;incorporation, g&eacute;n&eacute;ralement exprim&eacute;e en becquerels excr&eacute;t&eacute;s par jour, par becquerel incorpor&eacute;.</p>  <p><strong>Fraction d&rsquo;incorporation potentielle (FIP)</strong></p>  <p>Quantit&eacute; sans dimension qui d&eacute;finit l&rsquo;incorporation comme &eacute;tant une fraction de l&rsquo;exposition &agrave; la contamination. La fraction d&rsquo;incorporation d&eacute;pend de plusieurs facteurs&nbsp;: rejet, confinement, dispersabilit&eacute;, facteur d&rsquo;occupation. Par exemple, FIP=0 dans le cas des mati&egrave;res encapsul&eacute;es, &eacute;tant donn&eacute; qu&rsquo;aucune particule radioactive ne peut p&eacute;n&eacute;trer dans le corps d&rsquo;un travailleur.</p>  <p><strong>Incorporation</strong></p>  <p>Quantit&eacute; d&rsquo;un radionucl&eacute;ide auquel le corps a &eacute;t&eacute; expos&eacute; par inhalation, absorption cutan&eacute;e, injection, ingestion, ou par le biais de blessures.</p>  <p><strong>Limite annuelle d&rsquo;incorporation (LAI)</strong></p>  <p>L&rsquo;activit&eacute; d&rsquo;un radionucl&eacute;ide qui, lorsqu&rsquo;il est incorpor&eacute;, r&eacute;sulte en une DEE de 20&nbsp;mSv.</p>  <p><strong>Limite d&eacute;riv&eacute;e de concentration dans l&rsquo;air (LDCA)</strong></p>  <p>Concentration d&rsquo;un radionucl&eacute;ide dans l&rsquo;air qui, lorsqu&rsquo;il est inhal&eacute; &agrave; un rythme respiratoire de 1,2&nbsp;m3 par heure, pendant 2&nbsp;000&nbsp;heures dans une ann&eacute;e, r&eacute;sulte en une incorporation de 1&nbsp;LAI.</p>  <p><strong>Mod&egrave;le de biocin&eacute;tique</strong></p>  <p>Description math&eacute;matique du comportement des radionucl&eacute;ides dans les r&eacute;actions m&eacute;taboliques qui se produisent dans les cellules, les tissus, les organes et les organismes. On utilise surtout ce mod&egrave;le pour d&eacute;crire la r&eacute;partition des radionucl&eacute;ides dans les tissus et leur excr&eacute;tion.</p>  <p><strong>Niveau de d&eacute;cision analytique (niveau critique)</strong></p>  <p>Mesure du nombre de coups enregistr&eacute;s par un instrument, ou mesure finale de l&rsquo;instrument effectu&eacute;e pour d&eacute;tecter une quantit&eacute; d&rsquo;un m&eacute;lange &agrave; analyser, pour laquelle ou au-del&agrave; de laquelle une d&eacute;cision est prise &agrave; l&rsquo;effet qu&rsquo;une quantit&eacute; positive du m&eacute;lange &agrave; analyser est pr&eacute;sente.</p>  <p><strong>Niveau d&rsquo;enqu&ecirc;te (NE)</strong></p>  <p>Indicateur de l&rsquo;incorporation (en Bq) de substances radioactives qui n&eacute;cessite une surveillance sp&eacute;ciale du travailleur. Cet indicateur est habituellement exprim&eacute; comme &eacute;tant une fraction de la LAI.</p>  <p><strong>Niveau d&rsquo;enqu&ecirc;te d&eacute;riv&eacute; (NED)</strong></p>  <p>Lorsqu&rsquo;un programme de surveillance de la contamination interne est en place, il convient de d&eacute;terminer, &agrave; l&rsquo;avance, les niveaux de contamination au-del&agrave; desquels certaines mesures sont requises. Le niveau d&rsquo;enqu&ecirc;te d&eacute;riv&eacute; (NED) est le niveau auquel une enqu&ecirc;te ou une &eacute;valuation de la dose est initi&eacute;e.</p>  <p><strong>Niveau de r&eacute;f&eacute;rence d&eacute;riv&eacute;</strong></p>  <p>Activit&eacute; d&eacute;termin&eacute;e par l&rsquo;essai biologique, attribuable aux sources en milieu de travail.</p>  <p><strong>P&eacute;riode biologique </strong></p>  <p>Temps n&eacute;cessaire pour que la moiti&eacute; de la masse de radionucl&eacute;ides donn&eacute;s pr&eacute;sente dans l&rsquo;organisme soit &eacute;vacu&eacute;e par les voies naturelles (autres que la d&eacute;sint&eacute;gration radioactive).</p>  <p><strong>Quantit&eacute; minimale d&eacute;tectable (QMD)</strong></p>  <p>Quantit&eacute; la plus faible (activit&eacute; ou masse) d&rsquo;un radionucl&eacute;ide (ou d&rsquo;un m&eacute;lange &agrave; analyser) dans un &eacute;chantillon, qui sera d&eacute;tect&eacute;e avec une probabilit&eacute;&nbsp; &szlig; de non-d&eacute;tection (erreur de type&nbsp;II), tout en ayant une probabilit&eacute; &alpha; de conclure fautivement qu&rsquo;une quantit&eacute; du m&eacute;lange &agrave; analyser positive (diff&eacute;rente de z&eacute;ro) du m&eacute;lange &agrave; analyser est pr&eacute;sente dans un &laquo;&nbsp;&eacute;chantillon &agrave; blanc&nbsp;&raquo; appropri&eacute; (erreur de type&nbsp;I).</p>  <p><strong>Sievert (Sv)</strong></p>  <p>Unit&eacute; de dose &eacute;quivalente, de dose efficace et de DEE. Un sievert est d&eacute;fini comme &eacute;tant un joule d&rsquo;&eacute;nergie absorb&eacute;e par kilogramme de tissu, multipli&eacute; par un facteur de pond&eacute;ration appropri&eacute;, sans dimension. Voir &eacute;galement &laquo;&nbsp;dose &eacute;quivalente&nbsp;&raquo; et &laquo;&nbsp;dose efficace&nbsp;&raquo;.</p>
<a name="#RDsection[21]#"></a>
<h2><strong>R&Eacute;F&Eacute;RENCES</strong></h2>  <ol>
<li> U.S. Department of Energy, <em>DOE Standard Internal Dosimetry</em>, DOE-STD-1121-98, 1999.</li>
<li> Health Physics Society, <em>American National Standard-Design of Internal Dosimetry Programs</em>, ANSI/HPS&nbsp;N13.39-2001.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, <em>Conception et mise en &oelig;uvre d&rsquo;un programme d&rsquo;essais biologiques</em>, Rapport du groupe de travail de la CCSN sur la dosim&eacute;trie interne, RSP-0182A.</li>
<li> Agence internationale de l&rsquo;&eacute;nergie atomique, <em>&Eacute;valuation de l&rsquo;exposition professionnelle due &agrave; l&rsquo;incorporation de radionucl&eacute;ides,</em> Guide de s&ucirc;ret&eacute; n<sup>o</sup>&nbsp;RS-G-1.2, 1999.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, <em>Protocoles d&rsquo;intervention pour les essais biologiques en cas d&rsquo;incorporation anormale de radionucl&eacute;ides,</em> Guide d&rsquo;application de la r&eacute;glementation G-147, 2003(b).</li>
<li> Commission internationale de protection radiologique, <em>Human Respiratory Tract Model for Radiological Protection</em>, Publication&nbsp;66, Vol.&nbsp;24, n<sup>os</sup> 1 &agrave; 3, Pergamon Press, 1994.</li>
<li> Commission internationale de protection radiologique, <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54</em>, Publication&nbsp;78, Pergamon Press, 1997.</li>
<li> Health Physics Society, <em>American National Standard&ndash;Performance Criteria for Radiobioassay</em>, HPS&nbsp;N13.30-1996.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, <em>Uranium Intake&ndash;Dose Estimation Methods</em>, Rapport du Groupe de travail sur la dosim&eacute;trie interne de la CCSN, RPS-0165, 2003(c).</li>
<li> Sant&eacute; et Bien-&ecirc;tre social Canada, <em>Bioassay Guideline&nbsp;2&mdash;Guidelines for Tritium Bioassay, </em>Rapport du Groupe f&eacute;d&eacute;ral-provincial sur les crit&egrave;res relatifs aux essais biologiques et &agrave; la surveillance<em> in vivo</em>, Direction de l&rsquo;hygi&egrave;ne du milieu, 83-EHD-87, 1983.</li>
<li> Sant&eacute; et Bien-&ecirc;tre social Canada, <em>Bioassay Guideline&nbsp;4&mdash;Guidelines for Uranium Bioassay</em>, 88-EHD-139, 1987.</li>
<li> Commission internationale de protection radiologique, <em>Dose Coefficients for Intakes of Radionuclides by Workers</em>, Publication&nbsp;68, Vol.&nbsp;24, n<sup>o</sup>&nbsp;4, Pergamon Press, 1995.</li>
<li> Leggett, R.W., <em>Reliability of the ICRP&rsquo;s Systemic Biokinetic Models</em>, Radiation Protection Dosimetry, Vol.&nbsp;79, 1998.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, <em>Normes techniques et d&rsquo;assurance de la qualit&eacute; des services de dosim&eacute;trie au Canada</em>, S-106 r&eacute;v&nbsp;1, 2006.</li>
<li> Commission internationale de protection radiologique, <em>Basic Anatomical and Physiological Data for Use in Radiological Protection: Reference Values</em>, Publication&nbsp;89, 2002.</li>
<li> Commission internationale de protection radiologique, <em>Recommandation 1990 de la Commission internationale de protection radiologique</em>, Vol.&nbsp;21, n<sup>os</sup>&nbsp;1 &agrave; 3, Publication&nbsp;60, 1991.</li>
<li> Hickey, E.E., Stoetzel, G.A., McGuire, S.A., Strom, D.J., Cicotte, G.R., Wiblin, C.M., <em>Air Sampling in the Workplace</em>, NUREG-1400, 1993.</li>
<li> Brodsky, A., <em>Resuspension Factors and Probabilities of Intake of Material in Process (or is 10<sup>-6</sup> a magic number in health physics?)</em>, Health Physics, Vol.&nbsp;39, n<sup>o</sup>&nbsp;6, pp.&nbsp;992-1000, 1980.</li>
<li> Knoll, G.F., <em>Radiation Detection and Measurement</em>, John Wiley &amp; Sons, 2000.</li>  </ol>
<a name="#RDsection[22]#"></a>
<h3><strong>RENSEIGNEMENTS ADDITIONNELS</strong></h3>  <p>Les documents suivants contiennent des renseignements additionnels qui pourraient pr&eacute;senter de l&rsquo;int&eacute;r&ecirc;t pour les personnes participant &agrave; la conception et &agrave; la mise en &oelig;uvre d&rsquo;un programme d&rsquo;essai biologique&nbsp;:</p>  <ol>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, <em>Contr&ocirc;le et enregistrement des doses de rayonnement aux personnes</em>, Guide d&rsquo;application de la r&eacute;glementation G-91, 2003(a).</li>
<li> Sant&eacute; et Bien-&ecirc;tre social Canada, <em>Bioassay Guideline&nbsp;1&ndash;General Guidelines for Bioassay Programs</em>, 81-EHD-56, 1980.</li>
<li> Leggett, R.W., <em>Predicting the Retention of Cs in Individuals</em>, Health Physics, Vol.&nbsp;50, pp.&nbsp;747-759, 1986.</li>
<li> Strom, D.J., <em>Programmes for Assessment of Dose from Intakes of Radioactive Materials</em>, Internal Radiation Dosimetry, Health Physics 1994 Summer School, pp.&nbsp;543-570, 1994.</li>
<li> Commission internationale de protection radiologique, <em>Rapport du Groupe de travail sur l&rsquo;homme de r&eacute;f&eacute;rence</em>, Publication&nbsp;23, 1975.</li>  </ol>   <a name="A"></a>
<h2><strong>ANNEXE A <br />
CHOIX DES PARTICIPANTS &Agrave; UN PROGRAMME D&rsquo;ESSAIS BIOLOGIQUES COURANTS BAS&Eacute; SUR L&rsquo;ACTIVIT&Eacute; MANIPUL&Eacute;E</strong></h2>  <p>L&rsquo;orientation sur le choix des participants &agrave; un programme d&rsquo;essai biologique courant bas&eacute; sur l&rsquo;activit&eacute; manipul&eacute;e ou sur l&rsquo;activit&eacute; associ&eacute;e &agrave; des proc&eacute;d&eacute;s est fournie dans diverses r&eacute;f&eacute;rences [2], [4], [17]. Les valeurs indiqu&eacute;es au tableau&nbsp;1 ont &eacute;t&eacute; principalement bas&eacute;es sur la m&eacute;thode pr&eacute;sent&eacute;e dans le document <em>American National Standard&ndash;Design of Internal Dosimetry Programs,</em> Health Physics Society; toutefois, des valeurs semblables peuvent &ecirc;tre obtenues dans d&rsquo;autres r&eacute;f&eacute;rences.</p>   <a name="A.1"></a>
<h3><strong>A.1 Fraction d&rsquo;incorporation potentielle (FIP)</strong></h3>  <p>La fraction d&rsquo;incorporation potentielle (FIP) est d&eacute;finie comme suit&nbsp;:</p>  <p>FIP = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S</p>  <p>o&ugrave;&nbsp;:</p>  <table>
<tr>
<td valign="top" width="42"><p>10<sup>-6</sup></p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur de Brodsky [18]</p></td>
</tr>
<tr>
<td valign="top" width="42"><p>R</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur de rejet</p></td>
</tr>
<tr>
<td valign="top" width="42"><p>C</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur de confinement</p></td>
</tr>
<tr>
<td valign="top" width="42"><p>D</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur de dispersabilit&eacute;</p></td>
</tr>
<tr>
<td valign="top" width="42"><p>O</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur d&rsquo;occupation des locaux</p></td>
</tr>
<tr>
<td valign="top" width="42"><p>S</p></td>
<td valign="top" width="24"><p>=</p></td>
<td valign="top" width="469"><p>facteur relatif aux mati&egrave;res sous forme sp&eacute;ciale</p></td>
</tr>  </table>   <a name="A.2"></a>
<h3><strong>A.2 Facteur de rejet (R)</strong></h3>  <p>Les valeurs recommand&eacute;es pour le facteur de rejet (R) sont&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="516"><p>Gaz, liquides fortement volatils</p></td>
<td valign="top" width="60"><p>1,0</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Poudres non volatiles, liquides l&eacute;g&egrave;rement volatils</p></td>
<td valign="top" width="60"><p>0,1</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Liquides, contamination g&eacute;n&eacute;rale, sur une vaste &eacute;tendue</p></td>
<td valign="top" width="60"><p>0,01</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Solides, contamination ponctuelle, mati&egrave;res contenues dans des particules de grande taille; par exemple, r&eacute;sines</p></td>
<td valign="top" width="60"><p>0,001</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Mati&egrave;res encapsul&eacute;es</p></td>
<td valign="top" width="60"><p>0</p></td>
</tr>  </table>   <a name="A.3"></a>
<h3><strong>A.3 Facteur de confinement (C)</strong></h3>  <p>Les valeurs recommand&eacute;es pour le facteur de confinement (C) sont&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="516"><p>Bo&icirc;te &agrave; gants ou cellule chaude</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;&nbsp;0,01</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Hotte am&eacute;lior&eacute;e (enceinte ferm&eacute;e, avec ouvertures pour les bras)</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;&nbsp;0,1</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Hotte</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;&nbsp;1,0</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Mati&egrave;res contamin&eacute;es contenues dans des sacs, ou envelopp&eacute;es, mati&egrave;res contenues dans des sacs et plac&eacute;es dans des bo&icirc;tes de bois ou de carton, serres</p></td>
<td valign="top" width="60"><p>&nbsp;10</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Table de travail, contamination de surface dans une salle o&ugrave; la ventilation est normale</p></td>
<td valign="top" width="60"><p>100</p></td>
</tr>  </table>   <a name="A.4"></a>
<h3><strong>A.4 Facteur de dispersabilit&eacute; (D)</strong></h3>  <p>Les valeurs recommand&eacute;es pour le facteur de dispersabilit&eacute; (D) sont&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="516"><p>Mesures qui accroissent l&rsquo;&eacute;nergie des mati&egrave;res (chauffage, coupe, meulage, &eacute;crasement, soudage, mise sous pression, r&eacute;actions exothermiques)</p></td>
<td valign="top" width="60"><p>10</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Autres mesures (qui ne favorisent pas la dispersabilit&eacute;)</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;1</p></td>
</tr>  </table>   <a name="A.5"></a>
<h3><strong>A.5 Facteur d&rsquo;occupation des locaux (O)</strong></h3>  <p>Les valeurs recommand&eacute;es pour le facteur d&rsquo;occupation des locaux (O) sont&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="516"><p>Utilisation annuelle ou unique</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;&nbsp;1</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Utilisation mensuelle ou &agrave; quelques reprises durant l&rsquo;ann&eacute;e</p></td>
<td valign="top" width="60"><p>&nbsp;10</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Utilisation hebdomadaire, une dizaine de fois durant l&rsquo;ann&eacute;e, ou des dizaines de jours lors d&rsquo;un projet ponctuel</p></td>
<td valign="top" width="60"><p>&nbsp;50</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Utilisation quotidienne essentiellement</p></td>
<td valign="top" width="60"><p>250</p></td>
</tr>  </table>   <a name="A.6"></a>
<h3><strong>A.6 Facteur relatif aux mati&egrave;res sous forme sp&eacute;ciale (S)</strong></h3>  <p>Les valeurs recommand&eacute;es pour le facteur relatif aux mati&egrave;res sous forme sp&eacute;ciale (S) sont&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="516"><p>Pr&eacute;curseurs de l&rsquo;ADN (sauf <sup>32</sup>P, <sup>35</sup>S, ou <sup>131</sup>I)</p></td>
<td valign="top" width="60"><p>10</p></td>
</tr>
<tr>
<td valign="top" width="516"><p>Autres mati&egrave;res</p></td>
<td valign="top" width="60"><p>&nbsp;&nbsp;1</p></td>
</tr>  </table>   <a name="A.7"></a>
<h3><strong>A.7 Valeurs du tableau&nbsp;1</strong></h3>  <p>Les valeurs du tableau 1 ont &eacute;t&eacute; d&eacute;riv&eacute;es des param&egrave;tres suivants&nbsp;:</p>  <table border="0" >
<tr>
<td valign="top" width="234"><p>Gaz, liquides volatils et poudres</p></td>
<td valign="top" width="342"><p>R = 1 (gaz, liquides fortement volatils)<br />
D = 1 (aucune &eacute;nergie communiqu&eacute;e au syst&egrave;me)<br />
O = 250 (utilisation quotidienne essentiellement)<br />
S = 1</p></td>
</tr>
<tr>
<td valign="top" width="234"><p>Liquides et solides non volatils</p></td>
<td valign="top" width="342"><p>R = 0,01 (liquides, contamination d&rsquo;une vaste &eacute;tendue)<br />
D = 1 (aucune &eacute;nergie ajout&eacute;e au syst&egrave;me)<br />
O = 250 (utilisation quotidienne essentiellement)<br />
S = 1</p></td>
</tr>  </table>   <a name="B"></a>
<h2><strong>ANNEXE B <br />
EXEMPLES </strong></h2>   <a name="B.1"></a>
<h3><strong>B.1 Exemple 1 : D&eacute;termination de la participation &agrave; un programme d&rsquo;essais biologiques</strong></h3>  <p>Un travailleur manipule en moyenne :</p>  <p>A) 1 &times; 10<sup>6</sup> Bq de <sup>125</sup>I, trois fois par semaine, sous une hotte (en supposant que l&rsquo;ingestion est la voie d&rsquo;incorporation la plus probable);</p>  <p>B) 1 &times; 10<sup>7</sup> Bq de <sup>3</sup>H (sous forme d&rsquo;eau triti&eacute;e), presque quotidiennement, sous une hotte (en supposant qu&rsquo;il y a ingestion);</p>  <p>C) 0,6 &times; 10<sup>6</sup> Bq de <sup>131</sup>I, quatre fois par ann&eacute;e, sur une table de travail (en supposant qu&rsquo;il y a inhalation).</p>  <p>Toutes les mati&egrave;res radioactives se pr&eacute;sentent sous une forme relativement volatile.</p>  <p>Les param&egrave;tres suivants doivent &ecirc;tre d&eacute;termin&eacute;s :</p>  <ol>
<li> l&rsquo;incorporation totale par ann&eacute;e;</li>
<li> le coefficient de conversion de dose (cet exemple utilise un coefficient de conversion de dose de e(50), selon la publication 68 de la CIPR [12]);</li>
<li> la limite annuelle d&rsquo;incorporation (LAI);</li>
<li> la fraction d&rsquo;incorporation potentielle (FIP) &ndash; (voir annexe A);</li>
<li> les coefficients r<em><sub>j</sub></em>, o&ugrave; <em>j</em> = A, B, et C (correspondant aux trois incorporations de radionucl&eacute;ides d&eacute;finies ci-dessus);</li>
<li> la somme des coefficients R<em><sub>j</sub></em>, o&ugrave; R<em><sub>j</sub></em> =r<em><sub>A</sub></em> + r<em><sub>B</sub></em> + r<em><sub>C</sub></em>.</li>  </ol>  <p>Le tableau B1 montre des exemples de calcul &eacute;tape par &eacute;tape, dans le but de d&eacute;terminer les valeurs de r<em><sub>j</sub></em> et de R<em><sub>j</sub></em>.</p>  <p>Dans le cas qui nous occupe, les r&eacute;sultats des calculs &agrave; l&rsquo;aide du tableau B1 sont :</p>  <ol>
<li> R<em><sub>j</sub></em> &lt; 1, par cons&eacute;quent (et conform&eacute;ment &agrave; la section 4.2), le travailleur n&rsquo;est pas oblig&eacute; de faire l&rsquo;objet d&rsquo;une surveillance relative &agrave; des essais biologiques.</li>
<li> Cependant, r<em><sub>A</sub></em> = 0,38 &gt; 0,3, ce qui indique qu&rsquo;il serait prudent d&rsquo;effectuer des contr&ocirc;les du <sup>125</sup>I chez le travailleur.</li>  </ol>  <p><em><strong>Tableau B1 : &Eacute;valuation des coefficients r<sub>j</sub> et du coefficient de somme R</strong><sub>j</sub><strong>.</strong></em></p>  <table>
<tr>
<td valign="top" width="216">&#160; </td>
<td valign="top" width="222"><p><strong><sup>125</sup>I (ingestion)</strong></p></td>
<td valign="top" width="222"><p><strong><sup>3</sup>H (ingestion)</strong></p></td>
<td valign="top" width="222"><p><strong><sup>131</sup>I (inhalation)</strong></p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Incorporation</strong></p></td>
<td valign="top" width="222"><p>1 MBq par s&eacute;ance</p></td>
<td valign="top" width="222"><p>10 MBq par s&eacute;ance</p></td>
<td valign="top" width="222"><p>0,6 MBq par s&eacute;ance</p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Incorporation totale par ann&eacute;e</strong></p></td>
<td valign="top" width="222"><p>10<sup>6</sup> &times; (3 &times; 52)<br />
= 0,16 GBq/ann&eacute;e</p></td>
<td valign="top" width="222"><p>10<sup>7</sup> &times; (5 &times; 52)<br />
= 2,6 GBq/ann&eacute;e</p></td>
<td valign="top" width="222"><p>0,6 &times; 10<sup>6</sup> &times; 4<br />
= 2,4 MBq/ann&eacute;e</p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Coefficient de conversion de dose e(50)<br />
(se reporter &agrave; la publication 68 de la CIPR)</strong></p></td>
<td valign="top" width="222"><p>1,5 &times; 10<sup>-8</sup> Sv/Bq</p></td>
<td valign="top" width="222"><p>1,8 &times; 10<sup>-11</sup> Sv/Bq</p></td>
<td valign="top" width="222"><p>2,0 &times; 10<sup>-8</sup> Sv/Bq</p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Limite annuelle d&rsquo;incorporation (LAI), o&ugrave; :</strong></p>
<p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-9.gif" border="0" width="157" height="44" /></p></td>
<td valign="top" width="222"><p>1,3 MBq/ann&eacute;e</p></td>
<td valign="top" width="222"><p>1,1 GBq/ann&eacute;e</p></td>
<td valign="top" width="222"><p>1,0 MBq/ann&eacute;e</p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Fraction d&rsquo;incorporation potentielle (FIP)<br />
(voir annexe A)</strong></p></td>
<td valign="top" width="222"><p>Facteur d&rsquo;occupation des locaux<br />
= 3 &times; 52<br />
= 156</p>
<p>Facteur de confinement = 1</p>
<p>FIP = 1,56 &times; 10<sup>-4</sup></p></td>
<td valign="top" width="222"><p>Facteur d&rsquo;occupation des locaux<br />
= 250</p>
<p>Facteur de confinement = 1</p>
<p>FIP = 2,5 &times; 10<sup>-4</sup></p></td>
<td valign="top" width="222"><p>Facteur d&rsquo;occupation des locaux<br />
= 4</p>
<p>Facteur de confinement = 100</p>
<p>FIP = 4 &times; 10<sup>-4</sup></p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Ratios r<em><sub>j</sub></em>, o&ugrave; :</strong></p>
<p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-10.gif" border="0" width="164" height="45" /></p></td>
<td valign="top" width="222"><p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c2.png" width="115" height="27" /> </p>
<p>
= <strong>0,38</strong></p></td>
<td valign="top" width="222"><p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c3.png" width="116" height="28" /> </p>
<p>
= <strong>0,01</strong></p></td>
<td valign="top" width="222"><p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c4.png" width="114" height="27" /> </p>
<p>
= <strong>0,02</strong></p></td>
</tr>
<tr>
<td valign="top" width="216"><p><strong>Somme des ratios, r<em><sub>j</sub></em></strong></p></td>
<td colSpan="3" valign="top" width="666"><p><strong><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-14.gif" border="0" width="92" height="25" />  </strong>=  (0,38 + 0,01 + 0,02)  =  <strong>0,41</strong></p></td>
</tr>  </table>   <a name="B.2"></a>
<h3><strong>B.2 Exemple&nbsp;2 : D&eacute;termination de l&rsquo;erreur de comptage (incertitude)</strong></h3>  <p>Les &eacute;tapes &agrave; suivre pour calculer l&rsquo;erreur associ&eacute;e au syst&egrave;me de d&eacute;tection (statistique de comptage), ainsi qu&rsquo;une d&eacute;monstration du calcul de l&rsquo;erreur de comptage &agrave; partir d&rsquo;un r&eacute;sultat unique d&rsquo;essai biologique sont illustr&eacute;es ci-apr&egrave;s&nbsp;:</p>  <p>(a)&nbsp;&nbsp;R&eacute;sultats d&rsquo;une mesure directe&nbsp;:</p>  <table>
<tr>
<td valign="top" width="312"><p>Comptage de l&rsquo;&eacute;chantillon&nbsp;:</p></td>
<td valign="top" width="222"><p>25&nbsp;077 (par litre d&rsquo;urine)</p></td>
</tr>
<tr>
<td valign="top" width="312"><p>Temps de comptage de l&rsquo;&eacute;chantillon&nbsp;:</p></td>
<td valign="top" width="222"><p>10 minutes</p></td>
</tr>
<tr>
<td valign="top" width="312"><p>Comptage du rayonnement de fond&nbsp;:<br />
(nombre de coups par minute)</p></td>
<td valign="top" width="222"><p>4 300 (par litre d&rsquo;urine)</p></td>
</tr>
<tr>
<td valign="top" width="312"><p>Temps de comptage du rayonnement de fond&nbsp;:</p></td>
<td valign="top" width="222"><p>20 minutes</p></td>
</tr>  </table>  <p>&Agrave; la lumi&egrave;re de ces donn&eacute;es, les taux de comptage sont calcul&eacute;s comme suit&nbsp;:</p>  <p>Taux de comptage de l&rsquo;&eacute;chantillon<br />
= (comptage de l&rsquo;&eacute;chantillon) / (temps de comptage de l&rsquo;&eacute;chantillon)<br />
= 25 077/10 min<br />
= 2 508 coups par minute (cpm)</p>  <p>De m&ecirc;me, le taux de comptage du rayonnement de fond est calcul&eacute; comme suit&nbsp;:</p>  <p>Taux de comptage du rayonnement de fond<br />
= (comptage du rayonnement de fond) / (temps de comptage du rayonnement <br />
&nbsp;&nbsp;&nbsp;de fond)<br />
= 4 300/20 min<br />
= 215 cpm</p>  <p>(b)&nbsp;&nbsp;Taux de comptage net&nbsp;:</p>  <p>Le taux de comptage net est soustrait du taux de comptage de l&rsquo;&eacute;chantillon afin d&rsquo;obtenir le taux de comptage net&nbsp;:</p>  <p>2 508 &ndash; 215 = 2 293 cpm</p>  <p>(c)&nbsp;&nbsp;Estimation de l&rsquo;erreur de comptage&nbsp;:&nbsp;[19]</p>  <p>L&rsquo;erreur de comptage (pour l&rsquo;intervalle de confiance de 95 % bas&eacute; seulement sur les statistiques de comptage) est donc calcul&eacute;e comme suit&nbsp;:</p>  <p>Erreur de comptage<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-15.gif" border="0" width="500" height="50" /><br />
<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-16.gif" border="0" width="211" height="49" /><br />
<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-17.gif" border="0" width="141" height="47" /><br />
<br />
= 32 cpm</p>  <p>Ainsi, le taux de comptage de l&rsquo;&eacute;chantillon est de 2 293&nbsp;&plusmn;&nbsp;32&nbsp;cpm. L&rsquo;erreur statistique de 32&nbsp;cpm repr&eacute;sente l&rsquo;erreur relative de (32&nbsp;cpm)&nbsp;/&nbsp;(2 293&nbsp;cpm)&nbsp;=&nbsp;1,4&nbsp;%.</p>  <p>(d)&nbsp;&nbsp;R&eacute;sultat des mesures et de l&rsquo;analyse&nbsp;:</p>  <p>Si l&rsquo;efficacit&eacute; du d&eacute;tecteur pour le <sup>137</sup>Cs est de 10&nbsp;%, le nombre de d&eacute;sint&eacute;grations par minute (dpm) est donn&eacute; par&nbsp;:</p>  <p>(taux de comptage net)&nbsp;/&nbsp;(efficacit&eacute;)&nbsp;=&nbsp;2 293/0,10&nbsp;=&nbsp;22 930&nbsp;dpm</p>  <p>Pour exprimer ce r&eacute;sultat en d&eacute;sint&eacute;grations par seconde, ou en becquerels (Bq), il suffit de diviser par 60, et nous obtenons 382&nbsp;Bq. L&rsquo;erreur relative de 1,4&nbsp;% est report&eacute;e dans l&rsquo;&eacute;quation suivante&nbsp;:</p>  <p>382&nbsp;Bq&nbsp;&times;&nbsp;1,4 %&nbsp;=&nbsp;5&nbsp;Bq</p>  <p>Le r&eacute;sultat obtenu pour l&rsquo;&eacute;chantillon de l&rsquo;essai biologique, incluant l&rsquo;erreur statistique seulement, est donc donn&eacute; par&nbsp;:</p>  <p>382&nbsp;&plusmn;&nbsp;5&nbsp;Bq/L, ou (382&nbsp;&plusmn;&nbsp;1,5&nbsp;Bq/L&nbsp;&times;&nbsp;1,4 L/jour) = 535&nbsp;&plusmn;&nbsp;7&nbsp;Bq/jour</p>  <p>(e)&nbsp;&nbsp;Conclusion</p>  <p>Dans cet exemple, nous avons tenu compte seulement d&rsquo;une incertitude, soit la statistique de comptage. D&rsquo;autres facteurs, comme la g&eacute;om&eacute;trie du comptage, peuvent accro&icirc;tre l&rsquo;incertitude. La g&eacute;om&eacute;trie du comptage d&eacute;pend dans une large mesure des radionucl&eacute;ides en cause.</p>   <a name="B.3"></a>
<h3><strong>B.3 Exemple&nbsp;3 : D&eacute;termination de la fr&eacute;quence de surveillance des incorporations de <sup>137</sup>Cs</strong></h3>  <p>Le tableau&nbsp;2 de la section&nbsp;5.1 montre que le comptage du corps entier et l&rsquo;analyse d&rsquo;urine (comptage gamma) sont des m&eacute;thodes appropri&eacute;es pour d&eacute;tecter le <sup>137</sup>Cs. La p&eacute;riode de surveillance pour le comptage du corps entier est examin&eacute;e en premier lieu.</p>  <p>Les activit&eacute;s d&eacute;riv&eacute;es (AD) pour le <sup>137</sup>Cs dans les essais biologiques <em>in vivo</em> suite &agrave; une incorporation par inhalation sont repr&eacute;sent&eacute;es graphiquement en fonction de diff&eacute;rentes p&eacute;riodes de surveillance, dans le graphique de la figure&nbsp;B1. La limite de d&eacute;tection a &eacute;t&eacute; ajout&eacute;e au graphique. Cette figure montre que 1&nbsp;AD peut &ecirc;tre d&eacute;tect&eacute;e sur un grand &eacute;ventail de p&eacute;riodes de surveillance. Une p&eacute;riode de plus d&rsquo;un an pourrait ainsi constituer un intervalle raisonnable entre les &eacute;pisodes de surveillance des employ&eacute;s. D&rsquo;autres consid&eacute;rations, d&eacute;crites &agrave; la section&nbsp;5.2, pourraient &eacute;galement influer sur le choix final de la p&eacute;riode de surveillance.</p>  <p><strong><em>Figure&nbsp;B1: Inhalation aigu&euml; de <sup>137</sup>Cs de type F &ndash; Activit&eacute; associ&eacute;e<br />
&agrave; 1&nbsp;mSv en fonction du temps</em></strong></p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-18.gif" width="550" height="337" /></p>  <p>Il existe une autre m&eacute;thode que le comptage du corps entier pour d&eacute;tecter le <sup>137</sup>Cs, soit l&rsquo;analyse <em>in vitro</em>. Ici encore, l&rsquo;AD est compar&eacute;e &agrave; la quantit&eacute; minimale d&eacute;tectable (QMD) pour plusieurs fr&eacute;quences de surveillance. La figure&nbsp;B2 montre que la limite de d&eacute;tection de 1&nbsp;Bq/L&nbsp;[7] ne d&eacute;passe pas l&rsquo;AD, entre 7 et 365&nbsp;jours. Il convient &eacute;galement de noter que d&rsquo;autres facteurs, d&eacute;crits &agrave; la section&nbsp;5.2, sont utiles pour choisir une fr&eacute;quence de surveillance appropri&eacute;e.</p>  <p><strong><em>Figure&nbsp;B2: Activit&eacute; d&eacute;riv&eacute;e pour l&rsquo;excr&eacute;tion urinaire, en cas d&rsquo;inhalation<br />
aigu&euml; de <sup>137</sup>Cs de type&nbsp;F</em></strong></p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-19.gif" width="550" height="305" /></p>   <a name="B.4"></a>
<h3><strong>B.4 Exemple&nbsp;4 : D&eacute;termination de la fr&eacute;quence de surveillance pour les incorporations de <sup>131</sup>I</strong></h3>  <p>Une QMD de 100&nbsp;Bq pour la surveillance thyro&iuml;dienne visant &agrave; d&eacute;tecter le <sup>131</sup>I a &eacute;t&eacute; propos&eacute;e&nbsp;[7]. Comme dans l&rsquo;exemple pr&eacute;c&eacute;dent, l&rsquo;AD est repr&eacute;sent&eacute;e graphiquement en fonction de diff&eacute;rentes p&eacute;riodes de surveillance, allant de 2 &agrave; 180&nbsp;jours. Le r&eacute;sultat est illustr&eacute; &agrave; la figure&nbsp;B3.</p>  <p>D&rsquo;apr&egrave;s le graphique, il est clair que si la p&eacute;riode de surveillance est inf&eacute;rieure &agrave; quatre (4)&nbsp;jours, ou sup&eacute;rieure &agrave; 65&nbsp;jours, l&rsquo;activit&eacute; du <sup>131</sup>I dans la thyro&iuml;de est inf&eacute;rieure &agrave; la QMD et que, pour cette raison, elle n&rsquo;est pas d&eacute;tect&eacute;e. Dans ce cas, une p&eacute;riode de 14 &agrave; 30&nbsp;jours constituerait un intervalle raisonnable entre les &eacute;pisodes de surveillance.</p>  <p><strong><em>Figure&nbsp;B3: <sup>131</sup>I dans la thyro&iuml;de (inhalation aigu&euml; de vapeur) &ndash; Activit&eacute;<br />
d&eacute;riv&eacute;e en fonction du temps</em></strong></p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-20.gif" width="521" height="315" /></p>  <p>Bien que le <sup>131</sup>I puisse &ecirc;tre d&eacute;tect&eacute; gr&acirc;ce aux mesures <em>in vitro</em>, la figure&nbsp;B4 laisse supposer qu&rsquo;apr&egrave;s cinq (5)&nbsp;jours, la quantit&eacute; de <sup>131</sup>I excr&eacute;t&eacute;e est inf&eacute;rieure &agrave; la QMD de 1&nbsp;Bq/L&nbsp;[7]. En outre, le taux d&rsquo;excr&eacute;tion de l&rsquo;iode radioactif varie d&rsquo;une personne &agrave; une autre et d&eacute;pend de plusieurs facteurs, y compris la di&egrave;te, l&rsquo;&acirc;ge et la prise de m&eacute;dicaments. Les &eacute;carts dans le taux d&rsquo;excr&eacute;tion entre les individus peut &ecirc;tre important et, par cons&eacute;quent, une p&eacute;riode de surveillance de cinq (5) jours ne permet pas toujours de d&eacute;tecter 1&nbsp;AD. Dans ce cas, l&rsquo;analyse d&rsquo;urine n&rsquo;est pas recommand&eacute;e &agrave; titre de m&eacute;thode de surveillance courante pour &eacute;valuer les incorporations de <sup>131</sup>I.</p>  <p><strong><em>Figure&nbsp;B4: Activit&eacute; d&eacute;riv&eacute;e pour l&rsquo;excr&eacute;tion urinaire du <sup>131</sup>I<br />
suite &agrave; une inhalation aigu&euml; de vapeur</em></strong></p>  <p><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-21.gif" width="499" height="276" /></p>   <a name="B.5"></a>
<h3><strong>B.5 Exemple&nbsp;5 : Niveaux d&rsquo;enqu&ecirc;te d&eacute;riv&eacute;s pour l&rsquo;inhalation de <sup>137</sup>Cs</strong></h3>  <p>Les niveaux d&rsquo;enqu&ecirc;te d&eacute;riv&eacute;s (NED) pour l&rsquo;activit&eacute; dans le corps entier et l&rsquo;excr&eacute;tion urinaire, en cas d&rsquo;inhalation <sup>137</sup>Cs de type F, sont calcul&eacute;s &agrave; l&rsquo;aide des valeurs de <em>m</em>(T/2) tir&eacute;es de la publication 78 de la CIPR (Commission internationale de protection radiologique), intitul&eacute;e : <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54</em> [7]. Pour ce qui concerne la r&eacute;tention dans le corps entier, sur une p&eacute;riode de surveillance courante de 14&nbsp;jours, les param&egrave;tres sont les suivants&nbsp;:</p>  <table>
<tr>
<td valign="top"><p>P&eacute;riode de surveillance&nbsp;:</p></td>
<td valign="top"><p>T = 14 jours</p></td>
</tr>
<tr>
<td valign="top"><p>R&eacute;tention dans le corps entier &agrave; T/2&nbsp;:</p></td>
<td valign="top"><p>m(7&nbsp;jours) = 0,42</p></td>
</tr>
<tr>
<td valign="top"><p>LAI</p></td>
<td valign="top"><p>= 3E+06&nbsp;Bq&nbsp;[12]</p></td>
</tr>  </table>  <p>NE<sub>CT</sub> (T=14 jours) = 0,3 LAI (<em><img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-5.gif" border="0" width="31" height="41" />) m</em>(T/2)<br />
= 0,3 (3E+06 Bq) (<img src="/fra/acts-and-regulations/consultation/comment/rd-150/images/RD_150_draft2_f-22.gif" border="0" width="31" height="41" />) (0,42)<br />
= 1,4 E+04 Bq</p>  <p>Les valeurs du NE pour le corps entier et pour l&rsquo;excr&eacute;tion urinaire, dans le cas des p&eacute;riodes de surveillance courante de 14 &agrave; 180&nbsp;jours, sont illustr&eacute;es au tableau&nbsp;B2. Les valeurs s&rsquo;appliquent &agrave; l&rsquo;inhalation du <sup>137</sup>Cs de type F.</p>  <p><strong><em>Tableau&nbsp;B2 : Niveaux d&rsquo;enqu&ecirc;te d&eacute;riv&eacute;s pour la surveillance courante du <sup>137</sup>Cs</em></strong></p>  <table border="0" >
<tr>
<td valign="top"><p><strong>Intervalle de surveillance<br />
(jours)</strong></p></td>
<td valign="top"><p><strong>NE : Activit&eacute; dans le corps entier<br />
(Bq)</strong></p></td>
<td valign="top"><p><strong>NE : Excr&eacute;tion urinaire quotidienne (Bq/jour)</strong></p></td>
<td valign="top"><p><strong>NE : Excr&eacute;tion urinaire<br />
(Bq/L)</strong></p></td>
</tr>
<tr>
<td valign="top"><p>14</p></td>
<td valign="top"><p>1,4 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>1,3 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>9,1 &times; 10<sup>1</sup></p></td>
</tr>
<tr>
<td valign="top"><p>30</p></td>
<td valign="top"><p>2,9 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>1,6 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>1,1 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>60</p></td>
<td valign="top"><p>5,4 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>2,7 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>1,9 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>90</p></td>
<td valign="top"><p>7,3 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>3,7 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>2,6 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>180</p></td>
<td valign="top"><p>1,1 &times; 10<sup>5</sup></p></td>
<td valign="top"><p>5,5 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>3,9 &times; 10<sup>2</sup></p></td>
</tr>  </table>  <p></p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }