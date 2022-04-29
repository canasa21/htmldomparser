import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "History of the Canadian Nuclear Safety Commission", 
                dateModified: "2022-03-31",
                langToggleUrl: "/fra/about-us/history/"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div id="top-banner" className="col-md-12"> <img src="/images/20th-anniversary/web_history_banner.png" alt="" className="img-responsive"/> </div>
<p>On October 12, 1946, the Government of Canada proclaimed the <em>Atomic Energy Control Act</em>. Under the Act, the Atomic Energy Control Board was formed as a regulatory agency to provide for &ldquo;control and supervision of the development, application and use of atomic energy and to enable Canada to participate effectively in measures of international control of atomic energy.&rdquo;</p>
<p>On May 31, 2000, the <a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html"><em>Nuclear Safety and Control Act</em></a> replaced the <em>Atomic Energy and Control Act</em> and the <a href="http://nuclearsafety.gc.ca/eng/about-us/">Canadian Nuclear Safety Commission</a> (CNSC) was established. The new act provided the CNSC with the authority to regulate the development, production and use of nuclear energy and the production, possession and use of nuclear substances, prescribed equipment and prescribed information in Canada.</p>
<h2>Canada&rsquo;s rich history of nuclear regulation</h2>
<div className="col-md-12">
<div className="col-md-12 ">
<img src="/images/75th-anniversary/updates-landing-milestones.png" alt="" className="img-responsive" />
</div>
<div className="col-md-8 ">
<h3 className="mrgn-tp-0">Milestones</h3>
<p>Explore the CNSC&rsquo;s history through the decades. See how the CNSC has become a globally respected regulatory body that instills confidence and has a strong legacy of peace and safety.</p>
<p><a className="btn btn-primary" href="/eng/about-us/history/75-anniversary-milestones">Learn more</a></p>
</div>
</div>
<div className="col-md-12">  	<div className="col-md-4 ">
<h3><a href="/eng/about-us/history/75-anniversary-gallery">Photo Gallery</a></h3>
<img src="/images/75th-anniversary/75th_landing_210511_thumbs_Gallery.png" alt="" className="img-responsive"/>
<p>View the CNSC&rsquo;s dynamic history in pictures gathered from the archives.</p>
</div>
<div className="col-md-4">
<h3><a href="/eng/about-us/history/2021-review">A year in review</a></h3>
<a href="/eng/about-us/history/2021-review"> <img src="/images/2021-review/web_yir_thumbs_2021_360x203.png" alt="" className="img-responsive"/> </a>
<p>CNSC highlights of 2021</p>
</div>
<div className="col-md-4 ">
<h3><a href="/eng/about-us/history/presidents/">Our presidents</a></h3>
<a href="/eng/about-us/history/presidents/"> <img src="/images/20th-anniversary/web_history_thumb_presidents.png" alt="" className="img-responsive"/> </a>
<p>List of presidents from 1946 to present</p>
</div>
</div>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }