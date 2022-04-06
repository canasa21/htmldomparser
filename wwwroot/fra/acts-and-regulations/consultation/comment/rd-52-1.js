import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Page Web archivée - RD&ndash;52 : Guide de conception des laboratoires de substances nucléaires et des salles de médecine nucléaire ", 
                dateModified: "2012-12-17",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/rd-52-1"
        
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
<h3>Pr&eacute;face</h3>  <p>Ce projet de document de r&eacute;glementation fournit des directives touchant l&rsquo;approche recommand&eacute;e pour respecter les exigences li&eacute;es &agrave; la description de l&rsquo;emplacement et &agrave; la conception des salles en vertu des alin&eacute;as 3(1)<em>d</em>) et 3(1)<em>l</em>) du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> et pour faire des analyses de la conception du blindage, comme &eacute;l&eacute;ment du maintien des doses au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (ALARA), conform&eacute;ment au sous-alin&eacute;a 4<em>a</em>)(iii) du <em>R&egrave;glement sur la radioprotection</em>.</p>  <p>Ce document de r&eacute;glementation fournit des recommandations portant sur la conception de salles de m&eacute;decine nucl&eacute;aire ou de laboratoires de substances nucl&eacute;aires o&ugrave; des substances nucl&eacute;aires non scell&eacute;es doivent &ecirc;tre employ&eacute;es et une approche pour pr&eacute;senter la conception propos&eacute;e &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN).</p>  <p>Il contient des directives sur les travaux de finition et sur les accessoires, la plomberie, l&rsquo;entreposage, la s&eacute;curit&eacute;, la ventilation, le blindage et le contr&ocirc;le des doses pour les salles de m&eacute;decine nucl&eacute;aire et les laboratoires de substances nucl&eacute;aires de niveau &eacute;l&eacute;mentaire, interm&eacute;diaire, sup&eacute;rieur et de confinement.</p>  <p>Les grands principes et les grands &eacute;l&eacute;ments utilis&eacute;s pour &eacute;laborer ce guide respectent les normes nationales et internationales. La liste compl&egrave;te se trouve dans la section <em>Documents connexes</em>, dont voici des exemples&nbsp;: <em>Manuel de bios&eacute;curit&eacute; en laboratoire </em>de l&rsquo;Organisation mondiale de la sant&eacute; (OMS) et de la norme CSA Z316.5-04&mdash;<em>Fume Hoods and Associated Exhaust Systems</em> en provenance de l&rsquo;Association canadienne de normalisation (CSA).</p>  <p>Aucun &eacute;l&eacute;ment contenu dans ce document ne doit &ecirc;tre interpr&eacute;t&eacute; par le titulaire de permis comme une autorisation de d&eacute;roger aux exigences pertinents. Le titulaire de permis a la responsabilit&eacute; d&#39;identifier la l&eacute;gislation, les conditions de permis, les lignes directrices ou les normes applicables et d&#39;y adh&eacute;rer.</p>
<a name="#RDsection[2]#"></a>
<h3>Table des mati&egrave;res</h3>  <ul>
<li><a href="#P58_4731">1.0 Objet</a></li>
<li><a href="#P60_5307">2.0 Port&eacute;e</a></li>
<li><a href="#P63_6034">3.0 Dispositions r&eacute;glementaires pertinentes</a></li>
<li><a href="#P70_8624">4.0 M&eacute;canisme de d&eacute;livrance des permis pour les laboratoires de substances nucl&eacute;aires et les Salles de m&eacute;decine nucl&eacute;aire</a></li>
<li><a href="#P74_10538">5.0 Utilisation du formulaire d&rsquo;&eacute;valuation de la conception (FEC)</a>
<ul>
<li><a href="#P94_11601">5.1 Renseignements suppl&eacute;mentaires pour la Partie A du formulaire d&rsquo;&eacute;valuation de la conception</a>
<ul>
<li><a href="#P95_11700">5.1.1 Classification des salles</a></li>
</ul>
</li>
<li><a href="#P122_15881">5.2 Renseignements suppl&eacute;mentaires pour la Partie F du formulaire d&rsquo;&eacute;valuation
de la conception</a>
<ul>
<li><a href="#P125_17552">5.2.1 Estimation des doses pour la conception de salles de m&eacute;decine
nucl&eacute;aire</a></li>
<li><a href="#P163_27521">5.2.2 Estimation des doses pour les laboratoires de niveau sup&eacute;rieur et de confinement</a></li>
<li><a href="#P166_28483">5.2.3 Estimation des doses pour les laboratoires de substance nucl&eacute;aires en m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#P171_29008">Glossaire</a></li>
<li><a href="#P204_32309">Documents connexes</a></li>
<li><a href="#P241_37412">Annexe A Facteurs de conversion de la dose (FCD) et limites annuelles d&rsquo;incorporation (LAI) pour des substances nucl&eacute;aires communes</a></li>
<li><a href="#P621_42923">Annexe B Calcul pour l&rsquo;estimation des doses</a>
<ul>
<li><a href="#P623_43203">B.1 Exemple de calcul pour l&rsquo;estimation des doses pour les salles de m&eacute;decine nucl&eacute;aire</a></li>
<li><a href="#P1036_63193">B.2 Conclusion</a></li>
</ul>
</li>
<li><a href="#P1040_63811">Annexe C Formulaire d&rsquo;&eacute;valuation de la conception</a></li>  </ul>
<a name="1.0"></a>
<h3><a name="P58_4731" id="P58_4731"></a>1.0 Objet </h3>  <p>Ce projet de document de r&eacute;glementation fournit des directives touchant l&rsquo;approche recommand&eacute;e pour respecter les exigences concernant la description de l&rsquo;emplacement et la conception des salles en vertu des alin&eacute;as 3(1)<em>d</em>) et 3(1)<em>l</em>) du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> et pour faire des analyses de conception du blindage, comme &eacute;l&eacute;ment du maintien des doses au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (ALARA),conform&eacute;ment au sous-alin&eacute;a 4<em>a</em>)(iii) du <em>R&egrave;glement sur la radioprotection</em>.</p>
<a name="2.0"></a>
<h3><a name="P60_5307" id="P60_5307"></a>2.0 Port&eacute;e</h3>  <p>Ce document de r&eacute;glementation formule des recommandations portant sur la conception des salles de m&eacute;decine nucl&eacute;aire ou des laboratoires de substances nucl&eacute;aires o&ugrave; des substances nucl&eacute;aires non scell&eacute;es doivent &ecirc;tre utilis&eacute;es. Ce document contient &eacute;galement une approche pour pr&eacute;senter la conception propos&eacute;e &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN).</p>  <p>Il contient des directives sur les travaux de finition et sur les accessoires, la plomberie, l&rsquo;entreposage, la s&eacute;curit&eacute;, la ventilation, le blindage et le contr&ocirc;le des doses pour les salles de m&eacute;decine nucl&eacute;aire et les laboratoires de substances nucl&eacute;aires de niveau &eacute;l&eacute;mentaire, interm&eacute;diaire,  sup&eacute;rieur et de confinement.</p>
<a name="3.0"></a>
<h3><a name="P63_6034" id="P63_6034"></a>3.0 Dispositions r&eacute;glementaires pertinentes</h3>  <p>Les dispositions de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (LSRN) et des r&egrave;glements connexes &agrave; la LSRN qui s&rsquo;appliquent &agrave; ce document de r&eacute;glementation sont les suivantes&nbsp;:</p>  <ol>
<li> Le paragraphe 24(4) de la LSRN indique ce qui suit&nbsp;: &laquo;&nbsp;La Commission ne d&eacute;livre, ne renouvelle, ne modifie ou ne remplace une licence ou un permis que si elle est d&rsquo;avis que l&rsquo;auteur de la demande, &agrave; la fois&nbsp;: <em>a</em>)&nbsp;est comp&eacute;tent pour exercer les activit&eacute;s vis&eacute;es par la licence ou le permis&nbsp;; <em>b</em>)&nbsp;prendra, dans le cadre de ces activit&eacute;s, les mesures voulues pour pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes, pour prot&eacute;ger l&rsquo;environnement, pour maintenir la s&eacute;curit&eacute; nationale et pour respecter les obligations internationales que le Canada a assum&eacute;es&nbsp;&raquo;.</li>
<li> L&rsquo;alin&eacute;a&nbsp;12(1)<em>c</em>) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> indique ce qui suit&nbsp;: &laquo;&nbsp;Le titulaire de permis&nbsp;: prend toutes les pr&eacute;cautions raisonnables pour prot&eacute;ger l&rsquo;environnement, pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes et maintenir la s&eacute;curit&eacute;&nbsp;&raquo;.</li>
<li> L&rsquo;alin&eacute;a&nbsp;3(1)<em>d</em>) du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> indique ce qui suit&nbsp;: &laquo;&nbsp;La demande de permis visant des substances nucl&eacute;aires ou un appareil &agrave; rayonnement, autre qu&rsquo;un permis d&rsquo;entretien d&rsquo;un appareil &agrave; rayonnement, comprend l&rsquo;emplacement propos&eacute; pour l&rsquo;activit&eacute; que visera le permis, de m&ecirc;me qu&rsquo;une description du lieu&nbsp;&raquo;.</li>
<li> L&rsquo;alin&eacute;a&nbsp;3(1)<em>l</em>) du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> indique ce qui suit&nbsp;: &laquo;&nbsp;La demande de permis visant une substance nucl&eacute;aires ou un appareil &agrave; rayonnement, autre qu&rsquo;un permis d&rsquo;entretien d&rsquo;un appareil &agrave; rayonnement, comprend, lorsque le demande vise une substance nucl&eacute;aire qui est une source non scell&eacute;e et doit &ecirc;tre utilis&eacute;e &agrave; l&rsquo;int&eacute;rieur d&rsquo;une pi&egrave;ce, la conception propos&eacute;e pour la pi&egrave;ce&nbsp;&raquo;.</li>
<li> Le sous-alin&eacute;a&nbsp;4<em>a</em>)(iii) du <em>R&egrave;glement sur la radioprotection</em> indique ce qui suit&nbsp;: &laquo;&nbsp;Le titulaire de permis met en &oelig;uvre un programme de radioprotection et, dans le cadre de ce programme, maintient le degr&eacute; d&rsquo;exposition aux produits de filiation du radon ainsi que la dose efficace et la dose &eacute;quivalente qui sont re&ccedil;ues par la personne, et engag&eacute;es &agrave; son &eacute;gard, au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre, compte tenu de facteurs &eacute;conomiques et sociaux, par le contr&ocirc;le de l&rsquo;exposition du personnel et du public au rayonnement&nbsp;&raquo;.</li>  </ol>
<a name="4.0"></a>
<h3><a name="P70_8624" id="P70_8624"></a>4.0 M&eacute;canisme de d&eacute;livrance des permis pour les laboratoires de substances nucl&eacute;aires et les Salles de m&eacute;decine nucl&eacute;aire</h3>  <p>Pour obtenir un permis de substances nucl&eacute;aires non scell&eacute;es, les demandeurs doivent pr&eacute;senter une demande de permis remplie en conformit&eacute; avec l&rsquo;article 3 du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em>. Dans le cadre de la demande de permis, les demandeurs doivent pr&eacute;senter la conception propos&eacute;e de la pi&egrave;ce o&ugrave; les substances nucl&eacute;aires non scell&eacute;es seront utilis&eacute;es.</p>  <p>Le formulaire d&rsquo;&eacute;valuation de la conception (FEC) figurant &agrave; l&rsquo;annexe&nbsp;C de ce document aide les demandeurs de permis &agrave; pr&eacute;senter la conception propos&eacute;e de leur salle de m&eacute;decine nucl&eacute;aire ou de leur laboratoire de substances nucl&eacute;aires. Un FEC doit &ecirc;tre rempli pour chaque nouvelle construction ou pour les r&eacute;novations importantes (comme la d&eacute;molition de murs ou l&rsquo;installation de nouvelles hottes; pour plus d&rsquo;information, contacter un sp&eacute;cialiste des permis de la CCSN) et joint &agrave; la nouvelle demande ou &agrave; une demande de modification. Une bonne conception de laboratoire facilite l&rsquo;ex&eacute;cution des politiques et des proc&eacute;dures de s&eacute;curit&eacute;.</p>  <p>Le FEC rempli doit &ecirc;tre pr&eacute;sent&eacute; &agrave; la CCSN d&egrave;s que possible au cours de la phase de conception pour faciliter le traitement de la demande de permis ou la modification du permis existant. Si plusieurs pi&egrave;ces doivent &ecirc;tre construites ou r&eacute;nov&eacute;es et si leur conception et leurs fonctions sont similaires, il suffit de remplir un seul FEC. Les laboratoires ayant diff&eacute;rentes d&eacute;signations (comme &eacute;l&eacute;mentaire, interm&eacute;diaire, sup&eacute;rieur ou confinement) ou ayant des caract&eacute;ristiques diff&eacute;rentes de conception devraient avoir chacun un FEC. Le personnel de la CCSN peut demander des renseignements suppl&eacute;mentaires lorsque l&rsquo;&eacute;valuation initiale de la conception ou des r&eacute;novations est termin&eacute;e.</p>
<a name="5.0"></a>
<h3><a name="P74_10538" id="P74_10538"></a>5.0 Utilisation du formulaire d&rsquo;&eacute;valuation de la conception (FEC)</h3>  <p>Le FEC contient sept (7) parties&nbsp;: </p>  <table>
<tr>
<td><p>A</p></td>
<td><p>Renseignements g&eacute;n&eacute;raux</p></td>
</tr>
<tr>
<td><p>B</p></td>
<td><p>Finition et accessoires</p></td>
</tr>
<tr>
<td><p>C</p></td>
<td><p>Plomberie</p></td>
</tr>
<tr>
<td><p>D</p></td>
<td><p>S&eacute;curit&eacute;</p></td>
</tr>
<tr>
<td><p>E</p></td>
<td><p>Ventilation</p></td>
</tr>
<tr>
<td><p>F</p></td>
<td><p>Blindage/Contr&ocirc;le de la dose</p></td>
</tr>
<tr>
<td><p>G</p></td>
<td><p>Divers</p></td>
</tr>  </table>  <p>Les directives pr&eacute;sent&eacute;es sur le FEC sont consid&eacute;r&eacute;es comme de bonnes caract&eacute;ristiques de conception pour un laboratoire qui contribuent &agrave; maintenir les doses au niveau le plus bas que l&rsquo;on peut raisonnablement atteindre (ALARA). Les plans pour la conception, la construction ou la r&eacute;novation de tous les laboratoires de substances nucl&eacute;aires et des salles de m&eacute;decine nucl&eacute;aire doivent englober les directives s&rsquo;appliquant au travail qui doit &ecirc;tre ex&eacute;cut&eacute;.</p>  <p>Toutes les d&eacute;rogations propos&eacute;es aux directives doivent &ecirc;tre accompagn&eacute;es de renseignements additionnels afin de d&eacute;montrer, &agrave; la satisfaction du personnel de la CCSN, que les directives ne sont pas applicables en raison de la nature des activit&eacute;s propos&eacute;es ou que d&rsquo;autres mesures seront mises en application pour fournir un degr&eacute; &eacute;quivalent de s&ucirc;ret&eacute;.</p>
<a name="5.1.1"></a>
<h4><a name="P94_11601" id="P94_11601"></a>5.1 Renseignements suppl&eacute;mentaires pour la Partie A du formulaire d&rsquo;&eacute;valuation de la conception</h4>
<h5><a name="P95_11700" id="P95_11700"></a>5.1.1 Classification des salles</h5>  <p>La Partie A du FEC demande des renseignements g&eacute;n&eacute;raux, notamment la classification de la salle o&ugrave; les substances nucl&eacute;aires seront utilis&eacute;es. Les salles o&ugrave; des substances nucl&eacute;aires non scell&eacute;es sont utilis&eacute;es dans les secteurs industriels et les secteurs de recherche m&eacute;dicale et acad&eacute;mique sont class&eacute;es par la CCSN comme des laboratoires de niveau &eacute;l&eacute;mentaire, interm&eacute;diaire, sup&eacute;rieur ou de confinement ou comme salles de m&eacute;decine nucl&eacute;aire, suivant la quantit&eacute; de substances nucl&eacute;aires manipul&eacute;es dans la salle et la nature du travail accompli.</p>  <p>Tous les lieux, toutes les pi&egrave;ces et toutes les enceintes o&ugrave; plus d&rsquo;une quantit&eacute; d&rsquo;exemption<sup><a href="#P98_12401" name="P98_12402" id="P98_12402">1</a></sup> d&rsquo;une substance nucl&eacute;aire non scell&eacute;e est utilis&eacute;e &agrave; un moment donn&eacute; sont class&eacute;s par la CCSN conform&eacute;ment au Tableau&nbsp;1 ci-dessous. Si le lieu, la pi&egrave;ce ou l&rsquo;enceinte n&rsquo;est utilis&eacute; que pour stocker des substances nucl&eacute;aires non scell&eacute;es ou exclusivement pour utiliser ou stocker des substances nucl&eacute;aires scell&eacute;es ou des appareils &agrave; rayonnement, la classification du Tableau&nbsp;1 ne s&rsquo;applique pas.</p>  <p>Conform&eacute;ment aux conditions de permis, les d&eacute;partements et les cliniques de m&eacute;decine nucl&eacute;aire doivent d&eacute;signer comme salle de &laquo; m&eacute;decine nucl&eacute;aire &raquo; toutes les salles qui seront utilis&eacute;es pour pr&eacute;parer les substances nucl&eacute;aires &agrave; administrer &agrave; une personne ou pour administrer une substance nucl&eacute;aire &agrave; une personne.</p>  <p>Par rapport aux d&eacute;partements ou cliniques de m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire, la CCSN classe la pi&egrave;ce ou l&rsquo;enceinte comme &eacute;l&eacute;mentaire, interm&eacute;diaire, sup&eacute;rieur, ou confinement conform&eacute;ment au Tableau&nbsp;1 ci-dessous&nbsp;:</p>  <ol>
<li> toutes les pi&egrave;ces et toutes les enceintes o&ugrave; on loge des animaux trait&eacute;s &agrave; l&#39;aide de plus d&#39;une quantit&eacute; d&#39;exemption d&#39;une substance nucl&eacute;aire et;</li>
<li> toutes les pi&egrave;ces et toutes les enceintes o&ugrave; plus d&rsquo;une quantit&eacute; d&rsquo;exemption d&rsquo;une substance nucl&eacute;aire non scell&eacute;e est utilis&eacute;e &agrave; un moment donn&eacute;.</li>  </ol>  <p className=""><strong><em>Tableau 1 : Classification des salles</em> </strong></p>  <table>
<tr>
<td><p className="">Classification des salles</p></td>
<td><p className="">Description<sup><a href="#P107_13937" name="P107_13938" id="P107_13938">2</a></sup></p></td>
</tr>
<tr>
<td><p>Laboratoire de niveau &eacute;l&eacute;mentaire</p></td>
<td><p>La quantit&eacute; de substances nucl&eacute;aires non scell&eacute;es utilis&eacute;e en m&ecirc;me temps ne d&eacute;passe pas 5 fois sa limite annuelle d&rsquo;incorporation (LAI) correspondante.</p></td>
</tr>
<tr>
<td><p>Laboratoire de niveau interm&eacute;diaire</p></td>
<td><p>La quantit&eacute; de substances nucl&eacute;aires non scell&eacute;es utilis&eacute;e en m&ecirc;me temps ne d&eacute;passe pas 50 fois sa LAI correspondante.</p></td>
</tr>
<tr>
<td><p>Laboratoire de niveau sup&eacute;rieur</p></td>
<td><p>La quantit&eacute; de substances nucl&eacute;aires non scell&eacute;es utilis&eacute;e en m&ecirc;me temps ne d&eacute;passe pas 500 fois sa LAI correspondante.</p></td>
</tr>
<tr>
<td><p>Laboratoire de niveau de confinement</p></td>
<td><p>La quantit&eacute; de substances nucl&eacute;aires non scell&eacute;es utilis&eacute;e en m&ecirc;me temps d&eacute;passe 500 fois sa LAI correspondante.</p></td>
</tr>
<tr>
<td><p>M&eacute;decine nucl&eacute;aire*</p></td>
<td><p>Les substances nucl&eacute;aires sont pr&eacute;par&eacute;es pour ou administr&eacute;es &agrave; une personne.</p></td>
</tr>  </table>  <p>* Dans le cadre de ce guide, l&rsquo;expression &laquo;&nbsp;salle de m&eacute;decine nucl&eacute;aire&nbsp;&raquo; se r&eacute;f&egrave;re strictement &agrave; l&rsquo;administration &agrave; des fins m&eacute;dicales de substances nucl&eacute;aires &agrave; des personnes par injection, inhalation ou ingestion dans le but de faire un diagnostic ou un traitement de maladies et &agrave; des fins de recherche sur les &ecirc;tres humains (cela exclut les rayons&nbsp;X de diagnostic m&eacute;dical ou l&rsquo;utilisation &agrave; des fins m&eacute;dicales de substances nucl&eacute;aires scell&eacute;es pour les traitements de curieth&eacute;rapie ou de t&eacute;l&eacute;th&eacute;rapie).</p>  <p>En ce qui concerne les demandes de permis initiales, toute l&rsquo;information pertinente doit &ecirc;tre soumise, et il est recommand&eacute; d&rsquo;inclure un FEC complet. Une fois le permis d&eacute;livr&eacute;, les laboratoires futurs de niveau &eacute;l&eacute;mentaires n&rsquo;ont pas besoin de soumettre les renseignements demand&eacute;s dans le FEC. Pour toutes les autres classifications de salle, les futures salles additionnelles ou les r&eacute;novations n&eacute;cessitent la soumission de tous les renseignements pertinents, et il est recommand&eacute; d&rsquo;inclure un FEC complet.</p>
<a name="5.2"></a>
<h4><a name="P122_15881" id="P122_15881"></a>5.2 Renseignements suppl&eacute;mentaires pour la Partie F du formulaire d&rsquo;&eacute;valuation de la conception</h4>  <p>Conform&eacute;ment au sous-alin&eacute;a&nbsp;4<em>a</em>)(iii) du <em>R&egrave;glement sur la radioprotection</em>, le concept ALARA doit &ecirc;tre gard&eacute; &agrave; l&rsquo;esprit lors de la conception d&rsquo;installations o&ugrave; des substances nucl&eacute;aires seront utilis&eacute;es. En m&eacute;decine nucl&eacute;aire, cela est particuli&egrave;rement important parce que la source, lorsqu&rsquo;elle est administr&eacute;e &agrave; une personne, ne reste pas &agrave; un endroit particulier. Au moment de la planification et de la conception, l&rsquo;impact des d&eacute;cisions de la conception sur les doses que les personnes pourraient recevoir (sans tenir compte du patient) devrait &ecirc;tre un facteur pr&eacute;dominant. Le document de r&eacute;glementation de la CCSN G-129, r&eacute;v.&nbsp;1&nbsp;: <em>Maintenir les expositions et les doses au &laquo; Niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (ALARA)&nbsp;&raquo;</em>, pr&eacute;cise les doses pour lesquelles la CCSN estime qu&rsquo;une &eacute;valuation ALARA n&rsquo;est pas n&eacute;cessaire en plus de l&rsquo;analyse initiale.</p>  <p>Tel qu&rsquo;indiqu&eacute; &agrave; la case F1 du FEC, les &eacute;valuations des demandes concernant les salles de m&eacute;decine nucl&eacute;aire, les laboratoires de niveau sup&eacute;rieur ou de niveau de confinement ou les pi&egrave;ces ou les encientes associ&eacute;es avec le m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire doivent englober une analyse de l&rsquo;estimation des doses pour les personnes (excluant le patient) dans les secteurs o&ugrave; les substances nucl&eacute;aires non scell&eacute;es seront utilis&eacute;es. Le but de cette section est de fournir des directives sur la fa&ccedil;on de d&eacute;terminer et de d&eacute;montrer que les estimations de la dose de rayonnement sont acceptables avant l&rsquo;amorce des op&eacute;rations.</p>
<a name="5.2.1"></a>
<h5><a name="P125_17552" id="P125_17552"></a>5.2.1 Estimation des doses pour la conception de salles de m&eacute;decine nucl&eacute;aire </h5>  <p>L&rsquo;estimation des doses ne donne qu&rsquo;une repr&eacute;sentation raisonnable des expositions potentielles si les param&egrave;tres sont d&rsquo;abord analys&eacute;s avec soin pour s&rsquo;assurer qu&rsquo;ils caract&eacute;risent correctement la conception et l&rsquo;utilisation de l&rsquo;installation. Le demandeur ou le titulaire de permis doit tenir compte des param&egrave;tres ci-dessous lors du calcul des doses associ&eacute;es &agrave; ses activit&eacute;s pr&eacute;vues&nbsp;:</p>  <ol>
<li> Am&eacute;nagement et construction.</li>
<li> Emplacements o&ugrave; ces substances nucl&eacute;aires seront utilis&eacute;es et o&ugrave; ces activit&eacute;s se d&eacute;rouleront.</li>
<li> Distances s&eacute;parant les substances nucl&eacute;aires ou le patient et les emplacements occup&eacute;s par les autres personnes</li>
<li> L&rsquo;occupation des autres pi&egrave;ces du service de m&eacute;decine nucl&eacute;aire et les emplacements environnants par les personnes autres que le patient (si l&rsquo;installation occupe plus d&rsquo;un &eacute;tage, pensez aux pi&egrave;ces au-dessus et au-dessous).</li>
<li> Les substances nucl&eacute;aires qui seront utilis&eacute;es et les activit&eacute;s (Bq) qui seront utilis&eacute;es dans le cadre des proc&eacute;dures de m&eacute;decine nucl&eacute;aire ex&eacute;cut&eacute;s.</li>
<li> Le nombre maximum de patients &agrave; traiter par acte m&eacute;dical par ann&eacute;e.</li>  </ol>  <p><a name="P133_18767" id="P133_18767"></a><strong>5.2.1.1 Estimation des doses pour la m&eacute;decine nucl&eacute;aire diagnostique conventionnelle&mdash;M&eacute;thode en cinq &eacute;tapes</strong></p>  <p>Les cinq &eacute;tapes ci-dessous de calcul de l&rsquo;estimation des doses ne constituent qu&rsquo;une m&eacute;thode sugg&eacute;r&eacute;e; elles n&rsquo;emp&ecirc;chent pas le demandeur d&rsquo;utiliser d&rsquo;autres approches. Chacune de ces cinq &eacute;tapes est d&eacute;crite plus en d&eacute;tail &agrave; l&rsquo;Annexe&nbsp;B en utilisant un exemple pour illustrer la m&eacute;thode globale.</p>  <p><strong>&Eacute;tape 1)</strong> Obtenir les dessins d&rsquo;architecture ou faire des sch&eacute;mas pr&eacute;cis, &agrave; l&rsquo;&eacute;chelle avec des dimensions de l&rsquo;installation et de ses alentours.</p>  <p>Les dessins doivent montrer les emplacements o&ugrave; des quantit&eacute;s importantes de substances nucl&eacute;aires se trouveront et les emplacements occup&eacute;s par des personnes, autres que le patient, qui pourraient &ecirc;tre expos&eacute;es &agrave; un rayonnement &agrave; la suite de proc&eacute;dures de m&eacute;decine nucl&eacute;aire.</p>  <p><strong>&Eacute;tape 2)</strong> Identifier les principaux emplacements o&ugrave; des substances nucl&eacute;aires doivent &ecirc;tre utilis&eacute;es et le nombre de proc&eacute;dures, ainsi que l&rsquo;activit&eacute; typique pour chaque proc&eacute;dure, pour chacun de ces emplacements.</p>  <p>Les principaux emplacements comprennent les pi&egrave;ces o&ugrave; des substances nucl&eacute;aires seront administr&eacute;es au patient et les principaux emplacements qui seront occup&eacute;s par les patients apr&egrave;s adminstration, comme les salles d&rsquo;injection, les aires d&rsquo;attentes d&eacute;sign&eacute;es, les salles de cam&eacute;ra gamma et les salles o&ugrave; se trouvent les tapis roulants. Pour chaque emplacement et pour chaque type de proc&eacute;dure ex&eacute;cut&eacute;e&nbsp;:</p>  <ol>
<li> D&eacute;terminer les substances nucl&eacute;aires et l&rsquo;activit&eacute; typique (MBq) qui seront utilis&eacute;es pour chaque proc&eacute;dure.</li>
<li> Estimer le nombre approximatif de proc&eacute;dures qui seront ex&eacute;cut&eacute;es chaque ann&eacute;e.</li>  </ol>  <p><strong>&Eacute;tape 3)</strong> Identifier le but, le type d&rsquo;occupation et le facteur d&rsquo;occupation des aires situ&eacute;es &agrave; l&rsquo;int&eacute;rieur, ou &agrave; proximit&eacute; imm&eacute;diate, du service de m&eacute;decine nucl&eacute;aire qui seront occup&eacute;es pendant que les substances nucl&eacute;aires sont utilis&eacute;es.</p>  <p>Pour chacun des secteurs o&ugrave; des personnes (autres que le patient) pourraient recevoir une dose de rayonnement &agrave; la suite des activit&eacute;s de m&eacute;decine nucl&eacute;aire, d&eacute;terminez ce qui suit :</p>  <ol>
<li> L&rsquo;utilisation du secteur (comme le bureau de r&eacute;ception, la salle d&rsquo;attente, la salle de cam&eacute;ra gamma, la salle de toilette, etc.).</li>
<li> Les personnes qui se trouvent normalement dans le secteur, notamment :
<ol style="list-style:lower-alpha">
<li> Les travailleurs du secteur nucl&eacute;aire, comme les technologues de m&eacute;decine nucl&eacute;aire&nbsp;;</li>
<li> Le personnel autre que les travailleurs du secteur nucl&eacute;aire et qui sont expos&eacute;s en raison de leur occupation&nbsp;; et</li>
<li> Le personnel autre que les travailleurs du secteur nucl&eacute;aire qui sont membres du grand public et qui sont expos&eacute;s pour des raisons autres que leur occupation, comme les personnes qui accompagnent les patients.</li>
</ol>
</li>
<li> Le facteur d&rsquo;occupation (T) pour chaque emplacement et le groupe expos&eacute; (c&rsquo;est-&agrave;-dire la fraction du temps total pendant lequel un champ de rayonnement est pr&eacute;sent dans un endroit particulier, et pendant lequel une personne peut se trouver &agrave; cet endroit). Pour obtenir de plus amples renseignements, consultez le National Council on Radiation Protection and Measurements (NCRPM), rapport&nbsp;151&nbsp;: <em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em>.</li>  </ol>  <p>Lors de l&rsquo;&eacute;valuation du facteur T, l&rsquo;un des points importants consiste &agrave; d&eacute;terminer si oui ou non une personne peut se trouver &agrave; l&rsquo;emplacement pr&eacute;sentant de l&rsquo;int&eacute;r&ecirc;t <em>pendant qu&rsquo;il y a un champ de rayonnement &agrave; cet endroit</em>.</p>  <p><strong>&Eacute;tape 4)</strong> Estimation des d&eacute;bits de dose de rayonnement produits &agrave; chaque emplacement qui peut &ecirc;tre occup&eacute;.</p>  <p>Deux m&eacute;thodes sont fondamentalement utilis&eacute;es pour &eacute;valuer les d&eacute;bits de dose de rayonnement auxquels une personne (autre que le patient) sera expos&eacute;e &agrave; la suite des actes typiques de m&eacute;decine nucl&eacute;aire.</p>  <p>La premi&egrave;re m&eacute;thode consiste &agrave; prendre directement des mesures du d&eacute;bit de dose dans les secteurs environnants &agrave; l&rsquo;aide de radiam&egrave;tres suffisamment sensibles et bien &eacute;talonn&eacute;s ou d&rsquo;une autre m&eacute;thode &eacute;quivalente. Le type, le mod&egrave;le, la gamme d&rsquo;&eacute;nergie et la r&eacute;ponse d&rsquo;&eacute;nergie de l&rsquo;appareil de mesure du d&eacute;bit de dose qui sera utilis&eacute; doivent &ecirc;tre fournis. Cette m&eacute;thode est en g&eacute;n&eacute;ral commode lorsque vient le temps d&rsquo;&eacute;valuer un service existant ou lorsque vient le temps de faire une analyse compar&eacute;e pour la conception d&rsquo;une nouvelle pi&egrave;ce ou d&rsquo;un service dont l&rsquo;am&eacute;nagement et la conception sont tr&egrave;s voisins d&rsquo;un emplacement existant. C&rsquo;est particuli&egrave;rement utile lorsqu&rsquo;un demandeur veut analyser l&rsquo;impact des changements propos&eacute;s, comme l&rsquo;augmentation d&rsquo;une charge de travail ou d&rsquo;apporter des changements &agrave; l&rsquo;am&eacute;nagement d&rsquo;une installation.</p>  <p>La deuxi&egrave;me m&eacute;thode est une approche math&eacute;matique qui repose, par exemple, sur les propri&eacute;t&eacute;s physiques connues des substances nucl&eacute;aires utilis&eacute;es, les distances par rapport &agrave; chaque aire occup&eacute;e, les propri&eacute;t&eacute;s de blindage et l&rsquo;&eacute;paisseur des mat&eacute;riaux de construction. Cette m&eacute;thode est en g&eacute;n&eacute;ral utile lors de la conception d&rsquo;une nouvelle pi&egrave;ce ou d&rsquo;un nouveau service. Cette technique est d&eacute;crite en d&eacute;tail dans l&rsquo;exemple pr&eacute;sent&eacute; &agrave; l&rsquo;Annexe&nbsp;B de ce guide.</p>  <p><strong>&Eacute;tape 5)</strong> Extrapolation des d&eacute;bits de dose mesur&eacute;s ou calcul&eacute;s &agrave; chaque emplacement en fonction des doses annuelles re&ccedil;ues par les personnes qui peuvent occuper chaque secteur en se basant sur la charge de travail pr&eacute;vue de l&rsquo;installation et du facteur d&rsquo;occupation.</p>  <p>Les patients occupent typiquement plusieurs emplacements diff&eacute;rents au cours d&rsquo;une proc&eacute;dure de m&eacute;decine nucl&eacute;aire, ce qui peut faire augmenter la dose re&ccedil;ue par une personne qui occupe un seul endroit (par exemple, la dose provenant des patients qui se trouvent dans la salle d&rsquo;injection, dans les salles de cam&eacute;ra et les aires d&rsquo;attente apr&egrave;s l&rsquo;injection peuvent contribuer &agrave; la dose re&ccedil;ue par la r&eacute;ceptionniste). Les personnes expos&eacute;es peuvent occuper plusieurs secteurs diff&eacute;rents au cours d&rsquo;une journ&eacute;e donn&eacute;e, ce qui peut contribuer de fa&ccedil;on appr&eacute;ciable &agrave; la dose de rayonnement totale re&ccedil;ue. Les m&eacute;thodes de calcul des doses annuelles en provenance des d&eacute;bits de dose mesur&eacute;s ou calcul&eacute;s sont &eacute;galement d&eacute;crites en d&eacute;tail &agrave; l&rsquo;Annexe&nbsp;B de ce guide.</p>  <p><a name="P156_25119" id="P156_25119"></a><strong>5.2.1.2 Estimation des doses pour les demandes de tomographie par &eacute;mission de positrons (TEP) </strong></p>  <p>L&rsquo;approche de base pour la conception du blindage pour la tomographie par &eacute;mission de positrons (TEP) est similaire &agrave; l&rsquo;approche utilis&eacute;e pour faire le diagnostic conventionnel de m&eacute;decine nucl&eacute;aire et d&eacute;crite &agrave; la rubrique 5.2.1.1. La principale diff&eacute;rence tient essentiellement dans les d&eacute;tails; par exemple, l&rsquo;&eacute;paisseur du blindage requis, en raison de la production de l&rsquo;&eacute;nergie plus grande de 511&nbsp;keV des gammas d&rsquo;annihilation.</p>  <p>Dans ces cas, l&rsquo;utilisation de plomb ne sera peut-&ecirc;tre pas pratique en raison du poids du plomb et des facteurs touchant la charpente. Le b&eacute;ton, qu&rsquo;il soit sous forme de dalles coul&eacute;es ou de blocs de b&eacute;ton pleins, est en g&eacute;n&eacute;ral une solution plus viable pour r&eacute;soudre les probl&egrave;mes de blindage de TEP. Le choix des mat&eacute;riaux de blindage est laiss&eacute; au titulaire du permis. Les exigences en mati&egrave;re de blindage massif pour la TEP font en sorte qu&rsquo;il est difficile de r&eacute;nover une pi&egrave;ce existante pour y installer un scanner de TEP.</p>  <p>Le p&eacute;riodique <em>Medical Physics </em>(33,&nbsp;1; janvier 2006) fournit des renseignements techniques utiles et des directives sur le blindage et l&rsquo;estimation des doses notamment en ce qui concerne la TEP (voir la r&eacute;f&eacute;rence 21 dans les <em>Documents connexes</em>).</p>  <p><strong>5.2.1.3 Estimation des doses re&ccedil;ues par les patients hospitalis&eacute;s trait&eacute;s &agrave; l&rsquo;iode&nbsp;131</strong></p>  <p>Il n&rsquo;y a que tr&egrave;s peu de diff&eacute;rence entre les estimations des doses de m&eacute;decine nucl&eacute;aire pour le diagnostic conventionnel et les estimations des doses relatives au traitement par m&eacute;decine nucl&eacute;aire des patients hospitalis&eacute;s, comme le traitement du cancer de la glande thyro&iuml;de &agrave; l&rsquo;iode&nbsp;131. Mais le patient est typiquement isol&eacute; dans une pi&egrave;ce de traitement d&eacute;di&eacute;e de l&rsquo;un des services.</p>  <p>L&rsquo;approche de base s&rsquo;appliquant au calcul du blindage des pi&egrave;ces de th&eacute;rapie des patients hospitalis&eacute;s&nbsp;trait&eacute;s &agrave; l&rsquo;iode&nbsp;131 ressemble &agrave; celle s&rsquo;appliquant au diagnostic conventionnel de m&eacute;decine nucl&eacute;aire d&eacute;crit &agrave; la rubrique&nbsp;5.2.1.1. La principale diff&eacute;rence tient au fait que l&rsquo;une des conditions du permis veut que la conception limite le d&eacute;bit de dose dans les aires occup&eacute;es autour de la chambre du patient &agrave; 2,5&nbsp;&micro;Sv/h ou que les autres patients ne re&ccedil;oivent pas une dose d&eacute;passant 500&nbsp;&micro;Sv par s&eacute;jour &agrave; l&rsquo;h&ocirc;pital.</p>
<a name="5.2.2"></a>
<h5><a name="P163_27521" id="P163_27521"></a>5.2.2 Estimation des doses pour les laboratoires de niveau sup&eacute;rieur et de confinement</h5>  <p>Pour les laboratoires de niveau sup&eacute;rieur et de confinement, il faut &eacute;galement tenir compte des doses au moment de la planification. Dans ce cas, le blindage localis&eacute; est utilis&eacute; typiquement pour s&rsquo;assurer que le d&eacute;bit de dose dans les environs est acceptable. Il faut tenir compte des principales sources de rayonnement et des mat&eacute;riaux de blindage et les d&eacute;bits des doses qui en d&eacute;coulent doivent &ecirc;tre fournis (d&rsquo;apr&egrave;s les mesures ou les calculs). Il faut tenir compte du nombre d&rsquo;occupants des aires adjacentes ou &agrave; proximit&eacute; et d&eacute;terminer les doses annuelles qui en d&eacute;coulent. Le but des contr&ocirc;les en mati&egrave;re de proc&eacute;dures et de pratiques de travail doit &ecirc;tre analys&eacute; et expliqu&eacute;.</p>  <p>S&rsquo;il faut avoir des estimations des doses, le personnel de la CCSN pourrait exiger des renseignements suppl&eacute;mentaires au moment de la pr&eacute;sentation de la demande.</p>
<a name="5.2.3"></a>
<h5><a name="P166_28483" id="P166_28483"></a>5.2.3 Estimation des doses pour les laboratoires de substance nucl&eacute;aires en m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire</h5>  <p>Il n&rsquo;y a que tr&egrave;s peu de diff&eacute;rence entre les estimations des doses de m&eacute;decine nucl&eacute;aire pour le diagnostic conventionnel  et pour la m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire. L&rsquo;approche de base s&rsquo;appliquant au calcul du blindage des laboratoires en m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire est la m&ecirc;me que celle s&rsquo;appliquant au diagnostic conventionnel de m&eacute;decine nucl&eacute;aire d&eacute;crit &agrave; la rubrique&nbsp;5.2.1.1.</p>
<a name="#RDsection[13]#"></a>
<h3><a name="P171_29008" id="P171_29008"></a>Glossaire</h3>  <p><strong>ALARA</strong><br />
Principe selon lequel on doit maintenir les doses de rayonnement au &laquo; niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre &raquo;, compte tenu de facteurs sociaux et &eacute;conomiques.</p>  <p><strong>Couche d&rsquo;att&eacute;nuation au dixi&egrave;me/couche de demi-att&eacute;nuation</strong><br />
Couche d&rsquo;att&eacute;nuation au dixi&egrave;me; &eacute;paisseur du mat&eacute;riel qui att&eacute;nue de 90 % le rayonnement gamma incident (c&rsquo;est-&agrave;-dire qui r&eacute;duit le rayonnement gamma incident jusqu&rsquo;&agrave; 10 %). De m&ecirc;me, la couche de demi-att&eacute;nuation est l&rsquo;&eacute;paisseur du mat&eacute;riau qui r&eacute;duit de moiti&eacute; le rayonnement gamma incident (et r&eacute;duit le rayonnement gamma incident &agrave; 50 %).</p>  <p><strong>Facteur d&rsquo;occupation</strong><br />
Fraction du temps total pendant lequel un champ de rayonnement est pr&eacute;sent &agrave; un endroit particulier o&ugrave; se trouve une personne. Par exemple, si une personne passe quatre heures chaque jour &agrave; proximit&eacute; d&rsquo;une salle de cam&eacute;ra qui est occup&eacute;e enti&egrave;rement, pendant chaque heure d&rsquo;une journ&eacute;e de travail de huit heures, le facteur d&rsquo;occupation est alors de 0,5.</p>  <p><strong>FCD</strong><br />
Facteur de conversion de la dose; dose efficace engag&eacute;e en Sv, par activit&eacute; unitaire mesur&eacute;e en Bq, livr&eacute;e par un radionucl&eacute;ide d&rsquo;une forme donn&eacute;e. Le FCD est rattach&eacute; &agrave; la LAI puisque la LAI peut &ecirc;tre mesur&eacute;e en divisant le FCD par 0,02&nbsp;Sv (20&nbsp;mSv).</p>  <p><strong>FEC</strong><br />
Formulaire d&rsquo;&eacute;valuation de la conception; pr&eacute;sent&eacute; comme Annexe&nbsp;C de ce document.</p>  <p><strong>HTO (de l&rsquo;anglais <em>Hydrogenated Tritium Oxide</em>)</strong><br />
Eau triti&eacute;e</p>  <p><strong>HVL (de l&rsquo;anglais <em>Half-Value Layer</em>)</strong><br />
Couche de demi-att&eacute;nuation (voir d&eacute;finition de &laquo;&nbsp;couche d&rsquo;att&eacute;nuation au dixi&egrave;me&nbsp;&raquo;).</p>  <p><strong>Kerma de l&rsquo;air</strong><br />
La valeur du kerma de l&rsquo;air, en gray, o&ugrave; le kerma (K) est d&eacute;fini comme suit :<br />
<img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-1.gif" alt="rd52" width="61" height="43" /><br />
et o&ugrave; <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-2.gif" alt="rd52"  width="29" height="24" /> est la somme des &eacute;nergies cin&eacute;tiques initiales de toutes les particules ionisantes charg&eacute;es lib&eacute;r&eacute;es par des particules ionisantes neutres, dans un volume d&rsquo;air de masse d<em>m</em>.</p>  <p><strong>Laboratoire de substances nucl&eacute;aires</strong><br />
Tout laboratoire o&ugrave; des substances nucl&eacute;aires sont utilis&eacute;es (&eacute;galement appel&eacute; &laquo; laboratoire de radio-isotope&nbsp;&raquo;).</p>  <p><strong>Limite annuelle d&rsquo;incorporation (LAI) </strong><br />
Activit&eacute;, mesur&eacute;e en Becquerels, d&rsquo;un radionucl&eacute;ide qui donnera une dose efficace de 20&nbsp;mSv pendant une p&eacute;riode de 50 ans apr&egrave;s l&rsquo;introduction du radionucl&eacute;ide dans le corps d&rsquo;une personne de 18 ans ou plus ou pendant la p&eacute;riode qui commence au moment o&ugrave; le radionucl&eacute;ide est pris et qui prend fin &agrave; 70 ans apr&egrave;s son entr&eacute;e dans le corps d&rsquo;une personne de moins de 18&nbsp;ans.</p>  <p><strong>OBT (de l&rsquo;anglais <em>Organically Bound Tritium</em>)</strong><br />
Tritium li&eacute; &agrave; la mati&egrave;re organique.</p>  <p><strong>Salle de m&eacute;decine nucl&eacute;aire</strong><br />
Toute salle o&ugrave; des substances nucl&eacute;aires non scell&eacute;es sont pr&eacute;par&eacute;es pour ou administr&eacute;es &agrave; une personne.</p>  <p><strong>TEP</strong><br />
Tomographie par &eacute;mission de positrons; m&eacute;thode d&rsquo;imagerie qui d&eacute;c&egrave;le le rayonnement gamma qui est &eacute;mis lorsque les positrons provenant d&rsquo;une source (comme le fluor&nbsp;18) entrent en collision avec les &eacute;lectrons contenus dans les tissus.</p>  <p><strong>Travailleur du secteur nucl&eacute;aire (TSN)</strong><br />
Personne qui, du fait de sa profession ou de son occupation et des conditions dans lesquelles elle exerce ses activit&eacute;s, si celles-ci sont li&eacute;es &agrave; une substance ou une installation nucl&eacute;aire, risque vraisemblablement de recevoir une dose de rayonnement sup&eacute;rieure &agrave; la limite r&eacute;glementaire fix&eacute;e pour la population en g&eacute;n&eacute;ral.</p>
<a name="#RDsection[14]#"></a>
<h3><a name="P204_32309" id="P204_32309"></a>Documents connexes</h3>  <p>Les documents suivants contiennent des renseignements additionnels qui pourraient pr&eacute;senter de l&rsquo;int&eacute;r&ecirc;t pour les personnes participant &agrave; la conception, &agrave; la construction ou &agrave; la r&eacute;novation des laboratoires de substances nucl&eacute;aires et des salles de m&eacute;decine nucl&eacute;aires&nbsp;:</p>  <ol>
<li> American National Standards Institute. ANSI&nbsp;Z9.5 <em>Laboratory Ventilation Standard</em>. ANSI, 2002.</li>
<li> American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE). <em>Method of Testing Performance of Laboratory Fume Hoods</em>. ANSI/ASHRAE 110-1995. </li>
<li> ASHRAE. <em>ASHRAE Handbook</em>. ASHRAE, 2003.</li>
<li> ASTM International. C&nbsp;1533-02 <em>Standard Guide for General Design Considerations for Hot Cell Equipment</em>. ASTM International, 2007.</li>
<li> ASTM International. ASTM C&nbsp;1554-03 <em>Standard Guide for Materials Handling Equipment for Hot Cells</em>.</li>
<li> ASTM International. ASTM C&nbsp;1572-04 <em>Standard Guide for Dry Lead Glass and Oil-Filled Lead Glass Radiation Shielding Window Components for Remotely Operated Facilities</em>.</li>
<li> ASTM International. ASTM C&nbsp;1615-05 <em>Standard Guide for Mechanical Drive Systems for Remote Operation in Hot Cell Facilities</em>.</li>
<li> ASTM International. ASTM C&nbsp;1217-00 <em>Standard Guide for Design of Equipment for Processing Nuclear and Radioactive Materials</em>. ASTM, 2006.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire. R-52 r&eacute;v.&nbsp;1 <em>Guide de conception pour les laboratoires de radio-isotopes &eacute;l&eacute;mentaires et interm&eacute;diaires</em>. Ottawa, 1991. (Nota : remplac&eacute; par le pr&eacute;sent document).</li>
<li> Association canadienne de normalisation. CSA Z316.5-04&mdash;<em>Fume Hoods and Associated Exhaust Systems</em>. CSA, 2004.</li>
<li> Diberardinis, J., Baum, J., First, M., Gatwood, G., Seth A. <em>Guidelines for Laboratry Design; Health and Safety Considerations</em>. John Wiley and Sons Inc. 2001.</li>
<li> Comit&eacute; europ&eacute;en de normalisation. BS&nbsp;EN&nbsp;12469:2000 <em>Biotechnologie-Crit&egrave;res de rendement pour les enceintes de s&eacute;curit&eacute; microbiologique</em>. 2000. </li>
<li> Commission Internationale de Protection Radiologique. CIPR&nbsp;68: <em>Dose coefficients for intakes of radionuclides by workers</em>.</li>
<li> Organisation internationale de normalisation (ISO). ISO&nbsp;10648-1:1997 <em>Enceintes de confinement&ndash; Partie&nbsp;1 : Principes de conception</em>. ISO, 1997.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;10648&nbsp;2:1994 <em>Enceintes de confinement&ndash; Partie&nbsp;2 : Classification selon leur &eacute;tanch&eacute;it&eacute; et m&eacute;thodes de v&eacute;rification connexes</em>. ISO, 1994.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;17873:2004 <em>Installations nucl&eacute;aires&mdash;Crit&egrave;res pour la conception et l&rsquo;exploitation des syst&egrave;mes de ventilation des installations nucl&eacute;aires autres que les r&eacute;acteurs nucl&eacute;aires</em>. ISO, 2004.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;17874-1:2004 <em>Dispositifs de manutention &agrave; distance des mati&egrave;res radioactives&mdash;Partie&nbsp;1 :&nbsp;Exigences g&eacute;n&eacute;rales</em>. ISO, 2004.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;17874-2:2004 <em>Dispositifs de manutention &agrave; distance des mati&egrave;res radioactives&mdash;Partie&nbsp;2 :&nbsp;Manipulateurs m&eacute;caniques ma&icirc;tres et asservis</em>. ISO, 2004.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;17874-4:2006 <em>Dispositifs de manutention &agrave; distance des mati&egrave;res radioactives&mdash;Partie&nbsp;4 :&nbsp;Manipulateurs &eacute;lectriques</em>. ISO, 2006.</li>
<li> Organisation internationale de normalisation. ISO&nbsp;17874-5:2004 <em>Dispositifs de manutention &agrave; distance des mati&egrave;res radioactives&mdash;Partie&nbsp;5 :&nbsp;Pinces de manutention &agrave; distance</em>. ISO, 2004.</li>
<li> Madsen, Mark, et al. <em>AAPM Task Group 108: TEP/CT Shielding Requirements</em>. Medical Physics&nbsp;33, 1 (janvier 2006): 4-15.</li>
<li> National Council on Radiation Protection and Measurements (NCRPM). Rapport NCRPM n<sup>o</sup>&nbsp;151&nbsp;: <em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em>.</li>
<li> NCRPM. NCRPM Rapport n<sup>o</sup>&nbsp;124 : <em>Sources and Magnitude of Occupational and Public Exposures from Nuclear Medicine Procedures</em>. NCRPM, 1996.</li>
<li> National Institutes of Health. <em>Laboratory Safety Monograph: A Supplement to the NIH Guidelines for Recombinant DNA Research</em>. U.S. Department of Health, Education and Welfare, 1978.</li>
<li> Occupational Health and Safety Administration. <em>National Research Council Recommendations Concerning Chemical Hygiene in Laboratories (Non-Mandatory)</em>. 1910.1450 Annexe&nbsp;A.</li>
<li> Princeton University. <em>Laboratory Safety Manual</em>.<br />
http:\\web.princeton.edu/sites/ehs/labsafetymanual</li>
<li> Agence de la sant&eacute; publique du Canada. <em>Lignes directrices en mati&egrave;re de bios&eacute;curit&eacute; en laboratoire</em>, 3e&nbsp;&Eacute;dition 2004. <br />
http://www.phac-aspc.gc.ca/ols-bsl/lbg-ldmbl/index.html</li>
<li> RWDI Consulting Engineers and Scientists. TECHNOTES, Issue No&nbsp;16, <em>Air Intake Placement for Laboratories&mdash;A General Overview</em>.</li>
<li> Stanford University. <em>Stanford Laboratory Standard and Design Guide: Section&nbsp;1 General Requirements for Stanford University Laboratories</em>. http://www.stanford.edu/dept/EHS/prod/mainrencon/Labdesign/Section_1-0_General_Requirements.pdf</li>
<li> U.S National Science Foundation. NSF/ANSI&nbsp;49-2004A <em>Class&nbsp;II (laminar flow) Biohazard Cabinetry</em>. NSF 2004.</li>
<li> Organisation mondiale de la sant&eacute;. <em>Manuel de bios&eacute;curit&eacute; des laboratoires, </em>2e &eacute;dition. OMS, 1993.</li>  </ol>
<a name="#RDsection[15]#"></a>
<h3>Annexe A <a name="P241_37412" id="P241_37412"></a>Facteurs de conversion de la dose (FCD) et limites annuelles d&rsquo;incorporation (LAI) pour des substances nucl&eacute;aires communes</h3>  <p className=""><strong><em>Tableau A1 : Valeurs des FCD et des LAI pour des substances nucl&eacute;aires communes<br />
[Source : FCD tir&eacute; de  CIPR-68[13]; LAI tir&eacute;e des FCD (LAI&nbsp;=&nbsp;20&nbsp;mSv/FCD)]</em></strong> </p>  <table>
<tr>
<td><p className=""><strong>Substances nucl&eacute;aires</strong></p></td>
<td><p className=""><strong>FCD (Sv/Bq)<br />
Inhalation</strong></p></td>
<td><p className=""><strong>LAI (Bq)<br />
Inhalation</strong></p></td>
<td><p className=""><strong>FCD (Sv/Bq)<br />
Ingestion</strong></p></td>
<td><p className=""><strong>LAI (Bq)<br />
Ingestion</strong></p></td>
</tr>
<tr>
<td><p>Actinium 227 (<sup>227</sup>Ac)</p></td>
<td><p className="">6,3 x 10<sup>-04</sup></p></td>
<td><p className="">3,2 x 10<sup>01</sup></p></td>
<td><p className="">1,1 x 10<sup>-06</sup></p></td>
<td><p className="">1,8 x 10<sup>04</sup></p></td>
</tr>
<tr>
<td><p>Antimoine 124 (<sup>124</sup>Sb)</p></td>
<td><p className="">4,7 x 10<sup>-09</sup></p></td>
<td><p className="">4,3 x 10<sup>06</sup></p></td>
<td><p className="">2,5 x 10<sup>-09</sup></p></td>
<td><p className="">8,0 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Arsenic 74 (<sup>74</sup>As)</p></td>
<td><p className="">1,8 x 10<sup>-09</sup></p></td>
<td><p className="">1,1 x 10<sup>07</sup></p></td>
<td><p className="">1,3 x 10<sup>-09</sup></p></td>
<td><p className="">1,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Baryum 140 (<sup>140</sup>Ba)</p></td>
<td><p className="">1,6 x 10<sup>-09</sup></p></td>
<td><p className="">1,3 x 10<sup>07</sup></p></td>
<td><p className="">2,5 x 10<sup>-09</sup></p></td>
<td><p className="">8,0 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>B&eacute;ryllium 7 (<sup>7</sup>Be)</p></td>
<td><p className="">4,6 x 10<sup>-11</sup></p></td>
<td><p className="">4,3 x 10<sup>08</sup></p></td>
<td><p className="">2,8 x 10<sup>-11</sup></p></td>
<td><p className="">7,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Bismuth 207 (<sup>207</sup>Bi)</p></td>
<td><p className="">3,2 x 10<sup>-09</sup></p></td>
<td><p className="">6,3 x 10<sup>06</sup></p></td>
<td><p className="">1,3 x 10<sup>-09</sup></p></td>
<td><p className="">1,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Bismuth 210 (<sup>210</sup>Bi)</p></td>
<td><p className="">6,0 x 10<sup>-08</sup></p></td>
<td><p className="">3,3 x 10<sup>05</sup></p></td>
<td><p className="">1,3 x 10<sup>-09</sup></p></td>
<td><p className="">1,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Bromine 82 (<sup>82</sup>Br)</p></td>
<td><p className="">8,8 x 10<sup>-10</sup></p></td>
<td><p className="">2,3 x 10<sup>07</sup></p></td>
<td><p className="">5,4 x 10<sup>-10</sup></p></td>
<td><p className="">3,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Cadmium 109 (<sup>109</sup>Cd)</p></td>
<td><p className="">9,6 x 10<sup>-09</sup></p></td>
<td><p className="">2,1 x 10<sup>06</sup></p></td>
<td><p className="">2,0 x 10<sup>-09</sup></p></td>
<td><p className="">1,0 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Calcium 45 (<sup>45</sup>Ca)</p></td>
<td><p className="">2,3 x 10<sup>-09</sup></p></td>
<td><p className="">8,7 x 10<sup>06</sup></p></td>
<td><p className="">7,6 x 10<sup>-10</sup></p></td>
<td><p className="">2,6 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Carbone 14&nbsp;* (<sup>14</sup>C)</p></td>
<td><p className="">2,0 x 10<sup>-11</sup></p></td>
<td><p className="">1,0 x 10<sup>09</sup></p></td>
<td><p className="">5,8 x 10<sup>-10</sup></p></td>
<td><p className="">3,4 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>C&eacute;rium 144 (<sup>144</sup>Ce)</p></td>
<td><p className="">2,9 x 10<sup>-08</sup></p></td>
<td><p className="">6,9 x 10<sup>05</sup></p></td>
<td><p className="">5,2 x 10<sup>-09</sup></p></td>
<td><p className="">3,8 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>C&eacute;sium 134 (<sup>134</sup>Cs)</p></td>
<td><p className="">9,6 x 10<sup>-09</sup></p></td>
<td><p className="">2,1 x 10<sup>06</sup></p></td>
<td><p className="">1,9 x 10<sup>-08</sup></p></td>
<td><p className="">1,1 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>C&eacute;sium 137 (<sup>137</sup>Cs)</p></td>
<td><p className="">6,7 x 10<sup>-09</sup></p></td>
<td><p className="">3,0 x 10<sup>06</sup></p></td>
<td><p className="">1,3 x 10<sup>-08</sup></p></td>
<td><p className="">1,5 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Chlore 36 (<sup>36</sup>Cl)</p></td>
<td><p className="">5,1 x 10<sup>-09</sup></p></td>
<td><p className="">3,9 x 10<sup>06</sup></p></td>
<td><p className="">9,3 x 10<sup>-10</sup></p></td>
<td><p className="">2,2 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Chrome 51 (<sup>51</sup>Cr)</p></td>
<td><p className="">3,6 x 10<sup>-11</sup></p></td>
<td><p className="">5,6 x 10<sup>08</sup></p></td>
<td><p className="">3,8 x 10<sup>-11</sup></p></td>
<td><p className="">5,3 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Cobalt 57 (<sup>57</sup>Co)</p></td>
<td><p className="">6,0 x 10<sup>-10</sup></p></td>
<td><p className="">3,3 x 10<sup>07</sup></p></td>
<td><p className="">2,1 x 10<sup>-10</sup></p></td>
<td><p className="">9,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Cobalt 58 (<sup>58</sup>Co)</p></td>
<td><p className="">1,7 x 10<sup>-09</sup></p></td>
<td><p className="">1,2 x 10<sup>07</sup></p></td>
<td><p className="">7,4 x 10<sup>-10</sup></p></td>
<td><p className="">2,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Cobalt 60 (<sup>60</sup>Co)</p></td>
<td><p className="">1,7 x 10<sup>-08</sup></p></td>
<td><p className="">1,2 x 10<sup>06</sup></p></td>
<td><p className="">3,4 x 10<sup>-09</sup></p></td>
<td><p className="">5,9 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Cuivre 64 (<sup>64</sup>Cu)</p></td>
<td><p className="">1,5 x 10<sup>-10</sup></p></td>
<td><p className="">1,3 x 10<sup>08</sup></p></td>
<td><p className="">1,2 x 10<sup>-10</sup></p></td>
<td><p className="">1,7 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Cuivre 67 (<sup>67</sup>Cu)</p></td>
<td><p className="">5,8 x 10<sup>-10</sup></p></td>
<td><p className="">3,4 x 10<sup>07</sup></p></td>
<td><p className="">3,4 x 10<sup>-10</sup></p></td>
<td><p className="">5,9 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Fluor 18 (<sup>18</sup>F)</p></td>
<td><p className="">9,3 x 10<sup>-11</sup></p></td>
<td><p className="">2,2 x 10<sup>08</sup></p></td>
<td><p className="">4,9 x 10<sup>-11</sup></p></td>
<td><p className="">4,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Gallium 67 (<sup>67</sup>Ga)</p></td>
<td><p className="">2,8 x 10<sup>-10</sup></p></td>
<td><p className="">7,1 x 10<sup>07</sup></p></td>
<td><p className="">1,9 x 10<sup>-10</sup></p></td>
<td><p className="">1,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Or 198 (<sup>198</sup>Au)</p></td>
<td><p className="">1,1 x 10<sup>-09</sup></p></td>
<td><p className="">1,8 x 10<sup>07</sup></p></td>
<td><p className="">1,0 x 10<sup>-09</sup></p></td>
<td><p className="">2,0 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Hydrog&egrave;ne 3 (HTO)&nbsp;** (<sup>3</sup>H)</p></td>
<td><p className="">2,0 x 10<sup>-11</sup></p></td>
<td><p className="">1,0 x 10<sup>09</sup></p></td>
<td><p className="">2,0 x 10<sup>-11</sup></p></td>
<td><p className="">1,0 x 10<sup>09</sup></p></td>
</tr>
<tr>
<td><p>Hydrog&egrave;ne 3 (TLFO)&nbsp;&dagger; (<sup>3</sup>H)</p></td>
<td><p className="">4,1 x 10<sup>-11</sup></p></td>
<td><p className="">4,9 x 10<sup>08</sup></p></td>
<td><p className="">4,2 x 10<sup>-11</sup></p></td>
<td><p className="">4,8 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Indium 111 (<sup>111</sup>In)</p></td>
<td><p className="">3,1 x 10<sup>-10</sup></p></td>
<td><p className="">6,5 x 10<sup>07</sup></p></td>
<td><p className="">2,9 x 10<sup>-10</sup></p></td>
<td><p className="">6,9 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Indium 113m (<sup>113m</sup>In)</p></td>
<td><p className="">3,2 x 10<sup>-11</sup></p></td>
<td><p className="">6,3 x 10<sup>08</sup></p></td>
<td><p className="">2,8 x 10<sup>-11</sup></p></td>
<td><p className="">7,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Indium 114m (<sup>114m</sup>In)</p></td>
<td><p className="">1,1 x 10<sup>-08</sup></p></td>
<td><p className="">1,8 x 10<sup>06</sup></p></td>
<td><p className="">4,1 x 10<sup>-09</sup></p></td>
<td><p className="">4,9 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Iode 123 (<sup>123</sup>I)</p></td>
<td><p className="">2,1 x 10<sup>-10</sup></p></td>
<td><p className="">9,5 x 10<sup>07</sup></p></td>
<td><p className="">2,1 x 10<sup>-10</sup></p></td>
<td><p className="">9,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Iode 125 (<sup>125</sup>I)</p></td>
<td><p className="">1,4 x 10<sup>-08</sup></p></td>
<td><p className="">1,4 x 10<sup>06</sup></p></td>
<td><p className="">1,5 x 10<sup>-08</sup></p></td>
<td><p className="">1,3 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Iode 131 (<sup>131</sup>I)</p></td>
<td><p className="">2,0 x 10<sup>-08</sup></p></td>
<td><p className="">1,0 x 10<sup>06</sup></p></td>
<td><p className="">2,2 x 10<sup>-08</sup></p></td>
<td><p className="">9,1 x 10<sup>05</sup></p></td>
</tr>
<tr>
<td><p>Iode 132 (<sup>132</sup>I)</p></td>
<td><p className="">3,1 x 10<sup>-10</sup></p></td>
<td><p className="">6,5 x 10<sup>07</sup></p></td>
<td><p className="">2,9 x 10<sup>-10</sup></p></td>
<td><p className="">6,9 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Iridium 192 (<sup>192</sup>Ir)</p></td>
<td><p className="">4,9 x10<sup>-09</sup></p></td>
<td><p className="">4,1 x 10<sup>06</sup></p></td>
<td><p className="">1,4 x 10<sup>-09</sup></p></td>
<td><p className="">1,4 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Fer 55 (<sup>55</sup>Fe)</p></td>
<td><p className="">9,2 x 10<sup>-10</sup></p></td>
<td><p className="">2,2 x 10<sup>07</sup></p></td>
<td><p className="">3,3 x 10<sup>-10</sup></p></td>
<td><p className="">6,1 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Fer 59 (<sup>59</sup>Fe)</p></td>
<td><p className="">3,2 x 10<sup>-09</sup></p></td>
<td><p className="">6,3 x 10<sup>06</sup></p></td>
<td><p className="">1,8 x 10<sup>-09</sup></p></td>
<td><p className="">1,1 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Krypton 85 (gaz) Bq/m<sup>3</sup>&nbsp;&Dagger; (<sup>85</sup>Kr)</p></td>
<td><p className="">2,2 x 10<sup>-11</sup></p></td>
<td><p className="">9,1 x 10<sup>08</sup></p></td>
<td><p className="">---</p></td>
<td><p className="">---</p></td>
</tr>
<tr>
<td><p>Lanthane 140 (<sup>140</sup>La)</p></td>
<td><p className="">1,5 x 10<sup>-09</sup></p></td>
<td><p className="">1,3 x 10<sup>07</sup></p></td>
<td><p className="">2,0 x 10<sup>-09</sup></p></td>
<td><p className="">1,0 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Plomb 210 (<sup>210</sup>Pb)</p></td>
<td><p className="">1,1 x 10<sup>-06</sup></p></td>
<td><p className="">1,8 x 10<sup>04</sup></p></td>
<td><p className="">6,8 x 10<sup>-07</sup></p></td>
<td><p className="">2,9 x 10<sup>04</sup></p></td>
</tr>
<tr>
<td><p>Mangan&egrave;se 54 (<sup>54</sup>Mn)</p></td>
<td><p className="">1,2 x 10<sup>-09</sup></p></td>
<td><p className="">1,7 x 10<sup>07</sup></p></td>
<td><p className="">7,1 x 10<sup>-10</sup></p></td>
<td><p className="">2,8 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Mangan&egrave;se 56 (<sup>56</sup>Mn)</p></td>
<td><p className="">2,0 x 10<sup>-10</sup></p></td>
<td><p className="">1,0 x 10<sup>08</sup></p></td>
<td><p className="">2,5 x 10<sup>-10</sup></p></td>
<td><p className="">8,0 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Mercure 197 (organique) (<sup>197</sup>Hg)</p></td>
<td><p className="">8,5 x 10<sup>-11</sup></p></td>
<td><p className="">2,4 x 10<sup>08</sup></p></td>
<td><p className="">1,7 x 10<sup>-10</sup></p></td>
<td><p className="">1,2 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Mercure 197 (inorganique) (<sup>197</sup>Hg)</p></td>
<td><p className="">2,8 x 10<sup>-10</sup></p></td>
<td><p className="">7,1 x 10<sup>07</sup></p></td>
<td><p className="">2,3 x 10<sup>-10</sup></p></td>
<td><p className="">8,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Mercure 203 (organique) (<sup>203</sup>Hg)</p></td>
<td><p className="">7,5 x 10<sup>-10</sup></p></td>
<td><p className="">2,7 x 10<sup>07</sup></p></td>
<td><p className="">1,9 x 10<sup>-09</sup></p></td>
<td><p className="">1,1 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Mercure 203 (inorganique) (<sup>203</sup>Hg)</p></td>
<td><p className="">1,9 x 10<sup>-09</sup></p></td>
<td><p className="">1,1 x 10<sup>07</sup></p></td>
<td><p className="">5,4 x 10<sup>-10</sup></p></td>
<td><p className="">3,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Molybd&egrave;ne 99 (<sup>99</sup>Mo)</p></td>
<td><p className="">1,1 x 10<sup>-09</sup></p></td>
<td><p className="">1,8 x 10<sup>07</sup></p></td>
<td><p className="">1,2 x 10<sup>-09</sup></p></td>
<td><p className="">1,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Nickel 63 (<sup>63</sup>Ni)</p></td>
<td><p className="">5,2 x 10<sup>-10</sup></p></td>
<td><p className="">3,8 x 10<sup>07</sup></p></td>
<td><p className="">1,5 x 10<sup>-10</sup></p></td>
<td><p className="">1,3 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Phosphore 32 (<sup>32</sup>P)</p></td>
<td><p className="">2,9 x 10<sup>-09</sup></p></td>
<td><p className="">6,9 x 10<sup>06</sup></p></td>
<td><p className="">2,4 x 10<sup>-09</sup></p></td>
<td><p className="">8,3 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Polonium 210 (<sup>210</sup>Po)</p></td>
<td><p className="">2,2 x 10<sup>-06</sup></p></td>
<td><p className="">9,1 x 10<sup>03</sup></p></td>
<td><p className="">2,4 x 10<sup>-07</sup></p></td>
<td><p className="">8,3 x 10<sup>04</sup></p></td>
</tr>
<tr>
<td><p>Potassium 42 (<sup>42</sup>K)</p></td>
<td><p className="">2,0 x 10<sup>-10</sup></p></td>
<td><p className="">1,0 x 10<sup>08</sup></p></td>
<td><p className="">4,3 x 10<sup>-10</sup></p></td>
<td><p className="">4,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Prom&eacute;thium 147 (<sup>147</sup>Pm)</p></td>
<td><p className="">3,5 x 10<sup>-09</sup></p></td>
<td><p className="">5,7 x 10<sup>06</sup></p></td>
<td><p className="">2,6 x 10<sup>-10</sup></p></td>
<td><p className="">7,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Radium 226 (<sup>226</sup>Ra)</p></td>
<td><p className="">2,2 x 10<sup>-06</sup></p></td>
<td><p className="">9,1 x 10<sup>03</sup></p></td>
<td><p className="">2,8 x 10<sup>-07</sup></p></td>
<td><p className="">7,1 x 10<sup>04</sup></p></td>
</tr>
<tr>
<td><p>Rubidium 86 (<sup>86</sup>Rb)</p></td>
<td><p className="">1,3 x 10<sup>-09</sup></p></td>
<td><p className="">1,5 x 10<sup>07</sup></p></td>
<td><p className="">2,8 x 10<sup>-09</sup></p></td>
<td><p className="">7,1 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Scandium 46 (<sup>46</sup>Sc)</p></td>
<td><p className="">4,8 x 10<sup>-09</sup></p></td>
<td><p className="">4,2 x 10<sup>06</sup></p></td>
<td><p className="">1,5 x 10<sup>-09</sup></p></td>
<td><p className="">1,3 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>S&eacute;l&eacute;nium 75 (<sup>75</sup>Se)</p></td>
<td><p className="">1,7 x 10<sup>-09</sup></p></td>
<td><p className="">1,2 x 10<sup>07</sup></p></td>
<td><p className="">2,6 x 10<sup>-09</sup></p></td>
<td><p className="">7,7 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Argent 110m (<sup>110m</sup>Ag)</p></td>
<td><p className="">7,3 x 10<sup>-09</sup></p></td>
<td><p className="">2,7 x 10<sup>06</sup></p></td>
<td><p className="">2,8 x 10<sup>-09</sup></p></td>
<td><p className="">7,1 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Sodium 22 (<sup>22</sup>Na)</p></td>
<td><p className="">2,0 x 10<sup>-09</sup></p></td>
<td><p className="">1,0 x 10<sup>07</sup></p></td>
<td><p className="">3,2 x 10<sup>-09</sup></p></td>
<td><p className="">6,3 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Sodium 24 (<sup>24</sup>Na)</p></td>
<td><p className="">5,3 x 10<sup>-10</sup></p></td>
<td><p className="">3,8 x 10<sup>07</sup></p></td>
<td><p className="">4,3 x 10<sup>-10</sup></p></td>
<td><p className="">4,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Strontium 85 (<sup>85</sup>Sr)</p></td>
<td><p className="">6,4 x 10<sup>-10</sup></p></td>
<td><p className="">3,1 x 10<sup>07</sup></p></td>
<td><p className="">5,6 x 10<sup>-10</sup></p></td>
<td><p className="">3,6 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Strontium 89 (<sup>89</sup>Sr)</p></td>
<td><p className="">5,6 x 10<sup>-09</sup></p></td>
<td><p className="">3,6 x 10<sup>06</sup></p></td>
<td><p className="">2,6 x 10<sup>-09</sup></p></td>
<td><p className="">7,7 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Strontium 90 (<sup>90</sup>Sr)</p></td>
<td><p className="">7,7 x 10<sup>-08</sup></p></td>
<td><p className="">2,6 x 10<sup>05</sup></p></td>
<td><p className="">2,8 x 10<sup>-08</sup></p></td>
<td><p className="">7,1 x 10<sup>05</sup></p></td>
</tr>
<tr>
<td><p>Soufre 35 (inorganique) (<sup>35</sup>S)</p></td>
<td><p className="">1,1 x 10<sup>-09</sup></p></td>
<td><p className="">1,8 x 10<sup>07</sup></p></td>
<td><p className="">1,9 x 10<sup>-10</sup></p></td>
<td><p className="">1,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Soufre 35 (organique v) (<sup>35</sup>S)</p></td>
<td><p className="">1,2 x 10<sup>-10</sup></p></td>
<td><p className="">1,7 x 10<sup>08</sup></p></td>
<td><p className="">7,7 x 10<sup>-10</sup></p></td>
<td><p className="">2,6 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Techn&eacute;tium 99m (<sup>99m</sup>Tc)</p></td>
<td><p className="">2,9 x 10<sup>-11</sup></p></td>
<td><p className="">6,9 x 10<sup>08</sup></p></td>
<td><p className="">2,2 x 10<sup>-11</sup></p></td>
<td><p className="">9,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Techn&eacute;tium 99 (<sup>99</sup>Tc)</p></td>
<td><p className="">3,2 x 10<sup>-09</sup></p></td>
<td><p className="">6,3 x 10<sup>06</sup></p></td>
<td><p className="">7,8 x 10<sup>-10</sup></p></td>
<td><p className="">2,6 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Thallium 201 (<sup>201</sup>Tl)</p></td>
<td><p className="">7,6 x 10<sup>-11</sup></p></td>
<td><p className="">2,6 x 10<sup>08</sup></p></td>
<td><p className="">9,5 x 10<sup>-11</sup></p></td>
<td><p className="">2,1 x 10<sup>08</sup></p></td>
</tr>
<tr>
<td><p>Thallium 204 (<sup>204</sup>Tl)</p></td>
<td><p className="">6,2 x 10<sup>-10</sup></p></td>
<td><p className="">3,2 x 10<sup>07</sup></p></td>
<td><p className="">1,3 x 10<sup>-09</sup></p></td>
<td><p className="">1,5 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>&Eacute;tain 113 (<sup>113</sup>Sn)</p></td>
<td><p className="">1,9 x 10<sup>-09</sup></p></td>
<td><p className="">1,1 x 10<sup>07</sup></p></td>
<td><p className="">7,3 x 10<sup>-10</sup></p></td>
<td><p className="">2,7 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>X&eacute;non 133 (gaz) Bq/cm<sup>3</sup>&nbsp;&Dagger; (<sup>133</sup>Xe)</p></td>
<td><p className="">1,2 x 10<sup>-10</sup></p></td>
<td><p className="">6,7 x 10<sup>05</sup></p></td>
<td><p className="">---</p></td>
<td><p className="">---</p></td>
</tr>
<tr>
<td><p>X&eacute;non 135 (gaz) Bq/cm<sup>3</sup>&nbsp;&Dagger; (<sup>135</sup>Xe)</p></td>
<td><p className="">9,6 x 10<sup>-10</sup></p></td>
<td><p className="">8,3 x 10<sup>04</sup></p></td>
<td><p className="">---</p></td>
<td><p className="">---</p></td>
</tr>
<tr>
<td><p>Yttrium 87 (<sup>87</sup>Y)</p></td>
<td><p className="">5,3 x 10<sup>-10</sup></p></td>
<td><p className="">3,8 x 10<sup>07</sup></p></td>
<td><p className="">5,5 x 10<sup>-10</sup></p></td>
<td><p className="">3,6 x 10<sup>07</sup></p></td>
</tr>
<tr>
<td><p>Yttrium 90 (<sup>90</sup>Y)</p></td>
<td><p className="">1,7 x 10<sup>-09</sup></p></td>
<td><p className="">1,2 x 10<sup>07</sup></p></td>
<td><p className="">2,7 x 10<sup>-09</sup></p></td>
<td><p className="">7,4 x 10<sup>06</sup></p></td>
</tr>
<tr>
<td><p>Zinc 65 (<sup>65</sup>Zn)</p></td>
<td><p className="">2,8 x 10<sup>-09</sup></p></td>
<td><p className="">7,1 x 10<sup>06</sup></p></td>
<td><p className="">3,9 x 10<sup>-09</sup></p></td>
<td><p className="">5,1 x 10<sup>06</sup></p></td>
</tr>  </table>  <p>&nbsp;&nbsp;* Les valeurs du CO<sub>2</sub> sont tir&eacute;es des donn&eacute;es de la CIPR, publi&eacute;es entre 1955 et 1970. Les nouvelles donn&eacute;es (1990-2000) et la r&eacute;vision du mod&egrave;le (2004) recommandent des coefficients plus &eacute;lev&eacute;s de la dose. Coefficient r&eacute;vis&eacute; <sup>14</sup>de la dose de CO<sub>2</sub> de Leggett,&nbsp;R.W., Radiation Protection Dosimetry Vol.&nbsp;208, pp.&nbsp;203-213 (2004).</p>  <p>** Eau triti&eacute;e (HTO)<br />
FCD de la CIPR 1,8E-11; la valeur utilis&eacute;e ici provient de Sant&eacute; Canada 83-EHD-87 (1983) et RSP-182B (2004).</p>  <p>&nbsp;&nbsp;&dagger; Tritium li&eacute; &agrave; la mati&egrave;re organique (OBT)</p>  <p>&nbsp;&nbsp;&Dagger; L&rsquo;&eacute;quivalent de concentration de 20&nbsp;mSv par ann&eacute;e (en supposant 250 jours ouvrables et 8 heures de travail par jour). </p>
<a name="#RDsection[16]#"></a>
<h3>Annexe B <a name="P621_42923" id="P621_42923"><br />  </a>Calcul pour l&rsquo;estimation des doses</h3>  <p>L&rsquo;exemple suivant montre une m&eacute;thode (voir la rubrique&nbsp;5.2.1.1) d&rsquo;estimation du rayonnement, tir&eacute;e du domaine de la m&eacute;decine nucl&eacute;aire. La m&ecirc;me approche peut &ecirc;tre utilis&eacute;e pour &eacute;valuer le blindage en se basant sur les doses cibles.</p>
<a name="#RDsection[17]#"></a>
<h4><a name="P623_43203" id="P623_43203"></a>B.1 Exemple de calcul pour l&rsquo;estimation des doses pour les salles de m&eacute;decine nucl&eacute;aire</h4>
<p>En utilisant la m&eacute;thode d&eacute;crite &agrave; la rubrique 5.2.1.1, l&rsquo;approche ci-dessous peut &ecirc;tre utilis&eacute;e afin d&rsquo;&eacute;valuer les doses re&ccedil;ues par les personnes (autres que le patient) dans la salle de m&eacute;decine nucl&eacute;aire et autour de celle-ci.</p>  <p><strong>&Eacute;tape&nbsp;1)</strong> Am&eacute;nagement de l&rsquo;installation</p>  <p>Le Figure&nbsp;B1 montre l&rsquo;am&eacute;nagement d&rsquo;un service hypoth&eacute;tique de m&eacute;decine nucl&eacute;aire. Les dimensions et les d&eacute;tails du blindage de base sont pr&eacute;sent&eacute;s. Les principaux emplacements o&ugrave; les substances nucl&eacute;aires et les patients de m&eacute;decine nucl&eacute;aire se trouveront pendant des p&eacute;riodes prolong&eacute;es pendant la journ&eacute;e de travail sont identifi&eacute;s &agrave; l&rsquo;aide des lettres A &agrave; D<sub>2</sub>.</p>  <p><strong>&Eacute;tape&nbsp;2)</strong> Estimation de la charge de travail</p>  <p>Pour une installation particuli&egrave;re de m&eacute;decine nucl&eacute;aire, plusieurs substances nucl&eacute;aires diff&eacute;rentes &eacute;mettant un rayonnement gamma utilis&eacute;es couramment peuvent &ecirc;tre identifi&eacute;es (<sup>51</sup>Cr, <sup>67</sup>Ga, <sup>99m</sup>Tc, <sup>111</sup>In, <sup>123</sup>I, <sup>131</sup>I et <sup>201</sup>Tl). Il est peu vraisemblable que toutes les substances nucl&eacute;aires seront utilis&eacute;es ou qu&rsquo;elles auront une contribution importante &agrave; la dose annuelle &agrave; un emplacement particulier. Il faut plut&ocirc;t s&rsquo;attendre &agrave; ce qu&rsquo;une ou deux substances nucl&eacute;aires et proc&eacute;dures aient de l&rsquo;importance.</p>  <p><strong><em>Exemple :</em></strong></p>  <p>Supposons que le service de m&eacute;decine nucl&eacute;aire illustr&eacute; &agrave; la Figure&nbsp;1 se sp&eacute;cialise dans trois types de proc&eacute;dures de diagnostic sur des patients externes : &eacute;preuve cardiaque, scintigraphie osseuse de diagnostic et analyse d&rsquo;impr&eacute;gnation de la glande thyro&iuml;de. La charge de travail d&rsquo;une journ&eacute;e typique et les d&eacute;tails des substances nucl&eacute;aires et des activit&eacute;s utilis&eacute;es sont pr&eacute;sent&eacute;s au Tableau&nbsp;B1. Le nombre annuel de proc&eacute;dures ex&eacute;cut&eacute;es est &eacute;valu&eacute; &agrave; partir de la charge de travail quotidienne en supposant une semaine de travail de cinq jours (aucun examen n&rsquo;est fait en fin de semaine), 50 semaines par ann&eacute;e.</p>  <p className=""><strong><em><a href="/fra/acts-and-regulations/consultation/comment/rd-52/x_fig_b1">Figure&nbsp;B1 : Am&eacute;nagement hypoth&eacute;tique d&rsquo;un service de m&eacute;decine nucl&eacute;aire</a><br />
</em></strong>(Visionnez la figure)</p>  <p className=""><strong><em>Tableau B1 : Principales procedures et activit&eacute;s r&eacute;alis&eacute;es, et substances nucl&eacute;aires utilis&eacute;es</em> </strong></p>  <table >
<tr>
<td><p className=""><strong>Acte m&eacute;dical</strong></p></td>
<td><p className=""><strong>Substances nucl&eacute;aires</strong></p></td>
<td><p className=""><strong>Nombre de proc&eacute;dures /ann&eacute;e</strong></p></td>
<td><p className=""><strong>Dur&eacute;e moyenne de la proc&eacute;dure</strong></p></td>
<td><p className=""><strong>Activit&eacute; moyenne par traitement</strong></p></td>
<td><p className=""><strong>(Nombre de proc&eacute;dures) x (Dur&eacute;e) x (Activit&eacute;)</strong></p></td>
</tr>
<tr>
<td><p>&Eacute;preuve cardiaque</p></td>
<td><p className=""><sup>99m</sup>Tc</p></td>
<td><p className="">1200</p></td>
<td><p className="">1 &frac12; h *</p></td>
<td><p className="">370 MBq (repos)*</p>
<p className="">1100 MBq (effort)*</p></td>
<td><p className="">259 000 MBq-h*</p>
<p className="">1 210 000 MBq-h*</p></td>
</tr>
<tr>
<td><p>Scintigraphie osseuse</p></td>
<td><p className=""><sup>99m</sup>Tc</p></td>
<td><p className="">500</p></td>
<td><p className="">&frac34; h</p></td>
<td><p className="">800 MBq</p></td>
<td><p className="">300 000 MBq-h</p></td>
</tr>
<tr>
<td><p>Assimilation par la glande thyro&iuml;de</p></td>
<td><p className=""><sup>131</sup>I</p></td>
<td><p className="">100</p></td>
<td><p className="">&frac12; h</p></td>
<td><p className="">0,37 MBq</p></td>
<td><p className="">18,5 MBq-h</p></td>
</tr>  </table>  <p>* Suppose 35 minutes pour l&rsquo;&eacute;preuve au repos et 55 minutes pour l&rsquo;&eacute;preuve d&rsquo;effort (total de 90&nbsp;minutes ou 1&nbsp;&frac12; h)</p>  <p>&Agrave; partir de colonne finale, on peut supposer que, pour cet exemple, les doses de rayonnement re&ccedil;ues par le personnel ou par le grand public &agrave; la suite de l&rsquo;assimilation par la glande thyro&iuml;de est n&eacute;gligeable par rapport &agrave; l&rsquo;analyse cardiaque ou &agrave; la scintigraphie osseuse et on peut l&rsquo;omettre de l&rsquo;estimation des doses. Mais les d&eacute;tails sur tous les types d&rsquo;actes m&eacute;dicaux, le nombre total de patients et les activit&eacute;s moyennes devraient &ecirc;tre fournis &agrave; la CCSN et il faut justifier les d&eacute;tails utilis&eacute;s dans l&rsquo;&eacute;valuation.</p>  <p><strong>&Eacute;tape&nbsp;3)</strong> Analyse de l&rsquo;occupation</p>  <p>Pour commencer, il faut d&eacute;terminer qui est expos&eacute; dans le cadre des activit&eacute;s du service de m&eacute;decine nucl&eacute;aire. Pour respecter le <em>R&egrave;glement sur la radioprotection</em>, ces personnes peuvent &ecirc;tre consid&eacute;r&eacute;es comme des travailleurs du secteur nucl&eacute;aire ou des personnes autres que les travailleurs du secteur nucl&eacute;aire.</p>  <p>D&rsquo;apr&egrave;s la LSRN, un travailleur du secteur nucl&eacute;aire (TSN) est une personne qui, du fait de sa profession ou de son occupation et des conditions dans lesquelles elle exerce ses activit&eacute;s, si celles-ci sont li&eacute;es &agrave; une substance ou une installation nucl&eacute;aire, risque vraisemblablement de recevoir une dose de rayonnement sup&eacute;rieure &agrave; la limite r&eacute;glementaire fix&eacute;e pour la population en g&eacute;n&eacute;ral, soit 1&nbsp;mSv. Par exemple, les technologues de m&eacute;decine nucl&eacute;aire sont habituellement consid&eacute;r&eacute;s comme des travailleurs du secteur nucl&eacute;aire.</p>  <p>Toute personne qui n&rsquo;est pas d&eacute;sign&eacute;e comme travailleur du secteur nucl&eacute;aire est par d&eacute;finition consid&eacute;r&eacute;e comme une personne autre qu&rsquo;un travailleur du secteur nucl&eacute;aire. Cela peut comprendre les membres du personnel ou les membres du grand public; &agrave; ce titre, ces personnes sont assujetties &agrave; une limite annuelle de dose efficace de 1&nbsp;mSv.</p>  <p>L&rsquo;&eacute;valuation des doses re&ccedil;ues par les personnes en provenance de diff&eacute;rentes sources n&rsquo;est pas une solution pratique; c&rsquo;est pourquoi l&rsquo;&eacute;valuation doit &ecirc;tre simplifi&eacute;e. Cela peut &ecirc;tre fait en &eacute;valuant la proximit&eacute;, la fr&eacute;quence et la dur&eacute;e de l&rsquo;exposition des personnes de chaque groupe pour &eacute;tablir les personnes les plus expos&eacute;es. Seuls les &laquo; pires cas &raquo; d&rsquo;exposition de chaque groupe doivent &ecirc;tre &eacute;valu&eacute;s parce qu&rsquo;on peut conclure avec un degr&eacute; de s&eacute;curit&eacute; suffisant que toutes les autres personnes de chaque groupe re&ccedil;oivent une dose moins &eacute;lev&eacute;e. </p>  <p>L&rsquo;&eacute;tape finale de l&rsquo;analyse de l&rsquo;occupation permet de d&eacute;terminer ce qui suit :</p>  <ol>
<li> L&rsquo;endroit o&ugrave; les substances nucl&eacute;aires et les patients de m&eacute;decine nucl&eacute;aire se trouvent (voir la Figure&nbsp;B1, emplacements A, B, C, D<sub>1</sub> et D<sub>2</sub>) et pour combien de temps.</li>
<li> L&rsquo;endroit o&ugrave; se trouvent les personnes les plus expos&eacute;es (autres que les patients qui subissent un traitement de m&eacute;decine nucl&eacute;aire) et pour combien de temps.</li>  </ol>  <p>Pour chaque emplacement &agrave; l&rsquo;int&eacute;rieur ou aux alentours de l&rsquo;installation o&ugrave; l&rsquo;on pourrait pr&eacute;voir une contribution significative de la dose totale re&ccedil;ue par une personne, la dose re&ccedil;ue par chaque personne repr&eacute;sentative devrait &ecirc;tre d&eacute;termin&eacute;e, en supposant un facteur d&rsquo;occupation appropri&eacute;. La pr&eacute;sence de travailleurs du secteur nucl&eacute;aire, de personnel autre que les travailleurs du secteur nucl&eacute;aire, ou les deux, de cet emplacement devrait &ecirc;tre pr&eacute;cis&eacute;e. Si une personne occupe plusieurs emplacements, la dose en provenance de tous les emplacements doit &ecirc;tre additionn&eacute;e (ce sc&eacute;nario doit &ecirc;tre consid&eacute;r&eacute; lors de l&rsquo;affectation des facteurs d&rsquo;occupation).</p>  <p>Si les facteurs d&rsquo;occupation ne sont pas connus, la NCRP&nbsp;151 fournit des directives sur les facteurs d&rsquo;occupation.</p>  <p><strong><em>Exemple :</em></strong></p>  <p>Aux fins de cet exemple, on suppose ce qui suit :</p>  <ol>
<li> Il y a une r&eacute;ceptionniste &agrave; plein temps au service de m&eacute;decine nucl&eacute;aire; elle passe la plus grande partie de son temps au bureau de la r&eacute;ception. La m&ecirc;me chose s&rsquo;applique &agrave; la clinique externe adjacente.</li>
<li> Le personnel secondaire, comme le personnel de nettoyage et d&rsquo;entretien, est pr&eacute;sent mais peu fr&eacute;quemment; ce personnel a un acc&egrave;s restreint aux secteurs o&ugrave; des substances nucl&eacute;aires sont utilis&eacute;es et il n&rsquo;a qu&rsquo;une exposition directe minime aux patients inject&eacute;s ou aux produits radiopharmaceutiques.</li>
<li> Les membres du grand public qui accompagnent la m&eacute;decine nucl&eacute;aire le font tout au plus &agrave; quelques reprises chaque ann&eacute;e.</li>
<li> Les m&eacute;decins de la clinique externe adjacente passent &agrave; peu pr&egrave;s la moiti&eacute; de leur temps dans les salles d&rsquo;examen situ&eacute;es &agrave; proximit&eacute; imm&eacute;diate des salles o&ugrave; se trouvent les cam&eacute;ras et les salles d&rsquo;&eacute;preuve d&rsquo;effort.</li>
<li> La clinique n&rsquo;a qu&rsquo;un seul &eacute;tage et elle est construite sur une dalle au sol; par cons&eacute;quent, personne ne se trouve sous la clinique et l&rsquo;occupation au-dessus de la clinique est tr&egrave;s minime (comme lors des r&eacute;parations de la couverture).</li>  </ol>  <p>Aux fins de cet exemple, on prend pour acquis que les personnes (autres que les patients) occuperont les endroits suivants : le corridor, le bureau, les salles o&ugrave; se trouvent les cam&eacute;ras, les salles d&rsquo;examen de la clinique voisine et la r&eacute;ception. Ces emplacements cl&eacute;s couvrent les secteurs d&rsquo;occupation par les techniciens (travailleurs du secteur nucl&eacute;aire) et le personnel autre que les travailleurs du secteur nucl&eacute;aire, y compris le m&eacute;decin de la clinique voisine. Il faudra &eacute;galement peut-&ecirc;tre tenir compte d&rsquo;autres emplacements; les emplacements utilis&eacute;s dans cet exemple ne le sont qu&rsquo;&agrave; titre indicatif. L&rsquo;exemple complet de ce guide n&rsquo;est pr&eacute;sent&eacute; que pour la r&eacute;ception/r&eacute;ceptionniste. La m&ecirc;me approche serait utilis&eacute;e pour d&rsquo;autres emplacements ou d&rsquo;autres repr&eacute;sentants.</p>  <p>Les principaux param&egrave;tres requis pour &eacute;valuer les doses annuelles totales sont pr&eacute;sent&eacute;s au Tableau&nbsp;B2.</p>  <p><strong>&Eacute;tape&nbsp;4)</strong> Calcul du d&eacute;bit de dose</p>  <p>L&rsquo;approche ci-dessous prend pour acquis que la source/patient peut &ecirc;tre consid&eacute;r&eacute;e comme une source ponctuelle. Pour la plupart des distances, la source ponctuelle est une repr&eacute;sentation suffisamment pr&eacute;cise. En outre, si la distance est sup&eacute;rieure &agrave; 1 m&egrave;tre, on suppose que la g&eacute;om&eacute;trie de la source ponctuelle est conservatrice par rapport &agrave; d&rsquo;autres g&eacute;om&eacute;tries viables, comme une source volum&eacute;trique. Le choix de la g&eacute;om&eacute;trie de la source est laiss&eacute; &agrave; la discr&eacute;tion du demandeur, mais la m&eacute;thode d&rsquo;estimation doit &ecirc;tre clairement indiqu&eacute;e.</p>  <p className=""><strong><em><a href="/fra/acts-and-regulations/consultation/comment/rd-52/x_tbl_b2">Tableau B2 : Sommaire de l&rsquo;occupation</a></em> </strong><br />  (Visionnez le tableau) </p>  <p>Le formulaire g&eacute;n&eacute;ral ci-dessous peut &ecirc;tre utilis&eacute; pour calculer le d&eacute;bit de dose pour une source ponctuelle :</p>  <p>&Eacute;quation {1} <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-4.gif" alt="rd52" width="140" height="51" /> </p>  <p>O&ugrave; : </p>  <table>
<tr>
<td><p>R<em><sub>ij</sub></em></p></td>
<td><p>Est le d&eacute;bit de dose produit par les substances nucl&eacute;aires&nbsp;<em>i</em> &agrave; l&rsquo;emplacement <em>j</em></p></td>
<td valign="top"><p>(&mu;Sv&nbsp;h<sup>-1</sup>)</p></td>
</tr>
<tr>
<td><p>&Gamma;<em><sub>i</sub></em></p></td>
<td><p>Est la constante de rayonnement gamma particuli&egrave;re pour les substances nucl&eacute;aires&nbsp;<em>i</em></p></td>
<td valign="top"><p>(&mu;Sv&nbsp;h<sup>-1</sup>&nbsp;MBq<sup>-1</sup>&nbsp;m<sup>2</sup>)</p></td>
</tr>
<tr>
<td><p>A<em><sub>i</sub></em></p></td>
<td><p>Est l&rsquo;activit&eacute; des substances nucl&eacute;aires&nbsp;<em>i</em></p></td>
<td valign="top"><p>(MBq)</p></td>
</tr>
<tr>
<td><p>d<em><sub>ij</sub></em></p></td>
<td><p>Est la distance entre les substances nucl&eacute;aires&nbsp;<em>i</em> et l&rsquo;emplacement&nbsp;<em>j</em></p></td>
<td valign="top"><p>(m)</p></td>
</tr>
<tr>
<td><p>t<em><sub>m</sub></em></p></td>
<td><p>Est l&rsquo;&eacute;paisseur du blindage <em>m</em> de tout blindage situ&eacute; entre les substances nucl&eacute;aires&nbsp;<em>i</em> et l&rsquo;emplacement&nbsp;<em>j</em></p></td>
<td valign="top"><p>(mm)</p></td>
</tr>
<tr>
<td><p>TVL<em><sub>mi</sub></em></p></td>
<td><p>Est la &laquo; couche d&rsquo;att&eacute;nuation au dixi&egrave;me &raquo; du mat&eacute;riel <em>m</em> pour les substances nucl&eacute;aires&nbsp;<em>i</em> (c&rsquo;est-&agrave;-dire l&rsquo;&eacute;paisseur du mat&eacute;riel <em>m</em> qui serait requis pour r&eacute;duire le d&eacute;bit de dose de rayonnement des photons par les substances nucl&eacute;aires&nbsp;<em>i</em> &agrave; 1/10 de la valeur initiale)</p></td>
<td valign="top"><p>(mm)</p></td>
</tr>  </table>  <p>Les constantes particuli&egrave;res de rayonnement gamma sont habituellement d&eacute;finies en se r&eacute;f&eacute;rant au d&eacute;bit de dose produite (comme &mu;Sv&nbsp;h<sup>-1</sup>) &agrave; un m&egrave;tre de la source, par unit&eacute; d&rsquo;activit&eacute; de la source (comme le MBq<sup>-1</sup>). Lors du calcul du d&eacute;bit de dose, il faut s&rsquo;assurer de l&rsquo;uniformit&eacute; des unit&eacute;s entre <em>R<sub>ij</sub></em>, &Gamma;<em><sub>i</sub></em> et <em>A<sub>i</sub></em>. Les valeurs du taux d&rsquo;exposition et du d&eacute;bit de kerma de l&rsquo;air sont &eacute;galement couramment utilis&eacute;s et disponibles dans la documentation. Ces valeurs doivent &ecirc;tre converties en valeurs du d&eacute;bit de dose.</p>  <p>L&rsquo;&eacute;paisseur des couches d&rsquo;att&eacute;nuation au dixi&egrave;me pour les substances nucl&eacute;aires courantes &eacute;mettant un rayonnement gamma et les diff&eacute;rents mat&eacute;riaux de blindage sont disponibles &agrave; partir de diff&eacute;rentes<sup><a href="#P759_55647" name="P759_55648" id="P759_55648">3</a></sup> sources.  Les salles de m&eacute;decine nucl&eacute;aire diagnostic sont typiquement blind&eacute;es &agrave; l&rsquo;aide de feuilles de plomb disponibles sur le march&eacute;; les &eacute;paisseurs normales variant entre 0,8&nbsp;mm (1/32&nbsp;po) et 3,2&nbsp;mm (1/8&nbsp;po). Pour les sources poly&eacute;nerg&eacute;tiques, la &laquo; premi&egrave;re &raquo; &eacute;paisseur d&rsquo;att&eacute;nuation &agrave; faisceau large peut &ecirc;tre beaucoup plus petite que les couches d&rsquo;att&eacute;nuation ult&eacute;rieures en raison de l&rsquo;absorption s&eacute;lective des photons &agrave; faible &eacute;nergie par des interactions photo&eacute;lectriques. Cet effet est appel&eacute; &laquo; durcissement du rayonnement &raquo; ou &laquo; durcissement du faisceau &raquo;. C&rsquo;est pourquoi il faut apporter une attention sp&eacute;ciale lors de l&rsquo;&eacute;valuation des transmissions &agrave; travers des barri&egrave;res ayant plus d&rsquo;une couche d&rsquo;att&eacute;nuation au dixi&egrave;me pour les substances nucl&eacute;aires comme <sup>67</sup>Ga, <sup>111</sup>In, <sup>123</sup>I,<sup> 131</sup>I, ou <sup>201</sup>Tl.</p>  <p><strong><em>Exemple :</em></strong></p>  <p>Le Tableau B3 r&eacute;sume les param&egrave;tres requis pour faire des estimations du d&eacute;bit de dose pour la r&eacute;ceptionniste.  Les distances <em>d<sub>ij</sub></em> ont &eacute;t&eacute; mesur&eacute;es directement &agrave; partir de la Figure&nbsp;B1. Les &eacute;paisseurs sont bas&eacute;es sur l&rsquo;hypoth&egrave;se voulant que tous les murs int&eacute;rieurs des salles d&rsquo;&eacute;preuve d&rsquo;effort, les salles de cam&eacute;ra&nbsp;1 et 2 et de la salle d&rsquo;attente apr&egrave;s l&rsquo;injection, soient chemis&eacute;s de plomb sur 1,6&nbsp;mm (1/16&nbsp;po) d&rsquo;&eacute;paisseur. On prend pour acquis que tous les autres murs int&eacute;rieurs seront construits de panneaux de pl&acirc;tre ordinaire et qu&rsquo;ils fourniront une att&eacute;nuation minimale.</p>  <p>La derni&egrave;re colonne du Tableau B3 pr&eacute;sente les listes des d&eacute;bits de dose calcul&eacute;s &agrave; la r&eacute;ception pour la scintigraphie osseuse et les &eacute;preuves d&rsquo;effort cardiaque. Un exemple de calcul pour un emplacement de source repr&eacute;sentative (D<sub>2</sub>) et la proc&eacute;dure (imagerie apr&egrave;s l&rsquo;&eacute;preuve d&rsquo;effort) est pr&eacute;sent&eacute; ci-dessous&nbsp;: </p>  <table>
<tr>
<td><p>Substance nucl&eacute;aire (<em>i</em>)</p></td>
<td valign="top"><p><sup>99m</sup>Tc</p></td>
</tr>
<tr>
<td><p>&Gamma;<em><sub>Tc99m</sub></em></p></td>
<td valign="top"><p>1,97&nbsp;<img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-5.gif" alt="rd52" width="12" height="13" />&nbsp;10<sup>-5</sup>&nbsp;mSv&nbsp;h<sup>-1</sup>&nbsp;MBq&nbsp;m<sup>2&nbsp;&nbsp;&nbsp;<a href="#P768_57696" name="P768_57697" id="P768_57697">4</a></sup></p></td>
</tr>
<tr>
<td><p><em>TVL<sub>Pb,Tc99m</sub></em></p></td>
<td valign="top"><p>1,0&nbsp;mm&nbsp;&nbsp;&nbsp;<sup><a href="#P771_57980" name="P771_57981" id="P771_57981">5</a></sup></p></td>
</tr>
<tr>
<td><p>Activit&eacute; totale <em>A<sub>i</sub></em> utilis&eacute;e pour l&rsquo;acte m&eacute;dical (au stade de l&rsquo;&eacute;preuve d&rsquo;effort, le patient a d&eacute;j&agrave; re&ccedil;u l&rsquo;injection au repos de 370&nbsp;MBq et l&rsquo;injection pour l&rsquo;&eacute;preuve d&rsquo;effort de 1100&nbsp;MBq); on n&rsquo;a pas tenu compte de la petite quantit&eacute; de d&eacute;sint&eacute;gration qui se produit entre chaque injection)</p></td>
<td valign="top"><p>1470&nbsp;MBq</p></td>
</tr>
<tr>
<td><p>L&rsquo;&eacute;paisseur <em>t<sub>m</sub></em> du blindage de plomb dans le mur entre la cam&eacute;ra 2 et la r&eacute;ception de m&eacute;decine nucl&eacute;aire </p></td>
<td valign="top"><p>1,6&nbsp;mm (1/16&nbsp;po)</p></td>
</tr>
<tr>
<td><p>Distance <em>d<sub>ij</sub></em> entre le patient couch&eacute; sur le lit de la cam&eacute;ra 2 et la r&eacute;ception de m&eacute;decine nucl&eacute;aire (en provenance de la Figure&nbsp;B1)</p></td>
<td valign="top"><p>5&nbsp;m&egrave;tres</p></td>
</tr>  </table>  <p className=""><strong><em><a href="/fra/acts-and-regulations/consultation/comment/rd-52/x_tbl_b3">Tableau B3 : Calcul du d&eacute;bit de dose</a></em></strong> <br />  (Visionnez le tableau) </p>  <p><strong>&Eacute;tape&nbsp;5)</strong> Calcul de la dose annuelle</p>  <p>L&rsquo;estimation de la dose annuelle totale, peu importe les m&eacute;thodes utilis&eacute;es, emplacement de la source, emplacement occup&eacute; et personne expos&eacute;e, est donn&eacute;e en multipliant ce qui suit : le nombre total de proc&eacute;dures faits par ann&eacute;e (<em>N</em>, voir le Tableau B1); le facteur d&rsquo;occupation pour la personne expos&eacute;e et l&rsquo;emplacement occup&eacute; (<em>T</em>, voir le Tableau B2); le d&eacute;bit de dose (<em>R<sub>ij</sub></em>, voir le Tableau B3); et la dur&eacute;e (<em>S<sub>i</sub></em>) o&ugrave; la source ou le patient inject&eacute; se trouve &agrave; l&rsquo;emplacement de la source d&eacute;sign&eacute;e (en heures). La dose annuelle (<em>D<sub>ij</sub></em>) est alors : </p>  <table>
<tr>
<td><p>&Eacute;quation {2}</p></td>
<td><p><em>D<sub>ij</sub> = N</em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-20.gif" alt="rd52" width="12" height="13" /> <em>T</em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-21.gif" alt="rd52" width="12" height="13" /> <em>R<sub>ij</sub></em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-22.gif" alt="rd52" width="12" height="13" /> <em>S<sub>i</sub></em></p></td>
</tr>  </table>  <p><strong><em>Exemple</em></strong></p>  <p>Le Tableau B4 r&eacute;sume les param&egrave;tres requis pour faire une estimation des doses pour l&rsquo;exemple. La dur&eacute;e estimative totale des actes m&eacute;dicaux est pr&eacute;sent&eacute;e au Tableau B1. Ces valeurs sont r&eacute;parties en dur&eacute;es approximatives que la source/patient consacre &agrave; chaque emplacement cl&eacute; (<em>S<sub>i</sub></em>) du Tableau&nbsp;B4.</p>  <p>Par exemple, on &eacute;value que l&rsquo;&eacute;preuve d&rsquo;effort cardiaque n&eacute;cessite 1&frac12; heure. Ce temps est divis&eacute; comme suit : </p>  <table>
<tr>
<td><p>2 minutes pour l&rsquo;injection pour l&rsquo;&eacute;preuve au repos</p></td>
<td><p>0,033 h</p></td>
</tr>
<tr>
<td><p>20 minutes dans la salle d&rsquo;attente apr&egrave;s l&rsquo;injection</p></td>
<td><p>0,33   h</p></td>
</tr>
<tr>
<td><p>15 minutes de scanning dans la salle de cam&eacute;ra</p></td>
<td><p>0,25   h</p></td>
</tr>
<tr>
<td><p>2 minutes pour l&rsquo;injection pour l&rsquo;&eacute;preuve d&rsquo;effort</p></td>
<td><p>0,033 h</p></td>
</tr>
<tr>
<td><p>20 minutes dans la salle d&rsquo;attente</p></td>
<td><p>0,33   h</p></td>
</tr>
<tr>
<td><p>15 minutes dans la salle de tapis roulant</p></td>
<td><p>0,25   h</p></td>
</tr>
<tr>
<td><p>15 minutes de scanning dans l&rsquo;une des salles de cam&eacute;ra</p></td>
<td><p>0,25   h</p></td>
</tr>
<tr>
<td><p><strong>Total&nbsp;:</strong></p></td>
<td><p><strong>1,48 h</strong></p></td>
</tr>  </table>  <p className=""><strong><em><a href="/fra/acts-and-regulations/consultation/comment/rd-52/x_tbl_b4">Tableau B4 : Calcul de la dose annuelle</a></em> </strong><br />  (Visionnez le tableau) </p>  <p>La derni&egrave;re colonne du Tableau B4 pr&eacute;sente la liste des doses annuelles calcul&eacute;es pour l&rsquo;endroit de r&eacute;ception (pour la r&eacute;ceptionniste), tant pour la scintigraphie osseuse que les &eacute;preuves cardiaques (&agrave; noter que pour la r&eacute;ception, l&rsquo;exposition en provenance de la salle du tapis roulant (C) peut &ecirc;tre laiss&eacute;e de c&ocirc;t&eacute;&nbsp;tel qu&rsquo;indiqu&eacute; aux Tableaux&nbsp;B2 et B3). Un exemple de calcul pour un emplacement repr&eacute;sentatif de la source (D<sub>2</sub>) et une partie de l&rsquo;&eacute;preuve (imagerie apr&egrave;s l&rsquo;&eacute;preuve d&rsquo;effort) est pr&eacute;sent&eacute; ci-dessous : </p>  <table>
<tr>
<td><p><em>N</em></p></td>
<td><p>600 &eacute;preuves par ann&eacute;e (600 a<sup>-1</sup>)</p></td>
</tr>
<tr>
<td><p><em>T</em></p></td>
<td><p>1</p></td>
</tr>
<tr>
<td><p><em>R<sub>ij</sub></em></p></td>
<td><p>2,9 <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-47.gif" alt="rd52" width="12" height="13" /> 10<sup>-5</sup> mSv h<sup>-1</sup></p></td>
</tr>
<tr>
<td><p><em>S<sub>i</sub></em></p></td>
<td><p>0,25 h</p></td>
</tr>  </table>  <p>En utilisant l&rsquo;&eacute;quation {2}, on obtient ce qui suit : </p>  <table>
<tr>
<td><p>D<em><sub>ij</sub></em></p></td>
<td><p>= <em>N</em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-48.gif" alt="rd52" width="12" height="13" /> <em>T</em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-49.gif" alt="rd52" width="12" height="13" /> <em>R<sub>ij</sub></em> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-50.gif" alt="rd52" width="12" height="13" /> <em>S<sub>i</sub></em></p></td>
</tr>
<tr>
<td><p>D<em><sub>r&eacute;ception, cam&eacute;ra 2</sub></em></p></td>
<td><p>= 600 a<sup>-1</sup> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-51.gif" alt="rd52"  width="12" height="13" /> 1 <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-52.gif" alt="rd52" width="12" height="13" /> 2,9 <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-53.gif" alt="rd52" width="12" height="13" /> 10<sup>-5</sup> mSv h<sup>-1</sup> <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-54.gif" alt="rd52"  width="12" height="13" /> 0,25 h </p></td>
</tr>
<tr>
<td>&#160; </td>
<td><p>= 4,3 <img src="/fra/acts-and-regulations/consultation/comment/rd-52/images/f-55.gif" alt="rd52" width="12" height="13" /> 10<sup>-3</sup> mSv a<sup>-1</sup></p></td>
</tr>
<tr>
<td>&#160; </td>
<td><p>= 4,3 &micro;Sv/a</p>
</td>
</tr>  </table>
<a name="#RDsection[18]#"></a>
<h4><a name="P1036_63193" id="P1036_63193"></a>B.2 Conclusion</h4>  <p>La dose annuelle re&ccedil;ue par la r&eacute;ceptionniste et l&rsquo;endroit de r&eacute;ception, en supposant une occupation &agrave; 100 %, est inf&eacute;rieure &agrave; 50&nbsp;&micro;Sv. La CCSN peut consid&eacute;rer qu&rsquo;une &eacute;valuation ALARA n&rsquo;est pas n&eacute;cessaire lorsque les doses professionnelles individuelles ne risquent pas de d&eacute;passer 1&nbsp;mSv par ann&eacute;e et lorsque la dose re&ccedil;ue par le public en g&eacute;n&eacute;ral ne risquent pas de d&eacute;passer 50&nbsp;&micro;Sv par ann&eacute;e (tel que recommand&eacute; dans le guide r&eacute;glementaire de la CCSN G-129, r&eacute;v.&nbsp;1 : <em>Conservation des doses de rayonnement et les expositions ALARA</em>, tel que modifi&eacute; &agrave; l&rsquo;occasion).</p>
<a name="#RDsection[19]#"></a>
<h3>Annexe C <a name="P1040_63811" id="P1040_63811"><br />  </a>Formulaire d&rsquo;&eacute;valuation de la conception</h3>  <p>Les pages suivantes peuvent &ecirc;tre retir&eacute;es du guide et envoy&eacute;es par la poste dans le cadre de la demande de permis.</p>  <p className=""><strong>Formulaire d&rsquo;&eacute;valuation de la conception des laboratoires
de substances nucl&eacute;aires et des salles de m&eacute;decine nucl&eacute;aire</strong></p>  <p>Les pages qui suivent peuvent &ecirc;tre retir&eacute;es du guide et envoy&eacute;es par la poste dans le cadre de la demande de permis. </p>  <table >
<tr>
<td><p><strong>A</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Renseignements g&eacute;n&eacute;raux</strong></p></td>
</tr>
<tr>
<td><p><strong>A1</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Nom de l&rsquo;organisation:</strong></p></td>
</tr>
<tr>
<td><p><strong>A2</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Num&eacute;ro de permis (le cas &eacute;ch&eacute;ant):</strong></p></td>
</tr>
<tr>
<td><p><strong>A3</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Personne-ressource:</strong></p></td>
</tr>
<tr>
<td><p><strong>A4</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Num&eacute;ro de t&eacute;l&eacute;phone de la personne-ressource:</strong></p></td>
</tr>
<tr>
<td><p><strong>A5</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Courriel de la personne-ressource:</strong></p></td>
</tr>
<tr>
<td><p><strong>A6</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Classification des pi&egrave;ces touch&eacute;es par ce formulaire:</strong></p></td>
</tr>
<tr>
<td><p><strong>A7</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Nom de l&rsquo;immeuble:</strong></p></td>
</tr>
<tr>
<td><p><strong>A8</strong></p></td>
<td colSpan="8" valign="top"><p><strong>Num&eacute;ro de pi&egrave;ces touch&eacute;es par ce formulaire:</strong></p></td>
</tr>  </table>  <p>(Nota : Un formulaire distinct devrait &ecirc;tre pr&eacute;par&eacute; pour chaque pi&egrave;ce, sauf si leur conception, leurs fonctions et leurs classifications sont identiques ou si elles se ressemblent). </p>  <table >
<tr>
<td><p><strong>A9</strong></p></td>
<td><p><strong>Description du travail qui doit &ecirc;tre accompli dans la pi&egrave;ce: <em>(Annexer d&rsquo;autres pages au besoin)</em></strong></p></td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="2" valign="top">&#160; </td>
</tr>  </table>  <p>Il faut faire le n&eacute;cessaire pour respecter les directives pr&eacute;sent&eacute;es sur ce formulaire parce qu&rsquo;elles sont toutes d&rsquo;excellentes pratiques de laboratoire. Les solutions de rechange qui offrent un degr&eacute; de s&eacute;curit&eacute; &eacute;quivalent seront analys&eacute;es. </p>  <p>Les laboratoires ayant un niveau sup&eacute;rieur et de confinement et les salles de m&eacute;decine nucl&eacute;aire ont des dispositions additionnelles et certains points (comme l&rsquo;estimation de la dose) ne sont rattach&eacute;s qu&rsquo;&agrave; ces classifications. Des renseignements additionnels peuvent &ecirc;tre demand&eacute;s par la CCSN apr&egrave;s l&rsquo;&eacute;valuation initiale.</p>  <table >
<tr>
<td><p><strong>B</strong></p></td>
<td><p><strong>Finition et accessoires<br />
(pour les aires d&rsquo;utilisation et de stockage)</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>B1</p></td>
<td><p>Le plancher aura une surface imperm&eacute;able, r&eacute;sistant aux produits chimiques et lavable. Il ne faut pas utiliser de tapis.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B2</p></td>
<td><p>Tous les joints du plancher seront scell&eacute;s ou le plancher sera mono pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B3</p></td>
<td><p>Le plancher doit avoir un enduit qui peut &ecirc;tre retir&eacute; pour faciliter le nettoyage en cas de contamination.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B4</p></td>
<td><p>Le plancher sera concave au niveau des murs et des armoires pour emp&ecirc;cher les d&eacute;versements de s&rsquo;infiltrer sous le plancher.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B5</p></td>
<td><p>Les surfaces de travail auront une surface lisse, imperm&eacute;able, lavable et un fini qui r&eacute;siste aux produits chimiques.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B6</p></td>
<td><p>Tous joints des surfaces de travail seront scell&eacute;s ou les dessus auront une surface mono pi&egrave;ce sans joint.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B7</p></td>
<td><p>Le dessus du comptoir comprendra une bordure pour emp&ecirc;cher les d&eacute;bordements sur le plancher. </p>
<p>Si le comptoir est contigu &agrave; un mur, il sera concave ou il aura une surface anti &eacute;claboussement au niveau du mur.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B8</p></td>
<td><p>Toutes les armoires et toutes les tablettes o&ugrave; des substances nucl&eacute;aires pourraient &ecirc;tre entrepos&eacute;es auront une surface lisse, imperm&eacute;able, lavable et un fini qui r&eacute;siste aux produits chimiques.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B9</p></td>
<td><p>Les murs et le plafond auront un fini lisse et lavable; les joints seront scell&eacute;s, lorsque c&rsquo;est n&eacute;cessaire, pour faciliter le nettoyage en cas d&rsquo;&eacute;claboussement en provenance d&rsquo;un flacon ou d&rsquo;un autre &eacute;v&eacute;nement.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B10</p></td>
<td><p>Au besoin, les surfaces de travail seront renforc&eacute;es pour soutenir le poids (peut-&ecirc;tre consid&eacute;rable) du mat&eacute;riel de blindage qui peut &ecirc;tre plac&eacute; sur la surface de travail.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B11</p></td>
<td><p>Lorsque c&rsquo;est possible, un &eacute;vier distinct de lavage des mains et un &eacute;vier de lavage/&eacute;limination seront fourni.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B12</p></td>
<td><p>Les &eacute;viers de lavage des mains seront pr&egrave;s de l&#39;entr&eacute;e de la pi&egrave;ce, pour encourager le lavage des mains &agrave; la sortie de la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B13</p></td>
<td><p>Les &eacute;viers seront faits d&rsquo;un mat&eacute;riau qui peut &ecirc;tre facilement d&eacute;contamin&eacute;.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B14</p></td>
<td><p>Chaque &eacute;vier aura un orifice de trop-plein.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B15</p></td>
<td><p>Les robinets seront contr&ocirc;l&eacute;s par un m&eacute;canisme qui ne n&eacute;cessite pas de contact direct avec les mains.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B16</p></td>
<td><p>Un poste de lavage d&rsquo;urgence des yeux sera fourni dans la pi&egrave;ce ou &agrave; proximit&eacute; de celle-ci.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B17</p></td>
<td><p>Lorsque c&rsquo;est possible, une douche de secours sera fournie &agrave; proximit&eacute; imm&eacute;diate de la pi&egrave;ce en cas de contamination importante du personnel.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B18</p></td>
<td><p>Un &eacute;clairage de secours sera fourni dans la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B19</p></td>
<td><p>Des endroits pour remiser les v&ecirc;tements externes et les articles personnels seront fournis &agrave; l&rsquo;ext&eacute;rieur de la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>B20</p></td>
<td><p>Des crochets seront fournis dans la pi&egrave;ce ou &agrave; proximit&eacute; de celle-ci pour encourager le personnel &agrave; enlever les v&ecirc;tements de laboratoire qui pourraient &ecirc;tre contamin&eacute;s avant de sortir de la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>  <p> </p>  <table >
<tr>
<td><p><strong>C</strong></p></td>
<td><p><strong>Plomberie</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>C1</p></td>
<td><p>Les drains qui peuvent transporter du mat&eacute;riel radioactif en provenance de la pi&egrave;ce se d&eacute;verseront directement dans l&#39;&eacute;gout principal du b&acirc;timent.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C2</p></td>
<td><p>Les drains en provenance de la pi&egrave;ce seront identifi&eacute;s sur les plans fournis au personnel d&#39;entretien.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C3</p></td>
<td><p>Les drains seront faits d&rsquo;un mat&eacute;riau qui r&eacute;siste aux produits chimiques.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C4</p></td>
<td><p>Les sources d&#39;alimentation en eau potable ne seront pas raccord&eacute;es au reste de la plomberie de la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C5</p></td>
<td><p>Un dispositif anti refoulement sera install&eacute; pour emp&ecirc;cher toute eau contamin&eacute;e de revenir dans le r&eacute;seau d&rsquo;aqueduc public.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C6</p></td>
<td><p>Les canalisations de vidange qui peuvent transporter des produits radioactifs porteront, &agrave; intervalles de 3 m&egrave;tres, un symbole d&#39;avertissement de rayonnement pour indiquer la possibilit&eacute; de contamination.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C7</p></td>
<td><p>Les siphons d&rsquo;&eacute;vier seront accessibles pour v&eacute;rification de contamination.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>C8</p></td>
<td><p>Les robinets comportant une canalisation de vide ou de refroidissement comprendront un dispositif anti refoulement.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>  <p> </p>  <table >
<tr>
<td><p><strong>D</strong></p></td>
<td><p><strong>S&eacute;curit&eacute;</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>D1</p></td>
<td><p>Les aires de stockage des d&eacute;chets radioactifs de la pi&egrave;ce seront verrouillables pour limiter l&#39;acc&egrave;s aux personnes autoris&eacute;es seulement.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>D2</p></td>
<td><p>La pi&egrave;ce aura des portes verrouillables qui resteront ferm&eacute;es et verrouill&eacute;es chaque fois que des substances nucl&eacute;aires et &agrave; rayonnement se trouvent dans la pi&egrave;ce et que la pi&egrave;ce est inoccup&eacute;e.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>D3</p></td>
<td><p>Si la salle doit &ecirc;tre partag&eacute;e avec des travailleurs qui ne sont pas autoris&eacute;s &agrave; utiliser des substances nucl&eacute;aires, une aire de stockage verrouillable secondaire (r&eacute;frig&eacute;rateur, cong&eacute;lateur, armoire) sera fournie dans la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>D4</p></td>
<td><p>Les fen&ecirc;tres du rez-de-chauss&eacute;e seront verrouill&eacute;es pour emp&ecirc;cher tout acc&egrave;s non autoris&eacute; &agrave; la pi&egrave;ce.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>D5</p></td>
<td><p>Un syst&egrave;me de contr&ocirc;le de l&#39;acc&egrave;s (cl&eacute;, bloc num&eacute;rique, cl&eacute; fob, etc.) sera en place pour s&#39;assurer que seuls les utilisateurs autoris&eacute;s peuvent entrer dans la pi&egrave;ce r&eacute;glement&eacute;e.</p></td>
<td><p>Toutes</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>  <p> </p>  <table >
<tr>
<td><p><strong>E</strong></p></td>
<td><p><strong>Ventilation</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>Nota:</p></td>
<td colSpan="5" valign="top"><p>Cette section doit &ecirc;tre remplie seulement si des substances nucl&eacute;aires volatiles doivent &ecirc;tre utilis&eacute;es ou stock&eacute;es ou si des a&eacute;rosols ou des gaz sont susceptibles d&#39;&ecirc;tre produits. </p>
<p>Aux fins de ce guide, les r&eacute;f&eacute;rences aux hottes incluent les hottes r&eacute;guli&egrave;res (armoires de s&eacute;curit&eacute; biologique de classe I) ainsi que les hottes &agrave; flux laminaire (armoires &agrave; s&eacute;curit&eacute; biologique de classe II). Si des bo&icirc;tes de gants (armoires de s&eacute;curit&eacute; biologique de classe III) ou si des &laquo;&nbsp;cellules blind&eacute;es &raquo; sont consid&eacute;r&eacute;es comme n&eacute;cessaires pour ex&eacute;cuter le travail, des informations d&eacute;taill&eacute;es doivent &ecirc;tre fournies au sujet de ces syst&egrave;mes.</p></td>
</tr>
<tr>
<td><p>E1</p></td>
<td><p>La pression dans la pi&egrave;ce doit &ecirc;tre n&eacute;gative par rapport aux environs (sauf si la pi&egrave;ce est utilis&eacute;e comme pi&egrave;ce propre ou st&eacute;rile). La circulation de l&#39;air proviendra toujours du secteur &agrave; faible rayonnement. Pour les pi&egrave;ces propres ou st&eacute;riles, un vestibule pourra &ecirc;tre n&eacute;cessaire.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E2</p></td>
<td><p>Les laboratoires g&eacute;n&eacute;raux auront au moins 6 changements d&#39;air par heure.</p></td>
<td><p>&Eacute;l&eacute;mentaire, </p>
<p>Interm&eacute;diaire, </p>
<p>Sup&eacute;rieur, </p>
<p>Confinement. </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E3</p></td>
<td><p>Les hottes seront choisies en se basant sur leur convenance en fonction du travail pr&eacute;vu.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E4</p></td>
<td><p>L&#39;air ventil&eacute; par les hottes sera extrait sans recirculation.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E5</p></td>
<td><p>Les hottes seront situ&eacute;s loin des secteurs ayant des courants d&#39;air ou de la turbulence (aires &agrave; grande circulation, portes, fen&ecirc;tres ouvrables, diffuseurs d&rsquo;approvisionnement en air).</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E6</p></td>
<td><p>Les hottes ne seront pas situ&eacute;es &agrave; c&ocirc;t&eacute; d&rsquo;un acc&egrave;s unique &agrave; une sortie, en raison de la volatilit&eacute; possible des produits extraits par les hottes. </p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E7</p></td>
<td><p>Pour &eacute;viter les interf&eacute;rences, les bouches d&#39;approvisionnement en air seront  install&eacute;es loin des hottes ou orient&eacute;es du c&ocirc;t&eacute; contraire.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E8</p></td>
<td><p>Les hottes ne seront pas les moyens uniques d&rsquo;extraction de l&#39;air de la pi&egrave;ce.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E9</p></td>
<td><p>Les hottes seront faites d&rsquo;un mat&eacute;riau lisse, imperm&eacute;able, lavable et r&eacute;sistant aux produits chimiques.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E10</p></td>
<td><p>Les hottes seront con&ccedil;ues pour contenir les petits d&eacute;versements.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E11</p></td>
<td><p>L&rsquo;int&eacute;rieur des hottes aura des coins concaves pour faciliter la d&eacute;contamination et le nettoyage.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E12</p></td>
<td><p>Les surfaces de travail des hottes seront renforc&eacute;es pour supporter le poids des mat&eacute;riaux de blindage exig&eacute;.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E13</p></td>
<td><p>Les hottes contenant des substances nucl&eacute;aires seront identifi&eacute;es &agrave; l&rsquo;aide d&rsquo;un avertissement de rayonnement.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E14</p></td>
<td><p>Les hottes seront identifi&eacute;es pour montrer &agrave; quel ventilateur ou &agrave; quel syst&egrave;me de ventilation elles sont reli&eacute;es.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E15</p></td>
<td><p>La vitesse face des hottes se situera entre 0,38 et 0,51 m/s.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E16</p></td>
<td><p>Chaque hotte aura un dispositif de contr&ocirc;le continu pour assurer un fonctionnement appropri&eacute; de la hotte. </p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E17</p></td>
<td><p>Un entretien ad&eacute;quat sera donn&eacute; aux hottes et &agrave; son &eacute;chappement.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E18</p></td>
<td><p>Avant d&rsquo;utiliser la hotte, il faut la v&eacute;rifier pour s&rsquo;assurer du d&eacute;bit et de l&#39;absence de contre-courants.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E19</p></td>
<td><p>Des v&eacute;rifications de routine du rendement seront faites au moins une fois par ann&eacute;e pour s&rsquo;assurer que la hotte fonctionne correctement.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E20</p></td>
<td><p>Si la hotte est utilis&eacute;e pour stockage des substances nucl&eacute;aires, elle restera en marche en tout temps.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E21</p></td>
<td><p>Une alarme, visuelle ou audible, sera pr&eacute;sente pour indiquer les r&eacute;ductions de d&eacute;bit d&#39;air.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E22</p></td>
<td><p>Des dispositions seront en place pour s&rsquo;assurer que la hotte reste fonctionnelle si un syst&egrave;me de coupure automatique de routine apr&egrave;s les heures est en place. </p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E23</p></td>
<td><p>Les ventilateurs d&rsquo;extractions des hottes seront raccord&eacute;s &agrave; un syst&egrave;me d&rsquo;alimentation d&rsquo;urgence pour qu&rsquo;elles restent en fonction en cas de panne de courant.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E24</p></td>
<td><p>Les hottes ne contiendront pas de filtre. (Si une filtration est n&eacute;cessaire parce que des substances nucl&eacute;aires seront &eacute;mises r&eacute;guli&egrave;rement par la hotte ou parce qu&rsquo;il y a des dangers de nature biologique, des informations d&eacute;taill&eacute;es sur la filtration, y compris l&rsquo;examen du filtre et les &eacute;changes de filtres seront fournies.)</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E25</p></td>
<td><p>Les sorties d&rsquo;&eacute;vacuation des hottes ne seront pas raccord&eacute;s &agrave; d&#39;autres dispositifs d&#39;&eacute;chappement. </p>
<p>(Si oui, des informations d&eacute;taill&eacute;es seront fournies sur les dispositions  prises pour s&#39;assurer que le gaz d&rsquo;&eacute;chappement dans un secteur ne passe pas &agrave; un autre secteur.)</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E26</p></td>
<td><p>Les conduits d&rsquo;&eacute;vacuation des hottes seront fabriqu&eacute;s &agrave; l&rsquo;aide de mat&eacute;riaux r&eacute;sistants &agrave; la corrosion et tous les joints seront lisses et scell&eacute;s.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E27</p></td>
<td><p>Les conduits d&rsquo;&eacute;vacuation des hottes seront clairement identifi&eacute;s sur les plans fournis au personnel d&#39;entretien.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E28</p></td>
<td><p>Les conduits d&rsquo;&eacute;vacuation des hottes seront marqu&eacute;es &agrave; intervalles de 3 m&egrave;tres &agrave; l&rsquo;aide d&#39;avertissements de rayonnement.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E29</p></td>
<td><p>Les conduits d&rsquo;&eacute;vacuation des hottes contiendront seulement des sections verticales. (Si des sections horizontales doivent &ecirc;tre employ&eacute;es, des renseignements d&eacute;taill&eacute;s seront pr&eacute;sent&eacute;s pour montrer comment le condensat ou les liquides en provenance du point d&rsquo;expulsion seront limit&eacute;s; les canalisations horizontales auront une pente d&rsquo;au moins 2,5 centim&egrave;tres par 3 m&egrave;tres (un pouce par 10 pieds) vers le bas, dans la direction du d&eacute;bit d&#39;air, et menant &agrave; un drain appropri&eacute; ou &agrave; un puisard).</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E30</p></td>
<td><p>Les ventilateurs d&rsquo;&eacute;vacuation des hottes seront plac&eacute;s pr&egrave;s du point d&rsquo;&eacute;vacuation.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E31</p></td>
<td><p>Les ventilateurs d&rsquo;&eacute;vacuation des hottes seront situ&eacute;es &agrave; l&rsquo;ext&eacute;rieur du b&acirc;timent au point d&rsquo;&eacute;chappement final.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E32</p></td>
<td><p>Les sorties d&rsquo;&eacute;vacuation des hottes seront situ&eacute;es sur le toit, aussi loin que possible de point d&rsquo;approvisionnement en air pour emp&ecirc;cher la recirculation des &eacute;manations extraites (la distance recommand&eacute;e est d&rsquo;au moins 15,24 m par rapport &agrave; l&rsquo;admission).</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E33</p></td>
<td><p>Si la bouche d&rsquo;entr&eacute;e d&rsquo;air est &agrave; moins de 15,24 m du conduit vertical, on &eacute;vitera d&rsquo;installer des couvercles de protection contre la pluie sur les colonnes verticales.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E34</p></td>
<td><p>La capacit&eacute; de r&eacute;sistance au vent de la colonne verticale sera d&rsquo;au moins 1,4 fois la vitesse moyenne du vent.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E35</p></td>
<td><p>La hauteur de la colonne verticale d&eacute;passera d&rsquo;au moins 3,05 m le point adjacent le plus &eacute;lev&eacute; de la couverture ou de la bouche d&rsquo;entr&eacute;e d&rsquo;air. Le point d&rsquo;&eacute;vacuation sera dirig&eacute; directement &agrave; la verticale.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>E36</p></td>
<td><p>Les colonnes seront plac&eacute;es en aval des entr&eacute;es d&#39;air (en se basant sur la direction habituelle du vent).</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>  <p> </p>  <table >
<tr>
<td><p><strong>F</strong></p></td>
<td><p><strong>Blindage/contr&ocirc;le de la dose</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>Fl</p></td>
<td><p>Les &eacute;valuations de la dose pour les travailleurs du secteur nucl&eacute;aire et pour les autres seront annex&eacute;es comme &eacute;l&eacute;ment de cette demande (voir la rubrique 5.2 de ce guide pour avoir des d&eacute;tails).</p></td>
<td><p>Sup&eacute;rieur, </p>
<p>Confinement, </p>
<p>M&eacute;decine </p>
<p>nucl&eacute;aire, toutes pi&egrave;ces associ&eacute;es avec le m&eacute;decine nucl&eacute;aire v&eacute;t&eacute;rinaire</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>F2</p></td>
<td><p>Quand c&rsquo;est appropri&eacute;, un blindage localis&eacute; sera employ&eacute; l&agrave; o&ugrave; les substances nucl&eacute;aires doivent &ecirc;tre utilis&eacute;es ou stock&eacute;es selon les quantit&eacute;s de substances nucl&eacute;aires qui &eacute;mettent un rayonnement p&eacute;n&eacute;trant. </p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>F3</p></td>
<td><p>Quand c&rsquo;est appropri&eacute;, le blindage sera incorpor&eacute; dans la charpente de la pi&egrave;ce.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>F4</p></td>
<td><p>Une salle d&rsquo;attente &agrave; part sera disponible pour des patients qui ont re&ccedil;u des substances nucl&eacute;aires.</p></td>
<td><p>M&eacute;decine </p>
<p>nucl&eacute;aire</p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>  <p> </p>  <table >
<tr>
<td><p><strong>G</strong></p></td>
<td><p><strong>Divers</strong></p></td>
<td><p className=""><strong>Classification des pi&egrave;ces</strong></p></td>
<td><p className=""><strong>Oui</strong></p></td>
<td><p className=""><strong>Non</strong></p></td>
<td><p className=""><strong>S/O</strong></p></td>
</tr>
<tr>
<td><p>G1</p></td>
<td><p>Il n&rsquo;y aura pas d&rsquo;aire de pr&eacute;paration d&rsquo;utilisation et ou de stockage de nourriture ou boissons dans la pi&egrave;ce, sauf si c&rsquo;est n&eacute;cessaire pour la m&eacute;decine nucl&eacute;aire. Seuls les patients qui font l&rsquo;objet d&rsquo;&eacute;tudes peuvent consommer la nourriture ou les boissons dans les salles de m&eacute;decine nucl&eacute;aire.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G2</p></td>
<td><p>Les espaces de bureau et d&rsquo;&eacute;tude ne seront pas situ&eacute;s dans la pi&egrave;ce. </p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G3</p></td>
<td><p>Le d&eacute;placement des substances nucl&eacute;aires sera r&eacute;duit au minimum en les pla&ccedil;ant &agrave; proximit&eacute; des secteurs entre lesquels les substances nucl&eacute;aires doivent &ecirc;tre d&eacute;plac&eacute;es.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G4</p></td>
<td><p>Si la pi&egrave;ce ou la zone de stockage doivent &ecirc;tre utilis&eacute;es pour faire un travail n&rsquo;impliquant pas de substances nucl&eacute;aires, les secteurs doivent &ecirc;tre d&eacute;finis pour le travail impliquant ou non des substances nucl&eacute;aires.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G5</p></td>
<td><p>Les salles auront suffisamment d&rsquo;espace de comptoir et de plancher pour permettre aux gens de travailler sans risque. (G&eacute;n&eacute;ralement, il faut pr&eacute;voir au moins 3 m&egrave;tres carr&eacute;s de surface libre au sol pour chaque employ&eacute;.)</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G6</p></td>
<td><p>Un secteur accessible sera indiqu&eacute; pour entreposer le mat&eacute;riel et l&rsquo;&eacute;quipement utilis&eacute; pour la d&eacute;contamination et la supervision (trousses pour les d&eacute;versements, appareils de mesure, le cas &eacute;ch&eacute;ant, les compteurs de contamination lorsque c&rsquo;est n&eacute;cessaire).</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G7</p></td>
<td><p>Les services de m&eacute;decine nucl&eacute;aire auront des salles de toilette d&eacute;di&eacute;es aux patients de m&eacute;decine nucl&eacute;aire.</p></td>
<td><p>M&eacute;decine </p>
<p>nucl&eacute;aire </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>
<tr>
<td><p>G8</p></td>
<td><p>Un espace ad&eacute;quat sera disponible pour les d&eacute;chets radioactifs produits par le travail dans les laboratoires faisant appel &agrave; des substances nucl&eacute;aires ou aux pi&egrave;ces de m&eacute;decine nucl&eacute;aire. Cet espace peut se situer dans le laboratoire/pi&egrave;ce ou dans un secteur distinct.</p></td>
<td><p>Toutes </p></td>
<td>&#160; </td>
<td>&#160; </td>
<td>&#160; </td>
</tr>  </table>
<a name="#RDsection[20]#"></a>
<p><sup><a href="#P98_12402" name="P98_12401" id="P98_12401">1</a> </sup> Pour avoir une liste des quantit&eacute;s d&rsquo;exemption, consulter l&rsquo;annexe appropri&eacute;e du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement.</em></p>  <p><sup><a href="#P107_13938" name="P107_13937" id="P107_13937">2</a> </sup> Pour avoir une liste des limites annuelles d&rsquo;incorporation (LAI), consulter le Tableau A.1 de l&rsquo;Annexe A.</p>  <p><sup><a href="#P759_55648" name="P759_55647" id="P759_55647">3</a> </sup> NCRPM 124 <em>: Sources and Magnitudes of Occupational and Public Exposures from Nuclear Medicine Procedures; Handbook of Health Physics and Radiological Health</em></p>  <p><sup><a href="#P768_57697" name="P768_57696" id="P768_57696">4</a> </sup> NCRPM 124 <em>: Sources and Magnitudes of Occupational and Public Exposures from Nuclear Medicine Procedures</em>. (Les valeurs du kerma de l&rsquo;air ont &eacute;t&eacute; converties en dose en utilisant les valeurs NIST pour les coefficients d&rsquo;absorption d&rsquo;&eacute;nergie massique)</p>  <p><sup><a href="#P771_57981" name="P771_57980" id="P771_57980">5</a> </sup> NCRPM 124 : Les CDA &agrave; faisceau large ont &eacute;t&eacute; fournies et converties en couches d&rsquo;att&eacute;nuation au dixi&egrave;me.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }