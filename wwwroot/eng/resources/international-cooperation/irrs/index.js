import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Integrated Regulatory Review Service missions to Canada", 
                dateModified: "2020-02-18",
                langToggleUrl: "/fra/resources/international-cooperation/irrs/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>The purpose of an  Integrated Regulatory Review Service (IRRS) mission is to compare a country&rsquo;s  regulatory practices with international standards and equivalent good practices  elsewhere in the world.</p>  	<p> The approach is  based on a self-assessment designed to support continuous improvement among  Member States.</p>  	<h2> 2019 IRRS Mission </h2>  	<ul>
<li><a href="https://www.iaea.org/sites/default/files/documents/review-missions/irrs_canada_2019_final_report.pdf">2019  IRRS Report to Canada</a></li>
<li><a href="/eng/resources/international-cooperation/irrs/canada-response-irrs-2019-summary">2019  IRRS Report to Canada – executive summary</a></li>
<li><a href="/eng/resources/international-cooperation/irrs/canada-response-irrs-2019">Canada&rsquo;s  response to the 2019 IRRS Report</a></li>  	</ul>  	<h2>2009 IRRS Mission and 2011 follow-up  Mission</h2>  	<ul>
<li><a href="/eng/pdfs/irrs/2009-IRRS-Peer-Review-Report-and-CNSCs-Management-Response-eng.pdf">IRRS 2009 peer review report and CNSC  management response</a></li>
<li><a href="/eng/pdfs/irrs/2011-IRRS-Follow-up-Mission-to-Canada-Report-IAEA-NS-IRRS-2011-08-eng.pdf">2011  IRRS follow-up mission report</a></li>
<li><a href="/eng/pdfs/about/international/irrt/CNSC-Management-Response-e.pdf">2011  IRRS follow-up mission report &ndash; CNSC management response</a></li>  	</ul>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }