import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Colin Moses", 
                dateModified: "2022-01-04",
                langToggleUrl: "/eng/about-us/our-experts/colin-moses"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Direction de la gestion et de la technologie de l&rsquo;information</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_CMoses-sub.png" alt="" />
<figcaption>Colin Moses,<br/>
Directeur g&eacute;n&eacute;ral et dirigeant principal de l&rsquo;information</figcaption>
</figure>
</div>
<p>M. Moses travaille &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) depuis 2001, alors qu&rsquo;il est arriv&eacute; avec la premi&egrave;re cohorte d&rsquo;un nouveau programme de stages. Il g&egrave;re une &eacute;quipe qui veille &agrave; ce que le personnel de la CCSN dispose des capacit&eacute;s num&eacute;riques n&eacute;cessaires pour exercer une surveillance r&eacute;glementaire moderne et efficace de l&rsquo;industrie nucl&eacute;aire.</p>
<h2>Expertise et &eacute;tudes</h2>
<p>M. Moses est titulaire d&rsquo;un baccalaur&eacute;at en g&eacute;nie m&eacute;canique de l&rsquo;Universit&eacute; McMaster. Son exp&eacute;rience professionnelle diversifi&eacute;e au sein de la CCSN lui a permis de tirer parti de chaque r&ocirc;le, ce qui l&rsquo;a aid&eacute; &agrave; r&eacute;ussir et &agrave; assumer des responsabilit&eacute;s accrues. Puisqu&rsquo;il a travaill&eacute; dans toutes les directions g&eacute;n&eacute;rales de la CCSN, il a une compr&eacute;hension et une appr&eacute;ciation particuli&egrave;res de la fa&ccedil;on dont chaque membre du personnel contribue &agrave; la r&eacute;ussite de l&rsquo;organisation.</p>
<h2>R&ocirc;les et responsabilit&eacute;s</h2>
<p>&Agrave; titre de directeur g&eacute;n&eacute;ral et dirigeant principal de l&rsquo;information, M. Moses et son &eacute;quipe aident la CCSN &agrave; concr&eacute;tiser sa vision d&rsquo;un organisme de r&eacute;glementation nucl&eacute;aire de calibre mondial, en alignant l&rsquo;organisation sur le Plan strat&eacute;gique des op&eacute;rations num&eacute;riques du gouvernement du Canada gr&acirc;ce &agrave; la Strat&eacute;gie num&eacute;rique de la CCSN. Cette strat&eacute;gie permettra &agrave; la CCSN de demeurer une organisation ouverte et ax&eacute;e sur le num&eacute;rique qui adopte le rythme rapide des changements technologiques, et de mettre &agrave; la disposition du personnel les outils n&eacute;cessaires pour exercer une surveillance r&eacute;glementaire rigoureuse, fond&eacute;e sur la science et les donn&eacute;es. L&rsquo;acc&egrave;s en temps utile aux renseignements et aux donn&eacute;es recueillis par la CCSN lui permet d&rsquo;&ecirc;tre en mesure de rendre des d&eacute;cisions &eacute;clair&eacute;es sur la s&ucirc;ret&eacute; des installations et des activit&eacute;s nucl&eacute;aires.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }