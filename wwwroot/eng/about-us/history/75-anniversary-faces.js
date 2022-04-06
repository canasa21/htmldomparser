import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC", 
                dateModified: "2021-07-19",
                langToggleUrl: "/fra/about-us/history/75-anniversary-faces"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<p>Meet some of our colleagues from across Canada. Day after day, they strive to ensure the safety of Canadians and our environment. Find out more about what they do and how they do it by getting to know some of the faces of the CNSC.</p>
</div>
<div className="col-md-22 equalize">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-elias-dagher.png"/>
<p><a href="/eng/about-us/our-experts/elias-dagher">Elias Dagher</a></p>
<p>Environmental Risk Assessment Specialist</p>  	</div>  	<div className="col-md-6">
<img alt="" src="/images/our-experts/web-faces-richard-dubois.png"/>
<p><a href="/eng/about-us/our-experts/richard-dubois">Richard Dubois</a></p>
<p>Chief Security Officer</p>  	</div>  	<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-eastern.png"/>
<p><a href="/eng/about-us/our-experts/eastern-regional-office">Eastern Regional Office</a></p>  	</div>
</div>
<div className="col-md-22 equalize">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-louise-levert.png"/>
<p><a href="/eng/about-us/our-experts/louise-levert">Louise Levert</a></p>
<p>Senior Tribunal Officer</p>  	</div>  	<div className="col-md-6">
<img alt="" src="/images/our-experts/web-faces-adam-levine.png"/>
<p><a href="/eng/about-us/our-experts/adam-levine">Adam Levine</a></p>
<p>Team Leader, Indigenous Relations and Participant Funding</p>  	</div>  	<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-kavita-murthy.png"/>
<p><a href="/eng/about-us/our-experts/kavita-murthy">Kavita Murthy</a></p>
<p>Director General, Nuclear Cycle and Facilities Regulation Directorate</p>  	</div>
</div>
<div className="col-md-22 equalize">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-son-nguyen.png"/>
<p><a href="/eng/about-us/our-experts/son-nguyen">Son Nguyen</a></p>
<p>Geoscience Technical Specialist</p>  	</div>  	<div className="col-md-6">
<img alt="" src="/images/our-experts/web-faces-jean-claude-poirier.png"/>
<p><a href="/eng/about-us/our-experts/jean-claude-poirier">Jean-Claude (JC) Poirier</a></p>
<p>Senior Project Officer</p>  	</div>  	<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-kiza-sauve.png"/>
<p><a href="/eng/about-us/our-experts/faces-kiza-sauve">Kiza Sauvé</a></p>
<p>Director, Health Sciences and Environmental Compliance Division</p>  	</div>
</div>
<div className="col-md-22 equalize">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-laura-shugart.png"/>
<p><a href="/eng/about-us/our-experts/laura-shugart">Laura Shugart</a></p>
<p>Project Officer</p>  	</div>  	<div className="col-md-6">
<img alt="" src="/images/our-experts/web-faces-southern-ontario.png"/>
<p><a href="/eng/about-us/our-experts/southern-ontario-regional-office">Southern Ontario Regional Office</a></p>  	</div>  	<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-western.png"/>
<p><a href="/eng/about-us/our-experts/western-regional-office">Western Regional Office</a></p>  	</div>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }