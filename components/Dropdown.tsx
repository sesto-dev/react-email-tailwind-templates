import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronRight, Check, User, Moon, Sun, Monitor } from 'react-feather'
import { useTheme } from 'next-themes'
useTheme

export default function Dropdown() {
    const { resolvedTheme, setTheme } = useTheme()

    const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
    const [urlsChecked, setUrlsChecked] = React.useState(false)
    const [person, setPerson] = React.useState('pedro')

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className={[
                        'transition-colors duration-200',
                        'flex h-10 w-10 items-center justify-center rounded', // Layout
                        'bg-scale-200 hover:bg-scale-500 text-scale-900 hover:text-scale-1200 hover:cursor-pointer ',
                    ].join(' ')}
                >
                    <User size={18} strokeWidth={2} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="DropdownMenuContent dark:bg-red-500"
                    side="right"
                >
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                            Theme
                            <div className="RightSlot">
                                <ChevronRight size={18} strokeWidth={2} />
                            </div>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <DropdownMenu.Item
                                    className="DropdownMenuItem"
                                    onClick={() => setTheme('dark')}
                                >
                                    Dark Theme
                                    <div className="RightSlot">
                                        <Moon size={16} strokeWidth={2} />
                                    </div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    className="DropdownMenuItem"
                                    onClick={() => setTheme('light')}
                                >
                                    Light Theme
                                    <div className="RightSlot">
                                        <Sun size={16} strokeWidth={2} />
                                    </div>
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={bookmarksChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            <Check size={18} strokeWidth={2} />
                        </DropdownMenu.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
                    </DropdownMenu.CheckboxItem>
                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={urlsChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            <Check size={18} strokeWidth={2} />
                        </DropdownMenu.ItemIndicator>
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Label className="DropdownMenuLabel">
                        People
                    </DropdownMenu.Label>
                    <DropdownMenu.RadioGroup
                        value={person}
                        onValueChange={setPerson}
                    >
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="pedro"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <User size={18} strokeWidth={2} />
                            </DropdownMenu.ItemIndicator>
                            Pedro Duarte
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="colm"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <User size={18} strokeWidth={2} />
                            </DropdownMenu.ItemIndicator>
                            Colm Tuite
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>

                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
