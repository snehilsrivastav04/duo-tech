import { Phone } from 'lucide-react';
import { obdContent } from '../../data/obd-data.tsx';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { title, description } = obdContent.cta;
  return (
    <section className="py-32 bg-white border-t-2 border-blue-600">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight text-gray-900">
            {title}
        </h2>
        <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
            {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Start Free Trial
            </Button>
            </Link>
            <Link to="/contact">
            <Button variant="secondary" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
            Schedule Demo
            </Button>
            </Link>
        </div>
        </div>
  </section>
  )
}

export default CTA;
