import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Son Nguyen", 
                dateModified: "2022-01-17",
                langToggleUrl: "/eng/about-us/our-experts/son-nguyen"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<p>Division des g&eacute;osciences</p>
<div className="pull-right col-md-2"> <img alt="Son Nguyen" src="/images/our-experts/web_experts_sonNguyen_sub.png"/>
<p> Son Nguyen,<br/>
Sp&eacute;cialiste technique en g&eacute;oscience</p>
</div>
<p>Son travaille &agrave; la CCSN depuis 1982. En tant que sp&eacute;cialiste technique en g&eacute;oscience, il utilise des principes g&eacute;oscientifiques et d&rsquo;ing&eacute;nierie pour &eacute;valuer la s&ucirc;ret&eacute; des installations nucl&eacute;aires.</p>
<p>Son m&egrave;ne &eacute;galement des recherches en collaboration avec des partenaires canadiens et internationaux pour se tenir au courant des d&eacute;veloppements en science et en ing&eacute;nierie, et s&rsquo;assurer que les d&eacute;cisions en mati&egrave;re de permis sont fond&eacute;es sur la science.</p>
<h2>Expertise et &eacute;ducation </h2>
<p>Son est titulaire d&rsquo;un baccalaur&eacute;at en ing&eacute;nierie et d&rsquo;une ma&icirc;trise en g&eacute;nie civil de l&rsquo;Universit&eacute; de Sherbrooke ainsi que d&rsquo;un doctorat en g&eacute;nie civil et en m&eacute;canique appliqu&eacute;e de l&rsquo;Universit&eacute; McGill. Il d&eacute;tient le titre d&rsquo;ing&eacute;nieur professionnel (ing.) et est affili&eacute; &agrave; l&rsquo;Ordre des ing&eacute;nieurs du Qu&eacute;bec. Son a &eacute;t&eacute; deux&nbsp;fois r&eacute;cipiendaire du Prix d&rsquo;excellence de la pr&eacute;sidente de la CCSN et pr&eacute;side un projet de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique visant &agrave; d&eacute;montrer la s&ucirc;ret&eacute; du stockage des d&eacute;chets radioactifs dans des formations g&eacute;ologiques. Il est professeur auxiliaire &agrave; l&rsquo;Universit&eacute; d&rsquo;Ottawa en plus d&rsquo;&ecirc;tre l&rsquo;auteur de plus de 50&nbsp;articles publi&eacute;s dans des revues scientifiques &eacute;valu&eacute;es par des pairs et de nombreuses autres publications dans des comptes rendus de conf&eacute;rences.</p>
<h2>Recherches et projets actuels</h2>
<p><strong>Projet&nbsp;: </strong><a href="/fra/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Installation de gestion des d&eacute;chets pr&egrave;s de la surface (IGDPS) des Laboratoires Nucl&eacute;aires Canadiens</a>. Dans le cadre de l&rsquo;examen de cette installation propos&eacute;e que r&eacute;alise la CCSN, Son passe en revue le dossier de s&ucirc;ret&eacute; gr&acirc;ce &agrave; une s&eacute;rie de documents qui fournissent de nombreux arguments visant &agrave; d&eacute;montrer que l&rsquo;IGDPS propos&eacute;e sera sans danger pour les personnes et l&rsquo;environnement pendant la construction, l&rsquo;exploitation, la fermeture et apr&egrave;s la fermeture. Il effectue &eacute;galement l&rsquo;examen et l&rsquo;&eacute;valuation ind&eacute;pendante des aspects g&eacute;otechniques, sismiques et hydrog&eacute;ologiques qui sont susceptibles d&rsquo;influer sur la s&ucirc;ret&eacute; et le rendement de l&rsquo;IGDPS propos&eacute;e.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }