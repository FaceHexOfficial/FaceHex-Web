import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Initialize AOS for the Apple-like fade-up scroll animations
    AOS.init({
      duration: 1000,
      once: false, // Set to false so it animates when scrolling UP and DOWN
      easing: 'ease-out-cubic',
      offset: 50,
    });
    
    // Refresh AOS in case route changes mess up the trigger heights
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const EmailLink = ({ email }) => (
    <a href={`mailto:${email}`} className="text-white font-semibold hover:text-gray-300 underline underline-offset-4 transition-colors">
      {email}
    </a>
  );

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">FACEHEX PRIVACY POLICY</h1>
          <div className="h-1 w-24 bg-white/20 mb-8 rounded-full"></div>
          <p className="text-gray-400 text-lg mb-20 uppercase tracking-widest font-semibold">
            Effective Date: <span className="text-white">June 06, 2026</span><br/>
            Last Updated: <span className="text-white">June 06, 2026</span>
          </p>
        </div>
        
        {/* We use explicit Tailwind classes because the prose plugin is not installed */}
        <div className="text-gray-400 font-sans text-lg leading-relaxed space-y-24">
          
          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">1. INTRODUCTION</h2>
            <div className="space-y-4">
              <p>This Privacy Policy ("Policy") explains how FaceHex ("FaceHex", "we", "our", or "us") collects, uses, stores, protects, processes, and discloses information when you access or use the FaceHex mobile application, website, support systems, AI-powered face-swapping services, and related products and services.</p>
              <p>By downloading, installing, registering for, accessing, or using FaceHex, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
              <p>If you do not agree with this Privacy Policy, you must discontinue use of FaceHex immediately.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">2. ABOUT FACEHEX</h2>
            <div className="space-y-4 mb-6">
              <p>FaceHex is an AI-powered facial transformation and face-swapping application designed to allow users to perform image-based and real-time face modifications using artificial intelligence and machine learning technologies.</p>
              <p>FaceHex may provide features including:</p>
            </div>
            <ul className="list-disc pl-6 space-y-3 marker:text-white/30 text-gray-300">
              <li>AI face swapping</li>
              <li>Facial enhancement</li>
              <li>Real-time face transformation</li>
              <li>Camera-based processing</li>
              <li>Photo-based processing</li>
              <li>AI-generated image outputs</li>
              <li>User account authentication</li>
              <li>Cloud-based support services</li>
            </ul>
          </section>

          <section>
            <h2 data-aos="fade-up" className="text-3xl font-display font-bold text-white mb-10 tracking-wide">3. INFORMATION WE COLLECT</h2>
            
            <div data-aos="fade-up" className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500">
              <h3 className="text-xl font-bold text-white mb-4">3.1 Information You Provide</h3>
              <p className="mb-4">When using FaceHex, we may collect:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 marker:text-white/30 text-gray-300">
                <li>Name</li>
                <li>Email Address</li>
                <li>Google Account Identifier</li>
                <li>Account Profile Information</li>
                <li>Support Communications</li>
                <li>Feedback Submissions</li>
                <li>User Generated Reports</li>
              </ul>
            </div>

            <div data-aos="fade-up" className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500">
              <h3 className="text-xl font-bold text-white mb-4">3.2 Device Information</h3>
              <p className="mb-4">We may automatically collect:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 marker:text-white/30 text-gray-300">
                <li>Device Model</li>
                <li>Device Manufacturer</li>
                <li>Operating System Version</li>
                <li>Application Version</li>
                <li>Language Settings</li>
                <li>Device Identifiers</li>
                <li>Crash Reports</li>
                <li>Diagnostic Information</li>
                <li>Performance Metrics</li>
              </ul>
            </div>

            <div data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500">
              <h3 className="text-xl font-bold text-white mb-4">3.3 Usage Information</h3>
              <p className="mb-4">We may collect:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6 marker:text-white/30 text-gray-300">
                <li>Application Interactions</li>
                <li>Feature Usage Statistics</li>
                <li>Session Duration</li>
                <li>Error Logs</li>
                <li>Security Logs</li>
                <li>Technical Diagnostics</li>
              </ul>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">4. FACE DATA PROCESSING</h2>
            <div className="space-y-4">
              <p>FaceHex is designed to perform facial analysis and AI face-swapping operations primarily on the user's device whenever technically possible.</p>
              <p>FaceHex does not intentionally upload facial landmarks, biometric templates, face embeddings, face recognition identifiers, or generated face-swapping results to FaceHex-operated servers for AI training purposes.</p>
              <p>Images selected by users remain under the user's control unless otherwise required for specific cloud-based features.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">5. GOOGLE SIGN-IN</h2>
            <div className="space-y-4 mb-6">
              <p>FaceHex uses Google Sign-In authentication services. When using Google Sign-In, FaceHex may receive:</p>
            </div>
            <ul className="list-disc pl-6 space-y-3 marker:text-white/30 text-gray-300 mb-8">
              <li>User Name</li>
              <li>Email Address</li>
              <li>Profile Photo</li>
              <li>Unique Account Identifier</li>
            </ul>
            <p className="mb-4 text-white font-semibold">FaceHex does not access:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-red-500/50 text-gray-300">
              <li>Gmail Content</li>
              <li>Google Drive Files</li>
              <li>Google Photos Libraries</li>
              <li>Google Contacts</li>
              <li>Calendar Information</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">6. HOW WE USE INFORMATION</h2>
            <p className="mb-6">We may use collected information to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300">
              <li>Authenticate users</li>
              <li>Operate FaceHex services</li>
              <li>Maintain account security</li>
              <li>Prevent fraud and abuse</li>
              <li>Respond to support requests</li>
              <li>Improve application performance</li>
              <li>Diagnose technical issues</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and users</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">7. AI AND MACHINE LEARNING</h2>
            <div className="space-y-4 mb-6">
              <p>FaceHex uses artificial intelligence and machine learning technologies.</p>
              <p>Generated outputs may contain:</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-yellow-500/50 text-gray-300 mb-6">
              <li>Inaccuracies</li>
              <li>Distortions</li>
              <li>Artifacts</li>
              <li>Mismatches</li>
              <li>Unrealistic Features</li>
              <li>Unexpected Results</li>
            </ul>
            <p className="p-4 bg-white/5 rounded-xl border border-white/10 text-white italic">
              FaceHex makes no guarantee regarding the accuracy, realism, authenticity, or suitability of AI-generated content.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">8. INFORMATION SHARING</h2>
            <p className="mb-4 font-semibold text-white">FaceHex does not sell personal information.</p>
            <p className="mb-6">Information may be shared only:</p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> With Service Providers</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Comply with Legal Obligations</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Enforce Our Policies</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Protect Users and Public Safety</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> During Corporate Restructuring Events if Applicable</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">9. DATA RETENTION</h2>
            <p className="mb-6">Information is retained only for as long as reasonably necessary to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Provide Services</li>
              <li>Maintain Security</li>
              <li>Resolve Disputes</li>
              <li>Comply with Legal Obligations</li>
              <li>Enforce Agreements</li>
            </ul>
            <p>When information is no longer required, it will be deleted or anonymized where reasonably practical.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">10. DATA SECURITY</h2>
            <p className="mb-6">FaceHex implements reasonable technical, administrative, and organizational safeguards including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Secure Authentication Systems</li>
              <li>Encrypted Communications</li>
              <li>Access Controls</li>
              <li>Security Monitoring</li>
              <li>Abuse Prevention Systems</li>
            </ul>
            <p>No method of transmission or storage can guarantee absolute security.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">11. USER RIGHTS</h2>
            <p className="mb-6">Depending on applicable laws, users may have rights to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Access Information</li>
              <li>Correct Information</li>
              <li>Delete Information</li>
              <li>Restrict Processing</li>
              <li>Object to Processing</li>
              <li>Request Data Portability</li>
            </ul>
            <p>Requests may be submitted through our support channels.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">12. CHILDREN'S PRIVACY</h2>
            <div className="space-y-4">
              <p>FaceHex is not intended for children under the age of 13.</p>
              <p>We do not knowingly collect personal information from children under applicable legal age requirements.</p>
              <p>If we become aware of such collection, appropriate action will be taken.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">13. INTERNATIONAL DATA TRANSFERS</h2>
            <div className="space-y-4">
              <p>Information may be processed in jurisdictions outside your country of residence.</p>
              <p>By using FaceHex, you acknowledge and consent to such transfers where legally permitted.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">14. THIRD-PARTY SERVICES</h2>
            <p className="mb-6">FaceHex may integrate with third-party providers including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Google Sign-In</li>
              <li>Google Play Services</li>
              <li>Analytics Providers</li>
              <li>Crash Reporting Providers</li>
              <li>Cloud Infrastructure Providers</li>
            </ul>
            <p>Third-party services operate under their own privacy policies.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">15. NO AI TRAINING USING USER CONTENT</h2>
            <p>FaceHex does not use user-uploaded photos, videos, generated content, facial images, or personal content for training proprietary AI models.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">16. CHANGES TO THIS POLICY</h2>
            <div className="space-y-4">
              <p>FaceHex reserves the right to modify this Privacy Policy at any time.</p>
              <p>Updated versions become effective upon publication.</p>
              <p>Continued use of FaceHex constitutes acceptance of the updated Privacy Policy.</p>
            </div>
          </section>

          <section data-aos="fade-up" className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl p-8 md:p-12 mt-20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">17. CONTACT INFORMATION</h2>
            <div className="space-y-4 text-lg">
              <p><strong className="text-white w-32 inline-block">Business:</strong> FaceHex</p>
              <p><strong className="text-white w-32 inline-block">Country:</strong> India</p>
              <p className="flex flex-col md:flex-row md:items-center gap-2">
                <strong className="text-white w-32">Support:</strong> 
                <EmailLink email="support@facehex.qzz.io" />
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400">
                For privacy-related inquiries, data requests, legal notices, copyright concerns, or support, please contact:<br/>
                <span className="mt-2 inline-block"><EmailLink email="support@facehex.qzz.io" /></span>
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
