import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Sophie Gingras", 
                dateModified: "2021-03-03",
                langToggleUrl: "/eng/about-us/our-experts/sophie-gingras"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Employ&eacute;e de longue date, Sophie Gingras travaille &agrave; la CCSN depuis les 20 derni&egrave;res ann&eacute;es. Durant cette p&eacute;riode, Sophie a travaill&eacute; dans de nombreuses directions g&eacute;n&eacute;rales o&ugrave; elle s&rsquo;est consacr&eacute;e &agrave; la gestion de projet, &agrave; la r&eacute;daction technique et &agrave; la chimie des r&eacute;acteurs. Dans son r&ocirc;le actuel en tant que sp&eacute;cialiste technique du contr&ocirc;le chimique &agrave; la Division de l&rsquo;analyse des syst&egrave;mes de la CCSN, elle &eacute;value la conformit&eacute; sur le plan chimique durant les activit&eacute;s normales des centrales nucl&eacute;aires et d&rsquo;autres installations. Ses t&acirc;ches comprennent aussi bien des &eacute;valuations techniques que des inspections de conformit&eacute; r&eacute;alis&eacute;es dans des centrales nucl&eacute;aires.</p>  <p>&laquo; Je v&eacute;rifie si, sur le plan de la chimie, les titulaires de permis exercent leurs activit&eacute;s de fa&ccedil;on s&ucirc;re. J&rsquo;examine la documentation et les donn&eacute;es, et effectue de nombreuses inspections pour &eacute;valuer la conformit&eacute; aux exigences du permis ainsi qu&rsquo;aux normes de la CSA li&eacute;es &agrave; la chimie. &raquo;</p>   <p>En surveillant les activit&eacute;s des titulaires de permis, Sophie contribue &agrave; pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des Canadiens et &agrave; prot&eacute;ger l&rsquo;environnement. Avant de se joindre &agrave; la CCSN, Sophie a obtenu une ma&icirc;trise en g&eacute;nie chimique et a travaill&eacute; en chimie des r&eacute;acteurs &agrave; &Eacute;nergie atomique du Canada limit&eacute;e.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }