import { useState } from "react";
import { CONTACT } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconBlog, IconFacebook, IconGithub, IconLinkedIn, IconPin, IconSend, IconX } from "./Icons";

const FORMSUBMIT = `https://formsubmit.co/ajax/${CONTACT.email}`;

export default function Contact({ showToast }) {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [invalid, setInvalid] = useState({});
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setInvalid((inv) => ({ ...inv, [name]: false }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextInvalid = {};
    if (!form.name.trim()) nextInvalid.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextInvalid.email = true;
    }
    if (!form.message.trim()) nextInvalid.message = true;

    if (Object.keys(nextInvalid).length) {
      setInvalid(nextInvalid);
      showToast(t("contact.toastErr"));
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || `Portfolio — ${form.name.trim()}`,
          message: form.message.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("send failed");
      showToast(t("contact.toastSent"));
      setForm({ name: "", email: "", subject: "", message: "" });
      setInvalid({});
    } catch {
      // Fallback: mailto
      const composed =
        (form.subject.trim() ? `${form.subject.trim()}\n\n` : "") +
        form.message.trim() +
        `\n\n— ${form.name.trim()} (${form.email.trim()})`;
      const mailSubject = encodeURIComponent(
        form.subject.trim() || `Portfolio — ${form.name.trim()}`
      );
      const mailBody = encodeURIComponent(composed);
      window.location.href = `mailto:${CONTACT.email}?subject=${mailSubject}&body=${mailBody}`;
      showToast(
        lang === "fr"
          ? "Envoi direct indisponible — ouverture de votre messagerie."
          : "Direct send unavailable — opening your mail app."
      );
    } finally {
      setSending(false);
    }
  };

  const channels = [
    { href: `mailto:${CONTACT.email}`, label: "Email", value: CONTACT.email, Icon: IconSend },
    { href: CONTACT.linkedin, label: "LinkedIn", value: "@wabthomas", Icon: IconLinkedIn },
    { href: CONTACT.github, label: "GitHub", value: "@wabthomas", Icon: IconGithub },
    { href: CONTACT.twitter, label: "X / Twitter", value: "@thomaszawadi1", Icon: IconX },
    { href: CONTACT.facebook, label: "Facebook", value: "@thomaszawadi01", Icon: IconFacebook },
    { href: CONTACT.blog, labelKey: "contact.blog", value: "wab-infos.com", Icon: IconBlog },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("contact.eyebrow")}</p>
          <h2 className="section__title">{t("contact.title")}</h2>
          <p className="section__sub">{t("contact.sub")}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact__channels">
              {channels.map((ch) => (
                <a
                  key={ch.href}
                  href={ch.href}
                  target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={ch.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="channel"
                >
                  <div className="channel__icon" aria-hidden="true">
                    <ch.Icon size={18} />
                  </div>
                  <div>
                    <strong>{ch.labelKey ? t(ch.labelKey) : ch.label}</strong>
                    <span>{ch.value}</span>
                  </div>
                </a>
              ))}
              <div className="channel channel--static">
                <div className="channel__icon" aria-hidden="true"><IconPin /></div>
                <div>
                  <strong>{t("contact.location")}</strong>
                  <span>Goma, RDC</span>
                </div>
              </div>
              <a href="/cv-thomas-zawadi.pdf" className="btn btn--ghost btn--full" download>
                {t("contact.cv")}
              </a>
            </div>
          </Reveal>

          <Reveal as="form" className="contact__form" noValidate onSubmit={onSubmit}>
            <div className="form-row">
              <label className="form-field">
                <span>{t("contact.name")}</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.namePh")}
                  value={form.name}
                  onChange={onChange}
                  className={invalid.name ? "is-invalid" : ""}
                />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.emailPh")}
                  value={form.email}
                  onChange={onChange}
                  className={invalid.email ? "is-invalid" : ""}
                />
              </label>
            </div>
            <label className="form-field">
              <span>{t("contact.subject")}</span>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.subjectPh")}
                value={form.subject}
                onChange={onChange}
              />
            </label>
            <label className="form-field">
              <span>{t("contact.message")}</span>
              <textarea
                name="message"
                rows="5"
                required
                placeholder={t("contact.messagePh")}
                value={form.message}
                onChange={onChange}
                className={invalid.message ? "is-invalid" : ""}
              />
            </label>
            <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
              <span>{sending ? t("contact.sending") : t("contact.send")}</span>
              <IconSend />
            </button>
            <p className="form-note">{t("contact.note")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
