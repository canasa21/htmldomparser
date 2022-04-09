import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "CNSC Salary Ranges", 
                dateModified: "2021-09-16",
                langToggleUrl: "/fra/about-us/careers-at-cnsc/cnsc-salary-ranges"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>In this section you will find annual base pay salary ranges by CNSC employee type.</p>
<table className="">
<caption className="text-left">
Employee Salary Ranges &ndash; Effective April 1, 2021
</caption>
<tr>
<th className="">Level</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td>REG1</td>
<td className="text-center">$37,125</td>
<td className="text-center">$48,958</td>
</tr>
<tr>
<td>REG2</td>
<td className="text-center">$43,345</td>
<td className="text-center">$57,164</td>
</tr>
<tr>
<td>REG3</td>
<td className="text-center">$50,604</td>
<td className="text-center">$66,738</td>
</tr>
<tr>
<td>REG4</td>
<td className="text-center">$59,080</td>
<td className="text-center">$77,916</td>
</tr>
<tr>
<td>REG5</td>
<td className="text-center">$68,430</td>
<td className="text-center">$95,014</td>
</tr>
<tr>
<td>REG6</td>
<td className="text-center">$79,897</td>
<td className="text-center">$110,931</td>
</tr>
<tr>
<td>REG7</td>
<td className="text-center">$96,261</td>
<td className="text-center">$133,650</td>
</tr>
<tr>
<td>REG8</td>
<td className="text-center">$108,334</td>
<td className="text-center">$150,522</td>
</tr>  </table>  <table className="">
<caption className="text-left">
Executive Salary Ranges &ndash; Effective April 1, 2017
</caption>
<tr>
<th className="">Level</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">MGT</td>
<td className="text-center">$109,500</td>
<td className="text-center">$139,300</td>
</tr>
<tr>
<td className="text-left">RL-E1</td>
<td className="text-center">$131,600</td>
<td className="text-center">$154,800</td>
</tr>
<tr>
<td className="text-left">RL-E2</td>
<td className="text-center">$144,300</td>
<td className="text-center">$169,800</td>
</tr>
<tr>
<td className="text-left">RL-E3</td>
<td className="text-center">$166,100</td>
<td className="text-center">$195,400</td>
</tr>
<tr>
<td className="text-left">RL-E4</td>
<td className="text-center">$180,800</td>
<td className="text-center">$212,900</td>
</tr>  </table>  <table className="">
<caption className="text-left">
Law Practitioner Salary Ranges &ndash; Effective May 10, 2021
</caption>
<tr>
<th className="">Level</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">LP-01</td>
<td className="text-center">$82,430</td>
<td className="text-center">$113,687</td>
</tr>
<tr>
<td className="text-left">LP-02</td>
<td className="text-center">$114,884</td>
<td className="text-center">$158,449</td>
</tr>
<tr>
<td className="text-left">LP-03</td>
<td className="text-center">$139,221</td>
<td className="text-center">$175,163</td>
</tr>  </table>  <table className="">
<caption className="text-left">
Law Management Salary Ranges &ndash; Effective April 1, 2021
</caption>
<tr>
<th className="">Level</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">LC-01</td>
<td className="text-center">$140,900 </td>
<td className="text-center">$174,900</td>
</tr>
<tr>
<td className="text-left">LC-02</td>
<td className="text-center">$160,900 </td>
<td className="text-center">$198,700</td>
</tr>
<tr>
<td className="text-left">LC-03</td>
<td className="text-center">$185,300 </td>
<td className="text-center">$221,900</td>
</tr>  </table>  <table className="">
<caption className="text-left">
Student Salary Ranges &ndash; Effective May 1, 2020
</caption>
<tr>
<th className="">Level</th>
<th>Minimum</th>
<th>Maximum</th>
</tr>
<tr>
<td className="text-left">College</td>
<td className="text-center">$15.42/hr</td>
<td className="text-center">$20.80/hr</td>
</tr>
<tr>
<td className="text-left">University</td>
<td className="text-center">$17.88/hr</td>
<td className="text-center">$25.13/hr</td>
</tr>
<tr>
<td className="text-left">Master&rsquo;s </td>
<td className="text-center">&ndash;</td>
<td className="text-center">$27.86/hr</td>
</tr>
<tr>
<td className="text-left">Doctorate</td>
<td className="text-center">&ndash;</td>
<td className="text-center">$33.76/hr </td>
</tr>  </table>
</div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }