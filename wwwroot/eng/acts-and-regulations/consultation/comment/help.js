import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "", 
                dateModified: "2014-01-23",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/help"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><a href="#a1">Completing the online comment form</a></p>
<p> <a href="#a2">Enabling cookies</a></p>
<p><a href="#a3">Other ways to submit comments</a></p>
<h3><a name="a1" id="a1"></a>Completing the online comment form </h3>
<h4>Step 1: Click the &ldquo;Comment&rdquo; btn at the end of each section in the draft Regulatory Document to add your comments for this section</h4>
<p>Please note: If you have general comments to add about the whole document, you can incorporate these into a cover letter at the end of your comment session.  To attach a cover letter, click on &lsquo;Finish your comment session and attach a cover letter&rsquo;. </p>
<h4>Step 2: Enter your name and organization information</h4>
<p>This information is required to ensure an open and transparent consultation process. You may choose to include your e-mail address if you wish for the CNSC to contact you about your comments.</p>
<p>Click on &ldquo;Submit&rdquo; to confirm your name and organization information. </p>
<p><span className="fontStrong">Timesaver tip:</span> Selecting &lsquo;Enable cookies&rsquo; in you computer&rsquo;s browser settings will allow you to save the information in these fields.  By enabling cookies, you will not have to re-enter your name and organization information for each section you comment on.</p>
<h4>Step 3: Enter your comments</h4>
<p>To enter your comments on a specific section, you type in your comments in the comment box or paste them from another document. Click on &ldquo;Submit&rdquo; to review your comments before submitting them to CNSC.</p>
<h4>Step 4: Submitting your comments to CNSC</h4>
<p>To change the comments you just entered, click the &ldquo;Modify&rdquo; btn to go back to the comment box. To comment on the same section again, click the &ldquo;Cancel&rdquo; btn to return to the document. </p>
<p>If you are satisfied with your comments after reviewing them, click the &ldquo;Confirm&rdquo; btn to submit them to CNSC. </p>
<p>You may print your submitted comments by clicking the &ldquo;Print&rdquo; btn. </p>
<h4>Step 5: Comments have been received</h4>
<p>Once you have submitted your comments on a specific section, you will have the option to either return to the draft Regulatory Document to continue your comment session, or complete your comment session and attach a cover letter.</p>
<p>To print your submission, click the Print btn.</p>
<h4>Step 6:  Complete the comment session</h4>
<p>After you click on Finish the comment session and attach a cover letter, you may attach a cover letter to provide the CNSC with general comments on the regulatory document. </p>
<p>To attach a cover letter, click the Browse btn, and select the document you wish to attach from your computer files. </p>
<h4>Step 7:  Tell us what you think</h4>
<p>The online comment form is a new service offered by the CNSC.  We would appreciate if you could take a few moments and offer your feedback on this online form.  Your comments matter to us and your feedback will help us improve this form. </p>
<h3> <a name="a2" id="a2"></a>Enabling cookies </h3>
<p>Cookies are small text files sent from a Web site to your computer. They tell that Web site when you have returned to the site.</p>
<p> A Web site may deliver one or more cookies your computer to retain settings and passwords for the next time you visit that site.  Online banking is an example of where a cookie is used to make it easier for repeat visitors. </p>
<p> Cookies will not compromise your privacy. They are in place to help you save time and make your online experience easier and more efficient.</p>
<p>To see if your browser supports cookies, and for detailed instructions about how to enable this feature, see your browser&rsquo;s Help file.</p>
<h4> <a name="a3" id="a3"></a>Other ways to submit comments</h4>
<p> In addition to using the online comment form, you may submit your comments: </p>
<p> <span className="fontStrong">By email:</span> <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></p>
<p><span className="fontStrong"> By mail: </span><br />
Canadian Nuclear Safety Commission <br />
Regulatory Framework Division <br />
P.O. Box 1046 , Station B <br />
280 Slater Street <br />
Ottawa , Ontario, Canada , K1P 5S9</p>
<p><span className="fontStrong">By fax:</span> 613-995-5086 </p>
<p> Please note that any comments submitted, including names and affiliations, may be made public. </p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }