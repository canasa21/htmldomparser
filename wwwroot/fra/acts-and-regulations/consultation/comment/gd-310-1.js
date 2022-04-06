import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Page Web archivée - GD-310 : Document d'orientation sur les analyses de la sûreté pour les centrales nucléaires ", 
                dateModified: "2011-08-18",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/gd-310-1"
        
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
<h2 className="reportHeading2">Pr&eacute;face</h2>  <p>Le document d&#8217;orientation GD-310, <em>Document d&#8217;orientation sur les analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>, explique comment respecter les exigences &eacute;tablies dans le document d&#8217;application de la r&eacute;glementation RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>. </p>  <p>Dans la mesure du possible, les directives fournies dans le pr&eacute;sent document sont neutres sur le plan technologique pour ce qui est des r&eacute;acteurs refroidis &agrave; l&#8217;eau. Le pr&eacute;sent document contient les crit&egrave;res pour s&#8217;assurer que les rapports d&#8217;analyse de s&ucirc;ret&eacute; d&eacute;terministe d&eacute;montrent clairement la s&ucirc;ret&eacute; de la centrale nucl&eacute;aire. Il fournit de l&#8217;information sur la pr&eacute;paration et la pr&eacute;sentation des rapports d&#8217;analyse de s&ucirc;ret&eacute;, y compris la s&eacute;lection des &eacute;v&eacute;nements &agrave; analyser, les crit&egrave;res d&#8217;acceptation, les m&eacute;thodes d&#8217;analyse, ainsi que la documentation, la revue et la mise &agrave; jour de l&#8217;analyse de la s&ucirc;ret&eacute;. </p>  <p>Le pr&eacute;sent document fournit des directives au sujet d&#8217;une m&eacute;thode ax&eacute;e sur les risques pour la cat&eacute;gorisation des accidents. Cette m&eacute;thode tient compte de tout un &eacute;ventail d&#8217;&eacute;v&eacute;nements possibles et notamment les &eacute;v&eacute;nements ayant le plus de retomb&eacute;es pour le public. </p>  <p>Les principes et &eacute;l&eacute;ments cl&eacute;s utilis&eacute;s dans l&#8217;&eacute;laboration du pr&eacute;sent guide d&#8217;orientation et du document connexe d&#8217;application de la r&eacute;glementation sont conformes aux normes nationales et internationales. </p>  <p>Aucune information contenue dans le pr&eacute;sent guide ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le titulaire de permis de ses obligations. Il incombe au titulaire de permis de recenser l&#8217;ensemble des r&egrave;glements et des conditions de permis applicables, et de s&#8217;y conformer.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2"> Table des mati&egrave;res</h2>  <div className="IndentLeft10">
<p><a href="#P113_4498"><strong>1.0 Objet</strong></a></p>
<p><a href="#P115_4996"><strong>2.0 Port&eacute;e</strong></a></p>
<p><a href="#P119_5844"><strong>3.0 L&eacute;gislation pertinente</strong></a></p>
<p><a href="#P129_9051"><strong>4.0 R&ocirc;les et objectifs de l&#8217;analyse de s&ucirc;ret&eacute;</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P139_12147">4.1 R&ocirc;les de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;</a></p>
<p><a href="#P143_13568">4.2 Objectifs de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;</a></p>
<p><a href="#P163_16205">4.3 R&ocirc;les de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; dans la confirmation de la d&eacute;fense en profondeur</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P175_19002"><strong>5.0 Exigences de l&#8217;analyse de s&ucirc;ret&eacute;</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P176_19041">5.1 Responsabilit&eacute;s</a></p>
<p><a href="#P188_20400">5.2 &Eacute;v&eacute;nements &agrave; analyser</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P189_20428">5.2.1 Identification des &eacute;v&eacute;nements</a></p>
<p><a href="#P214_24343">5.2.2 Port&eacute;e des &eacute;v&eacute;nements</a></p>
<p><a href="#P266_32344">5.2.3 Classification des &eacute;v&eacute;nements</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P351_44141">5.3 Crit&egrave;res d&#8217;acceptation</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P353_44628">5.3.1 Exploitation normale</a></p>
<p><a href="#P362_46059">5.3.2 Incidents de fonctionnement pr&eacute;vus et accidents de dimensionnement</a></p>
<p><a href="#P390_51607">5.3.3 Accidents hors dimensionnement</a></p>
<p><a href="#P403_54475">5.3.4 Crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s relatifs aux incidents de fonctionnement pr&eacute;vus et aux accidents de dimensionnement</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P414_57503">5.4 Hypoth&egrave;ses et m&eacute;thodes d&#8217;analyse de s&ucirc;ret&eacute;</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P415_57555">5.4.1 Dispositions g&eacute;n&eacute;rales</a></p>
<p><a href="#P419_58420">5.4.2 M&eacute;thode d&#8217;analyse</a></p>
<p><a href="#P486_69540">5.4.3 Donn&eacute;es d&#8217;analyse</a></p>
<p><a href="#P521_73901">5.4.4 Hypoth&egrave;ses utilis&eacute;es pour l&#8217;analyse</a></p>
<p><a href="#P736_94225">5.4.5 Codes informatiques</a></p>
<p><a href="#P785_103378">5.4.6 Marge de prudence dans l&#8217;analyse</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P798_106581">5.5 Documentation de l&#8217;analyse de s&ucirc;ret&eacute;</a></p>
<p><a href="#P810_108944">5.6 Revue et mise &agrave; jour de l&#8217;analyse de la s&ucirc;ret&eacute;</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P811_108999">5.6.1 Revue des r&eacute;sultats de l&#8217;analyse de la s&ucirc;ret&eacute;</a></p>
<p><a href="#P834_111316">5.6.2 Mise &agrave; jour de l&#8217;analyse de la s&ucirc;ret&eacute;</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P852_113674">5.7 Qualit&eacute; de l&#8217;analyse de s&ucirc;ret&eacute;</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P866_114810"><strong>Annexe A : Exemples de classifications d&rsquo;&eacute;v&eacute;nements</strong></a></p>
<p><a href="#P1808_128161"><strong>Annexe B : Exemples de crit&egrave;res d&rsquo;acceptation d&eacute;riv&eacute;s</strong></a></p>
<p><a href="#P180_12816"><strong>Abr&eacute;viations</strong></a></p>
<p><a href="#P2014_136706"><strong>Glossaire</strong></a></p>
<p><a href="#P2082_144830"><strong>Renseignements suppl&eacute;mentaires</strong></a></p>  </div> <a name="1.0"></a>
<h2 className="reportHeading2"><a name="P113_4498" id="P113_4498"></a>1.0 Objet</h2>  <p>Le pr&eacute;sent document d&#8217;orientation clarifie les exigences r&eacute;glementaires du document d&#8217;application de la r&eacute;glementation RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>. Il&nbsp;fournit l&#8217;information n&eacute;cessaire pour assurer que les analyses d&eacute;terministes de s&ucirc;ret&eacute; pertinentes sont effectu&eacute;es pour d&eacute;montrer la s&ucirc;ret&eacute; de l&#8217;installation nucl&eacute;aire. Cette information facilite la r&eacute;alisation, l&#8217;examen et l&#8217;approbation des analyses d&eacute;terministes de s&ucirc;ret&eacute;.</p>   <a name="2.0"></a>
<h2 className="reportHeading2"><a name="P115_4996" id="P115_4996"></a>2.0 Port&eacute;e</h2>  <p>Le pr&eacute;sent document porte sur l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; et fournit de l&#8217;information sur la pr&eacute;paration et la pr&eacute;sentation des rapports qui y sont reli&eacute;s, y compris la s&eacute;lection des &eacute;v&eacute;nements &agrave; analyser, les crit&egrave;res d&#8217;acceptation, les m&eacute;thodes d&#8217;analyse, ainsi que la documentation, la revue et la mise &agrave; jour de l&#8217;analyse de s&ucirc;ret&eacute;. </p>  <p>L&#8217;&eacute;tude probabiliste de s&ucirc;ret&eacute; est, quant &agrave; elle, trait&eacute;e dans le document S-294, <em>&Eacute;tudes probabilistes de s&ucirc;ret&eacute; (EPS) pour les centrales nucl&eacute;aires</em>. </p>  <p>Les exigences et directives r&eacute;glementaires li&eacute;es &agrave; la manutention s&ucirc;re des mati&egrave;res fissiles &agrave; l&#8217;ext&eacute;rieur du c&#339;ur du r&eacute;acteur sont d&eacute;crites dans le document RD-327, <em>S&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em>, et le document GD-327, <em>Directives de s&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em>.</p>   <a name="3.0"></a>
<h2 className="reportHeading2"><a name="P119_5844" id="P119_5844"></a>3.0 L&eacute;gislation pertinente</h2>  <p>Les articles pertinents de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (<em>LSRN</em>) et des r&egrave;glements connexes qui s&#8217;appliquent au pr&eacute;sent document d&#8217;orientation sont les suivants&nbsp;:</p>  <ul>
<li> Le paragraphe&nbsp;24(4) de la <em>LSRN</em>, selon lequel la Commission ne peut d&eacute;livrer, renouveler ou modifier un permis que si le titulaire de permis ou le demandeur&nbsp;: &laquo;&nbsp;(<em>a</em>) est comp&eacute;tent pour exercer les activit&eacute;s vis&eacute;es par la licence ou le permis; (<em>b</em>) prendra, dans le cadre de ces activit&eacute;s, les mesures voulues pour pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes, pour prot&eacute;ger l&#8217;environnement, pour maintenir la s&eacute;curit&eacute; nationale et pour respecter les obligations internationales que le Canada a assum&eacute;es&nbsp;&raquo;</li>
<li>Le paragraphe&nbsp;24(5) de la <em>LSRN</em>, qui autorise la Commission &agrave; assortir un permis des conditions qu&#8217;elle estime n&eacute;cessaires &agrave; l&#8217;application de ladite loi</li>
<li> L&#8217;alin&eacute;a 3(1)<em>(i</em>) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, selon lequel la demande de permis doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;une description et les r&eacute;sultats des &eacute;preuves, analyses ou calculs effectu&eacute;s pour corroborer les renseignements compris dans la demande&nbsp;&raquo;</li>
<li>L&#8217;alin&eacute;a 5(<em>f</em>) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, selon lequel la demande de permis pour construire une installation nucl&eacute;aire de cat&eacute;gorie I doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;un rapport pr&eacute;liminaire d&#8217;analyse de la s&ucirc;ret&eacute; d&eacute;montrant que la conception de l&#8217;installation nucl&eacute;aire est ad&eacute;quate&nbsp;&raquo;</li>
<li>L&#8217;alin&eacute;a 5<em>(i</em>) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, selon lequel la demande de permis pour construire une installation nucl&eacute;aire de cat&eacute;gorie I doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;les effets sur l&#8217;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes que peuvent avoir la construction, l&#8217;exploitation et le d&eacute;classement de l&#8217;installation nucl&eacute;aire [...]&nbsp;&raquo;</li>
<li>L&#8217;alin&eacute;a 6<em>(c</em>) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, selon lequel la demande de permis pour exploiter une installation nucl&eacute;aire de cat&eacute;gorie I doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;un rapport final d&#8217;analyse de la s&ucirc;ret&eacute; d&eacute;montrant que la conception de l&#8217;installation nucl&eacute;aire est ad&eacute;quate&nbsp;&raquo;</li>
<li>L&#8217;alin&eacute;a 6<em>(h</em>) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, selon lequel la demande de permis pour exploiter une installation nucl&eacute;aire de cat&eacute;gorie I doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;les effets sur l&#8217;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes que peuvent avoir l&#8217;exploitation et le d&eacute;classement de l&#8217;installation nucl&eacute;aire [...]&nbsp;&raquo;</li>
<li>L&#8217;alin&eacute;a 7(<em>f</em>) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, selon lequel la demande de permis pour d&eacute;classer une installation nucl&eacute;aire de cat&eacute;gorie I doit comprendre, en plus de tout autre renseignement, &laquo;&nbsp;les effets que les travaux de d&eacute;classement peuvent avoir sur l&#8217;environnement ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes [...]&nbsp;&raquo;</li>  </ul>   <a name="4.0"></a>
<h2 className="reportHeading2"><a name="P129_9051" id="P129_9051"></a>4.0 R&ocirc;les et objectifs de l&#8217;analyse de s&ucirc;ret&eacute; </h2>  <p>Les &eacute;valuations de la s&ucirc;ret&eacute; sont des processus syst&eacute;matiques qui permettent de v&eacute;rifier que les exigences de s&ucirc;ret&eacute; applicables sont respect&eacute;es dans toutes les phases du cycle de vie d&#8217;une centrale nucl&eacute;aire. Ces &eacute;valuations sont ex&eacute;cut&eacute;es pour divers aspects de la s&ucirc;ret&eacute;, de la s&eacute;curit&eacute; et des garanties comme les pratiques de gestion, l&#8217;assurance de la qualit&eacute;, le rendement humain, la culture de s&ucirc;ret&eacute;, la formation, la justesse de la conception, l&#8217;analyse de s&ucirc;ret&eacute;, l&#8217;adaptation de l&#8217;&eacute;quipement au service, le plan d&#8217;intervention en cas d&#8217;urgence, la protection environnementale et la radioprotection.</p>  <p>Une &eacute;valuation de la s&ucirc;ret&eacute; comprend une analyse de s&ucirc;ret&eacute;, soit une &eacute;tude quantitative analytique men&eacute;e principalement pour d&eacute;montrer la s&ucirc;ret&eacute; d&#8217;une centrale nucl&eacute;aire et la justesse de sa conception et de son rendement. L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;, l&#8217;&eacute;tude probabiliste de la s&ucirc;ret&eacute; (EPS) et l&#8217;analyse des risques sont trois types d&#8217;analyse de s&ucirc;ret&eacute;. </p>  <p>L&#8217;EPS tient compte de la probabilit&eacute; et des cons&eacute;quences de divers transitoires et accidents de la centrale. Les principaux objectifs de l&#8217;EPS visent &agrave;&nbsp;: </p>  <ul>
<li>d&eacute;terminer les s&eacute;quences d&#8217;&eacute;v&eacute;nements qui risquent de compromettre les fonctions de s&ucirc;ret&eacute; fondamentales, la perte d&#8217;int&eacute;grit&eacute; des structures essentielles, le rejet de radionucl&eacute;ides dans l&#8217;environnement et les effets sur la sant&eacute; du public, ainsi que les probabilit&eacute;s qui y sont reli&eacute;es</li>
<li>d&eacute;finir une conception de centrale nucl&eacute;aire bien &eacute;quilibr&eacute;e</li>
<li>&eacute;valuer les cons&eacute;quences des modifications apport&eacute;es aux proc&eacute;dures ou aux composants sur la probabilit&eacute; de dommages au c&#339;ur du r&eacute;acteur</li>  </ul>  <p>Pour les nouvelles centrales, les EPS aident &agrave; d&eacute;terminer l&#8217;importance des caract&eacute;ristiques de conception compl&eacute;mentaires propos&eacute;es dans le cas d&#8217;accidents graves ou les mesures que les op&eacute;rateurs peuvent prendre lors des accidents graves pour r&eacute;duire le risque. Les exigences pour les &eacute;tudes probabilistes de la s&ucirc;ret&eacute; des centrales nucl&eacute;aires sont pr&eacute;sent&eacute;es dans la norme d&#8217;application de la r&eacute;glementation S-294<em>, &Eacute;tudes probabilistes de la s&ucirc;ret&eacute; (EPS) pour les centrales nucl&eacute;aires</em>. Les EPS compl&egrave;tent les &eacute;tudes d&eacute;terministes de la s&ucirc;ret&eacute;.</p>  <p>Une analyse des risques (comme l&#8217;&eacute;valuation des risques d&#8217;incendie ou l&#8217;&eacute;valuation de la marge sismique) d&eacute;montrera la capacit&eacute; de la conception &agrave; r&eacute;pondre efficacement aux &eacute;v&eacute;nements de cause commune pr&eacute;visibles. Cette analyse a pour but de confirmer que la conception des centrales nucl&eacute;aires int&egrave;gre une diversit&eacute; et une s&eacute;paration physique suffisantes pour faire face aux &eacute;v&eacute;nements de cause commune. Elle confirme &eacute;galement que les structures, syst&egrave;mes et composants (SSC) valid&eacute;s sont qualifi&eacute;s pour survivre et fonctionner le cas &eacute;ch&eacute;ant lors des &eacute;v&eacute;nements de cause commune pr&eacute;visibles. </p>  <p>Le pr&eacute;sent document porte sur l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; et ne traite pas de l&#8217;EPS et de l&#8217;analyse des risques.</p>   <a name="4.1"></a>
<h3 className="reportHeading3"><a name="P139_12147" id="P139_12147"></a>4.1 R&ocirc;les de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;</h3>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; confirme que la conception r&eacute;pond aux exigences de l&#8217;analyse de s&ucirc;ret&eacute; du document RD-310 et aux crit&egrave;res d&#8217;acceptation des doses. Elle aide &eacute;galement &agrave; d&eacute;montrer que les objectifs de s&ucirc;ret&eacute; sont atteints, que la conception refl&egrave;te la d&eacute;fense en profondeur efficace et que la conception et l&#8217;exploitation de la centrale sont acceptables et robustes.</p>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; sert &agrave; &eacute;valuer le comportement d&#8217;une centrale &agrave; la suite d&#8217;une d&eacute;faillance hypoth&eacute;tique de l&#8217;&eacute;quipement, d&#8217;un &eacute;v&eacute;nement interne ou externe ou d&#8217;une erreur de l&#8217;op&eacute;rateur. En ce qui concerne l&#8217;&eacute;v&eacute;nement analys&eacute;, l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; permet de pr&eacute;voir et de quantifier les menaces &agrave; l&#8217;int&eacute;grit&eacute; des barri&egrave;res physiques et le rendement des syst&egrave;mes de la centrale (particuli&egrave;rement les syst&egrave;mes de s&ucirc;ret&eacute;) afin de pr&eacute;voir les d&eacute;faillances des composants et les rejets de mati&egrave;res radioactives.</p>  <p>Les m&eacute;thodes d&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; peuvent s&#8217;appliquer &agrave; un large &eacute;ventail de modes d&#8217;exploitation et d&#8217;&eacute;v&eacute;nements touchant la centrale (y compris au cours de l&#8217;exploitation normale et d&#8217;une d&eacute;faillance de l&#8217;&eacute;quipement), d&#8217;erreurs des op&eacute;rateurs et de difficult&eacute;s r&eacute;sultant d&#8217;&eacute;v&eacute;nements comme les incendies ou les tremblements de terre.</p>   <a name="4.2"></a>
<h3 className="reportHeading3"><a name="P143_13568" id="P143_13568"></a>4.2 Objectifs de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; </h3>  <p>Les analyses d&eacute;terministes de la s&ucirc;ret&eacute; doivent satisfaire aux exigences du document RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>.<em> </em>Les objectifs de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; sont de&nbsp;: </p>  <ol>
<li> Confirmer que la conception de la centrale respecte les exigences en mati&egrave;re de conception et de s&ucirc;ret&eacute;&nbsp;en :
<ol className="lower-alpha">
<li> d&eacute;montrant que la centrale, telle qu&#8217;elle est construite, peut &ecirc;tre exploit&eacute;e en toute s&eacute;curit&eacute;, tout en tenant compte des effets du vieillissement</li>
<li> d&eacute;montrant que la conception peut r&eacute;sister aux &eacute;v&eacute;nements initiateurs hypoth&eacute;tiques (EIH) identifi&eacute;s et y r&eacute;pondre efficacement </li>
<li> d&eacute;montrant que les attentes applicables pour la d&eacute;fense en profondeur &eacute;tablies dans le document RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires </em>sont satisfaites</li>
<li> pr&eacute;voyant des conditions environnementales difficiles dues aux incidents de fonctionnement pr&eacute;vus (IFP), aux accidents de dimensionnement (AD) et aux accidents hors dimensionnement (AHD)</li>
</ol>
</li>
<li> Calculer ou confirmer les conditions et limites op&eacute;rationnelles qui sont conformes aux exigences relatives &agrave; la conception et &agrave; la s&ucirc;ret&eacute; de la centrale nucl&eacute;aire (la norme CSA&nbsp;N290.15-10, <em>Exigences relatives &agrave; l&#8217;enveloppe d&#8217;exploitation s&ucirc;re des centrales nucl&eacute;aires</em> donne des directives additionnelles), notamment&nbsp;:
<ol className="lower-alpha">
<li> les limites de s&ucirc;ret&eacute; pour la protection et le contr&ocirc;le du r&eacute;acteur</li>
<li> les limites de s&ucirc;ret&eacute; pour les syst&egrave;mes de s&ucirc;ret&eacute; techniques</li>
<li> les limites d&#8217;exploitation et les r&eacute;glages de r&eacute;f&eacute;rence pour les syst&egrave;mes de contr&ocirc;le</li>
<li> les contraintes dues aux proc&eacute;dures pour le contr&ocirc;le op&eacute;rationnel des proc&eacute;d&eacute;s</li>
<li> la d&eacute;termination des configurations d&#8217;exploitation admissibles</li>
</ol>
</li>
<li> Aider &agrave; &eacute;tablir et &agrave; valider les proc&eacute;dures de gestion des accidents et les lignes directrices en la mati&egrave;re</li>
<li> Aider &agrave; d&eacute;montrer que les objectifs en mati&egrave;re de s&ucirc;ret&eacute;, qui peuvent &ecirc;tre &eacute;tablis pour limiter les risques pos&eacute;s par la centrale nucl&eacute;aire, sont atteints</li>  </ol>  <p>Les analyses d&eacute;terministes de s&ucirc;ret&eacute; sont &eacute;galement effectu&eacute;es pour&nbsp;:</p>  <ul>
<li> aider &agrave; confirmer ou &agrave; valider les strat&eacute;gies retenues pour r&eacute;cup&eacute;rer la centrale en cas d&#8217;IFP ou d&#8217;AD</li>
<li>aider &agrave; mettre au point une strat&eacute;gie que suivra l&#8217;op&eacute;rateur dans le cas o&ugrave; les mesures d&#8217;intervention automatiques et les proc&eacute;dures d&#8217;exploitation d&#8217;urgence ne parviennent pas &agrave; emp&ecirc;cher un accident grave</li>
<li>confirmer que les modifications apport&eacute;es &agrave; la conception et &agrave; l&#8217;exploitation de la centrale n&#8217;ont aucun effet n&eacute;faste important sur le plan de la s&ucirc;ret&eacute;</li>  </ul>   <a name="4.3"></a>
<h3 className="reportHeading3"><a name="P163_16205" id="P163_16205"></a>4.3 R&ocirc;les de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; dans la confirmation de la d&eacute;fense en profondeur </h3>  <p>Il faut confirmer l&#8217;application du concept de d&eacute;fense en profondeur &agrave; la conception d&#8217;une centrale nucl&eacute;aire, de sorte que la conception fournira diverses couches de mesures qui se recoupent, afin que toute d&eacute;faillance soit contr&ocirc;l&eacute;e ou corrig&eacute;e sans nuire aux personnes ou au public. Les&nbsp;analyses d&eacute;terministes de s&ucirc;ret&eacute; jouent un r&ocirc;le important dans cette confirmation. </p>  <p>Le document RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires</em> d&eacute;finit cinq niveaux de d&eacute;fense en profondeur. L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; s&#8217;applique &agrave; ces niveaux comme suit&nbsp;:</p>  <p><strong>Niveau&nbsp;1</strong> &#8211; l&#8217;objectif &eacute;tant de pr&eacute;venir des fonctionnements anormaux et des d&eacute;faillances des SSC</p>  <p><strong>Niveau&nbsp;2</strong> &#8211; l&#8217;objectif &eacute;tant de d&eacute;tecter et de r&eacute;agir aux &eacute;carts par rapport aux &eacute;tats d&#8217;exploitation normaux afin d&#8217;emp&ecirc;cher les IFP de d&eacute;g&eacute;n&eacute;rer en conditions accidentelles, et &agrave; remettre la centrale &agrave; son &eacute;tat d&#8217;exploitation normale </p>  <p>Pour appuyer le deuxi&egrave;me niveau de d&eacute;fense en profondeur, les IFP sont analys&eacute;s pour d&eacute;montrer la robustesse des syst&egrave;mes de contr&ocirc;le en arr&ecirc;tant la plupart des IFP et en pr&eacute;venant les dommages aux SSC qui ne participent pas &agrave; la mise en &#339;uvre d&#8217;un IFP, dans la mesure o&ugrave; ces SSC demeureront exploitables &agrave; la suite d&#8217;un IFP.</p>  <p><strong>Niveau&nbsp;3</strong> &#8211; l&#8217;objectif &eacute;tant de minimiser les cons&eacute;quences des accidents</p>  <p>Pour appuyer le troisi&egrave;me niveau de d&eacute;fense en profondeur, les IFP et les AD sont analys&eacute;s pour d&eacute;montrer les capacit&eacute;s des syst&egrave;mes de s&ucirc;ret&eacute; &agrave; att&eacute;nuer toute cons&eacute;quence radiologique qui en r&eacute;sulte; c.-&agrave;-d. pour d&eacute;montrer qu&#8217;on atteint les limites de dose prescrites pour les IFP et les AD, et les crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s connexes pour prot&eacute;ger les barri&egrave;res du rejet de produits de fission.</p>  <p>Les IFP et AD sont &eacute;galement analys&eacute;s pour contribuer &agrave; l&#8217;&eacute;laboration des proc&eacute;dures d&#8217;exploitation d&#8217;urgence qui d&eacute;terminent quelles mesures il faudrait prendre au cours de ces &eacute;v&eacute;nements.</p>  <p><strong>Niveau&nbsp;4</strong> &#8211; l&#8217;objectif &eacute;tant de s&#8217;assurer que le rejet de mati&egrave;res radioactives caus&eacute; par des accidents graves demeure au niveau le plus bas qu&#8217;il soit possible d&#8217;atteindre</p>  <p><strong>Niveau&nbsp;5</strong> &#8211; l&#8217;objectif &eacute;tant d&#8217;att&eacute;nuer les cons&eacute;quences radiologiques de tout rejet possible de mati&egrave;res radioactives pouvant r&eacute;sulter d&#8217;accidents</p>  <p>Pour appuyer les quatri&egrave;me et cinqui&egrave;me niveaux de d&eacute;fense en profondeur, on proc&egrave;de &agrave; l&#8217;analyse des AHD. Cette analyse aide &agrave; comprendre le rendement des dispositifs de conception compl&eacute;mentaires dans le cas d&#8217;accidents graves ou les mesures que les op&eacute;rateurs devraient prendre en cas d&#8217;accidents graves afin d&#8217;en att&eacute;nuer les cons&eacute;quences.</p>   <a name="5.0"></a>
<h2 className="reportHeading2"><a name="P175_19002" id="P175_19002"></a>5.0 Exigences de l&#8217;analyse de s&ucirc;ret&eacute;</h2>   <a name="5.1"></a>
<h3 className="reportHeading3"><a name="P176_19041" id="P176_19041"></a>5.1 Responsabilit&eacute;s </h3>  <p>Il incombe au demandeur ou au titulaire de permis de s&#8217;assurer que l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; r&eacute;pond aux exigences du document RD-310. Le titulaire de permis ou le demandeur doit : </p>  <ul>
<li> conserver sa capacit&eacute; de r&eacute;aliser ou d&#8217;obtenir une analyse de s&ucirc;ret&eacute; afin de&nbsp;:
<ol className="lower-alpha">
<li> r&eacute;soudre les probl&egrave;mes techniques qui surviennent tout au long de la dur&eacute;e de vie de la centrale</li>
<li>s&#8217;assurer que les exigences pertinentes sont respect&eacute;es &agrave; l&#8217;&eacute;gard de l&#8217;analyse de s&ucirc;ret&eacute; &eacute;labor&eacute;e par l&#8217;organisation exploitante ou obtenue d&#8217;une tierce partie</li>
</ol>
</li>
<li>&eacute;tablir un processus pour v&eacute;rifier que l&#8217;analyse de s&ucirc;ret&eacute; tient compte&nbsp;:
<ol className="lower-alpha">
<li> de la configuration actuelle de la centrale</li>
<li>des limites et conditions d&#8217;exploitation actuelles</li>
<li> de l&#8217;exp&eacute;rience acquise en mati&egrave;re d&#8217;exploitation, y compris celle tir&eacute;e de l&#8217;exploitation d&#8217;installations similaires</li>
<li> des r&eacute;sultats disponibles provenant de la recherche exp&eacute;rimentale, des connaissances th&eacute;oriques am&eacute;lior&eacute;es ou des nouvelles capacit&eacute;s de mod&eacute;lisation afin d&#8217;&eacute;valuer les impacts possibles sur les r&eacute;sultats des analyses de s&ucirc;ret&eacute;</li>
</ol>
</li>
<li> d&eacute;terminer les normes d&#8217;assurance de la qualit&eacute;, et &eacute;tablir et appliquer des proc&eacute;d&eacute;s d&eacute;taill&eacute;s pour ex&eacute;cuter, obtenir, conserver, passer en revue, mettre &agrave; jour et documenter l&#8217;analyse de s&ucirc;ret&eacute;</li>  </ul>   <a name="5.2"></a>
<h3 className="reportHeading3"><a name="P188_20400" id="P188_20400"></a>5.2 &Eacute;v&eacute;nements &agrave; analyser</h3>
<a name="5.2.1"></a>
<h4 className="reportHeading4"><a name="P189_20428" id="P189_20428"></a>5.2.1 Identification des &eacute;v&eacute;nements</h4>  <p>L&#8217;analyse de s&ucirc;ret&eacute; porte sur un ensemble d&#8217;&eacute;v&eacute;nements qui risqueraient de compromettre les fonctions de s&ucirc;ret&eacute; ou de contr&ocirc;le de la centrale nucl&eacute;aire. Sont compris les &eacute;v&eacute;nements caus&eacute;s par les d&eacute;faillances des SSC ou par les erreurs commisses par l&#8217;op&eacute;rateur, ainsi que les &eacute;v&eacute;nements d&#8217;origine humaine ou de cause commune. </p>  <p>L&#8217;analyse de s&ucirc;ret&eacute; pourrait viser les simples EIH, les s&eacute;quences de plusieurs &eacute;v&eacute;nements indirects ou les combinaisons d&#8217;&eacute;v&eacute;nements ind&eacute;pendants. </p>  <p>L&#8217;ensemble d&#8217;&eacute;v&eacute;nements &agrave; examiner dans l&#8217;analyse de s&ucirc;ret&eacute; est d&eacute;termin&eacute; &agrave; l&#8217;aide d&#8217;un processus syst&eacute;matique qui tient compte&nbsp;:</p>  <ul>
<li>des examens de la conception de la centrale r&eacute;alis&eacute;s en utilisant des m&eacute;thodes comme des analyses de l&#8217;exploitabilit&eacute; et des risques, des analyses des modes de d&eacute;faillance et de leurs effets ainsi que des sch&eacute;mas logiques ma&icirc;tres</li>
<li>des listes d&#8217;&eacute;v&eacute;nements &eacute;labor&eacute;es pour l&#8217;analyse de s&ucirc;ret&eacute; d&#8217;autres centrales nucl&eacute;aires</li>
<li>de l&#8217;analyse des donn&eacute;es li&eacute;es &agrave; l&#8217;exp&eacute;rience d&#8217;exploitation de centrales semblables</li>
<li>de tout &eacute;v&eacute;nement devant faire partie de l&#8217;analyse de s&ucirc;ret&eacute;, selon ce que prescrivent les exigences r&eacute;glementaires</li>
<li>des d&eacute;faillances de l&#8217;&eacute;quipement, des erreurs humaines et des &eacute;v&eacute;nements de cause commune d&eacute;cel&eacute;s it&eacute;rativement au moyen de l&#8217;EPS</li>  </ul>  <p>La liste des &eacute;v&eacute;nements recens&eacute;s doit &ecirc;tre examin&eacute;e it&eacute;rativement aux fins d&#8217;exactitude et d&#8217;exhaustivit&eacute; &agrave; mesure que se d&eacute;roulent les analyses de conception et de s&ucirc;ret&eacute; de la centrale. Les examens doivent &eacute;galement &ecirc;tre r&eacute;alis&eacute;s de fa&ccedil;on p&eacute;riodique tout au long du cycle de vie de la centrale nucl&eacute;aire pour tenir compte des nouveaux renseignements et des nouvelles exigences.</p>  <p>Lors de la d&eacute;termination des &eacute;v&eacute;nements, il faut prendre en compte tous les modes d&#8217;exploitation de la centrale admissibles et analyser tous les modes d&#8217;exploitation utilis&eacute;s pour des p&eacute;riodes plus longues. Les modes transitoires ou brefs peuvent &ecirc;tre examin&eacute;s sans analyse particuli&egrave;re dans la mesure o&ugrave; il peut &ecirc;tre d&eacute;montr&eacute; que les analyses de s&ucirc;ret&eacute; existantes lient le comportement et les cons&eacute;quences de ces &eacute;tats. </p>  <p>Les modes d&#8217;exploitation d&#8217;une centrale nucl&eacute;aire comprennent ce qui suit, sans s&#8217;y restreindre :</p>  <ol>
<li> l&#8217;approche initiale de la criticit&eacute; du r&eacute;acteur</li>
<li>le d&eacute;marrage du r&eacute;acteur, de l&#8217;&eacute;tat d&#8217;arr&ecirc;t &agrave; la pleine puissance en passant par l&#8217;approche &agrave; la criticit&eacute; </li>
<li>l&#8217;exploitation au niveau de puissance &agrave; l&#8217;&eacute;quilibre, y compris en pleine puissance et &agrave; basse puissance</li>
<li>les changements de puissance du r&eacute;acteur, y compris en mode turbine prioritaire, le cas &eacute;ch&eacute;ant</li>
<li>l&#8217;arr&ecirc;t du r&eacute;acteur lorsqu&#8217;en puissance</li>
<li>l&#8217;arr&ecirc;t en mode d&#8217;arr&ecirc;t chaud</li>
<li>l&#8217;arr&ecirc;t en mode d&#8217;arr&ecirc;t froid</li>
<li> l&#8217;arr&ecirc;t en mode de rechargement du combustible ou en mode d&#8217;entretien qui ouvre les fermetures principales dans l&#8217;enveloppe de pression du caloporteur </li>
<li>l&#8217;arr&ecirc;t dans d&#8217;autres modes ou configurations de la centrale avec des conditions uniques de temp&eacute;rature, de pression ou de charge de caloporteur</li>
<li>l&#8217;exploitation d&#8217;une dur&eacute;e limit&eacute;e, certains syst&egrave;mes de s&ucirc;ret&eacute; n&#8217;&eacute;tant pas disponibles</li>  </ol>  <p>Dans le cas des &eacute;v&eacute;nements identifi&eacute;s par le processus syst&eacute;matique utilis&eacute; &agrave; cette fin, il faut tenir compte d&#8217;un &eacute;ventail complet de configurations et de modes d&#8217;exploitation de l&#8217;&eacute;quipement lors de la r&eacute;alisation de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;. </p>  <p>Les modifications importantes apport&eacute;es &agrave; la centrale, comme la remise en &eacute;tat, la fermeture temporaire ou le d&eacute;classement, peuvent produire des configurations sp&eacute;ciales de la centrale. Ces&nbsp;configurations doivent &ecirc;tre prises en compte, et les &eacute;v&eacute;nements possibles doivent &ecirc;tre identifi&eacute;s et int&eacute;gr&eacute;s &agrave; l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;.</p>   <a name="5.2.2"></a>
<h4 className="reportHeading4"><a name="P214_24343" id="P214_24343"></a>5.2.2 Port&eacute;e des &eacute;v&eacute;nements</h4>  <p>La liste des &eacute;v&eacute;nements &eacute;labor&eacute;e pour l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; comprend&nbsp;: l&#8217;exploitation normale et tous les &eacute;v&eacute;nements enclench&eacute;s par des d&eacute;faillances ou mauvais fonctionnements des SSC plausibles de la centrale; les erreurs de l&#8217;op&eacute;rateur; et les &eacute;v&eacute;nements de cause commune d&#8217;origine interne ou externe.</p>  <p><strong><em>5.2.2.1 Exploitation normale</em></strong></p>  <p>Au cours de la phase de conception, l&#8217;exploitation normale de la centrale est analys&eacute;e en tant que classe distincte d&#8217;&eacute;v&eacute;nements. Cela permet d&#8217;&eacute;valuer les sources de rayonnement ou les rejets de mati&egrave;res radioactives dans divers modes d&#8217;exploitation ou de transition entre les modes. </p>  <p>Dans le cas d&#8217;une centrale existante, il peut &ecirc;tre n&eacute;cessaire de r&eacute;aliser une analyse de s&ucirc;ret&eacute; lors de l&#8217;exploitation normale si un nouveau mode op&eacute;rationnel est envisag&eacute; ou si des modifications importantes sont apport&eacute;es &agrave; la conception. </p>  <p><strong><em>5.2.2.2 D&eacute;faillances ou mauvais fonctionnements des structures, syst&egrave;mes et composants</em></strong></p>  <p>Les d&eacute;faillances d&#8217;&eacute;quipement comprennent le d&eacute;faut de fonctionner lorsque n&eacute;cessaire, le fonctionnement d&eacute;fectueux et les d&eacute;faillances partielles. Les &eacute;v&eacute;nements &agrave; prendre en compte comprennent&nbsp;:</p>  <ul>
<li>les d&eacute;faillances ou mauvais fonctionnements des syst&egrave;mes actifs comme les pompes, les vannes, les syst&egrave;mes de contr&ocirc;le ou l&#8217;alimentation &eacute;lectrique</li>
<li> les d&eacute;faillances des syst&egrave;mes passifs comme des br&egrave;ches dans les enveloppes sous pression du r&eacute;acteur, y compris les tuyaux et les disques de rupture </li>  </ul>  <p><strong><em>5.2.2.3 Erreurs commises par les op&eacute;rateurs</em></strong></p>  <p>En tant qu&#8217;&eacute;v&eacute;nements initiateurs, les erreurs commises par l&#8217;op&eacute;rateur produisent normalement les m&ecirc;mes r&eacute;sultats que les &eacute;v&eacute;nements caus&eacute;s par une d&eacute;faillance de l&#8217;&eacute;quipement, mais il n&#8217;est pas n&eacute;cessaire de les consid&eacute;rer s&eacute;par&eacute;ment.&nbsp;Toutefois, si une erreur particuli&egrave;re de l&#8217;op&eacute;rateur entra&icirc;ne un &eacute;v&eacute;nement initiateur unique, il faut l&#8217;inclure dans la liste des EIH aux fins de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;.</p>  <p><strong><em>5.2.2.4 &Eacute;v&eacute;nements de cause commune plausibles, d&#8217;origine interne ou externe</em></strong></p>  <p>Les &eacute;v&eacute;nements de cause commune sont des d&eacute;faillances de plusieurs composants qui peuvent &ecirc;tre enclench&eacute;es par des &eacute;v&eacute;nements internes ou externes d&#8217;origine humaine ou naturelle. </p>  <p>Les &eacute;v&eacute;nements de cause commune internes comprennent les incendies, les inondations d&#8217;origine interne, les explosions et les d&eacute;faillances d&#8217;&eacute;quipement (comme la rupture des turbines) qui peuvent produire des missiles. </p>  <p>Les &eacute;v&eacute;nements externes se produisant naturellement (d&eacute;clencheurs pour les d&eacute;faillances de l&#8217;&eacute;quipement de la centrale) pris en consid&eacute;ration dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; comprennent&nbsp;:</p>  <ul>
<li> les tremblements de terre</li>
<li> les incendies externes</li>
<li> les inondations se produisant &agrave; l&#8217;ext&eacute;rieur du site</li>
<li> les risques biologiques (par exemple les moules ou les algues marines ayant une incidence sur le d&eacute;bit ou la temp&eacute;rature de l&#8217;eau)</li>
<li> les conditions m&eacute;t&eacute;orologiques extr&ecirc;mes (temp&eacute;rature, pr&eacute;cipitations, vents forts)</li>  </ul>  <p>Les &eacute;v&eacute;nements initiateurs externes peuvent causer un &eacute;v&eacute;nement interne. Par exemple, un tremblement de terre peut entra&icirc;ner la d&eacute;faillance de l&#8217;&eacute;quipement de la centrale ou une panne de courant hors site.</p>  <p>Les &eacute;v&eacute;nements externes d&#8217;origine humaine examin&eacute;s dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; comprennent&nbsp;:</p>  <ul>
<li> les impacts d&#8217;a&eacute;ronef ou de missile</li>
<li> les explosions survenant dans les installations industrielles situ&eacute;es &agrave; proximit&eacute; ou dans les syst&egrave;mes de transport</li>
<li> le rejet de produits chimiques toxiques ou corrosifs provenant d&#8217;installations industrielles situ&eacute;es &agrave; proximit&eacute; ou de syst&egrave;mes de transport</li>
<li> les interf&eacute;rences &eacute;lectromagn&eacute;tiques</li>  </ul>  <p><strong><em>5.2.2.5 Combinaison d&#8217;&eacute;v&eacute;nements</em></strong></p>  <p>Il faut tenir compte des combinaisons d&#8217;&eacute;v&eacute;nements qui peuvent se produire simultan&eacute;ment ou en s&eacute;quence lors de la remise de la centrale &agrave; l&#8217;&eacute;tat stable. </p>  <p>Les types de combinaisons comprennent&nbsp;: </p>  <ul>
<li> les d&eacute;faillances ind&eacute;pendantes multiples dans l&#8217;&eacute;quipement de s&ucirc;ret&eacute;</li>
<li> la d&eacute;faillance d&#8217;un syst&egrave;me de proc&eacute;d&eacute; et d&#8217;un syst&egrave;me de s&ucirc;ret&eacute;</li>
<li> les d&eacute;faillances du syst&egrave;me de proc&eacute;d&eacute; multiple</li>
<li> les d&eacute;faillances de l&#8217;&eacute;quipement et les erreurs de l&#8217;op&eacute;rateur</li>
<li>les &eacute;v&eacute;nements de cause commune et les erreurs de l&#8217;op&eacute;rateur</li>  </ul>  <p>Les exemples de combinaisons d&#8217;&eacute;v&eacute;nements comprennent&nbsp;:</p>  <ul>
<li> la perte de caloporteur avec panne d&#8217;&eacute;lectricit&eacute; ult&eacute;rieure de la centrale</li>
<li>la perte de caloporteur avec perte de refroidissement de l&#8217;enceinte</li>
<li> les petits accidents de perte de r&eacute;frig&eacute;rant primaire (APRP) avec d&eacute;faillance due &agrave; une baisse de pression primaire ou secondaire </li>
<li> la br&egrave;che de la conduite de vapeur principale avec impossibilit&eacute; pour l&#8217;op&eacute;rateur d&#8217;enclencher un syst&egrave;me de refroidissement d&#8217;appoint</li>  </ul>  <p><strong><em>5.2.2.6 Regroupement d&#8217;&eacute;v&eacute;nements</em></strong></p>  <p>Les directives mentionn&eacute;es ci-dessus permettront de d&eacute;celer de nombreux &eacute;v&eacute;nements, mais il peut ne pas &ecirc;tre pratique ni n&eacute;cessaire d&#8217;analyser tous ces &eacute;v&eacute;nements. Les &eacute;v&eacute;nements identifi&eacute;s pourraient &ecirc;tre group&eacute;s en cat&eacute;gories en fonction de la similitude des d&eacute;faillances d&#8217;enclenchement, des ph&eacute;nom&egrave;nes essentiels ou des interventions du syst&egrave;me et de l&#8217;op&eacute;rateur. Les exemples de cat&eacute;gories d&#8217;&eacute;v&eacute;nement comprennent&nbsp;la diminution de la charge du liquide de refroidissement du r&eacute;acteur, les anomalies de r&eacute;activit&eacute; et de puissance, et l&#8217;augmentation de l&#8217;&eacute;vacuation de la chaleur. Comme les r&eacute;actions de la centrale &agrave; un &eacute;v&eacute;nement d&eacute;pendent de la conception et de la disponibilit&eacute; des syst&egrave;mes de la centrale, la classification la plus appropri&eacute;e des &eacute;v&eacute;nements peut varier. </p>  <p>Dans l&#8217;analyse de s&ucirc;ret&eacute; des IFP et des AD pour la d&eacute;fense en profondeur de niveau&nbsp;3, il faut d&eacute;terminer les &eacute;v&eacute;nements limitatifs pour chaque crit&egrave;re d&#8217;acceptation applicable dans chaque cat&eacute;gorie d&#8217;&eacute;v&eacute;nements. Dans certains cas, un sc&eacute;nario d&#8217;accident dans la m&ecirc;me cat&eacute;gorie d&#8217;&eacute;v&eacute;nements peut se r&eacute;v&eacute;ler plus grave dans le contexte d&#8217;un crit&egrave;re d&#8217;acceptation donn&eacute; (par exemple la limite de pression du confinement) et un autre sc&eacute;nario peut &ecirc;tre plus grave dans le contexte d&#8217;un crit&egrave;re d&#8217;acceptation diff&eacute;rent (par exemple les doses au public). Tous ces sc&eacute;narios doivent &ecirc;tre examin&eacute;s dans le processus d&#8217;analyse de s&ucirc;ret&eacute; comme &eacute;v&eacute;nements limitatifs pour divers crit&egrave;res d&#8217;acceptation.</p>  <p><strong><em>5.2.2.7  Subdivision des &eacute;v&eacute;nements</em></strong></p>  <p>Un &eacute;v&eacute;nement peut &ecirc;tre divis&eacute; en sous-&eacute;v&eacute;nements aux fins de prise en compte dans l&#8217;analyse de s&ucirc;ret&eacute;, lorsque les &eacute;v&eacute;nements subdivis&eacute;s pr&eacute;sentent des diff&eacute;rences importantes sur le plan&nbsp;:</p>  <ul>
<li> des ph&eacute;nom&egrave;nes se produisant &agrave; la centrale en r&eacute;ponse aux &eacute;v&eacute;nements</li>
<li> des difficult&eacute;s li&eacute;es &agrave; la s&ucirc;ret&eacute; et aux syst&egrave;mes de s&ucirc;ret&eacute;</li>
<li> des fr&eacute;quences</li>  </ul>  <p>Par exemple, il est de pratique courante de traiter un APRP mineur diff&eacute;remment d&#8217;un APRP majeur. </p>  <p>Il ne faut pas subdiviser un &eacute;v&eacute;nement dans le but explicite de reclasser un des sous-&eacute;v&eacute;nements qui r&eacute;sulte de l&#8217;exercice de la subdivision d&#8217;un IFP &agrave; un AD, ou d&#8217;un AD &agrave; un AHD.</p>  <p><strong><em>5.2.2.8  Fr&eacute;quence de coupure</em></strong></p>  <p>Lorsqu&#8217;on commence &agrave; identifier les &eacute;v&eacute;nements, il faut inclure ceux &agrave; basse fr&eacute;quence et &agrave; cons&eacute;quences mineures. Lorsqu&#8217;on d&eacute;finit la port&eacute;e des &eacute;v&eacute;nements &agrave; analyser, l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; doit choisir la m&ecirc;me fr&eacute;quence de coupure que celle utilis&eacute;e dans l&#8217;analyse probabiliste de la m&ecirc;me installation. Cette fr&eacute;quence est choisie de fa&ccedil;on &agrave; pouvoir int&eacute;grer l&#8217;analyse d&eacute;terministe &agrave; l&#8217;analyse probabiliste. </p>  <p>Certains &eacute;v&eacute;nements peuvent &ecirc;tre exclus de l&#8217;&eacute;tude d&eacute;taill&eacute;e (par exemple parce qu&#8217;ils contribuent peu au d&eacute;passement des objectifs de s&ucirc;ret&eacute; ou parce qu&#8217;ils sont limit&eacute;s par un &eacute;v&eacute;nement analys&eacute;). Une telle exclusion doit &ecirc;tre pleinement justifi&eacute;e et les raisons doivent &ecirc;tre bien document&eacute;es.</p>   <a name="5.2.3"></a>
<h4 className="reportHeading4"><a name="P266_32344" id="P266_32344"></a>5.2.3 Classification des &eacute;v&eacute;nements</h4>  <p>Les &eacute;v&eacute;nements sont class&eacute;s parce que chaque &eacute;tat de la centrale comporte des exigences d&#8217;analyse de s&ucirc;ret&eacute; et des crit&egrave;res d&#8217;acceptation diff&eacute;rents. Les exigences de l&#8217;analyse de s&ucirc;ret&eacute; indiquent le niveau de protection conform&eacute;ment au principe de d&eacute;fense en profondeur. Les&nbsp;&eacute;tats normaux de la centrale et les conditions accidentelles sont pris en compte dans l&#8217;analyse de s&ucirc;ret&eacute;. La classification des &eacute;v&eacute;nements accidentels est la suivante&nbsp;: </p>  <ul>
<li> incidents de fonctionnement pr&eacute;vu <em>&#8211; </em>&eacute;v&eacute;nements plus complexes que les man&#339;uvres d&#8217;exploitation normale, qui risquent de compromettre la s&ucirc;ret&eacute; du r&eacute;acteur et qui pourraient raisonnablement survenir au cours de la dur&eacute;e de vie de la centrale, selon des fr&eacute;quences &eacute;gales ou sup&eacute;rieures &agrave; 10<sup>-2</sup> par ann&eacute;e de r&eacute;acteur </li>
<li> accidents de dimensionnement &#8211; &eacute;v&eacute;nements qui ne sont pas sens&eacute;s se produire au cours de la dur&eacute;e de vie de la centrale mais qui, conform&eacute;ment au principe de d&eacute;fense en profondeur, sont pris en compte dans la conception de la centrale nucl&eacute;aire (dont les fr&eacute;quences sont g&eacute;n&eacute;ralement &eacute;gales ou sup&eacute;rieures &agrave; 10<sup>-5</sup> par ann&eacute;e de r&eacute;acteur, mais moins de 10<sup>-2</sup> par ann&eacute;e de r&eacute;acteur; toutefois, certains groupes d&#8217;&eacute;v&eacute;nements ayant une fr&eacute;quence inf&eacute;rieure peuvent &ecirc;tre &eacute;galement compris dans la conception de la centrale de r&eacute;f&eacute;rence) </li>
<li> accidents hors dimensionnement &#8211; &eacute;v&eacute;nements peu probables (fr&eacute;quence inf&eacute;rieure &agrave; 10<sup>-5</sup> par ann&eacute;e de r&eacute;acteur) plus graves que les AD, qui &#8211; en raison de d&eacute;faillances multiples ou d&#8217;erreurs de l&#8217;op&eacute;rateur &#8211; peuvent emp&ecirc;cher les syst&egrave;mes de s&ucirc;ret&eacute; de remplir leurs fonctions de s&ucirc;ret&eacute; et ainsi causer des dommages importants au c&#339;ur du r&eacute;acteur, compromettre l&#8217;int&eacute;grit&eacute; de la barri&egrave;re de confinement et occasionner le rejet de mati&egrave;res radioactives par la centrale</li>  </ul>  <p>M&ecirc;me si l&#8217;&eacute;valuation de la fr&eacute;quence sert de base &agrave; la classification des &eacute;v&eacute;nements, on reconna&icirc;t qu&#8217;une telle &eacute;valuation peut comporter une grande incertitude. Par cons&eacute;quent, un &eacute;v&eacute;nement dont la fr&eacute;quence pr&eacute;vue se situe &agrave; la valeur seuil de deux classes d&#8217;&eacute;v&eacute;nements, ou pr&eacute;sente une grande incertitude, est class&eacute; dans une cat&eacute;gorie de fr&eacute;quence sup&eacute;rieure. </p>  <p>D&#8217;autres facteurs peuvent influer sur le choix de certains &eacute;v&eacute;nements &agrave; retenir aux fins de classification. Afin de comprendre la notion de marges de s&ucirc;ret&eacute; ou de robustesse de la conception, l&#8217;autorit&eacute; de r&eacute;glementation peut demander que certains &eacute;v&eacute;nements soient analys&eacute;s comme des &eacute;v&eacute;nements de dimensionnement. Les pratiques et l&#8217;exp&eacute;rience pass&eacute;es peuvent indiquer que certains sc&eacute;narios sont plus critiques et doivent &ecirc;tre analys&eacute;s comme des AD. </p>  <p>Certains modes d&#8217;exploitation de la centrale ne peuvent &ecirc;tre utilis&eacute;s que pendant de courtes p&eacute;riodes. Normalement, les &eacute;v&eacute;nements sont class&eacute;s sans tenir compte de la fr&eacute;quence de ces modes, mais celle-ci pourra &ecirc;tre envisag&eacute;e au cas par cas. </p>  <p>L&#8217;annexe A renferme des exemples d&#8217;&eacute;v&eacute;nements de diff&eacute;rentes classes fond&eacute;s sur l&#8217;exp&eacute;rience du CANDU. Ces exemples illustrent les r&eacute;sultats pouvant d&eacute;couler du processus d&#8217;identification et de classification des &eacute;v&eacute;nements d&eacute;crit dans la sous-section&nbsp;5.2. Cette liste n&#8217;est donn&eacute;e qu&#8217;&agrave; titre de d&eacute;monstration et n&#8217;a pas pour but d&#8217;&ecirc;tre exhaustive. En pratique, une telle liste est normalement &eacute;tablie par des m&eacute;thodes probabilistes. La liste fera &eacute;tat de regroupement d&#8217;&eacute;v&eacute;nements (voir la sous-section 5.2.2.6). Seuls les &eacute;v&eacute;nements repr&eacute;sentatifs ou limitatifs de chaque groupe d&#8217;&eacute;v&eacute;nements devraient &ecirc;tre analys&eacute;s. </p>  <p><strong><em>5.2.3.1 Incidents de fonctionnement pr&eacute;vus</em></strong></p>  <p>La conception de la centrale est cens&eacute;e &ecirc;tre suffisamment robuste pour que la plupart des IFP ne n&eacute;cessitent pas l&#8217;enclenchement des syst&egrave;mes de s&ucirc;ret&eacute; pour pr&eacute;venir des dommages indirects aux SSC de la centrale. Cela fait partie d&#8217;une d&eacute;fense en profondeur de niveau&nbsp;2 et contribue &agrave; s&#8217;assurer que les &eacute;v&eacute;nements n&eacute;cessitant l&#8217;utilisation des syst&egrave;mes de s&ucirc;ret&eacute; sont r&eacute;duits au minimum. Les syst&egrave;mes de contr&ocirc;le de la centrale sont pr&eacute;vus pour compenser les effets attribuables &agrave; l&#8217;&eacute;v&eacute;nement et pour maintenir la centrale dans un &eacute;tat stable pendant une dur&eacute;e suffisante pour qu&#8217;un op&eacute;rateur intervienne. L&#8217;intervention de l&#8217;op&eacute;rateur peut comprendre, le cas &eacute;ch&eacute;ant, l&#8217;activation des syst&egrave;mes de s&ucirc;ret&eacute; et l&#8217;arr&ecirc;t de la centrale selon les proc&eacute;dures &eacute;tablies. Apr&egrave;s examen de l&#8217;&eacute;v&eacute;nement initiateur, il devrait &ecirc;tre possible de relancer les activit&eacute;s de la centrale. </p>  <p>Dans le cas de la d&eacute;fense en profondeur de niveau&nbsp;3, en plus de r&eacute;pondre aux attentes susmentionn&eacute;es pour la d&eacute;fense en profondeur de niveau&nbsp;2, la conception doit &eacute;galement d&eacute;montrer avec un niveau de confiance &eacute;lev&eacute; que les syst&egrave;mes de s&ucirc;ret&eacute; peuvent att&eacute;nuer tous les IFP sans l&#8217;intervention des syst&egrave;mes de contr&ocirc;le de la centrale. </p>  <p>Des exemples d&#8217;IFP sont illustr&eacute;s au tableau&nbsp;1, qui donne des exemples pour un r&eacute;acteur CANDU et un r&eacute;acteur &agrave; eau l&eacute;g&egrave;re (REL). La liste qui suit n&#8217;est pas exhaustive. Une liste compl&egrave;te d&eacute;pendrait du type de r&eacute;acteur et de la conception des syst&egrave;mes de la centrale.</p>  <table border="1" summary="Exemples d&rsquo;incidents de fonctionnement pr&eacute;vus">
<caption>
Tableau&nbsp;1&nbsp;: Exemples d&#8217;incidents de fonctionnement pr&eacute;vus
</caption>
<tr>
<td valign="top"><p><strong>Cat&eacute;gorie d&#8217;&eacute;v&eacute;nement</strong></p></td>
<td valign="top"><p align="center"><strong>Incident de fonctionnement pr&eacute;vu</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Augmentation de l&#8217;&eacute;vacuation de la chaleur dans le r&eacute;acteur </p></td>
<td valign="top"><ul>
<li> ouverture intempestive des soupapes de d&eacute;charge de vapeur</li>
<li> mauvais fonctionnement du r&eacute;glage de la pression secondaire entra&icirc;nant une augmentation du d&eacute;bit de vapeur</li>
<li> mauvais fonctionnement du syst&egrave;me d&#8217;eau d&#8217;alimentation entra&icirc;nant une augmentation de taux d&#8217;&eacute;vacuation de la chaleur </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Diminution de l&#8217;&eacute;vacuation de la chaleur dans le r&eacute;acteur</p></td>
<td valign="top"><ul>
<li> d&eacute;clenchement d&#8217;une pompe d&#8217;eau d&#8217;alimentation</li>
<li> r&eacute;duction du d&eacute;bit de vapeur pour diverses raisons (p.&nbsp;ex.&nbsp;mauvais fonctionnement du contr&ocirc;le, fermeture de la vanne de d&eacute;charge de vapeur principale, d&eacute;clenchement de la turbine, perte de la charge externe, perte de puissance, perte du vide du condenseur)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Modifications du d&eacute;bit du circuit du caloporteur du r&eacute;acteur</p></td>
<td valign="top"><ul>
<li> d&eacute;clenchement d&#8217;une pompe du caloporteur principal</li>
<li> isolement intempestif d&#8217;une boucle du circuit caloporteur principal (le cas &eacute;ch&eacute;ant)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Anomalies de r&eacute;activit&eacute; et de distribution de puissance</p></td>
<td valign="top"><ul>
<li> retrait intempestif d&#8217;une seule barre de commande </li>
<li> dilution de la concentration du poison neutronique due &agrave; un mauvais fonctionnement du syst&egrave;me de contr&ocirc;le du volume </li>
<li> mauvaise mise en place de l&#8217;assemblage de combustible (REL) ou rechargement du mauvais canal (CANDU)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Augmentation de la charge de caloporteur du r&eacute;acteur </p></td>
<td valign="top"><ul>
<li>mauvais fonctionnement du syst&egrave;me de contr&ocirc;le chimique et de la charge</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Diminution de la charge de caloporteur du r&eacute;acteur </p></td>
<td valign="top"><ul>
<li> APRP tr&egrave;s mineur attribuable &agrave; la d&eacute;faillance d&#8217;une conduite d&#8217;instrumentation</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Rejet de mati&egrave;res radioactives provenant d&#8217;un sous-syst&egrave;me ou d&#8217;un composant</p></td>
<td valign="top"><ul>
<li> fuite mineure d&#8217;un syst&egrave;me de d&eacute;chets radioactifs</li>
</ul></td>
</tr>  </table>  <p><strong><em>5.2.3.2 Accident de dimensionnement</em></strong></p>  <p>Les &eacute;v&eacute;nements &agrave; l&#8217;origine des accidents AD sont class&eacute;s en fonction des fr&eacute;quences estim&eacute;es des d&eacute;faillances de l&#8217;&eacute;quipement, des erreurs de l&#8217;op&eacute;rateur ou des &eacute;v&eacute;nements de cause commune. Tous les &eacute;v&eacute;nements identifi&eacute;s comme initiateurs d&#8217;IFP doivent &eacute;galement &ecirc;tre consid&eacute;r&eacute;s comme initiateurs possibles d&#8217;AD, compte tenu de la probabilit&eacute; relativement &eacute;lev&eacute;e des IFP et de la possibilit&eacute; d&#8217;autres d&eacute;faillances de l&#8217;&eacute;quipement ou d&#8217;erreurs de l&#8217;op&eacute;rateur. </p>  <p>Le tableau 2 pr&eacute;sente des exemples d&#8217;AD pour les r&eacute;acteurs CANDU, les r&eacute;acteurs &agrave; eau sous pression (REP) et autres r&eacute;acteurs &agrave; eau l&eacute;g&egrave;re (REL). La liste qui suit n&#8217;est pas exhaustive. Une&nbsp;liste compl&egrave;te d&#8217;AD d&eacute;pendrait du type de r&eacute;acteur et de la conception r&eacute;elle.</p>  <table border="1" summary="Exemples d&rsquo;accidents de dimensionnement">
<caption>
Tableau&nbsp;2&nbsp;: Exemples d&#8217;accidents de dimensionnement
</caption>
<tr>
<td valign="top"><p align="left"><strong>Cat&eacute;gorie d&#8217;&eacute;v&eacute;nement</strong></p></td>
<td valign="top"><p align="center"><strong>Accident de dimensionnement</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Augmentation de l&#8217;&eacute;vacuation de la chaleur dans le r&eacute;acteur</p></td>
<td valign="top"><ul>
<li> rupture de la conduite de vapeur</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Diminution de l&#8217;&eacute;vacuation de la chaleur dans le r&eacute;acteur </p></td>
<td valign="top"><ul>
<li> rupture de la conduite d&#8217;eau d&#8217;alimentation</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Modification du circuit caloporteur dans le r&eacute;acteur</p></td>
<td valign="top"><ul>
<li> d&eacute;clenchement de plus d&#8217;une pompe de caloporteur principal</li>
<li> blocage de la pompe du caloporteur principal ou rupture de l&#8217;arbre</li>
<li> blocage de l&#8217;&eacute;coulement du canal combustible (CANDU)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Anomalies de la r&eacute;activit&eacute; et de la distribution de puissance</p></td>
<td valign="top"><ul>
<li> retrait incontr&ocirc;l&eacute; de la barre de commande</li>
<li>&eacute;jection de la barre de commande (REL)</li>
<li> dilution du bore due au d&eacute;marrage d&#8217;une boucle inactive (REP)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Augmentation de la charge de caloporteur du r&eacute;acteur </p></td>
<td valign="top"><ul>
<li> fonctionnement intempestif du refroidissement d&#8217;urgence du c&#339;ur </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Diminution de la charge de caloporteur du r&eacute;acteur</p></td>
<td valign="top"><ul>
<li>&eacute;ventail d&#8217;APRP possibles</li>
<li> ouverture intempestive des soupapes de d&eacute;charge du circuit primaire</li>
<li> fuites de caloporteur primaire dans le circuit secondaire</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Rejet de mati&egrave;res radioactives provenant d&#8217;un sous-syst&egrave;me ou d&#8217;un composant</p></td>
<td valign="top"><ul>
<li> surchauffe ou endommagement du combustible us&eacute; au cours du transport ou lors du stockage</li>
<li> rupture dans un circuit de traitement de d&eacute;chets gazeux ou liquides</li>
</ul></td>
</tr>  </table>  <p>Si l&#8217;on a &eacute;tabli un dossier de s&ucirc;ret&eacute; d&#8217;une fuite avant rupture (FAR) dans le cas d&#8217;un circuit de tuyauterie, alors on peut r&eacute;duire la port&eacute;e de l&#8217;AD, comme l&#8217;&eacute;limination de la protection contre les effets dynamiques locaux. Le dossier de s&ucirc;ret&eacute; d&#8217;une FAR doit appliquer une m&eacute;thodologie accept&eacute;e.</p>  <p><strong><em>5.2.3.3 Accidents hors dimensionnement</em></strong></p>  <p>L&#8217;EPS permet d&#8217;identifier syst&eacute;matiquement les s&eacute;quences d&#8217;&eacute;v&eacute;nements qui risquent de compromettre les fonctions de s&ucirc;ret&eacute; fondamentales. Les s&eacute;quences d&#8217;&eacute;v&eacute;nements repr&eacute;sentatives sont alors analys&eacute;es en recourant aux techniques d&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pour &eacute;valuer l&#8217;ampleur des d&eacute;faillances du combustible, les dommages au c&#339;ur du r&eacute;acteur, le circuit et le confinement du caloporteur primaire et les rejets de radionucl&eacute;ides. L&#8217;utilisation d&#8217;une limite de sectionnement pour la fr&eacute;quence d&#8217;un AHD analys&eacute; doit prendre en compte les objectifs de s&ucirc;ret&eacute; &eacute;tablis pour la centrale.</p>  <p>Exemples d&#8217;accidents hors dimensionnement&nbsp;:</p>  <ul>
<li> perte compl&egrave;te d&#8217;&eacute;vacuation de la chaleur r&eacute;siduelle du c&#339;ur du r&eacute;acteur </li>
<li> perte compl&egrave;te de l&#8217;alimentation &eacute;lectrique pour une longue p&eacute;riode</li>  </ul>  <p>Cette classe d&#8217;&eacute;v&eacute;nements comprend &eacute;galement des d&eacute;faillances massives des cuves sous pression. Certaines de ces d&eacute;faillances peuvent &ecirc;tre exempt&eacute;es de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; s&#8217;il peut &ecirc;tre d&eacute;montr&eacute; qu&#8217;elles sont suffisamment improbables et que toutes les conditions suivantes sont remplies&nbsp;:</p>  <ul>
<li> la cuve est con&ccedil;ue, fabriqu&eacute;e, install&eacute;e et utilis&eacute;e conform&eacute;ment aux exigences nucl&eacute;aires des codes d&#8217;ing&eacute;nierie applicables et &agrave; d&#8217;autres exigences</li>
<li> un programme d&#8217;inspection en service est mis en &#339;uvre</li>
<li> l&#8217;exp&eacute;rience d&#8217;exploitation avec des cuves semblables au point de vue de la conception et de l&#8217;exploitation entra&icirc;ne une faible probabilit&eacute; de d&eacute;faillances</li>
<li> la cuve pr&eacute;sente des dispositifs de contrainte appropri&eacute;s pour limiter la propagation des dommages &agrave; la centrale</li>  </ul>  <p><em>Nota</em>&nbsp;: Un collecteur du circuit caloporteur CANDU n&#8217;est pas consid&eacute;r&eacute; comme une cuve sous pression. </p>  <p>Les &eacute;v&eacute;nements exclus de l&#8217;analyse de l&#8217;AD en fonction de la m&eacute;thodologie de la FAR doivent &ecirc;tre pris en compte dans les s&eacute;quences des AHD. Par exemple, tout APRP majeur ou rupture de la conduite de vapeur principale qui a pu &ecirc;tre exclu de AD doit &ecirc;tre pris en compte pour l&#8217;analyse de l&#8217;AHD.</p>   <a name="5.3"></a>
<h3 className="reportHeading3"><a name="P351_44141" id="P351_44141"></a>5.3 Crit&egrave;res d&#8217;acceptation</h3>  <p>Les crit&egrave;res d&#8217;acceptation sont &eacute;tablis pour servir de seuil de fonctionnement s&ucirc;r pour l&#8217;exploitation normale, et pour les IFP, AD et dans la mesure du possible les AHD. Les limites et conditions appliqu&eacute;es par les concepteurs et op&eacute;rateurs de la centrale doivent &ecirc;tre appuy&eacute;es par des preuves exp&eacute;rimentales convenables et &ecirc;tre conformes aux crit&egrave;res d&#8217;acceptation de l&#8217;analyse de s&ucirc;ret&eacute; d&eacute;crits dans les sous-sections 5.3.1 &agrave; 5.3.4.</p>   <a name="5.3.1"></a>
<h4 className="reportHeading4"><a name="P353_44628" id="P353_44628"></a>5.3.1 Exploitation normale</h4>  <p>Les crit&egrave;res d&#8217;acceptation de l&#8217;analyse de s&ucirc;ret&eacute; pour l&#8217;exploitation normale sont les suivants&nbsp;: </p>  <ul>
<li> les doses de rayonnement re&ccedil;ues par les travailleurs et les membres du public se situent &agrave; l&#8217;int&eacute;rieur des limites acceptables</li>
<li>les rejets de mati&egrave;res radioactives g&eacute;n&eacute;r&eacute;es par la centrale nucl&eacute;aire se situent &agrave; l&#8217;int&eacute;rieur des limites acceptables</li>
<li> les doses re&ccedil;ues par les travailleurs et les membres du public, et les estimations des rejets de mati&egrave;res radioactives dans l&#8217;environnement, sont conformes au principe ALARA (niveau le plus faible qu&#8217;il soit raisonnablement possible d&#8217;atteindre)</li>  </ul>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pour l&#8217;exploitation normale doit &eacute;galement permettre de&nbsp;:</p>  <ul>
<li> v&eacute;rifier que l&#8217;enclenchement des syst&egrave;mes de s&ucirc;ret&eacute; ne se produit que si cela est n&eacute;cessaire </li>
<li> v&eacute;rifier que les contr&ocirc;les et alarmes des proc&eacute;d&eacute;s sont efficaces et parviennent &agrave; r&eacute;duire ou &agrave; &eacute;viter l&#8217;intervention des syst&egrave;mes de s&ucirc;ret&eacute; </li>
<li> r&eacute;pondre &agrave; toutes les conditions d&#8217;exploitation de la centrale nucl&eacute;aire selon lesquelles les syst&egrave;mes et l&#8217;&eacute;quipement fonctionnent comme pr&eacute;vu, sans obstacle interne ou externe, y compris toutes les configurations op&eacute;rationnelles pour lesquelles elle a &eacute;t&eacute; con&ccedil;ue pour fonctionner au cours de l&#8217;exploitation normale tout au long de sa dur&eacute;e de vie, en r&eacute;gime de puissance et &agrave; l&#8217;arr&ecirc;t</li>  </ul>   <a name="5.3.2"></a>
<h4 className="reportHeading4"><a name="P362_46059" id="P362_46059"></a>5.3.2 Incidents de fonctionnement pr&eacute;vus et accidents de dimensionnement</h4>  <p>L&#8217;objectif de l&#8217;analyse de s&ucirc;ret&eacute; des IFP et des AD consiste &agrave; d&eacute;montrer l&#8217;efficacit&eacute; des fonctions de s&ucirc;ret&eacute;&nbsp;essentielles suivantes&nbsp;:</p>  <ul>
<li> le contr&ocirc;le de la puissance du r&eacute;acteur, y compris l&#8217;arr&ecirc;t du r&eacute;acteur et son maintien &agrave; l&#8217;&eacute;tat d&#8217;arr&ecirc;t</li>
<li> l&#8217;&eacute;vacuation de la chaleur du c&#339;ur</li>
<li> la pr&eacute;servation de l&#8217;int&eacute;grit&eacute; de barri&egrave;res des produits de fission</li>
<li> la pr&eacute;servation de l&#8217;aptitude fonctionnelle des composants pour les IFP</li>
<li>l&#8217;assurance que les cons&eacute;quences des rejets de mati&egrave;res radioactives sont inf&eacute;rieures aux limites acceptables</li>
<li> la surveillance des param&egrave;tres de s&ucirc;ret&eacute; critiques</li>  </ul>  <p>Les crit&egrave;res d&#8217;acceptation pour les IFP et les AD doivent comprendre&nbsp;: </p>  <ul>
<li> les crit&egrave;res d&#8217;acceptation associ&eacute;s aux doses re&ccedil;ues par le public</li>
<li>les crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s relatifs &agrave; la protection des barri&egrave;res physiques de d&eacute;fense en profondeur (voir les exemples &agrave; la sous-section 5.3.4 et &agrave; l&#8217;annexe B</li>  </ul>  <p>Les crit&egrave;res d&#8217;acceptation quantitatifs d&eacute;riv&eacute;s doivent &ecirc;tre &eacute;tablis en fonction des preuves physiques directes et des ph&eacute;nom&egrave;nes bien compris et doivent tenir compte des incertitudes.</p>  <p>La dose r&eacute;elle au corps entier pour les membres de groupes critiques les plus &agrave; risque, &agrave; la p&eacute;riph&eacute;rie du site ou au-del&agrave;, est calcul&eacute;e dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pendant une p&eacute;riode de 30 jours apr&egrave;s l&#8217;&eacute;v&eacute;nement analys&eacute;.</p>  <p>Cette dose est inf&eacute;rieure ou &eacute;gale aux crit&egrave;res d&#8217;acceptation des doses indiqu&eacute;s ci-dessous&nbsp;:</p>  <ul>
<li> 0,5 millisievert pour tout IFP</li>
<li> 20 millisieverts pour tout AD</li>  </ul>  <p>Ces limites de doses s&#8217;appliquent aux nouvelles centrales nucl&eacute;aires (soit celles autoris&eacute;es apr&egrave;s publication du document RD-337,<em> Conception des nouvelles centrales nucl&eacute;aires</em> en 2008). Dans le cas des r&eacute;acteurs existants, les limites de doses pr&eacute;cis&eacute;es dans les permis d&#8217;exploitation doivent &ecirc;tre respect&eacute;es. </p>  <p>Pour d&eacute;montrer que les cons&eacute;quences radiologiques d&#8217;un &eacute;v&eacute;nement analys&eacute; ne d&eacute;passent pas les limites, les doses doivent &ecirc;tre calcul&eacute;es conform&eacute;ment aux indications fournies dans la sous-section 5.4.4.6. </p>  <p>Les crit&egrave;res d&#8217;acceptation pour la classe d&#8217;&eacute;v&eacute;nements dont les fr&eacute;quences sont sup&eacute;rieures doivent &ecirc;tre plus rigoureux que ceux relatifs &agrave; la classe d&#8217;&eacute;v&eacute;nements ayant des fr&eacute;quences inf&eacute;rieures. Par exemple&nbsp;: </p>  <ul>
<li> Le crit&egrave;re d&#8217;acceptation radiologique pour les IFP doit &ecirc;tre plus rigoureux &eacute;tant donn&eacute; que leurs fr&eacute;quences sont sup&eacute;rieures aux autres classifications</li>
<li> Les limites de doses re&ccedil;ues par le public pour les IFP doivent &ecirc;tre &eacute;tablies de fa&ccedil;on &agrave; ce que les activit&eacute;s des membres du public ne soient pas restreintes en raison des rejets radiologiques potentiels</li>
<li> Les limites de doses re&ccedil;ues par le public pour les AD doivent &ecirc;tre telles que le risque d&#8217;effets sur la sant&eacute; attribuable aux doses re&ccedil;ues doit &ecirc;tre faible; dans le cas d&#8217;un AD, les incidences radiologiques ne doivent pas n&eacute;cessiter des interventions d&#8217;urgence hors site</li>  </ul>  <p>Pour d&eacute;montrer la conformit&eacute; aux crit&egrave;res d&#8217;acceptation des doses re&ccedil;ues par le public pour un IFP, les fonctions d&#8217;isolement automatique et de suppression de la pression du syst&egrave;me de confinement ne devraient pas &ecirc;tre cr&eacute;dit&eacute;es. Toutefois, on doit tenir compte de la capacit&eacute; des barri&egrave;res passives de confinement et des sous-syst&egrave;mes de confinement fonctionnant normalement, s&#8217;ils sont qualifi&eacute;s pour les conditions d&#8217;IFP. </p>  <p>En ce qui &agrave; trait aux crit&egrave;res d&#8217;acceptation qualitatifs (comme les exemples donn&eacute;s &agrave; l&#8217;annexe&nbsp;B), les directives suivantes ne s&#8217;appliquent qu&#8217;aux IFP&nbsp;:</p>  <ul>
<li> les crit&egrave;res d&#8217;acceptation qualitatifs doivent &ecirc;tre respect&eacute;s sans avoir &agrave; se fier &agrave; la fonction automatique des syst&egrave;mes de s&ucirc;ret&eacute; pour toute une vari&eacute;t&eacute; d&#8217;IFP. Les syst&egrave;mes de contr&ocirc;le de la centrale doivent normalement &ecirc;tre en mesure de corriger le transitoire et d&#8217;emp&ecirc;cher d&#8217;endommager les SSC</li>
<li> les syst&egrave;mes de contr&ocirc;le doivent &ecirc;tre en mesure de maintenir la centrale dans un &eacute;tat de fonctionnement stable pendant suffisamment de temps pour permettre &agrave; l&#8217;op&eacute;rateur de diagnostiquer l&#8217;&eacute;v&eacute;nement, d&#8217;enclencher les mesures n&eacute;cessaires et, s&#8217;il y a lieu, d&#8217;arr&ecirc;ter le r&eacute;acteur en suivant les proc&eacute;dures applicables</li>
<li> m&ecirc;me s&#8217;il peut &ecirc;tre d&eacute;montr&eacute; que les syst&egrave;mes de contr&ocirc;le maintiennent la centrale dans un &eacute;tat s&ucirc;r &agrave; la suite d&#8217;un IFP sans l&#8217;enclenchement des syst&egrave;mes de s&ucirc;ret&eacute; (d&eacute;fense en profondeur de niveau&nbsp;2), il faut &eacute;galement d&eacute;montrer avec beaucoup de confiance, pour tous les IFP, que les syst&egrave;mes de s&ucirc;ret&eacute; peuvent att&eacute;nuer l&#8217;&eacute;v&eacute;nement sans les mesures b&eacute;n&eacute;fiques produites par les syst&egrave;mes de contr&ocirc;le (d&eacute;fense en profondeur de niveau&nbsp;3)</li>  </ul>  <p>Certains accidents dont la fr&eacute;quence pr&eacute;vue est inf&eacute;rieure &agrave; 10<sup>-5</sup> par ann&eacute;e de r&eacute;acteur pourraient servir d&#8217;&eacute;v&eacute;nement de r&eacute;f&eacute;rence pour un syst&egrave;me de s&ucirc;ret&eacute;. Dans ce cas, les limites de doses d&#8217;un AD devront toujours &ecirc;tre respect&eacute;es et l&#8217;analyse devra &eacute;galement envisager l&#8217;observation des crit&egrave;res d&#8217;acceptation qualitatifs applicables &agrave; ce syst&egrave;me de s&ucirc;ret&eacute; particulier. Par exemple, un APRP caus&eacute; par une rupture majeure peut avoir une fr&eacute;quence estim&eacute;e de moins de 10<sup>-5</sup> par ann&eacute;e de r&eacute;acteur, tout en &eacute;tant encore consid&eacute;r&eacute; comme un AD. Le rendement du syst&egrave;me de s&ucirc;ret&eacute; doit &ecirc;tre suffisant pour s&#8217;assurer que les limites de doses d&#8217;un AD sont respect&eacute;es. </p>   <a name="5.3.3"></a>
<h4 className="reportHeading4"><a name="P390_51607" id="P390_51607"></a>5.3.3 Accidents hors dimensionnement</h4>  <p>L&#8217;&eacute;valuation probabiliste et d&eacute;terministe de la s&ucirc;ret&eacute; doit d&eacute;montrer que la d&eacute;fense en profondeur de niveau&nbsp;4 emp&ecirc;che les cons&eacute;quences d&#8217;un AHD, ou les att&eacute;nue, y compris les accidents graves, comme le d&eacute;crit le document RD-337. L&#8217;analyse d&eacute;terministe d&#8217;un AHD porte sur un ensemble de s&eacute;quences repr&eacute;sentatives dans lesquelles les syst&egrave;mes de s&ucirc;ret&eacute; ont mal fonctionn&eacute; et certaines des barri&egrave;res s&#8217;opposant au rejet de mati&egrave;res radioactives peuvent avoir &eacute;t&eacute; d&eacute;fectueuses ou contourn&eacute;es. Les AHD repr&eacute;sentatifs doivent &ecirc;tre choisis &agrave; partir des principales s&eacute;quences d&#8217;accident provenant de l&#8217;&eacute;tude probabiliste de la s&ucirc;ret&eacute; ou en ajoutant les d&eacute;faillances des syst&egrave;mes de s&ucirc;ret&eacute; ou les interventions inappropri&eacute;es de l&#8217;op&eacute;rateur aux s&eacute;quences d&#8217;un AD.</p>  <p>L&#8217;objectif de l&#8217;analyse de s&ucirc;ret&eacute; pour un AHD consiste &agrave;&nbsp;:</p>  <ul>
<li>&eacute;valuer la capacit&eacute; de la conception &agrave; surmonter les difficult&eacute;s que pose l&#8217;AHD et &agrave; identifier les vuln&eacute;rabilit&eacute;s de la centrale</li>
<li>&eacute;valuer l&#8217;efficacit&eacute; des caract&eacute;ristiques de conception sp&eacute;cifiquement incorpor&eacute;es dans la conception de la centrale pour r&eacute;duire la probabilit&eacute; ou att&eacute;nuer les cons&eacute;quences des AHD, y&nbsp;compris l&#8217;&eacute;valuation de l&#8217;&eacute;quipement relatif &agrave; la gestion des accidents et l&#8217;instrumentation n&eacute;cessaire &agrave; la surveillance des accidents</li>
<li>&eacute;valuer la capacit&eacute; de r&eacute;tablir et de maintenir les fonctions de s&ucirc;ret&eacute; en utilisant d&#8217;autres proc&eacute;dures, m&eacute;thodes et syst&egrave;mes vari&eacute;s, y compris l&#8217;utilisation de l&#8217;&eacute;quipement non li&eacute; &agrave; la s&ucirc;ret&eacute;</li>
<li> aider &agrave; mettre au point un programme de gestion des accidents pour les AHD et les conditions d&#8217;accident grave</li>
<li> fournir les donn&eacute;es sur les cons&eacute;quences pour les s&eacute;quences d&#8217;accident &agrave; utiliser dans l&#8217;EPS</li>
<li> participer &agrave; la planification d&#8217;urgence hors site</li>  </ul>  <p>Les crit&egrave;res d&#8217;acceptation pour les AHD sont g&eacute;n&eacute;ralement formul&eacute;s en termes de crit&egrave;res de risque, tels les objectifs de s&ucirc;ret&eacute; li&eacute;s &agrave; la fr&eacute;quence des dommages graves au c&#339;ur du r&eacute;acteur et aux rejets importants de mati&egrave;res radioactives, tels qu&#8217;ils sont &eacute;valu&eacute;s par l&#8217;EPS.</p>  <p>Les calculs d&eacute;terministes des termes sources pour les AHD peuvent &eacute;galement &ecirc;tre effectu&eacute;s conform&eacute;ment &agrave; l&#8217;objectif de l&#8217;analyse de l&#8217;AHD, pour d&eacute;montrer le respect des crit&egrave;res de risque. Ces calculs doivent d&eacute;montrer par exemple que&nbsp;:</p>  <ul>
<li> la d&eacute;faillance du confinement ne se produira pas &agrave; court terme &agrave; la suite d&#8217;un accident grave (voir les sous-sections 7.3.4 et 8.6.12 du document RD-337)</li>
<li> les membres du public b&eacute;n&eacute;ficient d&#8217;un niveau de protection contre les cons&eacute;quences pouvant d&eacute;couler de l&#8217;exploitation d&#8217;une centrale nucl&eacute;aire de sorte qu&#8217;il n&#8217;y a pas de risque suppl&eacute;mentaire important pour la vie et la sant&eacute; des personnes</li>  </ul>   <a name="5.3.4"></a>
<h4 className="reportHeading4"><a name="P403_54475" id="P403_54475"></a>5.3.4 Crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s relatifs aux incidents de fonctionnement pr&eacute;vus et aux accidents de dimensionnement</h4>  <p>En plus des limites de doses pr&eacute;vues dans la sous-section 5.3.2, les crit&egrave;res d&#8217;acceptation pour les IFP et les AD comprennent &eacute;galement un ensemble de crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s, tels que les exemples de crit&egrave;res d&#8217;acceptation qualitatifs donn&eacute;s &agrave; l&#8217;annexe B. </p>  <p>Ces crit&egrave;res d&#8217;acceptation sont &eacute;tablis par le concepteur pour limiter les dommages &agrave; diverses barri&egrave;res de d&eacute;fense. La conformit&eacute; &agrave; ces exigences garantit la pr&eacute;sence de barri&egrave;res physiques pour limiter le rejet de mati&egrave;res radioactives et pr&eacute;venir les rejets radiologiques inacceptables suivant un IFP ou un AD. Le non-respect d&#8217;un crit&egrave;re d&#8217;acceptation d&eacute;riv&eacute; ne signifie pas n&eacute;cessairement que les limites de doses seront d&eacute;pass&eacute;es. Toutefois, si ces crit&egrave;res sont respect&eacute;s avec une marge importante, il est alors possible de simplifier les calculs de doses &eacute;tant donn&eacute; que les rejets du produit de fission devraient &ecirc;tre limit&eacute;s.</p>  <p>Les crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s sont g&eacute;n&eacute;ralement plus rigoureux pour les &eacute;v&eacute;nements dont la fr&eacute;quence est plus &eacute;lev&eacute;e. Par exemple, pour la plupart des IFP, les interventions des syst&egrave;mes de contr&ocirc;le doivent &ecirc;tre en mesure d&#8217;emp&ecirc;cher la d&eacute;gradation indirecte de n&#8217;importe quelle barri&egrave;re physique dans la mesure o&ugrave; les SSC connexes ne sont plus aptes au service (y compris la matrice du combustible, la gaine du combustible, la limite de pression du caloporteur du r&eacute;acteur ou le confinement).</p>  <p>Des exigences plus rigoureuses peuvent &ecirc;tre &eacute;tablies pour d&eacute;montrer la disponibilit&eacute; d&#8217;une marge entre la valeur pr&eacute;vue et les crit&egrave;res d&#8217;acceptation quantitatifs ou pour simplifier une analyse (par exemple pour &eacute;viter d&#8217;avoir &agrave; effectuer une mod&eacute;lisation complexe). Il faut clairement indiquer les conditions d&#8217;applicabilit&eacute; de chaque crit&egrave;re additionnel.</p>  <p>Pour chacun des crit&egrave;res d&#8217;acceptation qualitatifs illustr&eacute;s &agrave; l&#8217;annexe B, il faut &eacute;tablir des crit&egrave;res d&#8217;acceptation quantitatifs (ou limites). Les limites quantitatives doivent&nbsp;:</p>  <ul>
<li>&ecirc;tre applicables au syst&egrave;me de centrale nucl&eacute;aire et au sc&eacute;nario d&#8217;accident donn&eacute;s</li>
<li> tracer une limite &eacute;vidente entre les &eacute;tats s&eacute;curitaires (lorsque la d&eacute;faillance des SSC est &eacute;vit&eacute;e avec un niveau de confiance &eacute;lev&eacute;) et les &eacute;tats non s&eacute;curitaires (lorsqu&#8217;une d&eacute;faillance des SSC peut se produire)</li>
<li>&ecirc;tre appuy&eacute;es par des donn&eacute;es exp&eacute;rimentales</li>
<li> int&eacute;grer des marges ou des facteurs de s&ucirc;ret&eacute; pour tenir compte de l&#8217;incertitude des donn&eacute;es exp&eacute;rimentales et des mod&egrave;les pertinents</li>  </ul>  <p>Lorsque les donn&eacute;es ne suffisent pas &agrave; d&eacute;terminer la transition d&#8217;un &eacute;tat s&eacute;curitaire &agrave; un &eacute;tat non s&eacute;curitaire ou &agrave; &eacute;tablir des mod&egrave;les pr&eacute;cis, alors la limite quantitative relative aux exigences de s&ucirc;ret&eacute; correspondantes doit &ecirc;tre &eacute;tablie &agrave; la limite des donn&eacute;es disponibles, &agrave; condition que la limite &eacute;tablie soit prudente.</p>   <a name="5.4"></a>
<h3 className="reportHeading3"><a name="P414_57503" id="P414_57503"></a>5.4 Hypoth&egrave;ses et m&eacute;thodes d&#8217;analyse de s&ucirc;ret&eacute;</h3>  <a name="5.4.1"></a>
<h4 className="reportHeading4"><a name="P415_57555" id="P415_57555"></a>5.4.1 Dispositions g&eacute;n&eacute;rales</h4>  <p>La sous-section&nbsp;5.4 porte principalement sur les m&eacute;thodes et hypoth&egrave;ses li&eacute;es &agrave; l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; des IFP et des AD pour la d&eacute;fense en profondeur de niveau&nbsp;3. Des&nbsp;m&eacute;thodes et hypoth&egrave;ses d&#8217;analyse semblables peuvent s&#8217;appliquer &agrave; la d&eacute;fense en profondeur des niveaux&nbsp;2 et 4 (avec des degr&eacute;s appropri&eacute;s de prudence). Certaines r&egrave;gles prudentes, comme le crit&egrave;re de d&eacute;faillance unique, ne s&#8217;appliquent pas aux analyses des niveaux&nbsp;2 et 4.</p>  <p>L&#8217;analyste de s&ucirc;ret&eacute; a la possibilit&eacute; de choisir les m&eacute;thodes et hypoth&egrave;ses d&#8217;analyse de s&ucirc;ret&eacute;, dans la mesure o&ugrave; les exigences et attentes r&eacute;glementaires sont respect&eacute;es.</p>  <p>Le choix des m&eacute;thodes et hypoth&egrave;ses d&#8217;analyse de s&ucirc;ret&eacute; doit &ecirc;tre tel que le niveau appropri&eacute; de confiance puisse transpara&icirc;tre dans les r&eacute;sultats d&#8217;analyse.</p>   <a name="5.4.2"></a>
<h4 className="reportHeading4"><a name="P419_58420" id="P419_58420"></a>5.4.2 M&eacute;thode d&#8217;analyse</h4>  <p>Les &eacute;l&eacute;ments de base compris dans la m&eacute;thode d&#8217;analyse de s&ucirc;ret&eacute; sont d&eacute;crits dans les sous-sections 5.4.2.1 &agrave; 5.4.2.9. </p>  <p>Trois m&eacute;thodes d&#8217;analyse principales sont utilis&eacute;es dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;&nbsp;:</p>  <ol>
<li> la m&eacute;thode d&#8217;analyse prudente, comme celle utilis&eacute;e pour la d&eacute;fense en profondeur de niveau&nbsp;3 </li>
<li> la meilleure estimation plus &eacute;valuation des m&eacute;thodes tenant compte des incertitudes, comme la m&eacute;thode utilis&eacute;e pour la d&eacute;fense en profondeur de niveau&nbsp;3</li>
<li> la m&eacute;thode d&#8217;analyse fond&eacute;e sur la meilleure estimation, comme celle utilis&eacute;e pour la d&eacute;fense en profondeur des niveaux&nbsp;2 et 4</li>  </ol>  <p>Les m&eacute;thodes&nbsp;1 et 2 mentionn&eacute;es ci-dessus sont prises en compte lors de l&#8217;application du principe de prudence dans l&#8217;analyse de s&ucirc;ret&eacute; et sont trait&eacute;es dans la sous-section&nbsp;5.4.6.</p>  <p><strong><em>5.4.2.1 D&eacute;terminer les sc&eacute;narios &agrave; analyser</em></strong></p>  <p>Le sc&eacute;nario &agrave; analyser, ou l&#8217;&eacute;v&eacute;nement analys&eacute;, doivent &ecirc;tre d&eacute;finis en int&eacute;grant les descriptions des &eacute;l&eacute;ments suivants&nbsp;: </p>  <ul>
<li> les conditions initiales</li>
<li> l&#8217;&eacute;v&eacute;nement initiateur et tout &eacute;v&eacute;nement suppl&eacute;mentaire</li>
<li> les interventions pr&eacute;vues des syst&egrave;mes de la centrale et de l&#8217;op&eacute;rateur en r&eacute;ponse &agrave; l&#8217;&eacute;v&eacute;nement initiateur</li>
<li> la description g&eacute;n&eacute;rale du transitoire pr&eacute;vu</li>
<li> les pr&eacute;occupations connexes li&eacute;es &agrave; la s&ucirc;ret&eacute; </li>
<li> l&#8217;&eacute;tat stable de longue dur&eacute;e &agrave; la fin de l&#8217;&eacute;v&eacute;nement</li>  </ul>  <p><strong><em>5.4.2.2 &Eacute;tablir les crit&egrave;res d&#8217;acceptation applicables</em></strong></p>  <p>Il faut d&eacute;terminer un ensemble de crit&egrave;res applicables, y compris toute exigence r&eacute;glementaire. Ces crit&egrave;res doivent tenir compte de tous les probl&egrave;mes li&eacute;s &agrave; la s&ucirc;ret&eacute; tout en d&eacute;montrant leur conformit&eacute; aux crit&egrave;res d&#8217;acceptation de doses d&eacute;crits dans la sous-section 5.3.2, ainsi que les crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s adopt&eacute;s par le concepteur. D&#8217;autres crit&egrave;res peuvent &ecirc;tre d&eacute;finis pour, par exemple, simplifier l&#8217;analyse en imposant des crit&egrave;res plus rigoureux ou pour permettre des &eacute;valuations interm&eacute;diaires dans la recherche de cas limites.</p>  <p><strong><em>5.4.2.3 Cerner les ph&eacute;nom&egrave;nes importants</em></strong></p>  <p>Il faut d&eacute;terminer les ph&eacute;nom&egrave;nes essentiels et l&#8217;&eacute;ventail des valeurs param&eacute;triques associ&eacute;es &agrave; l&#8217;&eacute;v&eacute;nement analys&eacute;. Il faut &eacute;galement fournir les donn&eacute;es exp&eacute;rimentales &agrave; l&#8217;appui et d&eacute;montrer une compr&eacute;hension th&eacute;orique.</p>  <p>Si un &eacute;v&eacute;nement est caract&eacute;ris&eacute; par suffisamment d&#8217;&eacute;tapes diverses, alors le ph&eacute;nom&egrave;ne essentiel doit &ecirc;tre d&eacute;termin&eacute; pour chaque &eacute;tape.</p>  <p>L&#8217;importance des ph&eacute;nom&egrave;nes en jeu doit &ecirc;tre &eacute;valu&eacute;e par rapport &agrave; chaque crit&egrave;re d&#8217;acceptation. Les param&egrave;tres essentiels sont d&eacute;finis pour chaque ph&eacute;nom&egrave;ne important. Ces param&egrave;tres sont par la suite class&eacute;s en fonction de leur capacit&eacute; &agrave; influencer les crit&egrave;res d&#8217;acceptation applicables. </p>  <p>Les analyses de sensibilit&eacute; peuvent &ecirc;tre utilis&eacute;es conjointement avec le jugement d&#8217;experts pour aider &agrave; d&eacute;finir et &agrave; classer les param&egrave;tres en &eacute;valuant leur influence sur les r&eacute;sultats d&#8217;analyse pour chaque crit&egrave;re d&#8217;acceptation. Une importance particuli&egrave;re doit &ecirc;tre accord&eacute;e &agrave; l&#8217;identification de toute modification radicale du ph&eacute;nom&egrave;ne au cours de n&#8217;importe quelle &eacute;tape de l&#8217;analyse.</p>  <p>Les r&eacute;sultats des exp&eacute;riences doivent &eacute;galement &ecirc;tre utilis&eacute;s pour aider &agrave; d&eacute;terminer les param&egrave;tres importants, &agrave; effectuer la classification en fonction de l&#8217;importance et &agrave; d&eacute;terminer si des changements radicaux se sont produits, et o&ugrave; ils se sont produits.</p>  <p><strong><em>5.4.2.4 Mod&egrave;les et codes informatiques</em></strong></p>  <p>L&#8217;analyse de s&ucirc;ret&eacute; est effectu&eacute;e en utilisant les mod&egrave;les des syst&egrave;mes de la centrale et des ph&eacute;nom&egrave;nes physiques.</p>  <p>Tous les ph&eacute;nom&egrave;nes importants indiqu&eacute;s dans la sous-section 5.4.2.3 doivent &ecirc;tre repr&eacute;sent&eacute;s dans les mod&egrave;les int&eacute;gr&eacute;s dans le code informatique utilis&eacute; pour les calculs.</p>  <p>Conform&eacute;ment &agrave; la sous-section&nbsp;5.4 du document RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>, les mod&egrave;les et l&#8217;applicabilit&eacute; des codes informatiques &agrave; l&#8217;&eacute;v&eacute;nement analys&eacute; seront &eacute;galement d&eacute;montr&eacute;s. Les mod&egrave;les des syst&egrave;mes de la centrale doivent &ecirc;tre v&eacute;rifi&eacute;s pour refl&eacute;ter l&#8217;&eacute;tat de la centrale telle qu&#8217;elle est construite, en tenant compte des effets du vieillissement et des &eacute;tats de la centrale.</p>  <p>La sous-section 5.4.5 pr&eacute;sente des directives suppl&eacute;mentaires.</p>  <p><strong><em>5.4.2.5 D&eacute;finition des conditions initiales et limites</em></strong></p>  <p>L&#8217;analyse doit d&eacute;finir les donn&eacute;es qui rendent compte de l&#8217;&eacute;tat de la centrale avant l&#8217;&eacute;v&eacute;nement analys&eacute; et le fonctionnement de la centrale pendant l&#8217;&eacute;v&eacute;nement, notamment, en ce qui concerne, sans s&#8217;y limiter&nbsp;:</p>  <ul>
<li> le mode d&#8217;exploitation de la centrale</li>
<li> la puissance du r&eacute;acteur</li>
<li> la combustion du combustible et sa distribution</li>
<li> les temp&eacute;ratures du combustible</li>
<li> les temp&eacute;ratures et pressions du caloporteur</li>
<li> les seuils de d&eacute;clenchement et d&#8217;intervention pour les syst&egrave;mes d&#8217;att&eacute;nuation</li>
<li> les retards et incertitudes des instruments</li>
<li> les caract&eacute;ristiques des syst&egrave;mes de s&ucirc;ret&eacute; en mati&egrave;re de rendement</li>
<li> le rendement d&#8217;autres &eacute;quipements de la centrale (comme les pompes, les soupapes, les refroidisseurs, les chaudi&egrave;res et la turbine)</li>
<li> les conditions m&eacute;t&eacute;orologiques</li>  </ul>  <p>Dans l&#8217;application de telles donn&eacute;es, il faut tenir compte des limites et conditions d&#8217;exploitation (LCE) de la centrale. Les conditions de la centrale utilis&eacute;es comme &eacute;tat initial pour l&#8217;analyse peuvent repr&eacute;senter l&#8217;&eacute;tat r&eacute;el de la centrale ou, dans de nombreux cas, repr&eacute;senter les limites choisies pour la mise en vigueur des LCE. Cela serait effectu&eacute; de fa&ccedil;on que l&#8217;analyse puisse confirmer que le choix d&#8217;une valeur LCE est en vigueur. Autrement, les r&eacute;sultats d&#8217;analyse peuvent &ecirc;tre employ&eacute;s pour calculer une valeur convenable &agrave; utiliser comme limite d&#8217;exploitation. L&#8217;attention et le bon jugement sont n&eacute;cessaires pour assurer la concordance de l&#8217;ensemble des LCE d&eacute;riv&eacute;es de telles analyses de s&ucirc;ret&eacute;.</p>  <p><strong><em>5.4.2.6 Effectuer des calculs</em></strong></p>  <p>Des calculs complets sont effectu&eacute;s pour &eacute;valuer le rendement de la centrale par rapport &agrave; chaque crit&egrave;re d&#8217;acceptation applicable. Les &eacute;tudes de sensibilit&eacute; sont entreprises pour &eacute;valuer l&#8217;incidence des hypoth&egrave;ses principales sur les r&eacute;sultats d&#8217;analyse, par exemple en d&eacute;terminant les pires d&eacute;faillances uniques dans divers syst&egrave;mes, ou pour &eacute;valuer les cons&eacute;quences de l&#8217;utilisation des mod&egrave;les simplifi&eacute;s plut&ocirc;t que de m&eacute;thodes complexes plus pr&eacute;cises exigeant un effort important dans les calculs. L&#8217;analyse de sensibilit&eacute;, avec des variations syst&eacute;matiques des variables d&#8217;entr&eacute;e ou des param&egrave;tres de mod&eacute;lisation des codes informatiques, doit confirmer qu&#8217;il n&#8217;y a pas d&#8217;&laquo;&nbsp;effet de falaise&nbsp;&raquo;, comme des changements radicaux dans la r&eacute;ponse de la centrale, ou des cons&eacute;quences accidentelles attribuables &agrave; un changement des valeurs des param&egrave;tres.</p>  <p>La dur&eacute;e des transitoires prises en compte dans l&#8217;analyse doit &ecirc;tre suffisante pour d&eacute;terminer les cons&eacute;quences des &eacute;v&eacute;nements. Par cons&eacute;quent, les calculs relatifs aux transitoires de la centrale d&eacute;passent le point o&ugrave; la centrale nucl&eacute;aire a &eacute;t&eacute; mise &agrave; l&#8217;arr&ecirc;t et o&ugrave; le refroidissement stable du c&#339;ur du r&eacute;acteur a &eacute;t&eacute; &eacute;tabli par des moyens &eacute;vidents (c.-&agrave;-d. au point o&ugrave; un &eacute;tat stable de longue dur&eacute;e a &eacute;t&eacute; atteint et devrait demeurer comme tel le temps n&eacute;cessaire). </p>  <p>Dans les cas o&ugrave; diverses &eacute;tapes du transitoire sont r&eacute;gies par diff&eacute;rents ph&eacute;nom&egrave;nes ou diff&eacute;rentes &eacute;chelles de temps, des m&eacute;thodes et outils divers peuvent &ecirc;tre utilis&eacute;s pour mod&eacute;liser les &eacute;tapes cons&eacute;cutives.</p>  <p><strong><em>5.4.2.7  Tenir compte des incertitudes</em></strong></p>  <p>Dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pour la d&eacute;fense en profondeur de niveau&nbsp;3, toutes les incertitudes principales doivent &ecirc;tre d&eacute;cel&eacute;es et prises en compte. L&#8217;analyse de s&ucirc;ret&eacute; pour le niveau&nbsp;3 doit int&eacute;grer des tol&eacute;rances appropri&eacute;es li&eacute;es aux incertitudes pour les param&egrave;tres applicables au sc&eacute;nario d&#8217;accident analys&eacute;. De telles incertitudes doivent comprendre celles li&eacute;es aux param&egrave;tres de mod&eacute;lisation et d&#8217;entr&eacute;e de la centrale.</p>  <p>L&#8217;exactitude des codes obtenue par suite des travaux de validation doit &ecirc;tre utilis&eacute;e comme source pour les incertitudes li&eacute;es &agrave; la mod&eacute;lisation. L&#8217;exactitude des codes est d&eacute;finie par les biais et la variabilit&eacute; des biais et doit &ecirc;tre obtenue en comparant les pr&eacute;visions des codes avec les donn&eacute;es exp&eacute;rimentales.</p>  <p>Les param&egrave;tres d&#8217;entr&eacute;e de la centrale (aussi appel&eacute;s param&egrave;tres op&eacute;rationnels) caract&eacute;risent l&#8217;&eacute;tat des SSC de la centrale ou sont utilis&eacute;s pour actionner le syst&egrave;me d&#8217;att&eacute;nuation. Ceux-ci sont mesur&eacute;s en utilisant l&#8217;instrumentation du r&eacute;acteur. </p>  <p>Les incertitudes des mesures sont indiqu&eacute;es dans la documentation portant sur les syst&egrave;mes de contr&ocirc;le et d&#8217;instrumentation de la centrale ou dans les LCE. Les composants syst&eacute;matiques (biais) et d&#8217;incertitudes al&eacute;atoires (&eacute;cart type) doivent &ecirc;tre pris en compte.</p>  <p>Le biais de mesures repr&eacute;sente un &eacute;l&eacute;ment d&#8217;incertitude des mesures r&eacute;sultant d&#8217;une erreur syst&eacute;matique qui cause un &eacute;cart dans une direction fixe. L&#8217;&eacute;cart type repr&eacute;sente un &eacute;l&eacute;ment d&#8217;incertitude de mesures que l&#8217;on ne peut pas d&eacute;finir exactement ou qui peut causer un &eacute;cart dans n&#8217;importe quelle direction, mais que l&#8217;on peut estimer sur la base d&#8217;une distribution de probabilit&eacute;.</p>  <p>Les incertitudes susmentionn&eacute;es doivent &ecirc;tre prises en compte dans l&#8217;analyse prudente ou la meilleure estimation plus l&#8217;&eacute;valuation des m&eacute;thodologies relatives aux incertitudes. </p>  <p>Dans les analyses de s&ucirc;ret&eacute; pour la d&eacute;fense en profondeur de niveau&nbsp;2 et de niveau&nbsp;4 (o&ugrave;&nbsp;l&#8217;application d&#8217;une m&eacute;thode d&#8217;analyse r&eacute;aliste de la meilleure estimation est possible), il n&#8217;est pas n&eacute;cessaire de tenir compte des incertitudes de la m&ecirc;me fa&ccedil;on.</p>  <p><strong><em>5.4.2.8  V&eacute;rification des r&eacute;sultats</em></strong></p>  <p>La v&eacute;rification vise &agrave; s&#8217;assurer que les r&eacute;sultats de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute;&nbsp;:</p>  <ul>
<li> sont extraits correctement des relev&eacute;s des codes d&#8217;analyse</li>
<li> sont valides au plan physique </li>
<li> sont conformes aux donn&eacute;es exp&eacute;rimentales provenant des essais int&eacute;graux appropri&eacute;s, aux analyses de s&ucirc;ret&eacute; semblables ant&eacute;rieures ou aux simulations faisant appel &agrave; des mod&egrave;les plus avanc&eacute;s</li>
<li> correspondent aux pr&eacute;visions limitatives pour chacun des crit&egrave;res d&#8217;acceptation de l&#8217;analyse de s&ucirc;ret&eacute;</li>  </ul>  <p><strong><em>5.4.2.9 Documentation des r&eacute;sultats</em></strong></p>  <p>Les r&eacute;sultats des calculs de l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; sont document&eacute;s de fa&ccedil;on &agrave; faciliter leur examen et leur compr&eacute;hension. Les r&eacute;sultats de l&#8217;analyse de s&ucirc;ret&eacute; doivent faire &eacute;tat :</p>  <ul>
<li> de l&#8217;objectif de l&#8217;analyse</li>
<li> des hypoth&egrave;ses d&#8217;analyse et de leur justification</li>
<li> de toutes les options de l&#8217;utilisateur au sujet des codes informatiques qui diff&eacute;rent des options utilis&eacute;es dans la validation des codes</li>
<li> des r&eacute;sultats de l&#8217;analyse par rapport aux crit&egrave;res d&#8217;acceptation</li>
<li> des r&eacute;sultats des calculs de sensibilit&eacute; et d&#8217;incertitude</li>  </ul>  <p>Des directives suppl&eacute;mentaires sont donn&eacute;es dans la sous-section&nbsp;5.5.</p>   <a name="5.4.3"></a>
<h4 className="reportHeading4"><a name="P486_69540" id="P486_69540"></a>5.4.3 Donn&eacute;es d&#8217;analyse</h4>  <p>L&#8217;analyse de s&ucirc;ret&eacute; est fond&eacute;e sur la conception de la centrale et sur des renseignements complets et exacts concernant sa construction. Cette information doit porter sur les SSC de la centrale, les caract&eacute;ristiques particuli&egrave;res du site et les interfaces hors site.</p>  <p>Dans le cas d&#8217;une centrale nucl&eacute;aire en phase de conception, les donn&eacute;es op&eacute;rationnelles, le cas &eacute;ch&eacute;ant, doivent &ecirc;tre d&eacute;riv&eacute;es des donn&eacute;es g&eacute;n&eacute;riques concernant des centrales en exploitation du m&ecirc;me type, ou tir&eacute;es de travaux de recherche ou de r&eacute;sultats d&#8217;essais. Dans le cas d&#8217;une centrale nucl&eacute;aire en exploitation, l&#8217;analyse de s&ucirc;ret&eacute; doit utiliser des donn&eacute;es d&#8217;exploitation pr&eacute;cises.</p>  <p>Les valeurs de l&#8217;analyse de s&ucirc;ret&eacute; pour chaque param&egrave;tre d&#8217;entr&eacute;e doivent &ecirc;tre d&eacute;termin&eacute;es en se fondant sur&nbsp;:</p>  <ul>
<li> les sp&eacute;cifications de conception</li>
<li> les tol&eacute;rances</li>
<li> les plages de variabilit&eacute; en exploitation admissibles</li>
<li> les incertitudes de mesures ou d&#8217;&eacute;valuation pour le param&egrave;tre vis&eacute;</li>  </ul>  <p>Les donn&eacute;es op&eacute;rationnelles doivent comprendre&nbsp;:</p>  <ul>
<li> l&#8217;information sur les performances des composants et du syst&egrave;me, mesur&eacute;es au cours de l&#8217;exploitation ou des essais</li>
<li> les d&eacute;lais dans les syst&egrave;mes de contr&ocirc;le</li>
<li> les biais et d&eacute;rives des instruments de mesure</li>
<li> l&#8217;indisponibilit&eacute; du syst&egrave;me en raison de l&#8217;entretien ou des essais</li>  </ul>  <p>Les limites applicables aux param&egrave;tres des centrales nucl&eacute;aires utilis&eacute;s comme conditions initiales et aux limites doivent &ecirc;tre d&eacute;termin&eacute;es. Les param&egrave;tres de la centrale nucl&eacute;aire pr&eacute;sum&eacute;s dans l&#8217;analyse de s&ucirc;ret&eacute; doivent englober les plages de param&egrave;tres autoris&eacute;es par les proc&eacute;dures d&#8217;exploitation ou, dans une m&eacute;thode statistique, porter sur un haut pourcentage pr&eacute;d&eacute;termin&eacute; de chaque plage &agrave; un haut niveau de confiance pr&eacute;d&eacute;termin&eacute;.</p>  <p>Les param&egrave;tres de la centrale nucl&eacute;aire suivants peuvent &ecirc;tre utilis&eacute;s dans l&#8217;analyse comme donn&eacute;es d&#8217;entr&eacute;e et doivent &ecirc;tre pr&eacute;cis&eacute;s dans les LCE, mesur&eacute;s ou &eacute;valu&eacute;s pendant l&#8217;exploitation de la centrale&nbsp;:</p>  <ol>
<li> les puissances neutroniques et thermiques comprenant la distribution de puissance</li>
<li> les pressions</li>
<li> les temp&eacute;ratures</li>
<li> les d&eacute;bits</li>
<li> les niveaux</li>
<li> les fuites ou contournement des vannes, des joints d&#8217;&eacute;tanch&eacute;it&eacute;, des tubes du g&eacute;n&eacute;rateur de vapeur et de l&#8217;enceinte de confinement</li>
<li> les stocks de mati&egrave;res radioactives</li>
<li> les d&eacute;fauts dans la gaine du combustible</li>
<li> les formes de flux</li>
<li>la puret&eacute; isotopique du caloporteur et du mod&eacute;rateur (le cas &eacute;ch&eacute;ant)</li>
<li>la concentration de poison neutronique</li>
<li>la combustion du c&#339;ur du r&eacute;acteur et la distribution de la combustion</li>
<li>la tol&eacute;rance des appareils</li>
<li> les constantes de temps et les d&eacute;lais des instruments</li>
<li> les param&egrave;tres li&eacute;s au vieillissement des SSC (en plus de tenir compte des effets du vieillissement sur les autres param&egrave;tres)</li>
<li> la position des barres, des vannes, des registres, des portes, des barri&egrave;res</li>
<li> le nombre de composants op&eacute;rationnels, comme les pompes et les vannes</li>  </ol>  <p><em>Nota</em>&nbsp;: Lors de la pr&eacute;paration des donn&eacute;es &eacute;num&eacute;r&eacute;es dans la liste ci-dessus, certains param&egrave;tres (comme la combustion du c&#339;ur du r&eacute;acteur et la distribution de la combustion) ne sont pas mesur&eacute;s directement. Les caract&eacute;ristiques du c&#339;ur du r&eacute;acteur pour toutes les charges de combustible doivent &ecirc;tre prises en compte. Dans cet exemple, elles sont &eacute;valu&eacute;es et extraites de la simulation par ordinateur pour laquelle l&#8217;exactitude de ces outils est appuy&eacute;e par les donn&eacute;es de la centrale et les donn&eacute;es exp&eacute;rimentales. Certaines entr&eacute;es de l&#8217;analyse de s&ucirc;ret&eacute; sont en g&eacute;n&eacute;ral d&eacute;riv&eacute;es ou tir&eacute;es des donn&eacute;es obtenues de fa&ccedil;on exp&eacute;rimentale.</p>  <p>Il faut &eacute;galement noter que les effets du vieillissement comprennent des m&eacute;canismes de longue dur&eacute;e qui causent une d&eacute;gradation progressive et des m&eacute;canismes qui peuvent causer une d&eacute;gradation rapide. Les m&eacute;canismes de d&eacute;gradation comprennent les cycles thermiques, la d&eacute;formation, les contraintes, le fluage, le grippage, la fatigue, la fissuration, la corrosion et l&#8217;&eacute;rosion. Les limites de vieillissement permises font partie des donn&eacute;es d&#8217;entr&eacute;e de l&#8217;analyse de s&ucirc;ret&eacute;.</p>  <p>Il faut d&eacute;celer et enregistrer les incertitudes concernant les donn&eacute;es de la centrale, et en tenir compte dans les analyses d&#8217;incertitude et de sensibilit&eacute;.</p>   <a name="5.4.4"></a>
<h4 className="reportHeading4"><a name="P521_73901" id="P521_73901"></a>5.4.4 Hypoth&egrave;ses utilis&eacute;es pour l&#8217;analyse</h4>  <p>Les hypoth&egrave;ses sont formul&eacute;es dans les donn&eacute;es d&#8217;entr&eacute;e, comme celles relatives aux param&egrave;tres de conception et d&#8217;exploitation, de m&ecirc;me que dans les mod&egrave;les physiques et num&eacute;riques mis en &#339;uvre dans les codes informatiques. </p>  <p>Les hypoth&egrave;ses peuvent &ecirc;tre r&eacute;alistes ou biais&eacute;es d&eacute;lib&eacute;r&eacute;ment dans une orientation prudente.</p>  <p>Les hypoth&egrave;ses g&eacute;n&eacute;ralement utilis&eacute;es pour l&#8217;analyse de d&eacute;fense en profondeur de niveau&nbsp;3 des IFP et des AD sont d&eacute;crites dans les sous-sections 5.4.4.1 &agrave; 5.4.4.6. Il faut noter que certaines de ces hypoth&egrave;ses ne sont pas n&eacute;cessaires dans l&#8217;analyse des IFP pour &eacute;valuer les capacit&eacute;s du syst&egrave;me de contr&ocirc;le (d&eacute;fense en profondeur de niveau&nbsp;2) si cela peut &ecirc;tre justifi&eacute;.</p>  <p>Dans le cas de l&#8217;analyse de s&ucirc;ret&eacute; des AHD, un des objectifs consiste &agrave; d&eacute;montrer les capacit&eacute;s des SSC &agrave; r&eacute;pondre aux exigences de conception prescrites pour les conditions d&#8217;AHD. Pour certaines exigences visant les AHD, l&#8217;analyse doit prendre en compte l&#8217;ensemble des possibilit&eacute;s qu&#8217;offre la conception de la centrale, y compris l&#8217;utilisation de certains syst&egrave;mes de s&ucirc;ret&eacute; et autres au-del&agrave; de leurs fonctions initiales pr&eacute;vues pour ramener l&#8217;accident grave potentiel &agrave; un &eacute;tat contr&ocirc;l&eacute; ou pour att&eacute;nuer ses cons&eacute;quences. Les hypoth&egrave;ses d&#8217;analyse des AHD sur la prise en compte et la mod&eacute;lisation des syst&egrave;mes de la centrale et de leur capacit&eacute; au cours d&#8217;un AHD doivent &ecirc;tre conformes aux objectifs de l&#8217;analyse. Si on cr&eacute;dite l&#8217;utilisation des syst&egrave;mes au-del&agrave; de leur fonction initiale pr&eacute;vue, il devrait y avoir des motifs raisonnables pour pr&eacute;sumer que ces syst&egrave;mes pourront &ecirc;tre utilis&eacute;s, et le seront, tel qu&#8217;il est d&eacute;crit dans l&#8217;analyse.</p>  <p><strong><em>5.4.4.1 D&eacute;faillance unique dans le groupe de s&ucirc;ret&eacute;</em></strong></p>  <p>Le crit&egrave;re de d&eacute;faillance unique stipule que le groupe de s&ucirc;ret&eacute; form&eacute; d&#8217;un syst&egrave;me de s&ucirc;ret&eacute; et de ses syst&egrave;mes de soutien doit &ecirc;tre en mesure d&#8217;ex&eacute;cuter ses fonctions sp&eacute;cifiques m&ecirc;me si un seul composant subit une d&eacute;faillance &agrave; l&#8217;int&eacute;rieur de ce groupe. </p>  <p>Les attentes relatives &agrave; l&#8217;application du crit&egrave;re de d&eacute;faillance unique dans la conception sont indiqu&eacute;es dans le document d&#8217;application de la r&eacute;glementation RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires</em>. </p>  <p>Toute d&eacute;faillance r&eacute;sultant de l&#8217;&eacute;v&eacute;nement initiateur fait partie int&eacute;grante de cet &eacute;v&eacute;nement et n&#8217;est pas consid&eacute;r&eacute;e comme une d&eacute;faillance unique aux fins de l&#8217;analyse de s&ucirc;ret&eacute;. Par&nbsp;exemple, il faut pr&eacute;sumer que l&#8217;&eacute;quipement qui n&#8217;est pas qualifi&eacute; pour des conditions d&#8217;accident particuli&egrave;res sera d&eacute;faillant, &agrave; moins que son fonctionnement normal ne m&egrave;ne &agrave; des r&eacute;sultats plus prudents.</p>  <p>L&#8217;analyse doit supposer qu&#8217;une d&eacute;faillance unique se produit pour chaque &eacute;l&eacute;ment d&#8217;un groupe de s&ucirc;ret&eacute; &agrave; tour de r&ocirc;le et identifier la pire des d&eacute;faillances uniques pour chaque crit&egrave;re d&#8217;acceptation. En plus d&#8217;une d&eacute;faillance unique d&#8217;un composant, l&#8217;analyse doit tenir compte de l&#8217;impact des travaux d&#8217;entretien, d&#8217;inspection ou de r&eacute;paration, ou des essais, &eacute;ventuels sur le rendement du groupe de s&ucirc;ret&eacute;. </p>  <p>L&#8217;analyse de s&ucirc;ret&eacute; des IFP et des AD pour la d&eacute;fense en profondeur de niveau&nbsp;3 doit appliquer le crit&egrave;re de d&eacute;faillance unique &agrave; chaque groupe de s&ucirc;ret&eacute;.</p>  <p>Il n&#8217;est pas n&eacute;cessaire d&#8217;appliquer le crit&egrave;re de d&eacute;faillance unique dans l&#8217;analyse des IFP pour la d&eacute;fense en profondeur de niveau&nbsp;2 et des AHD.</p>  <p><strong><em>5.4.4.2 Rendement des structures, syst&egrave;mes et composants</em></strong></p>  <p><em><strong>5.4.4.2.1  Disponibilit&eacute; des syst&egrave;mes </strong></em><strong></strong></p>  <p>Le fonctionnement des syst&egrave;mes ne doit &ecirc;tre cr&eacute;dit&eacute; que lorsque ceux-ci sont con&ccedil;us ou pr&eacute;vus pour ex&eacute;cuter la fonction pr&eacute;vue et qualifi&eacute;s pour surmonter toutes les difficult&eacute;s et tous les effets de mode commun dus &agrave; l&#8217;accident.</p>  <p>Dans l&#8217;analyse de s&ucirc;ret&eacute; d&#8217;un IFP pour la d&eacute;fense en profondeur de niveau&nbsp;2, on peut cr&eacute;diter le fonctionnement des syst&egrave;mes de proc&eacute;d&eacute; et de contr&ocirc;le dont les interventions pourraient aider &agrave; att&eacute;nuer l&#8217;&eacute;v&eacute;nement, tant que les syst&egrave;mes cr&eacute;dit&eacute;s ne sont pas compromis &agrave; la suite de l&#8217;&eacute;v&eacute;nement initiateur. L&#8217;&eacute;tat de ces syst&egrave;mes et les valeurs attribu&eacute;es &agrave; leurs param&egrave;tres doivent &ecirc;tre justifi&eacute;s.</p>  <p>Dans l&#8217;analyse de s&ucirc;ret&eacute; des IFP et des AD pour la d&eacute;fense en profondeur de niveau&nbsp;3, aucun cr&eacute;dit ne doit &ecirc;tre attribu&eacute; pour le fonctionnement des syst&egrave;mes de contr&ocirc;le dans l&#8217;att&eacute;nuation des effets de l&#8217;&eacute;v&eacute;nement initiateur. Les effets des interventions du syst&egrave;me de contr&ocirc;le doivent &ecirc;tre pris en compte si ces interventions risquent d&#8217;aggraver le transitoire ou de retarder l&#8217;activation des fonctions de protection.</p>  <p>Si le fonctionnement de l&#8217;&eacute;quipement non qualifi&eacute; entra&icirc;ne des cons&eacute;quences d&#8217;&eacute;v&eacute;nement plus graves, il faut supposer qu&#8217;un tel &eacute;quipement fonctionne d&#8217;une mani&egrave;re qui aggrave l&#8217;&eacute;v&eacute;nement.</p>  <p>On pr&eacute;sume que l&#8217;&eacute;quipement de proc&eacute;d&eacute; qui fonctionne avant l&#8217;&eacute;v&eacute;nement continue &agrave; fonctionner s&#8217;il n&#8217;est pas touch&eacute; par l&#8217;&eacute;v&eacute;nement initiateur (p.&nbsp;ex. on peut pr&eacute;sumer que l&#8217;alimentation de la chaudi&egrave;re se poursuit jusqu&#8217;&agrave; la panne d&#8217;&eacute;lectricit&eacute;, pour les &eacute;v&eacute;nements qui ne cr&eacute;ent pas un environnement difficile).</p>  <p><strong><em>5.4.4.2.2  D&eacute;faillances partielles et totales</em></strong></p>  <p>Les d&eacute;faillances partielles et totales de l&#8217;&eacute;quipement doivent &ecirc;tre prises en compte dans l&#8217;analyse de chaque s&eacute;quence de d&eacute;faillance pour d&eacute;celer la pire d&eacute;faillance pour chaque crit&egrave;re d&#8217;acceptation.</p>  <p><strong><em>5.4.4.2.3  D&eacute;faillance de tuyauterie grave</em></strong></p>  <p>Divers modes de rupture de la tuyauterie doivent &ecirc;tre pris en compte dans les analyses de perte de caloporteur. Ils comprennent les ruptures circonf&eacute;rentielles, &agrave; guillotine et longitudinales, &agrave; n&#8217;importe quel endroit dans un syst&egrave;me. </p>  <p>Dans le cas des ruptures circonf&eacute;rentielles et &agrave; guillotine, l&#8217;analyse devrait porter sur une section d&#8217;&eacute;coulement allant jusqu&#8217;&agrave; deux fois la section de passage de la conduite ou du collecteur.</p>  <p>Dans le cas des ruptures longitudinales, l&#8217;analyse doit comprendre une justification de la limite maximale de la taille de la rupture hypoth&eacute;tique.</p>  <p>L&#8217;endroit, la taille et l&#8217;orientation de la rupture qui sont les plus d&eacute;favorables et posent le plus de difficult&eacute; en ce qui a trait aux exigences de l&#8217;analyse de s&ucirc;ret&eacute; devraient &ecirc;tre d&eacute;termin&eacute;s au moyen d&#8217;analyses, dont une analyse de sensibilit&eacute;, en utilisant un mod&egrave;le de rupture prudent.</p>  <p>Dans les r&eacute;acteurs CANDU, les d&eacute;faillances des collecteurs d&#8217;entr&eacute;e et de sortie sont consid&eacute;r&eacute;es comme des ruptures de tuyauterie.</p>  <p><strong><em>5.4.4.2.4  Perte de l&#8217;alimentation &eacute;lectrique hors site</em></strong></p>  <p>En plus d&#8217;une d&eacute;faillance unique et des d&eacute;faillances indirectes, il faut supposer une perte d&#8217;alimentation &eacute;lectrique hors site sauf si une justification est fournie. </p>  <p>On pr&eacute;sume que la perte d&#8217;alimentation hors site se produit soit au d&eacute;clenchement de l&#8217;&eacute;v&eacute;nement ou &agrave; la suite du d&eacute;clenchement du r&eacute;acteur et de la turbine. Par exemple, lorsqu&#8217;on suppose la perte d&#8217;alimentation de cat&eacute;gorie IV (CANDU), l&#8217;&eacute;v&eacute;nement doit &ecirc;tre analys&eacute; &agrave; la fois avec ou sans perte d&#8217;alimentation &eacute;lectrique hors site et en utilisant les r&eacute;sultats les plus limitatifs.</p>  <p><strong><em>5.4.4.3 Rendement des syst&egrave;mes de s&ucirc;ret&eacute;</em></strong></p>  <p>Il faut cr&eacute;diter les syst&egrave;mes de s&ucirc;ret&eacute; &agrave; leur fonctionnement minimal admissible conform&eacute;ment aux LCE.</p>  <p><strong><em>5.4.4.3.1  Syst&egrave;me d&#8217;arr&ecirc;t d&#8217;urgence</em></strong></p>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; doit d&eacute;montrer l&#8217;efficacit&eacute; de tous les dispositifs d&#8217;arr&ecirc;t d&#8217;urgence cr&eacute;dit&eacute;s en expliquant que la conception r&eacute;pond aux crit&egrave;res d&#8217;acceptation applicables (voir la sous-section&nbsp;5.3). </p>  <p>Cette sous-section comprend diff&eacute;rentes attentes, selon la conception et les caract&eacute;ristiques inh&eacute;rentes du r&eacute;acteur comme on le d&eacute;crit dans la sous-section&nbsp;8.4 du document RD-337. Deux&nbsp;grandes cat&eacute;gories de r&eacute;acteurs sont prises en compte, comme suit&nbsp;: </p>  <ul>
<li> les r&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; intrins&egrave;que&nbsp;: conceptions qui d&eacute;montrent qu&#8217;un IFP ou un AD&nbsp;avec d&eacute;faillance du syst&egrave;me d&#8217;arr&ecirc;t rapide (transitoire pr&eacute;vu sans analyse du type de d&eacute;clenchement du r&eacute;acteur) n&#8217;entra&icirc;ne pas des dommages graves du c&#339;ur du r&eacute;acteur ni une menace pr&eacute;coce importante pour l&#8217;enceinte de confinement</li>
<li> les r&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; technique&nbsp;: conceptions qui ne peuvent pas d&eacute;montrer qu&#8217;un IFP ou un AD&nbsp;avec d&eacute;faillance du syst&egrave;me d&#8217;arr&ecirc;t rapide n&#8217;entra&icirc;nent pas des dommages graves du c&#339;ur du r&eacute;acteur ni une menace pr&eacute;coce importante pour l&#8217;enceinte de confinement<br />
</li>  </ul>  <p>Les crit&egrave;res d&#8217;acceptation applicables pour les deux cat&eacute;gories de r&eacute;acteurs&nbsp;susmentionn&eacute;es&nbsp;sont indiqu&eacute;s ci-dessous : </p>  <p>R&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; intrins&egrave;que <br />
Pour le premier dispositif d&#8217;arr&ecirc;t d&#8217;urgence rapide, l&#8217;analyse doit d&eacute;montrer que les crit&egrave;res applicables &agrave; la classe d&#8217;&eacute;v&eacute;nement initiateur (IFP ou AD selon le cas) sont respect&eacute;s. Les&nbsp;interventions de l&#8217;op&eacute;rateur pour compl&eacute;ter le dispositif d&#8217;arr&ecirc;t rapide peuvent &ecirc;tre cr&eacute;dit&eacute;es &agrave; condition que le d&eacute;clenchement manuel du r&eacute;acteur soit respect&eacute; (voir la fin de la pr&eacute;sente sous-section). </p>  <p>Pour le deuxi&egrave;me dispositif d&#8217;arr&ecirc;t d&#8217;urgence (qui peut &ecirc;tre enclench&eacute; manuellement)&nbsp;:</p>  <ul>
<li> la fr&eacute;quence d&#8217;un IFP et la fr&eacute;quence de d&eacute;faillance du dispositif d&#8217;arr&ecirc;t rapide peuvent entra&icirc;ner une fr&eacute;quence combin&eacute;e qui se situe dans la plage d&#8217;un AD et dans ce cas les limites applicables sont les limites de doses li&eacute;es &agrave; un AD. Si le concepteur peut garantir une tr&egrave;s haute fiabilit&eacute; du dispositif d&#8217;arr&ecirc;t rapide, il peut &ecirc;tre acceptable d&#8217;utiliser les limites relatives &agrave; un AHD, c.-&agrave;-d. les objectifs de s&ucirc;ret&eacute;</li>
<li> la fr&eacute;quence d&#8217;un AD et la fr&eacute;quence de d&eacute;faillance du dispositif d&#8217;arr&ecirc;t rapide peuvent entra&icirc;ner une fr&eacute;quence combin&eacute;e qui se situe dans la plage d&#8217;un AHD et dans ce cas, les limites applicables sont les objectifs de s&ucirc;ret&eacute;</li>  </ul>  <p>R&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; technique<br />
Ces r&eacute;acteurs sont dot&eacute;s de deux dispositifs d&#8217;arr&ecirc;t rapides redondants d&eacute;montrant que la conception est d&#8217;efficacit&eacute; &eacute;quivalente (RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires</em>, sous-section&nbsp;8.4). Les crit&egrave;res pour les dispositifs d&#8217;arr&ecirc;t seront les m&ecirc;mes et seront des crit&egrave;res d&#8217;IFP ou d&#8217;AD qui s&#8217;appliquent &agrave; la classe d&#8217;&eacute;v&eacute;nement.</p>  <p>Pour aider &agrave; mieux comprendre les attentes li&eacute;es aux param&egrave;tres de d&eacute;clenchement, le tableau&nbsp;3 peut &ecirc;tre utilis&eacute; pour d&eacute;finir les attentes minimales pour l&#8217;&eacute;v&eacute;nement particulier vis&eacute;. </p>  <p>La conception des r&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; intrins&egrave;que est illustr&eacute;e comme &laquo;&nbsp;sc&eacute;nario&nbsp;1 de conception du r&eacute;acteur&nbsp;&raquo;. </p>  <p>La conception des r&eacute;acteurs dot&eacute;s de caract&eacute;ristiques de s&ucirc;ret&eacute; technique est illustr&eacute;e comme &laquo;&nbsp;sc&eacute;nario&nbsp;2 de conception du r&eacute;acteur&nbsp;&raquo;.</p>  <table border="1" summary="Attentes minimales pour le nombre de param&egrave;tres de d&eacute;clenchement">
<caption>
Tableau&nbsp;3&nbsp;: Attentes minimales pour le nombre de param&egrave;tres de d&eacute;clenchement
</caption>
<tr>
<td valign="top"><p align="left"><strong>Sc&eacute;nario de conception du r&eacute;acteur</strong></p></td>
<td valign="top"><p align="center"><strong>L&#8217;&eacute;chec de l&#8217;arr&ecirc;t d&#8217;urgence compromet le confinement</strong></p></td>
<td valign="top"><p align="center"><strong>Dispositif d&#8217;arr&ecirc;t d&#8217;urgence (DAU)</strong></p></td>
<td valign="top"><p align="center"><strong>Attente li&eacute;e au param&egrave;tre de d&eacute;clenchement (PD) id&eacute;al</strong></p></td>
<td valign="top"><p align="center"><strong>Param&egrave;tre de d&eacute;clenche-ment direct disponible?</strong></p></td>
<td valign="top"><p align="center"><strong>Attente minimale</strong></p></td>
<td valign="top"><p align="center"><strong>Param&egrave;tres de d&eacute;clenche-ment</strong></p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p align="center">1</p></td>
<td rowspan="4" valign="top"><p align="center">Non</p></td>
<td rowspan="2" valign="top"><p align="center">Un seul DAU rapide</p></td>
<td rowspan="2" valign="top"><p align="center">Un seul PD direct par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Oui</p></td>
<td valign="top"><p align="center">Un seul PD direct par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Un seul PD</p></td>
</tr>
<tr>
<td valign="top"><p align="center">Non</p></td>
<td valign="top"><p align="center">Deux PD indirects vari&eacute;s par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p align="center">Deuxi&egrave;me DAU</p></td>
<td rowspan="2" valign="top"><p align="center">Un seul PD direct par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Oui</p></td>
<td valign="top"><p align="center">Un seul PD direct par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Un seul PD</p></td>
</tr>
<tr>
<td valign="top"><p align="center">Non</p></td>
<td valign="top"><p align="center">Deux PD indirects vari&eacute;s par &eacute;v&eacute;nement</p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p align="center">2</p></td>
<td rowspan="4" valign="top"><p align="center">Oui</p></td>
<td rowspan="2" valign="top"><p align="center">Un seul DAU</p></td>
<td rowspan="2" valign="top"><p align="center">Deux PD par &eacute;v&eacute;nement (au moins un direct)</p></td>
<td valign="top"><p align="center">Oui</p></td>
<td valign="top"><p align="center">Deux PD (au moins un direct)</p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>
<tr>
<td valign="top"><p align="center">Non</p></td>
<td valign="top"><p align="center">Deux PD indirects </p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p align="center">Deuxi&egrave;me DAU</p></td>
<td rowspan="2" valign="top"><p align="center">Deux PD par &eacute;v&eacute;nement (au moins un direct)</p></td>
<td valign="top"><p align="center">Oui</p></td>
<td valign="top"><p align="center">Deux PD (au moins un direct)</p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>
<tr>
<td valign="top"><p align="center">Non</p></td>
<td valign="top"><p align="center">Deux PD indirects </p></td>
<td valign="top"><p align="center">Deux PD</p></td>
</tr>  </table>  <p>Il faut noter les points principaux suivants, tir&eacute;s du tableau&nbsp;3&nbsp;:</p>  <ul>
<li> il faut toujours assurer deux dispositifs d&#8217;arr&ecirc;t d&#8217;urgence pour chaque sc&eacute;nario de conception du r&eacute;acteur</li>
<li> si les cons&eacute;quences de l&#8217;&eacute;chec de l&#8217;arr&ecirc;t d&#8217;urgence menacent le confinement, alors deux dispositifs d&#8217;arr&ecirc;t d&#8217;urgence rapide sont exig&eacute;s (sc&eacute;nario&nbsp;2 de conception du r&eacute;acteur)</li>
<li> si les cons&eacute;quences de l&#8217;&eacute;chec de l&#8217;arr&ecirc;t d&#8217;urgence menacent le confinement, alors il y a deux param&egrave;tres de d&eacute;clenchement par &eacute;v&eacute;nement et par syst&egrave;me d&#8217;arr&ecirc;t rapide</li>
<li> dans la mesure du possible, un dispositif d&#8217;arr&ecirc;t d&#8217;urgence doit comporter des param&egrave;tres de d&eacute;clenchement multiples vari&eacute;s</li>
<li> dans la mesure possible, les param&egrave;tres de d&eacute;clenchement entre les dispositifs d&#8217;arr&ecirc;t d&#8217;urgence doivent &ecirc;tre vari&eacute;s</li>  </ul>  <p>Un d&eacute;clenchement manuel du r&eacute;acteur peut &ecirc;tre consid&eacute;r&eacute; comme l&#8217;&eacute;quivalent d&#8217;un param&egrave;tre de d&eacute;clenchement si les exigences visant &agrave; cr&eacute;diter l&#8217;intervention de l&#8217;op&eacute;rateur de la salle de commande principale sont respect&eacute;es (voir la sous-section 5.4.4.4) et la fiabilit&eacute; de l&#8217;arr&ecirc;t manuel respecte les exigences de fiabilit&eacute; d&#8217;un d&eacute;clenchement automatique.</p>  <p><strong><em>5.4.4.3.2  Syst&egrave;me de refroidissement d&#8217;urgence du c&#339;ur du r&eacute;acteur</em></strong></p>  <p>Si le syst&egrave;me de refroidissement d&#8217;urgence du c&#339;ur du r&eacute;acteur (SRUC) a une logique d&#8217;injection conditionn&eacute;e &agrave; la pr&eacute;sence d&#8217;autres indicateurs (c.-&agrave;-d. signal de conditionnement), alors l&#8217;analyse de s&ucirc;ret&eacute; doit cerner et &eacute;valuer les cons&eacute;quences des situations dans lesquelles les signaux de conditionnement 0peuvent &ecirc;tre effectu&eacute;s en aveugle.</p>  <p>Si la logique d&#8217;activation du SRUC est complexe (c.-&agrave;-d. plusieurs interventions diff&eacute;rentes sont n&eacute;cessaires pour que le syst&egrave;me soit consid&eacute;r&eacute; comme enti&egrave;rement activ&eacute;), alors l&#8217;analyse de s&ucirc;ret&eacute; doit tenir compte des cons&eacute;quences si certaines de ces interventions ne se produisent pas, par exemple l&#8217;aspiration de la pompe du SRUC ne parvient pas &agrave; se r&eacute;aligner sur le puisard de confinement.</p>  <p>Il faut tenir compte du potentiel d&#8217;entra&icirc;nement du gaz qui pourrait occasionner des dommages dus aux coups de b&eacute;lier. On doit &eacute;galement &eacute;valuer les cons&eacute;quences sur les circuits de recirculation en pr&eacute;sence du colmatage des filtres, du blocage par des d&eacute;bris, du blocage de l&#8217;&eacute;changeur de chaleur et de la cavitation des pompes. On doit prendre en compte l&#8217;impact des gaz non condensables sur l&#8217;&eacute;coulement et le transfert de chaleur.</p>  <p>L&#8217;analyse de s&ucirc;ret&eacute; doit tenir compte de l&#8217;impact, sur l&#8217;efficacit&eacute; du SRUC, de l&#8217;inaction, de l&#8217;action partielle et du fonctionnement normal de tout autre syst&egrave;me qui augmente ou diminue la capacit&eacute; de refroidissement du SRUC.</p>  <p><strong><em>5.4.4.3.3  Confinement</em></strong></p>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; doit cerner et &eacute;valuer les cons&eacute;quences des situations o&ugrave; l&#8217;instrumentation de l&#8217;isolation du confinement fonctionne en aveugle. Dans le cas du confinement, &laquo;&nbsp;en aveugle&nbsp;&raquo; se rapporte aux conditions pour lesquelles un point de consigne d&#8217;activation de l&#8217;isolation du confinement est approch&eacute; mais pas atteint. Par exemple, l&#8217;enceinte de confinement peut &ecirc;tre &laquo;&nbsp;aveugl&eacute;e&nbsp;&raquo; par l&#8217;inaction, l&#8217;action partielle ou le fonctionnement normal d&#8217;autres syst&egrave;mes qui compl&egrave;tent ou d&eacute;gradent les performances de l&#8217;enceinte de confinement. Les sc&eacute;narios de confinement en aveugle sont importants parce qu&#8217;un accident qui pr&eacute;sente un potentiel de rejet de mati&egrave;res radioactives ne peut pas d&eacute;clencher l&#8217;activation de l&#8217;isolation du confinement. </p>  <p>Le d&eacute;bit de fuite de l&#8217;enceinte de confinement pr&eacute;sum&eacute; dans l&#8217;analyse doit &ecirc;tre fond&eacute; sur les exigences d&#8217;&eacute;tanch&eacute;it&eacute; de l&#8217;&eacute;tude de confinement et confirm&eacute; par les tests du d&eacute;bit de fuite.</p>  <p><strong><em>5.4.4.4 Intervention de l&#8217;op&eacute;rateur</em></strong></p>  <p>Il faut r&eacute;pertorier les interventions que fera l&#8217;op&eacute;rateur en r&eacute;ponse &agrave; un accident. On peut cr&eacute;diter ces interventions dans l&#8217;analyse de s&ucirc;ret&eacute; pour la d&eacute;fense en profondeur de niveau&nbsp;3 seulement si&nbsp;:</p>  <ul>
<li> une instrumentation fiable est con&ccedil;ue pour donner des indications claires et non ambigu&euml;s sur le besoin de prendre des mesures</li>
<li> la centrale dispose de proc&eacute;dures d&#8217;exploitation qui indiquent les interventions n&eacute;cessaires, la formation de l&#8217;op&eacute;rateur, le personnel de soutien, les pi&egrave;ces de rechange et l&#8217;&eacute;quipement</li>
<li> les conditions environnementales n&#8217;emp&ecirc;chent pas l&#8217;ex&eacute;cution s&eacute;curitaire des interventions de l&#8217;op&eacute;rateur</li>  </ul>  <p>&Agrave; la suite des premi&egrave;res indications claires et non ambigu&euml;s sur la n&eacute;cessit&eacute; des interventions de l&#8217;op&eacute;rateur, de telles interventions peuvent normalement &ecirc;tre cr&eacute;dit&eacute;es dans l&#8217;analyse de s&ucirc;ret&eacute; pour la d&eacute;fense en profondeur de niveau&nbsp;3 pas plus t&ocirc;t que&nbsp;:</p>  <ul>
<li> 15 minutes dans le cas des interventions faites dans la salle de commande principale</li>
<li> 30 minutes dans le cas des interventions faites &agrave; l&#8217;ext&eacute;rieur de la salle de commande principale (sous-section 8.10.4 du document RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires</em>)</li>  </ul>  <p>Il faut d&eacute;montrer au moyen d&#8217;une &eacute;valuation que le temps que consacre l&#8217;op&eacute;rateur &agrave; la d&eacute;tection, au diagnostic complet et &agrave; l&#8217;ex&eacute;cution des interventions n&eacute;cessaires est suffisant. Une telle &eacute;valuation doit prendre en compte les points suivants&nbsp;: </p>  <ul>
<li> l&#8217;intervalle entre le d&eacute;clenchement de l&#8217;&eacute;v&eacute;nement initiateur et la r&eacute;ception de l&#8217;indication de l&#8217;&eacute;v&eacute;nement par l&#8217;op&eacute;rateur</li>
<li> le temps n&eacute;cessaire pour proc&eacute;der au diagnostic</li>
<li> le temps n&eacute;cessaire pour effectuer l&#8217;intervention</li>
<li> le temps n&eacute;cessaire pour que la fonction de s&ucirc;ret&eacute; soit ex&eacute;cut&eacute;e</li>  </ul>  <p>Dans certains cas, on peut supposer des temps d&#8217;intervention inf&eacute;rieurs &agrave; 15 minutes pour la salle de commande, pourvu que&nbsp;:</p>  <ul>
<li> l&#8217;op&eacute;rateur se consacre exclusivement &agrave; l&#8217;intervention en question</li>
<li> l&#8217;intervention prescrite est unique et ne suppose pas un choix &agrave; partir de plusieurs options</li>
<li> l&#8217;intervention prescrite est simple et ne n&eacute;cessite pas de manipulations multiples</li>  </ul>  <p>L&#8217;&eacute;valuation des points d&#8217;intervention cr&eacute;dit&eacute;s de l&#8217;op&eacute;rateur doit &ecirc;tre formelle et comporter un processus de validation. Un tel processus pourrait comprendre&nbsp;:</p>  <ul>
<li> des proc&eacute;dures document&eacute;es qui d&eacute;finissent les points d&#8217;entr&eacute;e et les interventions de l&#8217;op&eacute;rateur</li>
<li> la formation de tous les op&eacute;rateurs de la centrale travaillant par quart, &agrave; l&#8217;&eacute;gard de ces proc&eacute;dures</li>
<li> la participation aux exercices de la centrale pour enregistrer et &eacute;valuer le temps d&#8217;intervention</li>
<li> une &eacute;valuation de ces d&eacute;lais d&#8217;intervention et une &eacute;valuation visant &agrave; d&eacute;terminer une p&eacute;riode propice pour l&#8217;utilisation de l&#8217;analyse de s&ucirc;ret&eacute;</li>  </ul>  <p><strong><em>5.4.4.5 Hypoth&egrave;ses en mati&egrave;re de mod&eacute;lisation</em></strong></p>  <p>Les hypoth&egrave;ses int&eacute;gr&eacute;es aux codes informatiques ou &eacute;labor&eacute;es au cours de l&#8217;application des codes doivent &ecirc;tre telles que les r&eacute;sultats de l&#8217;analyse de s&ucirc;ret&eacute;, qu&#8217;ils soient de la meilleure estimation ou prudents, demeurent valides sur le plan physique. </p>  <p>Dans tous les cas d&#8217;ex&eacute;cution de l&#8217;analyse de s&ucirc;ret&eacute; o&ugrave; les hypoth&egrave;ses utilis&eacute;es sont diff&eacute;rentes de celles utilis&eacute;es dans la validation, il faut fournir les justifications pertinentes.</p>  <p><strong><em>5.4.4.6 Calculs des doses</em></strong></p>  <p>Comme l&#8217;indique la sous-section 5.3, la dose r&eacute;elle que re&ccedil;oivent au corps entier les membres de groupes critiques le plus &agrave; risque, &agrave; la p&eacute;riph&eacute;rie du site ou au-del&agrave;, est calcul&eacute;e dans l&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pendant une p&eacute;riode de 30 jours suivant l&#8217;&eacute;v&eacute;nement analys&eacute;. </p>  <p>La dose efficace doit &ecirc;tre utilis&eacute;e dans les calculs de doses et doit comprendre les contributions&nbsp;: </p>  <ul>
<li> du rayonnement externe provenant des nuages et des d&eacute;p&ocirc;ts au sol</li>
<li> de l&#8217;inhalation de mati&egrave;res radioactives</li>
<li> de l&#8217;absorption de tritium par la peau</li>  </ul>  <p>Dans les calculs de doses, le pire sc&eacute;nario m&eacute;t&eacute;orologique au point de vue de la dose pr&eacute;vue doit &ecirc;tre suppos&eacute;. Tous les sc&eacute;narios m&eacute;t&eacute;orologiques dont les probabilit&eacute;s de fr&eacute;quence sont sup&eacute;rieures &agrave; 5&nbsp;% doivent &ecirc;tre pris en compte. </p>  <p>Aucune intervention sous forme de d&eacute;contamination ou d&#8217;&eacute;vacuation ne doit &ecirc;tre pr&eacute;sum&eacute;e. Mais&nbsp;on peut supposer une intervention contre l&#8217;ingestion des mati&egrave;res radioactives et des proc&eacute;d&eacute;s naturels d&#8217;&eacute;limination. </p>  <p>Les calculs de doses doivent &ecirc;tre &eacute;galement effectu&eacute;s &agrave; divers intervalles et jusqu&#8217;&agrave; un&nbsp;(1)&nbsp;an apr&egrave;s l&#8217;accident.</p>   <a name="5.4.5"></a>
<h4 className="reportHeading4"><a name="P736_94225" id="P736_94225"></a>5.4.5 Codes informatiques</h4>  <p>L&#8217;utilisation de codes informatiques r&eacute;alistes dans l&#8217;analyse de s&ucirc;ret&eacute; est pr&eacute;f&eacute;rable, &eacute;tant donn&eacute; que l&#8217;utilisation de codes prudents peut produire des r&eacute;sultats trompeurs ou irr&eacute;els. Toutefois, une base de donn&eacute;es exp&eacute;rimentale &eacute;labor&eacute;e doit &ecirc;tre constitu&eacute;e pour d&eacute;montrer l&#8217;applicabilit&eacute; du code et pour le valider, en fournissant ainsi un &eacute;l&eacute;ment de confiance dans la pr&eacute;vision des codes. </p>  <p>Les mod&egrave;les enti&egrave;rement int&eacute;gr&eacute;s pourraient donner une repr&eacute;sentation plus pr&eacute;cise de l&#8217;&eacute;v&eacute;nement et doivent &ecirc;tre utilis&eacute;s dans la mesure du possible. Ces mod&egrave;les portent sur tous les ph&eacute;nom&egrave;nes importants dans un code unique ou dans un ensemble de codes. L&#8217;application s&eacute;quentielle des codes de discipline unique risque de mal repr&eacute;senter les m&eacute;canismes de r&eacute;troaction et doit &ecirc;tre &eacute;vit&eacute;e sauf en cas d&#8217;avantage particulier.</p>  <p>La norme CSA N286.7-99, <em>Assurance de la qualit&eacute; des programmes informatiques scientifiques, d&#8217;analyse et de conception des centrales nucl&eacute;aires</em> doit &ecirc;tre appliqu&eacute;e dans l&#8217;utilisation et l&#8217;&eacute;laboration du code d&#8217;analyse de s&ucirc;ret&eacute;. </p>  <p>Le choix des codes informatiques doit tenir compte de l&#8217;applicabilit&eacute; du code, de la dur&eacute;e de validation des codes et de la capacit&eacute; de repr&eacute;senter convenablement le syst&egrave;me physique.</p>  <p><strong><em>5.4.5.1 Applicabilit&eacute; des codes informatiques</em></strong></p>  <p>Pour l&#8217;analyse de s&ucirc;ret&eacute; d&#8217;un &eacute;v&eacute;nement, l&#8217;applicabilit&eacute; des codes informatiques utilis&eacute;s pour pr&eacute;voir les cons&eacute;quences est &eacute;tablie avant d&#8217;effectuer l&#8217;analyse. La d&eacute;monstration de l&#8217;applicabilit&eacute; du code comporte les &eacute;tapes suivantes&nbsp;:</p>  <ul>
<li> l&#8217;identification de tous les ph&eacute;nom&egrave;nes qui influent de fa&ccedil;on importante sur les param&egrave;tres de sortie essentiels (voir la sous-section 5.4.2.3)</li>
<li> la confirmation que le code met en &#339;uvre des mod&egrave;les ad&eacute;quats pour tous les ph&eacute;nom&egrave;nes essentiels et d&eacute;monstration que ces mod&egrave;les ont &eacute;t&eacute; v&eacute;rifi&eacute;s et valid&eacute;s par rapport aux essais &agrave; effet distinct</li>
<li> l&#8217;&eacute;valuation des &eacute;quations de fermeture et des relations constitutives</li>
<li> l&#8217;&eacute;valuation des effets d&#8217;&eacute;chelle. La variabilit&eacute; dimensionnelle des tests des effets int&eacute;graux doit &ecirc;tre &eacute;valu&eacute;e pour confirmer qu&#8217;il n&#8217;y a pas de distorsion importante dans la base de donn&eacute;es. Les distorsions d&#8217;&eacute;chelle et leur impact sur l&#8217;&eacute;valuation du code doivent &ecirc;tre d&eacute;termin&eacute;s &eacute;valu&eacute;s et abord&eacute;s dans l&#8217;analyse de s&ucirc;ret&eacute;</li>
<li> l&#8217;&eacute;valuation de la stabilit&eacute; num&eacute;rique des calculs et de la convergence temporelle et spatiale des approximations it&eacute;ratives.&nbsp;La convergence spatiale et temporelle est r&eacute;alis&eacute;e lorsqu&#8217;une augmentation ou une r&eacute;duction dans la nodalisation et les &eacute;chelons de temps (qui comprennent le changement d&#8217;&eacute;chelon de temps minimal s&#8217;il y a lieu) ne changent pas les r&eacute;sultats de simulation de fa&ccedil;on importante</li>
<li> l&#8217;&eacute;tude des &eacute;carts ou des lacunes dans l&#8217;applicabilit&eacute; du code pour l&#8217;&eacute;v&eacute;nement analys&eacute;</li>  </ul>  <p>L&#8217;&eacute;valuation d&#8217;applicabilit&eacute; du code et les bases de connaissances pertinentes sont document&eacute;es de fa&ccedil;on suffisamment d&eacute;taill&eacute;e pour permettre un examen ind&eacute;pendant.</p>  <p>Pour mod&eacute;liser le comportement en fonction de nombreux ph&eacute;nom&egrave;nes coupl&eacute;s, on doit d&eacute;montrer que les donn&eacute;es sont transf&eacute;r&eacute;es au travers des interfaces (c.-&agrave;-d. du calcul d&#8217;un ph&eacute;nom&egrave;ne &agrave; un autre) de fa&ccedil;on &agrave; saisir ad&eacute;quatement les ph&eacute;nom&egrave;nes physiques et les m&eacute;canismes de r&eacute;troaction.</p>  <p><strong><em>5.4.5.2 Validation du code et quantification de l&#8217;exactitude</em></strong></p>  <p>La sous-section 5.4.1 du document RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>, exige que tous les codes informatiques soient valid&eacute;s pour leur application dans l&#8217;analyse de s&ucirc;ret&eacute;. L&#8217;objet de la validation est d&#8217;&eacute;tablir la confiance dans la capacit&eacute; d&#8217;un code pour une application donn&eacute;e et &eacute;galement de d&eacute;terminer l&#8217;exactitude de celui-ci. </p>  <p>La validation doit&nbsp;:</p>  <ul>
<li> d&eacute;montrer la capacit&eacute; et la cr&eacute;dibilit&eacute; d&#8217;un code informatique &agrave; utiliser dans une analyse particuli&egrave;re</li>
<li> quantifier l&#8217;exactitude des calculs du code (quantifi&eacute;s par la comparaison de la pr&eacute;vision du code avec les donn&eacute;es exp&eacute;rimentales)</li>  </ul>  <p>Les codes utilis&eacute;s dans l&#8217;analyse de s&ucirc;ret&eacute; sont valid&eacute;s en comparant les pr&eacute;visions des codes avec&nbsp;:</p>  <ul>
<li> les donn&eacute;es exp&eacute;rimentales</li>
<li> les donn&eacute;es de mise en service et l&#8217;exp&eacute;rience d&#8217;exploitation</li>
<li> les solutions aux probl&egrave;mes standards ou de r&eacute;f&eacute;rence</li>
<li> les solutions math&eacute;matiques ferm&eacute;es</li>
<li> les r&eacute;sultats d&#8217;un autre programme informatique valid&eacute; </li>  </ul>  <p>La comparaison de la pr&eacute;vision des codes aux solutions aux probl&egrave;mes ou aux solutions math&eacute;matiques ferm&eacute;es aux fins de validation est acceptable, mais elle devrait normalement &ecirc;tre compl&eacute;t&eacute;e par d&#8217;autres types de comparaisons.</p>  <p>La base de donn&eacute;es exp&eacute;rimentale utilis&eacute;e pour la validation peut englober les effets distincts, les composants et les essais int&eacute;gr&eacute;s. La validation des essais choisis doit satisfaire aux crit&egrave;res suivants&nbsp;: </p>  <ul>
<li> les donn&eacute;es d&#8217;essai sont obtenues dans des conditions physiques et g&eacute;om&eacute;triques et des ph&eacute;nom&egrave;nes applicables soit aux conditions d&#8217;exploitation normales ou &agrave; un sc&eacute;nario d&#8217;accident hypoth&eacute;tique dans le r&eacute;acteur </li>
<li> les essais utilis&eacute;s pour la validation sont exempts de distorsions attribuables &agrave; la g&eacute;om&eacute;trie ou &agrave; d&#8217;autres propri&eacute;t&eacute;s, dans la mesure du possible </li>
<li> les incertitudes li&eacute;es aux mesures sont quantifi&eacute;es</li>
<li> les erreurs syst&eacute;matiques (biais) sont r&eacute;duites au minimum et leurs sources sont comprises </li>
<li> les essais int&eacute;gr&eacute;s utilis&eacute;s pour la validation doivent &ecirc;tre propres au r&eacute;acteur et contenir des composants repr&eacute;sentatifs de ceux des centrales nucl&eacute;aires</li>
<li> les donn&eacute;es utilis&eacute;es pour l&#8217;&eacute;laboration du mod&egrave;le sont ind&eacute;pendantes des donn&eacute;es utilis&eacute;es pour la validation du code informatique</li>  </ul>  <p>L&#8217;exactitude des pr&eacute;visions du code doit &ecirc;tre fournie pour les param&egrave;tres de mod&eacute;lisation essentiels et pour les param&egrave;tres de la centrale utilis&eacute;s pour contr&ocirc;ler la production de puissance ou pour enclencher un syst&egrave;me d&#8217;att&eacute;nuation. Voir la sous-section 5.4.2.7. </p>  <p>Le biais et la variabilit&eacute; du biais du code informatique peuvent &ecirc;tre obtenus &agrave; partir de la comparaison des pr&eacute;visions relatives au code aux donn&eacute;es exp&eacute;rimentales. </p>  <p>Les mod&egrave;les du code utilis&eacute;s au cours de la validation doivent &ecirc;tre d&eacute;termin&eacute;s et recommand&eacute;s pour &ecirc;tre utilis&eacute;s dans l&#8217;analyse de s&ucirc;ret&eacute;, afin que celle-ci soit conforme &agrave; la validation. Autrement, il faut &eacute;valuer l&#8217;incidence de l&#8217;utilisation de mod&egrave;les diff&eacute;rents sur les r&eacute;sultats de simulation (exactitude du programme). </p>  <p>Il faut clarifier les recommandations visant l&#8217;utilisation d&#8217;un code au-del&agrave; des conditions pour lesquelles la validation a &eacute;t&eacute; effectu&eacute;e, et les effets d&#8217;une telle extrapolation doivent &ecirc;tre &eacute;valu&eacute;s et pris en compte. </p>  <p>Il faut &eacute;valuer l&#8217;effet des hypoth&egrave;ses de mod&eacute;lisation sur les r&eacute;sultats de la validation, y compris la confirmation que la convergence spatiale et temporelle de la solution est obtenue. </p>  <p>La documentation portant sur les outils informatiques doit &ecirc;tre claire et facile &agrave; suivre, de sorte que les incertitudes attribuables aux effets de l&#8217;utilisateur soient n&eacute;gligeables. L&#8217;utilisation de mat&eacute;riel informatique ou de syst&egrave;mes d&#8217;exploitation diff&eacute;rents doit &eacute;galement avoir des effets n&eacute;gligeables. Les moyens comme la formation et la conformit&eacute; aux proc&eacute;dures d&#8217;assurance de la qualit&eacute; doivent &ecirc;tre clairement &eacute;nonc&eacute;s.</p>  <p>La validation des codes informatiques doit &ecirc;tre effectu&eacute;e par des personnes qualifi&eacute;es. Les rapports de validation doivent &ecirc;tre examin&eacute;s par des personnes qualifi&eacute;es qui n&#8217;ont pas particip&eacute; &agrave; la validation. </p>  <p>Les directives mentionn&eacute;es ci-dessus sont conformes aux exigences de la norme CSA N286.7-99, <em>Assurance de la qualit&eacute; des programmes informatiques scientifiques, d&#8217;analyse et de conception des centrales nucl&eacute;aires </em>et la compl&egrave;tent<em>.</em></p>  <p><strong><em>5.4.5.3 Repr&eacute;sentations physiques</em></strong></p>  <p>Les donn&eacute;es sont &eacute;galement pr&eacute;par&eacute;es pour fournir une repr&eacute;sentation math&eacute;matique des composants physiques et leur disposition doit &ecirc;tre repr&eacute;sent&eacute;e par une simulation par ordinateur. Ces donn&eacute;es d&#8217;entr&eacute;e doivent &ecirc;tre pr&eacute;par&eacute;es conform&eacute;ment aux principes suivants&nbsp;:</p>  <ul>
<li> une m&eacute;thode syst&eacute;matique pour repr&eacute;senter les composants et les connexions doit &ecirc;tre &eacute;labor&eacute;e</li>
<li> la base pour la m&eacute;thodologie doit &ecirc;tre document&eacute;e. Les m&eacute;thodes utilis&eacute;es sont g&eacute;n&eacute;ralement fond&eacute;es sur l&#8217;exp&eacute;rience dans la repr&eacute;sentation des installations exp&eacute;rimentales et autres centrales ayant des configurations semblables</li>
<li> la repr&eacute;sentation doit &ecirc;tre v&eacute;rifi&eacute;e et valid&eacute;e</li>
<li> dans certains cas, les essais en installation (parfois les essais de mise en service) sont n&eacute;cessaires pour &eacute;tablir l&#8217;exactitude de telles repr&eacute;sentations</li>  </ul>  <p>En g&eacute;n&eacute;ral, les repr&eacute;sentations utilis&eacute;es pour les simulations des centrales doivent &ecirc;tre cr&eacute;&eacute;es en utilisant les m&ecirc;mes principes que les repr&eacute;sentations utilis&eacute;es pour la validation du code afin de r&eacute;duire au minimum les effets connexes attribuables &agrave; l&#8217;utilisateur.</p>   <a name="5.4.6"></a>
<h4 className="reportHeading4"><a name="P785_103378" id="P785_103378"></a>5.4.6 Marge de prudence dans l&#8217;analyse</h4>  <p>L&#8217;analyse de s&ucirc;ret&eacute; doit incorporer un certain degr&eacute; de prudence qui r&eacute;pond aux objectifs de l&#8217;analyse de s&ucirc;ret&eacute; et qui d&eacute;pend de la classe de l&#8217;&eacute;v&eacute;nement. Le degr&eacute; de prudence est souvent n&eacute;cessaire dans l&#8217;analyse de s&ucirc;ret&eacute; pour couvrir l&#8217;impact potentiel des incertitudes et peut &ecirc;tre obtenu par l&#8217;application judicieuse des hypoth&egrave;ses et donn&eacute;es prudentes.</p>  <p>Le concept de prudence a &eacute;t&eacute; incorpor&eacute; &agrave; l&#8217;analyse de s&ucirc;ret&eacute; pour la d&eacute;fense en profondeur de niveau&nbsp;3 pour s&#8217;assurer de limiter les hypoth&egrave;ses dans les cas o&ugrave; la connaissance des ph&eacute;nom&egrave;nes physiques serait insuffisante. </p>  <p>Pour la d&eacute;fense en profondeur des niveaux&nbsp;2 et 4, l&#8217;analyse de s&ucirc;ret&eacute; doit &ecirc;tre effectu&eacute;e en utilisant les hypoth&egrave;ses, donn&eacute;es et m&eacute;thodes de la meilleure estimation. Lorsque cela n&#8217;est pas possible, un degr&eacute; raisonnable de prudence, appropri&eacute; aux objectifs correspondant &agrave; ces niveaux, doit &ecirc;tre appliqu&eacute; pour compenser le manque de connaissance ad&eacute;quate des processus physiques r&eacute;gissant ces &eacute;v&eacute;nements. </p>  <p>S&#8217;il est permis et parfois souhaitable d&#8217;utiliser des codes prudents, il est g&eacute;n&eacute;ralement pr&eacute;f&eacute;rable d&#8217;appliquer des codes informatiques r&eacute;alistes (meilleure estimation). Lorsque des r&eacute;sultats d&#8217;analyse prudents sont exig&eacute;s pour l&#8217;analyse de d&eacute;fense en profondeur de niveau&nbsp;3 (IFP et AD), les codes informatiques de la meilleure estimation doivent &ecirc;tre utilis&eacute;s conjointement avec l&#8217;&eacute;valuation de mod&eacute;lisation et les incertitudes li&eacute;es aux param&egrave;tres d&#8217;entr&eacute;e de la centrale. </p>  <p>L&#8217;analyse d&eacute;terministe de s&ucirc;ret&eacute; pour les IFP et les AD (analyse prudente pour la d&eacute;fense en profondeur de niveau&nbsp;3) doit&nbsp;:</p>  <ul>
<li> appliquer le crit&egrave;re de d&eacute;faillance unique pour tous les groupes de s&ucirc;ret&eacute; et s&#8217;assurer que les groupes de s&ucirc;ret&eacute; sont qualifi&eacute;s au point de vue environnemental et sismique</li>
<li> utiliser le rendement minimal admissible (&eacute;tabli dans les LCE) pour les groupes de s&ucirc;ret&eacute;</li>
<li>tenir compte des d&eacute;faillances subs&eacute;quentes qui peuvent survenir suite &agrave; l&#8217;&eacute;v&eacute;nement initiateur</li>
<li> cr&eacute;diter les interventions des syst&egrave;mes de proc&eacute;d&eacute; et de contr&ocirc;le seulement lorsque les syst&egrave;mes sont passifs et qualifi&eacute;s du point de vue environnemental et sismique pour les conditions d&#8217;accident</li>
<li> inclure les interventions des syst&egrave;mes de proc&eacute;d&eacute; et de contr&ocirc;le quand elles peuvent avoir un effet pr&eacute;judiciable sur les cons&eacute;quences de l&#8217;accident analys&eacute;</li>
<li> cr&eacute;diter les syst&egrave;mes de proc&eacute;d&eacute; qui fonctionnent normalement et qui ne sont pas touch&eacute;s par l&#8217;accident analys&eacute;</li>  </ul>  <p>Le choix ind&eacute;pendant de tous les param&egrave;tres &agrave; leurs valeurs prudentes peut entra&icirc;ner des &eacute;tats de la centrale autres que physiques. Si cela &eacute;tait le cas, on recommande de choisir avec prudence les param&egrave;tres essentiels qui influeraient le plus fortement sur les r&eacute;sultats par rapport au crit&egrave;re d&#8217;acceptation &agrave; l&#8217;&eacute;tude. Les param&egrave;tres subsistants peuvent &ecirc;tre pr&eacute;cis&eacute;s plus uniform&eacute;ment dans les calculs subs&eacute;quents. Chaque calcul doit rendre compte de l&#8217;impact d&#8217;un param&egrave;tre particulier, afin que les effets de tous les param&egrave;tres puissent &ecirc;tre &eacute;valu&eacute;s.</p>   <a name="5.5"></a>
<h3 className="reportHeading3"><a name="P798_106581" id="P798_106581"></a>5.5 Documentation de l&#8217;analyse de s&ucirc;ret&eacute;</h3>  <p>Les documents sur l&#8217;analyse de s&ucirc;ret&eacute; doivent &ecirc;tre suffisamment d&eacute;taill&eacute;s pour permettre un examen ind&eacute;pendant par des experts d&ucirc;ment qualifi&eacute;s. En particulier, ces documents doivent comprendre les &eacute;l&eacute;ments suivants :</p>  <ol>
<li> l&#8217;objectif ou les objectifs de l&#8217;analyse</li>
<li> une description de l&#8217;&eacute;v&eacute;nement analys&eacute;, qui doit comprendre la description du mode d&#8217;exploitation de la centrale nucl&eacute;aire, l&#8217;intervention des SSC, les interventions de l&#8217;op&eacute;rateur et les phases importantes de l&#8217;&eacute;v&eacute;nement analys&eacute; (il faut &eacute;galement identifier les autres &eacute;v&eacute;nements d&eacute;limit&eacute;s par l&#8217;&eacute;v&eacute;nement analys&eacute;)</li>
<li> une description des pr&eacute;occupations li&eacute;es &agrave; la s&ucirc;ret&eacute;, des risques pour la s&ucirc;ret&eacute;, et des crit&egrave;res, exigences et limites num&eacute;riques applicables en ce qui concerne l&#8217;analyse de s&ucirc;ret&eacute;</li>
<li> la d&eacute;termination des principaux ph&eacute;nom&egrave;nes touch&eacute;s de fa&ccedil;on importante par les param&egrave;tres essentiels relatifs &agrave; l&#8217;&eacute;v&eacute;nement analys&eacute;, ainsi qu&#8217;une description du processus syst&eacute;matique utilis&eacute; lors de la d&eacute;termination des param&egrave;tres essentiels</li>
<li> la d&eacute;monstration de l&#8217;applicabilit&eacute; des codes, y compris des preuves de leur validation au moyen d&#8217;exp&eacute;riences avec des prototypes et de l&#8217;&eacute;valuation de leur exactitude, et des renvois aux r&eacute;sultats d&#8217;exp&eacute;rience pertinents </li>
<li> la d&eacute;monstration que les hypoth&egrave;ses utilis&eacute;es dans l&#8217;analyse r&eacute;pondent aux limites d&#8217;exploitation de la centrale, les &eacute;l&eacute;ments de preuve tir&eacute;s de l&#8217;exploitation de la centrale nucl&eacute;aire et des exp&eacute;riences d&eacute;montrant ainsi respectivement les &eacute;carts pr&eacute;sum&eacute;s observ&eacute;s dans les param&egrave;tres d&#8217;exploitation et les incertitudes relev&eacute;es dans la mod&eacute;lisation des param&egrave;tres</li>
<li> les r&eacute;sultats de l&#8217;analyse, y compris les r&eacute;sultats des &eacute;tudes de sensibilit&eacute; et d&#8217;incertitude suffisamment d&eacute;taill&eacute;es pour montrer le ph&eacute;nom&egrave;ne dominant</li>
<li> la preuve de la v&eacute;rification ind&eacute;pendante des entr&eacute;es et des r&eacute;sultats</li>
<li> la preuve de l&#8217;examen de l&#8217;analyse, y compris l&#8217;&eacute;valuation de l&#8217;impact, le cas &eacute;ch&eacute;ant, sur les limites, conditions, manuels, etc. d&#8217;exploitation de la centrale</li>  </ol>  <p>La documentation sur l&#8217;analyse de s&ucirc;ret&eacute; doit &ecirc;tre r&eacute;dig&eacute;e de fa&ccedil;on &agrave; &ecirc;tre facilement compr&eacute;hensible par le personnel de la centrale qui contr&ocirc;le les LCE de la centrale.</p>   <a name="5.6"></a>
<h3 className="reportHeading3"><a name="P810_108944" id="P810_108944"></a>5.6 Revue et mise &agrave; jour de l&#8217;analyse de la s&ucirc;ret&eacute;</h3>  <a name="5.6.1"></a>
<h4 className="reportHeading4"><a name="P811_108999" id="P811_108999"></a>5.6.1 Revue des r&eacute;sultats de l&#8217;analyse de la s&ucirc;ret&eacute;</h4>  <p>Le titulaire de permis doit &eacute;laborer des proc&eacute;dures pour d&eacute;terminer l&#8217;envergure de l&#8217;examen ind&eacute;pendant &agrave; appliquer &agrave; chaque &eacute;tape de l&#8217;analyse de s&ucirc;ret&eacute;. </p>  <p>Pour examiner l&#8217;analyse de s&ucirc;ret&eacute; et cerner les lacunes potentielles, les examinateurs doivent bien conna&icirc;tre&nbsp;: </p>  <ul>
<li> les normes de s&ucirc;ret&eacute;, les m&eacute;thodes d&#8217;analyse et la recherche technique et scientifique</li>
<li> les modifications des donn&eacute;es, de la conception, de l&#8217;enveloppe et des proc&eacute;dures d&#8217;exploitation de la centrale</li>
<li> l&#8217;information sur l&#8217;exp&eacute;rience d&#8217;exploitation d&#8217;autres centrales nucl&eacute;aires</li>  </ul>  <p>Lors de l&#8217;examen de l&#8217;analyse de s&ucirc;ret&eacute;, les &eacute;l&eacute;ments d&#8217;examen suivants doivent &ecirc;tre pris en compte&nbsp;:</p>  <ul>
<li> l&#8217;information sur la conception de la centrale, appuy&eacute;e par des dessins concernant l&#8217;am&eacute;nagement de la centrale, les syst&egrave;mes et l&#8217;&eacute;quipement, ainsi que des manuels de conception</li>
<li> les limites d&#8217;exploitation et les &eacute;tats op&eacute;rationnels permis</li>
<li> l&#8217;information sur la capacit&eacute; fonctionnelle de la centrale, des syst&egrave;mes et des principales pi&egrave;ces d&#8217;&eacute;quipement</li>
<li> les r&eacute;sultats des essais qui valident la capacit&eacute; fonctionnelle</li>
<li> les r&eacute;sultats de l&#8217;inspection des composants</li>
<li> les caract&eacute;ristiques du site, par exemple une base de donn&eacute;es sur les inondations, les s&eacute;ismes, la m&eacute;t&eacute;orologie et l&#8217;hydrologie</li>
<li> les caract&eacute;ristiques hors site, y compris la densit&eacute; de la population</li>
<li> les r&eacute;sultats d&#8217;analyses semblables</li>
<li> les d&eacute;veloppements touchant les m&eacute;thodes analytiques et les codes informatiques</li>
<li> les r&egrave;glements relatifs &agrave; l&#8217;analyse de la s&ucirc;ret&eacute;</li>
<li> les normes et proc&eacute;dures d&#8217;analyse de la s&ucirc;ret&eacute;</li>  </ul>  <p>La port&eacute;e et la m&eacute;thode de l&#8217;examen doivent tenir compte des &eacute;l&eacute;ments suivants&nbsp;:</p>  <ul>
<li> la complexit&eacute; et la nouveaut&eacute; de l&#8217;analyse</li>
<li> la similarit&eacute; avec les analyses examin&eacute;es ant&eacute;rieurement</li>
<li> les marges pr&eacute;vues des crit&egrave;res d&#8217;acceptation</li>  </ul>  <p>Pour une analyse nouvelle et complexe, l&#8217;utilisation d&#8217;autres m&eacute;thodes devrait &ecirc;tre envisag&eacute;e pour confirmer les r&eacute;sultats d&#8217;analyse. D&#8217;autres m&eacute;thodes utilis&eacute;es aux fins de confirmation peuvent &ecirc;tre simplifi&eacute;es, mais doivent &ecirc;tre capables de d&eacute;montrer que les r&eacute;sultats d&#8217;analyse initiaux sont valides sur le plan physique.</p>   <a name="5.6.2"></a>
<h4 className="reportHeading4"><a name="P834_111316" id="P834_111316"></a>5.6.2 Mise &agrave; jour de l&#8217;analyse de la s&ucirc;ret&eacute;</h4>  <p>Le rapport de l&#8217;analyse de s&ucirc;ret&eacute; est p&eacute;riodiquement revu et mis &agrave; jour pour tenir compte des changements de configuration et de conditions (incluant ceux li&eacute;s au vieillissement), des param&egrave;tres et proc&eacute;dures d&#8217;exploitation, des r&eacute;sultats de recherche et de l&#8217;avanc&eacute;e des connaissances sur les ph&eacute;nom&egrave;nes physiques, conform&eacute;ment &agrave; la norme d&#8217;application de la r&eacute;glementation&nbsp;S-99, <em>Rapports &agrave; soumettre par les exploitants de centrales nucl&eacute;aires</em>.</p>  <p>La mise &agrave; jour p&eacute;riodique du rapport de l&#8217;analyse de s&ucirc;ret&eacute; doit&nbsp;:</p>  <ul>
<li> int&eacute;grer la nouvelle information</li>
<li> examiner les nouveaux probl&egrave;mes soulev&eacute;s</li>
<li> utiliser les outils et les m&eacute;thodes actuels</li>
<li>&eacute;valuer l&#8217;impact que les modifications susceptibles de se produire au cours de la dur&eacute;e de vie d&#8217;une centrale nucl&eacute;aire peuvent avoir sur la conception et les proc&eacute;dures d&#8217;exploitation </li>  </ul>  <p>La mise &agrave; jour de l&#8217;analyse de s&ucirc;ret&eacute; permet de s&#8217;assurer qu&#8217;elle demeure valide en tenant compte&nbsp;de :</p>  <ul>
<li> l&#8217;&eacute;tat r&eacute;el de la centrale nucl&eacute;aire</li>
<li> la configuration permise de la centrale et les conditions d&#8217;exploitation admissibles</li>
<li> l&#8217;&eacute;tat de fin de vie pr&eacute;vu de la centrale </li>
<li> les modifications des m&eacute;thodes d&#8217;analyse, des normes de s&ucirc;ret&eacute; et des connaissances qui invalident l&#8217;analyse de s&ucirc;ret&eacute; existante</li>  </ul>  <p>Afin d&#8217;atteindre les objectifs susmentionn&eacute;s, les lignes directrices qui suivent peuvent &ecirc;tre utilis&eacute;es pour la mise &agrave; jour des analyses de s&ucirc;ret&eacute;&nbsp;:</p>  <ul>
<li> examiner les m&eacute;thodes d&#8217;analyse de s&ucirc;ret&eacute; par rapport aux normes applicables et les r&eacute;sultats de recherche disponibles au Canada et dans le monde pour r&eacute;pertorier les &eacute;l&eacute;ments &agrave; prendre en compte</li>
<li> examiner les modifications apport&eacute;es aux donn&eacute;es, &agrave; la conception, &agrave; l&#8217;enveloppe et aux proc&eacute;dures d&#8217;exploitation de la centrale nucl&eacute;aire pour cerner les &eacute;l&eacute;ments &agrave; mettre &agrave; jour</li>
<li> examiner l&#8217;information sur la mise en service et l&#8217;exp&eacute;rience d&#8217;exploitation de la centrale nucl&eacute;aire au Canada et dans le monde pour relever l&#8217;information pertinente &agrave; prendre en compte </li>
<li> examiner les progr&egrave;s r&eacute;alis&eacute;s au chapitre de la r&eacute;solution des questions soulev&eacute;es ant&eacute;rieurement au sujet de l&#8217;analyse de s&ucirc;ret&eacute;, pour &eacute;valuer l&#8217;impact de l&#8217;analyse de s&ucirc;ret&eacute; sur les m&eacute;thodes et les r&eacute;sultats</li>  </ul>   <a name="5.7"></a>
<h3 className="reportHeading3"><a name="P852_113674" id="P852_113674"></a>5.7 Qualit&eacute; de l&#8217;analyse de s&ucirc;ret&eacute;</h3>  <p>Toutes les activit&eacute;s de l&#8217;analyse de s&ucirc;ret&eacute; doivent &ecirc;tre ex&eacute;cut&eacute;es conform&eacute;ment au programme d&#8217;assurance de la qualit&eacute; (AQ) &eacute;tabli. En particulier, toutes les sources de donn&eacute;es doivent &ecirc;tre r&eacute;f&eacute;renc&eacute;es et document&eacute;es, et les diverses &eacute;tapes du processus doivent &ecirc;tre enregistr&eacute;es et archiv&eacute;es pour permettre d&#8217;effectuer une v&eacute;rification ind&eacute;pendante.</p>  <p>Le programme d&#8217;AQ de l&#8217;analyse de s&ucirc;ret&eacute; doit se conformer aux exigences, codes et normes r&eacute;glementaires et aux meilleures pratiques internationales. Le programme d&#8217;AQ devrait int&eacute;grer certains des &eacute;l&eacute;ments qui suivent&nbsp;:</p>  <ul>
<li> facteurs et responsabilit&eacute;s organisationnels</li>
<li> classification et caract&eacute;risation des &eacute;v&eacute;nements</li>
<li> d&eacute;termination des crit&egrave;res d&#8217;acceptation applicables</li>
<li> d&eacute;termination des principaux ph&eacute;nom&egrave;nes et des param&egrave;tres essentiels</li>
<li> pr&eacute;paration des m&eacute;thodes d&#8217;analyse</li>
<li> pr&eacute;paration des donn&eacute;es d&#8217;entr&eacute;e</li>
<li> analyse des s&eacute;quences de d&eacute;faillance</li>
<li>&eacute;valuation des incertitudes</li>
<li> v&eacute;rification et examen des r&eacute;sultats de l&#8217;analyse</li>
<li> documentation de l&#8217;analyse</li>  </ul>   <a name="A"></a>
<h2 className="reportHeading2"><a name="P866_114810" id="P866_114810"></a>Annexe A&nbsp;: Exemples de classifications d&#8217;&eacute;v&eacute;nements</h2>  <p>Le tableau A.1 pr&eacute;sent un classement des &eacute;v&eacute;nements en IFP, AD et AHD et illustre les extrants du processus d&#8217;identification et de classification des &eacute;v&eacute;nements d&eacute;crits dans la sous-section&nbsp;5.2. Cette liste n&#8217;est fournie qu&#8217;&agrave; titre de d&eacute;monstration et n&#8217;a pas pour but d&#8217;&ecirc;tre exhaustive.</p>  <table border="1" summary="Extrants des processus d&rsquo;identification et de classification des &eacute;v&eacute;nements">
<caption>
Tableau A.1&nbsp;: Extrants des processus d&#8217;identification et de classification des &eacute;v&eacute;nements
</caption>
<tr>
<td valign="top"><p align="left"><strong>&Eacute;v&eacute;nement initiateur</strong></p></td>
<td valign="top"><p align="center"><strong>D&eacute;faillances additionnelles</strong></p></td>
<td valign="top"><p align="center"><strong>IFP</strong></p></td>
<td valign="top"><p align="center"><strong>AD</strong></p></td>
<td valign="top"><p align="center"><strong>AHD</strong></p></td>
</tr>
<tr>
<td colSpan="5" valign="top">&nbsp;</td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>APRP &agrave; l&#8217;int&eacute;rieur de l&#8217;enceinte de confinement</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Tr&egrave;s petit APRP (fuite)</p>
<ul>
<li> Fuite du circuit caloporteur (CP) &agrave; l&#8217;int&eacute;rieur de l&#8217;enceinte de confinement (selon la capacit&eacute; de la pompe d&#8217;alimentation en D<sub>2</sub>O et jusqu&#8217;&agrave; 50&nbsp;kg/s)</li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="10" valign="top"><p>Petit APRP </p>
<ul>
<li> Petite rupture d&#8217;une conduite de CP (~&nbsp;50 &agrave; 1 000&nbsp;kg/s)</li>
<li> Rupture d&#8217;une conduite &agrave; la partie sup&eacute;rieure du pressuriseur</li>
<li> D&eacute;faillance de raccord d&#8217;extr&eacute;mit&eacute;</li>
<li> Rupture du tube de force avec tube de calandre intact</li>
<li> Rupture d&#8217;un tube de force/tube de calandre (APRP dans le c&#339;ur)</li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de r&eacute;cup&eacute;ration de D<sub>2</sub>O/d&#8217;alimentation en D<sub>2</sub>O </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de tous les refroidisseurs de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la suppression dans l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du refroidissement du g&eacute;n&eacute;rateur de vapeur (GV) </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du syst&egrave;me de refroidissement d&#8217;urgence du c&#339;ur (SRUC)</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Rupture de transition APRP</p>
<ul>
<li> D&eacute;faillance de conduite du CP (~&nbsp;1&nbsp;000 &agrave; 3 000&nbsp;kg/s)</li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de tous les refroidisseurs de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la suppression de pression dans l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du refroidissement des GV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUC</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Rupture APRP majeur</p>
<ul>
<li> (&gt;&nbsp;3&nbsp;000&nbsp;kg/s)</li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de tous les refroidisseurs de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la suppression de pression dans l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du refroidissement des GV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUC</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>APRP &agrave; l&#8217;ext&eacute;rieur de l&#8217;enceinte de confinement</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Tr&egrave;s petit APRP (fuite) hors de l&#8217;enceinte de confinement</p>
<ul>
<li> Rupture de tube d&#8217;instrument du CP hors de l&#8217;enceinte de confinement</li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du circuit de refroidissement &agrave; l&#8217;arr&ecirc;t (CRA)</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Fuite chronique d&#8217;un tube de GV (&lt;&nbsp;50&nbsp;kg/h) &agrave; forte concentration en I-<sub>131</sub></p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="5" valign="top"><p>Rupture d&#8217;un tube de GV </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de rejet du condenseur (VRC)</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes principales d&#8217;isolation de vapeur (VPIV) des GV touch&eacute;s </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA et des VRC</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Rupture multiple des tubes de GV (&#8804; 10) </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Rupture multiple des tubes de GV (&gt; 10) </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>D&eacute;faillance du joint d&#8217;&eacute;tanch&eacute;it&eacute; du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Rupture de la conduite de drainage du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Vanne de drainage d&eacute;fectueuse en position ouverte</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Rupture de la conduite d&#8217;alimentation du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Vanne de purge d&eacute;fectueuse en position ouverte</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Non-fermeture du clapet</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Perte d&#8217;&eacute;coulement</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Blocage d&#8217;&eacute;coulement mineur dans un canal </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Indisponibilit&eacute; du SRUC ou de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Blocage d&#8217;&eacute;coulement grave dans un canal</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Indisponibilit&eacute; du SRUC ou de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Stagnation due &agrave; une rupture d&#8217;un tuyau d&#8217;alimentation </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des refroidisseurs de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la suppression de pression dans l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du refroidissement des GV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUC</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>D&eacute;faillances du rechargement</strong></p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>&Eacute;jection du combustible de la machine de rechargement du combustible (MRC) dans l&#8217;enceinte de confinement</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des refroidisseurs de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la suppression de pression dans l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du refroidissement des GV </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUC</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Rupture du circuit d&#8217;eau d&#8217;alimentation</strong></p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Perte totale de l&#8217;eau d&#8217;alimentation</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du syst&egrave;me de refroidissement d&#8217;urgence des g&eacute;n&eacute;rateurs de vapeur (SRUGV) ou syst&egrave;me secondaire d&#8217;urgence d&#8217;alimentation en eau (SSUAE)</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Rupture d&#8217;une conduite d&#8217;eau d&#8217;alimentation en amont du dernier clapet</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUGV ou SSUAE</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Rupture d&#8217;une conduite d&#8217;eau d&#8217;alimentation en aval du dernier clapet </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUGV ou SSUAE</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>D&eacute;faillance du syst&egrave;me d&#8217;alimentation de vapeur d&#8217;eau</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Fermeture intempestive des VPIV</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Rejet de la charge turbine/GV et d&eacute;clenchement de la turbine </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Ouverture intempestive d&#8217;une ou plusieurs soupapes de s&ucirc;ret&eacute; de vapeur principales (SSVP)</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;clenchement de la turbine avec VRC indisponible</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Rupture d&#8217;une large conduite de vapeur </p>
<ul>
<li> Rupture de la conduite principale de vapeur</li>
<li> D&eacute;faillance de l&#8217;&eacute;quilibrage du collecteur des conduites principales de vapeur</li>
<li> Rupture de la buse de vapeur du GV </li>
</ul></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUGV ou SSUAE</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Rupture de la conduite de drainage du r&eacute;chauffeur </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SRUGV ou SSUAE</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Perte de pression du d&eacute;gazeur due &agrave; une rupture de la conduite d&#8217;extraction de vapeur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>&Eacute;v&eacute;nements de la pompe du caloporteur</strong></p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;clenchement de la pompe du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Blocage de la pompe du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;arbre de la pompe du CP </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances du syst&egrave;me de manutention du combustible</strong></p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Perte de refroidissement de la machine de rechargement du combustible (MRC) au cours du transport</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p>Perte de r&eacute;frig&eacute;rant de la MRC ancr&eacute;e au r&eacute;acteur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des vannes de l&#8217;enceinte de confinement</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Grappe &eacute;cras&eacute;e avec la MRC ancr&eacute;e au r&eacute;acteur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Fuite d&#8217;un tube de GV</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Incidents de manutention du combustible &agrave; la piscine de stockage (PS)</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Effluents gazeux non disponibles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Incidents touchant la piscine de stockage (PS)</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte du syst&egrave;me de ventilation de la piscine </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Perte de refroidissement de la PS </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de refroidissement d&#8217;appoint </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte du syst&egrave;me de ventilation de la piscine</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte d&#8217;inventaire de la PS </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte du syst&egrave;me de ventilation de la piscine</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances &eacute;lectriques</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte de l&#8217;alimentation de cat&eacute;gorie IV </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;alimentation de cat&eacute;gorie III </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de l&#8217;alimentation de cat&eacute;gorie I de l&#8217;unit&eacute;</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de l&#8217;alimentation de cat&eacute;gorie II de l&#8217;unit&eacute; </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de l&#8217;alimentation &eacute;lectrique d&#8217;urgence (AEU) de l&#8217;unit&eacute;</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de l&#8217;alimentation &eacute;lectrique commune</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances du m&eacute;canisme de contr&ocirc;le</strong></p></td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillances des ordinateurs de contr&ocirc;le</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte du contr&ocirc;le de la r&eacute;activit&eacute; </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de r&eacute;gulation du r&eacute;acteur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Pression du GV basse &#8211; Ouverture intempestive des vannes de rejet atmosph&eacute;rique et VRC</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte du contr&ocirc;le de niveau des GV </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de contr&ocirc;le de niveau du d&eacute;gazeur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de contr&ocirc;le de la pression du caloporteur&nbsp;: surpressurisation</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de contr&ocirc;le de la pression du caloporteur&nbsp;: d&eacute;pressurisation</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances du CRA et du refroidissement du blindage</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Perte de contr&ocirc;le du refroidissement /de la temp&eacute;rature </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte d&#8217;&eacute;coulement </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Rupture de conduite </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Rupture des tubes de l&#8217;&eacute;changeur de chaleur du CRA</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte de circulation du refroidissement du blindage</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte totale du syst&egrave;me d&#8217;eau de service &agrave; basse pression (SESBP) </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte d&#8217;inventaire du bouclier d&#8217;extr&eacute;mit&eacute; </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte de contr&ocirc;le de la temp&eacute;rature du bouclier</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances du mod&eacute;rateur</strong></p></td>
</tr>
<tr>
<td rowspan="5" valign="top"><p>Perte du SESBP</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du d&eacute;clenchement sur consigne de haut niveau du mod&eacute;rateur </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;&eacute;tanch&eacute;it&eacute; du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des soupapes</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Perte de circulation du mod&eacute;rateur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du commutateur &agrave; haut niveau du mod&eacute;rateur </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de contr&ocirc;le de la temp&eacute;rature du mod&eacute;rateur &#8211; bas</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Perte de l&#8217;inventaire du mod&eacute;rateur</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Rupture du tube de l&#8217;&eacute;changeur de chaleur du syst&egrave;me mod&eacute;rateur </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de pression du gaz de couverture </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de circulation du gaz de couverture </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Perte du SESBP aux &eacute;changeurs de chaleur du mod&eacute;rateur </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du d&eacute;clenchement sur consigne de haut niveau du mod&eacute;rateur</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du CRA</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>D&eacute;faillances des syst&egrave;mes de soutien</strong></p></td>
</tr>
<tr>
<td rowspan="6" valign="top"><p>Perte du SESBP/d&eacute;faillance du syst&egrave;me d&#8217;eau de refroidissement recircul&eacute;e </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du d&eacute;clenchement sur consigne de haut niveau du mod&eacute;rateur </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de l&#8217;isolation du confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance des soupapes</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance de la d&eacute;charge filtr&eacute;e de l&#8217;enceinte de confinement </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SSUAE</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du SSUAE</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>D&eacute;faillance du circuit d&#8217;air de l&#8217;instrumentation </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Perte de l&#8217;&eacute;coulement du condensat aux d&eacute;gazeurs</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5"  valign="top"><p align="left"><strong>&Eacute;v&eacute;nements d&eacute;clench&eacute;s de mode commun </strong>(la classification de ces &eacute;v&eacute;nements d&eacute;pend des param&egrave;tres pr&eacute;sum&eacute;s)</p></td>
</tr>
<tr>
<td valign="top"><p>Incendies internes</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Rejet de tritium</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Feu d&#8217;hydrog&egrave;ne</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Explosion d&#8217;hydrog&egrave;ne</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>S&eacute;isme de dimensionnement</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Rupture de la turbine </p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Tornade de dimensionnement</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Incident ferroviaire de dimensionnement</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Incident ferroviaire &#8211; produits toxiques/corrosifs</p></td>
<td valign="top"><p>Pas de d&eacute;faillances additionnelles</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>  </table>   <a name="B"></a>
<h2 className="reportHeading2"><a name="P1808_128161" id="P1808_128161"></a>Annexe B&nbsp;: Exemples de crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s</h2>  <p>Conform&eacute;ment &agrave; la sous-section 5.3.4 du document RD-310, <em>Analyses de la s&ucirc;ret&eacute; pour les centrales nucl&eacute;aires</em>, le titulaire de permis doit &eacute;tablir des crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s. L&#8217;annexe B donne des directives sur l&#8217;application des crit&egrave;res d&#8217;acceptation d&eacute;riv&eacute;s pr&eacute;cis&eacute;s dans le pr&eacute;sent document d&#8217;orientation. Les exemples ci-apr&egrave;s sont tir&eacute;s de pratiques courantes en vigueur au Canada et dans le monde.</p>  <p><strong>Incidents de fonctionnement pr&eacute;vus</strong></p>  <p>Les crit&egrave;res globaux pour un IFP sont les suivants (voir la sous-section 7.3.2 du document RD-337, <em>Conception des nouvelles centrales nucl&eacute;aires</em>)&nbsp;: </p>  <ul>
<li> le crit&egrave;re d&#8217;acceptation de doses pour un IFP est respect&eacute;</li>
<li> les SSC qui n&#8217;interviennent pas dans l&#8217;enclenchement de l&#8217;&eacute;v&eacute;nement doivent rester en bon &eacute;tat pour assurer l&#8217;exploitation continue </li>  </ul>  <p>La sous-section 7.3.2 du document RD-337 pr&eacute;voit que la plupart des IFP seront att&eacute;nu&eacute;s par les syst&egrave;mes de contr&ocirc;le et ne n&eacute;cessiteront pas l&#8217;intervention des syst&egrave;mes de s&ucirc;ret&eacute; pour pr&eacute;venir les dommages. </p>  <p>En outre, tous les IFP seront att&eacute;nu&eacute;s par les syst&egrave;mes de s&ucirc;ret&eacute; sans l&#8217;aide des syst&egrave;mes de contr&ocirc;le. Seuls les crit&egrave;res qui indiquent une att&eacute;nuation r&eacute;ussie par les syst&egrave;mes de s&ucirc;ret&eacute; sont illustr&eacute;s dans tableau&nbsp;B.1 qui suit.</p>  <table border="1" summary="Exemples de crit&egrave;res d&rsquo;acceptation pour les incidents de fonctionnement pr&eacute;vus">
<caption>
Tableau B.1&nbsp;: Exemples de crit&egrave;res d&#8217;acceptation pour les incidents de fonctionnement pr&eacute;vus
</caption>
<tr>
<td  valign="top"><p align="left"><strong>Barri&egrave;re pour contrer le rejet de produits de fission ou fonction de s&ucirc;ret&eacute; fondamentale</strong></p></td>
<td  valign="top"><p align="center"><strong>Crit&egrave;res</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Matrice de combustible</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Gaine du combustible</p></td>
<td valign="top"><ul>
<li> Pas d&#8217;ass&egrave;chement/d&#8217;&eacute;bullition nucl&eacute;&eacute;e (DNB)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Assemblage de combustible</p></td>
<td valign="top"><ul>
<li> Maintenir la capacit&eacute; de refroidissement du combustible</li>
<li> Conserver la g&eacute;om&eacute;trie barre-grappe avec suffisamment de canaux de caloporteur pour permettre d&#8217;&eacute;liminer la chaleur r&eacute;siduelle</li>
<li> Pas d&#8217;entrave au m&eacute;canisme d&#8217;arr&ecirc;t du r&eacute;acteur due au changement de g&eacute;om&eacute;trie (REL)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Canaux de combustible (r&eacute;acteurs CANDU)</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li> Service ASME niveau B non d&eacute;pass&eacute;</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>CCP (&agrave; l&#8217;exclusion des canaux de combustible des r&eacute;acteurs CANDU)</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li> Service ASME niveau B non d&eacute;pass&eacute;</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Circuit caloporteur secondaire</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li> Service ASME niveau B non d&eacute;pass&eacute;</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Enceinte de confinement</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li> Service ASME niveau B non d&eacute;pass&eacute; </li>
</ul>
</li>
<li> La fuite demeure &agrave; l&#8217;int&eacute;rieur de la limite de conception</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Contr&ocirc;le de la r&eacute;activit&eacute;</p></td>
<td valign="top"><ul>
<li> R&eacute;activit&eacute; contr&ocirc;l&eacute;e par le syst&egrave;me de s&ucirc;ret&eacute;</li>
<li> Apr&egrave;s l&#8217;arr&ecirc;t, il n&#8217;y a pas de retour intempestif &agrave; la criticit&eacute;</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>&Eacute;vacuation de la chaleur r&eacute;siduelle</p></td>
<td valign="top"><ul>
<li>&Eacute;vacuation de la chaleur par le syst&egrave;me de s&ucirc;ret&eacute; efficace</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Surveillance de l&#8217;&eacute;tat de l&#8217;&eacute;quipement</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li> l&#8217;instrumentation du syst&egrave;me de s&ucirc;ret&eacute; est qualifi&eacute;e aux plans environnemental et sismique</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Dose hors site</p></td>
<td valign="top"><ul>
<li> Respecte les crit&egrave;res d&#8217;acceptation de doses, sous-section 4.2.1 du document RD-337, pour un IFP</li>
</ul></td>
</tr>  </table>  <p><strong>Accident de dimensionnement</strong></p>  <p>Les crit&egrave;res globaux pour un AD sont les suivants&nbsp;:</p>  <ul>
<li> le crit&egrave;re d&#8217;acceptation de doses pour un AD est respect&eacute; </li>
<li> l&#8217;&eacute;v&eacute;nement n&#8217;&eacute;volue pas vers des conditions plus graves </li>  </ul>  <p>La sous-section 5.3.4 du document RD-310 &eacute;tablit les principes g&eacute;n&eacute;raux suivants que doivent respecter&nbsp;les crit&egrave;res d&#8217;acceptation&nbsp;d&eacute;riv&eacute;s&nbsp;:</p>  <ul>
<li>&eacute;liminer le risque de d&eacute;faillances r&eacute;sultant d&#8217;un &eacute;v&eacute;nement initiateur</li>
<li> maintenir les SSC dans une configuration permettant l&#8217;&eacute;vacuation efficace de la chaleur r&eacute;siduelle</li>
<li> pr&eacute;venir le d&eacute;veloppement de configurations complexes ou de ph&eacute;nom&egrave;nes physiques qui ne peuvent &ecirc;tre mod&eacute;lis&eacute;s avec un niveau de confiance &eacute;lev&eacute;</li>
<li>&ecirc;tre consistants avec les exigences de conception des SSC de la centrale</li>  </ul>  <p>Le tableau B.2 pr&eacute;sente des exemples de crit&egrave;res d&#8217;acceptation d&#8217;AD.</p>  <table border="1" summary="Exemples de crit&egrave;res d&rsquo;acceptation d&rsquo;accidents de dimensionnement">
<caption>
Tableau B.2&nbsp;: Exemples de crit&egrave;res d&#8217;acceptation d&#8217;accidents de dimensionnement
</caption>
<tr>
<td  valign="top"><p align="left"><strong>Barri&egrave;re pour contrer le rejet de produits de fission ou fonction de s&ucirc;ret&eacute; fondamentale</strong></p></td>
<td  valign="top"><p align="center"><strong>Crit&egrave;res</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Matrice de combustible</p></td>
<td valign="top"><ul>
<li> Pas de fusion sur la ligne m&eacute;diane du combustible </li>
<li> Pas de rupture du combustible</li>
<li> Pas de d&eacute;p&ocirc;t excessif d&#8217;&eacute;nergie </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Gaine de combustible</p></td>
<td valign="top"><ul>
<li> Les &eacute;l&eacute;ments combustibles (barres de combustible) qui d&eacute;passent les crit&egrave;res de densit&eacute; du flux thermique critique ou le crit&egrave;re de crise d&#8217;&eacute;bullition sont cens&eacute;s se briser et contribuer &agrave; la dose hors site </li>
<li> Aucune d&eacute;formation excessive de la gaine de combustible </li>
<li>Les &eacute;l&eacute;ments combustibles doivent r&eacute;pondre aux limites applicables pour&nbsp;:
<ul>
<li> la temp&eacute;rature de la gaine</li>
<li> l&#8217;oxydation locale de la gaine </li>
<li> la fragilisation de la gaine de combustible par l&#8217;oxyg&egrave;ne</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Assemblage de combustible</p></td>
<td valign="top"><ul>
<li> Maintenir la capacit&eacute; de refroidissement du combustible</li>
<li> Conserver la g&eacute;om&eacute;trie barre-grappe ou l&#8217;assemblage de combustible avec suffisamment de canaux de caloporteur pour permettre d&#8217;&eacute;vacuer la chaleur r&eacute;siduelle</li>
<li> Pas d&#8217;entrave au m&eacute;canisme d&#8217;arr&ecirc;t du r&eacute;acteur due au changement de g&eacute;om&eacute;trie (REL)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Canaux de combustible</p>
<p>(r&eacute;acteurs CANDU)</p></td>
<td valign="top"><ul>
<li> Le canal de combustible demeure intact </li>
<li> La d&eacute;formation du tube de force local au-dessous du seuil de rupture </li>
<li> Le sous-refroidissement du mod&eacute;rateur emp&ecirc;che la rupture </li>
<li> Pas de dilatation forc&eacute;e</li>
<li> Pas de fusion de la gaine de combustible </li>
<li> Pas de fusion sur la ligne m&eacute;diane du combustible </li>
<li> Pas de rupture du combustible&nbsp;</li>
<li> Pas de courbure ou de flexion de l&#8217;&eacute;l&eacute;ment combustible en contact avec le tube de force </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Circuit caloporteur primaire</p>
<p>(&agrave; l&#8217;exclusion des canaux de combustible des r&eacute;acteurs CANDU)</p></td>
<td valign="top"><ul>
<li> L&#8217;enveloppe de pression demeure intacte&nbsp;:
<ul>
<li> Service ASME niveau C non d&eacute;pass&eacute; </li>
<li> Aucune fuite indirecte des tubes du GV </li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Circuit caloporteur secondaire</p></td>
<td valign="top"><ul>
<li> L&#8217;enveloppe de pression demeure intacte&nbsp;:
<ul>
<li> Service ASME niveau C non d&eacute;pass&eacute; </li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Cuve et mod&eacute;rateur</p>
<p>(ne s&#8217;appliquent pas aux REL)</p></td>
<td valign="top"><ul>
<li> L&#8217;enveloppe de pression demeure intacte&nbsp;:
<ul>
<li>Service ASME niveau C non d&eacute;pass&eacute; </li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Confinement</p></td>
<td valign="top"><ul>
<li> Les conditions de confinement ne d&eacute;passent pas la base de r&eacute;f&eacute;rence&nbsp;:
<ul>
<li> Pression inf&eacute;rieure &agrave; la pression de conception</li>
<li> La fuite de l&#8217;enceinte de confinement demeure &agrave; l&#8217;int&eacute;rieur des limites de fuite de conception</li>
<li> Les conditions des qualifications environnementales (temp&eacute;rature, humidit&eacute;, dose radioactive) des SSC cr&eacute;dit&eacute;s sont respect&eacute;es</li>
<li> Aucun effet local de rupture (missiles, jets, fouettage des tuyaux, flamme d&#8217;hydrog&egrave;ne) qui pourrait nuire &agrave; la fonction de confinement </li>
<li> Les concentrations locales d&#8217;hydrog&egrave;ne en de&ccedil;&agrave; de l&#8217;acc&eacute;l&eacute;ration de la flamme et les crit&egrave;res de transition de d&eacute;flagration-d&eacute;tonation </li>
<li> Charges de combustion de la d&eacute;flagration lente inf&eacute;rieures &agrave; celles qui pourraient endommager les SSC de confinement</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Contr&ocirc;le de la r&eacute;activit&eacute;</p></td>
<td valign="top"><ul>
<li> La r&eacute;activit&eacute; est contr&ocirc;l&eacute;e&nbsp;:
<ul>
<li>Aucune criticit&eacute; imm&eacute;diate</li>
<li>Apr&egrave;s l&#8217;arr&ecirc;t, tout retour &agrave; la puissance est limit&eacute; en dur&eacute;e et n&#8217;occasionne pas le d&eacute;passement de tout autre crit&egrave;re d&#8217;acceptation d&eacute;riv&eacute;</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>&Eacute;vacuation de la chaleur r&eacute;siduelle</p></td>
<td valign="top"><ul>
<li> Le refroidissement continu du c&#339;ur du r&eacute;acteur &agrave; long terme est possible&nbsp;:
<ul>
<li> La g&eacute;om&eacute;trie du c&#339;ur du r&eacute;acteur peut &ecirc;tre refroidie</li>
<li> La chaleur r&eacute;siduelle est &eacute;vacu&eacute;e du c&#339;ur du r&eacute;acteur</li>
<li> La chaleur est transf&eacute;r&eacute;e vers une source froide ultime </li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Surveillance de l&#8217;&eacute;tat de l&#8217;&eacute;quipement</p></td>
<td valign="top"><ul>
<li> Apte &agrave; l&#8217;emploi
<ul>
<li>L&#8217;instrumentation du syst&egrave;me de s&ucirc;ret&eacute; est qualifi&eacute;e aux plans environnemental et sismique</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Dose hors site</p></td>
<td valign="top"><ul>
<li> Respecte les crit&egrave;res d&#8217;acceptation de doses, sous-section 4.2.1 du document RD-337, pour un AD</li>
</ul></td>
</tr>  </table>
<a name="#RDsection[35]#"></a>
<h2 className="reportHeading2"><a name="P180_12816" id="P180_12816"></a></a>Abr&eacute;viations</h2>  <table>
<tr>
<td valign="top"><p> <strong>AD</strong></p></td>
<td valign="top"><p>accident de dimensionnement</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>AEU</strong></p></td>
<td valign="top"><p>alimentation &eacute;lectrique d&#8217;urgence</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>AHD</strong></p></td>
<td valign="top"><p>accident hors dimensionnement</p></td>
</tr>
<tr>
<td valign="top"><strong>AIEA</strong></td>
<td valign="top"><p>Agence internationale de l&#8217;&eacute;nergie atomique</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>ALARA</strong></p></td>
<td valign="top"><p>niveau le plus bas qu&#8217;il soit raisonnablement possible d&#8217;atteindre </p></td>
</tr>
<tr>
<td valign="top"><p> <strong>APRP</strong></p></td>
<td valign="top"><p>accident de perte de r&eacute;frig&eacute;rant primaire</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>ASME</strong></p></td>
<td valign="top"><p>American Society of Mechanical Engineers</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>CC</strong></p></td>
<td valign="top"><p>circuit caloporteur</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>CCSN</strong></p></td>
<td valign="top"><p>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>CN</strong></p></td>
<td valign="top"><p>centrale nucl&eacute;aire</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>EAG</strong></p></td>
<td valign="top"><p>&eacute;tat d&#8217;arr&ecirc;t garanti</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>EIH</strong></p></td>
<td valign="top"><p>&eacute;v&eacute;nement initiateur hypoth&eacute;tique</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>EPS</strong></p></td>
<td valign="top"><p>&eacute;tude probabiliste de s&ucirc;ret&eacute;</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>FAR</strong></p></td>
<td valign="top"><p>fuite avant rupture</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>IFP</strong></p></td>
<td valign="top"><p>incidents de fonctionnement pr&eacute;vu</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>LCE</strong></p></td>
<td valign="top"><p>limites et conditions d&#8217;exploitation</p></td>
</tr>
<tr>
<td valign="top"><p><em> <strong>LSRN</strong></em></p></td>
<td valign="top"><p><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></p></td>
</tr>
<tr>
<td valign="top"><p> <strong>REL</strong></p></td>
<td valign="top"><p>r&eacute;acteur &agrave; eau l&eacute;g&egrave;re (ordinaire)</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>REP</strong></p></td>
<td valign="top"><p>r&eacute;acteurs &agrave; eau sous pression</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>SCP</strong></p></td>
<td valign="top"><p>salle de commande principale</p></td>
</tr>
<tr>
<td valign="top"><p> <strong>SRUC</strong></p></td>
<td valign="top"><p>syst&egrave;me de refroidissement d&#8217;urgence du c&#339;ur</p></td>
</tr>
<tr>
<td valign="top"><strong>SSC</strong></td>
<td valign="top"><p>structures, syst&egrave;mes et composants</p></td>
</tr>  </table>
<a name="#RDsection[36]#"></a>
<h2 className="reportHeading2"><a name="P2014_136706" id="P2014_136706"></a>Glossaire</h2>  <dl className="margins-removed">
<dt>accident </dt>
<dd>&eacute;v&eacute;nement inattendu, y compris les erreurs op&eacute;rationnelles, les d&eacute;faillances de l&#8217;&eacute;quipement ou autres contretemps dont les cons&eacute;quences ou les cons&eacute;quences potentielles ne sont pas n&eacute;gligeables de point de vue de la protection ou de la s&ucirc;ret&eacute;</dd>
<dt>accident de dimensionnement </dt>
<dd>conditions d&#8217;accident pour lesquelles une centrale nucl&eacute;aire est con&ccedil;ue, selon les crit&egrave;res d&#8217;acceptation &eacute;tablis, et pour lesquelles les dommages caus&eacute;s au combustible et les rejets de mati&egrave;res radioactives sont maintenus dans les limites autoris&eacute;es</dd>
<dt>accident hors dimensionnement </dt>
<dd>conditions d&#8217;accident moins fr&eacute;quentes, mais plus graves que celles associ&eacute;es &agrave; un accident de dimensionnement. Un AHD peut ou non entra&icirc;ner la d&eacute;t&eacute;rioration du c&#339;ur du r&eacute;acteur</dd>
<dt>analyse de sensibilit&eacute;</dt>
<dd>examen quantitatif de la variabilit&eacute; du comportement d&#8217;un syst&egrave;me, habituellement exprim&eacute; en unit&eacute;s des param&egrave;tres principaux</dd>
<dt>analyse de s&ucirc;ret&eacute;</dt>
<dd>&eacute;valuation des dangers potentiels associ&eacute;s &agrave; la r&eacute;alisation d&#8217;une activit&eacute; propos&eacute;e</dd>
<dt>analyse d&eacute;terministe de s&ucirc;ret&eacute; </dt>
<dd>analyse des r&eacute;ponses d&#8217;une centrale nucl&eacute;aire &agrave; un &eacute;v&eacute;nement particulier, r&eacute;alis&eacute;e en utilisant des r&egrave;gles et des hypoth&egrave;ses pr&eacute;d&eacute;termin&eacute;es (p. ex. l&#8217;&eacute;tat op&eacute;rationnel initial, la disponibilit&eacute; et la performance des syst&egrave;mes de la centrale et les actions des op&eacute;rateurs). L&#8217;analyse d&eacute;terministe peut &ecirc;tre r&eacute;alis&eacute;e avec la m&eacute;thode prudente ou la m&eacute;thode de la meilleure estimation</dd>
<dt>caract&eacute;ristiques de soutien des syst&egrave;mes de s&ucirc;ret&eacute;</dt>
<dd>ensemble des &eacute;quipements qui fournissent des services tels que le refroidissement, la lubrification et l&#8217;approvisionnement en &eacute;nergie n&eacute;cessaires pour le syst&egrave;me de protection et les syst&egrave;mes de d&eacute;clenchement des dispositifs de s&ucirc;ret&eacute;</dd>
<dt>cat&eacute;gorie d&#8217;&eacute;v&eacute;nement</dt>
<dd>groupe d&#8217;&eacute;v&eacute;nements caract&eacute;ris&eacute;s par une cause identique ou semblable, et par la similitude des ph&eacute;nom&egrave;nes les r&eacute;gissant</dd>
<dt>cause commune</dt>
<dd>cause &agrave; l&#8217;origine de deux ou plusieurs d&eacute;faillances des structures, syst&egrave;mes ou composants, comme les ph&eacute;nom&egrave;nes naturels (s&eacute;ismes, tornades, inondations, etc.), les d&eacute;fauts de conception ou de fabrication, les erreurs d&#8217;exploitation ou d&#8217;entretien, la destruction caus&eacute;e par l&#8217;homme, etc.</dd>
<dt>centrale nucl&eacute;aire</dt>
<dd>toute installation de r&eacute;acteur &agrave; fission ayant &eacute;t&eacute; construite pour produire de l&#8217;&eacute;lectricit&eacute; &agrave; l&#8217;&eacute;chelle commerciale. Une centrale nucl&eacute;aire est une installation nucl&eacute;aire de cat&eacute;gorie IA, telle que d&eacute;finie dans le <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em></dd>
<dt>crit&egrave;res d&#8217;acceptation</dt>
<dd>limites sp&eacute;cifi&eacute;es sur la valeur d&#8217;un indicateur fonctionnel ou conditionnel utilis&eacute; pour &eacute;valuer la capacit&eacute; d&#8217;un syst&egrave;me, d&#8217;une structure ou d&#8217;un composant &agrave; r&eacute;pondre aux exigences de conception et de s&ucirc;ret&eacute;</dd>
<dt>crit&egrave;res d&#8217;acceptation des doses</dt>
<dd>limite impos&eacute;e aux doses de rayonnement afin de prot&eacute;ger le public de tout pr&eacute;judice caus&eacute; par le rejet de mati&egrave;res radioactives pendant l&#8217;exploitation normale de la centrale ou lors d&#8217;incidents de fonctionnement pr&eacute;vus et d&#8217;accidents de r&eacute;f&eacute;rence</dd>
<dt>crit&egrave;re de d&eacute;faillance unique</dt>
<dd>crit&egrave;re utilis&eacute; pour d&eacute;terminer si un syst&egrave;me peut fonctionner en cas de d&eacute;faillance unique</dd>
<dt>d&eacute;faillance unique</dt>
<dd>d&eacute;faillance r&eacute;sultant de la perte de capacit&eacute; d&#8217;un syst&egrave;me ou d&#8217;un composant l&#8217;emp&ecirc;chant d&#8217;ex&eacute;cuter sa ou ses fonctions de s&ucirc;ret&eacute; pr&eacute;vues et toute d&eacute;faillance r&eacute;sultant de cette d&eacute;faillance unique</dd>
<dt>en aveugle </dt>
<dd>conditions pour lesquelles on s&#8217;approche d&#8217;un signal d&#8217;activation ou de conditionnement sans vraiment l&#8217;obtenir, en raison de la faible amplitude de l&#8217;&eacute;v&eacute;nement initiateur ou des interventions d&#8217;autres proc&eacute;d&eacute;s ou syst&egrave;mes de s&ucirc;ret&eacute;</dd>
<dt>&eacute;tat d&#8217;arr&ecirc;t</dt>
<dd>&eacute;tat sous-critique du r&eacute;acteur pr&eacute;sentant une marge d&eacute;finie pour emp&ecirc;cher un retour &agrave; la criticit&eacute; sans intervention externe</dd>
<dt>&eacute;valuation de la s&ucirc;ret&eacute;</dt>
<dd>&eacute;valuation de tous les aspects touchant la s&ucirc;ret&eacute; et li&eacute;s au choix de l&#8217;emplacement, &agrave; la conception, &agrave; la mise en service, &agrave; l&#8217;exploitation ou au d&eacute;classement d&#8217;une installation autoris&eacute;e</dd>
<dt>&eacute;v&eacute;nement initiateur hypoth&eacute;tique </dt>
<dd>&eacute;v&eacute;nement identifi&eacute; dans la conception et entra&icirc;nant soit un IFP, soit d&#8217;autres conditions d&#8217;accident. Il en d&eacute;coule que l&#8217;EIH n&#8217;est pas n&eacute;cessairement un accident en soi; il est plut&ocirc;t l&#8217;initiateur d&#8217;une s&eacute;quence susceptible de d&eacute;g&eacute;n&eacute;rer en IFP, en AD ou en AHD, selon les d&eacute;faillances suppl&eacute;mentaires qui surviennent</dd>
<dt>&eacute;v&eacute;nement limitatif</dt>
<dd>&eacute;v&eacute;nement dont la marge pr&eacute;vue est la plus petite possible par rapport &agrave; un crit&egrave;re d&#8217;acceptation donn&eacute;</dd>
<dt>exactitude des codes</dt>
<dd>degr&eacute; de proximit&eacute; d&#8217;une quantit&eacute; calcul&eacute;e &agrave; sa valeur r&eacute;elle. Comprend le biais et la variabilit&eacute; du biais d&#8217;un code informatique d&eacute;riv&eacute;s de la comparaison de pr&eacute;dictions du code avec les donn&eacute;es exp&eacute;rimentales</dd>
<dt>exploitation normale</dt>
<dd>exploitation d&#8217;une centrale nucl&eacute;aire &agrave; l&#8217;int&eacute;rieur de limites et de conditions d&#8217;exploitation d&eacute;finies, y compris le d&eacute;marrage, l&#8217;exploitation &agrave; divers niveaux de puissance, la mise &agrave; l&#8217;arr&ecirc;t, l&#8217;arr&ecirc;t, l&#8217;entretien, les essais et le rechargement de combustible</dd>
<dt>groupe de s&ucirc;ret&eacute;</dt>
<dd>assemblage de structures, syst&egrave;mes et composants con&ccedil;u pour ex&eacute;cuter toutes les actions requises au cours d&#8217;un &eacute;v&eacute;nement initiateur hypoth&eacute;tique particulier pour que les limites sp&eacute;cifi&eacute;es des &eacute;tats d&#8217;IFP et d&#8217;AD ne soient non d&eacute;pass&eacute;es. L&#8217;assemblage peut comprendre des syst&egrave;mes de s&ucirc;ret&eacute; et de soutien, ainsi que toute interaction entre les syst&egrave;mes fonctionnels</dd>
<dt>incertitude relative &agrave; la mesure</dt>
<dd>quantit&eacute; d&#8217;une valeur mesur&eacute;e pouvant ne pas repr&eacute;senter la valeur physique r&eacute;elle d&#8217;un param&egrave;tre au moment o&ugrave; la mesure est effectu&eacute;e</dd>
<dt>incident de fonctionnement pr&eacute;vu </dt>
<dd>processus op&eacute;rationnel qui s&#8217;&eacute;carte du fonctionnement normal et qui devrait survenir &agrave; tout le moins une fois au cours du cycle de vie utile de la centrale nucl&eacute;aire mais qui ne cause pas, selon les dispositions de conception appropri&eacute;es, de dommage important aux composants importants pour la s&ucirc;ret&eacute; qui ne se transforme pas en accident</dd>
<dt>limites et conditions d&#8217;exploitation </dt>
<dd>ensemble de r&egrave;gles &eacute;tablissant les limites ou conditions des param&egrave;tres qui assurent la capacit&eacute; fonctionnelle et les niveaux de performance de l&#8217;&eacute;quipement pour l&#8217;exploitation s&eacute;curitaire d&#8217;une centrale nucl&eacute;aire</dd>
<dt>m&eacute;thode de la meilleure estimation</dt>
<dd>m&eacute;thode con&ccedil;ue pour donner des r&eacute;sultats r&eacute;alistes</dd>
<dt>mode d&#8217;exploitation</dt>
<dd>le mode d&#8217;exploitation peut comprendre le d&eacute;marrage, l&#8217;exploitation &agrave; diff&eacute;rentes puissances, la mise &agrave; l&#8217;arr&ecirc;t, l&#8217;arr&ecirc;t, l&#8217;entretien, les essais et le rechargement de combustible</dd>
<dt>objectif de s&ucirc;ret&eacute;</dt>
<dd>objectif destin&eacute; &agrave; prot&eacute;ger le personnel de l&#8217;installation, le public et l&#8217;environnement de tout pr&eacute;judice en &eacute;tablissant et en maintenant des syst&egrave;mes efficaces de d&eacute;fense contre les risques radiologiques</dd>
<dt>param&egrave;tre d&#8217;acceptation</dt>
<dd>param&egrave;tre qui caract&eacute;rise la r&eacute;ponse de la centrale et qui comporte un crit&egrave;re d&#8217;acceptation comme limite pour la gamme de valeurs acceptables</dd>
<dt>prudence</dt>
<dd>utilisation d&#8217;hypoth&egrave;ses fond&eacute;es sur l&#8217;exp&eacute;rience ou des donn&eacute;es indirectes, sur un ph&eacute;nom&egrave;ne ou un comportement d&#8217;un syst&egrave;me &agrave; la limite ou proche de la limite pr&eacute;vue, qui permettent d&#8217;augmenter les marges de s&ucirc;ret&eacute; ou de pr&eacute;dire des cons&eacute;quences plus graves que si des hypoth&egrave;ses fond&eacute;es sur la meilleure estimation avaient &eacute;t&eacute; utilis&eacute;es</dd>
<dt>structures, syst&egrave;mes et composants </dt>
<dd>terme g&eacute;n&eacute;ral qui recouvre tous les &eacute;l&eacute;ments (aspects) d&#8217;une installation ou d&#8217;une activit&eacute; qui contribuent &agrave; la protection et &agrave; la s&ucirc;ret&eacute;, &agrave; l&#8217;exclusion des facteurs humains</dd>
<dt>syst&egrave;me de refroidissement d&#8217;urgence du c&#339;ur</dt>
<dd>syst&egrave;me de s&ucirc;ret&eacute; ayant pour but de transf&eacute;rer la chaleur du c&#339;ur du r&eacute;acteur &agrave; la suite d&#8217;une perte de caloporteur exc&eacute;dant les capacit&eacute;s d&#8217;appoint</dd>
<dt>syst&egrave;me de s&ucirc;ret&eacute;</dt>
<dd>syst&egrave;me qui assure l&#8217;arr&ecirc;t s&eacute;curitaire du r&eacute;acteur ou l&#8217;&eacute;vacuation de la chaleur r&eacute;siduelle du c&#339;ur du r&eacute;acteur, ou qui att&eacute;nue les cons&eacute;quences des IFP et des AD</dd>  </dl>
<a name="#RDsection[37]#"></a>
<h2 className="reportHeading2"><a name="P2082_144830" id="P2082_144830"></a>Renseignements suppl&eacute;mentaires</h2>  <ol>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, RD-337, <em>Conceptions des nouvelles centrales nucl&eacute;aires</em>, Ottawa, 2008.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, S-294, <em>&Eacute;tudes probabilistes de s&ucirc;ret&eacute; (EPS) pour les centrales nucl&eacute;aires</em>, Ottawa, 2005.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, S-99, <em>Rapports &agrave; soumettre par les exploitants de centrales nucl&eacute;aires</em>, Ottawa, 2003.</li>
<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, G-149, <em>Les programmes informatiques utilis&eacute;s lors de la conception et des analyses de la s&ucirc;ret&eacute; des centrales nucl&eacute;aires et des r&eacute;acteurs de recherche</em>, Ottawa, 2000.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, RD-327, <em>S&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em>, Ottawa, 2010.</li>
<li> Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, GD-327, <em>Directives de s&ucirc;ret&eacute; en mati&egrave;re de criticit&eacute; nucl&eacute;aire</em>, Ottawa, 2010.</li>
<li> Association canadienne de normalisation, N286.7-99, <em>Assurance de la qualit&eacute; des programmes informatiques scientifiques, d&#8217;analyse et de conception des centrales nucl&eacute;aires</em>, Toronto, 2003.</li>  </ol>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }