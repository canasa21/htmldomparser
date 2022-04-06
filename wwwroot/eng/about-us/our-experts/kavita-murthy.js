import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Kavita Murthy", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/kavita-murthy"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/opR_qkgtTZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
Kavita Murthy<br/>
Director General, Nuclear Cycle and Facilities Regulation Directorate
</p>
</div>
<div className="col-md-12 ">
<p>Kavita Murthy is the Director General of the Directorate of Nuclear Cycle and Facilities Regulation. This directorate ensures that the safety of the public and the environment is not compromised by the activities carried out by facilities in the nuclear fuel cycle, research reactor and nuclear substance processing sectors. Kavita has been with the CNSC for 18 years.</p>
<p>“The primary objective of all our work is to ensure the safety of Canadians. It&#39;s important for the public to understand the risks related to nuclear use, but it&#39;s also important to know the work the CNSC does to guarantee those engaged in activities do so with appropriate safety and control measures,” says Kavita.</p>
<p>She has held 3 different director positions and was instrumental in establishing the regulatory requirements for the certification of radiation safety officers at Class II nuclear facilities. </p>
<p>Proactive and strategic, Kavita initiated divisional technical meetings to share information related to inspections. These meetings create an opportunity for open sharing of information and knowledge transfer within the division – therefore adding another element of transparency to the CNSC&#39;s work. </p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }