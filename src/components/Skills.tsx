import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaReact, FaJsSquare,
    FaDatabase, FaTasks, FaLeaf, FaFileCode,
    FaNetworkWired, FaShieldAlt, FaCode, FaPencilAlt
} from 'react-icons/fa';

const skillIcons = [
    { icon: <FaHtml5 size={80} />, label: "HTML" },
    { icon: <FaCss3Alt size={80} />, label: "CSS" },
    { icon: <FaReact size={80} />, label: "REACT" },
    { icon: <FaJsSquare size={80} />, label: "JAVASCRIPT" },
    { icon: <FaLeaf size={80} />, label: "MONGODB" },
    { icon: <FaCode size={80} />, label: "NEXT" },
    { icon: <FaTasks size={80} />, label: "SCRUM" },
    { icon: <FaDatabase size={80} />, label: "CRUD" },
    { icon: <FaNetworkWired size={80} />, label: "API REST" },
    { icon: <FaShieldAlt size={80} />, label: "JWT" },
    { icon: <FaFileCode size={80} />, label: "SWAGGER" },
    { icon: <FaPencilAlt size={80} />, label: "CRIATIVIDADE" }
];

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#0c4a6e_70%)] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4 text-sky-200'> Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[170px] md:w-[170px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                                {skill.icon}
                                <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills
