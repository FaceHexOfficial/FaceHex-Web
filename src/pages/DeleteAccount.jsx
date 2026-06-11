import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DeleteAccount = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
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
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto min-h-[70vh]">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">DATA DELETION</h1>
          <div className="h-1 w-24 bg-white/20 mb-12 rounded-full"></div>
        </div>
        
        <div className="text-gray-400 font-sans text-lg leading-relaxed space-y-12">
          <section data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 shadow-2xl">
            <h2 className="text-2xl font-display font-bold text-white mb-8 tracking-wide">Account Deletion Request</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">How to request deletion</h3>
                <p>To request the deletion of your FaceHex account and all associated data, please send an email to our support team from the email address associated with your account.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Support Email</h3>
                <div className="bg-black/50 border border-white/10 p-6 rounded-2xl text-left font-mono text-sm md:text-base text-gray-300 shadow-inner mt-4">
                  <p><span className="text-white/50 w-24 inline-block">To:</span> <EmailLink email="support@facehex.qzz.io" /></p>
                  <p><span className="text-white/50 w-24 inline-block">Subject:</span> Delete My FaceHex Account</p>
                  <p className="mt-4 text-gray-400 italic">Please make sure to include your Google account email in the body of the message so we can identify your account.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">What data is deleted</h3>
                <ul className="list-disc pl-6 space-y-2 marker:text-white/30 text-gray-300">
                  <li>Your user name and profile information</li>
                  <li>Your Google Account Identifier</li>
                  <li>All associated usage statistics and diagnostic data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Retention Period</h3>
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border-l-4 border-white/50 mt-4">
                  <div className="text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                  <p className="text-white">Upon verification of the request, we will process your request and securely delete or anonymise your account data within <span className="font-bold underline decoration-white/30">30 days</span>, unless retention is required by law, security requirements, fraud prevention obligations, or legitimate business purposes.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DeleteAccount;
