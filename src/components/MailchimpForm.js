import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = 'https://us18.list-manage.com/contact-form?u=8d8be1ba76881ac5b37683700&form_id=146a8471860d6671b94b3164a9d4a04f';

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}