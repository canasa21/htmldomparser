import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Student Benefits at a Glance", 
                dateModified: "2018-01-26",
                langToggleUrl: "/fra/about-us/careers-at-cnsc/CNSC-Student-Benefits"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p className="lead">(Full Time or Part time Terms 3 months and more)</p>
<p>The CNSC is focused on helping students develop their careers and take advantage of opportunities to learn and gain valuable experience in their field of study. With a number of unique benefits offered to students that are designed to support work-life balance and operational productivity, the CNSC offers a compensation and benefit package that is one of the most competitive in the federal sector.</p>
<h2>Recognition</h2>
<p>The CNSC Recognition program recognizes and honours employees&#39; and teams&#39; initiatives, their contributions to the priorities and success of the CNSC and the promotion of its culture and values. It also supports the Values and Ethics Code for the Public Service. All CNSC indeterminate and term employees as well as those on interchange can be recognized under this framework.</p>
<h2>Learning</h2>
<p>The CNSC is committed to supporting the development of skills and knowledge as this enhances the efficiency and effectiveness of our operations and builds a professional, competent, versatile and motivated workforce.</p>
<table className="width-100 table">
<caption className="lead text-left">
Other benefits include:
</caption>
<tr>
<th>Annual Leave</th>
<td><ul>
<li> Prorated based on number of hours worked up to a maximum of 15 days/year</li>
</ul></td>
</tr>
<tr>
<th>Sick Leave</th>
<td><ul>
<li> Employees earn 1.25 paid days/month which can be accumulated</li>
</ul></td>
</tr>
<tr>
<th>Designated Paid Holidays</th>
<td><ul>
<li> 11 paid days/year</li>
</ul></td>
</tr>
<tr>
<th>Banked Time</th>
<td><ul>
<li> Employees may bank up to 37.5 hrs extra hours based on productive work that can be taken as leave at a later date (with management pre-approval)</li>
<li> Can be replenished as it is used</li>
</ul></td>
</tr>
<tr>
<th>Overtime / Travel time</th>
<td><ul>
<li>Overtime premium is paid where additional hours or travel are required by management.</li>
</ul></td>
</tr>
<tr>
<th>Benefits plans*<br />
For Coop students working a term longer than 6 months</th>
<td><ul>
<li> <a href="https://www.canada.ca/en/treasury-board-secretariat/topics/benefit-plans/plans/dental-care-plan.html">Public Service Dental Care Plan (PSDCP)</a></li>
<li><a href="http://www.pshcp.ca/">Public Service Health Care Plan (PSHCP)</a></li>
<li><a href="https://www.canada.ca/en/treasury-board-secretariat/topics/benefit-plans/plans/disability-insurance-plan.html">Disability Insurance (DI)</a></li>
<li> <a href="http://www.tpsgc-pwgsc.gc.ca/remuneration-compensation/services-pension-services/pension/video/psdd-sdb-eng.html">Supplementary Death Benefit Plan (SDBP)</a></li>
<li><a href="https://www.canada.ca/en/treasury-board-secretariat/topics/pension-plan.html"> Superannuation Plan (PSSP)</a></li>
</ul></td>
</tr>
</table>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }