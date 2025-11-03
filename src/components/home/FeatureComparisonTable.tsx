import React from 'react';
import { motion } from 'framer-motion';

interface FeatureComparisonTableProps {
  headers: string[];
  rows: string[][];
  competitors?: string[][];
}

const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({ 
  headers, 
  rows,
  competitors 
}) => {
  return (
    <div className="overflow-x-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="min-w-full bg-white dark:bg-blue-900/50 rounded-xl border border-gray-200 dark:border-blue-800 shadow-sm"
      >
        <table className="min-w-full divide-y divide-gray-200 dark:divide-blue-800">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-blue-300 uppercase tracking-wider ${
                    i === 0 ? 'text-left' : 'text-center'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-blue-800">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-6 py-4 whitespace-nowrap ${
                      cellIndex === 0
                        ? 'text-sm font-medium text-gray-900 dark:text-white'
                        : 'text-center text-sm text-gray-500 dark:text-gray-300'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {competitors && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-blue-800">
            <h3 className="text-sm font-medium text-gray-500 dark:text-blue-300 mb-2">
              COMPETITOR COMPARISON
            </h3>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-blue-800">
              <tbody>
                {competitors.map((competitor, i) => (
                  <tr key={i}>
                    {competitor.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-2 whitespace-nowrap text-sm ${
                          j === 0
                            ? 'font-medium text-gray-900 dark:text-white'
                            : 'text-center text-gray-500 dark:text-gray-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FeatureComparisonTable;