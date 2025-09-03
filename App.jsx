import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Container } from './components/container';
import { Button } from './components/button';
import { Heading, Subheading, Lead, SecondaryHeading, TertiaryHeading, BodyText } from './components/text';
import { CheckCircle, TrendingUp, Users, Zap, DollarSign, Target, ArrowRight, Star, Mail, Linkedin, AlertTriangle, TrendingDown, Shield, Percent, Sparkles, Phone, PhoneCall, Plus } from 'lucide-react';

function DataInventProposal() {
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
                  Capture 4,800 Microsoft Migration Leads
                </Heading>
                
                <Lead className="mb-20 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                  <strong>DataInvent Microsoft Migration Campaign:</strong> Turn 4,800 cold prospects into warm migration conversations - starting September 14
                </Lead>
              </div>

              {/* Migration Expertise Focus */}
              <div className="bg-white border border-gray-100 rounded-2xl p-12 mb-12 shadow-lg">
                <div className="flex items-center justify-center mb-8">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                  <SecondaryHeading as="h2">Migration Expertise at Scale</SecondaryHeading>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-red-50 p-8 border border-red-200 rounded-xl shadow-sm">
                    <TertiaryHeading as="h3" className="mb-6 text-red-800">What Prospects See Now</TertiaryHeading>
                    <ul className="space-y-5 text-gray-700 leading-relaxed">
                      <li className="flex items-start text-base">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <span>4,800 prospects getting template migration emails</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <span>Can't speak to specific legacy system challenges</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <span>Migration decisions need trust - templates destroy it</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <span>Your competitors are already booking these meetings</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-8 border border-green-200 rounded-xl shadow-sm">
                    <TertiaryHeading as="h3" className="mb-6 text-green-800">DataInvent's Advantage</TertiaryHeading>
                    <ul className="space-y-5 text-gray-700 leading-relaxed">
                      <li className="flex items-start text-base">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span>AI understands each company's tech stack & migration path</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span>Speaks to their specific challenges (not generic pain points)</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span>Builds trust through relevant, consultative messaging</span>
                      </li>
                      <li className="flex items-start text-base">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span>37% increase in response rates (verified across clients)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Callout */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
                  <p className="text-xl font-semibold leading-relaxed">
                    4,800 personalized migration conversations ready Sept 14 - or watch competitors win these deals
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
            <SecondaryHeading as="h2" className="mb-12">Beyond Generic: Your DataInvent Advantage</SecondaryHeading>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="p-8 bg-red-50 rounded-lg border border-red-200">
                <TertiaryHeading as="h3" className="text-lg mb-6">Generic Competitors Send:</TertiaryHeading>
                <div className="bg-white p-8 rounded border text-base text-gray-600 italic leading-relaxed">
                  "Hello [Name],<br/><br/>
                  I hope this email finds you well. I wanted to reach out regarding your Microsoft infrastructure and potential migration opportunities.<br/><br/>
                  Our Microsoft migration services help companies like yours transition to modern cloud solutions. We specialize in Office 365, Azure, and Exchange migrations with minimal downtime.<br/><br/>
                  Would you be interested in discussing how we could support [Company]'s digital transformation initiatives?"
                </div>
                <p className="text-red-600 text-base mt-4">Result: Generic Microsoft migration template - sounds like everyone else</p>
              </div>

              <div className="p-8 bg-green-50 rounded-lg border border-green-200">
                <TertiaryHeading as="h3" className="text-lg mb-6">DataInvent Sends:</TertiaryHeading>
                <div className="bg-white p-8 rounded border text-base text-gray-700 leading-relaxed">
                  "Hey [Name],<br/><br/>
                  I noticed [Company] is still running Exchange 2016 and SQL Server 2014 across your Canadian offices - both reaching end-of-support this year.<br/><br/>
                  Since you're evaluating Azure migration paths, I thought you'd want to know that we helped [Similar Company] migrate 2,800 users in 6 weeks while reducing their licensing costs by 31%.<br/><br/>
                  Does it make sense to discuss how DataInvent could accelerate your migration timeline while ensuring zero downtime for your Toronto and Vancouver teams?<br/><br/>
                  Best,"
                </div>
                <p className="text-green-600 text-base mt-4">Result: Specific Microsoft pain points and proven migration expertise</p>
              </div>
            </div>
          </div>

          {/* Competitive Urgency */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-12 mb-20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Shield className="h-8 w-8 text-yellow-600 mr-3" />
              <SecondaryHeading as="h2" className="text-yellow-800">The Competition is Already Moving</SecondaryHeading>
            </div>
            <p className="text-xl text-yellow-800 text-center mb-6 leading-relaxed">
              <strong>Get ahead of competitors by speaking to what matters: specific end-of-support dates, Azure migration paths, and proven cost savings.</strong>
            </p>
            <p className="text-lg text-yellow-700 text-center leading-relaxed">
              Without this level of personalization, you're just another vendor in their inbox. 
              Every day = dozens of lost migration deals to competitors who do their research.
            </p>
          </div>

          {/* SDR Time Breakdown Section */}
          <div className="bg-white rounded-2xl p-16 mb-20 max-w-5xl mx-auto shadow-lg">
            <SecondaryHeading as="h2" className="text-center mb-12">The Real Cost of Manual Migration Research</SecondaryHeading>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <TertiaryHeading as="h3" className="mb-6">Manual SDR Research Time</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-lg">Finding company info:</span>
                      <span className="font-bold text-red-800 text-lg">10 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-lg">Identifying existing relationships:</span>
                      <span className="font-bold text-red-800 text-lg">15 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-lg">Crafting personalized message:</span>
                      <span className="font-bold text-red-800 text-lg">5 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl border-2 border-gray-400">
                      <span className="text-gray-800 text-lg font-semibold">Total per email:</span>
                      <span className="font-bold text-gray-900 text-xl">30 minutes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <TertiaryHeading as="h3" className="mb-6">For 4,800 Leads</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-lg">Total time needed:</span>
                      <span className="font-bold text-red-800 text-lg">2,400 hours</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <span className="text-red-700 text-lg">SDR cost (at $50/hour):</span>
                      <span className="font-bold text-red-800 text-xl">$120,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <TertiaryHeading as="h3" className="mb-6">DataInvent Pilot Program</TertiaryHeading>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-100 rounded-xl border-2 border-green-400">
                      <span className="text-green-800 text-lg font-semibold">Total investment:</span>
                      <span className="font-bold text-green-900 text-xl">$4,550</span>
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
                
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 text-center shadow-2xl border-4 border-blue-300">
                  <div className="text-6xl font-extrabold mb-4 drop-shadow-lg">96%</div>
                  <p className="text-xl mb-4 font-semibold">Cost Reduction</p>
                  <p className="text-white/90 text-lg">
                    Same depth of research, fraction of the cost
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
            Secure DataInvent's Microsoft Migration Advantage
          </Heading>
          
          <div className="max-w-4xl mx-auto">
            {/* Single Pilot Program Offer */}
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-12 border-4 border-blue-400 rounded-3xl relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
                DATAINVENT PILOT PROGRAM
              </div>
              
              <div className="text-center mb-8">
                <TertiaryHeading as="h4" className="text-white mb-6 text-2xl">Microsoft Migration Campaign</TertiaryHeading>
                <div className="mb-6">
                  <div className="text-6xl font-extrabold text-white mb-2">$4,550</div>
                  <div className="text-xl text-blue-200 mb-4">Total 5-Month Investment</div>
                  <div className="text-lg text-blue-300">Includes full campaign package</div>
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
                      <span>4,800 leads supported</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>1,000 leads per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>49,800 credits for generation</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>4 email accounts included</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>2 LinkedIn accounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Enterprise rate: $0.85/sequence</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Biweekly performance reviews</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-yellow-500/20 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-yellow-400/30">
                <TertiaryHeading as="h5" className="text-yellow-300 mb-4 text-center">Critical Timeline</TertiaryHeading>
                <div className="space-y-3 text-yellow-100">
                  <div className="flex justify-between items-center">
                    <span>Decision Deadline:</span>
                    <span className="font-bold text-yellow-300">Monday, September 2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infrastructure Setup:</span>
                    <span className="font-bold text-yellow-300">September 3-13</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Campaign Launch:</span>
                    <span className="font-bold text-yellow-300">September 14</span>
                  </div>
                </div>
              </div>

              {/* Value Comparison */}
              <div className="bg-green-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
                <TertiaryHeading as="h5" className="text-green-300 mb-4 text-center">Enterprise Value</TertiaryHeading>
                <div className="grid md:grid-cols-2 gap-4 text-green-100">
                  <div>
                    <div className="text-sm text-green-300">Standard Scale Pricing:</div>
                    <div className="text-xl font-bold line-through">$4,952</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-300">Your Pilot Price:</div>
                    <div className="text-xl font-bold text-green-300">$4,550</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-green-300 font-semibold">You Save: $402 (8.1% discount)</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="text-xl py-6 px-12 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  Secure Your Microsoft Migration Advantage
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
              <p className="text-3xl text-gray-800 mb-8 leading-tight">
                Ready to turn 4,800 migrations into your pipeline?
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                <strong>Decision needed by Monday, September 2</strong> to meet September 14 launch.
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
                  <p className="text-gray-600">Confirm pilot program by Monday, September 2</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Inbox Warming</h4>
                  <p className="text-gray-600">Immediate setup begins September 3-13</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Campaign Launch</h4>
                  <p className="text-gray-600">Go live September 14 with 1,000 leads</p>
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 border-2 border-blue-200">
                <p className="text-xl text-gray-800 mb-2 font-semibold">
                  Your Contact: Sherwin Espina
                </p>
                <p className="text-lg text-gray-600 mb-2">
                  Director of Sales, DataInvent
                </p>
                <p className="text-base text-blue-600 font-medium">
                  Reply to this proposal for immediate response
                </p>
              </div>
            </div>

            {/* Final CTA Button */}
            <div className="text-center">
              <Button className="text-2xl py-8 px-16 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                Confirm Pilot Program by September 2
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Biweekly reviews ensure continuous optimization throughout the pilot.
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
    <DataInventProposal />
  </React.StrictMode>,
);

export default DataInventProposal;
