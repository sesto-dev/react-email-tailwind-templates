import Image from 'next/image'
import {
	Activity,
	Check,
	ChevronsUpDown,
	CircleIcon,
	CreditCard,
	DollarSign,
	Download,
	EyeIcon,
	Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/examples/dashboard/components/date-range-picker'
import { MainNav } from '@/examples/dashboard/components/main-nav'
import { Overview } from '@/examples/dashboard/components/overview'
import { RecentSales } from '@/examples/dashboard/components/recent-sales'
import { Search } from '@/examples/dashboard/components/search'
import TeamSwitcher from '@/examples/dashboard/components/team-switcher'
import { UserNav } from '@/examples/dashboard/components/user-nav'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TableDemo } from '@/components/examples/table/demo'

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useEffect, useState } from 'react'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import Meta from '@/components/Meta'
import { Progress } from '@/components/ui/progress'
import { getRandomIntInRange } from '@/lib/rng'

const frameworks = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
]

function Combobox() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value
						? frameworks.find(
								(framework) => framework.value === value
						  )?.label
						: 'Choose prompt...'}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command className="w-full">
					<CommandInput placeholder="Choose prompt..." />
					<CommandEmpty>No prompt found.</CommandEmpty>
					<CommandGroup className="w-full">
						{frameworks.map((framework) => (
							<CommandItem
								className="w-full"
								key={framework.value}
								onSelect={(currentValue) => {
									setValue(
										currentValue === value
											? ''
											: currentValue
									)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === framework.value
											? 'opacity-100'
											: 'opacity-0'
									)}
								/>
								{framework.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default function Page() {
	const TabItems = ['app', 'history', 'guide', 'gallery']
	const [progress, setProgress] = useState(0)
	const [loading, setLoading] = useState(false)

	function CallRender() {
		setLoading(true)

		setTimeout(() => {
			setProgress((progress) => progress + 15)
		}, getRandomIntInRange(1000, 10000))

		setTimeout(() => {
			setProgress((progress) => progress + 25)
		}, getRandomIntInRange(1000, 10000))

		setTimeout(() => {
			setProgress((progress) => progress + 5)
		}, getRandomIntInRange(1000, 10000))

		setTimeout(() => {
			setProgress((progress) => progress + 55)
		}, getRandomIntInRange(1000, 10000))

		setLoading(false)
	}

	function OutputColumn() {
		return (
			<div className="col-span-1 w-full ">
				<Card className="w-full ">
					<CardHeader className="w-full ">
						<CardTitle>Ouput Image</CardTitle>
						<CardDescription>
							Resulting Image from your prompt.
						</CardDescription>
					</CardHeader>
					<CardContent className="w-full ">
						<div className="bg-neutral-300">
							<Progress value={progress} />
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<div className=""></div>
						<Button disabled size="sm">
							<Download className="mr-2 h-4 w-4" />
							Download Image
						</Button>
					</CardFooter>
				</Card>
			</div>
		)
	}

	function InputColumn() {
		return (
			<div className="col-span-1">
				<Card className="w-full">
					<CardHeader className="w-full">
						<CardTitle>Input Prompt</CardTitle>
						<CardDescription>
							Deploy your new project in one-click.
						</CardDescription>
					</CardHeader>
					<CardContent className="w-full">
						<form>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="name">Prompt</Label>
									<Combobox />
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex justify-between">
						<div />
						<Button disabled={loading} onClick={CallRender}>
							{loading ? (
								<>
									<CircleIcon className="mr-2 h-4 w-4 animate-spin" />
									Loading...
								</>
							) : (
								<>
									<EyeIcon className="mr-2 h-4 w-4 " />
									Render
								</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</div>
		)
	}

	return (
		<div className="flex-col flex">
			<Meta />
			<div className="flex-1 space-y-4 p-8 pt-6">
				<nav className="block" aria-label="Breadcrumb">
					<h1 className="font-semibold text-xl">Text to Image</h1>
					<p className="text-sm">
						Convert your text prompt to a beautiful image.
					</p>
				</nav>
				<Tabs defaultValue={TabItems[0]} className="space-y-4">
					<TabsList>
						{TabItems.map((TabItem) => (
							<TabsTrigger value={TabItem}>
								{capitalizeFirstLetter(TabItem)}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="app" className="space-y-4 ">
						<div className="grid gap-4 grid-cols-2 ">
							<InputColumn />
							<OutputColumn />
						</div>
					</TabsContent>
					<TabsContent value="history" className="space-y-4 ">
						<div className="grid gap-4 grid-cols-2 ">
							<TableDemo />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
