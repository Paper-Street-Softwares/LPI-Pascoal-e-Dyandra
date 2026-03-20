import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, UserCheck, Clock } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import { Check } from "lucide-react";
import content from "../../content/content.jsx";
import ButtonReflexo from "../interactives/ButtonReflexo.jsx";
import { defaultButtonThemes } from "../../context/UseContextArchive.jsx";
import MotionDivDownToUp from "../animation/MotionDivDownToUp.jsx";

export function Preference({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    textDestaque,
    bgCards,
    borderSVG,
    bgContainer;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      bgCards = "bg-white shadow";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-terciary";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-black";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-darkOpacity";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-destaque";
      bgCards = "bg-white shadow";
      borderSVG = "border-destaque";
      bgContainer = "bg-terciary";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-primaryLight";
      borderSVG = "border-primaryLight";
      bgContainer = "";
  }
  const differentials = Object.values(content.texts.preferences.cards);

  return (
    <SectionArea
      paddingtop={false}
      className={`py-24 relative overflow-hidden ${backgroundMode}`}
    >
      <SectionWrapper>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl ${bgContainer}`}
            >
              <div className="p-8 md:p-12 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-sm font-bold tracking-wides uppercase block font-secondFont text-destaque`}
                    >
                      {content.texts.preferences.miniTag}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-3xl md:text-4xl lg:text-5xl font-mainFont font-bold leading-tight ${text}`}
                    >
                      {content.texts.preferences.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-lg leading-relaxed border-l-2 ${borderSVG} font-secondFont pl-6 ${textOpacity}`}
                    >
                      {content.texts.preferences.subtitle}
                    </motion.p>
                  </div>

                  <div className="space-y-3">
                    {differentials.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-colors"
                      >
                        <div
                          className={`w-auto p-1 rounded-lg flex items-center justify-center ${bgCards} group-hover:scale-110 transition-transform text-black`}
                        >
                          <span>
                            {" "}
                            <item.icon className={`w-5 h-5 text-destaque`} />
                          </span>
                        </div>
                        <span
                          className={`font-medium text-sm font-secondFont ${textOpacity}`}
                        >
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <MotionDivDownToUp className={`flex justify-center w-full mt-10`}>
              <ButtonReflexo
                label="Falar agora com o escritório"
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
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
