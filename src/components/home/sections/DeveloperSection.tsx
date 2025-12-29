import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { Button } from '../../ui/Button';
import { Code, GitBranch, ArrowRight } from 'lucide-react';

const DeveloperSection: FC = () => (
  <section id="developers" className="py-40 bg-white dark:bg-gray-950">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl">
            <pre className="language-javascript rounded-lg text-sm"><code>
              <span className="token comment">// Example API Request</span>
              <br />
              <span className="token keyword">const</span> response <span className="token operator">=</span> <span className="token keyword">await</span> fetch<span className="token punctuation">(</span><span className="token string">'/api/v1/users'</span><span className="token punctuation">)</span>;
              <br />
              <span className="token keyword">const</span> data <span className="token operator">=</span> <span className="token keyword">await</span> response.json<span className="token punctuation">(</span><span className="token punctuation">)</span>;
            </code></pre>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
            Built for <span className="font-light text-blue-600 dark:text-blue-400">developers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight mb-12">
            Our platform is designed to be developer-friendly, with a powerful API and extensive documentation.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center rounded-full">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-1">Powerful API</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">Integrate our services seamlessly into your applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center rounded-full">
                <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-1">Easy Integration</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">Get up and running in minutes with our comprehensive SDKs.</p>
              </div>
            </div>
          </div>
          <Button variant="outline" size="lg" className="group">
            View Documentation <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </Container>
  </section>
);

export default DeveloperSection;