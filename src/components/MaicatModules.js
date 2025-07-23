import React, { useState } from "react";
import maicatModulesData from "../data/maicatModulesData";
import MaicatModuleCard from "./MaicatModuleCard";
import MaicatModuleModal from "./MaicatModuleModal";

const MaicatModules = () => {
  const [openId, setOpenId] = useState(null);
  const openModule = (id) => setOpenId(id);
  const closeModule = () => setOpenId(null);
  const activeModule = maicatModulesData.find((m) => m.id === openId);

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">MAICAT Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {maicatModulesData.map((module) => (
            <MaicatModuleCard
              key={module.id}
              title={module.title}
              image={module.image}
              onOpen={() => openModule(module.id)}
            />
          ))}
        </div>
      </div>
      <MaicatModuleModal
        isOpen={!!activeModule}
        onClose={closeModule}
        title={activeModule?.title}
        pdf={activeModule?.pdf}
      />
    </section>
  );
};

export default MaicatModules; 