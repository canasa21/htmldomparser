import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "The Nuclear Liability and Compensation Act", 
                dateModified: "2017-01-20",
                langToggleUrl: "/fra/acts-and-regulations/acts/nuclear-liability-and-compensation-act"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>In February 2015,  the <em>Nuclear Liability and Compensation Act</em> (NLCA) received Royal Assent,  replacing the 1976 <em>Nuclear Liability Act</em>. On May&nbsp;18, 2016, the<em> Nuclear  Liability and Compensation Regulations</em> (the Regulations) were published in  the Canada Gazette, Part&nbsp;II, and on January 1, 2017  both the NLCA and the Regulations came into force. For more information on the  NLCA, including Canadian nuclear installations and related liability amounts  and nuclear insurance, visit <a href="https://www.nrcan.gc.ca/energy/uranium-nuclear/19224">Natural Resources Canada</a>.</p>
<p>Key features of  the NLCA include:</p>
<ul>
<li>strengthening the compensation and civil liability regime for damages that result from a nuclear accident</li>
<li>increasing a nuclear operator&rsquo;s liability for damage from $75 million to $1 billion</li>
<li>designating &ldquo;nuclear installations&rdquo; and their respective liability amounts</li>
<li>maintaining that no person other than the operator is held responsible and accountableto the Canadian public for nuclear incidents that cause damage, and for which an operator is liable under this act</li>
</ul>  <p>The NLCA applies to nuclear facilities designated as nuclear installations. These include:</p>
<ul>
<li>nuclear power plants</li>
<li>nuclear research reactors</li>
<li>nuclear material processing plants</li>
<li>facilities used to manage nuclear fuel waste and other radioactive waste</li>
</ul>
<p>The NLCA does not apply to facilities such as uranium mines, refineries  using natural uranium, and hospital nuclear laboratories.</p>
<h2>Liability limits</h2>
<p>For nuclear power plants, the operator&rsquo;s liability limit is  $650 million, rising to $1 billion over a three-year  transition period.</p>
<p>For all other nuclear installations (such as nuclear research reactors,  fuel fabrication facilities and nuclear fuel waste management facilities) the Regulations  define the classes of nuclear installations and specify lower operator liability  limits, reflecting the risk of each installation.</p>
<p>The Canadian Nuclear Safety Commission has acted in an advisory role to the  Minister of Natural Resources on the designation of facilities under these Regulations, including the classes of facilities and  their definitions. Natural Resources Canada will oversee the enforcement of the  Regulations, and the Minister of Natural Resources will be responsible for all  issues related to operators&rsquo; financial responsibility pursuant to the NLCA.</p>
<h2>Additional information:</h2>
<ul>
<li>Natural Resources Canada&rsquo;s <a href="https://www.nrcan.gc.ca/energy/uranium-nuclear/19224"><em>Nuclear
Liability and Compensation Act</em> information page</a></li>
<li>Natural Resources Canada&rsquo;s <a href="http://www.laws.justice.gc.ca/eng/acts/N-28.1/FullText.html"><em>Nuclear Liability and Compensation Act</em></a></li>
<li>Natural Resources Canada&rsquo;s <a href="http://www.gazette.gc.ca/rp-pr/p2/2016/2016-05-18/html/sor-dors88-eng.php"><em>Nuclear Liability and Compensation Regulations</em></a></li>
<li>Presentation by Natural Resources  Canada at the 2014 21st INLA Congress entitled <a href="http://www.nuclearsafety.gc.ca/eng/pdfs/acts-and-regulations/strengthening-nuclear-liability-regime-eng.pdf">Strengthening Canada&rsquo;s nuclear liability regime</a>. </li>
</ul>
</div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }