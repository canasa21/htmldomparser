import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Our Mission", 
                dateModified: "2022-04-25",
                langToggleUrl: "/fra/about-us/our-mission"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<h2 className="mrgn-tp-sm">Mandate</h2>
<p>The Canadian Nuclear Safety Commission regulates the use of nuclear energy and materials to protect health, safety, security and the environment; to implement Canada&rsquo;s international commitments on the peaceful use of nuclear energy; and to disseminate objective scientific, technical and regulatory information to the public.</p>  	<p>Under the <em>Nuclear  Safety and Control Act</em>, CNSC's mandate involves four major areas: </p>
<ul>
<li>regulation of the development,  production and use of nuclear energy in Canada to protect health, safety and  the environment</li>
<li>regulation of the production,  possession, use and transport of nuclear substances, and the production,  possession and use of prescribed equipment and prescribed information </li>
<li>implementation of measures  respecting international control of the development, production, transport and  use of nuclear energy and substances, including measures respecting the  non-proliferation of nuclear weapons and nuclear explosive devices </li>
<li>dissemination of scientific, technical  and regulatory information concerning the activities of CNSC, and the effects  on the environment, on the health and safety of persons, of the development,  production, possession, transport and use of nuclear substances</li>
</ul>
</div>
<img src="/images/about-us/mission-vision/w_vision-720.png" alt="" className="img-responsive"/> </div>
<h2 className="mrgn-tp-sm">Vision</h2>
<p>To be a world-class nuclear regulator</p>
<h2>Strategic priorities</h2>
<div className="col-md-12">
<div className="col-md-8 ">
<img src="/images/about-us/mission-vision/w_p-modern.png" alt="" className="img-responsive"/>
<p className="lead">To be a <strong>modern</strong> nuclear regulator </p>
<ul>
<li>Robust, performance-based,  regulatory framework</li>
<li>Science- and evidence-based  decisions and risk-informed actions</li>
<li>Enable  technological innovation</li>
</ul>
</div>
<div className="col-md-8 ">
<img src="/images/about-us/mission-vision/w_p-trusted.png" alt="" className="img-responsive"/>
<p className="lead">To be a <strong>trusted</strong> regulator </p>
<ul>
<li>Independent, transparent, fair and  competent</li>
<li>Credible source of scientific and  technical information</li>
<li>Strong safety culture</li>
<li>Respectful and inclusive  engagement</li>
</ul>
</div>
<div className="col-md-8 ">
<img src="/images/about-us/mission-vision/w_p-global.png" alt="" className="img-responsive"/>
<p className="lead">To be a leader and influence <strong>global</strong> nuclear efforts </p>
<ul>
<li>Leadership role in enhancing  nuclear safety and security, and harmonization of regulatory practices</li>
<li>Strong international relationships</li>
<li>Share  and leverage knowledge and best practices</li>
</ul>
</div>
<div className="col-md-8 ">
<img src="/images/about-us/mission-vision/w_p-agile.png" alt="" className="img-responsive"/>
<p className="lead">To be an <strong>agile</strong> organization </p>
<ul>
<li>Embrace change</li>
<li>Inclusive and representative  workforce</li>
<li>Empowered  and digitally enabled</li>
</ul>
</div>
<h2>Values and culture</h2>  	<ul>
<li><strong>Respect</strong> the rights and contributions of  everyone</li>
<li>Act with <strong>integrity</strong> in all that we do</li>
<li>Commit to being of <strong>service</strong> to Canadians,  Indigenous peoples and the government</li>
<li>Always strive for <strong>excellence</strong> in our work</li>
<li>Commit to personal and professional <strong>responsibility</strong></li>
<li>Promote and adhere to a strong culture of <strong>safety</strong></li>
</ul>
<h2 className="mrgn-bttm-md">Features</h2>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/pdfs/about/vision/E-DOCS-6722096-v2-Achieving_our_Vision_EN.pdf">Achieving our vision (94 KB, PDF) <img src="/images/about-us/mission-vision/w_vision-pager-en-720.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Learn about our strategic priorities and the values that help us meet our mandate.</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/">Acts and regulations <img src="/images/about-us/mission-vision/w_acts-720.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Learn more about the legislation and guidance documents that inform our  regulatory framework.</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/about-us/values-and-ethics/">Values and ethics <img src="/images/about-us/mission-vision/w_ethics-720.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Access the full CNSC Values and Ethics Code, which provides a foundation for fulfilling our duties.</p>
</div>
</div>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }