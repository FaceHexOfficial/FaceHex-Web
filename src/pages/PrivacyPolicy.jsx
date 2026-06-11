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
      mirror: true,
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
              <p>FaceHex is an AI-powered facial transformation and identity synchronization application that enables users to perform image-based and real-time facial modifications using advanced artificial intelligence and machine learning technologies.</p>
              <p>FaceHex may provide features including:</p>
            </div>
            <ul className="list-disc pl-6 space-y-3 marker:text-white/30 text-gray-300">
              <li>AI Face Swapping</li>
              <li>Facial Enhancement</li>
              <li>Real-Time Face Transformation</li>
              <li>Camera-Based Processing</li>
              <li>Photo-Based Processing</li>
              <li>AI-Generated Image Outputs</li>
              <li>User Account Authentication</li>
              <li>Cloud-Based Support Services</li>
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
                <li>User-Generated Reports</li>
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
              <p>FaceHex uses Google Sign-In authentication services.</p>
              <p>When using Google Sign-In, FaceHex may receive:</p>
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
              <li>Authenticate Users</li>
              <li>Operate FaceHex Services</li>
              <li>Maintain Account Security</li>
              <li>Prevent Fraud and Abuse</li>
              <li>Respond to Support Requests</li>
              <li>Improve Application Performance</li>
              <li>Diagnose Technical Issues</li>
              <li>Comply With Legal Obligations</li>
              <li>Protect Our Rights And Users</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">7. AI AND MACHINE LEARNING</h2>
            <div className="space-y-6">
              <div>
                <p className="mb-4">FaceHex utilizes advanced artificial intelligence, machine learning models, and neural network technologies to perform facial transformations and identity synchronization.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.1 AI-Generated Content</h3>
                <p className="mb-3 text-gray-300">FaceHex uses advanced neural networks to synthesize identities and generate AI-enhanced outputs. All generated results are created by artificial intelligence and may not accurately represent real-world appearances or identities.</p>
                <p className="text-gray-300">Users must not use FaceHex-generated content for deceptive, fraudulent, misleading, impersonation, unlawful, or harmful purposes.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.2 User Responsibility</h3>
                <p className="mb-3 text-gray-300">Users are solely responsible for ensuring that any identity synchronization, face-swapping, facial transformation, or image processing activities are conducted with the explicit authorization and consent of all individuals involved.</p>
                <p className="text-gray-300">FaceHex disclaims liability for misuse, unauthorized use, unlawful use, or abuse of its technologies by users or third parties.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.3 System Limitations</h3>
                <p className="mb-4 text-gray-300">AI processing results may vary depending on numerous factors including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-6 marker:text-white/30 text-gray-300 mb-4">
                  <li>Device Hardware</li>
                  <li>Camera Quality</li>
                  <li>Lighting Conditions</li>
                  <li>Network Conditions</li>
                  <li>Input Image Quality</li>
                  <li>Environmental Variables</li>
                </ul>
                <p className="text-gray-300">FaceHex does not guarantee consistent results across all devices or operating environments.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.4 AI Output Disclaimer</h3>
                <p className="mb-4 text-gray-300">Generated outputs may contain:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-6 marker:text-yellow-500/50 text-gray-300 mb-6">
                  <li>Inaccuracies</li>
                  <li>Distortions</li>
                  <li>Artifacts</li>
                  <li>Mismatches</li>
                  <li>Unrealistic Features</li>
                  <li>Unexpected Results</li>
                </ul>
                <p className="text-white italic bg-black/50 p-4 rounded-xl border border-white/10">
                  FaceHex makes no guarantee regarding the accuracy, realism, authenticity, reliability, or suitability of AI-generated content.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.5 Consent and Authorized Use</h3>
                <p className="mb-3 text-gray-300">Users represent and warrant that they possess all necessary rights, permissions, and lawful authority to upload, process, modify, transform, or synchronize any images, videos, or facial content submitted through FaceHex.</p>
                <p className="text-gray-300">Users agree not to upload, process, or distribute content that violates the privacy, intellectual property rights, publicity rights, or other legal rights of any third party.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.6 Biometric Information Disclaimer</h3>
                <p className="mb-3 text-gray-300">FaceHex does not create or maintain biometric databases for identity recognition purposes.</p>
                <p className="text-gray-300">Any facial analysis performed by FaceHex is intended solely for image transformation, enhancement, and processing features and is not used for surveillance, law enforcement, profiling, or identity verification purposes.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.7 Prohibited Uses</h3>
                <p className="mb-4 text-gray-300">Users may not use FaceHex to:</p>
                <ul className="space-y-2 list-disc pl-6 marker:text-red-500/50 text-gray-300 mb-4">
                  <li>Impersonate another individual without authorization</li>
                  <li>Commit fraud, deception, harassment, or identity theft</li>
                  <li>Create unlawful, abusive, defamatory, misleading, or harmful content</li>
                  <li>Violate applicable laws, regulations, or third-party rights</li>
                  <li>Circumvent security mechanisms or platform restrictions</li>
                </ul>
                <p className="text-white font-semibold">FaceHex reserves the right to suspend or terminate access for violations of these requirements.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.8 No Professional Reliance</h3>
                <p className="mb-3 text-gray-300">AI-generated content is provided for entertainment, creative, educational, and personal use purposes only.</p>
                <p className="text-gray-300">Users should not rely on FaceHex-generated content as evidence of identity, authenticity, factual accuracy, professional advice, or official documentation.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.9 Limitation of Liability Regarding AI Outputs</h3>
                <p className="text-gray-300">To the fullest extent permitted by applicable law, FaceHex shall not be responsible for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from the creation, sharing, publication, reliance upon, or misuse of AI-generated content.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.10 User Content Ownership</h3>
                <p className="mb-3 text-gray-300">Users retain ownership of the original content they upload to FaceHex.</p>
                <p className="text-gray-300">Except as necessary to provide the requested services, FaceHex does not claim ownership of user-uploaded photos, videos, or generated outputs.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7.11 Security and Abuse Prevention</h3>
                <p className="mb-3 text-gray-300">FaceHex may implement automated systems designed to detect abuse, malicious activity, unauthorized access attempts, fraudulent behavior, security threats, or violations of applicable policies.</p>
                <p className="text-gray-300">Such systems may collect limited technical information necessary to maintain platform integrity and security.</p>
              </div>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">8. INFORMATION SHARING</h2>
            <p className="mb-4 font-semibold text-white">FaceHex does not sell personal information.</p>
            <p className="mb-6">Information may be shared only:</p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> With Service Providers</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Comply With Legal Obligations</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Enforce Our Policies</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> To Protect Users And Public Safety</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> During Corporate Restructuring Events, If Applicable</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">9. DATA RETENTION</h2>
            <p className="mb-6">Information is retained only for as long as reasonably necessary to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Provide Services</li>
              <li>Maintain Security</li>
              <li>Resolve Disputes</li>
              <li>Comply With Legal Obligations</li>
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
              <li>Object To Processing</li>
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
            <p>FaceHex does not use user-uploaded photos, videos, generated content, facial images, biometric information, or personal content to train proprietary AI models.</p>
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
                For privacy-related inquiries, data requests, legal notices, copyright concerns, or support requests, please contact:<br/>
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
