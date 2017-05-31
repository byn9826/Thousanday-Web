import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";
class Terms extends Component {
    render() {
        return (
            <div id="react-root">
                <Header restrict={true} />
                <main id="main">
                    <h2>Thousanday Terms of Service and Privacy Policy</h2>
                    <h4>1. Terms</h4>
                    <h5>By accessing the website at http://thousanday.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</h5>
                    <h4>2. Use License</h4>
                    <h5>Permission is granted to temporarily download one copy of the materials (information or software) on Thousanday's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;modify or copy the materials;</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;attempt to decompile or reverse engineer any software contained on Thousanday's website;</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;remove any copyright or other proprietary notations from the materials; or</h5>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;transfer the materials to another person or "mirror" the materials on any other server.</h5>
                    <h5>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Thousanday at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</h5>
                    <h4>3. Disclaimer</h4>
                    <h5>The materials on Thousanday's website are provided on an 'as is' basis. Thousanday makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</h5>
                    <h5>Further, Thousanday does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</h5>
                    <h4>4. Limitations</h4>
                    <h5>In no event shall Thousanday or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Thousanday's website, even if Thousanday or a Thousanday authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</h5>
                    <h4>5. Accuracy of materials</h4>
                    <h5>The materials appearing on Thousanday's website could include technical, typographical, or photographic errors. Thousanday does not warrant that any of the materials on its website are accurate, complete or current. Thousanday may make changes to the materials contained on its website at any time without notice. However Thousanday does not make any commitment to update the materials.</h5>
                    <h4>6. Links</h4>
                    <h5>Thousanday has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Thousanday of the site. Use of any such linked website is at the user's own risk.</h5>
                    <h4>7. Modifications</h4>
                    <h5>Thousanday may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</h5>
                    <h4>8. Governing Law</h4>
                    <h5>These terms and conditions are governed by and construed in accordance with the laws of CA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</h5>
                    <h4>9. Google reCAPTCHA</h4>
                    <h5>This website have implemented the Invisible reCAPTCHA and that their use of the Invisible reCAPTCHA is subject to the Google <a href="https://www.google.com/intl/en/policies/privacy/">Privacy Policy</a> and <a href="https://www.google.com/intl/en/policies/terms/">Terms of Use</a>.</h5>
                    <h2>Privacy Policy</h2>
                    <h5>Your privacy is important to us.</h5>
                    <h5>It is Thousanday's policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below.</h5>
                    <h5>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</h5>
                    <h5>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</h5>
                    <h5>We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law.</h5>
                    <h5>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</h5>
                    <h5>We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</h5>
                    <h5>We will make readily available to customers information about our policies and practices relating to the management of personal information.</h5>
                    <h5>We will only retain personal information for as long as necessary for the fulfilment of those purposes.</h5>
                    <h5>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Thousanday may change this privacy policy from time to time at Thousanday's sole discretion.</h5>
                </main>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Terms />, document.getElementById("root"));