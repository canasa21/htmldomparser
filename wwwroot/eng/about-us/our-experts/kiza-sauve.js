import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Kiza Sauvé, BASc", 
                dateModified: "2021-07-19",
                langToggleUrl: "/fra/about-us/our-experts/kiza-sauve"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Director, Health Sciences and Environmental Compliance Division, CNSC</p>
<h2>Expertise</h2>
<p>Chemical Engineering, Nuclear Waste, Nuclear, Licensing and  Compliance, Environmental Assessments, Deep Geologic Repositories, Radiation  Biology, Epidemiology</p>
<h2>Preferred language</h2>
<p>English</p>
<h2>Other languages</h2>
<p>French</p>
<h2>Roles and responsibilities </h2>
<p>Kiza Sauv&eacute; is the Director of the  Health Sciences and Environmental Compliance Division at the Canadian Nuclear  Safety Commission (CNSC). Since 2001, she has worked at the CNSC in a wide  range of areas, such as wastes and decommissioning, environmental and radiation  protection, environmental assessment, environmental compliance and laboratory  services, and now health sciences and environmental compliance. Ms. Sauv&eacute;  is passionate about communicating about science with Canadians. She has  contributed her expertise to CNSC ZED Talks and is a member of the Leading  Group of Women in Nuclear (WiN) Canada, Eastern Ontario Chapter. She is a  member of the COHERE Scientific Committee and provides leadership and oversight  to the team.</p>
<h2>Current research and/or projects</h2>
<ul>
<li>Oversight and leadership on all health sciences  projects, including COHERE</li>
</ul>
<h2>Education</h2>
<ul>
<li>Bachelor of Applied Science in Chemical  Engineering, University of Ottawa (1997&ndash;2001)</li>
</ul>
<h2>Professional activities/interests</h2>
<ul>
<li>Outreach and risk communication, health science  research, environmental compliance and monitoring</li>
</ul>
<h2>Affiliations</h2>
<ul>
<li>Women in Nuclear Canada &ndash; Chair, Eastern Ontario  Chapter </li>
</ul>
<h2>Additional links</h2>
<ul>
<li><a href="https://www.linkedin.com/in/kiza-sauve/">LinkedIn profile</a></li>
</ul>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }