import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      easing: 'ease-out-cubic',
      offset: 50,
    });
    
    setTimeout(() => {
      AOS.refresh();
    }, 100);

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
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">FACEHEX TERMS OF SERVICE</h1>
          <div className="h-1 w-24 bg-white/20 mb-8 rounded-full"></div>
          <p className="text-gray-400 text-lg mb-20 uppercase tracking-widest font-semibold">
            Effective Date: <span className="text-white">June 06, 2026</span><br/>
            Last Updated: <span className="text-white">June 06, 2026</span>
          </p>
        </div>
        
        <div className="text-gray-400 font-sans text-lg leading-relaxed space-y-24">
          
          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">1. ACCEPTANCE OF TERMS</h2>
            <div className="space-y-4">
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and FaceHex ("FaceHex", "we", "our", or "us").</p>
              <p>By downloading, installing, accessing, registering for, or using FaceHex, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
              <p>If you do not agree with these Terms, you must immediately discontinue use of FaceHex.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">2. DESCRIPTION OF SERVICES</h2>
            <p className="mb-6">FaceHex is an AI-powered face-swapping and facial transformation application that allows users to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Sign in using Google Sign-In</li>
              <li>Select photos from their device</li>
              <li>Use device camera functionality</li>
              <li>Perform AI-powered face swapping</li>
              <li>Generate modified images</li>
              <li>Use facial transformation features</li>
            </ul>
            <p className="mb-6 font-semibold text-white">FaceHex is intended for:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300">
              <li>Creative use</li>
              <li>Entertainment use</li>
              <li>Educational use</li>
              <li>Research use</li>
              <li>Personal use</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">3. ELIGIBILITY</h2>
            <p className="mb-6">You must:</p>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> Be legally capable of entering a binding agreement.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> Comply with all applicable laws.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-white rounded-full"></div> Be at least the age required under local law.</li>
            </ul>
            <p className="p-4 bg-white/5 rounded-xl border border-white/10 text-white italic">Users under 18 years of age must obtain parental or guardian permission.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">4. USER RESPONSIBILITIES</h2>
            <p className="mb-6">You are solely responsible for:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Your account</li>
              <li>Your actions</li>
              <li>Uploaded content</li>
              <li>Generated content</li>
              <li>Shared content</li>
              <li>Compliance with applicable laws</li>
            </ul>
            <p className="font-semibold text-white">You assume full responsibility for all consequences arising from your use of FaceHex.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">5. CONSENT AND LIKENESS RIGHTS</h2>
            <p className="mb-6">You represent and warrant that you possess all necessary rights, permissions, licenses, authorizations, and consents required to use:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-6">
              <li>Photos</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Faces</li>
              <li>Likenesses</li>
              <li>Identities</li>
            </ul>
            <p className="mb-4">submitted to FaceHex.</p>
            <p className="font-semibold text-white">You must obtain appropriate consent before using another person's image where required by law.</p>
          </section>

          <section>
            <h2 data-aos="fade-up" className="text-3xl font-display font-bold text-white mb-6 tracking-wide">6. PROHIBITED ACTIVITIES</h2>
            <p data-aos="fade-up" className="mb-6">You shall not use FaceHex to:</p>
            <ul data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-10">
              <li>Commit fraud</li>
              <li>Commit identity theft</li>
              <li>Impersonate another person</li>
              <li>Harass others</li>
              <li>Defame others</li>
              <li>Create unlawful deepfakes</li>
              <li>Violate privacy rights</li>
              <li>Violate publicity rights</li>
              <li>Violate copyright rights</li>
              <li>Violate trademark rights</li>
              <li>Circumvent laws</li>
              <li>Distribute malicious content</li>
              <li>Conduct scams</li>
              <li>Spread misinformation</li>
              <li>Commit cybercrime</li>
              <li>Facilitate criminal activity</li>
              <li>Engage in unlawful surveillance</li>
              <li>Produce illegal content</li>
              <li>Exploit minors</li>
              <li>Create harmful deceptive media</li>
            </ul>
            <div data-aos="fade-up" className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p className="mb-4 font-semibold text-white">Any prohibited activity may result in:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-6 marker:text-white/30 text-gray-300">
                <li>Immediate account termination</li>
                <li>Service suspension</li>
                <li>Legal action</li>
                <li>Reporting to authorities</li>
              </ul>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">7. AI GENERATED CONTENT</h2>
            <p className="mb-6">FaceHex uses artificial intelligence and machine learning technologies.</p>
            <p className="mb-4">Generated content may contain:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-yellow-500/50 text-gray-300 mb-8">
              <li>Inaccuracies</li>
              <li>Distortions</li>
              <li>Artifacts</li>
              <li>Mismatches</li>
              <li>Unexpected Outputs</li>
            </ul>
            <p className="mb-4">FaceHex makes no guarantee regarding:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-6">
              <li>Accuracy</li>
              <li>Authenticity</li>
              <li>Reliability</li>
              <li>Legality</li>
              <li>Suitability</li>
            </ul>
            <p className="p-4 bg-white/5 rounded-xl border border-white/10 text-white italic">Users are solely responsible for reviewing generated content before use.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">8. INTELLECTUAL PROPERTY</h2>
            <p className="mb-6">All rights relating to:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>FaceHex</li>
              <li>Source Code</li>
              <li>Software</li>
              <li>User Interface</li>
              <li>Branding</li>
              <li>Trademarks</li>
              <li>Logos</li>
              <li>Documentation</li>
              <li>AI Systems</li>
            </ul>
            <div className="space-y-4">
              <p>remain the exclusive property of FaceHex and its licensors.</p>
              <p className="font-semibold text-white">No ownership rights are transferred to users.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">9. REVERSE ENGINEERING PROHIBITION</h2>
            <p className="mb-6">Users shall not:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-6">
              <li>Reverse Engineer</li>
              <li>Decompile</li>
              <li>Disassemble</li>
              <li>Modify</li>
              <li>Extract Source Code</li>
              <li>Circumvent Protections</li>
              <li>Bypass Security Controls</li>
              <li>Tamper With Application Integrity</li>
              <li>Create Derivative Versions</li>
            </ul>
            <p className="mb-8 italic text-gray-400">except where expressly permitted by applicable law.</p>
            
            <p className="mb-4 font-semibold text-white">Unauthorized attempts may result in:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-white/30 text-gray-300">
              <li>Immediate Termination</li>
              <li>Access Blocking</li>
              <li>Legal Enforcement</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">10. SECURITY PROTECTIONS</h2>
            <p className="mb-6">FaceHex may implement:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-6">
              <li>Anti-Tampering Systems</li>
              <li>Integrity Verification</li>
              <li>Security Monitoring</li>
              <li>Runtime Protection</li>
              <li>Abuse Prevention Systems</li>
            </ul>
            <p className="font-semibold text-white">Users shall not attempt to interfere with such protections.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">11. THIRD-PARTY SERVICES</h2>
            <p className="mb-6">FaceHex may interact with:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Google Sign-In</li>
              <li>Google Play Services</li>
              <li>Analytics Providers</li>
              <li>Advertising Networks</li>
              <li>Other Third-Party Services</li>
            </ul>
            <div className="space-y-4">
              <p>FaceHex is not responsible for third-party services or their policies.</p>
              <p className="font-semibold text-white">Users should review third-party terms independently.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">12. ACCOUNT TERMINATION</h2>
            <p className="mb-6">We reserve the right to:</p>
            <ul className="flex flex-wrap gap-6 mb-8 text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div> Suspend Accounts</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div> Restrict Access</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div> Terminate Accounts</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div> Remove Content</li>
            </ul>
            <p className="mb-6">for any reason including:</p>
            <ul className="flex flex-wrap gap-6 mb-6 text-gray-300">
              <li className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Policy Violations</li>
              <li className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Security Concerns</li>
              <li className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Fraud</li>
              <li className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Abuse</li>
              <li className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Legal Requirements</li>
            </ul>
            <p className="italic text-gray-400">without prior notice where permitted by law.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">13. NO LIABILITY FOR USER CONDUCT</h2>
            <p className="mb-6">Users are solely responsible for:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Uploaded Content</li>
              <li>Generated Content</li>
              <li>Shared Content</li>
              <li>Communications</li>
              <li>Conduct</li>
            </ul>
            <p className="font-semibold text-white">FaceHex does not control user behavior and shall not be responsible for user actions.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">14. INDEMNIFICATION</h2>
            <p className="mb-6">You agree to defend, indemnify, and hold harmless:</p>
            <ul className="flex flex-wrap gap-4 mb-8">
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">FaceHex</li>
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">Contractors</li>
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">Employees</li>
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">Agents</li>
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">Affiliates</li>
              <li className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold">Successors</li>
            </ul>
            <p className="mb-6">from any claims, losses, damages, liabilities, penalties, fines, judgments, settlements, costs, and legal expenses arising from:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300">
              <li>Your Use of FaceHex</li>
              <li>Your Content</li>
              <li>Your Conduct</li>
              <li>Your Violation of Law</li>
              <li>Your Violation of Third-Party Rights</li>
            </ul>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">15. DISCLAIMER OF WARRANTIES</h2>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-center md:text-left">
              <p>FaceHex is provided:</p>
              <div className="flex gap-4">
                <span className="px-6 py-3 bg-white text-black font-display font-bold uppercase tracking-widest rounded-lg">"AS IS"</span>
                <span className="flex items-center text-gray-500 italic">and</span>
                <span className="px-6 py-3 bg-white text-black font-display font-bold uppercase tracking-widest rounded-lg">"AS AVAILABLE"</span>
              </div>
            </div>
            <p className="mb-6">without warranties of any kind. We disclaim all express and implied warranties including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-6">
              <li>Merchantability</li>
              <li>Fitness For A Particular Purpose</li>
              <li>Accuracy</li>
              <li>Reliability</li>
              <li>Non-Infringement</li>
            </ul>
            <p className="italic text-gray-400">to the fullest extent permitted by law.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">16. LIMITATION OF LIABILITY</h2>
            <p className="mb-6 italic text-gray-400">To the fullest extent permitted by applicable law:</p>
            <p className="mb-6">FaceHex, its owner, employees, contractors, licensors, and affiliates shall not be liable for:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6 marker:text-white/30 text-gray-300 mb-8">
              <li>Direct Damages</li>
              <li>Indirect Damages</li>
              <li>Consequential Damages</li>
              <li>Special Damages</li>
              <li>Punitive Damages</li>
              <li>Lost Profits</li>
              <li>Lost Revenue</li>
              <li>Lost Data</li>
              <li>Reputation Damage</li>
            </ul>
            <div className="space-y-4">
              <p>arising from use of FaceHex.</p>
              <p className="font-semibold text-white">Where liability cannot legally be excluded, liability shall be limited to the maximum extent permitted by law.</p>
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">17. GOVERNING LAW</h2>
            <p>These Terms shall be governed by the laws of India.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">18. DISPUTE RESOLUTION</h2>
            <p className="mb-6">Before initiating legal proceedings, parties agree to attempt informal resolution for at least thirty (30) days.</p>
            <p className="mb-6">If unresolved, disputes shall be resolved through arbitration in:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-white">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Location</p>
                <p className="font-semibold">Gujarat, India</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Language</p>
                <p className="font-semibold">English</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Arbitrators</p>
                <p className="font-semibold">One (1)</p>
              </div>
            </div>
            <p className="font-semibold text-white italic">The arbitration decision shall be final and binding.</p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-wide">19. MODIFICATIONS</h2>
            <div className="space-y-4">
              <p>FaceHex may modify these Terms at any time.</p>
              <p>Updated versions become effective upon publication.</p>
              <p className="font-semibold text-white">Continued use of FaceHex constitutes acceptance of updated Terms.</p>
            </div>
          </section>

          <section data-aos="fade-up" className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl p-8 md:p-12 mt-20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">20. CONTACT INFORMATION</h2>
            <div className="space-y-4 text-lg">
              <p><strong className="text-white w-32 inline-block">Business:</strong> FaceHex</p>
              <p><strong className="text-white w-32 inline-block">Application:</strong> FaceHex</p>
              <p><strong className="text-white w-32 inline-block">Country:</strong> India</p>
              <p className="flex flex-col md:flex-row md:items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <strong className="text-white w-32">Support:</strong> 
                <EmailLink email="support@facehex.qzz.io" />
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
