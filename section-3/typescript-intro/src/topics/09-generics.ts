

export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType("Hello");
const amINumber = whatsMyType(1);
const amIBoolean = whatsMyType(true);
