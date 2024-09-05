import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { GeneralData } from "../interfaces/general";
import { MultilanguageData } from "../interfaces/multilanguage";

export interface ControllerState {
  general: GeneralData;
  multilanguage: MultilanguageData;
}

const useGeneralsController = ({
  general,
  multilanguage,
}: ControllerState): ControllerState => {
  const [generals, setGenerals] = useState({ general, multilanguage });

  return { general: generals.general, multilanguage: generals.multilanguage };
};

const initialState: ControllerState = {
  general: {
    id: 1,
    phone: "",
    schedule: "",
    address: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    map_url: "",
    frame_url: "",
    pixel_facebook: "",
    tag_manager: "",
    facebook_id: "",
    social_network: [],
    logo: {
      id: 27,
      name: "",
      alternativeText: "",
      caption: "",
      width: 0,
      height: 0,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
    },
  },
  multilanguage: {
    id: 22,
    lbl_btn_quote: "",
    lbl_btn_contact: "",
    lbl_read_more: "",
    lbl_send: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    lbl_see_services: "",
    menu: [],
    skills: [],
  },
};

const GeneralsContext =
  createContext<ReturnType<typeof useGeneralsController>>(initialState);

interface GeneralsProviderProps extends PropsWithChildren {
  generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
  children,
  generals,
}) => {
  return (
    <GeneralsContext.Provider value={useGeneralsController(generals)}>
      {children}
    </GeneralsContext.Provider>
  );
};

export const useGenerals = () => useContext(GeneralsContext);
