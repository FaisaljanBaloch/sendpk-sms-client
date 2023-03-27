"use strict";
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));

/**
 * Create a client for send.pk API
 *
 * @param apiKey -
 *          The apiKey used for authentication. This is normally a unique token, generated by the API provider and associated with your account.
 * @param sender -
 *          The sender name is used to send sms on behalf of your company or brand. It can be a maximum of 11 characters.
 */
module.exports = class SMSClient {
  #apiKey = "";
  #sender = "";

  set apiKey(apiKey) {
    this.#apiKey = apiKey;
  }

  get apiKey() {
    return this.#apiKey;
  }

  set sender(sender) {
    this.#sender = sender;
  }

  get sender() {
    return this.#sender;
  }

  constructor(apiKey, sender) {
    this.#apiKey = apiKey;
    this.#sender = sender;
  }

  /**
   * Create a client for send.pk API
   *
   * @param mobile -
   *          The mobile used to send sms on this mobile number.
   * @param message -
   *          The message is sent on the mobile number.
   *
   * @returns A response that contains:
   *    - An success object
   *    - An error object
   */
  async sendSMS(mobile, message) {
    if (!this.apiKey === "" || !this.sender === "") {
      throw new Error("API Key and Sender are required");
    }

    if (!mobile) {
      throw new Error("Mobile number is required");
    }

    if (!message) {
      throw new Error("Message is required");
    }

    try {
      const url = `https://sendpk.com/api/sms.php?api_key=${this.apiKey}&sender=${this.sender}&mobile=${mobile}&message=${message}&format=json`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
};