import React, { useEffect, useLayoutEffect } from 'react';
import { WhatsappIcon } from '../assets/icons';

export const StickyHeader = () => {
  const sendMessage = (val) => {
    let number = +919961555587;
    const message =
      'Hello there! I would like to enquire about the packages at your resort.';
    let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
  };

  return (
    <>
      <div onClick={sendMessage}>
        <WhatsappIcon />
      </div>
    </>
  );
};
