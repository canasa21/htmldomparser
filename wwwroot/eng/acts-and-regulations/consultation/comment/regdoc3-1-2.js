import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-3.1.2: Reporting Requirements for Non-Power Reactor Class I Nuclear Facilities and Uranium Mines and Mills", 
                dateModified: "2016-06-24",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc3-1-2"
        
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