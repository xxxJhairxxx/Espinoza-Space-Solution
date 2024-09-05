import React, { useEffect, useRef } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { useForm } from "@/hooks";
import { useNavbarContext } from "@/context/navbar.context";
import { Loader } from "../atoms/Loader";
import { Form, Messages } from "@/interfaces/contact";
import Submit from "../atoms/Submit";
import { useGenerals } from "@/context/generals.context";

interface ContactFormProps {
  form: Form;
  messages: Messages;
  services: any[];
}

function MejorarText(text: string): string {
  const ogTitle = text.split("/");
  const upperText = ogTitle[0].toLowerCase();

  const capitalizedText = upperText[0].toUpperCase() + upperText.slice(1);
  return capitalizedText;
}

export default function ContactForm({
  form,
  messages,
  services,
}: ContactFormProps) {
  const { serviceSelected } = useNavbarContext();
  const { name, email, phone, service, message } = form;

  const captchaRef = useRef<ReCAPTCHAType>(null);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string;

  const {
    failure,
    sending,
    errors,
    formState,
    responseMessage,
    validateInput,
    validateSelect,
    handleInput,
    handleSubmit,
    setFormState,
    phoneRef,
    phoneNumberFormatter,
  } = useForm(messages, "/ezforms/submit", captchaRef);

  const onChangeRecaptcha = () => {
    if (captchaRef.current?.getValue()) {
      setFormState({
        ...formState,
        captcha: captchaRef.current?.getValue() as string,
      });
    }
  };

  const { multilanguage } = useGenerals();

  useEffect(() => {
    setFormState((prevState) => {
      return { ...prevState, service: serviceSelected };
    });
  }, [setFormState, serviceSelected]);

  return (
    <form onSubmit={handleSubmit} className="contactFormCont">
      <div className="contactFormCont__InputArea">
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={name.label}
            id={name.name}
            name={name.name}
            value={formState.name}
          />
          {errors.name && <span className="Form-error">{errors.name}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={email.label}
            id={email.name}
            name={email.name}
            value={formState.email}
          />
          {errors.email && <span className="Form-error">{errors.email}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <input
            type="text"
            onInput={validateInput}
            placeholder={phone.label}
            id={phone.name}
            ref={phoneRef}
            onKeyDown={phoneNumberFormatter}
            name={phone.name}
            value={formState.phone}
          />

          {errors.phone && <span className="Form-error">{errors.phone}</span>}
        </div>
        <div className="contactFormCont__InputArea__item">
          <div className="select-service">
            <select
              id={service.name}
              onInput={validateSelect}
              name="service"
              value={formState.service}
              placeholder={service.label}
            >
              <option value="" disabled>
                {service.label}
              </option>
              {services.map((item, index) => (
                <option className="" key={index}>
                  {MejorarText(item)}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="Form-error">{errors.service}</span>
            )}
          </div>
        </div>
      </div>

      <div className="contactFormCont__TextArea">
        <textarea
          value={formState.message}
          id={message.name}
          onInput={handleInput}
          name={message.name}
          placeholder={message.label}
        ></textarea>
      </div>

      <div className="mt-2 ">
        <ReCAPTCHA
          sitekey={captchaKey}
          onChange={onChangeRecaptcha}
          ref={captchaRef}
        />
        {errors.captcha && <p className="Form-error">{errors.captcha}</p>}
      </div>

      <div className="ButtonArea">
        <Submit className="ButtonArea_send" text={multilanguage.lbl_send} />
        {sending && <Loader />}
      </div>

      <div className="messages">
        {responseMessage && (
          <span
            className={`feedback-message block pt-10  init ${
              failure && "failure"
            }`}
          >
            {responseMessage}
          </span>
        )}
      </div>
    </form>
  );
}
