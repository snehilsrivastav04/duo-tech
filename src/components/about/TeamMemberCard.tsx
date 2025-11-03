import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../utils/types';
import Card from '../ui/Card';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {member.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
            {member.position}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {member.bio}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;