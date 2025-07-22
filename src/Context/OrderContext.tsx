import React, { useState, createContext } from "react"

export interface OrderType {
  id: number
  name: string
  address: string
  phone: string
  email: string
  comment: string
  paymentMethod: string
}
interface OrderContext {
    orders:OrderType [];
    addOrder:(order:OrderType ) => void;
    deleteOrder: (id: number) => void;
}
const defaultContext: OrderContext = {
  orders: [],
  addOrder: () => {},
  deleteOrder: () => {}
};

export const OrderContext = createContext<OrderContext>(defaultContext)

const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<OrderType []>([]);

  const addOrder = (newOrder: OrderType ) => {
    setOrders((prev) => [...prev, newOrder]);
  };

  const deleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider