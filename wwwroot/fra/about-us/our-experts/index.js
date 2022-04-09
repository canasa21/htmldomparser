import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "CCSN spécialistes", 
                dateModified: "2022-01-17",
                langToggleUrl: "/eng/about-us/our-experts/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="module col-md-8">
<p>Notre &eacute;quipe de sp&eacute;cialistes effectue  de la recherche portant sur tous les aspects de la s&ucirc;ret&eacute; nucl&eacute;aire, en fait l&rsquo;analyse  et l&rsquo;appuie afin de pr&eacute;server la sant&eacute;, la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des Canadiens  et de prot&eacute;ger l&rsquo;environnement. D&eacute;couvrez nos sp&eacute;cialistes et l&rsquo;importance de  leur travail.</p>
</div>
<div className="row">
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_ITremblay.png" alt="Isabelle Tremblay" />
<p><a href="/fra/about-us/our-experts/isabelle-tremblay">Isabelle Tremblay</a></p>
<p>Agente de programme, Division des autorisations de transport et du soutien strat&eacute;gique</p>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_NKwamena.png" alt="Nana Kwamena" />
<p><a href="/fra/about-us/our-experts/nana-kwamena">Nana Kwamena</a></p>
<p>Directrice, Division de l&rsquo;&eacute;valuation environnementale</p>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_CMoses.png" alt="Colin Moses" />
<p><a href="/fra/about-us/our-experts/colin-moses">Colin Moses</a></p>
<p>Directeur g&eacute;n&eacute;ral, Direction de la gestion et de la technologie de l&rsquo;information, et dirigeant principal de l&rsquo;information</p>
</div>
</div>
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MHornof.png" alt="Monica Hornof" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/monica-hornof">Monica Hornof</a></p>
<p>Agente principale du programme de r&eacute;glementation, Division du programme de r&eacute;glementation de Bruce</p>
</div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_Denis-Saumure.png" alt="Denis Saumure" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/denis-saumure">Denis Saumure</a></p>
<p>Registraire de la Commission</p>
</div>
</div>
</div>
</div>
<h2>Installation de gestion des d&eacute;chets pr&egrave;s de la surface</h2>
<div className="row">
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MGacem.png" alt="Mohamed Cherif Gacem" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/mohamed-gacem">Mohamed Cherif Gacem</a></p>
<p>Agent principal de projet, Division du programme de r&eacute;glementation des Laboratoires Nucl&eacute;aires Canadiens</p>
</div>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_AEthier.png" alt="Adrienne Ethier" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/adrienne-ethier">Adrienne Ethier</a></p>
<p>Sp&eacute;cialiste de l&rsquo;&eacute;valuation des risques environnementaux,Division de l&rsquo;&eacute;valuation des risques environnementaux</p>
</div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MHerom.png" alt="Matthew Herod" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/matthew-herod">Matthew Herod</a></p>
<p>Agent principal de projet, Division du programme de r&eacute;glementation des Laboratoires Nucl&eacute;aires Canadiens</p>
</div>
</div>
</div>  	<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_sonNguyen_feature.png" alt="Son Nguyen" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/son-nguyen">Son Nguyen</a></p>
<p>Sp&eacute;cialiste technique en g&eacute;oscience, Division des g&eacute;osciences</p>
</div>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_NFrigault.png" alt="Nicole Frigault" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/nicole-frigault">Nicole Frigault</a></p>
<p>Sp&eacute;cialiste de l&rsquo;&eacute;valuation environnementale, Division de l&rsquo;&eacute;valuation environnementale</p>
</div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_shizhongLei_feature.png" alt="Shizhong Lei" />
<div className="image-caption">
<p><a href="/fra/about-us/our-experts/shizhong-lei">Shizhong Lei</a></p>
<p>Sp&eacute;cialiste technique en g&eacute;oscience, Division des g&eacute;osciences</p>
</div>
</div>
</div>
</div>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }