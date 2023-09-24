import '../src/styles/globals.css'
import {
   Body,
   Button,
   Column,
   Container,
   Head,
   Heading,
   Hr,
   Html,
   Img,
   Link,
   Preview,
   Row,
   Section,
   Tailwind,
   Text,
} from '@react-email/components'
import React from 'react'

const order = {
   orderId: '123456789',
   orderDate: '2023-09-14',
   billingInfo: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      email: 'john.doe@example.com',
   },
   shippingInfo: {
      name: 'Jane Smith',
      address: '456 Elm Street',
      city: 'Another Town',
      state: 'NY',
      zipCode: '67890',
   },
   items: [
      {
         productName: 'Product 1',
         quantity: 2,
         price: 25.99,
      },
      {
         productName: 'Product 2',
         quantity: 1,
         price: 49.99,
      },
      {
         productName: 'Product 3',
         quantity: 3,
         price: 15.0,
      },
      {
         productName: 'Product 4',
         quantity: 4,
         price: 10.5,
      },
      {
         productName: 'Product 5',
         quantity: 2,
         price: 34.99,
      },
      {
         productName: 'Product 6',
         quantity: 1,
         price: 19.99,
      },
      {
         productName: 'Product 7',
         quantity: 2,
         price: 29.95,
      },
      {
         productName: 'Product 8',
         quantity: 3,
         price: 12.75,
      },
      {
         productName: 'Product 9',
         quantity: 1,
         price: 59.0,
      },
      {
         productName: 'Product 10',
         quantity: 2,
         price: 44.5,
      },
   ],
   totalAmount: 0, // You can calculate the total amount based on the item prices and quantities in your code.
}

const OrderInvoiceEmail = () => {
   const previewText = `Verify your email.`

   return (
      <Html>
         <Head />
         <Preview>{previewText}</Preview>
         <Tailwind>
            <Body className="my-auto mx-auto w-full max-w-lg">
               <Container className="border border-solid border-neutral-500/25 rounded mx-auto p-6">
                  <h1 className="text-2xl font-semibold mb-4">Order Invoice</h1>
                  <div className="flex justify-between mb-4">
                     <div>
                        <h2 className="text-lg font-semibold">Order ID</h2>
                        <p>{order.orderId}</p>
                     </div>
                     <div>
                        <h2 className="text-lg font-semibold">Order Date</h2>
                        <p>{order.orderDate}</p>
                     </div>
                  </div>

                  <div className="mb-4">
                     <h2 className="text-lg font-semibold">
                        Billing Information
                     </h2>
                     <p>{order.billingInfo.name}</p>
                     <p>{order.billingInfo.address}</p>
                     <p>
                        {order.billingInfo.city}, {order.billingInfo.state},{' '}
                        {order.billingInfo.zipCode}
                     </p>
                     <p>{order.billingInfo.email}</p>
                  </div>

                  <div className="mb-4">
                     <h2 className="text-lg font-semibold">
                        Shipping Information
                     </h2>
                     <p>{order.shippingInfo.name}</p>
                     <p>{order.shippingInfo.address}</p>
                     <p>
                        {order.shippingInfo.city}, {order.shippingInfo.state},{' '}
                        {order.shippingInfo.zipCode}
                     </p>
                  </div>

                  <div>
                     <h2 className="text-lg font-semibold">Order Summary</h2>
                     <table className="w-full mt-2">
                        <thead className="text-left">
                           <tr>
                              <th className="py-2">Product</th>
                              <th className="py-2">Quantity</th>
                              <th className="py-2">Price</th>
                              <th className="py-2">Total</th>
                           </tr>
                        </thead>
                        <tbody>
                           {order.items.map((item, index) => (
                              <tr key={index}>
                                 <td className="py-2">{item.productName}</td>
                                 <td className="py-2">{item.quantity}</td>
                                 <td className="py-2">
                                    ${item.price.toFixed(2)}
                                 </td>
                                 <td className="py-2">
                                    ${(item.quantity * item.price).toFixed(2)}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     <div className="mt-4">
                        <p className="text-lg font-semibold">
                           Total Amount: ${order.totalAmount.toFixed(2)}
                        </p>
                     </div>
                  </div>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   )
}

export default OrderInvoiceEmail
