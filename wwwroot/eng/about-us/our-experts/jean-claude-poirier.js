import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Jean-Claude (JC) Poirier", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/jean-claude-poirier"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-jean-claude-poirier.png"/>
<p>
Jean-Claude (JC) Poirier<br/>
Senior Project Officer
</p>
</div>
<div className="col-md-8 ">
<p>Jean-Claude (JC) Poirier, a senior project officer who has been at the CNSC for 26 years, works in the Internal Quality Management Division on corporate improvement initiatives. </p>
<p>JC has led the development and now manages the CNSC&#39;s Administrative Monetary Penalties (AMPs) Program. He has also been instrumental in developing the Conduct of Inspection corporate process and the Enforcement Strategy, and he&#39;s currently leading the development of the CNSC&#39;s corporate position on investigations. This includes working with training experts to develop and deliver Inspector Training and Qualification Program courses.</p>
<p>“My entire career has revolved around increasing the quality of our compliance and enforcement regime to better and more effectively serve and protect Canadians,” says JC.</p>
<p>With his vast expertise, he has become a subject-matter expert in his field and he has been actively involved in and has chaired the Community of Federal Regulators&#39; AMPs Working Group for the past 9 years.</p>
<p>Most recently, JC was asked to assist the Public Health Agency of Canada in developing and improving its compliance and enforcement program under the Quarantine Act for enforcing COVID-19 requirements for returning travellers at Canadian border crossings.</p>
<p>In June 2021, JC was presented with an Award of Excellence in <a href="/eng/resources/emergency-management-and-safety/pandemic-preparedness">Response to COVID-19</a> in recognition of his exceptional contributions to Canada&#39;s efforts during the pandemic.  </p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }