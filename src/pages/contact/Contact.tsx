import React, { useEffect, useRef } from "react";

// stylesheet
import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const tel = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const street = useRef<HTMLInputElement | null>(null);
  const city = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // eslint-disable-next-line
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM__SUBMITTED!");
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.contact__info}>
        <h1>{t("contact.need_help")}</h1>
        <h4>{t("contact.leave_message")}</h4>
      </div>

      <div className={styles.form}>
        <h2>{t("contact.here4u")}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__control}>
            <h4>{t("contact.title")}</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="title" value="Ms." />
                <span>{t("contact.ms")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="title" value="Mr." />
                <span>{t("contact.mr")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="title" value="N/A." />
                <span>{t("contact.na")}</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.fname")}</h4>
            <input
              ref={firstName}
              type="text"
              placeholder={t("contact.fname")}
              name="firstName"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.lname")}</h4>
            <input
              ref={lastName}
              type="text"
              placeholder={t("contact.lname")}
              name="lastName"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.street")}</h4>
            <input
              ref={street}
              type="text"
              placeholder={t("contact.street")}
              name="street"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.city")}</h4>
            <input
              ref={city}
              type="text"
              placeholder={t("contact.city")}
              name="city"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.country")}</h4>
            <input
              ref={country}
              type="text"
              placeholder={t("contact.country")}
              name="country"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.email")}</h4>
            <input
              ref={email}
              type="email"
              placeholder={`${t("contact.email")} ${t("contact.address")}`}
              name="email"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Tel</h4>
            <input
              ref={tel}
              type="number"
              placeholder={t("contact.tel")}
              name="tel"
            />
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.your_message")}</h4>
            <textarea
              ref={message}
              placeholder={t("contact.your_message")}
              name="message"
              id="message"
              cols={30}
              rows={5}
            ></textarea>
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.please_send")}</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="program" value="HND" />
                <span>{t("contact.hnd")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Master" />
                <span>{t("contact.masters")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Bachelor" />
                <span>{t("contact.bachelors")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Preparation" />
                <span>{t("contact.preparation")}</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <h4>{t("contact.hdu")}</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Social Media" />
                <span>{t("contact.media")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Internet Search" />
                <span>{t("contact.internet")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Family or Friend" />
                <span>{t("contact.ff")}</span>
              </div>
              <div className={styles.radio}>
                <input
                  type="radio"
                  name="medium"
                  value="SLUI Student of Alumni"
                />
                <span>{t("contact.alumni")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Agent" />
                <span>{t("contact.agent")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="SLUI Presentations" />
                <span>{t("contact.presentations")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="TV" />
                <span>{t("contact.tv")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Radio Announcement" />
                <span>{t("contact.radio")}</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Flyer or Banner" />
                <span>{t("contact.flyer")}</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <button type="submit">{t("contact.submit")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
