import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Aperçu des avantages sociaux pour étudiants", 
                dateModified: "2018-01-26",
                langToggleUrl: "/eng/about-us/careers-at-cnsc/CNSC-Student-Benefits"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p className="lead">(Terme de trois mois et plus &agrave; temps plein ou temps partiel)</p>
<p>La CCSN veut aider les &eacute;tudiants &agrave; d&eacute;velopper leur carri&egrave;re, leur offrir l&rsquo;occasion d&rsquo;apprendre et d&rsquo;acqu&eacute;rir de l&rsquo;exp&eacute;rience de travail dans leur domaine d&rsquo;&eacute;tudes. Gr&acirc;ce &agrave; certain avantages uniques, la CCSN offre un ensemble de r&eacute;mun&eacute;ration et d&rsquo;avantages sociaux qui est l&rsquo;un des plus concurrentiels du secteur f&eacute;d&eacute;ral qui favorisent la conciliation travail-famille ainsi que et la productivit&eacute; op&eacute;rationnelle.</p>
<h2>Reconnaissance</h2>
<p>Le Programme de reconnaissance de la CCSN reconnait et honore les employ&eacute;s ou les initiatives d&rsquo;&eacute;quipes pour leurs contributions aux priorit&eacute;s et au succ&egrave;s de la CCSN et &agrave; la promotion de la culture et des valeurs de l&rsquo;organisation. Il appuie aussi le Code de valeurs et d&rsquo;&eacute;thique de la fonction publique. Tous les employ&eacute;s nomm&eacute;s pour une p&eacute;riode d&eacute;termin&eacute;e et ind&eacute;termin&eacute;e de la CCSN ainsi que les employ&eacute;s participant &agrave; un programme d&rsquo;&eacute;change peuvent &ecirc;tre reconnus dans le cadre du Programme de reconnaissance.</p>
<h2>Apprentissage</h2>
<p>La CCSN s&rsquo;engage &agrave; contribuer au perfectionnement des comp&eacute;tences et &agrave; l&rsquo;am&eacute;lioration des connaissances, de mani&egrave;re &agrave; accro&icirc;tre l&rsquo;efficience et l&rsquo;efficacit&eacute; de nos activit&eacute;s et &agrave; &eacute;tablir une main-d&rsquo;oeuvre professionnelle, comp&eacute;tente, polyvalente et motiv&eacute;e.</p>
<table className="width-100 table">
Autres avantages
<tr>
<th>Cong&eacute;s annuels</th>
<td><ul>
<li> Prorata des heures travaill&eacute;s, jusqu&rsquo;&agrave; un maximum de quinze jours par ann&eacute;e.</li>
</ul></td>
</tr>
<tr>
<th>Cong&eacute;s de maladie</th>
<td><ul>
<li> Les employ&eacute;s ont droit &agrave; 1,25 journ&eacute;e r&eacute;mun&eacute;r&eacute;e par mois, et ces cr&eacute;dits peuvent &ecirc;tre accumul&eacute;s.</li>
</ul></td>
</tr>
<tr>
<th>Jours f&eacute;ri&eacute;s d&eacute;sign&eacute;s pay&eacute;s</th>
<td><ul>
<li> Onze jours de cong&eacute; r&eacute;mun&eacute;r&eacute;s par ann&eacute;e</li>
</ul></td>
</tr>
<tr>
<th>Heures accumul&eacute;es</th>
<td><ul>
<li> Un employ&eacute; peut accumuler jusqu&rsquo;&agrave; 37,5 heures suppl&eacute;mentaires en fonction du travail productif qui peut &ecirc;tre pris sous forme de cong&eacute; &agrave; une date ult&eacute;rieure (avec l&rsquo;autorisation pr&eacute;alable de la direction).</li>
<li> Les heures peuvent &ecirc;tre combl&eacute;es &agrave; mesure qu&rsquo;elles sont utilis&eacute;es.</li>
</ul></td>
</tr>
<tr>
<th>Heures<br />
suppl&eacute;mentaires et temps de d&eacute;placement</th>
<td><ul>
<li>Une majoration pour travail suppl&eacute;mentaire est pay&eacute;e lorsque la direction a besoin que l&rsquo;employ&eacute; travaille des heures suppl&eacute;mentaires ou effectue des d&eacute;placements.</li>
</ul></td>
</tr>
<tr>
<th>R&eacute;gime d&rsquo;avantages sociaux *<br />
Pour les &eacute;tudiants coop travaillant pour une p&eacute;riode d&eacute;termin&eacute;e de plus de 6 mois</th>
<td><ul>
<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/regimes-assurance/regimes/regime-soins-dentaires.html">R&eacute;gime de soins dentaires de la fonction publique (RSDFP)</a></li>
<li><a href="http://www.rssfp.ca/">R&eacute;gime de soins de sant&eacute; de la fonction publique (RSSFP)</a></li>
<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/regimes-assurance/regimes/regime-assurance-invalidite.html">Assurance invalidit&eacute; (AI)</a></li>
<li><a href="http://www.tpsgc-pwgsc.gc.ca/remuneration-compensation/services-pension-services/pension/video/psdd-sdb-fra.html">R&eacute;gime de prestations suppl&eacute;mentaires de d&eacute;c&egrave;s (RPSD)</a></li>
<li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/regime-retraite.html">R&eacute;gime de pension de retraite de la fonction publique (RPRFP)</a></li>
</ul></td>
</tr>
</table>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }