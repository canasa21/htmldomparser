import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Louise Levert", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/louise-levert"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-louise-levert.png"/>
<p>
Louise Levert<br/>
Senior Tribunal Officer
</p>
</div>
<div className="col-md-8 ">
<p>Louise Levert has worked with the CNSC for over 20 years. In her current role as Senior Tribunal Officer, she plans and coordinates the Commission&#39;s public hearings and meetings. Louise is the point of contact between Commission members, CNSC staff, licensees and intervenors for public proceedings. Louise says, “Public Commission hearings and meetings offer a great opportunity for Canadians to be informed on how the CNSC regulates and licenses the nuclear industry. My work is to help participants get involved and have their say in the process.”</p>
<p>As the registrar for all the records of the Commission, she ensures that documents for Commission proceedings are readily available to all those who are interested. </p>
<p>As a CNSC ambassador, Louise makes sure all those who wish to participate in Commission proceedings have the necessary information, tools and guidance to have their voices heard.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }