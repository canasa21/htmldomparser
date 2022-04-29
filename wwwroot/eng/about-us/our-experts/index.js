import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "CNSC Experts", 
                dateModified: "2022-04-28",
                langToggleUrl: "/fra/about-us/our-experts/"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="module col-md-12">
<p>As Canada&rsquo;s full lifecycle nuclear regulator, the CNSC has over 900 professionals within its ranks, located across the country. Our diverse, hardworking and dedicated colleagues strive to ensure the safety of Canadians and our environment. On this page, you&rsquo;ll meet just a few of the talented individuals who work at the CNSC and learn more about the important work they do. </p>
</div>
<div className="row">
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_ITremblay.png" alt="Isabelle Tremblay" className="img-responsive" />
<p><a href="/eng/about-us/our-experts/isabelle-tremblay">Isabelle Tremblay</a></p>
<p>Program Officer, Transport Licensing and Strategic Support Division</p>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_NKwamena.png" alt="Nana Kwamena" className="img-responsive" />
<p><a href="/eng/about-us/our-experts/nana-kwamena">Nana Kwamena</a></p>
<p>Director, Environmental Assessment Division</p>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_CMoses.png" alt="Colin Moses" className="img-responsive" />
<p><a href="/eng/about-us/our-experts/colin-moses">Colin Moses</a></p>
<p>Director General, Information Management and Technology Directorate and Chief Information Officer</p>
</div>
</div>
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MHornof.png" alt="Monica Hornof" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/monica-hornof">Monica Hornof</a></p>
<p>Senior Regulatory Program Officer, Bruce Regulatory Program Division</p>
</div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_Denis-Saumure.png" alt="Denis Saumure" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/denis-saumure">Denis Saumure</a></p>
<p>Commission Registrar</p>
</div>
</div>
</div>
</div>
<h2>Near Surface Disposal Facility</h2>
<div className="row">
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MGacem.png" alt="Mohamed Cherif Gacem" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/mohamed-gacem">Mohamed Cherif Gacem</a></p>
<p>Senior Project Officer, Canadian Nuclear Laboratories Regulatory Program Division</p>
</div>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_AEthier.png" alt="Adrienne Ethier" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/adrienne-ethier">Adrienne Ethier</a></p>
<p>Environmental Risk Assessment Specialist, Environmental Risk Assessment Division</p>
</div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_MHerom.png" alt="Matthew Herod" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/matthew-herod">Matthew Herod</a></p>
<p>Senior Project Officer, Canadian Nuclear Laboratories Regulatory Program Division</p>
</div>
</div>
</div>
<div className="equalize">
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_sonNguyen_feature.png" alt="Son Nguyen" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/son-nguyen">Son Nguyen</a></p>
<p>Geoscience Technical Specialist, Geoscience Division</p>
</div>
</div>
<div className="col-md-4"> <img src="/images/our-experts/web_experts_NFrigault.png" alt="Nicole Frigault" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/nicole-frigault">Nicole Frigault</a></p>
<p>Environmental  Assessment Specialist, Environmental  Assessment Division</p></div>
</div>
<div className="col-md-4 "> <img src="/images/our-experts/web_experts_shizhongLei_feature.png" alt="Shizhong Lei" className="img-responsive" />
<div className="image-caption">
<p><a href="/eng/about-us/our-experts/shizhong-lei">Shizhong Lei</a></p>
<p>Geoscience Technical Specialist, Geoscience Division</p>
</div>
</div>
</div>
</div>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }