import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Our Mission", 
                dateModified: "2014-03-26",
                langToggleUrl: "/fra/about-us/our-mission"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>The Canadian Nuclear Safety Commission regulates the use of nuclear energy and materials to protect health, safety, security and the environment; to implement Canada’s international commitments on the peaceful use of nuclear energy; and to disseminate objective scientific, technical and regulatory information to the public.</p>  	<p>Under the Nuclear Safety and Control Act, CNSC&rsquo;s mandate involves four major areas: </p>  	<ul>
<li>regulation of the development, production and use of nuclear energy in Canada to protect health, safety and the environment</li>
<li>regulation of the production, possession, use and transport of nuclear substances, and the production, possession and use of prescribed equipment and prescribed information </li>
<li>implementation of measures respecting international control of the development, production, transport and use of nuclear energy and substances, including measures respecting the non-proliferation of nuclear weapons and nuclear explosive devices </li>
<li>dissemination of scientific, technical and regulatory information concerning the activities of CNSC, and the effects on the environment, on the health and safety of persons, of the development, production, possession, transport and use of nuclear substances</li>  	</ul>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }