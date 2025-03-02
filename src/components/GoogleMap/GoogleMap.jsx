import React from "react";
import s from './GoogleMap.module.scss'

const GoogleMap = () => {
  return (
    <>
      <div className="container">

        <iframe className={s.googlemap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.7639244264335!2d69.28401786322391!3d41.31673438085235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5200a480655%3A0xeabc5e2bd1cdaae9!2sIT-Academy!5e0!3m2!1sru!2s!4v1738945019594!5m2!1sru!2s"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - IT-Academy"
        ></iframe>
      </div>
      </>
  );
};

export default GoogleMap;
