import { 
    MessageCircle, Headphones, Target, ShieldCheck,
    Play, Clock, Shield, TrendingUp,
    GraduationCap, Truck, Building, Radio
  } from 'lucide-react';

export const obdContent = {
    hero: {
      title: "Voice That Connects",
      subtitle: "Where technology meets human connection",
      description: "Transform automated calls into meaningful conversations that feel personal at scale.",
      stats: [
        { value: "2.4M", label: "Daily connections" },
        { value: "98%", label: "Satisfaction rate" },
        { value: "45+", label: "Countries served" }
      ]
    },
    features: [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Natural Conversations",
        description: "AI that understands context and responds with authenticity"
      },
      {
        icon: <Headphones className="w-6 h-6" />,
        title: "Crystal Clear Audio",
        description: "Professional-grade voice quality in every interaction"
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Smart Timing",
        description: "Reach customers at the right moment for maximum impact"
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Secure & Compliant",
        description: "Enterprise-grade security and full regulatory compliance"
      }
    ],
    howItWorks: {
        title: "Simple Steps to Amplified Outreach",
        steps: [
            {
              icon: <Play className="w-8 h-8 text-primary" />,
              title: "Launch Your Campaign",
              description: "Upload your contact list and record or type your message."
            },
            {
              icon: <Clock className="w-8 h-8 text-primary" />,
              title: "Schedule & Personalize",
              description: "Choose the perfect time and add custom fields like names or appointment times."
            },
            {
              icon: <Shield className="w-8 h-8 text-primary" />,
              title: "Engage & Track",
              description: "We handle the calls. You get real-time analytics on who answered and what they did."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-primary" />,
              title: "Optimize & Grow",
              description: "Use insights to refine your next campaign for even better results."
            }
          ]
    },
    useCases: {
        title: "How Our Voice is Your Advantage",
        industries: [
            { icon: <GraduationCap />, name: "Education", details: "Send fee reminders, admission updates, and event invitations." },
            { icon: <Truck />, name: "Logistics", details: "Automate delivery confirmations and status updates." },
            { icon: <Building />, name: "Real Estate", details: "Announce new properties and schedule viewings." },
            { icon: <Radio />, name: "Media", details: "Promote shows, gather feedback, and run contests." }
          ]
    },
    testimonials: {
        title: "What Our Partners Say",
        quotes: [
            {
              quote: "The reliability is unmatched. We've seen a 40% increase in customer engagement since switching.",
              author: "Jane Doe",
              company: "Global Innovations Inc."
            },
            {
              quote: "A game-changer for our marketing campaigns. The personalization features are incredibly powerful.",
              author: "John Smith",
              company: "Marketing Solutions Ltd."
            },
            {
              quote: "The API was a breeze to integrate. Our developers had it up and running in a single afternoon.",
              author: "Emily White",
              company: "Tech Forward"
            }
          ]
    },
    cta: {
        title: "Ready to Start the Conversation?",
        description: "Join thousands of businesses revolutionizing their outreach. Get started in minutes.",
    }
  };
