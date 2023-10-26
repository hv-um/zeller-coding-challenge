import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import * as ReactQuery from 'react-query';

const MockData = {
  listZellerCustomers: {
    items: [
      {
        email: "test@test.com",
        id: 1234,
        name: "Perri Smith",
        role: "Admin"
      },
      {
        email: "test2@test.com",
        id: 4321,
        name: "Terri Smith",
        role: "Manager"
      }
    ]
  }
}

const queryClient = new ReactQuery.QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <ReactQuery.QueryClientProvider client={queryClient}>{children}</ReactQuery.QueryClientProvider>
  // <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);


test('renders loading.. text', () => {
  jest
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(
      jest
        .fn()
        .mockReturnValue({ data: null, isLoading: true, isSuccess: false })
    )
  render(<App />, { wrapper });

  const textElement = screen.getByText(/Loading/i);
  expect(textElement).toBeInTheDocument();
});

test('renders expected text content on load', async () => {
  jest
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(
      jest
        .fn()
        .mockReturnValue({ data: { ...MockData }, isLoading: false, isSuccess: true })
    )
  render(<App />, { wrapper });

  await screen.findByText(/Admin Users/i);
});

test('updates content on input select', async () => {
  jest
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(
      jest
        .fn()
        .mockReturnValue({ data: { ...MockData }, isLoading: false, isSuccess: true })
    )
  render(<App />, { wrapper });

  const radio = screen.getByRole("radio", { checked: false });
  fireEvent.click(radio);

  await screen.findByText(/Manager users/i);
});

afterEach(() => {
  jest.clearAllMocks();
});