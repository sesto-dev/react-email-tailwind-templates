import prisma from '@/lib/prisma'

import { UserForm } from './components/user-form'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { OrderColumn } from '../../orders/components/columns'
import { formatter } from '@/lib/utils'
import { format } from 'date-fns'
import { OrderClient } from '../../orders/components/client'

const UserPage = async ({ params }: { params: { userId: string } }) => {
   const user = await prisma.user.findUnique({
      where: {
         id: params.userId,
      },
      include: {
         addresses: true,
         payments: true,
         orders: {
            include: {
               orderItems: {
                  include: {
                     product: true,
                  },
               },
            },
         },
      },
   })

   function Orders() {
      const { orders } = user

      const formattedOrders: OrderColumn[] = orders.map((order) => ({
         id: order.id,
         number: `Order #${order.number}`,
         date: order.createdAt.toUTCString(),
         totalPrice: order.payable.toString(),
         isPaid: order.isPaid ? 'Yes.' : 'No.',
         createdAt: format(order.createdAt, 'MMMM do, yyyy'),
      }))

      return (
         <div className="block gap-2">
            <div className="grid w-full items-center gap-1.5">
               <Label htmlFor="name">Name</Label>
               <Input disabled id="name" value={user?.name} />
            </div>
            <div className="grid w-full items-center gap-1.5">
               <Label htmlFor="name">Email</Label>
               <Input disabled id="name" value={user?.email} />
            </div>
            <div className="grid w-full items-center gap-1.5">
               <Label htmlFor="phone">Phone</Label>
               <Input disabled id="phone" value={user?.phone} />
            </div>
            <div className="grid w-full items-center gap-1.5">
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                     <AccordionTrigger>
                        <div className="block">
                           <h2 className="text-lg text-left">Order Items</h2>
                           <p className="text-sm font-light text-foreground/70">
                              Items in this order.
                           </p>
                        </div>
                     </AccordionTrigger>
                     <AccordionContent>
                        <OrderClient data={formattedOrders} />
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>
         </div>
      )
   }

   function UserCard() {
      return (
         <Card className="my-4 p-2">
            <CardContent>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-2">
                     <AccordionTrigger>
                        <div className="block">
                           <h2 className="text-lg text-left">User</h2>
                           <p className="text-sm font-light text-foreground/70">
                              User in this order.
                           </p>
                        </div>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Orders />
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </CardContent>
         </Card>
      )
   }

   return (
      <div className="flex-col">
         <div className="flex-1 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem] pt-6 pb-12">
            <div className="flex items-center justify-between">
               <Heading
                  title="Order Data"
                  description="Items in this order and data about the user."
               />
            </div>
            <UserCard />
            <UserForm initialData={user} />
         </div>
      </div>
   )
}

export default UserPage
