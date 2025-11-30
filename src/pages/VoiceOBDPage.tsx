import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Hero from '../components/obd/Hero';
import Features from '../components/obd/Features';
import HowItWorks from '../components/obd/HowItWorks';
import UseCases from '../components/obd/UseCases';
import TestimonialSlider from '../components/obd/Testimonials';
import CTA from '../components/obd/CTA';

const VoiceOBDPage = () => {
  return (
    <MainLayout>
        <Container>
            <Hero />
            <Features />
            <HowItWorks />
            <UseCases />
            <TestimonialSlider />
            <CTA />
        </Container>
    </MainLayout>
  );
};

export default VoiceOBDPage;
