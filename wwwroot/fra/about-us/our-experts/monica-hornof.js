import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Monica Hornof, ing.", 
                dateModified: "2022-01-04",
                langToggleUrl: "/eng/about-us/our-experts/monica-hornof"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Division du programme de r&eacute;glementation de Bruce</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_MHornof-sub.png" alt="" />
<figcaption>Monica Hornof,<br/>
Agente principale du programme de r&eacute;glementation</figcaption>
</figure>
</div>
<p>M<sup>me</sup> Hornof travaille pour la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) depuis 2005. Bien qu&rsquo;elle ait une formation en g&eacute;nie chimique, elle d&eacute;montre un vif int&eacute;r&ecirc;t pour les aspects juridiques de la r&eacute;glementation nucl&eacute;aire et poss&egrave;de une compr&eacute;hension et une connaissance approfondies de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, du cadre de r&eacute;glementation de la CCSN et de la r&eacute;glementation nucl&eacute;aire internationale.</p>
<p>Avant d&rsquo;accepter le poste d&rsquo;agente principale du programme de r&eacute;glementation, elle a dirig&eacute; l&rsquo;&eacute;quipe du soutien technique de la Commission, notamment l&rsquo;&eacute;laboration et la mise en &oelig;uvre de lignes directrices sur les s&eacute;ances virtuelles de la Commission en r&eacute;ponse &agrave; la pand&eacute;mie de COVID-19. Ce travail a permis &agrave; la Commission de continuer de fonctionner de mani&egrave;re efficace dans des environnements virtuels, contribuant ainsi &agrave; moderniser la fa&ccedil;on dont elle r&eacute;alise ses activit&eacute;s.</p>
<h2>Expertise et &eacute;tudes</h2>
<p>Ing&eacute;nieure professionnelle agr&eacute;&eacute;e, M<sup>me</sup> Hornof a obtenu son dipl&ocirc;me en g&eacute;nie chimique &agrave; l&rsquo;Universit&eacute; d&rsquo;Ottawa. Elle est &eacute;galement titulaire d&rsquo;un dipl&ocirc;me d&rsquo;&eacute;tudes sup&eacute;rieures en droit nucl&eacute;aire international de l&rsquo;Universit&eacute; de Montpellier, en France. En plus de ses &eacute;tudes, elle est l&rsquo;auteure principale d&rsquo;un document publi&eacute; intitul&eacute; <em>Decontamination in the Event of a Chemical or Radiological Terrorist Attack</em> (2006), et la coauteure du document publi&eacute; <em>L&rsquo;enseignement de la gestion des urgences au Canada</em> (2004).</p>
<h2>R&ocirc;les et responsabilit&eacute;s</h2>
<p>Le travail de M<sup>me</sup> Hornof est essentiel &agrave; la r&eacute;glementation des centrales nucl&eacute;aires, car il permet de s&rsquo;assurer que les programmes et les activit&eacute;s des titulaires de permis respectent la port&eacute;e de leur fondement d&rsquo;autorisation. Plus pr&eacute;cis&eacute;ment, M<sup>me</sup> Hornof g&egrave;re le manuel des conditions de permis de Bruce Power. Elle s&rsquo;occupe aussi de l&rsquo;&eacute;valuation et de la surveillance du rendement des installations pour les domaines de s&ucirc;ret&eacute; et de r&eacute;glementation &laquo; Syst&egrave;me de gestion &raquo; et &laquo; Gestion de la performance humaine &raquo;, en plus d&rsquo;examiner l&rsquo;exp&eacute;rience op&eacute;rationnelle li&eacute;e &agrave; l&rsquo;exploitation des centrales nucl&eacute;aires canadiennes.</p>
<h2>Autres r&ocirc;les</h2>
<p>M<sup>me</sup> Hornof est membre du Groupe de travail sur les petits r&eacute;acteurs modulaires (PRM) de la Direction de la r&eacute;glementation des centrales nucl&eacute;aires, qui veille &agrave; ce que la CCSN soit pr&ecirc;te sur le plan r&eacute;glementaire &agrave; d&eacute;livrer des permis d&rsquo;exploitation et &agrave; v&eacute;rifier la conformit&eacute; des PRM.</p>
<p>Elle fait la promotion de l&rsquo;&eacute;quit&eacute; entre les genres et est copr&eacute;sidente du r&eacute;seau Femmes en STIM (science, technologie, ing&eacute;nierie, math&eacute;matiques) de la CCSN depuis son lancement en 2020. L&rsquo;objectif de ce r&eacute;seau est d&rsquo;offrir un espace s&ucirc;r &agrave; toutes les employ&eacute;es de la CCSN pour qu&rsquo;elles puissent se r&eacute;unir, partager leur exp&eacute;rience sur leurs carri&egrave;res en STIM et s&rsquo;inspirer, se donner des moyens d&rsquo;agir et apprendre les unes des autres.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }