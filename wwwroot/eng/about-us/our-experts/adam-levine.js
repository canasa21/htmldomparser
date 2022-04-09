import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Adam Levine", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/adam-levine"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-adam-levine.png"/>
<p>
Adam Levine<br/>
Team Leader, Indigenous Relations and Participant Funding
</p>
</div>
<div className="col-md-8 ">
<p>Adam Levine has worked at the CNSC since 2012. As Team Leader for Indigenous Relations and Participant Funding, Adam is responsible for leading a dynamic team that works with Indigenous communities and members of the public across the country. His team provides advice and supports staff and management in ensuring that the CNSC fulfills its duty to consult with Indigenous groups who may be impacted by Commission decisions
and CNSC regulatory processes. Adam and his team work with over 98 different Indigenous communities. He&#39;s also responsible for managing and administering the Participant Funding Program, which supports the participation of Indigenous groups, NGOs, civil society organizations and members of the public in regulatory processes.</p>
<p>Adam notes, “We&#39;re actively engaging interested Indigenous communities throughout the lifecycle of nuclear facilities and working to build collaborative relationships and trust.”</p>
<p>His team helps to ensure that local communities, Indigenous groups and key stakeholders have their voices heard as part of Commission proceedings. The team plays an important role in ensuring that the CNSC has an accessible and transparent regulatory process that builds confidence and trust in the CNSC&#39;s decisions and in its ongoing regulatory oversight of nuclear facilities in Canada.</p>
<p>“Being able to engage with people and communities in many different areas of the country is the aspect of the job that I love the most,” says Adam.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }