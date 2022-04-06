import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Missions au Canada du Service d'examen intégré de la réglementation", 
                dateModified: "2020-02-18",
                langToggleUrl: "/eng/resources/international-cooperation/irrs/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Le but d&rsquo;une  mission du Service d&rsquo;examen  int&eacute;gr&eacute; de la r&eacute;glementation  (SEIR) consiste &agrave; comparer les pratiques de r&eacute;glementation d&rsquo;un pays aux normes  internationales et aux pratiques exemplaires &eacute;quivalentes ailleurs dans le  monde.</p>  	<p>L&rsquo;approche de la  mission du SEIR est fond&eacute;e sur une auto-&eacute;valuation con&ccedil;ue pour favoriser une  am&eacute;lioration continue chez les &Eacute;tats membres. </p>  	<h2>Mission du SEIR de 2019</h2>  	<ul>
<li><a href="https://www.iaea.org/sites/default/files/documents/review-missions/irrs_canada_2019_final_report.pdf">Rapport de la mission du SEIR au  Canada 2019</a> (en  anglais seulement) </li>
<li><a href="/fra/resources/international-cooperation/irrs/canada-response-irrs-2019-summary">Rapport  de la mission du SEIR au Canada 2019 – résumé</a></li>
<li><a href="/fra/resources/international-cooperation/irrs/canada-response-irrs-2019">La  réponse du Canada au Rapport de la mission du SEIR de 2019</a></li>  	</ul>  	<h2>Mission du SEIR de  2009 et mission de suivi de 2011</h2>  	<ul>
<li><a href="/fra/pdfs/IRRS/2011-IRRS-Follow-up-Mission-to-Canada-Report-IAEA-NS-IRRS-2011-08-fra.pdf">Rapport sur la mission de suivi du SEIR de  2011</a></li>
<li><a href="/fra/pdfs/about/international/irrt/CNSC-Management-Response-f.pdf">Rapport sur la mission de suivi du SEIR de  2011 - r&eacute;ponse de la direction de la CCSN</a></li>
<li><a href="/fra/pdfs/irrs/2009-IRRS-Peer-Review-Report-and-CNSCs-Management-Response-fra.pdf">Rapport 2009 de l&rsquo;examen par les pairs du  SEIR et la r&eacute;ponse de la direction de la CCSN</a></li>  	</ul>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }