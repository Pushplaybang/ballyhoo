
/**
 * @summary Ballyhoo - based on https://davidwalsh.name/pubsub-javascrip
 */
export default class Ballyhoo {
  constructor() {
    this.topics = {};
    this.hop = this.topics.hasOwnProperty;
  }

  /**
   * @summary Subscribe to a specific topic
   * @locus Anywhere
   * @param {String} [topic] the topic we're subscribing to
   * @param {Function} [handler] the handler to run
   */
  on(topic, handler) {
    // Create the topic's object if not yet created
    if (!this.hop.call(this.topics, topic)) {
      this.topics[topic] = [];
    }

    // Add the handler to queue
    const index = this.topics[topic].push(handler) - 1;

    // Provide handle back for removal of topic
    return {
      remove: () => {
        this.topics[topic].splice(index, 1);
      },
    };
  }

  /**
   * @summary publish a specific topic
   * @locus Anywhere
   * @param {String} [topic] the topic we're publishing
   * @param {Object} [data] data to pass to the handler
   */
  emit(topic, data = {}) {
    if (!this.hop.call(this.topics, topic)) {
      return this;
    }

    // Cycle through this.topics queue & fire!
    return this.topics[topic].forEach(item => item(data));
  }
}
