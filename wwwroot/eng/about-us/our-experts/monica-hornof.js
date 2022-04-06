import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Monica Hornof, P.Eng.", 
                dateModified: "2022-01-04",
                langToggleUrl: "/fra/about-us/our-experts/monica-hornof"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Bruce Regulatory Program Division</p>
<div className="pull-right col-md-3">
<figure><img src="/images/our-experts/web_experts_MHornof-sub.png" alt="" />
<figcaption>Monica Hornof,<br/>
Senior Regulatory Program Officer</figcaption>
</figure>
</div>
<p>Monica has worked for the CNSC since 2005. While her educational background is in chemical engineering, she has a keen interest in the legal aspects of nuclear regulation and an in-depth understanding and knowledge of the <em>Nuclear Safety and Control Act</em>, the CNSC regulatory framework and international nuclear regulation.</p>
<p>Prior to taking on the role of Senior Regulatory Program Officer, Monica led the Commission Technical Support team, including leading the development and implementation of virtual Commission proceedings guidelines in response to the COVID-19 pandemic. This work ensured the Commission could continue to operate effectively and efficiently in virtual environments, helping to modernize the way it conducts its work.</p>
<h2>Expertise and education</h2>
<p>Monica is a licensed professional engineer, having earned her chemical engineering degree at the University of Ottawa. Monica also has a graduate diploma in international nuclear law from the Universit&eacute; de Montpellier, France. In addition to her studies, she was the lead author on the published paper <em>Decontamination in the Event of a Chemical or Radiological Terrorist Attack</em> (2006) and co-authored the published paper <em>Emergency Management Education in Canada</em> (2004).</p>
<h2>Roles and responsibilities</h2>
<p>Monica&rsquo;s work is critical to the regulation of nuclear power plants, ensuring the licensee&rsquo;s programs and activities remain within the scope of its licensing basis. More specifically, she manages the Bruce Power licence conditions handbook. Monica is responsible for evaluating and monitoring facility performance in the management systems and human performance safety and control areas, in addition to reviewing operational experience related to operating Canadian nuclear power plants.</p>
<h2>Other roles</h2>
<p>Monica is a member of the Directorate of Power Reactor Regulation Small Modular Reactor (SMR) Working Group, tasked with ensuring the CNSC&rsquo;s regulatory preparedness for the eventual operational licensing and compliance verification of SMRs.</p>
<p>She is an advocate for gender equity and has been the co-chair of the CNSC&rsquo;s Women in Science, Technology, Engineering and Mathematics (STEM) Network since its launch in 2020. The goal of the network is to provide a safe space for all CNSC employees to come together, share experiences about their STEM careers and to inspire, empower and learn from each other.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }