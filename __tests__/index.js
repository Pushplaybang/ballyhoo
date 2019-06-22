import Ballyhoo from '../src';

let events = null;

beforeEach(() => {
  events = new Ballyhoo();
});

it('should create a new instance of Ballyhoo', () => {
  expect(events).toBeInstanceOf(Ballyhoo);
});

it('should register a topic', () => {
  events.on('test/event', () => {});

  const topics = Object.keys(events.topics);
  expect(topics).toHaveLength(1);
});

it('should create multiple handlers for a topic', () => {
  events.on('test/event', () => {});
  events.on('test/event', () => {});
  events.on('test/event', () => {});

  expect(events.topics['test/event']).toHaveLength(3);
});


it('should provide a remove handler', () => {
  const event = events.on('test/event', () => {});

  const topics = Object.keys(events.topics);
  expect(topics).toHaveLength(1);

  expect(event).toHaveProperty('remove');
  expect(typeof event.remove).toBe('function');

  event.remove();
  expect(events.topics['test/event']).toHaveLength(0);
});

it('should call handlers on emit', () => {
  let count = 0;

  events.on('test/event', () => {
    count += 1;
  });

  events.emit('test/event');
  events.emit('test/event');
  events.emit('test/event');

  expect(count).toBe(3);
});

it('parses values to handlers', () => {
  let result = null;

  const testData = { text: 'hi', number: 123, };
  events.on('test/event', (data) => {
    result = data;
  });

  events.emit('test/event', testData);

  expect(result.text).toBe(testData.text);
  expect(result.number).toBe(testData.number);
});


it('does nothing when we emit a non-existent topic', () => {
  let result = null;

  const testData = { text: 'hi', number: 123, };
  events.on('test/event', (data) => {
    result = data;
  });

  const instance = events.emit('test/wrong', testData);

  expect(instance).toBeInstanceOf(Ballyhoo);
});
