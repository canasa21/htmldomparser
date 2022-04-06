import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Matthew Herod", 
                dateModified: "2021-11-01",
                langToggleUrl: "/eng/about-us/our-experts/matthew-herod"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Division du programme de r&eacute;glementation des Laboratoires Nucl&eacute;aires Canadiens</p>
<div className="pull-right col-md-3">
<figure><img src="/images/our-experts/web_experts_MHerom-sq.png" alt="" />
<figcaption>Matthew Herod,<br/>
Agent principal de projet</figcaption>
</figure>
</div>
<p>Matthew travaille &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) depuis 2015. En tant qu&rsquo;agent principal de projet, il est responsable de la d&eacute;livrance de permis pour le projet de d&eacute;classement sur place du r&eacute;acteur nucl&eacute;aire de d&eacute;monstration, et appuie au besoin plusieurs autres projets importants, comme celui de l&rsquo;installation de gestion des d&eacute;chets pr&egrave;s de la surface (IGDPS) propos&eacute;e. Il effectue et revoit des &eacute;valuations techniques, r&eacute;alise des activit&eacute;s de mobilisation avec diverses parties int&eacute;ress&eacute;es et collabore avec la communaut&eacute; internationale de r&eacute;glementation.</p>
<p>Matthew s&rsquo;assure que les demandes de permis relatives &agrave; la gestion des d&eacute;chets radioactifs soient &eacute;valu&eacute;es rigoureusement et fond&eacute;es sur l&rsquo;information scientifique la meilleure et la plus compl&egrave;te. Gr&acirc;ce &agrave; son travail, la s&ucirc;ret&eacute; &agrave; long terme est &eacute;valu&eacute;e ad&eacute;quatement et dans le respect des exigences, de l&rsquo;orientation et des pratiques exemplaires canadiennes et internationales.</p>
<h2>Expertise et &eacute;ducation</h2>
<p>Matthew est titulaire d&rsquo;un doctorat en sciences de la Terre de l&rsquo;Universit&eacute; d&rsquo;Ottawa et d&rsquo;un baccalaur&eacute;at en sciences (avec mention) sp&eacute;cialis&eacute; en g&eacute;ologie de l&rsquo;Universit&eacute; Queen&rsquo;s. Il est professeur auxiliaire au D&eacute;partement des sciences de la Terre et de l&rsquo;environnement de l&rsquo;Universit&eacute; d&rsquo;Ottawa et affili&eacute; au laboratoire de spectrom&eacute;trie de masse par acc&eacute;l&eacute;rateur Andr&eacute; E. Lalonde de l&rsquo;universit&eacute;, o&ugrave; il supervise 3 &eacute;tudiants dipl&ocirc;m&eacute;s. Enfin, Matthew est inspecteur &agrave; la CCSN et g&eacute;oscientifique professionnel agr&eacute;&eacute;.</p>
<h2>Recherches et projets actuels</h2>
<p><strong>Projet</strong>&nbsp;: <a href="/fra/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">installation de gestion des d&eacute;chets pr&egrave;s de la surface (IGDPS) des Laboratoires Nucl&eacute;aires Canadiens</a>. Matthew a deux r&ocirc;les dans l&rsquo;examen effectu&eacute; par la CCSN de cette installation pr&eacute;vue par les LNC, soit ceux d&rsquo;expert en d&eacute;livrance de permis et d&rsquo;expert technique. Il dirige aussi les activit&eacute;s de relations externes et contribue &agrave; l&rsquo;&eacute;valuation technique des documents pr&eacute;sent&eacute;s par le titulaire de permis pour ce qui est des crit&egrave;res d&rsquo;acceptation des d&eacute;chets, de la caract&eacute;risation des d&eacute;chets, des aspects touchant la g&eacute;ologie et de la s&ucirc;ret&eacute; &agrave; long terme.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }