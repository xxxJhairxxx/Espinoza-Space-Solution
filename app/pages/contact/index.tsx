import style from "./style.module.css";
import ContactForm from "@/components/molecules/ContactForm";
import { Contact, ContactData } from "@/interfaces/contact";
import { Home, HomeData } from "@/interfaces/home";
import { baseApi } from "@/lib";
import { GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BreadCumb from "@/components/molecules/BreadCumb";
import { SeoEngine } from "@/components/globals/SeoEngine";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactCard from "@/components/molecules/ContactCad";
import { getGenerals } from "@/lib/getGenerals";
import { useEffect } from "react";
import { useNavbarContext } from "@/context/navbar.context";

interface ContactProps {
  contact: ContactData;
  home: HomeData;
}

export default function Index({ contact, home }: ContactProps) {
  const { setActiveSection } = useNavbarContext();

  useEffect(() => setActiveSection("/"), []);

  const arrays = home.home_services.service_card.map((serv) => serv.title);

  const list = [].concat(...(arrays as any));
  const breadCumbMenu = [
    {
      label: contact.subtitle,
      url: "/",
    },
  ];

  return (
    <main className={`main-page ${style.contact}`}>
      <BreadCumb
        breadCumbMenu={breadCumbMenu}
        className="breadCumbMenu"
      ></BreadCumb>
      <div className={style.contact__ctn_text}>
        <div className={style.contact__ctn_text__title}>
          <SectionTitle
            className={style.contact__ctn_text__title_first}
            title={contact.title}
            subtitle={contact.subtitle}
          />
          <ReactMarkdown className={style.contact__ctn__title__p}>
            {contact.text}
          </ReactMarkdown>
        </div>
        <div className={style.contact__ctn_text_cards}>
          {contact.contact_card.map(({ image, title, text }, index) => (
            <ContactCard
              key={index}
              title={title}
              image={image}
              text={text}
            ></ContactCard>
          ))}
        </div>
      </div>
      <div className={style.contact__ctn_form}>
        <ContactForm
          form={contact.form}
          messages={contact.messages}
          services={list}
        ></ContactForm>
      </div>

      <SeoEngine seo={contact.Seo} />
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: contactData }, { data: home }] = await Promise.all([
    baseApi.get<Contact>(`/contact?populate=deep`),
    baseApi.get<Home>("/home?populate=deep"),
  ]);
  return {
    props: {
      contact: contactData.data,
      home: home.data,
      generals,
    },
    revalidate: 1,
  };
};
