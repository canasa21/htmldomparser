import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Canadian Nuclear Safety Commission &ndash; 75 years of nuclear safety in Canada", 
                dateModified: "2022-01-04",
                langToggleUrl: "/fra/about-us/history/75-anniversary"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<img src="/images/75_landing_ban.png" alt="" />
<p>In the 1940s, the introduction of nuclear power was starting  to create excitement about limitless energy &ndash; but also gave rise to  uncertainty, curiosity and some fear, particularly against the backdrop of the  development of nuclear weapons. The need for technology control, knowledge and  oversight was apparent and thus began a journey to ensure that this highly  technical innovation was appropriately regulated, worldwide but also  specifically in Canada.</p>
<p className="mrgn-bttm-lg">October 12, 2021 marks the 75th anniversary of the Government  of Canada&rsquo;s proclamation of the Atomic  Energy Control Act. Since then, Canada has established a rich history of  nuclear regulation and become one of the world&rsquo;s most respected leaders in this  field.</p>
<img src="/images/75_landing_milestones.png" alt="" />
<h2 className="mrgn-tp-0">Milestones</h2>
<p>Explore the CNSC’s history through the decades. See how the CNSC has become a globally respected regulatory body that instills confidence and has a strong legacy of peace and safety.</p>
<p><a className="btn btn-primary" href="/eng/about-us/history/75-anniversary-milestones">Learn more</a></p>
<img src="/images/75th-landing-faces-02.png" alt="" />
<h2 className="mrgn-tp-0">Faces of the CNSC</h2>
<p>Our diverse, hardworking and dedicated colleagues contribute to the safety and protection of Canadians and the environment every single day. Meet some of the faces of the CNSC.</p>
<p><a className="btn btn-primary" href="/eng/about-us/history/75-anniversary-faces">Learn more</a></p>
<h2>Features</h2>
<h3><a href="/eng/about-us/our-experts/index">CNSC Experts</a></h3>
<img src="/images/web_experts_feature.png" alt="" />
<p>Meet CNSC experts.</p>
<h3><a href="/eng/about-us/history/presidents/index">CNSC Presidents</a></h3>
<img src="/images/web_history_thumb_presidents.png" alt="" />
<p>Meet the presidents of CNSC’s past and present.</p>
<h3><a href="/eng/about-us/history/75-anniversary-gallery">Photo Gallery</a></h3>
<img src="/images/75th_landing_210511_thumbs_Gallery.png" alt="" />
<p>View the CNSC’s dynamic history in pictures gathered from the archives.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }