import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Denis Saumure", 
                dateModified: "2021-12-22",
                langToggleUrl: "/fra/about-us/our-experts/denis-saumure"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Commission Registry</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_Denis-Saumure_sub.png" alt="Denis Saumure" />
<figcaption>Denis Saumure,<br/>
Commission Registrar</figcaption>
</figure>
</div>
<p>Denis joined the Legal Services team as counsel in 2008. Since then, his work has focused on providing legal advice to the Commission and CNSC staff to ensure that regulatory actions and governance functions are properly anchored in legal tenets and within the mandate established by the CNSC&rsquo;s enabling statute, the <em>Nuclear Safety Control Act</em>.</p>
<p>Denis&rsquo; work with Legal Services has given him an excellent horizontal and integrated view of the organization and an understanding of how CNSC staff provide specialized advice and services to enable the Commission to fulfill its mandate. Many of the files Denis has worked on have dealt with procedural elements ,such as the need for a more open and transparent regulatory approach, as well as the evolution of reconciliation requirements and the CNSC&rsquo;s duty to consult. Denis has provided relevant and effective legal responses that contribute to the Commission&rsquo;s objective of being a modern and trusted regulator.&nbsp;</p>
<h2>Expertise and education</h2>
<p>Denis holds an LLB and a master&rsquo;s degree in law. After joining the public service in 2003, his work focused on providing legal expertise and perspective within the regulatory sphere, having worked with the National Energy Board prior to joining the CNSC. His main areas of practice are administrative, constitutional, environmental and Aboriginal law. He also holds a graduate diploma in international nuclear law from the Universit&eacute; de Montpellier, France, having the opportunity to delve deeper into international nuclear law, nuclear security fundamentals, conventions and the role of the international nuclear agencies.</p>
<h2>Roles and responsibilities </h2>
<p>As of January 1, 2022, what was previously known as the Commission Secretariat and Secretary became the Commission Registry and Registrar. As a part of this restructuring, Denis has taken on the new role of Commission Registrar. In this role, Denis will be responsible for the management and administration of the Commission Registry which now includes a legal advisory role to assist the Commission with regard to the rules of procedural fairness and contemporary administrative law standards for statutory decision-making.</p>
<h2>Other roles</h2>
<p>In his time with the CNSC, Denis has had the opportunity to be the legal counsel on 2 joint review panels, for the Darlington New Build and the Deep Geological Repository (DGR). Both offered an opportunity to work with Commission members, experts, licensees, Indigenous communities, and intervenors. The Darlington New Build panel focused on work that had not occurred in Canada for over 30 years, and the DGR panel was a completely novel proposition.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }