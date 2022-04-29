import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Échelles salariales de la CCSN", 
                dateModified: "2022-04-11",
                langToggleUrl: "/eng/about-us/careers-at-cnsc/cnsc-salary-ranges"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Dans la pr&eacute;sente section, vous trouverez les &eacute;chelles salariales annuelles de chaque type d'employ&eacute; de la CCSN.</p>
<table className="">
<caption className="text-left">
&Eacute;chelles salariales &ndash; Groupe des employ&eacute;s &ndash; En vigueur le 1<sup>er</sup> avril 2021
</caption>
<tr>
<th className="">Niveau</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td>REG1</td>
<td className="text-center">37 125 $</td>
<td className="text-center">48 958 $</td>
</tr>
<tr>
<td>REG2</td>
<td className="text-center">43 345 $</td>
<td className="text-center">57 164 $</td>
</tr>
<tr>
<td>REG3</td>
<td className="text-center">50 604 $</td>
<td className="text-center">66 738 $</td>
</tr>
<tr>
<td>REG4</td>
<td className="text-center">59 080 $</td>
<td className="text-center">77 916 $</td>
</tr>
<tr>
<td>REG5</td>
<td className="text-center">68 430 $</td>
<td className="text-center">95 014 $</td>
</tr>
<tr>
<td>REG6</td>
<td className="text-center">79 897 $</td>
<td className="text-center">110 931 $</td>
</tr>
<tr>
<td>REG7</td>
<td className="text-center">96 261 $</td>
<td className="text-center">133 650 $</td>
</tr>
<tr>
<td>REG8</td>
<td className="text-center">108 334 $</td>
<td className="text-center">150 522 $</td>
</tr>  </table>  <table className="">
<caption className="text-left">
&Eacute;chelles salariales &ndash; Groupe de la direction &ndash; En vigueur le 1<sup>er</sup> avril 2021
</caption>
<tr>
<th className="">Niveau</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">MGT</td>
<td className="text-center">118 700 $</td>
<td className="text-center">151 000 $</td>
</tr>
<tr>
<td className="text-left">RLE1</td>
<td className="text-center">142 700 $</td>
<td className="text-center">167 800 $</td>
</tr>
<tr>
<td className="text-left">RLE2</td>
<td className="text-center">156 400 $</td>
<td className="text-center">184 000 $</td>
</tr>
<tr>
<td className="text-left">RLE3</td>
<td className="text-center">180 000 $</td>
<td className="text-center">211 800 $</td>
</tr>
<tr>
<td className="text-left">RLE4</td>
<td className="text-center">195 800 $</td>
<td className="text-center">230 700 $</td>
</tr>  </table>  <table className="">
<caption className="text-left">
&Eacute;chelles salariales &ndash; Groupe des praticiens en droit &ndash; En vigueur le 10 mai 2021
</caption>
<tr>
<th className="">Niveau</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">LP-01</td>
<td className="text-center">82 430 $</td>
<td className="text-center">113 687 $</td>
</tr>
<tr>
<td className="text-left">LP-02</td>
<td className="text-center">114 884 $</td>
<td className="text-center">158 449 $</td>
</tr>
<tr>
<td className="text-left">LP-03</td>
<td className="text-center">139 221 $</td>
<td className="text-center">175 163 $</td>
</tr>  </table>  <table className="">
<caption className="text-left">
&Eacute;chelles salariales &ndash; Groupe de la gestion du droit &ndash; En vigueur le 1<sup>er</sup> avril 2021
</caption>
<tr>
<th className="">Niveau</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">LC-01</td>
<td className="text-center">140 900 $</td>
<td className="text-center">174 900 $</td>
</tr>
<tr>
<td className="text-left">LC-02</td>
<td className="text-center">160 900 $</td>
<td className="text-center">198 700 $</td>
</tr>
<tr>
<td className="text-left">LC-03</td>
<td className="text-center">185 300 $</td>
<td className="text-center">221 900 $</td>
</tr>  </table>  <table className="">
<caption className="text-left">
&Eacute;chelles salariales &ndash; Groupe des &eacute;tudiants &ndash; En vigueur le 1<sup>er</sup> mai 2020
</caption>
<tr>
<th className="">Niveau</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">Coll&eacute;gial</td>
<td className="text-center">15,42 $/h</td>
<td className="text-center">20,80 $/h</td>
</tr>
<tr>
<td className="text-left">Universitaire &ndash; premier cycle (baccalaur&eacute;at)</td>
<td className="text-center">17,88 $/h</td>
<td className="text-center">25,13 $/h</td>
</tr>
<tr>
<td className="text-left">Universitaire &ndash; deuxi&egrave;me cycle (ma&icirc;trise)</td>
<td className="text-center">&ndash;</td>
<td className="text-center">27,86 $/h</td>
</tr>
<tr>
<td className="text-left">Universitaire &ndash; troisi&egrave;me cycle (doctorat)</td>
<td className="text-center">&ndash;</td>
<td className="text-center">33,76 $/h </td>
</tr>  </table>
</div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }