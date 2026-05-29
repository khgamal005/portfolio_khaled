import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const categoryOrder = [
  'languages',
  'frameworks',
  'databases',
  'messaging',
  'devops',
];

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks & Libraries',
  databases: 'Databases & Caching',
  messaging: 'Messaging & Queues',
  devops: 'DevOps & Tools',
};

const Skills = () => {
  const [grouped, setGrouped] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      const groupedMap = {};
      data.forEach((skill) => {
        const cat = skill.category || 'devops';
        if (!groupedMap[cat]) groupedMap[cat] = [];
        groupedMap[cat].push(skill);
      });
      const sorted = categoryOrder
        .filter((cat) => groupedMap[cat])
        .map((cat) => ({ category: cat, items: groupedMap[cat] }));
      setGrouped(sorted);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        {grouped.map((group) => (
          <div className="app__skills-group" key={group.category}>
            <h3 className="app__skills-group-title">{categoryLabels[group.category]}</h3>
            <motion.div className="app__skills-list">
              {group.items.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

