import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: " Page Web archivée - GD-310 : Document d'orientation sur les analyses de la sûreté pour les centrales nucléaires", 
                dateModified: "2011-02-26",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/gd-352-1"
        
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
<h2 className="reportHeading2">Pr&eacute;face</h2>  <p>La gammagraphie industrielle est r&eacute;glement&eacute;e principalement par le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> (RSNAR). La gammagraphie industrielle est une m&eacute;thode d&#8217;essais non destructifs qui fait appel &agrave; des sources scell&eacute;es radioactives de haute activit&eacute; pour examiner la structure de soudures, de moulages et de composants de b&acirc;timents, afin de d&eacute;tecter les failles et les erreurs ou pour s&#8217;assurer que les travaux dans une zone n&#8217;auront pas d&#8217;incidence sur les syst&egrave;mes existants cach&eacute;s tels que les tuyaux et les fils &eacute;lectriques. L&#8217;utilisation d&#8217;un appareil d&#8217;exposition pour les essais non destructifs est b&eacute;n&eacute;fique, car il est portatif, n&#8217;exige aucune source d&#8217;&eacute;nergie externe et peut servir sur divers terrains.</p>  <p>L&#8217;utilisation de sources scell&eacute;es radioactives, avec leur potentiel d&#8217;administration imm&eacute;diate de doses &eacute;lev&eacute;es de rayonnement, signifie que la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) et la communaut&eacute; internationale per&ccedil;oivent la gammagraphie industrielle comme une activit&eacute; pr&eacute;sentant des risques &eacute;lev&eacute;s. </p>  <p>Le RSNAR exige que les appareils d&#8217;exposition, qui comprennent les accessoires connexes et tous les autres appareils &agrave; rayonnement, soient homologu&eacute;s par la CCSN avant d&#8217;&ecirc;tre utilis&eacute;s au Canada. Cette homologation ne saurait en aucun cas &ecirc;tre consid&eacute;r&eacute;e comme un permis d&#8217;utilisation, d&#8217;entretien ou d&#8217;installation. L&#8217;&eacute;quipement utilis&eacute; pour la gammagraphie industrielle doit &ecirc;tre homologu&eacute; par la CCSN avant de pouvoir &ecirc;tre utilis&eacute; au Canada.</p>  <p>Le pr&eacute;sent document contient des directives sur la conception, les essais et le rendement des appareils d&#8217;exposition afin de demander l&#8217;homologation d&#8217;un appareil d&#8217;exposition en vertu de l&#8217;article&nbsp;12 du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em>. Les demandes d&#8217;homologation doivent d&eacute;montrer de mani&egrave;re exhaustive que l&#8217;appareil d&#8217;exposition et ses accessoires sont con&ccedil;us pour fonctionner de mani&egrave;re s&ucirc;re. </p>  <p>Ce document ne couvre pas l&#8217;&eacute;tiquetage ni le transport des appareils d&#8217;exposition, pas plus que l&#8217;accr&eacute;ditation des op&eacute;rateurs d&#8217;appareil d&#8217;exposition et leurs obligations au moment d&#8217;utiliser ces appareils. Le <em>R&egrave;glement sur la radioprotection</em> et le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> &eacute;noncent les exigences d&#8217;&eacute;tiquetage et d&#8217;affichage pour les appareils d&#8217;exposition et les porte-sources, et le <em>R&egrave;glement sur l&#8217;emballage et le transport des substances nucl&eacute;aires</em> pr&eacute;cise les exigences en mati&egrave;re de transport. Ce r&egrave;glement exige que certains appareils d&#8217;exposition soient aussi homologu&eacute;s comme colis de type&nbsp;B(U). Le RSNAR r&eacute;git l&#8217;accr&eacute;ditation des op&eacute;rateurs d&#8217;appareil d&#8217;exposition et leurs obligations au moment de faire fonctionner un appareil d&#8217;exposition.</p>  <p>Le document&nbsp;RD/GD-352 traite abondamment de la norme&nbsp;ISO&nbsp;3999:2004 de l&#8217;Organisation internationale de normalisation (ISO), <em>Radioprotection&nbsp;&#8211; Appareils pour radiographie gamma industrielle&nbsp;&#8211; Sp&eacute;cifications de performance, de conception et d&#8217;essais</em> [<a href="#R1">1</a>].</p>  <p>Aucun &eacute;l&eacute;ment contenu dans ce document ne doit &ecirc;tre interpr&eacute;t&eacute; par le demandeur comme une autorisation de d&eacute;roger aux exigences des r&egrave;glements pertinents. Le demandeur a la responsabilit&eacute; d&#8217;identifier toutes les lois ou les normes applicables et d&#8217;y adh&eacute;rer.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table des mati&egrave;res</h2>  <div className="IndentLeft10">
<p><a href="#P71_6004"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P72_6020">1.1 Objet</a></p>
<p><a href="#P74_6231">1.2 Port&eacute;e</a></p>
<p><a href="#P77_7444">1.3 R&eacute;glementation pertinente</a></p>
<p><a href="#P90_8832">1.4 Normes nationales et internationales</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P93_9555"><strong>2.0 Crit&egrave;res d&#8217;examen de la demande</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P95_9823">2.1 Explication des termes</a></p>
<p><a href="#P109_11261">2.2 Principales sp&eacute;cifications de la norme ISO</a></p>
<p><a href="#P111_11849">2.3 Modification des exigences de la norme ISO</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P113_12012">2.3.1 Conception g&eacute;n&eacute;rale</a></p>
<p><a href="#P115_12384">2.3.2 Sources scell&eacute;es</a></p>
<p><a href="#P117_12629">2.3.3 Dispositifs de s&ucirc;ret&eacute;&nbsp;: fonctionnement du m&eacute;canisme de blocage automatique</a></p>
<p><a href="#P120_13383">2.3.4 S&eacute;curit&eacute; de la t&eacute;l&eacute;commande</a></p>
<p><a href="#P123_13836">2.3.5 R&eacute;sistance dans les conditions normales de service</a></p>
<p><a href="#P129_14979">2.3.6 Essai de stabilit&eacute; vibrationnelle</a></p>
<p><a href="#P131_15305">2.3.7 &Eacute;tiquetage</a></p>
<p><a href="#P133_15908">2.3.8 Documents d&#8217;accompagnement&nbsp;: instructions d&#8217;utilisation </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P135_16296">2.4 Sp&eacute;cifications non incluses dans la norme ISO</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P137_16405">2.4.1 Changeur de source</a></p>
<p><a href="#P139_16807">2.4.2 Gaine d&#8217;injection</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P141_17193">2.5 Utilisation d&#8217;&eacute;quipement auxiliaire autre que celui d&#8217;origine</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P147_18278"><strong>3.0 Homologation de la conception d&#8217;un appareil d&#8217;exposition</strong></a></p>
<p><strong><a href="#P150_18687">Glossaire</a></strong></p>
<p><strong><a href="#P203_23887">R&eacute;f&eacute;rences</a></strong></p>
<p><strong><a href="#P212_25028">Publications pertinentes</a></strong></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P71_6004" id="P71_6004"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P72_6020" id="P72_6020"></a>1.1 Objet</h3>  <p>Le pr&eacute;sent document fournit des directives sur la conception, les essais et le rendement des appareils d&#8217;exposition qui contiennent des sources scell&eacute;es radioactives,<em> </em>ainsi que de leurs accessoires.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P74_6231" id="P74_6231"></a>1.2 Port&eacute;e</h3>  <p>Le pr&eacute;sent document traite des sp&eacute;cifications relatives &agrave; la conception, aux essais et au rendement de tout le syst&egrave;me d&#8217;un appareil d&#8217;exposition, dont le syst&egrave;me t&eacute;l&eacute;command&eacute;, l&#8217;appareil d&#8217;exposition, la gaine d&#8217;injection et le changeur de source. L&#8217;utilisation d&#8217;accessoires de fabricants d&#8217;&eacute;quipements non originaux est aussi abord&eacute;e.</p>  <p>Ce document ne couvre pas l&#8217;&eacute;tiquetage ni le transport des appareils d&#8217;exposition, pas plus que l&#8217;accr&eacute;ditation des op&eacute;rateurs d&#8217;appareil d&#8217;exposition et leurs obligations au moment d&#8217;utiliser ces appareils. Le <em>R&egrave;glement sur la radioprotection</em> et le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> &eacute;noncent les exigences d&#8217;&eacute;tiquetage et d&#8217;affichage pour les appareils d&#8217;exposition et les porte-sources, et le <em>R&egrave;glement sur l&#8217;emballage et le transport des substances nucl&eacute;aires</em> pr&eacute;cise les exigences en mati&egrave;re de transport. Ce r&egrave;glement exige que certains appareils d&#8217;exposition soient aussi homologu&eacute;s comme colis de type&nbsp;B(U). Le RSNAR r&eacute;git l&#8217;accr&eacute;ditation des op&eacute;rateurs d&#8217;appareil d&#8217;exposition et leurs obligations au moment d&#8217;op&eacute;rer un appareil d&#8217;exposition.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P77_7444" id="P77_7444"></a>1.3 R&eacute;glementation pertinente</h3>  <p>Les dispositions du <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em> qui s&#8217;appliquent &agrave; ce document sont notamment les suivantes&nbsp;:</p>  <p>1. l&#8217;article&nbsp;1 d&eacute;finit les termes &laquo;&nbsp;appareil d&#8217;exposition&nbsp;&raquo;, &laquo;&nbsp;appareil &agrave; rayonnement&nbsp;&raquo;, &laquo;&nbsp;source scell&eacute;e&nbsp;&raquo; et &laquo;&nbsp;assemblage de source scell&eacute;e&nbsp;&raquo;; </p>  <p>2. les paragraphes&nbsp;11(1) et 11(2) stipulent que&nbsp;:</p>  <blockquote>
<p>&laquo;&nbsp;(1) Il est interdit d&#8217;utiliser un appareil &agrave; rayonnement &agrave; moins que celui-ci ne soit, selon le cas&nbsp;: </p>
<blockquote>
<p>(<em>a</em>) d&#8217;un mod&egrave;le homologu&eacute;;</p>
<p>(<em>b</em>) utilis&eacute; conform&eacute;ment au permis qui en autorise l&#8217;usage &agrave; des fins de<br />
d&eacute;veloppement.</p>
</blockquote>
<p>(2) Il est interdit de transf&eacute;rer un appareil &agrave; rayonnement pour usage au Canada &agrave; moins qu&#8217;il ne soit d&#8217;un mod&egrave;le homologu&eacute;.&nbsp;&raquo;</p>  </blockquote>  <p>3. le paragraphe&nbsp;12(1) pr&eacute;sente la liste de renseignements qu&#8217;une demande doit comprendre pour homologuer un appareil d&#8217;exposition; </p>  <p>4. le paragraphe&nbsp;12(2) pr&eacute;voit que &laquo;&nbsp;La Commission ou le fonctionnaire d&eacute;sign&eacute; peut demander tout autre renseignement n&eacute;cessaire [...]&nbsp;&raquo;;</p>  <p>5. l&#8217;article&nbsp;18 &eacute;num&egrave;re les exigences concernant les &eacute;preuves d&#8217;&eacute;tanch&eacute;it&eacute;.</p>  <p>La disposition du R&egrave;glement sur la radioprotection qui s&#8217;appliquent &agrave; ce document sont notamment le suivante&nbsp;:</p>  <p>1. Le paragraphe 20(1) &eacute;num&egrave;re les exigences concernant l&#8217;&eacute;tiquetage des r&eacute;cipients et des appareils &agrave; rayonnement.</p>
<a name="1.4"></a>
<h3><a name="P90_8832"></a>1.4 Normes nationales et internationales</h3>  <p>L&#8217;examen d&#8217;une demande d&#8217;homologation d&#8217;un appareil d&#8217;exposition repose sur la norme&nbsp;ISO 3999:2004 de l&#8217;Organisation internationale de normalisation, <em>Radioprotection&nbsp;&#8211; Appareils pour radiographie gamma industrielle&nbsp;&#8211; Sp&eacute;cifications de performance, de conception et d&#8217;essais</em> [<a href="#R1">1</a>]. Dans le cadre du pr&eacute;sent document, toute mention de la norme&nbsp;ISO fait r&eacute;f&eacute;rence &agrave; la norme&nbsp;ISO 3999:2004.</p>  <p>Aucun &eacute;l&eacute;ment contenu dans ce document ne doit &ecirc;tre interpr&eacute;t&eacute; par le demandeur comme une autorisation de d&eacute;roger aux exigences des r&egrave;glements pertinents. Le demandeur a la responsabilit&eacute; d&#8217;identifier toutes les lois ou les normes applicables et d&#8217;y adh&eacute;rer.</p>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P93_9555" id="P93_9555"></a>2.0 Crit&egrave;res d&#8217;examen de la demande</h2>  <p>Afin d&#8217;&eacute;valuer une demande d&#8217;homologation d&#8217;un appareil d&#8217;exposition, cette section d&eacute;crit les exigences de la CCSN en mati&egrave;re de renseignements, qui sont diff&eacute;rentes de celles formul&eacute;es dans la norme ISO&nbsp;3999:2004. </p>
<a name="2.1"></a>
<h3 className="reportHeading3"><a name="P95_9823" id="P95_9823"></a>2.1 Explication des termes</h3>  <p>Les termes suivants s&#8217;appliquent dans le cadre du document&nbsp;:</p>  <ol>
<li> la mention de norme ISO fait r&eacute;f&eacute;rence &agrave; la norme&nbsp;ISO&nbsp;3999:2004 de l&#8217;Organisation internationale de normalisation;</li>
<li> s&#8217;il y a lieu, les termes couramment utilis&eacute;s dans l&#8217;industrie sont (entre parenth&egrave;ses);</li>
<li> le terme &laquo;&nbsp;appareil pour radiographie gamma industrielle&nbsp;&raquo; est d&eacute;crit dans la norme&nbsp;ISO susmentionn&eacute;e. Toutefois, dans le pr&eacute;sent document, il est remplac&eacute; par le terme &laquo;&nbsp;appareil d&#8217;exposition&nbsp;&raquo;, tel que d&eacute;fini dans le RSNAR;</li>
<li> Un accessoire d&#8217;appareil d&#8217;exposition se d&eacute;crit comme tout &eacute;quipement utilis&eacute; en conjonction avec un projecteur qui commande ou guide l&#8217;assemblage de source scell&eacute;e ou qui entre en contact avec l&#8217;assemblage de source scell&eacute;e. </li>  </ol>  <blockquote>
<p>Les accessoires sont les suivants&nbsp;:</p>  </blockquote>  <ol className="lower-alpha">
<li> assemblage de source scell&eacute;e;</li>
<li> t&eacute;l&eacute;commande, qui comprend la gaine de c&acirc;ble de commande, le raccord du c&acirc;ble de commande, l&#8217;adaptateur de commande et le m&eacute;canisme de commande;</li>
<li> gaine d&#8217;injection (tube de guidage);</li>
<li> t&ecirc;te d&#8217;exposition;</li>
<li> obturateur de faisceau (collimateur)&nbsp;&#8211;&nbsp;con&ccedil;u comme pi&egrave;ce int&eacute;grante d&#8217;une t&ecirc;te d&#8217;exposition;<em><br />
Remarque&nbsp;:</em> Un obturateur de faisceau con&ccedil;u pour &ecirc;tre fix&eacute; sur la t&ecirc;te d&#8217;exposition n&#8217;est pas un accessoire et, par cons&eacute;quent, ne n&eacute;cessite pas d&#8217;homologation.</li>
<li> moteur d&#8217;appareils d&#8217;exposition &eacute;lectriques; </li>
<li> changeur de source.</li>  </ol>
<a name="2.2"></a>
<h3 className="reportHeading3"><a name="P109_11261" id="P109_11261"></a>2.2 Principales sp&eacute;cifications de la norme ISO</h3>  <p>La conception d&#8217;un appareil d&#8217;exposition doit respecter le principe du niveau le plus faible qu&#8217;il soit raisonnablement possible d&#8217;atteindre (niveau ALARA). La demande doit d&eacute;crire les options de conception de l&#8217;appareil, ainsi que les r&eacute;sultats de l&#8217;&eacute;valuation du niveau ALARA de ces options, menant au choix de la conception soumise &agrave; des fins d&#8217;homologation. La demande doit comprendre une &eacute;valuation des doses de rayonnement pr&eacute;vues li&eacute;es &agrave; la conception finale, ainsi que les facteurs cl&eacute;s qui orientent ce choix.</p>
<a name="2.3"></a>
<h3 className="reportHeading3"><a name="P111_11849" id="P111_11849"></a>2.3 Modification des exigences de la norme ISO</h3>  <p>Les recommandations suivantes compl&egrave;tent la norme ISO&nbsp;3999:2004 dans le but de satisfaire aux exigences de la CCSN.</p>
<a name="2.3.1"></a>
<h4 className="reportHeading4"><em><a name="P113_12012" id="P113_12012"></a></em>2.3.1 Conception g&eacute;n&eacute;rale</h4>  <p>La norme ISO&nbsp;3999:2004 exige que la conception des appareils d&#8217;exposition leur permette de fonctionner &agrave; des temp&eacute;ratures se situant entre -10&nbsp;&deg;C et 45&nbsp;&deg;C. Toutefois, compte tenu du climat canadien, les appareils devraient fonctionner de mani&egrave;re satisfaisante dans une plage de temp&eacute;ratures plus large, soit entre -40&nbsp;&deg;C et 45&nbsp;&deg;C.</p>
<a name="2.3.2"></a>
<h4 className="reportHeading4"><em><a name="P115_12384" id="P115_12384"></a></em>2.3.2 Sources scell&eacute;es</h4>  <p>La norme ISO&nbsp;3999:2004 exige que la source scell&eacute;e radioactive soit conforme &agrave; la norme ISO&nbsp;2919:1999&nbsp;[<a href="#R2">2</a>]. L&#8217;ANSI&nbsp;N43.6-1997&nbsp;[<a href="#R3">3</a>] est aussi acceptable pour l&#8217;homologation des appareils d&#8217;exposition par la CCSN.</p>
<a name="2.3.3"></a>
<h4 className="reportHeading4"><em><a name="P117_12629" id="P117_12629"></a></em>2.3.3 Dispositifs de s&ucirc;ret&eacute;&nbsp;: fonctionnement du m&eacute;canisme de blocage automatique</h4>  <p>La norme ISO ne couvre pas les appareils d&#8217;exposition qui utilisent un m&eacute;canisme d&#8217;obturation pour blinder l&#8217;assemblage de source scell&eacute;e dans la position de blocage. Dans ces cas, le m&eacute;canisme d&#8217;obturation doit comprendre un m&eacute;canisme qui le bloque automatiquement en position blind&eacute;e chaque fois que l&#8217;assemblage de source scell&eacute;e repasse de la position d&#8217;exposition &agrave; la position enti&egrave;rement blind&eacute;e. Une op&eacute;ration intentionnelle sur l&#8217;appareil d&#8217;exposition ou la t&eacute;l&eacute;commande devrait &ecirc;tre requise pour d&eacute;gager le m&eacute;canisme d&#8217;obturation.</p>  <p>Le m&eacute;canisme de blocage ne devrait jamais emp&ecirc;cher la source de reprendre la position blind&eacute;e.</p>
<a name="2.3.4"></a>
<h4 className="reportHeading4"><em><a name="P120_13383" id="P120_13383"></a></em>2.3.4 S&eacute;curit&eacute; de la t&eacute;l&eacute;commande</h4>  <p>Si le m&eacute;canisme de commande comprend un dispositif servant &agrave; indiquer la distance de parcours du c&acirc;ble de commande, il doit &ecirc;tre possible d&#8217;ajuster la position &laquo; z&eacute;ro &raquo;.</p>  <p>La norme ISO&nbsp;3999:2004 ne traite pas des t&eacute;l&eacute;commandes qui fonctionnent &agrave; l&#8217;aide de syst&egrave;mes hydrauliques, pneumatiques ou &agrave; vide. Dans ces cas, il doit exister un moyen de d&eacute;tecter toute fuite dans le syst&egrave;me de t&eacute;l&eacute;commande.</p>
<a name="2.3.5"></a>
<h4 className="reportHeading4"><em><a name="P123_13836" id="P123_13836"></a></em>2.3.5 R&eacute;sistance dans les conditions normales de service</h4>  <p><em><strong>2.3.5.1 G&eacute;n&eacute;ral</strong></em></p>  <p>&Agrave; moins que l&#8217;appareil d&#8217;exposition et ses accessoires n&#8217;aient d&eacute;j&agrave; fait l&#8217;objet d&#8217;essais similaires ou plus rigoureux pour d&#8217;autres normes, il doit &ecirc;tre soumis aux essais d&eacute;crits dans la norme ISO&nbsp;3999:2004. Les appareils d&#8217;exposition produits doivent &ecirc;tre &eacute;quivalents &agrave; l&#8217;unit&eacute; test&eacute;e.</p>  <p>La r&eacute;f&eacute;rence au document IAEA-STI-PUB&nbsp;998 devrait &ecirc;tre remplac&eacute;e par le <em>R&egrave;glement de transport des mati&egrave;res radioactives</em> des normes de s&eacute;curit&eacute; n&deg;TS-R-1 de l&#8217;AIEA, &eacute;dition de 1996 (r&eacute;vis&eacute;e)&nbsp;[<a href="#R4">4</a>] et le document <em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material Safety Guide</em> de la Collection Normes de s&ucirc;ret&eacute; n&deg; ST-2 de l&#8217;AIEA&nbsp;[<a href="#R5">5</a>].</p>  <p><em><strong>2.3.5.2 Essai d&#8217;endurance</strong></em></p>  <p>L&#8217;essai d&#8217;endurance doit mener &agrave; la conclusion que l&#8217;appareil d&#8217;exposition fonctionne normalement et que l&#8217;int&eacute;grit&eacute; de la gaine libre ou de l&#8217;enceinte du blindage n&#8217;est pas alt&eacute;r&eacute;e par l&#8217;usure. Un endoscope, ou un appareil d&#8217;essai &eacute;quivalent, doit &ecirc;tre utilis&eacute; pour d&eacute;celer toute fatigue ou usure du tube en S.</p>
<a name="2.3.6"></a>
<h4 className="reportHeading4"><em><a name="P129_14979" id="P129_14979"></a></em>2.3.6 Essai de stabilit&eacute; vibrationnelle</h4>  <p>Il est possible d&#8217;utiliser l&#8217;essai aux vibrations d&eacute;crit au paragraphe&nbsp;6.4.5 de la norme ISO&nbsp;3999:2004 ou celui d&eacute;crit au paragraphe&nbsp;6.2.2 de la norme ANSI&nbsp;N43.9-1991, <em>American National Standard for Gamma Radiography&nbsp;- Specifications for Design and Testing of Apparatus</em>&nbsp;[<a href="#R6">6</a>].</p>
<a name="2.3.7"></a>
<h4 className="reportHeading4"><em><a name="P131_15305" id="P131_15305"></a></em>2.3.7 &Eacute;tiquetage</h4>  <p>Le paragraphe&nbsp;20(1) du <em>R&egrave;glement sur la radioprotection</em> doit &ecirc;tre respect&eacute; en ce qui a trait &agrave; l&#8217;&eacute;tiquetage des r&eacute;cipients et des appareils &agrave; rayonnement. Les r&eacute;cipients et les appareils doivent porter une &eacute;tiquette sur laquelle figurent le symbole de mise en garde contre les rayonnements ionisants (voir l&#8217;annexe&nbsp;3 du R&egrave;glement) et les mots &laquo;&nbsp;RAYONNEMENT&nbsp;&#8211; DANGER&nbsp;&#8211; RADIATION&nbsp;&raquo;. Les composantes essentielles de l&#8217;&eacute;quipement connexe, &agrave; l&#8217;exception du c&acirc;ble de commande, doivent &ecirc;tre inscrites de fa&ccedil;on durable et lisible pour identifier le fabricant.</p>
<a name="2.3.8"></a>
<h4 className="reportHeading4"><em><a name="P133_15908" id="P133_15908"></a></em>2.3.8 Documents d&#8217;accompagnement&nbsp;: instructions d&#8217;utilisation</h4>  <p>En plus de la liste figurant au paragraphe&nbsp;9.3 de la norme ISO, des instructions sur les conditions et les restrictions concernant l&#8217;utilisation doivent &ecirc;tre fournies, y compris les conditions ambiantes (comme la temp&eacute;rature, la pression et l&#8217;humidit&eacute;), l&#8217;environnement chimique et les restrictions sous l&#8217;eau.</p>
<a name="2.4"></a>
<h3 className="reportHeading3"><a name="P135_16296" id="P135_16296"></a>2.4 Sp&eacute;cifications non incluses dans la norme ISO</h3>  <p>Les recommandations suivantes s&#8217;ajoutent &agrave; la norme ISO.</p>
<a name="2.4.1"></a>
<h4 className="reportHeading4"><em><a name="P137_16405" id="P137_16405"></a></em>2.4.1 Changeur de source</h4>  <p>Les changeurs de source devraient &ecirc;tre &eacute;quip&eacute;s d&#8217;un m&eacute;canisme de verrouillage con&ccedil;u pour emp&ecirc;cher le d&eacute;gagement par inadvertance de la source pendant le transfert des assemblages de source &agrave; partir du projecteur et vers celui-ci. Ce m&eacute;canisme devrait aussi permettre d&#8217;&eacute;viter que la source scell&eacute;e sorte, par inadvertance ou par accident, de sa position blind&eacute;e.</p>
<a name="2.4.2"></a>
<h4 className="reportHeading4"><em><a name="P139_16807" id="P139_16807"></a></em>2.4.2 Gaine d&#8217;injection</h4>  <p>La gaine d&#8217;injection (tube de guidage) devrait comprendre une t&ecirc;te d&#8217;exposition ou &ecirc;tre con&ccedil;ue pour qu&#8217;une t&ecirc;te d&#8217;exposition puisse y &ecirc;tre fix&eacute;e. Ceci devrait emp&ecirc;cher l&#8217;assemblage de source scell&eacute;e de sortir par l&#8217;extr&eacute;mit&eacute; de la gaine d&#8217;injection.<em><br />
Remarque&nbsp;</em>: Un obturateur de faisceau (collimateur) peut servir de t&ecirc;te d&#8217;exposition.</p>
<a name="2.5"></a>
<h3 className="reportHeading3"><a name="P141_17193" id="P141_17193"></a>2.5 Utilisation d&#8217;&eacute;quipement auxiliaire autre que celui d&#8217;origine</h3>  <p>L&#8217;&eacute;quipement auxiliaire ou les composantes de fabricants d&#8217;&eacute;quipement autre que celui d&#8217;origine peuvent &ecirc;tre utilis&eacute;s, &agrave; condition que cet &eacute;quipement auxiliaire ou que ces composantes remplissent les crit&egrave;res suivants et aient &eacute;t&eacute; homologu&eacute;s par la CCSN&nbsp;:</p>  <ol>
<li> La taille, les sp&eacute;cifications des mat&eacute;riaux et les dimensions sont identiques &agrave; celles du prototype qui a &eacute;t&eacute; test&eacute; conform&eacute;ment &agrave; la norme ISO&nbsp;3999:2004; et</li>
<li> ils sont construits dans le respect des exigences en mati&egrave;re d&#8217;assurance de la qualit&eacute; sp&eacute;cifi&eacute;es dans la norme ISO&nbsp;3999:2004; ou</li>
<li> il a &eacute;t&eacute; prouv&eacute;, par des essais sur prototype document&eacute;s ou des m&eacute;thodes analytiques, que les accessoires ou les composantes autres que ceux d&#8217;origine correspondent aux sp&eacute;cifications en mati&egrave;re de conception, d&#8217;essai et de rendement de la norme ISO&nbsp;3999:2004.</li>  </ol>  <p>Plut&ocirc;t que d&#8217;homologuer chaque composante, la CCSN homologue seulement l&#8217;&eacute;quipement auxiliaire complet en tant qu&#8217;unit&eacute; pour un projecteur particulier.</p>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P147_18278" id="P147_18278"></a>3.0 Homologation de la conception d&#8217;un appareil d&#8217;exposition</h2>  <p>Une fois d&eacute;livr&eacute;e, l&#8217;homologation d&#8217;un appareil d&#8217;exposition ne s&#8217;applique qu&#8217;&agrave; une conception de mod&egrave;le de projecteur, ainsi qu&#8217;&agrave; des conditions de fonctionnement et &agrave; des accessoires pr&eacute;cis. Tout changement &agrave; la conception ou &agrave; l&#8217;utilisation pourrait n&eacute;cessiter une nouvelle homologation de l&#8217;appareil &agrave; rayonnement.</p>
<a name="#RDsection[ArrayLen(RDsection)-2]#"></a>
<h2 className="reportHeading2"><a name="P150_18687" id="P150_18687"></a>Glossaire</h2>  <p>Les termes et d&eacute;finitions suivants sont utilis&eacute;s aux fins du pr&eacute;sent document d&#8217;orientation. Les d&eacute;finitions tir&eacute;es de la norme ISO&nbsp;3999:2004 sont marqu&eacute;es d&#8217;un ast&eacute;risque&nbsp;(*), et les termes couramment utilis&eacute;s dans l&#8217;industrie sont entre parenth&egrave;ses.</p>  <dl className="margins-removed">
<dt>Endoscope</dt>
<dd>Appareil d&#8217;inspection compos&eacute; d&#8217;un tube optique rigide ou flexible, que l&#8217;on introduit dans les trous et les cavit&eacute;s pour les inspecter. Il est constitu&eacute; d&#8217;une lentille plac&eacute;e &agrave; l&#8217;avant d&#8217;un long tube contenant des relais d&#8217;image et d&#8217;illumination.</dd>
<dt>Obturateur de faisceau* (collimateur)</dt>
<dd>Dispositif de blindage, situ&eacute; &agrave; l&#8217;endroit o&ugrave; la source est expos&eacute;e, con&ccedil;u pour r&eacute;duire le d&eacute;bit de dose de rayonnement dans les directions autre que celle voulue.<br />
<br />
<em>Remarque&nbsp;</em>: L&#8217;obturateur de faisceau peut &ecirc;tre con&ccedil;u pour &ecirc;tre utilis&eacute; avec une t&ecirc;te d&#8217;exposition, ou une t&ecirc;te d&#8217;exposition peut y &ecirc;tre int&eacute;gr&eacute;e en tant que partie int&eacute;grante du dispositif.</dd>
<dt>Adaptateur de commande</dt>
<dd>Composante de l&#8217;assemblage de commande qui fixe celui-ci au projecteur.</dd>
<dt>Assemblage de commande, m&eacute;canisme de commande</dt>
<dd>Voir T&eacute;l&eacute;commande.</dd>
<dt>C&acirc;ble de commande*</dt>
<dd>C&acirc;ble ou autre outil m&eacute;canique utilis&eacute; pour faire entrer l&#8217;assemblage de source scell&eacute;e dans le projecteur ou l&#8217;en faire sortir &agrave; l&#8217;aide d&#8217;une t&eacute;l&eacute;commande.</dd>
<dt>Raccord du c&acirc;ble de commande</dt>
<dd>Composante utilis&eacute;e pour fixer le c&acirc;ble de commande &agrave; l&#8217;assemblage de source.</dd>
<dt>Gaine du c&acirc;ble de commande*</dt>
<dd>Tube rigide ou flexible servant &agrave; prot&eacute;ger physiquement le c&acirc;ble de commande et &agrave; le guider jusqu&#8217;au projecteur &agrave; l&#8217;aide d&#8217;une t&eacute;l&eacute;commande.</dd>
<dt>Composantes essentielles de l&#8217;appareil d&#8217;exposition</dt>
<dd>Composantes essentielles au fonctionnement s&eacute;curitaire de l&#8217;appareil d&#8217;exposition, afin d&#8217;emp&ecirc;cher une mauvaise connexion ou une d&eacute;connexion. Elles incluent le raccord de la gaine d&#8217;injection, l&#8217;adaptateur de commande, le c&acirc;ble de commande et l&#8217;assemblage de source.</dd>
<dt>D&eacute;connect&eacute;</dt>
<dd>&Eacute;tat dans lequel se trouve l&#8217;assemblage de source scell&eacute;e lorsqu&#8217;il est d&eacute;gag&eacute; par inadvertance du c&acirc;ble de commande.</dd>
<dt>M&eacute;canisme de commande</dt>
<dd>Voir T&eacute;l&eacute;commande.</dd>
<dt>Projecteur* (cam&eacute;ra de gammagraphie)</dt>
<dd>Gaine en forme de contenant con&ccedil;ue pour permettre l&#8217;utilisation contr&ocirc;l&eacute;e du rayonnement gamma et d&#8217;un assemblage de source scell&eacute;e.</dd>
<dt>Organe de transmission de la source de l&#8217;appareil d&#8217;exposition</dt>
<dd>Tube, &agrave; l&#8217;int&eacute;rieur du projecteur, dans lequel se trouve la source scell&eacute;e lorsqu&#8217;elle n&#8217;est pas utilis&eacute;e (souvent appel&eacute; tube en S).</dd>
<dt>T&ecirc;te d&#8217;exposition*</dt>
<dd>Dispositif qui dirige la source scell&eacute;e dans l&#8217;assemblage de source scell&eacute;e &agrave; l&#8217;endroit o&ugrave; la source est expos&eacute;e, et qui emp&ecirc;che l&#8217;assemblage de source scell&eacute;e de sortir de la gaine d&#8217;injection.<br />
<br />
<em>Remarque&nbsp;</em>: Un obturateur de faisceau peut aussi servir de t&ecirc;te d&#8217;exposition.</dd>
<dt>Position verrouill&eacute;e*</dt>
<dd>&Eacute;tat dans lequel se trouve un assemblage de source scell&eacute;e, avec un projecteur ou un changeur de source, lorsqu&#8217;il est dans la position de blocage verrouill&eacute;e.</dd>
<dt>Mauvaise connexion</dt>
<dd>&Eacute;tat dans lequel se trouve la t&eacute;l&eacute;commande lorsqu&#8217;elle est fix&eacute;e au projecteur sans que le c&acirc;ble de commande ne soit fix&eacute; &agrave; l&#8217;assemblage de source scell&eacute;e.</dd>
<dt>Gaine d&#8217;injection* (tube de guidage)</dt>
<dd>Tube flexible ou rigide servant &agrave; guider l&#8217;assemblage de source scell&eacute;e du projecteur &agrave; l&#8217;endroit o&ugrave; la source est expos&eacute;e et &agrave; fournir les connections n&eacute;cessaires pour le fixer au projecteur et &agrave; la t&ecirc;te d&#8217;exposition, &agrave; moins qu&#8217;il ne comprenne d&eacute;j&agrave; la t&ecirc;te d&#8217;exposition.</dd>
<dt>Raccord de la gaine d&#8217;injection (raccord du tube de guidage)</dt>
<dd>Composante utilis&eacute;e pour fixer le tube de guidage &agrave; l&#8217;appareil d&#8217;exposition.</dd>
<dt>T&eacute;l&eacute;commande* (syst&egrave;me de t&eacute;l&eacute;commande, m&eacute;canisme &agrave; manivelle, assemblage de commande, m&eacute;canisme de commande)</dt>
<dd>Dispositif permettant &agrave; l&#8217;op&eacute;rateur de d&eacute;placer l&#8217;assemblage de source scell&eacute;e &agrave; partir de l&#8217;endroit o&ugrave; la source est expos&eacute;e ou jusqu&#8217;&agrave; cet endroit tout en restant &agrave; une distance s&eacute;curitaire du projecteur.<br />
<br />
<em>Remarque&nbsp;</em>: La t&eacute;l&eacute;commande inclut le m&eacute;canisme de commande et, le cas &eacute;ch&eacute;ant, le c&acirc;ble de commande, la gaine du c&acirc;ble de commande ainsi que les raccords et les fixations n&eacute;cessaires, le cas &eacute;ch&eacute;ant.</dd>
<dt>Position de blocage*</dt>
<dd>&Eacute;tat dans lequel se trouvent le projecteur et l&#8217;assemblage de source scell&eacute;e lorsque la source scell&eacute;e est enti&egrave;rement blind&eacute;e et que son mouvement est restreint dans le projecteur.<br />
<br />
<em>Remarque&nbsp;</em>: Dans la position de blocage, le dispositif n&#8217;a pas besoin d&#8217;&ecirc;tre verrouill&eacute;.</dd>
<dt>Changeur de source</dt>
<dd>Dispositif utilis&eacute; pour stocker, transporter et changer les assemblages de source des appareils d&#8217;exposition.</dd>
<dt>Porte-source*</dt>
<dd>Support, ou dispositif de fixation, gr&acirc;ce auquel une source scell&eacute;e ou une source simul&eacute;e peut &ecirc;tre incluse directement dans le projecteur ou plac&eacute;e &agrave; l&#8217;extr&eacute;mit&eacute; du c&acirc;ble de commande.<br />
<br />
<em>Remarque&nbsp;</em>: Le porte-source peut &ecirc;tre une partie int&eacute;grante de l&#8217;assemblage de source scell&eacute;e ou peut &ecirc;tre d&eacute;montable afin de remplacer la source scell&eacute;e.</dd>
<dt>Colis de transport de type&nbsp;B(U)</dt>
<dd>Colis con&ccedil;u et &eacute;prouv&eacute; conform&eacute;ment au <em>R&egrave;glement de transport des mati&egrave;res radioactives</em> de la Norme de s&ucirc;ret&eacute; n&deg; TS-R-1 de l&#8217;AIEA.</dd>  </dl>
<a name="#RDsection[ArrayLen(RDsection)-1]#"></a>
<h2 className="reportHeading2"><a name="P203_23887" id="P203_23887"></a>R&eacute;f&eacute;rences</h2>  <ol>
<li><a name="R1"></a>Organisation internationale de normalisation (ISO), ISO&nbsp;3999:2004, <em>Radioprotection&nbsp;&#8211; Appareils pour radiographie gamma industrielle&nbsp;&#8211; Sp&eacute;cifications de performance, de conception et d&#8217;essais</em>, deuxi&egrave;me &eacute;dition, Gen&egrave;ve, 2004.</li>
<li><a name="R2"></a> Organisation internationale de normalisation (ISO), ISO&nbsp;2919:1999, <em>Radioprotection&nbsp;&#8211; Sources radioactives scell&eacute;es&nbsp;&#8211; Prescriptions g&eacute;n&eacute;rales et classification,</em> Gen&egrave;ve, 1999.</li>
<li> <a name="R3"></a>American National Standards Institute, ANSI/HPS&nbsp;N43.6-1997, <em>Sealed Radioactive Sources&nbsp;- Classification</em>, New York, 1997.</li>
<li><a name="R4" id="R4"></a>Agence internationale de l&#8217;&eacute;nergie atomique, Normes de s&ucirc;ret&eacute; n&deg;&nbsp;TS-R-1, <em>R&egrave;glement de transport des mati&egrave;res radioactives</em>, &Eacute;dition de 1996 (R&eacute;vis&eacute;e), Vienne, 1996.</li>
<li><a name="R5"></a>Agence internationale de l&#8217;&eacute;nergie atomique, <em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material, Safety Guide</em> TS-G-1.1<em>, </em>Collection Normes de s&ucirc;ret&eacute; de l&#8217;AIEA, Vienne, 2002.</li>
<li><a name="R6"></a>American National Standards Institute, ANSI&nbsp;N43.9-1991, <em>American National Standard for Gamma Radiography&nbsp;- Specifications for Design and Testing of Apparatus</em>, New York, 1991.</li>  </ol>
<a name="#RDsection[ArrayLen(RDsection)]#"></a>
<h2 className="reportHeading2"><a name="P212_25028" id="P212_25028"></a>Publications pertinentes</h2>  <ol>
<li> Organisation internationale de normalisation, ISO&nbsp;9001:2000, <em>Syst&egrave;mes de management de la qualit&eacute;&nbsp;&#8211; Exigences</em>, troisi&egrave;me &eacute;dition, Gen&egrave;ve, 2000.</li>
<li> American National Standards Institute, ANSI&nbsp;N43.2-1980, <em>Radiological Safety for the Design and Construction of Apparatus for Gamma Radiography</em>, New York, 1997.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }