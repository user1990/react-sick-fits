import casual from 'casual';

// seed it so we get consistent results
casual.seed(777);

interface FakeItem {
  __typename: string;
  id: string;
  price: number;
  user: null;
  image: string;
  title: string;
  description: string;
  largeImage: string;
}

interface FakeUser {
  __typename: string;
  id: string;
  name: string;
  email: string;
  permissions: string[];
  orders: {};
  cart: {};
}

interface FakeOrderItem {
  __typename: string;
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
}

interface FakeCartItem {
  __typename: string;
  id: string;
  quantity: number;
  item: FakeItem;
  user: FakeUser;
}

interface LocalStorage {
  store: {};
  clear: () => void;
  getItem: (key: string) => void;
  setItem: (key: string, value: {}) => void;
  removeItem: (key: string) => void;
}

const fakeItem = (): FakeItem => ({
  __typename: 'Item',
  id: 'abc123',
  price: 5000,
  user: null,
  image: 'dog-small.jpg',
  title: 'dogs are best',
  description: 'dogs',
  largeImage: '() => void;dog.jpg',
});

const fakeUser = (): FakeUser => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
});

const fakeOrderItem = (): FakeOrderItem => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: `${casual.word}.jpg`,
  title: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2018-04 - 06T19: 24: 16.000Z',
  user: fakeUser(),
});

const fakeCartItem = (overrides: {}): FakeCartItem => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  item: fakeItem(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock implements LocalStorage {
  store: { [key: string]: any } = {};

  constructor() {
    this.store = {};
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): { [key: string]: {} } {
    return this.store[key] || null;
  }

  setItem(key: string, value: any) {
    this.store[key] = value.toString();
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

export {
  LocalStorageMock,
  fakeItem,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
};
