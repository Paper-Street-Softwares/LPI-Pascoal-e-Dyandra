import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { X, Facebook, Twitter, Instagram } from "lucide-react"; // Adicionado ícones sociais
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import { defaultButtonThemes } from "../../context/UseContextArchive";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function TeamSectionNew({ colorMode }) {
  const [visible, setVisible] = useState(false);

  // Mapeamento de estilos baseado no seu switch original
  const styles = {
    light: {
      background: "bg-transparent]", // Cinza claro como no fundo da imagem
      textTitle: "text-corTitulosPreto", // Laranja da imagem
      cardBg: "bg-white",
      nameText: "text-gray-800",
      roleText: "text-gray-900 font-bold",
      descText: "text-gray-600",
      imgBorder: "border-[6px] border-primaryLight", // Tom pêssego da imagem
    },
    dark: {
      background: "bg-darkOpacity",
      textTitle: "text-primaryLight",
      cardBg: "bg-gray-800/40",
      nameText: "text-white",
      roleText: "text-primaryLight font-bold",
      descText: "text-gray-300",
      imgBorder: "border-[6px] border-borderImage",
    },
    defaultDark: {
      background: "bg-transparent", // Cinza claro como no fundo da imagem
      textTitle: "text-corTitulosPreto", // Laranja da imagem
      cardBg: "bg-white",
      nameText: "text-gray-800",
      roleText: "text-destaque font-bold",
      descText: "text-gray-600",
      imgBorder: "border-[4px] border-destaque", // Tom pêssego da imagem
    },
  };

  const mode = styles[colorMode] || styles.light;

  // Transformando o objeto de cards do seu 'content' em um array para o map
  const teamMembers = Object.values(content.texts.team.cards);

  return (
    <SectionArea id="about" className={`${mode.background} py-20`}>
      <SectionWrapper>
        {/* Header da Seção */}
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          colorMode={colorMode}
        />

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 tablet2:grid-cols-2 max-w-[400px] tablet2:max-w-[700px] desktop1:max-w-[800px] gap-6 font-secondFont">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${mode.cardBg} rounded-xl p-8 flex flex-col items-center text-center transition-all `}
            >
              {/* Avatar Circular */}
              <div
                className={`relative w-40 h-40 mb-6 rounded-full overflow-hidden ${mode.imgBorder}`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span
                className={`text-xs uppercase tracking-widest ${mode.roleText}`}
              >
                {member.role}
              </span>

              {/* Informações */}
              <h3 className={`text-xl font-bold mb-4 ${mode.nameText}`}>
                {member.name}
              </h3>

              <p
                className={`text-sm italic mb-6 leading-relaxed ${mode.descText} font-serif`}
              >
                "
                {member.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                "
              </p>

              {/* Redes Sociais */}
              {/* <div className="flex gap-4 mt-auto text-gray-800">
                <Facebook
                  size={18}
                  className="cursor-pointer hover:text-orange-500 transition-colors"
                />
                <Twitter
                  size={18}
                  className="cursor-pointer hover:text-orange-500 transition-colors"
                />
                <Instagram
                  size={18}
                  className="cursor-pointer hover:text-orange-500 transition-colors"
                />
              </div> */}
            </motion.div>
          ))}
        </div>
        <MotionDivDownToUp className={`flex justify-center w-full mt-10`}>
          <ButtonReflexo
            label="Agende seu atendimento"
            icon={content.texts.svgs.wpp}
            link={content.texts.links.ctaWhatsapp}
            className={`clickevent`}
            bgClass={
              colorMode === "defaultDark" || colorMode === "light"
                ? defaultButtonThemes.light
                : defaultButtonThemes.dark
            }
          />
        </MotionDivDownToUp>

        {/* Modal (Mantido da sua estrutura) */}
        <Dialog
          className="font-secondFont bg-white p-4 rounded-md"
          closeIcon={<X size={20} />}
          header={
            <span className="font-mainFont px-4">
              {content.texts.about.titleModal}
            </span>
          }
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{ "1024px": "641px", "641px": "90vw" }}
        />
      </SectionWrapper>
    </SectionArea>
  );
}

export default TeamSectionNew;
