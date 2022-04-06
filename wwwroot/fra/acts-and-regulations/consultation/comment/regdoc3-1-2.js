import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-3.1.2: Exigences relatives à la production de rapports : Installations nucléaires de catégorie I non productrices de puissance et mines et usines de concentration d'uranium", 
                dateModified: "2016-06-24",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc3-1-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }