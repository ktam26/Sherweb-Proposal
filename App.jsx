import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Container } from './components/container';
import { Button } from './components/button';
import { Heading, Subheading, Lead, SecondaryHeading, TertiaryHeading, BodyText } from './components/text';
import { CheckCircle, TrendingUp, Users, Zap, DollarSign, Target, ArrowRight, Star, Mail, Linkedin, AlertTriangle, TrendingDown, Shield, Percent, Sparkles, Phone, PhoneCall, Plus } from 'lucide-react';

function SherWebProposal() {
  return (
    <div className="overflow-hidden">
      {/* Gradient Background - Full Viewport */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145" />
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <Container className="relative">
          <div className="pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-40">
            <div className="text-center max-w-6xl mx-auto">
              {/* Main Title Section */}
              <div className="mb-32">
                <Heading as="h1" className="mb-8">
                  Accelerate Your Partner Channel Pipeline
                </Heading>
                
                <Lead className="mb-20 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                  <strong>SherWeb Lead Generation Acceleration Program:</strong> 3,000 precision-targeted sequences to generate pipeline for your Microsoft partners - 4-month program
                </Lead>
              </div>

              {/* Partner Channel Excellence */}
              <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 mb-12 shadow-lg">
                <div className="flex items-center justify-center mb-8 flex-wrap">
                  <Target className="h-6 w-6 text-blue-500 mr-2" />
                  <SecondaryHeading as="h2" className="text-center">Partner Channel Acceleration at Scale</SecondaryHeading>
                </div>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
                  <div className="bg-red-50 p-6 sm:p-8 border border-red-200 rounded-xl shadow-sm">
                    <TertiaryHeading as="h3" className="mb-4 sm:mb-6 text-red-800 text-base sm:text-lg">Generic Reseller Outreach</TertiaryHeading>
                    <ul className="space-y-3 sm:space-y-5 text-gray-700 leading-relaxed">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-red-500 mr-2 sm:mr-3 mt-1">❌</span>
                        <span>Template messages to potential partners</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-red-500 mr-2 sm:mr-3 mt-1">❌</span>
                        <span>Can't speak to specific industry needs</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-red-500 mr-2 sm:mr-3 mt-1">❌</span>
                        <span>Partner decisions need credibility - generic destroys it</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-red-500 mr-2 sm:mr-3 mt-1">❌</span>
                        <span>Your partner network stays stagnant</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 sm:p-8 border border-green-200 rounded-xl shadow-sm">
                    <TertiaryHeading as="h3" className="mb-4 sm:mb-6 text-green-800 text-base sm:text-lg">SherWeb's Advantage</TertiaryHeading>
                    <ul className="space-y-3 sm:space-y-5 text-gray-700 leading-relaxed">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-green-500 mr-2 sm:mr-3 mt-1">✅</span>
                        <span>AI understands each prospect's business model</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-green-500 mr-2 sm:mr-3 mt-1">✅</span>
                        <span>Speaks to vertical-specific opportunities</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-green-500 mr-2 sm:mr-3 mt-1">✅</span>
                        <span>Builds trust through relevant partner insights</span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="text-green-500 mr-2 sm:mr-3 mt-1">✅</span>
                        <span>37% increase in response rates (verified)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Callout */}
                <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 sm:p-8 text-center">
                  <p className="text-lg sm:text-xl font-semibold leading-relaxed">
                    3,000 personalized conversations to drive qualified leads to your partner network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* White Section with Gradient Background */}
      <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16">
        <Container>
          {/* The Difference Section */}
          <div className="bg-white rounded-2xl p-16 mb-20 max-w-5xl mx-auto shadow-lg">
            <SecondaryHeading as="h2" className="mb-12">Beyond Generic: Your SherWeb Advantage</SecondaryHeading>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="p-8 bg-red-50 rounded-lg border border-red-200">
                <TertiaryHeading as="h3" className="text-lg mb-6">Generic Competitors Send:</TertiaryHeading>
                <div className="bg-white p-8 rounded border text-base text-gray-600 italic leading-relaxed">
                  "Hello [Name],<br/><br/>
                  I hope this email finds you well. I wanted to reach out regarding potential partnership opportunities.<br/><br/>
                  We work with technology companies to expand their reach and grow their business. We offer various partner programs and reseller opportunities.<br/><br/>
                  Would you be interested in learning more about becoming a partner?"
                </div>
                <p className="text-red-600 text-base mt-4">Result: Generic partner outreach - zero relevance or credibility</p>
              </div>

              <div className="p-8 bg-green-50 rounded-lg border border-green-200">
                <TertiaryHeading as="h3" className="text-lg mb-6">SherWeb Sends:</TertiaryHeading>
                <div className="bg-white p-8 rounded border text-base text-gray-700 leading-relaxed">
                  "Hey [Name],<br/><br/>
                  I noticed [Company] specializes in cloud migrations for healthcare organizations - exactly the type of expertise our Microsoft partner network needs.<br/><br/>
                  As a channel partner, we help Microsoft Gold Partners like you accelerate growth. Our partners typically see 47 qualified leads in their first month, with 6+ converting to enterprise deals.<br/><br/>
                  Does it make sense to discuss how SherWeb can drive pre-qualified opportunities directly to your sales team?<br/><br/>
                  Best,"
                </div>
                <p className="text-green-600 text-base mt-4">Result: Partner-specific value props with proven channel success</p>
              </div>
            </div>
          </div>

          {/* Competitive Urgency */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-12 mb-20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Shield className="h-8 w-8 text-yellow-600 mr-3" />
              <SecondaryHeading as="h2" className="text-yellow-800">The Competition is Already Moving</SecondaryHeading>
            </div>
            <p className="text-lg sm:text-xl text-yellow-800 text-center mb-6 leading-relaxed">
              <strong>Get ahead by speaking to what matters: specific partner needs, vertical expertise, and proven success metrics.</strong>
            </p>
            <p className="text-base sm:text-lg text-yellow-700 text-center leading-relaxed">
              Without this level of personalization, you're just another reseller in their inbox. 
              Every day = missed pipeline opportunities for your Microsoft partners.
            </p>
          </div>

          {/* SDR Time Breakdown Section */}
          <div className="bg-white rounded-2xl p-16 mb-20 max-w-5xl mx-auto shadow-lg">
            <SecondaryHeading as="h2" className="text-center mb-12">The Real Cost of Manual Lead Generation for Partners</SecondaryHeading>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <TertiaryHeading as="h3" className="mb-6">Manual SDR Research Time</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-sm sm:text-lg">Finding partner info:</span>
                      <span className="font-bold text-red-800 text-sm sm:text-lg">10 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-sm sm:text-lg">Identifying fit & expertise:</span>
                      <span className="font-bold text-red-800 text-sm sm:text-lg">15 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-sm sm:text-lg">Crafting partner message:</span>
                      <span className="font-bold text-red-800 text-sm sm:text-lg">5 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl border-2 border-gray-400">
                      <span className="text-gray-800 text-lg font-semibold">Total per email:</span>
                      <span className="font-bold text-gray-900 text-xl">30 minutes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <TertiaryHeading as="h3" className="mb-6">For 3,000 Partner Leads</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-sm sm:text-lg">Total time needed:</span>
                      <span className="font-bold text-red-800 text-sm sm:text-lg">1,500 hours</span>
                    </div>
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-sm sm:text-lg">SDR cost (at $50/hour):</span>
                      <span className="font-bold text-red-800 text-lg sm:text-xl">$75,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <TertiaryHeading as="h3" className="mb-6">SherWeb Acceleration Program</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 sm:p-4 bg-green-100 rounded-xl border-2 border-green-400">
                      <span className="text-green-800 text-sm sm:text-lg font-semibold">Total investment:</span>
                      <span className="font-bold text-green-900 text-lg sm:text-xl">$3,140</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-green-700 text-lg">Research time:</span>
                      <span className="font-bold text-green-800 text-lg">Instant</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-green-700 text-lg">Personalization depth:</span>
                      <span className="font-bold text-green-800 text-lg">Superior</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl border-4 border-blue-300">
                  <div className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">96%</div>
                  <p className="text-lg sm:text-xl mb-4 font-semibold">Cost Reduction</p>
                  <p className="text-white/90 text-base sm:text-lg">
                    Same partner reach, fraction of the cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Dark Section */}
      <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
        <Container>
          <Subheading dark>Strategic Investment Decision</Subheading>
          <Heading as="h2" dark className="mt-2 max-w-3xl">
            Empower Your Partner Network with Automated Pipeline Generation
          </Heading>
          
          <div className="max-w-4xl mx-auto">
            {/* Single Pilot Program Offer */}
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-12 border-4 border-blue-400 rounded-3xl relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg shadow-lg whitespace-nowrap">
                SHERWEB ACCELERATION PROGRAM
              </div>
              
              <div className="text-center mb-8">
                <TertiaryHeading as="h4" className="text-white mb-6 text-xl sm:text-2xl">Partner Lead Generation Program</TertiaryHeading>
                <div className="mb-6">
                  <div className="text-4xl sm:text-6xl font-extrabold text-white mb-2">$3,140</div>
                  <div className="text-lg sm:text-xl text-blue-200 mb-4">Total 4-Month Investment</div>
                  <div className="text-base sm:text-lg text-blue-300">4-Month Program</div>
                </div>
              </div>
              
              {/* What's Included */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                  <span className="text-2xl font-bold text-white">What's Included</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>3,000 sequences total</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>750 sequences per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>31,440 credits included</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>3 email accounts included</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>2 LinkedIn connections</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>All-inclusive: $1.05/sequence</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Monthly strategy reviews</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-yellow-500/20 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-yellow-400/30">
                <TertiaryHeading as="h5" className="text-yellow-300 mb-4 text-center">Critical Timeline</TertiaryHeading>
                <div className="space-y-3 text-yellow-100">
                  <div className="flex justify-between items-center">
                    <span>Infrastructure Setup:</span>
                    <span className="font-bold text-yellow-300">2 weeks from start</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Campaign Launch:</span>
                    <span className="font-bold text-yellow-300">After setup completion</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Program Duration:</span>
                    <span className="font-bold text-yellow-300">4 months</span>
                  </div>
                </div>
              </div>

              {/* Value Comparison */}
              <div className="bg-green-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
                <TertiaryHeading as="h5" className="text-green-300 mb-4 text-center">Enterprise Value</TertiaryHeading>
                <div className="grid md:grid-cols-2 gap-4 text-green-100">
                  <div>
                    <div className="text-sm text-green-300">DIY Approach Cost:</div>
                    <div className="text-lg sm:text-xl font-bold line-through">$3,310</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-300">Your Package Price:</div>
                    <div className="text-lg sm:text-xl font-bold text-green-300">$3,140</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-green-300 font-semibold">You Save: $170 plus turnkey setup</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="text-xl py-6 px-12 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  Secure Your Partner Channel Advantage
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Final Call to Action with Contact Info */}
      <div className="bg-white py-48">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-2xl sm:text-3xl text-gray-800 mb-8 leading-tight">
                Ready to drive more pipeline to your Microsoft partners?
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                <strong>Ready to accelerate your partner channel?</strong> Let's discuss your timeline.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
              <div className="text-center mb-8">
                <TertiaryHeading as="h3" className="text-2xl mb-6">Next Steps</TertiaryHeading>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Email Confirmation</h4>
                  <p className="text-gray-600">Reach out to discuss your timeline</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Inbox Warming</h4>
                  <p className="text-gray-600">2-week infrastructure setup period</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Campaign Launch</h4>
                  <p className="text-gray-600">Launch with 750 sequences per month</p>
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 border-2 border-blue-200">
                <p className="text-lg sm:text-xl text-gray-800 mb-2 font-semibold">
                  Prepared for: SherWeb Team
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  Via Sherwin Espina, DataInvent
                </p>
                <p className="text-base text-blue-600 font-medium">
                  Reply to this proposal for immediate response
                </p>
              </div>
            </div>

            {/* Final CTA Button */}
            <div className="text-center">
              <Button className="text-2xl py-8 px-16 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                Start Your Acceleration Program
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Monthly strategy reviews to optimize pipeline generation for your partners.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

// React DOM rendering setup
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SherWebProposal />
  </React.StrictMode>,
);

export default SherWebProposal;
