import { InputForm, MetaSEO, Picture } from "./shared";

export interface Contact {
  data: ContactData;
}

export interface ContactData {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  messages: Messages;
  contact_card: ContactCards[];
  form: Form;
  Seo: MetaSEO;
}

export interface Messages {
  invalid_tel: string;
  invalid_name: string;
  mail_sent_ok: string;
  invalid_email: string;
  invalid_number: string;
  invalid_required: string;
  validation_error: string;
  invalid_recaptcha: string;
}

export interface ContactCards {
  id: number;
  title: string;
  text: string;
  image: Picture;
}

export interface Form {
  id: number;
  name: InputForm;
  email: InputForm;
  phone: InputForm;
  service: InputForm;
  message: InputForm;
}
