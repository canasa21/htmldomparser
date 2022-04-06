import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-1.2.1, Orientation sur la caractérisation des emplacements de dépôts géologiques en profondeur", 
                dateModified: "2018-10-19",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc1-2-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face </h2>
<p>Le pr&eacute;sent document fait partie de la s&eacute;rie de documents d&rsquo;application de la  r&eacute;glementation de la CCSN portant sur les activit&eacute;s et installations  r&eacute;glement&eacute;es. La liste compl&egrave;te des s&eacute;ries figure &agrave; la fin du document et elle  peut &ecirc;tre consult&eacute;e sur le <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>. </p>  <p>Le  document d&rsquo;application de la r&eacute;glementation REGDOC-1.2.1,&nbsp;<em>Orientation sur la caract&eacute;risation des emplacements  de d&eacute;p&ocirc;ts g&eacute;ologiques en profondeur,</em> guide l&rsquo;&eacute;tape de caract&eacute;risation de  l&rsquo;emplacement dans le cadre du processus d&rsquo;implantation d&rsquo;un d&eacute;p&ocirc;t g&eacute;ologique  en profondeur (DGP) pour les d&eacute;chets radioactifs, puisque l&rsquo;information  recueillie pour la caract&eacute;risation de l&rsquo;emplacement peut &ecirc;tre employ&eacute;e dans de  futures demandes de permis. </p>  <p>Le  pr&eacute;sent document remplace le R-72, <em>Consid&eacute;rations  g&eacute;ologiques pour le choix d&rsquo;un emplacement de d&eacute;p&ocirc;t souterrain de d&eacute;chets  hautement radioactifs,</em> publi&eacute; en septembre&nbsp;1987.</p><div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 Lois pertinentes</a></li>
<li><a href="#sec1-4">1.4 R&ocirc;le initial de l&rsquo;organisme de r&eacute;glementation</a></li>
</ul>
</li>
<li><a href="#sec2">2. Aper&ccedil;u du processus d&rsquo;implantation</a>
<ul>
<li><a href="#sec2-1">2.1 &Eacute;tape de planification et de conceptualisation</a></li>
<li><a href="#sec2-2">2.2 &Eacute;tape des lev&eacute;s</a></li>
<li><a href="#sec2-3">2.3 &Eacute;tape de caract&eacute;risation de l&rsquo;emplacement</a></li>
<li><a href="#sec2-4">2.4	&Eacute;tape de confirmation de l&rsquo;emplacement</a></li>
</ul>
</li>
<li><a href="#sec3">3. Programme de caract&eacute;risation de l&rsquo;emplacement</a>
<ul>
<li><a href="#sec3-1">3.1	Caract&eacute;ristiques de l&rsquo;emplacement I&nbsp;: environnement g&eacute;ologique</a>
<ul>
<li><a href="#sec3-2">3.1.1	Cadre g&eacute;ologique</a></li>
<li><a href="#sec3-3">3.1.2	Cadre hydrog&eacute;ologique</a> </li>
<li><a href="#sec3-4">3.1.3	G&eacute;ochimie</a> </li>
<li><a href="#sec3-5">3.1.4 Stabilit&eacute; g&eacute;ologique</a> </li>
<li><a href="#sec3-6">3.1.5 Caract&eacute;ristiques g&eacute;om&eacute;caniques</a></li>
</ul>
</li>
<li><a href="#sec3-7">3.2 Caract&eacute;ristiques de l&rsquo;emplacement II&nbsp;: environnement en surface</a>
<ul>
<li><a href="#sec3-2-1">3.2.1 Climat</a></li>
<li><a href="#sec3-2-2">3.2.2 Environnement aquatique et terrestre</a></li>
<li><a href="#sec3-2-3">3.2.3 Topographie, hydrologie et inondation</a></li>
<li><a href="#sec3-2-4">3.2.4 Caract&eacute;risation de la g&eacute;omorphologie</a></li>
<li><a href="#sec3-2-5">3.2.5 Caract&eacute;risation g&eacute;otechnique des d&eacute;p&ocirc;ts de surface</a></li>
</ul>
</li>
</ul>
<li><a href="#sec4">4. Activit&eacute;s humaines et utilisation du territoire</a>
<li><a href="#sec5">5. Acquisition de donn&eacute;es et activit&eacute;s de v&eacute;rification</a>
<ul>
<li><a href="#sec5-1">5.1 Syst&egrave;me de gestion</a></li>
<li><a href="#sec5-2">5.2 Programme de gestion des donn&eacute;es</a></li>
<li><a href="#sec5-3">5.3 Proc&eacute;dures d&rsquo;&eacute;chantillonnage et d&rsquo;essai</a></li>
<li><a href="#sec5-4">5.4 Int&eacute;gration et interpr&eacute;tation</a></li>
</ul>
</li>
<li><a href="#sec6">6. Installations pour les activit&eacute;s de v&eacute;rification et de caract&eacute;risation</a>
</li>  <li><a href="#glossary">Glossaire</a></li>
<li><a href="#fnb">Bibliographie</a></li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  	<p>Un d&eacute;p&ocirc;t g&eacute;ologique en profondeur (DGP) est une  installation o&ugrave; des d&eacute;chets radioactifs sont enfouis dans une formation  g&eacute;ologique stable et profonde (g&eacute;n&eacute;ralement &agrave; plusieurs centaines de m&egrave;tres ou  plus sous la surface) dans le but d&rsquo;isoler et de confiner les d&eacute;chets et  d&rsquo;assurer l&rsquo;isolement &agrave; long terme des substances nucl&eacute;aires pour prot&eacute;ger la  biosph&egrave;re<sup><a  id="fnb1a-ref" className="fn-lnk ui-link" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>. Une fois l&rsquo;emplacement scell&eacute;, il n&rsquo;y aura plus  de r&eacute;cup&eacute;ration ou de transfert des d&eacute;chets radioactifs <sup><a href="#fnb2" id="fnb2a-ref" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>2</a></sup>. </p>
<p>La  caract&eacute;risation de l&rsquo;emplacement repose sur des investigations techniques  d&eacute;taill&eacute;es visant &agrave; alimenter les connaissances sur un emplacement particulier.  Elle comprend des analyses des documents et des investigations r&eacute;gionales et  propres &agrave; l&rsquo;emplacement visant &agrave; cerner des caract&eacute;ristiques et processus  particuliers, et &agrave; les comprendre. Ces processus sont g&eacute;n&eacute;ralement &eacute;tudi&eacute;s dans  diff&eacute;rents contextes (hydrog&eacute;ologie, m&eacute;canique des roches, g&eacute;ochimie, etc.),  mais doivent &ecirc;tre compris de mani&egrave;re int&eacute;gr&eacute;e.</p>  <p>Les  donn&eacute;es recueillies aux &eacute;tapes pr&eacute;liminaires de la caract&eacute;risation de  l&rsquo;emplacement peuvent &ecirc;tre utilis&eacute;es pour &eacute;tayer la demande de permis initiale  pr&eacute;sent&eacute;e &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) (p. ex., permis  visant &agrave; pr&eacute;parer l&rsquo;emplacement ou permis combin&eacute; de pr&eacute;paration de  l&rsquo;emplacement et de construction) et font partie du dossier de s&ucirc;ret&eacute;.</p>  <p>D&rsquo;autres  organismes de r&eacute;glementation ont autorit&eacute; sur les activit&eacute;s men&eacute;es dans le cadre  de la caract&eacute;risation de l&rsquo;emplacement, avant la s&eacute;lection de l&rsquo;emplacement et  avant que le demandeur ne puisse proc&eacute;der &agrave; des activit&eacute;s qui exigeraient un  permis de la CCSN. On recommande de mener les activit&eacute;s de caract&eacute;risation de  l&rsquo;emplacement en collaboration avec les organismes de r&eacute;glementation concern&eacute;s  afin de s&rsquo;assurer que les attentes en mati&egrave;re de r&eacute;glementation et les  exigences li&eacute;es aux permis ou &agrave; d&rsquo;autres aspects soient bien comprises, et que  les probl&egrave;mes associ&eacute;s &agrave; l&rsquo;acceptation des donn&eacute;es soient cern&eacute;s et att&eacute;nu&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1	Objet </h3>
<p>Le  pr&eacute;sent document d&rsquo;application de la r&eacute;glementation est un guide de la CCSN  destin&eacute; aux demandeurs de permis et expose les aspects techniques qui doivent  &ecirc;tre pris en compte lors de l&rsquo;&eacute;tape de caract&eacute;risation de l&rsquo;emplacement du  processus d&rsquo;implantation d&rsquo;un d&eacute;p&ocirc;t g&eacute;ologique en profondeur (DGP) de d&eacute;chets  radioactifs. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Port&eacute;e </h3>  <p>Le REGDOC-1.2.1  vise &agrave; orienter la caract&eacute;risation d&rsquo;un emplacement de DGP. L&rsquo;orientation  fournie dans le pr&eacute;sent document vise essentiellement des questions techniques. </p>  <p>La CCSN  fait appel &agrave; un syst&egrave;me d&rsquo;autorisation exhaustif qui couvre le cycle de vie  d&rsquo;un DGP &ndash; de la pr&eacute;paration de l&rsquo;emplacement et la construction, en passant  par son exploitation et son d&eacute;classement (fermeture et post-fermeture), jusqu&rsquo;&agrave;  sa lib&eacute;ration de l&rsquo;autorit&eacute; r&eacute;glementaire de la CCSN. Cette approche exige un  permis pour chaque &eacute;tape, mais il est possible de combiner les permis pour la  pr&eacute;paration et la construction de l&rsquo;installation. </p>  <p>Il  importe de souligner que m&ecirc;me si, en g&eacute;n&eacute;ral, les activit&eacute;s de caract&eacute;risation de  l&rsquo;emplacement commencent avant le processus de r&eacute;glementation de la CCSN, les  m&eacute;thodes et processus utilis&eacute;s et les donn&eacute;es recueillies peuvent faire partie  des futures demandes de permis et seront officiellement examin&eacute;s afin d&rsquo;en  v&eacute;rifier la qualit&eacute; et le caract&egrave;re ad&eacute;quat.</p>  <p>M&ecirc;me si le pr&eacute;sent document n&rsquo;offre  pas de conseils sur la fa&ccedil;on de trouver ou de s&eacute;lectionner un emplacement,  l&rsquo;&eacute;tape de caract&eacute;risation de l&rsquo;emplacement sera suffisamment d&eacute;taill&eacute;e pour  confirmer la pertinence technique de l&rsquo;emplacement. </p>  <p>Dans le pr&eacute;sent document, la p&eacute;riode pr&eacute;alable &agrave;  la fermeture d&rsquo;un DGP comprend la pr&eacute;paration de l&rsquo;emplacement, la  construction, l&rsquo;exploitation et le d&eacute;classement. La p&eacute;riode post&#8209;fermeture ou  l&rsquo;horizon &agrave; long terme est la p&eacute;riode qui suit la fermeture d&rsquo;un DGP, avec un  &eacute;ch&eacute;ancier de dizaines de milliers d&rsquo;ann&eacute;es, ou plus <sup><a id="fnb3a-ref" href="#fnb3" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>3</a></sup>.</p>  <p>Veuillez noter que le pr&eacute;sent document&nbsp;: &nbsp;</p>  <ul>  	<li>ne  s&rsquo;applique pas aux installations de gestion des d&eacute;chets en surface et pr&egrave;s de  la surface, y compris les d&eacute;chets des mines et usines de concentration  d&rsquo;uranium </li>  	<li>ne  fournit pas de conseils sur les strat&eacute;gies de gestion des d&eacute;chets &agrave; long terme </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3 Lois pertinentes </h3>
<p>La <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation  nucl&eacute;aires </em>(LSRN) s&rsquo;applique d&egrave;s que les activit&eacute;s de pr&eacute;paration de  l&rsquo;emplacement commencent. Par cons&eacute;quent, il importe de conna&icirc;tre les autres  lois, comme les lois provinciales, qui peuvent s&rsquo;appliquer &agrave; l&rsquo;activit&eacute; de  caract&eacute;risation de l&rsquo;emplacement. Les installations de gestion &agrave; long terme des  d&eacute;chets radioactifs, comme les DGP, sont g&eacute;n&eacute;ralement autoris&eacute;es en vertu du <em>R&egrave;glement sur les installations nucl&eacute;aires  de cat&eacute;gorie&nbsp;I</em>. Ce r&egrave;glement ne pr&eacute;voit aucun processus encadrant la  s&eacute;lection d&rsquo;un emplacement. Le processus de r&eacute;glementation n&rsquo;est d&eacute;clench&eacute;  qu&rsquo;au moment du d&eacute;p&ocirc;t d&rsquo;une demande de permis visant &agrave; pr&eacute;parer l&rsquo;emplacement  ou d&rsquo;un permis combin&eacute; de pr&eacute;paration de l&rsquo;emplacement et de construction des  installations, demande qui &agrave; son tour d&eacute;clenche la r&eacute;alisation d&rsquo;une &eacute;tude  d&rsquo;impact f&eacute;d&eacute;rale. Veuillez noter que la <em>Loi  sur les d&eacute;chets de combustible nucl&eacute;aire</em> fait autorit&eacute; en ce qui a trait  aux d&eacute;chets nucl&eacute;aires en DGP au Canada.</p>  <p>Un  demandeur de permis peut consulter les exigences relatives aux demandes de  permis dans le <em>R&egrave;glement sur les  installations nucl&eacute;aires de cat&eacute;gorie I</em> afin d&rsquo;&eacute;tayer ses activit&eacute;s de  caract&eacute;risation de l&rsquo;emplacement. Par exemple, pour pr&eacute;parer un emplacement, le  demandeur doit, en vertu de l&rsquo;alin&eacute;a&nbsp;4a), fournir une &laquo;&nbsp;description  du processus d&rsquo;&eacute;valuation de l&rsquo;emplacement, ainsi que des analyses et des  travaux pr&eacute;alables qui ont &eacute;t&eacute; et seront effectu&eacute;s sur l&rsquo;emplacement et dans  les environs&nbsp;&raquo; et &laquo;&nbsp;d&eacute;terminer les caract&eacute;ristiques environnementales  de base de l&rsquo;emplacement et des environs&nbsp;&raquo;. &nbsp;</p>  <p>Par cons&eacute;quent, des approbations r&eacute;glementaires  ne sont pas requises pour la s&eacute;lection de l&rsquo;emplacement, et certaines activit&eacute;s  d&rsquo;investigation seront effectu&eacute;es avant la d&eacute;livrance du permis. Le &laquo;&nbsp;processus  d&rsquo;&eacute;valuation de l&rsquo;emplacement et le travail d&rsquo;investigation et pr&eacute;paratoire qui  a &eacute;t&eacute; effectu&eacute;&nbsp;&raquo; font r&eacute;f&eacute;rence aux activit&eacute;s de caract&eacute;risation  pr&eacute;alables &agrave; l&rsquo;autorisation requises pour recueillir suffisamment de donn&eacute;es  propres &agrave; l&rsquo;emplacement afin de concevoir et d&rsquo;&eacute;valuer l&rsquo;installation et de pr&eacute;parer  la documentation n&eacute;cessaire pour l&rsquo;&eacute;valuation environnementale ou la demande de  permis. La port&eacute;e de ces activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation peut faire  l&rsquo;objet de discussions avec l&rsquo;organisme de r&eacute;glementation pour &eacute;viter  d&rsquo;entreprendre des activit&eacute;s qui requi&egrave;rent un permis. La collecte de donn&eacute;es  propres &agrave; l&rsquo;emplacement d&eacute;terminera les besoins que doit satisfaire le plan de  caract&eacute;risation de l&rsquo;emplacement quant &agrave; la qualit&eacute; et la quantit&eacute; de donn&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.4"></div>
<h3 id="sec1-4">1.4 R&ocirc;le  initial de l&rsquo;organisme de r&eacute;glementation</h3>  <p>On  recommande de mener des consultations pr&eacute;liminaires avec l&rsquo;organisme de  r&eacute;glementation afin de pr&eacute;ciser les attentes et les exigences r&eacute;glementaires.  Ce processus comprend la d&eacute;termination des activit&eacute;s de caract&eacute;risation de  l&rsquo;emplacement qui n&rsquo;ont peut-&ecirc;tre pas besoin d&rsquo;un permis de la CCSN.</p>  <p>La port&eacute;e  des consultations entre le demandeur et l&rsquo;organisme de r&eacute;glementation doit &ecirc;tre  &eacute;quilibr&eacute;e, afin de pr&eacute;server l&rsquo;ind&eacute;pendance de l&rsquo;organisme tout en offrant des  conseils ad&eacute;quats au demandeur. On recommande de conclure une entente de  services entre l&rsquo;organisme de r&eacute;glementation et le demandeur. </p>  <p>Dans le  cadre de l&rsquo;entente de services, on recommande d&rsquo;accorder &agrave; l&rsquo;organisme de  r&eacute;glementation la possibilit&eacute; de mener des inspections et des &eacute;valuations  informelles &ndash; par exemple, pour s&rsquo;assurer que le syst&egrave;me de gestion d&rsquo;un  demandeur de permis est proportionnel &agrave; la port&eacute;e du projet, tel que le pr&eacute;cise  la norme du Groupe CSA&nbsp;N286-12, <em>Exigences  relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em>. Par exemple,  les &eacute;valuations &agrave; cette &eacute;tape peuvent servir &agrave; d&eacute;terminer si les programmes du  syst&egrave;me de gestion, et les m&eacute;thodes de collecte de donn&eacute;es et  d&rsquo;approvisionnement sont conformes aux exigences de la CCSN. </p>  <p>On  recommande &eacute;galement que le demandeur tienne la CCSN inform&eacute;e des principaux  jalons et principales activit&eacute;s li&eacute;es &agrave; la caract&eacute;risation de l&rsquo;emplacement.  Les demandeurs sont invit&eacute;s &agrave; informer rapidement l&rsquo;organisme de r&eacute;glementation  des demandes &eacute;ventuelles d&rsquo;examens pr&eacute;alables &agrave; l&rsquo;autorisation par la CCSN,  comme le programme de caract&eacute;risation de l&rsquo;emplacement.</p>  <p>La CCSN  peut observer les activit&eacute;s ou demander de l&rsquo;information. Avant le d&eacute;p&ocirc;t d&rsquo;une  demande officielle, le personnel de la CCSN peut demander des donn&eacute;es, des  r&eacute;sultats et des documents d&eacute;coulant des activit&eacute;s de caract&eacute;risation de  l&rsquo;emplacement afin, par exemple, de proc&eacute;der &agrave; une recherche ind&eacute;pendante. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Aper&ccedil;u  du processus d&#39;implantation</h2>  <p>L&#39;objectif du processus d&#39;implantation, qui  comprend la caract&eacute;risation de l&#39;emplacement, consiste &agrave; s&eacute;lectionner un  emplacement qui, en plus d&#39;une conception appropri&eacute;e et d&#39;une barri&egrave;re  artificielle, comporte des propri&eacute;t&eacute;s qui garantissent un confinement ad&eacute;quat  et l&#39;isolement des radionucl&eacute;ides et des substances dangereuses pour &eacute;viter  tout contact avec l&#39;environnement pendant la p&eacute;riode souhait&eacute;e, g&eacute;n&eacute;ralement la  p&eacute;riode d&#39;&eacute;valuation<sup><a  id="fnb4a-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>.  </p>  <p>Le  processus de s&eacute;lection d&#39;un emplacement et la d&eacute;cision de choisir un  emplacement particulier rel&egrave;vent du demandeur de permis. </p>  <p>Les  donn&eacute;es recueilles lors des &eacute;tapes pr&eacute;liminaires du processus d&#39;implantation  peuvent faire partie de la demande de permis initiale et du dossier de s&ucirc;ret&eacute;.  L&#39;information recueillie &agrave; cette &eacute;tape peut servir d&#39;information de base pour  &eacute;tayer la d&eacute;monstration de s&ucirc;ret&eacute; tout au long du cycle de vie du DGP. </p>  <p>L&#39;Agence internationale de l&#39;&eacute;nergie atomique  (AIEA) a d&eacute;gag&eacute; les quatre &eacute;tapes suivantes pour le processus d&#39;implantation  d&#39;un DGP<sup><a  id="fnb4b-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>:</p>  <ol>
<li>&Eacute;tape de planification et de  conceptualisation&nbsp;: collecte de donn&eacute;es et interpr&eacute;tation </li>
<li>&Eacute;tape des lev&eacute;s&nbsp;: cartographie  et &eacute;valuation de la r&eacute;gion </li>
<li>&Eacute;tape de caract&eacute;risation de  l&#39;emplacement </li>
<li>&Eacute;tape de confirmation de  l&#39;emplacement </li>  </ol>  <p>La caract&eacute;risation de l&#39;emplacement, qui est le  th&egrave;me du pr&eacute;sent document de r&eacute;glementation, commence au d&eacute;but de la recherche  de l&#39;emplacement et s&#39;intensifie au fur et &agrave; mesure que progresse le processus  d&#39;implantation, jusqu&#39;&agrave; la confirmation de l&#39;emplacement<sup><a  id="fnb4c-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>. </p>  <p>Remarque&nbsp;:  La transition d&#39;une &eacute;tape &agrave; une autre est quelque peu arbitraire en raison du  chevauchement in&eacute;vitable des activit&eacute;s d&#39;implantation. </p>  <p>&Agrave; la suite de la confirmation de l&#39;emplacement  et aux premi&egrave;res &eacute;tapes du processus d&#39;autorisation, les activit&eacute;s de  caract&eacute;risation se poursuivent g&eacute;n&eacute;ralement jusqu&#39;&agrave; la pr&eacute;paration de  l&#39;emplacement, la construction des installations et leur exploitation. Les  activit&eacute;s de caract&eacute;risation sont maintenues &agrave; toutes ces &eacute;tapes afin  d&#39;alimenter les donn&eacute;es de base servant &agrave; la surveillance future des lieux,  mais &eacute;galement pour confirmer les hypoth&egrave;ses formul&eacute;es dans des dossiers de  s&ucirc;ret&eacute; ant&eacute;rieurs et &eacute;carter les derni&egrave;res incertitudes y figurant <sup><a  id="fnb4d-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>. Les activit&eacute;s de caract&eacute;risation qui se  poursuivent jusqu&#39;&agrave; la fermeture du DGP sont g&eacute;n&eacute;ralement d&eacute;finies dans le  cadre d&#39;un programme de v&eacute;rification g&eacute;oscientifique. Le dossier de s&ucirc;ret&eacute; et  l&#39;&eacute;valuation de s&ucirc;ret&eacute; connexe doivent d&eacute;gager les incertitudes en suspens et  &eacute;valuer la solidit&eacute; de l&#39;installation afin qu&#39;un programme de v&eacute;rification  g&eacute;oscientifique puisse &ecirc;tre mis sur pied, et qu&#39;un programme de recherche soit  &eacute;labor&eacute; et ex&eacute;cut&eacute; pour &eacute;carter ces incertitudes tout au long du cycle de vie  du DGP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1"></div>
<h3 id="sec2-1">2.1 &Eacute;tape  de planification et de conceptualisation</h3>  <p>L&rsquo;&eacute;tape de planification et de conceptualisation  a pour but d&rsquo;&eacute;laborer un plan global pour le processus de s&eacute;lection du site et  comprend la d&eacute;termination des caract&eacute;ristiques souhaitables qui servent de  fondement &agrave; la deuxi&egrave;me &eacute;tape, mais elle vise &eacute;galement &agrave; concevoir  l&rsquo;installation en fonction du type, du volume et du contenu en radionucl&eacute;ides  des d&eacute;chets radioactifs &agrave; confiner (pour plus d&rsquo;information, consulter le REGDOC-2.11.1,  Programme de gestion des d&eacute;chets, Volume&nbsp;II&nbsp;: <em>&Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets  radioactifs </em><sup><a id="fnb5a-ref" href="#fnb5" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>5 </a></sup>et la norme du Groupe CSA&nbsp;N292.0-14, <em>Principes g&eacute;n&eacute;raux pour la gestion des  d&eacute;chets radioactifs et du combustible irradi&eacute;</em>). Des crit&egrave;res d&rsquo;&eacute;valuation de  l&rsquo;emplacement doivent &ecirc;tre &eacute;tablis pour s&eacute;lectionner ou rejeter des  emplacements potentiels et, par la suite, choisir l&rsquo;emplacement &agrave; privil&eacute;gier. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2"></div>
<h3 id="sec2-2">2.2 &Eacute;tape des lev&eacute;s</h3>  <p>L&rsquo;&eacute;tape  des lev&eacute;s comprend l&rsquo;&eacute;valuation des emplacements potentiels, un processus de  cartographie g&eacute;ologique de la r&eacute;gion et d&rsquo;autres activit&eacute;s de caract&eacute;risation &agrave;  l&rsquo;&eacute;chelle r&eacute;gionale (p. ex., lev&eacute;s g&eacute;ophysiques a&eacute;roport&eacute;s). Il faut &eacute;galement  tenir compte d&rsquo;autres contraintes, notamment celles de nature technique et  environnementale. Le but des activit&eacute;s men&eacute;es &agrave; l&rsquo;&eacute;tape des lev&eacute;s consiste &agrave;  alimenter le processus d&rsquo;&eacute;valuation, qui permet de circonscrire les  emplacements potentiels. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3"></div>
<h3 id="sec2-3">2.3 &Eacute;tape  de caract&eacute;risation de l&rsquo;emplacement </h3>  <p>L&rsquo;&eacute;tape  de caract&eacute;risation de l&rsquo;emplacement comprend un travail intensif sur le terrain  et des &eacute;tudes en laboratoire, g&eacute;n&eacute;ralement pour recueillir des donn&eacute;es propres  au site sur diverses conditions, notamment son caract&egrave;re ad&eacute;quat sur les plans  g&eacute;ologique, g&eacute;ochimique et g&eacute;om&eacute;canique. </p>  <p>Les activit&eacute;s initiales de caract&eacute;risation de  l&rsquo;emplacement reposent sur des &eacute;tudes scientifiques et un travail administratif  de compilation des donn&eacute;es et comprennent des lev&eacute;s g&eacute;ophysiques et le forage  de puits, mais elles cessent d&egrave;s le d&eacute;but des travaux d&rsquo;excavation. &nbsp;</p>  <p>Les  &eacute;valuations pr&eacute;liminaires de la s&ucirc;ret&eacute; doivent &ecirc;tre termin&eacute;es &agrave; cette &eacute;tape afin  de v&eacute;rifier le caract&egrave;re appropri&eacute; du site pour accueillir un DGP et d&rsquo;orienter  les activit&eacute;s de caract&eacute;risation et de confirmation ult&eacute;rieures. Ces  &eacute;valuations peuvent &eacute;galement faire partie d&rsquo;une analyse comparative des sites  restants (le cas &eacute;ch&eacute;ant), menant &agrave; la prochaine &eacute;tape de confirmation de  l&rsquo;emplacement o&ugrave; des travaux intensifs plus pr&eacute;cis sont men&eacute;s sur un seul  emplacement. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4"></div>
<h3 id="sec2-4">2.4 &Eacute;tape  de confirmation de l&rsquo;emplacement</h3>  <p>La  confirmation de l&rsquo;emplacement comprend g&eacute;n&eacute;ralement un travail intensif et  pr&eacute;cis sur le terrain et des &eacute;tudes en laboratoire, sur l&rsquo;emplacement  s&eacute;lectionn&eacute;. C&rsquo;est &agrave; cette &eacute;tape que l&rsquo;on d&eacute;terminera s&rsquo;il est n&eacute;cessaire de  creuser un puits ou de construire une installation de recherche souterraine  (IRS) pour obtenir plus d&rsquo;information. </p>  <p>Une  derni&egrave;re &eacute;valuation de la s&ucirc;ret&eacute; doit &ecirc;tre r&eacute;alis&eacute;e en fonction de toutes les  donn&eacute;es recueillies avant les &eacute;tapes d&rsquo;implantation et en combinaison avec  l&rsquo;information g&eacute;ologique et hydrog&eacute;ologique obtenue, et l&rsquo;information sur  d&rsquo;autres barri&egrave;res, comme le syst&egrave;me de barri&egrave;res artificielles, la conception  des silos et les caract&eacute;ristiques des d&eacute;chets nucl&eacute;aires. Cette information  peut &ecirc;tre utilis&eacute;e pour &eacute;laborer le dossier de s&ucirc;ret&eacute; qui sera pr&eacute;sent&eacute; avec la  demande de permis initiale (soit le permis autorisant la pr&eacute;paration de  l&rsquo;emplacement ou un permis combin&eacute; visant la pr&eacute;paration de l&rsquo;emplacement et  les travaux de construction). </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Programme  de caract&eacute;risation de l&rsquo;emplacement</h2>  <p>Dans le cadre du processus d&rsquo;implantation, le  demandeur de permis doit pr&eacute;parer et mettre en &oelig;uvre un programme de  caract&eacute;risation de l&rsquo;emplacement pour l&rsquo;installation du DGP propos&eacute;e. Le  programme doit fournir suffisamment d&rsquo;information pour permettre une  compr&eacute;hension g&eacute;n&eacute;rale du site dans son &eacute;tat actuel et de la fa&ccedil;on dont il devrait  &eacute;voluer sur de longues p&eacute;riodes, pr&eacute;vues dans le dossier de s&ucirc;ret&eacute; [6]. Le  programme de caract&eacute;risation de l&rsquo;emplacement doit &eacute;tablir les conditions de  base de l&rsquo;emplacement et de l&rsquo;environnement, dans leurs conditions actuelles;  favoriser la compr&eacute;hension de son &eacute;volution normale; d&eacute;gager tout &eacute;v&eacute;nement et  processus associ&eacute; au site qui pourrait perturber l&rsquo;&eacute;volution normale du syst&egrave;me  du DGP; et permettre une bonne compr&eacute;hension des effets sur la s&ucirc;ret&eacute; de toute  caract&eacute;ristique, ou de tout &eacute;v&eacute;nement ou processus concernant le syst&egrave;me du DGP <sup><a id="fnb6a-ref" href="#fnb6" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>6</a></sup>.</p>
<p>Les  donn&eacute;es recueillies lors de la caract&eacute;risation de l&rsquo;emplacement formeront la  base des mod&egrave;les descriptifs du site et des cadres g&eacute;ologiques, hydrog&eacute;ologiques,  g&eacute;ochimiques et g&eacute;om&eacute;caniques sur lesquels reposera la s&ucirc;ret&eacute; &agrave; long terme des  installations. Ces donn&eacute;es serviront de fondement pour d&eacute;tecter des effets  environnementaux possibles &agrave; court et &agrave; long terme &agrave; diverses &eacute;tapes et pour  effectuer un suivi tout au long du cycle de vie du DGP autoris&eacute; par la CCSN.  Les donn&eacute;es doivent inclure des renseignements pertinents &agrave; propos de  l&rsquo;emplacement et de la r&eacute;gion.</p>  <p>Les  donn&eacute;es de base portent notamment sur la biosph&egrave;re et la g&eacute;osph&egrave;re, et  favorisent une bonne compr&eacute;hension des conditions actuelles de l&rsquo;emplacement,  de son histoire g&eacute;ologique, et de son &eacute;volution probable au cours de  l&rsquo;&eacute;ch&eacute;ancier du dossier de s&ucirc;ret&eacute;. Ces donn&eacute;es fournissent l&rsquo;information initiale  requise pour les &eacute;valuations de la s&ucirc;ret&eacute; &agrave; l&rsquo;&eacute;tape de la conceptualisation et  pendant la conception initiale des installations. Elles serviront de fondement  &agrave; la premi&egrave;re version du dossier de s&ucirc;ret&eacute; complet et &agrave; tout programme initial  de v&eacute;rification g&eacute;oscientifique s&rsquo;appliquant &agrave; l&rsquo;emplacement, une fois  s&eacute;lectionn&eacute;, ainsi qu&rsquo;&agrave; son am&eacute;nagement (peu importe l&rsquo;&eacute;tape), s&rsquo;il est  autoris&eacute;. </p>  <p>L&rsquo;ordre  des crit&egrave;res d&eacute;crits dans les pr&eacute;sentes ne suppose pas la priorit&eacute; d&rsquo;un &eacute;l&eacute;ment  de caract&eacute;risation sur un autre; la pertinence relative de certains crit&egrave;res reposera,  dans certains cas, sur l&rsquo;emplacement m&ecirc;me. Certains crit&egrave;res fournis pour la  collecte des donn&eacute;es de base peuvent &ecirc;tre insuffisants et ne constituer que des  recommandations. D&rsquo;autres approches et techniques novatrices qui portent sur  des &eacute;l&eacute;ments additionnels de la caract&eacute;risation de l&rsquo;emplacement sont &eacute;galement  valides. </p>  <p>Dans le pr&eacute;sent document, la p&eacute;riode pr&eacute;alable &agrave;  la fermeture d&rsquo;un DGP comprend la pr&eacute;paration de l&rsquo;emplacement, la  construction, l&rsquo;exploitation et le d&eacute;classement. La p&eacute;riode post&#8209;fermeture ou &agrave;  long terme suit la fermeture d&rsquo;une installation de DGP, avec un &eacute;ch&eacute;ancier de  plusieurs dizaines de milliers d&rsquo;ann&eacute;es, ou plus <sup><a id="fnb3b-ref" href="#fnb3" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>3</a></sup>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Caract&eacute;ristiques  de l&rsquo;emplacement I&nbsp;: environnement g&eacute;ologique</h3>  <p>Les  donn&eacute;es recueillies lors de l&rsquo;&eacute;tape de l&rsquo;implantation sur les caract&eacute;ristiques  &eacute;nonc&eacute;es dans cette section forment une composante importante des &eacute;valuations  de s&ucirc;ret&eacute; &agrave; long terme et du dossier de s&ucirc;ret&eacute;. </p>  <p>Les  caract&eacute;ristiques de l&rsquo;environnement g&eacute;ologique servent &agrave; &eacute;valuer la s&ucirc;ret&eacute; &agrave;  long terme d&rsquo;un DGP. Les principaux facteurs de caract&eacute;risation de  l&rsquo;environnement g&eacute;ologique devraient inclure&nbsp;:</p>  <ul>
<li>les  caract&eacute;ristiques de confinement et d&rsquo;isolement de la roche h&ocirc;te&nbsp;:  g&eacute;ologiques, hydrog&eacute;ologiques, min&eacute;ralogiques, chimiques et m&eacute;caniques</li>
<li>la  stabilit&eacute; g&eacute;ologique pass&eacute;e et future de l&rsquo;emplacement, dont l&rsquo;orogen&egrave;se, la  sismicit&eacute;, la glaciation et l&rsquo;activit&eacute; volcanique </li>
<li>une  &eacute;tendue suffisante de la roche h&ocirc;te ad&eacute;quate &agrave; la profondeur du d&eacute;p&ocirc;t</li>
<li>les  caract&eacute;ristiques de l&rsquo;emplacement qui permettent de d&eacute;velopper un solide  dossier de s&ucirc;ret&eacute; </li>
<li>isolement  d&eacute;montr&eacute; des eaux souterraines &agrave; la profondeur du d&eacute;p&ocirc;t s&eacute;lectionn&eacute; de tout  r&eacute;seau d&rsquo;eaux souterraines en zone peu profonde </li>
<li>les  caract&eacute;ristiques favorables &agrave; la sorption, &agrave; la pr&eacute;cipitation ou &agrave; tout autre  m&eacute;canisme pour limiter le rejet de contaminants et les mouvements hors du DGP </li>
<li>faible  possibilit&eacute; d&rsquo;intrusion humaine par inadvertance </li>  </ul>  <p>Il  importe de noter que pour les futures demandes de permis en vertu de la LSRN,  des donn&eacute;es quantitatives doivent &ecirc;tre fournies en plus des descriptions  qualitatives, dans la mesure du possible. </p>  <p>Au fur et &agrave; mesure que progresse le processus  d&rsquo;implantation, d&rsquo;autres renseignements g&eacute;ologiques devront &ecirc;tre recueillis  pour v&eacute;rifier le dossier de s&ucirc;ret&eacute; initial et le mettre &agrave; jour r&eacute;guli&egrave;rement  par la suite. M&ecirc;me si le pr&eacute;sent document d&rsquo;orientation porte essentiellement  sur les activit&eacute;s de caract&eacute;risation de l&rsquo;emplacement du processus  d&rsquo;implantation, il importe de souligner que la collecte de donn&eacute;es doit se  poursuivre jusqu&rsquo;&agrave; la fermeture du DGP et, possiblement, pendant quelque temps  apr&egrave;s la fermeture, afin de v&eacute;rifier et de mettre &agrave; jour le dossier de s&ucirc;ret&eacute;  et garantir la s&ucirc;ret&eacute; &agrave; long terme du site.</p>  <p>Les  facteurs g&eacute;ologiques cl&eacute;s qui sont utilis&eacute;s pour &eacute;valuer l&rsquo;&eacute;volution &agrave; long  terme du d&eacute;p&ocirc;t sont d&eacute;montr&eacute;s par la documentation des caract&eacute;ristiques  suivantes. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.1"></div>
<h4 id="sec3-1-1">3.1.1	Cadre  g&eacute;ologique </h4>  <p>Les  caract&eacute;ristiques g&eacute;ologiques, combin&eacute;es aux barri&egrave;res artificielles et &agrave; la  conception du DGP, doivent indiquer qu&rsquo;un DGP &agrave; l&rsquo;emplacement choisi  demeurerait s&eacute;curitaire pendant toute la p&eacute;riode de r&eacute;f&eacute;rence, soit des  dizaines de milliers &agrave; des millions d&rsquo;ann&eacute;es. </p>  <p>Cette  information doit inclure&nbsp;: </p>  <ul>
<li>le  cadre tectonique </li>
<li>la  g&eacute;ologie structurale </li>
<li>la  stratigraphie </li>
<li>le  type de roche h&ocirc;te choisie, sa pr&eacute;visibilit&eacute;, son &eacute;tendue </li>
<li>les  caract&eacute;ristiques de fracture&nbsp;: fr&eacute;quence, orientation, min&eacute;ralogie,  espacement </li>
<li>l&rsquo;historique  des cycles glaciaires </li>
<li>la  p&eacute;trologie </li>
<li>les  propri&eacute;t&eacute;s g&eacute;om&eacute;caniques </li>
<li>le  potentiel de ressources naturelles </li>
</ul>  	<p>Le  potentiel de ressources naturelles doit &ecirc;tre &eacute;valu&eacute;, pr&eacute;f&eacute;rablement sur des  bases quantitatives, et inclure des donn&eacute;es historiques et courantes. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.2"></div>
<h4 id="sec3-1-2">3.1.2	Cadre  hydrog&eacute;ologique </h4>  <p>Comme  pour le cadre g&eacute;ologique, les caract&eacute;ristiques du cadre hydrog&eacute;ologique doivent  montrer que l&rsquo;emplacement est ad&eacute;quat. L&rsquo;information doit inclure les donn&eacute;es  suivantes&nbsp;: </p>  <ul>
<li>d&eacute;finition  des unit&eacute;s ou du r&eacute;gime hydrog&eacute;ologiques r&eacute;gionaux </li>
<li>conditions  d&rsquo;&eacute;coulement des eaux souterraines r&eacute;gionales et propres &agrave; l&rsquo;emplacement </li>
<li>d&eacute;bit </li>
<li>orientation </li>
<li>hydrog&eacute;ologie  des grandes unit&eacute;s rocheuses </li>
<li>porosit&eacute; </li>
<li>conductivit&eacute;  hydraulique </li>
<li>charges  et gradients hydrauliques </li>
<li>emplacement  des principales zones d&rsquo;utilisation d&rsquo;eau, actuelles et futures (p. ex., puits  d&rsquo;eaux souterraines) </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.3"></div>
<h4 id="sec3-1-3">3.1.3	G&eacute;ochimie</h4>  <p>Jumel&eacute;es aux conditions g&eacute;ologiques et  hydrog&eacute;ologiques, les conditions g&eacute;ochimiques fournissent une information  essentielle pour pr&eacute;dire la fa&ccedil;on dont les contaminants pourraient migrer d&rsquo;un  DGP vers la biosph&egrave;re. Il faut accorder une attention particuli&egrave;re aux  propri&eacute;t&eacute;s g&eacute;ochimiques qui peuvent avoir une incidence sur la migration de  radionucl&eacute;ides vers les eaux souterraines.</p>  	<p>L&rsquo;information  doit inclure les &eacute;l&eacute;ments suivants&nbsp;: </p>  <ul>
<li>min&eacute;ralogie,  y compris une &eacute;tude p&eacute;trographique </li>
<li>g&eacute;ochimie  des eaux souterraines/eaux interstitielles </li>
<li>taux  de diffusion effectifs des radionucl&eacute;ides </li>
<li>solubilit&eacute;,  sp&eacute;ciation et retardement des radionucl&eacute;ides </li>
<li>corrosivit&eacute;  des eaux souterraines sur les barri&egrave;res artificielles </li>
<li>potentiel  de production de gaz </li>
<li>interaction  eau-roche </li>
</ul>
<p>Tout  processus qui montre un potentiel de migration des radionucl&eacute;ides ou de  retardement des installations de DGP vers l&rsquo;environnement g&eacute;ologique doit &ecirc;tre  document&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.4"></div>
<h4 id="sec3-1-4">3.1.4	Stabilit&eacute;  g&eacute;ologique</h4>  <p>L&rsquo;emplacement  doit &ecirc;tre situ&eacute; dans une r&eacute;gion stable sur le plan sismique, avec un faible potentiel  d&rsquo;&eacute;v&eacute;nements volcaniques ou sismiques. Il faut montrer que tout &eacute;v&eacute;nement  g&eacute;ologique r&eacute;aliste pouvant survenir lors de la p&eacute;riode d&rsquo;&eacute;valuation n&rsquo;aurait  aucune incidence sur la capacit&eacute; d&rsquo;isolement et de confinement du DGP. </p>  <p>L&rsquo;information  &agrave; recueillir sur l&rsquo;emplacement et la r&eacute;gion comprend&nbsp;: </p>  <ul>
<li>des  preuves d&rsquo;activit&eacute;s tectoniques r&eacute;centes ou historiques (n&eacute;otectonique) &ndash; p.  ex., information sur des failles et des mouvements de l&rsquo;&egrave;re quaternaire, la  liqu&eacute;faction du sol et le volcanisme </li>
<li>les  ant&eacute;c&eacute;dents de sismicit&eacute; &agrave; l&rsquo;emplacement, documentation des s&eacute;ismes  historiques, leur &eacute;picentre, magnitude et intensit&eacute;, et leur r&eacute;currence (lien  avec les donn&eacute;es tectoniques de la r&eacute;gion et la g&eacute;ologie structurale) </li>
<li>la  r&eacute;sistance du site aux futurs &eacute;v&eacute;nements glaciaires, pendant la p&eacute;riode vis&eacute;e  par le dossier de s&ucirc;ret&eacute;, concernant les propri&eacute;t&eacute;s hydrog&eacute;ologiques,  g&eacute;ochimiques et g&eacute;om&eacute;caniques des roches et l&rsquo;historique de glaciation </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.5"></div>
<h4 id="sec3-1-5">3.1.5	Caract&eacute;ristiques  g&eacute;om&eacute;caniques</h4>  <p>Les  caract&eacute;ristiques g&eacute;om&eacute;caniques devraient &ecirc;tre recueillies et utilis&eacute;es pour  &eacute;valuer la stabilit&eacute; pr&eacute;alable &agrave; la fermeture et &agrave; long terme des excavations  souterraines, ainsi que l&rsquo;&eacute;volution de la zone de dommages autour de ces  excavations. </p>  <p>Les  caract&eacute;ristiques g&eacute;om&eacute;caniques comprennent&nbsp;: </p>  <ul>
<li>la  magnitude et l&rsquo;orientation du stress <em>in situ</em></li>
<li>les  propri&eacute;t&eacute;s contrainte&#8209;d&eacute;formation&#8209;force de la roche intacte, des fractures et  de la masse rocheuse </li>
<li>l&rsquo;influence  du temps, de la temp&eacute;rature, de l&rsquo;anisotropie, de la pression du fluide  interstitiel et d&rsquo;autres facteurs pertinents sur les propri&eacute;t&eacute;s  contrainte-d&eacute;formation-force </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Caract&eacute;ristiques  de l&rsquo;emplacement&nbsp;II&nbsp;: environnement en surface</h3>  <p>Des  donn&eacute;es environnementales de base sont requises pour s&rsquo;assurer que  l&rsquo;environnement sera ad&eacute;quatement prot&eacute;g&eacute; et que les effets n&eacute;gatifs possibles  seront att&eacute;nu&eacute;s. Par exemple, ces donn&eacute;es &eacute;tayeront l&rsquo;&eacute;valuation des  interactions possibles avec l&rsquo;environnement et leurs effets connexes  potentiels. Les processus en surface, &agrave; l&rsquo;emplacement, doivent &ecirc;tre assez bien  caract&eacute;ris&eacute;s pour garantir que des &eacute;v&eacute;nements naturels, comme les inondations,  les glissements de terrain et l&rsquo;&eacute;rosion, n&rsquo;auront aucune incidence sur le  fonctionnement s&eacute;curitaire du syst&egrave;me de gestion des d&eacute;chets radioactifs  pendant la p&eacute;riode pr&eacute;alable &agrave; la fermeture du DGP. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.1"></div>
<h4 id="sec3-2-1">3.2.1	Climat </h4>
<p>Les  conditions climatiques &agrave; l&rsquo;emplacement doivent &ecirc;tre caract&eacute;ris&eacute;es pour que l&rsquo;on  puisse d&eacute;terminer ad&eacute;quatement les effets de conditions m&eacute;t&eacute;orologiques  extr&ecirc;mes et les int&eacute;grer &agrave; la conception du DGP. Les conditions m&eacute;t&eacute;orologiques  doivent &ecirc;tre mesur&eacute;es &agrave; l&rsquo;emplacement et aux stations m&eacute;t&eacute;orologiques &agrave;  proximit&eacute;, lorsque cela est possible, et servir &agrave; pr&eacute;dire les effets possibles  de pr&eacute;cipitations extr&ecirc;mes sur les syst&egrave;mes hydrologiques et hydrog&eacute;ologiques &agrave;  l&rsquo;emplacement. Ces donn&eacute;es serviront &eacute;galement de donn&eacute;es de base pour &eacute;valuer  le transport des rejets dans l&rsquo;atmosph&egrave;re lors de la p&eacute;riode pr&eacute;alable &agrave; la  fermeture du DGP. Les donn&eacute;es m&eacute;t&eacute;orologiques minimales (soit le nombre  d&rsquo;ann&eacute;es de donn&eacute;es propres &agrave; l&rsquo;emplacement) fournies doivent &ecirc;tre justifi&eacute;es  par le demandeur, qui devra &eacute;tablir leur ad&eacute;quation avec le type de projet et  l&rsquo;emplacement choisi. Les donn&eacute;es climatiques normales (30 ann&eacute;es de donn&eacute;es  climatiques) doivent &eacute;galement &ecirc;tre fournies.</p>  <p>Les  renseignements pr&eacute;cis &agrave; recueillir comprennent&nbsp;: </p>  <ul>
<li>l&rsquo;historique  climatique local et r&eacute;gional et les tendances futures r&eacute;gionales et &agrave; plus  vaste &eacute;chelle</li>
<li>les  donn&eacute;es m&eacute;t&eacute;orologiques, qui doivent &ecirc;tre recueillies &agrave; l&rsquo;emplacement, &agrave;  l&rsquo;&eacute;chelle locale et r&eacute;gionale, afin de pr&eacute;dire ad&eacute;quatement les conditions  m&eacute;t&eacute;orologiques futures qui pourraient se manifester pendant la dur&eacute;e de vie du  projet </li>
<li>les  caract&eacute;ristiques des pr&eacute;cipitations r&eacute;gionales et locales (pr&eacute;cipitations et  neige) </li>
<li>les  donn&eacute;es sur les extr&ecirc;mes et les moyennes de temp&eacute;rature, de pr&eacute;cipitations, de  neige, la vitesse des vents et tout autre ph&eacute;nom&egrave;ne naturel pertinent &agrave;  l&rsquo;emplacement </li>
<li>les  caract&eacute;ristiques de dispersion atmosph&eacute;rique et &eacute;olienne au regard des rejets  possibles </li>
<li>la  probabilit&eacute; de ph&eacute;nom&egrave;nes climatiques extr&ecirc;mes, comme des ouragans, tornades et  fortes temp&ecirc;tes hivernales </li>
<li>le  couvert de neige et gel au sol </li>
<li>l&rsquo;&eacute;vapotranspiration&nbsp;:  &eacute;vaporation et transpiration des sols, des plans d&rsquo;eau et des plantes </li>
<li>la  dynamique des glaces sur les lacs et cours d&rsquo;eau</li>
<li>la  qualit&eacute; de l&rsquo;air </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.2"></div>
<h4 id="sec3-2-2">3.2.2	Environnement  aquatique et terrestre </h4>  <p>La  caract&eacute;risation de l&rsquo;emplacement devrait contribuer &agrave; l&rsquo;identification des  composantes valoris&eacute;es de l&rsquo;&eacute;cosyst&egrave;me qui serviront de param&egrave;tres ultimes des  &eacute;valuations environnementales. Il faudra &eacute;galement &eacute;tablir des param&egrave;tres  ultimes de mesure appropri&eacute;s. Si possible, on s&rsquo;attardera &agrave; la documentation  d&rsquo;attributs sp&eacute;cifiques et &agrave; la justification de leur s&eacute;lection pour  l&rsquo;&eacute;valuation. Les composantes de l&rsquo;&eacute;cosyst&egrave;me doivent &ecirc;tre suffisamment  d&eacute;taill&eacute;es pour permettre de mesurer leur importance, leur interaction possible  avec le projet et le potentiel d&rsquo;effets environnementaux d&eacute;coulant des  activit&eacute;s du projet. Pour entreprendre ce travail de caract&eacute;risation, il faudra  tenir compte des aspects radiologiques et non radiologiques d&rsquo;un support donn&eacute;  (p. ex., qualit&eacute; du sol).</p>  <p>Les  &eacute;l&eacute;ments de l&rsquo;&eacute;cologie aquatique qui devraient &ecirc;tre caract&eacute;ris&eacute;s dans la zone  d&rsquo;int&eacute;r&ecirc;t comprennent&nbsp;: </p>  <ul>
<li>la  qualit&eacute; des eaux de surface </li>
<li>la  qualit&eacute; des s&eacute;diments </li>
<li>les  communaut&eacute;s phytoplanctoniques </li>
<li>les  macrophytes aquatiques </li>
<li>les  communaut&eacute;s zooplanctoniques </li>
<li>les  macroinvert&eacute;br&eacute;s benthiques </li>
<li>le  poisson </li>
<li>l&rsquo;habitat  du poisson </li>
<li>les  esp&egrave;ces d&eacute;sign&eacute;es &laquo;&nbsp;en p&eacute;ril&nbsp;&raquo;</li></ul>   <p>Les &eacute;l&eacute;ments de l&rsquo;&eacute;cologie terrestre  qui devraient &ecirc;tre caract&eacute;ris&eacute;s dans la zone d&rsquo;int&eacute;r&ecirc;t comprennent&nbsp;:</p>  <ul>
<li>la  qualit&eacute; du sol </li>
<li>la  v&eacute;g&eacute;tation </li>
<li>la  faune </li>
<li>l&rsquo;habitat  terrestre </li>
<li>les  esp&egrave;ces d&eacute;sign&eacute;es &laquo;&nbsp;en p&eacute;ril&nbsp;&raquo;</li>  </ul>  <p>Les  aspects et le niveau de d&eacute;tail des descriptions de chacune des composantes  ci-dessus doivent &ecirc;tre proportionnels au potentiel d&rsquo;interactions.&nbsp; </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.3"></div>
<h4 id="sec3-2-3">3.2.3	Topographie,  hydrologie et inondations </h4>  <p>Les  r&eacute;seaux hydrographiques de la r&eacute;gion doivent &ecirc;tre &eacute;valu&eacute;s pour mesurer la  capacit&eacute; de confinement du site pendant la p&eacute;riode pr&eacute;alable &agrave; la fermeture du  DGP. Le r&eacute;seau de ruisseaux, de lacs, d&rsquo;&eacute;tangs et de terres humides &agrave; proximit&eacute;  de l&rsquo;emplacement s&eacute;lectionn&eacute; doit &ecirc;tre caract&eacute;ris&eacute; pour &eacute;valuer le potentiel  d&rsquo;inondation, d&rsquo;&eacute;rosion, de transport de s&eacute;diments, et les r&eacute;percussions connexes. </p>  <p>L&rsquo;information  &agrave; recueillir et &agrave; &eacute;valuer comprend&nbsp;:&nbsp; </p>  <ul>
<li>la  topographie du site et ses caract&eacute;ristiques hydrographiques, notamment les  limites des bassins hydrographiques r&eacute;cepteurs (&eacute;tendue, forme) </li>
<li>la  magnitude et la fr&eacute;quence des inondations dans la r&eacute;gion </li>
<li>l&rsquo;emplacement  des plans d&rsquo;eau en surface </li>
<li>le  gradient du terrain en surface</li>
<li>la  densit&eacute; du r&eacute;seau hydrographique </li>
<li>la  pente des principaux cours d&rsquo;eau </li>
<li>l&rsquo;identification  et la caract&eacute;risation des zones d&rsquo;alimentation et d&rsquo;&eacute;vacuation des eaux  souterraines (y compris les plans d&rsquo;eau r&eacute;cepteurs) </li>
<li>le  bilan hydrique des bassins hydrographiques </li>
<li>les  caract&eacute;ristiques r&eacute;gionales et locales de la nappe aquif&egrave;re, et leurs caract&egrave;res  saisonniers </li>  </ul>  <p>Pour les  emplacements situ&eacute;s le long d&rsquo;un lac ou en bord de mer, il faut tenir compte du  potentiel d&rsquo;inondation r&eacute;sultant de tsunamis, de seiches ou de vagues sismiques  oc&eacute;aniques. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.4"></div>
<h4 id="sec3-2-4">3.2.4	Caract&eacute;risation  de la g&eacute;omorphologie </h4>  <p>La g&eacute;omorphologie existante d&rsquo;un emplacement permet  de comprendre l&rsquo;historique g&eacute;ologique quaternaire d&rsquo;une r&eacute;gion, une information  pertinente pour l&rsquo;implantation d&rsquo;un DGP. Elle contribue &eacute;galement &agrave; la  caract&eacute;risation g&eacute;otechnique et comprend&nbsp;:</p>  <ul>
<li>la  distribution des formes de terrain et l&rsquo;&eacute;paisseur de la mati&egrave;re en surface  (profondeur jusqu&rsquo;au substrat rocheux) </li>
<li>la  documentation concernant les d&eacute;p&ocirc;ts de surface et toute ressource en agr&eacute;gats,  existante ou potentielle </li>
<li>l&rsquo;historique  g&eacute;ologique du quaternaire </li>
</ul>
<p>Cette information peut &ecirc;tre obtenue au moyen&nbsp;: </p>  <ul>
<li>de  la cartographie topologique </li>
<li>de  l&rsquo;interpr&eacute;tation de photographies a&eacute;riennes </li>
<li>d&rsquo;&eacute;chantillons  du sol afin d&rsquo;&eacute;valuer les processus de transport et de d&eacute;p&ocirc;t des sols. </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.5"></div>
<h4 id="sec3-2-5">3.2.5 Caract&eacute;risation  g&eacute;otechnique des d&eacute;p&ocirc;ts de surface</h4>  <p>La  caract&eacute;risation g&eacute;otechnique des d&eacute;p&ocirc;ts de surface est importante, puisque  l&rsquo;int&eacute;grit&eacute; de l&rsquo;infrastructure de surface pourrait &ecirc;tre affect&eacute;e par les  propri&eacute;t&eacute;s g&eacute;otechniques des mat&eacute;riaux des morts&#8209;terrains pendant la p&eacute;riode  pr&eacute;alable &agrave; la fermeture du DGP. On accordera une attention particuli&egrave;re &agrave; la  stabilit&eacute; de la pente, aux activit&eacute;s d&rsquo;excavation, &agrave; la stabilit&eacute; physique et &agrave;  la d&eacute;gradation des stocks de d&eacute;chets, &agrave; la stabilit&eacute; des fondations de l&rsquo;installation,  &agrave; la qualit&eacute; des barri&egrave;res construites au moyen de mat&eacute;riaux des morts&#8209;terrains  ou de tout autre mat&eacute;riel, au tassement des d&eacute;chets, au tassement des  protections de l&rsquo;installation, ou aux dommages caus&eacute;s &agrave; ces installations, ou &agrave;  tout autre probl&egrave;me qui pourrait entra&icirc;ner une infiltration d&rsquo;eau et la  migration des contaminants. </p>  <p>Les  &eacute;tudes g&eacute;otechniques devraient inclure un &eacute;chantillonnage g&eacute;otechnique  standard, des investigations sur le terrain et des &eacute;tudes en laboratoire visant  &agrave; &eacute;valuer&nbsp;: </p>  <ul>
<li>les  occurrences ant&eacute;rieures de glissements de terrain et d&rsquo;autres cas d&rsquo;instabilit&eacute;  des sols dans la r&eacute;gion </li>
<li>les  propri&eacute;t&eacute;s du sol (granulom&eacute;trie, plasticit&eacute;, dispersion, propri&eacute;t&eacute;s coh&eacute;sives,  etc.) </li>
<li>les  param&egrave;tres de r&eacute;sistance au cisaillement </li>
<li>la  capacit&eacute; portante du mat&eacute;riel de fondation </li>
<li>le  potentiel de liqu&eacute;faction du granulat </li>
<li>les  propri&eacute;t&eacute;s de compactage </li>
<li>la  conductivit&eacute; hydraulique </li>
<li>d&rsquo;autres  propri&eacute;t&eacute;s propres au site ou &agrave; la conception de l&rsquo;installation </li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Activit&eacute;s  humaines et utilisation du territoire</h2>  <p>Le processus d&rsquo;implantation permet de recueillir  de l&rsquo;information qui pourra faire partie du dossier de s&ucirc;ret&eacute; d&rsquo;un DGP.  L&rsquo;information sur les activit&eacute;s humaines pass&eacute;es, actuelles et futures &agrave;  l&rsquo;emplacement ou &agrave; proximit&eacute; du site doit &ecirc;tre recueillie et les r&eacute;percussions  possibles de ces activit&eacute;s doivent &ecirc;tre &eacute;valu&eacute;es.</p>
<p>Pour  limiter les effets n&eacute;gatifs de l&rsquo;activit&eacute; humaine et de l&rsquo;utilisation du  territoire, il faut tenir compte de ce qui suit&nbsp;: </p>  <ul>
<li>les  ressources ayant une valeur &eacute;conomique (p. ex., puits d&rsquo;eau souterraine,  minerais) </li>
<li>les  activit&eacute;s d&rsquo;exploitation du territoire conflictuelles, connues et potentielles,  &agrave; l&rsquo;emplacement </li>
<li>les  activit&eacute;s mini&egrave;res ou d&rsquo;exploration mini&egrave;re en cours et historiques &ndash; forages,  puits et autres caract&eacute;ristiques qui pourraient entra&icirc;ner de l&rsquo;instabilit&eacute; ou  ouvrir des voies de migration pour les radionucl&eacute;ides. </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Acquisition  de donn&eacute;es et activit&eacute;s de v&eacute;rification  </h2>  	<p>Le  demandeur de permis doit montrer dans sa demande que les r&eacute;sultats des  activit&eacute;s de caract&eacute;risation du site sont exacts, complets, reproductibles,  tra&ccedil;ables et v&eacute;rifiables.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1">5.1	Syst&egrave;me  de gestion </h3>  	<p>En vertu de l&rsquo;alin&eacute;a&nbsp;3(1)k) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la  r&eacute;glementation nucl&eacute;aires</em>, le demandeur d&rsquo;un permis doit d&eacute;crire sa  structure de gestion, y compris la r&eacute;partition interne des fonctions, des  responsabilit&eacute;s et des pouvoirs. L&rsquo;alin&eacute;a&nbsp;3d) du <em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em> pr&eacute;cise  que le demandeur doit proposer le syst&egrave;me de gestion pour l&rsquo;activit&eacute; vis&eacute;e, y  compris les mesures qui seront prises pour promouvoir une culture de s&ucirc;ret&eacute; et  l&rsquo;appuyer. Le caract&egrave;re ad&eacute;quat du programme d&rsquo;assurance de la qualit&eacute; (syst&egrave;me  de gestion) d&rsquo;un permis est &eacute;valu&eacute; par le personnel de la CCSN. En instaurant  un syst&egrave;me de gestion, l&rsquo;organisation fait la preuve de sa conformit&eacute;, s&rsquo;assure  de se conformer aux exigences de fa&ccedil;on uniforme, se fixe des priorit&eacute;s et  am&eacute;liore continuellement son fonctionnement.&nbsp; </p>
<p>Le demandeur de permis doit &eacute;laborer et mettre  en &oelig;uvre un syst&egrave;me de gestion pour la caract&eacute;risation de l&rsquo;emplacement,  conform&eacute;ment aux exigences pr&eacute;cis&eacute;es dans la norme du Groupe CSA&nbsp;N286-12,<em> Exigences relatives au syst&egrave;me de gestion  des installations nucl&eacute;aires </em><sup><a id="fnb7a-ref" href="#fnb7" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>7</a></sup>. </p>
<p>Les sujets abord&eacute;s dans la  documentation encadrant le syst&egrave;me de gestion devraient inclure les exigences  g&eacute;n&eacute;rales et sp&eacute;cifiques li&eacute;es aux processus et pratiques de caract&eacute;risation de  l&rsquo;emplacement. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2">5.2	Programme  de gestion des donn&eacute;es</h3>  <p>L&rsquo;int&eacute;grit&eacute;,  l&rsquo;exactitude et l&rsquo;exhaustivit&eacute; de l&rsquo;information et des donn&eacute;es g&eacute;n&eacute;r&eacute;es &agrave;  l&rsquo;issue des activit&eacute;s de caract&eacute;risation du site sont de la plus haute  importance. Le demandeur de permis doit garantir l&rsquo;uniformit&eacute; et la qualit&eacute; des  donn&eacute;es utilis&eacute;es pour &eacute;laborer le dossier de s&ucirc;ret&eacute; qui &eacute;taye toute demande  officielle de permis. </p>  <p>Le demandeur de permis doit instaurer des  programmes d&rsquo;assurance et de contr&ocirc;le de la qualit&eacute; pour garantir la qualit&eacute;  des donn&eacute;es et leur tra&ccedil;abilit&eacute;. Les programmes doivent viser la production de preuves  documentaires servant &agrave; montrer que le niveau de qualit&eacute; requis a &eacute;t&eacute; atteint.  Si possible, les donn&eacute;es devraient &ecirc;tre recueillies, pr&eacute;sent&eacute;es, enregistr&eacute;es  et archiv&eacute;es selon des protocoles normalis&eacute;s et contr&ocirc;l&eacute;s. Les donn&eacute;es doivent  &ecirc;tre compil&eacute;es dans un format qui facilite leur examen, leur comparaison, la  d&eacute;tection des lacunes et un examen ind&eacute;pendant. Pour chaque composante de la  caract&eacute;risation de l&rsquo;emplacement, la documentation doit clairement indiquer les  propri&eacute;t&eacute;s &eacute;tudi&eacute;es, les m&eacute;thodes de collecte et d&rsquo;analyse des donn&eacute;es  employ&eacute;es, les r&eacute;sultats et les hypoth&egrave;ses et incertitudes d&eacute;gag&eacute;es<em>.</em></p>
<p>Le  processus d&rsquo;&eacute;valuation des donn&eacute;es et la d&eacute;termination des param&egrave;tres li&eacute;s &agrave;  l&rsquo;emplacement englobent des analyses et des jugements techniques et de g&eacute;nie  qui exigent une vaste exp&eacute;rience et des connaissances approfondies. Dans de  nombreux cas, les param&egrave;tres et les analyses peuvent ne pas se pr&ecirc;ter eux&#8209;m&ecirc;mes  &agrave; une v&eacute;rification directe par des inspections, des essais ou autres techniques  qu&rsquo;il est possible de d&eacute;finir et de contr&ocirc;ler de fa&ccedil;on pr&eacute;cise. Par cons&eacute;quent,  ces &eacute;valuations doivent &ecirc;tre examin&eacute;es et v&eacute;rifi&eacute;es par des tiers ou des  groupes ind&eacute;pendants (p.&nbsp;ex.,&nbsp;examen par les pairs) distincts de ceux  qui ont ex&eacute;cut&eacute; le travail initial. Les examens doivent &ecirc;tre effectu&eacute;s &agrave;  diff&eacute;rentes &eacute;tapes du processus d&rsquo;implantation, conform&eacute;ment aux instructions  et proc&eacute;dures de travail.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3">5.3	Proc&eacute;dures  d&rsquo;&eacute;chantillonnage et d&rsquo;essai</h3>  <p>La caract&eacute;risation du site est n&eacute;cessaire pour  confirmer, pr&eacute;ciser et ajuster les interpr&eacute;tations initiales fond&eacute;es sur des  donn&eacute;es initiales obtenues aux premi&egrave;res &eacute;tapes de l&rsquo;implantation. Les  activit&eacute;s suivantes (le cas &eacute;ch&eacute;ant) peuvent &eacute;galement servir &agrave; obtenir les  donn&eacute;es n&eacute;cessaires pour guider les phases de d&eacute;veloppement futures et les  mises &agrave; jour des &eacute;valuations et du dossier de s&ucirc;ret&eacute;&nbsp;: </p>  <ul>
<li>compilation  de donn&eacute;es g&eacute;oscientifiques </li>
<li>lev&eacute;s  g&eacute;ophysiques a&eacute;roport&eacute;s (p. ex., magn&eacute;tiques, gravim&eacute;triques) </li>
<li>cartographie  g&eacute;ologique </li>
<li>essais  des propri&eacute;t&eacute;s g&eacute;ochimiques de la roche </li>
<li>forage  de puits </li>
</ul>  	<p>La  caract&eacute;risation de l&rsquo;emplacement comprend la collecte de donn&eacute;es fiables sur  les conditions souterraines, donn&eacute;es qui ne peuvent &ecirc;tre obtenues qu&rsquo;en  effectuant divers essais entre les puits et dans les puits for&eacute;s sp&eacute;cifiquement  &agrave; cette fin. Par cons&eacute;quent, le programme de caract&eacute;risation de l&rsquo;emplacement  doit d&eacute;crire ce qui suit&nbsp;:</p>  <ul>
<li>nombre,  emplacement et type (p. ex., foreuse &agrave; diamant ou &agrave; percussion d&rsquo;air) des puits  &agrave; forer &agrave; l&rsquo;emplacement </li>
<li>fonction  de chaque puits et orientation, longueur et diam&egrave;tre pr&eacute;vus </li>
<li>types  de lubrifiants et de traceurs fluides de forage qui seront employ&eacute;s </li>
<li>types  de contr&ocirc;les de d&eacute;viation des puits afin d&rsquo;en diriger l&rsquo;orientation, et  fr&eacute;quence </li>
<li>principales  sp&eacute;cifications de r&eacute;cup&eacute;ration, intervalles d&rsquo;&eacute;chantillonnage et principales  proc&eacute;dures d&rsquo;entreposage et d&rsquo;enregistrement des donn&eacute;es, ou proc&eacute;dures  d&rsquo;entreposage, d&rsquo;enregistrement des donn&eacute;es et d&rsquo;&eacute;chantillonnage des &eacute;clats </li>
<li>nombre  et type d&rsquo;essais physiques &agrave; effectuer sur les principaux &eacute;chantillons ou sur  les &eacute;clats </li>
<li>horaire  de forage et temps d&rsquo;arr&ecirc;t pour effectuer les tests </li>
<li>types  d&rsquo;essais hydrog&eacute;ologiques (essais en cours de forage, essais par impulsion,  essais par traceurs, etc.) &agrave; effectuer dans le cadre du programme de forage </li>
<li>&eacute;chantillons  d&rsquo;eaux souterraines &agrave; recueillir lors du forage et types d&rsquo;analyses &agrave; effectuer </li>
<li>proc&eacute;dures  d&rsquo;ex&eacute;cution et de conception du puits (&eacute;vacuation, coffrage et scellage) </li>
<li>proc&eacute;dures  de scellage du puits qui seront suivies si le puits doit &ecirc;tre abandonn&eacute;</li>
</ul>
<p>On aura  recours &agrave; un programme de contr&ocirc;le et d&rsquo;assurance de la qualit&eacute; des puits pour  s&rsquo;assurer que les objectifs du programme de forage sont atteints et contr&ocirc;l&eacute;s,  ce qui comprend&nbsp;: </p>  <ul>
<li>la  tenue d&rsquo;un journal de forage par un g&eacute;ologue qualifi&eacute;, sur le lieu du forage;  ce dernier consignera les activit&eacute;s de forage et autres activit&eacute;s connexes,  comme le nettoyage des tiges de forage avant le d&eacute;but des travaux,  l&rsquo;installation de coffrage de surface et les proc&eacute;dures d&rsquo;injection de coulis,  le taux de p&eacute;n&eacute;tration de forage, la r&eacute;cup&eacute;ration de mat&eacute;riaux, les intervalles  de production d&rsquo;eau et leur d&eacute;bit, la quantit&eacute; de fluide de forage ajout&eacute; et  les zones de pertes d&rsquo;eau, les mesures de concentration des traceurs dans le  fluide de forage et l&rsquo;eau de retour, les ajouts de lubrifiants de forage, le  d&eacute;veloppement du puits par rapport &agrave; l&rsquo;enl&egrave;vement des d&eacute;blais de forage  r&eacute;siduels et du fluide de forage, et l&rsquo;information sur les &eacute;chantillons de  mat&eacute;riaux ou d&rsquo;&eacute;clats </li>
<li>la  prise en note de renseignements sur le niveau d&rsquo;eau &laquo;&nbsp;statique&nbsp;&raquo; lors  des arr&ecirc;ts de forage et la composition chimique des eaux souterraines ramen&eacute;es  &agrave; la surface lors du forage des puits par percussion d&rsquo;air, et les proc&eacute;dures  suivies pour recueillir et conserver ces &eacute;chantillons d&rsquo;eau</li>
<li>la  r&eacute;alisation de lev&eacute;s des puits post-forage pour confirmer que le puits respecte  la profondeur, le diam&egrave;tre et l&rsquo;orientation &eacute;tablis </li>
<li>la  cr&eacute;ation d&rsquo;un dossier &eacute;lectronique qui documente toutes les activit&eacute;s de forage  et toutes les mesures </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4">5.4	Int&eacute;gration  et interpr&eacute;tation</h3>  <p>La  caract&eacute;risation du site comprend la quantification et l&#39;interpr&eacute;tation d&#39;un  grand nombre de composantes physiques et environnementales qui interagissent  les unes avec les autres &agrave; divers degr&eacute;s. Il en r&eacute;sulte plusieurs syst&egrave;mes de  composantes li&eacute;es ou en interaction plus ou moins ind&eacute;pendants. Les composantes  de chaque syst&egrave;me sont g&eacute;n&eacute;ralement interpr&eacute;t&eacute;es pour d&eacute;velopper un mod&egrave;le du  site pour ce syst&egrave;me. Par exemple, la distribution stratigraphique,  p&eacute;trologique et spatiale du stress <em>in  situ</em> peut &ecirc;tre interpr&eacute;t&eacute;e pour donner lieu &agrave; un mod&egrave;le conceptuel de la  g&eacute;ologie structurelle actuelle et historique du site, alors que la distribution  min&eacute;ralogique de la matrice rocheuse et de l&#39;obturation des fractures peut &ecirc;tre  interpr&eacute;t&eacute;e pour g&eacute;n&eacute;rer un mod&egrave;le distinct de l&#39;&eacute;volution g&eacute;ologique du site.&nbsp; </p>  <p>Chaque  discipline des sciences et du g&eacute;nie peut contribuer &agrave; un ou plusieurs mod&egrave;les  de site ind&eacute;pendants. Cela s&#39;av&egrave;re particuli&egrave;rement pour la g&eacute;ochimie, o&ugrave;  plusieurs syst&egrave;mes chimiques ind&eacute;pendants coexistent. Comme tous ces syst&egrave;mes  chimiques et physiques coexistent sur le m&ecirc;me site, les mod&egrave;les ind&eacute;pendants  d&eacute;riv&eacute;s de chacun de ces syst&egrave;mes doivent &ecirc;tre coh&eacute;rents. Par exemple, il ne  doit y avoir aucune incoh&eacute;rence entre les mod&egrave;les &eacute;volutifs fond&eacute;s sur la min&eacute;ralisation  et les m&eacute;thodes de datation. </p>  <p>Les diff&eacute;rents mod&egrave;les de site d&eacute;coulant de  diff&eacute;rents lev&eacute;s et des diverses disciplines doivent alors &ecirc;tre int&eacute;gr&eacute;s dans  un mod&egrave;le unique coh&eacute;rent de l&#39;historique g&eacute;ologique et hydrog&eacute;ologique du  site, de ses conditions actuelles et de son &eacute;volution pr&eacute;vue (sans  perturbation). Le mod&egrave;le des conditions actuelles d&#39;un site fournit les  renseignements n&eacute;cessaires au travail de conception. </p>  <p>L&#39;historique du site montre comment le site a  r&eacute;agi aux perturbations ant&eacute;rieures. En extrapolant l&#39;historique du site aux  conditions actuelles, on obtient un mod&egrave;le de la fa&ccedil;on dont le site devrait  &eacute;voluer s&#39;il n&#39;est pas perturb&eacute;. L&#39;application des estimations des  perturbations impos&eacute;es &agrave; l&#39;installation pr&eacute;vue et de la r&eacute;action du site aux  perturbations ant&eacute;rieures au mod&egrave;le &eacute;volutif du site sans perturbations devrait  donner lieu &agrave; un mod&egrave;le de l&#39;&eacute;volution anticip&eacute;e du site et de son  installation.</p>
<p>L&#39;int&eacute;gration  et l&#39;interpr&eacute;tation des caract&eacute;ristiques du site sont document&eacute;es dans un rapport  de g&eacute;osynth&egrave;se, qui constitue un document d&#39;accompagnement important pour  &eacute;tayer le dossier de s&ucirc;ret&eacute;. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. Installations  pour les activit&eacute;s de v&eacute;rification et caract&eacute;risation</h2>  <p>Une  installation de recherche souterraine (IRS) est une installation g&eacute;n&eacute;ralement  construite en profondeur pour constituer un environnement permettant de  recueillir de l&#39;information et de favoriser la formation. Elle sert &agrave; d&eacute;finir  la composition g&eacute;ologique, &agrave; mener des exp&eacute;riences, &agrave; tester les &eacute;quipements et  les concepts, et &agrave; d&eacute;montrer la faisabilit&eacute; d&#39;un DGP.</p>  <p>De nombreuses caract&eacute;ristiques g&eacute;oscientifiques  ne peuvent &ecirc;tre obtenues au moyen des activit&eacute;s men&eacute;es en surface. Par  cons&eacute;quent, les activit&eacute;s de v&eacute;rification et de caract&eacute;risation (p.&nbsp;ex.,&nbsp;excavation  et recherche g&eacute;n&eacute;ralement effectu&eacute;e dans une installation de recherche  souterraine) constituent une pratique exemplaire d&#39;autres pays en ce qui a  trait aux DGP destin&eacute;s aux d&eacute;chets radioactifs de haute activit&eacute;, y compris le  combustible us&eacute; <sup><a  id="fnb8a-ref" href="#fnb8" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>8</a></sup>. Ces  activit&eacute;s att&eacute;nuent les incertitudes et, par cons&eacute;quent, renforcent le dossier  de s&ucirc;ret&eacute;.&nbsp; </p>  <p>L&#39;am&eacute;nagement  d&#39;une installation de recherche souterraine est un processus qui prend  &eacute;norm&eacute;ment de temps et il peut s&#39;&eacute;couler une longue p&eacute;riode entre la s&eacute;lection  d&#39;un site potentiel et la mise en service d&#39;une telle installation sur le site.  Par cons&eacute;quent, on recommande de commencer la planification d&#39;une telle  installation le plus t&ocirc;t possible dans le cadre du processus d&#39;implantation, et  de renforcer l&#39;appui et l&#39;expertise en utilisant des installations similaires  d&eacute;j&agrave; disponibles. </p>  <p>Le  demandeur de permis doit discuter de ses plans avec la CCSN rapidement afin que  l&#39;organisme puisse v&eacute;rifier les caract&eacute;ristiques du site, comme une  installation de recherche souterraine ou une installation similaire, et ainsi  clarifier le processus d&#39;approbation en vertu de la r&eacute;glementation et d&eacute;finir  les activit&eacute;s de caract&eacute;risation du site. Ces consultations sont &eacute;galement  requises pour conna&icirc;tre les activit&eacute;s de caract&eacute;risation qui ne requi&egrave;rent pas de  permis de la CCSN pour la pr&eacute;paration du site ou un permis de construction. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2>Glossaire</h2>
<p>Pour les d&eacute;finitions des termes employ&eacute;s dans le pr&eacute;sent document,  consultez le <a href="http://nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossaire-de-la-CCSN-(r&eacute;vision-d-ao&ucirc;t-2018).pdf">REGDOC&#8209;3.6, <em>Glossaire de la CCSN</em></a>, qui comprend les termes et les d&eacute;finitions employ&eacute;s dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation  nucl&eacute;aires</em></a> et ses r&egrave;glements d&#39;applications, et  les documents de r&eacute;glementation de la CCSN. Le REGDOC&#8209;3.6 est fourni &agrave; titre de  r&eacute;f&eacute;rence et d&#39;information. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Bibliographie</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Agence internationale de l&#39;&eacute;nergie  atomique (AIEA), <em>Glossaire de s&ucirc;ret&eacute; de  l&#39;AIEA&nbsp;: Terminologie employ&eacute;e en s&ucirc;ret&eacute; nucl&eacute;aire et radioprotection,  &Eacute;dition 2007,</em> Vienne, 2007.</p>  <p className="fn-rtn"><a href="#fnb1-ref" className="ui-link"><span className="wb-inv">Return to footnote </span>1 <span className="wb-inv">referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>Groupe CSA, CSA&nbsp;N292.0-14, <em>Principes g&eacute;n&eacute;raux pour la gestion des  d&eacute;chets radioactifs et du combustible irradi&eacute;, </em>Mississauga, 2014.</p>  <p className="fn-rtn"><a href="#fnb2a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2d-ref" className="ui-link"><span className="wb-inv">Return to
fourth footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2g-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2h-ref" className="ui-link"><span className="wb-inv">Return to
eighth footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd tabIndex="-1" id="fnb3" aria-labelledby="fnb3">
<p>IAEA, Draft TECDOC,<em> Managing integration  of pre-closure activities and post-closure safety in the Safety Case for  Geological Disposal</em>.</p>  <p className="fn-rtn"><a href="#fnb3a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>3<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb3b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd tabIndex="-1" id="fnb4" aria-labelledby="fnb4">
<p>IAEA, IAEA Safety Standards Series, No. SSG-14, <em>Geological Disposal Facilities for Radioactive Waste,</em> Vienna, 2011.</p>  <p className="fn-rtn"><a href="#fnb4a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>4<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb4b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire,  REGDOC-2.11.1, Programme de gestion des d&eacute;chets, Volume&nbsp;II&nbsp;:  &Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets radioactifs,  Ottawa, 2018. </p>
<p className="fn-rtn"><a href="#fnb5a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb5b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb5c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd tabIndex="-1" id="fnb6" aria-labelledby="fnb6">
<p>Association des autorit&eacute;s de s&ucirc;ret&eacute;  nucl&eacute;aire des pays d&#39;Europe de l&#39;Ouest, <em>Report&nbsp;:</em> Radioactive Waste Disposal Facilities Safety Reference Levels, 2014.</p>  <p className="fn-rtn"><a href="#fnb6a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6d-ref" className="ui-link"><span className="wb-inv">Return to <span>fourth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6g-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd tabIndex="-1" id="fnb7" aria-labelledby="fnb7">
<p>Groupe CSA, CSA&nbsp;N286-12, <em>Exigences relatives au syst&egrave;me de gestion  des installations nucl&eacute;aires, </em>2012.</p>
<p className="fn-rtn"><a href="#fnb7a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7d-ref" className="ui-link"><span className="wb-inv">Return to <span>fourth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7h-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7i-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7j-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7k-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7l-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd tabIndex="-1" id="fnb8" aria-labelledby="fnb8">
<p>IAEA, Safety Standards Series, No. SSG-23, <em>The Safety Case and Safety Assessment for the Disposal of Radioactive  Waste,</em> Specific Safety Guide, Vienna, 2012.&nbsp; Â  </p>  <p className="fn-rtn"><a href="#fnb8a-ref" className="ui-link"><span className="wb-inv">Return to footnote <span>first</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb8b-ref" className="ui-link"><span className="wb-inv">Return to
footnote <span>second</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb8c-ref" className="ui-link"><span className="wb-inv">Return to
footnote <span>third</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd tabIndex="-1" id="fnb9" aria-labelledby="fnb9">
<p>IAEA, IAEA Safety Standards Series, No. GSG-1, <em>Classification of Radioactive Waste</em>, Vienna, 2009.</p>
<p className="fn-rtn"><a href="#fnb9a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>9 <span className="wb-inv">referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9d-ref" className="ui-link"><span className="wb-inv">Return to fourth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9f-ref" className="ui-link"><span className="wb-inv">Return to sixth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9g-ref" className="ui-link"><span className="wb-inv">Return to sixth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd tabIndex="-1" id="fnb10" aria-labelledby="fnb10">
<p>AIEA, Collection Normes de s&ucirc;ret&eacute; de l&#39;AIEA, No&nbsp;SSR-5, <em>Stockage d&eacute;finitif des d&eacute;chets  radioactifs</em>, Vienne&nbsp;2011. </p>  <p className="fn-rtn"><a href="#fnb10a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb10b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb10c-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dd tabIndex="-1" id="fnb100" aria-labelledby="fnb100">
</dd>
</dl>
</section>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;rie de documents d&#39;application de la r&eacute;glementation de la CCSN </h2>
<p>Les  installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par  la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation  nucl&eacute;aires</em> et de ses r&egrave;glements d&#39;application, il pourrait y avoir des  exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme  les documents d&#39;application de la r&eacute;glementation ou les normes. </p>  <p>Depuis avril&nbsp;2013, la collection de  documents d&#39;application de la r&eacute;glementation actuels et pr&eacute;vus de la CCSN  comporte trois grandes cat&eacute;gories et vingt-six s&eacute;ries, selon la structure  ci-dessous. Les documents d&#39;application de la r&eacute;glementation font partie de  l&#39;une de s&eacute;ries suivantes. </p>  <ul className="list-bullet-none">
<li><strong>1.0 Installations et activit&eacute;s  r&eacute;glement&eacute;es </strong></li>
<li>Series 1.1 Installations dot&eacute;es de r&eacute;acteurs  <ul className="list-bullet-none">
<li>1.2 Installations de cat&eacute;gorie IB </li>
<li>1.3 Mines et usines de concentration d&#39;uranium </li>
<li>1.4 Installations de cat&eacute;gorie&nbsp;II </li>
<li>1.5 Homologation d&#39;&eacute;quipement r&eacute;glement&eacute; </li>
<li>1.6 Substances nucl&eacute;aires et appareils &agrave; rayonnement </li>
</ul>
</li>
<li><strong>2.0 Domaines de s&ucirc;ret&eacute; et  de r&eacute;glementation </strong></li>
<li>Series 2.1 Syst&egrave;me de gestion  <ul className="list-bullet-none">
<li>2.2 Gestion de la performance humaine </li>
<li>2.3 Conduite de l&#39;exploitation </li>
<li>2.4 Analyse de la s&ucirc;ret&eacute; </li>
<li>2.5 Conception mat&eacute;rielle </li>
<li>2.6 Aptitude fonctionnelle </li>
<li>2.7 Radioprotection </li>
<li>2.8 Sant&eacute; et s&eacute;curit&eacute; classiques </li>
<li>2.9 Protection de l&#39;environnement </li>
<li>2.10 Gestion des urgences et protection-incendies </li>
<li>2.11 Gestion des d&eacute;chets </li>
<li>2.12 S&eacute;curit&eacute; </li>
<li>2.13 Garanties et non-prolif&eacute;ration </li>
<li>2.14 Emballage et transport </li>
</ul>
</li>
<li><strong>3.0 Autres domaines de  r&eacute;glementation </strong></li>
<li>Series 3.1 Exigences relatives Ã  la production de rapports
<ul className="list-bullet-none">
<li>3.2 Mobilisation du public et des Autochtones </li>
<li>3.3 Garanties financi&egrave;res</li>
<li>3.4 D&eacute;lib&eacute;rations de la Commission </li>
<li>3.5 Processus et pratiques de la CCSN </li>
<li>3.6 Glossaire de la CCSN </li>
</ul>
</li>
</ul>
<p><strong>Remarque&nbsp;: </strong>Les s&eacute;ries de  documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es  p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre  plusieurs documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus  r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez  consulter le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN. </a></p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }