import { Metadata } from 'next'
import {
	ActivityIcon,
	CreditCardIcon,
	DollarSignIcon,
	Download,
	UsersIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/examples/dashboard/components/date-range-picker'
import { RecentSales } from '@/examples/dashboard/components/recent-sales'
import { useState } from 'react'
import DragAndDrop from '@/components/DragAndDrop'

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Example dashboard app using the components.',
}

export default function DashboardPage() {
	const SmallCards = [
		{
			Title: 'Revenue',
			Icon: DollarSignIcon,
			Description: '$45,231.89',
			Subtitle: '+20.1% from last month',
		},
		{
			Title: 'Subscriptions',
			Icon: UsersIcon,
			Description: '+2350',
			Subtitle: '+180.1% from last month',
		},
		{
			Title: 'Sales',
			Icon: CreditCardIcon,
			Description: '+12,234',
			Subtitle: '+19% from last month',
		},
		{
			Title: 'Active',
			Icon: ActivityIcon,
			Description: '+573',
			Subtitle: '+201 since last hour',
		},
	]

	const [cards, setCards] = useState(SmallCards)

	function Overview() {
		return (
			<>
				<div className="characters flex gap-4 w-full">
					{cards.map(
						({ Title, Icon, Description, Subtitle }, index) => (
							<Card key={Title}>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										{Title}
									</CardTitle>
									<Icon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">
										{Description}
									</div>
									<p className="text-xs text-muted-foreground">
										{Subtitle}
									</p>
								</CardContent>
							</Card>
						)
					)}
				</div>
				<div className="flex gap-4 w-full">
					<Card className="col-span-4">
						<CardHeader>
							<CardTitle>Overview</CardTitle>
						</CardHeader>
						<CardContent className="pl-2">
							<Overview />
						</CardContent>
					</Card>
					<Card className="col-span-3">
						<CardHeader>
							<CardTitle>Recent Sales</CardTitle>
							<CardDescription>
								You made 265 sales this month.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RecentSales />
						</CardContent>
					</Card>
				</div>
			</>
		)
	}

	return (
		<div className="h-full space-y-4 p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<div className="flex items-center space-x-2">
					<CalendarDateRangePicker />
					<Button size="sm">
						<Download className="mr-2 h-4 w-4" />
						Download
					</Button>
				</div>
			</div>
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="reports">Reports</TabsTrigger>
					<TabsTrigger value="notifications">
						Notifications
					</TabsTrigger>
				</TabsList>
				<TabsContent value="overview" className="space-y-4">
					<Overview />
				</TabsContent>
				<TabsContent
					value="analytics"
					className="space-y-4"
				></TabsContent>
			</Tabs>
		</div>
	)
}
