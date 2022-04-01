<?php 

$ID = $_GET['id'];

include('include/db.php');


//incoming id

$sql = "select translation_title, translation_breadcrumb, translation_content, modified from content_both where name = $ID";
    // deepcode ignore Sqli: <please specify a reason of ignoring this>
    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {


?>

<!DOCTYPE html>
<html class="no-js" lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
		wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html -->
<title><?php echo htmlspecialchars_decode($row["tranlation_title"], ENT_QUOTES) ?></title>
<meta content="width=device-width,initial-scale=1" name="viewport">
<meta name="description" content="La Boîte à outils de l’expérience Web (BOEW) rassemble différents composants réutilisables et prêts-à-utiliser pour la conception et la mise à jour de sites Web innovateurs qui sont à la fois accessibles, conviviaux et interopérables. Tous ces composants réutilisables sont des logiciels libres mis à la disposition des ministères et des collectivités Web externes.">
<link rel="alternate" hreflang="en" href="content-en.html">
<link href="./themes-dist-GCWeb/GCWeb/assets/favicon.ico" rel="icon" type="image/x-icon">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<link rel="stylesheet" href="./themes-dist-GCWeb/GCWeb/css/theme.min.css">
<noscript><link rel="stylesheet" href="./themes-dist-GCWeb/wet-boew/css/noscript.min.css" /></noscript>
</head>
<body vocab="http://schema.org/" resource="#wb-webpage" typeof="WebPage">
<nav>
<ul id="wb-tphp">
<li class="wb-slc">
<a class="wb-sl" href="#wb-cont">Passer au contenu principal</a>
</li>
<li class="wb-slc">
<a class="wb-sl" href="#wb-info">Passer à «&#160;Au sujet du gouvernement&#160;»</a>
</li>
</ul>
</nav>
<header>
<div id="wb-bnr" class="container">
<div class="row">
<section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
<h2 class="wb-inv">Sélection de la langue</h2>
<ul class="list-inline mrgn-bttm-0">
<li>
{# deepcode ignore XSS: <please specify a reason of ignoring this> #}
<a lang="en" hreflang="en" href="gcweb-eng.php?id=<?php echo($ID) ?>">

<span class="hidden-xs">English</span>
<abbr title="English" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">en</abbr>
</a>
</li>
</ul>
</section>
<div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" resource="#wb-publisher" typeof="GovernmentOrganization">
<a href="https://www.canada.ca/fr.html" property="url"><img src="./themes-dist-GCWeb/GCWeb/assets/sig-blk-fr.svg" alt="Gouvernement du Canada" property="logo"><span class="wb-inv"> / <span lang="en">Government of Canada</span></span></a>
<meta property="name" content="Gouvernement du Canada">
<meta property="areaServed" typeof="Country" content="Canada">
<link property="logo" href="./themes-dist-GCWeb/GCWeb/assets/wmms-blk.svg">
</div>
<section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
<h2>Recherche</h2>
<form action="#" method="post" name="cse-search-box" role="search">
<div class="form-group wb-srch-qry">
<label for="wb-srch-q" class="wb-inv">Rechercher dans Canada.ca</label>
<input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher dans Canada.ca">
<datalist id="wb-srch-q-ac">
</datalist>
</div>
<div class="form-group submit">
<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button>
</div>
</form>
</section>
</div>
</div>
<nav class="gcweb-menu" typeof="SiteNavigationElement">
<div class="container">
<h2 class="wb-inv">Menu</h2>
<button type="button" aria-haspopup="true" aria-expanded="false">Menu<span class="wb-inv"> principal</span> <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
<ul role="menu" aria-orientation="vertical" data-ajax-replace="https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html">
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/emplois.html">Emplois et milieu de travail</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">Immigration et citoyenneté</a></li>
<li role="presentation"><a role="menuitem" href="https://voyage.gc.ca/">Voyage et tourisme</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/entreprises.html">Entreprises et industrie</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/prestations.html">Prestations</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/sante.html">Santé</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/impots.html">Impôts</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/environnement.html">Environnement et ressources naturelles</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/defense.html">Sécurité nationale et défense</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/culture.html">Culture, histoire et sport</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/police.html">Services de police, justice et urgences</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/transport.html">Transport et infrastructure</a></li>
<li role="presentation"><a role="menuitem" href="https://international.gc.ca/world-monde/index.aspx?lang=fra">Canada et le monde</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/finance.html">Argent et finances</a></li>
<li role="presentation"><a role="menuitem" href="https://www.canada.ca/fr/services/science.html">Science et innovation</a></li>
</ul>
</div>
</nav>
<nav id="wb-bc" property="breadcrumb">
<h2>Vous êtes ici :</h2>
<div class="container">
<ol class="breadcrumb">
<li><a href="https://www.canada.ca/fr.html">Canada.ca</a></li>
<li><a href="https://nuclearsafety.gc.ca/fra/">Commission canadienne de sûreté nucléaire</a></li>
<?php echo htmlspecialchars_decode($row["translation_breadcrumb"], ENT_QUOTES) ?>
</ol>
</div>
</nav>
</header>
<main property="mainContentOfPage" resource="#wb-main" class="container" typeof="WebPageElement">
<h1 property="name" id="wb-cont"><?php echo htmlspecialchars_decode($row["translation_title"], ENT_QUOTES) ?></h1>
<p><strong>De <a href="#">Commission canadienne de sûreté nucléaire</a></strong></p>
<section>
<?php echo htmlspecialchars_decode($row["translation_content"], ENT_QUOTES) ?>
</section>
<div class="pagedetails">
<div class="row">
<div class="col-sm-6 col-md-5 col-lg-4">
<details class="brdr-0">
<summary class="btn btn-default text-center">Signaler un problème sur cette page</summary>
<div class="well row">
<div class="gc-rprt-prblm">
<div class="gc-rprt-prblm-frm gc-rprt-prblm-tggl">
<form action="#">
<fieldset>
<legend><span class="field-name">Veuillez cocher toutes les réponses pertinentes&nbsp;:</span></legend>
<div class="checkbox">
<label for="gc-rprt-prblm-f1">
<input type="checkbox" name="problem1" value="Oui" id="gc-rprt-prblm-f1">Un lien, un bouton ou une vidéo ne fonctionne pas
</label>
<input name="problem1" type="hidden" value="Non">
</div>
<div class="checkbox">
<label for="gc-rprt-prblm-f2">
<input type="checkbox" name="problem2" value="Oui" id="gc-rprt-prblm-f2">Il y a une erreur d'orthographe ou de grammaire
</label>
<input name="problem2" type="hidden" value="Non">
</div>
<div class="checkbox">
<label for="gc-rprt-prblm-f3">
<input type="checkbox" name="problem3" value="Oui" id="gc-rprt-prblm-f3">Les renseignements sont incomplets
</label>
<input name="problem3" type="hidden" value="Non">
</div>
<div class="checkbox">
<label for="gc-rprt-prblm-f4">
<input type="checkbox" name="problem4" value="Oui" id="gc-rprt-prblm-f4">L'information n'est plus à jour ou est erronée
</label>
<input name="problem4" type="hidden" value="Non">
</div>
<div class="checkbox">
<label for="gc-rprt-prblm-f5">
<input type="checkbox" name="problem5" value="Oui" id="gc-rprt-prblm-f5">Je n'arrive pas à trouver ce que je cherche
</label>
<input name="problem5" type="hidden" value="Non">
</div>
<div class="checkbox">
<label for="gc-rprt-prblm-f6">
<input type="checkbox" name="problem6" value="Oui" id="gc-rprt-prblm-f6">Autre problème qui ne figure pas sur cette liste
</label>
<input name="problem6" type="hidden" value="Non">
</div>
</fieldset>
<button type="submit" class="btn btn-primary wb-toggle" data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}'>Soumettre</button>
</form>
</div>
<div class="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide">
<h3>Merci de votre aide!</h3>
<p>Vous ne recevrez pas de réponse. Pour toute question, s’il vous plaît <a href="https://www.canada.ca/fr/contact.html">contactez-nous</a>.</p>
</div>
</div>
</div>
</details>
</div>
<div class="wb-share col-sm-4 col-md-3 col-sm-offset-2 col-md-offset-4 col-lg-offset-5" data-wb-share='{"lnkClass": "btn btn-default btn-block"}'></div>
</div>
<dl id="wb-dtmd">
<dt>Date de modification&#160;:&#32;</dt>
<dd><time property="dateModified"><?php echo htmlspecialchars_decode($row["modified"], ENT_QUOTES) ?></time></dd>
</dl>
</div>
</main>
<footer id="wb-info">
<div class="landscape">
<nav class="container wb-navcurr">
<h2 class="wb-inv">Au sujet du gouvernement</h2>
<ul class="list-unstyled colcount-sm-2 colcount-md-3">
<li><a href="https://www.canada.ca/fr/contact.html">Contactez-nous</a></li>
<li><a href="https://www.canada.ca/fr/gouvernement/min.html">Ministères et organismes</a></li>
<li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html">Fonction publique et force militaire</a></li>
<li><a href="https://www.canada.ca/fr/nouvelles.html">Nouvelles</a></li>
<li><a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html">Traités, lois et règlements</a></li>
<li><a href="https://www.canada.ca/fr/transparence/rapports.html">Rapports à l'échelle du gouvernement</a></li>
<li><a href="https://pm.gc.ca/fra">Premier ministre</a></li>
<li><a href="https://www.canada.ca/fr/gouvernement/systeme.html">Comment le gouvernement fonctionne</a></li>
<li><a href="https://ouvert.canada.ca/">Gouvernement ouvert</a></li>
</ul>
</nav>
</div>
<div class="brand">
<div class="container">
<div class="row">
<nav class="col-md-9 col-lg-10 ftr-urlt-lnk">
<h2 class="wb-inv">À propos du site</h2>
<ul>
<li><a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a></li>
<li><a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a></li>
<li><a href="https://www1.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li>
<li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>
<li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>
</ul>
</nav>
<div class="col-xs-6 visible-sm visible-xs tofpg">
<a href="#wb-cont">Haut de la page <span class="glyphicon glyphicon-chevron-up"></span></a>
</div>
<div class="col-xs-6 col-md-3 col-lg-2 text-right">
<img src="./themes-dist-GCWeb/GCWeb/assets/wmms-blk.svg" alt="Symbole du gouvernement du Canada">
</div>
</div>
</div>
</div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
<script src="./themes-dist-GCWeb/wet-boew/js/wet-boew.min.js"></script>
<script src="./themes-dist-GCWeb/GCWeb/js/theme.min.js"></script>
</body>
</html>
<?php
}
} else {
  echo "0 results";
}
$conn->close();
?>